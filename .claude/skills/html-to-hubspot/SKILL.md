---
name: html-to-hubspot
description: >-
  Use when the user asks to convert an already-designed, approved HTML/CSS/JS page
  into HubSpot CMS modules and a page — phrases like "crear esta página en HubSpot",
  "pasar/migrar esta página a HubSpot", "montar esto en HubSpot", "html to hubspot",
  "convertir la maqueta a módulos". Standardizes the migration so it is faithful to
  the approved design, reuses existing modules, and follows HubSpot CMS best practices.
  NOT for designing or redesigning — the approved HTML is the source of visual truth.
---

# html-to-hubspot

## Overview

Convierte una página **ya diseñada, desarrollada en HTML/CSS/JS y aprobada** en
módulos + página de HubSpot CMS. El HTML aprobado es la **fuente de verdad visual
y funcional**: este proceso no diseña ni rediseña.

**Dos principios rectores, en este orden:**

1. **FIDELIDAD AL DISEÑO > CREATIVIDAD.** El resultado debe verse y comportarse
   idéntico al HTML aprobado.
2. **REUTILIZAR > ADAPTAR > CREAR.** Nunca crees un módulo, header, footer,
   formulario o asset duplicado sin comprobar primero si ya existe.

Si un problema técnico obligaría a cambiar el diseño aprobado: **DETENTE y pregunta.**

## Lectura obligatoria antes de construir

Este skill NO reescribe lo que ya está documentado. Antes de tocar HubSpot, lee y
respeta:

- **REQUIRED:** `docs/platforms/hubspot.md` — mapeo núcleo→HubSpot, estructura del
  theme, reglas de `fields.json`, tooling/deploy y HubL útil.
- **REQUIRED:** `adapters/hubspot/README.md` — estado real del portal (cuenta
  `3807214` / `anahuac-mexico`), comandos de subida, y los gotchas ya vividos
  (rutas de imagen, repeaters a nivel raíz, sin macros HubL, `|default(x,true)`,
  `.webp` rechazado).
- **REQUIRED:** `AGENTS.md` §1–§3 — jerarquía de verdad, "un componente = una
  fuente única", separación editable/bloqueado, cambios no destructivos.
- `MEMORY.md` (raíz) — decisiones y gotchas con fecha (editor no re-ejecuta el JS
  del theme, límite de globales replicables, theme fields inyectados por template).
- `design/inventory.md` — qué componente vive en qué páginas: es la base del
  análisis de impacto antes de tocar un módulo compartido.

Los módulos y templates de referencia viven en `adapters/hubspot/theme/`. Usa
`admision-hero.module` como patrón de un módulo de sección, y
`proceso-de-admision.html` como patrón de ensamblado.

## Flujo obligatorio

```
1. Intake (preguntar solo lo que falte)
2. Análisis → mapa de componentes + tabla de reutilización
3. Presentar el PLAN y ESPERAR autorización   ← no se construye antes de esto
4. Construir solo lo necesario
5. Ensamblar la página
6. Validar (responsive + fidelidad vs HTML aprobado)
7. Reporte final
```

**No escribas una sola línea de código de módulo hasta completar los pasos 1–3 y
recibir autorización explícita.**

### 0. Puerta de contenido completo

"Aprobado" significa **sin pendientes**. Si el HTML trae marcadores de contenido
incompleto — `[PLACEHOLDER]`, `[PENDIENTE]`, `*-pendiente`, `media-pendiente`,
logos/imágenes sin resolver, o un formulario vacío — **no migres ese contenido a
ciegas**: DETENTE, lístalos y pregunta si el usuario tiene los assets/decisiones
finales o si los dejamos marcados como pendientes (nunca inventes el contenido).
Alinea con la puerta de `docs/readiness.md`. Recuerda: los assets no van en `.webp`.

### 1. Intake — pregunta SOLO lo que no tengas

No repreguntes lo que el usuario ya dio. Falta cubrir:

- **Página**: qué página se crea, ruta/URL del HTML aprobado, y nombre de la página.
- **Ubicación en HubSpot**: carpeta/directorio destino y template/estructura donde
  se monta (si aplica).
