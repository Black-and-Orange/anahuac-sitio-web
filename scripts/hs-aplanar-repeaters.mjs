#!/usr/bin/env node
/* Saca los repeaters del grupo contenedor y los deja a nivel raíz.

   Motivo: los 18 repeaters que funcionan en este portal están TODOS a nivel
   raíz. Los míos quedaron anidados dentro de un grupo normal y además con array
   de `default` — combinación que no existe en ningún módulo estable. El editor
   no hidrata esos defaults en su estado de formulario, así que a la primera
   edición guarda el repeater VACÍO y se pierden todos los items.

   También pone `occurrence.min` en 0 (como los demás): con min 1, al vaciarse
   aparecía un item fantasma en blanco.

   Uso: node scripts/hs-aplanar-repeaters.mjs */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

/* módulo -> [grupo contenedor, nombre del repeater, label que llevará ya a raíz] */
const MOVER = [
  ["apoyos-panorama", "grupo_tarjetas", "tarjetas", "Tarjetas de apoyo"],
  ["apoyos-detalle", "grupo_fichas", "fichas", "Fichas de apoyo"],
  ["apoyos-financiamiento", "grupo_opciones", "opciones", "Opciones de financiamiento"],
  ["apoyos-financiamiento", "grupo_documentos", "columnas", "Documentos · columnas"],
  ["apoyos-consideraciones", "grupo_items", "items", "Consideraciones"],
  ["apoyos-pasos", "grupo_pasos", "pasos", "Pasos"],
  ["apoyos-faq", "grupo_preguntas", "preguntas", "Preguntas y respuestas"],
  ["apoyos-hero", "grupo_botones", "botones", "Botones"],
];

/* Reescribe los ids quitando el prefijo del contenedor. */
function reindexar(campo, prefijoViejo, prefijoNuevo) {
  if (typeof campo.id === "string" && campo.id.startsWith(prefijoViejo)) {
    campo.id = prefijoNuevo + campo.id.slice(prefijoViejo.length);
  }
  for (const hijo of campo.children || []) reindexar(hijo, prefijoViejo, prefijoNuevo);
}

const porModulo = {};
for (const [mod, grupo, rep, label] of MOVER) (porModulo[mod] ||= []).push([grupo, rep, label]);

for (const [mod, movimientos] of Object.entries(porModulo)) {
  const rutaCampos = `${BASE}/${mod}.module/fields.json`;
  const rutaHtml = `${BASE}/${mod}.module/module.html`;
  const fields = JSON.parse(readFileSync(rutaCampos, "utf8"));
  let html = readFileSync(rutaHtml, "utf8");

  for (const [grupo, rep, label] of movimientos) {
    const iGrupo = fields.findIndex((f) => f.name === grupo);
    const contenedor = fields[iGrupo];
    const iRep = contenedor.children.findIndex((c) => c.name === rep);
    const repeater = contenedor.children.splice(iRep, 1)[0];

    reindexar(repeater, `${grupo}.${rep}`, rep);
    repeater.label = label;
    repeater.tab = "CONTENT";
    repeater.expanded = true;
    repeater.occurrence.min = 0;

    /* Si el contenedor se queda vacío, desaparece; si no, se conserva. */
    if (contenedor.children.length === 0) fields.splice(iGrupo, 1, repeater);
    else fields.splice(iGrupo + 1, 0, repeater);

    /* HubL: module.<grupo>.<rep> -> module.<rep> */
    const antes = html;
    html = html.replaceAll(`module.${grupo}.${rep}`, `module.${rep}`);
    console.log(`${mod.padEnd(24)} ${grupo}.${rep} -> ${rep}` +
                (antes === html ? "   ⚠ sin referencias en el HubL" : ""));
  }

  writeFileSync(rutaCampos, JSON.stringify(fields, null, 2) + "\n", "utf8");
  writeFileSync(rutaHtml, html, "utf8");
}
