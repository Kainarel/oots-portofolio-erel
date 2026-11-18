// @ts-nocheck
export function initPortfolioEngine(): void {
	if (typeof window === 'undefined') return;
	if ((window as Record<string, unknown>).__relEngineInitialized) return;
	(window as Record<string, unknown>).__relEngineInitialized = true;


(function(){
var pages=[].slice.call(document.querySelectorAll('.pg')),btns=[].slice.call(document.querySelectorAll('.dots button,.dd button'));
function go(id,fromHash){document.body.classList.remove('m');cancelTx();
if(!document.getElementById(id))id='intro';
pages.forEach(function(p){p.classList.toggle('a',p.id===id)});
btns.forEach(function(b){b.classList.toggle('a',b.dataset.go===id)});
document.body.classList.toggle('on',id!=='intro');
var pg=document.getElementById(id);pg.scrollTop=0;if(id==='profil'&&window.__rv)window.__rv();cur=order.indexOf(id);ellRest();if(cur===0)setTimeout(function(){if(cur===0&&to===null){measureHome();ellRest()}},1300);
if(!fromHash){try{history.replaceState(null,'',id==='intro'?location.pathname:'#'+id)}catch(e){}}
}
document.addEventListener('click',function(e){var b=e.target.closest('[data-go]');if(b)jump(b.dataset.go)});
window.addEventListener('hashchange',function(){jump(location.hash.slice(1)||'intro')});
document.querySelector('.hm').addEventListener('click',function(e){e.stopPropagation();document.body.classList.toggle('m')});
(function(){var orb=document.querySelector('.orb'),it=document.getElementById('intro'),ctr=document.querySelector('.ctr'),ib=ctr.querySelector('b'),ie=ctr.querySelector('em'),ip=ctr.querySelector('p'),rot=0,tg=0,hv=false,ty=null,rm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
function on(n){hv=true;ib.textContent=n.dataset.n;ie.textContent=n.dataset.c;ip.textContent=n.dataset.d;ctr.classList.add('on');n.classList.add('h')}
function off(n){hv=false;ctr.classList.remove('on');n.classList.remove('h')}
[].forEach.call(document.querySelectorAll('.nd'),function(n){n.addEventListener('mouseenter',function(){on(n)});n.addEventListener('mouseleave',function(){off(n)});n.addEventListener('focus',function(){on(n)});n.addEventListener('blur',function(){off(n)});n.addEventListener('click',function(){on(n)})});
function st(){hv=true;ib.textContent='D_Kun';ie.textContent='Creative Studio';ip.textContent='A creative space focused on visual storytelling, video editing, graphic design, and multimedia production.';ctr.classList.add('on')}
ctr.addEventListener('mouseenter',st);ctr.addEventListener('click',st);ctr.addEventListener('mouseleave',function(){hv=false;ctr.classList.remove('on')});
it.addEventListener('wheel',function(e){tg+=e.deltaY*.18},{passive:true});
it.addEventListener('touchstart',function(e){ty=e.touches[0].clientY},{passive:true});
it.addEventListener('touchmove',function(e){var y=e.touches[0].clientY;if(ty!==null)tg+=(ty-y)*.5;ty=y},{passive:true});
var orbRaf=null;
function l(){if(it.classList.contains('a')){if(!hv&&!rm)tg+=.035;rot+=(tg-rot)*.07;orb.style.setProperty('--r',rot.toFixed(2)+'deg');orbRaf=requestAnimationFrame(l)}else{orbRaf=null}}
function startOrb(){if(!orbRaf&&it.classList.contains('a'))orbRaf=requestAnimationFrame(l)}
startOrb();window.addEventListener('hashchange',function(){setTimeout(startOrb,100)});
})();
var pr=document.getElementById('profil'),rvs=[].slice.call(pr.querySelectorAll('.rv')),io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in')})},{root:pr,threshold:.15});
window.__rv=function(){rvs.forEach(function(el){el.classList.remove('in');io.unobserve(el);io.observe(el)})};window.__rv();
var order=['intro','profil','project','contact'],P=order.map(function(id){return document.getElementById(id)}),cur=0,to=null,dir=0,pd=0,pt=0,busy=false,rev=false,inA=false,lockUntil=0,queued=null,home=null,ell=document.getElementById('ell');
var edgeAccum=0,edgeTimer=null,watchdogTimer=null;

function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function sm(a,b,x){var t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t)}
function measureHome(){var o=document.querySelector('.orb');if(!o)return;var r=o.getBoundingClientRect();if(r.width>10)home={x:r.left+r.width/2,y:r.top+r.height/2,d:r.width*.44,o:0}}
function anc(i){var w=innerWidth,h=innerHeight,m=w<760;
if(i===0){if(home)return home;var o=document.querySelector('.orb'),W=o?o.offsetWidth:600;return{x:m?w/2:w-.12*W,y:h/2+(m?0:32),d:.44*W,o:0}}
if(i===1){var px=w/2;if(!m){var cw=Math.min(1100,w-64-.11*w),l=64+.05*w+(w-64-.11*w-cw)/2;px=l+(cw-.05*w)*.8/2.2/2}return{x:px,y:m?h*.36:h*.5,d:m?Math.min(w*.95,h*.6):Math.min(h*.92,700),o:m?.2:.3}}
if(i===2)return{x:m?w/2:(w+64)/2,y:h*.5,d:m?w*.95:Math.min(h*.95,760),o:.16};
return{x:m?w/2:w*.72,y:m?h*.62:h*.5,d:m?w*.9:Math.min(h*.88,640),o:.24}}
function setT(a,o){ell.style.transform='translate3d('+a.x.toFixed(1)+'px,'+a.y.toFixed(1)+'px,0) scale('+(a.d/1000).toFixed(4)+')';ell.style.opacity=o}
function ellRest(){var a=anc(cur);ell.classList.remove('live');setT(a,cur===0?0:a.o)}
function setNav(i){btns.forEach(function(b){b.classList.toggle('a',b.dataset.go===order[i])})}

function canGo(s){var n=cur+s;return n>=0&&n<order.length}
function atEdge(s){
  var el=P[cur];
  if(!el)return true;
  var m=el.scrollHeight-el.clientHeight;
  if(cur===0||m<=4)return true;
  if(s>0){
    return el.scrollTop>=m-10;
  }else{
    return el.scrollTop<=10;
  }
}

function begin(ni,land){
  if(cur===0&&!home)measureHome();
  to=ni;
  dir=ni>cur?1:-1;
  inA=false;
  pd=0;
  var O=P[cur],I=P[to];
  O.classList.add('tx');
  I.classList.add('tx');
  document.body.classList.add('tm');
  ell.classList.add('live');
  I.scrollTop=land==='bottom'?I.scrollHeight:0;
  if(order[to]==='profil'&&window.__rv)window.__rv();
  render(0);
  kickTx();
  
  clearTimeout(watchdogTimer);
  watchdogTimer=setTimeout(function(){
    if(to!==null){
      pd=1;render(1);finalize();
    }
  },800);
}

function render(d){var O=P[cur],I=P[to],mo=innerWidth<760?.55:1,sg=dir;
O.style.opacity=(1-sm(0,.5,d)).toFixed(3);
O.style.transform='translate3d(0,'+(-sg*d*5*mo).toFixed(2)+'vh,0) scale('+(1-.06*d*mo).toFixed(4)+')';
I.style.opacity=sm(.45,.95,d).toFixed(3);
I.style.transform='translate3d(0,'+(sg*(1-d)*8*mo).toFixed(2)+'vh,0) scale('+(1-.06*(1-d)*mo).toFixed(4)+')';
var w=d>=.5;if(w!==inA){inA=w;O.classList.toggle('a',!w);I.classList.toggle('a',w);setNav(w?to:cur)}
var A=anc(cur),B=anc(to),Cc={x:innerWidth/2,y:innerHeight/2,d:Math.hypot(innerWidth,innerHeight)*1.08},oA=cur===0?0:A.o,oB=to===0?0:B.o,e,x,y,dd,o;
if(d<.5){e=ease(d*2);x=A.x+(Cc.x-A.x)*e;y=A.y+(Cc.y-A.y)*e;dd=A.d+(Cc.d-A.d)*e;o=oA+(.97-oA)*e}
else{e=ease((d-.5)*2);x=Cc.x+(B.x-Cc.x)*e;y=Cc.y+(B.y-Cc.y)*e;dd=Cc.d+(B.d-Cc.d)*e;o=.97+(oB-.97)*e}
setT({x:x,y:y,d:dd},o.toFixed(3))}

function clearTx(){
  clearTimeout(watchdogTimer);
  [P[cur],P[to]].forEach(function(p){if(p){p.style.opacity='';p.style.transform='';p.classList.remove('tx')}});
  document.body.classList.remove('tm');
}

function cancelTx(){
  if(to===null)return;
  P[cur].classList.add('a');
  if(P[to])P[to].classList.remove('a');
  clearTx();
  setNav(cur);
  to=null;
  busy=false;
  rev=false;
  pd=pt=0;
  inA=false;
}

function finalize(){
  var O=P[cur],I=P[to];
  clearTx();
  if(O)O.classList.remove('a');
  if(I)I.classList.add('a');
  cur=to;
  to=null;
  busy=false;
  rev=false;
  pd=pt=0;
  inA=false;
  lockUntil=Date.now()+320;
  edgeAccum=0;
  setNav(cur);
  if(cur===0&&window.__hmReset)window.__hmReset();
  try{history.replaceState(null,'',cur===0?location.pathname:'#'+order[cur])}catch(e){}
  ellRest();
  if(cur===0)setTimeout(function(){if(cur===0&&to===null)measureHome()},1300);
  if(queued){var q=queued;queued=null;jump(q)}
}

function step(s){
  if(!canGo(s)||busy||to!==null)return;
  begin(cur+s,s>0?'top':'bottom');
  busy=true;
  pt=1;
  rev=false;
  kickTx();
}

function jump(id){
  var i=order.indexOf(id);
  if(i<0)return;
  if(busy||to!==null){queued=id;return}
  if(i===cur)return;
  begin(i,i>cur?'top':'bottom');
  busy=true;
  pt=1;
  rev=false;
  kickTx();
}

var tkRaf=null;
function tk(){
  if(to!==null){
    pd+=(pt-pd)*(busy?.16:.22);
    if(busy&&1-pd<.005){
      pd=1;render(1);finalize();tkRaf=null;return;
    }else if(rev&&pd<.005){
      cancelTx();ellRest();tkRaf=null;return;
    }else{
      render(pd);tkRaf=requestAnimationFrame(tk);
    }
  }else{
    tkRaf=null;
  }
}
function kickTx(){if(!tkRaf)tkRaf=requestAnimationFrame(tk)}

window.addEventListener('wheel',function(e){
  if(e.ctrlKey||!document.body.classList.contains('rdy'))return;
  var dy=e.deltaMode===1?e.deltaY*32:e.deltaY;
  
  if(busy||to!==null||Date.now()<lockUntil){
    e.preventDefault();
    return;
  }
  
  var s=dy>0?1:-1;
  var atBorder=atEdge(s);
  
  if(atBorder&&canGo(s)){
    edgeAccum+=dy;
    clearTimeout(edgeTimer);
    edgeTimer=setTimeout(function(){edgeAccum=0;},220);
    
    if(Math.abs(edgeAccum)>=24||Math.abs(dy)>=28){
      edgeAccum=0;
      e.preventDefault();
      step(s);
    }else{
      e.preventDefault();
    }
  }else{
    edgeAccum=0;
  }
},{passive:false});

var ty0=null;
var touchAccum=0;
window.addEventListener('touchstart',function(e){
  ty0=e.touches[0].clientY;
  touchAccum=0;
},{passive:true});

window.addEventListener('touchmove',function(e){
  if(ty0===null)return;
  var y=e.touches[0].clientY;
  var dy=(ty0-y)*1.3;
  ty0=y;
  
  if(busy||to!==null||Date.now()<lockUntil){
    if(e.cancelable)e.preventDefault();
    return;
  }
  
  var s=dy>0?1:-1;
  if(atEdge(s)&&canGo(s)){
    touchAccum+=dy;
    if(Math.abs(touchAccum)>=35||Math.abs(dy)>=35){
      touchAccum=0;
      if(e.cancelable)e.preventDefault();
      step(s);
    }
  }else{
    touchAccum=0;
  }
},{passive:false});

window.addEventListener('touchend',function(){
  ty0=null;
  touchAccum=0;
},{passive:true});

window.addEventListener('keydown',function(e){
  var t=e.target&&e.target.tagName;
  if(t==='INPUT'||t==='TEXTAREA'||!document.body.classList.contains('rdy'))return;
  var sg=(e.key==='ArrowDown'||e.key==='PageDown')?1:(e.key==='ArrowUp'||e.key==='PageUp')?-1:0;
  if(!sg||busy||to!==null||Date.now()<lockUntil)return;
  if(atEdge(sg)&&canGo(sg)){
    e.preventDefault();
    step(sg);
  }
});

window.addEventListener('resize',function(){if(to===null){if(cur===0)measureHome();ellRest()}});
[].forEach.call(document.querySelectorAll('.pc'),function(c){function t(){var o=c.classList.contains('on');[].forEach.call(document.querySelectorAll('.pc.on'),function(x){x.classList.remove('on')});if(!o)c.classList.add('on')}c.addEventListener('click',t);c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}})});

