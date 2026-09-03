# `hero`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `hero.module` |
| Label HubSpot | Hero — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `hero` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `doble-cta`, `encabezado-principal`, `imagen-o-video`, `mosaico-multimedia`, `panel-richtext` |
| Variantes verificadas | — |
| Notas curatoriales | Único módulo con module.css propio (excepción a la convención de module.css vacío). El mosaico de cuatro posiciones admite imagen o video por posición, por lo que no es estructuralmente equivalente a los heroes internos. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`oferta-hero`](./oferta-hero.md): score 0.543; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `doble-cta`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`apoyos-hero`](./apoyos-hero.md): score 0.431; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`admision-hero`](./admision-hero.md): score 0.420; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.hero`, `.section-pad`.
- Elementos: `a:2`, `div:6`, `dynamic:1`, `figure:1`, `img:1`, `section:1`, `source:1`, `video:1`.
- Estructura padre→hijo: `div>a:2`, `div>div:5`, `div>dynamic:1`, `div>figure:1`, `figure>img:1`, `figure>video:1`, `section>div:1`, `video>source:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>div:2`, `section>div>div>div>div>a:2`, `section>div>div>dynamic:1`, `section>div>div>figure:1`, `section>div>div>figure>img:1`, `section>div>div>figure>video:1`, `section>div>div>figure>video>source:1`.
- Clases: `.btn`, `.btn-dark`, `.btn-light`, `.button-row`, `.container`, `.hero`, `.hero-actions`, `.hero-card`, `.hero-copy`, `.hero-grid`, `.hero-inner`, `.hero-media`, `.hero-video`, `.pos-`, `.reveal`, `.section-pad`.
- IDs: `#inicio`.
- Data attributes: `data-offset`, `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `content`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero .hero-card`, `.adm-hero .hero-card p`, `.adm-hero-info .button-row`, `.apo-hero .hero-card`, `.apo-hero .hero-card p`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.hero`, `.hero .btn-dark`, `.hero .btn-light`, `.hero .hero-card`, `.hero h1`, `.hero-actions`, `.hero-card`, `.hero-card p`, `.hero-copy`, `.hero-copy h1`, `.hero-grid`, `.hero-inner`, `.hero-media`, `.hero-media img`, `.hero-media video`, `.hero-media.pos-0`, `.hero-media.pos-1`, `.hero-media.pos-2`, `.hero-media.pos-3`, `.oferta-hero .hero-card`, `.oferta-hero .hero-card p`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: `[data-offset]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0])`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`hero` es la apertura del Home y lo único que se ve antes del primer scroll. Deriva
literalmente de `<section class="hero section-pad" id="inicio">` de la página aprobada
`Inicio.html` (líneas 112-146): H1, panel naranja con la promesa, dos CTAs y un mosaico
de cuatro piezas multimedia.

Frente a esa página estática el módulo hace una sola traducción deliberada. Donde
`Inicio.html` coloca cuatro `<video class="hero-img img-a…img-d">` fijos, `module.html`
recorre `image_1..image_4` y `video_1..video_4` y emite cuatro
`<figure class="hero-media pos-0…pos-3">` que resuelven, casilla por casilla, entre
`<video class="hero-video">` (si el field `video_N` trae URL) e `<img>` (si no; el
`poster` cae a los PNG de `images/hero-grid-fallback-imgs/`). Esa es la evidencia de las
capacidades `mosaico-multimedia` e `imagen-o-video`: **la retícula es fija y el medio de
cada casilla es administrable**. Las clases `.hero-img`/`.img-a…img-d` de la página
estática no sobrevivieron a la migración y no existen en `theme/css/main.css`: el
contrato del theme es `.hero-media.pos-N`.

El grupo `grupo_estilos` y `heading_color` no pintan nada por sí mismos: el HubL los
convierte en custom properties `--home-hero-*` en el `style` inline de la sección, y
quien las consume es `main.css` (`.hero .hero-card`, `.hero h1`, `.hero .btn-dark`,
`.hero .btn-light`), siempre con fallback al token. Con los campos vacíos el render es
idéntico al aprobado.

## Cuándo usar

- Apertura de una `LANDING_PAGE` o `SITE_PAGE` cuyo diseño pide exactamente esta
  composición: titular + panel de oferta + dos CTAs + mosaico de cuatro piezas. Si el
  mosaico no está en el diseño, no es este módulo.
- Sólo desde un template que cargue `css/tokens.css`, `css/main.css` y `js/main.js` como
  hace `templates/pagina.html`. `module.css` **no basta** (ver «Contrato de
  compatibilidad → css»).
- Cuando cada página necesita su propio contenido: es `tier: reusable` con
  `meta.global: false`, así que dos páginas con `hero` no comparten nada.
- Cuando se quiere video de fondo autoplay-silencioso por casilla. El desfase de arranque
  sólo existe en las posiciones 0 y 2, con `data-offset` 1.5 y 3 escritos en
  `module.html`: no es configurable.
- Cuando basta con dos CTAs de rol fijo (`btn-dark` primario, `btn-light` secundario), que
  se muestran u ocultan en bloque con `mostrar_botones`.

## Cuándo no usar

- **Si el número de piezas no es cuatro.** No hay repeater: son ocho fields numerados y
  `main.css` sólo define `.pos-0`…`.pos-3`. Una quinta casilla exige fields nuevos *y*
  reglas de grid nuevas en CSS transversal.
- **Si se necesita eyebrow, botones repetibles, variantes de botón o imagen lateral.**
  Compara primero con `admision-hero`, `apoyos-hero` y `oferta-hero`. El generador los propone como
  candidatos (`oferta-hero`: 0.543; `apoyos-hero`: 0.431; `admision-hero`: 0.420) por familia `hero` y por
  `encabezado-principal` + `panel-richtext`, pero ninguno comparte el mosaico: la brecha
  es de jerarquía HTML y, según §9 del README, es **bloqueante**.
- **A la inversa, tampoco sustituye a un hero interno.** `hero` no tiene `eyebrow` ni
  botones repetibles; migrar contenido de `admision-hero` a `hero` perdería fields.
- **Dos instancias en la misma página.** El `id="inicio"` está escrito en `module.html`:
  se duplicaría. Además el H1 se repetiría salvo que se baje `heading_tag` a otro nivel.
- **Si el template destino no carga `js/main.js`.** Se pierde el arranque desfasado de los
  videos. En las plantillas versionadas, `html.no-js` mantiene visible el contenido; solo
  quedaría en `opacity: 0` si una plantilla ajena omitiera además esa clase de rescate.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `heading` | `text` | no | `Forma tu futuro en Anáhuac México` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h1` | `null` | no | `null` |
