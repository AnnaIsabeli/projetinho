/* ============================================================
   FEATURE / TABS
   ============================================================
   Controla duas coisas:

   1) Troca de aba/página: qualquer botão com [data-tab="x"]
      ativa a section com id "tab-x" e desativa as outras.

   2) Grupos expansíveis da sidebar (Novo Mundo / Velho Mundo):
      clicar no título do grupo (.group-toggle) abre/fecha a
      lista de nações daquele mundo. Só um grupo fica aberto
      por vez (efeito acordeão).

   Precisa rodar DEPOIS de renderNationNav()/renderNationDetails()
   (nacaoFeature.js), porque os botões das nações são criados
   dinamicamente e o initTabs precisa encontrá-los prontos.
   ============================================================ */

function initTabs() {
  const panels = document.querySelectorAll(".tab-panel");

  function activateTab(target) {
    document.querySelectorAll("[data-tab]").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === target);
    });
    panels.forEach((p) => p.classList.toggle("active", p.id === `tab-${target}`));
  }

  function setGroupExpanded(group, expanded) {
    group.classList.toggle("expanded", expanded);
    const toggle = group.querySelector(".group-toggle");
    if (toggle) toggle.classList.toggle("active", expanded);
  }

  // --- grupos da sidebar (Novo Mundo / Velho Mundo) ---
  document.querySelectorAll(".group-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const group = toggle.closest(".nav-group");
      const jaAberto = group.classList.contains("expanded");

      document.querySelectorAll(".nav-group").forEach((g) => setGroupExpanded(g, false));

      if (!jaAberto) {
        setGroupExpanded(group, true);
        // se nenhuma nação desse grupo estiver ativa, ativa a primeira
        const jaTemAtiva = group.querySelector(".tab-sub.active");
        const primeira = group.querySelector(".tab-sub");
        if (primeira && !jaTemAtiva) activateTab(primeira.dataset.tab);
      }
    });
  });

  // --- qualquer botão com data-tab (abas de topo e nações) ---
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activateTab(btn.dataset.tab);

      const grupoPai = btn.closest(".nav-group");
      document.querySelectorAll(".nav-group").forEach((g) => setGroupExpanded(g, g === grupoPai));
    });
  });

  // --- estado inicial: Novo Mundo aberto, primeira nação ativa ---
  const grupoNovo = document.querySelector('.nav-group[data-group="novo"]');
  if (grupoNovo) {
    setGroupExpanded(grupoNovo, true);
    const primeira = grupoNovo.querySelector(".tab-sub");
    if (primeira) activateTab(primeira.dataset.tab);
  }
}
