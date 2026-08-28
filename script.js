const body = document.body;
body.classList.add("ready");

/* Sticky header gradient — show after 150px scroll */
window.addEventListener("scroll", () => {
  body.classList.toggle("scrolled", window.scrollY > 150);
}, { passive: true });

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const mobileSubnavs = document.querySelectorAll(".mobile-subnav");
const pathCards = document.querySelectorAll(".path-card");

function setMenu(open) {
  body.classList.toggle("menu-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  mobileMenu?.setAttribute("aria-hidden", String(!open));
}

menuToggle?.addEventListener("click", () => {
  setMenu(!body.classList.contains("menu-open"));
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

mobileSubnavs.forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    /* Close all other submenus first */
    mobileSubnavs.forEach((other) => {
      if (other !== button) {
        other.setAttribute("aria-expanded", "false");
        const otherMenu = other.nextElementSibling;
        if (otherMenu?.classList.contains("mobile-submenu")) {
          otherMenu.style.display = "none";
        }
      }
    });

    button.setAttribute("aria-expanded", String(!expanded));
    const submenu = button.nextElementSibling;
    if (submenu?.classList.contains("mobile-submenu")) {
      submenu.style.display = expanded ? "none" : "grid";
    }
  });
});

const pathPhoto = document.querySelector(".path-photo");
const defaultPathImg = pathPhoto?.getAttribute("src");

/* Set first card as active by default */
if (pathCards.length > 0) {
  pathCards[0].classList.add("is-open");
}

pathCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    pathCards.forEach((item) => item.classList.remove("is-open"));
    card.classList.add("is-open");
    /* Switch background photo */
    const img = card.dataset.img;
    if (img && pathPhoto) {
      pathPhoto.style.opacity = "0";
      setTimeout(() => {
        pathPhoto.src = img;
        pathPhoto.style.opacity = "1";
      }, 200);
    }
  });
  /* No mouseleave handler — last hovered card stays active */
});

const revealItems = document.querySelectorAll("[data-reveal]");
const countItems = document.querySelectorAll("[data-count-to]");

function formatCount(value) {
  return Math.round(value).toLocaleString("es-MX");
}

function animateCount(item) {
  if (item.dataset.counted === "true") return;

  item.dataset.counted = "true";
  const target = Number(item.dataset.countTo || 0);
  const prefix = item.dataset.countPrefix || "";
  const suffix = item.dataset.countSuffix || "";
  const duration = 1200;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    item.textContent = `${prefix}${formatCount(target * eased)}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    } else {
      item.textContent = `${prefix}${formatCount(target)}${suffix}`;
    }
  }

  window.requestAnimationFrame(tick);
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 60px" }
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 35}ms`);
    revealObserver.observe(item);
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      revealItems.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 1.1) {
          item.classList.add("is-visible");
        }
      });
    }, 450);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  countItems.forEach((item) => countObserver.observe(item));
} else {
  countItems.forEach(animateCount);
}

