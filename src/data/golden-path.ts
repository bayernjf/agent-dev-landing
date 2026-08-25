// Golden Path 步骤数据：中英双语，供组件渲染与 HowTo schema 复用
// 单一数据源，避免组件文案与结构化数据不一致

export interface PathStep {
  label: string;
  desc: string;
}

export const goldenPathSteps: Record<'zh' | 'en', PathStep[]> = {
  zh: [
    { label: '需求', desc: '自然语言描述目标与范围' },
    { label: '决策澄清', desc: '仅对真实不确定决策提问' },
    { label: '规格', desc: '验收标准与实施任务' },
    { label: 'Agent 实现', desc: '在隔离 worktree 中执行，Runtime 可选' },
    { label: '本地验证', desc: 'lint / typecheck / unit / build' },
    { label: 'PR', desc: '创建 PR 与质量门禁' },
    { label: 'Vercel API Preview', desc: 'API 先部署' },
    { label: 'Cloudflare Pages Preview', desc: '前端获得 API URL 后部署' },
    { label: '联合冒烟测试', desc: 'CORS / Auth / 环境变量验证' },
    { label: '人工验收', desc: 'Preview Gate 通过' },
    { label: '交付报告', desc: '证据链与残余风险' },
  ],
  en: [
    { label: 'Requirement', desc: 'Describe goal and scope in natural language' },
    { label: 'Clarification', desc: 'Ask only about real uncertain decisions' },
    { label: 'Spec', desc: 'Acceptance criteria and implementation tasks' },
    { label: 'Agent implements', desc: 'Runs in an isolated worktree; runtime is selectable' },
    { label: 'Local verify', desc: 'lint / typecheck / unit / build' },
    { label: 'PR', desc: 'Create PR with quality gates' },
    { label: 'Vercel API Preview', desc: 'Deploy API first' },
    { label: 'Cloudflare Pages Preview', desc: 'Deploy frontend after getting API URL' },
    { label: 'Joint smoke test', desc: 'CORS / Auth / env var validation' },
    { label: 'Manual acceptance', desc: 'Preview Gate passed' },
    { label: 'Delivery report', desc: 'Evidence chain and residual risks' },
  ],
};

// 生成 HowTo schema：帮助 AI 搜索在"如何做 X"类查询中命中
export function buildHowToSchema(lang: 'zh' | 'en', siteUrl: string) {
  const steps = goldenPathSteps[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: lang === 'zh' ? 'Agent-Dev Golden Path：从需求到交付' : 'Agent-Dev Golden Path: from requirement to delivery',
    description:
      lang === 'zh'
        ? '从需求到交付报告的完整链路，每一步都以真实证据判定是否完成。'
        : 'The complete pipeline from requirement to delivery report, with every step judged complete by real evidence.',
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en-US',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.label,
      text: s.desc,
    })),
  };
}
