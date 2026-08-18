#!/usr/bin/env node
/* Añade un selector de color junto a cada selector de etiqueta HTML, para que
   Marketing pueda recolorear campo por campo desde el editor.

   Vacío = se respeta el color que define el CSS del design system: el HubL solo
   emite `style="color:…"` cuando el campo trae valor.

   Uso: node scripts/hs-color-por-campo.mjs */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";
const modulos = readdirSync(BASE).filter((d) => d.startsWith("apoyos-"));

let añadidos = 0;

function procesar(hijos) {
  for (let i = 0; i < hijos.length; i++) {
    const f = hijos[i];
    if (f.children) procesar(f.children);
    if (f.type !== "choice" || !f.name.endsWith("_tag")) continue;

    const base = f.name.slice(0, -4);          // eyebrow_tag -> eyebrow
    const nombreColor = `${base}_color`;
    if (hijos.some((c) => c.name === nombreColor)) continue;

    hijos.splice(i + 1, 0, {
      id: f.id.replace(/_tag$/, "_color"),
      name: nombreColor,
      label: `Color de texto de «${base}»`,
      help_text: "Déjalo vacío para usar el color que define el diseño.",
      type: "color",
      default: { color: "", opacity: 100 },
    });
    añadidos++;
    i++;                                        // saltar el recién insertado
  }
}

for (const m of modulos) {
  const ruta = `${BASE}/${m}/fields.json`;
  const fields = JSON.parse(readFileSync(ruta, "utf8"));
  const antes = añadidos;
  procesar(fields);
  writeFileSync(ruta, JSON.stringify(fields, null, 2) + "\n", "utf8");
  console.log(`${m.replace(".module", "").padEnd(24)} +${añadidos - antes} campos de color`);
}
console.log(`\nTotal: ${añadidos}`);
