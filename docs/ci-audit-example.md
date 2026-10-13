# 把配置审计接入 CI

仓库提供手动运行的 **Nginx audit example** 工作流，不需要安装 MoonBit 或启动 Nginx。它使用交付的 Node.js CLI，在 GitHub Actions 中审计 `examples/ci` 的实际配置文件，并保存 JSON 报告。权限仅为读取仓库内容。

在仓库 Actions 页选择该工作流，再选择 policy 和 strict 参数运行：

| 配置 | 普通模式 | strict 模式 | 原因 |
|---|---:|---:|---|
| safe | 0 | 0 | 允许本机访问，其余地址由终止规则拒绝 |
| warning | 0 | 1 | 重复允许规则产生 warning |
| risky | 1 | 1 | allow all 放行全部地址，后续拒绝规则不可达 |
| unsupported | 3 | 3 | IPv6 在首版支持范围外，不能宣称审计成功 |

风险配置和未支持配置的演示任务会按预期显示失败。`audit.json` 保存分析结果；输入错误写入 `diagnostics.json`。这只演示 IPv4 地址规则门禁，不表示完整 HTTP 请求已通过鉴权。

本地执行同一示例：

```powershell
node tools/cidr-audit.mjs audit safe.conf --root examples/ci --format json
node tools/cidr-audit.mjs audit warning.conf --root examples/ci --strict --format json
python tools/verify_ci_examples.py
```

接入自己的仓库时，将 CONFIG 和 `--root` 改为仓库内的实际配置路径，保留命令退出码作为 CI 结果，并在失败时保存报告。该示例不会部署或修改服务器。
