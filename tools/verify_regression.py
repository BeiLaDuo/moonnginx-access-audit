"""Exercise real Nginx snapshots, exact diff gates and optional live HTTP oracle.

All configurations are project-owned fixtures. Nginx listens only on loopback
in a checked temporary workspace. No deployed server is reloaded or stopped.
"""
from __future__ import annotations

import argparse
import http.client
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import time

import verify_nginx as oracle

ROOT = Path(__file__).resolve().parents[1]
FRESH = "_build/js/release/build/cmd/nginx-cli/nginx-cli.js"
BUNDLE = "dist/moonnginx-access-audit.js"


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def snapshot(prefix: Path, port: int, candidate: bool) -> None:
    (prefix / "policy").mkdir(parents=True)
    (prefix / "logs").mkdir()
    (prefix / "temp").mkdir()
    (prefix / "policy/admin.conf").write_text(
        "deny 127.0.0.2;\n" if candidate else "# Inherit the complete parent ACL.\n",
        encoding="utf-8",
    )
    # Inserting a server and location changes ordinals without changing identity.
    extra = f"server {{ listen 127.0.0.1:{port}; server_name added.test; deny all; }}" if candidate else ""
    (prefix / "nginx.conf").write_text(f"""worker_processes 1;
daemon off;
master_process off;
pid logs/nginx.pid;
error_log logs/error.log notice;
events {{ worker_connections 32; }}
http {{
  access_log off;
  allow 127.0.0.1;
  deny all;
  {extra}
  server {{
    listen 127.0.0.1:{port} default_server;
    server_name own.test;
    root html;
    location /admin/ {{ include policy/admin.conf; }}
    location = /admin/public/probe.txt {{ allow all; }}
    location = /exact/probe.txt {{ {'allow' if candidate else 'deny'} all; }}
  }}
  server {{ listen 127.0.0.1:{port}; server_name other.test; root html; deny all; }}
}}
""", encoding="utf-8")
    for path in ["admin/probe.txt", "admin/public/probe.txt", "exact/probe.txt"]:
        destination = prefix / "html" / path
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(oracle.BODY)


def cli_call(executable: str, args: list[str]) -> dict:
    return oracle.run_command(["node", executable] + args, ROOT)


def parsed(result: dict, code: int) -> dict:
    require(result["returncode"] == code, f"expected status {code}: {result}")
    channel = "stdout" if code in (0, 1) else "stderr"
    require(not result["stderr" if channel == "stdout" else "stdout"], f"unexpected second output channel: {result}")
    value = json.loads(result[channel])
    require(value.get("complete", code in (0, 1)) == (code in (0, 1)), f"wrong completeness: {value}")
    return value


