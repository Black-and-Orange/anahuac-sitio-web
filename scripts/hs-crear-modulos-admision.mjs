#!/usr/bin/env node
/* Genera los fields.json y meta.json de los módulos de Proceso de admisión con
   el patrón ya probado en Apoyos: cada texto plano lleva su selector de etiqueta
   HTML y su color, los repeaters van a nivel raíz con min 0, y los estilos viven
   en la pestaña STYLE.

   Uso: node scripts/hs-crear-modulos-admision.mjs */

import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

const ETIQUETAS = [
  ["h1", "Título 1 (H1)"], ["h2", "Título 2 (H2)"], ["h3", "Título 3 (H3)"],
  ["h4", "Título 4 (H4)"], ["h5", "Título 5 (H5)"], ["h6", "Título 6 (H6)"],
  ["p", "Párrafo"],
];
const SIN = ["ninguna", "Ninguna (texto simple)"];

/* Un texto plano = tres campos: el texto, su etiqueta HTML y su color. */
function texto(pre, nombre, label, valor, { tag = "p", envoltura = false, multilinea = false, ayuda } = {}) {
  const id = (n) => (pre ? `${pre}.${n}` : n);
  return [
    { id: id(nombre), name: nombre, label, ...(ayuda ? { help_text: ayuda } : {}),
      type: "text", allow_new_line: multilinea, default: valor },
    { id: id(`${nombre}_tag`), name: `${nombre}_tag`, label: `Etiqueta HTML de «${nombre}»`,
      help_text: envoltura
        ? "Envuelve el texto en la etiqueta elegida sin alterar su estilo. «Ninguna» lo deja como está."
        : "Cambia solo la etiqueta HTML; el estilo visual no cambia.",
      type: "choice", display: "select",
      choices: envoltura ? [SIN, ...ETIQUETAS] : ETIQUETAS,
      default: envoltura ? "ninguna" : tag },
    { id: id(`${nombre}_color`), name: `${nombre}_color`, label: `Color de texto de «${nombre}»`,
      help_text: "Déjalo vacío para usar el color que define el diseño.",
      type: "color", default: { color: "", opacity: 100 } },
  ];
}

const bool = (pre, n, label, def = true, ayuda) => ({
  id: `${pre}.${n}`, name: n, label, ...(ayuda ? { help_text: ayuda } : {}),
  type: "boolean", display: "toggle", default: def,
});
const color = (pre, n, label, ayuda) => ({
  id: `${pre}.${n}`, name: n, label, ...(ayuda ? { help_text: ayuda } : {}),
  type: "color", default: { color: "", opacity: 100 },
});
const enlace = (pre, n, label, href = "#") => ({
  id: `${pre}.${n}`, name: n, label, type: "link",
  supported_types: ["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"],
  show_advanced_rel_options: false,
  default: { url: { type: "EXTERNAL", href }, open_in_new_tab: false },
});
const grupo = (n, label, hijos, { tab = "CONTENT", abierto = true, ayuda } = {}) => ({
  id: n, name: n, label, ...(ayuda ? { help_text: ayuda } : {}),
  type: "group", expanded: abierto, tab, children: hijos,
});

const TAMANOS = [
  ["paragraph-size", "Normal"], ["size-19", "Mediano"], ["heading-5-size", "Grande"],
  ["size-22", "Muy grande"], ["heading-4-size", "Enorme"],
];

