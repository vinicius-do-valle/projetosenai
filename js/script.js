function count(field, options){
  const c = {};
  options.forEach(o => c[o] = 0);
  RESPONSES.forEach(r => { if(r[field] in c) c[r[field]]++; });
  return c;
}

function countFreeform(field, limit=8){
  const c = {};
  RESPONSES.forEach(r => {
    const v = (r[field]||"").trim();
    if(!v) return;
    c[v] = (c[v]||0) + 1;
  });
  return Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,limit);
}

const CHART_COLORS = ["#6153d3","#0f9c7f","#d64570","#c97a12","#3d7fd6","#8a5cc7","#4a9d5f"];

const charts = {};

function baseBarOptions(horizontal=false){
  return {
    indexAxis: horizontal ? 'y' : 'x',
    responsive:true, maintainAspectRatio:false,
    animation:{ duration:700, easing:'easeOutQuint' },
    plugins:{ legend:{display:false}, tooltip:{
      backgroundColor:"#16160f", titleColor:"#fff", bodyColor:"#fff",
      padding:10, titleFont:{family:"Poppins"}, bodyFont:{family:"Poppins"}, cornerRadius:8
    }},
    scales:{
      x:{ grid:{color:"rgba(20,20,15,.06)"}, ticks:{color:"#77756a", font:{family:"Poppins", size:11}} },
      y:{ grid:{display:!horizontal, color:"rgba(20,20,15,.06)"}, ticks:{color:"#77756a", font:{family:"Poppins", size:11}} }
    }
  };
}

function renderBar(canvasId, labels, data, horizontal=false){
  const ctx = document.getElementById(canvasId);
  if(charts[canvasId]) charts[canvasId].destroy();
  charts[canvasId] = new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[{ data, backgroundColor: labels.map((_,i)=>CHART_COLORS[i%CHART_COLORS.length]), borderRadius:6, maxBarThickness: horizontal?22:34 }] },
    options: baseBarOptions(horizontal)
  });
}

function renderDonut(canvasId, labels, data){
  const ctx = document.getElementById(canvasId);
  if(charts[canvasId]) charts[canvasId].destroy();
  charts[canvasId] = new Chart(ctx, {
    type:'doughnut',
    data:{ labels, datasets:[{ data, backgroundColor: labels.map((_,i)=>CHART_COLORS[i%CHART_COLORS.length]), borderColor:"#ffffff", borderWidth:3 }] },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:"68%",
      animation:{ duration:700, easing:'easeOutQuint' },
      plugins:{ legend:{display:false} }
    }
  });
}

function buildLegend(containerId, labels, data){
  const total = data.reduce((a,b)=>a+b,0) || 1;
  const el = document.getElementById(containerId);
  el.innerHTML = labels.map((l,i)=>{
    const pct = Math.round((data[i]/total)*100);
    return `<span><i style="background:${CHART_COLORS[i%CHART_COLORS.length]}"></i>${l} — ${pct}%</span>`;
  }).join("");
}

const QUESTION_CARDS = [
  {grid:"grid-1", type:"chart", horizontal:false, num:"Pergunta 3", text:"Em quais situações do dia a dia você percebe mais a tecnologia?",
    field:"q3", options:["Na escola","Em casa","No trabalho","Na comunicação","No transporte","Em outras situações"]},
  {grid:"grid-1", type:"donut", num:"Pergunta 5", text:"Você se considera um(a) usuário(a) ativo(a) ou passivo(a)?",
    field:"q5", options:["Ativo","Passivo","Um pouco dos dois","Não sei"]},
  {grid:"grid-1", type:"chart", horizontal:false, num:"Pergunta 6", text:"Você costuma produzir conteúdos, opiniões ou criações digitais?",
    field:"q6", options:["Sim, frequentemente","Às vezes","Raramente","Nunca"]},
  {grid:"grid-1", type:"words", num:"Pergunta 1", text:"Quando pensa em tecnologia, o que vem à sua mente?", field:"q1"},

  {grid:"grid-2", type:"chart", horizontal:true, num:"Pergunta 8", text:"Como a tecnologia contribui para a sua aprendizagem?",
    field:"q8", options:["Pesquisas","Vídeos","Aplicativos","Jogos educativos","Comunicação"]},
  {grid:"grid-2", type:"text", num:"Pergunta 9", text:"Como a tecnologia ajuda no trabalho em equipe e na colaboração na escola?", field:"q9"},
  {grid:"grid-2", type:"text", num:"Pergunta 10", text:"Como a tecnologia ampliou seu acesso à informação e à cultura?", field:"q10"},
  {grid:"grid-2", type:"text", num:"Pergunta 7", text:"Como você utiliza a tecnologia para sua formação e aprendizado?", field:"q7"},

  {grid:"grid-3", type:"donut", num:"Pergunta 11", text:"A tecnologia já atrapalhou sua concentração ou aprendizagem?",
    field:"q11", options:["Sim","Não"]},
  {grid:"grid-3", type:"chart", horizontal:true, num:"Pergunta 12", text:"Se sim, como isso aconteceu?",
    field:"q12", options:["Redes sociais","Notificações/mensagens","Jogos","Vídeos","Uso excessivo do celular","Outro"]},
  {grid:"grid-3", type:"chart", horizontal:true, num:"Pergunta 13", text:"Como você verifica se uma informação da internet é confiável?",
    field:"q13", options:["Procuro em outras fontes","Verifico quem publicou","Comparo com sites confiáveis","Pergunto para alguém","Normalmente não verifico"]},
  {grid:"grid-3", type:"chart", horizontal:false, num:"Pergunta 14", text:"A tecnologia já causou dificuldade nas suas relações com outras pessoas?",
    field:"q14", options:["Nunca","Raramente","Às vezes","Frequentemente","Sempre"]},
  {grid:"grid-3", type:"chart", horizontal:true, wide:true, num:"Pergunta 15", text:"O que você considera mais importante para usar a tecnologia de forma ética e responsável?",
    field:"q15", options:["Respeitar outras pessoas","Não espalhar informações falsas","Proteger dados pessoais","Respeitar a privacidade","Usar a tecnologia com equilíbrio","Todos os anteriores"]},

  {grid:"grid-4", type:"donut", num:"Pergunta 16", text:"Como você avalia o uso da tecnologia na escola?",
    field:"q16", options:["Excelente","Bom","Regular","Ruim","Muito ruim"]},
  {grid:"grid-4", type:"words", num:"Pergunta 18", text:"Qual competência digital você gostaria de desenvolver?", field:"q18"},
  {grid:"grid-4", type:"text", num:"Pergunta 17", text:"O que poderia melhorar no uso da tecnologia na escola?", field:"q17"},
  {grid:"grid-4", type:"text", num:"Pergunta 19", text:"O que a escola pode fazer para apoiar esse desenvolvimento?", field:"q19"},
];

