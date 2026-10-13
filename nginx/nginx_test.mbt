///|
fn fixture(text : String) -> @nginx.Analysis {
  @nginx.analyze_nginx_sources("nginx.conf", [
    { path: "nginx.conf", content: text, },
  ]).unwrap()
}

///|
fn error_code(result : Result[@nginx.Analysis, @nginx.ConfigError]) -> String {
  match result {
    Err(error) => error.code
    Ok(_) => "success"
  }
}

///|
fn outcome(context : @nginx.AccessContext, ip : String) -> @nginx.AccessOutcome {
  context.probe(ip).unwrap().outcome
}

///|
test "HTTP inheritance is replaced, never appended, and siblings are isolated" {
  let config_text =
    #|http {
    #|  allow 10.0.0.0/8;
    #|  deny all;
    #|  server {
    #|    location /inherited { root html; }
    #|    location /local { deny 198.51.100.7; }
    #|    location /sibling { root html; }
    #|  }
    #|}
  let analysis = fixture(config_text)
  assert_eq(analysis.contexts.length(), 5)
  let inherited = analysis.context("http[1]/server[1]/location[1]").unwrap()
  assert_eq(inherited.inherited_from, Some("http[1]"))
  assert_eq(inherited.rules.length(), 2)
  assert_eq(outcome(inherited, "10.2.3.4"), @nginx.Allowed)
  assert_eq(outcome(inherited, "192.0.2.4"), @nginx.Denied)
  let local_context = analysis.context("http[1]/server[1]/location[2]").unwrap()
  assert_eq(local_context.inherited_from, None)
  assert_eq(local_context.rules.length(), 1)
  assert_eq(outcome(local_context, "10.2.3.4"), @nginx.Unrestricted)
  assert_eq(outcome(local_context, "198.51.100.7"), @nginx.Denied)
  let sibling = analysis.context("http[1]/server[1]/location[3]").unwrap()
  assert_eq(outcome(sibling, "10.2.3.4"), @nginx.Allowed)
  assert_eq(outcome(sibling, "198.51.100.7"), @nginx.Denied)
}

///|
test "First matching rule, rather than longest prefix, determines access" {
  let broad = fixture(
      "http { server { allow 10.0.0.0/8; deny 10.1.0.0/16; deny all; } }",
    )
    .context("http[1]/server[1]")
    .unwrap()
  let narrow = fixture(
      "http { server { deny 10.1.0.0/16; allow 10.0.0.0/8; deny all; } }",
    )
    .context("http[1]/server[1]")
    .unwrap()
  assert_eq(outcome(broad, "10.1.2.3"), @nginx.Allowed)
  assert_eq(outcome(narrow, "10.1.2.3"), @nginx.Denied)
  assert_eq(outcome(narrow, "10.2.2.3"), @nginx.Allowed)
  assert_eq(narrow.audit().unwrap().critical_count(), 0)
  assert_eq(broad.audit().unwrap().critical_count(), 1)
}

///|
test "No matching rule declines the address module, including an empty context" {
  let context = fixture("http { server { allow 192.0.2.1; } }")
    .context("http[1]/server[1]")
    .unwrap()
  assert_eq(outcome(context, "192.0.2.2"), @nginx.Unrestricted)
  assert_true(
    context.audit().unwrap().findings.any(fn(item) {
      item.code == "unrestricted_fallback"
    }),
  )
  assert_eq(
    fixture("http { server {} }")
    .context("http[1]/server[1]")
    .unwrap()
    .probe("192.0.2.2")
    .unwrap().matched_rule,
    None,
  )
}

///|
test "Terminal deny and plain host operands do not create false critical findings" {
  let context = fixture("http { server { allow 198.51.100.7; deny all; } }")
    .context("http[1]/server[1]")
    .unwrap()
  let report = context.audit().unwrap()
  assert_eq(report.critical_count(), 0)
  assert_eq(report.warning_count(), 0)
  assert_true(report.findings.any(fn(item) { item.code == "terminal_default" }))
  assert_false(
    report.findings.any(fn(item) { item.code == "non_canonical_cidr" }),
  )
  assert_eq(outcome(context, "198.51.100.7"), @nginx.Allowed)
  assert_eq(outcome(context, "198.51.100.8"), @nginx.Denied)
}

