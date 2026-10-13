///|
priv struct LoadState {
  root : String
  entry : String
  limits : @nginx.Limits
  sources : Array[@nginx.SourceFile]
  directories : Map[String, Array[String]]
  mut remaining_chars : Int32
  mut remaining_entries : Int32
}

///|
fn parent_directory(path : String) -> String {
  let parts = path.split("/").map(fn(view) { view.to_owned() }).to_array()
  ignore(parts.pop())
  parts.join("/")
}

///|
fn joined_path(directory : String, filename : String) -> String {
  if directory == "" {
    filename
  } else {
    directory + "/" + filename
  }
}

///|
fn include_targets(
  state : LoadState,
  operand : String,
  source : String,
  line : Int32,
) -> Result[Array[String], @nginx.ConfigError] {
  let pattern = match @nginx.resolve_include_path(state.entry, operand) {
    Ok(value) => value
    Err(error) => return Err({ ..error, path: source, line, })
  }
  if !pattern.contains("*") && !pattern.contains("?") {
    return Ok([pattern])
  }
  let directory = parent_directory(pattern)
  let names = match state.directories.get(directory) {
    Some(names) => names
    None => {
      let names = match
        directory_names(state.root, directory, state.remaining_entries) {
        Ok(value) => value
        // As in Nginx Unix glob: a mask with no matching directory/file is empty.
        Err(error) if error.code == "missing_source" => []
        Err(error) => return Err({ ..error, line, })
      }
      state.remaining_entries -= names.length()
      state.directories[directory] = names
      names
    }
  }
  let targets : Array[String] = []
  for name in names {
    let candidate = joined_path(directory, name)
    if @nginx.include_path_matches(pattern, candidate) {
      targets.push(candidate)
    }
  }
  if targets.length() > state.limits.max_sources - state.sources.length() {
    // Existing sources may occur again; only bound new distinct targets.
    let mut new_count = 0
    for target in targets {
      if !state.sources.any(fn(item) { item.path == target }) {
        new_count += 1
      }
    }
    if new_count > state.limits.max_sources - state.sources.length() {
      return Err(
        io_error(
          "limit_exceeded",
          "Include mask exceeds source count budget",
          source,
          line~,
        ),
      )
    }
  }
  Ok(targets)
}

///|
fn collect_includes(
  state : LoadState,
  nodes : Array[@ngx.Directive],
  source : String,
  include_depth : Int32,
) -> Result[Unit, @nginx.ConfigError] {
  for node in nodes {
    if node.name == "include" && !node.is_comment() {
      if node.has_block || node.args.length() != 1 {
        return Err(
          io_error(
            "invalid_include",
            "include requires exactly one path and no block",
            source,
            line=node.line,
          ),
        )
      }
      let targets = match
        include_targets(state, node.args[0], source, node.line) {
        Ok(value) => value
        Err(error) => return Err(error)
      }
      for target in targets {
        match load_source(state, target, include_depth + 1) {
          Ok(_) => ()
          Err(error) if error.code == "missing_source" =>
            return Err(
              io_error(
                "missing_include",
                "Included file is absent: " + target,
                source,
                line=node.line,
              ),
            )
          Err(error) => return Err(error)
        }
      }
    } else if node.has_block {
      match collect_includes(state, node.children, source, include_depth) {
        Ok(_) => ()
        Err(error) => return Err(error)
      }
    }
  }
  Ok(())
}

///|
fn load_source(
  state : LoadState,
  path : String,
  include_depth : Int32,
) -> Result[Unit, @nginx.ConfigError] {
  if state.sources.any(fn(source) { source.path == path }) {
    // The pure expansion stage checks cycles and counts repeated occurrences.
    return Ok(())
  }
  if include_depth > state.limits.max_include_depth {
    return Err(
      io_error("limit_exceeded", "Include nesting exceeds its budget", path),
    )
  }
  if state.sources.length() >= state.limits.max_sources {
    return Err(
      io_error("limit_exceeded", "Source count exceeds its budget", path),
    )
  }
  let maximum = state.limits.max_source_chars.min(state.remaining_chars)
  let content = match read_source(state.root, path, maximum) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  if content.length() > state.remaining_chars {
    return Err(
      io_error(
        "limit_exceeded", "Source bundle exceeds total character budget", path,
      ),
    )
  }
  let source : @nginx.SourceFile = { path, content, }
  let nodes = match @nginx.parse_source_file(source, state.limits) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  state.remaining_chars -= content.length()
  state.sources.push(source)
  collect_includes(state, nodes, path, include_depth)
}

///|
/// Load only the main configuration and files reached by its includes.
/// Pure expansion later verifies cycles, occurrence budgets and semantics.
pub fn load_sources(
  root : String,
  entry : String,
  limits : @nginx.Limits,
) -> Result[Array[@nginx.SourceFile], @nginx.ConfigError] {
  if root == "" {
    return Err(io_error("invalid_root", "Input root cannot be empty", ""))
  }
  let normalized = match @nginx.normalize_source_path(entry) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  if normalized.has_prefix("/") || normalized.contains(":") {
    return Err(
      io_error("invalid_entry", "CONFIG must be relative to --root", entry),
    )
  }
  // Verify all public limit values before any potentially large filesystem work.
  match @nginx.parse_source_file({ path: normalized, content: "", }, limits) {
    Ok(_) => ()
    Err(error) => return Err(error)
  }
  let state : LoadState = {
    root,
    entry: normalized,
    limits,
    sources: [],
    directories: Map([]),
    remaining_chars: limits.max_total_chars,
    remaining_entries: limits.max_directives,
  }
  match load_source(state, normalized, 0) {
    Ok(_) => Ok(state.sources)
    Err(error) => Err(error)
  }
}
