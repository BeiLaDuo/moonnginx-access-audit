///|
fn finding(
  context : AccessContext,
  item : AccessRule,
  code : String,
  severity : @cidr.Severity,
  message : String,
  related~ : Array[String] = [],
) -> AuditFinding {
  {
    code,
    severity,
    message,
    rule_id: item.rule.id(),
    related_rule_ids: related,
    source: item.source,
    context: context.selector,
  }
}

///|
/// Coverage over one IPv4 interval, computed without enumerating addresses.
priv struct OwnedRange {
  begin : UInt32
  end : UInt32
  action : @cidr.RuleAction
}

///|
fn uncovered_ranges(
  block : @cidr.CidrBlock,
  effective : Array[OwnedRange],
) -> Array[(UInt32, UInt32)] {
  let ranges : Array[(UInt32, UInt32)] = []
  let begin = block.network().value()
  let end = block.broadcast().value()
  let mut cursor = begin
  for range in effective {
    if range.end < cursor {
      continue
    }
    if range.begin > end {
      break
    }
    if range.begin > cursor {
      ranges.push((cursor, range.begin - 1U))
    }
    if range.end >= end {
      return ranges
    }
    // range.end < end <= UInt::MAX, so the addition cannot wrap.
    cursor = range.end + 1U
  }
  ranges.push((cursor, end))
  ranges
}

///|
fn audit_context(
  context : AccessContext,
  maximum : Int32,
) -> Result[(ContextAudit, Int32), ConfigError] {
  let findings : Array[AuditFinding] = []
  let previous : Array[AccessRule] = []
  let effective : Array[OwnedRange] = []
  let mut pairs = 0
  for item in context.rules {
    if previous.length() > maximum - pairs {
      return Err(
        config_error(
          "limit_exceeded",
          "Audit pair budget exhausted",
          path=item.source.path,
          line=item.source.line,
        ),
      )
    }
    pairs += previous.length()
    let block = item.rule.block()
    let mut duplicate : AccessRule? = None
    let mut overlap = false
    let related : Array[String] = []
    for old in previous {
      if old.rule.block().equal_range(block) &&
        old.rule.action() == item.rule.action() &&
        duplicate is None {
        duplicate = Some(old)
      }
      if old.rule.block().overlaps(block) {
        overlap = true
        related.push(old.rule.id())
      }
    }
    let uncovered = uncovered_ranges(block, effective)
    let covered = uncovered.length() == 0
    match duplicate {
      Some(old) =>
        findings.push(
          finding(
            context,
            item,
            "duplicate_rule",
            @cidr.Warning,
            "Rule repeats an earlier operand and action",
            related=[old.rule.id()],
          ),
        )
      None => ()
    }
    if covered {
      let opposite_effective = effective.any(fn(range) {
        range.action != item.rule.action() &&
        range.begin <= block.broadcast().value() &&
        range.end >= block.network().value()
      })
      let severity = if opposite_effective {
        @cidr.Critical
      } else {
        @cidr.Warning
      }
      findings.push(
        finding(
          context,
          item,
          "unreachable_rule",
          severity,
          "Earlier first-match rules cover this entire range; this rule cannot match",
          related~,
        ),
      )
    } else if overlap && block.prefix() != 0 {
      findings.push(
        finding(
          context,
          item,
          "ordered_exception",
          @cidr.Info,
          "This range partly overlaps earlier rules; source order controls the exceptions",
          related~,
        ),
      )
    }
    if item.raw_operand != "all" &&
      @cidr.CidrBlock::has_host_bits(item.raw_operand) {
      findings.push(
        finding(
          context,
          item,
          "non_canonical_cidr",
          @cidr.Info,
          "CIDR host bits are normalized to " + block.to_string(),
        ),
      )
    }
    if !covered && item.rule.action() == @cidr.Allow && block.prefix() == 0 {
      findings.push(
        finding(
          context,
          item,
          "unrestricted_allow",
          @cidr.Critical,
          "This rule permits every remaining IPv4 address",
        ),
      )
    } else if !covered &&
      item.rule.action() == @cidr.Allow &&
      block.prefix() <= 8 {
      findings.push(
        finding(
          context,
          item,
          "wide_allow",
          @cidr.Warning,
          "Review this broad IPv4 allow range: " + block.to_string(),
        ),
      )
    }
    if !covered && item.rule.action() == @cidr.Deny && block.prefix() == 0 {
      findings.push(
        finding(
          context,
          item,
          "terminal_default",
          @cidr.Info,
          "Remaining IPv4 addresses are denied; earlier allow rules remain effective",
        ),
      )
    }
    previous.push(item)
    for range in uncovered {
      effective.push({
        begin: range.0,
        end: range.1,
        action: item.rule.action(),
      })
    }
    effective.sort_by(fn(left, right) { left.begin.compare(right.begin) })
  }
  if context.rules.length() == 0 {
    findings.push({
      code: "no_access_rules",
      severity: @cidr.Info,
      message: "This context has no effective IPv4 access rules",
      rule_id: "",
      related_rule_ids: [],
      source: context.source,
      context: context.selector,
    })
  } else {
    let universe = @cidr.CidrBlock::parse("0.0.0.0/0").unwrap()
    if uncovered_ranges(universe, effective).length() > 0 {
      findings.push(
        finding(
          context,
          context.rules[context.rules.length() - 1],
          "unrestricted_fallback",
          @cidr.Warning,
          "Some IPv4 addresses match no rule; the address module leaves them unrestricted",
        ),
      )
    }
  }
  Ok(
    (
      { context: context.selector, findings, blocking: context.has_blocking(), },
      pairs,
    ),
  )
}

///|
pub fn AccessContext::audit(
  self : AccessContext,
) -> Result[ContextAudit, ConfigError] {
  match audit_context(self, self.audit_pair_budget) {
    Ok((report, _)) => Ok(report)
    Err(error) => Err(error)
  }
}

///|
pub fn Analysis::audits(
  self : Analysis,
) -> Result[Array[ContextAudit], ConfigError] {
  let reports : Array[ContextAudit] = []
  let mut remaining = self.audit_pair_budget
  for context in self.contexts {
    match audit_context(context, remaining) {
      Err(error) => return Err(error)
      Ok((report, work)) => {
        remaining -= work
        reports.push(report)
      }
    }
  }
  Ok(reports)
}
