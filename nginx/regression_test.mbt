///|
fn target(
  uri~ : String = "/admin/probe.txt",
  host~ : String = "example.test",
  port~ : Int32 = 80,
) -> @nginx.RequestTarget {
  { host, uri, port, local_address: "127.0.0.1", }
}

///|
fn resolving_error(text : String, request : @nginx.RequestTarget) -> String {
  match fixture(text).resolve(request) {
    Ok(_) => "success"
    Err(error) => error.code
  }
}

///|
test "request selection is independent of context ordinal and uses longest literal prefix" {
  let analysis = fixture(
    "http { server { server_name other.test; deny all; } server { server_name EXAMPLE.test; location /admin/ { deny all; } location / { allow all; } location = /admin/health { allow all; } } }",
  )
  assert_eq(analysis.resolve(target()).unwrap().label, "location /admin/")
  assert_eq(
    analysis.resolve(target(uri="/admin/health")).unwrap().label,
    "location = /admin/health",
  )
  assert_eq(
    analysis.resolve(target(uri="/public/a")).unwrap().label,
    "location /",
  )
  assert_eq(
    analysis.resolve(target(host="unconfigured.test")).unwrap().selector,
    "http[1]/server[1]",
  )
}

///|
test "listener address precedes host name and explicit default precedes file order" {
  let analysis = fixture(
    "http { server { listen 80; server_name example.test; allow all; } server { listen 127.0.0.1:80; server_name unrelated.test; deny all; } }",
  )
  assert_eq(analysis.resolve(target()).unwrap().selector, "http[1]/server[2]")
  let defaults = fixture(
    "http { server { listen 8080; } server { listen 8080 default_server; deny all; } }",
  )
  assert_eq(
    defaults.resolve(target(port=8080)).unwrap().selector,
    "http[1]/server[2]",
  )
  assert_eq(
    resolving_error("http { server { listen 8080; } }", target()),
    "unsupported_no_listener",
  )
}

///|
test "routing refuses regex ambiguity but exact and caret prefixes shield it" {
  let text = "http { server { location ~ .txt$ { allow all; } location /admin/ { deny all; } location ^~ /static/ { deny all; } location = /health { allow all; } } }"
  assert_eq(resolving_error(text, target()), "unsupported_routing")
  assert_eq(
    fixture(text).resolve(target(uri="/static/a.txt")).unwrap().label,
    "location ^~ /static/",
  )
  assert_eq(
    fixture(text).resolve(target(uri="/health")).unwrap().label,
    "location = /health",
  )
  assert_eq(
    resolving_error(
      "http { server { location / { location /admin/ { deny all; } } } }",
      target(),
    ),
    "unsupported_routing",
  )
}

///|
test "unsupported names listeners and selected authentication never produce a pass" {
  for
    text in [
      "http { server { server_name *.test; } }", "http { server { server_name ~.*; } }",
      "http { server { listen 443 ssl; } }", "http { server { listen [::]:80; } }",
      "http { server { auth_basic private; } }",
    ] {
    assert_eq(resolving_error(text, target()), "unsupported_routing")
  }
  assert_eq(
    resolving_error(
      "http { server { listen 80 default_server; } server { listen 80 default_server; } }",
      target(),
    ),
    "invalid_routing",
  )
  assert_eq(
    resolving_error(
      "http { server { server_name example.test; } server { server_name example.test; } }",
      target(),
    ),
    "invalid_routing",
  )
}

///|
test "URI normalization is an explicit precondition instead of silent routing guesswork" {
  for
    uri in [
      "/a/../admin", "/./a", "/a//b", "/%61dmin/", "/admin/?q=x", "/admin/#x", "admin/",
      "/x\\y", "/a b", "/中文",
    ] {
    assert_eq(target(uri~).validate() is Ok(_), false)
  }
  assert_true(target().validate() is Ok(_))
  assert_false(target(host="example.test:80").validate() is Ok(_))
  assert_false(target(port=65536).validate() is Ok(_))
}

