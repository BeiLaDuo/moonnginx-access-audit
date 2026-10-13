///|
/// A portable source namespace; Windows separators are accepted but UNC is not.
pub fn normalize_source_path(path : String) -> Result[String, ConfigError] {
  let chars : Array[Char] = []
  for char in path.to_array() {
    if char.to_int() == 0 {
      return Err(config_error("invalid_path", "NUL in source path"))
    }
    chars.push(if char == '\\' { '/' } else { char })
  }
  let text = String::from_array(chars)
  if text == "" || text.has_prefix("//") || text.contains("://") {
    return Err(config_error("invalid_path", "Empty, UNC, or URI path: " + path))
  }
  if text.length() > 1024 {
    return Err(
      config_error("limit_exceeded", "Source path exceeds 1024 characters"),
    )
  }
  let absolute = text.has_prefix("/")
  let parts : Array[String] = []
  for view in text.split("/") {
    let part = view.to_owned()
    if part == "" || part == "." {
      continue
    }
    if part == ".." {
      if parts.length() == 0 ||
        (parts.length() == 1 && parts[0].has_suffix(":")) {
        return Err(
          config_error(
            "path_escape",
            "Path escapes its source namespace: " + path,
          ),
        )
      }
      ignore(parts.pop())
    } else {
      if part.contains(":") {
        let pc = part.to_array()
        let drive = parts.length() == 0 &&
          pc.length() == 2 &&
          pc[1] == ':' &&
          ((pc[0] >= 'A' && pc[0] <= 'Z') || (pc[0] >= 'a' && pc[0] <= 'z'))
        if !drive || !text.has_prefix(part + "/") {
          return Err(
            config_error(
              "invalid_path",
              "Unsupported colon in source path: " + path,
            ),
          )
        }
      }
      parts.push(part)
    }
  }
  if parts.length() == 0 {
    return Err(config_error("invalid_path", "A source path must name a file"))
  }
  Ok((if absolute { "/" } else { "" }) + parts.join("/"))
}

///|
fn source_directory(path : String) -> String {
  let chars = path.to_array()
  let mut last = -1
  for index = 0; index < chars.length(); index = index + 1 {
    if chars[index] == '/' {
      last = index
    }
  }
  if last == 0 {
    "/"
  } else if last < 0 {
    ""
  } else {
    String::from_array(chars[0:last])
  }
}

///|
fn source_basename(path : String) -> String {
  let chars = path.to_array()
  let mut last = -1
  for index = 0; index < chars.length(); index = index + 1 {
    if chars[index] == '/' {
      last = index
    }
  }
  String::from_array(chars[last + 1:])
}

///|
fn absolute_source_path(path : String) -> Bool {
  path.has_prefix("/") || (path.length() >= 3 && path.to_array()[1] == ':')
}

///|
fn within_source_directory(root : String, path : String) -> Bool {
  if root == "" {
    !absolute_source_path(path)
  } else if root == "/" {
    path.has_prefix("/")
  } else {
    path.has_prefix(root + "/")
  }
}

///|
/// Relative includes are anchored to the main configuration's directory.
pub fn resolve_include_path(
  entry : String,
  operand : String,
) -> Result[String, ConfigError] {
  if operand == "" ||
    operand.contains("\\") ||
    operand.contains("$") ||
    operand.contains("[") ||
    operand.contains("]") ||
    operand.contains("**") {
    return Err(
      config_error(
        "unsupported_include",
        "Unsupported include operand: " + operand,
      ),
    )
  }
  let main_path = match normalize_source_path(entry) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  let root = source_directory(main_path)
  let candidate = if absolute_source_path(operand) {
    operand
  } else if root == "" {
    operand
  } else if root == "/" {
    root + operand
  } else {
    root + "/" + operand
  }
  let normalized = match normalize_source_path(candidate) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  if !within_source_directory(root, normalized) {
    return Err(
      config_error(
        "path_escape",
        "Include leaves the main configuration directory: " + operand,
      ),
    )
  }
  let dir = source_directory(normalized)
  if dir.contains("*") || dir.contains("?") {
    return Err(
      config_error(
        "unsupported_include", "Wildcards are supported only in the final path component",
      ),
    )
  }
  Ok(normalized)
}

///|
fn wildcard_path(path : String) -> Bool {
  path.contains("*") || path.contains("?")
}

///|
/// Matches the supported final-component glob profile without filesystem IO.
pub fn include_path_matches(pattern : String, candidate : String) -> Bool {
  if source_directory(pattern) != source_directory(candidate) {
    return false
  }
  let mask = source_basename(pattern)
  let filename = source_basename(candidate)
  if filename.has_prefix(".") && !mask.has_prefix(".") {
    return false
  }
  let pc = mask.to_array()
  let fc = filename.to_array()
  let mut p = 0
  let mut f = 0
  let mut star = -1
  let mut retry = 0
  while f < fc.length() {
    if p < pc.length() && (pc[p] == '?' || pc[p] == fc[f]) {
      p += 1
      f += 1
    } else if p < pc.length() && pc[p] == '*' {
      star = p
      p += 1
      retry = f
    } else if star >= 0 {
      retry += 1
      f = retry
      p = star + 1
    } else {
      return false
    }
  }
  while p < pc.length() && pc[p] == '*' {
    p += 1
  }
  p == pc.length()
}