- **Módulos globales**: qué módulos de esta página deben ser Global Modules. **No
  asumas que todo módulo reutilizable es global** (ver "Límite de globales" abajo).

### 2. Análisis (antes de construir)

Lee el HTML/CSS/JS aprobado y produce:

1. **Mapa de componentes** (árbol), p. ej.:
   ```
   PAGE
   ├── Header
   ├── Hero
   ├── Benefits
   │   └── Benefit Card
   ├── CTA
   └── Footer
   ```
2. **Tabla de reutilización** con columnas:
   `Elemento | Módulo existente | Acción (reutilizar/adaptar/crear) | Nuevo módulo | Global/Local | Motivo`

Para llenarla, **busca antes de crear** (ver siguiente sección).

### 3. Presentar el plan y esperar autorización

Presenta el bloque de análisis (formato en "Plantilla de análisis") y termina con
**"¿Procedo con la implementación?"**. No continúes sin un sí explícito.

### 4–6. Construir, ensamblar, validar

Sigue las **Reglas de construcción** de abajo. Construye únicamente los módulos que
el plan aprobó como "crear". Ensambla con la sintaxis de template verificada.
Valida en Desktop / Tablet / Mobile y **compara contra el HTML aprobado**.

### 7. Reporte final

Entrega el bloque de "Plantilla de reporte final".

## Reutilización: buscar antes de crear

Antes de crear **cualquier** módulo:

1. Busca en `adapters/hubspot/theme/modules/` por **nombre** y por **funcionalidad**
   (`ls`, `grep` sobre labels de `meta.json`).
2. **Verifica contra el portal, no solo el repo.** `adapters/hubspot/theme/` es un
   **espejo** traído con `hs cms fetch`: puede estar desactualizado y otra persona
   pudo crear módulos en el portal que aún no están aquí. "No está en `theme/modules/`"
   **NO** garantiza "no existe". Antes de decidir crear, corrobora:
   `hs cms list anahuac-mexico/modules --account=3807214`. Si existe en el portal pero
   no en el repo → **no lo re-crees**: tráelo con `hs cms fetch` y reutilízalo.
3. Cruza con `design/inventory.md` para ver qué página ya usa ese componente.
   ⚠️ **"construido local" en el inventario ≠ módulo HubSpot.** El inventario y el
   sitio estático pueden tener un componente "construido" que **no** existe todavía
   como `.module` en el portal. No lo marques "reutilizar" en la tabla sin confirmar
   el `.module` real; si solo vive en el sitio estático, es un módulo a **crear**.
4. Si existe (como `.module` real, repo o portal) y sirve tal cual → **reutilízalo**.
5. Si existe pero necesita cambios → **analiza el impacto** (¿qué otras páginas lo
   usan?). Si el cambio puede afectarlas → **NO lo modifiques; pregunta primero**
   ofreciendo una variante o un módulo nuevo. Ver "Adaptar sin romper".
6. Si no existe → créalo, siguiendo el patrón del theme (nombre, `meta.json` y
   `fields.json` como `admision-hero.module`; `label` en español con sufijo
   "— Anáhuac"; `global: false` para secciones).

### Identidad de un módulo: de qué página es

- **Prefijo = dueño.** Los módulos con prefijo de página (`admision-*`, `apoyos-*`,
  `oferta-*`) pertenecen a **esa** página. Los sin prefijo (`hero`, `historias`,
  `experiencia`, `prestigio`…) son compartidos.
- **Nunca reutilices ni edites un módulo con prefijo de OTRA página.** Usar
  `admision-hero` para gastronomía y luego editarlo **cambia la página de admisión**.
  Para una sección propia de esta página, **crea `gastronomia-hero`**.
- Si un componente debe servir a varias páginas, **no lo dupliques con otro prefijo**:
  promuévelo a un módulo compartido sin prefijo (con aprobación del director) y
  actualiza `design/inventory.md`.

### Adaptar sin romper (solo cambios aditivos)

HubSpot guarda el contenido **por nombre de field** en cada página/instancia. Al
adaptar un módulo existente:

- ✅ **Permitido:** agregar fields **nuevos, opcionales y con `default`** que preserven
  el render actual.
