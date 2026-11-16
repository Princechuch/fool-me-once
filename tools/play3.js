// v0.3 check: forces honest rounds and a trick round in The Guru, then a second game to see the "spotted" screen.
const pw=require(process.env.PW);const path=require('path');
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});const errs=[];
 for(const lang of ['en','es']){
 const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true});const p=await c.newPage();
 p.on('pageerror',e=>errs.push(lang+': '+e.message));
 await p.goto('file://'+path.resolve('index.html'));
 await p.evaluate(l=>FMO_TEST((S,render)=>{S.lang=l;render()}),lang);
 const act=a=>p.click('[data-a="'+a+'"]',{timeout:4000});
 const sh=async n=>{await p.waitForTimeout(1000);return p.screenshot({path:'shots/v3-'+lang+'-'+n+'.png'})};
 await p.click('[data-m="guru"]');await act('add');const ins=await p.$$('.names input');const nm=['Mum','Dad','Leo','Ana'];for(let i=0;i<4;i++)await ins[i].fill(nm[i]);
 await act('r3');await act('start');
 async function round(honest,tag,first){
  if(first)await act('round');
  await p.evaluate(h=>FMO_TEST((S,render,order,pack)=>{var r=S.game.r;if(h){r.deal[r.guru]=0}else if(r.deal[r.guru]===0){r.deal[r.guru]=pack().ids[0]}r.honest=h;render()}),honest);
  await act('topic');
  for(let i=0;i<4;i++){await act('iam');const bx=await (await p.$('#peek')).boundingBox();await p.mouse.move(bx.x+40,bx.y+40);await p.mouse.down();
   const isG=await p.evaluate(i=>FMO_TEST((S,render,order)=>order()[i]===S.game.r.guru),i);if(isG)await sh(tag+'-peek-guru');await p.mouse.up();await act('seen')}
  await act('debate');await act('ask');await sh(tag+'-ask');await act('asked');await act('vote');await sh(tag+'-vote');
  await p.evaluate(()=>FMO_TEST((S,render)=>{S.scr='still';render()}));await act('reveal');await sh(tag+'-reveal');await act('tally');
  await p.click('[data-a="tt"]');await sh(tag+'-tally');await act('score');
  if(await p.$('[data-a="usedY"]'))await act('usedY');
  await sh(tag+'-scores');console.log(lang,tag,'verdict',await p.evaluate(()=>FMO_TEST(S=>S.game.r.verdict)),'scores',await p.evaluate(()=>FMO_TEST(S=>S.game.scores.join(','))));
  await act('after');
 }
 await round(true,'honest',true);await round(false,'trick');await round(true,'honest2');
 await sh('end');
 await act('again');const hasWild=await p.$('[data-a="wild"]');console.log(lang,'wild button on 2nd game:',!!hasWild);
 if(hasWild){await act('wild');await p.click('[data-a="wd"]');await sh('wild');await act('wildGo');console.log(lang,'after wild',await p.evaluate(()=>FMO_TEST(S=>S.game.scores.join(','))),'screen',await p.evaluate(()=>FMO_TEST(S=>S.scr)))}
 await c.close()}
 console.log('errors',errs);await b.close()})();
