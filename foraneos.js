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

  /* ---- Mapa de servicios: dos niveles de filtro ----
     Primero el campus, que cambia el listado entero, y después el área.
     Los dos son mejora progresiva: sin JS se ven todos los lugares de los dos
     campus, que es información útil, no una pantalla rota. Por eso el filtro de
     área nace oculto en el HTML y solo se revela aquí. */
  const mapa = document.querySelector(".for-mapa");

  if (mapa) {
    const tabsCampus = mapa.querySelector(".for-mapa-campus");
    const filtros = mapa.querySelector(".for-mapa-filtros");
    const lugares = mapa.querySelectorAll(".for-lugar");
    const nombreCampus = mapa.querySelector("[data-campus-nombre]");
    const paginador = mapa.querySelector(".for-mapa-paginador");
    const botonVerMas = mapa.querySelector("[data-ver-mas]");
    const conteo = mapa.querySelector("[data-conteo]");
    const selectCategoria = mapa.querySelector("[data-filtro-select]");
    const modalUbicacion = mapa.querySelector("[data-ubicacion-modal]");
    const dialogoUbicacion = modalUbicacion?.querySelector("[role='dialog']");
    const tituloUbicacion = modalUbicacion?.querySelector("[data-ubicacion-titulo]");
    const metaUbicacion = modalUbicacion?.querySelector("[data-ubicacion-meta]");
    const etiquetaUbicacion = modalUbicacion?.querySelector("[data-ubicacion-etiqueta]");
    const mapaUbicacion = modalUbicacion?.querySelector("[data-ubicacion-mapa]");
    const enlaceUbicacion = modalUbicacion?.querySelector("[data-ubicacion-enlace]");

    /* Las áreas generales agrupan los tipos concretos sin borrar ese detalle de
       las tarjetas. Cultura puede compartir lugares con otra área: un cine o un
       mercado siguen siendo entretenimiento/servicio y también una referencia
       cultural. Esas excepciones se declaran en el HTML con `data-area-extra`. */
    const serviciosPorArea = {
      salud: ["clinicas", "farmacias"],
      entretenimiento: ["plazas", "gimnasios"],
      servicios: ["supermercados", "lavanderias"],
      religion: ["templos"],
      cultura: []
    };

    /* Cuántas tarjetas se muestran de golpe. En móvil cada tarjeta ocupa un
       renglón entero, así que diez de golpe son diez pantallas de scroll: ahí
       el paso baja a tres. */
    const anchoMovil = window.matchMedia("(max-width: 640px)");
    const paso = () => (anchoMovil.matches ? 3 : 10);
    let mostradas = paso();

    /* Estado de los dos filtros. Se aplican juntos: cada tarjeta tiene que
       cumplir campus Y área, y cambiar uno no deshace el otro. */
    let campus = "norte";
    let categoria = "todas";

    const aplicar = () => {
      /* Dos pasadas: primero se sabe cuántas cumplen los filtros y después se
         decide cuáles caben en la página actual. Contar y recortar a la vez
         daría un total equivocado. */
      const coinciden = [];
      lugares.forEach((lugar) => {
        const mismoCampus = lugar.dataset.campus === campus;
        const areasExtra = (lugar.dataset.areaExtra || "").split(" ").filter(Boolean);
        const mismaCategoria = categoria === "todas"
          || serviciosPorArea[categoria]?.includes(lugar.dataset.servicio)
          || areasExtra.includes(categoria);
        if (mismoCampus && mismaCategoria) coinciden.push(lugar);
        else lugar.hidden = true;
      });

      coinciden.forEach((lugar, i) => {
        lugar.hidden = i >= mostradas;
      });

      if (nombreCampus) {
        nombreCampus.textContent = campus === "sur" ? "Campus Sur" : "Campus Norte";
      }

      if (paginador) {
        const visibles = Math.min(mostradas, coinciden.length);
        /* El paginador solo aparece si de verdad hay algo que desplegar. */
        paginador.hidden = coinciden.length <= paso();
        if (conteo) {
          conteo.textContent = `Mostrando ${visibles} de ${coinciden.length} lugares`;
        }
        if (botonVerMas) {
          botonVerMas.hidden = mostradas >= coinciden.length;
        }
      }
    };

    /* Al cambiar cualquier filtro se vuelve a la primera página: dejar 20
       tarjetas desplegadas de un listado nuevo confundiría más que ayudar. */
    const reiniciar = () => {
      mostradas = paso();
    };

    /* Píldoras y select son el mismo filtro con dos formas. Se sincronizan para
       que girar el teléfono no deje un control diciendo una cosa y el otro
       diciendo otra. */
    const sincronizar = () => {
      if (filtros) {
        filtros.querySelectorAll(".for-filtro").forEach((b) => {
          b.classList.toggle("is-active", b.dataset.categoria === categoria);
        });
      }
      if (selectCategoria && selectCategoria.value !== categoria) {
        selectCategoria.value = categoria;
        /* El select mejorado repinta su etiqueta al recibir este evento. */
        selectCategoria.dispatchEvent(new Event("refresh"));
      }
    };

    if (tabsCampus && lugares.length) {
      tabsCampus.addEventListener("click", (evento) => {
        const boton = evento.target.closest(".for-campus-tab");
        if (!boton) return;
        campus = boton.dataset.campus;
        reiniciar();
        tabsCampus.querySelectorAll(".for-campus-tab").forEach((b) => {
          const activo = b === boton;
          b.classList.toggle("is-active", activo);
          b.setAttribute("aria-pressed", String(activo));
        });
        aplicar();
      });
    }

    if (filtros && lugares.length) {
      filtros.hidden = false;

      filtros.addEventListener("click", (evento) => {
        const boton = evento.target.closest(".for-filtro");
        if (!boton) return;
        categoria = boton.dataset.categoria;
        reiniciar();
        sincronizar();
        aplicar();
      });
    }

    if (selectCategoria) {
      selectCategoria.addEventListener("change", () => {
        categoria = selectCategoria.value;
        reiniciar();
        sincronizar();
        aplicar();
      });
    }

    /* ---- Propuesta de ubicación ----
       El directorio aún no tiene direcciones oficiales. El CTA abre una modal
       con Google Maps centrado en la zona ya presente en la ficha, sin convertir
       un dato aproximado en una ubicación exacta. El iframe se crea solo al abrir
       para no cargar un mapa externo por cada tarjeta. */
    let ultimoFoco = null;

    const cerrarUbicacion = () => {
      if (!modalUbicacion || modalUbicacion.hidden) return;
      modalUbicacion.hidden = true;
      if (mapaUbicacion) mapaUbicacion.replaceChildren();
      document.body.classList.remove("for-modal-abierta");
      if (ultimoFoco instanceof HTMLElement) ultimoFoco.focus();
    };

    const abrirUbicacion = (lugar, boton) => {
      if (!modalUbicacion || !dialogoUbicacion) return;
      const titulo = lugar.querySelector("h3")?.textContent.trim() || "Servicio cercano";
      const meta = lugar.querySelector(".for-lugar-meta")?.textContent.trim() || "Zona por confirmar";
      const etiqueta = lugar.querySelector(".for-lugar-etiqueta")?.textContent.trim() || "Mapa de servicios";
      const zona = meta.split(" · ")[0];
      const campus = lugar.dataset.campus === "sur" ? "Sur" : "Norte";
      const consulta = zona.toLowerCase().includes("dentro del campus")
        ? `Universidad Anáhuac México Campus ${campus}`
        : `${zona}, México`;
      const consultaCodificada = encodeURIComponent(consulta);

      ultimoFoco = boton;
      if (tituloUbicacion) tituloUbicacion.textContent = titulo;
      if (metaUbicacion) metaUbicacion.textContent = meta;
      if (etiquetaUbicacion) etiquetaUbicacion.textContent = etiqueta;
      if (mapaUbicacion) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.google.com/maps?q=${consultaCodificada}&output=embed`;
        iframe.title = `Mapa de Google Maps: ${consulta}`;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.allowFullscreen = true;
        mapaUbicacion.replaceChildren(iframe);
      }
      if (enlaceUbicacion) {
        enlaceUbicacion.href = `https://www.google.com/maps/search/?api=1&query=${consultaCodificada}`;
        enlaceUbicacion.setAttribute("aria-label", `Ver ${consulta} en Google Maps (abre en una pestaña nueva)`);
      }
      modalUbicacion.hidden = false;
      document.body.classList.add("for-modal-abierta");
      dialogoUbicacion.focus();
    };

    lugares.forEach((lugar) => {
      if (lugar.querySelector(".for-lugar-ubicacion")) return;
      const boton = document.createElement("button");
      boton.className = "for-lugar-ubicacion";
      boton.type = "button";
      boton.textContent = "Ver ubicación";
      boton.setAttribute("aria-haspopup", "dialog");
      const etiqueta = lugar.querySelector(".for-lugar-etiqueta");
      if (etiqueta) etiqueta.before(boton); else lugar.append(boton);
      lugar.classList.add("has-ubicacion");
      boton.addEventListener("click", () => abrirUbicacion(lugar, boton));
    });

    modalUbicacion?.querySelectorAll("[data-ubicacion-cerrar]").forEach((control) => {
      control.addEventListener("click", cerrarUbicacion);
    });

    document.addEventListener("keydown", (evento) => {
      if (!modalUbicacion || modalUbicacion.hidden) return;
      if (evento.key === "Escape") {
        cerrarUbicacion();
        return;
      }
      if (evento.key !== "Tab") return;
      const enfocables = [...modalUbicacion.querySelectorAll("button, [href], iframe, [tabindex]:not([tabindex='-1'])")]
        .filter((elemento) => !elemento.hidden);
      if (!enfocables.length) {
        evento.preventDefault();
        dialogoUbicacion?.focus();
        return;
      }
      const primero = enfocables[0];
      const ultimo = enfocables[enfocables.length - 1];
      if (evento.shiftKey && (document.activeElement === primero || document.activeElement === dialogoUbicacion)) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    });

    if (botonVerMas) {
      botonVerMas.addEventListener("click", () => {
        const primeraNueva = mostradas;
        mostradas += paso();
        aplicar();
        /* El foco pasa a la primera tarjeta recién mostrada: si no, quien navega
           con teclado se queda donde estaba y no sabe que aparecieron más. */
        const visibles = [...lugares].filter((l) => !l.hidden);
        const destino = visibles[primeraNueva];
        if (destino) {
          destino.setAttribute("tabindex", "-1");
          destino.focus({ preventScroll: true });
        }
      });
    }

    /* Al cruzar el breakpoint cambia el paso, así que se recalcula: si no, en
       escritorio quedarían tres tarjetas y un «Ver más» sin motivo. */
    anchoMovil.addEventListener("change", () => {
      reiniciar();
      aplicar();
    });

    if (lugares.length) aplicar();
  }
})();
