// ===============================
// Quiz Estilo Google Forms
// Arquivo: script.js
// ===============================

// --- QUESTÕES (fornecidas pelo usuário) ---
const QUESTOES = [
  // --- BLOCO 1: Fundamentos de redes e gerência ---
  {
    id: "q1",
    tipo: "unica",
    enunciado: "1) As redes de computadores são fundamentais em empresas porque:",
    obrigatoria: true,
    alternativas: [
      "São compostas apenas por softwares de monitoramento.",
      "Garantem exclusivamente a segurança física dos dispositivos.",
      "Permitem o tráfego de informações essenciais para atividades coletivas.",
      "Substituem totalmente a necessidade de hardware.",
      "Funcionam apenas para entretenimento."
    ],
    correta: 2
  },
  {
    id: "q2",
    tipo: "unica",
    enunciado: "2) O sistema de gerência de redes tem como uma de suas principais funções:",
    obrigatoria: true,
    alternativas: [
      "Apenas armazenar dados da internet.",
      "Monitorar e controlar o estado da rede.",
      "Substituir o cabeamento físico.",
      "Atuar apenas em dispositivos móveis.",
      "Eliminar a necessidade de manutenção preventiva."
    ],
    correta: 1
  },
  {
    id: "q3",
    tipo: "unica",
    enunciado: "3) Quando falamos de monitoramento de rede, podemos afirmar que:",
    obrigatoria: true,
    alternativas: [
      "É irrelevante em ambientes corporativos.",
      "Serve para detectar falhas e agir proativamente.",
      "Funciona apenas em redes domésticas.",
      "Substitui o trabalho humano.",
      "Não envolve softwares agentes."
    ],
    correta: 1
  },
  {
    id: "q4",
    tipo: "unica",
    enunciado: "4) O controle proativo de uma rede significa:",
    obrigatoria: true,
    alternativas: [
      "Corrigir falhas apenas depois que o problema ocorre.",
      "Prevenir falhas antes que elas impactem o funcionamento.",
      "Depender exclusivamente da ação manual de técnicos.",
      "Manter a rede funcionando apenas parcialmente.",
      "Limitar o tráfego de dados por tempo indeterminado."
    ],
    correta: 1
  },
  {
    id: "q5",
    tipo: "unica",
    enunciado: "5) O sistema de gerência pode executar comandos nos dispositivos gerenciados com o objetivo de:",
    obrigatoria: true,
    alternativas: [
      "Bloquear permanentemente o tráfego da rede.",
      "Alterar, corrigir ou operar equipamentos remotamente.",
      "Reduzir a quantidade de hardware necessária.",
      "Substituir servidores de internet.",
      "Atuar apenas como firewall."
    ],
    correta: 1
  },
  {
    id: "q6",
    tipo: "boolean",
    enunciado: "6) O gerenciamento de redes pode ser centralizado, hierárquico ou distribuído.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    id: "q7",
    tipo: "boolean",
    enunciado: "7) Redes de computadores só funcionam com cabos físicos, não utilizando software.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 1
  },
  {
    id: "q8",
    tipo: "boolean",
    enunciado: "8) O sistema de gerência de redes exibe informações por meio de interfaces gráficas.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    id: "q9",
    tipo: "boolean",
    enunciado: "9) Monitorar o volume de tráfego ajuda a determinar a necessidade de maior velocidade de canais.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    id: "q10",
    tipo: "boolean",
    enunciado: "10) O gerenciamento de redes não contribui para localizar falhas, apenas para corrigi-las.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 1
  },

  // --- BLOCO 2: Centralizada vs. Descentralizada ---
  {
    id: "q11",
    tipo: "unica",
    enunciado: "11) A principal característica da gerência centralizada é:",
    obrigatoria: true,
    alternativas: [
      "Cada dispositivo da rede toma decisões isoladas.",
      "Um servidor central coleta e processa informações de toda a rede.",
      "Não depende de agentes instalados nos dispositivos.",
      "Dispensa a necessidade de topologia organizada.",
      "Divide a rede em regiões independentes."
    ],
    correta: 1
  },
  {
    id: "q12",
    tipo: "unica",
    enunciado: "12) Na gerência descentralizada:",
    obrigatoria: true,
    alternativas: [
      "Há apenas um ponto único de falha.",
      "Cada região possui seu próprio servidor de gerenciamento.",
      "Não existe replicação de informações.",
      "O controle é feito sem servidores dedicados.",
      "Não é possível identificar falhas locais."
    ],
    correta: 1
  },
  {
    id: "q13",
    tipo: "unica",
    enunciado: "13) A desvantagem principal de uma gerência centralizada está relacionada a:",
    obrigatoria: true,
    alternativas: [
      "Alta confiabilidade do servidor central.",
      "Risco de sobrecarga e ponto único de falha.",
      "Redução de tráfego na rede.",
      "Baixa dependência de software.",
      "Autonomia excessiva das regiões."
    ],
    correta: 1
  },
  {
    id: "q14",
    tipo: "unica",
    enunciado: "14) Em uma rede corporativa muito grande, a descentralização é preferida porque:",
    obrigatoria: true,
    alternativas: [
      "Evita replicação de dados.",
      "Facilita o controle local e reduz a sobrecarga do servidor central.",
      "Elimina a necessidade de cabeamento estruturado.",
      "Impede falhas simultâneas.",
      "Funciona apenas em redes domésticas."
    ],
    correta: 1
  },
  {
    id: "q15",
    tipo: "unica",
    enunciado: "15) Comparando os dois tipos de gerência, pode-se afirmar que:",
    obrigatoria: true,
    alternativas: [
      "A centralizada é mais escalável que a descentralizada.",
      "A descentralizada permite maior autonomia regional.",
      "Ambas são sempre dependentes de VLANs.",
      "A centralizada é livre de falhas.",
      "A descentralizada não utiliza servidores de gerenciamento."
    ],
    correta: 1
  },
  {
    id: "q16",
    tipo: "boolean",
    enunciado: "16) A gerência centralizada depende de agentes instalados em dispositivos de rede.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    id: "q17",
    tipo: "boolean",
    enunciado: "17) A gerência descentralizada elimina totalmente a necessidade de comunicação entre regiões.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 1
  },
  {
    id: "q18",
    tipo: "boolean",
    enunciado: "18) Um servidor central sobrecarregado pode comprometer toda a rede em uma gerência centralizada.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    id: "q19",
    tipo: "boolean",
    enunciado: "19) A descentralização melhora a escalabilidade em grandes redes.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    id: "q20",
    tipo: "boolean",
    enunciado: "20) Na gerência centralizada, falhas em um servidor não afetam toda a rede.",
    obrigatoria: true,
    alternativas: ["Verdadeiro", "Falso"],
    correta: 1
  }
];

