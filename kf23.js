/* King Fisher Studio 2.3 — exclusive mobile panels */
(()=>{'use strict';
const $=id=>document.getElementById(id),B=document.body;
if(!$('kfNativeTabs')||!$('pDesign'))return;
let mode='none',speed=1;
const shade=document.createElement('button');shade.type='button';shade.id='kf23Shade';shade.className='kf23-shade';shade.hidden=true;shade.setAttribute('aria-label','Close current panel');B.append(shade);
const closeBtn=document.createElement('button');closeBtn.type='button';closeBtn.className='kf23-close';closeBtn.id='kf23MaterialClose';closeBtn.setAttribute('aria-label','Close finishes');closeBtn.textContent='×';$('pDesign').prepend(closeBtn);
const finish=document.createElement('button');finish.type='button';finish.id='kf23Finish';finish.className='kf23-finish';finish.textContent='Finishes';$('kf22RoomAccess')?.append(finish);
const listBtn=document.createElement('button');listBtn.id='kf23StageButton';listBtn.type='button';listBtn.className='kf23-build-list';listBtn.textContent='☷';listBtn.setAttribute('aria-label','View all stages');B.append(listBtn);
const stages=document.createElement('section');stages.id='kf23Stages';stages.className='kf23-stages';stages.hidden=true;stages.setAttribute('role','dialog');stages.setAttribute('aria-label','Build stages');stages.innerHTML='<div class="kf23-stage-head">All construction stages<button id="kf23StagesClose" type="button" aria-label="Close">×</button></div><div class="kf23-stage-scroll" id="kf23StageList"></div>';B.append(stages);
const names=['Underground utilities','Foundation','Forms and slab prep','Slab','Block walls','Roof trusses','Roof','Framing and windows','Drywall and stucco','Paint','Finishes','Interior design'];
const speedBtn=document.createElement('button');speedBtn.id='kf23Speed';speedBtn.type='button';speedBtn.className='kf23-build-speed';speedBtn.textContent='1×';$('kf22BuildCard')?.append(speedBtn);
function renderStages(){const list=$('kf23StageList');if(!list)return;let k=parseInt(($('phNum')?.textContent.match(/\d+/)||[])[0]||'12');list.replaceChildren();names.forEach((name,i)=>{let b=document.createElement('button');b.type='button';b.dataset.stage=i+1;b.textContent=(i+1)+'. '+name;b.setAttribute('aria-current',String(i+1===k));list.append(b)})}
function sync(){let active=mode!=='none';B.classList.toggle('kf23-overlay',active);B.classList.toggle('kf23-material-open',mode==='materials');B.dataset.kf23Overlay=mode;shade.hidden=!active;if($('kf22RoomsMenu'))$('kf22RoomsMenu').hidden=mode!=='rooms';stages.hidden=mode!=='stages';if(mode==='stages')renderStages();if(active){$('kfNativeMenu').hidden=true;B.classList.remove('kf-cameras-open')}}
function open(v){mode=mode===v?'none':v;sync()}
function close(){if(mode==='none')return;mode='none';sync()}
shade.addEventListener('click',close);closeBtn.addEventListener('click',close);finish.addEventListener('click',()=>open('materials'));listBtn.addEventListener('click',()=>open('stages'));$('kf23StagesClose').addEventListener('click',close);
$('kf23StageList').addEventListener('click',e=>{let b=e.target.closest('[data-stage]');if(b){document.querySelector('.ph[data-k="'+b.dataset.stage+'"]')?.click();close()}});
speedBtn.addEventListener('click',()=>{speed=speed===1?2:speed===2?4:1;speedBtn.textContent=speed+'×';document.querySelector('#playBar [data-speed="'+speed+'"]')?.click();document.querySelector('#pObra [data-speed="'+speed+'"]')?.click()});
['kf22PlanOpen','kf22RoomPill'].forEach(id=>$(id)?.addEventListener('click',()=>setTimeout(()=>{mode='rooms';sync()},0)));
$('kf22RoomsClose')?.addEventListener('click',close);$('kf22RoomsGrid')?.addEventListener('click',e=>{if(e.target.closest('[data-room]'))close()});
document.getElementById('kfNativeTabs')?.addEventListener('click',close,true);
$('kfNativeBack')?.addEventListener('click',close,true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
new MutationObserver(close).observe(B,{attributes:true,attributeFilter:['data-view']});
sync();window.KFStudio23={open,close};
})();