def verify_cli(executable: str, before: Path, after: Path, port: int) -> list[dict]:
    cases = []
    common = ["--root", str(before), "--after-root", str(after), "--host", "own.test", "--uri", "/admin/probe.txt", "--port", str(port), "--format", "json"]

    def check(name: str, args: list[str], code: int, assertion) -> dict:
        result = cli_call(executable, args)
        payload = parsed(result, code)
        assertion(payload)
        cases.append({"name": name, "passed": True, "exit_code": code, "payload": payload})
        return payload

    def widening(value: dict) -> None:
        require(value["newly_allowed_count"] == "16777214", "must count whole scope, not samples")
        require(value["newly_denied_count"] == "0" and not value["equivalent"], "wrong direction")
        require(value["before_context"] != value["after_context"], "fixture must exercise ordinal changes")
        require(value["before_inherited_from"] == "http[1]" and value["after_inherited_from"] is None, "inheritance replacement lost")
        require(value["changes"][1]["witness"] == "127.0.0.3", "wrong replayable witness")
        origin = value["changes"][1]["before"]["matched_rule"]["source"]
        require(origin["file"] == "nginx.conf" and origin["line"] > 0, "missing original source")

    check("inheritance-widening", ["diff", "nginx.conf", "nginx.conf"] + common + ["--scope", "127.0.0.0/8"], 1, widening)
    check("no-widening-gate", ["diff", "nginx.conf", "nginx.conf"] + common + ["--scope", "127.0.0.0/8", "--gate", "no-widening"], 1,
          lambda v: require(v["gate_passed"] is False, "widening must reject"))
    check("no-tightening-gate", ["diff", "nginx.conf", "nginx.conf"] + common + ["--gate", "no-tightening"], 0,
          lambda v: require(v["gate_passed"] is True and not v["equivalent"], "passing directional gate must retain differences"))
    check("unchanged-single-address-scope", ["diff", "nginx.conf", "nginx.conf"] + common + ["--scope", "127.0.0.1/32"], 0,
          lambda v: require(v["compared_addresses"] == "1" and v["equivalent"], "scope must be explicit"))
    check("work-budget-no-partial-success", ["diff", "nginx.conf", "nginx.conf"] + common + ["--limits", "max_audit_pairs=1"], 4,
          lambda v: require(v["error"]["code"] == "limit_exceeded", "wrong work limit"))
    check("output-budget-no-partial-success", ["diff", "nginx.conf", "nginx.conf"] + common + ["--limits", "max_directives=1"], 4,
          lambda v: require(v["error"]["code"] == "limit_exceeded", "wrong report limit"))
    for label, root, code in [("baseline", before, 0), ("candidate", after, 1)]:
        check(f"whole-subnet-deny-{label}", ["expect", "nginx.conf", "127.0.0.2/31", "--expect", "deny", "--root", str(root), "--host", "own.test", "--uri", "/admin/probe.txt", "--port", str(port), "--format", "json"], code,
              lambda v, code=code: require(v["gate_passed"] == (code == 0), "whole-range expectation wrong"))
    check("request-host-path-resolution", ["request", "nginx.conf", "127.0.0.3", "--root", str(after), "--host", "own.test", "--uri", "/admin/probe.txt", "--port", str(port), "--format", "json"], 0,
          lambda v: require(v["outcome"] == "no_address_restriction", "must expose child fallthrough"))
    check("reject-unnormalized-URI", ["diff", "nginx.conf", "nginx.conf"] + [part if part != "/admin/probe.txt" else "/admin/../admin/probe.txt" for part in common], 2,
          lambda v: require(v["error"]["code"] == "invalid_target", "must not guess normalization"))
    check("no-listener-is-incomplete", ["diff", "nginx.conf", "nginx.conf"] + [part if part != str(port) else str(port + 1) for part in common], 3,
          lambda v: require(v["error"]["code"] == "unsupported_no_listener", "must not silently compare no endpoint"))
    (after / "regex.conf").write_text(f"http {{ server {{ listen {port}; location ~ .* {{ deny all; }} location / {{ allow all; }} }} }}", encoding="utf-8")
    check("regex-routing-is-incomplete", ["diff", "nginx.conf", "regex.conf"] + common, 3,
          lambda v: require(v["error"]["code"] == "unsupported_routing", "must refuse regex guess"))
    (after / "dynamic.conf").write_text(f"http {{ server {{ listen {port}; if ($request_method = GET) {{ return 200; }} location /admin/ {{ allow all; }} }} }}", encoding="utf-8")
    check("nested-rewrite-is-incomplete", ["diff", "nginx.conf", "dynamic.conf"] + common, 3,
          lambda v: require(v["error"]["code"] == "unsupported_routing", "must detect behavior in if block"))
    return cases


