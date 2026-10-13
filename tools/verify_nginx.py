"""Compare the file CLI's address decisions with a real, isolated Nginx.

Example (from the repository root):
  python tools/verify_nginx.py --nginx PATH/nginx.exe \
    --cli-command-json '["node", "tools/cidr-audit.mjs"]' \
    --output _build/ci/nginx-comparison.json

The fixture serves static files. No `return` or rewrite bypasses access checks.
Only our own Nginx process and prefix are used; system Nginx is never stopped.
"""

from __future__ import annotations

import argparse
import http.client
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import sys
import tempfile
import time
from typing import Any


BODY = b"MoonCIDR integration fixture\n"
CONTEXT_ARGS = ["contexts", "{config}", "--root", "{root}", "--format", "json"]
PROBE_ARGS = [
    "probe", "{config}", "{ip}", "--root", "{root}",
    "--context", "{context}", "--format", "json",
]
OUTCOME_STATUS = {
    "allowed_by_rule": 200,
    "denied_by_rule": 403,
    "no_address_restriction": 200,
}


class CheckFailure(Exception):
    """An integration contract did not hold."""


def hidden_process_options() -> dict[str, Any]:
    if os.name != "nt":
        return {}
    startup = subprocess.STARTUPINFO()
    startup.dwFlags |= subprocess.STARTF_USESHOWWINDOW
    startup.wShowWindow = subprocess.SW_HIDE
    return {"startupinfo": startup, "creationflags": subprocess.CREATE_NO_WINDOW}


def command_list(text: str) -> list[str]:
    value = json.loads(text)
    if not isinstance(value, list) or not value or not all(
        isinstance(part, str) and part for part in value
    ):
        raise argparse.ArgumentTypeError("command must be a non-empty JSON array of strings")
    return value


def run_command(command: list[str], cwd: Path, timeout: float = 20) -> dict[str, Any]:
    completed = subprocess.run(
        command, cwd=cwd, capture_output=True, timeout=timeout,
        encoding="utf-8", errors="replace", **hidden_process_options(),
    )
    return {
        "command": command, "returncode": completed.returncode,
        "stdout": completed.stdout, "stderr": completed.stderr,
    }


def run_cli(
    cli: list[str], template: list[str], cwd: Path, **values: str,
) -> dict[str, Any]:
    return run_command(cli + [part.format(**values) for part in template], cwd)


def all_diagnostics(payload: dict[str, Any]) -> list[dict[str, Any]]:
    diagnostics = list(payload.get("diagnostics", []))
    for context in payload.get("contexts", []):
        if isinstance(context, dict):
            diagnostics.extend(context.get("diagnostics", []))
    return diagnostics


def parse_cli_json(result: dict[str, Any]) -> dict[str, Any]:
    if result["returncode"] != 0:
        raise CheckFailure(f"CLI failed: {result}")
    try:
        payload = json.loads(result["stdout"])
    except json.JSONDecodeError as error:
        raise CheckFailure(f"CLI stdout is not JSON: {result}") from error
    if not isinstance(payload, dict) or payload.get("schema_version") != 1:
        raise CheckFailure(f"unsupported report contract: {payload}")
    if payload.get("complete") is False or any(
        isinstance(item, dict) and item.get("blocking") is True
        for item in all_diagnostics(payload)
    ):
        raise CheckFailure(f"successful CLI result contains an incomplete analysis: {payload}")
    return payload


def context_for_location(report: dict[str, Any], label: str) -> str:
    contexts = report.get("contexts")
    if not isinstance(contexts, list):
        raise CheckFailure("contexts report must contain an array")
    selected = [
        item for item in contexts
        if isinstance(item, dict) and item.get("kind") == "location"
        and item.get("label") in (label, "location " + label)
    ]
    if len(selected) != 1 or not isinstance(selected[0].get("selector"), str):
        raise CheckFailure(f"expected one location context for {label!r}: {selected}")
    return selected[0]["selector"]


def predict(report: dict[str, Any]) -> int:
    """Map the MoonBit result only within this unauthenticated static fixture."""
    outcome = report.get("outcome")
    if outcome not in OUTCOME_STATUS:
        raise CheckFailure(f"unexpected probe outcome: {outcome!r}")
    return OUTCOME_STATUS[outcome]


def reserve_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as listener:
        listener.bind(("127.0.0.1", 0))
        return int(listener.getsockname()[1])


def request(port: int, host: str, location: str, source: str) -> dict[str, Any]:
    connection = http.client.HTTPConnection(
        "127.0.0.1", port, timeout=3, source_address=(source, 0),
    )
    try:
        connection.request(
            "GET", location + "probe.txt",
            headers={"Host": host, "Connection": "close"},
        )
        response = connection.getresponse()
        content = response.read()
        return {
            "status": response.status,
            "body_is_fixture": content == BODY,
            "body_prefix": content[:120].decode("utf-8", errors="replace"),
        }
    finally:
        connection.close()


