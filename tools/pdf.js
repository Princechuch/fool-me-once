const pw=require(process.env.PW);const path=require('path');const out=process.argv[2];
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});
 for(const l of ['en','es']){const p=await b.newPage();await p.goto('file://'+path.resolve('print.html')+'?lang='+l);
  console.log(l,'cards',await p.evaluate(()=>document.querySelectorAll('.c').length),'pages',await p.evaluate(()=>document.querySelectorAll('.page').length),'overflow',await p.evaluate(()=>window.OVER));
  await p.pdf({path:path.join(out,l==='en'?'Fool Me Once v0.4 - print and play (EN).pdf':'Fool Me Once v0.4 - imprimir y jugar (ES).pdf'),format:'A4',printBackground:true,preferCSSPageSize:true});
  const q=await b.newPage();await q.goto('file://'+path.resolve('print.html')+'?only=docs&lang='+l);console.log(l,'docs overflow',await q.evaluate(()=>window.OVER));await q.pdf({path:path.join(out,l==='en'?'Fool Me Once v0.4 - rules and family playtest kit (EN).pdf':'Fool Me Once v0.4 - manual y kit de prueba en familia (ES).pdf'),format:'A4',printBackground:true,preferCSSPageSize:true});
  for(const [i,n] of [[0,'d0'],[1,'d1'],[2,'d2'],[3,'d3'],[4,'d4'],[5,'d5']]){const el=(await q.$$('.page'))[i];await el.screenshot({path:`shots/v4-${l}-${n}.png`})}
  await p.setViewportSize({width:794,height:1123});
  for(const [i,n] of [[6,'c1f'],[7,'c1b']]){const el=(await p.$$('.page'))[i];await el.screenshot({path:`shots/v4-${l}-${n}.png`})}
 }await b.close()})();
