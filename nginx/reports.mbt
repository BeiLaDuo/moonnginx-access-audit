///|
fn scope_note() -> String {
  "Only the IPv4 ngx_http_access_module rules in a selected structural context are modeled. No address restriction is not a statement of final request authorization."
}

///|
/// Inherited rules appear in every context's report. Bound these expanded
/// views before allocating JSON, independently of the parsed source size.
pub fn check_report_budget(
  analysis : Analysis,
  selector : String?,
  maximum : Int32,
  audits~ : Array[ContextAudit] = [],
) -> Result[Unit, ConfigError] {
  let mut remaining = maximum
  let consume = fn(count : Int32) -> Bool {
    if count > remaining {
      false
    } else {
      remaining -= count
      true
    }
  }
  if maximum < 1 ||
    !consume(analysis.diagnostics.length()) ||
    !consume(analysis.include_edges.length()) ||
    !consume(analysis.sources.length()) {
    return Err(config_error("limit_exceeded", "Report row budget exhausted"))
  }
  for context in analysis.contexts {
    if selector is Some(value) && context.selector != value {
      continue
    }
    if !consume(1) ||
      !consume(context.declared_rules.length()) ||
      !consume(context.rules.length()) ||
      !consume(context.diagnostics.length()) {
      return Err(
        config_error(
          "limit_exceeded",
          "Inherited report rows exceed max_directives",
          path=context.source.path,
          line=context.source.line,
        ),
      )
    }
  }
  for audit in audits {
    if !consume(audit.findings.length()) {
      return Err(
        config_error(
          "limit_exceeded", "Finding report rows exceed max_directives",
        ),
      )
    }
    for finding in audit.findings {
      if !consume(finding.related_rule_ids.length()) {
        return Err(
          config_error(
            "limit_exceeded",
            "Related-rule report rows exceed max_directives",
            path=finding.source.path,
            line=finding.source.line,
          ),
        )
      }
    }
  }
  Ok(())
}

///|
fn string_option_json(value : String?) -> Json {
  match value {
    Some(text) => Json(text)
    None => Json::null()
  }
}

///|
fn source_json(source : SourceLocation) -> Json {
  {
    "file": Json(source.path),
    "line": Json(source.line),
    "include_chain": Json(source.include_chain),
  }
}

///|
fn diagnostic_json(item : Diagnostic) -> Json {
  let source = match item.source {
    Some(value) => source_json(value)
    None => Json::null()
  }
  {
    "code": Json(item.code),
    "severity": Json(item.severity.label()),
    "blocking": Json(item.blocking),
    "message": Json(item.message),
    "context": Json(item.context),
    "source": source,
  }
}

///|
fn access_rule_json(item : AccessRule) -> Json {
  {
    "id": Json(item.rule.id()),
    "action": Json(item.rule.action().label()),
    "cidr": Json(item.rule.block().to_string()),
    "raw_operand": Json(item.raw_operand),
    "owner_context": Json(item.owner_context),
    "source": source_json(item.source),
  }
}

///|
fn context_json(context : AccessContext) -> Json {
  {
    "selector": Json(context.selector),
    "kind": Json(context.kind),
    "label": Json(context.label),
    "source": source_json(context.source),
    "parent": string_option_json(context.parent),
    "inherited_from": string_option_json(context.inherited_from),
    "declared_rules": Json::array(context.declared_rules.map(access_rule_json)),
    "effective_rules": Json::array(context.rules.map(access_rule_json)),
    "diagnostics": Json::array(context.diagnostics.map(diagnostic_json)),
  }
}

///|
fn edge_json(edge : IncludeEdge) -> Json {
  {
    "source": source_json(edge.source),
    "pattern": Json(edge.pattern),
    "targets": Json(edge.targets),
  }
}

