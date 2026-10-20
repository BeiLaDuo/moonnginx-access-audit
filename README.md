# MoonNginx Access Audit

Offline Nginx HTTP IPv4 access-rule analysis, implemented primarily in MoonBit.
Use it to review configuration changes before deployment, explain a rule's
origin, and gate a CI pipeline on unsafe or unsupported input.

[中文使用说明](docs/nginx-file-cli.md) · [SARIF integration](docs/sarif.md) ·
[Acceptance checklist](docs/acceptance-2026-10.md) · [Third-party sources](THIRD_PARTY.md)

Repository: https://github.com/BeiLaDuo/moonnginx-access-audit  
MoonBit module: `BeiLaDuo/moonnginx-access-audit`  
Participant and new Git author: 高本乾 · 3346147448@qq.com

## Run without building

Install Node.js 22.13 or newer. From this repository, run these commands in CMD:

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
- Text, JSON and Markdown reports; SARIF 2.1.0 for the `audit` command.

The parser is the existing Apache-2.0 `LuoYunxin1/moonnginx@0.2.0` package.
The include semantics, access analysis, reports, file CLI and tests are this
project's extension. Core CIDR functionality comes from the original
MoonCIDR Audit base; see [provenance](docs/repository-migration.md).

## Commands and exit status

| Command | Purpose |
|---|---|
| `contexts CONFIG` | List structural selectors and effective rule origins |
| `audit CONFIG` | Produce findings and apply a release gate |
| `probe CONFIG IP --context ID` | Explain one IPv4 address decision |
| `validate CONFIG` | Check the supported configuration and its dependencies |

Use `COMMAND --help` without preparing a configuration. `--strict` makes audit
warnings fail the gate. Put `--` before literal filenames beginning with `-`.

| Status | Meaning |
|---:|---|
| 0 | Completed within the declared scope |
| 1 | Audit gate rejected critical findings, or warnings in strict mode |
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
```

The analysis API is in `nginx/pkg.generated.mbti`, including
`analyze_nginx_sources`, `Analysis::audits`, `AccessContext::probe` and
`render_sarif`. The original IPv4/CIDR APIs remain in the root package.
This module has not yet been published to Mooncakes; building this checkout
fetches the existing parser dependency, not a published copy of this module.

Build and verify with MoonBit and Python 3.10+:

```bat
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
moon package --list
python tools\verify_repository.py --check-package
```

When changing the CLI, refresh `dist/moonnginx-access-audit.js` from the release
build before running distribution tests. Real Nginx comparison requires an
external Nginx binary; see the [Chinese guide](docs/nginx-file-cli.md).
CI adds Linux native build/tests. Windows native compilation needs its own C
toolchain and is not claimed by the local Windows verification.

## Boundaries and maintenance

This is a focused offline audit tool. It does not infer URL-to-location routing,
model IPv6 or combined authentication, configure a server, enforce traffic,
or prove that an entire Nginx deployment is secure. Unsupported access-relevant
semantics block successful analysis. Keep these boundaries when interpreting
reports or extending the API.

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