| `heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `null` |
| `offer_text` | `richtext` | no | `<p>Descubre una educación que te prepara para generar un impacto real. Explora nuestras licenciaturas y encuentra tu camino.</p>` | `null` | no | `null` |
| `primary_btn_text` | `text` | no | `Ver licenciaturas` | `null` | no | `null` |
| `primary_btn_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#licenciaturas","type":"EXTERNAL"}}` | `null` | no | `null` |
| `secondary_btn_text` | `text` | no | `Proceso de admisión` | `null` | no | `null` |
| `secondary_btn_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#admisiones","type":"EXTERNAL"}}` | `null` | no | `null` |
| `mostrar_botones` | `boolean` | no | `true` | `null` | no | `null` |
| `image_1` | `image` | no | `{"alt":"Estudiante Anáhuac con tablet","src":""}` | `null` | no | `null` |
| `image_2` | `image` | no | `{"alt":"Estudiantes Anáhuac","src":""}` | `null` | no | `null` |
| `image_3` | `image` | no | `{"alt":"Estudiante de medicina Anáhuac","src":""}` | `null` | no | `null` |
| `image_4` | `image` | no | `{"alt":"Jugadores Anáhuac","src":""}` | `null` | no | `null` |
| `video_1` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiante-tablet.mp4` | `null` | no | `null` |
| `video_2` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiantes-saltando.mp4` | `null` | no | `null` |
| `video_3` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiante-medicina.mp4` | `null` | no | `null` |
| `video_4` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/jugadores-corriendo.mp4` | `null` | no | `null` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_panel_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_panel_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_panel` | `choice` | no | `lead-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido de las diez dimensiones que evalúa `evaluateCompatibility`, separando lo que es contrato
duro de lo que es margen real. Las severidades siguen la tabla de `README.md` §9.

**`metadata`.** Duro: las cinco capacidades curadas describen el comportamiento observable;
que falte `mosaico-multimedia` o `imagen-o-video` en un
objetivo responde «no hace lo mismo» y corta la cadena en el paso 2. `estado: Approved` es
curaduría del registry, no confirmación del portal. `familia: hero` es solo nota para
ampliar la búsqueda, no compatibilidad dura; y
`tier: reusable` con `meta.global: false` son coherentes entre sí (0 discrepancias en el
catálogo). Flexible: `categories` (`BODY_CONTENT`) y `content_types`
(`LANDING_PAGE`, `SITE_PAGE`) son aditivos en `meta.json` y no tocan marcado ni contenido
guardado.

