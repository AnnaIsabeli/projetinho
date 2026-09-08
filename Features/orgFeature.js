/* ============================================================
   FEATURE / CARDS DE ORGANIZAÇÕES
   ============================================================
   Depende de ORGANIZACOES (arquivo de dados) e de openModal
   (modal.js).
   ============================================================ */

function renderOrgCards() {
  const grid = document.getElementById("org-grid");
  grid.innerHTML = "";

  ORGANIZACOES.forEach((org) => {
    const card = document.createElement("button");
    card.className = "org-card";
    card.innerHTML = `<h3>${org.nome}</h3><p>${org.resumo}</p>`;
    card.addEventListener("click", () => openModal({
      eyebrow: "Organização",
      title: org.nome,
      subtitle: "",
      body: org.perfil,
    }));
    grid.appendChild(card);
  });
}
