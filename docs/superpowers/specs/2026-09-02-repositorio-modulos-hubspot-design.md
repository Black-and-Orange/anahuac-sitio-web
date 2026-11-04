# Repositorio centralizado de módulos HubSpot — Diseño

- **Fecha:** 2026-09-02
- **Estado:** Aprobado (diseño) — pendiente de plan de implementación
- **Alcance elegido:** Solo Anáhuac (portal `3807214` / `anahuac-mexico`). NO es una
  librería cross-proyecto.

## Problema

El equipo quiere una **fuente de verdad de los módulos reutilizables de HubSpot**,
consumible por el skill `html-to-hubspot`, con documentación por módulo, catálogo,
clasificación, reglas anti-duplicado y sincronización con el portal.

## Decisión de arquitectura

El theme `adapters/hubspot/theme/` **ya es** la fuente de verdad versionada (espejo
del portal, deployable con `hs cms`). Por lo tanto:

- **No se crea un repo/carpeta paralelo con copias** → duplicaría los 34 módulos y
  violaría "un componente = una fuente única".

## Precisiones del solicitante (2026-09-02, aprobación del spec)

1. **`meta.json.global` es evidencia técnica de HubSpot, no la clasificación del
   equipo.** El tier arquitectónico viene de `registry.json`. Si `meta.global` y
   `registry.tier` discrepan, **NO autocorregir**: el catálogo usa la clasificación
   del equipo (registry) y el generador **reporta** la discrepancia para revisión.
2. **Anti-duplicado semántico:** comparar no solo por nombre, también funcionalidad,
   estructura, campos, propósito, variantes, comportamiento visual y responsive.
   `hero`, `oferta-hero`, `admision-hero` son candidatos relacionados. El catálogo y
   el skill deben ayudar a detectar módulos funcionalmente similares.
3. **Compatibilidad antes de reutilizar:** revisar campos, HTML, variantes, CSS, JS,
   responsive y dependencias. Cadena de decisión:
   `EXISTE → ¿HACE LO MISMO? → ¿ES COMPATIBLE? → ¿AFECTA OTRAS PÁGINAS? →
   REUTILIZAR / ADAPTAR / CREAR`. No modificar un módulo solo porque "se ve parecido".
4. **Fuente de verdad y sync:** Git = fuente de verdad del código; HubSpot = entorno
   de publicación. Flujo normal `Git → revisión → hs cms upload → HubSpot`. Si un
   módulo está en HubSpot y no en el repo: `HubSpot → hs cms fetch → revisión →
   incorporación`. **Nunca sobrescribir el repo automáticamente con HubSpot**; toda
   diferencia repo↔portal se reporta antes de sincronizar de forma destructiva.
- **No se reorganizan los `.module` en carpetas anidadas** → HubSpot referencia los
  módulos por ruta (`{% module path="../modules/encabezado" %}`); mover/anidar
  cambiaría rutas y `hs cms upload` los re-crearía en rutas nuevas, rompiendo las
  páginas **ya vivas** (Home, Oferta académica, Proceso de admisión). Es destructivo.

**La clasificación y la documentación viven como una capa de metadata + catálogo +
docs encima del theme.** Los archivos de módulo no se mueven, renombran ni suben.

## No-objetivos (YAGNI)

- Sin `preview/` de imágenes por ahora (pesan y derivan; se añaden después si se piden).
- Sin claves propias dentro de `meta.json` (no ensuciar el schema de HubSpot).
- Sin dependencias nuevas de npm (el generador es Node puro, como el resto de `scripts/`).
- Sin mover/renombrar/consolidar módulos en esta entrega (eso requeriría autorización
  y es una tarea aparte y destructiva).

## Componentes

### 1. Estructura de archivos (aditiva)

```
docs/modules/
├── README.md          # guía: alta/modificación, decidir global, naming, anti-dup, revisión, sync (4 casos)
├── TAXONOMY.md        # categorías + 3 tiers de reutilización
├── CATALOG.md         # GENERADO (no editar a mano)
├── registry.json      # EDITADO a mano (estado, tier, variantes, notas, páginas de portal)
└── <nombre>.md        # doc por módulo (bloque de campos GENERADO + criterio a mano)
scripts/
└── hs-catalogo.mjs    # generador idempotente
package.json           # + script "docs:modulos"
.claude/skills/html-to-hubspot/SKILL.md   # + paso: consultar CATALOG.md
```

### 2. `registry.json` — única fuente de lo humano

Objeto por nombre técnico de módulo. Solo lo que HubSpot no guarda:

