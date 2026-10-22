///|
/// A plaintext HTTP endpoint and an already normalized, query-free ASCII URI.
pub(all) struct RequestTarget {
  host : String
  uri : String
  port : Int32
  local_address : String
} derive(Eq, Debug)

///|
priv struct Listener {
  address : String
  port : Int32
  default_server : Bool
}

///|
fn routing_error(message : String, source : SourceLocation) -> ConfigError {
  config_error(
    "unsupported_routing",
    message,
    path=source.path,
    line=source.line,
  )
}

///|
fn decimal_port(text : String) -> Int32? {
  let mut port = 0
  if text == "" {
    return None
  }
  for char in text.to_array() {
    let digit = char.to_int() - 48
    if digit < 0 || digit > 9 || port > (65535 - digit) / 10 {
      return None
    }
    port = port * 10 + digit
  }
  if port == 0 {
    None
  } else {
    Some(port)
  }
}

///|
fn parse_listener(item : RoutingDirective) -> Result[Listener, ConfigError] {
  if item.args.is_empty() || item.args.length() > 2 {
    return Err(
      routing_error(
        "Supported listen syntax: [IPv4:|*:]PORT [default_server]",
        item.source,
      ),
    )
  }
  let address_and_port = item.args[0].split(":").to_array()
  let (address, port_text) = if address_and_port.length() == 1 {
    ("0.0.0.0", address_and_port[0].to_owned())
  } else if address_and_port.length() == 2 {
    (address_and_port[0].to_owned(), address_and_port[1].to_owned())
  } else {
    return Err(
      routing_error(
        "IPv6, Unix, TLS and hostname listeners are outside this profile",
        item.source,
      ),
    )
  }
  let address = if address == "*" { "0.0.0.0" } else { address }
  if @cidr.IPv4::parse(address) is Err(_) {
    return Err(
      routing_error(
        "listen address must be a literal IPv4 address",
        item.source,
      ),
    )
  }
  let port = match decimal_port(port_text) {
    Some(value) => value
    None =>
      return Err(routing_error("listen port must be in 1..65535", item.source))
  }
  if item.args.length() == 2 && item.args[1] != "default_server" {
    return Err(
      routing_error(
        "Only the default_server listen parameter is modeled",
        item.source,
      ),
    )
  }
  Ok({ address, port, default_server: item.args.length() == 2, })
}

///|
pub fn RequestTarget::validate(
  self : RequestTarget,
) -> Result[Unit, ConfigError] {
  if self.port < 1 ||
    self.port > 65535 ||
    @cidr.IPv4::parse(self.local_address) is Err(_) {
    return Err(
      config_error(
        "invalid_target", "Target requires an IPv4 local address and port 1..65535",
      ),
    )
  }
  if self.host == "" ||
    self.host.length() > 253 ||
    self.host
    .to_array()
    .any(fn(c) {
      !((c >= 'a' && c <= 'z') ||
      (c >= 'A' && c <= 'Z') ||
      (c >= '0' && c <= '9') ||
      c == '-' ||
      c == '.' ||
      c == '_')
    }) ||
    self.host.has_suffix(".") {
    return Err(
      config_error(
        "invalid_target", "--host must be an ASCII hostname without port or trailing dot",
      ),
    )
  }
  if !self.uri.has_prefix("/") ||
    self.uri.length() > 4096 ||
    self.uri.contains("//") ||
    self.uri.contains("\\") ||
    self.uri
    .to_array()
    .any(fn(c) {
      c.to_int() < 33 || c.to_int() > 126 || c == '%' || c == '?' || c == '#'
    }) ||
    self.uri.split("/").any(fn(part) { part == "." || part == ".." }) {
    return Err(
      config_error(
        "invalid_target", "--uri must be a normalized ASCII path; no query, escapes, dot segments or repeated slashes",
      ),
    )
  }
  Ok(())
}

