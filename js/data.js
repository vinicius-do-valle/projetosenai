/* ------------------------------------------------------------------
   FONTE DE DADOS

   O Power Automate (Forms -> Excel Online) adiciona uma linha nova
   numa planilha a cada resposta do formulário, com colunas q1..q19.

   O dashboard baixa esse .xlsx direto do link de compartilhamento do
   SharePoint/OneDrive (com &download=1 no final) e lê ele no navegador
   com a biblioteca SheetJS — sem precisar de backend nenhum.

   Troque XLSX_URL pelo link de compartilhamento, terminando em
   "&download=1".
------------------------------------------------------------------- */

const XLSX_URL = "https://sesisenaispedu-my.sharepoint.com/:x:/g/personal/lais_vaz_portalsesisp_org_br/IQCfz8o7SdJOQa73_iJMoY_cAZX-9-_9LRRaXAOA_HjftjM?e=EpnnQh&download=1";
const XLSX_SHEET_NAME = "Respostas"; // nome da aba com a tabela de respostas

let RESPONSES = [];

async function fetchResponses(){
  if(!XLSX_URL){
    console.warn("XLSX_URL não configurado.");
    return RESPONSES;
  }
  try{
    const res = await fetch(XLSX_URL, { cache: "no-store" });
    if(!res.ok) throw new Error("planilha indisponível");
    const buffer = await res.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheet = workbook.Sheets[XLSX_SHEET_NAME] || workbook.Sheets[workbook.SheetNames[0]];
    if(!sheet) throw new Error("aba não encontrada");

    // sheet_to_json usa a primeira linha como cabeçalho (q1, q2, ...)
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
    const data = rows
      .map(r => {
        const obj = {};
        Object.keys(r).forEach(k => obj[k.trim().toLowerCase()] = String(r[k]).trim());
        return obj;
      })
      .filter(r => Object.values(r).some(v => v !== ""));

    RESPONSES = data;
    document.getElementById("status-label").textContent = "Conectado à planilha";
    return RESPONSES;
  }catch(e){
    console.error("Não deu pra ler a planilha:", e);
    document.getElementById("status-label").textContent = "Erro ao buscar a planilha — veja o console";
    return RESPONSES;
  }
}