var sa=document.getElementById('sa'),fbs=[].slice.call(sa.querySelectorAll('.fb')),sc=document.getElementById('sc'),scl=sc.querySelector('.sc-l'),sce=sc.querySelector('em'),scb=sc.querySelector('b'),scp=sc.querySelector('p'),SW_=0,SH_=0,svis=false,sel=null,sit=[],slast=0;
function smeas(){SW_=sa.clientWidth;SH_=sa.clientHeight;sit.forEach(function(n){n.s=n.el.offsetWidth||72})}
function srender(n,t){var rot=Math.sin(t/1000*n.rs+n.ph)*9;n.el.style.setProperty('--rr',rot.toFixed(2)+'deg');n.el.style.transform='translate3d('+n.x.toFixed(1)+'px,'+n.y.toFixed(1)+'px,0) rotate('+rot.toFixed(2)+'deg)'}
fbs.forEach(function(el,i){var a=Math.random()*6.28,sp=.25+Math.random()*.35,n={el:el,s:72,x:0,y:0,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,ph:Math.random()*6.28,rs:.5+Math.random()*.8,hov:false};sit.push(n);
el.addEventListener('mouseenter',function(){n.hov=true});el.addEventListener('mouseleave',function(){n.hov=false});
el.addEventListener('click',function(){openSW(n)});
el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openSW(n)}})});
smeas();
sit.forEach(function(n,i){var c=i%4,r=Math.floor(i/4),cw=SW_/4,rh=SH_/2;n.x=Math.max(0,Math.min(SW_-n.s,(c+.5)*cw-n.s/2+(Math.random()-.5)*cw*.4));n.y=Math.max(0,Math.min(SH_-n.s,(r+.5)*rh-n.s/2+(Math.random()-.5)*rh*.4));srender(n,0)});
function openSW(n){if(sel===n){closeSW();return}sel=n;fbs.forEach(function(f){f.classList.toggle('sel',f===n.el)});scl.className='sc-l '+n.el.dataset.u;sce.textContent=n.el.dataset.f;scb.textContent=n.el.dataset.n;scp.textContent=n.el.dataset.d;sa.classList.add('open')}
function closeSW(){sel=null;fbs.forEach(function(f){f.classList.remove('sel')});sa.classList.remove('open')}
sa.addEventListener('click',function(e){if(!e.target.closest('.fb')&&!e.target.closest('.sc'))closeSW()});
sc.querySelector('.sc-x').addEventListener('click',closeSW);
window.addEventListener('keydown',function(e){if(e.key==='Escape')closeSW()});
window.addEventListener('resize',function(){smeas();sit.forEach(function(n){n.x=Math.max(0,Math.min(SW_-n.s,n.x));n.y=Math.max(0,Math.min(SH_-n.s,n.y))})});
var sRaf=null;
function sl(t){if(!svis||RM){sRaf=null;return}
var dt=Math.min(3,(t-slast)/16.67||1);slast=t;
smeas();
sit.forEach(function(n){if(n===sel)return;
n.vx+=(Math.random()-.5)*.02*dt;n.vy+=(Math.random()-.5)*.02*dt;
var sp=Math.hypot(n.vx,n.vy);if(sp<.01){n.vx=.3;n.vy=.2;sp=.36}
if(sp>.75){n.vx*=.75/sp;n.vy*=.75/sp}else if(sp<.2){n.vx*=.2/sp;n.vy*=.2/sp}
var k=n.hov?.12:1;n.x+=n.vx*dt*k;n.y+=n.vy*dt*k;
if(n.x<0){n.x=0;n.vx=Math.abs(n.vx)}if(n.x>SW_-n.s){n.x=SW_-n.s;n.vx=-Math.abs(n.vx)}
if(n.y<0){n.y=0;n.vy=Math.abs(n.vy)}if(n.y>SH_-n.s){n.y=SH_-n.s;n.vy=-Math.abs(n.vy)}});
for(var i=0;i<sit.length;i++)for(var j=i+1;j<sit.length;j++){var a=sit[i],b=sit[j],dx=b.x+b.s/2-a.x-a.s/2,dy=b.y+b.s/2-a.y-a.s/2,d=Math.hypot(dx,dy)||1,m=(a.s+b.s)/2*.95;
if(d<m){var nx=dx/d,ny=dy/d,o=(m-d),fa=a===sel?0:(b===sel?1:.5),fb2=b===sel?0:(a===sel?1:.5);
a.x-=nx*o*fa;a.y-=ny*o*fa;b.x+=nx*o*fb2;b.y+=ny*o*fb2;
a.vx-=nx*.06;a.vy-=ny*.06;b.vx+=nx*.06;b.vy+=ny*.06}}
sit.forEach(function(n){if(n!==sel)srender(n,t)});
sRaf=requestAnimationFrame(sl)}
function startSl(){if(!sRaf&&svis&&!RM){slast=performance.now();sRaf=requestAnimationFrame(sl)}}
new IntersectionObserver(function(es){svis=es[0].isIntersecting;if(svis)startSl();else if(sRaf){cancelAnimationFrame(sRaf);sRaf=null}},{root:document.getElementById('profil')}).observe(sa);
var _r2=window.__rv;window.__rv=function(){_r2();closeSW()};
[].forEach.call(document.querySelectorAll('.sk-r'),function(r){var ks=(r.dataset.sw||'').split(' ');
r.addEventListener('mouseenter',function(){fbs.forEach(function(f){f.classList.toggle('hl',ks.indexOf(f.dataset.u.slice(2))>-1)})});
r.addEventListener('mouseleave',function(){fbs.forEach(function(f){f.classList.remove('hl')})})});
(function(){var PRESS='.cta,.sc,.dd,.skreel,.sd,.bd-ch button,.bd-ac button,.pcd,.pc,.nd,.fb,.sk-r,.xi,.vt1,.vt4,[data-go],.dd button,.dots button,.pc-f,.pc-b,.ed-pn',HI='.cta,.sc,.dd,.skreel,.sd,.bd-ch button,.bd-ac button,.pcd,.pc-f,.pc-b';
/* cursor click circle animation removed */
document.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest(HI);if(!t||!t.classList)return;var r=t.getBoundingClientRect();if(!r.width)return;t.style.setProperty('--gx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');t.style.setProperty('--gy',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')},{passive:true});
})();
(function(){
if(!window.__VD)return;
[].forEach.call(document.querySelectorAll('video[data-vid]'),function(v){
 var d=window.__VD[v.dataset.vid];
 if(d)v.setAttribute('src','data:video/mp4;base64,'+d);
});
})();
(function(){
var it=document.getElementById('intro');
if(!it)return;
try{localStorage.removeItem('dkun-home-stage');}catch(e){}
it.classList.remove('fo','oo','bk');
window.__hmReset=function(){it.classList.remove('fo','oo','bk');};
window.__hmReveal=function(){};
window.__hmFolder=function(){return true;};
window.__hmOn=function(){return false;};
window.__hmOff=function(){};
})();
var ld=document.getElementById('ld'),tc=document.getElementById('ltc'),pgb=document.getElementById('ld-prog-fill'),t0=performance.now(),LD=1100;
function tick(n){
  var t=n-t0,pr=Math.min(1,t/LD);
  if(tc)tc.textContent=Math.floor(pr*100)+'%';
  if(pgb)pgb.style.width=(pr*100).toFixed(1)+'%';
  if(pr>=1){
    if(ld)ld.classList.add('gone');
    document.body.classList.add('rdy');
    go(location.hash.slice(1)||'intro',true);
    setTimeout(function(){if(ld)ld.style.display='none'},650);
    return;
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
})();
(function(){var it=document.getElementById('intro');if(!it)return;var lt=0,force=false;
it.addEventListener('touchstart',function(){lt=Date.now()},{capture:true,passive:true});
[].forEach.call(it.querySelectorAll('.nd,.ctr'),function(el){el.addEventListener('mouseleave',function(e){if(!force&&Date.now()-lt<2500)e.stopImmediatePropagation()},true)});
it.addEventListener('click',function(e){if(e.target.closest('.nd,.ctr'))return;force=true;var h=it.querySelector('.nd.h');if(h)h.dispatchEvent(new Event('mouseleave'));var c=it.querySelector('.ctr.on');if(c)c.dispatchEvent(new Event('mouseleave'));force=false})})();
(function(){
var rows=[].slice.call(document.querySelectorAll('.sk-r[data-p]')),t0=performance.now();
function ytId(u){var m=u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);return m?m[1]:null}
function setup(p){var u=(p.dataset.video||'').trim(),box=p.querySelector('.sk-v');if(!u||!box)return;
 var b=document.createElement('button');b.className='vplay';b.setAttribute('aria-label','Putar video');b.innerHTML='<span></span>';
 b.addEventListener('click',function(){var el,id=ytId(u);
  if(id){el=document.createElement('iframe');el.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&playsinline=1';el.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';el.setAttribute('allowfullscreen','')}
  else{el=document.createElement('video');el.src=u;el.controls=true;el.autoplay=true;el.playsInline=true}
  box.appendChild(el);b.remove()});box.appendChild(b)}
function setOpen(r,p,o){r.classList.toggle('open',o);p.classList.toggle('open',o);r.setAttribute('aria-expanded',o?'true':'false')}
rows.forEach(function(r){var p=document.getElementById(r.dataset.p);setup(p);
 function tog(){var o=!r.classList.contains('open');rows.forEach(function(x){setOpen(x,document.getElementById(x.dataset.p),false)});
  if(o){setOpen(r,p,true);setTimeout(function(){try{r.scrollIntoView({block:'start',behavior:'smooth'})}catch(e){}},120)}}
 r.addEventListener('click',tog);
 r.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tog()}})});
