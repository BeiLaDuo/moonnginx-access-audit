# 十月扩展查重与定位（2026-10-22）

本轮重新核对 MoonCakes 公开目录的 3,226 条元数据和相近 GitHub 项目的 README/API。当前模块精确匹配为零；既有 cidr-audit 的发布不能代替它。检索不能证明不存在未发布、私有或关键词缺失的相近项目。

| 既有项目 | 交集与处理 |
|---|---|
| [moonnginx](https://github.com/LuoYunxin1/moonnginx) 0.2.0 | 已有配置解析/查询/静态校验，直接依赖，不重复编写 lexer/parser |
| [MoonPolicyProof](https://github.com/hutingyu-nuist/moonpolicyproof) 0.1.1 | 已有五元组语义差异、反例与断言；其输入为自定义无状态策略，要求调用者自行映射设备配置。通用差异/断言思想不算本项目独占创新 |
| [MoonCIDR Audit](https://github.com/BeiLaDuo/mooncidr-audit) 0.1.2 | 自有旧项目，提供地址和有序规则基础；旧实现不计为本次新增 |
| [MoonCIDR](https://github.com/lzh123411/21341) | 已有 IPv4 ACL/重叠与基础 IPv6，地址解析和普通审计不构成新价值 |
| [moonproxy](https://github.com/1726914517-spec/moonproxy) 0.2.0 | L7 代理运行时、路由/负载均衡；本项目是离线 Nginx 快照回归工具，不实现代理服务 |

## 初审反馈后的实质调整

原先将审计输出格式、文件 CLI 和静态诊断作为主要卖点，不足以说明为何需要在 nginx -t 之外再使用一个工具。0.3.0 围绕维护者意图实现：

1. 直接加载真实 Nginx 配置与 include；依据地址/端口、Host、路径选路，无需先手工转换为通用策略格式。
2. 前后独立选取上下文，处理 server/location 重排与整表继承变化，避免按序号误配。
3. 在地址模块有限模型内精确计算差异，返回区间、数量、原规则来源、继承来源和可复现反例。
4. 将禁止扩大/缩小访问、范围等价及整网段预期作为可执行 CI 门禁。
5. 以两份均通过 nginx -t 的配置和真实 HTTP 403→200 变化展示额外价值；不把语法错误当成核心案例。

与 MoonPolicyProof 的算法目标存在交集；本项目新增的是 Nginx 专有配置语义与适配工作流，不宣称“生态中没有差异分析工具”。当前支持边界详见 [请求回归说明](request-regression.md)。仅换名、只增加报告格式或重复旧 CIDR 功能不计为本轮贡献。

## 2026-10-24 安全配置检查扩展

按第二轮反馈，以 Gixy-Next 为主要对标，新增 15 类独立 MoonBit 安全检查；具体上游交集、实现子集和缺口见 security-scanner.md。不是声称通用漏洞发现思想首创，而是为 MoonBit 提供可复用的配置扫描库与 CLI、继承/来源处理和可复现测试。Gixy-Next 本身为 MPL-2.0，未复制其实现或测试。12 组风险/修复案例与其 0.9.0 真实对照；本期 net 新增以代码统计和 Git diff 为准。补充公开 Mooncakes 索引检索 gixy、nginx security 未找到可确认的同类成熟扫描器；索引检索不构成全生态无重复的保证。

