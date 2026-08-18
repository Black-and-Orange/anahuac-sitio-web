#!/usr/bin/env node
/* Corrige el fallo que rompía el render: si un campo *_tag venía vacío, el HubL
   emitía "<>" y el navegador se comía el resto de la tarjeta.

   Pasa siempre cuando se añade un campo nuevo a un repeater que YA tenía
   contenido guardado: HubSpot no rellena el default en los items existentes,
   así que el valor llega vacío.

   Este script reescribe cada `<{{ x_tag }}>` como `<{{ x_tag|default('<def>', true) }}>`
   tomando el default declarado en fields.json. `default(v, true)` trata la
   cadena vacía como ausente, que es justo el caso.

   Uso: node scripts/hs-blindar-etiquetas.mjs */

import { readFileSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";
const MODULOS = [
  "apoyos-hero", "apoyos-panorama", "apoyos-detalle", "apoyos-financiamiento",
  "apoyos-consideraciones", "apoyos-pasos", "apoyos-faq", "apoyos-asesoria",
  "apoyos-formulario",
];

/* nombre de campo -> default declarado, recorriendo todo el árbol de fields */
function mapaDefaults(fields, acc = {}) {
  for (const f of fields) {
    if (f.type === "choice" && f.name.endsWith("_tag")) acc[f.name] = f.default || "p";
    if (f.children) mapaDefaults(f.children, acc);
  }
  return acc;
}

let total = 0;
for (const modulo of MODULOS) {
  const rutaCampos = `${BASE}/${modulo}.module/fields.json`;
  const rutaHtml = `${BASE}/${modulo}.module/module.html`;
  const defaults = mapaDefaults(JSON.parse(readFileSync(rutaCampos, "utf8")));

  let html = readFileSync(rutaHtml, "utf8");
  let n = 0;

  /* Solo las sustituciones `{{ algo.x_tag }}`; las que pasan por el macro et()
     ya contemplan el vacío y no se tocan. */
  html = html.replace(/\{\{ ([\w.]*?)(\w+_tag) \}\}/g, (match, prefijo, campo) => {
    const def = defaults[campo];
    if (!def) return match;              // sin default declarado: se deja igual
    n++;
    return `{{ ${prefijo}${campo}|default('${def}', true) }}`;
  });

  writeFileSync(rutaHtml, html, "utf8");
  console.log(`${modulo.padEnd(24)} ${n} sustituciones blindadas`);
  total += n;
}
console.log(`\nTotal: ${total}`);
