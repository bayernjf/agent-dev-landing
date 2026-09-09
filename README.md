# AgentDev Landing

AgentDev 产品落地页：面向 AI 产品创作者的自主产品交付平台。中英双语静态站点，
部署在 Cloudflare Pages（站点地址见 `astro.config.mjs` 的 `site`：`https://agent-dev.bayjf.com`）。
产品主仓库：[agent-dev](https://github.com/bayernjf/agent-dev)。

## 技术栈

| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（`^7.1.6`，SSG 静态输出） |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite`） |
| SEO / GEO | `@astrojs/sitemap`、`@astrojs/rss`、`public/robots.txt`、`public/llms*.txt` |
| i18n | Astro i18n：`defaultLocale: 'en'`，`locales: ['zh', 'en']`；字典在 `src/i18n/` |
| 共享包 | `@bay/landing-ui`（品牌返链、GitHub Star） |
| Node / 包管理 | >= 22.12 / npm |

## 快速开始

```bash
npm install
npm run dev       # 开发服务器
npm run build     # astro build && node scripts/shot.mjs
npm run preview   # 预览构建产物
npm run shot      # 单独跑预览 / OG 图截图
```

## 目录结构

```
src/
├── components/    # 页面区块与 SEO 组件
├── consts.ts      # SITE_URL 等站点常量
├── data/          # FAQ 等内容数据
├── i18n/          # 中英字典
├── layouts/       # BaseLayout
├── pages/         # 英文在根路径，中文在 /zh/
├── content/       # Content Collections（博客）
└── styles/        # 全局样式
```

## 部署

Cloudflare Pages Git 集成（push 即发）：Framework preset `Astro`，Build command `npm run build`，
Build output directory `dist`，环境变量 `NODE_VERSION = 22`。详见 `docs/DEPLOYMENT.md`。

## 注意

- `npm run build` 内含 `scripts/shot.mjs`（Playwright 截图），预览 / OG 图是构建产物，不入库。
- 改域名时同步 `src/consts.ts` 的 `SITE_URL` 与 `public/robots.txt` 的 Sitemap 地址。
