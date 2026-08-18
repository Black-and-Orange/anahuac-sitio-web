#!/usr/bin/env node
/* Segunda pasada aditiva: interruptores de visibilidad por dato y tamaño del
   porcentaje, para los módulos de Panorama y Detalle (y el CTA de
   Financiamiento). Se añade un grupo "Visibilidad" en la pestaña CONTENT.

   Uso: node scripts/hs-agregar-visibilidad.mjs */

import { readFileSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

/* Los valores son nombres de token: el HubL los inyecta como var(--token). */
const TAMANOS = [
  ["size-22", "Pequeño"],
  ["size-26", "Mediano"],
  ["size-30", "Grande"],
  ["heading-3-size", "Muy grande"],
  ["size-48", "Enorme"],
];

const bool = (grupo, nombre, label, def = true, help) => ({
  id: `${grupo}.${nombre}`, name: nombre, label,
  ...(help ? { help_text: help } : {}),
  type: "boolean", display: "toggle", default: def,
});

const tamano = (grupo, nombre, label, def) => ({
  id: `${grupo}.${nombre}`, name: nombre, label,
  help_text: "Tamaños del design system; no acepta valores libres.",
  type: "choice", display: "select", choices: TAMANOS, default: def,
});

const G = "grupo_visibilidad";

const CONFIG = {
  "apoyos-panorama": [
    bool(G, "mostrar_rango", "Mostrar el porcentaje"),
    tamano(G, "tamano_rango", "Tamaño del porcentaje", "heading-3-size"),
    bool(G, "mostrar_perfil", "Mostrar «Perfil»"),
    bool(G, "mostrar_requisito", "Mostrar «Requisito»"),
    bool(G, "mostrar_nota", "Mostrar la nota al pie"),
    bool(G, "mostrar_enlace", "Mostrar el enlace «Ver detalles»"),
  ],
  "apoyos-detalle": [
    bool(G, "mostrar_rango", "Mostrar el porcentaje"),
    tamano(G, "tamano_rango", "Tamaño del porcentaje", "size-26"),
    bool(G, "mostrar_descripcion", "Mostrar la descripción"),
    bool(G, "mostrar_perfil", "Mostrar «Perfil ideal»"),
    bool(G, "mostrar_requisito", "Mostrar «Requisito»"),
    bool(G, "mostrar_evaluacion", "Mostrar «Cómo se evalúa»"),
    bool(G, "mostrar_notas", "Mostrar «Notas importantes»"),
    bool(G, "mostrar_cta", "Mostrar el botón «Solicitar información»"),
  ],
  "apoyos-financiamiento": [
    bool(G, "mostrar_combinable", "Mostrar la etiqueta «Combinable con apoyo»"),
    bool(G, "mostrar_cta", "Mostrar el enlace «Más información»"),
  ],
  "apoyos-consideraciones": [
    bool(G, "mostrar_iconos", "Mostrar los iconos"),
  ],
};

let total = 0;
for (const [modulo, campos] of Object.entries(CONFIG)) {
  const ruta = `${BASE}/${modulo}.module/fields.json`;
  const fields = JSON.parse(readFileSync(ruta, "utf8"));

  let grupo = fields.find((f) => f.name === G);
  if (!grupo) {
    grupo = {
      id: G, name: G, label: "Visibilidad",
      help_text: "Oculta datos sin borrarlos: el contenido se conserva por si lo vuelves a activar.",
      type: "group", expanded: false, tab: "CONTENT", children: [],
    };
    /* Antes del grupo de estilos para que quede junto al contenido */
    const iEstilos = fields.findIndex((f) => f.name === "grupo_estilos");
    if (iEstilos === -1) fields.push(grupo);
    else fields.splice(iEstilos, 0, grupo);
  }

  let añadidos = 0;
  for (const campo of campos) {
    if (grupo.children.some((c) => c.name === campo.name)) continue;
    grupo.children.push(campo);
    añadidos++;
  }

  writeFileSync(ruta, JSON.stringify(fields, null, 2) + "\n", "utf8");
  console.log(`${modulo.padEnd(24)} +${añadidos} campos`);
  total += añadidos;
}
console.log(`\nTotal: ${total} campos añadidos.`);
