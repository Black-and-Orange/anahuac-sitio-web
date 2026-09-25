/* ==========================================================================
   prototipo.js — Animaciones de psicología (header compacto, parallax sutil, reveal)
   Parallax sutil en [data-parallax] (transform-only, rAF).
   El header compacto se maneja por CSS con la clase .scrolled que ya
   activa script.js; aquí NO ocultamos el header.
   Respeta prefers-reduced-motion (no hace nada si el usuario lo pide).
   ========================================================================== */
(function () {
  "use strict";
  const body = document.body;
  if (!body.classList.contains("pagina-psicologia")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const items = Array.from(document.querySelectorAll("[data-parallax]"));
  if (!items.length) return;

  let ticking = false;

  function updateParallax() {
    const vh = window.innerHeight;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue; // fuera de vista
      const factor = parseFloat(el.dataset.parallax) || 0.06;
      const delta = r.top + r.height / 2 - vh / 2; // respecto al centro del viewport
      let ty = -delta * factor;
      const cap = 26;
      ty = Math.max(-cap, Math.min(cap, ty));
      el.style.transform = `translateY(${ty.toFixed(1)}px) scale(1.08)`;
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", updateParallax, { passive: true });
  window.addEventListener("load", updateParallax);
  updateParallax();
})();
