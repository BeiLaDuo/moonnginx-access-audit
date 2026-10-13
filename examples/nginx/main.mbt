///|
fn main {
  let source : @adapter.SourceFile = {
    path: "nginx.conf",
    content: "http { allow 10.0.0.0/8; deny all; server { location /private { } location /health { allow 127.0.0.1; deny all; } } }",
  }
  match @adapter.analyze_nginx_sources("nginx.conf", [source]) {
    Err(error) => println(error.summary())
    Ok(analysis) => {
      println(@adapter.render_contexts(analysis, "text"))
      for context in analysis.contexts {
        if context.kind == "location" {
          match context.probe("127.0.0.1") {
            Err(error) => println(error.summary())
            Ok(probe) => println(@adapter.render_probe(probe, "json"))
          }
        }
      }
    }
  }
}