///|
fn finding_json(item : AuditFinding) -> Json {
  {
    "code": Json(item.code),
    "severity": Json(item.severity.label()),
    "message": Json(item.message),
    "rule_id": Json(item.rule_id),
    "related_rule_ids": Json(item.related_rule_ids),
    "source": source_json(item.source),
    "context": Json(item.context),
  }
}

///|
fn audit_json(audit : ContextAudit) -> Json {
  {
    "context": Json(audit.context),
    "blocking": Json(audit.blocking),
    "critical": Json(audit.critical_count()),
    "warning": Json(audit.warning_count()),
    "info": Json(audit.info_count()),
    "findings": Json::array(audit.findings.map(finding_json)),
  }
}

///|
fn selected_contexts(
  analysis : Analysis,
  selector : String?,
) -> Array[AccessContext] {
  match selector {
    None => analysis.contexts
    Some(value) =>
      analysis.contexts.filter(fn(context) { context.selector == value })
  }
}

///|
fn analysis_json(analysis : Analysis, selector : String?) -> Json {
  {
    "schema_version": 1,
    "scope": Json(analysis.scope),
    "scope_note": Json(scope_note()),
    "entry": Json(analysis.entry),
    "sources": Json(analysis.sources),
    "complete": Json(!analysis.has_blocking()),
    "diagnostics": Json::array(analysis.diagnostics.map(diagnostic_json)),
    "include_edges": Json::array(analysis.include_edges.map(edge_json)),
    "contexts": Json::array(
      selected_contexts(analysis, selector).map(context_json),
    ),
  }
}

///|
fn md_cell(value : String) -> String {
  let result : Array[Char] = []
  for char in value.to_array() {
    match char {
      '\\' | '|' | '`' | '<' | '>' | '&' => {
        result.push('\\')
        result.push(char)
      }
      '\n' | '\r' => result.push(' ')
      _ => result.push(char)
    }
  }
  String::from_array(result)
}

///|
fn location_text(source : SourceLocation) -> String {
  source.path + ":" + source.line.to_string()
}

///|
fn diagnostic_text(item : Diagnostic) -> String {
  let source = match item.source {
    Some(value) => " " + location_text(value)
    None => ""
  }
  "[" + item.severity.label() + "] " + item.code + source + ": " + item.message
}

///|
fn text_header(analysis : Analysis) -> String {
  "MoonCIDR Nginx IPv4 audit\n" +
  "Entry: " +
  analysis.entry +
  "\n" +
  "Scope: " +
  analysis.scope +
  "\n" +
  "Complete: " +
  (!analysis.has_blocking()).to_string() +
  "\n" +
  scope_note() +
  "\n"
}

///|
fn text_context(context : AccessContext) -> String {
  let inheritance = match context.inherited_from {
    Some(value) => " inherited from " + value
    None => " declared locally"
  }
  let mut output = "\n" +
    context.selector +
    " " +
    context.label +
    " (" +
    location_text(context.source) +
    ")" +
    inheritance +
    "\n"
  for item in context.rules {
    output += "  " +
      item.rule.id() +
      " " +
      item.rule.action().label() +
      " " +
      item.raw_operand +
      " at " +
      location_text(item.source) +
      "\n"
  }
  if context.rules.is_empty() {
    output += "  No address restriction in the modeled module.\n"
  }
  for item in context.diagnostics {
    output += "  " + diagnostic_text(item) + "\n"
  }
  output
}

