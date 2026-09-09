# 部署 — agent-dev-landing

更新时间：2026-09-09

## 站点信息
- `astro.config.mjs` 的 `site`：`https://agent-dev.bayjf.com`
- 技术栈：Astro 7（SSG）+ Tailwind CSS 4（`@tailwindcss/vite`）+ `@bay/landing-ui`
- Node：`>=22.12.0`（`package.json` engines）
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview   # 本地预览 dist/
```
`npm run build` 末尾会跑 `scripts/shot.mjs`（Playwright 截图产出预览 / OG 图），
CI 上需要能安装 Chromium（`npx playwright install chromium`）。

## 部署方式
README 目前仍是 Astro starter 模板的原文，没有记录部署配置。按同系列落地页的惯例处理
（**尚未在本仓库文档中确认，首次部署时以 Cloudflare Dashboard 实际配置为准**）：

- Cloudflare Pages，Git 集成（push 即构建，无 GitHub Actions）
- Framework preset：`Astro`
- Build command：`npm run build`
- Build output directory：`dist`
- 环境变量：`NODE_VERSION = 22`

## 发布后验证
1. 首页（中英双语）与 `/zh/` 路径可访问。
2. `robots.txt`、`sitemap.xml` 可访问，且 sitemap 里的域名与实际域名一致。
3. OG 图（构建产物）能正常返回图片。

## 待补
- 把 Pages 项目名、生产分支、自定义域名回填本文档（当前只在 `astro.config.mjs` 里有 site）。
