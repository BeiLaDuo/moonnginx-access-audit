# 十月要求核对与验收索引

最新终审自查见 [2026-10-22 报告](final-review-2026-10-22.md)。该报告区分官网已确认要求、
终审技能标准与尚未取得正文的飞书章程，不等同于主办方验收结果。

核对日期：2026-10-20。项目：**MoonNginx Access Audit**；参赛者：高本乾；
联系方式：3346147448@qq.com。正确仓库 ID：**1416877460**。

## 官方 GitHub 依据

读取了主办方 [Hackathon2026 的 src/App.tsx](https://github.com/moonbitlang/Hackathon2026/blob/main/src/App.tsx)，
核对文件 Blob：`e27e1d752b573ad88dccf6da681a1492c7dcfe0c`。
官网对应的要求强调：MoonBit 为主要语言、公开可追溯开发、README 和
可运行示例及测试、既有项目的当期实质新增、认可的开源许可和来源、
参赛者对 AI 辅助成果的理解与责任。单纯换名、拆分或简单修改不算有效成果。

GitHub 页面显示十月报名及验收截止 2026-10-31；“最多 3 次”指报名表
提交，不是 Git 提交次数。用户提出的 4,000 行有效实现和实质提交目标
另行执行，不把它们说成官网列出的硬性验收数字。

官方页面链接的[正式飞书章程](https://bxup9uklfcb.feishu.cn/wiki/Dx4Bwd6D1i3GfHkajQCcF7SznEd)
本次正常 HTTPS 访问返回登录页面，未取得正文，附加细则不能据旧八月通知推定。
官网还明确要求参赛者加入赛事群，并把群昵称改为本人的 GitHub ID；本项目为
`BeiLaDuo`。报名、进群及最终材料由用户处理；本次开发没有代为报名、提交验收、
发布 Mooncakes 或创建 Release。

补充线索：另一项目于 10 月 20 日保存的[公开核对记录](https://github.com/William206920/Splict-easy/blob/e41addfb49de687475dad069560380fb991ff7b3/docs/LANGUAGE_AUDIT.md)
称，同一正式章程列有 Mooncakes 发布要求，且其时间表仍写 10 月 24 日。
这是第三方阅读记录，未经本次直接取得的官方正文确认，不能当作已核实的十月条款。
因此发包条件和日期差异均保留为待核实事项，不能因为官网简表未列发包就认为无需发布。

## 证据对应

| 要求 | 本项目可复核内容 |
|---|---|
| MoonBit 相关性 | `nginx/` 配置语义、`cli/`、`fileio/` 分层；复用已有 moonnginx 解析器；消费示例可独立运行 |
| 实质新增 | 10 月 22 日新增 MoonBit 请求选路、精确访问差异和整个 CIDR 期望；两份 nginx -t 合法的配置与实际 HTTP 变化对照；SARIF 为此前已完成能力 |
| 可运行 | README 的 CMD 命令；`examples/regression` 双快照文件和可复用库示例；保留既有审计示例 |
| 质量和测试 | MoonBit 行为测试；真实文件、交付脚本对照、SARIF 对照和真实 Nginx HTTP 测试；当前 CI 配置 |
| 开源材料 | Apache-2.0、项目 NOTICE、第三方原始 LICENSE/NOTICE、版本和哈希台账、实际源码包检查 |
| 过程可追溯 | 保留原有两次提交；后续按功能提交，CHANGELOG 和开发记录说明实际新增 |
| 边界可解释 | 仅建模 HTTP IPv4 地址规则；结构 selector 不等于 URL 路由；三态结果不等于完整鉴权 |

## 复现与待办

按 README 执行构建、测试和 `moon package --list`，再执行
`python tools/verify_repository.py --check-package`。JSON 证据写入
`_build/ci/`；远端结论以[对应提交的 Actions](https://github.com/BeiLaDuo/moonnginx-access-audit/actions)
为准，不能用旧提交的成功代替当前结果。

- [x] 核对公开 GitHub 要求及申报方向。
- [x] 原有基础、上游依赖和本轮工作分别说明。
- [x] 提供 README、CMD 用法、实际示例、CI 和许可材料检查。
- [ ] 用户核对正式章程的额外条件及截止日期，完成入群和报名/验收材料提交。
- [ ] 核实正式验收的 Mooncakes 发布要求；当前未发布。真实发布需用户另行授权。