// ELEMENTOS
const $questions = document.getElementById('questions');
const $scoreCard = document.getElementById('scoreCard');
const $scoreLine = document.getElementById('scoreLine');
const $scoreExtra = document.getElementById('scoreExtra');
const $btnCorrigir = document.getElementById('btnCorrigir');
const $btnRefazer = document.getElementById('btnRefazer');
const $btnRevisar = document.getElementById('btnRevisar');
const $btnSalvar = document.getElementById('btnSalvar');

// HELPERS
function el(tag, props={}, children=[]) {
  const e = document.createElement(tag);
  Object.entries(props).forEach(([k,v])=>{
    if(k==='class') e.className = v;
    else if(k==='html') e.innerHTML = v;
    else e.setAttribute(k,v);
  });
  (Array.isArray(children)?children:[children]).filter(Boolean).forEach(c=>{
    if(typeof c==='string') e.appendChild(document.createTextNode(c));
    else e.appendChild(c);
  });
  return e;
}

// RENDER
function renderQuestion(q){
  const card = el('section',{class:'card', id:`card-${q.id}`});
  card.appendChild(el('h2',{html:q.enunciado}));
  const fs = el('fieldset',{id:`fs-${q.id}`});
  if(q.tipo==='unica' || q.tipo==='boolean'){
    q.alternativas.forEach((opt,i)=>{
      const id=`${q.id}-${i}`;
      const input = el('input',{type:'radio',name:q.id,id});
      const label = el('label',{for:id,class:'option'},[input, el('span',{html:opt})]);
      fs.appendChild(label);
    });
  } else if(q.tipo==='multipla'){
    q.alternativas.forEach((opt,i)=>{
      const id=`${q.id}-${i}`;
      const input = el('input',{type:'checkbox',name:`${q.id}[]`,id});
      const label = el('label',{for:id,class:'option'},[input, el('span',{html:opt})]);
      fs.appendChild(label);
    });
  } else if(q.tipo==='texto'){
    fs.appendChild(el('input',{type:'text', id:`txt-${q.id}`, class:'short-text', placeholder:'Digite sua resposta'}));
  }
  card.appendChild(fs);
  card.appendChild(el('div',{id:`fb-${q.id}`, class:'feedback', style:'display:none'}));
  return card;
}
function renderAll(){
  $questions.innerHTML = "";
  QUESTOES.forEach(q => $questions.appendChild(renderQuestion(q)));
}

// NORMALIZAR TEXTO
function normalizar(s){
  return (s||'').toLowerCase().trim().normalize('NFD').replace(/\p{Diacritic}/gu,'');
}

