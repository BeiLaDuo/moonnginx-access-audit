# MoonNginx Access Audit

Scan real Nginx configurations for security mistakes, then check unintended
IPv4 access changes between configuration snapshots. The analysis is MoonBit.

The `security` command checks expanded configuration trees for alias traversal,
lost response headers, unsafe proxy targets/Host forwarding, rewrite-phase
access bypass and other security mistakes. It scans nested and regex locations
without requiring the limited request router to resolve a URL. Findings include
source locations, evidence and remediation. Gixy-Next is the primary benchmark;
this is an independently implemented subset, not a complete port.

`nginx -t` checks configuration syntax and referenced files. A valid edit can
still expose an admin path: adding one child `deny` replaces the entire
inherited allow-list. This tool compares the resulting address decisions for
a specified host, listener and URI, reports newly allowed/denied intervals,
and fails CI when the change violates an explicit gate.

[Security rules and Gixy-Next comparison](docs/security-scanner.md) ·
[Regression workflow and supported profile](docs/request-regression.md) ·
[Revised proposal](docs/submission-application-one-page.md) ·
[Current acceptance review](docs/acceptance-review-2026-10-29.md)

[中文使用说明](docs/nginx-file-cli.md) · [SARIF integration](docs/sarif.md) ·
[Acceptance checklist](docs/acceptance-2026-10.md) · [Third-party sources](THIRD_PARTY.md)

Repository: https://github.com/BeiLaDuo/moonnginx-access-audit  
MoonBit module: `BeiLaDuo/moonnginx-access-audit`  
Participant and new Git author: 高本乾 · 3346147448@qq.com

## Run without building

Get the public source in CMD:

```bat
git clone https://github.com/BeiLaDuo/moonnginx-access-audit.git
cd moonnginx-access-audit
```

Install Node.js 22.13 or newer. From this repository, run these commands in CMD:

```bat
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/risky --strict --format json
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/repaired --strict --format json
```

The first example reports security mistakes and exits 1; the repaired example
exits 0. A clean result means the implemented static checks found no issue,
not that every Nginx module, request path or application is secure. Coverage
diagnostics and resource errors must not be ignored. Export findings for CI:

```bat
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/risky --format sarif > security.sarif
```

For a before/after access regression:

```bat
node tools\moonnginx-access-audit.mjs diff nginx.conf nginx.conf --root examples/regression/before --after-root examples/regression/after --host example.test --port 8080 --uri /admin/probe.txt --scope 127.0.0.0/8 --gate no-widening --format json
echo %ERRORLEVEL%
```

Expected: **1**, `newly_allowed_count: "16777214"`, with witnesses and both
rule origins. Both snapshots use normal Nginx syntax. To express a regression
requirement over a whole subnet:

```bat
node tools\moonnginx-access-audit.mjs expect nginx.conf 127.0.0.2/31 --expect deny --root examples/regression/after --host example.test --port 8080 --uri /admin/probe.txt --format json
```

Expected: **1** because `.3` is unrestricted even though `.2` is denied.
Change `after` to `before` for a passing expectation. No service is started
by these commands. Existing structural audit commands remain available:

```bat
node tools\moonnginx-access-audit.mjs contexts nginx.conf --root examples/nginx/files --format json
node tools\moonnginx-access-audit.mjs probe nginx.conf 127.0.0.1 --root examples/nginx/files --context "http[1]/server[1]/location[2]" --format json
node tools\moonnginx-access-audit.mjs audit examples/ci/safe.conf --format json
```

The launcher uses a local release build first, then a debug build, then the
shipped `dist/moonnginx-access-audit.js`. A source archive can run the shipped
CLI without a MoonBit installation. Build first when modifying MoonBit code.

To generate a report for code review:

```bat
node tools\moonnginx-access-audit.mjs audit examples/ci/risky.conf --format sarif > nginx.sarif
echo %ERRORLEVEL%
```

The risky example returns **1**, with a complete SARIF report. It does not
upload anything to GitHub. See [SARIF instructions](docs/sarif.md) for source
paths, selectors, severity mapping and unsuccessful analyses.

## What it models

- Ordered `allow`/`deny` rules in HTTP, server and nested location contexts.
- Whole-list inheritance: any local access rule replaces the parent's list.
- First-match decisions, unreachable rules, broad allows, duplicate rules,
  CIDR normalization and unrestricted fallbacks.
- Confined offline includes with source files, line numbers and include chains.
- Input, include expansion, audit-work and expanded-report resource budgets.
- Text, JSON and Markdown reports; SARIF 2.1.0 for the `audit` and `security` commands.
- Request selection by literal IPv4 listener, exact host/default server and
  flat exact/prefix location; context ordinals may differ between snapshots.
- Exact, scoped IPv4 decision differences and whole-subnet expectations, with
  replayable witnesses, source provenance and bounded comparison work.

The parser is the existing Apache-2.0 `LuoYunxin1/moonnginx@0.2.0` package.
The include semantics, access analysis, reports, file CLI and tests are this
project's extension. Core CIDR functionality comes from the original
MoonCIDR Audit base; see [provenance](docs/repository-migration.md).

## Commands and exit status

