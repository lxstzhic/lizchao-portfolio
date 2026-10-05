import React, {useEffect, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, Pause, Play, Maximize2} from 'lucide-react';
import {dream3d} from '../data/portfolio';

export function ImageRail({onOpen, modalOpen}) {
  const [category, setCategory] = useState('all');
  const [paused, setPaused] = useState(false);
  const rail = useRef(null);
  const group = useRef(null);
  const interaction = useRef({hover:false, focus:false, touching:false, visible:false, manualUntil:0});
  const items = dream3d.gallery.map((item,index)=>({...item,index})).filter(item =>
    category === 'all' || (category === 'game' && item.index < 6) ||
    (category === 'design' && item.index > 6) || (category === 'cover' && item.index === 6));
  useEffect(() => { rail.current.scrollLeft = 0; }, [category]);
  useEffect(() => {
    const node = rail.current, first = group.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame, last = 0, position = node.scrollLeft;
    const observer = new IntersectionObserver(([entry]) => {interaction.current.visible=entry.isIntersecting;});
    observer.observe(node);
    const animate = now => {
      const elapsed = last ? Math.min(now-last,40) : 0;
      last=now;
      const state=interaction.current;
      const loopWidth=first.offsetWidth+16;
      if (!paused && !modalOpen && !media.matches && !document.hidden && state.visible &&
          !state.hover && !state.focus && !state.touching && now>state.manualUntil &&
          items.length>1 && first.offsetWidth>node.clientWidth) {
        // Keep fractional pixels: scrollLeft is rounded by some browsers.
        if (Math.abs(node.scrollLeft-position)>2) position=node.scrollLeft;
        position += elapsed * 0.038;
        if(position>=loopWidth) position-=loopWidth;
        node.scrollLeft=position;
      } else position=node.scrollLeft;
      frame=requestAnimationFrame(animate);
    };
    frame=requestAnimationFrame(animate);
    return ()=>{cancelAnimationFrame(frame);observer.disconnect();};
  }, [category, paused, modalOpen, items.length]);
  const step = direction => {
    const node=rail.current;
    const distance=(node.querySelector('.rail-tile')?.offsetWidth || 320)+16;
    const loopWidth=group.current.offsetWidth+16;
    if(direction<0 && node.scrollLeft<distance && items.length>1) node.scrollLeft+=loopWidth;
    if(direction>0 && node.scrollLeft>=loopWidth && items.length>1) node.scrollLeft-=loopWidth;
    interaction.current.manualUntil=performance.now()+1600;
    node.scrollBy({left:direction*distance,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  };
  return <section className="image-gallery" aria-label="3D 项目图片">
    <div className="gallery-head"><div><span className="eyebrow">EXPLORE THE DETAILS</span><h3>让画面，自己讲述。</h3></div><div className="rail-controls">
      <button className="icon-button" aria-label={paused?'播放图片带':'暂停图片带'} aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?<Play size={17}/>:<Pause size={17}/>}</button>
      <button className="icon-button" aria-label="图片带向左" disabled={items.length<2} onClick={()=>step(-1)}><ArrowLeft size={18}/></button>
      <button className="icon-button" aria-label="图片带向右" disabled={items.length<2} onClick={()=>step(1)}><ArrowRight size={18}/></button>
    </div></div>
    <div className="gallery-filters" role="group" aria-label="图片分类">{[['all','全部 / 11'],['game','实机 / 06'],['design','设计说明 / 04'],['cover','封面 / 01']].map(([key,label])=><button key={key} aria-pressed={key===category} onClick={()=>setCategory(key)}>{label}</button>)}</div>
    <div ref={rail} className="image-rail" aria-label="可左右滑动的图片带"
      onMouseEnter={()=>interaction.current.hover=true} onMouseLeave={()=>interaction.current.hover=false}
      onFocusCapture={()=>interaction.current.focus=true} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget)) interaction.current.focus=false;}}
      onPointerDown={()=>interaction.current.touching=true} onPointerUp={()=>interaction.current.touching=false} onPointerCancel={()=>interaction.current.touching=false} onPointerLeave={()=>interaction.current.touching=false}
      onWheel={()=>interaction.current.manualUntil=performance.now()+1800}
      onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step(e.key==='ArrowRight'?1:-1);}}}>
      {[0,1].slice(0,items.length>1?2:1).map(copy=><div className="rail-group" ref={copy===0?group:undefined} key={copy} aria-hidden={copy===1 ? true : undefined}>
        {items.map(item=><button key={item.src} tabIndex={copy===1?-1:0} className={'rail-tile '+(item.index>=6?'rail-document':'')} aria-label={'放大：'+item.label} onClick={e=>onOpen(item.index,e.currentTarget)}>
          <img loading="lazy" src={item.src} alt={copy===0?item.label:''}/><span className="tile-caption"><span>{item.label}<small>{item.type}</small></span><Maximize2 size={17}/></span>
        </button>)}
      </div>)}
    </div><p className="rail-hint">悬停暂停并放大 · 点击查看完整图片 · 左右按钮 / 触屏滑动</p>
  </section>;
}

export function ProjectStack({children}) {
  const root=useRef(null);
  useEffect(()=>{
    const slots=Array.from(root.current.children);
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    const update=()=>{
      frame=null;
      const enabled=!reduced.matches && innerWidth>=768;
      slots.forEach((slot,i)=>{
        const card=slot.firstElementChild;
        const top=106+i*24;
        const fits=card.offsetHeight < innerHeight-top-24;
        slot.classList.toggle('stack-unpinned',!enabled||!fits);
        const next=slots[i+1];
        const progress=enabled&&fits&&next ? Math.max(0,Math.min(1,(innerHeight-next.getBoundingClientRect().top)/(innerHeight-top))) : 0;
        card.style.setProperty('--stack-scale',String(1-progress*(slots.length-1-i)*0.028));
      });
    };
    const queue=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const observer=new ResizeObserver(queue);
    slots.forEach(s=>observer.observe(s.firstElementChild));
    addEventListener('scroll',queue,{passive:true});
    addEventListener('resize',queue);
    reduced.addEventListener('change',queue);
    update();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();removeEventListener('scroll',queue);removeEventListener('resize',queue);reduced.removeEventListener('change',queue);};
  },[]);
  return <div className="project-stack" ref={root}>{React.Children.map(children,(child,i)=><div className="stack-slot" style={{'--stack-index':i}}>{child}</div>)}</div>;
}

