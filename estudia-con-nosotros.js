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
     2) Año automático del copyright (el footer no debe quedar fijado a un año).
     --------------------------------------------------------------------------- */
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
