# Changelog

## 0.3.0 — Request access regression (2026-10-22, unpublished)

- Compare real before/after Nginx files at a host, listener and URI, independent
  of context ordinals; resolve exact names, defaults and flat exact/prefix
  locations, refusing ambiguous routing.
- Compute exact scoped IPv4 differences using rule boundary partitions,
  64-bit counts, source-aware witnesses and bounded work/output.
- Add request/diff/expect commands, directional gates and whole-subnet checks.
- Detect request-changing directives inside unsupported blocks and dynamically
  loaded modules instead of silently assuming their semantics.
- Add an independent exhaustive oracle, a portable library consumer, real
  snapshot CLI tests and a two-version Nginx HTTP comparison.
- Reframe the proposal around legal-but-unintended access changes and record
  the precise model and remaining publication requirement.

## Unreleased — October 2026 continuation

- Add a MoonBit SARIF 2.1.0 exporter for existing Nginx audit findings, with
  source files/lines, include chains, stable rule descriptors and UTF-8 URIs.
- Preserve gate exit codes and mark unsupported analyses as unsuccessful;
  disallow SARIF for commands that do not produce audit findings.
- Add real-file JSON/SARIF equivalence and fresh-build/distribution checks.
- Retain the complete core NOTICE and reviewed dependency legal materials;
  verify their inventory, hashes and inclusion in actual source packages.
- Refresh interfaces with MoonBit 0.10.16 and document CMD operation, scope,
  contribution requirements and the official October acceptance criteria.
- Correct the real-Nginx verification command's JSON quoting for Windows CMD;
  keep unverified Mooncakes publication and charter dates explicit in the checklist.
- Record the October 21 skill-based acceptance review; correct the old base
  project's name and distinguish the optional PDF helper's Pillow/font dependencies.

## 0.2.0 — October 2026 development

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
- Support literal filenames after `--`, format-aware argument errors and
  validation of probe addresses before any filesystem access.
- Reject symbolic links and junctions used as the input root itself.
- Compare fresh builds with the shipped CLI over actual file workflows in CI.
- Provide safe, warning, risky and unsupported policies and a manual audit
  workflow with persisted JSON reports.
- Keep competition registration and Mooncakes publication as separate actions.

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
