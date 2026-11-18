const pw=require(process.env.PW);
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});const out=process.argv[2];
 const d=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});await d.goto('https://niwshots.com',{waitUntil:'networkidle'});await d.waitForTimeout(2500);
 await d.screenshot({path:out+'/full-desktop.png',fullPage:true});
 const h=await d.evaluate(()=>document.body.scrollHeight);console.log('height',h);
 for(let i=0;i*900<h&&i<8;i++){await d.evaluate(y=>window.scrollTo(0,y),i*900);await d.waitForTimeout(900);await d.screenshot({path:out+'/desktop-'+(i+1)+'.png'})}
 const m=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:3});await m.goto('https://niwshots.com',{waitUntil:'networkidle'});await m.waitForTimeout(2500);await m.screenshot({path:out+'/movil-1.png'});
 await b.close()})();
