# 2026-10-29 验收九项逐条检查

## 总体判断

按用户本次提供的验收指南核对：第 1–7 项、第 9 项在声明功能范围内满足，
第 8 项尚未满足。因此当前不能标记全部验收条件完成。本文采用这九项作为十月
标准；osc2026-guide 只用于工程自查，不套用其旧八月日期、Gitlink 或旧赛程。
主办方是否通过验收仍以其审查为准。

| 项目 | 结果 | 可复核证据 |
|---|---|---|
| 1. MoonBit 为主、moonc >=0.10.16 | 满足 | 7,380 行有效 MoonBit 实现；本地 moonc v0.10.16+b1a0e846e；新 tools/check_toolchain.py 与 CI 强制检查最低版本 |
| 2. 公开 GitHub、清晰提交 | 满足 | BeiLaDuo/moonnginx-access-audit，仓库 ID 1416877460，公开，默认 main；开发历史保留，新作者身份高本乾 |
| 3. 结构及声明的核心功能 | 满足声明范围 | 根 CIDR、nginx 分析、cli、fileio 分层；15 类静态安全检查、访问回归和明确不完整诊断；没有声称完整 Gixy 或任意配置行为等价 |
| 4. README 可复现 | 满足，已补齐 | 添加 git clone/CD、明确编译器下限及检查命令；已有 Node 启动、源码构建、预期退出码、真实文件例子和范围说明 |
| 5. CI 检查/构建/测试 | 满足 | .github/workflows/ci.yml 含 check/build/test --target all --deny-warn、工具链下限、示例、文件、真实 Nginx、Gixy、包检查；最新提交结果单独留证 |
| 6. 可运行示例 | 满足 | examples/nginx、examples/regression 均 moon run 成功；security 风险/修复文件 CLI 可执行 |
| 7. 核心功能测试 | 满足 | 本地 JS/Wasm/Wasm GC 每目标 213 项通过；26 个安全文件场景/产物；真实 Nginx 安全 8 次、回归 14 次 HTTP；Gixy 24 个选定结果一致 |
| 8. 发布 Mooncakes | 未满足 | 2026-10-29 公开注册表 3,426 条，模块 BeiLaDuo/moonnginx-access-audit 精确匹配为空；0.4.0 已打包但未上传 |
| 9. OSI 开源许可证及来源 | 满足已检查材料 | 根 Apache-2.0；parser/core LICENSE、NOTICE 与清单保留；53 项许可/README/实际包检查通过。Gixy-Next MPL-2.0 为外部对标，未复制其代码或测试 |

## 已检查的证据

- 21 项最终本地命令退出码全部为 0，详见 _build/ci/review-commands.json 与 review-summary.json。
- 核心没有修改，生成 API 没有新增变动。JS、Wasm、Wasm GC 的 213 项测试均通过。
- 真实文件、分发一致性、SARIF、旧 Nginx 行为、新访问回归、新安全风险/修复及包检查均重跑通过。
- Gixy-Next 固定 0.9.0 的 12 组风险/修复结果共 24 项全部通过，独立报告 gixy-comparison-2026-10-29.json。
- 相同核心提交 f7fe389 的 GitHub CI 已通过，包含 Linux native 213 项测试；本轮仅增加工具链门禁、README 与报告，最终 HEAD 的 CI 需另行核对。
- moon package --list 已完成；已准备 BeiLaDuo-moonnginx-access-audit-0.4.0.zip。源码包检查包含实际 LICENSE/NOTICE。
- moon publish --dry-run 在认证阶段提示缺 credentials.json；未上传包。缺少认证与代码检查失败分别记录，不伪称发包已完成。

## 本轮修订

1. README 增加获取仓库、明确 moonc >=0.10.16 及运行环境要求。
2. CI 增加实际编译器版本判断，未知或低版本直接失败，不只打印版本。
3. 按新的九项指南建立当前验收证据，保留此前报告作历史记录。

## 唯一未完成条件及下一步

用户此前明确选择“暂不发布，先交付新版”。现在工程和准备工作已完成；实际发布
BeiLaDuo/moonnginx-access-audit@0.4.0 需用户确认改变这个选择，并通过 Mooncakes
正常登录授权。GitHub 登录不等于 Mooncakes 登录。旧 BeiLaDuo/cidr-audit 包不能
替代当前新项目的发布。只在注册表确认正确模块与版本、独立消费者可安装后，才能
把第 8 项改为满足。无需另填验收表格，比赛表单未代交。

许可证依据：[OSI Apache-2.0](https://opensource.org/license/apache-2.0)、
[OSI MPL-2.0](https://opensource.org/license/MPL-2.0)。来源说明见 THIRD_PARTY.md。
