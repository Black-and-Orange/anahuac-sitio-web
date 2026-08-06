#!/usr/bin/env node
/* Conecta cada campo `<x>_color` con el elemento que pinta ese texto.

   Dos formas de render, según cómo quedó el HubL tras las pasadas anteriores:

   A) Sustitución — el texto ES el elemento:
      <{{ p.x_tag|default('h3', true) }} …>{{ p.x }}</{{ … }}>
      → se le añade style="color:…" al tag de apertura.

   B) Envoltura — el texto vive dentro de un contenedor que se conserva:
      {% if p.x_tag and p.x_tag != 'ninguna' %}<{{ p.x_tag }}>{{ p.x }}</…>{% else %}{{ p.x }}{% endif %}
      → si hay etiqueta se le pone el style; si no, se envuelve en un <span>
        solo cuando hay color, para no meter marcado de más.

   Sin color, el HubL no emite nada y manda el CSS.

   Uso: node scripts/hs-aplicar-color-campo.mjs */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";
let a = 0, b = 0;

for (const dir of readdirSync(BASE).filter((d) => d.startsWith("apoyos-"))) {
  const ruta = `${BASE}/${dir}/module.html`;
  let s = readFileSync(ruta, "utf8");

  /* --- B) envoltura (primero: su patrón contiene al de A) --- */
  s = s.replace(
    /\{% if ([\w.]+?)_tag and \1_tag != 'ninguna' %\}<\{\{ \1_tag \}\}>\{\{ ([^}]+?) \}\}<\/\{\{ \1_tag \}\}>\{% else %\}\{\{ \2 \}\}\{% endif %\}/g,
    (_m, pre, texto) => {
      b++;
      const col = `${pre}_color`;
      return `{% if ${pre}_tag and ${pre}_tag != 'ninguna' %}`
           + `<{{ ${pre}_tag }}{% if ${col}.color %} style="color:{{ ${col}.color }}"{% endif %}>{{ ${texto} }}</{{ ${pre}_tag }}>`
           + `{% elif ${col}.color %}<span style="color:{{ ${col}.color }}">{{ ${texto} }}</span>`
           + `{% else %}{{ ${texto} }}{% endif %}`;
    }
  );

  /* --- A) sustitución --- */
  s = s.replace(
    /<\{\{ ([\w.]+?)_tag\|default\('([a-z0-9]+)', true\) \}\}((?:(?!\}\}|<)[^>])*)>/g,
    (m, pre, def, attrs) => {
      const col = `${pre}_color`;
      if (m.includes("style=")) return m;
      a++;
      return `<{{ ${pre}_tag|default('${def}', true) }}${attrs}`
           + `{% if ${col}.color %} style="color:{{ ${col}.color }}"{% endif %}>`;
    }
  );

  writeFileSync(ruta, s, "utf8");
}
console.log(`sustituciones con color: ${a}\nenvolturas con color:    ${b}`);