function pad(n){return(n<10?'0':'')+n}
var tcs=[].slice.call(document.querySelectorAll('[data-tc]'));
setInterval(function(){var any=document.querySelector('.sk-p.open');if(!any)return;var f=Math.floor((performance.now()-t0)/1000*24);
 var s=f/24|0,tx='00:'+pad((s/60|0)%60)+':'+pad(s%60)+':'+pad(f%24);tcs.forEach(function(e){e.textContent=tx})},80);
})();

(function(){
var pj=document.getElementById('project'),gr=document.getElementById('bdg');if(!pj||!gr)return;
var cs=[].slice.call(gr.querySelectorAll('.bd-c')),touch=window.matchMedia('(hover:none)').matches,RMq=window.matchMedia('(prefers-reduced-motion:reduce)').matches,zt=10,moved=false;
var hdImg=document.querySelector('.hd img');if(hdImg&&hdImg.src)document.documentElement.style.setProperty('--logo','url("'+hdImg.src+'")');
var ht=document.getElementById('bdht');if(touch&&ht)ht.textContent='KETUK KARTU UNTUK BUKA VIDEO';
function vfall(v){var k=v.dataset.vid,t=(+v.dataset.t||0)+1,d=window.__VD&&window.__VD[k];v.dataset.t=t;
if(t===1&&d){v.src='data:video/mp4;base64,'+d;v.load();return true}
if(t===2&&d){try{var b=atob(d),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);v.src=URL.createObjectURL(new Blob([u],{type:'video/mp4'}));v.load();return true}catch(e){}}
return false}
[].forEach.call(gr.querySelectorAll('.pcd'),function(p){var im=p.querySelector('.pcd-ph img'),bg=p.querySelector('.pcd-bg');if(im&&bg)bg.style.backgroundImage='url("'+im.src+'")'});
function layout(){var cx=gr.clientWidth/2,cy=gr.clientHeight/2;cs.forEach(function(c){c.style.setProperty('--sx',(cx-(c.offsetLeft+c.offsetWidth/2)).toFixed(0)+'px');c.style.setProperty('--sy',(cy-(c.offsetTop+c.offsetHeight/2)).toFixed(0)+'px')})}
function rst(p){p.style.setProperty('--rx','0deg');p.style.setProperty('--ry','0deg');p.style.setProperty('--go','.55');p.style.setProperty('--mx','28%');p.style.setProperty('--my','14%')}
function tilt(p,e){var r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;if(x<0||x>1||y<0||y>1){rst(p);return}
p.style.setProperty('--ry',((x-.5)*16).toFixed(2)+'deg');p.style.setProperty('--rx',((.5-y)*13).toFixed(2)+'deg');p.style.setProperty('--mx',(x*100).toFixed(1)+'%');p.style.setProperty('--my',(y*100).toFixed(1)+'%');p.style.setProperty('--go','.95')}
cs.forEach(function(c){var pcd=c.querySelector('.pcd'),v=c.querySelector('video'),dx=0,dy=0,sx0=0,sy0=0,pid=null,drag=false;
c.dataset.r=c.style.getPropertyValue('--r');
if(v){v.addEventListener('playing',function(){pcd.classList.add('on')});v.addEventListener('error',function(){vfall(v)})}
if(v&&!v.getAttribute('src'))vfall(v);
function vp(on){if(!v)return;if(on){var p=v.play();if(p&&p.catch)p.catch(function(){})}else{v.pause();pcd.classList.remove('on');try{v.currentTime=0}catch(e){}}}
c.addEventListener('mouseenter',function(){if(!touch&&!RMq&&!drag)vp(true)});
c.addEventListener('mouseleave',function(){if(!touch){vp(false);rst(pcd)}});
c.addEventListener('dragstart',function(e){e.preventDefault()});
c.addEventListener('pointerdown',function(e){if(e.pointerType==='touch'||e.button!==0)return;pid=e.pointerId;sx0=e.clientX;sy0=e.clientY;drag=false;dx=parseFloat(c.dataset.dx||0);dy=parseFloat(c.dataset.dy||0)});
c.addEventListener('pointermove',function(e){
if(pid!==null&&e.pointerId===pid){var mx=e.clientX-sx0,my=e.clientY-sy0;
if(!drag&&Math.hypot(mx,my)>6){drag=true;try{c.setPointerCapture(pid)}catch(er){}c.classList.add('drag');c.style.zIndex=++zt;vp(false);rst(pcd)}
if(drag){c.dataset.dx=dx+mx;c.dataset.dy=dy+my;c.style.setProperty('--dx',(dx+mx)+'px');c.style.setProperty('--dy',(dy+my)+'px');return}}
if(e.pointerType==='mouse'&&!drag)tilt(pcd,e)});
function end(){if(pid===null)return;if(drag){moved=true;c.classList.remove('drag');setTimeout(function(){moved=false},0)}pid=null;drag=false}
c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end);
c.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation()}},true);
if(touch&&v&&!RMq){new IntersectionObserver(function(es){vp(es[0].isIntersecting)},{root:pj,threshold:.65}).observe(c)}});
document.getElementById('bdr').addEventListener('click',function(){cs.forEach(function(c){c.dataset.dx=0;c.dataset.dy=0;c.style.setProperty('--dx','0px');c.style.setProperty('--dy','0px');c.style.setProperty('--r',c.dataset.r);c.style.zIndex=''})});
document.getElementById('bdx').addEventListener('click',function(){var w=gr.clientWidth;cs.forEach(function(c){var x=(Math.random()-.5)*w*.14,y=(Math.random()-.5)*90,r=(Math.random()-.5)*28;c.dataset.dx=x;c.dataset.dy=y;c.style.setProperty('--dx',x.toFixed(0)+'px');c.style.setProperty('--dy',y.toFixed(0)+'px');c.style.setProperty('--r',r.toFixed(1)+'deg');c.style.zIndex=Math.floor(Math.random()*8)+1})});
var chs=[].slice.call(document.querySelectorAll('#bdch button')),nEl=document.getElementById('bdn');
chs.forEach(function(b){b.addEventListener('click',function(){chs.forEach(function(x){x.classList.toggle('a',x===b)});var f=b.dataset.f,n=0;
cs.forEach(function(c){var m=f==='all'||c.dataset.cat===f;if(m)n++;
if(m){if(c.classList.contains('hide')){c.classList.remove('hide');requestAnimationFrame(function(){requestAnimationFrame(function(){c.classList.remove('off')})})}else c.classList.remove('off')}
else{c.classList.add('off');setTimeout(function(){if(c.classList.contains('off'))c.classList.add('hide')},380)}});
nEl.textContent=(n<10?'0':'')+n;setTimeout(layout,450)})});
var pv=document.getElementById('pvf');
if(pv){var cards=cs.map(function(c){return c.querySelector('.pcd')}),pick=cards.filter(function(c){return c.classList.contains('hasimg')}).slice(0,3);
cards.forEach(function(c){if(pick.length<3&&pick.indexOf(c)<0)pick.push(c)});
pick.sort(function(a,b){return cards.indexOf(a)-cards.indexOf(b)});var docC=cards.filter(function(c){var b=c.querySelector('.pcd-ft b');return b&&/dokumentasi event/i.test(b.textContent)})[0];if(docC&&pick.indexOf(docC)<0&&pick.length>2)pick=[pick[0],docC,pick[2]];
pick.forEach(function(c){var d=document.createElement('div');d.className=c.className;d.setAttribute('style',c.getAttribute('style')||'');d.innerHTML=c.innerHTML;
[].forEach.call(d.querySelectorAll('video'),function(v){v.remove()});
var w=document.createElement('div');w.className='pvf-c';w.setAttribute('data-go','project');w.setAttribute('role','link');w.tabIndex=0;w.setAttribute('aria-label','Lihat semua project');
w.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();w.click()}});w.appendChild(d);pv.appendChild(w)})}
layout();window.addEventListener('resize',layout);setTimeout(layout,400);setTimeout(layout,1500);
})();

