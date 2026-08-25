---
title: "Golden Path：从需求到交付的固定链路"
description: "Agent-Dev 首版通过一条固定的 Web SaaS Golden Path 验证：AI 生成代码后的工程协调工作能否被结构化规范和 Agent 自动化显著压缩。"
pubDate: 2026-08-02
lang: "zh"
tags: ["golden-path", "delivery", "架构"]
---

## 为什么需要 Golden Path

AI coding agent 已能高效落地代码，但从想法到真实用户可访问的产品仍包含大量重复工作：技术选型、仓库治理、数据库和认证、环境变量、CI、双环境部署、Preview/生产验收、失败返工与交接维护。

Agent-Dev v0.1 通过一条固定 Web SaaS Golden Path 验证：这些工作能否被结构化规范和 Agent 自动化显著压缩。

## 固定技术栈

| 能力 | 固定选择 |
| --- | --- |
| 前端 | React + Vite + TypeScript |
| API | Hono |
| 数据库、认证 | Supabase |
| 页面托管 | Cloudflare Pages |
| API 托管 | Vercel Functions |
| 代码与 CI | GitHub + GitHub Actions |
| Agent Runtime | 用户电脑中的 Codex |
| 包管理 | npm workspaces |

Cloudflare 和 Vercel 不是候选关系。首版规范固定为 Cloudflare Pages 托管前端、Vercel 托管 API。

## 交付一个功能的完整链路

```text
需求 -> 决策澄清 -> 规格与验收标准 -> Codex 实现
-> 本地验证 -> PR -> Vercel API Preview
-> Cloudflare Pages Preview -> 联合冒烟测试
-> 人工验收 -> 交付报告
```

## 核心目标

让用户获得一个归自己所有、具备数据库、认证、CI、联合 Preview、环境变量契约和交付规范的 Web 产品基线，人工操作只留在真正需要产品决策的地方。

「不超过 5 个必要人工操作」是 v0.1 的设计指标，不是已经测得的结果。

## 自动与询问的边界

自动执行：生成规范、代码骨架、测试和 CI；创建 feature 分支和 worktree；调用 Codex 实现已批准范围；运行本地检查、创建或更新 PR；部署 Preview、读取 Checks、执行冒烟测试；对明确的低风险失败进行最多两次修复；生成交付报告。

必须询问：产品需求存在多种合理解释；新增付费资源或改变费用等级；权限、Secret、隐私、埋点和用户数据策略；数据迁移、删除和架构替换；自定义域名或 DNS 变更；合并受保护分支、生产发布和回滚。
