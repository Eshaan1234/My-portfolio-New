/* ===== EDIT YOUR CONTENT HERE ===== */
const D={
 name:"Eshaan Gupta", role:"PLAYER 1 · DESIGNER & DEV",
 tagline:"I build fun digital worlds",
 intro:"A curious B.Tech student passionate about building and learning every day.",
 email:"eshaangupta53@gmail.com", phone:"+91 7896237426",
 cta:"Have a project in mind? Insert coin and say hi.",
 about:[ "I'm Eshaan Gupta, a B.Tech 2nd year student from Maharashtra, India. I'm currently diving deep into web development and software engineering, eager to build real-world projects and grow my skills with modern technologies.", "When I'm not coding, you'll find me cooking up new recipes, shooting hoops on the basketball court, gaming with friends, or cruising on my bike. I believe in a well-rounded life where creativity and curiosity fuel everything I do."],
 skills:[["UI Design",5],["Web Dev",4],["JavaScript",4],["Branding",3],["Writing",3]],
 projects:[
  {t:"Internship Dossier",d:"Two shipped ML systems: a house price prediction model and an intelligent resume screening engine.",c:"ML",u:"https://eshaanprojectintern.netlify.app/",g:["#16a34a","#064e3b"]},
  {t:"Project Two",d:"What it was, your role, and the result.",c:"Design",g:["#0ea5e9","#4338ca"]},
  {t:"Project Three",d:"A brief summary of the goal and outcome.",c:"Web",g:["#10b981","#0f766e"]},
  {t:"Project Four",d:"Explain the challenge you solved here.",c:"Branding",g:["#a855f7","#be185d"]},
  {t:"Project Five",d:"One-line impact statement.",c:"Design",g:["#eab308","#c2410c"]},
  {t:"Project Six",d:"What makes this one special.",c:"Branding",g:["#64748b","#0f172a"]}],
 jobs:[
  {r:"Senior Role",o:"Company Name",y:"2023 – NOW",d:"What you owned and achieved."},
  {r:"Previous Role",o:"Another Company",y:"2020 – 2023",d:"Key responsibility or win."},
  {r:"Early Role",o:"First Company",y:"2018 – 2020",d:"Where it all started."}],
 links:[{l:"GitHub",u:"https://github.com/Eshaan1234"},{l:"LinkedIn",u:"https://linkedin.com"}]
};
/* =================================== */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.title=D.name+" — Portfolio";
$("logo").textContent="★ "+D.name.toUpperCase();$("role").textContent=D.role;$("intro").textContent=D.intro;
(function typeIt(){
 const el=$("tagline"),txt=D.tagline.toUpperCase();let i=0;el.textContent="";
 const t=setInterval(()=>{el.textContent=txt.slice(0,++i);if(i>=txt.length)clearInterval(t);},55);
})();
$("cta").textContent=D.cta;$("ph").innerHTML=`<a href="mailto:${esc(D.email)}" style="color:var(--acc);text-decoration:none">✉ ${esc(D.email)}</a> &nbsp;·&nbsp; <a href="tel:${esc(D.phone.replace(/\s/g,""))}" style="color:var(--acc);text-decoration:none">☎ ${esc(D.phone)}</a>`;$("mail").href="mailto:"+D.email;$("fn").textContent=D.name;$("yr").textContent=new Date().getFullYear();
$("about-text").innerHTML=D.about.map(p=>`<p style="margin:0 0 14px;color:var(--mute);font-size:1.4rem">${esc(p)}</p>`).join("");
$("skills").innerHTML=D.skills.map(([s,n])=>`<div class="skill">${esc(s)}<div class="bar">${[1,2,3,4,5].map(i=>`<i class="${i<=n?"f":""}"></i>`).join("")}</div></div>`).join("");
$("tl").innerHTML=D.jobs.map(j=>`<div><b>${esc(j.r)} @ ${esc(j.o)}</b><span>${esc(j.y)}</span><p style="margin:2px 0 0;color:var(--mute)">${esc(j.d)}</p></div>`).join("");
$("socials").innerHTML=D.links.map(l=>`<a href="${esc(l.u)}" target="_blank" rel="noopener" style="color:var(--acc2);margin:0 12px;text-decoration:none">[${esc(l.l)}]</a>`).join("");
const cats=["All",...new Set(D.projects.map(p=>p.c))];let cur="All";
function draw(){
 $("filters").innerHTML=cats.map(c=>`<button class="px ${c===cur?"on":""}" style="font-size:.55rem;padding:10px 12px" data-c="${esc(c)}">${esc(c.toUpperCase())}</button>`).join("");
 $("grid").innerHTML=D.projects.filter(p=>cur==="All"||p.c===cur).map((p,i)=>`<${p.u?`a href="${esc(p.u)}" target="_blank" rel="noopener"`:"article"} class="card"><div class="thumb" style="background:repeating-linear-gradient(90deg,rgba(0,0,0,.15) 0 8px,transparent 8px 16px),linear-gradient(135deg,${p.g[0]},${p.g[1]})">LVL ${i+1}</div><div class="b"><span class="tag px">${esc(p.c.toUpperCase())}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>${p.u?`<p style="color:var(--acc);margin-top:8px">OPEN PROJECT ↗</p>`:""}</div></${p.u?"a":"article"}>`).join("");
}
$("filters").onclick=e=>{const b=e.target.closest("button");if(b){cur=b.dataset.c;draw()}};
draw();
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("on");setTimeout(()=>e.classList.remove("on"),1600)}
$("copy").onclick=async()=>{try{await navigator.clipboard.writeText(D.email);toast("EMAIL COPIED!")}catch(e){toast(D.email)}};
$("cform").onsubmit=e=>{
 e.preventDefault();
 const n=$("cf-name").value.trim(),em=$("cf-email").value.trim(),m=$("cf-msg").value.trim();
 const body=encodeURIComponent(`${m}\n\n— ${n} (${em})`);
 window.location.href=`mailto:${D.email}?subject=${encodeURIComponent("Portfolio message from "+n)}&body=${body}`;
 toast("OPENING MAIL APP...");confetti();
};
$("theme").onclick=()=>{const r=document.documentElement;const light=r.dataset.theme?r.dataset.theme==="light":matchMedia("(prefers-color-scheme:light)").matches;r.dataset.theme=light?"dark":"light";try{localStorage.setItem("pf-theme",r.dataset.theme)}catch(e){}try{const k=localStorage.getItem("pf-pal");if(k&&PAL[k])applyPal(k)}catch(e){}};
try{const t=localStorage.getItem("pf-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}

/* boot splash */
(function(){
 const fill=$("bootfill"),boot=$("boot");let p=0,done=false;
 function finish(){if(done)return;done=true;clearInterval(t);boot.classList.add("hide");setTimeout(()=>boot.remove(),450);}
 const t=setInterval(()=>{p+=8+Math.random()*10;fill.style.width=Math.min(100,p)+"%";if(p>=100)setTimeout(finish,150);},70);
 boot.addEventListener("click",finish);
})();

/* scroll-to-top */
const topBtn=$("top");
addEventListener("scroll",()=>{topBtn.classList.toggle("on",scrollY>500)},{passive:true});
topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});
$("shareBtn").onclick=async()=>{
 const url=location.href;
 try{if(navigator.share){await navigator.share({title:document.title,url});return;}}catch(e){}
 try{await navigator.clipboard.writeText(url);toast("LINK COPIED!")}catch(e){toast(url)}
};