(function(){
var ed=document.getElementById('ed');if(!ed)return;
var sc=document.getElementById('profil'),N=5,T=6,TOT=N*T,p=0,cur=-1,playing=true,userPaused=false,vis=false,drag=false,moved=false,sx=0,last=0,idle=0,raf=0;
var RM=window.matchMedia('(prefers-reduced-motion:reduce)').matches;if(RM){playing=false;userPaused=true}
var slides=[].slice.call(ed.querySelectorAll('.ed-sl')),panes=[].slice.call(ed.querySelectorAll('.ed-pn')),clips=[].slice.call(ed.querySelectorAll('.ed-cl')),tgs=[].slice.call(ed.querySelectorAll('.ed-tg'));
var lane=document.getElementById('edlane'),tl=document.getElementById('edtl'),rul=document.getElementById('edrul'),tc=document.getElementById('edtc'),pp=document.getElementById('edpp'),scr=document.getElementById('edscr'),cb=ed.querySelector('.ed-cb'),nm=document.getElementById('ednm'),no=document.getElementById('edno'),v1tc=ed.querySelector('[data-tc]');
var cols=['#4d7cff','#ff5c9a','#b266ff','#ff9f3d','#2fd6a6'],names=['FULLSTACK DEVELOPER','VIDEO EDITING','GRAPHIC DESIGN','PHOTO EDITING','MOTION GRAPHICS'],sws=['vc gh my','cc dv','ps','ps','ae am'];
var fbs=[].slice.call(document.querySelectorAll('#sa .fb'));
function pad(n){return(n<10?'0':'')+n}
// ruler
var rh='';for(var s=0;s<=TOT;s++){var x=(s/TOT*100).toFixed(3);rh+='<i class="'+(s%T===0?'mj':'')+'" style="left:'+x+'%"></i>';if(s%T===0)rh+='<span style="left:'+x+'%">00:'+pad(s)+'</span>'}
rul.innerHTML=rh;
function size(){ed.style.setProperty('--lwpx',lane.clientWidth+'px')}
function setActive(i){
 var prev=cur,dir=(prev>-1&&i<prev&&!(prev===N-1&&i===0))?-1:1;cur=i;
 scr.classList.toggle('rev',dir<0);
 slides.forEach(function(s,k){
  if(k===i){s.classList.remove('out');s.classList.add('act')}
  else if(k===prev){s.classList.remove('act');s.classList.add('out');(function(el){setTimeout(function(){el.classList.remove('out')},850)})(s)}
  else s.classList.remove('act','out')});
 if(prev>-1){cb.classList.remove('go');void cb.offsetWidth;cb.classList.add('go')}
 panes.forEach(function(e,k){e.classList.toggle('act',k===i)});
 clips.forEach(function(e,k){e.classList.toggle('act',k===i)});
 tgs.forEach(function(e,k){e.classList.toggle('act',k===i)});
 ed.style.setProperty('--ac',cols[i]);nm.textContent=names[i];no.textContent=pad(i+1)+' / 05';
 var ks=sws[i].split(' ').filter(Boolean);
 fbs.forEach(function(f){f.classList.toggle('hl',ks.indexOf(f.dataset.u.slice(2))>-1)})}
function apply(){
 var i=Math.min(N-1,Math.floor(p*N));if(i!==cur)setActive(i);
 ed.style.setProperty('--p',p.toFixed(4));
 var tt=p*TOT,sec=tt|0,fr=Math.floor((tt-sec)*24);tc.textContent='00:'+pad((sec/60)|0)+':'+pad(sec%60)+':'+pad(fr);
 var loc=p*N-i;clips.forEach(function(c,k){c.style.setProperty('--q',(k<i?1:k>i?0:loc).toFixed(3))});
 if(v1tc){var ls=loc*T,ss=ls|0,ff=Math.floor((ls-ss)*24);v1tc.textContent='00:00:'+pad(ss)+':'+pad(ff)}
 tl.setAttribute('aria-valuenow',i)}
function active(){return vis&&sc&&sc.classList.contains('a')}
function loop(ts){raf=0;if(!vis){return}
 if(!active()){raf=setTimeout(function(){raf=0;last=0;loop(performance.now())},350);return}
 var dt=last?Math.min((ts-last)/1000,.1):0;last=ts;
 if(playing&&!drag){p+=dt/TOT;if(p>=1)p-=1}
 apply();raf=requestAnimationFrame(loop)}
function start(){if(!raf){last=0;raf=requestAnimationFrame(loop)}}
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis)start()},{root:sc,threshold:.12}).observe(ed)}else{vis=true;start()}
function schedule(){if(userPaused)return;clearTimeout(idle);idle=setTimeout(function(){playing=true},6500)}
function xp(e){var r=lane.getBoundingClientRect();return Math.max(0,Math.min(.9999,(e.clientX-r.left)/r.width))}
tl.addEventListener('pointerdown',function(e){if(e.button>0)return;drag=true;moved=false;sx=e.clientX;playing=false;clearTimeout(idle);try{tl.setPointerCapture(e.pointerId)}catch(_){}p=xp(e);apply()});
tl.addEventListener('pointermove',function(e){if(!drag)return;if(Math.abs(e.clientX-sx)>4)moved=true;p=xp(e);apply()});
function up(){if(!drag)return;drag=false;if(!moved){var i=Math.min(N-1,Math.floor(p*N));p=(i+.02)/N;apply()}schedule()}
tl.addEventListener('pointerup',up);tl.addEventListener('pointercancel',up);
function paintPP(){var off=!playing&&userPaused;pp.classList.toggle('paused',off);pp.setAttribute('aria-label',off?'Putar':'Jeda')}
pp.addEventListener('pointerdown',function(e){e.stopPropagation()});
pp.addEventListener('click',function(){userPaused=!userPaused;playing=!userPaused;clearTimeout(idle);paintPP()});
tl.addEventListener('keydown',function(e){var k=e.key,i=cur;
 if(k==='ArrowRight'||k==='ArrowDown')i=(cur+1)%N;else if(k==='ArrowLeft'||k==='ArrowUp')i=(cur+N-1)%N;else if(k==='Home')i=0;else if(k==='End')i=N-1;
 else if(k===' '||k==='Enter'){e.preventDefault();pp.click();return}else return;
 e.preventDefault();p=(i+.02)/N;apply();playing=false;schedule()});
