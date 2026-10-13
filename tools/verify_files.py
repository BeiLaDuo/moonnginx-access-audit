"""Exercise the built file CLI against temporary, project-authored fixtures.

Build first: moon build cmd/nginx-cli --target js --release
Run: python tools/verify_files.py --output _build/ci/file-workflow.json
No parser, filesystem loader, or report renderer is mocked.
"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import platform
import shutil
import subprocess
import sys
import tempfile
from typing import Any, Callable


SCOPE = "nginx_http_access_ipv4"
REPOSITORY = Path(__file__).resolve().parent.parent


class VerificationFailure(Exception):
    pass


class UnsupportedEnvironment(Exception):
    pass


def require(condition: bool, explanation: str) -> None:
    if not condition:
        raise VerificationFailure(explanation)


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
        isinstance(item, str) and item for item in value
    ):
        raise argparse.ArgumentTypeError("CLI command must be a nonempty JSON array of strings")
    return value


def write(root: Path, name: str, content: str | bytes) -> Path:
    destination = root / name
    destination.parent.mkdir(parents=True, exist_ok=True)
    if isinstance(content, bytes):
        destination.write_bytes(content)
    else:
        destination.write_text(content, encoding="utf-8", newline="\n")
    return destination


def directory_alias(link: Path, target: Path) -> None:
    if os.name == "nt":
        powershell = shutil.which("powershell") or shutil.which("pwsh")
        if not powershell:
            raise UnsupportedEnvironment("PowerShell unavailable for a real Windows junction fixture")
        quoted_link = str(link).replace("'", "''")
        quoted_target = str(target).replace("'", "''")
        result = subprocess.run([
            powershell, "-NoProfile", "-NonInteractive", "-Command",
            f"New-Item -ItemType Junction -Path '{quoted_link}' -Target '{quoted_target}' -ErrorAction Stop | Out-Null",
        ], capture_output=True, timeout=20, encoding="utf-8", errors="replace", **hidden_process_options())
        if result.returncode:
            raise UnsupportedEnvironment(f"junction creation unavailable: {result.stderr.strip()}")
    else:
        try:
            link.symlink_to(target, target_is_directory=True)
        except (OSError, NotImplementedError) as error:
            raise UnsupportedEnvironment(f"directory symlinks unavailable: {error}") from error


def server(payload: dict[str, Any]) -> dict[str, Any]:
    matches = [item for item in payload["contexts"] if item["kind"] == "server"]
    require(len(matches) == 1, "fixture must expose exactly one server context")
    return matches[0]


class Runner:
    def __init__(self, cli: list[str], scratch: Path) -> None:
        self.cli = cli
        self.scratch = scratch
        self.cases: list[dict[str, Any]] = []
        self.active: dict[str, Any] = {}

    def case(self, name: str, check: Callable[[Path], None]) -> None:
        root = self.scratch / name
        root.mkdir()
        result: dict[str, Any] = {"name": name, "invocations": []}
        self.active = result
        try:
            check(root)
            result["status"] = "passed"
        except UnsupportedEnvironment as error:
            result.update(status="skipped", reason=str(error))
        except Exception as error:
            result.update(status="failed", reason=f"{type(error).__name__}: {error}")
        self.cases.append(result)

    def execute(
        self, args: list[str], expected: int, *, root: Path,
        kind: str = "analysis", error_code: str | None = None,
    ) -> dict[str, Any]:
        command = self.cli + args
        completed = subprocess.run(
            command, cwd=REPOSITORY, capture_output=True, timeout=30,
            encoding="utf-8", errors="strict", **hidden_process_options(),
        )
        recorded_command = [part.replace(str(self.scratch), "{fixtures}") for part in command]
        self.active["invocations"].append({
            "command": recorded_command,
            "expected_exit_code": expected,
            "exit_code": completed.returncode,
            "stdout": completed.stdout,
            "stderr": completed.stderr,
        })
        require(completed.returncode == expected,
                f"expected exit {expected}, observed {completed.returncode}")
        if kind == "help":
            require(not completed.stderr and "Usage:" in completed.stdout,
                    "subcommand help must succeed without a configuration")
            return {}
        if kind == "argument_error":
            require(not completed.stdout, "argument error must not write a success report")
            require(completed.stderr.startswith((error_code or "") + ":"),
                    "argument failure code must be explicit")
            return {}
        channel = completed.stderr if kind == "error" else completed.stdout
        other = completed.stdout if kind == "error" else completed.stderr
        require(not other, "JSON reports must use exactly the intended output channel")
        payload = json.loads(channel)
        require(isinstance(payload, dict), "JSON report must be an object")
        require(payload.get("schema_version") == 1 and payload.get("scope") == SCOPE,
                "report schema and declared analysis scope must match")
        if kind == "error":
            require(payload.get("complete") is False, "errors cannot advertise a complete analysis")
            require(set(payload) == {"schema_version", "scope", "complete", "error"},
                    "error envelope must have the documented fields")
            error = payload.get("error")
            require(isinstance(error, dict), "error payload must be an object")
            require(set(error) == {"code", "message", "file", "line"},
                    "error details must preserve code, message, file and line")
            require(error["code"] == error_code, f"expected exact error code {error_code}")
            require(isinstance(error["message"], str) and bool(error["message"]),
                    "error must explain the failure")
            require(isinstance(error["file"], str) and type(error["line"]) is int,
                    "error location must have stable types")
        elif kind == "probe":
            require(set(payload) == {"schema_version", "scope", "scope_note", "context",
                                     "ip", "outcome", "matched_rule"},
                    "probe envelope must have the documented fields")
            require(payload["outcome"] in {"allowed_by_rule", "denied_by_rule", "no_address_restriction"},
                    "probe must use explicit address-rule outcomes")
            require("final request authorization" in payload["scope_note"],
                    "probe must retain the module scope boundary")
        else:
            require(payload.get("complete") is True, "successful input checks must be complete")
            require(isinstance(payload.get("sources"), list), "source inventory is required")
            require(isinstance(payload.get("include_edges"), list), "include provenance is required")
            require(isinstance(payload.get("contexts"), list), "context inventory is required")
            require(isinstance(payload.get("diagnostics"), list), "diagnostic inventory is required")
            for context in payload["contexts"]:
                require(isinstance(context.get("selector"), str) and bool(context["selector"]),
                        "structural selectors must be explicit")
                require(isinstance(context.get("effective_rules"), list), "effective rules are required")
                require(isinstance(context.get("declared_rules"), list), "declared rules are required")
                for rule in context["effective_rules"]:
                    require(set(rule["source"]) == {"file", "line", "include_chain"},
                            "rule source must retain include provenance")
        return payload

    def query(
        self, root: Path, *, command: str = "contexts", entry: str = "nginx.conf",
        extra: list[str] | None = None, expected: int = 0, error_code: str | None = None,
    ) -> dict[str, Any]:
        args = [command, entry, "--root", str(root), "--format", "json"] + (extra or [])
        return self.execute(args, expected, root=root,
                            kind="error" if error_code else "analysis", error_code=error_code)

    def probe(self, root: Path, context: str, ip: str, *, entry: str = "nginx.conf") -> dict[str, Any]:
        return self.execute([
            "probe", entry, ip, "--root", str(root), "--context", context, "--format", "json",
        ], 0, root=root, kind="probe")


def verify(runner: Runner) -> None:
    def subcommand_help(root: Path) -> None:
        for command in ["contexts", "audit", "probe", "validate"]:
            runner.execute([command, "--help"], 0, root=root, kind="help")
    runner.case("subcommand_help_without_configuration", subcommand_help)

    def literal_filename(root: Path) -> None:
        write(root, "-access.conf", "http {server {allow 127.0.0.1; deny all;}}\n")
        report = runner.execute(["contexts", "--root", str(root), "--format", "json", "--", "-access.conf"],
                                0, root=root)
        require(report["entry"] == "-access.conf", "a literal dash-prefixed path must be loaded")
        require(runner.probe(root, server(report)["selector"], "127.0.0.1", entry="./-access.conf")["outcome"]
                == "allowed_by_rule", "literal filename must retain actual access behavior")
    runner.case("literal_dash_filename", literal_filename)

    def anchored(root: Path) -> None:
        write(root, "config/nginx.conf", "events {}\nhttp { server { include fragments/access.conf; } }\n")
        write(root, "config/fragments/access.conf", "allow 198.51.100.7;\ninclude tail.conf;\n")
        write(root, "config/tail.conf", "deny all;\n")
        write(root, "config/fragments/tail.conf", "allow all;\n")
        report = runner.query(root, entry="config/nginx.conf")
        context = server(report)
        require([rule["raw_operand"] for rule in context["effective_rules"]] == ["198.51.100.7", "all"],
                "nested includes must stay anchored to the main configuration directory")
        require(set(report["sources"]) == {"config/nginx.conf", "config/fragments/access.conf", "config/tail.conf"},
                "unreferenced files must not enter the input bundle")
        require(context["effective_rules"][1]["source"]["file"] == "config/tail.conf",
                "tail rule must come from the main prefix, not the including file's directory")
        require(runner.probe(root, context["selector"], "198.51.100.8", entry="config/nginx.conf")["outcome"]
                == "denied_by_rule", "the included terminal deny must actually affect a probe")
    runner.case("nested_main_prefix", anchored)

    def sorted_glob(root: Path) -> None:
        write(root, "nginx.conf", "http { server { include parts/*.conf; } }\n")
        write(root, "parts/z.conf", "deny all;\n")
        write(root, "parts/a.conf", "allow 198.51.100.7;\n")
        write(root, "parts/.hidden.conf", "allow all;\n")
        report = runner.query(root)
        context = server(report)
        require(report["include_edges"][0]["targets"] == ["parts/a.conf", "parts/z.conf"],
                "glob expansion must be sorted and must not include hidden files implicitly")
        require([rule["action"] for rule in context["effective_rules"]] == ["allow", "deny"],
                "glob file order must reach effective first-match rules")
        require(runner.probe(root, context["selector"], "198.51.100.7")["outcome"] == "allowed_by_rule",
                "sorted rules must produce the expected actual probe")
    runner.case("glob_sort_and_dotfiles", sorted_glob)

    def empty_glob(root: Path, create_directory: bool) -> None:
        write(root, "nginx.conf", "http { server { include parts/*.conf; } }\n")
        if create_directory:
            (root / "parts").mkdir()
        report = runner.query(root)
        require(report["sources"] == ["nginx.conf"], "empty masks must load no invented sources")
        require(report["include_edges"][0]["targets"] == [], "empty mask provenance must remain visible")
        context = server(report)
        require(runner.probe(root, context["selector"], "198.51.100.7")["outcome"] == "no_address_restriction",
                "an empty mask is not a deny-all rule")
    runner.case("glob_empty_directory", lambda root: empty_glob(root, True))
    runner.case("glob_missing_directory", lambda root: empty_glob(root, False))

    def repeated(root: Path) -> None:
        write(root, "nginx.conf", "http { server { include access.conf; include access.conf; } }\n")
        write(root, "access.conf", "allow 198.51.100.7;\n")
        report = runner.query(root, extra=["--limits", "max_sources=2"])
        context = server(report)
        require(report["sources"] == ["nginx.conf", "access.conf"], "source count must count distinct files")
        require(len(report["include_edges"]) == 2 and len(context["effective_rules"]) == 2,
                "repeated includes must retain both occurrences in rule order")
        require(context["effective_rules"][0]["id"] != context["effective_rules"][1]["id"],
                "repeated source lines must have distinct effective rule IDs")
        runner.query(root, command="audit", extra=["--strict"], expected=1)
    runner.case("repeated_include", repeated)

    def utf8(root: Path, bom: bool) -> None:
        text = '# 项目自建配置：中文与 ✓\nhttp { server { include "访问规则.conf"; } }\n'
        write(root, "nginx.conf", (b"\xef\xbb\xbf" if bom else b"") + text.encode("utf-8"))
        write(root, "访问规则.conf", "# 自建来源\nallow 198.51.100.7; deny all;\n")
        report = runner.query(root)
        require("访问规则.conf" in report["sources"], "UTF-8 filenames must round-trip in JSON")
        context = server(report)
        require(context["effective_rules"][0]["source"]["line"] == 2,
                "Unicode comments must preserve source line numbers")
        require(runner.probe(root, context["selector"], "198.51.100.7")["outcome"] == "allowed_by_rule",
                "UTF-8 and BOM decoding must preserve real rule behavior")
    runner.case("utf8_unicode", lambda root: utf8(root, False))
    runner.case("utf8_bom", lambda root: utf8(root, True))

    def malformed_encoding(root: Path) -> None:
        write(root, "nginx.conf", b"http { server {\xff} }\n")
        runner.query(root, command="validate", expected=2, error_code="invalid_utf8")
    runner.case("invalid_utf8", malformed_encoding)

    def invalid_included_encoding(root: Path) -> None:
        write(root, "nginx.conf", "http {server {allow 198.51.100.7; include access.conf;}}\n")
        write(root, "access.conf", b"deny all; # invalid trailing UTF-8: \xc3(\n")
        report = runner.query(root, command="audit", expected=2, error_code="invalid_utf8")
        require(report["error"]["file"] == "access.conf",
                "an unreadable included source must fail instead of auditing only preceding rules")
    runner.case("included_invalid_utf8", invalid_included_encoding)

    def missing(root: Path) -> None:
        write(root, "nginx.conf", "http { server {\ninclude absent.conf;\n} }\n")
        report = runner.query(root, command="validate", expected=2, error_code="missing_include")
        require(report["error"]["file"] == "nginx.conf" and report["error"]["line"] == 2,
                "missing include must identify the referring directive")
    runner.case("missing_literal_include", missing)

    def cycle(root: Path) -> None:
        write(root, "nginx.conf", "include child.conf;\n")
        write(root, "child.conf", "include nginx.conf;\n")
        runner.query(root, command="validate", expected=2, error_code="include_cycle")
    runner.case("include_cycle", cycle)

    def escape(root: Path) -> None:
        write(root, "config/nginx.conf", "http { server { include ../shared.conf; } }\n")
        write(root, "shared.conf", "allow all;\n")
        runner.query(root, entry="config/nginx.conf", expected=2, error_code="path_escape")
    runner.case("main_prefix_escape", escape)

    def escaped_include(root: Path) -> None:
        write(root, "nginx.conf", r"http {server {include nested\rules.conf;}}" + "\n")
        write(root, "nested/rules.conf", "allow 127.0.0.1; deny all;\n")
        runner.query(root, expected=3, error_code="unsupported_include")
    runner.case("ambiguous_include_escape_rejected", escaped_include)

    def syntax_error(root: Path) -> None:
        write(root, "nginx.conf", "http { server { allow 198.51.100.7;\n")
        runner.query(root, command="validate", expected=2, error_code="parse_error")
    runner.case("source_parse_error", syntax_error)

    def source_budget(root: Path) -> None:
        write(root, "nginx.conf", "# padding beyond one allowed character\nhttp {}\n")
        runner.query(root, command="validate", extra=["--limits", "max_source_chars=1"],
                     expected=4, error_code="limit_exceeded")
    runner.case("individual_source_budget", source_budget)

    def total_budget(root: Path) -> None:
        main = "http {server {include a.conf;}}\n"
        child = "allow 198.51.100.7; deny all;\n"
        require(max(len(main), len(child)) <= 50 < len(main) + len(child), "total-budget fixture must isolate aggregate size")
        write(root, "nginx.conf", main)
        write(root, "a.conf", child)
        runner.query(root, command="validate", extra=["--limits", "max_total_chars=50,max_source_chars=50"],
                     expected=4, error_code="limit_exceeded")
    runner.case("total_source_budget", total_budget)

    def file_budget(root: Path) -> None:
        write(root, "nginx.conf", "http {server {include a.conf; include b.conf;}}\n")
        write(root, "a.conf", "allow 198.51.100.7;\n")
        write(root, "b.conf", "deny all;\n")
        runner.query(root, command="validate", extra=["--limits", "max_sources=2"],
                     expected=4, error_code="limit_exceeded")
    runner.case("distinct_file_budget", file_budget)

    def directory_budget(root: Path) -> None:
        write(root, "nginx.conf", "include parts/*.conf;\n")
        for name in ["a.conf", "b.conf", "c.conf"]:
            write(root, "parts/" + name, "")
        report = runner.query(root, command="validate", extra=["--limits", "max_directives=2"],
                              expected=4, error_code="limit_exceeded")
        require("Directory scan" in report["error"]["message"], "directory-entry budget must fail at the filesystem boundary")
    runner.case("directory_entry_budget", directory_budget)

    def node_budget(root: Path) -> None:
        write(root, "nginx.conf", "events {} http { server {} }\n")
        report = runner.query(root, command="validate", extra=["--limits", "max_directives=2"],
                              expected=4, error_code="limit_exceeded")
        require("Expanded nodes" in report["error"]["message"], "directive budget must bound expanded configuration nodes")
    runner.case("expanded_node_budget", node_budget)

    def include_budget(root: Path) -> None:
        write(root, "nginx.conf", "include a.conf;\n")
        write(root, "a.conf", "include b.conf;\n")
        write(root, "b.conf", "http {}\n")
        runner.query(root, command="validate", extra=["--limits", "max_include_depth=1"],
                     expected=4, error_code="limit_exceeded")
    runner.case("include_depth_budget", include_budget)

    def repeated_budget(root: Path) -> None:
        write(root, "nginx.conf", "http {server {include a.conf; include a.conf;}}\n")
        write(root, "a.conf", "allow 198.51.100.7;\n")
        runner.query(root, command="validate", extra=["--limits", "max_include_expansions=1"],
                     expected=4, error_code="limit_exceeded")
    runner.case("include_occurrence_budget", repeated_budget)

    def audit_budget(root: Path) -> None:
        write(root, "nginx.conf", "http {server {allow 198.51.100.1; allow 198.51.100.2; allow 198.51.100.3;}}\n")
        runner.query(root, command="audit", extra=["--limits", "max_audit_pairs=1"],
                     expected=4, error_code="limit_exceeded")
    runner.case("audit_pair_budget", audit_budget)

    def inherited_report_budget(root: Path) -> None:
        write(root, "nginx.conf", "http {server {allow 192.0.2.0/24; deny all; location /a {} location /b {} location /c {} location /d {}}}\n")
        report = runner.query(root, command="contexts", expected=4, error_code="limit_exceeded",
                              extra=["--limits", "max_directives=8"])
        require("report" in report["error"]["message"].lower(),
                "valid small input with repeated inheritance must be bounded before JSON expansion")
    runner.case("inherited_report_budget", inherited_report_budget)

    def unknown_option(root: Path) -> None:
        runner.execute(["validate", "does-not-exist.conf", "--root", str(root), "--format", "json", "--unknown"],
                       2, root=root, kind="error", error_code="unknown_option")
        runner.execute(["validate", "does-not-exist.conf", "--unknown"],
                       2, root=root, kind="argument_error", error_code="unknown_option")
    runner.case("unknown_cli_option", unknown_option)

    def invalid_probe(root: Path) -> None:
        runner.execute(["probe", "does-not-exist.conf", "999.0.0.1", "--root", str(root),
                        "--context", "http[1]", "--format", "json"],
                       2, root=root, kind="error", error_code="invalid_probe")
    runner.case("invalid_probe_before_file_io", invalid_probe)

    def symlink(root: Path) -> None:
        target = write(root, "target.conf", "deny all;\n")
        write(root, "nginx.conf", "http {server {include linked.conf;}}\n")
        try:
            (root / "linked.conf").symlink_to(target)
        except (OSError, NotImplementedError) as error:
            raise UnsupportedEnvironment(f"file symlinks unavailable: {error}") from error
        runner.query(root, command="validate", expected=3, error_code="unsupported_path")
    runner.case("file_symlink_rejected", symlink)

    def directory_link(root: Path) -> None:
        target = root / "target"
        write(root, "target/access.conf", "deny all;\n")
        write(root, "nginx.conf", "http {server {include linked/access.conf;}}\n")
        link = root / "linked"
        directory_alias(link, target)
        runner.query(root, command="validate", expected=3, error_code="unsupported_path")
    runner.case("junction_or_directory_symlink_rejected", directory_link)

    def linked_root(root: Path) -> None:
        target = root / "target"
        write(root, "target/nginx.conf", "http {server {allow 127.0.0.1; deny all;}}\n")
        link = root / "linked"
        directory_alias(link, target)
        runner.query(link, command="validate", expected=3, error_code="unsupported_path")
    runner.case("linked_input_root_rejected", linked_root)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cli-command-json", type=command_list, default=["node", "tools/moonnginx-access-audit.mjs"])
    parser.add_argument("--output", type=Path, default=Path("_build/ci/file-workflow.json"))
    options = parser.parse_args()
    output = options.output if options.output.is_absolute() else REPOSITORY / options.output
    output.parent.mkdir(parents=True, exist_ok=True)
    scratch_parent = REPOSITORY / "_build" / "ci"
    scratch_parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="file-workflow-", dir=scratch_parent) as temporary:
        scratch = Path(temporary).resolve()
        require(scratch.is_relative_to(scratch_parent.resolve()), "temporary cleanup target must remain in the test workspace")
        runner = Runner(options.cli_command_json, scratch)
        verify(runner)
        totals = {status: sum(case["status"] == status for case in runner.cases)
                  for status in ["passed", "failed", "skipped"]}
        report = {
            "schema_version": 1,
            "suite": "actual-file-cli-workflow",
            "status": "failed" if totals["failed"] else "passed",
            "platform": platform.system(),
            "python": platform.python_version(),
            "cli_command": options.cli_command_json,
            "totals": totals,
            "cases": runner.cases,
        }
        output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"File CLI checks: {totals['passed']} passed, {totals['failed']} failed, {totals['skipped']} skipped")
        for case in runner.cases:
            if case["status"] != "passed":
                print(f"{case['status']}: {case['name']}: {case['reason']}")
        print(f"Evidence: {output}")
        return 1 if totals["failed"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
