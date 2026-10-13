#!/usr/bin/env python3
"""Measure project-owned MoonBit lines, keeping tests and examples separate."""
from __future__ import annotations

import argparse
import json
from pathlib import Path, PurePosixPath
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
IGNORED = {".git", ".moon", ".mooncakes", "_build", "target", "dist", "third_party"}
TEST_NAME = re.compile(r"_(?:wb|bb)?test\.mbt$")
COMPATIBILITY = {"compat.mbt", "traits.mbt"}


def category(name: str) -> str:
    parts = PurePosixPath(name).parts
    if any(part in IGNORED for part in parts) or not name.endswith(".mbt"):
        return "excluded"
    if "tests" in parts or TEST_NAME.search(name):
        return "tests"
    if "examples" in parts:
        return "examples"
    return "implementation"


def count_text(text: str) -> dict[str, int]:
    result = {"physical": 0, "effective": 0, "multiline_literal": 0}
    block_depth = 0
    for line in text.splitlines():
        result["physical"] += 1
        if line.lstrip().startswith("#|") and block_depth == 0:
            # Exclude all embedded JavaScript and multiline help/fixture data.
            result["multiline_literal"] += 1
            continue
        index = 0
        quote = ""
        has_code = False
        while index < len(line):
            pair = line[index:index + 2]
            char = line[index]
            if block_depth:
                if pair == "/*":
                    block_depth += 1
                    index += 2
                elif pair == "*/":
                    block_depth -= 1
                    index += 2
                else:
                    index += 1
                continue
            if quote:
                has_code = True
                if char == "\\":
                    index += 2
                elif char == quote:
                    quote = ""
                    index += 1
                else:
                    index += 1
                continue
            if pair == "//":
                break
            if pair == "/*":
                block_depth = 1
                index += 2
                continue
            if char in {"'", '"'}:
                quote = char
                has_code = True
            elif not char.isspace():
                has_code = True
            index += 1
        if has_code:
            result["effective"] += 1
    return result


def current_sources():
    for path in sorted(ROOT.rglob("*.mbt")):
        name = path.relative_to(ROOT).as_posix()
        if category(name) != "excluded":
            yield name, path.read_text(encoding="utf-8-sig")


def baseline_sources(revision: str):
    listing = subprocess.run(
        ["git", "ls-tree", "-r", "--name-only", "-z", revision],
        cwd=ROOT, check=True, capture_output=True,
    ).stdout.decode("utf-8").split("\0")
    for name in sorted(filter(None, listing)):
        if category(name) == "excluded":
            continue
        content = subprocess.run(
            ["git", "show", f"{revision}:{name}"], cwd=ROOT,
            check=True, capture_output=True,
        ).stdout.decode("utf-8-sig")
        yield name, content


def summarize(sources) -> dict:
    totals = {
        key: {"files": 0, "physical": 0, "effective": 0, "multiline_literal": 0}
        for key in ("implementation", "tests", "examples")
    }
    files = []
    compatibility = 0
    for name, content in sources:
        kind = category(name)
        counts = count_text(content)
        totals[kind]["files"] += 1
        for field, value in counts.items():
            totals[kind][field] += value
        if kind == "implementation" and PurePosixPath(name).name in COMPATIBILITY:
            compatibility += counts["effective"]
        files.append({"path": name, "category": kind, **counts})
    return {
        "totals": totals,
        "compiler_compatibility_lines": compatibility,
        "implementation_without_compatibility": totals["implementation"]["effective"] - compatibility,
        "files": files,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--minimum", type=int, default=4000)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--baseline", default="414e476efa463737164e5d5e1b2345bccd01148f")
    parser.add_argument("--require-baseline", action="store_true")
    args = parser.parse_args()
    current = summarize(current_sources())
    try:
        available = subprocess.run(
            ["git", "cat-file", "-e", args.baseline + "^{commit}"],
            cwd=ROOT, capture_output=True,
        ).returncode == 0
    except FileNotFoundError:
        available = False
    if available:
        baseline = summarize(baseline_sources(args.baseline))
    else:
        baseline = None
        if args.require_baseline:
            print("Required baseline commit is unavailable. Use a full Git checkout or the delivered Git bundle.")
            return 2
    count = current["implementation_without_compatibility"]
    result = {
        "schema_version": 1,
        "method": "physical source lines containing code; excludes blank/comments, multiline #| data/JS, dependencies, generated APIs, tests, examples and compatibility-only files from the minimum",
        "baseline_revision": args.baseline,
        "minimum": args.minimum,
        "minimum_passed": count >= args.minimum,
        "current": current,
        "baseline": baseline,
        "baseline_available": baseline is not None,
        "new_effective_implementation": count - baseline["implementation_without_compatibility"] if baseline else None,
    }
    if args.output:
        output = args.output if args.output.is_absolute() else ROOT / args.output
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({
        "implementation_without_compatibility": count,
        "effective_implementation": current["totals"]["implementation"]["effective"],
        "new_effective_implementation": result["new_effective_implementation"],
        "tests": current["totals"]["tests"]["effective"],
        "minimum_passed": result["minimum_passed"],
    }))
    return 0 if result["minimum_passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
