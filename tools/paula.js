const pw=require(process.env.PW);const out=process.argv[2],url=process.argv[3]||'https://sousart.vercel.app';
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});
 for(const [n,w,h,sf] of [['d',1440,900,1],['m',390,844,2]]){
  const c=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:sf,hasTouch:n==='m',isMobile:n==='m'});const p=await c.newPage();const errs=[];
  p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,150))});
  p.on('requestfailed',r=>errs.push('FAIL '+r.url().slice(0,100)));
  await p.goto(url,{waitUntil:'networkidle'});await p.waitForTimeout(2500);
  const H=await p.evaluate(()=>document.documentElement.scrollHeight);
  // scroll through to trigger lazy/reveal
  for(let y=0;y<H;y+=h){await p.evaluate(v=>window.scrollTo(0,v),y);await p.waitForTimeout(350)}
  await p.evaluate(()=>window.scrollTo(0,0));await p.waitForTimeout(500);
  const n2=Math.min(Math.ceil(H/h),14);
  for(let i=0;i<n2;i++){await p.evaluate(v=>window.scrollTo(0,v),i*h);await p.waitForTimeout(450);await p.screenshot({path:`${out}/${n}-${String(i).padStart(2,'0')}.png`})}
  const ov=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,imgs:[...document.images].map(i=>({s:i.currentSrc.slice(-60),nw:i.naturalWidth,cw:i.clientWidth,alt:i.alt.slice(0,30),loading:i.loading})).slice(0,40)}));
  console.log(n,'height',H,'shots',n2,'overflowX',ov.sw>ov.cw,ov.sw,ov.cw,'errs',errs.slice(0,8));
  if(n==='d')console.log(JSON.stringify(ov.imgs.slice(0,6)));
  await c.close();}
 await b.close()})();
