#!/usr/bin/env node
/* Porta un CSS de página (px crudos) a la convención del theme HubSpot:
   - font-size: Npx        -> var(--token semántico) o var(--size-N)
   - @media (...: Npx)     -> em (N/16)
   - cualquier otro Npx    -> rem (N/16)
   Los data URI (url("data:...")) se protegen: sus números no son px CSS.

   Uso: node scripts/port-css-a-theme.mjs <entrada.css> [entrada2.css ...]
   Escribe el resultado a stdout y el listado de tokens requeridos a stderr. */

import { readFileSync } from "node:fs";

/* Tamaños con token semántico ya definido en css/tokens.css. El resto usa --size-N. */
const SEMANTICOS = {
  12: "--micro-size",
  14: "--eyebrow-size",
  16: "--paragraph-size",
  17: "--meta-size",
  18: "--heading-6-size",
  20: "--heading-5-size",
  21: "--btn-medium-size",
  24: "--heading-4-size",
  27: "--btn-large-size",
  32: "--lead-size",
  37: "--frase-size",
  40: "--heading-3-size",
  72: "--h2-1440",
};

const aRem = (px) => {
  const n = Number(px) / 16;
  return `${parseFloat(n.toFixed(6))}rem`;
};

const tokensUsados = new Set();

function portar(css) {
  /* 1. Proteger data URIs: sus dígitos no son medidas CSS. */
  const guardados = [];
  css = css.replace(/url\((["']?)data:[^)]*\1\)/g, (match) => {
    guardados.push(match);
    return `__DATAURI_${guardados.length - 1}__`;
  });

  /* 2. font-size: Npx -> var(token) */
  css = css.replace(/font-size:\s*([\d.]+)px/g, (_m, px) => {
    const n = Number(px);
    const token = SEMANTICOS[n] || `--size-${n}`;
    tokensUsados.add(token);
    return `font-size: var(${token})`;
  });

  /* 3. Breakpoints de @media -> em */
  css = css.replace(/@media[^{]+/g, (bloque) =>
    bloque.replace(/([\d.]+)px/g, (_m, px) => `${parseFloat((Number(px) / 16).toFixed(6))}em`)
  );

  /* 4. Resto de px -> rem */
  css = css.replace(/([\d.]+)px/g, (_m, px) => aRem(px));

  /* 5. Restaurar data URIs */
  css = css.replace(/__DATAURI_(\d+)__/g, (_m, i) => guardados[Number(i)]);

  return css;
}

const salida = process.argv.slice(2).map((f) => portar(readFileSync(f, "utf8"))).join("\n");
process.stdout.write(salida);
process.stderr.write(
  "Tokens de tamaño requeridos: " + [...tokensUsados].sort().join(" ") + "\n"
);
