const pw=require(process.env.PW);const path=require('path');
(async()=>{
 const b=await pw.chromium.launch({executablePath:process.env.EXE});
 const errs=[];
 for(const [lang,names,rounds] of [['en',['Mum','Dad','Leo','Ana'],3],['es',['Mamá','Papá','Leo','Ana','Abuela','Tío Paco'],5],['en',['A','B','C'],3]]){
  const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,locale:lang==='es'?'es-ES':'en-GB',hasTouch:true});
  const p=await c.newPage();p.on('pageerror',e=>errs.push(lang+': '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push(lang+' console: '+m.text())});
  await p.goto('file://'+path.resolve('index.html'));
  const shot=async n=>{await p.waitForTimeout(1300);await p.screenshot({path:`shots/${lang}${names.length}-${n}.png`,fullPage:true})};
  const act=a=>p.click(`[data-a="${a}"]`);
  await shot('01-home');
  await act('how');await shot('02-how');await act('back');
  await act('players');
  for(let i=3;i<names.length;i++)await act('add');
  const ins=await p.$$('.names input');for(let i=0;i<names.length;i++)await ins[i].fill(names[i]);
  await act(rounds===3?'r3':'r5');await shot('03-players');
  await act('start');await shot('04-line');
  for(let r=1;r<=rounds;r++){
   await act('round');if(r===1)await shot('05-pick');
   await p.click('[data-a="topic"]');
   for(let i=0;i<names.length;i++){
    if(r===1&&i===0)await shot('06-pass');
    await act('iam');
    if(await p.isEnabled('#hid'))errs.push('seen enabled before peek');
    const box=await (await p.$('#peek')).boundingBox();
    await p.mouse.move(box.x+50,box.y+50);await p.mouse.down();
    if(r===1)await p.screenshot({path:`shots/${lang}${names.length}-07-peek-${i}.png`});
    await p.waitForTimeout(150);await p.mouse.up();
    if(r===1&&i===0)await shot('07-hidden');
    await act('seen');
   }
   if(r===1)await shot('08-talk');
   await act('ask');if(r===1)await shot('09-ask');await act('asked');
   if(!(await p.isDisabled('[data-a="ask"]')))errs.push('ask not disabled');
   await act('vote');if(r===1)await shot('10-vote');
   await act('count');await p.waitForTimeout(500);if(r===1)await p.screenshot({path:`shots/${lang}${names.length}-11-count.png`});
   await p.waitForSelector('[data-a="reveal"]',{timeout:8000});if(r===1)await shot('12-still');
   await act('reveal');if(r===1)await shot('13-reveal');
   await act('tally');
   const tt=await p.$$('[data-a="tt"]'),tg=await p.$$('[data-a="tg"]');
   if(tt.length!==names.length-1)errs.push('tally rows '+tt.length);
   // r1 some, r2 all, r3 none
   if(r%3===1){await tt[0].click();await tg[0].click();await tg[1].click()}
   if(r%3===2){for(const t of tt)await t.click()}
   if(r===1)await shot('14-tally');
   await act('score');await shot('15-scores-r'+r);
   await act('after');
   if(r<rounds&&r===1)await shot('16-newtrick');
  }
  await shot('17-end');
  await act('album');await shot('18-album');
  const st=await p.evaluate(()=>localStorage.getItem('fmo_state'));const g=JSON.parse(st).game;
  console.log(lang,names.length,'scores',g.scores,'guruTimes',g.guruTimes,'lineLen',g.line.length,'uniq',new Set(g.line.concat(g.deck)).size);
  await p.reload();await p.waitForTimeout(300);
  await c.close();
 }
 console.log('errors:',errs);await b.close();
})();
