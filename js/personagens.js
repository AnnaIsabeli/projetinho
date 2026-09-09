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
    nome: "Kyren",
    titulo: "codenome: Rubídia",
    tipo: "humano",
    afiliacao: "aurora",
    elemento: "sol",
    resumo: "Um membro do time principal. Afiliado à Aurora, é um humano com poderes elementais do Sol.",
    retrato: null,
  },
];