def prepare_fixture(fixture: Path, prefix: Path, port: int) -> list[dict[str, str]]:
    scenarios = json.loads((fixture / "scenarios.json").read_text(encoding="utf-8"))
    template = (fixture / "nginx.conf.template").read_text(encoding="utf-8")
    if template.count("{{PORT}}") != 2:
        raise CheckFailure("fixture must have two listeners using the reserved port")
    (prefix / "nginx.conf").write_text(template.replace("{{PORT}}", str(port)), encoding="utf-8")
    shutil.copytree(fixture / "policies", prefix / "policies")
    (prefix / "logs").mkdir()
    # The official Windows build uses temp/client_body_temp and siblings.
    # Nginx creates the final directories but requires this parent to exist.
    (prefix / "temp").mkdir()
    for scenario in scenarios:
        target = prefix / "html" / scenario["location"].strip("/") / "probe.txt"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(BODY)
    return scenarios


def wait_until_ready(process: subprocess.Popen, port: int) -> None:
    deadline = time.monotonic() + 10
    last_error = ""
    while time.monotonic() < deadline:
        if process.poll() is not None:
            raise CheckFailure(f"our Nginx exited during startup: {process.returncode}")
        try:
            response = request(port, "own.test", "/first-allow/", "127.0.0.1")
            if response["status"] == 200 and response["body_is_fixture"]:
                return
            last_error = str(response)
        except (OSError, http.client.HTTPException) as error:
            last_error = str(error)
        time.sleep(0.05)
    raise CheckFailure(f"our Nginx did not serve the fixture: {last_error}")


