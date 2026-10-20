///|
test "SARIF uses UTF-8 URI escaping without changing path separators" {
  assert_eq(
    sarif_uri("配置/allow #%.conf"),
    "%E9%85%8D%E7%BD%AE/allow%20%23%25.conf",
  )
  assert_eq(sarif_uri("conf.d/a-b_~.conf"), "conf.d/a-b_~.conf")
}

///|
test "SARIF preserves JSON strings and source locations" {
  let item : AuditFinding = {
    code: "wide_allow",
    severity: @cidr.Warning,
    message: "review \"quoted\"\nnetwork",
    rule_id: "R1",
    related_rule_ids: ["R0"],
    source: { path: "conf/a #.conf", line: 7, include_chain: ["nginx.conf"], },
    context: "http[1]/server[1]",
  }
  let value = sarif_finding(item)
  // Reparse the external representation rather than inspecting a substring.
  assert_eq(@json.parse(value.stringify()), value)
  assert_true(value.stringify().contains("conf/a%20%23.conf"))
  assert_true(value.stringify().contains("startLine"))
}
