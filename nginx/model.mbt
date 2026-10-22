///|
pub(all) struct SourceFile {
  path : String
  content : String
} derive(Eq, Debug)

///|
/// Limits count UTF-16 characters, not encoded bytes. All limits are positive.
pub(all) struct Limits {
  max_sources : Int32
  max_total_chars : Int32
  max_source_chars : Int32
  max_include_depth : Int32
  max_include_expansions : Int32
  max_context_depth : Int32
  max_directives : Int32
  max_contexts : Int32
  max_rules : Int32
  max_audit_pairs : Int32
} derive(Eq, Debug)

///|
pub fn Limits::default() -> Limits {
  {
    max_sources: 64,
    max_total_chars: 1048576,
    max_source_chars: 262144,
    max_include_depth: 16,
    max_include_expansions: 256,
    max_context_depth: 32,
    max_directives: 20000,
    max_contexts: 2048,
    max_rules: 4096,
    max_audit_pairs: 1000000,
  }
}

///|
pub(all) struct ConfigError {
  code : String
  message : String
  path : String
  line : Int32
} derive(Eq, Debug)

///|
pub fn ConfigError::summary(self : ConfigError) -> String {
  let location = if self.path == "" {
    ""
  } else if self.line > 0 {
    self.path + ":" + self.line.to_string() + ": "
  } else {
    self.path + ": "
  }
  location + self.code + ": " + self.message
}

///|
fn config_error(
  code : String,
  message : String,
  path~ : String = "",
  line~ : Int32 = 0,
) -> ConfigError {
  { code, message, path, line, }
}

///|
pub(all) struct SourceLocation {
  path : String
  line : Int32
  include_chain : Array[String]
} derive(Eq, Debug)

///|
pub(all) struct IncludeEdge {
  source : SourceLocation
  pattern : String
  targets : Array[String]
} derive(Eq, Debug)

///|
pub(all) struct Diagnostic {
  code : String
  severity : @cidr.Severity
  blocking : Bool
  message : String
  source : SourceLocation?
  context : String
} derive(Eq, Debug)

///|
pub(all) struct AccessRule {
  rule : @cidr.Rule
  source : SourceLocation
  owner_context : String
  raw_operand : String
} derive(Eq, Debug)

///|
pub(all) enum AccessOutcome {
  Allowed
  Denied
  Unrestricted
} derive(Eq, Debug)

///|
pub fn AccessOutcome::label(self : AccessOutcome) -> String {
  match self {
    Allowed => "allowed_by_rule"
    Denied => "denied_by_rule"
    Unrestricted => "no_address_restriction"
  }
}

///|
pub(all) struct ProbeResult {
  ip : String
  outcome : AccessOutcome
  context : String
  matched_rule : AccessRule?
} derive(Eq, Debug)

///|
pub(all) struct AuditFinding {
  code : String
  severity : @cidr.Severity
  message : String
  rule_id : String
  related_rule_ids : Array[String]
  source : SourceLocation
  context : String
} derive(Eq, Debug)

///|
pub(all) struct ContextAudit {
  context : String
  findings : Array[AuditFinding]
  blocking : Bool
} derive(Eq, Debug)

///|
pub fn ContextAudit::critical_count(self : ContextAudit) -> Int32 {
  self.count_severity(@cidr.Critical)
}

///|
pub fn ContextAudit::warning_count(self : ContextAudit) -> Int32 {
  self.count_severity(@cidr.Warning)
}

///|
pub fn ContextAudit::info_count(self : ContextAudit) -> Int32 {
  self.count_severity(@cidr.Info)
}

///|
fn ContextAudit::count_severity(
  self : ContextAudit,
  severity : @cidr.Severity,
) -> Int32 {
  let mut result = 0
  for finding in self.findings {
    if finding.severity == severity {
      result += 1
    }
  }
  result
}

///|
pub(all) struct AccessContext {
  selector : String
  kind : String
  label : String
  source : SourceLocation
  parent : String?
  inherited_from : String?
  declared_rules : Array[AccessRule]
  rules : Array[AccessRule]
  diagnostics : Array[Diagnostic]
  audit_pair_budget : Int32
  routing : Array[RoutingDirective]
} derive(Eq, Debug)

///|
/// Parsed, include-expanded declarations used by the conservative request router.
pub(all) struct RoutingDirective {
  name : String
  args : Array[String]
  source : SourceLocation
} derive(Eq, Debug)

///|
pub fn AccessContext::has_blocking(self : AccessContext) -> Bool {
  self.diagnostics.any(fn(item) { item.blocking })
}

///|
pub(all) struct Analysis {
  entry : String
  scope : String
  sources : Array[String]
  include_edges : Array[IncludeEdge]
  contexts : Array[AccessContext]
  diagnostics : Array[Diagnostic]
  audit_pair_budget : Int32
} derive(Eq, Debug)

///|
pub fn Analysis::has_blocking(self : Analysis) -> Bool {
  self.diagnostics.any(fn(item) { item.blocking }) ||
  self.contexts.any(fn(context) { context.has_blocking() })
}

///|
pub fn Analysis::context(
  self : Analysis,
  selector : String,
) -> Result[AccessContext, ConfigError] {
  for context in self.contexts {
    if context.selector == selector {
      return Ok(context)
    }
  }
  Err(config_error("unknown_context", "Unknown context: " + selector))
}

///|
pub fn AccessContext::probe(
  self : AccessContext,
  ip : String,
) -> Result[ProbeResult, ConfigError] {
  match @cidr.IPv4::parse(ip) {
    Err(message) => Err(config_error("invalid_probe", message))
    Ok(address) => self.probe_ipv4(address)
  }
}

///|
pub fn AccessContext::probe_ipv4(
  self : AccessContext,
  ip : @cidr.IPv4,
) -> Result[ProbeResult, ConfigError] {
  if self.has_blocking() {
    return Err(
      config_error(
        "unsupported_context",
        "Context has blocking diagnostics: " + self.selector,
        path=self.source.path,
        line=self.source.line,
      ),
    )
  }
  for item in self.rules {
    if item.rule.matches(ip) {
      return Ok({
        ip: ip.to_dotted(),
        outcome: if item.rule.action() == @cidr.Allow {
          Allowed
        } else {
          Denied
        },
        context: self.selector,
        matched_rule: Some(item),
      })
    }
  }
  Ok({
    ip: ip.to_dotted(),
    outcome: Unrestricted,
    context: self.selector,
    matched_rule: None,
  })
}
