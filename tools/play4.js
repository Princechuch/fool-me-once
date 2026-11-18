// v0.4 check: The Pitch with an honest seller, the buyer buys the honest pitch, half the table shows a fist.
const pw=require(process.env.PW);const path=require('path');
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});const errs=[];
 for(const lang of ['en','es']){
  const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true});const p=await c.newPage();
  p.on('pageerror',e=>errs.push(lang+': '+e.message));
  await p.goto('file://'+path.resolve('index.html'));await p.evaluate(()=>localStorage.clear());await p.reload();
  await p.evaluate(l=>FMO_TEST((S,render)=>{S.lang=l;render()}),lang);
  const act=a=>p.click('[data-a="'+a+'"]',{timeout:5000});
  const sh=n=>p.waitForTimeout(700).then(()=>p.screenshot({path:'shots/v4-'+lang+'-'+n+'.png'}));
  await p.click('[data-m="pitch"]');await act('add');
  const ins=await p.$$('.names input');const nm=['Mum','Dad','Leo','Ana'];for(let i=0;i<4;i++)await ins[i].fill(nm[i]);
  await act('r3');await act('start');await sh('first');
  if(await p.$('[data-a="round"]'))await act('round');
  // force: first seller honest
  await p.evaluate(()=>FMO_TEST((S,render)=>{S.game.r.tr[0]=0;render()}));
  await act('pDeal');
  for(let s=0;s<3;s++){await act('iam');const bx=await (await p.$('#peek')).boundingBox();await p.mouse.move(bx.x+40,bx.y+40);await p.mouse.down();await p.waitForTimeout(300);if(s===0)await sh('peek-honest');await p.mouse.up();await act('seen')}
  await act('pSellStart');for(let s=0;s<3;s++)await act('pSellNext');
  await sh('buy');
  const seller0=await p.evaluate(()=>FMO_TEST(S=>S.game.r.sellers[0]));
  await p.click('[data-a="pBought"][data-i="'+seller0+'"]');
  for(let s=0;s<3;s++){await act('count');await p.waitForSelector('[data-a="pReveal"]',{timeout:8000});await act('pReveal');
   const pt=await p.$$('[data-a="pt"]');if(s===0){await pt[0].click();await pt[1].click();await sh('reveal-honest')}await act('pScoreSeller')}
  await sh('scores');
  const g=await p.evaluate(()=>FMO_TEST(S=>({sc:S.game.scores,buyer:S.game.r.buyer,s0:S.game.r.sellers[0],res:S.game.r.res})));console.log(lang,JSON.stringify(g));
 }
 console.log('errors',errs);await b.close()})();
