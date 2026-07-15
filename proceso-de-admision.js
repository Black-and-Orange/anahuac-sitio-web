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

  const estadoSelect = document.getElementById("asesoria-estado");
  if (estadoSelect) {
    const foto = document.querySelector(".asesor-foto");
    const nombreEl = document.querySelector(".asesor-nombre");
    const waEl = document.querySelector(".asesor-wa");

    const opciones = Object.keys(asesores)
      .filter((k) => k !== "Soy Extranjero")
      .sort((a, b) => a.localeCompare(b, "es"));
    opciones.push("Soy Extranjero");
    opciones.forEach((estado) => {
      const opt = document.createElement("option");
      opt.value = estado;
      opt.textContent = estado;
      estadoSelect.appendChild(opt);
    });

    const renderAsesor = (estado) => {
      const data = asesores[estado];
      if (!data) return;
      nombreEl.textContent = data.nombre;
      waEl.href = data.wa;
      foto.setAttribute("data-genero", data.g);
    };

    const inicial = "Ciudad de México";
    estadoSelect.value = inicial;
    renderAsesor(inicial);
    estadoSelect.addEventListener("change", () => renderAsesor(estadoSelect.value));

    /* Reemplazar el <select> nativo por el dropdown propio (tras poblarlo). */
    if (window.enhanceSelect) window.enhanceSelect(estadoSelect);
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
