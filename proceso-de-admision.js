/* =============================================
   ADMISIONES — Page-specific interactions
   ============================================= */

(function () {
  "use strict";

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
  if (regionSelect && estadoSelect) {
    const foto = document.querySelector(".asesor-foto");
    const nombreEl = document.querySelector(".asesor-nombre");
    const waEl = document.querySelector(".asesor-wa");

    /* Split de las claves de `asesores` en: extranjero, Edo. Méx./CDMX y resto de estados. */
    const PAISES = ["Colombia", "El Salvador", "Venezuela"];
    const SOY_EXTRANJERO = "Soy Extranjero";
    const EDOMEX_CDMX = ["Ciudad de México", "Estado de México"];
    const fuera = new Set([...PAISES, SOY_EXTRANJERO, ...EDOMEX_CDMX]);
    const estadosMexico = Object.keys(asesores)
      .filter((k) => !fuera.has(k))
      .sort((a, b) => a.localeCompare(b, "es"));

    /* Región -> opciones del segundo dropdown (en orden de aparición). */
    const REGIONES = {
      "Extranjero": [...PAISES],
      "México": estadosMexico,
      "Estado de México y CDMX": EDOMEX_CDMX,
    };

    Object.keys(REGIONES).forEach((region) => {
      const opt = document.createElement("option");
      opt.value = region;
      opt.textContent = region;
      regionSelect.appendChild(opt);
    });

    const renderAsesor = (estado) => {
      const data = asesores[estado];
      if (!data) return;
      nombreEl.textContent = data.nombre;
      waEl.href = data.wa;
      foto.setAttribute("data-genero", data.g);
    };

    /* Rellena el segundo dropdown según la región y refresca la card + el cselect. */
    const poblarEstados = (region, preferido) => {
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
    };

    const regionInicial = "Estado de México y CDMX";
    regionSelect.value = regionInicial;
    poblarEstados(regionInicial, "Ciudad de México");

    regionSelect.addEventListener("change", () => poblarEstados(regionSelect.value));
    estadoSelect.addEventListener("change", () => renderAsesor(estadoSelect.value));

    /* Reemplazar los <select> nativos por el dropdown propio (tras poblarlos). */
    if (window.enhanceSelect) {
      window.enhanceSelect(regionSelect);
      window.enhanceSelect(estadoSelect);
    }
  }

  /* ===== FORM SUBMIT ===== */
  const admForm = document.querySelector(".adm-form");
  if (admForm) {
    admForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = admForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = "¡Enviado!";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        admForm.reset();
      }, 2000);
    });
  }
})();
