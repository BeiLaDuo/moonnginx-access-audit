///|
pub(all) struct AccessChange {
  first : String
  last : String
  address_count : String
  newly_allowed : Bool
  before : ProbeResult
  after : ProbeResult
} derive(Eq, Debug)

///|
pub(all) struct AccessComparison {
  target : RequestTarget
  scope : String
  before_context : AccessContext
  after_context : AccessContext
  changes : Array[AccessChange]
  newly_allowed_count : String
  newly_denied_count : String
  compared_addresses : String
} derive(Eq, Debug)

///|
/// Partition only at rule boundaries. First-match decisions are constant inside
/// each resulting interval. UInt64 counts represent the complete 2^32 domain.
pub fn compare_access(
  before : Analysis,
  after : Analysis,
  target : RequestTarget,
  scope~ : String = "0.0.0.0/0",
  max_work~ : Int32 = 1000000,
  max_changes~ : Int32 = 20000,
) -> Result[AccessComparison, ConfigError] {
  let left = match before.resolve(target) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  let right = match after.resolve(target) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  let block = match @cidr.CidrBlock::parse(scope) {
    Ok(value) => value
    Err(message) => return Err(config_error("invalid_scope", message))
  }
  let lower = block.network().value()
  let upper = block.broadcast().value()
  let boundaries : Array[UInt32] = [lower]
  for context in [left, right] {
    for item in context.rules {
      let first = item.rule.block().network().value()
      let last = item.rule.block().broadcast().value()
      if first > lower && first <= upper {
        boundaries.push(first)
      }
      if last < upper && last >= lower {
        boundaries.push(last + 1U)
      }
    }
  }
  boundaries.sort()
  let unique : Array[UInt32] = []
  for value in boundaries {
    if unique.is_empty() || unique[unique.length() - 1] != value {
      unique.push(value)
    }
  }
  let work = unique.length().to_uint64() *
    (left.rules.length().to_uint64() + right.rules.length().to_uint64() + 2UL)
  if max_work < 1 || max_changes < 1 || work > max_work.to_uint64() {
    return Err(
      config_error(
        "limit_exceeded", "Exact comparison exceeds the decision work budget",
      ),
    )
  }
  let changes : Array[AccessChange] = []
  let mut newly_allowed = 0UL
  let mut newly_denied = 0UL
  for index = 0; index < unique.length(); index = index + 1 {
    let first = unique[index]
    let last = if index + 1 == unique.length() {
      upper
    } else {
      unique[index + 1] - 1U
    }
    let ip = @cidr.IPv4::new(first)
    let before_probe = match left.probe_ipv4(ip) {
      Ok(value) => value
      Err(error) => return Err(error)
    }
    let after_probe = match right.probe_ipv4(ip) {
      Ok(value) => value
      Err(error) => return Err(error)
    }
    let was_allowed = before_probe.outcome != Denied
    let is_allowed = after_probe.outcome != Denied
    if was_allowed == is_allowed {
      continue
    }
    if changes.length() >= max_changes {
      return Err(
        config_error(
          "limit_exceeded", "Exact comparison exceeds the output interval budget",
        ),
      )
    }
    let count = last.to_uint64() - first.to_uint64() + 1UL
    if is_allowed {
      newly_allowed += count
    } else {
      newly_denied += count
    }
    changes.push({
      first: ip.to_dotted(),
      last: @cidr.IPv4::new(last).to_dotted(),
      address_count: count.to_string(),
      newly_allowed: is_allowed,
      before: before_probe,
      after: after_probe,
    })
  }
  Ok({
    target,
    scope: block.to_string(),
    before_context: left,
    after_context: right,
    changes,
    newly_allowed_count: newly_allowed.to_string(),
    newly_denied_count: newly_denied.to_string(),
    compared_addresses: (upper.to_uint64() - lower.to_uint64() + 1UL).to_string(),
  })
}

