# Changelog

## 0.2.0 — local October 2026 delivery

- Reuse moonnginx 0.2.0 for bounded parsing of actual configuration sources.
- Add HTTP structural contexts, first-match IPv4 access evaluation and correct
  inheritance, with an explicit no-address-restriction outcome.
- Expand confined offline includes with source provenance, deterministic masks,
  cycle detection and input, expansion, audit and report budgets.
- Add Nginx-specific unreachable-rule and fallback findings without classifying
  a conventional allow-list's terminal deny-all as a global block.
- Add a real-file Node.js CLI, structured JSON/Markdown output and exit codes.
- Verify actual Nginx requests, actual filesystem workflows and portable library
  tests. Windows native compilation is not marked as tested.
- Preserve the 0.1.2 APIs, adapt public trait exports to MoonBit 0.10.15, and
  update CI, consumer examples, licenses and current submission materials.
- Keep the release local: no registration, remote push or Mooncakes publication.

## 0.1.2

- Verified 118 tests on the wasm, wasm-gc, JavaScript, and native targets with
  MoonBit 0.1.20260819.
- Regenerated the public package interface so `IPv4::is_public()` is included.
- Updated CI and final-submission materials to match the verified release.

## 0.1.0

- Added IPv4 parser and dotted decimal rendering.
- Added CIDR parser, normalization, range containment, and overlap checks.
- Added ordered allow/deny rule parsing.
- Added rule decision and matching explanation helpers.
- Added audit findings for duplicates, shadowing, conflicts, wide allows,
  global deny rules, special address spaces, and non-canonical CIDR input.
- Added strict, gateway, and quiet audit policies.
- Added text, table, and JSON-like report rendering.
- Added address-range union and target coverage-hole analysis.
- Added CIDR deduplication, containment reduction, and recursive sibling
  aggregation.
- Added offline import reports for native rules, Nginx access directives, and
  CSV rule lists.
- Added configurable development, review, and release gates for CI workflows.
- Added main demo and two example scenarios.
- Added CI workflow and test coverage.
