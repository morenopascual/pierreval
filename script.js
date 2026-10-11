// PIERREVAL ADMISSION TEST V2
const questions=[
["APROPIACIÓN","Un compañero presenta como propia una idea que desarrollaste tú. Nadie parece darse cuenta. ¿Qué haces?",[["Lo corrijo en ese momento. Si la idea es mía, debe quedar claro.",[2,0,0,1]],["No digo nada. Hablo con él después y quiero saber por qué lo hizo.",[0,1,2,0]],["Espero. Antes quiero comprobar quién se ha dado cuenta sin que yo intervenga.",[0,0,1,2]],["Dejo que continúe y observo qué consigue hacer con la idea. Siempre puedo intervenir después.",[1,2,0,0]]]],
["LA INVITACIÓN","Te ofrecen participar en un programa reservado a diez alumnos. No sabes cómo te han seleccionado y debes responder antes de medianoche. ¿Qué haces?",[["Acepto. Ya averiguaré después por qué me eligieron.",[2,1,0,0]],["Intento conseguir más información antes de decidir.",[0,1,1,1]],["Pregunto quiénes son los otros nueve.",[1,0,2,0]],["No acepto hasta saber qué esperan de mí.",[0,0,1,2]]]],
["EL GRUPO","Tu grupo lleva una hora intentando resolver un problema. Estás convencido de que tu solución es la mejor, pero nadie te apoya. ¿Qué haces?",[["La defiendo hasta que alguien demuestre que está equivocada.",[2,0,0,1]],["Pido a alguien que explique exactamente por qué cree que no funciona.",[0,2,1,0]],["Propongo probar mi solución y la alternativa del grupo.",[1,2,0,0]],["Dejo de defenderla y escucho. Si todos ven algo distinto, puede que sepan algo que yo no.",[0,1,2,0]]]],
["LA FIESTA","Llegas a una fiesta en la que apenas conoces a nadie. Veinte minutos después estás...",[["Hablando con la persona que más difícil parecía conocer.",[1,0,2,0]],["Con las dos personas que conocías al llegar.",[0,0,1,2]],["Moviéndote entre distintos grupos. Quieres entender quién conoce a quién.",[0,1,2,0]],["Observando antes de decidir con quién quieres hablar.",[0,1,0,2]]]],
["LA PUERTA","Tu tarjeta abre hoy una puerta de Pierreval que ayer permanecía bloqueada. ¿Qué haces primero?",[["Entro.",[2,0,0,1]],["Intento averiguar qué ha cambiado desde ayer.",[0,2,0,1]],["Pregunto a alguien que ya tuviera acceso qué hay dentro.",[0,0,2,1]],["Entro y no se lo cuento todavía a nadie.",[1,0,0,2]]]],
["EL SECRETO","Un secreto que prometiste guardar afecta directamente a otra persona cercana. ¿Qué haces?",[["Mantengo mi promesa. La información no me pertenece.",[0,0,1,2]],["Se lo cuento a la persona afectada.",[0,0,2,1]],["Intento entender qué consecuencias tendría cada opción.",[0,2,1,0]],["Averiguo por qué me eligieron a mí para guardarlo.",[1,0,1,1]]]],
["LA OPORTUNIDAD","Puedes elegir entre un programa donde destacarás y otro donde estarás rodeado de personas mejores que tú. ¿Cuál eliges?",[["El segundo. Quiero saber hasta dónde puedo llegar.",[2,1,0,0]],["El primero. También hay que reconocer dónde tienes ventaja.",[2,0,0,1]],["El segundo, pero antes quiero saber quiénes son esas personas.",[1,0,2,0]],["Quiero saber qué aprenderé en cada uno antes de decidir.",[0,2,0,1]]]],
["LA CAÍDA","El Board baja tu puntuación después de una decisión que volverías a tomar. ¿Qué haces?",[["Descubro qué variable ha penalizado el sistema.",[1,2,0,0]],["Modifico mi comportamiento. No sirve competir ignorando las reglas.",[1,2,0,0]],["No cambio nada. Una puntuación no decide si hice lo correcto.",[0,0,1,2]],["Busco a alguien que hiciera algo parecido y subiera.",[1,0,2,0]]]],
["UNA SOLA INFORMACIÓN","Puedes conocer un único dato oculto sobre cualquier alumno. ¿Cuál eliges?",[["Su puntuación real.",[2,0,0,1]],["Qué quiere y todavía no ha conseguido.",[0,0,2,1]],["Qué haría si supiera que nadie va a descubrirlo.",[0,1,2,0]],["Qué dato usa Pierreval para predecir su futuro.",[0,1,0,2]]]],
["EL ÚLTIMO DÍA","Es tu último día en Pierreval. Puedes marcharte con una sola cosa. ¿Qué eliges?",[["Haber llegado al número uno.",[3,0,0,0]],["Una relación que conservarás toda la vida.",[0,0,3,0]],["Saber algo sobre ti que no sabías cuando llegaste.",[0,3,0,0]],["La certeza de que ninguna institución decidió por ti quién ibas a ser.",[0,0,0,3]]]]
];
const chars={"SLOANE HOLT":[96,84,73,88],"NORA VALE":[62,77,82,96],"ISABELLE KALT-TANNENBERG":[79,81,95,72],"TRISTAN":[86,74,88,67],"ADRIAN CROSS":[71,97,93,91]};
let qi=0,raw=[0,0,0,0],name="CANDIDATE";
function startPierrevalTest(){
 name=(prompt("PIERREVAL ADMISSIONS\\nNombre del candidato:")||"CANDIDATE").toUpperCase();
 qi=0;raw=[0,0,0,0]; nextQ();
}
function nextQ(){
 if(qi>=questions.length)return finishTest();
 const q=questions[qi]; let msg=`PIERREVAL ADMISSIONS · ${String(qi+1).padStart(2,"0")}/10\\n\\n${q[1]}\\n\\n`;
 q[2].forEach((a,i)=>msg+=`${i+1}. ${a[0]}\\n\\n`);
 let n=parseInt(prompt(msg),10)-1;if(n<0||n>3||Number.isNaN(n)){alert("Selecciona 1, 2, 3 o 4.");return nextQ();}
 q[2][n][1].forEach((v,i)=>raw[i]+=v);qi++;nextQ();
}
function finishTest(){
 const max=[16,15,17,18],v=raw.map((x,i)=>Math.round(x/max[i]*100));
 const weighted=v[0]*.4+v[1]*.25+v[2]*.2+v[3]*.15,score=Math.max(61,Math.min(96.8,61+weighted*.36));
 let rank,status;if(score>=94){rank=5;status="THE TEN"}else if(score>=87){rank=15;status="HIGH POTENTIAL"}else if(score>=79){rank=28;status="PRIORITY"}else if(score>=71){rank=43;status="ADMITTED"}else if(score>=64){rank=58;status="PROVISIONAL"}else{rank=70;status="WAITLIST"}
 const labels=["AMBITION","ADAPTABILITY","SOCIAL INTELLIGENCE","INDEPENDENCE"];
 const order=v.map((x,i)=>[x,i]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]),pair=order.slice(0,2).sort().join(",");
 const profiles={"0,1":"THE STRATEGIST","0,2":"THE CONNECTOR","0,3":"THE COMPETITOR","2,3":"THE OBSERVER","1,3":"THE OUTLIER","1,2":"THE CONNECTOR"};
 const profile=profiles[pair]||"THE STRATEGIST";
 let matches=Object.entries(chars).map(([n,c])=>[n,100-v.reduce((s,x,i)=>s+Math.abs(x-c[i]),0)/4]).sort((a,b)=>b[1]-a[1]);
 alert(`PIERREVAL · ${status}\\n\\n${name}\\nSCORE ${score.toFixed(1)}\\nINITIAL RANK #${rank}\\nPROFILE ${profile}\\n\\nHIGHEST COMPATIBILITY\\n${matches[0][0]} · ${Math.min(98.8,matches[0][1]).toFixed(1)}%\\n\\n${labels.map((l,i)=>l+" "+v[i]).join("\\n")}`);
}
document.querySelectorAll(".js-start-test").forEach(b=>b.addEventListener("click",startPierrevalTest));