document.querySelectorAll(".program-scroller").forEach((scroller) => {
  const section = scroller.closest(".programs");
  const originalCards = Array.from(scroller.querySelectorAll(".program-card"));
  const dots = section?.querySelector(".dots");
  const [prevButton, nextButton] = section ? Array.from(section.querySelectorAll(".arrow-buttons button")) : [];
  const totalOriginal = originalCards.length;

  if (!totalOriginal) return;

  /* --- Clone all cards and append for seamless infinite loop --- */
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.classList.add("is-clone");
    scroller.appendChild(clone);
  });

  const allCards = Array.from(scroller.querySelectorAll(".program-card"));

  function getStep() {
    const first = allCards[0];
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(scroller).columnGap || getComputedStyle(scroller).gap) || 0;
    return first.getBoundingClientRect().width + gap;
  }

  /* The scroll boundary where originals end and clones begin */
  function getLoopPoint() {
    return getStep() * totalOriginal;
  }

  function getCurrentIndex() {
    const step = getStep();
    if (!step) return 0;
    return Math.round(scroller.scrollLeft / step);
  }

  function getCanonicalIndex() {
    return ((getCurrentIndex() % totalOriginal) + totalOriginal) % totalOriginal;
  }

  /* --- Reset scroll when entering clone territory --- */
  let isResetting = false;

  function checkLoop() {
    if (isResetting) return;
    const step = getStep();
    const loopPoint = getLoopPoint();

    if (scroller.scrollLeft >= loopPoint) {
      isResetting = true;
      scroller.style.scrollBehavior = "auto";
      scroller.scrollLeft = scroller.scrollLeft - loopPoint;
      scroller.style.scrollBehavior = "";
      isResetting = false;
    } else if (scroller.scrollLeft < 0) {
      isResetting = true;
      scroller.style.scrollBehavior = "auto";
      scroller.scrollLeft = scroller.scrollLeft + loopPoint;
      scroller.style.scrollBehavior = "";
      isResetting = false;
    }
  }

  /* --- Dots (only for original cards) --- */
  function updateDots() {
    if (!dots) return;
    const canon = getCanonicalIndex();
    dots.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === canon);
      dot.setAttribute("aria-current", i === canon ? "true" : "false");
    });
  }

  if (dots && totalOriginal) {
    dots.replaceChildren();
    originalCards.forEach((card, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ver ${card.querySelector("h3")?.textContent || `licenciatura ${index + 1}`}`);
      dot.addEventListener("click", () => scrollToIndex(index));
      dots.appendChild(dot);
    });
    updateDots();
  }

  /* --- Scroll to a given index (smooth) --- */
  function scrollToIndex(index) {
    const step = getStep();
    scroller.scrollTo({ left: step * index, behavior: "smooth" });
  }

  /* --- Infinite arrow navigation --- */
  prevButton?.addEventListener("click", () => {
    const current = getCurrentIndex();
    if (current <= 0) {
      /* Jump to clone zone end, then animate back */
      isResetting = true;
      scroller.style.scrollBehavior = "auto";
      scroller.scrollLeft = getLoopPoint() + scroller.scrollLeft;
      scroller.style.scrollBehavior = "";
      isResetting = false;
      requestAnimationFrame(() => scrollToIndex(totalOriginal - 1));
    } else {
      scrollToIndex(current - 1);
    }
  });

  nextButton?.addEventListener("click", () => {
    scrollToIndex(getCurrentIndex() + 1);
  });

  /* --- On scroll: update dots + check loop boundary --- */
  scroller.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => {
      checkLoop();
      updateDots();
    });
  });
});

const eventList = document.querySelector(".event-list");
const eventItems = eventList ? Array.from(eventList.querySelectorAll("article")) : [];
const eventDots = document.querySelector(".event-dots");
const eventPrev = document.querySelector(".event-prev");
const eventNext = document.querySelector(".event-next");
const eventFilterButtons = document.querySelectorAll(".event-tags button[data-filter]");
const eventsPerPage = 3;
let activeEventPage = 0;
let activeEventFilter = "all";
let filteredEventItems = eventItems;

function renderEventPage(page) {
  if (!eventList || !eventDots || eventItems.length === 0) return;

  const totalPages = Math.max(1, Math.ceil(filteredEventItems.length / eventsPerPage));
  activeEventPage = (page + totalPages) % totalPages;
  const start = activeEventPage * eventsPerPage;
  const end = start + eventsPerPage;
  const visibleItems = filteredEventItems.slice(start, end);

  eventItems.forEach((item) => {
    item.hidden = !visibleItems.includes(item);
  });

  eventDots.querySelectorAll("button").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeEventPage);
    dot.setAttribute("aria-current", index === activeEventPage ? "true" : "false");
  });

  eventPrev?.toggleAttribute("disabled", totalPages <= 1);
  eventNext?.toggleAttribute("disabled", totalPages <= 1);
}

function syncEventDots() {
  if (!eventDots) return;

  const totalEventPages = Math.ceil(filteredEventItems.length / eventsPerPage);
  eventDots.replaceChildren();
  for (let index = 0; index < totalEventPages; index += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver página ${index + 1} de eventos`);
    dot.addEventListener("click", () => renderEventPage(index));
    eventDots.appendChild(dot);
  }
}

function applyEventFilter(filter) {
  activeEventFilter = filter;
  filteredEventItems = filter === "all"
    ? eventItems
    : eventItems.filter((item) => item.dataset.tags?.split(" ").includes(filter));

  eventFilterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeEventFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  syncEventDots();
  renderEventPage(0);
}

