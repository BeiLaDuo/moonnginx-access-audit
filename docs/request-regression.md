# Nginx 访问变更回归：0.3.0

维护者需要确认“修改后谁能访问管理路径”。本版读取真实 nginx.conf 和 include，
按 Host、监听地址/端口及路径选取两份配置各自的上下文，计算 IPv4 地址模块决策变化。
前后配置不需要保持 server/location 顺序。

## 能复现的问题

旧配置在 http 层 `allow 127.0.0.1; deny all;`，`/admin/` 没有本地规则。
维护者在该 location 的 include 中新增 `deny 127.0.0.2;`，原意是多禁止一个地址。
Nginx 用子级规则整表替换父级规则，因此其余地址变成“没有地址限制”。
两份配置都合法；语法检查无法判断变更是否符合维护者意图。

源码的 `examples/regression/before` 和 `after` 是真实配置快照。CMD 运行：

```bat
node tools\moonnginx-access-audit.mjs diff nginx.conf nginx.conf --root examples/regression/before --after-root examples/regression/after --host example.test --port 8080 --uri /admin/probe.txt --scope 127.0.0.0/8 --gate no-widening --format json
echo %ERRORLEVEL%
```

预期退出 1，新增放行 16,777,214 个地址。反例包含 127.0.0.3，以及前后规则、文件/行号、
include 父链、选中的上下文和继承来源。无匹配规则标记 `no_address_restriction`。

```bat
node tools\moonnginx-access-audit.mjs request nginx.conf 127.0.0.3 --root examples/regression/after --host example.test --port 8080 --uri /admin/probe.txt --format json
node tools\moonnginx-access-audit.mjs expect nginx.conf 127.0.0.2/31 --expect deny --root examples/regression/after --host example.test --port 8080 --uri /admin/probe.txt --format json
```

第二条检查整个 /31，`.2` 被拒绝不能掩盖 `.3` 的违规放行。expect 的比较基线是明确
期望，JSON 的 operation/gate 说明这一点；expected.conf 是合成基线，不是用户文件。

## 用于 CI

先对每份配置运行 Nginx 自己的 `-t`，相应 prefix、模块、证书和文件必须齐全，
再执行本工具。配置相对 --root，候选目录用 --after-root，省略时与 --root 相同。
include 按主配置所在目录解析，必须处于该目录树内；绝对路径、父级穿越和链接输入
不属于当前可分析配置。本工具不代替完整 Nginx 配置校验。

| diff gate | 失败条件 |
|---|---|
| equivalent（默认） | 指定范围存在任意 allow/deny 决策变化 |
| no-widening | 存在从拒绝到非拒绝的地址 |
| no-tightening | 存在从非拒绝到拒绝的地址 |

方向 gate 通过仍可能存在其他方向的变化。读取 gate_passed、equivalent、scope、target
和两个计数，不将退出 0 理解为全配置等价。默认 scope 为整个 IPv4；计数是十进制
字符串，完整空间为 4,294,967,296。区间可能因规则来源不同分开，但不会重叠计数。

退出 0：gate 通过或 request 分析完成；1：比较完成但 gate 不满足；2：参数/输入错误；
3：无法可靠分析；4：预算耗尽。错误没有部分成功报告。
--limits max_audit_pairs=N 限制求值工作量，max_directives 同时限制差异区间输出。

## 支持的语义与限制

- plaintext HTTP IPv4；listen PORT、IPv4:PORT、*:PORT，可附 default_server；
  未配置 listen 按 80。先选精确本地地址，否则选通配地址，再选 Host 或默认 server。
- 精确 ASCII server_name，Host 不区分大小写；通配、正则和变量名称暂不支持。
- 平级 location /prefix、location = /exact、location ^~ /prefix；最长前缀与精确匹配。
  正则可能覆盖当前前缀或命中的父 location 存在嵌套 location 时返回不支持。
  精确 location 和能屏蔽同级正则的 ^~ 可独立分析。
- 路径是已规范化 ASCII URI，不含查询、百分号转义、点段、重复斜线或片段；
  明确拒绝这些输入，不猜测 Nginx URI 归一化结果。
- 地址首次匹配、整表继承、无匹配时放弃地址限制。认证、satisfy、real_ip、rewrite、
  return、try_files、error_page 等依赖会阻止选中上下文给出结论；含行为变更的 if
  同样阻止。动态加载模块也阻止分析。

结论仅关于所选初始上下文的地址模块。文件存在性、应用响应、TLS/SNI、IPv6、
index/内部重定向、任意第三方模块及整个部署最终授权不在模型内。对不同 Host、
端口或敏感路径分别检查；单个 URI 的比较不代表全部 URL。

## 算法、验证和生态位置

合并排序前后规则的起点和终点后一位，裁剪到 scope。每个区间内所有规则的匹配状态
恒定，所以首次匹配结果不变，每区间求值一次即可求出精确差异，无需枚举全网。
先估算边界数乘规则数的工作量，超预算直接失败。64 位计数避免 /0 溢出。

nginx/regression_test.mbt 覆盖选路、继承、来源、范围、边界和预算，以及 24 组策略
各穷举 256 地址的独立整数区间解释器对照。6,144 个地址样本属于一个性质测试块，
不冒充 6,144 个独立测试。

```bat
python tools\verify_regression.py --nginx C:/tools/nginx/nginx.exe
```

脚本比较新构建和 dist 的 13 个实际文件场景，对两份临时配置执行 nginx -t 和 14 次
真实 HTTP 请求。覆盖原 403→新 200 反例、精确 location、不同 Host 和默认 server；
仅启动和结束自己的回环测试进程。不带 --nginx 只检查文件 CLI，报告记录服务未运行；
CI 始终带此参数。

复用 moonnginx 解析器和原有 CIDR 基础。MoonPolicyProof 已有通用五元组差异及断言；
这里的新增范围是 Nginx 文件/include、请求选路、整表继承和来源追踪的回归工作流。
算法思想并非全球首创，也不宣称替代完整配置验证平台。

语义来源：[Nginx CLI](https://nginx.org/en/docs/switches.html)、
[请求处理](https://nginx.org/en/docs/http/request_processing.html)、
[地址访问模块](https://nginx.org/en/docs/http/ngx_http_access_module.html)。
