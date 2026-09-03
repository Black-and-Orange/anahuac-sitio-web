document.documentElement.classList.remove("no-js");
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

/* Editor de HubSpot: al editar un módulo se re-renderiza su HTML sin volver a ejecutar
   este script, así que sus [data-reveal] quedarían en opacity:0 (sección en blanco).
   Este MutationObserver los revela apenas se insertan. En el sitio publicado no se
   insertan [data-reveal] en runtime, así que la animación de scroll no cambia. */
if ("MutationObserver" in window) {
  const revealAdded = (node) => {
    if (node.nodeType !== 1) return;
    if (node.matches && node.matches("[data-reveal]")) node.classList.add("is-visible");
    if (node.querySelectorAll) {
      node.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => el.classList.add("is-visible"));
    }
  };
  new MutationObserver((mutations) => {
    mutations.forEach((m) => m.addedNodes.forEach(revealAdded));
  }).observe(document.body, { childList: true, subtree: true });
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

/* ===== OFERTA ACADÉMICA (carrusel áreas + buscador/filtro) ===== */
(function(){
/* =============================================
   OFERTA ACADÉMICA — Page-specific interactions
   ============================================= */

(function () {
  "use strict";

  /* ===== AREA CAROUSEL — infinite vertical scroll, 2-card step ===== */
  const areaGrid = document.querySelector(".area-grid");
  const areasSection = document.querySelector(".oferta-areas");

  if (areaGrid && areasSection) {
    const originalCards = Array.from(areaGrid.querySelectorAll(".area-card"));
    const [prevBtn, nextBtn] = areasSection.querySelectorAll(".arrow-buttons button");
    const totalOriginal = originalCards.length;
    const GAP = 20;

    if (totalOriginal) {
      /* --- Wrap cards in an inner .area-track --- */
      const track = document.createElement("div");
      track.className = "area-track";
      originalCards.forEach((card) => track.appendChild(card));
      areaGrid.appendChild(track);

      /* --- Clone all cards for seamless infinite loop --- */
      originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.classList.add("is-clone");
        track.appendChild(clone);
      });

      let currentRow = 0;
      let isAnimating = false;

      /* How many columns the track shows (depends on breakpoint) */
      function getColCount() {
        if (window.innerWidth <= 1180) return 1;
        return 2;
      }

      /* How many rows of original cards exist */
      function getTotalRows() {
        return Math.ceil(totalOriginal / getColCount());
      }

      /* How many rows are visible at once */
      function getVisibleRows() {
        if (window.innerWidth <= 768) return 1;
        return 2;
      }

      function getCardAt(row) {
        const cols = getColCount();
        const index = row * cols;
        const allCards = track.querySelectorAll(".area-card");
        return allCards[index] || null;
      }

      function getRowHeightAt(row) {
        const card = getCardAt(row);
        if (!card) return 0;
        return card.offsetHeight + GAP;
      }

      function getOffsetForRow(row) {
        let offset = 0;
        for (let i = 0; i < row; i++) {
          offset += getRowHeightAt(i);
        }
        return offset;
      }

      function setContainerHeight() {
        const visible = getVisibleRows();
        let totalH = 0;
        for (let i = 0; i < visible; i++) {
          totalH += getRowHeightAt(currentRow + i);
        }
        areaGrid.style.transition = "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
        areaGrid.style.height = (totalH - GAP) + "px";
      }

      function slideTo(row, animate) {
        if (animate === undefined) animate = true;
        currentRow = row;
        const offset = getOffsetForRow(currentRow);
        track.style.transition = animate
          ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          : "none";
        track.style.transform = "translateY(-" + offset + "px)";
        setContainerHeight();
      }

      function normalizeAfterTransition() {
        const total = getTotalRows();
        if (currentRow >= total) {
          currentRow = currentRow - total;
          slideTo(currentRow, false);
        } else if (currentRow < 0) {
          currentRow = currentRow + total;
          slideTo(currentRow, false);
        }
      }

      function next() {
        if (isAnimating) return;
        isAnimating = true;
        slideTo(currentRow + 1, true);
        setTimeout(() => {
          normalizeAfterTransition();
          isAnimating = false;
        }, 520);
      }

      function prev() {
        if (isAnimating) return;
        isAnimating = true;
        const total = getTotalRows();
        if (currentRow === 0) {
          slideTo(total, false);
          void track.offsetHeight;
          slideTo(total - 1, true);
        } else {
          slideTo(currentRow - 1, true);
        }
        setTimeout(() => {
          normalizeAfterTransition();
          isAnimating = false;
        }, 520);
      }

      prevBtn?.addEventListener("click", prev);
      nextBtn?.addEventListener("click", next);

      /* Recalculate on resize */
      window.addEventListener("resize", () => {
        setContainerHeight();
        slideTo(currentRow, false);
      });

      /* Initial setup */
      setContainerHeight();
      slideTo(0, false);

      /* Reveal animation for the area grid */
      areaGrid.style.opacity = "0";
      areaGrid.style.transform = "translateY(40px)";
      areaGrid.style.transition = "opacity 600ms ease, transform 600ms ease";

      const gridObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              areaGrid.style.opacity = "1";
              areaGrid.style.transform = "translateY(0)";
              gridObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );
      gridObserver.observe(areaGrid);
    }
  }

  /* ===== CUSTOM DROPDOWNS ===== */
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach((dd) => {
    const toggle = dd.querySelector(".dropdown-toggle");
    const menu = dd.querySelector(".dropdown-menu");
    const radios = dd.querySelectorAll('input[type="radio"]');

    toggle?.addEventListener("click", (e) => {
      e.stopPropagation();
      /* Close other open dropdowns */
      dropdowns.forEach((other) => {
        if (other !== dd) {
          other.querySelector(".dropdown-menu")?.classList.remove("open");
          other.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
        }
      });
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        /* Update toggle text to show selected value */
        const label = radio.parentElement.textContent.trim();
        const defaultText = dd.dataset.dropdown === "area" ? "Área académica" : "Campus";
        toggle.firstChild.textContent = radio.value ? label + " " : defaultText + " ";
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        applyProgramFilters();
      });
    });
  });

  /* Close dropdowns on outside click */
  document.addEventListener("click", () => {
    dropdowns.forEach((dd) => {
      dd.querySelector(".dropdown-menu")?.classList.remove("open");
      dd.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  });

  /* ===== WRAP PROGRAM-MODE TEXT IN CLICKABLE SPANS ===== */
  document.querySelectorAll(".program-mode").forEach((mode) => {
    const parts = mode.textContent.split("|").map((s) => s.trim());
    mode.innerHTML = parts.map((p) => `<span>${p}</span>`).join(" | ");
  });

  /* ===== PROGRAM SEARCH & FILTERING ===== */
  const programCards = document.querySelectorAll(".program-card");
  const searchInput = document.getElementById("search-licenciatura");
  const searchClear = document.querySelector(".search-clear");
  const searchBtn = document.querySelector(".search-btn");
  const resultCount = document.getElementById("result-count");
  let currentPage = 1;
  let lastSearchTerm = null; /* último término aplicado → evita búsquedas duplicadas */

  function getCardsPerPage() {
    const w = window.innerWidth;
    if (w <= 768) return 2;
    if (w <= 1440) return 4;
    return 6;
  }

  function getFilterValues() {
    const areaRadio = document.querySelector('input[name="filter-area"]:checked');
    const campusRadio = document.querySelector('input[name="filter-campus"]:checked');
    return {
      search: searchInput?.value.toLowerCase().trim() || "",
      area: areaRadio?.value || "",
      campus: campusRadio?.value || "",
    };
  }

  function getVisibleCards() {
    const { search, area, campus } = getFilterValues();
    return [...programCards].filter((card) => {
      const text = card.textContent.toLowerCase();
      if (search && !text.includes(search)) return false;
      if (area && card.dataset.area !== area) return false;
      if (campus && card.dataset.campus !== campus) return false;
      return true;
    });
  }

  function renderPage() {
    const visible = getVisibleCards();
    const perPage = getCardsPerPage();
    const totalPages = Math.max(1, Math.ceil(visible.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;

    /* Hide all, then show current page */
    programCards.forEach((c) => c.classList.add("hidden"));
    const start = (currentPage - 1) * perPage;
    visible.slice(start, start + perPage).forEach((c) => c.classList.remove("hidden"));

    /* Update count */
    if (resultCount) resultCount.textContent = visible.length;

    /* Update pagination */
    renderPagination(totalPages);
  }

  function applyProgramFilters() {
    currentPage = 1;
    lastSearchTerm = getFilterValues().search;
    renderPage();
  }

  /* Debounce reutilizable: agrupa pulsaciones rápidas en una sola búsqueda. */
  function debounce(fn, delay) {
    let timer;
    const debounced = (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
    debounced.cancel = () => clearTimeout(timer);
    return debounced;
  }

  /* Search events */
  searchBtn?.addEventListener("click", applyProgramFilters);
  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") applyProgramFilters();
  });

  /* Live search: filtra en tiempo real mientras se escribe (debounce 300 ms).
     No re-renderiza si el término efectivo no cambió (evita consultas duplicadas).
     Enter y el botón Buscar (arriba) siguen funcionando como disparadores inmediatos. */
  const runLiveSearch = () => {
    if (getFilterValues().search === lastSearchTerm) return;
    applyProgramFilters();
  };
  const debouncedLiveSearch = debounce(runLiveSearch, 300);
  searchInput?.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
      /* Campo vacío → restablece de inmediato al estado inicial, sin esperar el debounce */
      debouncedLiveSearch.cancel();
      if (lastSearchTerm !== "") applyProgramFilters();
    } else {
      debouncedLiveSearch();
    }
  });

  searchClear?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    applyProgramFilters();
  });

  /* ===== CLICKABLE TAG & MODE FILTERS ===== */
  function selectRadio(name, value) {
    const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (radio) {
      radio.checked = true;
      /* Update dropdown toggle text */
      const dd = radio.closest(".custom-dropdown");
      const toggle = dd?.querySelector(".dropdown-toggle");
      if (toggle) {
        const label = radio.parentElement.textContent.trim();
        toggle.firstChild.textContent = label + " ";
      }
    }
  }

  /* Click on program-tag → filter by area */
  document.querySelectorAll(".program-tag").forEach((tag) => {
    tag.addEventListener("click", () => {
      const card = tag.closest(".program-card");
      const area = card?.dataset.area || "";
      if (area) {
        selectRadio("filter-area", area);
        applyProgramFilters();
        document.getElementById("buscar")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* Click on campus span inside program-mode → filter by campus */
  const campusMap = {
    "BICAMPUS": "bicampus",
    "CAMPUS NORTE": "norte",
    "CAMPUS SUR": "sur",
  };

  document.querySelectorAll(".program-mode span").forEach((span) => {
    const text = span.textContent.trim();
    const campusVal = campusMap[text];
    if (campusVal) {
      span.addEventListener("click", () => {
        selectRadio("filter-campus", campusVal);
        applyProgramFilters();
        document.getElementById("buscar")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });

  /* ===== PAGINATION ===== */
  const paginationNav = document.querySelector(".pagination");

  function renderPagination(totalPages) {
    if (!paginationNav) return;
    paginationNav.innerHTML = "";
    if (totalPages <= 1) return;

    const MAX_VISIBLE = 5;
    const hasLeft = currentPage > 1;
    const hasRight = currentPage < totalPages;

    /* Calculate how many page number slots are available */
    let numSlots = MAX_VISIBLE;
    if (hasLeft) numSlots--;
    if (hasRight) numSlots--;

    /* Determine the range of pages to show */
    let startPage, endPage;
    if (!hasLeft) {
      /* At the beginning */
      startPage = 1;
      endPage = Math.min(totalPages, startPage + numSlots - 1);
    } else if (!hasRight) {
      /* At the end */
      endPage = totalPages;
      startPage = Math.max(1, endPage - numSlots + 1);
    } else {
      /* In the middle — center around current page */
      const half = Math.floor(numSlots / 2);
      startPage = currentPage - half;
      endPage = currentPage + (numSlots - half - 1);
      if (startPage < 1) { endPage += (1 - startPage); startPage = 1; }
      if (endPage > totalPages) { startPage -= (endPage - totalPages); endPage = totalPages; }
      startPage = Math.max(1, startPage);
    }

    function scrollToSearch() {
      document.getElementById("buscar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    /* Left arrow */
    if (hasLeft) {
      const prev = document.createElement("button");
      prev.className = "page-btn page-next";
      prev.setAttribute("aria-label", "Anterior");
      prev.textContent = "‹";
      prev.addEventListener("click", () => { currentPage--; renderPage(); scrollToSearch(); });
      paginationNav.appendChild(prev);
    }

    /* Page numbers */
    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement("button");
      btn.className = `page-btn${i === currentPage ? " active" : ""}`;
      btn.textContent = i;
      btn.addEventListener("click", () => { currentPage = i; renderPage(); scrollToSearch(); });
      paginationNav.appendChild(btn);
    }

    /* Right arrow */
    if (hasRight) {
      const next = document.createElement("button");
      next.className = "page-btn page-next";
      next.setAttribute("aria-label", "Siguiente");
      next.textContent = "›";
      next.addEventListener("click", () => { currentPage++; renderPage(); scrollToSearch(); });
      paginationNav.appendChild(next);
    }
  }

  /* Initial render */
  renderPage();

  /* Re-render on resize */
  window.addEventListener("resize", () => renderPage());
})();

})();

/* ===== CUSTOM SELECT (window.enhanceSelect) ===== */

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

/* ===== APOYOS ECONÓMICOS (panorama, pasos, asesoría, formulario) ===== */
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
    /* La ruta sale del <img> que ya resolvió HubSpot (get_asset_url): así el JS
       no depende de dónde viva el theme ni de la ruta local de la maqueta. */
    const DEFAULT_SRC = media.getAttribute("src") || "";
    const BASE = DEFAULT_SRC.slice(0, DEFAULT_SRC.lastIndexOf("/") + 1);
    const EXT = ".jpg";
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
      return item ? BASE + item.id + EXT : DEFAULT_SRC;
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

  /* ===== FORM SUBMIT =====
     Cubre la maqueta de Apoyos y la de Admisión: mismo comportamiento, distinta
     clase de sección. Solo aplica al respaldo visual; cuando el módulo tiene un
     formulario de HubSpot elegido, lo maneja HubSpot. */
  const apoForm = document.querySelector(".apo-form, .adm-form");
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

/* ===== FORÁNEOS (hero video, precarga CDMX, mapa de servicios, modal de ubicación) ===== */
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
