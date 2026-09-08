/* ============================================================
   MAIN.JS — Ponto de entrada
   ============================================================
   Só chama as funções de inicialização de cada feature, na
   ordem certa, assim que a página termina de carregar.
   Se um dia quiser desligar uma parte do site (ex: os perfis
   de nação), é só comentar a linha correspondente aqui.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initModal();

  renderNationNav();
  renderNationDetails();
  initTabs();

  buildCharFilters();
  renderCharCards();

  renderOrgCards();
});