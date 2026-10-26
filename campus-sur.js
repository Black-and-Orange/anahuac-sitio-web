/* =============================================================================
   CAMPUS NORTE — comportamiento propio de la página

   Se carga ANTES de script.js (el del tema). Solo gestiona lo específico de esta
   página; el carrusel (.campus-slider), el de eventos (.event-list), el acordeón
   del header y las animaciones reveal siguen viviendo en script.js.

   1) M4 — áreas de licenciatura: acordeón en móvil (1.ª abierta), siempre
      desplegadas en desktop.
   2) Barra con CTA fijo en móvil: aparece al pasar el hero, se oculta mientras
      M8 (#visita) o el footer están en pantalla.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     1) M4 — Acordeón de áreas (solo móvil)
     Desktop (>768px): todas las áreas desplegadas y el <summary> no pliega.
     Móvil (≤768px): solo la 1.ª abierta; el usuario abre/cierra el resto.
     --------------------------------------------------------------------------- */
  const areas = Array.from(document.querySelectorAll(".cs-area"));
  if (areas.length) {
    const mq = window.matchMedia("(max-width: 768px)");

    function syncAreas() {
      areas.forEach((area, i) => {
        area.open = mq.matches ? i === 0 : true;
      });
    }

    areas.forEach((area) => {
      const summary = area.querySelector("summary");
      if (!summary) return;
      /* En desktop el detalle está siempre abierto: el clic no debe plegarlo. */
      summary.addEventListener("click", (e) => {
        if (!mq.matches) e.preventDefault();
      });
    });

    syncAreas();
    /* Safari viejo expone addListener; el resto, addEventListener. */
    if (mq.addEventListener) mq.addEventListener("change", syncAreas);
    else if (mq.addListener) mq.addListener(syncAreas);
  }

  /* ---------------------------------------------------------------------------
     2) Barra con CTA fijo en móvil
     Visible solo cuando: el hero YA pasó, #visita NO está en pantalla (para no
     tapar el formulario) y el footer NO está en pantalla. En desktop el CSS la
     mantiene oculta (display:none), así que el observer es inocuo ahí.
     --------------------------------------------------------------------------- */
  const bar = document.querySelector("[data-cs-ctabar]");
  const hero = document.getElementById("inicio");
  const visita = document.getElementById("visita");
  const footer = document.querySelector(".site-footer");

  if (bar && hero && "IntersectionObserver" in window) {
    bar.hidden = false; /* existe en el DOM; el CSS decide si se muestra por ancho */

    let heroVisible = true; /* la página arranca en el hero */
    let visitaVisible = false;
    let footerVisible = false;

    function update() {
      const show = !heroVisible && !visitaVisible && !footerVisible;
      bar.classList.toggle("is-visible", show);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          else if (entry.target === visita) visitaVisible = entry.isIntersecting;
          else if (entry.target === footer) footerVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0 }
    );

    io.observe(hero);
    if (visita) io.observe(visita);
    if (footer) io.observe(footer);
    update();
  }
})();
