/* =============================================
   LICENCIATURA (base: Psicología) — Page-specific JS
   La navegación, el reveal-on-scroll y el facade de YouTube
   (data-yt-id) los maneja el script.js compartido.
   Este archivo queda reservado para la lógica propia de los
   módulos que se irán agregando (plan de estudios, FAQ, formulario…).
   ============================================= */
(function () {
  "use strict";

  /* ===== Módulo 4 — Acordeón de materias que arranca SIEMPRE cerrado =====
     Chrome restaura el estado abierto de un <details> al recargar; forzamos
     cerrado hasta que el usuario abra uno en esta sesión (clic en su summary).
     name="plan-materias" ya cierra el resto automáticamente al abrir uno. */
  const items = Array.from(document.querySelectorAll(".plan-item"));
  if (!items.length) return;

  let userPicked = false;
  const acc = document.querySelector(".plan-accordion");
  if (acc) {
    acc.addEventListener("click", (e) => {
      if (e.target.closest("summary")) userPicked = true;
    });
  }

  function enforceClosed() {
    if (userPicked) return;
    items.forEach((d) => {
      if (d.open) d.open = false;
    });
  }

  const mo = new MutationObserver(enforceClosed);
  items.forEach((d) =>
    mo.observe(d, { attributes: true, attributeFilter: ["open"] })
  );

  /* Cubre bfcache (volver con el botón atrás). */
  window.addEventListener("pageshow", enforceClosed);
  enforceClosed();
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
