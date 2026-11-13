const pw=require(process.env.PW);const path=require('path');
(async()=>{
 const b=await pw.chromium.launch({executablePath:process.env.EXE});const errs=[];
 async function setup(lang,mode){
  const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,locale:lang==='es'?'es-ES':'en-GB',hasTouch:true});
  const p=await c.newPage();p.on('pageerror',e=>errs.push(mode+lang+': '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto('file://'+path.resolve('index.html'));
  return {c,p};
 }
 const sh=async(p,n)=>{await p.waitForTimeout(900);await p.screenshot({path:'shots/v2-'+n+'.png',timeout:8000}).catch(e=>console.log('shot fail',n))};
 const act=(p,a)=>p.click('[data-a="'+a+'"]',{timeout:5000}).catch(e=>{console.log('click fail',a);throw e});
 const peekAll=async(p,count,tag,shotIt)=>{for(let i=0;i<count;i++){await act(p,'iam');const bx=await (await p.$('#peek')).boundingBox();await p.mouse.move(bx.x+40,bx.y+40);await p.mouse.down();if(shotIt)await p.screenshot({path:'shots/v2-'+tag+'-peek'+i+'.png'});await p.waitForTimeout(120);await p.mouse.up();await act(p,'seen')}};
 // GURU
 for(const [lang,names,rounds] of (process.env.ONLY==='pitch'?[]:[['en',['Mum','Dad','Leo','Ana'],3],['es',['Mamá','Papá','Leo','Ana','Abuela','Tío'],5]])){
  const {c,p}=await setup(lang,'guru');
  if(lang==='en')await sh(p,'home');
  await p.click('[data-m="guru"]');for(let i=3;i<names.length;i++)await act(p,'add');
  const ins=await p.$$('.names input');for(let i=0;i<names.length;i++)await ins[i].fill(names[i]);
  await act(p,rounds===3?'r3':'r5');if(lang==='en')await sh(p,'guru-players');
  await act(p,'start');if(lang==='en')await sh(p,'guru-pack');
  for(let r=1;r<=rounds;r++){
   if(r===1)await act(p,'round');
   await p.click('[data-a="topic"]');
   await peekAll(p,names.length,'guru'+lang,r===1&&lang==='en');
   if(r===1)await sh(p,'guru-talk'+lang);
   await act(p,'debate');if(r===1)await sh(p,'guru-debate'+lang);
   if(r===2){await act(p,'lap');await sh(p,'guru-lap2'+lang);await act(p,'debate')}
   await act(p,'ask');await act(p,'asked');
   await act(p,'vote');await act(p,'count');await p.waitForSelector('[data-a="reveal"]',{timeout:8000});await act(p,'reveal');if(r===1)await sh(p,'guru-reveal'+lang);
   await act(p,'tally');const tt=await p.$$('[data-a="tt"]');
   if(r%3===1){await tt[0].click()} if(r%3===2){for(const t of tt)await t.click()}
   await act(p,'score');
   if(r%3===0){await sh(p,'guru-used'+lang);await act(p,'usedY')}
   await sh(p,'guru-scores'+lang+r);await act(p,'after');
  }
  await sh(p,'guru-end'+lang);
  const g=await p.evaluate(()=>JSON.parse(localStorage.getItem('fmo2')).game);console.log('guru',lang,g.scores,g.guruTimes);
  await c.close();
 }
 // PITCH
 for(const [lang,names,prod] of (process.env.ONLY==='guru'?[]:[['en',['Mum','Dad','Leo'],'pa'],['es',['Mamá','Papá','Leo','Ana','Abuela','Tío','Sara','Max'],'ph']])){
  const {c,p}=await setup(lang,'pitch');
  await p.click('[data-m="pitch"]');for(let i=3;i<names.length;i++)await act(p,'add');
  const ins=await p.$$('.names input');for(let i=0;i<names.length;i++)await ins[i].fill(names[i]);
  await act(p,prod);await act(p,'r3');await sh(p,'pitch-players'+lang);
  await act(p,'start');
  for(let r=1;r<=3;r++){
   if(r===1)await act(p,'round');
   if(r===1)await sh(p,'pitch-brief'+lang);
   await act(p,'pDeal');await peekAll(p,names.length-1,'pitch'+lang,r===1&&lang==='en');
   if(r===1)await sh(p,'pitch-prep'+lang);await act(p,'pSellStart');
   for(let s=0;s<names.length-1;s++){if(r===1&&s===0)await sh(p,'pitch-sell'+lang);await act(p,'pSellNext')}
   if(r===1)await sh(p,'pitch-buy'+lang);
   await p.click('[data-a="pBought"]');
   for(let s=0;s<names.length-1;s++){await act(p,'count');await p.waitForSelector('[data-a="pReveal"]',{timeout:8000});await act(p,'pReveal');const pt=await p.$$('[data-a="pt"]');if(s===0)await pt[0].click();if(s===1)for(const x of pt)await x.click();if(r===1&&s===0)await sh(p,'pitch-reveal'+lang);await act(p,'pScoreSeller')}
   await sh(p,'pitch-scores'+lang+r);await act(p,'after');
  }
  await sh(p,'pitch-end'+lang);
  const g=await p.evaluate(()=>JSON.parse(localStorage.getItem('fmo2')).game);console.log('pitch',lang,g.scores,g.round,g.total);
  await act(p,'album');await sh(p,'album'+lang);
  await c.close();
 }
 console.log('errors',errs);await b.close();
})();