**`fields`.** Duro: los ocho slots `image_1..image_4` / `video_1..video_4` **no son un
repeater** —todo el bloque tiene `Repeater: no` y `Occurrence: null`— y su cardinalidad
está acoplada a `.pos-0….pos-3`. Convertirlos en repeater cambiaría la firma
`path|tipo|required|repeater|occurrence|default` de fields ya guardados: bloqueante.
Los `*_btn_link` son `type: link` y el HubL lee `…url.href`: cambiarlos a `text` rompe.
Ningún field es `required`, así que el módulo tolera contenido vacío en todos ellos.
La firma exacta incluye los defaults de texto y `alt`: cambiarlos produce una brecha
bloqueante para el comparador. Ampliar las opciones de los fields `choice` `heading_tag`
(`h1..h6`, `p`) y la de `grupo_estilos.tamano_panel` (`size-22`, `size-26`, `lead-size`,
`size-36`, `heading-3-size`) es aditivo. Un field nuevo debe entrar
**opcional y con default** (§10), recordando que HubSpot no rellena defaults en items ya
guardados.

**`html`.** Duro y no negociable: raíz `<section class="hero section-pad">`; el árbol
`section > div.container.hero-inner > (div.hero-copy | div.hero-grid) > figure.hero-media.pos-N > (img|video)`;
las clases `.hero`, `.hero-inner`, `.hero-copy`, `.hero-actions`, `.hero-card`,
`.hero-grid`, `.hero-media`, `.pos-N`, `.button-row`, `.btn`, `.btn-dark`, `.btn-light`,
`.container`, `.section-pad` —todas referenciadas por `main.css`— y `[data-reveal]`, que
es lo que hace visible la sección. `[data-offset]` es el único `data-*` que consume JS
propio del módulo. Flexible: `id="inicio"` no lo usa ni el CSS ni el JS del theme, sólo
enlaces de navegación; `.reveal` acompaña a `[data-reveal]` pero el hook real es el
atributo; `.hero-video` no tiene ninguna regla propia (el sizing lo da
`.hero-media video`).

**`css`.** Ésta es **la excepción del inventario**: `hero` es el único de los 34 módulos
con `module.css` con contenido (2 128 b). Lo que gobierna ese archivo es el hero completo:
el fondo `--hero-glow`, el `padding-top` que libera el header fijo, la retícula
`.hero-copy` (1fr / 1.35fr), el panel `.hero-card`, la fila de botones y el mosaico
`.hero-grid` de 3×3 con las cuatro posiciones (`pos-1` grande a la derecha ocupando 2×2,
`pos-3` a todo el ancho abajo) más sus dos breakpoints. Dos consecuencias operativas:

1. **Está duplicado en `main.css` (líneas 472-573) y ahí ha divergido.** Las reglas de
   escritorio son idénticas; lo que difiere es que `main.css` añade `.hero-media video`
   al sizing (`module.css` sólo cubre `img`) y reescribe entero el bloque
   `@media (max-width: 40em)`: `padding-top` 9.375rem contra 8rem, filas
   `6.25rem 6.25rem 7.375rem` contra `repeat(3, 10rem)`, `gap` 0.875rem contra
   `var(--space-4)`, `.hero-card` a `--heading-4-size`, y un masonry distinto
   (`pos-1` en columna 2 ocupando dos filas, contra ocupar el ancho completo en la fila 1).
   Como `templates/pagina.html` enlaza `main.css` **después** de
   `{{ standard_header_includes }}`, en el sitio publicado manda `main.css` a igualdad de
   especificidad; `module.css` queda como copia desactualizada. Editar sólo `module.css`
   no cambia el render: es la trampa principal de este módulo.
2. **Sus selectores no están acotados a `.hero`.** `module.css` define `.hero-card`,
   `.hero-card p`, `.button-row`, `.button-row.centered` y `.button-row .btn` sin
   prefijo, y esas clases las emiten otros ocho módulos (`.hero-card`:
   `admision-hero`, `apoyos-hero`, `oferta-hero`; `.button-row`: además `admision-cta`,
   `admision-pasos`, `admision-propedeuticos`, `apoyos-detalle`, `dudas-contacto`). El
   alcance real queda limitado a las páginas donde HubSpot cargue el CSS de este módulo,
   pero el riesgo de edición es cruzado y hay que evaluarlo antes de tocar el archivo.