- ⛔ **Prohibido sin autorización:** renombrar, borrar o cambiar el `id`/`type` de un
  field existente → **corrompe el contenido ya guardado** en las páginas vivas (los
  valores dejan de mapear y se pierden). Tampoco cambies el marcado de forma que
  rompa el contenido guardado de otras páginas.
- Un módulo **global** (header/footer) es compartido por definición: **cualquier**
  edición afecta todas las páginas → trátala como cambio compartido y pide autorización.
- **El análisis de impacto no es infalible.** `design/inventory.md` puede estar
  desactualizado igual que el espejo local, y no hay comando que liste qué páginas
  consumen un módulo. Por eso: ante cualquier módulo **sin prefijo (compartido)**,
  **asume que está en uso por varias páginas** aunque el inventario no lo diga, y
  aplica la regla aditiva + autorización sí o sí.

### Header y Footer — ya son globales, no los recrees

- Header = `theme/modules/encabezado.module` (`"global": true`, `module_id: 216442200966`).
- Footer = `theme/modules/pie-de-pagina.module` (`"global": true`, `module_id: 216442353251`).

Se **reutilizan** vía include de módulo global en el template — **nunca** se
duplican ni se editan solo para una página:

```hubl
{% module "header" path="../modules/encabezado", label="Encabezado (global)" %}
{% module "footer" path="../modules/pie-de-pagina", label="Pie de página (global)" %}
```

Si el diseño trae un header/footer que NO existe todavía, **informa y pregunta**
antes de crearlo, y si debe ser global.

### Formularios y assets

- **Formularios**: busca si el form ya existe en HubSpot antes de crear. Si no
  existe y requiere decisiones de negocio (campos, workflows), **pregunta antes**.
- **Assets** (imágenes, SVG, iconos, fuentes, video, PDF): usa los del theme; no
  sustituyas un asset aprobado sin autorización. Recuerda: el Design Manager
  **descarta `.webp` en silencio** → convierte a JPEG/PNG y verifica con
  `hs cms list` (detalle en `adapters/hubspot/README.md`).

### Límite de globales replicables

Un módulo global se edita una vez y cambia en todas partes — perfecto para header/
footer, peligroso cuando cada instancia debe variar (p. ej. una sección por área/
campus que NO es intercambiable). **No marques `global: true`** solo porque el
módulo se repite. Ante la duda, pregunta cuáles quiere el usuario como globales.

## Reglas de construcción

### Fidelidad (no rediseñar)

Porta el `<section>` del HTML aprobado a `module.html` **sin cambiar el marcado ni
las clases**. NO cambies colores, tipografías, tamaños, espaciados, textos,
imágenes, estructura visual ni el comportamiento responsive. No agregues secciones
no aprobadas ni "mejoras" UX/UI por iniciativa propia.

### Tokens, CSS y JS (no duplicar)

- Las clases del design system las estiliza `theme/css/main.css`. Por convención del
  theme, `module.css` y `module.js` van **vacíos** — no dupliques estilos ni JS ahí.
- Nunca hardcodees color/espaciado/radio/tipografía/sombra: solo variables
  semánticas de `tokens.css`. El CI (`npm run check:tokens`, Stylelint) rompe el
  build si metes valores crudos fuera de `tokens.css`.
- **Token faltante = escalar, no parchar.** Si el diseño aprobado usa un valor sin
  token semántico equivalente, **DETENTE y pregunta** (es un hueco del design system
  para el director): no inventes un token nuevo ni hardcodees el valor. Agregar un
  token toca `tokens.css`, compartido por todo el sitio → cambio global.
- **Evita colisiones de selector** (el linter NO las detecta, solo valores crudos):
  nombra todas las clases nuevas con el namespace BEM del módulo (`.<modulo>__…`) y,
  antes de agregarlas, `grep` la clase en `main.css` para confirmar que no redefines
  una existente.
- El JS del theme vive en `theme/js/main.js`. Revisa si la funcionalidad ya existe
  (animaciones `.reveal`, nav) o si HubSpot ya la da, antes de agregar librerías.

### Campos editables (con criterio)

