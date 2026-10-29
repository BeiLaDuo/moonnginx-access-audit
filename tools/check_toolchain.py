"""Require the acceptance minimum moonc version, using the selected PATH toolchain."""
from __future__ import annotations

import re
import subprocess
import sys

MINIMUM = (0, 10, 16)


def main() -> int:
    try:
        result = subprocess.run(["moon", "version", "--all"], capture_output=True,
                                encoding="utf-8", errors="replace", timeout=20)
    except (OSError, subprocess.SubprocessError) as error:
        print(f"Cannot inspect MoonBit toolchain: {error}", file=sys.stderr)
        return 1
    output = result.stdout + result.stderr
    print(output, end="" if output.endswith("\n") else "\n")
    version = re.search(r"^moonc\s+v?(\d+)\.(\d+)\.(\d+)(?=[+\s-]|$)", output, re.MULTILINE)
    if result.returncode or not version:
        print("Cannot verify moonc version; refusing an unknown toolchain", file=sys.stderr)
        return 1
    actual = tuple(map(int, version.groups()))
    if actual < MINIMUM:
        print("moonc must be at least 0.10.16", file=sys.stderr)
        return 1
    print("Acceptance toolchain requirement: passed (moonc >= 0.10.16)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
