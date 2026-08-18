#!/usr/bin/env node
/* Añade, de forma aditiva, los campos que pidió Marketing a los módulos
   apoyos-*.module: selector de etiqueta HTML para los textos planos y un grupo
   "Estilos" (pestaña STYLE) con fondo, color de texto y color de botones.

   Aditivo a propósito: no renombra ni elimina campos existentes, para no perder
   el contenido ya capturado en páginas publicadas.

   Uso: node scripts/hs-agregar-campos-editor.mjs */

import { readFileSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

const ETIQUETAS = [
  ["h1", "Título 1 (H1)"], ["h2", "Título 2 (H2)"], ["h3", "Título 3 (H3)"],
  ["h4", "Título 4 (H4)"], ["h5", "Título 5 (H5)"], ["h6", "Título 6 (H6)"],
  ["p", "Párrafo"],
];

/* Selector de etiqueta HTML. `extra` añade opciones propias del markup actual
   (p. ej. "span" dentro de un <summary>) para no cambiar la semántica por defecto. */
const campoEtiqueta = (id, nombre, label, def, extra = []) => ({
  id, name: nombre, label,
  help_text: "Cambia solo la etiqueta HTML; el estilo visual no cambia.",
  type: "choice", display: "select",
  choices: [...extra, ...ETIQUETAS],
  default: def,
});

const campoColor = (id, nombre, label, help) => ({
  id, name: nombre, label,
  ...(help ? { help_text: help } : {}),
  type: "color",
  default: { color: "", opacity: 100 },
});

const campoBool = (id, nombre, label, def = true, help) => ({
  id, name: nombre, label,
  ...(help ? { help_text: help } : {}),
  type: "boolean", display: "toggle", default: def,
});

/* Inserta un campo justo después de otro dentro de la misma lista de children. */
function insertarDespues(children, nombreAncla, campo) {
  const i = children.findIndex((c) => c.name === nombreAncla);
  if (i === -1) throw new Error(`No existe el campo "${nombreAncla}"`);
  if (children.some((c) => c.name === campo.name)) return; // idempotente
  children.splice(i + 1, 0, campo);
}

const buscarGrupo = (fields, nombre) => fields.find((f) => f.name === nombre);

/* ---- Configuración por módulo ------------------------------------------- */
/* etiquetas: [grupo, campoAncla, prefijoId, defaultTag, opcionesExtra]
   estilos:   lista de campos del grupo "Estilos" (pestaña STYLE)            */
const CONFIG = {
  "apoyos-hero": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h1"],
    ],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
      ["color", "color_boton_fondo", "Color de fondo del botón principal"],
      ["color", "color_boton_texto", "Color de texto del botón principal"],
    ],
  },
  "apoyos-panorama": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    etiquetasRepeater: [["grupo_tarjetas", "tarjetas", "titulo", "h3"]],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto de la sección"],
      ["color", "color_tarjeta_fondo", "Color de fondo de las tarjetas"],
      ["color", "color_tarjeta_texto", "Color de texto de las tarjetas"],
      ["color", "color_porcentaje", "Color del porcentaje"],
      ["color", "color_etiquetas", "Color de las etiquetas (Perfil, Requisito)"],
      ["color", "color_enlace", "Color del enlace «Ver detalles»"],
    ],
  },
  "apoyos-detalle": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    etiquetasRepeater: [["grupo_fichas", "fichas", "titulo", "span", [["span", "Texto en línea (span)"]]]],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_nombre", "Color del nombre del apoyo"],
      ["color", "color_rango", "Color del porcentaje"],
      ["color", "color_descripcion", "Color de la descripción"],
      ["color", "color_etiquetas", "Color de las etiquetas (Perfil ideal, Requisito…)"],
      ["color", "color_valores", "Color de los valores"],
      ["color", "color_boton_fondo", "Color de fondo del botón"],
      ["color", "color_boton_texto", "Color de texto del botón"],
    ],
  },
  "apoyos-financiamiento": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    etiquetasRepeater: [
      ["grupo_opciones", "opciones", "titulo", "h3"],
      ["grupo_documentos", "columnas", "titulo", "h4"],
    ],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
    ],
  },
  "apoyos-consideraciones": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    etiquetasRepeater: [["grupo_items", "items", "titulo", "h3"]],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
      ["color", "color_icono", "Color del icono"],
    ],
  },
  "apoyos-pasos": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    etiquetasRepeater: [["grupo_pasos", "pasos", "titulo", "h3"]],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
      ["color", "color_boton_fondo", "Color de fondo del botón"],
      ["color", "color_boton_texto", "Color de texto del botón"],
    ],
  },
  "apoyos-faq": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
    ],
  },
  "apoyos-asesoria": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
    ],
  },
  "apoyos-formulario": {
    etiquetas: [
      ["grupo_contenido", "eyebrow", "p"],
      ["grupo_contenido", "heading", "h2"],
      ["grupo_contenido", "intro", "p"],
    ],
    estilos: [
      ["color", "color_fondo", "Color de fondo de la sección"],
      ["color", "color_texto", "Color de texto"],
    ],
  },
};

let total = 0;
for (const [modulo, cfg] of Object.entries(CONFIG)) {
  const ruta = `${BASE}/${modulo}.module/fields.json`;
  const fields = JSON.parse(readFileSync(ruta, "utf8"));
  let añadidos = 0;

  /* 1. Selector de etiqueta HTML en campos de texto plano de primer nivel */
  for (const [grupo, ancla, def, extra] of cfg.etiquetas || []) {
    const g = buscarGrupo(fields, grupo);
    const antes = g.children.length;
    insertarDespues(g.children, ancla,
      campoEtiqueta(`${grupo}.${ancla}_tag`, `${ancla}_tag`, `Etiqueta HTML de «${ancla}»`, def, extra));
    añadidos += g.children.length - antes;
  }

  /* 2. Selector de etiqueta dentro de repeaters */
  for (const [grupo, repeater, ancla, def, extra] of cfg.etiquetasRepeater || []) {
    const g = buscarGrupo(fields, grupo);
    const rep = g.children.find((c) => c.name === repeater);
    const antes = rep.children.length;
    insertarDespues(rep.children, ancla,
      campoEtiqueta(`${grupo}.${repeater}.${ancla}_tag`, `${ancla}_tag`,
        `Etiqueta HTML de «${ancla}»`, def, extra));
    añadidos += rep.children.length - antes;
  }

  /* 3. Grupo "Estilos" en la pestaña STYLE del editor */
  if (cfg.estilos && !buscarGrupo(fields, "grupo_estilos")) {
    fields.push({
      id: "grupo_estilos",
      name: "grupo_estilos",
      label: "Estilos",
      help_text: "Déjalos vacíos para usar los colores del design system.",
      type: "group",
      expanded: true,
      tab: "STYLE",
      children: cfg.estilos.map(([, nombre, label]) =>
        campoColor(`grupo_estilos.${nombre}`, nombre, label)),
    });
    añadidos += cfg.estilos.length;
  }

  writeFileSync(ruta, JSON.stringify(fields, null, 2) + "\n", "utf8");
  console.log(`${modulo.padEnd(24)} +${añadidos} campos`);
  total += añadidos;
}
console.log(`\nTotal: ${total} campos añadidos.`);
