///|
pub(all) struct CliResult {
  exit_code : Int32
  stdout : String
  stderr : String
} derive(Eq, Debug)

///|
pub fn help_text() -> String {
  (
    #|MoonNginx Access Audit - offline Nginx IPv4 address-access analysis
    #|
    #|Usage:
    #|  moonnginx-access-audit contexts CONFIG [OPTIONS]
    #|  moonnginx-access-audit audit CONFIG [--context ID] [--strict] [OPTIONS]
    #|  moonnginx-access-audit probe CONFIG IP --context ID [OPTIONS]
    #|  moonnginx-access-audit validate CONFIG [OPTIONS]
    #|  moonnginx-access-audit help
    #|  moonnginx-access-audit version
    #|  moonnginx-access-audit COMMAND --help
    #|
    #|Options:
    #|  --root DIRECTORY     Local input root, default '.'
    #|  --format FORMAT      text, json, or markdown; default text
    #|  --context ID         Exact selector from the contexts command
    #|  --strict             Audit also fails on warnings
    #|  --limits NAME=VALUE,...   Override positive integer resource limits
    #|  --                   End options; later arguments are literal paths/IPs
    #|
    #|Limit names: max_sources, max_total_chars, max_source_chars,
    #|max_include_depth, max_include_expansions, max_directives,
    #|max_contexts, max_context_depth, max_rules, max_audit_pairs.
    #|Example: --limits max_sources=32,max_include_depth=8
    #|
    #|CONFIG is relative to --root. Includes are anchored to CONFIG's directory.
    #|This tool analyzes only the supported Nginx IPv4 allow/deny scope.
    #|A probe reports address-rule behavior; it does not authorize a request.
    #|It does not infer a location from a URL or model authentication.
    #|
    #|Exit codes: 0 completed; 1 audit gate failed; 2 input/IO error;
    #|3 unsupported or incomplete analysis; 4 resource budget exceeded.
  )
}

///|
fn complete(exit_code : Int32, output : String) -> CliResult {
  { exit_code, stdout: output, stderr: "", }
}

///|
fn config_failure(error : @nginx.ConfigError, format : String) -> CliResult {
  let exit_code = if error.code == "limit_exceeded" {
    4
  } else if error.code.has_prefix("unsupported") {
    3
  } else {
    2
  }
  { exit_code, stdout: "", stderr: @nginx.render_error(error, format), }
}

///|
fn cli_failure(error : CliError, format : String) -> CliResult {
  let detail : @nginx.ConfigError = {
    code: error.code,
    message: error.message,
    path: "",
    line: 0,
  }
  { exit_code: 2, stdout: "", stderr: @nginx.render_error(detail, format), }
}

///|
/// Keep argument failures machine-readable without interpreting literal filenames.
pub fn argument_failure(error : CliError, args : Array[String]) -> CliResult {
  let mut index = 1
  while index < args.length() {
    let option = args[index]
    if option == "--" {
      break
    }
    if option == "--format" && index + 1 < args.length() {
      let format = args[index + 1]
      return cli_failure(
        error,
        if ["json", "markdown", "text"].contains(format) {
          format
        } else {
          "text"
        },
      )
    }
    index += if ["--root", "--context", "--limits"].contains(option) {
      2
    } else {
      1
    }
  }
  cli_failure(error, "text")
}

///|
/// Run against caller-provided sources; this function opens no files or sockets.
/// A successful result concerns the declared analysis scope, not nginx -t.
pub fn run(options : Options, sources : Array[@nginx.SourceFile]) -> CliResult {
  if options.command == Help {
    return complete(0, help_text())
  }
  if options.command == Version {
    return complete(0, "MoonNginx Access Audit Nginx analyzer 0.2.0\n")
  }
  // Public Options may also be constructed directly by library callers.
  match validate_entry(options.entry) {
    Err(error) => return cli_failure(error, options.format)
    Ok(_) => ()
  }
  if options.format != "text" &&
    options.format != "json" &&
    options.format != "markdown" {
    return cli_failure(
      argument_error("invalid_format", "format must be text, json, or markdown"),
      "text",
    )
  }
  if options.command == Probe &&
    (options.context_selector is None || options.ip is None) {
    return cli_failure(
      argument_error(
        "invalid_arguments", "probe requires IP and context selector",
      ),
      options.format,
    )
  }
  if options.command == Probe {
    match validate_probe_ip(options.ip.unwrap()) {
      Err(error) => return cli_failure(error, options.format)
      Ok(_) => ()
    }
  }
  let analysis = match
    @nginx.analyze_nginx_sources(options.entry, sources, limits=options.limits) {
    Ok(value) => value
    Err(error) => return config_failure(error, options.format)
  }
  // Do not let a partial import or unsupported directive produce a clean report.
  if options.command != Probe || analysis.has_blocking() {
    let selector = if options.command == Contexts || options.command == Validate {
      None
    } else {
      options.context_selector
    }
    match
      @nginx.check_report_budget(
        analysis,
        selector,
        options.limits.max_directives,
      ) {
      Ok(_) => ()
      Err(error) => return config_failure(error, options.format)
    }
  }
  if analysis.has_blocking() {
    let output = if options.command == Contexts {
      @nginx.render_contexts(analysis, options.format)
    } else {
      @nginx.render_analysis(analysis, options.format, options.context_selector)
    }
    return complete(3, output)
  }
  match options.command {
    Contexts => complete(0, @nginx.render_contexts(analysis, options.format))
    Validate =>
      complete(0, @nginx.render_analysis(analysis, options.format, None))
    Probe => {
      let selector = options.context_selector.unwrap()
      let context = match analysis.context(selector) {
        Ok(value) => value
        Err(error) => return config_failure(error, options.format)
      }
      let result = match context.probe(options.ip.unwrap()) {
        Ok(value) => value
        Err(error) => return config_failure(error, options.format)
      }
      complete(0, @nginx.render_probe(result, options.format))
    }
    Audit => {
      let audits = match options.context_selector {
        Some(selector) => {
          let context = match analysis.context(selector) {
            Ok(value) => value
            Err(error) => return config_failure(error, options.format)
          }
          match context.audit() {
            Ok(value) => [value]
            Err(error) => return config_failure(error, options.format)
          }
        }
        None =>
          match analysis.audits() {
            Ok(value) => value
            Err(error) => return config_failure(error, options.format)
          }
      }
      let mut gate_failed = false
      match
        @nginx.check_report_budget(
          analysis,
          options.context_selector,
          options.limits.max_directives,
          audits~,
        ) {
        Ok(_) => ()
        Err(error) => return config_failure(error, options.format)
      }
      for audit in audits {
        if audit.blocking {
          return complete(
            3,
            @nginx.render_audits(
              analysis,
              audits,
              options.format,
              options.context_selector,
            ),
          )
        }
        if audit.critical_count() > 0 ||
          (options.strict && audit.warning_count() > 0) {
          gate_failed = true
        }
      }
      let exit_code = if gate_failed { 1 } else { 0 }
      complete(
        exit_code,
        @nginx.render_audits(
          analysis,
          audits,
          options.format,
          options.context_selector,
        ),
      )
    }
    Help | Version => complete(0, "")
  }
}
