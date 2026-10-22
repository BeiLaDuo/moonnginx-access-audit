# 2026-10-22 请求回归版终审自查

## 总体判断

本轮围绕初审反馈实现真实 Nginx 配置访问行为回归，非仅换格式或修改申报措辞。本地 20 项最终验证命令全部通过，工程自查通过；完整技能终审仍有发包阻塞。命令见 `_build/ci/review-commands.json` 及各专项 JSON；CI 以当前提交的远端结果为准。不能保证主办方初审或验收结果。

完整技能终审暂不能标记通过：同名 Mooncakes 模块尚未发布。已准备 0.3.0 源码包；原有 BeiLaDuo/cidr-audit 的发布不代替当前模块。比赛报名和验收提交未代办。

## 提交前需要处理的问题

- `osc2026-guide` 的 Acceptance Review Checks 明确要求 “The project must already be published to mooncakes.io.”；当前是阻塞项，不能用测试成功掩盖。
- 仓库 AGENTS.md 要求发布 Mooncakes 及比赛提交分别取得后续授权。本次仅开发、测试、更新申报材料及已授权的 GitHub 同步，未擅自发布包或报名。

## 需要进一步确认的问题

- 技能最新 main 仍为 7cc68879a835210524d9c5537ba45993d8aaec38（2026-09-03），内置章程只覆盖原大赛和八月，不将其旧赛期条件直接套用于十月。
- 十月官网及官方 src/App.tsx 显示 2026-10-31 报名/验收截止；正式飞书章程本次通过网页工具仍无法读取，浏览器读取超时，不将他人引用当作直接核实。
- 原作品、旧 CIDR 基础与本期新增分别声明，不将仓库总行数当作本期新增。最终项目意义、贡献归属与重复性由主办方判断。

## 实质变化与证据

- MoonBit 新增监听/Host/平级 location 选路、精确区间差异和全 CIDR 期望；CLI 新增 request/diff/expect。按端点独立匹配前后配置，不按 ordinal 配对。
- 真实 Nginx 1.30.6：两份配置均 nginx -t 成功，14 次 HTTP 请求与预测一致；127.0.0.3 从原 403 变成新 200，验证新增放行并非格式问题。新旧 CLI 各 13 个文件场景结果一致。
- 新性质测试独立穷举 24 组策略 × 256 个地址，校验区间是否遗漏/重复、方向及精确计数。样本数量不冒充测试块数量。
- 核心模型只对指定初始请求上下文的 IPv4 地址模块负责，URI、范围及 unsupported 条件写入文档。认证、重写、TLS/SNI、IPv6、内部重定向和完整最终响应不作保证。
- Apache-2.0、上游解析器与 core 的 LICENSE/NOTICE 保留。新能力未复制 MoonPolicyProof 代码；对算法目标交集和 Nginx 专有新增均有说明。

## 已检查的证据

本地工具链 moonc v0.10.16+b1a0e846e。JS、Wasm、Wasm GC 每目标 185 项测试通过，`moon check --target all --deny-warn`、默认构建、fmt/info、两个消费示例通过。真实文件 29 通过/1 符号链接权限跳过（junction 已测）；dist 对照 30 场景、CI 示例 5 场景、SARIF 10 场景、旧 Nginx 12 个 HTTP/3 个错误输入、新请求回归 13 场景 × 2 个产物及 14 个实际 HTTP 对照均通过。实际 Moon 源码包许可/README 链接 51 项检查通过。

有效 MoonBit 实现 6,556 行，不含测试、示例、依赖、生成接口、嵌入 JS 和兼容导出声明；测试 2,268 行。相比重做前 5,641 行净增 915 行有效实现，未将整个既有基础冒充本次新增。Windows native 缺少 C 编译环境，未声称本地运行通过；Linux native 由远端 CI 验证。修复了一次文档生成顺序导致的 README 链接失败，最终完整检查已重新通过，首轮原始记录单独保留。

公开 Mooncakes 目录 2026-10-22 共 3,226 条，当前模块精确匹配为零，支持“尚未发布”的判断。生成接口已检查：新增 RequestTarget、RoutingDirective、AccessChange、AccessComparison 和相关函数；Options/AccessContext 增加字段，0.3.0 直接构造这些公开结构的调用方需适配，建议从 parse_args/analyze_nginx_sources 取得实例；根 CIDR API 保留。

源码基础：71594d32cd6d155d0469221346f6f856b3a88924。参赛者与新增提交身份按用户确认信息设置；保留最初两次提交及之后全部历史，不重写旧仓库。

## 建议改进

优先扩展由真实 Nginx 对照支持的路由子集，保留失败关闭。后续可增加逐路径回归清单、更多选路边界及正式发布后的独立消费测试；不以凑行数、提交数或仅增加输出格式作为目标。
