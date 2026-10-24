///|
fn security_scope_note() -> String {
  "Selected static HTTP configuration security checks only; no full module, data-flow, exploitability or request-authorization proof"
}

///|
fn security_finding_json(item : SecurityFinding) -> Json {
  {
    "code": Json(item.code),
    "severity": Json(item.severity.label()),
    "message": Json(item.message),
    "remediation": Json(item.remediation),
    "source": source_json(item.source),
    "context": Json(item.context),
    "evidence": Json(item.evidence),
  }
}

///|
/// Render computed findings; incomplete coverage retains findings and diagnostics.
pub fn render_security(report : SecurityReport, format : String) -> String {
  if format == "json" {
    let value : Json = {
      "schema_version": 1,
      "entry": Json(report.entry),
      "scope": "nginx_http_static_security",
      "scope_note": Json(security_scope_note()),
      "complete": Json(!report.has_blocking()),
      "checks": Json(report.checks),
      "findings": Json::array(report.findings.map(security_finding_json)),
      "diagnostics": Json::array(report.diagnostics.map(diagnostic_json)),
    }
    return value.stringify(indent=2)
  }
  if format == "sarif" {
    let results = report.findings.map(fn(item) {
      let result : Json = {
        "ruleId": Json(item.code),
        "level": Json(sarif_level(item.severity)),
        "message": {
          "text": Json(item.message + " Remediation: " + item.remediation),
        },
        "locations": [
          {
            "physicalLocation": {
              "artifactLocation": { "uri": Json(sarif_uri(item.source.path)) },
              "region": { "startLine": Json(item.source.line) },
            },
          },
        ],
        "properties": {
          "context": Json(item.context),
          "evidence": Json(item.evidence),
          "includeChain": Json(item.source.include_chain),
        },
      }
      result
    })
    let notifications = report.diagnostics.map(fn(item) {
      let result : Json = {
        "descriptor": { "id": Json(item.code) },
        "level": Json(
          if item.blocking {
            "error"
          } else {
            sarif_level(item.severity)
          },
        ),
        "message": { "text": Json(item.message) },
        "properties": { "source": diagnostic_json(item) },
      }
      result
    })
    let rules = report.checks.map(fn(code) {
      let result : Json = {
        "id": Json(code),
        "shortDescription": { "text": Json(code.replace_all(old="_", new=" ")) },
        "helpUri": "https://github.com/BeiLaDuo/moonnginx-access-audit/blob/main/docs/security-scanner.md",
      }
      result
    })
    let value : Json = {
      "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
      "version": "2.1.0",
      "runs": [
        {
          "tool": {
            "driver": {
              "name": "MoonNginx Access Audit",
              "version": "0.4.0",
              "informationUri": "https://github.com/BeiLaDuo/moonnginx-access-audit",
              "rules": Json::array(rules),
            },
          },
          "results": Json::array(results),
          "invocations": [
            {
              "executionSuccessful": Json(!report.has_blocking()),
              "toolExecutionNotifications": Json::array(notifications),
            },
          ],
          "properties": {
            "scope": "nginx_http_static_security",
            "scopeNote": Json(security_scope_note()),
          },
        },
      ],
    }
    return value.stringify(indent=2)
  }
  let markdown = format == "markdown"
  let output : Array[String] = [
    if markdown {
      "# Nginx security configuration scan"
    } else {
      "Nginx security configuration scan"
    },
    "Entry: " + report.entry,
    "Coverage: " +
    (if report.has_blocking() {
      "INCOMPLETE"
    } else {
      "selected checks completed"
    }),
    security_scope_note(),
  ]
  for item in report.findings {
    output.push(
      "\n" +
      (if markdown { "## " } else { "" }) +
      item.code +
      " [" +
      item.severity.label() +
      "]",
    )
    output.push(
      item.source.path + ":" + item.source.line.to_string() + " " + item.context,
    )
    output.push(item.message)
    output.push("Evidence: " + item.evidence)
    output.push("Remediation: " + item.remediation)
    if item.source.include_chain.length() > 0 {
      output.push("Include chain: " + item.source.include_chain.join(" -> "))
    }
  }
  for item in report.diagnostics {
    output.push("\n" + item.code + ": " + item.message)
  }
  output.push("\nFindings: " + report.findings.length().to_string())
  output.join("\n") + "\n"
}
