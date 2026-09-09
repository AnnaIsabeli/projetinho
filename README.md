# Evren — Compêndio

Site estático (HTML + CSS + JS puro, sem build) com o compêndio do mundo de Evren:
nações, personagens e organizações.

## Como abrir o site

Baixe (ou clone) o repositório inteiro, mantendo a estrutura de pastas
(`js/`, `Features/`, `Imagens/` etc.) exatamente como está. Dê dois cliques
no `index.html` e o site abre direto no navegador — não precisa de servidor
nem instalação de nada.

## Estrutura de pastas

```
evren-site/
├── index.html
├── style.css
├── js/
│   ├── main.js
│   ├── elementos.js, nacoes.js, organizacoes.js, personagens.js   ← dados
├── Features/
│   ├── modal.js, tabs.js, nacaoFeature.js, persFeature.js, orgFeature.js
├── mapa.png                  ← imagem usada na aba Mapa
├── Imagens/                  ← ícones dos 7 elementos (natureza.png, agua.png...)
├── nivea/                    ← imagens da nação Nivéa + nivea.js (dossiê completo)
├── eonarys/                  ← imagens da nação Éonarys + eonarys.js
└── ...                       ← uma subpasta por nação, personagem etc. conforme for crescendo
```

Arquivos **gerais** do site ficam em `js/` (lógica de dados) ou `Features/`
(lógica de renderização); a pasta `Imagens/` guarda os ícones dos elementos.
Arquivos **específicos de uma nação** (imagens e o dossiê completo) ficam
dentro da subpasta daquela nação, solta na raiz (não dentro de `js/` nem
`Features/`) — ver "Formato do dossiê" abaixo pra entender por quê.

## Convenção de nomes

Todo `id` (de nação, personagem, organização...) é **sem acento e sem espaço**,
sempre em minúsculo. Exemplos: `nivea`, `eonarys`, `lyrae_mare`.

Esse mesmo `id` é usado pra nomear a subpasta de arquivos daquele item — então
o `id: "nivea"` usa a pasta `nivea/`.

## Onde estão os dados

Cada tipo de conteúdo tem seu próprio arquivo de dados. Não tem lógica neles,
só os objetos — quem lê e desenha na tela é o arquivo de feature
correspondente (`nacaoFeature.js`, `persFeature.js`, `orgFeature.js`).

| Conteúdo | Arquivo de dados | Arquivo que renderiza |
|---|---|---|
| Nações (resumo) | `js/nacoes.js` | `Features/nacaoFeature.js` |
| Dossiê de cada nação | `<id>/<id>.js` (registra em `window.DOSSIES`) | `Features/nacaoFeature.js` |
| Personagens | `js/personagens.js` | `Features/persFeature.js` |
| Organizações | `js/organizacoes.js` | `Features/orgFeature.js` |
| Elementos (cor/ícone) | `js/elementos.js` | usado pelos três acima |

### Adicionar uma nação nova

1. Copia um bloco `{ ... }` inteiro dentro de `NACOES` (`js/nacoes.js`), cola
   antes do `];` e muda os valores. Esse arquivo só guarda o **resumo curto**
   de cada nação — não o dossiê completo (motivo: com 13 nações, um `nacoes.js`
   com todos os dossiês inteiros dentro ficaria enorme e arriscado de editar).
2. Cria a subpasta com o `id` da nação (ex: `zypher/`) pras imagens dela **e**
   um arquivo `zypher.js` dentro dela, com o dossiê completo (formato abaixo).
3. Inclui esse arquivo no `index.html`, na seção "dossiês por nação" — **antes**
   dos scripts de `Features/` (eles é que leem o dossiê registrado):
   ```html
   <script src="zypher/zypher.js"></script>
   ```
4. O item na sidebar (dentro de "Novo Mundo" ou "Velho Mundo") e a página de
   perfil são gerados automaticamente a partir do `nacoes.js` + do dossiê —
   não precisa mexer em mais nada.

#### Formato do dossiê (perfil completo)

Cada nação registra seu dossiê num "cofre" global, `window.DOSSIES`, usando o
próprio `id` como chave. Formato do arquivo `<id-da-nação>/<id-da-nação>.js`:

```js
window.DOSSIES = window.DOSSIES || {};

window.DOSSIES.zypher = {
  capa: "zypher/capa.jpg",   // imagem grande no topo (opcional)
  blocos: [
    { tipo: "texto",  texto: "Um parágrafo do dossiê..." },
    { tipo: "imagem", src: "zypher/01.jpg", legenda: "Legenda opcional" },
    { tipo: "texto",  texto: "Mais um parágrafo..." },
    // quantos blocos quiser, na ordem que aparecem no texto
  ],
};
```

Os blocos aparecem na ordem da lista — dá pra intercalar texto e imagem à
vontade, como um artigo. Os caminhos das imagens (`capa`, `src`) usam a
subpasta da própria nação, ex: `zypher/01.jpg`. Enquanto uma nação não tiver
esse arquivo (ou ele não tiver sido incluído no `index.html`), a página dela
mostra só o resumo curto, com um aviso de "dossiê ainda não escrito".

### Adicionar um personagem novo

Copia um bloco `{ ... }` inteiro dentro de `PERSONAGENS` (`personagens.js`),
cola antes do `];` e muda os valores. Campos:

- `tipo`: `"aerin"` | `"pilar"` | `"catalisador"` | `"governante"` | `"humano"` | `"robo"`
- `afiliacao`: `"aurora"` | `"guilda"` | `"abismo"` | `"independente"`
- `elemento`: uma chave de `ELEMENTOS` (`elementos.js`), ou `"nenhum"`
- `retrato`: caminho da foto 3:4 do personagem (opcional). Mesma convenção
  das nações — fica numa subpasta com o nome do personagem, sem
  acento/espaço (ex: `kyren/retrato.jpg`). Enquanto for `null`, o card
  mostra um fundo na cor do elemento no lugar da foto.

O card na aba Personagens mostra só o retrato, com o nome e o ícone do
elemento numa faixa embaixo (estilo "roster" de jogo, tipo Genshin Impact) —
sem título, resumo ou tags. O resumo e o resto das informações aparecem no
modal, ao clicar no card.

⚠️ Se usar um `tipo` ou `afiliacao` novo que ainda não existe nos rótulos
(`TIPO_LABEL` / `AFILIACAO_LABEL`, em `persFeature.js`), o modal mostra o
valor cru (ex: `governante`) em vez de um nome bonito — precisa adicionar o
rótulo lá manualmente.

### Adicionar uma organização nova

Copia um bloco `{ ... }` inteiro dentro de `ORGANIZACOES` (`organizacoes.js`),
cola antes do `];` e muda os valores.

## Elementos e ícones

Os 7 elementos (cor + ícone) ficam centralizados em `elementos.js`. Os ícones
são os `.png` da pasta `Imagens/`, nomeados sem acento/espaço:
`natureza.png`, `agua.png`, `ceu.png`, `gelo.png`, `fogo.png`, `lua.png`, `sol.png`.

Mudar a cor ou o ícone ali reflete automaticamente em todo o site (tags,
retratos de personagem, chips de filtro).

## Abas ainda não implementadas / pendências

- Nenhuma no momento — Mapa, Nações, Personagens e Organizações já funcionam.
- O dossiê (`dossie`) de cada nação ainda precisa ser escrito (hoje está
  `null` em todas).