Precisión sobre el bloque AUTO: los selectores `.adm-hero .hero-card`,
`.apo-hero .hero-card`, `.oferta-hero .hero-card`, `.adm-cta-inner .button-row`,
`.questions-card .button-row` y `.step-panel .button-row` que aparecen en la dimensión
`css` **no están en `module.css`** —se verificó leyéndolo completo—: vienen de `main.css`,
que es donde el generador cruza los hooks del módulo. La dependencia cruzada existe, pero
vive en el CSS compartido. En términos de severidad: una brecha `falta selector:` de las
reglas propias del mosaico es **adaptable** (única dimensión `css` adaptable de todo el
inventario); cualquier otra, incluidos los `--home-hero-*`, es **bloqueante** porque
obliga a editar `main.css`.

**`js`/`hooks`.** `module.js` está vacío, como los 34 del theme. Todo el comportamiento es
de `js/main.js`: `[data-reveal]` (IntersectionObserver + el MutationObserver que salva al
editor de HubSpot) y `video[data-offset]`, que en `loadedmetadata` fija `currentTime`.
Duro: emitir `[data-reveal]` en los cuatro contenedores y respetar el nombre exacto de
`data-offset`. Cerrar una brecha `falta hook:` es **bloqueante** por construcción: no hay
`module.js` donde meter comportamiento sin romper la convención del theme, así que
implicaría editar JS transversal. Flexible: nada. Los valores `1.5` y `3` son contenido
del HubL, no hooks.

**`variantes`.** `registry.variantes` está vacío y el generador reporta «Variantes
verificadas: —». No hay variantes declaradas: los siete colores y el `tamano_panel` son
configuración por instancia, no variantes en el sentido de TAXONOMY. Añadir una es
aditivo (adaptable) y obliga a registrarla en `registry.variantes` y aquí.

**`responsive`.** Dos breakpoints: `@media (max-width: 64em)` (la retícula `hero-copy`
colapsa a una columna) y `@media (max-width: 40em)` (mosaico de 2 columnas). Ambos
existen por duplicado en `module.css` y en `main.css`, y es exactamente donde divergen. La
severidad depende del origen: si la regla que falta es del `module.css` propio, adaptable;
si es de `main.css` —que es la que efectivamente se aplica— bloqueante.

**`assets`.** Los cuatro PNG de respaldo se resuelven con
`get_asset_url('../../images/' ~ fallbacks[loop.index0])` sobre nombres literales de
`module.html`: `hero-grid-fallback-imgs/estudiante-tablet.png`, `estudiantes-saltando.png`,
`estudiante-medicina.png`, `jugadores-corriendo.png`. Duro: esos cuatro archivos deben
existir en `theme/images/` o el `poster` queda roto cuando el editor no sube imagen. Los
cuatro `video_N` traen por default URLs absolutas de
`3807214.fs1.hubspotusercontent-na1.net`, así que **dependen del portal 3807214**: en otro
portal hay que resubirlos. Flexible: sustituir cualquier asset es adaptable; recordar que
el Design Manager descarta `.webp` en silencio.

**`dependencias`.** Declaradas: `css/main.css` y `js/main.js`. Ningún módulo del theme usa
`require_css`/`require_js`: la carga es explícita en el `<head>`/`<body>` de cada template.
Según §9 eso es **solo nota** mientras el template destino cargue ambos; pasa a
**adaptable** si hubiera que declarar un `require_*` nuevo. En la práctica, para `hero`
`main.css` no es una nota: sin él no hay mosaico.

**`paginas`.** Uso observado: `Home`, derivado de
`templates/pagina.html:54` (`{% dnd_module path="../modules/hero" %}`). `paginas_portal`
vacío. Usarlo en una página nueva genera `uso objetivo no observado:` (solo nota).
Cualquier cambio al módulo genera `impacto existente a revisar: Home` y obliga al análisis
de impacto de §10, con el recordatorio de que el `dnd_area` no se propaga a páginas ya
creadas: cada página guarda su snapshot y hay que verificarla una por una.

## Checklist de compatibilidad

- [ ] Propósito y capacidades equivalentes.
- [ ] Fields completos, defaults y repeaters compatibles.
- [ ] HTML, clases, selectores y hooks compatibles.
- [ ] CSS, JS y responsive compatibles.
- [ ] Variantes, assets y dependencias compatibles.
- [ ] Uso e impacto en páginas revisados.
- [ ] Decisión humana: REUTILIZAR / ADAPTAR / CREAR.

## Ejemplo HubL

```html
{% dnd_module path="../modules/hero" %}
{% end_dnd_module %}
```