def verify_http(nginx: Path, prefixes: list[Path], port: int) -> dict:
    report = {"nginx_version": oracle.run_command([str(nginx), "-v"], nginx.parent), "syntax_checks": [], "requests": [], "cleanup": []}
    cases = [("own.test", "/admin/", "127.0.0.1"), ("own.test", "/admin/", "127.0.0.2"), ("own.test", "/admin/", "127.0.0.3"),
             ("own.test", "/admin/public/", "127.0.0.3"), ("own.test", "/exact/", "127.0.0.1"), ("other.test", "/admin/", "127.0.0.3"), ("unknown.test", "/admin/", "127.0.0.1")]
    expected = [[200, 403, 403, 200, 403, 403, 200], [200, 403, 200, 200, 200, 403, 200]]
    for side, prefix in enumerate(prefixes):
        syntax = oracle.run_command([str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf", "-t"], nginx.parent)
        report["syntax_checks"].append(syntax)
        require(syntax["returncode"] == 0, f"nginx -t must accept BOTH configurations: {syntax}")
        with (prefix / "logs/process.log").open("wb") as log:
            process = subprocess.Popen([str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf"], cwd=nginx.parent, stdout=log, stderr=log, **oracle.hidden_process_options())
            try:
                deadline = time.monotonic() + 10
                while True:
                    require(process.poll() is None, "owned Nginx exited before ready")
                    try:
                        ready = oracle.request(port, "own.test", "/admin/", "127.0.0.1")
                        if ready["status"] == 200 and ready["body_is_fixture"]:
                            break
                    except OSError:
                        pass
                    require(time.monotonic() < deadline, "owned Nginx did not become ready")
                    time.sleep(0.05)
                for index, (host, path, source) in enumerate(cases):
                    prediction = parsed(cli_call(FRESH, ["request", "nginx.conf", source, "--root", str(prefix), "--host", host, "--uri", path + "probe.txt", "--port", str(port), "--format", "json"]), 0)
                    actual = oracle.request(port, host, path, source)
                    predicted = oracle.OUTCOME_STATUS[prediction["outcome"]]
                    require(predicted == actual["status"] == expected[side][index], f"prediction or HTTP mismatch: {prediction} {actual}")
                    require(actual["status"] != 200 or actual["body_is_fixture"], "request reached an unrelated service")
                    report["requests"].append({"snapshot": side, "host": host, "path": path, "source": source, "predicted": predicted, "actual": actual["status"], "passed": True})
            finally:
                report["cleanup"].append(oracle.stop_owned_nginx(process, nginx, prefix, nginx.parent))
    # The predicted widening has an actually observed denied -> served witness.
    require(report["requests"][2]["actual"] == 403 and report["requests"][9]["actual"] == 200, "missing independently observed widening")
    return report


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--nginx", type=Path)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/regression.json"))
    args = parser.parse_args()
    scratch = ROOT / "_build/ci"
    scratch.mkdir(parents=True, exist_ok=True)
    report = {"suite": "nginx-request-access-regression", "status": "running", "executables": {}}
    try:
        with tempfile.TemporaryDirectory(prefix="regression-", dir=scratch) as temporary:
            directory = Path(temporary).resolve(strict=True)
            require(directory.is_relative_to(scratch.resolve(strict=True)), "cleanup target must remain inside the workspace")
            prefixes = [directory / "before", directory / "after"]
            port = oracle.reserve_port()
            for side, prefix in enumerate(prefixes):
                snapshot(prefix, port, side == 1)
            for executable in [FRESH, BUNDLE]:
                report["executables"][executable] = verify_cli(executable, *prefixes, port)
            require(report["executables"][FRESH] == report["executables"][BUNDLE], "shipped and fresh regression contracts differ")
            if args.nginx:
                report["real_nginx"] = verify_http(args.nginx.resolve(strict=True), prefixes, port)
            else:
                report["real_nginx"] = {"status": "not_run", "reason": "provide --nginx to verify the live oracle"}
            report["status"] = "passed"
        code = 0
    except (AssertionError, OSError, ValueError, KeyError, subprocess.SubprocessError, http.client.HTTPException) as error:
        report.update(status="failed", error=f"{type(error).__name__}: {error}")
        print(report["error"], file=sys.stderr)
        code = 1
    destination = args.output if args.output.is_absolute() else ROOT / args.output
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Request regression: {report['status']}; {destination}")
    return code


if __name__ == "__main__":
    raise SystemExit(main())
