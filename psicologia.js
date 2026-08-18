/* =============================================
   LICENCIATURA (base: Psicología) — Page-specific JS
   La navegación, el reveal-on-scroll y el facade de YouTube
   (data-yt-id) los maneja el script.js compartido.
   Este archivo queda reservado para la lógica propia de los
   módulos que se irán agregando (plan de estudios, FAQ, formulario…).
   ============================================= */
/* ===== Módulo 5 — Plan de estudios: tabs por semestre (patrón ARIA tabs) =====
   Roving tabindex + flechas/Home/End para navegación por teclado. */
(function () {
  "use strict";

  const tablist = document.querySelector(".plan-tabs-nav");
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll(".plan-tab"));
  if (!tabs.length) return;

  /* En ≤540px la barra de tabs se cambia por un dropdown: el <select> nativo
     (mejorado a .cselect por enhanceSelect) comparte el estado con los tabs. */
  const select = document.querySelector(".plan-tabs-select");
  let syncing = false;

  function activate(tab, setFocus) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) {
        panel.classList.toggle("is-active", on);
        panel.hidden = !on;
      }
    });
    /* Sincroniza el dropdown: dispara 'change' para que el .cselect refresque su
       etiqueta. La guarda evita el bucle con nuestro propio listener de 'change'. */
    if (select && select.value !== tab.id) {
      syncing = true;
      select.value = tab.id;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      syncing = false;
    }
    if (setFocus) tab.focus();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab));
  });

  if (select) {
    select.addEventListener("change", () => {
      if (syncing) return;
      const tab = tabs.find((t) => t.id === select.value);
      if (tab) activate(tab);
    });
  }

  tablist.addEventListener("keydown", (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === "Home") next = tabs[0];
    else if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      activate(next, true);
    }
  });
})();

/* ===== Módulo 5 — Video de los "Minors" en un modal (con fallback a YouTube) =====
   El enlace conserva su href a YouTube; si hay JS, lo abrimos embebido aquí. */
