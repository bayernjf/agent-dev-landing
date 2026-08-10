// UI 字符串字典：中英双语
// 新增页面文案时，在对应 locale 下追加 key，保持两边同步

export const languages = {
  zh: '简体中文',
  en: 'English',
} as const;

export const defaultLang = 'en';

export const ui = {
  zh: {
    'nav.features': '核心能力',
    'nav.comparison': '对比',
    'nav.principles': '产品宪法',
    'nav.faq': '常见问题',
    'nav.blog': '博客',
    'nav.docs': '文档',
    'nav.about': '关于',
    'nav.pricing': '定价',
    'nav.langSwitch': 'English',

    'hero.badge': 'Agentic Product Delivery Platform',
    'hero.title': '把 AI 生成的代码变成可交付的产品',
    'hero.subtitle': 'Agent-Dev 管理从需求到生产的完整生命周期。用户负责产品决策，Agent-Dev 负责把决定转化成可发布、可验证、可维护的工程系统。',
    'hero.cta.primary': '查看 Golden Path',
    'hero.cta.secondary': '阅读文档',

    'path.title': 'Golden Path',
    'path.subtitle': '从需求到交付报告的完整链路',

    'diff.title': '为什么是 Agent-Dev',
    'diff.subtitle': '不是更快的代码生成器，而是对完整交付负责',

    'compare.title': '与相邻产品对比',
    'compare.subtitle': 'Agent-Dev 不与平台比谁生成页面更快',

    'boundary.title': '责任边界',
    'boundary.subtitle': '透明划分用户与平台的职责，建立信任',

    'principles.title': '产品宪法摘录',
    'principles.subtitle': '约束平台行为的核心原则',

    'faq.title': '常见问题',
    'faq.subtitle': '关于所有权、安全与自动化的关键问题',

    'cta.title': '开始你的第一个产品交付',
    'cta.subtitle': '60 分钟内获得一个归你所有的 Web 产品基线',
    'cta.button': '了解 Golden Path',

    'footer.tagline': 'Agentic Product Delivery Platform',
    'footer.rights': '保留所有权利。',
  },

  en: {
    'nav.features': 'Features',
    'nav.comparison': 'Comparison',
    'nav.principles': 'Principles',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.docs': 'Docs',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.langSwitch': '简体中文',

    'hero.badge': 'Agentic Product Delivery Platform',
    'hero.title': 'Turn AI-generated code into shippable products',
    'hero.subtitle': 'Agent-Dev manages the full lifecycle from requirement to production. You own the product decisions; Agent-Dev turns them into a shippable, verifiable, maintainable engineering system.',
    'hero.cta.primary': 'View Golden Path',
    'hero.cta.secondary': 'Read the Docs',

    'path.title': 'Golden Path',
    'path.subtitle': 'The complete pipeline from requirement to delivery report',

    'diff.title': 'Why Agent-Dev',
    'diff.subtitle': 'Not a faster code generator, but accountability for the full delivery',

    'compare.title': 'Compared to adjacent products',
    'compare.subtitle': "Agent-Dev doesn't compete on who generates pages faster",

    'boundary.title': 'Responsibility Boundary',
    'boundary.subtitle': 'Transparent split between user and platform builds trust',

    'principles.title': 'Product Constitution Excerpts',
    'principles.subtitle': 'Core principles that constrain platform behavior',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Key questions about ownership, security, and automation',

    'cta.title': 'Start your first product delivery',
    'cta.subtitle': 'Get a Web product baseline you own in 60 minutes',
    'cta.button': 'Learn the Golden Path',

    'footer.tagline': 'Agentic Product Delivery Platform',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
