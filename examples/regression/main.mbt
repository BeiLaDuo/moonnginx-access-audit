///|
fn main {
  let make = fn(rule : String) {
    @nginx.analyze_nginx_sources("nginx.conf", [
      {
        path: "nginx.conf",
        content: "http { allow 127.0.0.1; deny all; server { server_name example.test; location /admin/ { include admin.conf; } } }",
      },
      { path: "admin.conf", content: rule, },
    ]).unwrap()
  }
  let before = make("# inherit\n")
  let after = make("deny 127.0.0.2;")
  let target : @nginx.RequestTarget = {
    host: "example.test",
    uri: "/admin/probe.txt",
    port: 80,
    local_address: "127.0.0.1",
  }
  let comparison = @nginx.compare_access(
    before,
    after,
    target,
    scope="127.0.0.0/8",
  ).unwrap()
  println(comparison.render("text"))
}
