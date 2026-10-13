///|
/// The host only opens files and lists one directory. Parsing and include
/// resolution remain in MoonBit. Node.js 22.13 or newer is required.
extern "js" fn filesystem_request(
  root : String,
  operation : String,
  relative : String,
  maximum : Int32,
) -> String =
  #| (root, operation, relative, maximum) => {
  #|   const fs = process.getBuiltinModule('fs');
  #|   const path = process.getBuiltinModule('path');
  #|   const failure = (code, message) => JSON.stringify({ok:false, code, message});
  #|   try {
  #|     const base = fs.realpathSync(path.resolve(root));
  #|     if (!fs.statSync(base).isDirectory()) return failure('io_error', 'Input root is not a directory');
  #|     if (path.isAbsolute(relative)) return failure('path_escape', 'Expected a root-relative path');
  #|     const target = path.resolve(base, relative);
  #|     const inside = path.relative(base, target);
  #|     if (inside === '..' || inside.startsWith('..' + path.sep) || path.isAbsolute(inside)) {
  #|       return failure('path_escape', 'Path leaves the input root');
  #|     }
  #|     let current = base;
  #|     for (const part of inside.split(path.sep).filter(Boolean)) {
  #|       current = path.join(current, part);
  #|       if (fs.lstatSync(current).isSymbolicLink()) {
  #|         return failure('unsupported_path', 'Symbolic links and junctions are not supported');
  #|       }
  #|     }
  #|     if (operation === 'read') {
  #|       if (!fs.statSync(target).isFile()) return failure('io_error', 'Configuration source is not a regular file');
  #|       const fd = fs.openSync(target, 'r');
  #|       try {
  #|         const capacity = maximum * 4 + 3;
  #|         if (fs.fstatSync(fd).size > capacity) return failure('limit_exceeded', 'Encoded file exceeds the source character budget');
  #|         const chunks = [];
  #|         let length = 0;
  #|         for (;;) {
  #|           const buffer = Buffer.alloc(Math.min(16384, capacity - length + 1));
  #|           const count = fs.readSync(fd, buffer, 0, buffer.length, null);
  #|           if (count === 0) break;
  #|           length += count;
  #|           if (length > capacity) return failure('limit_exceeded', 'File grew beyond the source budget');
  #|           chunks.push(buffer.subarray(0, count));
  #|         }
  #|         const content = new TextDecoder('utf-8', {fatal:true}).decode(Buffer.concat(chunks));
  #|         if (content.length > maximum) return failure('limit_exceeded', 'Source exceeds its character budget');
  #|         return JSON.stringify({ok:true, content});
  #|       } finally { fs.closeSync(fd); }
  #|     }
  #|     if (operation === 'list') {
  #|       const directory = fs.opendirSync(target);
  #|       try {
  #|         const names = [];
  #|         for (;;) {
  #|           const item = directory.readSync();
  #|           if (item === null) break;
  #|           if (names.length >= maximum) return failure('limit_exceeded', 'Directory scan exceeds its entry budget');
  #|           names.push(item.name);
  #|         }
  #|         return JSON.stringify({ok:true, names});
  #|       } finally { directory.closeSync(); }
  #|     }
  #|     return failure('internal_io', 'Unknown filesystem operation');
  #|   } catch (error) {
  #|     if (error.code === 'ENOENT') return failure('missing_source', 'Configuration source or directory does not exist');
  #|     if (error instanceof TypeError && error.code === 'ERR_ENCODING_INVALID_ENCODED_DATA') {
  #|       return failure('invalid_utf8', 'Configuration source is not valid UTF-8');
  #|     }
  #|     return failure('io_error', String(error.code || error.name || 'Filesystem error'));
  #|   }
  #| }

///|
fn io_error(
  code : String,
  message : String,
  path : String,
  line~ : Int32 = 0,
) -> @nginx.ConfigError {
  { code, message, path, line, }
}

///|
fn response_json(
  text : String,
  path : String,
) -> Result[Json, @nginx.ConfigError] {
  Ok(@json.parse(text.to_string_view())) catch {
    _ => Err(io_error("internal_io", "Invalid filesystem response", path))
  }
}

///|
fn response_failure(value : Json, path : String) -> @nginx.ConfigError {
  match value {
    { "ok": false, "code": String(code), "message": String(message), .. } =>
      io_error(code, message, path)
    _ => io_error("internal_io", "Unexpected filesystem response", path)
  }
}

///|
fn read_source(
  root : String,
  path : String,
  maximum : Int32,
) -> Result[String, @nginx.ConfigError] {
  let value = match
    response_json(filesystem_request(root, "read", path, maximum), path) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  match value {
    { "ok": true, "content": String(content), .. } => Ok(content)
    _ => Err(response_failure(value, path))
  }
}

///|
fn directory_names(
  root : String,
  path : String,
  maximum : Int32,
) -> Result[Array[String], @nginx.ConfigError] {
  let value = match
    response_json(filesystem_request(root, "list", path, maximum), path) {
    Ok(value) => value
    Err(error) => return Err(error)
  }
  match value {
    { "ok": true, "names": Array(names), .. } => {
      let result : Array[String] = []
      for name in names {
        match name {
          String(value) => result.push(value)
          _ =>
            return Err(
              io_error("internal_io", "Non-string directory name", path),
            )
        }
      }
      result.sort()
      Ok(result)
    }
    _ => Err(response_failure(value, path))
  }
}
