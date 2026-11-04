/* =============================================================================
   VIDA UNIVERSITARIA — comportamiento propio de la página.
   Se carga DESPUÉS de script.js (nav, scroll-reveal, dropdowns). Aquí solo:
   1) Barra con CTA fijo en móvil (dos botones): aparece al pasar el hero y se
      oculta mientras el formulario (#contacto) o el footer están en pantalla.
   2) Año automático del copyright.
   ========================================================================== */
(function () {
  "use strict";

  const bar = document.querySelector("[data-vu-ctabar]");
  const hero = document.getElementById("inicio");
  const contacto = document.getElementById("contacto");
  const footer = document.querySelector(".site-footer");

  if (bar && hero && "IntersectionObserver" in window) {
    bar.hidden = false;
    let heroVisible = true, contactoVisible = false, footerVisible = false;
    function update() {
      bar.classList.toggle("is-visible", !heroVisible && !contactoVisible && !footerVisible);
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        else if (entry.target === contacto) contactoVisible = entry.isIntersecting;
        else if (entry.target === footer) footerVisible = entry.isIntersecting;
      });
      update();
    }, { threshold: 0 });
    io.observe(hero);
    if (contacto) io.observe(contacto);
    if (footer) io.observe(footer);
    update();
  }

  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
