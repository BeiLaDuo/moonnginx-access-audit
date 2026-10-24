// Learn more about moon.mod configuration:
// https://docs.moonbitlang.com/en/latest/toolchain/moon/module.html

name = "BeiLaDuo/moonnginx-access-audit"

version = "0.4.0"

import {
  "LuoYunxin1/moonnginx@0.2.0",
}

readme = "README.md"

repository = "https://github.com/BeiLaDuo/moonnginx-access-audit"

license = "Apache-2.0"

keywords = [ "cidr", "ipv4", "network", "audit", "security", "nginx", "cli" ]

preferred_target = "wasm-gc"

description = "MoonBit Nginx security configuration scanner with source-aware findings, CI gates and IPv4 access regression"
