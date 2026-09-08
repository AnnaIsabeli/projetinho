/* ============================================================
   FEATURE / FILTROS E CARDS DE PERSONAGENS
   ============================================================
   Monta os chips de filtro (afiliação / tipo / elemento) e os
   cards de personagem. Depende de PERSONAGENS e ELEMENTOS
   (arquivos de dados) e de openModal (modal.js).
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

const activeFilters = { tipo: null, afiliacao: null, elemento: null };

function buildCharFilters() {
  const tipos = [...new Set(PERSONAGENS.map((p) => p.tipo))];
  const afiliacoes = [...new Set(PERSONAGENS.map((p) => p.afiliacao))];
  const elementos = [...new Set(PERSONAGENS.map((p) => p.elemento).filter((e) => e !== "nenhum"))];

  buildFilterGroup("filter-afiliacao", "Afiliação", afiliacoes, (v) => AFILIACAO_LABEL[v] || v, "afiliacao");
  buildFilterGroup("filter-tipo", "Tipo", tipos, (v) => TIPO_LABEL[v] || v, "tipo");
  buildFilterGroup(
    "filter-elemento",
    "Elemento",
    elementos,
    (v) => ELEMENTOS[v]?.nome || v,
    "elemento",
    (v) => ELEMENTOS[v]?.icone || null
  );
}

function buildFilterGroup(containerId, label, values, labelFn, filterKey, iconFn) {
  const container = document.getElementById(containerId);
  const groupLabel = document.createElement("span");
  groupLabel.className = "filter-group-label";
  groupLabel.textContent = label;
  container.appendChild(groupLabel);

  values.forEach((value) => {
    const chip = document.createElement("button");
    chip.className = "filter-chip";

    const icone = iconFn ? iconFn(value) : null;
    if (icone) {
      chip.innerHTML = `<img src="${icone}" alt="" class="chip-icon">${labelFn(value)}`;
    } else {
      chip.textContent = labelFn(value);
    }

    chip.addEventListener("click", () => {
      const isActive = activeFilters[filterKey] === value;
      activeFilters[filterKey] = isActive ? null : value;

      container.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      if (!isActive) chip.classList.add("active");

      renderCharCards();
    });
    container.appendChild(chip);
  });
}

function renderCharCards() {
  const grid = document.getElementById("char-grid");
  const empty = document.getElementById("char-empty");
  grid.innerHTML = "";

  const filtered = PERSONAGENS.filter((p) => {
    if (activeFilters.tipo && p.tipo !== activeFilters.tipo) return false;
    if (activeFilters.afiliacao && p.afiliacao !== activeFilters.afiliacao) return false;
    if (activeFilters.elemento && p.elemento !== activeFilters.elemento) return false;
    return true;
  });

  empty.style.display = filtered.length ? "none" : "block";

  filtered.forEach((p) => {
    const cor = ELEMENTOS[p.elemento]?.cor || "#6b6880";
    const iconeEl = ELEMENTOS[p.elemento]?.icone;
    const tagElemento = p.elemento !== "nenhum"
      ? (iconeEl
          ? `<span class="tag tag-el"><img src="${iconeEl}" alt="" class="tag-icon">${ELEMENTOS[p.elemento].nome}</span>`
          : `<span class="tag tag-el">${ELEMENTOS[p.elemento].nome}</span>`)
      : "";
    const portraitContent = iconeEl
      ? `<img src="${iconeEl}" alt="" class="portrait-icon">`
      : `<span class="portrait-glyph" style="border-color:${cor}"></span>`;

    const card = document.createElement("button");
    card.className = "char-card";
    card.style.setProperty("--el", cor);
    card.innerHTML = `
      <div class="card-portrait">${portraitContent}</div>
      <div class="card-body">
        <h3>${p.nome}</h3>
        <p class="char-title">${p.titulo}</p>
        <div class="tag-row">
          <span class="tag">${AFILIACAO_LABEL[p.afiliacao] || p.afiliacao}</span>
          <span class="tag">${TIPO_LABEL[p.tipo] || p.tipo}</span>
          ${tagElemento}
        </div>
        <p class="char-resumo">${p.resumo}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(buildCharModalContent(p)));
    grid.appendChild(card);
  });
}

function buildCharModalContent(p) {
  const tags = [AFILIACAO_LABEL[p.afiliacao] || p.afiliacao, TIPO_LABEL[p.tipo] || p.tipo];
  if (p.elemento !== "nenhum") tags.push(ELEMENTOS[p.elemento].nome);
  return {
    eyebrow: tags.join(" · "),
    title: p.nome,
    subtitle: p.titulo,
    body: p.perfil,
  };
}
