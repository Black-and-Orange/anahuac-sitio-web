/* =============================================================================
   CURSO PARA EXAMEN DE ADMISIÓN — comportamiento propio de la página.

   Se carga DESPUÉS de script.js (tema, header, reveal) y psicologia.js.

   Aquí vive:
   1) La barra con CTA fijo en móvil (dos botones), que aparece al pasar el hero
      y se oculta mientras las fechas (#fechas), el registro (#registro) o el
      footer están en pantalla (para no competir con el formulario).
   2) El año automático del copyright del footer.
   3) La carga del formulario de registro de HubSpot (embed v2).
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     1) Barra con CTA fijo en móvil (< 768px, lo decide el CSS).
     Visible solo cuando: el hero YA pasó, y ni #fechas ni #registro ni el footer
     están en pantalla.
     --------------------------------------------------------------------------- */
  const bar = document.querySelector("[data-cto-ctabar]");
  const hero = document.getElementById("inicio");
  const fechas = document.getElementById("fechas");
  const registro = document.getElementById("registro");
  const footer = document.querySelector(".site-footer");

  if (bar && hero && "IntersectionObserver" in window) {
    bar.hidden = false; /* existe en el DOM; el CSS decide si se muestra por ancho */

    let heroVisible = true; /* la página arranca en el hero */
    let fechasVisible = false;
    let registroVisible = false;
    let footerVisible = false;
    let inputFocused = false;

    function update() {
      const show =
        !heroVisible && !fechasVisible && !registroVisible && !footerVisible && !inputFocused;
      bar.classList.toggle("is-visible", show);
      bar.inert = !show;
      document.body.classList.toggle("curso-bar-visible", show && window.matchMedia("(max-width: 767px)").matches);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          else if (entry.target === fechas) fechasVisible = entry.isIntersecting;
          else if (entry.target === registro) registroVisible = entry.isIntersecting;
          else if (entry.target === footer) footerVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0 }
    );

    document.addEventListener("focusin", (event) => {
      inputFocused = event.target.matches("input, select, textarea");
      update();
    });
    document.addEventListener("focusout", () => { inputFocused = false; update(); });
    window.addEventListener("resize", update);
    io.observe(hero);
    if (fechas) io.observe(fechas);
    if (registro) io.observe(registro);
    if (footer) io.observe(footer);
    update();
  }

  /* ---------------------------------------------------------------------------
     2) Año automático del copyright.
     --------------------------------------------------------------------------- */
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------------------------------------------------------------------------
     3) Formulario de registro de HubSpot (embed v2).
     Carga el script oficial una sola vez y crea el formulario dentro del
     contenedor. Si no carga (sin red / bloqueado), muestra un enlace de respaldo
     para que el aspirante no se quede sin opción de registrarse.
     --------------------------------------------------------------------------- */
  const mount = document.getElementById("hubspot-form-registro");
  if (mount) {
    const portalId = mount.getAttribute("data-hubspot-portal");
    const formId = mount.getAttribute("data-hubspot-form");
    const region = mount.getAttribute("data-hubspot-region") || "na1";

    mount.innerHTML =
      '<p class="curso-form-loading">Cargando el formulario de registro…</p>';

    let done = false;
    function fallback() {
      if (done) return;
      done = true;
      mount.innerHTML =
        '<div class="curso-form-error">No pudimos cargar el formulario aquí. ' +
        '<a href="https://share.hsforms.com/1' +
        formId +
        '" target="_blank" rel="noopener">Abre el formulario de registro en una pestaña nueva ›</a></div>';
    }

    function createForm() {
      if (done) return;
      if (window.hbspt && window.hbspt.forms) {
        done = true;
        mount.innerHTML = "";
        window.hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          region: region,
          target: "#hubspot-form-registro",
        });
      } else {
        fallback();
      }
    }

    const existing = document.querySelector(
      'script[src^="https://js.hsforms.net/forms/embed/v2.js"], script[src^="//js.hsforms.net/forms/embed/v2.js"]'
    );
    if (window.hbspt && window.hbspt.forms) {
      createForm();
    } else if (existing) {
      existing.addEventListener("load", createForm);
      setTimeout(createForm, 2500);
    } else {
      const s = document.createElement("script");
      s.src = "https://js.hsforms.net/forms/embed/v2.js";
      s.async = true;
      s.addEventListener("load", createForm);
      s.addEventListener("error", fallback);
      document.body.appendChild(s);
      /* Respaldo por si el load no dispara createForm a tiempo. */
      setTimeout(createForm, 4000);
    }
  }
})();

/* Calendario informativo: próximas sesiones e historial, sin alterar HubSpot. */
(function () {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Cancun', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(new Date());
  const value = type => parts.find(part => part.type === type).value;
  const today = value('year') + '-' + value('month') + '-' + value('day');
  document.querySelectorAll('.curso-fechas-table > tbody > tr').forEach(row => {
    const list = row.querySelector('.curso-fechas-chips');
    if (!list) return;
    const past = [...list.children].filter(item => item.querySelector('time')?.dateTime < today);
    if (!past.length) return;
    const history = document.createElement('details');
    history.className = 'curso-fechas-historico';
    const summary = document.createElement('summary');
    summary.textContent = 'Fechas anteriores (' + past.length + ')';
    const archived = document.createElement('ul');
    archived.className = 'curso-fechas-chips';
    past.forEach(item => archived.appendChild(item));
    history.append(summary, archived);
    list.after(history);
    if (!list.children.length) {
      list.hidden = true;
      const empty = document.createElement('p');
      empty.className = 'curso-fechas-vacio';
      empty.textContent = 'Consulta las próximas sesiones con un asesor.';
      history.before(empty);
    }
  });
})();
