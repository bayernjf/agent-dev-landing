---
title: "Golden Path: The Fixed Pipeline from Requirement to Delivery"
description: "Agent-Dev v0.1 validates a fixed Web SaaS Golden Path: can the engineering coordination work after AI-generated code be significantly compressed by structured specs and Agent automation?"
pubDate: 2026-08-02
lang: "en"
tags: ["golden-path", "delivery", "architecture"]
---

## Why a Golden Path

AI coding agents already produce code efficiently, but turning an idea into a product real users can access still involves a lot of repetitive work: tech selection, repo governance, database and auth, env vars, CI, dual-environment deployment, Preview/production acceptance, failure rework, and handoff maintenance.

Agent-Dev v0.1 validates one fixed Web SaaS Golden Path: can this work be significantly compressed by structured specs and Agent automation?

## Fixed Tech Stack

| Capability | Fixed choice |
| --- | --- |
| Frontend | React + Vite + TypeScript |
| API | Hono |
| Database & Auth | Supabase |
| Frontend hosting | Cloudflare Pages |
| API hosting | Vercel Functions |
| Code & CI | GitHub + GitHub Actions |
| Agent Runtime | local Codex on the user's machine |
| Package manager | npm workspaces |

Cloudflare and Vercel are not alternatives. The first version fixes Cloudflare Pages for frontend hosting and Vercel for API hosting.

## The Full Delivery Pipeline

```text
Requirement -> Clarification -> Spec & acceptance criteria -> Codex implements
-> Local verify -> PR -> Vercel API Preview
-> Cloudflare Pages Preview -> Joint smoke test
-> Manual acceptance -> Delivery report
```

## Core Promise

Users complete no more than 5 necessary manual operations and get a Web product baseline they own, with database, auth, CI, joint Preview, env-var contract, and delivery spec, in 60 minutes.

## Automation vs. Asking

Automated: generating specs, code skeletons, tests, and CI; creating feature branches and worktrees; calling Codex within approved scope; running local checks; creating or updating PRs; deploying Previews; reading Checks; running smoke tests; up to two auto-fixes for clearly low-risk failures; generating the delivery report.

Must ask: when a requirement has multiple reasonable interpretations; when adding paid resources or changing cost tiers; on permissions, secrets, privacy, analytics, and user-data policy; on data migration, deletion, or schema replacement; on custom domains or DNS changes; on merging protected branches, production release, and rollback.
