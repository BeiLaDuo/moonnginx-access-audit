///|
fn security_fixture(text : String) -> SecurityReport {
  scan_security_sources("nginx.conf", [{ path: "nginx.conf", content: text, }]).unwrap()
}

///|
fn security_has(report : SecurityReport, code : String) -> Bool {
  report.findings.any(fn(f) { f.code == code })
}

///|
test "security alias checks literal nested prefixes but not exact files or slash directories" {
  let bad = security_fixture(
    "http { server { location /static { alias /srv/static/; } } }",
  )
  assert_true(security_has(bad, "alias_traversal"))
  assert_true(bad.gate_failed(false))
  for
    text in [
      "http { server { location /static/ { alias /srv/static/; } } }", "http { server { location = /icon { alias /srv/icon.png; } } }",
      "http { server { location ~ ^/image/(.*)$ { alias /srv/image.png; } } }",
    ] {
    assert_false(security_has(security_fixture(text), "alias_traversal"))
  }
  assert_true(
    security_has(
      security_fixture(
        "http { server { location /public/ { location ^~ /public/assets { alias /srv/assets/; } } } }",
      ),
      "alias_traversal",
    ),
  )
}

///|
test "security header inheritance detects dropped names and accepts explicit repetition" {
  let prefix = "http { add_header X-Frame-Options DENY always; server { location / { "
  assert_true(
    security_has(
      security_fixture(prefix + "add_header Cache-Control no-store; } } }"),
      "add_header_redefinition",
    ),
  )
  assert_false(
    security_has(
      security_fixture(
        prefix + "add_header x-frame-options SAMEORIGIN always; } } }",
      ),
      "add_header_redefinition",
    ),
  )
  assert_false(
    security_has(
      security_fixture(prefix + "root /srv/www; } } }"),
      "add_header_redefinition",
    ),
  )
}

///|
test "security add_header_inherit merge inherits recursively and on restores replacement" {
  let prefix = "http { add_header_inherit merge; add_header X-Frame-Options DENY; server { add_header X-A 1; location / { "
  assert_false(
    security_has(
      security_fixture(prefix + "add_header X-B 2; } } }"),
      "add_header_redefinition",
    ),
  )
  let result = security_fixture(
    prefix + "add_header_inherit on; add_header X-B 2; } } }",
  )
  assert_true(security_has(result, "add_header_redefinition"))
  assert_true(result.findings[0].message.contains("x-frame-options"))
  assert_true(result.findings[0].message.contains("x-a"))
}

///|
test "security add_header_inherit off drops even without a new header" {
  let result = security_fixture(
    "http { add_header X-Frame-Options DENY; server { add_header_inherit off; location / { root /srv/www; } } }",
  )
  assert_eq(result.findings.length(), 1)
  assert_true(security_has(result, "add_header_redefinition"))
  assert_true(
    security_fixture("http { add_header_inherit custom; server {} }").has_blocking(),
  )
}

///|
test "security raw host forwarding uses complete variable tokens" {
  for value in ["$http_host", "${http_host}", "prefix-$http_host"] {
    assert_true(
      security_has(
        security_fixture(
          "http { server { location / { proxy_set_header HOST " +
          value +
          "; } } }",
        ),
        "host_spoofing",
      ),
    )
  }
  for value in ["$host", "$http_host_suffix", "backend.internal"] {
    assert_false(
      security_has(
        security_fixture(
          "http { server { location / { proxy_set_header Host " +
          value +
          "; } } }",
        ),
        "host_spoofing",
      ),
    )
  }
}

///|
test "security proxy destination risk excludes variables confined to a path" {
  for
    value in [
      "http://$http_host/api", "https://${arg_upstream}/", "$http_x_destination",
    ] {
    let result = security_fixture(
      "http { server { location / { proxy_pass " + value + "; } } }",
    )
    assert_true(security_has(result, "proxy_pass_variable_authority"))
    assert_false(result.gate_failed(false))
    assert_true(result.gate_failed(true))
  }
  for
    value in [
      "http://backend.internal/$request_uri", "http://backend.internal$request_uri",
      "http://backend.internal${uri}", "http://backend.internal:8080/api?x=$arg_next",
    ] {
    let result = security_fixture(
      "http { server { location / { proxy_pass " + value + "; } } }",
    )
    assert_eq(result.findings.length(), 0)
    assert_false(result.has_blocking())
  }
}