///|
test "Host bits are reported while keeping the original source operand" {
  let context = fixture("http { server { allow 198.51.100.99/24; deny all; } }")
    .context("http[1]/server[1]")
    .unwrap()
  assert_eq(context.rules[0].raw_operand, "198.51.100.99/24")
  assert_eq(context.rules[0].rule.block().to_string(), "198.51.100.0/24")
  assert_true(
    context.audit().unwrap().findings.any(fn(item) {
      item.code == "non_canonical_cidr"
    }),
  )
}

///|
test "Wildcard includes preserve sorted first-match order and true source lines" {
  let analysis = @nginx.analyze_nginx_sources("nginx.conf", [
    {
      path: "nginx.conf",
      content: "http { server { include rules/*.conf; deny all; } }",
    },
    { path: "rules/z.conf", content: "allow 10.0.0.0/8;", },
    { path: "rules/a.conf", content: "# exception\ndeny 10.1.0.0/16;", },
    { path: "rules/.hidden.conf", content: "allow all;", },
  ]).unwrap()
  assert_eq(analysis.sources, ["nginx.conf", "rules/a.conf", "rules/z.conf"])
  assert_eq(analysis.include_edges[0].targets, ["rules/a.conf", "rules/z.conf"])
  let context = analysis.context("http[1]/server[1]").unwrap()
  assert_eq(context.rules[0].source.path, "rules/a.conf")
  assert_eq(context.rules[0].source.line, 2)
  assert_eq(context.rules[0].source.include_chain, ["nginx.conf"])
  assert_eq(outcome(context, "10.1.2.3"), @nginx.Denied)
  assert_eq(outcome(context, "10.2.2.3"), @nginx.Allowed)
}

///|
test "Nested includes remain relative to the main configuration directory" {
  let analysis = @nginx.analyze_nginx_sources("conf/nginx.conf", [
    {
      path: "conf/nginx.conf",
      content: "http { server { include inc/a.conf; deny all; } }",
    },
    { path: "conf/inc/a.conf", content: "include inc/b.conf;", },
    { path: "conf/inc/b.conf", content: "allow 198.51.100.7;", },
  ]).unwrap()
  let context = analysis.context("http[1]/server[1]").unwrap()
  assert_eq(context.rules[0].source.path, "conf/inc/b.conf")
  assert_eq(context.rules[0].source.include_chain, [
    "conf/nginx.conf", "conf/inc/a.conf",
  ])
  assert_eq(outcome(context, "198.51.100.7"), @nginx.Allowed)
}

///|
test "Includes can supply context blocks without creating a new inheritance level" {
  let analysis = @nginx.analyze_nginx_sources("nginx.conf", [
    {
      path: "nginx.conf",
      content: "http { allow 198.51.100.0/24; deny all; include server.conf; }",
    },
    { path: "server.conf", content: "server { location / { root html; } }", },
  ]).unwrap()
  let location = analysis.context("http[1]/server[1]/location[1]").unwrap()
  assert_eq(location.source.path, "server.conf")
  assert_eq(location.inherited_from, Some("http[1]"))
  assert_eq(outcome(location, "198.51.100.1"), @nginx.Allowed)
}

///|
test "Repeated includes are legal, empty masks are visible, cycles are errors" {
  let repeated = @nginx.analyze_nginx_sources("nginx.conf", [
    {
      path: "nginx.conf",
      content: "http { include rule.conf; include rule.conf; include empty/*.conf; }",
    },
    { path: "rule.conf", content: "allow 198.51.100.7;", },
  ]).unwrap()
  assert_eq(repeated.contexts[0].rules.length(), 2)
  assert_eq(repeated.include_edges.length(), 3)
  assert_eq(repeated.sources.length(), 2)
  assert_true(
    repeated.diagnostics.any(fn(item) {
      item.code == "empty_include_mask" && !item.blocking
    }),
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        { path: "nginx.conf", content: "include child.conf;", },
        { path: "child.conf", content: "include nginx.conf;", },
      ]),
    ),
    "include_cycle",
  )
}

