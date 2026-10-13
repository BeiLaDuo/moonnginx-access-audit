# MoonCIDR Audit 项目申报书

## 基本信息

项目名称：MoonCIDR Audit：MoonBit Nginx 访问规则审计与文件 CLI  
参赛者：高本乾  
联系方式：3346147448@qq.com  
GitHub 仓库链接：https://github.com/BeiLaDuo/mooncidr-audit  
项目方向：MoonBit 网络配置分析库 / 发布前审计工具  
是否为移植项目：否，属于既有开源项目的原创扩展

## 项目简介

MoonCIDR Audit 面向网关、反向代理维护者和 CI 工具开发者，提供离线发布前审计能力。基线 v0.1.2 已有 IPv4/CIDR 审计；本轮新增实际 Nginx 配置的上下文、规则继承、文件 CLI 和真实服务对照验证，定位无效规则、危险放行及导入错误。核心使用 MoonBit，文件 CLI 在 Node.js 运行，原有 API 保留。

## 核心功能范围

- 提供 http/server/location 的有序 IPv4 规则审计、继承分析和来源文件/行号；
- 展开主配置目录下的离线 include，检查缺失、循环、编码、路径及资源预算；
- 提供 contexts/audit/probe/validate 文件命令、三态地址结果、JSON/Markdown 报告与 CI 退出码；
- 有效 MoonBit 实现 5,468 行，排除测试、示例、依赖、嵌入 JavaScript 和兼容声明；
- 160 项测试在 JS/Wasm/Wasm GC 全通过；真实 Nginx 12 个 HTTP 场景对照通过；文件工作流 28 项通过、1 项因权限跳过；交付脚本与新构建行为一致；
- 提供 README、消费示例、可执行 CI 门禁演示和本轮 16 次实质 Git 提交记录。首版不覆盖完整路由、IPv6及组合鉴权；关键未支持语义明确阻塞。Windows native 构建未验证。

## 移植或参考说明

既有项目名称：MoonCIDR Audit  
既有项目链接：https://github.com/BeiLaDuo/mooncidr-audit  
既有项目许可证：Apache-2.0  
参考/复用项目：moonnginx，https://github.com/LuoYunxin1/moonnginx，Apache-2.0  
语义依据：Nginx ngx_http_access_module 官方文档，https://nginx.org/en/docs/http/ngx_http_access_module.html  
本项目许可证：Apache-2.0

本轮成果为 v0.2.0；尚未报名或发布 Mooncakes 新版。保留依赖许可与来源，不将基线功能或上游解析器计为本轮新增贡献。
