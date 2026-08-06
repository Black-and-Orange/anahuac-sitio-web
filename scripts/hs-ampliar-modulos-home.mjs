#!/usr/bin/env node
/* Amplía los módulos del home para que sean administrables desde el editor.

   ESTRICTAMENTE ADITIVO: no renombra ni elimina campos. Los módulos ya tienen
   contenido capturado en la página borrador del home y HubSpot no rellena los
   defaults de campos nuevos dentro de repeaters ya guardados — por eso el HubL
   debe usar siempre `|default(x, true)` sobre cualquier valor que se emita como
   nombre de etiqueta.

   Uso: node scripts/hs-ampliar-modulos-home.mjs [modulo...] */

import { readFileSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

const ETIQUETAS = [
  ["h1", "Título 1 (H1)"], ["h2", "Título 2 (H2)"], ["h3", "Título 3 (H3)"],
  ["h4", "Título 4 (H4)"], ["h5", "Título 5 (H5)"], ["h6", "Título 6 (H6)"],
  ["p", "Párrafo"],
];
const SIN = ["ninguna", "Ninguna (texto simple)"];

const tag = (pre, campo, def, envoltura = false) => ({
  id: pre ? `${pre}.${campo}_tag` : `${campo}_tag`,
  name: `${campo}_tag`,
  label: `Etiqueta HTML de «${campo}»`,
  help_text: envoltura
    ? "Envuelve el texto en la etiqueta elegida sin alterar su estilo. «Ninguna» lo deja como está."
    : "Cambia solo la etiqueta HTML; el estilo visual no cambia.",
  type: "choice", display: "select",
  choices: envoltura ? [SIN, ...ETIQUETAS] : ETIQUETAS,
  default: envoltura ? "ninguna" : def,
});

const color = (pre, nombre, label, ayuda) => ({
  id: pre ? `${pre}.${nombre}` : nombre, name: nombre, label,
  ...(ayuda ? { help_text: ayuda } : {}),
  type: "color", default: { color: "", opacity: 100 },
});

const bool = (pre, nombre, label, def = true, ayuda) => ({
  id: pre ? `${pre}.${nombre}` : nombre, name: nombre, label,
  ...(ayuda ? { help_text: ayuda } : {}),
  type: "boolean", display: "toggle", default: def,
});

const choiceTam = (pre, nombre, label, opciones, def) => ({
  id: pre ? `${pre}.${nombre}` : nombre, name: nombre, label,
  help_text: "Tamaños del design system; no acepta valores libres.",
  type: "choice", display: "select", choices: opciones, default: def,
});

const grupoEstilos = (hijos) => ({
  id: "grupo_estilos", name: "grupo_estilos", label: "Estilos",
  help_text: "Déjalos vacíos para usar los colores del design system.",
  type: "group", expanded: true, tab: "STYLE", children: hijos,
});

const TAM_PANEL = [
  ["size-22", "Pequeño"], ["size-26", "Mediano"], ["lead-size", "Normal (el del diseño)"],
  ["size-36", "Grande"], ["heading-3-size", "Muy grande"],
];
const TAM_CIFRA = [
  ["size-64", "Pequeño"], ["size-70", "Mediano"], ["heading-2-size", "Normal (el del diseño)"],
  ["heading-1-size", "Grande"],
];
const TAM_QUOTE = [
  ["size-22", "Pequeño"], ["size-26", "Mediano"], ["size-30", "Normal (el del diseño)"],
  ["size-36", "Grande"], ["heading-3-size", "Muy grande"],
];
const TAM_TEXTO = [
  ["paragraph-size", "Pequeño"], ["heading-6-size", "Normal (el del diseño)"],
  ["heading-5-size", "Grande"], ["size-22", "Muy grande"],
];

/* Inserta un campo tras otro dentro de una lista, sin duplicar. */
function tras(lista, ancla, campo) {
  if (lista.some((c) => c.name === campo.name)) return 0;
  const i = lista.findIndex((c) => c.name === ancla);
  if (i === -1) throw new Error(`falta el campo ancla "${ancla}"`);
  lista.splice(i + 1, 0, campo);
  return 1;
}
const alFinal = (lista, campo) => {
  if (lista.some((c) => c.name === campo.name)) return 0;
  lista.push(campo); return 1;
};
const rep = (fields, nombre) => fields.find((f) => f.name === nombre);

const CAMBIOS = {
  /* ---------- Módulo 1 · Hero ---------- */
  hero(f) {
    let n = 0;
    n += tras(f, "heading", tag("", "heading", "h1"));
    n += tras(f, "heading_tag", color("", "heading_color", "Color del título"));
    n += tras(f, "secondary_btn_link", bool("", "mostrar_botones", "Mostrar botones"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_panel_fondo", "Recuadro naranja · color de fondo"),
      color("grupo_estilos", "color_panel_texto", "Recuadro naranja · color de texto"),
      choiceTam("grupo_estilos", "tamano_panel", "Recuadro naranja · tamaño del texto", TAM_PANEL, "lead-size"),
      color("grupo_estilos", "color_boton1_fondo", "Botón 1 · color de fondo"),
      color("grupo_estilos", "color_boton1_texto", "Botón 1 · color de texto"),
      color("grupo_estilos", "color_boton2_fondo", "Botón 2 · color de fondo"),
      color("grupo_estilos", "color_boton2_texto", "Botón 2 · color de texto"),
    ]));
    return n;
  },

  /* ---------- Módulo 2 · Prestigio ---------- */
  prestigio(f) {
    let n = 0;
    n += tras(f, "eyebrow", tag("", "eyebrow", "p"));
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    const stats = rep(f, "stats");
    n += alFinal(stats.children, color("stats", "color_cuadro", "Color de este cuadro",
      "Vacío = el color que le toca por posición en el diseño."));
    n += alFinal(stats.children, color("stats", "color_cifra", "Color de la cifra"));
    n += alFinal(stats.children, color("stats", "color_texto", "Color del texto"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título"),
      color("grupo_estilos", "color_intro", "Color del texto bajo el título"),
      color("grupo_estilos", "color_cifras", "Color de todas las cifras"),
      choiceTam("grupo_estilos", "tamano_cifras", "Tamaño de las cifras", TAM_CIFRA, "heading-2-size"),
      color("grupo_estilos", "color_textos", "Color de los textos de cifra"),
      choiceTam("grupo_estilos", "tamano_textos", "Tamaño de los textos de cifra", TAM_TEXTO, "heading-6-size"),
    ]));
    return n;
  },

  /* ---------- Módulo 3 · Comienza tu camino ---------- */
  "comienza-tu-camino"(f) {
    let n = 0;
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    const cards = rep(f, "cards");
    n += tras(cards.children, "title", tag("cards", "title", "h3"));
    n += alFinal(cards.children, color("cards", "color_titulo", "Color del título"));
    n += alFinal(cards.children, color("cards", "color_texto", "Color de la descripción"));
    n += alFinal(cards.children, color("cards", "color_cta", "Color del enlace"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título de la sección"),
      color("grupo_estilos", "color_intro", "Color del texto de la sección"),
      color("grupo_estilos", "color_card_fondo", "Tarjetas cerradas · color de fondo"),
      color("grupo_estilos", "color_card_texto", "Tarjetas cerradas · color de texto"),
      color("grupo_estilos", "color_card_abierta_fondo", "Tarjetas abiertas · color de fondo"),
      color("grupo_estilos", "color_card_abierta_texto", "Tarjetas abiertas · color de texto"),
    ]));
    return n;
  },

  /* ---------- Módulo 4 · Licenciaturas ---------- */
  licenciaturas(f) {
    let n = 0;
    n += tras(f, "eyebrow", tag("", "eyebrow", "p"));
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    const pr = rep(f, "programs");
    n += tras(pr.children, "program_name", tag("programs", "program_name", "h3"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título principal"),
      color("grupo_estilos", "color_intro", "Color del texto secundario"),
      color("grupo_estilos", "color_boton_fondo", "Botón · color de fondo"),
      color("grupo_estilos", "color_boton_texto", "Botón · color de texto"),
    ]));
    return n;
  },

  /* ---------- Módulo 5 · Experiencia ---------- */
  experiencia(f) {
    let n = 0;
    n += tras(f, "eyebrow", tag("", "eyebrow", "p"));
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    const sl = rep(f, "slides");
    n += tras(sl.children, "title", tag("slides", "title", "h3"));
    n += alFinal(sl.children, color("slides", "color_titulo", "Color del título"));
    n += alFinal(sl.children, color("slides", "color_texto", "Color del párrafo"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título de la sección"),
      color("grupo_estilos", "color_intro", "Color del texto de la sección"),
      color("grupo_estilos", "color_card_fondo", "Tarjetas · color de fondo"),
      color("grupo_estilos", "color_card_titulo", "Tarjetas · color del título"),
      color("grupo_estilos", "color_card_texto", "Tarjetas · color del párrafo"),
      color("grupo_estilos", "color_boton_fondo", "Botón · color de fondo"),
      color("grupo_estilos", "color_boton_texto", "Botón · color de texto"),
    ]));
    return n;
  },

  /* ---------- Módulo 6 · Historias ---------- */
  historias(f) {
    let n = 0;
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    const st = rep(f, "stories");
    n += alFinal(st.children, color("stories", "color_caja", "Color de la caja del testimonio"));
    n += alFinal(st.children, color("stories", "color_texto", "Color del testimonio"));
    n += alFinal(st.children, color("stories", "color_autor", "Color del nombre y la carrera"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título"),
      choiceTam("grupo_estilos", "tamano_heading", "Tamaño del título", TAM_CIFRA, "heading-2-size"),
      color("grupo_estilos", "color_testimonio", "Color de los testimonios"),
      choiceTam("grupo_estilos", "tamano_testimonio", "Tamaño de los testimonios", TAM_QUOTE, "size-30"),
      color("grupo_estilos", "color_autor", "Color de los nombres"),
    ]));
    return n;
  },

  /* ---------- Módulo 7 · El siguiente paso ---------- */
  "siguiente-paso"(f) {
    let n = 0;
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    const cd = rep(f, "cards");
    n += tras(cd.children, "title", tag("cards", "title", "h3"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título de la sección"),
      color("grupo_estilos", "color_icono", "Color de los iconos"),
      color("grupo_estilos", "color_card_fondo", "Tarjetas · fondo (normal)"),
      color("grupo_estilos", "color_card_titulo", "Tarjetas · título (normal)"),
      color("grupo_estilos", "color_card_texto", "Tarjetas · texto (normal)"),
      color("grupo_estilos", "color_card_cta", "Tarjetas · CTA (normal)"),
      color("grupo_estilos", "color_card_hover_fondo", "Tarjetas · fondo (hover)"),
      color("grupo_estilos", "color_card_hover_texto", "Tarjetas · contenido (hover)"),
    ]));
    return n;
  },

  /* ---------- Módulo 8 · Eventos ---------- */
  eventos(f) {
    let n = 0;
    n += tras(f, "eyebrow", tag("", "eyebrow", "p"));
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "intro", tag("", "intro", "p"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_heading", "Color del título"),
      color("grupo_estilos", "color_intro", "Color del texto de introducción"),
      color("grupo_estilos", "color_boton_fondo", "Botones · color de fondo"),
      color("grupo_estilos", "color_boton_texto", "Botones · color de texto"),
    ]));
    return n;
  },

  /* ---------- Módulo 9 · Dudas / Contacto ---------- */
  "dudas-contacto"(f) {
    let n = 0;
    n += tras(f, "heading", tag("", "heading", "h2"));
    n += tras(f, "description", tag("", "description", "p"));
    n += alFinal(f, grupoEstilos([
      color("grupo_estilos", "color_fondo", "Color de fondo del módulo"),
      color("grupo_estilos", "color_card_fondo", "Color de fondo de la tarjeta"),
      color("grupo_estilos", "color_heading", "Color del título"),
      choiceTam("grupo_estilos", "tamano_heading", "Tamaño del título", TAM_CIFRA, "heading-2-size"),
      color("grupo_estilos", "color_texto", "Color del párrafo"),
      choiceTam("grupo_estilos", "tamano_texto", "Tamaño del párrafo", TAM_TEXTO, "paragraph-size"),
      color("grupo_estilos", "color_boton1_fondo", "Botón 1 · color de fondo"),
      color("grupo_estilos", "color_boton1_texto", "Botón 1 · color de texto"),
      color("grupo_estilos", "color_boton2_fondo", "Botón 2 · color de fondo"),
      color("grupo_estilos", "color_boton2_texto", "Botón 2 · color de texto"),
    ]));
    return n;
  },
};

const pedidos = process.argv.slice(2);
const lista = pedidos.length ? pedidos : Object.keys(CAMBIOS);
let total = 0;
for (const m of lista) {
  const ruta = `${BASE}/${m}.module/fields.json`;
  const f = JSON.parse(readFileSync(ruta, "utf8"));
  const n = CAMBIOS[m](f);
  writeFileSync(ruta, JSON.stringify(f, null, 2) + "\n", "utf8");
  console.log(`${m.padEnd(22)} +${n} campos`);
  total += n;
}
console.log(`\nTotal: ${total}`);
