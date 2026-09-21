# 李智超｜游戏系统策划作品集

轻量 Vite + React 单页作品集，适合部署到 GitHub Pages。页面展示《第七十三夜》《来世今生》和《星际拓荒》系统拆解案，资源入口集中在 `src/data/portfolio.js`。

## 本地运行

```bash
npm install
npm run dev
```

## 构建检查

```bash
npm run build
npm run preview
```

## GitHub Pages 部署

1. 将 `portfolio` 目录推送到 GitHub 仓库（推荐仓库名 `lizchao-portfolio`）。
2. 在仓库 Settings → Pages 中选择 **GitHub Actions**。
3. 使用 Vite 静态站点工作流，构建产物目录为 `dist`。`vite.config.js` 已设置 `base: './'`，适合项目页路径。
4. 发布后访问 `https://<用户名>.github.io/<仓库名>/`。

## 发布前替换内容

`src/data/portfolio.js` 中仍需替换：`VIDEO_DREAM73_URL`、`VIDEO_AFTERLIFE_URL`、`DEMO_AFTERLIFE_URL`、`RESUME_URL`，以及《星际拓荒》文档对应的公开 PDF/在线预览地址。当前可公开的第七十三夜 Windows ZIP 与三份本地文档已放在 `public/downloads`，截图已放在 `public/assets`。不要提交 Unity 未压缩构建目录、私人资料或未授权源文件；Android Demo 也应先转为可公开访问的 ZIP/Release 链接。

页面会把仍为占位符的入口显示为不可用状态，不会伪装成已发布链接。
