"""Run the real file CLI and compare SARIF findings with existing JSON reports."""
from __future__ import annotations

import argparse
from collections import Counter
import json
from pathlib import Path
import subprocess
import tempfile
from urllib.parse import unquote, urlsplit

from verify_files import hidden_process_options

ROOT = Path(__file__).resolve().parents[1]


def run(executable: list[str], arguments: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(executable + arguments, cwd=ROOT, capture_output=True,
                          encoding="utf-8", timeout=30, **hidden_process_options())


def validate(log: dict, complete: bool) -> tuple[dict, list[tuple]]:
    assert log["version"] == "2.1.0"
    assert len(log["runs"]) == 1
    report = log["runs"][0]
    assert report["tool"]["driver"]["name"] == "MoonNginx Access Audit"
    assert report["properties"]["scope"] == "nginx_http_access_ipv4"
    assert "final request authorization" in report["properties"]["scopeNote"]
    assert report["properties"]["complete"] is complete
    assert report["invocations"][0]["executionSuccessful"] is complete
    rules = [rule["id"] for rule in report["tool"]["driver"]["rules"]]
    assert len(rules) == len(set(rules))
    rows = []
    for result in report["results"]:
        assert result["ruleId"] in rules
        assert result["level"] in {"error", "warning", "note"}
        assert result["message"]["text"]
        location = result["locations"][0]["physicalLocation"]
        uri = location["artifactLocation"]["uri"]
        assert not urlsplit(uri).scheme and not uri.startswith("/")
        assert " " not in uri and "#" not in uri and "\\" not in uri
        assert location["region"]["startLine"] >= 1
        properties = result["properties"]
        rows.append((result["ruleId"], result["level"], result["message"]["text"],
                     unquote(uri), location["region"]["startLine"], properties["context"],
                     properties["ruleIdInConfiguration"], tuple(properties["relatedRuleIds"]),
                     tuple(properties["includeChain"])))
    if not complete:
        assert not rows
        notifications = report["invocations"][0]["toolExecutionNotifications"]
        assert notifications and any(n["level"] == "error" for n in notifications)
    return report, rows


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/sarif.json"))
    options = parser.parse_args()
    scratch_parent = ROOT / "_build/ci"
    scratch_parent.mkdir(parents=True, exist_ok=True)
    executables = [["node", "tools/moonnginx-access-audit.mjs"],
                   ["node", "dist/moonnginx-access-audit.js"]]
    cases = []
    catalog = None
    with tempfile.TemporaryDirectory(prefix="sarif-", dir=scratch_parent) as temporary:
        root = Path(temporary)
        fixtures = {
            "safe.conf": "http { server { allow 127.0.0.1; deny all; } }\n",
            "risky.conf": "http { server { allow all; deny all; } }\n",
            "warning.conf": "http { server { allow 127.0.0.1; allow 127.0.0.1; deny all; } }\n",
            "unsupported.conf": "http { server { allow ::1; } }\n",
            "nginx.conf": 'http { server { include "配置/allow #%.conf"; } }\n',
            "配置/allow #%.conf": "# provenance must point to this file\nallow all;\ndeny all;\n",
        }
        for name, text in fixtures.items():
            path = root / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding="utf-8")
        scenarios = [("safe.conf", [], 0), ("risky.conf", [], 1),
                     ("warning.conf", [], 0), ("warning.conf", ["--strict"], 1),
                     ("unsupported.conf", [], 3), ("nginx.conf", [], 1),
                     ("nginx.conf", ["--context", "http[1]/server[1]"], 1)]
        for name, extra, expected in scenarios:
            arguments = ["audit", name, "--root", str(root), *extra]
            json_result = run(executables[0], arguments + ["--format", "json"])
            assert json_result.returncode == expected and not json_result.stderr
            baseline = json.loads(json_result.stdout)
            outputs = []
            for executable in executables:
                result = run(executable, arguments + ["--format", "sarif"])
                assert result.returncode == expected and not result.stderr
                log = json.loads(result.stdout)
                report, rows = validate(log, expected != 3)
                current_catalog = report["tool"]["driver"]["rules"]
                if catalog is None:
                    catalog = current_catalog
                assert current_catalog == catalog, "rule descriptors must be stable across inputs"
                if expected != 3:
                    mapping = {"critical": "error", "warning": "warning", "info": "note"}
                    expected_rows = [(f["code"], mapping[f["severity"]], f["message"],
                                      f["source"]["file"], f["source"]["line"], f["context"],
                                      f["rule_id"], tuple(f["related_rule_ids"]),
                                      tuple(f["source"]["include_chain"]))
                                     for audit in baseline["audits"] for f in audit["findings"]]
                    assert Counter(rows) == Counter(expected_rows), "SARIF must preserve JSON findings exactly"
                outputs.append(log)
            assert outputs[0] == outputs[1], "shipped SARIF must match the fresh build"
            cases.append({"entry": name, "options": extra, "exit_code": expected,
                          "status": "passed", "sarif": outputs[0]})
        # Invalid inputs must fail without emitting a misleading success report.
        for arguments, expected in [
            (["validate", "safe.conf", "--format", "sarif"], 2),
            (["audit", "missing.conf", "--root", str(root), "--format", "sarif"], 2),
            (["audit", "risky.conf", "--root", str(root), "--format", "sarif", "--limits", "max_directives=1"], 4),
        ]:
            for executable in executables:
                result = run(executable, arguments)
                assert result.returncode == expected and not result.stdout and result.stderr
            cases.append({"arguments": [a.replace(str(root), "{fixtures}") for a in arguments],
                          "exit_code": expected, "status": "passed"})
    destination = options.output if options.output.is_absolute() else ROOT / options.output
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps({"suite": "sarif-real-file-parity", "passed": len(cases),
                                      "failed": 0, "cases": cases}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"SARIF integration: {len(cases)} cases passed on both fresh and shipped CLI")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
