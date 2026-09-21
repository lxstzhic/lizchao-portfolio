# 李智超｜游戏系统策划作品集

这是李智超的游戏系统策划作品集网站，面向游戏研发岗位投递使用。

网站地址：<https://lxstzhic.github.io/lizchao-portfolio/>

我关注核心循环、规则逻辑、信息反馈和系统迭代，也关注一个设计从文档走到可运行原型时会遇到的具体问题。作品集中既有 Unity 独立项目，也有围绕探索和知识进程展开的系统拆解案，用来说明我如何分析问题、组织规则并验证方案。

## 作品内容

### 《第七十三夜》

像素解谜探索游戏，使用 Unity 独立开发。项目围绕知识锁、梦境规则和线索记录组织探索流程。

- 设计核心循环、系统框架和谜题前置条件
- 实现 3 种梦境规则、日志系统、交互系统和输入检测
- 完成 6 个关卡场景
- 测试发现并修复 18 项问题，推进 7 个版本迭代
- 提供 Windows Demo、视频入口和策划展示文档

### 《来世今生》

探索类科普游戏，使用 Unity 独立开发并与项目成员协作完成。项目把食品添加剂知识融入工厂探索、战斗行动、道具收集和分支结局。

- 设计核心玩法、游戏流程和道具获取规则
- 建立道具与 14 种结局分支之间的关联
- 参与主要功能和游戏内容搭建
- 与美术、文案协作完成资源整合，推进 3 个版本迭代

### 《星际拓荒》探索与知识进程系统拆解案

围绕探索、知识获取和信息门控，分析游戏核心循环、系统联系、玩家认知变化与反馈机制。拆解案包含核心循环、知识进程、信息门控、玩家行为反馈和可迁移设计方法。

## 能力侧重点

- **系统设计与 UI 交互：** 核心循环、逻辑状态机、条件解锁、多分支关联规则，以及系统 UI 交互流程和信息反馈设计。
- **程序与引擎：** Unity3D、C# 编程基础、MVC 架构开发，以及使用 Python 进行数据整理和逻辑验证。
- **文档与协作：** 使用 Word、Excel、PowerPoint 完成策划案、规则表、测试记录和项目汇报；具备英文资料查阅能力，并有美术、程序、运营协作经验。

## 技术栈

- React
- Vite
- JavaScript
- CSS
- GitHub Pages

页面采用响应式布局，资源链接集中管理，图片使用懒加载，生产构建使用相对路径以适配 GitHub Pages 项目站点。

## 项目结构

```text
portfolio/
├─ public/
│  ├─ assets/              # 项目封面与系统图
│  ├─ downloads/           # 已公开的 Demo、文档和简历文件
│  └─ favicon.svg
├─ src/
│  ├─ data/portfolio.js    # 视频、Demo、文档、简历等链接配置
│  ├─ main.jsx             # 页面结构与组件
│  └─ styles.css           # 页面样式与响应式规则
├─ .github/workflows/      # GitHub Pages 自动部署工作流
├─ index.html
├─ vite.config.js
└─ package.json
```

## 本地运行

```bash
npm install
npm run dev
```

打开终端提示的本地地址即可预览页面。

## 构建检查

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`。提交前建议先运行 `npm run build`，确认资源路径和页面编译正常。

## GitHub Pages 部署

仓库已配置 `.github/workflows/deploy.yml`。向 `main` 分支推送后，GitHub Actions 会自动执行安装依赖、构建和发布。

首次部署时，在仓库的 **Settings → Pages** 中将发布来源设置为 **GitHub Actions**。部署完成后访问：

```text
https://lxstzhic.github.io/lizchao-portfolio/
```

## 资源配置

所有项目资源入口集中在 [`src/data/portfolio.js`](src/data/portfolio.js)，包括：

- 视频链接
- Windows 或 Android Demo 下载链接
- 策划文档和系统拆解案
- 简历下载链接
- 项目封面路径和项目标签

目前已放入仓库的资源包括第七十三夜 Windows Demo、项目文档、简历和项目封面。未公开的资源不应直接提交到仓库；Unity 未压缩构建目录也不应上传。

如果要替换链接，只需修改 `src/data/portfolio.js`，然后执行：

```bash
npm run build
git add .
git commit -m "update portfolio resources"
git push origin main
```

视频、Demo 和外部文档链接应使用无需登录即可访问的 HTTPS 地址。
