"""Validate security findings against repaired files and an optional real Nginx.

The HTTP oracle observes three consequences, independently of detector output:
alias directory escape, loss of an inherited header, and return/access ordering.
Only our temporary prefix, loopback port and owned process are used.
"""
from __future__ import annotations

import argparse
import http.client
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import time

import verify_nginx as oracle

ROOT = Path(__file__).resolve().parents[1]
EXAMPLES = ROOT / "examples/security"
FRESH = "_build/js/release/build/cmd/nginx-cli/nginx-cli.js"
BUNDLE = "dist/moonnginx-access-audit.js"
PUBLIC = "Public security fixture\n"
PRIVATE = "PRIVATE fixture secret, no real data\n"
RETURNED = "PRIVATE fixture response\n"
LIVE_CODES = {"alias_traversal", "add_header_redefinition", "return_bypasses_allow_deny"}


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def prepare(prefix: Path, variant: str, port: int) -> None:
    shutil.copytree(EXAMPLES / variant, prefix)
    config = prefix / "nginx.conf"
    text = config.read_text(encoding="utf-8")
    require(text.count("127.0.0.1:8080") == 1, "fixture must have one loopback listener")
    config.write_text(text.replace("127.0.0.1:8080", f"127.0.0.1:{port}"), encoding="utf-8")
    (prefix / "logs").mkdir()
    (prefix / "temp").mkdir()
    for name, body in {
        "assets/public.txt": PUBLIC, "private/secret.txt": PRIVATE,
        "headers/probe.txt": PUBLIC, "blocked/probe.txt": PUBLIC,
        "ready/probe.txt": PUBLIC,
    }.items():
        path = prefix / "html" / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(body, encoding="utf-8", newline="\n")


def scan(executable: str, prefix: Path, filename: str, strict: bool, expected_exit: int) -> dict:
    command = ["node", executable, "security", filename, "--root", str(prefix), "--format", "json"]
    if strict:
        command.append("--strict")
    result = oracle.run_command(command, ROOT)
    require(result["returncode"] == expected_exit, f"wrong security exit: {result}")
    require(not result["stderr"], f"successful security scan wrote stderr: {result}")
    report = json.loads(result["stdout"])
    require(report.get("schema_version") == 1, f"missing security schema: {report}")
    require(report.get("complete") is True, f"security scan must be complete: {report}")
    require(isinstance(report.get("findings"), list), f"missing findings: {report}")
    for item in report["findings"]:
        require(item.get("code") and item.get("message") and item.get("remediation"), "finding lacks actionable description")
        source = item.get("source", {})
        require(source.get("line", 0) > 0 and (source.get("file") or source.get("path")), "finding must have a real source location")
    return report


def verify_files(executable: str, directory: Path, prefixes: list[Path]) -> list[dict]:
    results = []
    for index, prefix in enumerate(prefixes):
        payload = scan(executable, prefix, "nginx.conf", True, 1 if index == 0 else 0)
        codes = {item["code"] for item in payload["findings"]}
        require(LIVE_CODES.issubset(codes) if index == 0 else not codes, f"risk/repair findings wrong: {payload}")
        if index == 0:
            for item in payload["findings"]:
                if item["code"] in LIVE_CODES:
                    source = item["source"]
                    require((source.get("file") or source.get("path")) == "checks.conf", "included rule source was lost")
                    require(bool(source.get("include_chain")), "included rule must retain include provenance")
        results.append({"id": ["live-risky", "live-repaired"][index], "passed": True, "payload": payload})
    catalog = json.loads((EXAMPLES / "cases.json").read_text(encoding="utf-8"))
    for case in catalog:
        for variant in ("risky", "repaired"):
            filename = f"{case['id']}-{variant}.conf"
            (directory / filename).write_text(case[variant] + "\n", encoding="utf-8")
            exit_code = 1 if variant == "risky" and case["severity"] != "info" else 0
            payload = scan(executable, directory, filename, True, exit_code)
            found = [item for item in payload["findings"] if item["code"] == case["code"]]
            require(bool(found) == (variant == "risky"), f"wrong rule result for {case['id']}/{variant}: {payload}")
            if found:
                require(all(item["severity"].lower() == case["severity"] for item in found), "rule severity changed without updating the contract")
            results.append({"id": f"{case['id']}-{variant}", "passed": True, "payload": payload})
        # Warnings remain visible when the default gate only rejects criticals.
        if case["id"] == "host-header-source":
            payload = scan(executable, directory, "host-header-source-risky.conf", False, 0)
            require(any(item["code"] == case["code"] for item in payload["findings"]), "passing default gate must not hide warnings")
            results.append({"id": "default-gate-keeps-warning", "passed": True, "payload": payload})
    # The real filesystem loader must still reject an unresolved include.
    (directory / "missing.conf").write_text("http { include absent-security.conf; }\n", encoding="utf-8")
    result = oracle.run_command(["node", executable, "security", "missing.conf", "--root", str(directory), "--format", "json"], ROOT)
    require(result["returncode"] == 2 and not result["stdout"], f"missing include must fail input: {result}")
    error = json.loads(result["stderr"])
    require(error.get("error", {}).get("code") == "missing_include", "missing include error must remain structured")
    results.append({"id": "missing-include", "passed": True, "payload": error})
    return results


