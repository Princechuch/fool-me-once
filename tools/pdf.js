const pw=require(process.env.PW);const path=require('path');const out=process.argv[2];
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});
 for(const l of ['en','es']){const p=await b.newPage();await p.goto('file://'+path.resolve('print.html')+'?lang='+l);
  console.log(l,'cards',await p.evaluate(()=>document.querySelectorAll('.c').length),'pages',await p.evaluate(()=>document.querySelectorAll('.page').length),'overflow',await p.evaluate(()=>window.OVER));
  await p.pdf({path:path.join(out,l==='en'?'Fool Me Once v0.2 - print and play (EN).pdf':'Fool Me Once v0.2 - imprimir y jugar (ES).pdf'),format:'A4',printBackground:true,preferCSSPageSize:true});
  await p.setViewportSize({width:794,height:1123});
  for(const [i,n] of [[0,'rules'],[1,'pitchrules'],[3,'p1f'],[4,'p1b'],[5,'p2f'],[6,'p2b'],[9,'p4f'],[10,'p4b'],[23,'p11f']]){const el=(await p.$$('.page'))[i];await el.screenshot({path:`shots/print-${l}-${n}.png`})}
 }await b.close()})();
