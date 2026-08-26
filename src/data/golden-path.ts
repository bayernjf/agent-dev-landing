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
    { label: 'Blueprint', desc: '生成结构化产品规格与验收标准' },
    { label: '资源归属', desc: '确认 GitHub/云平台归属，具名审批' },
    { label: 'Local Apply', desc: '隔离工作区生成工程基线与 Git 初始化' },
    { label: '质量门禁', desc: 'lint / typecheck / unit / build 真实执行' },
    { label: 'Feature Task', desc: '定义功能目标与边界，人工批准后执行' },
    { label: 'Agent 实现', desc: '可替换 Runtime（Codex/OpenCode）在沙箱中编码' },
    { label: 'PR + CI', desc: '平台推送并开 PR，GitHub Actions 质量门禁' },
    { label: 'Dual Preview', desc: 'Vercel API + Cloudflare Pages 联合部署' },
    { label: '生产发布', desc: '从生产分支 checkout，两道人工闸门后发布' },
    { label: '交付报告', desc: '证据链、观测值与残余风险汇总' },
  ],
  en: [
    { label: 'Requirement', desc: 'Describe goal and scope in natural language' },
    { label: 'Clarification', desc: 'Ask only about real uncertain decisions' },
    { label: 'Blueprint', desc: 'Generate structured product spec and acceptance criteria' },
    { label: 'Resource ownership', desc: 'Confirm GitHub/cloud ownership with named approval' },
    { label: 'Local Apply', desc: 'Generate engineering baseline and Git init in isolated workspace' },
    { label: 'Quality gate', desc: 'lint / typecheck / unit / build actually executed' },
    { label: 'Feature Task', desc: 'Define feature goal and boundary; execute after human approval' },
    { label: 'Agent implements', desc: 'Replaceable runtime (Codex/OpenCode) codes in sandbox' },
    { label: 'PR + CI', desc: 'Platform pushes and opens PR; GitHub Actions quality gate' },
    { label: 'Dual Preview', desc: 'Vercel API + Cloudflare Pages joint deployment' },
    { label: 'Production release', desc: 'Checkout from production branch; release after two human gates' },
    { label: 'Delivery report', desc: 'Evidence chain, observations, and residual risks' },
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