```json
{
  "hero": {
    "estado": "Approved",
    "tier": "reusable",
    "variantes": [],
    "notas": "Único módulo con module.css propio (excepción a la convención).",
    "paginas_portal": []
  },
  "oferta-hero": {
    "estado": "Approved",
    "tier": "page-specific",
    "variantes": [],
    "notas": "Página Oferta académica viva en el portal; su template no está versionado en el repo (hueco del espejo). Reconciliar con hs cms fetch.",
    "paginas_portal": ["Oferta académica"]
  }
}
```

- `estado` ∈ `Draft | Development | Approved | Deprecated`.
- `tier` ∈ `global | reusable | page-specific`.
- `paginas_portal`: páginas vivas en el portal cuyo template NO está en el repo (no
  derivables de templates). Las páginas con template se derivan automáticamente.
- Un módulo sin entrada en `registry.json` se reporta como `estado: Draft, tier: (inferido)`
  y el generador lo marca como "falta registrar".

### 3. `scripts/hs-catalogo.mjs` — generador

Entradas: los 34 `meta.json` + `fields.json`, `registry.json`, y los `templates/*.html`.
Salidas: `CATALOG.md` (completo) y el bloque de campos de cada `<nombre>.md`.

Algoritmo:

1. Listar `adapters/hubspot/theme/modules/*.module`. Para cada uno leer `meta.json`
   (`label`, `global`, `categories`) y `fields.json` (campos de primer nivel: `name`,
   `type`, `required`, `default`, y si es `group` con `occurrence` → repeater).
2. Derivar **uso por página**: parsear `templates/*.html`, extraer los `path=".../modules/<x>"`
   y mapear nombre-de-template → nombre-de-página con una tabla en el generador
   (`pagina.html→Home`, `proceso-de-admision.html→Proceso de admisión`,
   `apoyos-economicos.html→Apoyos económicos`, `pagina-interna.html→(plantilla interna)`).
   Sumar `paginas_portal` de `registry.json`.
3. Fusionar con `registry.json` (estado, tier, variantes, notas).
4. **Tier = `registry.json` (clasificación del equipo), siempre.** Cuando un módulo no
   tenga entrada en `registry.json`, sugerir un tier por defecto (`global:true`→`global`;
   prefijo `admision-/apoyos-/oferta-` o `descubre`→`page-specific`; sin prefijo→
   `reusable`) y marcarlo "falta registrar". **Detectar discrepancia** entre
   `meta.global` y `registry.tier` (p. ej. `meta.global:true` con `tier≠global`, o
   `tier==global` con `meta.global:false`): NO autocorregir; el catálogo usa el tier del
   equipo y se emite una lista de discrepancias al final del run (stderr + sección en
   `CATALOG.md`).
5. Determinar **categoría de taxonomía** desde `meta.json.categories` + reglas de
   nombre (ver TAXONOMY.md). `DESIGN`→Global(Header/Footer), `FORMS_AND_BUTTONS`→Forms,
   `BODY_CONTENT`→según nombre (hero/faq/pasos/cta/…).
6. Escribir `CATALOG.md`:
   - Tabla agrupada por categoría con columnas `Módulo · Categoría · Tier (equipo) ·
     Global (HS) · Reutilizable · Estado · Páginas · Doc`. `Tier (equipo)` viene de
     `registry.json`; `Global (HS)` viene de `meta.global` (evidencia técnica) — se
     muestran ambas para hacer visible cualquier discrepancia.
   - Sección **"Familias funcionales"**: agrupa módulos semánticamente relacionados
     (heroes, formularios, faq, pasos, cta, experiencia…) para que el skill detecte
     similares aunque el nombre difiera. La familia se deriva del "tipo base" del
     nombre/categoría (`hero`, `form`, `faq`, `pasos`, `cta`, `experiencia`, …).
   - Sección **"Discrepancias / pendientes"**: módulos sin registrar, y discrepancias
     `meta.global` vs `registry.tier` (del paso 4).
7. Para cada `<nombre>.md`: si no existe, crearlo desde la plantilla (con secciones de
   criterio en blanco marcadas `> TODO`); si existe, **reemplazar solo** el contenido
   entre `<!-- AUTO:campos -->` y `<!-- /AUTO -->`, dejando intacta la prosa humana.

Idempotente: correr `npm run docs:modulos` cuantas veces sea, sin pisar lo escrito a
mano. Solo lectura sobre los módulos; nunca los modifica.

### 4. `CATALOG.md` — formato (generado)