def request(port: int, path: str) -> dict:
    connection = http.client.HTTPConnection("127.0.0.1", port, timeout=3)
    try:
        # HTTPConnection preserves the path; a browser might normalize traversal.
        connection.request("GET", path, headers={"Host": "own.test", "Connection": "close"})
        response = connection.getresponse()
        body = response.read().decode("utf-8", errors="replace")
        return {"status": response.status, "headers": dict(response.getheaders()), "body": body}
    finally:
        connection.close()


def verify_http(nginx: Path, prefixes: list[Path], port: int, report: dict) -> None:
    report.update(nginx_version=oracle.run_command([str(nginx), "-v"], nginx.parent), syntax_checks=[], requests=[], cleanup=[])
    for index, prefix in enumerate(prefixes):
        syntax = oracle.run_command([str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf", "-t"], nginx.parent)
        report["syntax_checks"].append(syntax)
        require(syntax["returncode"] == 0, f"both configurations must pass nginx -t: {syntax}")
        with (prefix / "logs/process.log").open("wb") as log:
            process = subprocess.Popen([str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf"], cwd=nginx.parent, stdout=log, stderr=log, **oracle.hidden_process_options())
            try:
                deadline = time.monotonic() + 10
                while True:
                    require(process.poll() is None, "owned Nginx exited before becoming ready")
                    try:
                        ready = request(port, "/ready/probe.txt")
                        if ready["status"] == 200 and ready["body"] == PUBLIC:
                            break
                    except (OSError, http.client.HTTPException):
                        pass
                    require(time.monotonic() < deadline, "owned Nginx did not serve the readiness fixture")
                    time.sleep(0.05)
                expectations = [
                    ("alias_traversal", "/assets../private/secret.txt", 200 if index == 0 else 404),
                    ("add_header_redefinition", "/headers/probe.txt", 200),
                    ("return_bypasses_allow_deny", "/blocked/probe.txt", 200 if index == 0 else 403),
                    ("public-alias-still-works", "/assets/public.txt", 200),
                ]
                for code, path, expected_status in expectations:
                    actual = request(port, path)
                    require(actual["status"] == expected_status, f"HTTP status mismatch for {code}/{index}: {actual}")
                    if code == "alias_traversal":
                        require((actual["body"] == PRIVATE) == (index == 0), "private fixture escape was not independently demonstrated")
                    if code == "add_header_redefinition":
                        headers = {name.lower(): value for name, value in actual["headers"].items()}
                        require(headers.get("x-frame-options") == (None if index == 0 else "DENY"), "inherited security header observation differs")
                        require(actual["body"] == PUBLIC, "header check reached unrelated content")
                    if code == "return_bypasses_allow_deny" and index == 0:
                        require(actual["body"] == RETURNED, "return bypass must serve the intentional fixture")
                    if code == "public-alias-still-works":
                        require(actual["body"] == PUBLIC, "repair broke the intended public asset")
                    report["requests"].append({"variant": ["risky", "repaired"][index], "rule": code, "path": path, "expected_status": expected_status, "actual": actual, "passed": True})
            finally:
                report["cleanup"].append(oracle.stop_owned_nginx(process, nginx, prefix, nginx.parent))
    require(len(report["requests"]) == 8, "missing HTTP observations")
    report["status"] = "passed"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--nginx", type=Path)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/security.json"))
    args = parser.parse_args()
    scratch = ROOT / "_build/ci"
    scratch.mkdir(parents=True, exist_ok=True)
    report = {"suite": "security-rule-risk-repair-and-http-oracle", "status": "running", "executables": {}}
    try:
        with tempfile.TemporaryDirectory(prefix="security-", dir=scratch) as temporary:
            directory = Path(temporary).resolve(strict=True)
            require(directory.is_relative_to(scratch.resolve(strict=True)), "temporary cleanup target must remain within workspace")
            prefixes = [directory / "risky", directory / "repaired"]
            port = oracle.reserve_port()
            for prefix, variant in zip(prefixes, ("risky", "repaired")):
                prepare(prefix, variant, port)
            for executable in (FRESH, BUNDLE):
                report["executables"][executable] = verify_files(executable, directory, prefixes)
            require(report["executables"][FRESH] == report["executables"][BUNDLE], "fresh build and shipped security reports diverge")
            report["real_nginx"] = {}
            if args.nginx:
                verify_http(args.nginx.resolve(strict=True), prefixes, port, report["real_nginx"])
            else:
                report["real_nginx"] = {"status": "not_run", "reason": "provide --nginx for actual HTTP observations"}
            report["status"] = "passed"
        code = 0
    except (AssertionError, OSError, ValueError, KeyError, subprocess.SubprocessError, http.client.HTTPException) as error:
        report.update(status="failed", error=f"{type(error).__name__}: {error}")
        print(report["error"], file=sys.stderr)
        code = 1
    destination = args.output if args.output.is_absolute() else ROOT / args.output
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Security verification: {report['status']}; {destination}")
    return code


if __name__ == "__main__":
    raise SystemExit(main())
