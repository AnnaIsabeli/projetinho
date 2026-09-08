/* ============================================================
   FEATURE / NAÇÕES (navegação em árvore + perfil completo)
   ============================================================
   Em vez de cards + modal, cada nação agora vira uma página de
   perfil completo dentro da própria aba, acessada por um item
   na sidebar (dentro do grupo "Novo Mundo" ou "Velho Mundo").

   O corpo do perfil (imagem de capa + blocos de texto/imagem)
   vem do campo "dossie" de cada nação — ver o formato completo
   no comentário no topo de nacoes.js.

   Depende de NACOES e ELEMENTOS (arquivos de dados). Não usa
   openModal — as nações não abrem mais em modal.

   Pra adicionar uma nação nova: basta colocar o objeto em
   NACOES (nacoes.js). O item na sidebar e a página de perfil
   são gerados automaticamente a partir daí.
   ============================================================ */

function renderNationNav() {
  ["novo", "velho"].forEach((mundo) => {
    const container = document.getElementById(`nav-sub-${mundo}`);
    if (!container) return;
    container.innerHTML = "";

    NACOES.filter((n) => n.mundo === mundo).forEach((nacao) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn tab-sub";
      btn.dataset.tab = nacao.id;
      btn.textContent = nacao.nome;
      container.appendChild(btn);
    });
  });
}

function renderNationDetails() {
  const container = document.getElementById("nation-detail-container");
  container.innerHTML = "";

  NACOES.forEach((nacao) => {
    const section = document.createElement("section");
    section.id = `tab-${nacao.id}`;
    section.className = "tab-panel";
    section.innerHTML = buildNationDetailHTML(nacao);
    container.appendChild(section);
  });
}

function buildNationDetailHTML(nacao) {
  const corEl = ELEMENTOS[nacao.elemento]?.cor || "#6b6880";
  const nomeEl = ELEMENTOS[nacao.elemento]?.nome || "—";
  const iconeEl = ELEMENTOS[nacao.elemento]?.icone;
  const mundoLabel = nacao.mundo === "novo" ? "Nação Elemental — Novo Mundo" : "Nação do Velho Mundo";

  const tagElemento = iconeEl
    ? `<span class="tag tag-el" style="border-color:${corEl}; color:${corEl}">
         <img src="${iconeEl}" alt="" class="tag-icon">${nomeEl}
       </span>`
    : `<span class="tag tag-el" style="border-color:${corEl}; color:${corEl}">${nomeEl}</span>`;

  return `
    <p class="detail-eyebrow" style="color:${corEl}">${mundoLabel}</p>
    <h2 class="detail-title">${nacao.nome}</h2>
    <p class="detail-subtitle">${nacao.conceito}</p>

    <div class="tag-row">
      ${tagElemento}
      <span class="tag">${nacao.vibe}</span>
    </div>

    <p class="detail-resumo">${nacao.resumo}</p>

    ${buildDossieHTML(nacao)}
  `;
}

// Monta o dossiê completo (capa + blocos de texto/imagem). Se a
// nação ainda não tiver "dossie" preenchido, mostra um aviso.
function buildDossieHTML(nacao) {
  const dossie = nacao.dossie;

  if (!dossie) {
    return `<p class="profile-pending">Dossiê completo ainda não escrito — por enquanto, só o resumo acima.</p>`;
  }

  const capaHTML = dossie.capa
    ? `<img src="${dossie.capa}" alt="Imagem de capa de ${nacao.nome}" class="dossie-capa">`
    : "";

  const blocosHTML = (dossie.blocos || [])
    .map((bloco) => {
      if (bloco.tipo === "imagem") {
        const legenda = bloco.legenda ? `<figcaption>${bloco.legenda}</figcaption>` : "";
        return `<figure class="dossie-bloco-imagem">
          <img src="${bloco.src}" alt="${bloco.legenda || nacao.nome}">
          ${legenda}
        </figure>`;
      }
      return `<p class="dossie-bloco-texto">${bloco.texto}</p>`;
    })
    .join("");

  return `<div class="detail-profile">${capaHTML}${blocosHTML}</div>`;
}
