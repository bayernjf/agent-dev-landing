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
        '大模型可以提出方案，但不能通过 Prompt 获得生产权限。确定性 Policy、GitHub Rulesets、Environment Approval 和供应商权限是最终约束。自治能力按项目和动作逐步提升，不存在一个不区分风险的全自动开关。',
    },
    {
      question: '如何判断交付是否真的完成？',
      answer:
        '交付状态以 GitHub Checks、Deployment Records、Preview URL、数据库状态、冒烟测试和人工验收为准，而不是 Agent 的自然语言总结。未执行的验证不得标记为通过。',
    },
    {
      question: 'Agent-Dev 与 Replit Agent / Lovable 有什么区别？',
      answer:
        'Replit Agent 和 Lovable 侧重对话式生成与一键上线，资源由平台托管。Agent-Dev 管理的最小单位是产品生命周期，使用用户自有的 GitHub/云资源，Agent 和 Provider 可替换，并对完整交付和长期维护负责。',
    },
    {
      question: '首版支持哪些技术栈？',
      answer:
        '首版的 Web SaaS Golden Path 固定为：React + Vite + TypeScript 前端、Hono API、Cloudflare Pages 托管前端、Vercel Functions 托管 API、GitHub Actions 做 CI；数据库与认证使用 Supabase，走引导式手动接入。Agent Runtime 运行在你自己的电脑上，可在 Codex、OpenCode、Claude Code 等已安装的 coding agent 中选择。',
    },
    {
      question: '支持哪些产品形态？',
      answer:
        'Web SaaS、落地页、浏览器插件（MV3）和桌面端（Tauri v2）都已能生成真实可构建的工程模板。浏览器插件与桌面端只交付本地可构建产物，不接入云部署管线；移动端和 API 工具目前只提供引导式交接文档。',
    },
    {
      question: 'Agent-Dev 现在可以怎么运行？',
      answer:
        'v0.1 是 local-first 的本地应用，不是托管 SaaS：控制面跑在你自己的电脑上，直接复用你已登录的 GitHub、Vercel、Cloudflare CLI 和本机 coding agent。当前仍处于 v0.1 实验阶段，不是可用于生产的稳定版本。',
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
        'An LLM may propose, but cannot obtain production permission via prompt. Deterministic Policy, GitHub Rulesets, Environment Approval, and provider permissions are the final constraints. Autonomy scales per project and per action; there is no single risk-blind "full auto" switch.',
    },
    {
      question: 'How is delivery actually verified as complete?',
      answer:
        'Delivery status is grounded in GitHub Checks, Deployment Records, Preview URLs, database state, smoke tests, and manual acceptance, not the Agent\'s natural-language summary. Unexecuted verifications cannot be marked as passed.',
    },
    {
      question: 'How is Agent-Dev different from Replit Agent or Lovable?',
      answer:
        'Replit Agent and Lovable focus on conversational generation and one-click hosting on platform-owned resources. Agent-Dev\'s minimum unit is the product lifecycle: it uses user-owned GitHub/cloud resources, with replaceable Agents and providers, and is accountable for full delivery and long-term maintenance.',
    },
    {
      question: 'What tech stack does the first version support?',
      answer:
        'The first version fixes a Web SaaS Golden Path: React + Vite + TypeScript frontend, Hono API, Cloudflare Pages for frontend hosting, Vercel Functions for API hosting, and GitHub Actions for CI. Supabase provides DB and auth through a guided manual setup. The Agent Runtime runs on your own machine, selectable among installed coding agents such as Codex, OpenCode, and Claude Code.',
    },
    {
      question: 'Which product types are supported?',
      answer:
        'Web SaaS, landing pages, browser extensions (MV3), and desktop apps (Tauri v2) all generate real, buildable project templates. Extensions and desktop apps ship a locally buildable artifact only, without the cloud deploy pipeline; mobile and API tools currently provide guided handoff documents only.',
    },
    {
      question: 'How does Agent-Dev run today?',
      answer:
        'v0.1 is a local-first application, not a hosted SaaS: the control plane runs on your own machine and reuses your existing GitHub, Vercel, and Cloudflare CLI logins plus a local coding agent. It is still a v0.1 experiment, not a production-ready release.',
    },
  ],
};
