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
├── nivea/                    ← imagens da nação Nivéa
├── eonarys/                  ← imagens da nação Éonarys
└── ...                       ← uma subpasta por nação, personagem etc. conforme for crescendo
```

Arquivos **gerais** do site ficam em `js/` (lógica de dados) ou `Features/`
(lógica de renderização); a pasta `Imagens/` guarda os ícones dos elementos.
Arquivos **específicos de uma nação** (hoje: dossiê e imagens) ficam dentro
da subpasta daquela nação, solta na raiz (não dentro de `js/` nem `Features/`).

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
| Nações | `nacoes.js` | `nacaoFeature.js` |
| Personagens | `personagens.js` | `persFeature.js` |
| Organizações | `organizacoes.js` | `orgFeature.js` |
| Elementos (cor/ícone) | `elementos.js` | usado pelos três acima |

### Adicionar uma nação nova

1. Copia um bloco `{ ... }` inteiro dentro de `NACOES` (`nacoes.js`), cola
   antes do `];` e muda os valores.
2. Cria a subpasta com o `id` da nação (ex: `zypher/`) pras imagens dela.
3. O item na sidebar (dentro de "Novo Mundo" ou "Velho Mundo") e a página de
   perfil são gerados automaticamente — não precisa mexer em HTML nem JS.

#### Formato do dossiê (perfil completo)

O campo `dossie` é opcional. Enquanto for `null`, a página da nação mostra só
o resumo curto. Formato:

```js
dossie: {
  capa: "nivea/capa.jpg",   // imagem grande no topo (opcional)
  blocos: [
    { tipo: "texto",  texto: "Um parágrafo do dossiê..." },
    { tipo: "imagem", src: "nivea/01.jpg", legenda: "Legenda opcional" },
    { tipo: "texto",  texto: "Mais um parágrafo..." },
    // quantos blocos quiser, na ordem que aparecem no texto
  ],
}
```

Os blocos aparecem na ordem da lista — dá pra intercalar texto e imagem à
vontade, como um artigo. Os caminhos das imagens (`capa`, `src`) usam a
subpasta da nação, ex: `nivea/01.jpg`.

### Adicionar um personagem novo

Copia um bloco `{ ... }` inteiro dentro de `PERSONAGENS` (`personagens.js`),
cola antes do `];` e muda os valores. Campos:

- `tipo`: `"aerin"` | `"pilar"` | `"catalisador"` | `"governante"` | `"humano"` | `"robo"`
- `afiliacao`: `"aurora"` | `"guilda"` | `"abismo"` | `"independente"`
- `elemento`: uma chave de `ELEMENTOS` (`elementos.js`), ou `"nenhum"`

⚠️ Se usar um `tipo` ou `afiliacao` novo que ainda não existe nos rótulos
(`TIPO_LABEL` / `AFILIACAO_LABEL`, em `persFeature.js`), o filtro mostra o
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
