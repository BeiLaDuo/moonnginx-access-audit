///|
priv struct ExpandedNode {
  directive : @ngx.Directive
  source : SourceLocation
  children : Array[ExpandedNode]
}

///|
priv struct ParsedSource {
  path : String
  nodes : Array[@ngx.Directive]
}

///|
priv struct ExpandState {
  entry : String
  files : Array[SourceFile]
  limits : Limits
  cache : Array[ParsedSource]
  used : Array[String]
  edges : Array[IncludeEdge]
  diagnostics : Array[Diagnostic]
  mut expansions : Int32
  mut directives : Int32
}

///|
fn validate_limits(limits : Limits) -> Result[Unit, ConfigError] {
  let fields = [
    ("max_sources", limits.max_sources),
    ("max_total_chars", limits.max_total_chars),
    ("max_source_chars", limits.max_source_chars),
    ("max_include_depth", limits.max_include_depth),
    ("max_include_expansions", limits.max_include_expansions),
    ("max_context_depth", limits.max_context_depth),
    ("max_directives", limits.max_directives),
    ("max_contexts", limits.max_contexts),
    ("max_rules", limits.max_rules),
    ("max_audit_pairs", limits.max_audit_pairs),
  ]
  for field in fields {
    if field.1 < 1 {
      return Err(config_error("invalid_limits", field.0 + " must be positive"))
    }
  }
  // The upstream parser recursively descends blocks. Keep the actual call
  // depth bounded even when a caller asks for a larger logical budget.
  if limits.max_context_depth > 128 || limits.max_include_depth > 64 {
    return Err(
      config_error(
        "invalid_limits", "Context depth is at most 128; include depth is at most 64",
      ),
    )
  }
  Ok(())
}

///|
fn prepare_sources(
  sources : Array[SourceFile],
  limits : Limits,
) -> Result[Array[SourceFile], ConfigError] {
  if sources.length() > limits.max_sources {
    return Err(
      config_error("limit_exceeded", "Source count exceeds max_sources"),
    )
  }
  let output : Array[SourceFile] = []
  let mut remaining = limits.max_total_chars
  for source in sources {
    let path = match normalize_source_path(source.path) {
      Ok(value) => value
      Err(error) => return Err(error)
    }
    if output.any(fn(item) { item.path == path }) {
      return Err(
        config_error(
          "duplicate_source",
          "Two sources normalize to the same path",
          path~,
        ),
      )
    }
    if source.content.length() > limits.max_source_chars {
      return Err(
        config_error("limit_exceeded", "Source exceeds max_source_chars", path~),
      )
    }
    if source.content.length() > remaining {
      return Err(
        config_error("limit_exceeded", "Bundle exceeds max_total_chars", path~),
      )
    }
    remaining -= source.content.length()
    output.push({ path, content: source.content, })
  }
  Ok(output)
}

///|
/// This pass only fences recursive parser depth. It neither builds tokens nor
/// interprets directives; moonnginx remains the sole configuration parser.
fn check_parser_depth(
  source : SourceFile,
  maximum : Int32,
) -> Result[Unit, ConfigError] {
  let chars = source.content.to_array()
  let mut i = 0
  let mut line = 1
  let mut depth = 0
  let mut quote = '\u{0}'
  let mut word = false
  let mut comment = false
  while i < chars.length() {
    let char = chars[i]
    if char == '\n' {
      line += 1
    }
    if comment {
      if char == '\n' || char == '\r' {
        comment = false
        word = false
      }
      i += 1
      continue
    }
    if quote.to_int() != 0 {
      if char == '\\' {
        if i + 1 < chars.length() && chars[i + 1] == '\n' {
          line += 1
        }
        i += 2
        continue
      }
      if char == quote {
        quote = '\u{0}'
        word = false
      }
      i += 1
      continue
    }
    if char == '\\' {
      if i + 1 < chars.length() && chars[i + 1] == '\n' {
        line += 1
      }
      word = true
      i += 2
      continue
    }
    if char == '$' && i + 1 < chars.length() && chars[i + 1] == '{' {
      i += 2
      while i < chars.length() && chars[i] != '}' {
        if chars[i] == '\n' {
          line += 1
        }
        i += 1
      }
      if i < chars.length() {
        i += 1
      }
      word = true
      continue
    }
    if (char == '\'' || char == '"') && !word {
      quote = char
    } else if char == '#' && !word {
      comment = true
    } else if char == '{' {
      depth += 1
      if depth > maximum {
        return Err(
          config_error(
            "limit_exceeded",
            "Configuration nesting exceeds max_context_depth",
            path=source.path,
            line~,
          ),
        )
      }
      word = false
    } else if char == '}' {
      depth -= 1
      word = false
    } else if char == ';' ||
      char == ' ' ||
      char == '\t' ||
      char == '\r' ||
      char == '\n' {
      word = false
    } else {
      word = true
    }
    i += 1
  }
  Ok(())
}

///|
fn upstream_error_line(message : String) -> Int32 {
  if !message.has_prefix("line ") {
    return 0
  }
  let chars = message.to_array()
  let mut line = 0
  for index = 5; index < chars.length(); index = index + 1 {
    let char = chars[index]
    if char < '0' || char > '9' {
      break
    }
    if line > 100000000 {
      return 0
    }
    line = line * 10 + char.to_int() - '0'.to_int()
  }
  line
}