///|
/// Resolve exact server names, default servers, and flat exact/prefix locations.
/// Never guess a regex match or pair contexts by their ordinal across snapshots.
pub fn Analysis::resolve(
  self : Analysis,
  target : RequestTarget,
) -> Result[AccessContext, ConfigError] {
  match target.validate() {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  if self.diagnostics.any(fn(item) { item.blocking }) {
    return Err(
      config_error(
        "unsupported_analysis", "Global blocking diagnostics prevent request routing",
      ),
    )
  }
  let candidates : Array[(AccessContext, Listener)] = []
  let mut exact_address = false
  for context in self.contexts {
    if context.kind != "server" {
      continue
    }
    let listeners = context.routing.filter(fn(item) { item.name == "listen" })
    let parsed : Array[Listener] = []
    if listeners.is_empty() {
      parsed.push({ address: "0.0.0.0", port: 80, default_server: false, })
    }
    for item in listeners {
      match parse_listener(item) {
        Ok(value) => parsed.push(value)
        Err(error) => return Err(error)
      }
    }
    for listener in parsed {
      if listener.port == target.port &&
        (
          listener.address == "0.0.0.0" ||
          listener.address == target.local_address
        ) {
        if listener.address == target.local_address {
          exact_address = true
        }
        candidates.push((context, listener))
      }
    }
  }
  let eligible = candidates.filter(fn(item) {
    !exact_address || item.1.address == target.local_address
  })
  if eligible.is_empty() {
    return Err(
      config_error(
        "unsupported_no_listener", "No supported listener matches the target endpoint",
      ),
    )
  }
  let mut default_context = eligible[0].0
  let mut explicit_default = false
  let mut selected : AccessContext? = None
  for (context, listener) in eligible {
    if listener.default_server {
      if explicit_default {
        return Err(
          config_error(
            "invalid_routing", "Multiple default servers for the endpoint",
          ),
        )
      }
      explicit_default = true
      default_context = context
    }
    for item in context.routing {
      if item.name != "server_name" {
        continue
      }
      for name in item.args {
        if name.contains("*") ||
          name.has_prefix("~") ||
          name.contains("$") ||
          name.has_prefix(".") {
          return Err(
            routing_error(
              "Wildcard, regex and variable server names require a richer routing model",
              item.source,
            ),
          )
        }
        if name.to_lower() == target.host.to_lower() {
          if selected is Some(previous) && previous.selector != context.selector {
            return Err(
              config_error(
                "invalid_routing", "Duplicate server name for the endpoint",
              ),
            )
          }
          selected = Some(context)
        }
      }
    }
  }
  let server = selected.unwrap_or(default_context)
  let children = self.contexts.filter(fn(item) {
    item.parent == Some(server.selector) && item.kind == "location"
  })
  let mut best = server
  let mut best_length = -1
  let mut exact : AccessContext? = None
  let mut regex = false
  let mut suppress_regex = false
  let declarations : Array[String] = []
  for child in children {
    let declaration = child.label
      .strip_prefix("location ")
      .unwrap_or(child.label[:])
      .to_owned()
    if declarations.contains(declaration) {
      return Err(
        config_error("invalid_routing", "Duplicate location declaration"),
      )
    }
    declarations.push(declaration)
    if declaration.has_prefix("~ ") || declaration.has_prefix("~* ") {
      regex = true
      continue
    }
    if declaration.has_prefix("@") {
      continue
    }
    let (modifier, path) = if declaration.has_prefix("= ") {
      ("=", declaration.strip_prefix("= ").unwrap().to_owned())
    } else if declaration.has_prefix("^~ ") {
      ("^~", declaration.strip_prefix("^~ ").unwrap().to_owned())
    } else {
      ("", declaration)
    }
    // Applying request validation to declarations also rejects ambiguous URI forms.
    if { ..target, uri: path, }.validate() is Err(_) {
      return Err(
        routing_error(
          "Only normalized literal location paths are modeled",
          child.source,
        ),
      )
    }
    if modifier == "=" {
      if target.uri == path {
        exact = Some(child)
      }
    } else if target.uri.has_prefix(path) && path.length() > best_length {
      best_length = path.length()
      best = child
      suppress_regex = modifier == "^~"
    }
  }
  if exact is Some(context) {
    best = context
  } else {
    if regex && !suppress_regex {
      return Err(
        routing_error(
          "A regex location may override the prefix match",
          server.source,
        ),
      )
    }
    if best.kind == "location" &&
      self.contexts.any(fn(item) {
        item.parent == Some(best.selector) && item.kind == "location"
      }) {
      return Err(
        routing_error(
          "Nested location selection is outside the flat routing profile",
          best.source,
        ),
      )
    }
  }
  if best.has_blocking() {
    return Err(
      routing_error(
        "Selected context has unsupported access/auth/rewrite semantics",
        best.source,
      ),
    )
  }
  Ok(best)
}