/* local visit counter (per-device only) */
try{
 let v=parseInt(localStorage.getItem("pf-visits")||"0",10)+1;
 localStorage.setItem("pf-visits",v);
 $("visit").textContent="VISIT #"+v+" ON THIS DEVICE";
}catch(e){}

/* confetti burst */
function confetti(){
 const cols=[getComputedStyle(document.documentElement).getPropertyValue("--acc"),getComputedStyle(document.documentElement).getPropertyValue("--acc2")];
 for(let i=0;i<26;i++){
  const c=document.createElement("div");c.className="conf";
  c.style.left=(innerWidth/2)+"px";c.style.top=(innerHeight/2)+"px";c.style.background=cols[i%2];
  document.body.appendChild(c);
  const ang=Math.random()*6.28,dist=80+Math.random()*180;
  c.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:`translate(${Math.cos(ang)*dist}px,${Math.sin(ang)*dist+60}px) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:900+Math.random()*400,easing:"cubic-bezier(.2,.7,.3,1)"}).onfinish=()=>c.remove();
 }
 [523,659,784].forEach((f,i)=>setTimeout(()=>beep(f,.18,"triangle"),i*90));
}


/* patch notes dialog */
$("patchBtn").onclick=()=>$("patchDlg").showModal();
$("patchClose").onclick=()=>$("patchDlg").close();

/* tab title swap when visitor looks away */
const ORIG_TITLE=document.title;
document.addEventListener("visibilitychange",()=>{
 document.title=document.hidden?"👋 COME BACK!":ORIG_TITLE;
});

function updateXP(){
 const h=document.documentElement;
 const sc=h.scrollTop||document.body.scrollTop;
 const max=h.scrollHeight-h.clientHeight;
 const pct=max>0?Math.min(100,(sc/max)*100):0;
 $("xp").style.width=pct+"%";
}
addEventListener("scroll",updateXP,{passive:true});
addEventListener("resize",updateXP);
updateXP();


/* colour palette switcher */
const PAL={
 forest:{dark:{bg:"#040806",card:"#0a120e",ink:"#dfe8e2",mute:"#7fa08d",line:"#16301f",acc:"#16a34a",acc2:"#9ca3af",accInk:"#021208"},
         light:{bg:"#b7c9b8",card:"#cfdccf",ink:"#0b1a10",mute:"#2f4a38",line:"#1f4a30",acc:"#14532d",acc2:"#3f3f46",accInk:"#cfdccf"}},
 neon:{dark:{bg:"#0d0b1e",card:"#171433",ink:"#f4f1ff",mute:"#a9a3d6",line:"#3b3577",acc:"#39ff88",acc2:"#ff4fa3",accInk:"#07130d"},
       light:{bg:"#c7d8a0",card:"#e4efc6",ink:"#1e2a12",mute:"#4b5e2e",line:"#4b5e2e",acc:"#1e2a12",acc2:"#8a2b4d",accInk:"#e4efc6"}},
 amber:{dark:{bg:"#12081f",card:"#1e1035",ink:"#f4f1ff",mute:"#b9a6d9",line:"#4a2f7a",acc:"#ffb020",acc2:"#22d3ee",accInk:"#1a1000"},
        light:{bg:"#ffe9c9",card:"#fff5e3",ink:"#2b1a3a",mute:"#6b4a8a",line:"#6b3fa0",acc:"#7c3aed",acc2:"#d6336c",accInk:"#fff5e3"}},
 crimson:{dark:{bg:"#150707",card:"#240d0e",ink:"#f4f1ff",mute:"#d6a9a9",line:"#5a1f24",acc:"#ff4d4d",acc2:"#ffc233",accInk:"#1a0000"},
          light:{bg:"#ffe3de",card:"#fff1ee",ink:"#3a0d0d",mute:"#8a4a4a",line:"#8a2a2a",acc:"#c1121f",acc2:"#b45309",accInk:"#fff1ee"}},
 azure:{dark:{bg:"#050d1f",card:"#0b1a38",ink:"#f4f1ff",mute:"#9db6e0",line:"#1e3a7a",acc:"#3d8bff",acc2:"#00e0b8",accInk:"#04122b"},
        light:{bg:"#dcecff",card:"#f1f7ff",ink:"#0a1a3a",mute:"#45608f",line:"#1e4a9a",acc:"#1d4ed8",acc2:"#0f766e",accInk:"#f1f7ff"}}
};
const palMenu=$("palMenu");
palMenu.innerHTML=Object.entries(PAL).map(([k,v])=>`<button class="swatch" data-p="${k}" title="${k}" style="background:linear-gradient(135deg,${v.dark.bg} 50%,${v.dark.acc} 50%)"></button>`).join("");
function applyPal(k){
 const isLight=document.documentElement.dataset.theme==="light";
 const v=PAL[k][isLight?"light":"dark"];
 const r=document.documentElement.style;
 r.setProperty("--bg",v.bg);r.setProperty("--card",v.card);r.setProperty("--ink",v.ink);r.setProperty("--mute",v.mute);
 r.setProperty("--line",v.line);r.setProperty("--acc",v.acc);r.setProperty("--acc2",v.acc2);r.setProperty("--acc-ink",v.accInk);r.setProperty("--sh",v.line);
 const bgrgb=v.bg.match(/\w\w/g).map(h=>parseInt(h,16)).join(",");
 const fxrgb=v.acc.match(/\w\w/g).map(h=>parseInt(h,16)).join(",");
 r.setProperty("--bgrgb",bgrgb);r.setProperty("--fx",fxrgb);
 try{localStorage.setItem("pf-pal",k)}catch(e){}
}
$("palBtn").onclick=e=>{e.stopPropagation();const r=e.target.getBoundingClientRect();palMenu.style.top=(r.bottom+8)+"px";palMenu.style.right=(innerWidth-r.right)+"px";palMenu.classList.toggle("on")};
palMenu.onclick=e=>{const p=e.target.dataset.p;if(p)applyPal(p)};
addEventListener("click",()=>palMenu.classList.remove("on"));
try{const k=localStorage.getItem("pf-pal");if(k&&PAL[k])applyPal(k)}catch(e){}

/* secret mini-game: catch the gems */
const gameDlg=$("gameDlg"),gc=$("gc"),gx=gc.getContext("2d");
let gRun=false,gPaddle=120,gScore=0,gems=[],gT=0;
function gemColor(){return getComputedStyle(document.documentElement).getPropertyValue("--acc")}
function resetGame(){gScore=0;gems=[];gPaddle=120;$("gscore").textContent="Score: 0 · ←/→ or drag";}
function openGame(){resetGame();gameDlg.showModal();gRun=true;requestAnimationFrame(gLoop);}
function closeGame(){gRun=false;gameDlg.close()}
$("gclose").onclick=closeGame;
gameDlg.addEventListener("close",()=>gRun=false);
addEventListener("keydown",e=>{if(!gRun)return;if(e.key==="ArrowLeft")gPaddle=Math.max(0,gPaddle-18);if(e.key==="ArrowRight")gPaddle=Math.min(240,gPaddle+18);});
gc.addEventListener("pointermove",e=>{if(!gRun)return;const r=gc.getBoundingClientRect();gPaddle=Math.max(0,Math.min(240,(e.clientX-r.left)-20));});
function gLoop(t){
 if(!gRun)return;
 gT++;
 if(gT%40===0)gems.push({x:Math.random()*260,y:0});
 gx.fillStyle="#000";gx.fillRect(0,0,280,180);
 gx.fillStyle=gemColor();gx.fillRect(gPaddle,166,40,8);
 gems.forEach(g=>{g.y+=2;gx.fillRect(g.x,g.y,10,10);});
 gems=gems.filter(g=>{
  if(g.y>158&&g.y<176&&g.x+10>gPaddle&&g.x<gPaddle+40){gScore++;beep(880,.08,"square");$("gscore").textContent="Score: "+gScore+" · ←/→ or drag";return false;}
  return g.y<190;
 });
 requestAnimationFrame(gLoop);
}


/* achievement pop-ups on section view */
const ACH={work:"EXPLORED: SELECT LEVEL",about:"EXPLORED: PLAYER 1",experience:"EXPLORED: QUEST LOG",contact:"EXPLORED: CONTINUE?"};
const achEl=$("ach");let achBusy=false;const seen=new Set();
let xpTotal=5,xpDone=0;
function popAch(t){achEl.textContent="🏆 "+t;achEl.classList.add("on");setTimeout(()=>achEl.classList.remove("on"),2200);beep(660,.12,"triangle");}
new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting&&ACH[e.target.id]&&!seen.has(e.target.id)){seen.add(e.target.id);popAch(ACH[e.target.id]);}});},{threshold:.5}).observe;
["work","about","experience","contact"].forEach(id=>{const el=document.getElementById(id);if(el)new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting&&!seen.has(id)){seen.add(id);popAch(ACH[id]);}});},{threshold:.4}).observe(el);});

/* pixel spark burst on click/tap */
function spark(x,y){
 const cols=[getComputedStyle(document.documentElement).getPropertyValue("--acc"),getComputedStyle(document.documentElement).getPropertyValue("--acc2")];
 for(let i=0;i<8;i++){
  const s=document.createElement("div");s.className="spark";s.style.left=x+"px";s.style.top=y+"px";
  s.style.background=cols[i%2];document.body.appendChild(s);
  const ang=Math.random()*6.28,dist=20+Math.random()*36;
  s.animate([{transform:"translate(0,0)",opacity:1},{transform:`translate(${Math.cos(ang)*dist}px,${Math.sin(ang)*dist}px)`,opacity:0}],{duration:420+Math.random()*200,easing:"cubic-bezier(.2,.8,.2,1)"}).onfinish=()=>s.remove();
 }
}
let AC,soundOn=true;
try{const v=localStorage.getItem("pf-sound");if(v==="off")soundOn=false}catch(e){}
function beep(freq,dur,type){
 if(!soundOn)return;
 try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();
 const o=AC.createOscillator(),g=AC.createGain();o.type=type||"square";o.frequency.value=freq;
 g.gain.setValueAtTime(.06,AC.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+dur);
 o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+dur);}catch(e){}
}
$("sndBtn").onclick=()=>{soundOn=!soundOn;$("sndBtn").textContent=soundOn?"🔊":"🔇";try{localStorage.setItem("pf-sound",soundOn?"on":"off")}catch(e){}};
$("sndBtn").textContent=soundOn?"🔊":"🔇";
addEventListener("pointerdown",e=>{spark(e.clientX,e.clientY);beep(220,.05,"square")});

/* Konami code easter egg */
const KONAMI=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let ki=0;
addEventListener("keydown",e=>{ki=(e.key===KONAMI[ki])?ki+1:(e.key===KONAMI[0]?1:0);if(ki===KONAMI.length){ki=0;popAch("SECRET FOUND: THANKS FOR PLAYING, "+D.name.toUpperCase()+"!");document.body.animate([{filter:"invert(0)"},{filter:"invert(1)"},{filter:"invert(0)"}],{duration:700});setTimeout(openGame,750);}});


/* pixel text rain background */
const cv=$("bg"),x=cv.getContext("2d"),S=4,CH="01★♥+×▲◆LVXPHP▮".split(""),CW=6;
let W,H,drops;
function size(){W=cv.width=Math.ceil(innerWidth/S);H=cv.height=Math.ceil(innerHeight/S);drops=Array.from({length:Math.floor(W/CW)},()=>Math.random()*H);}
function rgb(){const s=getComputedStyle(document.documentElement);return [s.getPropertyValue("--bgrgb").trim(),s.getPropertyValue("--fx").trim()]}
function tick(still){
 const [b,f]=rgb();x.fillStyle=`rgba(${b},${still?1:.14})`;x.fillRect(0,0,W,H);
 x.font="6px monospace";x.textBaseline="top";
 drops.forEach((y,i)=>{
  x.fillStyle=`rgba(${f},${still?Math.random()*.5:.9})`;
  const yy=still?Math.random()*H:y;
  x.fillText(CH[Math.random()*CH.length|0],i*CW,yy);
  if(!still)drops[i]=(y>H&&Math.random()>.975)?0:y+CW*.6;
 });
}
size();addEventListener("resize",()=>{size();if(reduce)for(let k=0;k<40;k++)tick(true)});
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(reduce){for(let k=0;k<40;k++)tick(true)}
else{let last=0;(function loop(t){if(t-last>60){tick(false);last=t}requestAnimationFrame(loop)})(0)}
