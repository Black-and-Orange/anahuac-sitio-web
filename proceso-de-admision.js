/* =============================================
   ADMISIONES — Page-specific interactions
   ============================================= */

(function () {
  "use strict";

  /* ===== STEP TIMELINE ===== */
  const stepDots = document.querySelectorAll(".step-dot[data-step]");
  const stepPanels = document.querySelectorAll(".step-panel[data-panel]");

  stepDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = dot.dataset.step;

      /* Update dots */
      stepDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");

      /* Update panels */
      stepPanels.forEach((p) => p.classList.remove("active"));
      const target = document.querySelector(`.step-panel[data-panel="${idx}"]`);
      if (target) target.classList.add("active");
    });
  });

  /* ===== PROPEDÉUTICOS TABS (Medicina / Música) ===== */
  const propTabs = document.querySelectorAll(".prop-tab[data-prop]");
  const propPanels = document.querySelectorAll(".prop-panel[data-prop-panel]");

  propTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = tab.dataset.prop;

      propTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      propPanels.forEach((p) => p.classList.remove("active"));
      const target = document.querySelector(`.prop-panel[data-prop-panel="${idx}"]`);
      if (target) target.classList.add("active");
    });
  });

  /* ===== FORM SUBMIT ===== */
  const admForm = document.querySelector(".adm-form");
  if (admForm) {
    admForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = admForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = "¡Enviado!";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        admForm.reset();
      }, 2000);
    });
  }
})();
