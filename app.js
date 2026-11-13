// Fool Me Once v0.2 (13/11/2026): The Guru and The Pitch, one phone on the table.
(function(){
var E=FMO_EXTRA;
var T={en:{
 brandTag:"Card games for the family table",
 h1a:"Someone at this table is ",h1b:"fooling you.",
 lede:"Two games about the tricks used to sell to you and persuade you online. Catch the trick. Name it.",
 guruName:"The Guru",guruLine:"One of you secretly slips a trick into the conversation. Catch who, and name the trick.",guruMeta:"3 to 6 players · 14+ · about 6 minutes a round",
 pitchName:"The Pitch",pitchLine:"Sell the table something ridiculous using a real trick. The others have to name it.",pitchMeta:"3 to 8 players · all ages · about 4 minutes a seller",
 playThis:"Play",how:"How to play",album:"Trick album",resume:"Continue the game",
 who:"Who's playing?",whoSub:function(a,b){return a+" to "+b+" players. Use the names you call each other."},add:"Add a player",name:"Name",rounds:"Rounds",quick:"3, quick",full:"5, full game",
 pitchRounds:"Rounds",pitchAll:"Everyone buys once",pitchQuick:"3, quick",
 packH:"Trick pack",packSub:"First time? Pack 1.",
 prodH:"What do you sell?",prodAbsurd:"Ridiculous products",prodHome:"Things from home (easier)",prodMix:"Mix",
 start:"Deal",
 packTitle:function(p){return p},packRead:"Read them out loud. Tonight's tricks are all in this pack, and you'll vote with these numbers.",ready:"We've read them",
 pickH:function(n){return n+", pick the topic"},pickSub:"You have the fewest points, so you choose. You'll also speak first.",pickSub1:"You choose, and you'll speak first.",
 passTo:"Pass the phone to",iam:function(n){return "I'm "+n},
 holdA:"Hold to",holdB:"peek",holdSub:"Keep it hidden. Let go to hide it again.",
 cit:"Citizen",citDo:"Say what you really think. Then catch the Guru.",citTrick:"Your trick card. It is NOT the Guru's trick:",
 guru:"You're the Guru",guruDo:"Slip this trick into what you say. Don't say its name. Not too obvious, not too hidden.",trickN:function(n){return "Trick "+n},
 hide:"Hidden. Next player",allSeen:"Everyone knows their role",
 talkH:"Topic",order:"Speaking order",talkDo:"One or two sentences each. Citizens say what they really think.",lap2:"Second lap: one more sentence each.",
 toDebate:"Everyone has spoken",
 debH:"Debate",debSub:"Two minutes. Ask anyone anything. Citizens can say what trick card they hold, or bluff.",
 qBtn:"Play the Question card",qUsed:"Question asked",qBig:"Who wins if I believe this?",qSub:"Ask it to anyone, once this round. They have to answer.",qOk:"Asked",
 lapBtn:"We need another lap",lapUsed:"Extra lap used",vote:"Vote",
 voteH:"Get your hands ready",voteDo1:"One hand points at the Guru.",voteDo2:function(n){return "The other shows the trick number, 1 to "+n+"."},voteDo3:"The Guru bluffs along.",count:"Count us in",fool:"Fool!",
 holdStill:"Hold still!",holdStillSub:"Hands where everyone can see them.",reveal:"Reveal",
 wasGuru:function(n){return n+" was the Guru"},caught:"Caught",what:"What it is",sounds:"It sounds like",notSame:"Not the same as",where:"Where you see it",ask:"Ask the table",
 tallyH:"Who got it right?",tallySub:function(n){return "Tap what each player got. "+n+" doesn't count."},gotG:"Guru",gotT:"Trick",score:"Score it",
 usedH:"Nobody named it. Was it really there?",usedSub:function(n){return n+", say the sentence where you used the trick. Then the table decides."},usedYes:"Yes, it was there",usedNo:"No, it wasn't",
 gSome:"Perfectly sneaky",gSomeS:function(n){return n+" scores 2: some named the trick, not all."},
 gAll:"Too obvious",gAllS:function(n){return "Everyone named the trick. "+n+" scores 0."},
 gHid:"Well played, nobody saw it",gHidS:function(n){return "The table agrees the trick was there. "+n+" scores 1."},
 gNone:"Not really used",gNoneS:function(n){return "The table says the trick wasn't there. "+n+" scores 0."},
 scoresH:"Scores",roundN:function(a,b){return "Round "+a+" of "+b},next:"Next round",finish:"See who won",
 winH:function(n){return n+" wins"},tieH:function(n){return n+" share the win"},
 hard:"Hardest to fool",smooth:"Smoothest Guru",bestSeller:"Best seller",again:"Play again, same players",home:"Back to start",
 albumH:"Trick album",albumSub:"Every trick you name goes in your album. 24 tricks in three packs.",albumEmpty:"No tricks yet. Play a round and name one.",of:"of 24",clear:"Clear albums",back:"Back",
 // pitch
 pBuyerIs:function(n){return n+" is the buyer"},pBuyerSub:"Buyer: say who you are. Everyone else sells to you.",pYouAre:"You're buying as",pProduct:"Today's product",
 pPeekDo:"Use this trick in your pitch. Don't say its name.",pTricksDealt:"Everyone has a trick",
 pPrepH:"Prepare your pitch",pPrepSub:"60 seconds, all at once. Shy? Write it down and ask someone to read it for you.",pStartTimer:"Start 60 seconds",pSkip:"We're ready",
 pSellH:function(n){return n+", sell it!"},pSellSub:"20 seconds. Use your trick.",pGo:"Go",pNextSeller:"Next seller",pDone:"Done",
 pBuyH:function(n){return n+", what do you buy?"},pBuySub:"Pick the pitch that convinced you. +1 for that seller.",
 pGuessH:function(n){return "What was "+n+"'s trick?"},pGuessSub:function(k){return "Everyone except the seller shows a number, 1 to "+k+", on three."},pShow:"Show the trick",
 pTallySub:function(n){return "Who named "+n+"'s trick? +1 each."},pNext:"Next",
 pSome:function(n){return n+" scores 2: some named it, not all."},pAll:function(n){return "Everyone named it. Too obvious: "+n+" scores 0."},pNone:function(n){return "Nobody named it. Too hidden: "+n+" scores 0."},
 bought:"Bought",pRest:function(n){return n===1?"One seller scores 0: everyone named the trick, or nobody did.":n+" sellers score 0: everyone named the trick, or nobody did."},
 howGuru:[["Pack and roles","One trick pack on the table. Everyone gets a role card (one Guru, the rest Citizens) and a trick card, face down."],["Topic","Whoever has the fewest points picks between two topics and speaks first."],["Talk","One or two sentences each. Citizens say what they really think. The Guru slips the trick in."],["Debate","Two minutes. Ask anyone anything. Citizens know their own trick card is not the Guru's. You can bluff about it."],["Another lap?","If the table wants, one more sentence each. Once per round."],["Three, two, one, fool!","All at once: one hand points at the Guru, the other shows the trick number."],["Reveal","Flip the Guru's trick and answer its question together."]],
 scGuru:["Right trick: 2 points, even if you pointed at the wrong person.","Right person: 1 point.","The Guru: 2 if some players name the trick but not all. If nobody names it, the Guru says the sentence and the table decides: really there, 1 point; not there, 0. If everyone names it, 0."],
 howPitch:[["Buyer and product","One player is the buyer this round. Draw a product and a buyer card."],["Secret tricks","Every seller gets one trick from the pack, in secret."],["Prepare","60 seconds, all at once."],["Sell","20 seconds each. Use your trick, don't name it."],["Buy","The buyer buys one pitch: +1 to that seller."],["Name the tricks","For each seller, everyone else shows the trick number on three."]],
 scPitch:["Right trick: 1 point for each guesser.","The seller: 2 if some name the trick but not all.","The buyer's choice: 1 point."],
 fair:"House rules",fairs:["What a Citizen says is their real opinion. Nobody gets told off for it later.","Anyone can say “Pause” if a topic touches something real. Stop and talk. That's the best move in the game."],
 scH:"Scoring"},
es:{
 brandTag:"Juegos de cartas para la mesa de casa",
 h1a:"Alguien en esta mesa ",h1b:"te la está colando.",
 lede:"Dos juegos sobre los trucos que se usan en redes para venderte y convencerte. Pilla el truco. Nómbralo.",
 guruName:"The Guru",guruLine:"Uno mete un truco en la conversación en secreto. Pillad quién y nombrad el truco.",guruMeta:"De 3 a 6 jugadores · desde 14 años · unos 6 minutos por ronda",
 pitchName:"The Pitch",pitchLine:"Vende a la mesa algo absurdo con un truco de verdad. Los demás tienen que nombrarlo.",pitchMeta:"De 3 a 8 jugadores · todas las edades · unos 4 minutos por vendedor",
 playThis:"Jugar",how:"Cómo se juega",album:"Álbum de trucos",resume:"Seguir la partida",
 who:"¿Quién juega?",whoSub:function(a,b){return "De "+a+" a "+b+" jugadores. Poned los nombres con los que os llamáis."},add:"Añadir jugador",name:"Nombre",rounds:"Rondas",quick:"3, rápida",full:"5, partida entera",
 pitchRounds:"Rondas",pitchAll:"Todos compran una vez",pitchQuick:"3, rápida",
 packH:"Pack de trucos",packSub:"¿Primera vez? El pack 1.",
 prodH:"¿Qué se vende?",prodAbsurd:"Productos absurdos",prodHome:"Cosas de casa (más fácil)",prodMix:"Mezcla",
 start:"Repartir",
 packTitle:function(p){return p},packRead:"Leedlos en voz alta. Los trucos de hoy son todos de este pack, y se vota con estos números.",ready:"Ya los hemos leído",
 pickH:function(n){return n+", elige el tema"},pickSub:"Vas último en puntos, así que eliges tú. También hablas primero.",pickSub1:"Eliges tú, y hablas primero.",
 passTo:"Pásale el móvil a",iam:function(n){return "Soy "+n},
 holdA:"Mantén pulsado para",holdB:"mirar",holdSub:"Que no lo vea nadie. Suelta para esconderlo.",
 cit:"Ciudadano",citDo:"Di lo que piensas de verdad. Luego, pilla al Gurú.",citTrick:"Tu carta de truco. NO es el truco del Gurú:",
 guru:"Eres el Gurú",guruDo:"Mete este truco en lo que digas. Sin decir su nombre. Ni muy evidente ni muy escondido.",trickN:function(n){return "Truco "+n},
 hide:"Escondido. Siguiente jugador",allSeen:"Todos saben su papel",
 talkH:"Tema",order:"Orden para hablar",talkDo:"Una o dos frases cada uno. Los Ciudadanos dicen lo que piensan de verdad.",lap2:"Segunda vuelta: una frase más cada uno.",
 toDebate:"Ya han hablado todos",
 debH:"Debate",debSub:"Dos minutos. Preguntad lo que queráis a quien queráis. Los Ciudadanos pueden decir qué carta de truco tienen, o farolear.",
 qBtn:"Jugar la carta de la pregunta",qUsed:"Pregunta hecha",qBig:"¿Y quién gana si me lo creo?",qSub:"Hazla a quien quieras, una vez por ronda. Hay que contestar.",qOk:"Hecha",
 lapBtn:"Necesitamos otra vuelta",lapUsed:"Vuelta extra usada",vote:"A votar",
 voteH:"Preparad las manos",voteDo1:"Con una mano señaláis al Gurú.",voteDo2:function(n){return "Con la otra, el número del truco, del 1 al "+n+"."},voteDo3:"El Gurú disimula y vota también.",count:"Cuenta atrás",fool:"¡Pillado!",
 holdStill:"¡Quietos!",holdStillSub:"Las manos donde se vean.",reveal:"Destapar",
 wasGuru:function(n){return "El Gurú era "+n},caught:"Pillado",what:"Qué es",sounds:"Cómo suena",notSame:"No es lo mismo que",where:"Dónde lo ves",ask:"Pregunta para la mesa",
 tallyH:"¿Quién ha acertado?",tallySub:function(n){return "Marcad lo que acertó cada uno. "+n+" no cuenta."},gotG:"Gurú",gotT:"Truco",score:"Puntuar",
 usedH:"Nadie lo ha nombrado. ¿De verdad estaba?",usedSub:function(n){return n+", di la frase en la que metiste el truco. Luego decide la mesa."},usedYes:"Sí, estaba",usedNo:"No, no estaba",
 gSome:"Fino, fino",gSomeS:function(n){return n+" gana 2: algunos nombraron el truco, pero no todos."},
 gAll:"Demasiado evidente",gAllS:function(n){return "Todos nombraron el truco. "+n+" se queda en 0."},
 gHid:"Bien jugado, nadie lo vio",gHidS:function(n){return "La mesa dice que el truco estaba. "+n+" gana 1."},
 gNone:"No lo usó de verdad",gNoneS:function(n){return "La mesa dice que el truco no estaba. "+n+" se queda en 0."},
 scoresH:"Puntos",roundN:function(a,b){return "Ronda "+a+" de "+b},next:"Siguiente ronda",finish:"Ver quién ha ganado",
 winH:function(n){return "Gana "+n},tieH:function(n){return "Empate: "+n},
 hard:"A quien menos se la cuelan",smooth:"El Gurú más fino",bestSeller:"El mejor vendedor",again:"Otra partida, los mismos",home:"Volver al inicio",
 albumH:"Álbum de trucos",albumSub:"Cada truco que nombras va a tu álbum. 24 trucos en tres packs.",albumEmpty:"Aún no hay trucos. Jugad una ronda y nombrad uno.",of:"de 24",clear:"Vaciar álbumes",back:"Volver",
 pBuyerIs:function(n){return n+" compra esta ronda"},pBuyerSub:"Comprador: di quién eres. Los demás te venden.",pYouAre:"Compras como",pProduct:"El producto de hoy",
 pPeekDo:"Usa este truco en tu anuncio. Sin decir su nombre.",pTricksDealt:"Todos tienen su truco",
 pPrepH:"Preparad el anuncio",pPrepSub:"60 segundos, todos a la vez. ¿Te da corte? Escríbelo y que lo lea otro.",pStartTimer:"Empezar 60 segundos",pSkip:"Ya estamos",
 pSellH:function(n){return n+", ¡véndelo!"},pSellSub:"20 segundos. Usa tu truco.",pGo:"Ya",pNextSeller:"Siguiente vendedor",pDone:"Listo",
 pBuyH:function(n){return n+", ¿qué compras?"},pBuySub:"Elige el anuncio que te ha convencido. +1 para ese vendedor.",
 pGuessH:function(n){return "¿Qué truco usó "+n+"?"},pGuessSub:function(k){return "Todos menos el vendedor marcan un número, del 1 al "+k+", a la de tres."},pShow:"Enseñar el truco",
 pTallySub:function(n){return "¿Quién nombró el truco de "+n+"? +1 cada uno."},pNext:"Siguiente",
 pSome:function(n){return n+" gana 2: algunos lo nombraron, pero no todos."},pAll:function(n){return "Lo nombraron todos. Demasiado evidente: "+n+" se queda en 0."},pNone:function(n){return "No lo nombró nadie. Demasiado escondido: "+n+" se queda en 0."},
 bought:"Comprado",pRest:function(n){return n===1?"Un vendedor se queda en 0: lo nombraron todos o nadie.":n+" vendedores se quedan en 0: lo nombraron todos o nadie."},
 howGuru:[["Pack y papeles","Un pack de trucos en la mesa. A cada uno, una carta de papel (un Gurú y los demás Ciudadanos) y una de truco, boca abajo."],["Tema","El que va último en puntos elige entre dos temas y habla primero."],["Se habla","Una o dos frases cada uno. Los Ciudadanos dicen lo que piensan de verdad. El Gurú mete su truco."],["Debate","Dos minutos. Se pregunta lo que se quiera. Cada Ciudadano sabe que su carta de truco no es la del Gurú, y puede farolear."],["¿Otra vuelta?","Si la mesa quiere, una frase más cada uno. Una vez por ronda."],["Tres, dos, uno, ¡pillado!","Todos a la vez: una mano señala al Gurú y la otra marca el número del truco."],["El destape","Se da la vuelta al truco del Gurú y se contesta su pregunta entre todos."]],
 scGuru:["Acertar el truco: 2 puntos, aunque señales a quien no era.","Acertar la persona: 1 punto.","El Gurú: 2 si algunos nombran el truco pero no todos. Si no lo nombra nadie, dice la frase y decide la mesa: si estaba, 1 punto; si no, 0. Si lo nombran todos, 0."],
 howPitch:[["Comprador y producto","Un jugador compra esta ronda. Se roba un producto y una carta de comprador."],["Trucos secretos","Cada vendedor recibe un truco del pack, en secreto."],["Preparar","60 segundos, todos a la vez."],["Vender","20 segundos cada uno. Usa tu truco sin nombrarlo."],["Comprar","El comprador compra un anuncio: +1 para ese vendedor."],["Nombrar los trucos","Por cada vendedor, los demás marcan el número del truco a la de tres."]],
 scPitch:["Acertar un truco: 1 punto para cada uno que acierte.","El vendedor: 2 si algunos nombran el truco pero no todos.","El elegido por el comprador: 1 punto."],
 fair:"Reglas de la casa",fairs:["Lo que dice un Ciudadano es su opinión de verdad. Nadie se lo echa en cara después.","Cualquiera puede decir «Pausa» si un tema toca algo real. Se para y se habla. Es la mejor jugada del juego."],
 scH:"Los puntos"}};

var app=document.getElementById('app'),S=load()||fresh(),L=T[S.lang],timer=null,tick=null;
function fresh(){return {v:2,lang:(navigator.language||'en').slice(0,2)==='es'?'es':'en',scr:'home',names:['','',''],rounds:5,pack:1,prod:'mix',mode:'guru',game:null}}
function load(){try{var s=JSON.parse(localStorage.getItem('fmo2'));if(s&&s.v===2&&s.scr)return s}catch(e){}return null}
function save(){try{localStorage.setItem('fmo2',JSON.stringify(S))}catch(e){}}
function albums(){try{return JSON.parse(localStorage.getItem('fmo_album'))||{}}catch(e){return {}}}
function saveAlbums(a){try{localStorage.setItem('fmo_album',JSON.stringify(a))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function trick(id){return FMO.tricks[id-1]}
function tx(t){return t[S.lang]}
function mo(id){return E.more[id][S.lang]}
function th(k){return FMO.themes[k]}
function pack(){return E.packs[S.game?S.game.pack-1:S.pack-1]}
function num(id){return pack().ids.indexOf(id)+1}
function named(){return S.names.map(function(x){return x.trim()}).filter(Boolean)}
function addAlbum(name,id){var al=albums(),k=name.toLowerCase();al[k]=al[k]||{name:name,ids:[]};if(al[k].ids.indexOf(id)<0)al[k].ids.push(id);saveAlbums(al)}

function newGame(){
 var n=named(),g={mode:S.mode,pack:S.pack,players:n,scores:n.map(function(){return 0}),named:n.map(function(){return 0}),special:n.map(function(){return 0}),guruTimes:n.map(function(){return 0}),
  topics:shuf(FMO.topics.map(function(_,i){return i})),round:0,r:null};
 if(S.mode==='guru'){g.total=S.rounds}
 else{g.total=S.rounds===3?3:n.length;var pool=S.prod==='home'?E.pitch.home:S.prod==='absurd'?E.pitch.products:E.pitch.products.concat(E.pitch.home);g.prods=shuf(pool.map(function(_,i){return i}));g.pool=S.prod;g.buyers=shuf(E.pitch.buyers.map(function(_,i){return i}))}
 S.game=g;S.scr='pack';
}
function poolList(){var g=S.game;return g.pool==='home'?E.pitch.home:g.pool==='absurd'?E.pitch.products:E.pitch.products.concat(E.pitch.home)}
function startRound(){
 var g=S.game;g.round++;
 if(g.mode==='guru'){
  var min=Math.min.apply(null,g.scores),low=[];g.scores.forEach(function(s,i){if(s===min)low.push(i)});
  var chooser=low[Math.floor(Math.random()*low.length)];
  if(g.topics.length<2)g.topics=shuf(FMO.topics.map(function(_,i){return i}));
  var w=g.guruTimes.map(function(t){return 1/(1+10*t)}),sum=w.reduce(function(a,b){return a+b},0),x=Math.random()*sum,guru=0;
  for(var i=0;i<w.length;i++){x-=w[i];if(x<=0){guru=i;break}}
  var deal=shuf(pack().ids).slice(0,g.players.length);
  g.r={chooser:chooser,opts:[g.topics.pop(),g.topics.pop()],topic:null,guru:guru,deal:deal,seen:0,peeked:false,asked:false,lap:1,lapUsed:false,got:{},used:null,delta:null};
  S.scr='pick';
 }else{
  var n=g.players.length,buyer=(g.round-1)%n,sellers=[];for(var k=1;k<n;k++)sellers.push((buyer+k)%n);
  if(!g.prods.length)g.prods=shuf(poolList().map(function(_,i){return i}));
  if(!g.buyers.length)g.buyers=shuf(E.pitch.buyers.map(function(_,i){return i}));
  var d=shuf(pack().ids);
  g.r={buyer:buyer,sellers:sellers,prod:g.prods.pop(),as:g.buyers.pop(),tr:sellers.map(function(_,i){return d[i]}),seen:0,peeked:false,sell:0,bought:null,gi:0,got:{},delta:null,res:[]};
  S.scr='pBrief';
 }
}
function order(){var g=S.game,o=[];for(var i=0;i<g.players.length;i++)o.push((g.r.chooser+i)%g.players.length);return o}
function guruTrick(){var r=S.game.r;return r.deal[r.guru]}
function scoreGuru(){
 var g=S.game,r=g.r,d=g.players.map(function(){return 0}),tid=guruTrick(),n=0,voters=g.players.length-1;
 g.players.forEach(function(p,i){if(i===r.guru)return;var v=r.got[i]||{};if(v.t){d[i]+=2;n++;g.named[i]++;addAlbum(p,tid)}if(v.g)d[i]+=1});
 r.verdict=n===0?(r.used?'hid':'none'):n===voters?'all':'some';
 var gp=r.verdict==='some'?2:r.verdict==='hid'?1:0;d[r.guru]+=gp;g.special[r.guru]+=gp;
 g.guruTimes[r.guru]++;r.delta=d;d.forEach(function(x,i){g.scores[i]+=x});S.scr='scores';
}
function scorePitchSeller(){
 var g=S.game,r=g.r,si=r.gi,seller=r.sellers[si],tid=r.tr[si],n=0,others=g.players.length-1,d=g.players.map(function(){return 0});
 g.players.forEach(function(p,i){if(i===seller)return;if(r.got[i]){d[i]+=1;n++;g.named[i]++;addAlbum(p,tid)}});
 var v=n===0?'none':n===others?'all':'some';if(v==='some'){d[seller]+=2;g.special[seller]+=2}
 r.res.push({seller:seller,v:v});r.delta=r.delta||g.players.map(function(){return 0});d.forEach(function(x,i){r.delta[i]+=x;g.scores[i]+=x});r.got={};
}

function top(){var g=S.game,inGame=g&&['home','players','how','album','choose'].indexOf(S.scr)<0&&g.round>0;
 return '<div class="top"><button class="logo" data-a="home">Fool Me <span class="hl">Once</span><i>.</i></button>'+(inGame?'<span class="round">'+L.roundN(g.round,g.total)+'</span>':'')+'<button class="pill" data-a="lang" aria-label="Language">'+(S.lang==='en'?'ES':'EN')+'</button></div>'}
function packList(hi){return '<ol class="line">'+pack().ids.map(function(id,i){var t=tx(trick(id));return '<li class="'+(id===hi?'hit':'')+'"><span class="n">'+(i+1)+'</span><div><b>'+esc(t.name)+'</b><span>“'+esc(t.says)+'”</span></div></li>'}).join('')+'</ol>'}
function packMini(){return '<div class="mini">'+pack().ids.map(function(id,i){return '<span><b>'+(i+1)+'</b>'+esc(tx(trick(id)).name)+'</span>'}).join('')+'</div>'}
function tag(k){return '<span class="tag" style="background:'+th(k).color+'">'+esc(th(k)[S.lang])+'</span>'}
function trickCard(id,stamp){var tr=trick(id),t=tx(tr),m=mo(id);
 return '<div class="flip"><div class="in"><div class="card">'+(stamp?'<span class="stamp">'+stamp+'</span>':'')+'<span class="kind">'+L.trickN(num(id))+'</span><span class="name"><span class="paint">'+esc(t.name)+'</span></span><span class="says">“'+esc(t.says)+'”</span>'+
 '<dl><div><dt>'+L.what+'</dt><dd>'+esc(t.what)+'</dd></div><div><dt>'+L.sounds+'</dt><dd><ul class="ex">'+m.ex.map(function(x){return '<li>“'+esc(x)+'”</li>'}).join('')+'</ul></dd></div><div class="notsame"><b>'+L.notSame+':</b> '+esc(m.not)+'</div><div><dt>'+L.where+'</dt><dd>'+esc(t.where)+'</dd></div></dl><div class="ask"><span style="font-size:.85rem;display:block;font-weight:400">'+L.ask+'</span>'+esc(t.ask)+'</div><span class="band" style="background:'+th(tr.theme).color+'"></span></div></div></div>'}
function peekFront(isG,id){var t=tx(trick(id)),m=mo(id);
 if(isG)return '<div class="front guru"><span style="font-weight:700">'+L.guru+'</span><span class="disp" style="font-size:1.1rem">'+L.trickN(num(id))+'</span><span class="disp" style="font-size:1.9rem">'+esc(t.name)+'</span><span style="font-style:italic">“'+esc(t.says)+'”</span><span style="font-style:italic;font-size:.95rem">“'+esc(m.ex[0])+'”</span><span style="font-size:.92rem">'+L.guruDo+'</span></div>';
 return '<div class="front"><span class="disp" style="font-size:2.2rem">'+L.cit+'</span><span>'+L.citDo+'</span><span style="font-size:.9rem;color:var(--muted);margin-top:8px">'+L.citTrick+'</span><span class="disp" style="font-size:1.3rem"><b>'+num(id)+'</b> · '+esc(t.name)+'</span></div>'}
function peekBox(front){return '<div class="peek" id="peek"><div class="back"><span class="big">'+L.holdA+'<br><span>'+L.holdB+'</span></span><span style="opacity:.8;font-size:.95rem">'+L.holdSub+'</span></div>'+front+'</div>'}
function scoreRows(delta){var g=S.game,max=Math.max.apply(null,g.scores),idx=g.players.map(function(_,i){return i}).sort(function(a,b){return g.scores[b]-g.scores[a]});
 return '<div class="scores">'+idx.map(function(i){return '<div class="srow '+(g.scores[i]===max&&max>0?'lead':'')+'"><b>'+esc(g.players[i])+'</b><span class="d">'+(delta&&delta[i]?'+'+delta[i]:'')+'</span><span class="t">'+g.scores[i]+'</span></div>'}).join('')+'</div>'}
function timerHTML(sec){return '<div class="timer" id="tm">'+fmt(sec)+'</div><div class="bar"><i id="tb" style="width:100%"></i></div>'}
function fmt(s){var m=Math.floor(s/60),x=s%60;return m+':'+(x<10?'0':'')+x}
function runTimer(sec,done){var left=sec,el=document.getElementById('tm'),b=document.getElementById('tb');clearInterval(tick);
 tick=setInterval(function(){left--;if(!el.isConnected){clearInterval(tick);return}el.textContent=fmt(Math.max(left,0));b.style.width=(Math.max(left,0)/sec*100)+'%';if(left<=10)el.classList.add('low');
  if(left<=0){clearInterval(tick);if(navigator.vibrate)try{navigator.vibrate([200,100,200])}catch(e){}if(done)done()}},1000)}

var V={
home:function(){var g=S.game,live=g&&g.round>0&&S.last&&S.last!=='end';
 return '<h1>'+L.h1a+'<span class="hl">'+L.h1b+'</span></h1><p class="sub">'+L.lede+'</p>'+
 (live?'<button class="btn yellow" data-a="resume">'+L.resume+'</button>':'')+
 '<div class="games"><button class="game dark" data-a="choose" data-m="guru"><span class="disp">'+L.guruName+'</span><span>'+L.guruLine+'</span><span class="meta">'+L.guruMeta+'</span><span class="go">'+L.playThis+'</span></button>'+
 '<button class="game" data-a="choose" data-m="pitch"><span class="disp">'+L.pitchName+'</span><span>'+L.pitchLine+'</span><span class="meta">'+L.pitchMeta+'</span><span class="go">'+L.playThis+'</span></button></div>'+
 '<div class="rowb"><button class="btn ghost small" data-a="how">'+L.how+'</button><button class="btn ghost small" data-a="album">'+L.album+'</button></div>'},
players:function(){var guru=S.mode==='guru',mn=3,mx=guru?6:8,ok=named().length>=mn&&named().length<=mx;
 return '<h2>'+(guru?L.guruName:L.pitchName)+'</h2><p class="sub">'+L.whoSub(mn,mx)+'</p><div class="names">'+S.names.map(function(n,i){return '<label><span class="i">'+(i+1)+'</span><input data-i="'+i+'" value="'+esc(n)+'" placeholder="'+L.name+'" maxlength="14" autocomplete="off" autocapitalize="words">'+(S.names.length>3?'<button class="x" data-a="del" data-i="'+i+'" aria-label="Remove">×</button>':'<span></span>')+'</label>'}).join('')+'</div>'+
 (S.names.length<mx?'<button class="btn ghost small" data-a="add">'+L.add+'</button>':'')+
 '<div><p style="font-weight:700;margin-bottom:6px">'+L.packH+' <span style="font-weight:400;color:var(--muted)">'+L.packSub+'</span></p><div class="packs">'+E.packs.map(function(p){return '<button data-a="pk" data-i="'+p.id+'" class="'+(S.pack===p.id?'on':'')+'">'+esc(p[S.lang])+'<small>'+p.ids.map(function(id){return esc(tx(trick(id)).name)}).join(' · ')+'</small></button>'}).join('')+'</div></div>'+
 (guru?'<div><p style="font-weight:700;margin-bottom:6px">'+L.rounds+'</p><div class="seg"><button data-a="r3" class="'+(S.rounds===3?'on':'')+'">'+L.quick+'</button><button data-a="r5" class="'+(S.rounds===5?'on':'')+'">'+L.full+'</button></div></div>'
 :'<div><p style="font-weight:700;margin-bottom:6px">'+L.prodH+'</p><div class="seg"><button data-a="pa" class="'+(S.prod==='absurd'?'on':'')+'">'+L.prodAbsurd+'</button><button data-a="ph" class="'+(S.prod==='home'?'on':'')+'">'+L.prodHome+'</button><button data-a="pm" class="'+(S.prod==='mix'?'on':'')+'">'+L.prodMix+'</button></div></div>'+
  '<div><p style="font-weight:700;margin-bottom:6px">'+L.pitchRounds+'</p><div class="seg"><button data-a="r3" class="'+(S.rounds===3?'on':'')+'">'+L.pitchQuick+'</button><button data-a="r5" class="'+(S.rounds!==3?'on':'')+'">'+L.pitchAll+'</button></div></div>')+
 '<div class="grow"></div><button class="btn yellow" id="go" data-a="start" '+(ok?'':'disabled')+'>'+L.start+'</button>'},
pack:function(){return '<h2>'+esc(pack()[S.lang])+'</h2><p class="sub">'+L.packRead+'</p>'+packList()+'<div class="grow"></div><button class="btn yellow" data-a="round">'+L.ready+'</button>'},
pick:function(){var g=S.game,r=g.r;return '<h2>'+esc(L.pickH(g.players[r.chooser]))+'</h2><p class="sub">'+(g.round===1?L.pickSub1:L.pickSub)+'</p>'+r.opts.map(function(ti,i){var t=FMO.topics[ti];return '<button class="pick" data-a="topic" data-i="'+i+'">'+tag(t.theme)+'<span class="topic">'+esc(t[S.lang])+'</span></button>'}).join('')},
pass:function(){var g=S.game,r=g.r,p=g.mode==='guru'?order()[r.seen]:r.sellers[r.seen];
 return '<div class="grow"></div><p class="sub">'+L.passTo+'</p><h1>'+esc(g.players[p])+'</h1><div class="grow"></div><button class="btn" data-a="iam">'+esc(L.iam(g.players[p]))+'</button>'},
peek:function(){var g=S.game,r=g.r,last,front,p;
 if(g.mode==='guru'){p=order()[r.seen];front=peekFront(p===r.guru,r.deal[p]);last=r.seen===g.players.length-1}
 else{p=r.sellers[r.seen];var id=r.tr[r.seen],t=tx(trick(id)),m=mo(id);front='<div class="front guru"><span style="font-weight:700">'+L.trickN(num(id))+'</span><span class="disp" style="font-size:1.9rem">'+esc(t.name)+'</span><span style="font-style:italic">“'+esc(t.says)+'”</span><span style="font-style:italic;font-size:.95rem">“'+esc(m.ex[0])+'”</span><span style="font-size:.92rem">'+L.pPeekDo+'</span></div>';last=r.seen===r.sellers.length-1}
 return '<h3>'+esc(g.players[p])+'</h3>'+peekBox(front)+'<div class="grow"></div><button class="btn" id="hid" data-a="seen" '+(r.peeked?'':'disabled')+'>'+(last?(g.mode==='guru'?L.allSeen:L.pTricksDealt):L.hide)+'</button>'},
talk:function(){var g=S.game,r=g.r,t=FMO.topics[r.topic];
 return '<div class="stack" style="gap:8px">'+tag(t.theme)+'<p class="topic">'+esc(t[S.lang])+'</p></div>'+(r.lap===2?'<div class="note"><b>'+L.lap2+'</b></div>':'')+
 '<p class="sub" style="font-size:.98rem"><b style="color:var(--ink)">'+L.order+':</b> '+order().map(function(i){return esc(g.players[i])}).join(', ')+'. '+L.talkDo+'</p>'+packMini()+
 '<div class="grow"></div><button class="btn yellow" data-a="debate">'+L.toDebate+'</button>'},
debate:function(){var r=S.game.r;return '<h2>'+L.debH+'</h2><p class="sub">'+L.debSub+'</p>'+timerHTML(120)+packMini()+'<div class="grow"></div><div class="stack"><button class="btn ghost small" data-a="ask" '+(r.asked?'disabled':'')+'>'+(r.asked?L.qUsed:L.qBtn)+'</button><button class="btn ghost small" data-a="lap" '+(r.lapUsed?'disabled':'')+'>'+(r.lapUsed?L.lapUsed:L.lapBtn)+'</button><button class="btn yellow" data-a="vote">'+L.vote+'</button></div>'},
ask:function(){return '<div class="grow"></div><h1><span class="paint">'+L.qBig+'</span></h1><p class="sub">'+L.qSub+'</p><div class="grow"></div><button class="btn" data-a="asked">'+L.qOk+'</button>'},
vote:function(){return '<h2>'+L.voteH+'</h2><ol class="rules"><li><div><b>'+L.voteDo1+'</b></div></li><li><div><b>'+L.voteDo2(8)+'</b></div></li></ol><p class="sub">'+L.voteDo3+'</p>'+packMini()+'<div class="grow"></div><button class="btn yellow" data-a="count">'+L.count+'</button>'},
count:function(){return '<div class="count" id="cnt" aria-live="assertive"><span>3</span></div>'},
still:function(){return '<div class="grow"></div><h1>'+L.holdStill+'</h1><p class="sub">'+L.holdStillSub+'</p><div class="grow"></div><button class="btn yellow" data-a="'+(S.game.mode==='guru'?'reveal':'pReveal')+'">'+(S.game.mode==='guru'?L.reveal:L.pShow)+'</button>'},
reveal:function(){var g=S.game;return '<h2>'+esc(L.wasGuru(g.players[g.r.guru]))+'</h2>'+trickCard(guruTrick(),L.caught)+'<div class="grow"></div><button class="btn" data-a="tally">'+L.tallyH+'</button>'},
tally:function(){var g=S.game,r=g.r;
 return '<h2>'+L.tallyH+'</h2><p class="sub">'+esc(L.tallySub(g.players[r.guru]))+'</p><div class="tally">'+g.players.map(function(p,i){if(i===r.guru)return '';var v=r.got[i]||{};
  return '<div class="trow"><b>'+esc(p)+'</b><button class="tog '+(v.g?'on':'')+'" data-a="tg" data-i="'+i+'" aria-pressed="'+!!v.g+'">'+L.gotG+' +1</button><button class="tog '+(v.t?'on':'')+'" data-a="tt" data-i="'+i+'" aria-pressed="'+!!v.t+'">'+L.gotT+' +2</button></div>'}).join('')+'</div><div class="grow"></div><button class="btn yellow" data-a="score">'+L.score+'</button>'},
used:function(){var g=S.game;return '<h2>'+L.usedH+'</h2><p class="sub">'+esc(L.usedSub(g.players[g.r.guru]))+'</p><div class="grow"></div><div class="thumbs"><button class="btn yellow" data-a="usedY">👍 '+L.usedYes+'</button><button class="btn ghost" data-a="usedN">👎 '+L.usedNo+'</button></div>'},
scores:function(){var g=S.game,r=g.r,gn=g.players[r.guru],v=r.verdict,H={some:[L.gSome,L.gSomeS],all:[L.gAll,L.gAllS],hid:[L.gHid,L.gHidS],none:[L.gNone,L.gNoneS]}[v];
 return '<div class="verdict"><b>'+H[0]+'</b>'+esc(H[1](gn))+'</div><h2>'+L.scoresH+'</h2>'+scoreRows(r.delta)+'<div class="grow"></div><button class="btn yellow" data-a="after">'+(g.round>=g.total?L.finish:L.next)+'</button>'},
// pitch
pBrief:function(){var g=S.game,r=g.r,pr=poolList()[r.prod],b=E.pitch.buyers[r.as];
 return '<h2>'+esc(L.pBuyerIs(g.players[r.buyer]))+'</h2><p class="sub">'+L.pBuyerSub+'</p><div class="pair"><div class="card dark"><span class="kind">'+L.pYouAre+'</span><span class="name">'+esc(b[S.lang])+'</span><span class="band" style="background:var(--hi)"></span></div><div class="card"><span class="kind">'+L.pProduct+'</span><span class="name">'+esc(pr[S.lang])+'</span><span class="band" style="background:var(--red)"></span></div></div><div class="grow"></div><button class="btn yellow" data-a="pDeal">'+L.ready+'</button>'},
pPrep:function(){return '<h2>'+L.pPrepH+'</h2><p class="sub">'+L.pPrepSub+'</p>'+timerHTML(60)+'<div class="grow"></div><div class="stack"><button class="btn ghost small" data-a="pPrepGo" id="pg">'+L.pStartTimer+'</button><button class="btn yellow" data-a="pSellStart">'+L.pSkip+'</button></div>'},
pSell:function(){var g=S.game,r=g.r,s=r.sellers[r.sell],pr=poolList()[r.prod],b=E.pitch.buyers[r.as];
 return '<h2>'+esc(L.pSellH(g.players[s]))+'</h2><p class="sub">'+L.pSellSub+'</p><div class="mini"><span>'+esc(pr[S.lang])+'</span><span>→ '+esc(b[S.lang])+'</span></div>'+timerHTML(20)+'<div class="grow"></div><div class="stack"><button class="btn ghost small" data-a="pSellGo" id="sg">'+L.pGo+'</button><button class="btn yellow" data-a="pSellNext">'+(r.sell===r.sellers.length-1?L.pDone:L.pNextSeller)+'</button></div>'},
pBuy:function(){var g=S.game,r=g.r;return '<h2>'+esc(L.pBuyH(g.players[r.buyer]))+'</h2><p class="sub">'+L.pBuySub+'</p><div class="pickrow">'+r.sellers.map(function(s){return '<button class="btn ghost" data-a="pBought" data-i="'+s+'">'+esc(g.players[s])+'</button>'}).join('')+'</div>'},
pGuess:function(){var g=S.game,r=g.r,s=r.sellers[r.gi];return '<h2>'+esc(L.pGuessH(g.players[s]))+'</h2><p class="sub">'+L.pGuessSub(8)+'</p>'+packMini()+'<div class="grow"></div><button class="btn yellow" data-a="count">'+L.count+'</button>'},
pReveal:function(){var g=S.game,r=g.r,s=r.sellers[r.gi];return '<h2>'+esc(g.players[s])+'</h2>'+trickCard(r.tr[r.gi])+'<h3>'+esc(L.pTallySub(g.players[s]))+'</h3><div class="tally">'+g.players.map(function(p,i){if(i===s)return '';return '<div class="trow" style="grid-template-columns:minmax(0,1fr) auto"><b>'+esc(p)+'</b><button class="tog '+(r.got[i]?'on':'')+'" data-a="pt" data-i="'+i+'">'+L.gotT+' +1</button></div>'}).join('')+'</div><button class="btn yellow" data-a="pScoreSeller">'+L.pNext+'</button>'},
pScores:function(){var g=S.game,r=g.r;
 var good=r.res.filter(function(x){return x.v==='some'}),rest=r.res.length-good.length;
 return '<div class="verdict"><b>'+esc(L.bought)+': '+esc(g.players[r.bought])+' +1</b>'+good.map(function(x){return esc(L.pSome(g.players[x.seller]))}).join('<br>')+(rest?'<br><span style="opacity:.8">'+esc(L.pRest(rest))+'</span>':'')+'</div><h2>'+L.scoresH+'</h2>'+scoreRows(r.delta)+'<div class="grow"></div><button class="btn yellow" data-a="after">'+(g.round>=g.total?L.finish:L.next)+'</button>'},
end:function(){var g=S.game,max=Math.max.apply(null,g.scores),w=g.players.filter(function(_,i){return g.scores[i]===max});
 function best(arr){var m=Math.max.apply(null,arr);return m>0?g.players.filter(function(_,i){return arr[i]===m}).join(', '):null}
 var hard=best(g.named),sm=best(g.special),idx=g.players.map(function(_,i){return i}).sort(function(a,b){return g.scores[b]-g.scores[a]});
 return '<h1><span class="paint">'+esc(w.length>1?L.tieH(w.join(', ')):L.winH(w[0]))+'</span></h1><div class="scores">'+idx.map(function(i){return '<div class="srow"><b>'+esc(g.players[i])+'</b><span></span><span class="t">'+g.scores[i]+'</span></div>'}).join('')+'</div>'+
 (hard?'<div class="note"><b>'+L.hard+':</b> '+esc(hard)+'</div>':'')+(sm?'<div class="note"><b>'+(g.mode==='guru'?L.smooth:L.bestSeller)+':</b> '+esc(sm)+'</div>':'')+
 '<div class="grow"></div><div class="stack"><button class="btn yellow" data-a="again">'+L.again+'</button><div class="rowb"><button class="btn ghost small" data-a="album">'+L.album+'</button><button class="btn ghost small" data-a="home">'+L.home+'</button></div></div>'},
album:function(){var al=albums(),ks=Object.keys(al);
 return '<h2>'+L.albumH+'</h2><p class="sub">'+L.albumSub+'</p>'+(ks.length?ks.map(function(k){var a=al[k],got=a.ids.filter(function(id){return id!==15});return '<div class="stack"><h3>'+esc(a.name)+' <span style="color:var(--muted);font-family:var(--body);font-weight:400;font-size:1rem">'+got.length+' '+L.of+'</span></h3><div class="album">'+E.packs.flatMap(function(p){return p.ids}).map(function(id){var h=got.indexOf(id)>=0;return '<div class="'+(h?'got':'')+'" title="'+(h?esc(tx(trick(id)).name):'')+'">'+id+'</div>'}).join('')+'</div></div>'}).join(''):'<div class="note">'+L.albumEmpty+'</div>')+
 '<div class="grow"></div><div class="stack"><button class="btn" data-a="back">'+L.back+'</button>'+(ks.length?'<button class="btn ghost small" data-a="clear">'+L.clear+'</button>':'')+'</div>'},
how:function(){function sec(name,steps,sc){return '<h2>'+name+'</h2><ol class="rules">'+steps.map(function(x){return '<li><div><b>'+x[0]+'</b>'+x[1]+'</div></li>'}).join('')+'</ol><h3>'+L.scH+'</h3><div class="stack">'+sc.map(function(x){return '<div class="note">'+x+'</div>'}).join('')+'</div>'}
 return sec(L.guruName,L.howGuru,L.scGuru)+sec(L.pitchName,L.howPitch,L.scPitch)+'<h3>'+L.fair+'</h3><div class="stack">'+L.fairs.map(function(x){return '<p>'+x+'</p>'}).join('')+'</div><button class="btn" data-a="back">'+L.back+'</button>'}
};

function go(s){if(['how','album','home','choose','players'].indexOf(S.scr)<0)S.last=S.scr;S.scr=s;render()}
function render(){L=T[S.lang];document.documentElement.lang=S.lang;clearTimeout(timer);clearInterval(tick);
 app.innerHTML=top()+'<main class="screen">'+V[S.scr]()+'</main>';save();window.scrollTo(0,0);
 if(S.scr==='peek')bindPeek();if(S.scr==='count')runCount();if(S.scr==='debate')runTimer(120);}
function bindPeek(){var el=document.getElementById('peek'),btn=document.getElementById('hid'),r=S.game.r;
 function on(e){e.preventDefault();el.classList.add('show');r.peeked=true}
 function off(){el.classList.remove('show');if(r.peeked)btn.disabled=false}
 el.addEventListener('pointerdown',on);['pointerup','pointercancel','pointerleave'].forEach(function(n){el.addEventListener(n,off)});
 el.addEventListener('contextmenu',function(e){e.preventDefault()})}
function runCount(){var el=document.getElementById('cnt'),seq=['3','2','1','<span class="fool">'+L.fool+'</span>'],i=0;
 (function step(){el.innerHTML='<span>'+seq[i]+'</span>';if(navigator.vibrate)try{navigator.vibrate(i===3?200:40)}catch(e){}
  i++;timer=setTimeout(i<4?step:function(){S.scr='still';render()},i<4?900:1300)})()}

app.addEventListener('input',function(e){var i=e.target.dataset.i;if(i===undefined)return;S.names[+i]=e.target.value;save();
 var b=document.getElementById('go'),n=named().length;if(b)b.disabled=n<3||n>(S.mode==='guru'?6:8)});
app.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var a=b.dataset.a,i=+b.dataset.i,g=S.game,r=g&&g.r;
 switch(a){
 case 'lang':S.lang=S.lang==='en'?'es':'en';render();break;
 case 'home':go('home');break;
 case 'resume':S.scr=S.last;render();break;
 case 'choose':S.mode=b.dataset.m;if(S.mode==='guru'&&S.names.length>6)S.names=S.names.slice(0,6);go('players');break;
 case 'how':case 'album':S.prev=S.scr;go(a);break;
 case 'back':S.scr=S.prev||'home';render();break;
 case 'clear':saveAlbums({});render();break;
 case 'add':S.names.push('');render();var ins=app.querySelectorAll('input');ins[ins.length-1].focus();break;
 case 'del':S.names.splice(i,1);render();break;
 case 'pk':S.pack=i;render();break;
 case 'r3':S.rounds=3;render();break;case 'r5':S.rounds=5;render();break;
 case 'pa':S.prod='absurd';render();break;case 'ph':S.prod='home';render();break;case 'pm':S.prod='mix';render();break;
 case 'start':case 'again':newGame();render();break;
 case 'round':startRound();render();break;
 case 'topic':r.topic=r.opts[i];go('pass');break;
 case 'iam':r.peeked=false;go('peek');break;
 case 'seen':r.seen++;r.peeked=false;
  if(g.mode==='guru')go(r.seen>=g.players.length?'talk':'pass');else go(r.seen>=r.sellers.length?'pPrep':'pass');break;
 case 'debate':go('debate');break;
 case 'ask':go('ask');break;
 case 'asked':r.asked=true;go('debate');break;
 case 'lap':r.lapUsed=true;r.lap=2;go('talk');break;
 case 'vote':go('vote');break;
 case 'count':go('count');break;
 case 'reveal':go('reveal');break;
 case 'tally':go('tally');break;
 case 'tg':case 'tt':r.got[i]=r.got[i]||{};var k=a==='tg'?'g':'t';r.got[i][k]=!r.got[i][k];b.classList.toggle('on',r.got[i][k]);b.setAttribute('aria-pressed',r.got[i][k]);save();break;
 case 'score':var any=Object.keys(r.got).some(function(k){return r.got[k].t});if(any){r.used=null;scoreGuru();render()}else go('used');break;
 case 'usedY':r.used=true;scoreGuru();render();break;
 case 'usedN':r.used=false;scoreGuru();render();break;
 case 'after':if(g.round>=g.total)go('end');else{startRound();render()}break;
 // pitch
 case 'pDeal':r.seen=0;go('pass');break;
 case 'pPrepGo':b.disabled=true;runTimer(60);break;
 case 'pSellStart':r.sell=0;go('pSell');break;
 case 'pSellGo':b.disabled=true;runTimer(20);break;
 case 'pSellNext':if(r.sell>=r.sellers.length-1)go('pBuy');else{r.sell++;render()}break;
 case 'pBought':r.bought=i;r.delta=g.players.map(function(){return 0});r.delta[i]+=1;g.scores[i]+=1;g.special[i]+=0;r.gi=0;r.got={};go('pGuess');break;
 case 'pReveal':go('pReveal');break;
 case 'pt':r.got[i]=!r.got[i];b.classList.toggle('on',r.got[i]);save();break;
 case 'pScoreSeller':scorePitchSeller();if(r.gi>=r.sellers.length-1){g.r.gi++;go('pScores')}else{r.gi++;go('pGuess')}break;
 }});
if(S.scr==='count')S.scr='vote';
render();
})();
