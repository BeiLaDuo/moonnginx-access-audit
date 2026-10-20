# MoonNginx Access Audit 项目申报书

## 基本信息

项目名称：MoonNginx Access Audit  
参赛者：高本乾  
联系方式：3346147448@qq.com  
GitHub 仓库链接：https://github.com/BeiLaDuo/moonnginx-access-audit  
项目方向：MoonBit 网络配置分析库 / 发布前审计工具  
是否为移植项目：否，属于既有开源项目的原创扩展

## 项目简介

面向网关、反向代理维护者及 CI 工具开发者，使用 MoonBit 分析实际 Nginx HTTP IPv4 访问规则、上下文及继承，定位危险放行、不可达规则与导入错误。已有 CIDR 基础单独说明；本期新增文件 CLI、来源追踪、资源预算及 SARIF 报告，用于发布前评审和代码扫描工具集成。

## 核心功能范围

- 提供 http/server/location 有序规则审计、整表继承及原始文件/行号；
- 展开受限目录内的离线 include，检查缺失、循环、编码、路径及资源预算；
- 提供 contexts/audit/probe/validate、三态地址结果、JSON/Markdown 报告及 CI 退出码；audit 增加 SARIF 2.1.0，保留来源和失败运行标记；
- 有效 MoonBit 实现 5,641 行；本地三目标各 167 项测试通过；真实 Nginx 12 个 HTTP 场景、SARIF 十个实际场景及交付脚本对照通过；
- 提供 README、CMD 用法、示例、CI、来源及许可证检查和连续实质提交。首版不覆盖完整路由、IPv6 及组合鉴权，关键未支持语义明确阻塞。Windows native 二进制未在本地验证，远端结果以对应提交 Actions 为准。

## 移植或参考说明

既有项目名称：MoonCIDR Audit（v0.1.2 基础）  
既有项目链接：https://github.com/BeiLaDuo/mooncidr-audit/tree/414e476efa463737164e5d5e1b2345bccd01148f  
既有项目许可证：Apache-2.0  
复用项目：moonnginx，https://github.com/LuoYunxin1/moonnginx，Apache-2.0  
语义参考：Nginx ngx_http_access_module 官方文档，https://nginx.org/en/docs/http/ngx_http_access_module.html  
本项目许可证：Apache-2.0；保留依赖及标准库的原始 LICENSE/NOTICE。

本轮不将旧基础或上游解析器计为新贡献。代码已公开同步 GitHub；报名、验收提交及 Mooncakes 发布尚未代办，正式章程额外条件仍待核实。
