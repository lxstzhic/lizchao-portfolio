export const links = {
  VIDEO_DREAM73_URL: 'https://www.bilibili.com/video/BV1e5Ys61Ess/', DEMO_DREAM73_URL: './downloads/Dream73_Demo_Windows.zip', DOC_DREAM73_URL: './downloads/第七十三夜策划展示.pptx',
  VIDEO_AFTERLIFE_URL: 'https://www.bilibili.com/video/BV1oM4y1e7My/', DEMO_AFTERLIFE_URL: './downloads/Afterlife_Demo_Android.zip', DOC_AFTERLIFE_URL: './downloads/来世今生策划案.xlsx',
  DOC_OUTER_WILDS_URL: './downloads/《星际拓荒》探索与知识进程系统拆解.docx', RESUME_URL: './downloads/resume_lizchao_20261006.pdf'
};
export const projects = [
  { id:'dream73', title:'《第七十三夜》2D 原型', type:'像素解谜探索游戏', date:'2026.07 — 2026.08', image:'./assets/dream73-cover.png', featured:true, summary:'《第七十三夜》的早期 2D 原型，以知识锁与轻度 Meta 要素组织规则学习、线索记录和谜题解锁，保留最初的设计与迭代过程。', role:'独立设计核心循环与系统框架，完成规则、交互、日志及 6 个关卡场景的 Unity 落地。', tags:['Unity 独立开发','知识锁','MVC','6 个关卡','7 次迭代'], video:links.VIDEO_DREAM73_URL, demo:links.DEMO_DREAM73_URL, doc:links.DOC_DREAM73_URL, extra:'查看迭代记录', metrics:['3 种梦境规则','18 项问题修复','7 个版本迭代'] },
  { id:'afterlife', title:'《来世今生》', type:'探索类科普游戏', date:'2023.05 — 2023.06', image:'./assets/afterlife-cover.png', summary:'以小麦为主角，把食品生产过程转化为探索、战斗与材料选择；将战斗推进、材料组合和离开方式关联为多周目分支体验。', role:'承担核心策划、程序实现、UI 与测试。在两周制作窗口内舍弃经营模块，与 1 名美术、2 名参与文案的成员协作，交付游戏、视频与策划案。', tags:['核心策划与开发','战斗配置','分支判定','范围取舍'], video:links.VIDEO_AFTERLIFE_URL, demo:links.DEMO_AFTERLIFE_URL, doc:links.DOC_AFTERLIFE_URL, metrics:['12 个可收集结局 + 2 种终局选择','3 个版本迭代','两周制作窗口'] },
  { id:'outer-wilds', title:'《星际拓荒》探索与知识进程系统拆解案', type:'游戏系统分析作品', date:'2026.07 — 2026.08', image:'./assets/outer-wilds-analysis.png', summary:'围绕“知识如何改变下一次行动”，结合碎空星、沙漏双星分析时间变化与区域可达性，梳理线索获取、规则理解和后续探索的关系。', role:'整理知识来源、时间窗口、关联地点等 10 项线索信息，归纳可观察、可推导、可验证等 5 项原则，解释信息门控如何影响探索路径。', tags:['系统分析','信息门控','知识进程','迁移方法'], doc:links.DOC_OUTER_WILDS_URL, metrics:['核心循环图','知识进程图','系统关系图'] }
];


