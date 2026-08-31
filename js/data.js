/* ------------------------------------------------------------------
   FONTE DE DADOS

   Este arquivo é só o frontend. Ele espera receber as respostas de
   um endpoint no formato combinado com o Power Automate, por exemplo:

     GET https://seu-site.vercel.app/api/respostas

   retornando um array de objetos:
     [{ q1: "...", q2: "...", q3: "Na escola", ... }, ...]

   Enquanto esse endpoint não existe, o painel usa um gerador de
   respostas de exemplo (abaixo) só pra simular o painel funcionando
   em tempo real. Troque fetchResponses() em script.js por um fetch
   real quando a API estiver no ar, e pode apagar tudo deste arquivo.
------------------------------------------------------------------- */

const API_URL = "/api/respostas"; // troque pela URL real na Vercel

const Q1_WORDS = ["Conexão","Futuro","Celular","Internet","Evolução","Comunicação","Rapidez","Inovação","Redes sociais","Praticidade","Informação","Progresso"];
const Q7_STUDY = ["Assisto videoaulas","Faço pesquisas escolares","Uso apps de estudo","Estudo por plataformas online","Participo de grupos de estudo no celular"];
const Q9_TEAM = ["Grupos no WhatsApp para trabalhos","Google Docs compartilhado","Apresentações em grupo por videochamada","Drive para dividir tarefas"];
const Q10_ACCESS = ["Consigo pesquisar qualquer assunto rápido","Tenho acesso a notícias do mundo todo","Aprendo coisas novas por vídeos","Conheço outras culturas por redes sociais"];
const Q17_IMPROVE = ["Mais computadores disponíveis","Internet mais rápida","Aulas com mais tecnologia","Mais liberdade pra usar o celular em pesquisas"];
const Q18_SKILL = ["Programação","Edição de vídeo","Design gráfico","Inteligência artificial","Idiomas por apps"];
const Q19_SUPPORT = ["Oferecer cursos rápidos","Ter laboratório de informática melhor","Ensinar sobre segurança digital","Trazer projetos com tecnologia"];
const Q4_ROLE = ["Facilita o acesso à informação","Conecta pessoas","Move a economia","Transforma o trabalho","Aproxima e também afasta","Impulsiona a educação"];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function generateMockResponse(){
  return {
    q1: pick(Q1_WORDS),
    q2: pick(["Está em tudo, não só em aparelhos","Acho que é mais os aparelhos mesmo","Está em quase tudo que fazemos"]),
    q3: pick(["Na escola","Em casa","No trabalho","Na comunicação","No transporte","Em outras situações"]),
    q4: pick(Q4_ROLE),
    q5: pick(["Ativo","Passivo","Um pouco dos dois","Não sei"]),
    q6: pick(["Sim, frequentemente","Às vezes","Raramente","Nunca"]),
    q7: pick(Q7_STUDY),
    q8: pick(["Pesquisas","Vídeos","Aplicativos","Jogos educativos","Comunicação"]),
    q9: pick(Q9_TEAM),
    q10: pick(Q10_ACCESS),
    q11: pick(["Sim","Não"]),
    q12: pick(["Redes sociais","Notificações/mensagens","Jogos","Vídeos","Uso excessivo do celular","Outro"]),
    q13: pick(["Procuro em outras fontes","Verifico quem publicou","Comparo com sites confiáveis","Pergunto para alguém","Normalmente não verifico"]),
    q14: pick(["Nunca","Raramente","Às vezes","Frequentemente","Sempre"]),
    q15: pick(["Respeitar outras pessoas","Não espalhar informações falsas","Proteger dados pessoais","Respeitar a privacidade","Usar a tecnologia com equilíbrio","Todos os anteriores"]),
    q16: pick(["Excelente","Bom","Regular","Ruim","Muito ruim"]),
    q17: pick(Q17_IMPROVE),
    q18: pick(Q18_SKILL),
    q19: pick(Q19_SUPPORT),
  };
}

let RESPONSES = [];

async function fetchResponses(){
  try{
    const res = await fetch(API_URL);
    if(!res.ok) throw new Error("sem API ainda");
    const data = await res.json();
    if(Array.isArray(data) && data.length) return data;
    throw new Error("vazio");
  }catch(e){
    if(RESPONSES.length < 42 && Math.random() < 0.6){
      RESPONSES.push(generateMockResponse());
    }
    return RESPONSES;
  }
}