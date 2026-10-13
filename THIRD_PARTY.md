# Third-party material

## Runtime dependencies

- `LuoYunxin1/moonnginx@0.2.0`, Apache-2.0, https://github.com/LuoYunxin1/moonnginx. Used as the sole nginx.conf lexer and directive-tree parser. This project adds include-bundle loading, provenance, HTTP access inheritance, IPv4 address-rule audit, bounded file IO and CLI behavior. Its parser is not presented as our contribution. The upstream license and NOTICE are retained in `third_party/moonnginx/`.
- MoonBit core library, Apache-2.0, https://github.com/moonbitlang/core. Standard library code may be linked into the compiled JavaScript deliverable. The applicable license is retained in `third_party/moonbit-core/`; original source copyright belongs to International Digital Economy Academy.
- Node.js 22.13 or newer, https://nodejs.org/, provides filesystem and process primitives for the file CLI. A Node executable is not redistributed by this source package. The analysis and include traversal are implemented in MoonBit, with a small JavaScript filesystem boundary.

## Behavioral references and test tools

- Nginx HTTP access module documentation and implementation: https://nginx.org/en/docs/http/ngx_http_access_module.html and https://github.com/nginx/nginx. Behavior was independently implemented; Nginx source code and its fixtures were not copied into the analysis library.
- Official Nginx Windows 1.30.5 was downloaded from https://nginx.org/download/nginx-1.30.5.zip for the local interoperability test. The executable is not redistributed. Test configurations and static content in `tests/integration-nginx/` were written for this project.
- Python standard library is used by the test and measurement tools. No third-party Python dependency is needed.

The project keeps Apache-2.0. Preserve third-party notices when distributing compiled outputs. Dependencies, generated outputs and test fixtures are not counted as new MoonBit implementation work.
