const pw=require(process.env.PW);
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});const out=process.argv[2];
 const d=await b.newPage({viewport:{width:1200,height:1200},deviceScaleFactor:2});await d.goto('https://niwshots.com',{waitUntil:'networkidle'});
 for(let i=0;i<22;i++){await d.waitForTimeout(350);await d.screenshot({path:out+'/hero-f'+i+'.png'})}
 await b.close()})();
