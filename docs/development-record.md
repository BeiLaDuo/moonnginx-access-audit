# 实质开发记录

## 2026-10-13 首次交付

正确仓库由用户创建为 BeiLaDuo/beiladuo，保留原有两次提交。
该次交付在上传基线 1fc7d9c 之后新增十四次实质提交，当时共十六次。
新提交作者和提交者为高本乾、3346147448@qq.com。

| 新增序号 | 实际内容 |
|---:|---|
| 1 | 排除构建产物并规定可移植的源码换行 |
| 2 | 补全全新环境的 MoonBit、实际文件与 Nginx CI |
| 3 | 支持 -- 后的字面配置文件名 |
| 4 | 按 JSON/Markdown 格式报告参数错误 |
| 5 | 文件读取前校验 IPv4 probe 地址 |
| 6 | 拒绝输入根目录的符号链接和 junction |
| 7 | 对照新构建与交付 CLI 的实际文件行为 |
| 8 | 增加安全、警告、风险和未支持策略的 CI 门禁演示 |
| 9 | 补全维护路线、实际开发和验证文档 |
| 10 | 修复全新 CI 的 Mooncakes 索引初始化 |
| 11 | 区分本地 Windows 与先前 Ubuntu 的验证证据 |
| 12 | 改用本仓库实际上传提交作为可复现统计基线 |
| 13 | 无配置文件时支持 audit/probe 等子命令帮助 |
| 14 | 统一新项目、包名、CLI、公开接口和申报材料，重新验证 |

不存在空提交。首轮已上传内容不被重复记为上传后的新增功能。
当前有效规模、测试结果和远端结论见测试报告及当前 Actions。


## 2026-10-20 按申报方向继续开发

本轮在已交付版本 7622a31 之上增加三个实质提交，保留所有既有历史：

| 阶段 | 实际变化及验证 |
|---|---|
| SARIF 功能 | MoonBit 导出 SARIF 2.1.0，保留规则来源与上下文，编码 UTF-8 URI，标记未成功分析；五项新增行为测试和十个实际 CLI 场景对照 |
| 许可与工具链 | 保留 core 完整 NOTICE，核对两个依赖组件的许可及哈希；检查实际源码包包含原始法律材料；同步 MoonBit 0.10.16 生成接口 |
| 文档与验收 | 重写面向 Nginx 场景的 README、CMD 命令和边界，增加贡献指南、官方 GitHub 要求索引，更新一页申报材料与验证记录 |

本地有效 MoonBit 实现 5,641 行（不含测试、示例、依赖、嵌入 JavaScript
和兼容声明）。167 项测试在三个目标通过；真实 Nginx 1.30.6 的十二个
HTTP 场景通过。SARIF 实际行为与原 JSON 报告逐项一致，七份实际报告
通过独立 Schema 校验。CI 增加 SARIF 及源码包许可检查，远端结论查看
当前提交的 Actions。旧阶段的成功不代替本轮验证。

## 2026-10-22 初审反馈后的实质重做

在 71594d3 基线上增加请求级配置回归能力：Nginx 监听/Host/平级 location 选择、与上下文序号无关的双快照映射、精确区间差异、全 CIDR 期望及三个文件 CLI 命令。核心算法和门禁均为 MoonBit；Node 继续只承担文件/进程参数边界。

测试包括独立整数区间解释器穷举、来源与继承检查、预算失败与路由不确定性，以及两份 nginx -t 均合法的实际配置和 14 次真实 HTTP 对照。README 和申报材料围绕访问意图重写。旧 CIDR、既有解析器和已实现的 SARIF 不计为这次新增。当前验证和未完成事项见 final-review-2026-10-22.md。

## 2026-10-24 security scanner

Added 15 independently implemented static HTTP security checks benchmarked against Gixy-Next, an independent security CLI, source-aware remediation reports, explicit partial coverage, risk/repair files, real Nginx HTTP oracles and pinned external benchmark CI. This follows the user's scope expansion; original CIDR code and the previous access-regression work remain attributed separately. Added a final report-budget guard for main-context findings and a regression test. No Mooncakes publication or contest submission was performed.

