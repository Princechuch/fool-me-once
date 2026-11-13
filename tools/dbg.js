const pw=require(process.env.PW);const path=require('path');
(async()=>{const b=await pw.chromium.launch({executablePath:process.env.EXE});const p=await b.newPage({viewport:{width:390,height:844}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+path.resolve('index.html'));await p.evaluate(()=>localStorage.clear());await p.reload();
const act=a=>p.click('[data-a="'+a+'"]',{timeout:3000});
await p.click('[data-m="pitch"]');const ins=await p.$$('.names input');for(let i=0;i<3;i++)await ins[i].fill('P'+i);
await act('start');await act('round');await act('pDeal');
for(let i=0;i<2;i++){await act('iam');const bx=await (await p.$('#peek')).boundingBox();await p.mouse.move(bx.x+40,bx.y+40);await p.mouse.down();await p.waitForTimeout(100);await p.mouse.up();await act('seen');console.log('after seen',await p.evaluate(()=>JSON.parse(localStorage.getItem('fmo2')).scr))}
console.log(await p.textContent('main'));await b.close()})();
