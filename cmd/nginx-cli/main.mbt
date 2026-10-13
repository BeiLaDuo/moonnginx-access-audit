///|
extern "js" fn arguments() -> FixedArray[String] =
  #| () => process.argv.slice(2)

///|
extern "js" fn finish(code : Int32, stdout : String, stderr : String) -> Unit =
  #| (code, stdout, stderr) => {
  #|   if (stdout) process.stdout.write(stdout.endsWith('\n') ? stdout : stdout + '\n');
  #|   if (stderr) process.stderr.write(stderr.endsWith('\n') ? stderr : stderr + '\n');
  #|   process.exitCode = code;
  #| }

///|
fn file_failure(error : @nginx.ConfigError, format : String) -> Unit {
  let code = if error.code == "limit_exceeded" {
    4
  } else if error.code.has_prefix("unsupported") {
    3
  } else {
    2
  }
  finish(code, "", @nginx.render_error(error, format))
}

///|
fn main {
  let argument_list : Array[String] = []
  for value in arguments() {
    argument_list.push(value)
  }
  let options = match @cli.parse_args(argument_list) {
    Ok(value) => value
    Err(error) => {
      let result = @cli.argument_failure(error, argument_list)
      finish(result.exit_code, result.stdout, result.stderr)
      return
    }
  }
  let sources = if options.command == @cli.Help ||
    options.command == @cli.Version {
    []
  } else {
    match
      @fileio.load_sources(options.input_root, options.entry, options.limits) {
      Ok(value) => value
      Err(error) => {
        file_failure(error, options.format)
        return
      }
    }
  }
  let result = @cli.run(options, sources)
  finish(result.exit_code, result.stdout, result.stderr)
}
