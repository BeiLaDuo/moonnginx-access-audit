///|
fn parse_failure(args : Array[String]) -> String {
  match parse_args(args) {
    Err(error) => error.code
    Ok(_) => "unexpected_success"
  }
}

///|
test "end of options preserves dash-prefixed configuration filenames" {
  assert_eq(
    parse_args(["validate", "--", "-access.conf"]).unwrap().entry,
    "-access.conf",
  )
  let literal = parse_args(["audit", "--format", "json", "--", "--strict"]).unwrap()
  assert_eq(literal.entry, "--strict")
  assert_false(literal.strict)
  assert_eq(parse_failure(["validate", "--"]), "invalid_arguments")
  assert_eq(
    parse_failure(["audit", "--", "a.conf", "--strict"]),
    "invalid_arguments",
  )
}

///|
test "invalid probe addresses are rejected before loading configuration" {
  for ip in ["999.0.0.1", "::1", "127.0.0.1/32", "not-an-address"] {
    assert_eq(
      parse_failure(["probe", "missing.conf", ip, "--context", "http[1]"]),
      "invalid_probe",
    )
  }
  assert_eq(
    parse_args([
      "probe", "missing.conf", "255.255.255.255", "--context", "http[1]",
    ]).unwrap().ip,
    Some("255.255.255.255"),
  )
}

///|
test "help and version do not require configuration" {
  assert_eq(parse_args([]).unwrap().command, Help)
  assert_eq(parse_args(["--help"]).unwrap().command, Help)
  assert_eq(parse_args(["version"]).unwrap().command, Version)
  assert_eq(run(parse_args(["help"]).unwrap(), []).exit_code, 0)
  assert_true(
    run(parse_args(["help"]).unwrap(), []).stdout.contains("does not authorize"),
  )
  assert_eq(run(parse_args(["version"]).unwrap(), []).exit_code, 0)
  assert_eq(parse_failure(["help", "nginx.conf"]), "unexpected_argument")
}

///|
test "positional commands and explicit context preserve user input" {
  let options = parse_args([
    "probe", "conf/nginx.conf", "203.0.113.4", "--root", "C:\\fixtures", "--context",
    "http/server[1]/location[1]", "--format", "json",
  ]).unwrap()
  assert_eq(options.command, Probe)
  assert_eq(options.entry, "conf/nginx.conf")
  assert_eq(options.input_root, "C:\\fixtures")
  assert_eq(options.ip, Some("203.0.113.4"))
  assert_eq(options.context_selector, Some("http/server[1]/location[1]"))
  assert_eq(options.format, "json")
  let audit = parse_args([
    "audit", "--strict", "./nginx.conf", "--format", "markdown",
  ]).unwrap()
  assert_true(audit.strict)
  assert_eq(audit.entry, "./nginx.conf")
  assert_eq(audit.input_root, ".")
}

///|
test "invalid commands and flags are never silently ignored" {
  assert_eq(parse_failure(["deploy", "nginx.conf"]), "unknown_command")
  assert_eq(parse_failure(["audit"]), "invalid_arguments")
  assert_eq(parse_failure(["audit", "a.conf", "b.conf"]), "invalid_arguments")
  assert_eq(parse_failure(["audit", "a.conf", "--typo"]), "unknown_option")
  assert_eq(parse_failure(["audit", "a.conf", "--root"]), "missing_value")
  assert_eq(
    parse_failure(["audit", "a.conf", "--format", "--strict"]),
    "missing_value",
  )
  assert_eq(
    parse_failure(["audit", "a.conf", "--format", "yaml"]),
    "invalid_format",
  )
  assert_eq(parse_failure(["audit", "a.conf", "--root", ""]), "invalid_value")
  assert_eq(
    parse_failure(["audit", "a.conf", "--format", "json", "--format", "text"]),
    "duplicate_option",
  )
  assert_eq(
    parse_failure(["audit", "a.conf", "--strict", "--strict"]),
    "duplicate_option",
  )
  assert_eq(parse_failure(["validate", "a.conf", "--strict"]), "invalid_option")
  assert_eq(
    parse_failure(["contexts", "a.conf", "--context", "http"]),
    "invalid_option",
  )
  assert_eq(parse_failure(["probe", "a.conf", "127.0.0.1"]), "missing_context")
}

///|
test "entry paths stay local and relative to the selected root" {
  for
    entry in [
      "/nginx.conf", "\\nginx.conf", "C:\\nginx.conf", "https://example.test/nginx.conf",
      "../nginx.conf", "conf/../../nginx.conf", "conf\\..\\nginx.conf", "conf//nginx.conf",
      "conf/", "bad\u0000.conf",
    ] {
    assert_eq(parse_failure(["validate", entry]), "invalid_entry")
  }
  assert_eq(
    parse_failure(["validate", "nginx.conf", "--root", "https://example.test"]),
    "invalid_root",
  )
  assert_eq(
    parse_args(["validate", "conf\\nginx.conf"]).unwrap().entry,
    "conf\\nginx.conf",
  )
}

///|
test "resource overrides are explicit and all supported fields are usable" {
  let options = parse_args([
    "audit", "nginx.conf", "--limits", "max_sources=5,max_total_chars=100,max_source_chars=50,max_include_depth=3,max_include_expansions=7,max_directives=11,max_contexts=13,max_context_depth=2,max_rules=17,max_audit_pairs=19",
  ]).unwrap()
  assert_eq(options.limits.max_sources, 5)
  assert_eq(options.limits.max_total_chars, 100)
  assert_eq(options.limits.max_source_chars, 50)
  assert_eq(options.limits.max_include_depth, 3)
  assert_eq(options.limits.max_include_expansions, 7)
  assert_eq(options.limits.max_directives, 11)
  assert_eq(options.limits.max_contexts, 13)
  assert_eq(options.limits.max_context_depth, 2)
  assert_eq(options.limits.max_rules, 17)
  assert_eq(options.limits.max_audit_pairs, 19)
  let one = parse_args(["audit", "nginx.conf", "--limits", "max_sources=9"]).unwrap()
  assert_eq(one.limits.max_sources, 9)
  assert_eq(one.limits.max_rules, @nginx.Limits::default().max_rules)
}

///|
test "limits reject malformed and overflowing data rather than wrap" {
  for
    limits in [
      "max_sources=0", "max_sources=-1", "max_sources=+1", "max_sources=1.5", "max_sources=2147483648",
      "max_sources=999999999999999999999999", "max_sources=", "max_sources=1,", "max_sources=1=2",
    ] {
    assert_eq(
      parse_failure(["audit", "nginx.conf", "--limits", limits]),
      "invalid_limit",
    )
  }
  assert_eq(
    parse_failure([
      "audit", "nginx.conf", "--limits", "max_sources=1,max_sources=2",
    ]),
    "duplicate_limit",
  )
  assert_eq(
    parse_failure(["audit", "nginx.conf", "--limits", "sources=1"]),
    "unknown_limit",
  )
}