///|
test "Literal missing includes and malformed configuration never return partial success" {
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        { path: "nginx.conf", content: "http { include absent.conf; }", },
      ]),
    ),
    "missing_include",
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        {
          path: "nginx.conf",
          content: "http { allow 198.51.100.7; include; }",
        },
      ]),
    ),
    "invalid_include",
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        { path: "nginx.conf", content: "http { allow 198.51.100.7;", },
      ]),
    ),
    "parse_error",
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        { path: "nginx.conf", content: "http { allow 999.1.1.1; }", },
      ]),
    ),
    "invalid_access_operand",
  )
}

///|
test "Unsupported operands block probing and never trigger accidental inheritance" {
  let analysis = fixture(
    "http { allow 10.0.0.0/8; deny all; server { allow ::1; } }",
  )
  assert_true(analysis.has_blocking())
  let context = analysis.context("http[1]/server[1]").unwrap()
  assert_eq(context.rules.length(), 0)
  assert_eq(context.inherited_from, None)
  assert_true(context.has_blocking())
  match context.probe("10.1.2.3") {
    Err(error) => assert_eq(error.code, "unsupported_context")
    Ok(_) => fail("unsupported context cannot produce an access conclusion")
  }
  assert_true(fixture("http { server { allow unix:; } }").has_blocking())
  assert_true(fixture("http { server { allow $trusted; } }").has_blocking())
}

///|
test "Request-level dependencies and unsupported conditional access are explicit" {
  for
    directive in [
      "satisfy any;", "auth_basic protected;", "real_ip_header X-Real-IP;", "return 200;",
    ] {
    let analysis = fixture(
      "http { server { " + directive + " allow 198.51.100.7; deny all; } }",
    )
    assert_true(analysis.has_blocking())
    assert_true(analysis.contexts[1].has_blocking())
  }
  assert_false(
    fixture("http { server { auth_basic off; allow 198.51.100.7; deny all; } }").has_blocking(),
  )
  assert_true(
    fixture("http { server { location / { limit_except GET { deny all; } } } }").has_blocking(),
  )
  assert_true(
    fixture("http { server { if ($x) { deny all; } } }").has_blocking(),
  )
}

///|
test "Nginx access syntax remains strict rather than using native action aliases" {
  for
    rule in [
      "ALLOW 192.0.2.1;", "allow ALL;", "allow 192.0.2.1 extra;", "allow { deny all; }",
    ] {
    assert_true(
      error_code(
        @nginx.analyze_nginx_sources("nginx.conf", [
          { path: "nginx.conf", content: "http { " + rule + " }", },
        ]),
      ) !=
      "success",
    )
  }
  assert_true(fixture("allow 192.0.2.1; http { server {} }").has_blocking())
}

///|
test "Duplicate and ordered-exception audit severity supports an actual deployment gate" {
  let duplicate = fixture("http { allow 198.51.100.7; allow 198.51.100.7; }").contexts[0]
    .audit()
    .unwrap()
  assert_eq(duplicate.critical_count(), 0)
  assert_true(duplicate.warning_count() > 0)
  assert_true(
    duplicate.findings.any(fn(item) { item.code == "duplicate_rule" }),
  )
  let blocked = fixture("http { allow all; deny 127.0.0.1; }").contexts[0]
    .audit()
    .unwrap()
  assert_true(blocked.critical_count() > 0)
}

///|
test "Complete coverage handles zero and UInt maximum without wraparound" {
  let context = fixture("http { deny 0.0.0.0/1; deny 128.0.0.0/1; allow all; }").contexts[0]
  assert_eq(outcome(context, "0.0.0.0"), @nginx.Denied)
  assert_eq(outcome(context, "255.255.255.255"), @nginx.Denied)
  let report = context.audit().unwrap()
  assert_true(
    report.findings.any(fn(item) {
      item.rule_id == "http[1]/R3" && item.code == "unreachable_rule"
    }),
  )
  assert_false(
    report.findings.any(fn(item) { item.code == "unrestricted_fallback" }),
  )
}