///|
/// Render already-computed analysis; this function never performs hidden audits.
pub fn render_analysis(
  analysis : Analysis,
  format : String,
  selector : String?,
) -> String {
  if format == "json" {
    return analysis_json(analysis, selector).stringify(indent=2)
  }
  let contexts = selected_contexts(analysis, selector)
  if format == "markdown" {
    let mut output = "# Nginx IPv4 access analysis\n\n" +
      scope_note() +
      "\n\nEntry: " +
      md_cell(analysis.entry) +
      "\n\n" +
      "| Context | Label | Effective rules | Inherited from | Source |\n" +
      "|---|---|---:|---|---|\n"
    for context in contexts {
      let inherited = match context.inherited_from {
        Some(value) => value
        None => ""
      }
      output += "| " +
        md_cell(context.selector) +
        " | " +
        md_cell(context.label) +
        " | " +
        context.rules.length().to_string() +
        " | " +
        md_cell(inherited) +
        " | " +
        md_cell(location_text(context.source)) +
        " |\n"
    }
    output += "\n## Diagnostics\n\n"
    for item in analysis.diagnostics {
      output += "- " + md_cell(diagnostic_text(item)) + "\n"
    }
    for context in contexts {
      for item in context.diagnostics {
        output += "- " + md_cell(diagnostic_text(item)) + "\n"
      }
    }
    return output
  }
  let mut output = text_header(analysis)
  for item in analysis.diagnostics {
    output += diagnostic_text(item) + "\n"
  }
  for context in contexts {
    output += text_context(context)
  }
  output
}

///|
pub fn render_contexts(analysis : Analysis, format : String) -> String {
  render_analysis(analysis, format, None)
}

///|
pub fn render_probe(result : ProbeResult, format : String) -> String {
  let matched = match result.matched_rule {
    Some(value) => access_rule_json(value)
    None => Json::null()
  }
  if format == "json" {
    let value : Json = {
      "schema_version": 1,
      "scope": "nginx_http_access_ipv4",
      "scope_note": Json(scope_note()),
      "context": Json(result.context),
      "ip": Json(result.ip),
      "outcome": Json(result.outcome.label()),
      "matched_rule": matched,
    }
    return value.stringify(indent=2)
  }
  let rule_text = match result.matched_rule {
    Some(value) =>
      "\nRule: " + value.rule.id() + " at " + location_text(value.source)
    None => "\nRule: none"
  }
  let heading = if format == "markdown" {
    "# IPv4 address probe\n\n"
  } else {
    "IPv4 address probe\n"
  }
  heading +
  "Context: " +
  result.context +
  "\nIP: " +
  result.ip +
  "\nOutcome: " +
  result.outcome.label() +
  rule_text +
  "\n\n" +
  scope_note()
}

///|
pub fn render_audits(
  analysis : Analysis,
  audits : Array[ContextAudit],
  format : String,
  selector : String?,
) -> String {
  if format == "json" {
    let value = analysis_json(analysis, selector)
    if value is Object(map) {
      map["audits"] = Json::array(audits.map(audit_json))
    }
    return value.stringify(indent=2)
  }
  let mut output = render_analysis(analysis, format, selector)
  output += if format == "markdown" {
    "\n## Findings\n\n| Context | Severity | Code | Rule | Message | Source |\n|---|---|---|---|---|---|\n"
  } else {
    "\nFindings:\n"
  }
  for audit in audits {
    for item in audit.findings {
      if format == "markdown" {
        output += "| " +
          md_cell(item.context) +
          " | " +
          item.severity.label() +
          " | " +
          md_cell(item.code) +
          " | " +
          md_cell(item.rule_id) +
          " | " +
          md_cell(item.message) +
          " | " +
          md_cell(location_text(item.source)) +
          " |\n"
      } else {
        output += "[" +
          item.severity.label() +
          "] " +
          item.context +
          " " +
          item.code +
          " " +
          item.rule_id +
          " at " +
          location_text(item.source) +
          ": " +
          item.message +
          "\n"
      }
    }
  }
  output
}

///|
pub fn render_error(error : ConfigError, format : String) -> String {
  if format == "json" {
    let value : Json = {
      "schema_version": 1,
      "scope": "nginx_http_access_ipv4",
      "complete": false,
      "error": {
        "code": Json(error.code),
        "message": Json(error.message),
        "file": Json(error.path),
        "line": Json(error.line),
      },
    }
    return value.stringify(indent=2)
  }
  if format == "markdown" {
    "# Analysis failed\n\n" + md_cell(error.summary())
  } else {
    error.summary()
  }
}
