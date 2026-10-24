# MoonNginx Access Audit 项目申报书

## 基本信息

项目名称：MoonNginx Access Audit  
参赛者：高本乾  
联系方式：3346147448@qq.com  
GitHub 仓库链接：https://github.com/BeiLaDuo/moonnginx-access-audit  
项目方向：MoonBit Nginx 安全配置检查库 / CI 开发工具  
是否为移植项目：否，属于既有开源项目的原创扩展

## 项目简介

面向网关维护和配置审查，以 Gixy-Next 为主要对标，使用 MoonBit 扫描真实 Nginx 配置及 include，发现语法合法但具有安全风险的配置。项目从有限请求选路与 IPv4 比较扩展为独立配置树安全扫描，输出风险依据、原始位置和修复建议；保留访问差异回归与 CI 门禁。以规则矩阵说明边界，不承诺完整模拟任意 Nginx 配置。

## 核心功能范围

- 实现 15 类静态检查：alias 目录越界、响应头继承丢失、Host 转发、请求变量代理目标、return/重定向绕过访问规则、允许名单缺拒绝、文件系统根暴露、响应头类型/换行、Referer、日志、版本泄露及 TLS/真实地址信任配置；
- 遍历 include、嵌套与正则 location，不因 TLS/鉴权存在而阻塞整体静态扫描；动态来源与未建模语义给出不完整诊断；
- 提供 MoonBit 库和 security 文件 CLI，输出 JSON、文本、Markdown、SARIF，包含文件、行号、include 链、依据和修复建议；限制输入、展开、工作和输出预算；
- 保留指定端点/路径的精确 IPv4 差异、禁止扩大访问和整个 CIDR 断言；区分静态检查与完整行为回归；
- 提供风险/修复案例、真实 Nginx 语法及 HTTP 验证、Gixy-Next 固定版本对照、README、示例、来源说明与 CI。

## 移植或参考说明

主要对标：Gixy-Next，https://github.com/MegaManSec/Gixy-Next ，MPL-2.0；参考公开检查目标，独立编写 MoonBit 实现与测试，未复制源码，不宣称完整移植。  
既有基础：MoonCIDR Audit，https://github.com/BeiLaDuo/mooncidr-audit ，Apache-2.0；解析器：moonnginx，https://github.com/LuoYunxin1/moonnginx ，Apache-2.0。  
本项目许可证：Apache-2.0，保留依赖 LICENSE/NOTICE。旧基础不算本轮新增；暂不支持全程变量污点、复杂正则漏洞、证书/DNS 等全部上游能力。发包与比赛提交另行办理。