if (eventList && eventDots && eventItems.length) {
  eventFilterButtons.forEach((button) => {
    button.addEventListener("click", () => applyEventFilter(button.dataset.filter || "all"));
  });
  eventPrev?.addEventListener("click", () => renderEventPage(activeEventPage - 1));
  eventNext?.addEventListener("click", () => renderEventPage(activeEventPage + 1));
  applyEventFilter("all");
}

/* ===== STORIES VERTICAL SLIDER (responsive) ===== */
(function () {
  const track = document.querySelector(".stories-track");
  const viewport = document.querySelector(".stories-viewport");
  if (!track || !viewport) return;

  const arrows = document.querySelectorAll(".story-arrows button");
  if (!arrows.length) return;

  const gap = 20;
  const origRows = Array.from(track.querySelectorAll(".stories-row"));
  const totalOriginal = origRows.length;

  function getVisibleRows() {
    return window.innerWidth <= 640 ? 1 : 2;
  }

  let visibleRows = getVisibleRows();
  let current = visibleRows;
  let isTransitioning = false;

  function buildClones() {
    // Remove existing clones
    track.querySelectorAll("[data-clone]").forEach((c) => c.remove());

    // Clone first N at end, last N at start
    origRows.slice(0, visibleRows).forEach((r) => {
      const clone = r.cloneNode(true);
      clone.setAttribute("data-clone", "true");
      track.appendChild(clone);
    });
    origRows.slice(-visibleRows).reverse().forEach((r) => {
      const clone = r.cloneNode(true);
      clone.setAttribute("data-clone", "true");
      track.insertBefore(clone, track.firstChild);
    });
  }

  function getAllRows() {
    return Array.from(track.querySelectorAll(".stories-row"));
  }

  function getOffsetY(index) {
    const rows = getAllRows();
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += rows[i].offsetHeight + gap;
    }
    return offset;
  }

  function getVisibleHeight(index) {
    const rows = getAllRows();
    let h = 0;
    for (let i = 0; i < visibleRows; i++) {
      if (rows[index + i]) {
        h += rows[index + i].offsetHeight;
        if (i < visibleRows - 1) h += gap;
      }
    }
    return h;
  }

  function updateViewportHeight() {
    viewport.style.height = getVisibleHeight(current) + "px";
  }

  function jumpTo(index) {
    track.style.transition = "none";
    current = index;
    track.style.transform = `translateY(-${getOffsetY(current)}px)`;
    void track.offsetHeight;
    track.style.transition = "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    updateViewportHeight();
  }

  function slideTo(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    current = index;
    track.style.transform = `translateY(-${getOffsetY(current)}px)`;
    updateViewportHeight();
  }

  track.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    isTransitioning = false;
    if (current >= totalOriginal + visibleRows) {
      jumpTo(visibleRows);
    }
    if (current < visibleRows) {
      jumpTo(totalOriginal + current);
    }
  });

  function init() {
    visibleRows = getVisibleRows();
    buildClones();
    current = visibleRows;
    jumpTo(visibleRows);
  }

  /* Delay init so real devices finish layout before reading heights */
  requestAnimationFrame(() => {
    setTimeout(init, 100);
  });

  /* Recalculate once everything (images/fonts) is fully loaded */
  window.addEventListener("load", () => {
    requestAnimationFrame(() => jumpTo(current));
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newVisible = getVisibleRows();
      if (newVisible !== visibleRows) {
        init();
      } else {
        updateViewportHeight();
        jumpTo(current);
      }
    }, 200);
  });

  arrows[0].addEventListener("click", () => slideTo(current - 1));
  arrows[1].addEventListener("click", () => slideTo(current + 1));
})();

/* ===== HERO VIDEO STAGGER ===== */
document.querySelectorAll("video[data-offset]").forEach((v) => {
  v.addEventListener("loadedmetadata", () => {
    v.currentTime = parseFloat(v.dataset.offset) || 0;
  }, { once: true });
});

/* ===== YOUTUBE LAZY-LOAD ===== */
document.querySelectorAll("[data-yt-id]").forEach((card) => {
  const btn = card.querySelector(".video-play-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const id = card.dataset.ytId;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = "YouTube video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.style.border = "0";
    card.innerHTML = "";
    card.appendChild(iframe);
  });
});