///|
test "legal child rule replaces inherited list and exposes exact newly accessible ranges" {
  let before = fixture(
    "http { allow 10.0.0.1; deny all; server { location /admin/ { root html; } } }",
  )
  let after = fixture(
    "http { allow 10.0.0.1; deny all; server { location /admin/ { deny 10.0.0.2; } } }",
  )
  let comparison = @nginx.compare_access(
    before,
    after,
    target(),
    scope="10.0.0.0/24",
  ).unwrap()
  assert_eq(comparison.compared_addresses, "256")
  assert_eq(comparison.newly_allowed_count, "254")
  assert_eq(comparison.newly_denied_count, "0")
  assert_eq(comparison.changes.length(), 2)
  assert_eq(comparison.changes[0].first, "10.0.0.0")
  assert_eq(comparison.changes[1].first, "10.0.0.3")
  assert_eq(comparison.before_context.inherited_from, Some("http[1]"))
  assert_eq(comparison.after_context.inherited_from, None)
  assert_eq(comparison.changes[1].after.outcome, @nginx.Unrestricted)
}

///|
test "semantic equality survives CIDR splitting comments and reordered servers and locations" {
  let before = fixture(
    "http { server { server_name example.test; location /admin/ { allow 10.0.0.0/24; deny all; } } }",
  )
  let after = fixture(
    "http { server { server_name unrelated.test; } server { server_name example.test; location /unused/ {} location /admin/ { allow 10.0.0.128/25; allow 10.0.0.0/25; deny all; } } }",
  )
  let report = @nginx.compare_access(before, after, target()).unwrap()
  assert_true(report.changes.is_empty())
  assert_eq(report.before_context.selector, "http[1]/server[1]/location[1]")
  assert_eq(report.after_context.selector, "http[1]/server[2]/location[2]")
}

///|
test "rule reorder causes both widening and tightening with independent witnesses" {
  let before = fixture("http { server { allow 10.0.0.0/25; deny all; } }")
  let after = fixture("http { server { allow 10.0.0.128/25; deny all; } }")
  let report = @nginx.compare_access(
    before,
    after,
    target(),
    scope="10.0.0.0/24",
  ).unwrap()
  assert_eq(report.newly_allowed_count, "128")
  assert_eq(report.newly_denied_count, "128")
  for change in report.changes {
    assert_eq(report.before_context.probe(change.first).unwrap(), change.before)
    assert_eq(report.after_context.probe(change.first).unwrap(), change.after)
  }
}

///|
test "full IPv4 endpoints and counts never overflow" {
  let denied = fixture("http { server { deny all; } }")
  let allowed = fixture("http { server {} }")
  let report = @nginx.compare_access(denied, allowed, target()).unwrap()
  assert_eq(report.newly_allowed_count, "4294967296")
  assert_eq(report.changes[0].last, "255.255.255.255")
  let one = @nginx.compare_access(
    denied,
    allowed,
    target(),
    scope="255.255.255.255/32",
  ).unwrap()
  assert_eq(one.newly_allowed_count, "1")
}

///|
test "whole CIDR expectations find violations a single good sample misses" {
  let analysis = fixture("http { server { deny 10.0.0.128/25; allow all; } }")
  assert_true(
    @nginx.expect_access(analysis, target(), "10.0.0.0/25", true).unwrap().changes.is_empty(),
  )
  let failed = @nginx.expect_access(analysis, target(), "10.0.0.0/24", true).unwrap()
  assert_eq(failed.newly_denied_count, "128")
  assert_eq(failed.changes[0].first, "10.0.0.128")
  assert_true(
    @nginx.expect_access(analysis, target(), "10.0.0.128/25", false).unwrap().changes.is_empty(),
  )
}

///|
test "comparison fails without partial conclusions when budgets cannot cover the domain" {
  let before = fixture("http { server { deny all; } }")
  let after = fixture(
    "http { server { allow 10.0.0.1; allow 10.0.0.3; deny all; } }",
  )
  match @nginx.compare_access(before, after, target(), max_work=1) {
    Err(error) => assert_eq(error.code, "limit_exceeded")
    Ok(_) => fail("budget must fail")
  }
  match @nginx.compare_access(before, after, target(), max_changes=1) {
    Err(error) => assert_eq(error.code, "limit_exceeded")
    Ok(_) => fail("output budget must fail")
  }
}