```md
<!-- GENERADO por scripts/hs-catalogo.mjs — no editar a mano. -->

## Global
| Módulo | Categoría | Tier (equipo) | Global (HS) | Reutilizable | Estado | Páginas | Doc |
|---|---|---|---|---|---|---|---|
| encabezado | Header | global | Sí | Sí | Approved | (todas) | [doc](encabezado.md) |
| pie-de-pagina | Footer | global | Sí | Sí | Approved | (todas) | [doc](pie-de-pagina.md) |

## Content
| hero | Hero | reusable | No | Sí | Approved | Home | [doc](hero.md) |
...

## Familias funcionales
- **Hero:** hero · admision-hero · apoyos-hero · oferta-hero  → comparar antes de crear.
- **Forms:** dudas-contacto · admision-formulario · apoyos-formulario · oferta-form
- **FAQ:** admision-faq · apoyos-faq   ·   **Pasos:** admision-pasos · apoyos-pasos
- **CTA/cierre:** siguiente-paso · admision-cta · admision-siguiente-paso · comienza-tu-camino
- **Experiencia:** experiencia · oferta-experiencia

## Discrepancias / pendientes
- `experiencia` — meta.global: **true**, registry.tier: **global** → OK.
- (módulos sin entrada en registry.json aparecen aquí como "falta registrar").
```

### 5. Doc por módulo `<nombre>.md` — plantilla

```md
# {Label}

- **Nombre técnico:** `{carpeta}.module`
- **Categoría:** {taxonomía}   ·   **Familia funcional:** {familia} (similares: {lista})
- **Tier (equipo):** {global | reusable | page-specific}
- **Global (HS):** {Sí|No}   ·   **Reutilizable:** {Sí|No}   ·   **Estado:** {…}

## Descripción
> TODO (a mano)

## Propósito
> TODO

## Cuándo usarlo
> TODO

## Cuándo NO usarlo
> TODO

## Campos
<!-- AUTO:campos -->
| Campo | Tipo | Obligatorio | Default |
|---|---|---|---|
| … | … | … | … |
<!-- /AUTO -->

## Variantes
> TODO

## Dependencias
- CSS: `theme/css/main.css` (+ `module.css` propio si aplica)
- JS: `theme/js/main.js`

## Responsive
Desktop / Tablet / Mobile — según el HTML aprobado.

## Ejemplo de uso (HubL)
```hubl
{% dnd_module path="../modules/{carpeta}" %}{% end_dnd_module %}
```
```

### 6. `TAXONOMY.md`

- **Categorías:** Global, Header, Footer, Navigation, Hero, Content, Cards, CTA, Forms,
  FAQ, Media, Data, Utility. Cada una mapeada a la(s) `categories` de HubSpot
  (`BODY_CONTENT`, `DESIGN`, `FORMS_AND_BUTTONS`) y a reglas de nombre.
- **Tres tiers de reutilización** (definición literal del brief):
  - **Global Module** — un cambio afecta múltiples páginas.
  - **Reusable Module** — se usa en varias páginas, pero cada página mantiene su
    propia configuración/contenido.
  - **Page-specific Module** — creado para una página; no se reutiliza salvo que
    después se decida lo contrario (entonces se promueve a reusable/global).

### 7. `README.md`

1. Qué es y para qué sirve (fuente de verdad + catálogo del skill).
2. Estructura del directorio.
3. Cómo **agregar** un módulo (proceso condensado del brief: detectar necesidad →
   buscar existente en catálogo y portal → evaluar reutilización → implementar en
   `theme/modules/` → probar → responsive/a11y → aprobar → documentar → registrar en
   `registry.json` → `npm run docs:modulos` → subir con `hs cms`).
4. Cómo **modificar** un módulo (solo aditivo; ver control de cambios).
5. Cómo decidir si un módulo debe ser **global** (+ advertencia del límite de globales
   replicables).
6. **Convención de nombres** — extiende `docs/naming.md` (no lo duplica): kebab-case,
   prefijo de página para page-specific, sin prefijo para compartidos; identificadores
   en inglés, labels en español con sufijo "— Anáhuac".
7. Reglas **anti-duplicado** (no `hero-v2/-new/-final`; extender o variar con razón).
8. **Estados** y proceso de revisión (Draft→Development→Approved→Deprecated).
9. **Sincronización con HubSpot** — **Git = fuente de verdad del código; HubSpot =
   entorno de publicación.** Flujo normal `Git → revisión → hs cms upload → HubSpot`.
   Los 4 casos (repo↔portal):
   - Existe en repo + en portal → reutilizar.
   - Existe en repo + no en portal → evaluar publicación (`hs cms upload`).
   - No en repo + existe en portal → no duplicar; `HubSpot → hs cms fetch → revisión →
     incorporar`. **Nunca sobrescribir el repo automáticamente.**
   - En ninguno → crear nuevo.
   Toda diferencia repo↔portal se **reporta antes** de cualquier sync destructiva.
