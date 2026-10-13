# October 2026 development scope

Baseline: `414e476efa463737164e5d5e1b2345bccd01148f`, module version 0.1.2.

Version 0.2.0 adds an offline Nginx HTTP IPv4 address-rule adapter and a real-file command-line workflow. It builds on the existing CIDR library and the Apache-2.0 `LuoYunxin1/moonnginx@0.2.0` directive-tree codec. Neither the previous IPv4 implementation nor the upstream parser is presented as new work.

The adapter models ordered rules, contextual inheritance, source provenance, an explicit offline include bundle, and bounded analysis. Structural context selectors avoid guessing Nginx URL routing. An unmatched address rule means the access module imposes no address restriction, not that a complete request is authorized.

No network access, server configuration deployment, firewall changes, cloud credentials, or live Nginx process control belong in the library. A separate test tool may start its own temporary Nginx service to check the supported semantics.

The user authorized synchronizing the development update to the BeiLaDuo/mooncidr-audit GitHub repository. Registration, Mooncakes publication, and remote releases remain outside that authorization. The confirmed application participant and new Git author/committer are 高本乾, with contact and new commit email 3346147448@qq.com. The seven baseline commits remain unchanged.

Official October rules were checked at https://github.com/moonbitlang/Hackathon2026/blob/main/src/App.tsx on 2026-10-13. The displayed registration and acceptance deadline is 2026-10-31; existing projects may enter with substantive new work. The user additionally requires at least 4,000 effective MoonBit implementation lines and at least fourteen meaningful commits. Code, tests, dependencies, and previous work are counted separately.