///|
fn parsed_source(
  state : ExpandState,
  path : String,
) -> Result[Array[@ngx.Directive], ConfigError] {
  for cached in state.cache {
    if cached.path == path {
      return Ok(cached.nodes)
    }
  }
  let mut selected : SourceFile? = None
  for file in state.files {
    if file.path == path {
      selected = Some(file)
      break
    }
  }
  let source = match selected {
    Some(file) => file
    None =>
      return Err(
        config_error(
          "missing_source",
          "Source is absent from the supplied bundle",
          path~,
        ),
      )
  }
  match parse_source_file(source, state.limits) {
    Err(error) => Err(error)
    Ok(nodes) => {
      state.cache.push({ path, nodes, })
      state.used.push(path)
      Ok(nodes)
    }
  }
}

///|
/// Guarded parser entry for native source loaders discovering includes.
pub fn parse_source_file(
  source : SourceFile,
  limits : Limits,
) -> Result[Array[@ngx.Directive], ConfigError] {
  match validate_limits(limits) {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  let prepared = match prepare_sources([source], limits) {
    Err(error) => return Err(error)
    Ok(files) => files[0]
  }
  if prepared.content.to_array().any(fn(char) { char.to_int() == 0 }) {
    return Err(
      config_error(
        "invalid_input",
        "NUL in configuration text",
        path=prepared.path,
      ),
    )
  }
  match check_parser_depth(prepared, limits.max_context_depth) {
    Err(error) => return Err(error)
    Ok(_) => ()
  }
  // Exact upstream 0.2.0 argument order is (file, text).
  match @ngx.parse_conf_named(prepared.path, prepared.content) {
    Err(error) => {
      let message = error.message()
      Err(
        config_error(
          "parse_error",
          message,
          path=prepared.path,
          line=upstream_error_line(message),
        ),
      )
    }
    Ok(config) => Ok(config.parsed)
  }
}

///|
fn expand_file(
  state : ExpandState,
  path : String,
  chain : Array[String],
  include_depth : Int32,
  tree_depth : Int32,
) -> Result[Array[ExpandedNode], ConfigError] {
  if chain.contains(path) {
    return Err(
      config_error(
        "include_cycle",
        "Include cycle: " + chain.join(" -> ") + " -> " + path,
        path~,
      ),
    )
  }
  if include_depth > state.limits.max_include_depth {
    return Err(
      config_error(
        "limit_exceeded",
        "Include nesting exceeds max_include_depth",
        path~,
      ),
    )
  }
  let nodes = match parsed_source(state, path) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  expand_nodes(state, nodes, path, chain, include_depth, tree_depth)
}

///|
fn expand_nodes(
  state : ExpandState,
  nodes : Array[@ngx.Directive],
  path : String,
  chain : Array[String],
  include_depth : Int32,
  tree_depth : Int32,
) -> Result[Array[ExpandedNode], ConfigError] {
  if tree_depth > state.limits.max_context_depth {
    return Err(
      config_error(
        "limit_exceeded",
        "Expanded tree exceeds max_context_depth",
        path~,
      ),
    )
  }
  let output : Array[ExpandedNode] = []
  for directive in nodes {
    if state.directives >= state.limits.max_directives {
      return Err(
        config_error(
          "limit_exceeded",
          "Expanded nodes exceed max_directives",
          path~,
          line=directive.line,
        ),
      )
    }
    state.directives += 1
    let source : SourceLocation = {
      path,
      line: directive.line,
      include_chain: chain.copy(),
    }
    if directive.name == "include" && !directive.is_comment() {
      if directive.has_block || directive.args.length() != 1 {
        return Err(
          config_error(
            "invalid_include",
            "include requires exactly one path and no block",
            path~,
            line=directive.line,
          ),
        )
      }
      let pattern = match resolve_include_path(state.entry, directive.args[0]) {
        Ok(value) => value
        Err(error) => return Err({ ..error, path, line: directive.line, })
      }
      let targets : Array[String] = []
      if wildcard_path(pattern) {
        for file in state.files {
          if include_path_matches(pattern, file.path) {
            targets.push(file.path)
          }
        }
        targets.sort()
      } else if state.files.any(fn(file) { file.path == pattern }) {
        targets.push(pattern)
      } else {
        return Err(
          config_error(
            "missing_include",
            "Included file is absent: " + pattern,
            path~,
            line=directive.line,
          ),
        )
      }
      state.edges.push({ source, pattern, targets: targets.copy(), })
      if targets.length() == 0 {
        state.diagnostics.push({
          code: "empty_include_mask",
          severity: @cidr.Info,
          blocking: false,
          message: "Include mask matched no supplied file: " + pattern,
          source: Some(source),
          context: "",
        })
        if state.expansions >= state.limits.max_include_expansions {
          return Err(
            config_error(
              "limit_exceeded",
              "Include occurrences exceed max_include_expansions",
              path~,
              line=directive.line,
            ),
          )
        }
        state.expansions += 1
      }
      for target in targets {
        if state.expansions >= state.limits.max_include_expansions {
          return Err(
            config_error(
              "limit_exceeded",
              "Include occurrences exceed max_include_expansions",
              path~,
              line=directive.line,
            ),
          )
        }
        state.expansions += 1
        let next_chain = chain.copy()
        next_chain.push(path)
        match
          expand_file(state, target, next_chain, include_depth + 1, tree_depth) {
          Err(error) => return Err(error)
          Ok(included) =>
            for item in included {
              output.push(item)
            }
        }
      }
    } else {
      let children = if directive.has_block {
        match
          expand_nodes(
            state,
            directive.children,
            path,
            chain,
            include_depth,
            tree_depth + 1,
          ) {
          Ok(value) => value
          Err(error) => return Err(error)
        }
      } else {
        []
      }
      output.push({ directive, source, children, })
    }
  }
  Ok(output)
}