///|
/// Test a whole CIDR against a requested address-module outcome, not one sample.
pub fn expect_access(
  analysis : Analysis,
  target : RequestTarget,
  scope : String,
  allow : Bool,
  max_work~ : Int32 = 1000000,
  max_changes~ : Int32 = 20000,
) -> Result[AccessComparison, ConfigError] {
  match target.validate() {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  let synthetic = analyze_nginx_sources("expected.conf", [
    {
      path: "expected.conf",
      content: "http { server { listen " +
      target.local_address +
      ":" +
      target.port.to_string() +
      "; server_name " +
      target.host +
      "; " +
      (if allow { "allow" } else { "deny" }) +
      " all; } }",
    },
  ])
  let expected = match synthetic {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  compare_access(expected, analysis, target, scope~, max_work~, max_changes~)
}

///|
fn target_json(target : RequestTarget) -> Json {
  {
    "host": Json(target.host),
    "uri": Json(target.uri),
    "port": Json(target.port),
    "local_address": Json(target.local_address),
  }
}

///|
fn probe_json(probe : ProbeResult) -> Json {
  {
    "ip": Json(probe.ip),
    "context": Json(probe.context),
    "outcome": Json(probe.outcome.label()),
    "matched_rule": match probe.matched_rule {
      Some(rule) => access_rule_json(rule)
      None => Json::null()
    },
  }
}

///|
pub fn AccessComparison::to_json(self : AccessComparison) -> Json {
  {
    "schema_version": Json(1),
    "complete": Json(true),
    "target": target_json(self.target),
    "scope": Json(self.scope),
    "scope_note": Json(
      "IPv4 address-module outcomes for this endpoint and normalized URI only; not final HTTP authorization or all-URL equivalence",
    ),
    "before_context": Json(self.before_context.selector),
    "after_context": Json(self.after_context.selector),
    "before_context_source": source_json(self.before_context.source),
    "after_context_source": source_json(self.after_context.source),
    "before_inherited_from": string_option_json(
      self.before_context.inherited_from,
    ),
    "after_inherited_from": string_option_json(
      self.after_context.inherited_from,
    ),
    "compared_addresses": Json(self.compared_addresses),
    "newly_allowed_count": Json(self.newly_allowed_count),
    "newly_denied_count": Json(self.newly_denied_count),
    "equivalent": Json(self.changes.is_empty()),
    "changes": Json(
      self.changes.map(fn(change) {
        {
          "first": Json(change.first),
          "last": Json(change.last),
          "address_count": Json(change.address_count),
          "direction": Json(
            if change.newly_allowed {
              "newly_allowed"
            } else {
              "newly_denied"
            },
          ),
          "witness": Json(change.first),
          "before": probe_json(change.before),
          "after": probe_json(change.after),
        }
      }),
    ),
  }
}

///|
pub fn AccessComparison::render(
  self : AccessComparison,
  format : String,
) -> String {
  if format == "json" {
    return self.to_json().stringify()
  }
  let lines = [
    "MoonNginx request access regression",
    self.target.host + ":" + self.target.port.to_string() + self.target.uri,
    "IPv4 scope: " + self.scope + " (" + self.compared_addresses + " addresses)",
    "newly allowed: " + self.newly_allowed_count,
    "newly denied: " + self.newly_denied_count,
    "before context: " + self.before_context.selector,
    "after context: " + self.after_context.selector,
  ]
  for change in self.changes {
    lines.push(
      (if change.newly_allowed { "NEW ALLOW " } else { "NEW DENY " }) +
      change.first +
      " - " +
      change.last +
      " (" +
      change.address_count +
      ")",
    )
    for (label, probe) in [("before", change.before), ("after", change.after)] {
      let origin = match probe.matched_rule {
        Some(rule) =>
          rule.source.path +
          ":" +
          rule.source.line.to_string() +
          " via " +
          rule.source.include_chain.join(" -> ")
        None => "unrestricted fallthrough (no matching address rule)"
      }
      lines.push("  " + label + ": " + probe.outcome.label() + " at " + origin)
    }
  }
  lines.push(
    "Conclusion is limited to the address module, selected endpoint/URI and explicit IPv4 scope.",
  )
  let output = lines.join("\n") + "\n"
  if format == "markdown" {
    "```text\n" + output + "```\n"
  } else {
    output
  }
}
