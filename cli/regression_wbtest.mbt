///|
fn regression_options(command : String) -> Options {
  parse_args(
    [
      command,
      "nginx.conf",
      if command == "expect" {
        "10.0.0.0/24"
      } else if command == "request" {
        "10.0.0.1"
      } else {
        "nginx.conf"
      },
      "--host",
      "example.test",
      "--uri",
      "/admin/probe.txt",
      "--format",
      "json",
    ] +
    (if command == "expect" { ["--expect", "deny"] } else { [] }),
  ).unwrap()
}

///|
test "diff gate modes retain full differences and compare endpoint instead of ordinals" {
  let before = fixture_source(
    "http { server { server_name example.test; deny all; } }",
  )
  let after = fixture_source(
    "http { server { server_name other.test; deny all; } server { server_name example.test; allow all; } }",
  )
  let options = regression_options("diff")
  assert_eq(run_diff(options, before, after).exit_code, 1)
  assert_eq(
    run_diff({ ..options, gate: "no-widening", }, before, after).exit_code,
    1,
  )
  let accepted = run_diff({ ..options, gate: "no-tightening", }, before, after)
  assert_eq(accepted.exit_code, 0)
  let report = @json.parse(accepted.stdout)
  assert_eq(json_member(report, "equivalent"), Json(false))
  assert_eq(json_member(report, "gate_passed"), Json(true))
  assert_eq(
    json_string(json_member(report, "newly_allowed_count")),
    "4294967296",
  )
}

///|
test "whole subnet expectation rejects one violating half even when first address passes" {
  let options = regression_options("expect")
  let result = run(
    options,
    fixture_source("http { server { deny 10.0.0.0/25; allow all; } }"),
  )
  assert_eq(result.exit_code, 1)
  assert_eq(
    json_string(json_member(@json.parse(result.stdout), "newly_allowed_count")),
    "128",
  )
  assert_eq(
    run(options, fixture_source("http { server { deny all; } }")).exit_code,
    0,
  )
}

///|
test "routed command options reject missing targets cross-command flags and bad scopes" {
  for
    args in [
      ["diff", "a.conf", "b.conf"],
      ["expect", "a.conf", "10.0.0.0/24", "--host", "x", "--uri", "/"],
      ["request", "a.conf", "999.0.0.1", "--host", "x", "--uri", "/"],
      ["diff", "a.conf", "../b.conf", "--host", "x", "--uri", "/"],
      [
        "diff", "a.conf", "b.conf", "--host", "x", "--uri", "/", "--scope", "::/0",
      ],
      [
        "diff", "a.conf", "b.conf", "--host", "x", "--uri", "/", "--port", "65536",
      ],
      [
        "request", "a.conf", "127.0.0.1", "--host", "x", "--uri", "/", "--gate",
        "equivalent",
      ],
      ["diff", "a.conf", "b.conf", "--host", "x", "--host", "y", "--uri", "/"],
    ] {
    assert_true(parse_args(args) is Err(_))
  }
  for command in ["diff", "request", "expect"] {
    assert_eq(parse_args([command, "--help"]).unwrap().command, Help)
  }
}

///|
test "regression errors cannot masquerade as a successful partial report" {
  let options = regression_options("diff")
  let before = fixture_source("http { server { deny all; } }")
  let unsupported = fixture_source(
    "http { server { if ($request_method = GET) { return 200; } } }",
  )
  let result = run_diff(options, before, unsupported)
  assert_eq(result.exit_code, 3)
  assert_eq(result.stdout, "")
  assert_eq(json_member(@json.parse(result.stderr), "complete"), Json(false))
  assert_eq(
    run_diff(
      { ..options, limits: { ..options.limits, max_audit_pairs: 1, }, },
      before,
      before,
    ).exit_code,
    4,
  )
  assert_eq(run(options, before).exit_code, 2)
}