(function () {
  "use strict";

  const modal = document.getElementById("minors-modal");
  const links = Array.from(document.querySelectorAll("[data-yt-modal]"));
  if (!modal || !links.length) return;

  const frame = modal.querySelector("[data-yt-target]");
  const closeBtn = modal.querySelector(".plan-video-close");
  let lastFocus = null;

  function open(id) {
    lastFocus = document.activeElement;
    frame.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = "Video sobre los Minors de la Anáhuac";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    frame.appendChild(iframe);
    modal.hidden = false;
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    frame.innerHTML = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      open(link.dataset.ytModal);
    });
  });

  modal.querySelectorAll("[data-close]").forEach((el) =>
    el.addEventListener("click", close)
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

/* ===== Módulo 5 — Campo laboral: selector con imagen que cambia =====
   Lista de cards seleccionables (.campo-tile) que actualizan la imagen de
   preview (.campo-media). Precarga la imagen antes de aplicarla para evitar
   parpadeos; si la imagen del ámbito no existe, conserva la vigente. */
(function () {
  "use strict";

  const list = document.querySelector(".campo-list");
  const preview = document.querySelector(".campo-preview");
  const media = document.querySelector(".campo-media");
  if (!list || !preview || !media) return;

  const tiles = Array.from(list.querySelectorAll(".campo-tile"));
  if (!tiles.length) return;

  /* ≤900px el contenido se apila: el preview lateral se oculta por CSS y aquí
     movemos una imagen inline justo encima de la card activa (patrón de apoyos). */
  const singleCol = window.matchMedia("(max-width: 900px)");

  const inline = new Image();
  inline.className = "campo-media-inline";
  inline.hidden = true;

  /* Precarga: solo aplicamos el src cuando la imagen está lista (sin parpadeo).
     Si entre tanto se pidió otra, esta ya no es la vigente y se descarta. */
  function setSrc(imgEl, src, alt) {
    if (imgEl.dataset.current === src) return;
    imgEl.dataset.current = src;
    const pre = new Image();
    pre.onload = function () {
      if (imgEl.dataset.current === src) {
        imgEl.src = src;
        if (alt) imgEl.alt = alt;
      }
    };
    pre.src = src;
  }

  function activeTile() {
    return tiles.find((t) => t.classList.contains("is-active")) || tiles[0];
  }

  function update() {
    const tile = activeTile();
    if (singleCol.matches) {
      /* Una columna: imagen inline encima de la card activa. */
      tile.parentNode.insertBefore(inline, tile);
      inline.hidden = false;
      setSrc(inline, tile.dataset.img, tile.dataset.alt);
    } else {
      /* Dos columnas: imagen del preview lateral (sticky). */
      inline.hidden = true;
      setSrc(media, tile.dataset.img, tile.dataset.alt);
    }
  }

  function select(tile) {
    if (tile.classList.contains("is-active")) return;
    tiles.forEach((t) => {
      const on = t === tile;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-pressed", on ? "true" : "false");
    });
    update();
  }

  tiles.forEach((tile) => tile.addEventListener("click", () => select(tile)));
  singleCol.addEventListener("change", update);

  /* La imagen del preview ya trae el src de la card activa desde el HTML. */
  media.dataset.current = activeTile().dataset.img;
  update();
})();

/* ===== Módulo 12 — Campo WhatsApp/teléfono: solo dígitos =====
   type="tel" + inputmode/pattern no bloquean tecleo/pegado no numérico; aquí
   filtramos en vivo cualquier carácter que no sea 0-9 (conservando el cursor). */
(function () {
  "use strict";

  const tel = document.querySelector('.lic-form-card input[type="tel"]');
  if (!tel) return;

  tel.addEventListener("input", function () {
    const digits = tel.value.replace(/\D/g, "");
    if (digits !== tel.value) {
      const pos = tel.selectionStart - (tel.value.length - digits.length);
      tel.value = digits;
      try {
        tel.setSelectionRange(pos, pos);
      } catch (e) {
        /* setSelectionRange no aplica en algunos navegadores para type=tel */
      }
    }
  });
})();


/* ===== Módulo 8 — Carrusel infinito de profesores (4 visibles) =====
   Mismo principio que otros carruseles del sitio: se clonan las cards y, al
   pasar del set original, se reposiciona sin animación (bucle sin costura). */
(function () {
  "use strict";

  const carousel = document.querySelector(".colab-docentes-carousel");
  const track = document.querySelector(".colab-docentes-track");
  if (!carousel || !track) return;

  const originals = Array.from(track.children);
  const count = originals.length;
  if (count < 2) return;

  const gap = parseFloat(getComputedStyle(track).gap) || 20;
  const prev = document.querySelector(".colab-prev");
  const next = document.querySelector(".colab-next");

  /* Clonar todo el set para el bucle sin costura. */
  originals.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.classList.add("is-clone");
    clone.querySelectorAll("a, button").forEach((el) => (el.tabIndex = -1));
    track.appendChild(clone);
  });

  let index = 0;
  let animating = false;

  function step() {
    return originals[0].getBoundingClientRect().width + gap;
  }

  function slideTo(i, animate) {
    track.style.transition = animate
      ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
      : "none";
    track.style.transform = "translateX(" + -i * step() + "px)";
  }

  function goNext() {
    if (animating) return;
    animating = true;
    index += 1;
    slideTo(index, true);
    window.setTimeout(() => {
      if (index >= count) {
        index -= count;
        slideTo(index, false);
      }
      animating = false;
    }, 520);
  }

  function goPrev() {
    if (animating) return;
    animating = true;
    if (index === 0) {
      /* Saltar al set clonado (vista idéntica) y animar hacia la última. */
      slideTo(count, false);
      void track.offsetHeight; /* forzar reflow */
      index = count - 1;
      slideTo(index, true);
    } else {
      index -= 1;
      slideTo(index, true);
    }
    window.setTimeout(() => { animating = false; }, 520);
  }

  if (next) next.addEventListener("click", goNext);
  if (prev) prev.addEventListener("click", goPrev);

  /* Swipe táctil. */
  let x0 = null;
  carousel.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) (dx < 0 ? goNext : goPrev)();
    x0 = null;
  });

  /* El ancho de card cambia con el viewport: reposicionar sin animación. */
  let raf = null;
  window.addEventListener("resize", () => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => slideTo(index, false));
  });

  slideTo(0, false);
})();
