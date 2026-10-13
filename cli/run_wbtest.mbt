///|
fn fixture_source(content : String) -> Array[@nginx.SourceFile] {
  [{ path: "nginx.conf", content, }]
}

///|
test "argument errors honor explicit report formats and ignore literal option-like paths" {
  let args = ["validate", "missing.conf", "--format", "json", "--unknown\"\n"]
  let error = match parse_args(args) {
    Err(error) => error
    Ok(_) => abort("unknown option must fail")
  }
  let result = argument_failure(error, args)
  assert_eq(result.exit_code, 2)
  assert_eq(result.stdout, "")
  assert_eq(json_error_code(result), "unknown_option")
  assert_true(
    argument_failure(error, ["validate", "--format", "markdown"]).stderr.has_prefix(
      "# Analysis failed",
    ),
  )
  assert_true(
    argument_failure(error, ["validate", "--", "--format", "json"]).stderr.has_prefix(
      "unknown_option:",
    ),
  )
}

///|
fn server_selector(sources : Array[@nginx.SourceFile]) -> String {
  let analysis = @nginx.analyze_nginx_sources("nginx.conf", sources).unwrap()
  for context in analysis.contexts {
    if context.kind == "server" {
      return context.selector
    }
  }
  ""
}

///|
fn json_member(value : Json, name : String) -> Json {
  match value {
    Object(fields) => fields.get(name).unwrap()
    _ => abort("expected JSON object")
  }
}

///|
fn json_string(value : Json) -> String {
  match value {
    String(text) => text
    _ => abort("expected JSON string")
  }
}

///|
fn json_array(value : Json) -> Array[Json] {
  match value {
    Array(items) => items
    _ => abort("expected JSON array")
  }
}

///|
fn json_error_code(result : CliResult) -> String raise {
  json_string(
    json_member(json_member(@json.parse(result.stderr), "error"), "code"),
  )
}

///|
test "contexts and validation execute against real parser sources" {
  let sources = fixture_source(
    "events {} http { server { listen 8080; location /private { allow 10.0.0.0/8; deny all; } } }",
  )
  let listed = run(
    parse_args(["contexts", "nginx.conf", "--format", "json"]).unwrap(),
    sources,
  )
  assert_eq(listed.exit_code, 0)
  assert_eq(listed.stderr, "")
  assert_true(
    json_array(json_member(@json.parse(listed.stdout), "contexts")).length() > 0,
  )
  let validated = run(parse_args(["validate", "nginx.conf"]).unwrap(), sources)
  assert_eq(validated.exit_code, 0)
}

///|
test "missing and cyclic imports cannot yield a clean success" {
  for command in ["contexts", "audit", "validate"] {
    let missing = run(
      parse_args([command, "nginx.conf", "--format", "json"]).unwrap(),
      fixture_source("events {} http { include absent.conf; }"),
    )
    assert_eq(missing.exit_code, 2)
    assert_eq(missing.stdout, "")
    assert_eq(json_error_code(missing), "missing_include")
  }
  let cyclic = run(
    parse_args(["validate", "nginx.conf", "--format", "json"]).unwrap(),
    fixture_source("include nginx.conf;"),
  )
  assert_eq(cyclic.exit_code, 2)
  assert_eq(json_error_code(cyclic), "include_cycle")
}

///|
test "budget exhaustion is distinct from input and audit failures" {
  let result = run(
    parse_args([
      "validate", "nginx.conf", "--limits", "max_source_chars=1", "--format", "json",
    ]).unwrap(),
    fixture_source("events {} http {}"),
  )
  assert_eq(result.exit_code, 4)
  assert_eq(result.stdout, "")
  assert_eq(json_error_code(result), "limit_exceeded")
}

///|
test "unsupported address scope cannot pass validation or audit" {
  let sources = fixture_source(
    "events {} http { server { allow ::1; deny all; } }",
  )
  for command in ["validate", "audit", "contexts"] {
    let result = run(parse_args([command, "nginx.conf"]).unwrap(), sources)
    assert_eq(result.exit_code, 3)
    assert_true(result.stdout.contains("unsupported"))
  }
}