def stop_owned_nginx(
    process: subprocess.Popen, nginx: Path, prefix: Path, cwd: Path,
) -> dict[str, Any]:
    result: dict[str, Any] = {"owned_pid": process.pid, "already_exited": process.poll() is not None}
    if process.poll() is not None:
        result["exit_code"] = process.returncode
        return result
    pid_file = prefix / "logs" / "nginx.pid"
    # With daemon/master disabled the pid file must name the process we created.
    # Reject a mismatched file before calling Nginx's signal command.
    try:
        pid_matches = pid_file.read_text(encoding="ascii").strip() == str(process.pid)
    except (OSError, UnicodeError) as error:
        pid_matches = False
        result["pid_file_error"] = str(error)
    if pid_matches:
        try:
            result["quit"] = run_command(
                [str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf", "-s", "quit"], cwd,
            )
        except (OSError, subprocess.SubprocessError) as error:
            # A failed signal helper must not bypass our own-process cleanup.
            result["quit_error"] = str(error)
        try:
            process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            pass
    else:
        result["quit_not_sent"] = "pid file absent or does not identify our process"
    if process.poll() is None:
        process.terminate()
        result["terminated_owned_process"] = True
        try:
            process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            process.kill()
            result["killed_owned_process"] = True
            process.wait(timeout=5)
    result["exit_code"] = process.returncode
    return result


def check_cli_errors(cli: list[str], prefix: Path, cwd: Path) -> list[dict[str, Any]]:
    files = {
        "missing.conf": "http { include absent.conf; }\n",
        "cycle.conf": "http { include cycle-a.conf; }\n",
        "cycle-a.conf": "include cycle-b.conf;\n",
        "cycle-b.conf": "include cycle-a.conf;\n",
        "unsupported.conf": "http { server { location /x/ { allow ::1; } } }\n",
    }
    for name, content in files.items():
        (prefix / name).write_text(content, encoding="utf-8")
    checks = [
        ("missing-include", "missing.conf", 2, "missing_include"),
        ("include-cycle", "cycle.conf", 2, "include_cycle"),
        ("unsupported-ipv6", "unsupported.conf", 3, None),
    ]
    results = []
    for name, filename, expected_code, error_code in checks:
        result = run_cli(
            cli, ["audit", "{config}", "--root", "{root}", "--strict", "--format", "json"],
            cwd, config=filename, root=str(prefix),
        )
        result["id"] = name
        result["expected_returncode"] = expected_code
        result["passed"] = result["returncode"] == expected_code
        # Input errors use stderr; blocking analysis diagnostics use stdout.
        # Every non-empty JSON channel must be valid machine-readable output.
        result["json_channels_valid"] = True
        for channel in ("stdout", "stderr"):
            if result[channel].strip():
                try:
                    result[f"{channel}_json"] = json.loads(result[channel])
                except json.JSONDecodeError:
                    result["json_channels_valid"] = False
        result["passed"] = result["passed"] and result["json_channels_valid"]
        if error_code is not None:
            payload = result.get("stderr_json")
            structured_error = payload.get("error") if isinstance(payload, dict) else None
            result["passed"] = result["passed"] and isinstance(structured_error, dict) and structured_error.get("code") == error_code
        else:
            payload = result.get("stdout_json")
            result["passed"] = result["passed"] and isinstance(payload, dict) and payload.get("schema_version") == 1
            diagnostics = all_diagnostics(payload) if isinstance(payload, dict) else []
            result["passed"] = result["passed"] and any(
                isinstance(item, dict) and item.get("blocking") is True
                and item.get("code") == "unsupported_address_family"
                for item in diagnostics
            )
        results.append(result)
    return results


def compare(args: argparse.Namespace, report: dict[str, Any]) -> None:
    repository = Path(__file__).resolve().parents[1]
    fixture = repository / "tests" / "integration-nginx"
    scratch = repository / "_build" / "ci"
    scratch.mkdir(parents=True, exist_ok=True)
    nginx = args.nginx.resolve(strict=True)
    report["nginx_version"] = run_command([str(nginx), "-v"], nginx.parent)
    report["cli_command"] = args.cli_command_json
    # This temporary directory is always under the explicitly checked workspace.
    # Never recursively delete/move a computed path outside that workspace.
    with tempfile.TemporaryDirectory(prefix="nginx-integration-", dir=scratch) as temporary:
        prefix = Path(temporary).resolve(strict=True)
        if not prefix.is_relative_to(scratch.resolve(strict=True)):
            raise CheckFailure("temporary prefix escaped the repository scratch directory")
        port = reserve_port()
        scenarios = prepare_fixture(fixture, prefix, port)
        report["fixture_config"] = (prefix / "nginx.conf").read_text(encoding="utf-8")
        report["endpoint"] = {"address": "127.0.0.1", "port": port}
        contexts_result = run_cli(
            args.cli_command_json, args.contexts_template_json, repository,
            config="nginx.conf", root=str(prefix),
        )
        report["contexts_cli"] = contexts_result
        contexts = parse_cli_json(contexts_result)
        report["cli_error_cases"] = check_cli_errors(args.cli_command_json, prefix, repository)
        config_test = run_command(
            [str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf", "-t"], nginx.parent,
        )
        report["nginx_config_test"] = config_test
        if config_test["returncode"] != 0:
            raise CheckFailure(f"Nginx rejects integration fixture: {config_test}")
        with (prefix / "logs" / "process.log").open("wb") as log:
            process = subprocess.Popen(
                [str(nginx), "-p", prefix.as_posix() + "/", "-c", "nginx.conf"],
                cwd=nginx.parent, stdout=log, stderr=log, **hidden_process_options(),
            )
            try:
                wait_until_ready(process, port)
                for scenario in scenarios:
                    context = context_for_location(contexts, scenario["location"])
                    cli_result = run_cli(
                        args.cli_command_json, args.probe_template_json, repository,
                        config="nginx.conf", root=str(prefix),
                        context=context, ip=scenario["source"],
                    )
                    prediction = parse_cli_json(cli_result)
                    actual = request(port, scenario["host"], scenario["location"], scenario["source"])
                    predicted_status = predict(prediction)
                    passed = actual["status"] == predicted_status and (
                        actual["status"] != 200 or actual["body_is_fixture"]
                    )
                    item = {
                        **scenario, "context": context, "prediction": prediction,
                        "predicted_http_status": predicted_status, "actual_http": actual,
                        "cli": cli_result, "passed": passed,
                    }
                    report["comparisons"].append(item)
                    print(f"{scenario['id']}: {prediction['outcome']} -> HTTP {actual['status']}: {'PASS' if passed else 'FAIL'}")
            finally:
                report["cleanup"] = stop_owned_nginx(process, nginx, prefix, nginx.parent)
                error_log = prefix / "logs" / "error.log"
                if error_log.exists():
                    report["nginx_error_log"] = error_log.read_text(encoding="utf-8", errors="replace")[-4000:]
        failures = [item for item in report["comparisons"] if not item["passed"]]
        failures += [item for item in report["cli_error_cases"] if not item["passed"]]
        report["comparison_count"] = len(report["comparisons"])
        report["error_case_count"] = len(report["cli_error_cases"])
        if failures or len(report["comparisons"]) != len(scenarios):
            raise CheckFailure(f"{len(failures)} integration comparisons or CLI checks failed")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--nginx", type=Path, required=True)
    parser.add_argument("--cli-command-json", type=command_list, required=True)
    parser.add_argument("--contexts-template-json", type=command_list, default=CONTEXT_ARGS)
    parser.add_argument("--probe-template-json", type=command_list, default=PROBE_ARGS)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    report: dict[str, Any] = {
        "schema_version": 1,
        "verification": "real-nginx-address-access-comparison",
        "scope_note": "Static files, access module only; no auth, satisfy, rewrite, return, upstream or live deployment.",
        "comparisons": [], "status": "running",
    }
    try:
        compare(args, report)
        report["status"] = "passed"
        return_code = 0
    except (CheckFailure, OSError, ValueError, subprocess.SubprocessError, http.client.HTTPException) as error:
        report["status"] = "failed"
        report["error"] = f"{type(error).__name__}: {error}"
        print(report["error"], file=sys.stderr)
        return_code = 1
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Verification {report['status']}; report: {args.output.resolve()}")
    return return_code


if __name__ == "__main__":
    raise SystemExit(main())
