"""Compare independently authored risk/repair cases with Gixy-Next 0.9.0.

Install the reference separately: python -m pip install gixy-next==0.9.0
It is not a runtime dependency. Only selected local static plugins are run.
No configuration is sent to a remote scanner. No upstream fixtures are copied.
"""
from __future__ import annotations

import argparse
import importlib.metadata
import json
from pathlib import Path
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
FRESH = ROOT / "_build/js/release/build/cmd/nginx-cli/nginx-cli.js"

# Each pair changes the relevant risk, not just whitespace or formatting.
CASES = [
    ("alias_traversal", "location /downloads { alias /srv/public/; }", "location /downloads/ { alias /srv/public/; }"),
    ("add_header_redefinition", "add_header X-Frame-Options DENY; location /assets/ { add_header Cache-Control public; }", "add_header X-Frame-Options DENY; location /assets/ { add_header Cache-Control public; add_header X-Frame-Options DENY; }"),
    ("host_spoofing", "location / { proxy_set_header Host $http_host; proxy_pass http://127.0.0.1:9000; }", "location / { proxy_set_header Host backend.example; proxy_pass http://127.0.0.1:9000; }"),
    ("ssrf", "location / { proxy_pass http://$arg_target; }", "location / { proxy_pass http://backend.example$request_uri; }"),
    ("return_bypasses_allow_deny", "location /private/ { deny all; return 200 internal; }", "location /private/ { deny all; root /srv/www; }"),
    ("allow_without_deny", "location /private/ { allow 192.0.2.0/24; }", "location /private/ { allow 192.0.2.0/24; deny all; }"),
    ("filesystem_root_exposure", "location / { root /; }", "location / { root /srv/public; }"),
    ("add_header_content_type", "location / { add_header Content-Type text/plain; }", "location / { default_type text/plain; }"),
    ("add_header_multiline", 'location / { add_header X-Demo "first\nsecond"; }', 'location / { add_header X-Demo "first second"; }'),
    ("valid_referers", "location / { valid_referers none blocked example.test; }", "location / { valid_referers example.test; }"),
    ("error_log_off", "error_log off; location / { root /srv/public; }", "error_log logs/error.log warn; location / { root /srv/public; }"),
    ("version_disclosure", "server_tokens on; location / { root /srv/public; }", "server_tokens off; location / { root /srv/public; }"),
]


def run(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(args, cwd=cwd, capture_output=True, text=True,
                          encoding="utf-8", errors="replace", timeout=45)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path("_build/ci/gixy-comparison.json"))
    args = parser.parse_args()
    version = importlib.metadata.version("gixy-next")
    if version != "0.9.0":
        parser.error(f"Expected pinned reference 0.9.0; found {version}")
    parent = ROOT / "_build/ci"
    parent.mkdir(parents=True, exist_ok=True)
    rows = []
    with tempfile.TemporaryDirectory(prefix="gixy-comparison-", dir=parent) as temporary:
        scratch = Path(temporary).resolve()
        assert scratch.is_relative_to(parent.resolve())
        for rule, risk, repair in CASES:
            for label, body in [("risk", risk), ("repair", repair)]:
                config = scratch / f"{rule}-{label}.conf"
                config.write_text("events {}\nhttp { server { listen 8080; server_name example.test; " + body + " } }\n", encoding="utf-8")
                ref = run([sys.executable, "-c", "from gixy.cli.main import main; main()", "--tests", rule, "--format", "json", str(config)], scratch)
                own = run(["node", str(FRESH), "security", config.name, "--root", str(scratch), "--format", "json", "--strict"], ROOT)
                try:
                    reference = json.loads(ref.stdout)
                    actual = json.loads(own.stdout)
                    # Gixy reports a list; our report retains diagnostics and scope.
                    ref_found = any(f.get("plugin") == rule for f in reference)
                    own_code = {"ssrf": "proxy_pass_variable_authority", "version_disclosure": "server_tokens"}.get(rule, rule)
                    own_found = any(f.get("code") == own_code for f in actual["findings"])
                    expected = label == "risk"
                    passed = (ref.returncode in (0, 1) and own.returncode in (0, 1)
                              and ref_found == expected and own_found == expected
                              and actual.get("complete") is True)
                except (ValueError, KeyError, TypeError, AttributeError):
                    ref_found = own_found = None
                    passed = False
                rows.append({"rule": rule, "case": label, "passed": passed,
                             "gixy_detected": ref_found, "moonbit_detected": own_found,
                             "gixy_exit": ref.returncode, "moonbit_exit": own.returncode,
                             "gixy_stdout": ref.stdout, "gixy_stderr": ref.stderr,
                             "moonbit_stdout": own.stdout, "moonbit_stderr": own.stderr})
    report = {"suite": "gixy-reference-comparison", "reference_version": version,
              "scope": "12 selected rule risk/repair pairs; not full Gixy parity or full Nginx safety",
              "cases": rows, "passed": sum(x["passed"] for x in rows),
              "failed": sum(not x["passed"] for x in rows)}
    out = args.output if args.output.is_absolute() else ROOT / args.output
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Gixy comparison: {report['passed']} passed, {report['failed']} failed")
    for row in rows:
        if not row["passed"]:
            print(f"FAILED {row['rule']} {row['case']}: Gixy={row['gixy_detected']} MoonBit={row['moonbit_detected']}")
    return int(report["failed"] != 0)


if __name__ == "__main__":
    raise SystemExit(main())
