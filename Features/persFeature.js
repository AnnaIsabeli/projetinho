/* ============================================================
   FEATURE / FILTRO E CARDS DE PERSONAGENS
   ============================================================
   Filtro compacto: um botão "Elemento" que abre um painel com
   os ícones dos elementos, onde dá pra selecionar mais de um
   ao mesmo tempo (multi-seleção). Sem filtro de afiliação/tipo.

   Card de personagem é só o retrato (3:4, campo "retrato" em
   personagens.js) com o nome e o ícone do elemento embaixo —
   sem título, resumo ou tags (estilo "roster" de personagens,
   tipo Genshin Impact). O resumo e o restante das infos
   aparecem no modal, ao clicar no card.

   Depende de PERSONAGENS e ELEMENTOS (arquivos de dados) e de
   openModal (modal.js). TIPO_LABEL/AFILIACAO_LABEL continuam
   aqui pro modal de perfil, mesmo não aparecendo nos cards.
   ============================================================ */

const TIPO_LABEL = {
  aerin: "Aerin",
  pilar: "Pilar",
  catalisador: "Catalisador",
  humano: "Humano",
};

const AFILIACAO_LABEL = {
  aurora: "Aurora",
  guilda: "Guilda dos Desbravadores",
  abismo: "Abismo",
  Animais: "Animais Elementares",
  independente: "Independente",
};

// elemento agora é multi-seleção: guarda um Set de valores ativos
const activeFilters = { elemento: new Set() };

function buildCharFilters() {
  const elementos = [...new Set(PERSONAGENS.map((p) => p.elemento).filter((e) => e !== "nenhum"))];
  const painel = document.getElementById("filter-elemento");
  painel.innerHTML = "";

  elementos.forEach((valor) => {
    const info = ELEMENTOS[valor];
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "filter-chip filter-chip-icon-only";
    chip.title = info?.nome || valor;
    chip.innerHTML = `<img src="${info?.icone}" alt="${info?.nome || valor}" class="chip-icon">`;

    chip.addEventListener("click", () => {
      if (activeFilters.elemento.has(valor)) {
        activeFilters.elemento.delete(valor);
        chip.classList.remove("active");
      } else {
        activeFilters.elemento.add(valor);
        chip.classList.add("active");
      }
      renderCharCards();
    });

    painel.appendChild(chip);
  });

  initFilterDropdown();
}

// Abre/fecha o painel de elementos ao clicar no botão "Elemento".
function initFilterDropdown() {
  const dropdown = document.getElementById("filter-elemento-dropdown");
  const toggle = document.getElementById("filter-elemento-toggle");
  if (!dropdown || !toggle || toggle.dataset.bound) return;

  toggle.dataset.bound = "true";
  toggle.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  // fecha o painel se clicar fora dele
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove("open");
  });
}

function renderCharCards() {
  const grid = document.getElementById("char-grid");
  const empty = document.getElementById("char-empty");
  grid.innerHTML = "";

  const filtered = PERSONAGENS.filter((p) => {
    if (activeFilters.elemento.size === 0) return true;
    return activeFilters.elemento.has(p.elemento);
  });

  empty.style.display = filtered.length ? "none" : "block";

  filtered.forEach((p) => {
    const cor = ELEMENTOS[p.elemento]?.cor || "#6b6880";
    const iconeEl = ELEMENTOS[p.elemento]?.icone;

    // sem retrato ainda: usa um fundo na cor do elemento no lugar da foto
    const fundoRetrato = p.retrato
      ? `background-image: url('${p.retrato}');`
      : `background: linear-gradient(160deg, color-mix(in srgb, ${cor} 45%, transparent), var(--bg-panel-raised) 75%);`;

    const iconeHTML = iconeEl
      ? `<img src="${iconeEl}" alt="${ELEMENTOS[p.elemento].nome}" class="char-name-icon">`
      : "";

    const card = document.createElement("button");
    card.className = "char-card";
    card.style.setProperty("--el", cor);
    card.innerHTML = `
      <div class="char-portrait" style="${fundoRetrato}">
        <div class="char-name-bar">
          ${iconeHTML}
          <span class="char-name">${p.nome}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(buildCharModalContent(p)));
    grid.appendChild(card);
  });
}

function buildCharModalContent(p) {
  // afiliação fica de fora do eyebrow também — só aparece na descrição
  const tags = [TIPO_LABEL[p.tipo] || p.tipo];
  if (p.elemento !== "nenhum") tags.push(ELEMENTOS[p.elemento].nome);

  // o resumo saiu do card, então aparece aqui no modal; o perfil completo
  // (quando existir) entra embaixo dele
  const body = p.perfil ? `${p.resumo}\n\n${p.perfil}` : p.resumo;

  return {
    eyebrow: tags.join(" · "),
    title: p.nome,
    subtitle: p.titulo,
    body,
  };
}
