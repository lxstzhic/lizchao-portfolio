export const links = {
  VIDEO_DREAM73_URL: 'https://www.bilibili.com/video/BV1e5Ys61Ess/', DEMO_DREAM73_URL: './downloads/Dream73_Demo_Windows.zip', DOC_DREAM73_URL: './downloads/第七十三夜策划展示.pptx',
  VIDEO_AFTERLIFE_URL: 'https://www.bilibili.com/video/BV1oM4y1e7My/', DEMO_AFTERLIFE_URL: './downloads/Afterlife_Demo_Android.zip', DOC_AFTERLIFE_URL: './downloads/来世今生策划案.xlsx',
  DOC_OUTER_WILDS_URL: './downloads/《星际拓荒》探索与知识进程系统拆解.docx', RESUME_URL: './downloads/resume_lizchao.pdf'
};
export const projects = [
  { id:'dream73', title:'《第七十三夜》', type:'像素解谜探索游戏', date:'2026.07 — 2026.08', image:'./assets/dream73-cover.png', featured:true, summary:'以知识锁与轻度 Meta 要素为核心，围绕规则学习、线索记录和谜题解锁组织探索流程。', role:'独立设计核心循环与系统框架，完成规则、交互、日志及 6 个关卡场景的 Unity 落地。', tags:['Unity 独立开发','知识锁','MVC','6 个关卡','7 次迭代'], video:links.VIDEO_DREAM73_URL, demo:links.DEMO_DREAM73_URL, doc:links.DOC_DREAM73_URL, extra:'查看迭代记录', metrics:['3 种梦境规则','18 项问题修复','7 个版本迭代'] },
  { id:'afterlife', title:'《来世今生》', type:'探索类科普游戏', date:'2023.05 — 2023.06', image:'./assets/afterlife-cover.png', summary:'以小麦为主角，将食品添加剂知识融入工厂探索、战斗行动、道具收集和分支结局。', role:'设计核心玩法、流程与道具—结局关联规则，协作完成资源整合并推进 3 个版本。', tags:['Unity 协作','科普叙事','14 种结局','流程设计'], video:links.VIDEO_AFTERLIFE_URL, demo:links.DEMO_AFTERLIFE_URL, doc:links.DOC_AFTERLIFE_URL, metrics:['14 种结局分支','3 个版本迭代','跨职能协作'] },
  { id:'outer-wilds', title:'《星际拓荒》探索与知识进程系统拆解案', type:'游戏系统分析作品', date:'2026.07 — 2026.08', image:'./assets/outer-wilds-analysis.png', summary:'围绕探索、知识获取和信息门控，分析核心循环、系统联系、玩家认知变化与反馈机制。', role:'从系统目标、知识进程、信息门控和反馈机制四个层面完成结构化拆解。', tags:['系统分析','信息门控','知识进程','迁移方法'], doc:links.DOC_OUTER_WILDS_URL, metrics:['核心循环图','知识进程图','系统关系图'] }
];


export const profile = {
  name: '李智超', englishName: 'LI ZHICHAO', email: 'lxst_zhi@163.com', phone: '18367103575',
  github: 'https://github.com/lxstzhic/lizchao-portfolio',
  intro: '我喜欢把想法拆成清晰的规则，再把规则做成可以体验的作品。从玩法构思、空间组织到交互实现，我关注每一个决定如何影响最终体验。',
  skills: [
    { title: '设计与逻辑', text: '梳理核心循环、状态变化、条件解锁与多分支关联，将想法细化为可执行、可测试的方案。', tags: ['规则设计', 'UI 交互', '信息反馈'] },
    { title: '开发与实现', text: '使用 Unity 构建可玩原型，具备 C# 编程基础与 MVC 架构实践；使用 Python、MATLAB 辅助数据整理与逻辑验证。', tags: ['Unity / C#', 'MVC', 'Python / MATLAB'] },
    { title: '表达与协作', text: '用策划案、规则表和测试记录明确目标与交付，有与美术、文案协作推进项目的经验。大学英语六级，可查阅英文资料。', tags: ['文档表达', '测试迭代', '项目协作'] },
  ],
};
// 视频平台页面填 HTTPS 链接；没有链接时保持空字符串，不生成无效按钮。
// Demo 已发布到 GitHub Releases；更新版本时先上传新附件，再修改 demoUrl。
export const dream3d = {
  id: 'dream73-3d', title: '第七十三夜', subtitle: '3D 探索解谜 · 0.4',
  date: '2026.09 — 2026.10', role: '个人独立制作',
  summary: '从二维规则实验走向可探索的三维空间。以倒影、回声与对齐为线索，让玩家在观察、验证和回访中逐步理解这个世界。',
  description: '水务、回声设施、天文台与终章房间串联为一段探索旅程。规则学习、跨区回访、捷径、日志与双结局共同构成作品体验。',
  designVideoUrl: '', demoUrl: 'https://github.com/lxstzhic/lizchao-portfolio/releases/download/night73-v0.4/Night73_0.4_Windows.zip', docUrl: './downloads/dream73_3d_design.xlsx',
  evolutionVideoUrl: './media/dream73_3d_evolution.mp4',
  cover: './assets/dream73_3d/cover.png',
  highlights: [
    { title: '规则成为探索的线索', text: '倒影、回声、对齐三种规则贯穿观察与解谜；知识可以提前使用，阅读日志不是解锁能力的条件。' },
    { title: '空间连接承担玩法', text: '以地标、跨区交通、回访支路和捷径组织路线，让空间关系参与问题的发现与解决。' },
    { title: '从原型推进到完整体验', text: '将区域建模、交互提示、双页日志、存档、界面与声音整合到 0.4 可玩版本。' },
  ],
  gallery: [
    {src:'./assets/dream73_3d/1.png', label:'01 / 水务街区', type:'实机画面'},
    {src:'./assets/dream73_3d/2.png', label:'02 / 空间交互', type:'实机画面'},
    {src:'./assets/dream73_3d/3.png', label:'03 / 终章房间', type:'实机画面'},
    {src:'./assets/dream73_3d/4.png', label:'04 / 区域与路线', type:'实机画面'},
    {src:'./assets/dream73_3d/5.png', label:'05 / 天文台', type:'实机画面'},
    {src:'./assets/dream73_3d/6.png', label:'06 / 回声设施', type:'实机画面'},
    {src:'./assets/dream73_3d/cover.png', label:'07 / 开始界面', type:'界面设计'},
    {src:'./assets/dream73_3d/overview.png', label:'08 / 项目概述', type:'设计文档'},
    {src:'./assets/dream73_3d/2D.png', label:'09 / 平面路线', type:'设计文档'},
    {src:'./assets/dream73_3d/3D.png', label:'10 / 空间结构', type:'设计文档'},
    {src:'./assets/dream73_3d/beat.png', label:'11 / 关卡节奏', type:'设计文档'},
  ],
};
