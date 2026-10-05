import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Download, Play, FileText, Mail, X, Maximize2} from 'lucide-react';
import {projects, links, profile, dream3d} from './data/portfolio';
import './styles.css';
import {ImageRail, ProjectStack} from './components/MotionShowcase';

const usable = url => typeof url === 'string' && url.trim() && !/_URL$/.test(url);
function ResourceLink({href, children, icon: Icon = ArrowUpRight, primary = false}) {
  if (!usable(href)) return null;
  return <a className={primary ? 'button primary' : 'button'} href={href} target="_blank" rel="noopener noreferrer"><Icon size={17}/>{children}<ArrowUpRight className="outbound" size={14}/></a>;
}
function Lightbox({index, setIndex, onClose, trigger}) {
  const dialog = useRef(null);
  const items = dream3d.gallery;
  useEffect(() => {
    const node = dialog.current;
    node.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; trigger?.focus(); };
  }, [trigger]);
  const move = step => setIndex(i => (i + step + items.length) % items.length);
  return <dialog ref={dialog} className="lightbox" aria-label="项目图片浏览" onCancel={e => {e.preventDefault(); onClose();}} onClick={e => {if(e.target === e.currentTarget) onClose();}} onKeyDown={e => {
    if(e.key === 'ArrowRight') { e.preventDefault(); move(1); }
    if(e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
  }}>
    <div className="lightbox-top"><span aria-live="polite">{items[index].label} · {index + 1} / {items.length}</span><button autoFocus className="icon-button" onClick={onClose} aria-label="关闭图片"><X/></button></div>
    <img src={items[index].src} alt={items[index].label}/>
    <div className="lightbox-controls"><button className="button" onClick={() => move(-1)} aria-label="上一张图片"><ArrowLeft/>上一张</button><span>← → 切换 · Esc 关闭</span><button className="button" onClick={() => move(1)} aria-label="下一张图片">下一张<ArrowRight/></button></div>
  </dialog>;
}
function Gallery() {
  const [index, setIndex] = useState(null);
  const trigger = useRef(null);
  return <><ImageRail modalOpen={index !== null} onOpen={(i,element)=>{trigger.current=element;setIndex(i);}}/>
    {index !== null && <Lightbox index={index} setIndex={setIndex} onClose={() => setIndex(null)} trigger={trigger.current}/>}
  </>;
}
function LegacyProject({project: p, number}) {
  return <article className="legacy-card" id={p.id}><div className="legacy-media"><img loading="lazy" src={p.image} alt={p.title + '封面'}/><span className="project-number">0{number}</span></div>
    <div className="legacy-content"><span className="eyebrow">{p.date} / {p.type}</span><h3>{p.title}</h3><p>{p.summary}</p><p className="role"><b>我的工作</b>{p.role}</p>
      <div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="metrics">{p.metrics.map(m => <span key={m}>{m}</span>)}</div>
      <div className="actions"><ResourceLink href={p.video} icon={Play}>观看视频</ResourceLink><ResourceLink href={p.demo} icon={Download}>{p.id === 'afterlife' ? 'Android Demo 下载' : 'Windows Demo 下载'}</ResourceLink><ResourceLink href={p.doc} icon={FileText}>查看文档</ResourceLink></div>
      {p.id === 'dream73-overview' && <a className="button primary stack-detail-link" href="#dream73-3d">查看图片、视频与项目详情 <ArrowDown size={16}/></a>}{p.id !== 'outer-wilds' && p.id !== 'dream73-overview' && <details id={'detail-' + p.id}><summary>查看详情与迭代</summary><p>{p.id === 'dream73' ? '从规则学习、线索记录到谜题解锁，围绕知识锁组织核心循环。独立设计谜题前置条件与锁状态变化，基于 MVC 架构搭建日志、交互和输入检测。完成 6 个关卡场景，测试发现并修复 18 项问题，推进 7 个版本；具体方案见策划展示文档。' : '根据试玩中攻击过快、敌人过密及生命值过高的问题，调整攻击间隔、布怪密度与生命值。在累计击败 5、11、18 名敌人时开放 3 类核心材料选择；梳理材料用量、额外材料和离开方式的条件优先关系，实现 12 个可收集结局与 2 种终局选择并逐一测试触发。两周内舍弃经营模块，集中完成探索、战斗与结局流程。'}</p></details>}
    </div></article>;
}
function App() {
  return <>
    <a className="skip-link" href="#works">跳到作品</a>
    <header className="nav"><a className="brand" href="#top">李智超<span> / </span>PORTFOLIO</a><nav aria-label="主导航"><a href="#about">关于我</a><a href="#capabilities">能力</a><a href="#works">作品</a><a href="#contact">联系</a></nav><span className="nav-year">SELECTED / 2026</span></header>
    <main>
      <section className="hero wrap" id="top"><div className="hero-kicker"><span>个人作品集 / DESIGN & DEVELOPMENT</span><span>01 — 04</span></div>
        <h1><span className="hero-en">HI, I'M</span> <span className="hero-name">{profile.name}<span className="hero-dot">.</span></span></h1>
        <div className="hero-stage"><img className="hero-image" src={dream3d.gallery[4].src} alt="第七十三夜 3D 天文台场景" fetchPriority="high"/><div className="hero-overlay"><span className="eyebrow">LATEST WORK / 0.4</span><h2>让构想<br/>成为可体验的作品。</h2><p>设计规则，组织空间，打磨交互。<br/>用实际作品记录思考与实现的过程。</p><a className="button primary" href="#dream73-3d">探索最新作品 <ArrowDown size={17}/></a></div><div className="hero-credit">第七十三夜 · 3D 探索解谜 / 实机画面</div></div>
        <div className="hero-bottom"><p>{profile.education} · Unity 设计与开发</p><ResourceLink href={links.RESUME_URL} icon={Download}>下载简历</ResourceLink><a href={'mailto:' + profile.email}>{profile.email}<ArrowUpRight size={16}/></a></div>
      </section>
      <section className="about wrap" id="about"><span className="eyebrow">01 / ABOUT ME</span><div className="about-grid"><h2>从一个问题，<br/><span className="muted">到一个作品。</span></h2><div><p className="about-lead">{profile.intro}</p><p>{profile.background}</p><a className="text-link" href="#contact">交流想法 <ArrowUpRight size={18}/></a></div></div></section>
      <section className="capabilities" id="capabilities"><div className="wrap"><div className="section-heading"><span className="eyebrow">02 / WHAT I BRING</span><h2>把想法做完整。</h2><p>以可玩的空间、可解释的规则和可复核的迭代，呈现实际工作。</p></div>{profile.skills.map((skill, i) => <div className="skill-row" key={skill.title}><span className="skill-number">0{i + 1}</span><h3>{skill.title}</h3><div><p>{skill.text}</p><div className="tags">{skill.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>)}</div></section>
      <section className="works wrap" id="works"><div className="section-heading works-heading"><span className="eyebrow">03 / SELECTED WORKS</span><h2>作品，是我的回答<span>.</span></h2><p>四份作品展示：《第七十三夜》的 2D 原型与 3D 版本、协作游戏，以及玩法研究。</p></div>
        <ProjectStack>
          <LegacyProject number={1} project={{id:'dream73-overview',title:'《第七十三夜》3D',type:dream3d.subtitle,date:dream3d.date,image:dream3d.cover,summary:dream3d.summary,role:dream3d.role+'。'+dream3d.description,tags:['3D 探索解谜','Unity','规则与空间'],metrics:dream3d.metrics,video:dream3d.designVideoUrl,demo:dream3d.demoUrl,doc:dream3d.docUrl}}/>
          {projects.map((p,i)=><LegacyProject project={p} number={i+2} key={p.id}/>)}
        </ProjectStack>
        <div className="detail-divider"><span className="eyebrow">FEATURED PROJECT / 深入作品</span><p>查看实机、设计说明与制作过程 ↓</p></div>
        <article className="featured-project" id="dream73-3d"><div className="featured-head"><span className="big-number">01</span><div><span className="eyebrow">FEATURED / {dream3d.date}</span><h2>{dream3d.title}<span>3D</span></h2><p>{dream3d.subtitle} · {dream3d.role}</p></div><div className="featured-links"><ResourceLink href={dream3d.docUrl} icon={FileText}>查看策划案与迭代记录</ResourceLink>{usable(dream3d.demoUrl) ? <ResourceLink href={dream3d.demoUrl} icon={Download} primary>Windows Demo 下载</ResourceLink> : <span className="resource-status"><Download size={16}/>Windows Demo · 下载链接尚未发布</span>}</div></div>
          <div className="featured-intro"><p>{dream3d.summary}</p><p>{dream3d.description}</p></div>
          <div className="project-highlights">{dream3d.highlights.map((h, i) => <div key={h.title}><span>0{i + 1}</span><h3>{h.title}</h3><p>{h.text}</p></div>)}</div>
          <div className="iteration-cases">{dream3d.iterationCases.map(item=><details key={item.title}><summary>{item.title}</summary><p>{item.text}</p></details>)}</div>
          <Gallery/>
          <div className="video-grid"><section className="video-panel"><div className="video-heading"><span className="eyebrow">PROCESS FILM / 01</span><h3>四区建模演进</h3></div><video controls playsInline preload="none" poster={dream3d.gallery[9].src} src={dream3d.evolutionVideoUrl} aria-label="四区建模演进视频">浏览器不支持播放，请<a href={dream3d.evolutionVideoUrl}>下载视频</a>。</video><p>从灰盒、白模到材质模型与 Unity 场景的过程展示。演进镜头为模型与编辑器取景。</p><ResourceLink href={dream3d.evolutionVideoUrl} icon={Play}>打开建模演进视频</ResourceLink></section>
            <section className="video-panel"><div className="video-heading"><span className="eyebrow">DESIGN SHOWCASE / 02</span><h3>设计展示</h3></div><div className="design-video"><img src={dream3d.cover} alt="第七十三夜设计展示封面" loading="lazy"/><div>{usable(dream3d.designVideoUrl) ? <ResourceLink href={dream3d.designVideoUrl} icon={Play} primary>观看设计展示</ResourceLink> : <><Play size={36}/><span>设计展示视频尚未发布</span></>}</div></div><p>玩法思路、空间结构与交互体验的综合展示。与建模演进分开呈现。</p></section></div>
        </article>
        <section className="analysis" id="analysis"><div><span className="eyebrow">SYSTEM BREAKDOWN</span><h3>把体验拆成<br/>可以讨论的结构。</h3><p>以碎空星、沙漏双星为例，讨论时间变化与区域可达性：一条线索怎样改变玩家下一次前往的地点与时机。</p><ResourceLink href={links.DOC_OUTER_WILDS_URL} icon={FileText}>下载完整拆解案</ResourceLink></div><a href="./assets/outer-wilds-system-flow.svg" target="_blank" rel="noopener noreferrer" aria-label="新窗口查看系统逻辑图"><img src="./assets/outer-wilds-system-flow.svg" alt="探索与知识进程系统逻辑图" loading="lazy"/></a></section>
      </section>
      <section className="contact wrap" id="contact"><span className="eyebrow">04 / GET IN TOUCH</span><h2>从这里，<br/><span>开始下一次合作。</span></h2><div className="contact-bottom"><a className="contact-mail" href={'mailto:' + profile.email}>{profile.email}<ArrowUpRight/></a><div className="contact-links"><a href={'tel:' + profile.phone}>{profile.phone}</a><ResourceLink href={links.RESUME_URL} icon={Download}>下载简历</ResourceLink><ResourceLink href={profile.github}>GitHub</ResourceLink></div></div></section>
    </main><footer className="wrap"><span>© 2026 李智超 / 个人作品集</span><a href="#top">回到顶部 ↑</a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