///|
test "security unknown variable authority is incomplete not a fabricated SSRF finding" {
  let result = security_fixture(
    "http { map $host $destination { default backend; } server { location / { proxy_pass http://$destination; } } }",
  )
  assert_true(result.has_blocking())
  assert_true(result.gate_failed(false))
  assert_false(security_has(result, "proxy_pass_variable_authority"))
  assert_true(result.diagnostics[0].message.contains("destination"))
}

///|
test "security return warns for successful response before inherited deny but not denial responses" {
  for value in ["200 ok", "302 https://example.test/", "https://example.test/"] {
    assert_true(
      security_has(
        security_fixture(
          "http { server { deny all; location /private { return " +
          value +
          "; } } }",
        ),
        "return_bypasses_allow_deny",
      ),
    )
  }
  for value in ["403", "404", "444"] {
    assert_false(
      security_has(
        security_fixture(
          "http { server { deny all; location /private { return " +
          value +
          "; } } }",
        ),
        "return_bypasses_allow_deny",
      ),
    )
  }
  assert_false(
    security_has(
      security_fixture("http { server { return 200 ok; } }"),
      "return_bypasses_allow_deny",
    ),
  )
}

///|
test "security redirects and if response use rewrite-phase bypass semantics" {
  assert_true(
    security_has(
      security_fixture(
        "http { server { deny all; location / { if ($arg_debug) { return 200 ok; } } } }",
      ),
      "return_bypasses_allow_deny",
    ),
  )
  for
    value in ["^ /new permanent", "^ /new redirect", "^ https://example.test/"] {
    assert_true(
      security_has(
        security_fixture("http { server { deny all; rewrite " + value + "; } }"),
        "return_bypasses_allow_deny",
      ),
    )
  }
  assert_false(
    security_has(
      security_fixture("http { server { deny all; rewrite ^ /new last; } }"),
      "return_bypasses_allow_deny",
    ),
  )
}

///|
test "security local allow list overrides inherited deny and needs own deny fallback" {
  assert_true(
    security_has(
      security_fixture("http { deny all; server { allow 192.0.2.0/24; } }"),
      "allow_without_deny",
    ),
  )
  assert_false(
    security_has(
      security_fixture("http { server { allow 192.0.2.0/24; deny all; } }"),
      "allow_without_deny",
    ),
  )
  assert_false(
    security_has(
      security_fixture("http { deny all; server { location / {} } }"),
      "allow_without_deny",
    ),
  )
}

///|
test "security filesystem root is distinguished from a document directory" {
  for name in ["root", "alias"] {
    assert_true(
      security_has(
        security_fixture("http { server { location / { " + name + " /; } } }"),
        "filesystem_root_exposure",
      ),
    )
    assert_false(
      security_has(
        security_fixture(
          "http { server { location / { " + name + " /srv/www/; } } }",
        ),
        "filesystem_root_exposure",
      ),
    )
  }
}

///|
test "security Content-Type duplication and literal multiline headers" {
  assert_true(
    security_has(
      security_fixture("http { server { add_header content-TYPE text/html; } }"),
      "add_header_content_type",
    ),
  )
  assert_false(
    security_has(
      security_fixture(
        "http { server { default_type text/plain; add_header X-Type text/html; } }",
      ),
      "add_header_content_type",
    ),
  )
  assert_true(
    security_has(
      security_fixture(
        "http { server { add_header X-Value 'first\nsecond'; } }",
      ),
      "add_header_multiline",
    ),
  )
  assert_false(
    security_has(
      security_fixture("http { server { add_header X-Value single-line; } }"),
      "add_header_multiline",
    ),
  )
}

///|
test "security referer empty and malformed acceptance are policy warnings" {
  for value in ["none example.test", "blocked example.test"] {
    assert_true(
      security_has(
        security_fixture("http { server { valid_referers " + value + "; } }"),
        "valid_referers",
      ),
    )
  }
  assert_false(
    security_has(
      security_fixture(
        "http { server { valid_referers example.test *.example.test; } }",
      ),
      "valid_referers",
    ),
  )
}

///|
test "security logging off is a filename and version tokens are informational" {
  assert_true(
    security_has(
      security_fixture("http { error_log off; server {} }"),
      "error_log_off",
    ),
  )
  assert_false(
    security_has(
      security_fixture("http { error_log logs/error.log warn; server {} }"),
      "error_log_off",
    ),
  )
  for mode in ["on", "build"] {
    let result = security_fixture(
      "http { server_tokens " + mode + "; server {} }",
    )
    assert_true(security_has(result, "server_tokens"))
    assert_false(result.gate_failed(true))
  }
  assert_false(
    security_has(
      security_fixture("http { server_tokens off; server {} }"),
      "server_tokens",
    ),
  )
}

