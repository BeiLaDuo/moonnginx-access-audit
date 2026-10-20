# Contributing

Keep changes within offline Nginx HTTP IPv4 access analysis and reusable
MoonBit APIs. Describe the input that currently fails, intended behavior,
supported boundary, and a runnable example. A new output format must preserve
gate decisions, error handling, provenance and resource limits.

Use meaningful commits describing a functional change or a reproducible
maintenance improvement. Preserve existing authorship and third-party notices.
Do not include internal production configurations, credentials, downloaded
executables, dependency caches or generated build directories.

Before submitting:

1. Record `moon version --all`, Node.js, Python and the operating system.
2. Run `moon info` and `moon fmt`, then inspect public interface changes.
3. Run the relevant behavior tests and the build/check commands in README.
4. Rebuild and refresh the shipped CLI when its behavior changes. Run both the
   existing file/distribution tests and any feature-specific integration tests.
5. Run `moon package --list` followed by
   `python tools/verify_repository.py --check-package` to inspect retained legal
   materials in the actual source package.
6. Update README, examples, CHANGELOG and the applicable scope documentation.
   State failures and platform skips explicitly. Link CI for the exact commit.

AI assistance is allowed. Contributors must be able to explain the design,
source provenance, failure behavior and tests. AI output does not establish
third-party permission, correctness or originality. Reused implementations
need their actual source, license and required notices.

For verification tools, Python 3.10+ and its standard library are sufficient.
The optional independent SARIF Schema validation used during development is
not a runtime dependency or a substitute for the project's behavior tests.
