// Learn more about moon.mod configuration:
// https://docs.moonbitlang.com/en/latest/toolchain/moon/module.html

name = "BeiLaDuo/moonnginx-access-audit"

version = "0.3.0"

import {
  "LuoYunxin1/moonnginx@0.2.0",
}

readme = "README.md"

repository = "https://github.com/BeiLaDuo/moonnginx-access-audit"

license = "Apache-2.0"

keywords = [ "cidr", "ipv4", "network", "audit", "security", "nginx", "cli" ]

preferred_target = "wasm-gc"

description = "Nginx configuration access regression: request routing, exact IPv4 semantic differences and whole-subnet CI expectations in MoonBit"