///|
test "Already dead opposite-action rules do not cause another false critical finding" {
  let context = fixture(
      "http { allow 0.0.0.0/1; allow 128.0.0.0/1; deny all; allow 192.0.2.0/24; }",
    ).contexts[0]
  let report = context.audit().unwrap()
  let last = report.findings.filter(fn(item) {
    item.rule_id == "http[1]/R4" && item.code == "unreachable_rule"
  })
  assert_eq(last.length(), 1)
  assert_eq(last[0].severity, @cidr.Warning)
  assert_eq(outcome(context, "192.0.2.1"), @nginx.Allowed)
}

///|
test "Deterministic source namespace and confined include masks" {
  assert_eq(
    @nginx.normalize_source_path("conf\\inc\\.\\a.conf").unwrap(),
    "conf/inc/a.conf",
  )
  assert_eq(
    @nginx.resolve_include_path("conf/nginx.conf", "inc/a.conf").unwrap(),
    "conf/inc/a.conf",
  )
  assert_eq(
    @nginx.resolve_include_path("C:\\site\\nginx.conf", "rules/a.conf").unwrap(),
    "C:/site/rules/a.conf",
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        { path: "nginx.conf", content: "http {}", },
        { path: "./nginx.conf", content: "http {}", },
      ]),
    ),
    "duplicate_source",
  )
  for
    operand in [
      "../outside.conf", "../*.conf", "http://example/a.conf", "**/*.conf", "rules/[ab].conf",
      "$path", "rules\\ a.conf",
    ] {
    match @nginx.resolve_include_path("conf/nginx.conf", operand) {
      Err(_) => ()
      Ok(_) => fail("unsupported or escaping include must fail")
    }
  }
  assert_true(@nginx.include_path_matches("rules/a?.conf", "rules/a1.conf"))
  assert_false(
    @nginx.include_path_matches("rules/*.conf", "rules/.private.conf"),
  )
  assert_false(@nginx.include_path_matches("rules/*.conf", "other/a.conf"))
}

///|
test "Every structural source budget returns an explicit limit error" {
  let text = "http { allow 192.0.2.1; deny all; server { location / {} } }"
  let base = @nginx.Limits::default()
  let budgets : Array[@nginx.Limits] = [
    { ..base, max_source_chars: 10, },
    { ..base, max_total_chars: 10, },
    { ..base, max_context_depth: 1, },
    { ..base, max_directives: 1, },
    { ..base, max_contexts: 1, },
    { ..base, max_rules: 1, },
  ]
  for limits in budgets {
    assert_eq(
      error_code(
        @nginx.analyze_nginx_sources(
          "nginx.conf",
          [{ path: "nginx.conf", content: text, }],
          limits~,
        ),
      ),
      "limit_exceeded",
    )
  }
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources(
        "nginx.conf",
        [
          { path: "nginx.conf", content: "http {}", },
          { path: "other.conf", content: "", },
        ],
        limits={ ..base, max_sources: 1, },
      ),
    ),
    "limit_exceeded",
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources(
        "nginx.conf",
        [{ path: "nginx.conf", content: "http {}", }],
        limits={ ..base, max_contexts: 0, },
      ),
    ),
    "invalid_limits",
  )
}

///|
test "Include nesting, expansion count, and aggregate audit work are bounded" {
  let sources : Array[@nginx.SourceFile] = [
    {
      path: "nginx.conf",
      content: "http { include a.conf; include a.conf; server {} }",
    },
    { path: "a.conf", content: "include b.conf;", },
    { path: "b.conf", content: "allow 192.0.2.1; deny all;", },
  ]
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", sources, limits={
        ..@nginx.Limits::default(),
        max_include_depth: 1,
      }),
    ),
    "limit_exceeded",
  )
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", sources, limits={
        ..@nginx.Limits::default(),
        max_include_expansions: 1,
      }),
    ),
    "limit_exceeded",
  )
  let analysis = @nginx.analyze_nginx_sources(
    "nginx.conf",
    [
      {
        path: "nginx.conf",
        content: "http { allow 192.0.2.1; deny all; server {} }",
      },
    ],
    limits={ ..@nginx.Limits::default(), max_audit_pairs: 1, },
  ).unwrap()
  assert_eq(analysis.contexts[0].audit().unwrap().critical_count(), 0)
  match analysis.audits() {
    Err(error) => assert_eq(error.code, "limit_exceeded")
    Ok(_) => fail("inherited contexts consume aggregate audit work")
  }
}

