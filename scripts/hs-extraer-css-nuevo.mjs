#!/usr/bin/env node
/* Extrae de un CSS ya portado solo las reglas cuyo selector NO existe todavía en
   el CSS del theme, respetando los @media que las contienen.

   Motivo: `apoyos-economicos.css` ya arrastró al theme los componentes que ambas
   páginas comparten (asesor, FAQ, pasos, propedéuticos). Anexar el CSS completo
   de otra página duplicaría ~80 reglas y, peor, **pisaría** las versiones del
   theme que ya llevan los hooks de color (`--support-*`), deshaciendo ese trabajo.

   Uso: node scripts/hs-extraer-css-nuevo.mjs <portado.css> <theme.css> */

import { readFileSync } from "node:fs";

const [entrada, themeCss] = process.argv.slice(2);
const src = readFileSync(entrada, "utf8");
const theme = readFileSync(themeCss, "utf8");

const norm = (s) => s.split(/\s+/).join(" ").trim();

/* Selectores ya presentes en el theme (a cualquier nivel). */
const yaExisten = new Set(
  [...theme.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .map((m) => norm(m[1]))
    .filter((s) => !s.startsWith("/*") && !s.startsWith("@"))
);

/* Recorre el CSS por bloques de primer nivel llevando la cuenta de llaves. */
function trocear(css) {
  const out = [];
  let prof = 0, ini = 0;
  for (let i = 0; i < css.length; i++) {
    if (css[i] === "{") { if (prof === 0) ini = i; prof++; }
    else if (css[i] === "}") {
      prof--;
      if (prof === 0) {
        const cabecera = css.slice(out.at(-1)?.fin ?? 0, ini);
        out.push({ cabecera, cuerpo: css.slice(ini + 1, i), fin: i + 1 });
      }
    }
  }
  return out;
}

let mantenidas = 0, omitidas = 0;
const piezas = [];

for (const { cabecera, cuerpo } of trocear(src)) {
  const sel = norm(cabecera.replace(/\/\*[\s\S]*?\*\//g, ""));

  if (sel.startsWith("@media") || sel.startsWith("@supports")) {
    /* Dentro del media solo sobreviven las reglas nuevas. */
    const dentro = [...cuerpo.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
      .filter((m) => { const s = norm(m[1]);
        if (yaExisten.has(s)) { omitidas++; return false; } mantenidas++; return true; })
      .map((m) => `  ${norm(m[1])} {${m[2].replace(/\n\s*/g, "\n    ")}  }`);
    if (dentro.length) piezas.push(`${sel} {\n${dentro.join("\n\n")}\n}`);
    continue;
  }

  if (!sel || yaExisten.has(sel)) { omitidas++; continue; }
  mantenidas++;
  piezas.push(`${sel} {${cuerpo}}`);
}

process.stdout.write(piezas.join("\n\n") + "\n");
process.stderr.write(`reglas mantenidas: ${mantenidas}   omitidas (ya en el theme): ${omitidas}\n`);
