# 李智超｜个人作品集

**设计思考 · Unity 开发 · 交互实现 · 项目迭代**

[浏览作品集](https://lxstzhic.github.io/lizchao-portfolio/) · [简历](public/downloads/resume_lizchao.pdf) · [邮件联系](mailto:lxst_zhi@163.com)

我目前在读硕士，持续进行 Unity 项目实践。我关注如何把想法整理成清晰的规则，再通过空间、交互和反馈把它变成可以体验的作品。这个网站集中展示我的设计思考、实现过程与项目成果，方便从不同岗位视角了解我的能力。

## 作品

| 项目 | 内容 | 展示重点 |
| --- | --- | --- |
| **《第七十三夜》3D 版** | 个人独立制作的探索解谜游戏，0.4 版本 | 规则与空间、实机画面、设计说明、建模演进、策划案与迭代记录 |
| 《第七十三夜》2D 版 | Unity 像素解谜探索游戏 | 3 种梦境规则、6 个关卡场景、18 项问题修复、7 个版本迭代 |
| 《来世今生》 | 探索类科普游戏 | 核心玩法、道具与 14 种结局关联、美术与文案协作、3 个版本迭代 |
| 《星际拓荒》系统拆解 | 探索与知识进程分析 | 核心循环、信息门控、玩家认知变化与反馈 |

首页先以四张滚动叠放卡片呈现项目，向下滚动时前一张缩小、后一张覆盖；3D 项目另设紧凑的图片与视频详情区：
- 项目封面：`dream3D_封面.png`。
- 实机展示：`dream3D_1.png` 至 `dream3D_6.png`，在横向图片带中浏览。
- 设计说明：概述、2D 平面路线、3D 空间结构、关卡节奏，完整显示原图。
- 11 张图片以横向图片带自动滚动，支持全部、实机、设计说明、封面分类；悬停暂停并放大，左右按钮切换，手机可滑动。所有图片仍可点击查看大图、方向键切换及 Esc 关闭。
- **四区建模演进**播放本地 MP4；**设计展示**单独配置视频平台链接，二者互不替代。

## 内容配置

主要配置文件是 [src/data/portfolio.js](src/data/portfolio.js)：

| 配置 | 用途 |
| --- | --- |
| `profile` | 姓名、邮箱、电话、GitHub、个人介绍和能力 |
| `links` | 原有视频、Demo、文档和简历链接，已保留原值 |
| `projects` | 原有三个项目的简介、标签、封面和入口 |
| `dream3d` | 3D 项目内容、图库、视频和资源入口 |
| `dream3d.designVideoUrl` | 设计展示的视频平台 HTTPS 页面地址，目前为空 |
| `dream3d.evolutionVideoUrl` | 四区建模演进 MP4，已接入本地文件 |
| `dream3d.demoUrl` | 3D Windows Demo 公开下载地址，已接入 Release 0.4 |
| `dream3d.docUrl` | 3D 策划案及迭代记录 Excel |

空链接不会生成虚假的可点击入口；页面如实显示对应资源尚未发布。填好链接后，入口自动启用。动效与图片带组件在 `src/components/MotionShowcase.jsx`。小屏或卡片高于可读视口时取消吸顶；系统开启减少动态效果时停用自动滚动和缩放。界面标题与结构在 `src/main.jsx`，样式在 `src/styles.css`，SEO 信息在 `index.html`。

## 本地预览与构建

网站继续使用 React、Vite、JavaScript 和 CSS，沿用已有技术栈。图片、文档与本地视频无需外部图床。

```powershell
cd E:\unity\portfolio
npm ci
npm run dev
```

生产构建与预览：

```powershell
npm run build -- --emptyOutDir false
npm run preview
```

`--emptyOutDir false` 保留已有本地构建文件。GitHub Actions 在干净环境构建，仍使用 `npm run build`。

## 3D Demo 发布与更新

0.4 已上传至 [GitHub Release](https://github.com/lxstzhic/lizchao-portfolio/releases/tag/night73-v0.4)，并接入网页。匿名下载验证通过。原始 ZIP 约 155 MB，保留在本地 `demos/`，不进入普通 Git 提交或 Pages 目录。后续更新方式：

1. 打开 [新建 Release](https://github.com/lxstzhic/lizchao-portfolio/releases/new)。
2. 创建标签，例如 `night73-v0.4`，填写标题“第七十三夜 3D · 0.4”。
3. 在附件区域上传 `E:\unity\portfolio\demos\Night73_0.4_Windows.zip`，发布 Release。
4. 复制已发布附件的下载地址，填入 `dream3d.demoUrl`。在无登录窗口确认可下载。
5. 提交并推送配置更新。

仅在完成以上上传后，对应地址才有效，不能只凭命名拼接链接。3D Demo 的发布状态不影响原有 Windows/Android Demo 的入口。

## GitHub Pages 更新

仓库已配置 [自动部署工作流](.github/workflows/deploy.yml)。Pages 来源选 GitHub Actions；推送到 `main` 后自动构建部署。`base: './'` 适配项目路径。

```powershell
git add .gitignore README.md index.html src public/assets/dream73_3d public/media/dream73_3d_evolution.mp4 public/downloads/dream73_3d_design.xlsx public/downloads/Afterlife_Demo_Android.zip
git commit -m "refresh personal portfolio and add Night73 3D"
git -c http.proxy=http://127.0.0.1:7890 push origin main
```

最后一条命令沿用本机已配置的 7890 代理端口；不使用代理时执行 `git push origin main`。

## 素材目录

- `public/assets/dream73_3d/`：用于网站的 3D 图片，保留原图质量。
- `public/media/`：建模演进视频，按用户操作播放，不自动播放。
- `public/downloads/`：允许发布的文档、简历及原有 Demo。
- `images/`、`documents/`、`demos/`：本地原始素材，保留但忽略后续 Git 跟踪。
- `output/playwright/`：本地浏览器检查截图，不发布。

原有素材及 Unity 工程没有修改。新增公开文件需检查 `.gitignore` 白名单；只把文件放进本地 `public/downloads/` 而未加入提交，会导致线上 404。