/* ---------------- Módulo 1 · Hero ---------------- */
const hero = [
  grupo("grupo_contenido", "Contenido", [
    ...texto("grupo_contenido", "eyebrow", "Eyebrow (tagline)", "Admisiones"),
    ...texto("grupo_contenido", "heading", "Título principal (H1)", "Tu camino comienza aquí",
      { tag: "h1", ayuda: "Es el único H1 de la página. No agregues otro en los demás módulos." }),
    { id: "grupo_contenido.texto_panel", name: "texto_panel", label: "Texto del panel morado",
      type: "richtext",
      default: "<p>Conoce los pasos para ingresar a Anáhuac México y encuentra toda la información que necesitas.</p>" },
  ]),
  grupo("grupo_visibilidad", "Visibilidad", [
    bool("grupo_visibilidad", "mostrar_flecha", "Mostrar la flecha del eyebrow", true,
      "El elemento decorativo que antecede al texto pequeño."),
    bool("grupo_visibilidad", "mostrar_botones", "Mostrar botones"),
  ], { abierto: false }),
  {
    id: "botones", name: "botones", label: "Botones",
    help_text: "Máximo 2. El primero se pinta oscuro y el segundo claro, según el diseño aprobado.",
    type: "group", expanded: true, tab: "CONTENT",
    occurrence: { min: 0, max: 2, sorting_label_field: null, default: 2 },
    children: [
      ...texto("botones", "texto", "Texto", "Iniciar mi proceso", { envoltura: true }),
      enlace("botones", "enlace", "Destino", "#actua"),
      { id: "botones.estilo", name: "estilo", label: "Estilo", type: "choice", display: "select",
        choices: [["btn-dark", "Oscuro"], ["btn-light", "Claro"], ["btn-orange", "Naranja"]],
        default: "btn-dark" },
    ],
    default: [
      { texto: "Iniciar mi proceso", texto_tag: "ninguna", enlace: { url: { type: "EXTERNAL", href: "#actua" }, open_in_new_tab: false }, estilo: "btn-dark" },
      { texto: "Ver los pasos", texto_tag: "ninguna", enlace: { url: { type: "EXTERNAL", href: "#pasos" }, open_in_new_tab: false }, estilo: "btn-light" },
    ],
  },
  grupo("grupo_estilos", "Estilos", [
    color("grupo_estilos", "color_fondo", "Color de fondo de la sección"),
    color("grupo_estilos", "color_texto", "Color de texto de la sección"),
    color("grupo_estilos", "color_panel_fondo", "Color de fondo del panel morado"),
    color("grupo_estilos", "color_panel_texto", "Color de texto del panel"),
    { id: "grupo_estilos.tamano_panel", name: "tamano_panel", label: "Tamaño del texto del panel",
      help_text: "Tamaños del design system; no acepta valores libres.",
      type: "choice", display: "select", choices: TAMANOS, default: "paragraph-size" },
    color("grupo_estilos", "color_boton1_fondo", "Botón 1 · color de fondo"),
    color("grupo_estilos", "color_boton1_texto", "Botón 1 · color de texto"),
    color("grupo_estilos", "color_boton2_fondo", "Botón 2 · color de fondo"),
    color("grupo_estilos", "color_boton2_texto", "Botón 2 · color de texto"),
  ], { tab: "STYLE", ayuda: "Déjalos vacíos para usar los colores del design system." }),
];

/* ---------------- Módulo 4 · CTA ---------------- */
const cta = [
  grupo("grupo_contenido", "Contenido", [
    ...texto("grupo_contenido", "heading", "Título (H2)", "Comienza tu solicitud hoy", { tag: "h2" }),
    ...texto("grupo_contenido", "texto", "Texto secundario",
      "El primer paso es el más importante. Regístrate ahora y avanza en tu camino.", { multilinea: true }),
  ]),
  grupo("grupo_boton1", "Botón 1", [
    bool("grupo_boton1", "mostrar", "Mostrar botón 1"),
    ...texto("grupo_boton1", "texto", "Texto", "Iniciar proceso", { envoltura: true }),
    enlace("grupo_boton1", "enlace", "Destino"),
  ], { abierto: false }),
  grupo("grupo_boton2", "Botón 2", [
    bool("grupo_boton2", "mostrar", "Mostrar botón 2"),
    ...texto("grupo_boton2", "texto", "Texto", "Hablar con un asesor", { envoltura: true }),
    enlace("grupo_boton2", "enlace", "Destino"),
  ], { abierto: false }),
  grupo("grupo_estilos", "Estilos", [
    color("grupo_estilos", "color_fondo", "Color de fondo"),
    color("grupo_estilos", "color_texto_principal", "Color del texto principal (título)"),
    color("grupo_estilos", "color_texto_secundario", "Color del texto secundario"),
    color("grupo_estilos", "color_boton1_fondo", "Botón 1 · color de fondo"),
    color("grupo_estilos", "color_boton1_texto", "Botón 1 · color de texto"),
    color("grupo_estilos", "color_boton2_texto", "Botón 2 · color de texto y borde"),
  ], { tab: "STYLE", ayuda: "Déjalos vacíos para usar los colores del design system." }),
];

const MODULOS = {
  "admision-hero": { label: "Admisión · Hero — Anáhuac", fields: hero },
  "admision-cta": { label: "Admisión · CTA solicitud — Anáhuac", fields: cta },
};

for (const [nombre, { label, fields }] of Object.entries(MODULOS)) {
  const dir = `${BASE}/${nombre}.module`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/fields.json`, JSON.stringify(fields, null, 2) + "\n");
  writeFileSync(`${dir}/meta.json`, JSON.stringify({
    global: false,
    content_types: ["LANDING_PAGE", "SITE_PAGE"],
    categories: ["BODY_CONTENT"],
    host_template_types: ["PAGE"],
    label,
    is_available_for_new_content: true,
  }, null, 2) + "\n");
  writeFileSync(`${dir}/module.css`, "");
  writeFileSync(`${dir}/module.js`, "");
  const n = (f) => f.reduce((a, x) => a + 1 + (x.children ? n(x.children) : 0), 0);
  console.log(`${nombre.padEnd(18)} ${n(fields)} campos`);
}