10. **Garantía no-destructiva:** esta capa nunca mueve/renombra/sube módulos; el
    generador es solo-lectura sobre el theme.

### 8. Integración con el skill `html-to-hubspot`

En la sección "Reutilización: buscar antes de crear":

- Nuevo primer paso: **consultar `docs/modules/CATALOG.md`** (catálogo del repo) antes
  de `hs cms list` (portal). El catálogo da tier/estado/páginas y la sección
  **"Familias funcionales"**.
- **Búsqueda semántica, no solo por nombre:** comparar funcionalidad, estructura,
  campos, propósito, variantes, comportamiento visual y responsive. Usa las "Familias
  funcionales" del catálogo para detectar similares (p. ej. antes de crear un hero,
  revisar `hero/admision-hero/apoyos-hero/oferta-hero`).
- **Cadena de compatibilidad antes de reutilizar:**
  `EXISTE → ¿HACE LO MISMO? (fields/HTML/variantes/CSS/JS/responsive/dependencias) →
  ¿ES COMPATIBLE? → ¿AFECTA OTRAS PÁGINAS? → REUTILIZAR / ADAPTAR / CREAR`. No modificar
  un módulo solo porque "se ve parecido".
- Al final del flujo: **una vez creado y aprobado un módulo nuevo → registrarlo en
  `registry.json` y correr `npm run docs:modulos`** para mantener catálogo y docs al día.
- **Sync no destructivo:** `Git → revisión → hs cms upload → HubSpot`. Si el portal
  tiene un módulo que no está en el repo → `hs cms fetch → revisión → incorporar`;
  nunca sobrescribir el repo automáticamente. Reportar toda diferencia repo↔portal
  antes de sincronizar de forma destructiva.

### 9. Hallazgos de auditoría a reflejar desde el arranque

- `experiencia` y `siguiente-paso` tienen `meta.global:true` (evidencia técnica). El
  equipo los clasifica `tier: global` en `registry.json` → sin discrepancia. Se deja
  nota para reconciliar con el README del adapter, que solo mencionaba header/footer.
- `hero` tiene `module.css` propio (2 128 b) → **excepción** documentada en su doc.
- **Oferta académica:** módulos presentes, **sin template versionado** en el repo →
  ítem de reconciliación (`paginas_portal` + nota en `registry.json`).
- `apoyos-*`: construidos en repo pero la página **no está migrada** → `estado: Development`.

## Mapeo página→módulos (derivado de templates, 2026-09-02)

- **Home** (`pagina.html`): hero, historias, eventos, prestigio, experiencia,
  licenciaturas, comienza-tu-camino, dudas-contacto, siguiente-paso.
- **Proceso de admisión** (`proceso-de-admision.html`): admision-cta, -faq, -fechas,
  -formulario, -hero, -pasos, -propedeuticos, -siguiente-paso.
- **Apoyos económicos** (`apoyos-economicos.html`): apoyos-asesoria, -consideraciones,
  -detalle, -faq, -financiamiento, -formulario, -hero, -panorama, -pasos.
- **Oferta académica:** sin template en repo; módulos `oferta-*` + `descubre` (por
  `registry.json`).
- Globales presentes en todas: encabezado, pie-de-pagina.

## Testing / verificación

- El generador se valida corriéndolo sobre los 34 módulos: `CATALOG.md` lista los 34,
  la re-ejecución no cambia la prosa humana (idempotencia), un módulo sin entrada en
  `registry.json` se marca "falta registrar", y una discrepancia `meta.global` vs
  `registry.tier` aparece en "Discrepancias / pendientes".
- `npm run docs:modulos` **NO** se integra a `npm run validate` ni al CI (decisión
  confirmada): se corre a demanda.

## Entregables

1. `docs/modules/README.md`, `TAXONOMY.md`, `registry.json`.
2. `scripts/hs-catalogo.mjs` + script `docs:modulos` en `package.json`.
3. `CATALOG.md` generado + los **34 stubs** `<nombre>.md` (estructura + campos
   generados desde el inicio). Prosa de criterio: **completa** para los módulos de las
   3 páginas vivas (Home, Oferta académica, Proceso de admisión); el resto queda como
   stub con `> TODO` y se completa **incremental** conforme se use/revise cada módulo.
   No se retrasa la creación del repositorio por redactar los 34 a mano de golpe.
4. Edición de `.claude/skills/html-to-hubspot/SKILL.md` (paso de catálogo).
5. Reporte final: hallazgos, duplicados/consolidables detectados, globales, y cómo lo
   usa el skill.
