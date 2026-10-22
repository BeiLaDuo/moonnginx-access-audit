# October 2026 project scope

Correct repository: originally BeiLaDuo/beiladuo, repository ID 1416877460.
The user explicitly requested renaming this repository to moonnginx-access-audit.
Keep its two existing commits through `1fc7d9c7e57f891838b560cb25248f1693808804`.

The upload already contains the first Nginx development delivery, derived from
MoonCIDR Audit v0.1.2 in a separate repository. Later changes add actual CLI
behavior, stronger file boundaries, reproducible CI and the renamed module.
Neither the CIDR base nor the Apache-2.0 moonnginx parser is presented as new work.

The October 22 revision adds a conservative HTTP IPv4 request router, exact
scoped before/after differences and whole-subnet expectations. Listener/Host/
flat location identity is resolved independently in both snapshots; rule
provenance and inheritance remain visible. Full routing, IPv6 and combined
authorization remain outside the supported scope; see request-regression.md.

New author/committer: 高本乾 <3346147448@qq.com>. Original commit metadata
is preserved. The user authorized GitHub synchronization and renaming, with
at least fourteen meaningful commits in the repository and 4,000 effective
MoonBit implementation lines. No competition registration or publication
was requested. The separate old MoonCIDR repository was restored.

October rules were checked on 2026-10-13 at
https://github.com/moonbitlang/Hackathon2026/blob/main/src/App.tsx.
The displayed deadline is 2026-10-31; existing projects need substantive new work.
