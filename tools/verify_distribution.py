"""Compare the shipped CLI with a fresh build using real file workflows."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import tempfile

import verify_files as workflows

ROOT = Path(__file__).resolve().parent.parent
BUILD = Path("_build/js/release/build/cmd/nginx-cli/nginx-cli.js")
BUNDLE = Path("dist/cidr-audit.js")


def comparable(case: dict, scratch: Path) -> dict:
    # Commands necessarily name different executables. Compare the externally
    # observable contract: exit status, report channels and complete reports.
    return {
        "name": case["name"],
        "status": case["status"],
        "invocations": [
            {key: value.replace(str(scratch), "{fixtures}") if isinstance(value, str) else value
             for key, value in invocation.items() if key != "command"}
            for invocation in case["invocations"]
        ],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/distribution.json"))
    options = parser.parse_args()
    for executable in (BUILD, BUNDLE):
        if not (ROOT / executable).is_file():
            parser.error(f"missing CLI executable: {executable}; build and refresh dist first")
    parent = ROOT / "_build" / "ci"
    parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="distribution-", dir=parent) as temporary:
        scratch = Path(temporary).resolve()
        workflows.require(scratch.is_relative_to(parent.resolve()), "cleanup must stay in the test workspace")
        suites = []
        for label, executable in [("fresh_build", BUILD), ("shipped_bundle", BUNDLE)]:
            directory = scratch / label
            directory.mkdir()
            runner = workflows.Runner(["node", executable.as_posix()], directory)
            workflows.verify(runner)
            suites.append([comparable(case, directory) for case in runner.cases])
        failures = [case["name"] for suite in suites for case in suite if case["status"] == "failed"]
        differences = [left["name"] for left, right in zip(*suites) if left != right]
        if len(suites[0]) != len(suites[1]):
            differences.append("suite_length")
        report = {
            "schema_version": 1,
            "suite": "build-and-distribution-parity",
            "status": "failed" if failures or differences else "passed",
            "scenarios_per_executable": len(suites[0]),
            "failed_scenarios": sorted(set(failures)),
            "different_scenarios": differences,
            "fresh_build": suites[0],
            "shipped_bundle": suites[1],
        }
    destination = options.output if options.output.is_absolute() else ROOT / options.output
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Distribution parity: {report['status']}; {len(suites[0])} real scenarios per executable")
    return 1 if failures or differences else 0


if __name__ == "__main__":
    raise SystemExit(main())