///|
test "Parser resource guard respects quoted braces, comments, and variable braces" {
  let text = "# {{{{{\nhttp { server { add_header X \"{{{{{\"; add_header Y ${host}; } }"
  let analysis = @nginx.analyze_nginx_sources(
    "nginx.conf",
    [{ path: "nginx.conf", content: text, }],
    limits={ ..@nginx.Limits::default(), max_context_depth: 2, },
  ).unwrap()
  assert_eq(analysis.contexts.length(), 2)
  match
    @nginx.parse_source_file(
      { path: "nginx.conf", content: "http { server { location / {} } }", },
      { ..@nginx.Limits::default(), max_context_depth: 2, },
    ) {
    Err(error) => assert_eq(error.code, "limit_exceeded")
    Ok(_) => fail("guard must precede recursive upstream parsing")
  }
}

///|
test "Invalid selection and probes have stable errors and canonical probe values" {
  let analysis = fixture("http { server {} }")
  match analysis.context("http[1]/server[9]") {
    Err(error) => assert_eq(error.code, "unknown_context")
    Ok(_) => fail("unknown selector cannot silently choose another context")
  }
  let context = analysis.contexts[1]
  match context.probe("not-an-ip") {
    Err(error) => assert_eq(error.code, "invalid_probe")
    Ok(_) => fail("invalid probe must fail")
  }
  assert_eq(context.probe("192.0.2.1").unwrap().ip, "192.0.2.1")
}

///|
test "First-match and unreachable-rule findings match an independent exhaustive interval oracle" {
  let sizes = [1, 2, 4, 8, 16, 32]
  let mut seed = 73
  for case_index = 0; case_index < 50; case_index = case_index + 1 {
    let raw : Array[(Int32, Int32, Bool)] = []
    let mut text = "http { server { "
    for rule_index = 0; rule_index < 8; rule_index = rule_index + 1 {
      seed = (seed * 37 + 19) % 997
      let scale = seed % 6
      let size = sizes[scale]
      seed = (seed * 37 + 19) % 997
      let begin = seed % 32 / size * size
      seed = (seed * 37 + 19) % 997
      let allow = seed % 2 == 0
      raw.push((begin, begin + size - 1, allow))
      text += (if allow { "allow " } else { "deny " }) +
        "198.51.100." +
        begin.to_string() +
        "/" +
        (32 - scale).to_string() +
        "; "
    }
    text += "} }"
    let context = fixture(text).contexts[1]
    let report = context.audit().unwrap()
    for address = 0; address < 32; address = address + 1 {
      let mut expected = @nginx.Unrestricted
      for tuple in raw {
        if address >= tuple.0 && address <= tuple.1 {
          expected = if tuple.2 { @nginx.Allowed } else { @nginx.Denied }
          break
        }
      }
      assert_eq(outcome(context, "198.51.100." + address.to_string()), expected)
    }
    for rule_index = 0; rule_index < raw.length(); rule_index = rule_index + 1 {
      let tuple = raw[rule_index]
      let mut is_unreachable = true
      let mut opposite = false
      for address = tuple.0; address <= tuple.1; address = address + 1 {
        let mut first = -1
        for old = 0; old < rule_index; old = old + 1 {
          if address >= raw[old].0 && address <= raw[old].1 {
            first = old
            break
          }
        }
        if first == -1 {
          is_unreachable = false
        } else if raw[first].2 != tuple.2 {
          opposite = true
        }
      }
      let id = "http[1]/server[1]/R" + (rule_index + 1).to_string()
      let found = report.findings.filter(fn(item) {
        item.code == "unreachable_rule" && item.rule_id == id
      })
      assert_eq(found.length() == 1, is_unreachable)
      if is_unreachable {
        assert_eq(
          found[0].severity,
          if opposite {
            @cidr.Critical
          } else {
            @cidr.Warning
          },
        )
      }
    }
  }
}

///|
test "Binary-corrupted configuration text is rejected before parser invocation" {
  assert_eq(
    error_code(
      @nginx.analyze_nginx_sources("nginx.conf", [
        { path: "nginx.conf", content: "http { server {} }\u{0}", },
      ]),
    ),
    "invalid_input",
  )
}
