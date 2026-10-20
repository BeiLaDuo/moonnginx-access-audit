///|
pub(all) enum Command {
  Help
  Version
  Contexts
  Audit
  Probe
  Validate
} derive(Eq, Debug)

///|
/// Options contain no filesystem handles. The caller supplies a bounded source bundle.
pub(all) struct Options {
  command : Command
  input_root : String
  entry : String
  context_selector : String?
  ip : String?
  format : String
  strict : Bool
  limits : @nginx.Limits
} derive(Debug)

///|
pub(all) struct CliError {
  code : String
  message : String
} derive(Eq, Debug)

///|
pub fn CliError::summary(self : CliError) -> String {
  self.code + ": " + self.message
}

///|
fn argument_error(code : String, message : String) -> CliError {
  { code, message, }
}

///|
fn validate_probe_ip(ip : String) -> Result[Unit, CliError] {
  match @cidr.IPv4::parse(ip) {
    Ok(_) => Ok(())
    Err(message) => Err(argument_error("invalid_probe", message))
  }
}

///|
fn basic_options(command : Command) -> Options {
  {
    command,
    input_root: ".",
    entry: "",
    context_selector: None,
    ip: None,
    format: "text",
    strict: false,
    limits: @nginx.Limits::default(),
  }
}

///|
/// Parse only arguments after the program name; options must use separate values.
pub fn parse_args(args : Array[String]) -> Result[Options, CliError] {
  if args.is_empty() {
    return Ok(basic_options(Help))
  }
  let command = match args[0] {
    "help" | "--help" | "-h" => Help
    "version" | "--version" => Version
    "contexts" => Contexts
    "audit" => Audit
    "probe" => Probe
    "validate" => Validate
    other =>
      return Err(argument_error("unknown_command", "unknown command: " + other))
  }
  let defaults = basic_options(command)
  if command == Help || command == Version {
    if args.length() != 1 {
      return Err(
        argument_error(
          "unexpected_argument", "help and version accept no arguments",
        ),
      )
    }
    return Ok(defaults)
  }
  // Asking for command help must not require or open a configuration file.
  if args.length() == 2 && (args[1] == "--help" || args[1] == "-h") {
    return Ok(basic_options(Help))
  }
  let positionals : Array[String] = []
  let seen : Array[String] = []
  let mut input_root = defaults.input_root
  let mut context_selector = None
  let mut format = defaults.format
  let mut strict = false
  let mut limits = defaults.limits
  let mut index = 1
  let mut positional_only = false
  while index < args.length() {
    let argument = args[index]
    if !positional_only && argument == "--" {
      positional_only = true
      index += 1
      continue
    }
    if !positional_only && argument.has_prefix("-") {
      if seen.contains(argument) {
        return Err(
          argument_error(
            "duplicate_option",
            "option appears more than once: " + argument,
          ),
        )
      }
      seen.push(argument)
      if argument == "--strict" {
        if command != Audit {
          return Err(
            argument_error(
              "invalid_option", "--strict is available only for audit",
            ),
          )
        }
        strict = true
        index = index + 1
        continue
      }
      if argument != "--root" &&
        argument != "--context" &&
        argument != "--format" &&
        argument != "--limits" {
        return Err(
          argument_error("unknown_option", "unknown option: " + argument),
        )
      }
      if index + 1 >= args.length() || args[index + 1].has_prefix("--") {
        return Err(
          argument_error("missing_value", "missing value for " + argument),
        )
      }
      let value = args[index + 1]
      if value == "" || value.contains("\u0000") {
        return Err(
          argument_error(
            "invalid_value",
            "empty or NUL-containing value for " + argument,
          ),
        )
      }
      match argument {
        "--root" => {
          if value.contains("://") {
            return Err(
              argument_error(
                "invalid_root", "--root must name a local directory",
              ),
            )
          }
          input_root = value
        }
        "--context" => {
          if command != Audit && command != Probe {
            return Err(
              argument_error(
                "invalid_option", "--context is available only for audit and probe",
              ),
            )
          }
          context_selector = Some(value)
        }
        "--format" => {
          if value != "text" &&
            value != "json" &&
            value != "markdown" &&
            value != "sarif" {
            return Err(
              argument_error(
                "invalid_format", "format must be text, json, markdown, or sarif",
              ),
            )
          }
          format = value
        }
        "--limits" =>
          limits = match parse_limits(value, limits) {
            Ok(parsed) => parsed
            Err(error) => return Err(error)
          }
        _ => ()
      }
      index = index + 2
    } else {
      positionals.push(argument)
      index = index + 1
    }
  }
  let expected = if command == Probe { 2 } else { 1 }
  if format == "sarif" && command != Audit {
    return Err(
      argument_error("invalid_format", "SARIF is available only for audit"),
    )
  }
  if positionals.length() != expected {
    return Err(
      argument_error(
        "invalid_arguments",
        if command == Probe {
          "probe requires CONFIG IP and --context ID"
        } else {
          "command requires exactly one CONFIG path"
        },
      ),
    )
  }
  let entry = positionals[0]
  match validate_entry(entry) {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  if command == Probe && context_selector is None {
    return Err(
      argument_error(
        "missing_context", "probe requires --context ID; use contexts to discover IDs",
      ),
    )
  }
  if command == Probe {
    match validate_probe_ip(positionals[1]) {
      Err(error) => return Err(error)
      Ok(_) => ()
    }
  }
  Ok({
    command,
    input_root,
    entry,
    context_selector,
    ip: if command == Probe {
      Some(positionals[1])
    } else {
      None
    },
    format,
    strict,
    limits,
  })
}

///|
fn validate_entry(entry : String) -> Result[Unit, CliError] {
  if entry == "" ||
    entry.contains("\u0000") ||
    entry.contains(":") ||
    entry.has_prefix("/") ||
    entry.has_prefix("\\") {
    return Err(
      argument_error(
        "invalid_entry", "CONFIG must be a relative local path inside --root",
      ),
    )
  }
  let normalized = entry.replace_all(old="\\", new="/")
  for component in normalized.split("/") {
    if component == ".." || component == "" {
      return Err(
        argument_error(
          "invalid_entry", "CONFIG must not contain traversal or empty path components",
        ),
      )
    }
  }
  Ok(())
}

///|
fn positive_int(value : String) -> Result[Int32, CliError] {
  let mut result = 0
  if value == "" {
    return Err(
      argument_error("invalid_limit", "limit values must be positive integers"),
    )
  }
  for character in value.to_array() {
    let digit = character.to_int() - 48
    if digit < 0 || digit > 9 || result > (2147483647 - digit) / 10 {
      return Err(
        argument_error(
          "invalid_limit",
          "limit must fit a positive 32-bit integer: " + value,
        ),
      )
    }
    result = result * 10 + digit
  }
  if result == 0 {
    Err(argument_error("invalid_limit", "limit must be greater than zero"))
  } else {
    Ok(result)
  }
}

///|
fn parse_limits(
  text : String,
  base : @nginx.Limits,
) -> Result[@nginx.Limits, CliError] {
  let mut parsed = base
  let seen : Array[String] = []
  for assignment in text.split(",") {
    let parts = assignment.split("=").to_array()
    if parts.length() != 2 {
      return Err(
        argument_error(
          "invalid_limit", "--limits requires comma-separated name=value assignments",
        ),
      )
    }
    let name = parts[0].to_owned()
    if seen.contains(name) {
      return Err(
        argument_error(
          "duplicate_limit",
          "limit appears more than once: " + name,
        ),
      )
    }
    seen.push(name)
    let value = match positive_int(parts[1].to_owned()) {
      Ok(number) => number
      Err(error) => return Err(error)
    }
    parsed = match name {
      "max_sources" => { ..parsed, max_sources: value, }
      "max_total_chars" => { ..parsed, max_total_chars: value, }
      "max_source_chars" => { ..parsed, max_source_chars: value, }
      "max_include_depth" => { ..parsed, max_include_depth: value, }
      "max_include_expansions" => { ..parsed, max_include_expansions: value, }
      "max_directives" => { ..parsed, max_directives: value, }
      "max_contexts" => { ..parsed, max_contexts: value, }
      "max_context_depth" => { ..parsed, max_context_depth: value, }
      "max_rules" => { ..parsed, max_rules: value, }
      "max_audit_pairs" => { ..parsed, max_audit_pairs: value, }
      _ => return Err(argument_error("unknown_limit", "unknown limit: " + name))
    }
  }
  Ok(parsed)
}