///|
test "unknown context and invalid probe address are input failures" {
  let sources = fixture_source(
    "events {} http { server { allow 127.0.0.1; deny all; } }",
  )
  let result = run(
    parse_args([
      "probe", "nginx.conf", "127.0.0.1", "--context", "not-a-context", "--format",
      "json",
    ]).unwrap(),
    sources,
  )
  assert_eq(result.exit_code, 2)
  assert_eq(json_error_code(result), "unknown_context")
  let analysis = @nginx.analyze_nginx_sources("nginx.conf", sources).unwrap()
  let selector = analysis.contexts[0].selector
  let invalid = run(
    parse_args([
      "probe", "nginx.conf", "999.0.0.1", "--context", selector, "--format", "json",
    ]).unwrap(),
    sources,
  )
  assert_eq(invalid.exit_code, 2)
  assert_eq(json_error_code(invalid), "invalid_probe")
}

///|
test "audit gates reflect findings without treating validate as an audit" {
  let sources = fixture_source(
    "events {} http { server { allow all; deny 127.0.0.1; } }",
  )
  let audit = run(parse_args(["audit", "nginx.conf"]).unwrap(), sources)
  assert_eq(audit.exit_code, 1)
  assert_eq(audit.stderr, "")
  assert_eq(
    run(parse_args(["validate", "nginx.conf"]).unwrap(), sources).exit_code,
    0,
  )
}

///|
test "strict audit gates warnings and selected contexts use their actual findings" {
  let sources = fixture_source(
    "events {} http { server { allow 198.51.100.7; allow 198.51.100.7; } }",
  )
  let selector = server_selector(sources)
  assert_true(selector != "")
  let normal = run(
    parse_args(["audit", "nginx.conf", "--context", selector]).unwrap(),
    sources,
  )
  let strict = run(
    parse_args(["audit", "nginx.conf", "--context", selector, "--strict"]).unwrap(),
    sources,
  )
  assert_eq(normal.exit_code, 0)
  assert_eq(strict.exit_code, 1)
  assert_eq(strict.stderr, "")
}

///|
test "probe denial is a successful query and unrestricted is reported explicitly" {
  let sources = fixture_source(
    "events {} http { server { allow 198.51.100.7; deny all; } }",
  )
  let selector = server_selector(sources)
  for
    (ip, expected) in [
      ("198.51.100.7", "allowed_by_rule"),
      ("198.51.100.8", "denied_by_rule"),
    ] {
    let result = run(
      parse_args([
        "probe", "nginx.conf", ip, "--context", selector, "--format", "json",
      ]).unwrap(),
      sources,
    )
    assert_eq(result.exit_code, 0)
    assert_eq(
      json_string(json_member(@json.parse(result.stdout), "outcome")),
      expected,
    )
    assert_eq(result.stderr, "")
  }
  let unrestricted = fixture_source("events {} http { server {} }")
  let result = run(
    parse_args([
      "probe",
      "nginx.conf",
      "198.51.100.8",
      "--context",
      server_selector(unrestricted),
      "--format",
      "json",
    ]).unwrap(),
    unrestricted,
  )
  assert_eq(result.exit_code, 0)
  assert_eq(
    json_string(json_member(@json.parse(result.stdout), "outcome")),
    "no_address_restriction",
  )
}

///|
test "audit computation budget has its own failure code" {
  let sources = fixture_source(
    "events {} http { server { allow 198.51.100.1; allow 198.51.100.2; allow 198.51.100.3; } }",
  )
  let result = run(
    parse_args([
      "audit", "nginx.conf", "--limits", "max_audit_pairs=1", "--format", "json",
    ]).unwrap(),
    sources,
  )
  assert_eq(result.exit_code, 4)
  assert_eq(json_error_code(result), "limit_exceeded")
}

///|
test "directly constructed invalid options also fail safely" {
  let options = parse_args(["audit", "nginx.conf"]).unwrap()
  assert_eq(run({ ..options, format: "yaml", }, []).exit_code, 2)
  assert_eq(run({ ..options, entry: "../nginx.conf", }, []).exit_code, 2)
  assert_eq(run({ ..options, command: Probe, }, []).exit_code, 2)
}
