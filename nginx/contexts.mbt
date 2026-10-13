///|
priv struct BuildState {
  limits : Limits
  contexts : Array[AccessContext]
  diagnostics : Array[Diagnostic]
  mut rule_count : Int32
}

///|
fn blocking_diagnostic(
  code : String,
  message : String,
  node : ExpandedNode,
  context : String,
) -> Diagnostic {
  {
    code,
    severity: @cidr.Critical,
    blocking: true,
    message,
    source: Some(node.source),
    context,
  }
}

///|
fn contains_access(nodes : Array[ExpandedNode]) -> Bool {
  for node in nodes {
    if node.directive.name == "allow" ||
      node.directive.name == "deny" ||
      contains_access(node.children) {
      return true
    }
  }
  false
}

///|
fn external_access_directive(name : String) -> Bool {
  [
    "satisfy", "auth_basic", "auth_request", "auth_jwt", "real_ip_header", "real_ip_recursive",
    "set_real_ip_from", "rewrite", "return", "try_files", "error_page", "access_by_lua",
    "access_by_lua_file", "access_by_lua_block", "js_access", "internal", "limit_except",
  ].contains(name)
}

///|
fn disabled_external(node : ExpandedNode) -> Bool {
  ["auth_basic", "auth_request", "auth_jwt"].contains(node.directive.name) &&
  node.directive.args.length() == 1 &&
  node.directive.args[0] == "off" &&
  !node.directive.has_block
}

///|
fn access_case_variant(name : String) -> Bool {
  name != "allow" &&
  name != "deny" &&
  (name.to_lower() == "allow" || name.to_lower() == "deny")
}

///|
fn parse_access_rule(
  node : ExpandedNode,
  selector : String,
  ordinal : Int32,
) -> Result[AccessRule, ConfigError] {
  let directive = node.directive
  if directive.has_block || directive.args.length() != 1 {
    return Err(
      config_error(
        "invalid_access_rule",
        "allow/deny requires exactly one operand and no block",
        path=node.source.path,
        line=directive.line,
      ),
    )
  }
  let operand = directive.args[0]
  let action = if directive.name == "allow" { @cidr.Allow } else { @cidr.Deny }
  let target = if operand == "all" { "0.0.0.0/0" } else { operand }
  if operand == "" ||
    operand
    .to_array()
    .any(fn(char) {
      char == ' ' || char == '\t' || char == '\r' || char == '\n'
    }) {
    return Err(
      config_error(
        "invalid_access_operand",
        "Access operand cannot contain whitespace",
        path=node.source.path,
        line=directive.line,
      ),
    )
  }
  let block = match @cidr.CidrBlock::parse(target) {
    Ok(value) => value
    Err(message) =>
      return Err(
        config_error(
          "invalid_access_operand",
          message,
          path=node.source.path,
          line=directive.line,
        ),
      )
  }
  Ok({
    rule: @cidr.Rule::new(
      selector + "/R" + ordinal.to_string(),
      action,
      block,
      source_block=target,
    ),
    source: node.source,
    owner_context: selector,
    raw_operand: operand,
  })
}

///|
fn context_shape(
  node : ExpandedNode,
  kind : String,
) -> Result[Unit, ConfigError] {
  let directive = node.directive
  if !directive.has_block {
    return Err(
      config_error(
        "invalid_context",
        kind + " requires a block",
        path=node.source.path,
        line=directive.line,
      ),
    )
  }
  if kind == "http" || kind == "server" {
    if directive.args.length() != 0 {
      return Err(
        config_error(
          "invalid_context",
          kind + " does not accept arguments",
          path=node.source.path,
          line=directive.line,
        ),
      )
    }
  } else if kind == "location" {
    let args = directive.args
    let valid = args.length() == 1 ||
      (args.length() == 2 && ["=", "~", "~*", "^~"].contains(args[0]))
    if !valid || args[args.length() - 1] == "" {
      return Err(
        config_error(
          "invalid_context",
          "Unsupported location declaration",
          path=node.source.path,
          line=directive.line,
        ),
      )
    }
  }
  Ok(())
}