- **No conviertas todo en editable.** Los fields deben tener sentido para un usuario
  de Marketing no técnico. Lo que el diseño bloquea (color/spacing/layout) vive en
  tokens, no en `fields.json`.
- Deriva el contrato de `design/components/<x>.md` (editable vs bloqueado).
- Patrón de texto plano del theme = **3 campos**: el texto (`text`), su `_tag`
  (`choice` H1–H6/p para cambiar etiqueta sin cambiar estilo) y su `_color`
  (`color`, default vacío = usa el token). Ver `admision-hero.module/fields.json`.
- Tamaños de tipografía = `choice` que mapea a tokens (`size-22`, `lead-size`…),
  nunca valores libres.

### Contenido repetitivo

Evalúa en este orden: repeater (`group` + `occurrence`) → group → nested group →
HubDB. **HubDB solo** cuando de verdad hay que administrar información estructurada/
reutilizable; no por tener varias cards.

- **Los repeaters van a nivel raíz de `fields.json`**, con `min: 0`. Un repeater
  anidado dentro de otro grupo pierde sus items en la primera edición (gotcha
  documentado en el README del adapter y en memoria).

### Gotchas HubL de obligada aplicación

(Detalle completo en `adapters/hubspot/README.md`.)

- **Nunca emitas una etiqueta/atributo directo desde un field**: usa
  `{{ item.tag|default('h3', true) }}` — el default de un field nuevo no hidrata en
  items ya guardados y `<>` se come la tarjeta.
- **Sin `{% macro %}`**: un macro con un atributo ausente hace que el módulo entero
  desaparezca sin error. Usa condicionales en línea.
- **Rutas de imagen**: no `url(../images/…)` en CSS ni rutas hardcodeadas en JS;
  pásalas como custom property con `get_asset_url(...)`.
- **Animaciones `.reveal`**: el editor de HubSpot no re-ejecuta el JS del theme, así
  que los elementos con `opacity:0` quedarían invisibles al editar. Todo template
  con animaciones de scroll incluye:
  ```hubl
  {% if is_in_editor %}<style>.reveal{opacity:1!important;transform:none!important}</style>{% endif %}
  ```

### Ensamblado de la página

Header/footer como módulo global (arriba). Cada sección va dentro del `dnd_area`:

```hubl
{% dnd_area "contenido" label="Contenido de la página" %}
  {% dnd_section %}
    {% dnd_row %}{% dnd_module path="../modules/<seccion>" %}{% end_dnd_module %}{% end_dnd_row %}
  {% end_dnd_section %}
{% end_dnd_area %}
```

Referencia viva: `adapters/hubspot/theme/templates/proceso-de-admision.html`.

### Subir sin sobrescribir (secuencia obligatoria)

`hs cms upload <local> anahuac-mexico/modules/<x>.module` **sobrescribe** lo que haya
en esa ruta del portal. Antes de subir:

1. **Commitea el repo** con el estado actual: el repo versionado es tu único rollback
   si una subida pisa algo.
2. `hs cms lint adapters/hubspot/theme/modules/<x>.module --account=3807214`
3. **Verifica que la ruta destino no pisa un módulo ajeno**:
   `hs cms list anahuac-mexico/modules --account=3807214`. Sube a la ruta del módulo
   correcto; nunca a la de otro. **Si en esa ruta ya existe un módulo que no es el que
   tú traes (aunque el nombre coincida, p. ej. otro `gastronomia-hero` que creó
   alguien más), DETENTE**: reconcilia con `hs cms fetch` antes de subir; no lo pises.
4. `hs cms upload …` y luego `hs cms list …` para **confirmar** (el "SUCCESS" no basta;
   ver gotcha `.webp`).

⚠️ **`main.css`, `main.js`, `tokens.css` y los assets son compartidos por TODAS las
páginas.** Subirlos es un **cambio global**: el CSS nuevo debe ser **aditivo y con
scope por módulo (BEM)**, sin redefinir selectores existentes. Trátalo como "modificar
algo compartido" (sección de Seguridad): analiza impacto y pide autorización.

### La página se crea en el portal, no por CLI

