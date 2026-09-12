/* ============================================================
   DATA / PERSONAGENS
   ============================================================
   tipo: "aerin" | "pilar" | "catalisador" | "governante" | "humano" | "robo"
   afiliacao: "aurora" | "guilda" | "abismo" | "independente"
   elemento: uma chave de ELEMENTOS (ou "nenhum")
   retrato: caminho da imagem 3x4 do personagem (opcional). Segue
     a mesma convenção das nações — fica numa subpasta com o nome
     do personagem, sem acento/espaço (ex: "kyren/retrato.jpg").
     Se não tiver retrato ainda, o card mostra um fundo com a cor
     do elemento no lugar da foto.

   Pra adicionar um personagem novo: copia um bloco inteiro,
   cola antes do "];" e muda os valores.
   ============================================================ */

// TEMPORÁRIO: apenas 1 personagem enquanto refinamos o site.
// Os outros (~30) entram depois.
const PERSONAGENS = [
  {
    id: "1",
    nome: "Noren",
    elemento: "null",
    retrato: null,
  },
  {
    id: "2",
    nome: "Kyren",
    elemento: "sol",
    retrato: null,
  },
  {
    id: "3",
    nome: "Stellin",
    elemento: "gelo",
    retrato: null,
  },
  {
    id: "4",
    nome: "Elio",
    elemento: "lua",
    retrato: null,
  },
  {
    id: "5",
    nome: "Ravi",
    elemento: "natureza",
    retrato: null,
  },
  {
    id: "6",
    nome: "Lyra",
    elemento: "agua",
    retrato: null,
  },
  {
    id: "7",
    nome: "Idrissa",
    elemento: "ceu",
    retrato: null,
  },
  {
    id: "8",
    nome: "Nyxen",
    elemento: "gelo",
    retrato: null,
  },
  {
    id: "9",
    nome: "Narya",
    elemento: "fogo",
    retrato: null,
  },
  {
    id: "10",
    nome: "Elyndra",
    elemento: "lua",
    retrato: null,
  },
  {
    id: "11",
    nome: "Humei",
    elemento: "lua",
    retrato: null,
  },
  {
    id: "12",
    nome: "Lurhin",
    elemento: "lua",
    retrato: null,
  },
  {
    id: "13",
    nome: "Inary",
    elemento: "sol",
    retrato: null,
  },
  {
    id: "14",
    nome: "Onyra",
    elemento: "null",
    retrato: null,
  },
  {
    id: "15",
    nome: "Karesh",
    elemento: "null",
    retrato: null,
  },
  {
    id: "16",
    nome: "Soryn",
    elemento: "null",
    retrato: null,
  },
  {
    id: "17",
    nome: "Eyorith",
    elemento: "null",
    retrato: null,
  },
  {
    id: "18",
    nome: "Elysae",
    elemento: "null",
    retrato: null,
  },
  {
    id: "19",
    nome: "Ixchel",
    elemento: "lua",
    retrato: null,
  },
  {
    id: "20",
    nome: "Alyster",
    elemento: "fogo",
    retrato: null,
  },
  {
    id: "21",
    nome: "Daerys",
    elemento: "sol",
    retrato: null,
  },
  {
    id: "22",
    nome: "Ariseth",
    elemento: "natureza",
    retrato: null,
  },
  {
    id: "23",
    nome: "Kayro",
    elemento: "gelo",
    retrato: null,
  },
  {
    id: "24",
    nome: "Maello",
    elemento: "ceu",
    retrato: null,
  },
  {
    id: "25",
    nome: "Myelle",
    elemento: "fogo",
    retrato: null,
  },
  {
    id: "26",
    nome: "Taryn",
    elemento: "agua",
    retrato: null,
  },
  {
    id: "27",
    nome: "Zaryon",
    elemento: "lua",
    retrato: null,
  },
];
