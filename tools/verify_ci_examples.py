"""Run the manual CI demonstration policies and verify their actual gate results."""
import argparse
import json
from pathlib import Path
import subprocess

from verify_files import hidden_process_options

ROOT = Path(__file__).resolve().parent.parent


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/ci-examples.json"))
    options = parser.parse_args()
    scenarios = [
        ("safe", False, 0, None),
        ("warning", False, 0, "duplicate_rule"),
        ("warning", True, 1, "duplicate_rule"),
        ("risky", False, 1, "unrestricted_allow"),
        ("unsupported", False, 3, "unsupported_address_family"),
    ]
    cases = []
    for policy, strict, expected, expected_code in scenarios:
        command = ["node", "tools/cidr-audit.mjs", "audit", policy + ".conf",
                   "--root", "examples/ci", "--format", "json"] + (["--strict"] if strict else [])
        completed = subprocess.run(command, cwd=ROOT, capture_output=True, encoding="utf-8",
                                   timeout=30, **hidden_process_options())
        try:
            report = json.loads(completed.stdout)
            codes = {finding["code"] for audit in report.get("audits", []) for finding in audit["findings"]}
            codes.update(item["code"] for context in report.get("contexts", []) for item in context["diagnostics"])
            passed = (completed.returncode == expected and not completed.stderr
                      and report["complete"] is (expected != 3)
                      and (expected_code is None or expected_code in codes))
        except (ValueError, KeyError):
            passed = False
        cases.append({"policy": policy, "strict": strict, "expected_exit_code": expected,
                      "exit_code": completed.returncode, "passed": passed,
                      "stdout": completed.stdout, "stderr": completed.stderr})
    summary = {"schema_version": 1, "suite": "ci-audit-policy-examples", "cases": cases,
               "passed": sum(case["passed"] for case in cases), "total": len(cases)}
    destination = options.output if options.output.is_absolute() else ROOT / options.output
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"CI audit examples: {summary['passed']}/{len(cases)} passed")
    return 0 if summary["passed"] == len(cases) else 1


if __name__ == "__main__":
    raise SystemExit(main())
