# Third-party material

## Runtime dependencies

- `LuoYunxin1/moonnginx@0.2.0`, Apache-2.0, https://github.com/LuoYunxin1/moonnginx. Used as the sole nginx.conf lexer and directive-tree parser. This project adds include-bundle loading, provenance, HTTP access inheritance, IPv4 address-rule audit, bounded file IO and CLI behavior. Its parser is not presented as our contribution. The upstream license and NOTICE are retained in `third_party/moonnginx/`.
- MoonBit core library shipped with `moonc v0.10.16+b1a0e846e`, https://github.com/moonbitlang/core. Standard library code may be linked into the compiled JavaScript deliverable. Its Apache-2.0 license and full upstream NOTICE are retained in `third_party/moonbit-core/`, including upstream attribution and additional notices for adapted components. Do not discard NOTICE when redistributing the compiled CLI.
- Node.js 22.13 or newer, https://nodejs.org/, provides filesystem and process primitives for the file CLI. A Node executable is not redistributed by this source package. The analysis and include traversal are implemented in MoonBit, with a small JavaScript filesystem boundary.

## Behavioral references and test tools

- Nginx HTTP access module documentation and implementation: https://nginx.org/en/docs/http/ngx_http_access_module.html and https://github.com/nginx/nginx. Behavior was independently implemented; Nginx source code and its fixtures were not copied into the analysis library.
- Official Nginx Windows 1.30.5 was used for the first delivery; 1.30.6 from https://nginx.org/download/nginx-1.30.6.zip was used for the 2026-10-20 local interoperability test. The executable is not redistributed. Test configurations and static content in `tests/integration-nginx/` were written for this project.
- Verification and measurement scripts use Python's standard library. The optional `tools/render_submission_pdf.py` helper uses Pillow (`PIL`) and locally installed Noto Sans SC fonts; these are not redistributed. That helper is separate from the Markdown application, CLI, build and verification workflows.

The project keeps Apache-2.0. Preserve third-party notices when distributing compiled outputs. Dependencies, generated outputs and test fixtures are not counted as new MoonBit implementation work.

## Original project and current changes

The CIDR implementation originated in MoonCIDR Audit v0.1.2, Apache-2.0:
https://github.com/BeiLaDuo/mooncidr-audit/tree/414e476efa463737164e5d5e1b2345bccd01148f.
Its authorship and history are preserved; the current project does not claim
that base as newly implemented. The uploaded initial source, subsequent Nginx
adapter, include loader, CLI and SARIF exporter are distinguished in
`docs/development-record.md` and the Git history.

`third_party/manifest.json` inventories the two linked source components and
records hashes of the retained legal texts, normalized to LF for portability.
`python tools/verify_repository.py` checks these files, declared parser version,
and local README links. It is an inventory check, not an external legal audit.
When rebuilding with a different standard library, review and refresh its
license/NOTICE and manifest rather than silently redistributing stale texts.

SARIF behavior follows the public GitHub documentation and SARIF 2.1.0 format.
No CodeQL implementation or SARIF schema is redistributed. The independent
local format validator is a development tool outside the source package;
project verification scripts otherwise use Python's standard library only. The optional PDF helper described above is not part of those verification scripts.
