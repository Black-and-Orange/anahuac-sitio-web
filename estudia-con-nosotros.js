/* =============================================================================
   VIDA UNIVERSITARIA (Estudia con nosotros) — comportamiento propio de la página.

   Se carga DESPUÉS de script.js (tema) y psicologia.js (pestañas del plan de
   estudios, reutilizadas en M2; el filtro de teléfono del formulario y los
   carruseles quedan inertes si no existen sus elementos).

   Aquí solo vive:
   1) La barra con CTA fijo en móvil (dos botones), que aparece al pasar el hero
      y se oculta mientras el formulario de M12 (#contacto) o el footer están en
      pantalla.
   2) El año automático del copyright del footer.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     1) Barra con CTA fijo en móvil (< 768px, lo decide el CSS).
     Visible solo cuando: el hero YA pasó, #contacto NO está en pantalla (para no
     competir con el formulario) y el footer NO está en pantalla.
     --------------------------------------------------------------------------- */
  const bar = document.querySelector("[data-ecn-ctabar]");
  const hero = document.getElementById("inicio");
  const contacto = document.getElementById("contacto");
  const footer = document.querySelector(".site-footer");

  if (bar && hero && "IntersectionObserver" in window) {
    bar.hidden = false; /* existe en el DOM; el CSS decide si se muestra por ancho */

    let heroVisible = true; /* la página arranca en el hero */
    let contactoVisible = false;
    let footerVisible = false;

    function update() {
      const show = !heroVisible && !contactoVisible && !footerVisible;
      bar.classList.toggle("is-visible", show);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          else if (entry.target === contacto) contactoVisible = entry.isIntersecting;
          else if (entry.target === footer) footerVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0 }
    );

    io.observe(hero);
    if (contacto) io.observe(contacto);
    if (footer) io.observe(footer);
    update();
  }

  /* ---------------------------------------------------------------------------
     2) M2 — Showcase de experiencias: una a la vez, navegable por las categorías,
     las flechas y swipe. Las 7 diapositivas viven en el DOM (bien para SEO).
     --------------------------------------------------------------------------- */
  const show = document.querySelector("[data-ecn-show]");
  if (show) {
    const sec = show.closest("section");
    const slides = Array.from(show.querySelectorAll(".ecn-show-slide"));
    const navbtns = Array.from(sec.querySelectorAll(".ecn-show-navbtn"));
    const prev = sec.querySelector("[data-ecn-show-prev]");
    const next = sec.querySelector("[data-ecn-show-next]");
    let i = 0;

    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
      navbtns.forEach((b, k) => {
        b.classList.toggle("is-active", k === i);
        b.setAttribute("aria-selected", k === i ? "true" : "false");
      });
    }

    navbtns.forEach((b, k) => b.addEventListener("click", () => go(k)));
    if (prev) prev.addEventListener("click", () => go(i - 1));
    if (next) next.addEventListener("click", () => go(i + 1));

    /* Swipe táctil sobre la diapositiva. */
    let x0 = null;
    show.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    show.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* ---------------------------------------------------------------------------
     3) Año automático del copyright (el footer no debe quedar fijado a un año).
     --------------------------------------------------------------------------- */
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