///|
fn make_context(
  state : BuildState,
  node : ExpandedNode,
  selector : String,
  kind : String,
  parent : AccessContext?,
) -> Result[Unit, ConfigError] {
  match context_shape(node, kind) {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  if state.contexts.length() >= state.limits.max_contexts {
    return Err(
      config_error(
        "limit_exceeded",
        "Context count exceeds max_contexts",
        path=node.source.path,
        line=node.source.line,
      ),
    )
  }
  let declared : Array[AccessRule] = []
  let diagnostics : Array[Diagnostic] = []
  let mut has_local_access = false
  let mut ordinal = 0
  for child in node.children {
    let name = child.directive.name
    if child.directive.is_comment() {
      continue
    }
    if name == "allow" || name == "deny" {
      has_local_access = true
      ordinal += 1
      if state.rule_count >= state.limits.max_rules {
        return Err(
          config_error(
            "limit_exceeded",
            "Declared rules exceed max_rules",
            path=child.source.path,
            line=child.source.line,
          ),
        )
      }
      state.rule_count += 1
      if child.directive.has_block || child.directive.args.length() != 1 {
        return Err(
          config_error(
            "invalid_access_rule",
            "allow/deny requires exactly one operand and no block",
            path=child.source.path,
            line=child.source.line,
          ),
        )
      }
      let operand = child.directive.args[0]
      if operand.contains(":") {
        diagnostics.push(
          blocking_diagnostic(
            "unsupported_address_family",
            "Only IPv4 access operands are analyzed: " + operand,
            child,
            selector,
          ),
        )
      } else if operand.contains("$") {
        diagnostics.push(
          blocking_diagnostic(
            "unsupported_dynamic_operand", "Dynamic access operands are not analyzed",
            child, selector,
          ),
        )
      } else {
        match parse_access_rule(child, selector, ordinal) {
          Err(error) => return Err(error)
          Ok(rule) => declared.push(rule)
        }
      }
    } else if access_case_variant(name) {
      return Err(
        config_error(
          "invalid_access_rule",
          "Nginx access directive names are case-sensitive: " + name,
          path=child.source.path,
          line=child.source.line,
        ),
      )
    } else if external_access_directive(name) && !disabled_external(child) {
      diagnostics.push(
        blocking_diagnostic(
          "external_access_dependency",
          "Request behavior is outside the address-module profile: " + name,
          child,
          selector,
        ),
      )
    } else if child.directive.has_block &&
      name != "location" &&
      name != "server" {
      if contains_access(child.children) {
        diagnostics.push(
          blocking_diagnostic(
            "unsupported_access_context",
            "Access rules appear in unsupported block: " + name,
            child,
            selector,
          ),
        )
      }
    }
  }
  let (rules, inherited_from) = if has_local_access {
    (declared.copy(), None)
  } else {
    match parent {
      None => ([], None)
      Some(previous) => {
        let owner = if previous.rules.length() == 0 {
          None
        } else {
          Some(previous.inherited_from.unwrap_or(previous.selector))
        }
        (previous.rules.copy(), owner)
      }
    }
  }
  match parent {
    Some(previous) =>
      for diagnostic in previous.diagnostics {
        if !has_local_access || diagnostic.code == "external_access_dependency" {
          diagnostics.push({ ..diagnostic, context: selector, })
        }
      }
    None => ()
  }
  let label = kind +
    (if node.directive.args.length() == 0 {
      ""
    } else {
      " " + node.directive.args.join(" ")
    })
  let context : AccessContext = {
    selector,
    kind,
    label,
    source: node.source,
    parent: parent.map(fn(item) { item.selector }),
    inherited_from,
    declared_rules: declared,
    rules,
    diagnostics,
    audit_pair_budget: state.limits.max_audit_pairs,
  }
  state.contexts.push(context)
  let mut server_count = 0
  let mut location_count = 0
  for child in node.children {
    if child.directive.is_comment() {
      continue
    }
    let child_kind = child.directive.name
    if kind == "http" && child_kind == "server" {
      server_count += 1
      match
        make_context(
          state,
          child,
          selector + "/server[" + server_count.to_string() + "]",
          "server",
          Some(context),
        ) {
        Err(error) => return Err(error)
        Ok(_) => ()
      }
    } else if (kind == "server" || kind == "location") &&
      child_kind == "location" {
      location_count += 1
      match
        make_context(
          state,
          child,
          selector + "/location[" + location_count.to_string() + "]",
          "location",
          Some(context),
        ) {
        Err(error) => return Err(error)
        Ok(_) => ()
      }
    } else if child_kind == "http" ||
      child_kind == "server" ||
      child_kind == "location" {
      state.diagnostics.push(
        blocking_diagnostic(
          "invalid_context_relationship",
          "Unsupported structural parent for " + child_kind,
          child,
          selector,
        ),
      )
    }
  }
  Ok(())
}

///|
pub fn analyze_nginx_sources(
  entry : String,
  sources : Array[SourceFile],
  limits~ : Limits = Limits::default(),
) -> Result[Analysis, ConfigError] {
  match validate_limits(limits) {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  let entry = match normalize_source_path(entry) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  let files = match prepare_sources(sources, limits) {
    Ok(value) => value
    Err(error) => return Err(error)
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
    Ok(value) => value
    Err(error) => return Err(error)
  }
  let state : BuildState = {
    limits,
    contexts: [],
    diagnostics: [],
    rule_count: 0,
  }
  let mut http_count = 0
  for node in nodes {
    if node.directive.is_comment() {
      continue
    }
    if node.directive.name == "http" {
      http_count += 1
      if http_count > 1 {
        return Err(
          config_error(
            "invalid_context",
            "Multiple http blocks are not a valid main Nginx configuration",
            path=node.source.path,
            line=node.source.line,
          ),
        )
      }
      match
        make_context(
          state,
          node,
          "http[" + http_count.to_string() + "]",
          "http",
          None,
        ) {
        Err(error) => return Err(error)
        Ok(_) => ()
      }
    } else if node.directive.name == "allow" ||
      node.directive.name == "deny" ||
      access_case_variant(node.directive.name) {
      state.diagnostics.push(
        blocking_diagnostic(
          "invalid_access_context", "Access directives are not valid in main context",
          node, "",
        ),
      )
    } else if contains_access(node.children) {
      state.diagnostics.push(
        blocking_diagnostic(
          "unsupported_access_context",
          "Access rules outside HTTP are not analyzed: " + node.directive.name,
          node,
          "",
        ),
      )
    }
  }
  if http_count == 0 {
    return Err(
      config_error(
        "missing_http_context",
        "A main configuration must supply one http block",
        path=entry,
      ),
    )
  }
  for diagnostic in expand.diagnostics {
    state.diagnostics.push(diagnostic)
  }
  for diagnostic in state.diagnostics {
    if diagnostic.blocking {
      for context in state.contexts {
        context.diagnostics.push({ ..diagnostic, context: context.selector, })
      }
    }
  }
  Ok({
    entry,
    scope: "nginx_http_access_ipv4",
    sources: expand.used,
    include_edges: expand.edges,
    contexts: state.contexts,
    diagnostics: state.diagnostics,
    audit_pair_budget: limits.max_audit_pairs,
  })
}
