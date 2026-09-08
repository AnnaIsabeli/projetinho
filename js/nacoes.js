/* ============================================================
   DATA / NAÇÕES
   ============================================================
   Todas as nações de Evren — 7 do Novo Mundo (mundo: "novo") e
   6 do Velho Mundo (mundo: "velho").

   Pra adicionar uma nação nova: copia um bloco { ... } inteiro,
   cola antes do "];" e muda os valores. O "id" tem que ser
   único e sem espaço/acento — e é esse mesmo "id" que deve
   nomear a subpasta com os arquivos/imagens dessa nação.

   O campo "dossie" (perfil completo, com capa + blocos de
   texto/imagem) é opcional — formato completo documentado no
   README.md, na raiz do projeto.
   ============================================================ */

// TEMPORÁRIO: apenas 1 nação por mundo enquanto refinamos o site.
// As demais (Lyrae Mare, Kaeliys, Sinlak, Zypher, Nymethys, Solarys,
// Nivara, Valdros, Orivahn, Thal'Meryn, Kaorun) voltam depois.
const NACOES = [
  {
    id: "nivea",
    mundo: "novo",
    nome: "Nivéa",
    conceito: "Natureza & Vida",
    elemento: "natureza",
    vibe: "Asteca / Inca / Maia",
    resumo: "Cinco tribos vivendo em harmonia profunda com a natureza.", 
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },

  // ----- Velho Mundo -----
  {
    id: "eonarys",
    mundo: "velho",
    nome: "Éonarys",
    conceito: "A Nação Perdida",
    elemento: "nenhum",
    vibe: "Alta tecnologia",
    resumo: "Cidade de alta tecnologia destruída quando o Abismo corrompeu suas próprias criações.",
    dossie: null,
  },
];
