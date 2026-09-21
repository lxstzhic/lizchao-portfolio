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

