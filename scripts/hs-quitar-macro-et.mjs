#!/usr/bin/env node
/* Sustituye las llamadas al macro `et()` por condicionales en línea y elimina
   su definición.

   Motivo: el macro es el único constructo de este tipo en el theme (los módulos
   que llevan meses funcionando no usan ninguno) y es el candidato más probable a
   reventar en ejecución cuando recibe un atributo inexistente — lo que deja el
   módulo COMPLETO sin renderizar, imagen incluida.

   Uso: node scripts/hs-quitar-macro-et.mjs */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";
const DEF_MACRO = /\{# Envuelve el texto[\s\S]*?\{% macro et\(tag, texto\)[\s\S]*?\{% endmacro %\}\n/;

let llamadas = 0, definiciones = 0;

for (const dir of readdirSync(BASE).filter((d) => d.startsWith("apoyos-"))) {
  const ruta = `${BASE}/${dir}/module.html`;
  let s = readFileSync(ruta, "utf8");
  const original = s;

  /* {{ et(EXPR_tag, EXPR) }} -> condicional en línea equivalente */
  s = s.replace(/\{\{ et\(([^,]+?), ([^)]+?)\) \}\}/g, (_m, tag, texto) => {
    llamadas++;
    return `{% if ${tag} and ${tag} != 'ninguna' %}<{{ ${tag} }}>{{ ${texto} }}</{{ ${tag} }}>`
         + `{% else %}{{ ${texto} }}{% endif %}`;
  });

  if (DEF_MACRO.test(s)) { s = s.replace(DEF_MACRO, ""); definiciones++; }

  if (s !== original) {
    writeFileSync(ruta, s, "utf8");
    console.log(`✓ ${dir}`);
  }
}

console.log(`\nllamadas sustituidas: ${llamadas}   definiciones eliminadas: ${definiciones}`);
