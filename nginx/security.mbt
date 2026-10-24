///|
/// A statically observed configuration hazard; this is not proof of exploitation.
pub(all) struct SecurityFinding {
  code : String
  severity : @cidr.Severity
  message : String
  remediation : String
  source : SourceLocation
  context : String
  evidence : String
} derive(Eq, Debug)

///|
pub(all) struct SecurityReport {
  entry : String
  findings : Array[SecurityFinding]
  diagnostics : Array[Diagnostic]
  checks : Array[String]
} derive(Eq, Debug)

///|
pub extend SecurityFinding with Eq::{equal, not_equal}

///|
pub extend SecurityFinding with @debug.Debug::{to_repr}

///|
pub extend SecurityReport with Eq::{equal, not_equal}

///|
pub extend SecurityReport with @debug.Debug::{to_repr}

///|
pub fn SecurityReport::has_blocking(self : SecurityReport) -> Bool {
  self.diagnostics.any(fn(d) { d.blocking })
}

///|
pub fn SecurityReport::gate_failed(
  self : SecurityReport,
  strict : Bool,
) -> Bool {
  self.has_blocking() ||
  self.findings.any(fn(f) {
    f.severity == @cidr.Critical || (strict && f.severity == @cidr.Warning)
  })
}

///|
fn security_checks() -> Array[String] {
  [
    "alias_traversal", "add_header_redefinition", "host_spoofing", "proxy_pass_variable_authority",
    "return_bypasses_allow_deny", "allow_without_deny", "filesystem_root_exposure",
    "add_header_content_type", "add_header_multiline", "valid_referers", "error_log_off",
    "server_tokens", "weak_tls_protocols", "proxy_tls_verification_disabled", "unrestricted_real_ip_trust",
  ]
}

///|
priv struct SecurityState {
  findings : Array[SecurityFinding]
  diagnostics : Array[Diagnostic]
  limits : Limits
  mut contexts : Int32
  mut work : Int32
}

///|
priv struct SecurityScope {
  context : String
  kind : String
  location_args : Array[String]
  headers : Array[ExpandedNode]
  header_mode : String
  acl : Array[ExpandedNode]
}

///|
fn SecurityState::finding(
  self : SecurityState,
  node : ExpandedNode,
  scope : SecurityScope,
  code : String,
  severity : @cidr.Severity,
  message : String,
  remediation : String,
  evidence~ : String = "",
) -> Unit {
  self.findings.push({
    code,
    severity,
    message,
    remediation,
    source: node.source,
    context: scope.context,
    evidence: if evidence == "" {
      node.directive.name + " " + node.directive.args.join(" ")
    } else {
      evidence
    },
  })
}

///|
fn SecurityState::partial(
  self : SecurityState,
  node : ExpandedNode,
  context : String,
  message : String,
) -> Unit {
  self.diagnostics.push({
    code: "security_partial_coverage",
    severity: @cidr.Warning,
    blocking: true,
    message,
    source: Some(node.source),
    context,
  })
}

///|
fn SecurityState::charge(
  self : SecurityState,
  amount : Int32,
) -> Result[Unit, ConfigError] {
  if amount > self.limits.max_audit_pairs - self.work {
    return Err(
      config_error(
        "limit_exceeded", "Security comparison work exceeds max_audit_pairs",
      ),
    )
  }
  self.work += amount
  if self.findings.length() + self.diagnostics.length() >
    self.limits.max_directives {
    return Err(
      config_error(
        "limit_exceeded", "Security report rows exceed max_directives",
      ),
    )
  }
  Ok(())
}

