/* =============================================================================
   REVALIDACIÓN Y EQUIVALENCIA — comportamiento propio de la página.

   Se carga DESPUÉS de script.js (tema, header, reveal) y psicologia.js (que
   engancha las pestañas de documentos .plan-tabs y mejora los .js-select).

   Aquí solo vive:
   1) La barra con CTA fijo en móvil (dos botones), que aparece al pasar el hero
      y se oculta mientras el proceso (#proceso), los documentos (#documentos) o
      el footer están en pantalla.
   2) El año automático del copyright del footer.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     1) Barra con CTA fijo en móvil (< 768px, lo decide el CSS).
     Visible solo cuando: el hero YA pasó, y ni #proceso ni #documentos ni el
     footer están en pantalla (para no competir con los pasos del trámite).
     --------------------------------------------------------------------------- */
  const bar = document.querySelector("[data-cto-ctabar]");
  const hero = document.getElementById("inicio");
  const proceso = document.getElementById("proceso");
  const documentos = document.getElementById("documentos");
  const footer = document.querySelector(".site-footer");

  if (bar && hero && "IntersectionObserver" in window) {
    bar.hidden = false; /* existe en el DOM; el CSS decide si se muestra por ancho */

    let heroVisible = true; /* la página arranca en el hero */
    let procesoVisible = false;
    let documentosVisible = false;
    let footerVisible = false;

    function update() {
      const show =
        !heroVisible && !procesoVisible && !documentosVisible && !footerVisible;
      bar.classList.toggle("is-visible", show);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          else if (entry.target === proceso) procesoVisible = entry.isIntersecting;
          else if (entry.target === documentos) documentosVisible = entry.isIntersecting;
          else if (entry.target === footer) footerVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0 }
    );

    io.observe(hero);
    if (proceso) io.observe(proceso);
    if (documentos) io.observe(documentos);
    if (footer) io.observe(footer);
    update();
  }

  /* ---------------------------------------------------------------------------
     2) Año automático del copyright (el footer no debe quedar fijado a un año).
     --------------------------------------------------------------------------- */
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
