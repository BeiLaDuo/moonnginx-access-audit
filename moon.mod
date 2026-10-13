// Learn more about moon.mod configuration:
// https://docs.moonbitlang.com/en/latest/toolchain/moon/module.html

name = "BeiLaDuo/cidr-audit"

version = "0.2.0"

import {
  "LuoYunxin1/moonnginx@0.2.0",
}

readme = "README.md"

repository = "https://github.com/BeiLaDuo/mooncidr-audit"

license = "Apache-2.0"

keywords = [ "cidr", "ipv4", "network", "audit", "security", "nginx", "cli" ]

preferred_target = "wasm-gc"

description = "Offline Nginx HTTP IPv4 access-rule auditing, bounded includes and a real-file CLI in MoonBit"
