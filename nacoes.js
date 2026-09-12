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
    resumo:  "Cinco tribos vivendo em harmonia profunda com a natureza.", 
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },
  {
    id: "lyrae-mare",
    mundo: "novo",
    nome: "Lyrae Mare",
    conceito: "Água & Cura",
    elemento: "agua",
    vibe: "Atlantida",
    resumo: "A principal cidade é subaquática, composta por um arquipélago de cinco ilhas sendo a principal encima de uma tartaruga gigante.",
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },
  {
    id: "Kaeliys",
    mundo: "novo",
    nome: "Kaeliys",
    conceito: "Céu & Liberdade",
    elemento: "ceu",
    vibe: "Grega / Romana",
    resumo: " É um conjunto de ilhas flutuantes e também é a nação responsável pelas estações do ano.", 
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },
  {
    id: "synlak",
    mundo: "novo",
    nome: "Synlak",
    conceito: "Gelo & Paz",
    elemento: "gelo",
    vibe: "Nordica",
    resumo: "É a nação mais ao norte e mais isolada, coberta por gelo e neve. Uma fortaleza no topo de uma montanha Nevada.", 
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },
  {
    id: "zypher",
    mundo: "novo",
    nome: "Zypher",
    conceito: "Fogo & Justiça",
    elemento: "fogo",
    vibe: "Europa medieval",
    resumo: "A nação da justiça, das forjas e dos famosos cavaleiros mascarados que montam dragões.", 
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },
  {
    id: "nymethys",
    mundo: "novo",
    nome: "Nymethys",
    conceito: "Luas & Verdade",
    elemento: "lua",
    vibe: "Japonesa",
    resumo: "a Nação dos Reflexos, Memórias e Sonhos.", 
    dossie: null, // ainda não escrito — ver formato no comentário acima
  },
  {
    id: "Solarys",
    mundo: "novo",
    nome: "Solarys",
    conceito: "Sol & Sabedoria",
    elemento: "sol",
    vibe: "babilonica/mesopotamica",
    resumo: "Localizada no coração do deserto, possui uma gigantesca biblioteca subterrânea chamada Antares.", 
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
  {
    id: "nivara",
    mundo: "velho",
    nome: "Nivara",
    conceito: "O Jardim Eterno",
    elemento: "nenhum",
    vibe: "El dorado",
    resumo: "Cidade prospera feita de marmore e ouro, destruida em uma gerra civil.",
    dossie: null,
  },
  {
    id: "orivahn",
    mundo: "velho",
    nome: "Orivahn",
    conceito: "O Trono da Ordem",
    elemento: "nenhum",
    vibe: "Ditadura / Militar",
    resumo: "tudo era regulamentado, as emoções eram vistas como fraqueza e as decisões eram calculadas.",
    dossie: null,
  },
  {
    id: "valdros",
    mundo: "velho",
    nome: "Valdros",
    conceito: "O reino do silencio",
    elemento: "nenhum",
    vibe: "Semi-feudal",
    resumo: "Uma civilização militar perfeita, sem Guerras perdidas. Destruida por doenças sem cura.",
    dossie: null,
  },
  {
    id: "thal-meryn",
    mundo: "velho",
    nome: "Thal'Meryn",
    conceito: "A Cidade dos Mil Amanhãs",
    elemento: "nenhum",
    vibe: "Alta tecnologia",
    resumo: "Cidade presa no tempo, vivendo o mesmo dia a 6000 anos.",
    dossie: null,
  },
  {
    id: "kaorun",
    mundo: "velho",
    nome: "Kaorun",
    conceito: "O Império Ardente",
    elemento: "nenhum",
    vibe: "Militar / imperial",
    resumo: "Não a informações confiaveis sobre essa nação, nem os motivos de sua destruição.",
    dossie: null,
  },
];
