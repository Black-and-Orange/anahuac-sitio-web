/* =============================================================================
   CONTACTO — comportamiento propio de la página.

   Se carga DESPUÉS de script.js (tema, header, reveal) y psicologia.js (el
   dropdown custom .js-select del agendador y del formulario quedan enganchados
   ahí; el resto de interacciones del molde quedan inertes si no existen sus
   elementos).

   Aquí solo vive:
   1) La barra con CTA fijo en móvil (dos botones), que aparece al pasar el hero
      y se oculta mientras el agendador (#agenda), el formulario (#formulario) o
      el footer están en pantalla.
   2) El año automático del copyright del footer.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     1) Barra con CTA fijo en móvil (< 768px, lo decide el CSS).
     Visible solo cuando: el hero YA pasó, y ni #agenda ni #formulario ni el
     footer están en pantalla (para no competir con el agendador ni el form).
     --------------------------------------------------------------------------- */
  const bar = document.querySelector("[data-cto-ctabar]");
  const hero = document.getElementById("inicio");
  const agenda = document.getElementById("agenda");
  const formulario = document.getElementById("formulario");
  const footer = document.querySelector(".site-footer");

  if (bar && hero && "IntersectionObserver" in window) {
    bar.hidden = false; /* existe en el DOM; el CSS decide si se muestra por ancho */

    let heroVisible = true; /* la página arranca en el hero */
    let agendaVisible = false;
    let formVisible = false;
    let footerVisible = false;

    function update() {
      const show = !heroVisible && !agendaVisible && !formVisible && !footerVisible;
      bar.classList.toggle("is-visible", show);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          else if (entry.target === agenda) agendaVisible = entry.isIntersecting;
          else if (entry.target === formulario) formVisible = entry.isIntersecting;
          else if (entry.target === footer) footerVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0 }
    );

    io.observe(hero);
    if (agenda) io.observe(agenda);
    if (formulario) io.observe(formulario);
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
