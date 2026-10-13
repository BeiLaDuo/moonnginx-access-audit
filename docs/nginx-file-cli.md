# Nginx 文件审计工具

本工具检查选定配置上下文的 **IPv4 地址访问规则**，适用于发布前评审、CI 和教学。它不会修改配置，也不会启动或部署你的 Nginx。

## 运行

需要 Node.js 22.13 或更新版本。交付包自带 `dist/cidr-audit.js`，因此可直接运行：

```powershell
node tools/cidr-audit.mjs contexts nginx.conf --root examples/nginx/files --format json
```

从报告找到 `/health` 对应的 `selector`，然后指定该值查询地址。比如该示例使用：

```powershell
node tools/cidr-audit.mjs probe nginx.conf 127.0.0.1 --root examples/nginx/files --context "http[1]/server[1]/location[2]" --format json
node tools/cidr-audit.mjs audit nginx.conf --root examples/nginx/files --format markdown
node tools/cidr-audit.mjs validate nginx.conf --root examples/nginx/files --format json
```

`CONFIG` 必须是 `--root` 内的相对路径。`--root` 是文件读取范围；Nginx 相对 include 则以 **主配置文件所在目录** 为基准。二者在主配置位于子目录时不同。本版文件 CLI 的 include 目标还须位于主配置目录或其子目录；跨父目录和绝对 include 路径明确拒绝。工具只读取主配置和 include 实际引用的文件，不扫描无关文件内容。

如需从源码构建，先安装 MoonBit，再运行：

```powershell
moon update
moon build cmd/nginx-cli --target js --release --deny-warn
node tools/cidr-audit.mjs help
```

CLI 优先使用 `_build` 中的 release 构建，其次使用 debug 构建，最后使用交付包的 `dist` 文件。从源码开发时使用上面的 release 构建命令。

## 报告与退出码

报告格式支持 `text`、`json`、`markdown`。JSON 使用 `schema_version: 1`，包含范围说明、结构上下文、来源文件/行号、include 链和诊断。失败报告的错误字段位于 `error.code`。

| 退出码 | 含义 |
|---:|---|
| 0 | 在声明范围内完成；probe 拒绝某地址也属于成功查询 |
| 1 | audit 门禁失败；默认阻止 critical，`--strict` 也阻止 warning |
| 2 | 输入、文件、编码、语法、缺失 include 或循环 include 错误 |
| 3 | 配置含当前未支持且影响判断的语义，或分析不完整 |
| 4 | 资源预算耗尽；未得出成功结论 |

三个 probe 结果分别是 `allowed_by_rule`、`denied_by_rule`、`no_address_restriction`。最后一个表示地址访问模块没有匹配限制，**不能据此判断完整请求已经通过鉴权**。

## 已实现的边界

- 通过现有 `moonnginx@0.2.0` 解析配置树；支持 HTTP 的 http/server/location 上下文、嵌套 location 和明确的结构 selector。
- 按首条匹配执行 allow/deny。子级出现任一 allow/deny 时，整份子级规则替换父级；没有任何此类指令时才继承。
- include 原位展开、重复引用、真实来源位置、循环检测及资源预算；支持最终文件名中的 `*`、`?`，按稳定顺序处理。
- 正常的 allow-list + `deny all;` 不会被报告为阻止所有地址；非规范 CIDR 和确实不可达的规则仍有诊断。
- 文件 CLI 严格 UTF-8，接受 UTF-8 BOM；拒绝读取范围外的路径和配置文件/目录的符号链接或 junction。

首版不模拟 URL/域名路由选择、rewrite、内部跳转、组合鉴权、real_ip 信任、IPv6、UNIX socket、stream/mail 或完整 Nginx 合法性。关键的未支持语义会产生阻塞诊断。include 不支持 `$`、`[]`、`**`、目录通配符或配置里的反斜杠转义；配置路径请使用 `/`。输入根目录的宿主路径可以使用 Windows 分隔符。

## 资源预算与验证

默认：64 个源文件，合计 1,048,576 个 UTF-16 字符，单源 262,144 字符，include 深度 16、展开 256，配置深度 32、节点 20,000、上下文 2,048、规则 4,096、审计工作 1,000,000。目录扫描使用节点预算并缓存目录列表。报告也使用 `max_directives` 限制展开后的规则、诊断及关联规则条目，防止大量子级继承同一列表时产生巨大的 JSON；超限时返回 4。

```powershell
node tools/cidr-audit.mjs audit nginx.conf --root examples/nginx/files --limits max_sources=32,max_include_depth=8 --format json
```

真实文件回归无需 Nginx：

```powershell
python tools/verify_files.py --output _build/ci/file-workflow.json
```

真实服务对照需要另外安装 Nginx；脚本只创建自己的临时服务与静态文件，并在结束时关闭它：

```powershell
python tools/verify_nginx.py --nginx C:/tools/nginx/nginx.exe --cli-command-json '["node","tools/cidr-audit.mjs"]' --output _build/ci/nginx-comparison.json
```

本机交付验证使用 MoonBit 0.10.15、Node.js 24.19.0 和官方 Nginx Windows 1.30.5。文件 CLI 的已验证运行方式为 Node.js；纯库支持并测试 JavaScript、Wasm、Wasm GC。Windows 缺少 MSVC/Windows SDK，未执行 native 二进制构建与测试，不能将其标为通过。CI 在 Ubuntu 上额外安排 native 构建/测试，但远端 CI 尚未触发。
