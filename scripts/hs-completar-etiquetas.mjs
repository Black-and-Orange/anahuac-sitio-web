#!/usr/bin/env node
/* Tercera pasada aditiva: completa el selector de etiqueta HTML en TODOS los
   campos de texto plano que se renderizan, y añade el color de texto que
   faltaba en Detalle.

   Dos clases de campo:
   - "bloque": el texto ya es un elemento propio (<p>). El selector lo sustituye
     y por defecto trae el elemento actual.
   - "envoltura": el texto vive dentro de un contenedor que hay que conservar
     (<dt>, <dd>, <summary>, <a>). El selector envuelve el texto y por defecto
     viene vacío = se renderiza tal cual hoy.

   Uso: node scripts/hs-completar-etiquetas.mjs */

import { readFileSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

const ETIQUETAS = [
  ["h1", "Título 1 (H1)"], ["h2", "Título 2 (H2)"], ["h3", "Título 3 (H3)"],
  ["h4", "Título 4 (H4)"], ["h5", "Título 5 (H5)"], ["h6", "Título 6 (H6)"],
  ["p", "Párrafo"],
];

const SIN_ETIQUETA = ["", "Ninguna (texto simple)"];

const campoEtiqueta = (id, nombre, label, def, envoltura) => ({
  id, name: nombre, label,
  help_text: envoltura
    ? "Envuelve el texto en la etiqueta elegida sin alterar su estilo. «Ninguna» lo deja como está."
    : "Cambia solo la etiqueta HTML; el estilo visual no cambia.",
  type: "choice", display: "select",
  choices: envoltura ? [SIN_ETIQUETA, ...ETIQUETAS] : ETIQUETAS,
  default: def,
});

/* [grupo(.repeater), campo, default, esEnvoltura] */
const CONFIG = {
  "apoyos-hero": [
    ["grupo_botones.botones", "texto", "", true],
  ],
  "apoyos-panorama": [
    ["grupo_tarjetas.tarjetas", "rango", "p", false],
    ["grupo_tarjetas.tarjetas", "nota", "p", false],
    ["grupo_tarjetas.tarjetas", "perfil", "", true],
    ["grupo_tarjetas.tarjetas", "requisito", "", true],
    ["grupo_tarjetas.tarjetas", "enlace_texto", "", true],
    ["grupo_etiquetas", "label_perfil", "", true],
    ["grupo_etiquetas", "label_requisito", "", true],
  ],
  "apoyos-detalle": [
    ["grupo_fichas.fichas", "rango", "", true],
    ["grupo_fichas.fichas", "perfil", "", true],
    ["grupo_fichas.fichas", "requisito", "", true],
    ["grupo_fichas.fichas", "evaluacion", "", true],
    ["grupo_fichas.fichas", "notas", "", true],
    ["grupo_fichas.fichas", "cta_texto", "", true],
    ["grupo_etiquetas", "label_perfil", "", true],
    ["grupo_etiquetas", "label_requisito", "", true],
    ["grupo_etiquetas", "label_evaluacion", "", true],
    ["grupo_etiquetas", "label_notas", "", true],
  ],
  "apoyos-financiamiento": [
    ["grupo_opciones.opciones", "como_funciona", "", true],
    ["grupo_opciones.opciones", "requisito", "", true],
    ["grupo_opciones.opciones", "combinable", "p", false],
    ["grupo_opciones.opciones", "cta_texto", "", true],
    ["grupo_documentos", "titulo", "", true],
    ["grupo_etiquetas", "label_como_funciona", "", true],
    ["grupo_etiquetas", "label_requisito", "", true],
  ],
  "apoyos-consideraciones": [
    ["grupo_items.items", "texto", "p", false],
  ],
  "apoyos-pasos": [
    ["grupo_aviso", "texto", "p", false],
    ["grupo_pasos.pasos", "texto", "p", false],
    ["grupo_boton", "texto", "", true],
  ],
  "apoyos-faq": [
    ["grupo_preguntas.preguntas", "pregunta", "", true],
  ],
  "apoyos-asesoria": [
    ["grupo_contacto", "texto_whatsapp", "", true],
    ["grupo_contacto", "texto_cita", "", true],
    ["grupo_contacto", "correo", "", true],
  ],
};

/* Navega "grupo.repeater" hasta la lista de children que contiene el campo. */
function localizar(fields, ruta) {
  const partes = ruta.split(".");
  let actual = fields.find((f) => f.name === partes[0]);
  for (const p of partes.slice(1)) actual = actual.children.find((c) => c.name === p);
  return actual;
}

let total = 0;
for (const [modulo, campos] of Object.entries(CONFIG)) {
  const ruta = `${BASE}/${modulo}.module/fields.json`;
  const fields = JSON.parse(readFileSync(ruta, "utf8"));
  let añadidos = 0;

  for (const [grupoRuta, campo, def, envoltura] of campos) {
    const contenedor = localizar(fields, grupoRuta);
    const hijos = contenedor.children;
    const nombreTag = `${campo}_tag`;
    if (hijos.some((c) => c.name === nombreTag)) continue;
    const i = hijos.findIndex((c) => c.name === campo);
    if (i === -1) throw new Error(`${modulo}: no existe ${grupoRuta}.${campo}`);
    hijos.splice(i + 1, 0, campoEtiqueta(
      `${grupoRuta}.${nombreTag}`, nombreTag,
      `Etiqueta HTML de «${campo}»`, def, envoltura));
    añadidos++;
  }

  /* Detalle era el único sin color de texto general */
  if (modulo === "apoyos-detalle") {
    const est = fields.find((f) => f.name === "grupo_estilos");
    if (!est.children.some((c) => c.name === "color_texto")) {
      est.children.splice(1, 0, {
        id: "grupo_estilos.color_texto",
        name: "color_texto",
        label: "Color de texto de la sección",
        type: "color",
        default: { color: "", opacity: 100 },
      });
      añadidos++;
    }
  }

  writeFileSync(ruta, JSON.stringify(fields, null, 2) + "\n", "utf8");
  console.log(`${modulo.padEnd(24)} +${añadidos} campos`);
  total += añadidos;
}
console.log(`\nTotal: ${total} campos añadidos.`);
