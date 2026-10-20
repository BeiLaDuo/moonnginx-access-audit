///|
fn sarif_level(severity : @cidr.Severity) -> String {
  match severity {
    @cidr.Critical => "error"
    @cidr.Warning => "warning"
    @cidr.Info => "note"
  }
}

///|
/// Encode UTF-8 path bytes while preserving relative path separators.
fn sarif_uri(path : String) -> String {
  let hex = "0123456789ABCDEF".to_array()
  let output : Array[Char] = []
  for byte in @utf8.encode(path) {
    let value = byte.to_int()
    if (value >= 65 && value <= 90) ||
      (value >= 97 && value <= 122) ||
      (value >= 48 && value <= 57) ||
      [45, 46, 47, 95, 126].contains(value) {
      output.push(value.unsafe_to_char())
    } else {
      output.push('%')
      output.push(hex[value / 16])
      output.push(hex[value % 16])
    }
  }
  String::from_array(output)
}

///|
fn sarif_rule_codes() -> Array[String] {
  [
    "duplicate_rule", "unreachable_rule", "ordered_exception", "non_canonical_cidr",
    "unrestricted_allow", "wide_allow", "terminal_default", "no_access_rules", "unrestricted_fallback",
  ]
}

///|
fn sarif_finding(item : AuditFinding) -> Json {
  {
    "ruleId": Json(item.code),
    "level": Json(sarif_level(item.severity)),
    "message": { "text": Json(item.message) },
    "locations": [
      {
        "physicalLocation": {
          "artifactLocation": { "uri": Json(sarif_uri(item.source.path)) },
          "region": {
            "startLine": Json(
              if item.source.line > 0 {
                item.source.line
              } else {
                1
              },
            ),
          },
        },
      },
    ],
    "properties": {
      "context": Json(item.context),
      "ruleIdInConfiguration": Json(item.rule_id),
      "relatedRuleIds": Json(item.related_rule_ids),
      "includeChain": Json(item.source.include_chain),
    },
  }
}

///|
/// Render already-computed audits as SARIF 2.1.0 without performing IO.
/// A blocked analysis is marked unsuccessful and never emits clean findings.
pub fn render_sarif(
  analysis : Analysis,
  audits : Array[ContextAudit],
  selector~ : String? = None,
) -> String {
  let complete = !analysis.has_blocking() &&
    !audits.any(fn(audit) { audit.blocking })
  let results : Array[Json] = []
  if complete {
    for audit in audits {
      if selector is Some(value) && audit.context != value {
        continue
      }
      for item in audit.findings {
        results.push(sarif_finding(item))
      }
    }
  }
  let diagnostics = analysis.diagnostics.copy()
  for context in analysis.contexts {
    if selector is Some(value) &&
      context.selector != value &&
      !context.has_blocking() {
      continue
    }
    for item in context.diagnostics {
      diagnostics.push(item)
    }
  }
  let notifications = diagnostics.map(fn(item) {
    let value : Json = {
      "descriptor": { "id": Json(item.code) },
      "level": Json(
        if item.blocking {
          "error"
        } else {
          sarif_level(item.severity)
        },
      ),
      "message": { "text": Json(item.message) },
      "properties": {
        "context": Json(item.context),
        "source": diagnostic_json(item),
      },
    }
    value
  })
  let rules = sarif_rule_codes().map(fn(code) {
    let value : Json = {
      "id": Json(code),
      "shortDescription": { "text": Json(code.replace_all(old="_", new=" ")) },
      "helpUri": "https://github.com/BeiLaDuo/moonnginx-access-audit/blob/main/docs/sarif.md",
    }
    value
  })
  let log : Json = {
    "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
    "version": "2.1.0",
    "runs": [
      {
        "tool": {
          "driver": {
            "name": "MoonNginx Access Audit",
            "informationUri": "https://github.com/BeiLaDuo/moonnginx-access-audit",
            "rules": Json::array(rules),
          },
        },
        "invocations": [
          {
            "executionSuccessful": Json(complete),
            "toolExecutionNotifications": Json::array(notifications),
          },
        ],
        "results": Json::array(results),
        "properties": {
          "scope": Json(analysis.scope),
          "scopeNote": Json(scope_note()),
          "entry": Json(analysis.entry),
          "complete": Json(complete),
          "selectedContext": string_option_json(selector),
        },
      },
    ],
  }
  log.stringify(indent=2)
}