export const profile = {
  name: '李智超', englishName: 'LI ZHICHAO', email: 'lxst_zhi@163.com', phone: '18367103575',
  github: 'https://github.com/lxstzhic/lizchao-portfolio',
  education: '江南大学 · 2027 届硕士',
  intro: '我关注玩家如何理解规则、选择路径，并从行动中获得反馈。在 Unity 项目中，我把这些问题落实为关卡白盒、主支动线、交互条件和界面，再通过试玩提出修改并复测。',
  background: '江南大学 2027 届硕士在读。从 2D 规则原型到 3D 探索解谜，我持续推进设计、实现与交付；也在科普游戏中承担核心策划与开发，与美术、文案成员协作完成作品。',
  skills: [
    { title: '空间与玩法设计', text: '从空场景搭建关卡白盒与机关原型，组织主支路线、高差、回访和捷径；结合角色移动与镜头视野调整尺度，安排规则教学与组合挑战。', tags: ['白盒原型', '主支动线', '规则教学'] },
    { title: '引擎与程序基础', text: '配置 Unity 的 Prefab、碰撞体、Trigger 和场景引用；具备 C# 基础，能编写或修改交互触发、条件判定、事件调用与 UI 响应逻辑。使用 Python 辅助数据整理与逻辑验证。', tags: ['Unity / C#', '交互与状态', 'Python / SVN'] },
    { title: '视觉与交互体验', text: '使用 Blender、Krita 制作模型与平面视觉，设计界面布局、信息层级和操作流程；结合地标、路线配色、提示位置与触发时机，组织空间引导和操作反馈。', tags: ['Blender / Krita', 'UI 与信息层级', '视觉引导'] },
    { title: '评估与协作交付', text: '根据试玩定位问题、调整方案并复测；以 Office、Visio 编写规则表、流程图与测试记录，使用 SVN 管理版本。根据制作窗口取舍功能，与美术、文案协作交付。', tags: ['问题定位与复测', '制作范围控制', '英语六级'] },
  ],
};
// 视频平台页面填 HTTPS 链接；没有链接时保持空字符串，不生成无效按钮。
// Demo 已发布到 GitHub Releases；更新版本时先上传新附件，再修改 demoUrl。
export const dream3d = {
  id: 'dream73-3d', title: '第七十三夜', subtitle: '3D 探索解谜 · 0.4',
  date: '2026.09 — 2026.10', role: '个人独立制作',
  summary: '针对解谜后反复原路返回的问题，将探索流程重构为连续主路、跨层支路与返程捷径。通过高处回望、检修后启用滑索及跨区交通，让学到的规则参与下一段探索。',
  description: '涵盖水务、回声、天文台与终章 4 个区域，围绕倒影、回声、对齐 3 种规则安排单规则教学、双规则主路与三规则支线，接入 2 种结局。当前为 0.4 发布版。',
  designVideoUrl: 'https://www.bilibili.com/video/BV1r8HZ6WE7k/', demoUrl: 'https://github.com/lxstzhic/lizchao-portfolio/releases/download/night73-v0.4/Night73_0.4_Windows.zip', docUrl: './downloads/dream73_3d_design.xlsx',
  evolutionVideoUrl: './media/dream73_3d_evolution.mp4',
  cover: './assets/dream73_3d/cover.png',
  metrics: ['4 个区域 / 3 种规则', '2 种结局', '0.4 发布版'],
  highlights: [
    { title: '以动线重构回应重复折返', text: '保留有新信息的回访，用跨层支路、高处回望和返程捷径重新组织路径。支路承担观察与探索价值，而不只是延长路程。' },
    { title: '让知识通过行动被验证', text: '从单规则教学推进到组合运用；玩家可提前尝试有效操作，不以读取日志作为能力解锁前提。按楼层与教学时机限制提示，避免提前揭示答案。' },
    { title: '把试玩问题落到可复测修改', text: '针对提示提前泄露、车内失去乘车交互资格、重开后角色失控，分别调整提示范围、交互判定和状态恢复。将问题定位、修订与复测形成迭代记录。' },
  ],
  iterationCases: [
    {title:'乘车交互：覆盖真实操作位置', text:'原判定只覆盖站台中心附近，进入车厢后会失去交互资格。修订后覆盖站台及停靠车厢，并增加呼叫柱与乘车说明；检查重点从站台发车扩展到车内操作。'},
    {title:'重开状态：恢复可玩的初始状态', text:'重开时残留的暂停状态曾导致角色无法移动或转动视角。修订状态恢复逻辑，并将移动、视角与重开流程纳入复测。'},
    {title:'迭代与交付', text:'通过试玩定位交互与状态问题，推进方案调整和复测，完成 0.4 可玩版本发布。同步整理策划文档、迭代记录与演示素材。'},
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
