///|
test "security scans TLS regex and authentication without invoking the IPv4 router" {
  let source = fixture_source(
    "http { server { listen 443 ssl; server_name example.test; ssl_protocols TLSv1.2 TLSv1.3; auth_basic restricted; auth_basic_user_file users; location ~ ^/assets/[a-z]+$ { root /srv/www; } } }",
  )
  let options = parse_args(["security", "nginx.conf", "--format", "json"]).unwrap()
  let result = run(options, source)
  assert_eq(result.exit_code, 0)
  assert_eq(result.stderr, "")
  assert_true(result.stdout.contains("findings"))
  assert_eq(
    run(parse_args(["validate", "nginx.conf"]).unwrap(), source).exit_code,
    3,
  )
}

///|
test "security gate catches alias traversal and accepts corrected location boundary" {
  let vulnerable = fixture_source(
    "http { server { location /static { alias /srv/static/; } } }",
  )
  let corrected = fixture_source(
    "http { server { location /static/ { alias /srv/static/; } } }",
  )
  for format in ["text", "json", "markdown", "sarif"] {
    let options = parse_args(["security", "nginx.conf", "--format", format]).unwrap()
    let result = run(options, vulnerable)
    assert_eq(result.exit_code, 1)
    assert_eq(result.stderr, "")
    assert_true(result.stdout.contains("alias_traversal"))
    assert_eq(run(options, corrected).exit_code, 0)
    if format == "sarif" {
      let log = @json.parse(result.stdout)
      assert_eq(json_member(log, "version"), Json("2.1.0"))
      let report = json_array(json_member(log, "runs"))[0]
      let findings = json_array(json_member(report, "results"))
      assert_true(
        findings.any(fn(item) {
          json_member(item, "ruleId") == Json("alias_traversal")
        }),
      )
    }
  }
}

///|
test "security strict mode blocks warnings without changing normal severity policy" {
  let source = fixture_source(
    "http { server { location / { proxy_pass http://$http_host; } } }",
  )
  let normal = parse_args(["security", "nginx.conf", "--format", "json"]).unwrap()
  let result = run(normal, source)
  assert_eq(result.exit_code, 0)
  assert_true(result.stdout.contains("proxy_pass_variable_authority"))
  assert_eq(run({ ..normal, strict: true, }, source).exit_code, 1)
}

///|
test "security unresolved variable yields incomplete coverage rather than a clean gate" {
  let source = fixture_source(
    "http { server { location / { proxy_pass http://$custom_backend; } } }",
  )
  for format in ["json", "sarif"] {
    let result = run(
      parse_args(["security", "nginx.conf", "--format", format]).unwrap(),
      source,
    )
    assert_eq(result.exit_code, 3)
    assert_eq(result.stderr, "")
    assert_true(result.stdout.contains("partial_coverage"))
  }
}

///|
test "security file failures and resource exhaustion preserve structured exit statuses" {
  let options = parse_args(["security", "nginx.conf", "--format", "json"]).unwrap()
  let missing = run(options, fixture_source("http { include absent.conf; }"))
  assert_eq(missing.exit_code, 2)
  assert_eq(missing.stdout, "")
  assert_eq(json_error_code(missing), "missing_include")
  let cyclic = run(options, fixture_source("include nginx.conf;"))
  assert_eq(cyclic.exit_code, 2)
  assert_eq(json_error_code(cyclic), "include_cycle")
  let exhausted = run(
    { ..options, limits: { ..options.limits, max_source_chars: 1, }, },
    fixture_source("http {}"),
  )
  assert_eq(exhausted.exit_code, 4)
  assert_eq(exhausted.stdout, "")
  assert_eq(json_error_code(exhausted), "limit_exceeded")
}

///|
test "security findings retain included source origins" {
  let result = run(
    parse_args(["security", "nginx.conf", "--format", "json"]).unwrap(),
    [
      {
        path: "nginx.conf",
        content: "http { server { include locations.conf; } }",
      },
      {
        path: "locations.conf",
        content: "location /private { alias /srv/private/; }",
      },
    ],
  )
  assert_eq(result.exit_code, 1)
  assert_true(result.stdout.contains("locations.conf"))
  assert_true(result.stdout.contains("nginx.conf"))
}

///|
test "security rejects routed flags invalid formats selectors and extra positionals" {
  for
    args in [
      ["security"],
      ["security", "nginx.conf", "second.conf"],
      ["security", "nginx.conf", "--context", "http[1]"],
      ["security", "nginx.conf", "--host", "example.test"],
      ["security", "nginx.conf", "--format", "yaml"],
      ["security", "nginx.conf", "--strict", "--strict"],
      ["security", "../nginx.conf"],
    ] {
    assert_true(parse_args(args) is Err(_))
  }
  let options = parse_args([
    "security", "nginx.conf", "--strict", "--format", "sarif",
  ]).unwrap()
  assert_eq(options.command, Security)
  assert_true(options.strict)
  assert_eq(
    run({ ..options, context_selector: Some("http[1]"), }, []).exit_code,
    2,
  )
  assert_eq(run({ ..options, format: "yaml", }, []).exit_code, 2)
  assert_eq(parse_args(["security", "--help"]).unwrap().command, Help)
  assert_true(
    run(parse_args(["security", "--help"]).unwrap(), []).stdout.contains(
      "security CONFIG",
    ),
  )
}
