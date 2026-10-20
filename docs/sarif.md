# SARIF reports for Nginx access-rule review

The MoonBit analysis package exports `render_sarif(analysis, audits, selector?)`.
The file CLI accepts `audit CONFIG --format sarif`, producing SARIF 2.1.0.
The input semantics and gate exit codes are identical to JSON audit output.

## Run from CMD

From the repository root with Node.js 22.13 or newer:

```bat
node tools\moonnginx-access-audit.mjs audit examples/ci/risky.conf --format sarif > nginx.sarif
echo %ERRORLEVEL%
```

The risky example returns 1 and still produces a complete report. Keep `--root`
at its default `.` when paths should resolve relative to the GitHub checkout.
If you use another input root, the reported paths are relative to that root;
configure your consuming system accordingly. File names are UTF-8 percent
encoded, including spaces, `#`, `%` and non-ASCII characters, while `/` remains
a path separator.

For one structural context:

```bat
node tools\moonnginx-access-audit.mjs audit examples/nginx/files/nginx.conf --context "http[1]/server[1]" --format sarif > nginx.sarif
```

`contexts`, `probe` and `validate` reject SARIF rather than silently returning a
different format. Parsing, file and resource failures return their existing
nonzero exit codes, with no success output. A parsed but unsupported analysis
returns 3 and emits `executionSuccessful: false`, explanatory tool notifications
and no findings. It must not be treated as a clean scan.

## Result contract

- `ruleId` is the stable audit code; descriptors are stable across input files.
- Critical, warning and info findings map to `error`, `warning` and `note`.
- Each result points to the original rule's file and line, including rules from
  included files. `properties` retains context, configuration rule ID, related
  rule IDs and the include chain.
- `runs[0].properties` states the IPv4 access-module scope, completeness and
  selected context. Results do not prove full Nginx request authorization.
- Fingerprints are not supplied. GitHub's `upload-sarif` action can calculate
  them from the checkout; direct API upload may produce duplicate alerts.
- Standard SARIF export does not itself upload data or enable code scanning.

| Rule ID | Meaning |
|---|---|
| `duplicate_rule` | Repeated operand and action |
| `unreachable_rule` | Earlier first-match rules cover the entire range |
| `ordered_exception` | Partial overlap whose meaning depends on order |
| `non_canonical_cidr` | Host bits were normalized |
| `unrestricted_allow` | All remaining IPv4 addresses are allowed |
| `wide_allow` | A broad allow range needs review |
| `terminal_default` | A terminal deny rule blocks remaining addresses |
| `no_access_rules` | No effective address restriction in this context |
| `unrestricted_fallback` | Unmatched addresses have no address restriction |

An info finding is explanatory, not necessarily a defect. Use selectors to keep
reviews focused; inherited rules can legitimately appear in several contexts.

## Verify

```bat
moon build cmd/nginx-cli --target js --release --deny-warn
python tools\verify_sarif.py
```

The integration tool compares every finding, severity, source location and
provenance against the existing JSON report. It runs both a fresh build and the
shipped CLI, including include paths with Unicode and reserved URI characters,
strict gates, unsupported semantics, invalid commands and resource failures.

References: [GitHub SARIF support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support),
[SARIF 2.1.0 schema](https://json.schemastore.org/sarif-2.1.0.json).