///|
test "child ACL replacement cannot hide a server-level conditional rewrite" {
  let text = "http { server { if ($request_method = GET) { return 200; } location /admin/ { allow all; } } }"
  assert_eq(resolving_error(text, target()), "unsupported_routing")
  let dynamic = fixture(
    "load_module modules/third-party.so; http { server { allow all; } }",
  )
  match dynamic.resolve(target()) {
    Err(error) => assert_eq(error.code, "unsupported_analysis")
    Ok(_) => fail("Dynamic module semantics must not be assumed")
  }
}

///|
test "include provenance is kept on both sides of a semantic change" {
  let make = fn(rule : String) {
    @nginx.analyze_nginx_sources("nginx.conf", [
      { path: "nginx.conf", content: "http { server { include acl.conf; } }", },
      { path: "acl.conf", content: rule, },
    ]).unwrap()
  }
  let report = @nginx.compare_access(
    make("deny all;"),
    make("allow all;"),
    target(),
  ).unwrap()
  assert_eq(
    report.changes[0].before.matched_rule.unwrap().source.path,
    "acl.conf",
  )
  assert_eq(
    report.changes[0].after.matched_rule.unwrap().source.include_chain,
    ["nginx.conf"],
  )
}

///|
test "generated first-match policies match an independent exhaustive 256-address oracle" {
  // The oracle uses integer half-open ranges, not the library evaluator.
  for seed = 0; seed < 24; seed = seed + 1 {
    let policies : Array[Array[(Int32, Int32, Bool)]] = []
    let analyses : Array[@nginx.Analysis] = []
    for side = 0; side < 2; side = side + 1 {
      let rules : Array[(Int32, Int32, Bool)] = []
      let mut text = "http { server { "
      for index = 0; index < 7; index = index + 1 {
        let width = if (seed + index) % 3 == 0 {
          128
        } else if index % 2 == 0 {
          64
        } else {
          32
        }
        let start = (seed * 17 + index * 13 + side * 7) % (256 / width) * width
        let allow = (seed + index + side) % 3 != 0
        rules.push((start, start + width, allow))
        text += (if allow { "allow " } else { "deny " }) +
          "10.0.0." +
          start.to_string() +
          "/" +
          (if width == 128 { "25" } else if width == 64 { "26" } else { "27" }) +
          "; "
      }
      policies.push(rules)
      analyses.push(fixture(text + "} }"))
    }
    let report = @nginx.compare_access(
      analyses[0],
      analyses[1],
      target(),
      scope="10.0.0.0/24",
    ).unwrap()
    let mut added = 0
    let mut removed = 0
    for address = 0; address < 256; address = address + 1 {
      let decisions = policies.map(fn(rules) {
        let mut allowed = true
        for (start, stop, action) in rules {
          if address >= start && address < stop {
            allowed = action
            break
          }
        }
        allowed
      })
      if decisions[0] != decisions[1] {
        if decisions[1] {
          added += 1
        } else {
          removed += 1
        }
      }
      let ip = @cidr.IPv4::parse("10.0.0." + address.to_string())
        .unwrap()
        .value()
      let covering = report.changes.filter(fn(change) {
        ip >= @cidr.IPv4::parse(change.first).unwrap().value() &&
        ip <= @cidr.IPv4::parse(change.last).unwrap().value()
      })
      assert_eq(
        covering.length(),
        if decisions[0] != decisions[1] {
          1
        } else {
          0
        },
      )
      if covering.length() == 1 {
        assert_eq(covering[0].newly_allowed, decisions[1])
      }
    }
    assert_eq(report.newly_allowed_count, added.to_string())
    assert_eq(report.newly_denied_count, removed.to_string())
  }
}
