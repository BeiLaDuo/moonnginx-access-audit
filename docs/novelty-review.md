# 十月扩展查重说明

调研日期：2026-10-13。读取 https://mooncakes.io/api/v0/modules 返回的 2,952 条模块元数据，并核对相近项目公开说明。目录检索不是全生态逐文件审查，不保证没有未发布、私有或关键词缺失的相近项目。

## 已有交集

- https://github.com/lzh123411/21341 已有 IPv4 有序 ACL、重叠诊断和基础 IPv6。地址解析与普通 ACL 不能作为本轮新增贡献。
- https://github.com/hutingyu-nuist/moonpolicyproof 已基于 cidr-audit 提供五元组语义差异、反例和断言。本轮不重复开发该范围。
- https://github.com/LuoYunxin1/moonnginx 已有 nginx.conf 配置树编解码。本轮直接复用其 0.2.0，不另写通用 lexer/parser，也不把依赖行数计入自有实现。
- 本仓库已发布 BeiLaDuo/cidr-audit@0.1.2。基线的解析、规则审计、聚合和指令导入不作为全新项目申报。

## 本轮实质新增

Nginx HTTP IPv4 配置上下文与继承、离线 include 来源链与预算、区别于完整请求授权的三态地址判断、适配 Nginx 的遮蔽/终止规则审计、实际文件 CLI、结构化报告和真实服务互操作验证。

语义依据：https://nginx.org/en/docs/http/ngx_http_access_module.html 。新贡献定位为既有项目扩展，目标是让调用者把主配置目录中的实际文件交给离线审计流程。仅分析指定结构上下文，不宣称完整 Nginx 路由、IPv6、组合鉴权或全服务器安全。

本轮参考并复用既有生态组件，而不是以新名字重复实现相同基础库。许可证和来源见 THIRD_PARTY.md。
