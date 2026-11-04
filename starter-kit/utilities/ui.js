/* ==========================================================================
   ui.js — UTILIDADES NEUTRAS DE UI (reutilizable)

   1) Menú móvil (hamburguesa + submenús acordeón)
   2) Scroll-reveal con IntersectionObserver (pareja de .reveal en base.css)

   Marca-agnóstico. Cárgalo con <script src="ui.js" defer></script>.
   Requiere en el HTML: .menu-toggle, .mobile-menu, y elementos [data-reveal].
   ========================================================================== */
(function () {
  "use strict";
  const body = document.body;

  /* ----- Header con estado al hacer scroll (opcional) ----- */
  window.addEventListener(
    "scroll",
    () => body.classList.toggle("scrolled", window.scrollY > 150),
    { passive: true }
  );

  /* ----- Menú móvil ----- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  const mobileSubnavs = document.querySelectorAll(".mobile-subnav");

  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    menuToggle?.setAttribute("aria-expanded", String(open));
    mobileMenu?.setAttribute("aria-hidden", String(!open));
  }

  menuToggle?.addEventListener("click", () =>
    setMenu(!body.classList.contains("menu-open"))
  );
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => setMenu(false))
  );

  mobileSubnavs.forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      mobileSubnavs.forEach((other) => {
        if (other !== button) {
          other.setAttribute("aria-expanded", "false");
          const m = other.nextElementSibling;
          if (m?.classList.contains("mobile-submenu")) m.style.display = "none";
        }
      });
      button.setAttribute("aria-expanded", String(!expanded));
      const submenu = button.nextElementSibling;
      if (submenu?.classList.contains("mobile-submenu")) {
        submenu.style.display = expanded ? "none" : "grid";
      }
    });
  });

  /* ----- Scroll-reveal ----- */
  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 60px" }
    );
    revealItems.forEach((item, i) => {
      // escalona en grupos de 5 para un efecto de cascada suave
      item.style.setProperty("--reveal-delay", `${Math.min(i % 5, 4) * 35}ms`);
      observer.observe(item);
    });
  } else {
    // sin soporte: mostrar todo
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