// SALVAR / CARREGAR RASCUNHO (localStorage)
const STORAGE_KEY = 'quiz_rascunho_v1';
function salvarRascunho(){
  const data = {};
  QUESTOES.forEach(q=>{
    if(q.tipo==='unica' || q.tipo==='boolean'){
      const sel = [...document.querySelectorAll(`#fs-${q.id} input[type=radio]`)].find(i=>i.checked);
      data[q.id] = sel ? sel.id : null;
    } else if(q.tipo==='multipla'){
      data[q.id] = [...document.querySelectorAll(`#fs-${q.id} input[type=checkbox]`)]
        .filter(i=>i.checked).map(i=>i.id);
    } else if(q.tipo==='texto'){
      data[q.id] = document.getElementById(`txt-${q.id}`).value || '';
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  alert('Rascunho salvo neste navegador.');
}
function carregarRascunho(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return;
  const data = JSON.parse(raw);
  QUESTOES.forEach(q=>{
    if(!(q.id in data)) return;
    if(q.tipo==='unica' || q.tipo==='boolean'){
      const id = data[q.id];
      if(id) {
        const inp = document.getElementById(id);
        if(inp) inp.checked = true;
      }
    } else if(q.tipo==='multipla'){
      (data[q.id]||[]).forEach(id=>{
        const inp = document.getElementById(id);
        if(inp) inp.checked = true;
      });
    } else if(q.tipo==='texto'){
      const v = data[q.id] || '';
      const inp = document.getElementById(`txt-${q.id}`);
      if(inp) inp.value = v;
    }
  });
}

// CORRIGIR (permite em branco e corrigir novamente; trava as corretas)
function corrigir(){
  let certos=0, total=QUESTOES.length;

  QUESTOES.forEach(q=>{
    const fb = document.getElementById(`fb-${q.id}`);
    const card = document.getElementById(`card-${q.id}`);
    card.classList.remove('is-correct','is-wrong');

    let ok=false;

    if(q.tipo==='unica' || q.tipo==='boolean'){
      const radios=[...document.querySelectorAll(`#fs-${q.id} input[type=radio]`)];
      const sel = radios.find(i=>i.checked);
      const idx = sel ? Number(sel.id.split('-').pop()) : null;
      ok = (idx===q.correta);
      radios.forEach(r=>{ r.disabled = ok; });
    } else if(q.tipo==='multipla'){
      const checks=[...document.querySelectorAll(`#fs-${q.id} input[type=checkbox]`)];
      const marcados = checks.reduce((acc,c,i)=> c.checked ? [...acc, i] : acc, []);
      ok = JSON.stringify([...marcados].sort())===JSON.stringify([...q.correta].sort());
      checks.forEach(c=>{ c.disabled = ok; });
    } else if(q.tipo==='texto'){
      const t = document.getElementById(`txt-${q.id}`);
      const v = t.value;
      ok = Array.isArray(q.correta) ? q.correta.map(normalizar).includes(normalizar(v)) : normalizar(v)===normalizar(q.correta);
      t.disabled = ok;
    }

    fb.style.display='block';
    fb.className='feedback '+(ok?'correct':'wrong');
    fb.innerHTML=(ok?'✔ Resposta correta.':'✖ Resposta incorreta.');

    card.classList.add(ok?'is-correct':'is-wrong');
    if(ok) certos++;
  });

  const pct=Math.round((certos/total)*100);
  $scoreLine.innerHTML = `<span class="badge ${pct>=70?'ok':'bad'}">${pct}%</span>
    Você acertou <strong>${certos}</strong> de <strong>${total}</strong> questões.`;
  $scoreExtra.textContent = pct>=70 ? "Bom trabalho! Você atingiu o mínimo recomendado." : "Abaixo de 70%: revise os conceitos e tente novamente.";
  $scoreCard.style.display='block';
  document.getElementById('scoreCard').scrollIntoView({behavior:'smooth', block:'start'});
}

// REFAZER
function refazer(){
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// REVISAR
function revisar(){
  const alvo = document.querySelector('.card.is-wrong') || document.querySelector('.card.is-correct');
  if(alvo) alvo.scrollIntoView({behavior:'smooth',block:'center'});
}

// EVENTOS BASE
function bindEvents(){
  $btnCorrigir.addEventListener('click', corrigir);
  $btnRefazer.addEventListener('click', refazer);
  $btnRevisar.addEventListener('click', revisar);
  $btnSalvar.addEventListener('click', salvarRascunho);
}

// ===== NOVA QUESTÃO (UI) =====
let $btnToggleForm,$formNew,$tipo,$enun,$obg,$exp,$mcArea,$boolArea,$boolCorreta,$opcoes,$addOpcao,$btnCancelar;

function fqBindRefs(){
  $btnToggleForm = document.getElementById('btnToggleForm');
  $formNew       = document.getElementById('newQuestionForm');
  $tipo          = document.getElementById('fq-tipo');
  $enun          = document.getElementById('fq-enunciado');
  $obg           = document.getElementById('fq-obrigatoria');
  $exp           = document.getElementById('fq-explicacao');
  $mcArea        = document.getElementById('fq-mc-area');
  $boolArea      = document.getElementById('fq-bool-area');
  $boolCorreta   = document.getElementById('fq-bool-correta');
  $opcoes        = document.getElementById('fq-opcoes');
  $addOpcao      = document.getElementById('fq-add-opcao');
  $btnCancelar   = document.getElementById('fq-cancelar');
}

function fqToggle(){ if($formNew){ $formNew.style.display = ($formNew.style.display==='none' || $formNew.style.display==='') ? 'block' : 'none'; } }
function fqTipoChange(){
  if(!$tipo) return;
  const t = $tipo.value;
  if(t==='unica'){ $mcArea.style.display='block'; $boolArea.style.display='none'; }
  else { $mcArea.style.display='none'; $boolArea.style.display='block'; }
}
function fqAddOpcao(texto=''){
  const idx = $opcoes.querySelectorAll('.fq-opcao').length;
  const row = document.createElement('div');
  row.className = 'fq-opcao';
  row.innerHTML = `
    <input type="radio" name="fq-correta" value="${idx}" title="Marque para definir como correta">
    <input type="text" placeholder="Alternativa ${String.fromCharCode(65+idx)}" value="${texto||''}">
    <button type="button" class="fq-remove" title="Remover">Remover</button>
  `;
  row.querySelector('.fq-remove').addEventListener('click', ()=>{
    row.remove();
    [...$opcoes.querySelectorAll('.fq-opcao')].forEach((r,i)=>{
      r.querySelector('input[type=radio]').value = i;
      r.querySelector('input[type=text]').placeholder = `Alternativa ${String.fromCharCode(65+i)}`;
    });
  });
  $opcoes.appendChild(row);
}
function fqReset(){
  if(!$formNew) return;
  $enun.value='';
  $exp.value='';
  $obg.checked=true;
  $tipo.value='unica';
  $boolCorreta.value='0';
  $opcoes.innerHTML='';
  for(let i=0;i<4;i++) fqAddOpcao();
  const firstRadio = $opcoes.querySelector('input[type=radio]');
  if(firstRadio) firstRadio.checked = true;
  fqTipoChange();
}
function fqCriarQuestao(e){
  e.preventDefault();
  const tipo = $tipo.value;
  const enunciadoTxt = $enun.value.trim();
  if(!enunciadoTxt){ alert('Informe o enunciado.'); return; }

  const id = `q${QUESTOES.length+1}`;
  const enunciado = `${QUESTOES.length+1}) ${enunciadoTxt}`;
  const obrigatoria = !!$obg.checked;
  const explicacao = $exp.value.trim() || undefined;

  let nova = null;

  if(tipo==='unica'){
    const linhas = [...$opcoes.querySelectorAll('.fq-opcao')];
    if(linhas.length<2){ alert('Adicione pelo menos 2 alternativas.'); return; }
    const alternativas = linhas.map(l=>l.querySelector('input[type=text]').value.trim());
    if(alternativas.some(a=>!a)){ alert('Preencha o texto de todas as alternativas.'); return; }
    const radioSel = $opcoes.querySelector('input[type=radio]:checked');
    if(!radioSel){ alert('Selecione qual alternativa é a correta.'); return; }
    const correta = Number(radioSel.value);
    nova = { id, tipo:'unica', enunciado, obrigatoria, alternativas, correta };
  } else {
    const alternativas = ["Verdadeiro","Falso"];
    const correta = Number($boolCorreta.value);
    nova = { id, tipo:'boolean', enunciado, obrigatoria, alternativas, correta };
  }
  if(explicacao) nova.explicacao = explicacao;

  // adiciona e renderiza só a nova
  QUESTOES.push(nova);
  $questions.appendChild(renderQuestion(nova));

  alert('Questão adicionada!');
  fqToggle();
  fqReset();
}

function fqBindEvents(){
  if($btnToggleForm) $btnToggleForm.addEventListener('click', fqToggle);
  if($tipo) $tipo.addEventListener('change', fqTipoChange);
  if($addOpcao) $addOpcao.addEventListener('click', ()=>fqAddOpcao());
  if($btnCancelar) $btnCancelar.addEventListener('click', (e)=>{ e.preventDefault(); fqToggle(); });
  const form = document.getElementById('newQuestionForm');
  if(form) form.addEventListener('submit', fqCriarQuestao);
}

// BOOT
(function init(){
  renderAll();
  carregarRascunho();
  bindEvents();
  // nova questão
  fqBindRefs();
  fqBindEvents();
  fqReset();
})();