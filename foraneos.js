/* =============================================
   FORÁNEOS — mejoras progresivas
   Todo lo de este archivo es opcional: la página funciona completa sin JS.
   Los filtros del mapa nacen ocultos en el HTML y solo se revelan aquí, de modo
   que quien no ejecute JS ve el listado completo en vez de unos filtros muertos.
   ============================================= */
(function () {
  "use strict";

  /* ---- Control de pausa del video del hero ----
     El video arranca solo (sin audio), así que necesita un control explícito.
     Si el sistema pide movimiento reducido, no arranca de entrada. */
  const video = document.querySelector(".for-hero-video");
  const btnPausa = document.querySelector(".for-video-pausa");

  if (video && btnPausa) {
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pintar = () => {
      const pausado = video.paused;
      btnPausa.textContent = pausado ? "Reproducir" : "Pausar";
      btnPausa.setAttribute("aria-label", pausado ? "Reproducir el video" : "Pausar el video");
    };

    if (reducido.matches) {
      video.removeAttribute("autoplay");
      video.pause();
    }

    btnPausa.addEventListener("click", () => {
      if (video.paused) video.play(); else video.pause();
      pintar();
    });
    video.addEventListener("play", pintar);
    video.addEventListener("pause", pintar);
    pintar();
  }

  /* ---- Precarga de las fotos de «¿Por qué la CDMX?» ----
     El componente cambia el `src` con un desvanecido de 200ms. Si la imagen no
     está en caché, al volver la opacidad todavía no hay píxeles que pintar y la
     foto se ve en blanco: es lo que pasaba al recorrer las tarjetas seguido.
     Precargarlas al terminar la carga inicial resuelve el parpadeo sin tocar el
     componente compartido. */
  const precargar = () => {
    document.querySelectorAll(".for-cdmx .path-card[data-img]").forEach((card) => {
      const img = new Image();
      img.src = card.dataset.img;
    });
  };

  if (document.readyState === "complete") precargar();
  else window.addEventListener("load", precargar, { once: true });

  /* ---- Filtros del mapa de servicios ----
     Se revelan solo si hay JS. Mientras el directorio no tenga datos reales, no
     hay nada que filtrar: se dejan ocultos para no ofrecer un control que no
     hace nada. En cuanto existan elementos [data-categoria] dentro de las
     columnas, los filtros aparecen y funcionan sin tocar este archivo. */
  const filtros = document.querySelector(".for-mapa-filtros");
  const servicios = document.querySelectorAll(".for-mapa [data-servicio]");

  if (filtros && servicios.length) {
    filtros.hidden = false;

    filtros.addEventListener("click", (evento) => {
      const boton = evento.target.closest(".for-filtro");
      if (!boton) return;

      const categoria = boton.dataset.categoria;
      filtros.querySelectorAll(".for-filtro").forEach((b) => {
        b.classList.toggle("is-active", b === boton);
      });

      servicios.forEach((servicio) => {
        const coincide = categoria === "todas" || servicio.dataset.servicio === categoria;
        servicio.hidden = !coincide;
      });
    });
  }
})();
