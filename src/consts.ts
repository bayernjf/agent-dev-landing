// 站点级常量，集中管理便于跨页面/组件复用
// 部署到自定义域名后，需同步修改 astro.config.mjs 的 site 字段

export const SITE_URL = 'https://agent-dev.bayjf.com';
export const SITE_NAME = 'Agent-Dev';
export const SITE_TITLE = 'Agent-Dev | Agentic Product Delivery Platform';
export const SITE_DESCRIPTION =
  'Agent-Dev 是 Agentic Product Delivery Platform，把 AI 生成的代码变成已上线、可验证、可维护的产品。管理从需求到生产的完整生命周期，四个真实项目已通过真实云端全链路交付。';
export const SITE_DESCRIPTION_EN =
  'Agent-Dev is an Agentic Product Delivery Platform that turns AI-generated code into shipped, verifiable, maintainable products. Manages the full lifecycle from requirement to production, with four real projects delivered end-to-end on real cloud infrastructure.';
export const AUTHOR = 'Agent-Dev';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 社交与外部链接
export const SOCIAL = {
  github: 'https://github.com/bayernjf/agent-dev',
  docs: 'https://github.com/bayernjf/agent-dev/tree/main/docs',
  email: 'b4yernjf@gmail.com',
};

// 默认 OG 图片
export const OG_IMAGE = {
  zh: '/og/og-zh.png',
  en: '/og/og-en.png',
};
