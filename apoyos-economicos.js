/* =============================================
   APOYOS ECONÓMICOS — Page-specific interactions
   ============================================= */

(function () {
  "use strict";

  /* ===== PANORAMA CAROUSEL — scroll horizontal infinito, paso de 1 card =====
     Misma mecánica que el AREA CAROUSEL de Oferta: se clonan todas las cards
     para el loop sin costura y se normaliza la posición al terminar la transición. */
  const panoramaGrid = document.querySelector(".panorama-grid");
  const panoramaSection = document.querySelector(".apo-panorama");

  if (panoramaGrid && panoramaSection) {
    const originalCards = Array.from(panoramaGrid.querySelectorAll(".panorama-card"));
    const [prevBtn, nextBtn] = panoramaSection.querySelectorAll(".arrow-buttons button");
    const total = originalCards.length;
    const GAP = 20;

    if (total > 0) {
      /* Envolver las cards en un track flex */
      const track = document.createElement("div");
      track.className = "panorama-track";
      originalCards.forEach((card) => track.appendChild(card));
      panoramaGrid.appendChild(track);

      /* Clonar todas las cards para el loop infinito */
      originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.classList.add("is-clone");
        clone.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach((element) => {
          element.setAttribute("tabindex", "-1");
        });
        track.appendChild(clone);
      });

      let index = 0;
      let isAnimating = false;

      function visibleCount() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
      }

      function cardWidth() {
        const v = visibleCount();
        return (panoramaGrid.clientWidth - (v - 1) * GAP) / v;
      }

      function step() {
        return cardWidth() + GAP;
      }

      function slideTo(i, animate) {
        index = i;
        track.style.transition = animate
          ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          : "none";
        track.style.transform = "translateX(-" + index * step() + "px)";
      }

      function normalizeAfterTransition() {
        if (index >= total) {
          slideTo(index - total, false);
        } else if (index < 0) {
          slideTo(index + total, false);
        }
      }

      function next() {
        if (isAnimating) return;
        isAnimating = true;
        slideTo(index + 1, true);
        setTimeout(() => {
          normalizeAfterTransition();
          isAnimating = false;
        }, 520);
      }

      function prev() {
        if (isAnimating) return;
        isAnimating = true;
        if (index === 0) {
          /* Salto instantáneo al set de clones y animar hacia atrás sin costura */
          slideTo(total, false);
          void track.offsetHeight;
          slideTo(total - 1, true);
        } else {
          slideTo(index - 1, true);
        }
        setTimeout(() => {
          normalizeAfterTransition();
          isAnimating = false;
        }, 520);
      }

      /* Fijar el ancho de cada card según cuántas se ven y reposicionar */
      function layout() {
        const w = cardWidth();
        track.querySelectorAll(".panorama-card").forEach((c) => {
          c.style.flex = "0 0 " + w + "px";
          c.style.width = w + "px";
        });
        slideTo(index, false);
      }

      prevBtn?.addEventListener("click", prev);
      nextBtn?.addEventListener("click", next);

      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(layout, 150);
      });

      layout();
    }
  }

  /* ===== DETALLE — acordeón que arranca SIEMPRE cerrado =====
     Regla: una ficha solo se abre por una acción del usuario en esta sesión
     — clic en su cabecera, o clic en un "Ver detalles" del Panorama (#apoyo-…) —.
     Al (re)cargar la página debe estar todo cerrado, aunque la URL traiga un
     #hash o aunque el navegador recuerde qué <details> quedó abierto: refrescar
     nunca debe dejar un panel "pegado".

     openDetalleFromHash abre la ficha del hash actual (los <details> no lo hacen
     solos); name="detalle-apoyos" cierra el resto automáticamente. */
  function openDetalleFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (el && el.tagName.toLowerCase() === "details") {
      el.open = true;
    }
  }

  const detalles = Array.from(document.querySelectorAll(".detalle-item"));
  if (detalles.length) {
    /* Solo se considera "abierto a propósito" tras una acción del usuario en esta
       carga; en la carga inicial es false, así que todo arranca cerrado. */
    let userPicked = false;

    const list = document.querySelector(".detalle-list");
    if (list) {
      list.addEventListener("click", (e) => {
        if (e.target.closest("summary")) userPicked = true;
      });
    }

    /* "Ver detalles" del Panorama (enlaces a #apoyo-…): abren su ficha al hacer
       clic, aunque el hash ya fuera ese (no siempre dispara "hashchange"). */
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#apoyo-"]');
      if (!link) return;
      userPicked = true;
      const el = document.getElementById(
        decodeURIComponent(link.getAttribute("href").slice(1))
      );
      if (el && el.tagName.toLowerCase() === "details") el.open = true;
    });

    /* Navegación de hash en vivo (p. ej. enlace externo dentro de la sesión). */
    window.addEventListener("hashchange", () => {
      userPicked = true;
      openDetalleFromHash();
    });

    /* Mientras el usuario no haya elegido nada en esta carga, revertimos cualquier
       apertura (restauración del navegador, #hash en la URL al recargar, etc.). */
    function enforceClosed() {
      if (userPicked) return;
      detalles.forEach((d) => {
        if (d.open) d.open = false;
      });
    }

    const mo = new MutationObserver(enforceClosed);
    detalles.forEach((d) =>
      mo.observe(d, { attributes: true, attributeFilter: ["open"] })
    );

    /* Cubre bfcache (volver con el botón atrás), donde la restauración llega tras
       la carga inicial. */
    window.addEventListener("pageshow", enforceClosed);

    enforceClosed();
  }

  /* ===== DETALLE — imagen que cambia según la ficha abierta =====
     Cada imagen se nombra por el id de su <details> (p. ej. apoyo-deportivo.webp).
     Si la imagen de un apoyo aún no existe, cae automáticamente a la default.

     A dos columnas (≥1025px): la imagen vive en el aside (sticky) y cambia según
     el apoyo abierto. A una columna (≤1024px): el aside oculta su imagen y aquí
     movemos una imagen "inline" justo encima del panel abierto, para que la imagen
     correspondiente quede siempre a la vista junto a su ficha. */
  (function () {
    const section = document.querySelector(".apo-detalle");
    const media = section && section.querySelector(".detalle-media");
    if (!section || !media) return;

    const items = section.querySelectorAll(".detalle-item");
    const BASE = "assets/apoyos-economicos/";
    const DEFAULT_SRC = BASE + "default-detalle-apoyos.webp";
    const singleCol = window.matchMedia("(max-width: 1024px)");

    /* Imagen inline reutilizable: una sola, ya que el acordeón es exclusivo
       (name="detalle-apoyos" → solo un panel abierto a la vez). */
    const inline = new Image();
    inline.className = "detalle-media-inline";
    inline.alt = media.alt;
    inline.hidden = true;

    function openItem() {
      return Array.from(items).find((d) => d.open) || null;
    }

    function srcFor(item) {
      return item ? BASE + item.id + ".webp" : DEFAULT_SRC;
    }

    /* Precarga: solo cambiamos el src cuando la imagen está lista, así no se ve
       un salto ni una imagen rota. Si la imagen del apoyo no existe → default. */
    function setSrc(imgEl, src) {
      if (imgEl.dataset.current === src) return;
      imgEl.dataset.current = src;
      const pre = new Image();
      pre.onload = function () {
        /* Si mientras precargaba se pidió otra imagen (abrir/cerrar rápido),
           esta ya no es la vigente: no la aplicamos para evitar un src obsoleto. */
        if (imgEl.dataset.current === src) imgEl.src = src;
      };
      pre.onerror = function () {
        if (src !== DEFAULT_SRC) {
          imgEl.dataset.current = "";
          setSrc(imgEl, DEFAULT_SRC);
        }
      };
      pre.src = src;
    }

    function update() {
      const open = openItem();
      if (singleCol.matches) {
        /* Una columna: la imagen del aside está oculta por CSS y la inline
           siempre se ve. Si hay un panel abierto, la colocamos encima de ese
           panel con su imagen (los paneles previos quedan arriba); si no hay
           ninguno abierto, la ponemos arriba de todo con la imagen default. */
        const anchor = open || items[0];
        anchor.parentNode.insertBefore(inline, anchor);
        inline.hidden = false;
        setSrc(inline, srcFor(open)); /* srcFor(null) → default */
      } else {
        /* Dos columnas: usamos la imagen del aside y ocultamos la inline. */
        inline.hidden = true;
        setSrc(media, srcFor(open));
      }
    }

    items.forEach((d) => d.addEventListener("toggle", update));
    singleCol.addEventListener("change", update);
    update();
  })();

  /* ===== STEP TIMELINE ===== */
  const stepDots = document.querySelectorAll(".step-dot[data-step]");
  const stepPanels = document.querySelectorAll(".step-panel[data-panel]");

  stepDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = dot.dataset.step;

      /* Update dots */
      stepDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");

      /* Update panels */
      stepPanels.forEach((p) => p.classList.remove("active"));
      const target = document.querySelector(`.step-panel[data-panel="${idx}"]`);
      if (target) target.classList.add("active");
    });
  });

  /* ===== PASOS (Opción A) — navegación por número en móvil =====
     A ≤640px la CSS muestra solo la card .is-active; aquí conmutamos cuál lo es.
     En desktop/tablet la clase no tiene efecto visual (se ven todas las cards). */
  (function () {
    const section = document.getElementById("pasos-v1");
    if (!section) return;
    const nav = section.querySelector(".steps-nav");
    const cards = Array.from(section.querySelectorAll(".step-card"));
    if (!nav || !cards.length) return;

    nav.replaceChildren();
    const navDots = cards.map((card, index) => {
      const stepNumber = index + 1;
      const button = document.createElement("button");
      const cardId = card.id || "support-step-" + stepNumber;
      card.id = cardId;
      button.className = "steps-nav-dot";
      button.type = "button";
      button.dataset.goto = String(index);
      button.setAttribute("aria-label", "Ver paso " + stepNumber);
      button.setAttribute("aria-controls", cardId);
      button.textContent = String(stepNumber);
      nav.appendChild(button);
      return button;
    });

    function selectStep(index) {
      navDots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("active", isActive);
        if (isActive) {
          dot.setAttribute("aria-current", "step");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
      cards.forEach((card, cardIndex) => {
        card.classList.toggle("is-active", cardIndex === index);
      });
    }

    navDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.dataset.goto);
        selectStep(idx);
      });
    });

    selectStep(0);
  })();

  /* ===== PROPEDÉUTICOS TABS (Medicina / Música) ===== */
  const propTabs = document.querySelectorAll(".prop-tab[data-prop]");
  const propPanels = document.querySelectorAll(".prop-panel[data-prop-panel]");

  propTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = tab.dataset.prop;

      propTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      propPanels.forEach((p) => p.classList.remove("active"));
      const target = document.querySelector(`.prop-panel[data-prop-panel="${idx}"]`);
      if (target) target.classList.add("active");
    });
  });

  /* ===== ASESORÍA (asesor dinámico por estado) ===== */
  /* g: género para el color de la foto placeholder (m = naranja, f = morado).
     Inferido por nombre; ajustar si algún caso está mal. */
  const asesores = {
    "Aguascalientes": { nombre: "Edwin Florencio Jarquín Santiago", wa: "https://wa.link/h5vrw3", g: "m" },
    "Baja California": { nombre: "Oscar Arturo Castañon Menendez", wa: "https://api.whatsapp.com/message/GKSPG6KF42FTO1?autoload=1&app_absent=1", g: "m" },
    "Baja California Sur": { nombre: "Fernanda Monter", wa: "https://wa.me/message/ZWI26366OPPPP1", g: "f" },
    "Campeche": { nombre: "María Fernanda Vázquez Corona", wa: "https://wa.me/5215548110765", g: "f" },
    "Chiapas": { nombre: "María Fernanda García Toyos", wa: "https://wa.me/+525548114482", g: "f" },
    "Chihuahua": { nombre: "Juan Pablo Vargas Casarín", wa: "https://api.whatsapp.com/send?phone=5662182965", g: "m" },
    "Ciudad de México": { nombre: "Alyn Guerrero Camarena", wa: "https://wa.me/5215534118914", g: "f" },
    "Coahuila": { nombre: "Oscar Arturo Castañon Menendez", wa: "https://api.whatsapp.com/message/GKSPG6KF42FTO1?autoload=1&app_absent=2", g: "m" },
    "Colima": { nombre: "Juan Pablo Vargas Casarín", wa: "https://api.whatsapp.com/send?phone=5662182969", g: "m" },
    "Durango": { nombre: "Oscar Arturo Castañon Menendez", wa: "https://api.whatsapp.com/message/GKSPG6KF42FTO1?autoload=1&app_absent=0", g: "m" },
    "Estado de México": { nombre: "Alyn Guerrero Camarena", wa: "https://wa.me/5215534118914", g: "f" },
    "Guanajuato": { nombre: "María Fernanda García Toyos", wa: "https://wa.me/+525548114482", g: "f" },
    "Guerrero": { nombre: "Brenda Machuca Berdejo", wa: "https://wa.link/4716vj", g: "f" },
    "Hidalgo": { nombre: "María Fernanda García Toyos", wa: "https://wa.me/+525548114482", g: "f" },
    "Jalisco": { nombre: "Angel René Islas López", wa: "https://wa.me/message/GS5JH3BWTERXN1", g: "m" },
    "Michoacán": { nombre: "María Fernanda García Toyos", wa: "https://wa.me/+525548114482", g: "f" },
    "Morelos": { nombre: "Brenda Machuca Berdejo", wa: "https://wa.link/4716vj", g: "f" },
    "Nayarit": { nombre: "Juan Pablo Vargas Casarín", wa: "https://api.whatsapp.com/send?phone=5662182966", g: "m" },
    "Nuevo León": { nombre: "Fernando Seemann Colombon", wa: "https://api.whatsapp.com/send?phone=525543694808", g: "m" },
    "Oaxaca": { nombre: "Edwin Florencio Jarquín Santiago", wa: "https://wa.link/h5vrw3", g: "m" },
    "Puebla": { nombre: "Aitana Plaza Miranda", wa: "https://wa.me/525543563739", g: "f" },
    "Querétaro": { nombre: "María Fernanda Vázquez Corona", wa: "https://wa.me/5215548110764", g: "f" },
    "Quintana Roo": { nombre: "Aitana Plaza Miranda", wa: "https://wa.me/525543563739", g: "f" },
    "San Luis Potosí": { nombre: "Juan Pablo Vargas Casarín", wa: "https://api.whatsapp.com/send?phone=5662182967", g: "m" },
    "Sinaloa": { nombre: "María Fernanda García Toyos", wa: "https://wa.me/+525548114482", g: "f" },
    "Sonora": { nombre: "Juan Pablo Vargas Casarín", wa: "https://api.whatsapp.com/send?phone=5662182971", g: "m" },
    "Tabasco": { nombre: "Erick Elías Morales Vázquez", wa: "https://wa.me/message/VUDKDBO7Y5SEC1", g: "m" },
    "Tamaulipas": { nombre: "Oscar Arturo Castañon Menendez", wa: "https://api.whatsapp.com/message/GKSPG6KF42FTO1?autoload=1&app_absent=3", g: "m" },
    "Tlaxcala": { nombre: "Carla Villanueva Hernández", wa: "http://wa.me/525549553708", g: "f" },
    "Veracruz": { nombre: "Jennifer Alexa Domínguez Castillo", wa: "https://wa.me/5215543694564", g: "f" },
    "Yucatán": { nombre: "María Fernanda Vázquez Corona", wa: "https://wa.me/5215548110763", g: "f" },
    "Zacatecas": { nombre: "Juan Pablo Vargas Casarín", wa: "https://api.whatsapp.com/send?phone=5662182968", g: "m" },
    "Colombia": { nombre: "Fernanda Monter", wa: "https://wa.me/message/ZWI26366OPPPP1", g: "f" },
    "El Salvador": { nombre: "Oscar Arturo Castañon Menendez", wa: "https://api.whatsapp.com/message/GKSPG6KF42FTO1?autoload=1&app_absent=4", g: "m" },
    "Venezuela": { nombre: "Angel René Islas López", wa: "https://wa.me/message/GS5JH3BWTERXN1", g: "m" },
    "Soy Extranjero": { nombre: "María Fernanda García Toyos", wa: "https://wa.me/+525548114482", g: "f" },
  };

  const regionSelect = document.getElementById("asesoria-region");
  const estadoSelect = document.getElementById("asesoria-estado");
  const preparatoriaSelect = document.getElementById("asesoria-preparatoria");
  const preparatoriaWrap = document.querySelector(".asesoria-preparatoria-wrap");
  if (regionSelect && estadoSelect && preparatoriaSelect && preparatoriaWrap) {
    const foto = document.querySelector(".asesor-foto");
    const nombreEl = document.querySelector(".asesor-nombre");
    const waEl = document.querySelector(".asesor-wa");

    const PAISES = [
      "Alemania", "Bolivia", "Brasil", "Canadá", "Chile", "Colombia",
      "Costa Rica", "Ecuador", "El Salvador", "España", "Estados Unidos",
      "Guatemala", "Holanda", "Honduras", "Inglaterra", "Israel", "Japón",
      "Nicaragua", "Panamá", "República Dominicana", "Suiza", "Venezuela",
    ];
    const ESTADOS_MEXICO = [
      "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
      "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
      "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo",
      "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
      "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
      "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán",
      "Zacatecas",
    ];

    /* Catálogo verificado contra el formulario público de Atención
       Preuniversitaria. Solo se incluyen planteles cuya ubicación en CDMX o
       Estado de México es explícita; "Otra preparatoria" cubre el resto. */
    const PREPARATORIAS_POR_ESTADO = {
      "Ciudad de México": [
        "CCH Plantel Azcapotzalco",
        "CECyT 11 Wilfrido Massieu",
        "CECyT 9 Juan de Dios Bátiz",
        "CECyT Plantel 1 Gonzalo Vázquez Vela",
        "Colegio Anglo Mexicano de Coyoacán",
        "Colegio Ciudad de México",
        "Colegio Francés del Pedregal",
        "Colegio Madrid",
        "Colegio Peterson Cuajimalpa",
        "Colegio Peterson Lomas",
        "Colegio Peterson Tlalpan",
        "Colegio Simón Bolívar del Pedregal",
        "Colegio Simón Bolívar Mixcoac",
        "Colegio St. John's Tlalpan",
        "Escuela Nacional Preparatoria Plantel 5 UNAM",
        "Instituto de Humanidades y Ciencias (INHUMYC)",
        "Instituto Miguel Ángel",
        "Instituto Pedregal",
        "Instituto Simón Bolívar de Xoco",
        "Prepa Anáhuac México Campus Cumbres",
        "Prepa Anáhuac México Campus Maddox",
        "Prepa Anáhuac México Campus Oxford",
        "Preparatoria Ibero Ciudad de México",
        "UVM Campus Roma",
        "Universidad Insurgentes Plantel San Ángel",
        "Universidad Insurgentes Plantel Xola",
        "Universidad La Salle A.C.",
        "Otra preparatoria",
      ],
      "Estado de México": [
        "Bachillerato Cumbres Toluca",
        "CCH Plantel Naucalpan",
        "Colegio Alemán Campus Norte",
        "Colegio Alemán Campus Poniente (La Herradura)",
        "Colegio Argos Toluca",
        "Colegio Cristóbal Colón Lomas Verdes",
        "Colegio Euro Texcoco",
        "Colegio Mano Amiga Chalco",
        "Colegio Mano Amiga Lerma",
        "Colegio Miraflores Toluca",
        "Colegio Nuevo Continente Campus Metepec",
        "Colegio Panamericano de Texcoco",
        "Escuela Sierra Nevada Interlomas",
        "Escuela Sierra Nevada San Mateo",
        "High School Kipling Campus Esmeralda",
        "High School Kipling Campus Satélite",
        "Instituto Campestre de Ciencias y Artes de Metepec",
        "Instituto Juventud del Estado de México",
        "Instituto México de Toluca",
        "Instituto Oriente Arboledas",
        "Instituto Tepeyac Coacalco",
        "Instituto Tepeyac Cuautitlán",
        "Instituto Thomas Jefferson Esmeralda",
        "La Salle Arboledas",
        "La Salle Boulevares",
        "La Salle Esmeralda",
        "La Salle Nezahualcóyotl Bachillerato",
        "Liceo del Valle de Toluca",
        "Prepa Anáhuac Toluca",
        "Prepa Tec Metepec",
        "Prepa Tec Toluca",
        "Preparatoria CUDEC",
        "Tec de Monterrey Campus Lago de Guadalupe",
        "Otra preparatoria",
      ],
    };

    /* Región -> opciones del segundo dropdown (en orden de aparición). */
    const REGIONES = {
      "Extranjero": [...PAISES],
      "México": [...ESTADOS_MEXICO],
    };

    Object.keys(REGIONES).forEach((region) => {
      const opt = document.createElement("option");
      opt.value = region;
      opt.textContent = region;
      regionSelect.appendChild(opt);
    });

    const renderAsesor = (estado) => {
      const data = asesores[estado]
        || (regionSelect.value === "Extranjero" ? asesores["Soy Extranjero"] : null);
      if (!data) return;
      nombreEl.textContent = data.nombre;
      waEl.href = data.wa;
      foto.setAttribute("data-genero", data.g);
    };

    /* `revelar` en false mantiene el bloque oculto aunque el estado tenga
       catálogo: se usa en la carga inicial para que "Selecciona tu preparatoria"
       aparezca solo cuando la persona elige CDMX o Estado de México. */
    const poblarPreparatorias = (estado, revelar = true) => {
      const lista = revelar ? PREPARATORIAS_POR_ESTADO[estado] : null;
      preparatoriaSelect.innerHTML = "";
      preparatoriaWrap.hidden = !lista;

      if (!lista) {
        preparatoriaSelect.dispatchEvent(new Event("refresh"));
        return;
      }

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Selecciona tu preparatoria";
      placeholder.disabled = true;
      placeholder.selected = true;
      preparatoriaSelect.appendChild(placeholder);

      lista.forEach((preparatoria) => {
        const opt = document.createElement("option");
        opt.value = preparatoria;
        opt.textContent = preparatoria;
        preparatoriaSelect.appendChild(opt);
      });
      preparatoriaSelect.dispatchEvent(new Event("refresh"));
    };

    /* Rellena el segundo dropdown según el país y refresca la card y el cselect. */
    const poblarEstados = (region, preferido, revelarPrepa = true) => {
      const lista = REGIONES[region] || [];
      estadoSelect.innerHTML = "";
      lista.forEach((estado) => {
        const opt = document.createElement("option");
        opt.value = estado;
        opt.textContent = estado;
        estadoSelect.appendChild(opt);
      });
      const elegido = preferido && lista.includes(preferido) ? preferido : lista[0];
      estadoSelect.value = elegido;
      estadoSelect.dispatchEvent(new Event("refresh"));
      renderAsesor(elegido);
      poblarPreparatorias(elegido, revelarPrepa);
    };

    /* Sin estado preferido: arranca en el primero del catálogo (Aguascalientes)
       y con el bloque de preparatoria oculto. */
    const regionInicial = "México";
    regionSelect.value = regionInicial;
    poblarEstados(regionInicial, null, false);

    regionSelect.addEventListener("change", () => poblarEstados(regionSelect.value));
    estadoSelect.addEventListener("change", () => {
      renderAsesor(estadoSelect.value);
      poblarPreparatorias(estadoSelect.value);
    });

    /* Reemplazar los <select> nativos por el dropdown propio (tras poblarlos). */
    if (window.enhanceSelect) {
      window.enhanceSelect(regionSelect);
      window.enhanceSelect(estadoSelect);
      window.enhanceSelect(preparatoriaSelect);
    }
  }

  /* El menú móvil compartido permanece fuera del orden de foco mientras está cerrado.
     Esta sincronización es local a la LP; no modifica el componente global. */
  const localMobileMenu = document.querySelector(".mobile-menu");
  if (localMobileMenu) {
    const syncMobileMenuInert = () => {
      localMobileMenu.inert = localMobileMenu.getAttribute("aria-hidden") !== "false";
    };
    new MutationObserver(syncMobileMenuInert).observe(localMobileMenu, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
    });
    syncMobileMenuInert();
  }

  /* ===== TELÉFONO — solo números (y + - ( ) espacio) ===== */
  const telInput = document.querySelector('.apo-form-card input[type="tel"]');
  if (telInput) {
    telInput.setAttribute("inputmode", "tel");
    telInput.addEventListener("input", () => {
      const limpio = telInput.value.replace(/[^\d+\-()\s]/g, "");
      if (limpio !== telInput.value) {
        const pos = telInput.selectionStart - (telInput.value.length - limpio.length);
        telInput.value = limpio;
        /* Reposicionar el cursor tras eliminar el carácter no válido */
        try { telInput.setSelectionRange(pos, pos); } catch (e) {}
      }
    });
  }

  /* ===== FORM SUBMIT ===== */
  const apoForm = document.querySelector(".apo-form");
  if (apoForm) {
    apoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = apoForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = "¡Enviado!";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        apoForm.reset();
      }, 2000);
    });
  }
})();