///|
test "security TLS and real-IP explicit insecure configuration pairs" {
  let bad = security_fixture(
    "http { server { ssl_protocols TLSv1 TLSv1.1 TLSv1.2; proxy_ssl_verify off; set_real_ip_from ::/0; } }",
  )
  for
    code in [
      "weak_tls_protocols", "proxy_tls_verification_disabled", "unrestricted_real_ip_trust",
    ] {
    assert_true(security_has(bad, code))
  }
  let safe = security_fixture(
    "http { server { ssl_protocols TLSv1.2 TLSv1.3; proxy_ssl_verify on; set_real_ip_from 192.0.2.1; } }",
  )
  assert_eq(safe.findings.length(), 0)
}

///|
test "security checks nested regex locations without requiring IPv4 request resolution" {
  let result = security_fixture(
    "http { server { listen [::]:443 ssl; server_name ~^app; auth_basic secret; location ~ \\.php$ { proxy_set_header Host $http_host; } } }",
  )
  assert_true(security_has(result, "host_spoofing"))
  assert_false(result.has_blocking())
}

///|
test "security skips map values upstream server parameters and stream namespaces" {
  let result = security_fixture(
    "stream { server { listen 9000; allow all; } } http { map $uri $mapped { root /; error_log off; server_tokens on; } upstream backend { server 127.0.0.1; } server { location / { proxy_pass http://backend/; } } }",
  )
  assert_eq(result.findings.length(), 0)
  assert_false(result.has_blocking())
}

///|
test "security partial dynamic modules retain genuine findings" {
  let result = security_fixture(
    "load_module modules/extra.so; http { server { location /static { alias /srv/static/; } } }",
  )
  assert_true(result.has_blocking())
  assert_true(security_has(result, "alias_traversal"))
  assert_true(
    security_fixture(
      "http { server { location / { content_by_lua_block { return 'ok'; } } } }",
    ).has_blocking(),
  )
  assert_true(
    security_fixture("http { server { custom_handler { root /; } } }").has_blocking(),
  )
  assert_false(
    security_has(
      security_fixture("http { server { custom_handler { root /; } } }"),
      "filesystem_root_exposure",
    ),
  )
}

///|
test "security includes keep actual line and full inclusion chain" {
  let result = scan_security_sources("nginx.conf", [
    { path: "nginx.conf", content: "http { server { include site.conf; } }", },
    {
      path: "site.conf",
      content: "location /static {\n include settings.conf;\n}",
    },
    { path: "settings.conf", content: "# declaration\nalias /srv/static/;", },
  ]).unwrap()
  let finding = result.findings[0]
  assert_eq(finding.code, "alias_traversal")
  assert_eq(finding.source.path, "settings.conf")
  assert_eq(finding.source.line, 2)
  assert_eq(finding.source.include_chain, ["nginx.conf", "site.conf"])
}

///|
test "security bounds inherited comparisons context count and include expansion" {
  let text = "http { add_header X-A 1; add_header X-B 2; server { add_header X-C 3; } }"
  for
    limits in [
      { ..Limits::default(), max_audit_pairs: 2, },
      { ..Limits::default(), max_contexts: 1, },
      { ..Limits::default(), max_directives: 2, },
    ] {
    match
      scan_security_sources(
        "nginx.conf",
        [{ path: "nginx.conf", content: text, }],
        limits~,
      ) {
      Ok(_) => fail("a resource limit should stop the scan")
      Err(error) => assert_eq(error.code, "limit_exceeded")
    }
  }
  match
    scan_security_sources("nginx.conf", [
      { path: "nginx.conf", content: "http { include nginx.conf; }", },
    ]) {
    Ok(_) => fail("cyclic include must fail")
    Err(error) => assert_eq(error.code, "include_cycle")
  }
}

///|
test "security report budget includes main findings after the HTTP block" {
  let text = "http { server { add_header Content-Type 'a\nb'; add_header Content-Type 'c\nd'; add_header Content-Type 'e\nf'; } } error_log off;"
  let result = scan_security_sources(
    "nginx.conf",
    [{ path: "nginx.conf", content: text, }],
    limits={ ..Limits::default(), max_directives: 6, },
  )
  match result {
    Ok(_) => fail("main-level finding must not bypass the report limit")
    Err(error) => assert_eq(error.code, "limit_exceeded")
  }
}
