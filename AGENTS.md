# Project Instructions

This is MoonNginx Access Audit, created in BeiLaDuo/beiladuo. Preserve its
two initial commits. The original MoonCIDR Audit base belongs to a separate
repository and must not be pushed to or renamed as part of this project.

## Identity

- Do not reuse identity information from any other project.
- Known GitHub account: `BeiLaDuo`.
- Current application participant name: `高本乾`.
- New Git author and committer name: `高本乾`.
- User-confirmed contact and new commit email: `3346147448@qq.com`.
- Existing Mooncakes package: `BeiLaDuo/cidr-audit`.
- The user authorized pushing this development update to GitHub. Do not
  register the project, publish Mooncakes, or create a remote release unless
  the user later asks for it.
- Use the confirmed identity for the application and new Git commits. Do not
  add unrelated personal details or information from another project.

## Validation

Before reporting the project as ready, run:

```powershell
moon info
moon fmt
moon check
moon build
moon test
moon package --list
```

After `moon fmt`, inspect generated public API files such as
`pkg.generated.mbti` when present.

## Scope

MoonNginx Access Audit is a MoonBit Nginx security configuration scanner and
IPv4 access regression library. On 2026-10-23 the user explicitly expanded
the scope to important security checks benchmarked against Gixy-Next.
Keep static security scanning independent from the conservative request router:
nested/regex/TLS configurations can be scanned without claiming full behavioral
equivalence. Document each rule's evidence, limits and remediation; test risk
and repaired configurations, and use real Nginx where behavior is observable.

Avoid adding live network access, firewall control, packet capture, or
cloud-provider credentials to the core project.
