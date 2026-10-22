# MoonNginx Access Audit 项目申报书

## 基本信息

项目名称：MoonNginx Access Audit  
参赛者：高本乾  
联系方式：3346147448@qq.com  
GitHub 仓库链接：https://github.com/BeiLaDuo/moonnginx-access-audit  
项目方向：MoonBit Nginx 配置访问行为回归库 / CI 开发工具  
是否为移植项目：否，属于既有开源项目的原创扩展

## 项目简介

面向网关维护者和平台工程师，解决“两份配置均通过 nginx -t，但修改后意外开放管理路径或阻断业务地址”的问题。直接读取真实 Nginx 配置和 include，以 MoonBit 实现受限请求选路、规则继承及精确 IPv4 行为比较，输出变化范围、可回放反例和原始来源，并以 CI 门禁阻止违反预期的变更。语法检查继续由 Nginx 完成，项目重点是验证变更意图。

## 核心功能范围

- 按监听地址/端口、精确 Host、平级精确或前缀 location 选路，前后快照无需保持上下文序号；
- 精确统计指定路径与网段新增放行/阻断范围，保留前后规则文件、行号、include 链和继承来源；
- 提供 request、diff、expect 文件 CLI，支持禁止扩大访问、禁止缩小访问、范围等价及整个 CIDR 的放行/拒绝断言；
- 以规则边界分区避免枚举全网，限制输入、include、比较工作和输出预算，未支持语义明确阻塞；
- 提供可复用库、CMD 示例、CI 和真实 Nginx 对照：两份配置均通过语法检查，HTTP 请求验证原 403→新 200 的风险反例。保留既有审计能力并更新 README、测试、许可和来源说明。

## 移植或参考说明

既有基础：MoonCIDR Audit，https://github.com/BeiLaDuo/mooncidr-audit ，Apache-2.0。  
复用解析器：moonnginx，https://github.com/LuoYunxin1/moonnginx ，Apache-2.0。  
语义依据：Nginx 官方请求处理及 ngx_http_access_module 文档。  
本项目许可证：Apache-2.0，保留依赖 LICENSE/NOTICE。

旧基础和上游解析器不计为本次新增；本次新增请求选路与配置行为回归。范围限于明确定义的 HTTP IPv4 地址模块，不覆盖完整 Nginx、IPv6、TLS、组合鉴权和内部重定向。新包发布与比赛提交分别办理，不将源码公开等同于已发布或通过验收。
