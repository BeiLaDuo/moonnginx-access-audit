# Security Policy

## Project Scope

MoonNginx Access Audit is an offline analysis library for ordered IPv4 and CIDR
allow/deny rules.

It helps identify potentially unsafe configurations, including:

- overly broad allow rules;
- shadowed or conflicting rules;
- global deny rules;
- duplicate rules;
- non-canonical CIDR input;
- risky special address ranges.

MoonNginx Access Audit does not configure firewalls, enforce network traffic, access
cloud accounts, capture packets, or make network requests.

## Reporting a Security Issue

Please avoid publishing sensitive vulnerability details in a public issue.

When private vulnerability reporting is available for this repository, use the
GitHub security advisory reporting interface. Include:

- the affected version or commit;
- a minimal rule set that reproduces the problem;
- the observed audit result;
- the expected result;
- any possible security impact.

Remove real credentials, internal addresses, and confidential infrastructure
information from reproduction examples.

## Security Considerations

Audit results should be treated as review assistance rather than a replacement
for deployment testing or firewall validation.

Users should keep the following limitations in mind:

- rule evaluation depends on rule order;
- CIDR input may be normalized before analysis;
- the current implementation focuses on IPv4;
- imported Nginx and CSV rules are analyzed offline;
- provider-specific firewall behavior is outside the project scope.

## Supported Versions

Security fixes are applied to the latest version available on the main branch.

## 0.3.0 请求回归安全边界

比较结果对应指定监听端点、Host、规范化 URI 和 IPv4 scope 的初始地址模块行为。精确区间求解不等于全 URL、完整授权或真实部署等价。请保留 nginx -t、实际资源/响应验证和部署检查。禁止根据一个通过的方向 gate 推导无其他方向变化，必须同时读取 gate_passed、equivalent 和 scope。

正则/嵌套路由、TLS、IPv6、认证组合、real_ip、重写和内部重定向等不属于当前完整模型。工具对已识别的相关不支持语义阻塞；任意第三方模块不在模型中。动态加载模块也阻塞。URI 输入必须预先规范化，不接受转义、查询和点段。不要把结果直接当作真实客户端最终 HTTP 状态承诺。

差异按规则边界分区，在求值前检查工作预算，输出区间也有预算；预算失败不会返回部分通过。整个 IPv4 的计数采用 64 位整数。测试服务仅使用临时目录和回环端点，清理只针对脚本自己启动的进程。