///|
/// Parse complete Nginx variable tokens, never substring-match $host_suffix as $host.
fn security_variables(value : String) -> Array[String] {
  let chars = value.to_array()
  let result : Array[String] = []
  let mut i = 0
  while i < chars.length() {
    if chars[i] != '$' {
      i += 1
      continue
    }
    i += 1
    let braced = i < chars.length() && chars[i] == '{'
    if braced {
      i += 1
    }
    let name : Array[Char] = []
    while i < chars.length() {
      let c = chars[i]
      if (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9') ||
        c == '_' {
        name.push(c)
        i += 1
      } else {
        break
      }
    }
    if name.length() > 0 && (!braced || (i < chars.length() && chars[i] == '}')) {
      result.push(String::from_array(name))
    }
    if braced && i < chars.length() && chars[i] == '}' {
      i += 1
    }
  }
  result
}

///|
fn security_request_variable(name : String) -> Bool {
  ["http_host", "host", "request_uri", "uri", "args", "query_string", "request"].contains(
    name,
  ) ||
  name.has_prefix("arg_") ||
  name.has_prefix("http_") ||
  name.has_prefix("cookie_")
}

///|
/// Only authority variables affect destination choice; path variables alone do not.
fn security_proxy_authority(value : String) -> String {
  let parts = value.split("://").to_array()
  if parts.length() != 2 {
    return value
  }
  let authority = parts[1].split("/").next().unwrap_or("").to_owned()
  // URI builtins start the path even when the template has no literal slash.
  // Do not confuse a longer variable name with one of these builtins.
  for marker in ["$request_uri", "${request_uri}", "$uri", "${uri}"] {
    let chunks = authority.split(marker).to_array()
    if chunks.length() > 1 &&
      chunks[0].length() > 0 &&
      security_variables(chunks[0].to_owned()).is_empty() {
      let suffix = chunks[1].to_owned()
      let boundary = if marker.has_suffix("}") || suffix == "" {
        true
      } else {
        let c = suffix.to_array()[0]
        !((c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9') ||
        c == '_')
      }
      if boundary {
        return chunks[0].to_owned()
      }
    }
  }
  authority
}

///|
fn security_redirect(node : ExpandedNode) -> Bool {
  let args = node.directive.args
  if args.length() == 0 {
    return false
  }
  if node.directive.name == "return" {
    let first = args[0]
    return first.has_prefix("http://") ||
      first.has_prefix("https://") ||
      first.has_prefix("$scheme://") ||
      first.has_prefix("${scheme}://") ||
      (first.length() == 3 && (first.has_prefix("2") || first.has_prefix("3")))
  }
  node.directive.name == "rewrite" &&
  args.length() >= 2 &&
  (
    args[1].has_prefix("$scheme://") ||
    args[1].has_prefix("${scheme}://") ||
    args[1].has_prefix("http://") ||
    args[1].has_prefix("https://") ||
    (args.length() >= 3 && ["redirect", "permanent"].contains(args[2]))
  )
}

///|
fn security_node(
  state : SecurityState,
  node : ExpandedNode,
  scope : SecurityScope,
) -> Unit {
  let name = node.directive.name
  let args = node.directive.args
  let first = if args.length() > 0 { args[0] } else { "" }
  if name == "alias" && scope.kind == "location" && args.length() == 1 {
    let loc = scope.location_args
    let prefix = if loc.length() == 1 {
      loc[0]
    } else if loc.length() == 2 && loc[0] == "^~" {
      loc[1]
    } else {
      ""
    }
    if security_variables(first).length() > 0 {
      state.partial(
        node,
        scope.context,
        "Variable alias paths require data-flow analysis; alias safety is incomplete",
      )
    } else if prefix.has_prefix("/") &&
      !prefix.has_suffix("/") &&
      first.has_suffix("/") {
      state.finding(
        node,
        scope,
        "alias_traversal",
        @cidr.Critical,
        "A prefix location without a trailing slash can map a ../ suffix outside the alias directory",
        "End the directory location with /, or use an exact location for a single file",
        evidence=prefix + "../probe.txt -> " + first + "../probe.txt",
      )
    }
  }
  if name == "proxy_set_header" &&
    args.length() == 2 &&
    args[0].to_lower() == "host" &&
    security_variables(args[1]).contains("http_host") {
    state.finding(
      node,
      scope,
      "host_spoofing",
      @cidr.Warning,
      "The client-controlled raw Host header is forwarded to the upstream",
      "Use an explicit trusted upstream Host or validate accepted hosts before proxying",
    )
  }
  if name == "proxy_pass" && args.length() == 1 {
    let variables = security_variables(security_proxy_authority(first))
    if variables.any(security_request_variable) {
      state.finding(
        node,
        scope,
        "proxy_pass_variable_authority",
        @cidr.Warning,
        "Request-derived variables influence the proxy destination; review SSRF reachability and validation",
        "Select upstreams through a finite trusted allowlist; keep untrusted variables in the path only",
      )
    } else if variables.length() > 0 {
      state.partial(
        node,
        scope.context,
        "Proxy authority contains user variables whose set/map/capture origins are not proven: " +
        variables.join(", "),
      )
    }
  }
  if security_redirect(node) &&
    scope.acl.any(fn(n) { n.directive.name == "deny" }) {
    state.finding(
      node,
      scope,
      "return_bypasses_allow_deny",
      @cidr.Critical,
      "A successful return or redirect executes in the rewrite phase before inherited or local allow/deny checks",
      "Move the response behind an access-phase content handler; verify the actual HTTP response for denied clients",
    )
  }
  if (name == "root" || name == "alias") &&
    (first == "/" || first == "C:/" || first == "c:/") {
    state.finding(
      node,
      scope,
      "filesystem_root_exposure",
      @cidr.Critical,
      "The filesystem root is used as a document path, risking exposure of unrelated readable files",
      "Use a dedicated content directory with least-privilege filesystem permissions",
    )
  }
  if name == "add_header" && args.length() >= 2 {
    if args[0].to_lower() == "content-type" {
      state.finding(
        node,
        scope,
        "add_header_content_type",
        @cidr.Warning,
        "add_header adds a second Content-Type instead of replacing the content handler's type",
        "Configure types/default_type or the upstream response Content-Type",
      )
    }
    if args[1].to_array().any(fn(c) { c == '\n' || c == '\r' }) {
      state.finding(
        node,
        scope,
        "add_header_multiline",
        @cidr.Warning,
        "The configured response header value contains a literal CR or LF",
        "Use a single-line header value and validate variable inputs",
      )
    }
  }
  if name == "valid_referers" &&
    (args.contains("none") || args.contains("blocked")) {
    state.finding(
      node,
      scope,
      "valid_referers",
      @cidr.Warning,
      "Referer validation accepts missing or unrecognized-scheme Referer values",
      "Do not use Referer as authentication; remove none/blocked if the intended policy requires a matching Referer",
    )
  }
  if name == "error_log" && first == "off" {
    state.finding(
      node,
      scope,
      "error_log_off",
      @cidr.Warning,
      "error_log off names a file called off; it does not disable error logging",
      "Specify a valid log path and level, or the platform's null device if deliberately discarding errors",
    )
  }
  if name == "server_tokens" && (first == "on" || first == "build") {
    state.finding(
      node,
      scope,
      "server_tokens",
      @cidr.Info,
      "Server version or build details are explicitly exposed in responses",
      "Use server_tokens off to reduce version disclosure",
    )
  }
  if name == "ssl_protocols" &&
    args.any(fn(a) { ["SSLv2", "SSLv3", "TLSv1", "TLSv1.1"].contains(a) }) {
    state.finding(
      node,
      scope,
      "weak_tls_protocols",
      @cidr.Warning,
      "Legacy SSL/TLS protocol versions are explicitly enabled",
      "Use TLSv1.2 and TLSv1.3 according to the deployment's compatibility policy",
    )
  }
  if name == "proxy_ssl_verify" && first == "off" {
    state.finding(
      node,
      scope,
      "proxy_tls_verification_disabled",
      @cidr.Warning,
      "Upstream TLS certificate verification is explicitly disabled",
      "Enable proxy_ssl_verify and configure the trusted CA and expected upstream name",
    )
  }
  if name == "set_real_ip_from" && ["0.0.0.0/0", "::/0"].contains(first) {
    state.finding(
      node,
      scope,
      "unrestricted_real_ip_trust",
      @cidr.Critical,
      "Every address is trusted to supply the replacement client identity",
      "Trust only the actual reverse proxy addresses; verify access rules against the resulting client address",
    )
  }
  if name.has_suffix("_by_lua") ||
    name.has_suffix("_by_lua_block") ||
    name.has_suffix("_by_lua_file") ||
    ["js_content", "js_access", "js_set"].contains(name) {
    state.partial(
      node,
      scope.context,
      "Embedded scripting behavior is outside this static security rule profile",
    )
  }
}

///|
fn security_walk(
  state : SecurityState,
  nodes : Array[ExpandedNode],
  parent : SecurityScope,
  owner : ExpandedNode,
) -> Result[Unit, ConfigError] {
  state.contexts += 1
  if state.contexts > state.limits.max_contexts {
    return Err(
      config_error("limit_exceeded", "Security contexts exceed max_contexts"),
    )
  }
  let local_headers = nodes.filter(fn(n) {
    n.directive.name == "add_header" && n.directive.args.length() >= 2
  })
  let local_acl = nodes.filter(fn(n) {
    ["allow", "deny"].contains(n.directive.name)
  })
  let modes = nodes.filter(fn(n) { n.directive.name == "add_header_inherit" })
  let mut mode = parent.header_mode
  if modes.length() > 0 {
    if modes.length() != 1 ||
      modes[0].directive.args.length() != 1 ||
      !["on", "off", "merge"].contains(modes[0].directive.args[0]) {
      state.partial(
        modes[0],
        parent.context,
        "Unrecognized or repeated add_header_inherit mode",
      )
    } else {
      mode = modes[0].directive.args[0]
    }
  }
  let effective_headers = if mode == "merge" {
    let merged = parent.headers.copy()
    for h in local_headers {
      merged.push(h)
    }
    merged
  } else if local_headers.length() > 0 || mode == "off" {
    local_headers
  } else {
    parent.headers
  }
  let scope : SecurityScope = {
    ..parent,
    headers: effective_headers,
    header_mode: mode,
    acl: if local_acl.length() > 0 {
      local_acl
    } else {
      parent.acl
    },
  }
  if mode != "merge" && (local_headers.length() > 0 || mode == "off") {
    let lost : Array[String] = []
    for header in parent.headers {
      match state.charge(local_headers.length() + 1) {
        Err(e) => return Err(e)
        Ok(_) => ()
      }
      let name = header.directive.args[0].to_lower()
      if !local_headers.any(fn(h) { h.directive.args[0].to_lower() == name }) &&
        !lost.contains(name) {
        lost.push(name)
      }
    }
    if lost.length() > 0 {
      let trigger = if local_headers.length() > 0 {
        local_headers[0]
      } else {
        owner
      }
      state.finding(
        trigger,
        scope,
        "add_header_redefinition",
        @cidr.Warning,
        "Child header configuration drops inherited response headers: " +
        lost.join(", "),
        "Repeat required headers locally or use add_header_inherit merge on a supporting Nginx version",
      )
    }
  }
  if local_acl.any(fn(n) { n.directive.name == "allow" }) &&
    !local_acl.any(fn(n) { n.directive.name == "deny" }) {
    state.finding(
      local_acl[0],
      scope,
      "allow_without_deny",
      @cidr.Warning,
      "Local allow rules have no deny fallback; unmatched clients remain unrestricted by this module",
      "If an allowlist is intended, add deny all after the permitted addresses",
    )
  }
  let mut ordinal = 0
  for node in nodes {
    match state.charge(1) {
      Err(e) => return Err(e)
      Ok(_) => ()
    }
    if node.directive.is_comment() {
      continue
    }
    security_node(state, node, scope)
    if !node.directive.has_block {
      continue
    }
    ordinal += 1
    let kind = node.directive.name
    let valid = (kind == "server" && scope.kind == "http") ||
      (kind == "location" && ["server", "location"].contains(scope.kind)) ||
      (kind == "if" && ["server", "location"].contains(scope.kind)) ||
      (kind == "limit_except" && scope.kind == "location")
    if valid {
      let child : SecurityScope = {
        ..scope,
        context: scope.context +
        "/" +
        kind +
        "[" +
        ordinal.to_string() +
        "] " +
        node.directive.args.join(" "),
        kind,
        location_args: if kind == "location" {
          node.directive.args
        } else {
          []
        },
      }
      match security_walk(state, node.children, child, node) {
        Err(e) => return Err(e)
        Ok(_) => ()
      }
    } else if ![
        "map", "geo", "upstream", "types", "split_clients", "charset_map",
      ].contains(kind) &&
      !kind.has_suffix("_by_lua_block") {
      state.partial(
        node,
        scope.context,
        "Unmodeled HTTP block is not interpreted as security directives: " +
        kind,
      )
    }
  }
  state.charge(0)
}

///|
/// Scan include-expanded HTTP configuration without the IPv4 request router.
/// Findings survive partial coverage; blocking diagnostics prevent a clean gate.
pub fn scan_security_sources(
  entry : String,
  sources : Array[SourceFile],
  limits~ : Limits = Limits::default(),
) -> Result[SecurityReport, ConfigError] {
  match validate_limits(limits) {
    Err(e) => return Err(e)
    Ok(_) => ()
  }
  let entry = match normalize_source_path(entry) {
    Ok(v) => v
    Err(e) => return Err(e)
  }
  let files = match prepare_sources(sources, limits) {
    Ok(v) => v
    Err(e) => return Err(e)
  }
  let expand : ExpandState = {
    entry,
    files,
    limits,
    cache: [],
    used: [],
    edges: [],
    diagnostics: [],
    expansions: 0,
    directives: 0,
  }
  let nodes = match expand_file(expand, entry, [], 0, 0) {
    Ok(v) => v
    Err(e) => return Err(e)
  }
  let state : SecurityState = {
    findings: [],
    diagnostics: expand.diagnostics,
    limits,
    contexts: 0,
    work: 0,
  }
  let mut count = 0
  for node in nodes {
    if node.directive.name == "error_log" {
      security_node(state, node, {
        context: "main",
        kind: "main",
        location_args: [],
        headers: [],
        header_mode: "on",
        acl: [],
      })
    }
    if node.directive.name == "load_module" {
      state.partial(
        node, "main", "Dynamically loaded module behavior is outside the security rule profile",
      )
    }
    if node.directive.name == "http" && node.directive.has_block {
      count += 1
      let scope : SecurityScope = {
        context: "http",
        kind: "http",
        location_args: [],
        headers: [],
        header_mode: "on",
        acl: [],
      }
      match security_walk(state, node.children, scope, node) {
        Err(e) => return Err(e)
        Ok(_) => ()
      }
    }
  }
  if count != 1 {
    return Err(
      config_error(
        "invalid_context",
        "Security scan requires exactly one HTTP block",
        path=entry,
      ),
    )
  }
  // Main-level findings may be appended after the final HTTP walk.
  match state.charge(0) {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  Ok({
    entry,
    findings: state.findings,
    diagnostics: state.diagnostics,
    checks: security_checks(),
  })
}