window.addEventListener('resize',size);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(size);
size();setTimeout(size,500);setTimeout(size,1600);paintPP();apply();
})();
try{localStorage.removeItem('rel-theme');document.documentElement.removeAttribute('data-theme');}catch(e){}

/* Contact Form handler */
(function(){
  var form = document.getElementById('contactForm');
  if(!form) return;

  var namaInput = document.getElementById('cf-nama');
  var emailInput = document.getElementById('cf-email');
  var pesanInput = document.getElementById('cf-pesan');
  var btn = document.getElementById('cf-btn');
  var btnText = btn ? btn.querySelector('.cf-btn-text') : null;
  var statusEl = document.getElementById('cf-status');
  var statusIcon = statusEl ? statusEl.querySelector('.cf-status-icon') : null;
  var statusMsg = statusEl ? statusEl.querySelector('.cf-status-msg') : null;

  var iconSuccess = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  var iconError = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/></svg>';
  var iconLoading = '<svg class="cf-spinner" style="display:inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3a9 9 0 1 0 9 9"/></svg>';

  function setStatus(type, msg){
    if(!statusEl) return;
    statusEl.className = 'cf-status ' + (type ? 'is-' + type : '');
    if(statusMsg) statusMsg.textContent = msg || '';
    if(statusIcon){
      if(type === 'loading') statusIcon.innerHTML = iconLoading;
      else if(type === 'success') statusIcon.innerHTML = iconSuccess;
      else if(type === 'error') statusIcon.innerHTML = iconError;
      else statusIcon.innerHTML = '';
    }
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var nama = (namaInput ? namaInput.value : '').trim();
    var email = (emailInput ? emailInput.value : '').trim();
    var pesan = (pesanInput ? pesanInput.value : '').trim();

    if(!nama || !email || !pesan){
      setStatus('error', 'Semua kolom harus diisi.');
      return;
    }

    if(!email.includes('@')){
      setStatus('error', 'Format email belum benar.');
      return;
    }

    form.classList.add('submitting');
    if(btn) btn.disabled = true;
    if(btnText) btnText.textContent = 'Mengirim...';
    setStatus('loading', 'Mengirim pesan...');

    var payload = { nama: nama, email: email, pesan: pesan };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function(res){
      if(res.ok) return res.json();
      throw new Error('API failed with ' + res.status);
    })
    .then(function(){
      finishSuccess();
    })
    .catch(function(){
      fetch('https://formsubmit.co/ajax/owekmessi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nama,
          email: email,
          message: pesan,
          _subject: 'Pesan dari ' + nama + ' (Portfolio)'
        })
      })
      .then(function(r){
        if(r.ok) return r.json();
        throw new Error('Fallback failed');
      })
      .then(function(){
        finishSuccess();
      })
      .catch(function(){
        finishError('Gagal mengirim. Coba lagi atau hubungi via WhatsApp.');
      });
    });

    function finishSuccess(){
      setStatus('success', 'Pesan terkirim. Terima kasih!');
      form.reset();
      form.classList.remove('submitting');
      if(btnText) btnText.textContent = 'Terkirim!';
      setTimeout(function(){
        if(btn) btn.disabled = false;
        if(btnText) btnText.textContent = 'Kirim pesan';
      }, 4000);
    }

    function finishError(msg){
      setStatus('error', msg || 'Gagal mengirim. Coba lagi.');
      form.classList.remove('submitting');
      if(btn) btn.disabled = false;
      if(btnText) btnText.textContent = 'Kirim pesan';
    }
  });
})();

}
