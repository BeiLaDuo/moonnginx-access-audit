# Security findings with observable consequences

These configurations and data are authored for this project. No Gixy-Next
fixtures or implementation are copied. The `risky` directory intentionally
contains unsafe examples and is for local verification only.

Run from the repository root (CMD):

```cmd
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/risky --format json --strict
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/repaired --format json --strict
python tools\verify_security.py --nginx C:\path\to\nginx.exe --output _build/ci/security.json
```

The first command exits 1 and reports alias traversal, inherited header loss,
and an early `return` bypassing `deny`. The repaired configuration exits 0.
Reports point to `checks.conf` and retain the include provenance.

The verifier copies both configurations into isolated temporary prefixes,
chooses an unused loopback port, creates harmless public/private text fixtures,
and starts only its own Nginx process. Both configurations must pass `nginx -t`.
It then observes the difference independently of the scanner:

| Request | Risky configuration | Repaired configuration |
| --- | --- | --- |
| `/assets../private/secret.txt` | Reads fixture outside alias directory (200) | No matching alias (404) |
| `/headers/probe.txt` | `X-Frame-Options` absent | `X-Frame-Options: DENY` present |
| `/blocked/probe.txt` | `return` serves fixture despite `deny all` (200) | Access module rejects request (403) |
| `/assets/public.txt` | Serves public fixture (200) | Still serves public fixture (200) |

No real secrets are read. Cleanup checks the owned PID before sending a quit
signal; no installed service is reconfigured or stopped. Windows uses the
hidden-process options shared with the existing Nginx verifier.

`cases.json` adds independent risk/repair inputs for request-controlled upstream
authority, unsafe Host forwarding, allow-list fallthrough, filesystem root,
header formatting, Referer bypass, log filenames and version disclosure. It
also exercises nested/regex/TLS configuration *scanning* without requiring the
limited request router. Those catalog inputs are static scanner tests, not all
valid standalone running servers; only the paired HTTP fixtures are asserted
to pass `nginx -t`. Finding-free output is not a proof of complete security.

Behavior references: [alias mapping](https://nginx.org/en/docs/http/ngx_http_core_module.html#alias),
[header inheritance](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header),
[rewrite phase](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html),
[ordered access rules](https://nginx.org/en/docs/http/ngx_http_access_module.html).