function cardHTML(q, idx){
  const canvasId = `c-${idx}`;
  const wideClass = q.wide ? " wide" : "";
  if(q.type === "chart" || q.type === "donut"){
    return `
    <div class="q-card${wideClass}" data-type="closed">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="chart-holder ${q.type==='donut' ? 'short' : ''}">
        <canvas id="${canvasId}" role="img" aria-label="${q.text}"></canvas>
      </div>
      ${q.type==='donut' ? `<div class="legend-row" id="legend-${idx}"></div>` : ""}
    </div>`;
  }
  if(q.type === "words"){
    return `
    <div class="q-card" data-type="open">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="word-answers" id="words-${idx}"></div>
    </div>`;
  }
  return `
    <div class="q-card" data-type="open">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="text-answers" id="text-${idx}"></div>
    </div>`;
}

function buildCards(){
  QUESTION_CARDS.forEach((q, idx) => {
    document.getElementById(q.grid).insertAdjacentHTML("beforeend", cardHTML(q, idx));
  });
}

function updateKPIs(){
  document.getElementById("kpi-total").textContent = RESPONSES.length;
  document.getElementById("trend-total").textContent = `+${RESPONSES.length} hoje`;

  const active = RESPONSES.filter(r => r.q5 === "Ativo").length;
  document.getElementById("kpi-active").textContent = RESPONSES.length ? Math.round((active/RESPONSES.length)*100)+"%" : "0%";

  const distracted = RESPONSES.filter(r => r.q11 === "Sim").length;
  document.getElementById("kpi-distraction").textContent = RESPONSES.length ? Math.round((distracted/RESPONSES.length)*100)+"%" : "0%";

  const rank = {"Excelente":5,"Bom":4,"Regular":3,"Ruim":2,"Muito ruim":1};
  const vals = RESPONSES.map(r => rank[r.q16]).filter(Boolean);
  const avg = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
  const labelByAvg = avg>=4.5?"Excelente":avg>=3.5?"Bom":avg>=2.5?"Regular":avg>=1.5?"Ruim":avg>0?"Muito ruim":"—";
  document.getElementById("kpi-school").textContent = labelByAvg;
}

let firstRender = true;

function renderAll(){
  QUESTION_CARDS.forEach((q, idx) => {
    if(q.type === "chart"){
      const c = count(q.field, q.options);
      renderBar(`c-${idx}`, q.options, q.options.map(o=>c[o]), q.horizontal);
    } else if(q.type === "donut"){
      const c = count(q.field, q.options);
      const data = q.options.map(o=>c[o]);
      renderDonut(`c-${idx}`, q.options, data);
      buildLegend(`legend-${idx}`, q.options, data);
    } else if(q.type === "words"){
      const top = countFreeform(q.field, 8);
      const el = document.getElementById(`words-${idx}`);
      el.innerHTML = top.length
        ? top.map(([w,n],i) => `<span class="word-pill" style="animation-delay:${i*45}ms"><em>${n}</em>${w}</span>`).join("")
        : `<span class="word-pill">Sem respostas ainda</span>`;
    } else if(q.type === "text"){
      const el = document.getElementById(`text-${idx}`);
      const answers = RESPONSES.slice(-12).reverse().filter(r => r[q.field]);
      el.innerHTML = answers.length
        ? answers.map(r => `<div class="text-answer-row"><span>${r[q.field]}</span></div>`).join("")
        : `<div class="text-answer-row">Sem respostas ainda.</div>`;
    }
  });
  updateKPIs();

  if(firstRender){
    revealCards();
    firstRender = false;
  }
}

async function tick(){
  RESPONSES = await fetchResponses();
  renderAll();
}

document.addEventListener("DOMContentLoaded", () => {
  buildCards();
  tick();
  setInterval(tick, 2000);

  document.getElementById("refresh-btn").addEventListener("click", async (e) => {
    e.currentTarget.classList.add("spinning");
    await tick();
    setTimeout(() => e.currentTarget.classList.remove("spinning"), 500);
  });

  document.querySelectorAll(".f-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".f-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".q-card").forEach(card => {
        const type = card.dataset.type;
        card.style.display = (filter === "all" || filter === type) ? "" : "none";
      });
    });
  });
});