| Command | Purpose |
|---|---|
| `security CONFIG` | Scan configuration security patterns, with evidence and remediation |
| `contexts CONFIG` | List structural selectors and effective rule origins |
| `audit CONFIG` | Produce findings and apply a release gate |
| `probe CONFIG IP --context ID` | Explain one IPv4 address decision |
| `validate CONFIG` | Check the supported configuration and its dependencies |
| `request CONFIG IP --host HOST --uri PATH` | Resolve a request and explain its address decision |
| `diff BEFORE AFTER --host HOST --uri PATH` | Compare address decisions, not configuration text |
| `expect CONFIG CIDR --expect allow\|deny --host HOST --uri PATH` | Require the outcome for every address in a subnet |

Use `COMMAND --help` without preparing a configuration. `--strict` makes security/audit
warnings fail the gate. Put `--` before literal filenames beginning with `-`.

| Status | Meaning |
|---:|---|
| 0 | Completed within the declared scope |
| 1 | Audit, diff or subnet expectation gate rejected the result |
| 2 | Invalid argument, file, encoding, syntax or include input |
| 3 | Unsupported or incomplete analysis |
| 4 | Resource budget exhausted |

A probe reports `allowed_by_rule`, `denied_by_rule`, or
`no_address_restriction`. These describe the address module, **not full request
authorization**. A denied address still counts as a successfully completed probe.

`CONFIG` is relative to `--root` (default `.`). Relative includes are anchored
to the main configuration's directory and must stay within that directory or
its children. Filename `*`/`?` masks are supported; absolute includes, parent
traversal, linked input roots, symlinks and junctions are rejected.

## MoonBit library and development

The pure library opens no files, starts no processes and uses no network.
The `fileio` and `cmd/nginx-cli` packages provide the separate Node.js boundary.
Run the included MoonBit consumer example:

```bat
moon update
moon run examples/nginx --target wasm-gc
moon run examples/regression --target wasm-gc
```

The analysis API is in `nginx/pkg.generated.mbti`, including
`analyze_nginx_sources`, `Analysis::audits`, `AccessContext::probe` and
`render_sarif`, `scan_security_sources`, `render_security`, `Analysis::resolve`, `compare_access` and `expect_access`.
The original IPv4/CIDR APIs remain in the root package.
This module has not yet been published to Mooncakes; building this checkout
fetches the existing parser dependency, not a published copy of this module.

Build with **moonc 0.10.16 or newer** ([MoonBit installation](https://www.moonbitlang.com/download)),
Node.js 22.13+ and Python 3.10+. The locally verified compiler is
`moonc v0.10.16+b1a0e846e`; CI explicitly rejects compilers below 0.10.16.
To build and verify from the source checkout:

```bat
moon update
python tools\check_toolchain.py
moon info
moon fmt --check
moon check --target all --deny-warn
moon build
moon test --target js --deny-warn
moon test --target wasm --deny-warn
moon test --target wasm-gc --deny-warn
moon build cmd/nginx-cli --target js --release --deny-warn
python tools\verify_files.py
python tools\verify_distribution.py
python tools\verify_ci_examples.py
python tools\verify_sarif.py
python tools\verify_regression.py
python tools\verify_security.py
moon package --list
python tools\verify_repository.py --check-package
```

When changing the CLI, refresh `dist/moonnginx-access-audit.js` from the release
build before running distribution tests. Real Nginx comparison requires an
external Nginx binary; see the [Chinese guide](docs/nginx-file-cli.md).
CI adds Linux native build/tests. Windows native compilation needs its own C
toolchain and is not claimed by the local Windows verification.

## Boundaries and maintenance

The security scanner follows include-expanded directive contexts, including
nested/regex locations and configurations containing TLS or authentication.
This structural coverage does not imply full regex analysis, variable taint
analysis or complete behavior regression. The [rule matrix](docs/security-scanner.md)
documents implemented checks and unsupported Gixy-Next capabilities. Dynamic
variables/modules may require manual review; keep Nginx syntax and runtime tests.

The regression router supports plaintext IPv4, exact host names, default
servers and flat literal prefix/exact locations. It requires a normalized
ASCII URI without a query or escapes. It refuses ambiguous regex/nested
selection, unsupported listeners and selected auth/rewrite dependencies.
The structural `probe` command still requires a context selector.

Comparison is exact for the **address module at one selected endpoint/URI
and the declared IPv4 scope**, not all paths or final HTTP authorization.
It does not model IPv6, TLS/SNI, index/internal redirects, application logic
or arbitrary third-party modules. Keep `nginx -t`, resource/response tests and
deployment checks in your workflow. This library opens no sockets and changes
no server configuration. See the [precise profile](docs/request-regression.md).

[Development record](docs/development-record.md),
[validation evidence](docs/local-validation.md),
[contribution guide](CONTRIBUTING.md), and [security policy](SECURITY.md)
describe reproducible work and follow-up changes. Report ordinary defects
with a minimal sanitized configuration; follow the security policy for
sensitive cases.

## License

[Apache-2.0](LICENSE). Redistribute the project [NOTICE](NOTICE),
[third-party inventory](third_party/manifest.json), and retained upstream
license/NOTICE files together with source or compiled deliveries.
Competition submission, Mooncakes publication and GitHub releases are separate
actions; this repository's development records do not imply they have occurred.
