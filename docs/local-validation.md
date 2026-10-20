# 实际验证记录

## 2026-10-20 提交前复检

在 `4f07c0b` 基础上复查并修正 CMD 文档的 JSON 引号。修正前的命令实际返回参数错误；
修正后从 CMD 运行真实 Nginx 对照，12 个 HTTP 场景与 3 个错误输入全部通过。
新增一次独立交叉核对：Python `ipaddress` 作为地址范围参考，以固定种子 `20261020`
生成 18 个混合规则及继承上下文，346 次实际 CLI probe 与独立顺序匹配结果一致，
包含 `/0`、`/31`、`/32`、区间端点及邻接地址。该数字是额外复检次数，不是 MoonBit 单测数量。

重新运行 JS、Wasm、Wasm GC 每目标 167 项测试、真实文件工作流、交付脚本对照、
CI 策略示例、SARIF 场景和源码包许可证检查，结果通过；文件符号链接仍因 Windows 权限跳过一项。
Windows `--target all` 测试在编译计划阶段被缺少 MSVC/Windows SDK 阻断，未执行本地 native 测试；
该项由[复检前对应提交的 Ubuntu 四目标 CI](https://github.com/BeiLaDuo/moonnginx-access-audit/actions/runs/39428418084)
提供历史验证，后续提交仍以其自己的 CI 结果为准。

## 2026-10-20 续开发验证

在原交付提交 `7622a31` 上继续开发。工具链为 moon 0.1.20261016、
moonc v0.10.16+b1a0e846e、Python 3.12；真实服务使用 Nginx Windows 1.30.6。
下面是 Windows 上实际执行的结果，远端 CI 另看对应提交记录。

| 检查 | 实际结果 |
|---|---|
| 有效 MoonBit 实现 | 5,641 行；79 行兼容声明另计，测试、示例、依赖及嵌入 JS 不计入门槛 |
| 测试代码 | 1,859 行有效代码，单独统计 |
| JS / Wasm / Wasm GC | 每目标 167 项通过，0 失败 |
| API、格式、严格检查 | 通过；四目标类型检查通过 |
| 默认构建、JS release CLI、消费示例 | 通过 |
| 实际文件工作流 | 29 通过、0 失败、1 因权限跳过 |
| 交付脚本与新构建 | 每端 30 个实际文件场景逐项一致 |
| CI 策略示例 | 5 项通过 |
| SARIF 对照 | 10 个场景在新构建和交付脚本上通过；发现、级别、位置和来源与 JSON 一致 |
| 独立 SARIF Schema 校验 | 7 份实际报告通过 draft-07 校验，包含 URI 格式检查；校验器 jsonschema 4.26.0 |
| 真实 Nginx 对照 | 12 个 HTTP 场景与 3 个错误输入通过 |
| 源码包与许可材料 | 实际生成源码包，核对 LICENSE、NOTICE、第三方材料及哈希，检查通过 |

跳过项是 Windows 文件符号链接创建权限；目录 junction 已真实验证。
Windows native 仅做类型检查，未声称已构建或测试本地 native 二进制。
GitHub Actions 配置包含 Ubuntu native 构建和测试，实际结果以
[当前提交 CI](https://github.com/BeiLaDuo/moonnginx-access-audit/actions)为准。
本地独立 Schema 校验没有变成项目运行依赖，也不冒充 CI 已执行此校验。

## 复现

执行 README 的构建和验证命令。JSON 证据位于 `_build/ci/`：
`file-workflow.json`、`distribution.json`、`ci-examples.json`、`sarif.json`、
`nginx-comparison.json`、`code-count.json`、`repository.json`。
完整本地命令日志与独立 Schema 回执随交付材料提供。

代码统计的上传基线是 `1fc7d9c`。物理源码行数变化可能包含格式化，
不能把所有差值都说成新算法。SARIF 功能是在原 IPv4 审计上新增的
MoonBit 报告能力，并未重新实现上游 Nginx parser。

## 历史证据

2026-10-13 的 `7622a31` 已有 162 项测试，Ubuntu 四目标通过，
[原 CI 记录](https://github.com/BeiLaDuo/moonnginx-access-audit/actions/runs/38398605251)。
该记录保留为历史证据，不作为 10 月 20 日新代码通过的依据。
