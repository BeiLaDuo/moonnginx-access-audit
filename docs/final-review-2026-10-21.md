# 2026-10-21 十月赛终审自查

项目：MoonNginx Access Audit。公开仓库：[BeiLaDuo/moonnginx-access-audit](https://github.com/BeiLaDuo/moonnginx-access-audit)，ID **1416877460**，默认分支 `main`。申请人及后续提交作者：高本乾；联系方式沿用申报书。本轮检查基线为 `f3993aa5506b66b37df9dff0a5a1abc148acd58f`，源码与远端一致；本报告及两处文字修正不改变运行代码。

## 总体判断

**工程验证通过；按照 osc2026-guide 的终审标准，当前尚未全部通过，明确缺项是本项目未发布 Mooncakes。**

这不是主办方的正式审核结论。十月官网的公开要求已经直接复核；详细飞书章程正文仍未取得，不能声称已经核对其最新全文。技能内置规则适用于 OSC2026 和八月黑客松，本报告没有把旧赛制的日期、Gitlink、申报书 30 行或最低提交数直接套用到十月。

## 十月最新公开要求与来源边界

2026-10-21 直接读取[十月官网](https://moonbitlang.github.io/Hackathon2026/)对应的[官方页面源码](https://github.com/moonbitlang/Hackathon2026/blob/main/src/App.tsx)，Blob `e27e1d752b573ad88dccf6da681a1492c7dcfe0c`：

- 报名和验收截止公开写为 **2026-10-31**；十月最多三次指报名表提交，不是 Git 提交。
- 公开验收项包括 MoonBit 主实现、公开可追溯开发、README/示例/测试、本期实质工作、许可证及来源、参赛者理解和负责 AI 辅助成果。
- 已有项目可以参与，但简单改名、重复提交或只做简单修改不计有效成果。
- 必须加入赛事群，并将群昵称改为本人的 GitHub ID；本项目为 `BeiLaDuo`。
- 最终执行口径以正式章程和官方通知为准。

[正式章程链接](https://bxup9uklfcb.feishu.cn/wiki/Dx4Bwd6D1i3GfHkajQCcF7SznEd)仍无法取得正文：公开网页工具不可访问，正常 HTTPS 请求遇到登录重定向循环；没有登录用户账户或绕过访问控制。此前第三方阅读记录提及不同日期及发包要求，但不能代替本次取得的官方原文。官网简表没有明列 Mooncakes 发包条件，也不能据此推断详细章程没有该条件。

## 提交前需要处理的问题

### 1. 终审技能的发包标准尚未满足

使用的技能：[Milky2018/osc2026-guide](https://github.com/Milky2018/osc2026-guide/blob/7cc68879a835210524d9c5537ba45993d8aaec38/SKILL.md)，本机对应文件为 `C:/Users/lenovo/.codex/skills/osc2026-guide/SKILL.md`。其 Acceptance Review Checks 明确写：

> The project must already be published to mooncakes.io.

模块声明是 `BeiLaDuo/moonnginx-access-audit@0.2.0`。本轮只读检索官方注册表共 **3,188** 条模块记录，精确匹配为零；`moon search moonnginx-access-audit --limit 10 --json` 也返回空结果。旧包 `BeiLaDuo/cidr-audit@0.1.2` 存在，但其模块名和项目范围均不同，不能代替本项目发布。[官方注册表](https://mooncakes.io/api/v0/modules)

`moon package --list` 已成功，实际源码包的许可材料核对通过；本地打包、GitHub 推送或 CI 成功都不等于注册表已公开发布。若按该技能标准提交最终验收，须先补齐真实发包；十月是否强制这一项，仍以其正式章程为准。本轮没有执行发布、报名或最终验收提交。

### 2. 两处文档准确性问题已修正

- `docs/measurement-baseline.md` 把旧基础误称为 MoonNginx Access Audit v0.1.2，现恢复为 **MoonCIDR Audit v0.1.2**，明确旧仓库与本项目的来源关系。
- `THIRD_PARTY.md` 的 Python 依赖说明现明确限定验证与统计脚本；可选 PDF 辅助工具实际使用 Pillow 和本地字体，已单独列明，不作为核心 CLI 或 Markdown 申报书的依赖。

## 已检查的证据

| 终审检查项 | 结果与证据 |
|---|---|
| 有效 MoonBit 工程 | `moon.mod` / `moon.pkg` 被 0.10.16 工具链识别；默认检查、构建和运行成功 |
| 严格检查与接口 | `moon info`、`moon fmt`、默认及四目标 `moon check --deny-warn` 通过；生成接口无差异 |
| 本地测试 | 默认 Wasm GC、JavaScript、Wasm 每目标 **167** 项通过，0 失败 |
| 当前代码的 Linux CI | 基线提交对应 [CI 39435946220](https://github.com/BeiLaDuo/moonnginx-access-audit/actions/runs/39435946220)成功，四目标各 167 项，含 native；此记录实际运行于 10 月 20 日，本轮重新读取确认 |
| 实际文件与交付 CLI | Windows 文件场景 29 通过、0 失败、1 项符号链接权限跳过；新构建与交付脚本每端 30 场景一致；上述 Linux CI 文件场景 30 通过、无跳过 |
| 真实 Nginx | 本轮实际启动自建临时服务，12 个 HTTP 场景及 3 个错误输入通过，结束后关闭自建服务 |
| CI 示例与 SARIF | 5 个策略门禁示例、10 个实际 SARIF/JSON 对照场景通过 |
| 实际源码包与许可 | Apache-2.0、NOTICE、第三方 LICENSE/NOTICE、版本与哈希台账；47 项检查通过 |
| 代码规模 | 5,641 行有效 MoonBit 实现，79 行兼容声明另计；测试、示例、依赖、生成接口及嵌入 JS 不计入实现门槛 |
| 既有基础与新增 | 公开说明旧 CIDR 基础及 moonnginx 解析依赖；相对上传基线的有效实现差值为 232 行，不把项目总规模全称为本轮新写 |
| 开发与身份 | 检查时 20 次提交，原始 2 次保留；后续 18 次作者/提交者符合用户确认身份且有实际文件改动；当前分支与公开默认分支一致 |
| 仓库与说明 | 构建、缓存和临时文件未被跟踪；`dist` 为 README 明确提供的可执行交付物；20 个本地 Markdown 链接存在 |
| 来源与明显敏感文件 | 未发现已选凭据格式或被跟踪的凭据文件；此为有限模式检查，不宣称穷尽所有秘密或版权问题 |

申报书在 `docs/submission-application-one-page.md`。其承诺的有序访问规则、整表继承、受限 include、来源位置、四个 CLI 子命令、结构化报告及 SARIF 均有对应实现和实际验证；完整请求路由、IPv6、组合鉴权并未列为已交付能力。核心分析留在 MoonBit，宿主文件接口分层，属于有实际分析能力的扩展项目。

本轮 `moon search nginx --limit 15 --json` 返回 moonnginx、旧 cidr-audit 和 moonproxy。moonnginx 提供配置树解析，本项目直接复用；moonproxy 是服务运行时，侧重实际反向代理；旧 CIDR 与 MoonPolicyProof 的交集及差异已有说明。有限检索没有发现必须直接替代本项目的同款成熟库，但不能保证全生态不存在未发布或关键词不同的相近项目。

## 需要进一步确认的问题

1. 飞书最新章程全文与官方通知：尤其最终成果、报名和审核的截止口径及 Mooncakes 条件。
2. 本人是否已加入赛事群、群昵称是否为 BeiLaDuo，以及报名/初审/最终验收回执；本地代码不能证明手续完成。
3. 参赛者能否解释整表继承、首条匹配、三态地址结果、include 限制、资源预算和测试方法。文档能辅助理解，不能替本人证明掌握情况。

## 建议改进与可选环境建议

- 把本项目真实发包及公开包的全新消费者安装复验作为后续交付事项；准备好的源码 ZIP 不替代公开注册表验证。
- 本地 Windows 缺少 native 所需的 MSVC/Windows SDK，原生结果由 Linux CI 提供，不标成本机已测。
- MoonBit 工具链为 0.10.16，高于技能建议的 0.10.7；没有因审查要求升级工具链。`moonbitlang/skills` 当前未安装，属于可选开发辅助，不影响项目运行和本次检查。

完整命令、JSON 证据和注册表快照单独保存在本机 `outputs/2026-10-21-终审/`。本报告为本地技能自查，不能当作主办方验收通过证明。
