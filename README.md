# MoonCIDR Audit

## October 2026 development: real Nginx configuration audit

The local 0.2.0 delivery adds a MoonBit HTTP IPv4 access-rule adapter and a
real-file CLI. It understands configuration contexts, inherited rule lists,
offline includes, source locations, explicit resource budgets and three-way
address outcomes. It reuses `LuoYunxin1/moonnginx@0.2.0` as its parser.

Read the [Chinese file CLI guide](docs/nginx-file-cli.md) or run:

```powershell
moon build cmd/nginx-cli --target js --release --deny-warn
node tools/cidr-audit.mjs contexts nginx.conf --root examples/nginx/files --format json
moon run examples/nginx --target wasm-gc
```

The delivery archive includes a precompiled `dist/cidr-audit.js` for Node.js
22.13 or newer. The pure analysis library has no filesystem or network side
effects. A file CLI probe does not claim complete Nginx authorization, and
unsupported access-relevant semantics block successful analysis.

See [scope and baseline](docs/october-scope.md), [third-party notices](THIRD_PARTY.md),
and [validation](docs/local-validation.md). Version 0.2.0 is a local delivery;
the previously published Mooncakes version is 0.1.2. No registration, remote
push, release or Mooncakes publication was performed for this delivery.

MoonCIDR Audit is a pure MoonBit library for auditing ordered IPv4/CIDR allow
and deny rules. It helps gateway, reverse proxy, cloud security group, and
operations configuration authors find rule shadowing, dangerous wide ranges,
non-canonical CIDR input, duplicate rules, and risky special address spaces.

The project is intentionally small in scope: it does not try to be a firewall,
packet filter, or network daemon. It focuses on the reusable analysis layer that
other MoonBit tools can build on.

## Features

- Parse IPv4 addresses and CIDR blocks without external dependencies.
- Normalize CIDR blocks such as `192.168.1.99/24` to `192.168.1.0/24`.
- Evaluate ordered `allow` and `deny` rules.
- Detect duplicate rules, shadowed rules, conflicting overlaps, redundant
  overlaps, global deny rules, and very wide allow rules.
- Classify private, loopback, link-local, multicast, unspecified, and broadcast
  address ranges.
- Provide strict, gateway, and quiet audit policies.
- Produce plain text, Markdown table, and JSON-like reports.
- Explain why a probe IP matches a rule.
- Compare two rule sets and summarize risky changes.
- Produce remediation hints for common findings.
- Merge overlapping or adjacent address ranges and find coverage holes.
- Deduplicate contained CIDRs and recursively aggregate sibling networks.
- Import native rules, Nginx `allow`/`deny` directives, and CSV rule lists.
- Apply configurable CI deployment gates to audit reports.

## Quick Start

Run the main demo:

```powershell
moon run ./cmd/main
```

Run example scenarios:

```powershell
moon run ./examples/gateway
moon run ./examples/cloud
```

The main demo now walks through auditing, probe decisions, detailed
explanations, a release gate, coverage holes, CIDR aggregation, and Nginx
configuration import.

Run checks:

```powershell
moon check
moon build --target all
moon test --target all --deny-warn
```

## Basic Usage

```moonbit
let ruleset = @cidr.parse_rules([
  "allow 10.0.0.0/8 internal network",
  "deny 10.1.2.0/24 blocked subnet",
  "allow 192.168.1.99/24 host bits will be normalized",
  "deny 0.0.0.0/0 default deny",
])

let report = ruleset.audit()
println(report.text_report())

let ip = @cidr.IPv4::parse("10.1.2.9").unwrap()
println(ruleset.decide(ip).summary())
```

## Example Findings

MoonCIDR Audit can report findings like:

```text
[critical] too_wide_allow R1: allow rule covers a very wide network: 10.0.0.0/8
[critical] shadowed_rule R2 related=R1: rule is already covered by earlier allow rule R1
[info] non_canonical_cidr R3: input 192.168.1.99/24 was normalized to 192.168.1.0/24
[critical] global_deny R4: deny rule blocks the entire IPv4 space
```

## API Overview

Important types:

- `IPv4`: parsed IPv4 address stored as `UInt`.
- `CidrBlock`: normalized IPv4 CIDR block.
- `RuleAction`: `Allow` or `Deny`.
- `Rule`: ordered rule with id, action, block, source block, and note.
- `RuleSet`: parsed rule collection with decision and audit helpers.
- `AuditPolicy`: strict, gateway, and quiet policy presets.
- `AuditReport`: findings, severity counts, risk score, and report rendering.
- `DiffReport`: change report between two rule sets.
- `FixHint`: remediation suggestion generated from an audit finding.
- `AddressRange`: closed IPv4 interval used by coverage analysis.
- `AggregationReport`: CIDR deduplication and sibling merge result.
- `ImportReport`: structured native, Nginx, or CSV import result.
- `GatePolicy` and `GateResult`: configurable CI release decision.

Common functions:

- `IPv4::parse`
- `CidrBlock::parse`
- `Rule::parse`
- `parse_rules`
- `RuleSet::audit`
- `RuleSet::audit_with_policy`
- `RuleSet::decide`
- `RuleSet::explain_ip`
- `RuleSet::diff_from`
- `RuleSet::coverage_ranges`
- `RuleSet::coverage_report`
- `aggregate_cidr_strings`
- `import_nginx_access`
- `import_csv_rules`
- `AuditReport::evaluate_gate`
- `AuditReport::text_report`
- `AuditReport::json_report`
- `AuditReport::hint_report`

## Project Boundary

MoonCIDR Audit currently focuses on IPv4 and ordered CIDR rules. It does not
implement IPv6, kernel integration, packet capture, live network access, or
cloud-provider credentials. Its importers are intentionally offline and
limited to reviewable text formats. Provider-specific adapters can be added
later without changing the core audit model.

## Hackathon Value

MoonBit already has examples and packages around networking, URLs, sockets, and
general parsing. MoonCIDR Audit targets a different gap: auditing network rule
sets before they are deployed. This is useful for configuration review, CI
checks, teaching network rule behavior, and building safer MoonBit developer
tools.

## Submission Materials

- One-page application: `docs/submission-application-one-page.md`
- Full application notes: `docs/submission-application.md`
- Novelty review: `docs/novelty-review.md`
- Submission checklist: `docs/submission-checklist.md`

## License

Apache-2.0.
