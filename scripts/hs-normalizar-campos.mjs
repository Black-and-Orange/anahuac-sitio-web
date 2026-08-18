#!/usr/bin/env node
/* Alinea los módulos apoyos-* con la convención que ya funcionaba en el portal
   (oferta-areas.module) y quita un valor no estándar:

   1. `choices` con valor "" -> "ninguna". Una opción de valor vacío no es
      estándar en HubSpot y el editor puede no pintarla bien, dejando el item
      del repeater en un estado inconsistente al guardar.
   2. `occurrence.sorting_label_field` -> null, como en oferta-areas.

   Uso: node scripts/hs-normalizar-campos.mjs */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";
const modulos = readdirSync(BASE).filter((d) => d.startsWith("apoyos-"));

let choices = 0, sorters = 0;

function recorrer(fields) {
  for (const f of fields) {
    if (f.type === "choice" && Array.isArray(f.choices)) {
      const i = f.choices.findIndex((c) => c[0] === "");
      if (i !== -1) {
        f.choices[i] = ["ninguna", f.choices[i][1]];
        if (f.default === "") f.default = "ninguna";
        choices++;
      }
    }
    if (f.occurrence && f.occurrence.sorting_label_field != null) {
      f.occurrence.sorting_label_field = null;
      sorters++;
    }
    if (f.children) recorrer(f.children);
  }
}

for (const m of modulos) {
  const ruta = `${BASE}/${m}/fields.json`;
  const fields = JSON.parse(readFileSync(ruta, "utf8"));
  recorrer(fields);
  writeFileSync(ruta, JSON.stringify(fields, null, 2) + "\n", "utf8");
}

console.log(`choices con valor vacío corregidos: ${choices}`);
console.log(`sorting_label_field puestos en null: ${sorters}`);
