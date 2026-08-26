// FAQ 数据：中英双语，同时供 FAQ 组件渲染与 SEO JSON-LD schema 使用
// 保证 AI 搜索能直接抓取为答案（GEO 关键）

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<'zh' | 'en', FaqItem[]> = {
  zh: [
    {
      question: 'Agent-Dev 是什么？',
      answer:
        'Agent-Dev 是 Agentic Product Delivery Platform（AI Agent 驱动的产品工程与交付控制平台）。它不是 Codex 或 Claude Code 的替代品，也不是仅生成源码的应用构建器，而是管理从需求到生产的完整产品生命周期。',
    },
    {
      question: '我的代码和云资源归谁所有？',
      answer:
        '代码、仓库、数据、域名、云资源和 Blueprint 全部归用户所有。退出 Agent-Dev 后，产品仍可独立构建、部署和维护。模型和供应商均可替换。',
    },
    {
      question: 'Agent-Dev 如何控制 AI 的生产权限？',
      answer:
        '大模型可以提出方案，但不能通过 Prompt 获得生产权限。确定性 Policy、GitHub Rulesets、Environment Approval 和供应商权限是最终约束。生产发布为两道人工闸门（请求 + 具名批准），从记录仓库的生产分支 checkout 后发布。自治能力按项目和动作逐步提升，不存在一个不区分风险的全自动开关。',
    },
    {
      question: '如何判断交付是否真的完成？',
      answer:
        '交付状态以 GitHub Checks、Deployment Records、Preview URL、数据库状态、冒烟测试和人工验收为准，而不是 Agent 的自然语言总结。Evidence 记录的是真实观测值（HTTP 状态、content-type、实测 CORS 响应头），而非 passed 这类判定常量。未执行的验证不得标记为通过。',
    },
    {
      question: 'Agent-Dev 与 Replit Agent / Lovable 有什么区别？',
      answer:
        'Replit Agent 和 Lovable 侧重对话式生成与一键上线，资源由平台托管。Agent-Dev 管理的最小单位是产品生命周期，使用用户自有的 GitHub/云资源，Agent 和 Provider 可替换，并对完整交付和长期维护负责。',
    },
    {
      question: '首版支持哪些技术栈？',
      answer:
        'Web SaaS Golden Path 固定为：React + Vite + TypeScript 前端、Hono API、Cloudflare Pages 托管前端、Vercel Functions 托管 API、GitHub Actions 做 CI；数据库与认证使用 Supabase，走引导式手动接入。Agent Runtime 运行在你自己的电脑上，可在 Codex、OpenCode、Claude Code、Aider 等已安装的 coding agent 中选择。',
    },
    {
      question: '支持哪些产品形态？',
      answer:
        '六种产品类型均已生成真实可构建的工程模板：Web SaaS、落地页、浏览器插件（MV3）、桌面端（Tauri v2 / Electron 双 shell）、移动端（Expo SDK 52）和 MCP Server。每类生成物都通过本地质量门禁，且生成的 GitHub Actions 工作流已在真实 CI 上验证全绿。Web SaaS 走完整云端交付链路；其余类型按设计交付本地可构建产物，签名、公证与商店提交为人工步骤。',
    },
    {
      question: '有真实交付案例吗？',
      answer:
        '三个真实项目已通过完整云端链路交付上线：Receipt Test（收据管理页面）、Workspace Verify Fresh（API 版本端点）、Link Vault（链接保存 API + 页面）。每个项目都走完 Blueprint → Preview → Production 全周期，PR 经 GitHub Actions 质量门禁后合并，生产 API 与页面均对外可访问，并在平台报告之外独立复验。三轮真实验证共修掉 29 个真实缺陷。',
    },
    {
      question: 'Agent-Dev 现在可以怎么运行？',
      answer:
        'v0.1 是 local-first 的本地应用，不是托管 SaaS：控制面跑在你自己的电脑上，直接复用你已登录的 GitHub、Vercel、Cloudflare CLI 和本机 coding agent。当前仍处于 v0.1 实验阶段，核心交付链路已在真实云端验证通过，但尚未作为可用于生产的稳定版本发布。',
    },
  ],
  en: [
    {
      question: 'What is Agent-Dev?',
      answer:
        'Agent-Dev is an Agentic Product Delivery Platform. It is not a replacement for Codex or Claude Code, nor a source-code-only app builder. It manages the full product lifecycle from requirement to production.',
    },
    {
      question: 'Who owns my code and cloud resources?',
      answer:
        'Code, repos, data, domains, cloud resources, and Blueprint all belong to the user. After leaving Agent-Dev, the product still builds, deploys, and maintains independently. Models and providers are replaceable.',
    },
    {
      question: 'How does Agent-Dev control AI production permissions?',
      answer:
        'An LLM may propose, but cannot obtain production permission via prompt. Deterministic Policy, GitHub Rulesets, Environment Approval, and provider permissions are the final constraints. Production release requires two human gates (request + named approval), published from a checkout of the recorded repository\'s production branch. Autonomy scales per project and per action; there is no single risk-blind "full auto" switch.',
    },
    {
      question: 'How is delivery actually verified as complete?',
      answer:
        'Delivery status is grounded in GitHub Checks, Deployment Records, Preview URLs, database state, smoke tests, and manual acceptance, not the Agent\'s natural-language summary. Evidence records real observations (HTTP status, content-type, measured CORS headers), not judgment constants like "passed". Unexecuted verifications cannot be marked as passed.',
    },
    {
      question: 'How is Agent-Dev different from Replit Agent or Lovable?',
      answer:
        'Replit Agent and Lovable focus on conversational generation and one-click hosting on platform-owned resources. Agent-Dev\'s minimum unit is the product lifecycle: it uses user-owned GitHub/cloud resources, with replaceable Agents and providers, and is accountable for full delivery and long-term maintenance.',
    },
    {
      question: 'What tech stack does the first version support?',
      answer:
        'The Web SaaS Golden Path is fixed: React + Vite + TypeScript frontend, Hono API, Cloudflare Pages for frontend hosting, Vercel Functions for API hosting, and GitHub Actions for CI. Supabase provides DB and auth through a guided manual setup. The Agent Runtime runs on your own machine, selectable among installed coding agents such as Codex, OpenCode, Claude Code, and Aider.',
    },
    {
      question: 'Which product types are supported?',
      answer:
        'All six product types generate real, buildable project templates: Web SaaS, landing pages, browser extensions (MV3), desktop apps (Tauri v2 / Electron dual shell), mobile (Expo SDK 52), and MCP Server. Each artifact passes its local quality gate, and the generated GitHub Actions workflows have been verified green on real CI. Web SaaS follows the full cloud delivery pipeline; other types ship locally buildable artifacts by design, with signing, notarization, and store submission as manual steps.',
    },
    {
      question: 'Are there real delivery examples?',
      answer:
        'Three real projects have been delivered end-to-end on real cloud infrastructure: Receipt Test (receipt management page), Workspace Verify Fresh (API version endpoint), and Link Vault (link-saving API + page). Each project completed the full Blueprint → Preview → Production cycle, with PRs merged after GitHub Actions quality gates, and production APIs and pages publicly accessible and independently verified outside the platform report. The three validation rounds fixed 29 real defects.',
    },
    {
      question: 'How does Agent-Dev run today?',
      answer:
        'v0.1 is a local-first application, not a hosted SaaS: the control plane runs on your own machine and reuses your existing GitHub, Vercel, and Cloudflare CLI logins plus a local coding agent. It is still a v0.1 experiment; the core delivery pipeline has been verified on real cloud infrastructure, but it is not yet released as a production-ready stable version.',
    },
  ],
};
