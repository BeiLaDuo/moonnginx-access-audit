# Nginx 安全配置扫描与 Gixy-Next 对标

0.4.0 新增 security，直接扫描真实配置及 include 展开的指令树。它与
request/diff/expect 分开：正则/嵌套 location、TLS 和鉴权不因请求路由模型
范围有限而阻止扫描。结构扫描不等于完整模拟这些功能的运行行为。

## 运行和报告

在仓库根目录用 CMD 运行，两个例子分别应退出 1 和 0：

```bat
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/risky --strict --format json
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/repaired --strict --format json
node tools\moonnginx-access-audit.mjs security nginx.conf --root examples/security/risky --format sarif > security.sarif
```

每条 finding 给出 code、severity、message、remediation、evidence、context，以及源
文件/行号/include 链。JSON 提供 checks、diagnostics、complete 和 scope_note。
complete=true 只表示选定检查按声明范围完成，不是全配置安全证明。
动态代理主机变量来源未知、变量 alias、脚本/动态模块或未知 HTTP 块会产生阻塞
诊断；已发现的问题仍保留。SARIF executionSuccessful 同步反映不完整状态。

默认 gate 拒绝 critical；--strict 同时拒绝 warning；info 保留且不拒绝 gate。
退出 0 表示 gate 通过，1 安全 finding 拒绝，2 输入错误，3 分析不完整，
4 资源预算耗尽。CI 应拒绝所有非零结果。扫描不自动改文件或连接服务器。

## 规则与适用边界

| 本项目检查 | 检测依据和边界 | Gixy-Next 对应方向 |
|---|---|---|
| alias_traversal | 字面前缀 location 缺尾斜线而目录 alias 带尾斜线；精确文件不报；变量 alias 标记不完整 | alias_traversal 子集 |
| add_header_redefinition | 子级替换父响应头列表，报告丢失的头；识别递归 on/off/merge | add_header_redefinition 的 add_header 子集；不检查 add_trailer |
| host_spoofing | proxy_set_header Host 使用完整 $http_host token | host_spoofing 子集 |
| proxy_pass_variable_authority | 请求变量进入 proxy_pass 目的主机；固定主机后 URI 变量不误报；用户变量未知则阻塞 | ssrf 的直接变量子集；无 set/map/捕获全程污点求解 |
| return_bypasses_allow_deny | 有效 deny 下成功 return 或重定向 rewrite 在访问阶段前响应；包含条件 if 可能路径 | return_bypasses_allow_deny 子集 |
| allow_without_deny | 本层 allow 无本层 deny，未构成闭合允许名单 | allow_without_deny |
| filesystem_root_exposure | 显式 root/alias 指向文件系统根 | filesystem_root_exposure 子集 |
| add_header_content_type | 使用 add_header 设置 Content-Type | add_header_content_type |
| add_header_multiline | 响应头字面值含 CR/LF，不推断变量值 | add_header_multiline 子集 |
| valid_referers | none/blocked 放过缺失或异常 Referer | valid_referers |
| error_log_off | main/HTTP 的 error_log off 实际使用名为 off 的文件 | error_log_off |
| server_tokens | 显式 on/build 版本泄露（info），不推断省略默认值 | version_disclosure 子集 |
| weak_tls_protocols | 显式启用 SSLv2/SSLv3/TLSv1/TLSv1.1 | 补充检查 |
| proxy_tls_verification_disabled | 显式 proxy_ssl_verify off | 补充检查；不推断未设置的默认值 |
| unrestricted_real_ip_trust | set_real_ip_from 显式信任全部 IPv4/IPv6 地址 | 补充检查；不模拟地址恢复 |

代理、Referer、TLS 和版本提示需结合部署判断，warning 不代表已证实可利用。
上游 SSRF 全数据流、变量响应拆分、复杂正则漏洞、证书、DNS、HTTP/2 等仍未实现；
不宣称覆盖全部 Gixy-Next 插件。stream/map 数据不当作 HTTP 指令。保留 nginx -t
和实际响应/资源测试。输入仍采用已有相对路径/include 沙箱，不直接接收 nginx -T dump。

## 复现验证

```bat
python tools\verify_security.py --nginx C:/tools/nginx/nginx.exe
python -m pip install gixy-next==0.9.0
python tools\verify_gixy.py
```

安全脚本对新构建和 dist 各执行 26 个文件场景：真实风险/修复快照、11 组静态
风险/修复案例、默认 gate 保留 warning 和缺失 include。静态目录案例并非全部
独立有效服务器配置，不拿静态检查冒充 nginx -t。
两份真正运行的快照都执行 nginx -t，8 次 HTTP 请求观察 alias 越界读取自建文本、
安全响应头丢失、return 导致 200/403 差异，以及修复后的正常资源可访问。
只启动和清理脚本自己的回环测试进程。

Gixy 对照固定外部版本 0.9.0，独立编写 12 组风险/修复配置，共比较 24 个结果。
选定场景一致不表示全功能一致，严重性不强行等同。自身代码
proxy_pass_variable_authority/server_tokens 分别映射 ssrf/version_disclosure。
CI 重复运行对照，MoonBit 运行库没有 Python/Gixy 依赖。

## 来源与许可证

主要对标 [Gixy-Next](https://github.com/MegaManSec/Gixy-Next)，MPL-2.0；核对版本
6192d7f680e916d638dddd784d4e2a23ae5a24bb。公开文档用于研究检查目标，MoonBit
实现、测试与配置独立编写，没有复制上游源码/测试。本轮属于既有项目的原创扩展，
不申报成完整移植。项目保留 Apache-2.0，见 [来源记录](../THIRD_PARTY.md)。
语义参考 Nginx 官方 [alias](https://nginx.org/en/docs/http/ngx_http_core_module.html#alias)、
[响应头继承](https://nginx.org/en/docs/http/ngx_http_headers_module.html)、
[rewrite](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html)、
[访问模块](https://nginx.org/en/docs/http/ngx_http_access_module.html)。
