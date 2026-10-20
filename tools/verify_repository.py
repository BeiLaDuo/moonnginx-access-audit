"""Check source provenance, retained notices and local README links offline."""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]


def normalized_hash(path: Path) -> str:
    return hashlib.sha256(path.read_text(encoding="utf-8-sig").encode("utf-8")).hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/repository.json"))
    parser.add_argument("--check-package", action="store_true", help="also inspect the previously built Moon package")
    options = parser.parse_args()
    checks = []

    def require(condition: bool, description: str) -> None:
        checks.append({"check": description, "passed": bool(condition)})

    module = (ROOT / "moon.mod").read_text(encoding="utf-8")
    require('name = "BeiLaDuo/moonnginx-access-audit"' in module, "correct module identity")
    require('license = "Apache-2.0"' in module, "declared project license")
    require("Apache License" in (ROOT / "LICENSE").read_text(encoding="utf-8"), "project license text")
    require((ROOT / "NOTICE").is_file(), "project attribution notice")
    require((ROOT / "THIRD_PARTY.md").is_file(), "third-party source explanation")
    inventory = json.loads((ROOT / "third_party/manifest.json").read_text(encoding="utf-8"))
    imports = set(re.findall(r'"([^"\n]+@[^"\n]+)"', module))
    inventoried = {item["name"] + "@" + item["version"]
                   for item in inventory["components"] if item["kind"] == "moon-package"}
    require(imports == inventoried, "every versioned Mooncakes dependency is inventoried")
    for item in inventory["components"]:
        require(bool(item["source"]) and bool(item["license"]), item["name"] + " source and license")
        for legal in item["legal_files"]:
            path = (ROOT / legal["path"]).resolve()
            inside = path.is_relative_to(ROOT)
            require(inside and path.is_file(), legal["path"] + " retained")
            if inside and path.is_file():
                require(normalized_hash(path) == legal["sha256_lf_utf8"], legal["path"] + " reviewed text hash")
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    for target in re.findall(r'\]\(([^)]+)\)', readme):
        if "://" in target or target.startswith(("#", "mailto:")):
            continue
        path = (ROOT / target.split("#", 1)[0]).resolve()
        require(path.is_relative_to(ROOT) and path.exists(), "README link: " + target)
    if options.check_package:
        version = re.search(r'^version\s*=\s*"([^"]+)"', module, re.MULTILINE).group(1)
        package = ROOT / "_build/publish" / ("BeiLaDuo-moonnginx-access-audit-" + version + ".zip")
        require(package.is_file(), "Moon package exists")
        if package.is_file():
            legal_paths = ["LICENSE", "NOTICE", "THIRD_PARTY.md", "third_party/manifest.json"]
            legal_paths += [entry["path"] for item in inventory["components"] for entry in item["legal_files"]]
            with zipfile.ZipFile(package) as archive:
                names = {name.replace("\\", "/"): name for name in archive.namelist()}
                for name in legal_paths:
                    require(name in names, "package includes " + name)
                    if name in names:
                        retained = archive.read(names[name]).decode("utf-8-sig").replace("\r\n", "\n")
                        require(retained == (ROOT / name).read_text(encoding="utf-8-sig"), "package preserves " + name)
    report = {"suite": "repository-provenance", "package_checked": options.check_package, "checks": checks,
              "passed": sum(c["passed"] for c in checks),
              "failed": sum(not c["passed"] for c in checks)}
    destination = options.output if options.output.is_absolute() else ROOT / options.output
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Repository checks: {report['passed']} passed, {report['failed']} failed")
    for check in checks:
        if not check["passed"]:
            print("FAILED: " + check["check"])
    return 1 if report["failed"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
