# 本地交付验证

日期：2026-10-13。上传基线：`1fc7d9c7e57f891838b560cb25248f1693808804`。本轮版本：0.2.0。以下为本地实际执行结果。

## 实际结果

| 检查 | 结果 |
|---|---|
| MoonBit 有效实现 | 5,471 行；另有 79 行编译器兼容声明，不用于达到 4,000 行门槛 |
| 测试代码 | 1,786 行有效代码，单独统计 |
| JavaScript 测试 | 162 / 162 通过 |
| Wasm 测试 | 162 / 162 通过 |
| Wasm GC 测试 | 162 / 162 通过 |
| 格式、公开 API、严格检查 | 通过；严格检查含四个常规目标的类型检查 |
| 默认构建、JS release 文件 CLI 构建 | 通过 |
| 独立消费示例、文件 probe、打包清单 | 实际执行通过 |
| Nginx 1.30.5 实际 HTTP | 12 / 12 预测与真实 200/403 一致 |
| Nginx 对照工具中的错误输入 | 3 / 3 正确拒绝 |
| 实际文件工作流 | 29 通过，0 失败，1 跳过 |
| 新构建与交付 CLI 的行为对照 | 各运行 30 个真实文件场景，退出码及输出一致 |
| CI 策略示例 | 5 / 5 验证通过；风险、严格警告和未支持场景按预期失败 |

唯一跳过项是 Windows 未授予创建文件符号链接的权限。目录 junction 已实际创建，并被 CLI 正确拒绝。未请求提升系统权限，也未把跳过当作通过。

Windows 没有 MSVC/Windows SDK，因此只完成 native 类型检查，没有执行 native 二进制构建或 native 测试。文件 CLI 的交付运行方式为 Node.js 22.13+；纯库在三个已测试目标上运行。GitHub Actions 配置包含 Ubuntu native 验证；本报告记录本地验证，不把远端 CI 列为已通过。

## 可复核证据

### 当前仓库的远端 Ubuntu CI

以[当前提交的 Actions](https://github.com/BeiLaDuo/moonnginx-access-audit/actions/workflows/ci.yml)及交付材料 `github-ci.json` 为准。其他仓库的先前运行不作为本项目新提交通过的证据。

本地原始 JSON 随交付材料提供：`verification-summary.json`、`code-count.json`、`file-workflow.json`、`nginx-comparison.json`、`distribution.json`、`ci-examples.json`。三个目标的 162 项测试计数来自实际命令输出；Nginx 和文件工作流报告记录逐案输入、结果和进程清理。

`tools/measure_code.py` 排除空行、注释、测试、示例、依赖、生成接口、嵌入 JavaScript 与多行数据，并把兼容声明另列。与实际上传基线的统计差值包含必要的工具链格式适配，不冒充全部新写的算法代码。实现增加来自配置上下文、include、审计、报告、CLI 与文件工作流。

## 复现

```powershell
moon info
moon fmt --check
moon check --target all --deny-warn
moon build
moon test --target js --deny-warn
moon test --target wasm --deny-warn
moon test --target wasm-gc --deny-warn
moon build cmd/nginx-cli --target js --release --deny-warn
moon run examples/nginx --target wasm-gc
python tools/verify_files.py --output _build/ci/file-workflow.json
python tools/verify_distribution.py --output _build/ci/distribution.json
python tools/verify_ci_examples.py --output _build/ci/ci-examples.json
python tools/measure_code.py --minimum 4000 --output _build/ci/code-count.json
moon package --list
```

真实 Nginx 对照命令及支持边界见 [文件 CLI 说明](nginx-file-cli.md)。旧 v0.1.2 的测试和发布历史与本轮记录分开保存。GitHub 代码同步由用户单独授权，报名、远端发布及 Mooncakes 上传由用户后续处理。