/* ── Experience dots: fade out after 60% scroll ── */
(() => {
  const section = document.querySelector(".experience");
  if (!section) return;

  let ticking = false;

  function updateDotsOpacity() {
    // Only apply on desktop/LG (>1180px)
    if (window.innerWidth <= 1180) {
      section.style.removeProperty("--dots-opacity");
      return;
    }

    const rect = section.getBoundingClientRect();
    const sectionH = section.offsetHeight;
    const scrolled = -rect.top; // how far we've scrolled into the section
    const progress = Math.max(0, Math.min(1, scrolled / sectionH));

    if (progress <= 0.6) {
      section.style.setProperty("--dots-opacity", "0.78");
    } else {
      // Fade from 0.78 to 0 between 60% and 100%
      const fadeProgress = (progress - 0.6) / 0.4;
      const opacity = 0.78 * (1 - fadeProgress);
      section.style.setProperty("--dots-opacity", String(Math.max(0, opacity).toFixed(3)));
    }
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateDotsOpacity();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateDotsOpacity();
})();

/* =====================================================================
   CUSTOM SELECT — reemplaza la UI nativa del <select> por un dropdown
   propio (anclado al campo, igual en todos los dispositivos). El <select>
   real se conserva oculto: sigue guardando el valor y disparando 'change',
   así la lógica dependiente (asesor por estado, etc.) no cambia.
   Uso: window.enhanceSelect(selectEl). Auto-mejora los <select class="js-select">.
   ===================================================================== */
window.enhanceSelect = function enhanceSelect(select) {
  if (!select || select.dataset.enhanced === "true") return;
  select.dataset.enhanced = "true";

  const wrap = document.createElement("div");
  wrap.className = "cselect";
  wrap.dataset.open = "false";
  select.parentNode.insertBefore(wrap, select);
  wrap.appendChild(select);
  select.classList.add("cselect__native");
  select.setAttribute("tabindex", "-1");
  select.setAttribute("aria-hidden", "true");

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "cselect__btn";
  btn.setAttribute("aria-haspopup", "listbox");
  btn.setAttribute("aria-expanded", "false");
  if (select.getAttribute("aria-label")) {
    btn.setAttribute("aria-label", select.getAttribute("aria-label"));
  }
  const label = document.createElement("span");
  label.className = "cselect__label";
  btn.appendChild(label);

  const menu = document.createElement("ul");
  menu.className = "cselect__menu";
  menu.setAttribute("role", "listbox");

  wrap.appendChild(btn);
  wrap.appendChild(menu);

  function buildOptions() {
    menu.innerHTML = "";
    Array.from(select.options).forEach((o) => {
      const li = document.createElement("li");
      li.className = "cselect__opt";
      li.setAttribute("role", "option");
      li.textContent = o.textContent;
      li.dataset.value = o.value;
      if (o.disabled || o.value === "") li.classList.add("is-placeholder");
      li.addEventListener("click", () => {
        if (o.disabled) return;
        select.value = o.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        close();
        btn.focus();
      });
      menu.appendChild(li);
    });
  }

  function syncFromSelect() {
    const opt = select.options[select.selectedIndex];
    const isPlaceholder = !opt || opt.value === "";
    label.textContent = opt ? opt.textContent : "";
    label.classList.toggle("is-placeholder", isPlaceholder);
    menu.querySelectorAll(".cselect__opt").forEach((li) => {
      li.setAttribute("aria-selected", li.dataset.value === select.value ? "true" : "false");
    });
  }

  function onDocClick(e) {
    if (!wrap.contains(e.target)) close();
  }
  function onKey(e) {
    if (e.key === "Escape") { close(); btn.focus(); }
  }
  function open() {
    wrap.dataset.open = "true";
    btn.setAttribute("aria-expanded", "true");
    /* Llevar la opción seleccionada a la vista desplazando SOLO el interior del
       menú (no la ventana: scrollIntoView movería la página y saltaría la sección). */
    const active = menu.querySelector('.cselect__opt[aria-selected="true"]');
    if (active) {
      menu.scrollTop = Math.max(
        0,
        active.offsetTop - menu.clientHeight / 2 + active.offsetHeight / 2
      );
    }
    document.addEventListener("click", onDocClick, true);
    document.addEventListener("keydown", onKey);
  }
  function close() {
    wrap.dataset.open = "false";
    btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
    document.removeEventListener("keydown", onKey);
  }
  function toggle() {
    if (wrap.dataset.open === "true") close(); else open();
  }

  btn.addEventListener("click", toggle);
  select.addEventListener("change", syncFromSelect);
  /* Reconstruye el menú cuando las <option> del <select> cambian por JS
     (p. ej. un segundo dropdown dependiente). Uso: select.dispatchEvent(new Event("refresh")). */
  select.addEventListener("refresh", () => { buildOptions(); syncFromSelect(); });

  buildOptions();
  syncFromSelect();
};

document.querySelectorAll("select.js-select").forEach((s) => window.enhanceSelect(s));

/* ===== Deslizador de tarjetas (fotos de campus · instalaciones) =====
   Componente global: lo usan la página de licenciatura, las de área de afinidad
   y el módulo de instalaciones. Vivía en psicologia.js; subió aquí al aparecer
   el segundo consumidor.

   CUÁNTAS SE VEN A LA VEZ LO DECIDE EL CSS, NO ESTE ARCHIVO. Antes era una
   constante 3, y eso rompía cualquier uso con otra retícula: el módulo de
   instalaciones muestra 3 tarjetas en escritorio y 1 en móvil, y con el 3 fijo
   en móvil las tarjetas se salían de la pantalla sin forma de llegar a ellas
   —el guard `slides.length <= 3` impedía además que se montara la navegación—.

   Ahora se deduce midiendo: cuántas diapositivas caben en el viewport. Para las
   tiras de miniaturas de campus da 3, igual que antes, así que su comportamiento
   no cambia. Se recalcula al redimensionar, por si el CSS cambia de escalón.

   Se desliza de a una con flechas (hover) + puntos por posición + swipe táctil. */
(function () {
  "use strict";

  const sliders = Array.from(document.querySelectorAll("[data-campus-slider]"));
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const viewport = slider.querySelector(".campus-slider-viewport");
    const track = slider.querySelector(".campus-slides");
    const slides = Array.from(slider.querySelectorAll(".campus-slides > li"));
    const dotsWrap = slider.querySelector(".campus-slider-dots");
    if (!viewport || !track || !slides.length) return;

    const prev = slider.querySelector(".campus-slider-prev");
    const next = slider.querySelector(".campus-slider-next");
    let i = 0;
    let perView = 1;
    let maxIndex = 0;
    let dots = [];

    function step() {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return slides[0].getBoundingClientRect().width + gap;
    }

    /* Cuántas caben: ancho útil entre el paso de una diapositiva. El redondeo
       absorbe los decimales de un `calc()` con porcentajes. */
    function measure() {
      const st = step();
      if (!st) return 1;
      return Math.max(1, Math.round(viewport.getBoundingClientRect().width / st));
    }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      dots = [];
      /* Sin nada que deslizar no hay paginación que mostrar. */
      if (maxIndex < 1) return;
      for (let p = 0; p <= maxIndex; p++) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "campus-dot" + (p === i ? " is-active" : "");
        b.setAttribute("aria-label", "Ver desde la diapositiva " + (p + 1));
        b.addEventListener("click", () => go(p));
        dotsWrap.appendChild(b);
        dots.push(b);
      }
    }

    function go(n) {
      i = Math.max(0, Math.min(n, maxIndex));
      track.style.transform = "translateX(" + -i * step() + "px)";
      dots.forEach((d, di) => d.classList.toggle("is-active", di === i));
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === maxIndex;
    }

    /* Caben todas: el deslizador se comporta como una fila fija y esconde sus
       controles en vez de dejarlos inertes. */
    function layout() {
      const antes = perView;
      perView = measure();
      maxIndex = Math.max(0, slides.length - perView);
      const navegable = maxIndex > 0;
      slider.classList.toggle("is-static", !navegable);
      [prev, next].forEach((b) => {
        if (!b) return;
        b.hidden = !navegable;
      });
      if (antes !== perView || dots.length !== maxIndex + 1) buildDots();
      go(Math.min(i, maxIndex));
    }

    if (prev) prev.addEventListener("click", () => go(i - 1));
    if (next) next.addEventListener("click", () => go(i + 1));

    /* Swipe táctil (una diapositiva por gesto). */
    let x0 = null;
    slider.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", (e) => {
      if (x0 === null || maxIndex < 1) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
      x0 = null;
    });

    let raf = null;
    window.addEventListener("resize", () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(layout);
    });

    layout();
  });
})();