El CLI sube **theme / módulos / templates**; la **página** se crea a mano en el editor
del portal desde el template, y los cambios del `dnd_area` en el template **no se
propagan a páginas ya creadas** (cada página guarda su snapshot — ver memoria). En el
plan y el handoff deja explícito **qué queda en el repo/portal como código** y **qué
debe hacer una persona en el portal** (crear la página, armar el `dnd_area`).

### Validación

Comandos completos en `adapters/hubspot/README.md`. Corre `npm run validate`
(tokens, readiness, CSS, títulos) localmente.
Valida en Desktop / Tablet / Mobile y compara sección por sección contra el HTML
aprobado. **No marques un check como "OK" sin evidencia real** (captura, lint que
pasó, verificación en el editor): si un viewport o el form no se pudo comprobar,
repórtalo como "Pendiente", no como "OK".

## Seguridad antes de modificar algo existente (OBLIGATORIO)

No modifiques un módulo/token/formulario compartido sin avisar si puede estar en uso
por otras páginas. Antes de tocarlo, indica: **qué** se modifica, **dónde** se usa
(cruza con `design/inventory.md`), **qué** cambios, **qué riesgo** y **si puede
afectar otras páginas** — y pide autorización.

## Plantilla de análisis

```
PÁGINA:            [nombre]
UBICACIÓN:         [folder de HubSpot]
TEMPLATE:          [plantilla / dnd]
HEADER:            [Existente (reutilizar) / Crear — preguntar]
FOOTER:            [Existente (reutilizar) / Crear — preguntar]
MÓDULOS A REUTILIZAR:
  - [...]
MÓDULOS A ADAPTAR (con impacto):
  - [...]
MÓDULOS A CREAR:
  - [...]
MÓDULOS GLOBALES:
  - [...]
FORMULARIOS:
  - [...]
ASSETS:
  - [...]
RIESGOS:
  - [...]

¿Procedo con la implementación?
```

## Plantilla de reporte final

```
## Página creada
Nombre / Ubicación / Template

## Módulos reutilizados
- [...]
## Módulos creados
- [...]
## Global Modules
- [...]
## Formularios
- [...]
## Assets
- [...]

## Validación
Desktop / Tablet / Mobile / Links / Forms / JavaScript: OK | Pendiente

## Pendientes
- [...]

## Cambios respecto al HTML aprobado
[Diferencias, o: "Sin diferencias visuales o funcionales detectadas."]
```

## Red flags — DETENTE

- Vas a crear un módulo sin haber buscado si ya existe (repo **y portal**).
- Confías en `theme/modules/` local sin verificar contra el portal (`hs cms list`).
- Vas a marcar "reutilizar" un componente que solo existe en el sitio estático /
  inventario pero **no** como `.module` real.
- Vas a reutilizar o editar un módulo con **prefijo de OTRA página** (p. ej.
  `admision-*`) para esta página.
- Vas a renombrar/borrar/cambiar el `type` de un field ya existente de un módulo en uso.
- Vas a subir (`hs cms upload`) sin verificar que la ruta destino no pisa otro módulo,
  o sin haber comiteado el estado actual.
- Vas a subir `main.css`/`main.js`/assets (cambio global) con CSS que redefine
  selectores existentes en vez de ser aditivo y con scope por módulo.
- El HTML trae placeholders/pendientes o un form vacío y ibas a migrarlos igual.
- Vas a crear/editar un header o footer (cualquier edición de un global es cross-page).
- Un problema técnico te empuja a cambiar color/tamaño/espaciado/texto/estructura
  del diseño aprobado.
- Vas a modificar un módulo/token compartido que otras páginas usan.
- Vas a marcar `global: true` en un módulo cuyas instancias deben variar.
- Empezaste a escribir código antes de presentar el plan y recibir autorización.

Todas significan: **para y pregunta antes de continuar.**

## Objetivo

No es copiar HTML a HubSpot. Es convertir una implementación aprobada en una
implementación **fiel, administrable, reutilizable, mantenible, escalable y
alineada a las mejores prácticas de HubSpot CMS**. No asumas. No dupliques. No
rediseñes. No modifiques lo compartido sin autorización.
