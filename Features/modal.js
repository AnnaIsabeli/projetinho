/* ============================================================
   FEATURE / MODAL
   ============================================================
   Abre/fecha a janela com o perfil completo de uma nação,
   personagem ou organização. Usado por todas as outras features
   — por isso precisa ser carregado antes delas no index.html.
   ============================================================ */

function openModal({ eyebrow, title, subtitle, body }) {
  const overlay = document.getElementById("modal-overlay");
  document.getElementById("modal-eyebrow").textContent = eyebrow || "";
  document.getElementById("modal-title").textContent = title || "";
  const subtitleEl = document.getElementById("modal-subtitle");
  subtitleEl.textContent = subtitle || "";
  subtitleEl.style.display = subtitle ? "block" : "none";
  document.getElementById("modal-body").textContent = body || "";

  overlay.classList.add("open");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

function initModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
