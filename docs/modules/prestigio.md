# `prestigio`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `prestigio.module` |
| Label HubSpot | Prestigio — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contadores-animados`, `estadisticas-repetibles`, `prefijo-y-sufijo-de-cifra`, `video-youtube-diferido` |
| Variantes verificadas | — |
| Notas curatoriales | Combina video diferido y contadores mediante data-yt-id y data-count-*. No tiene candidatos con evidencia suficiente; la ausencia de candidato no demuestra unicidad. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.prestige`, `.section-pad`.
- Elementos: `article:1`, `button:1`, `div:5`, `dynamic:3`, `img:1`, `path:2`, `section:1`, `span:2`, `strong:1`, `svg:1`.
- Estructura padre→hijo: `article>span:1`, `article>strong:1`, `button>svg:1`, `div>article:1`, `div>button:1`, `div>div:4`, `div>dynamic:3`, `div>img:1`, `dynamic>span:1`, `section>div:1`, `svg>path:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>span:1`, `section>div>div>article>strong:1`, `section>div>div>div:2`, `section>div>div>div>button:1`, `section>div>div>div>button>svg:1`, `section>div>div>div>button>svg>path:2`, `section>div>div>div>dynamic:3`, `section>div>div>div>dynamic>span:1`, `section>div>div>div>img:1`.
- Clases: `.container`, `.prestige`, `.purple-`, `.reveal`, `.section-intro`, `.section-pad`, `.split-heading`, `.stat-card`, `.stats-grid`, `.tagline`, `.video-card`, `.video-play-btn`.
- IDs: `#prestigio`.
- Data attributes: `data-count-prefix`, `data-count-suffix`, `data-count-to`, `data-reveal`, `data-reveal{%`, `data-yt-id`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.prestige`, `.prestige .container`, `.prestige .stat-card span`, `.prestige .stat-card strong`, `.prestige .stat-card[style*="--home-prestigio-card-bg"]`, `.prestige::before`, `.split-heading`, `.stat-card`, `.stat-card span`, `.stat-card strong`, `.stat-card:hover`, `.stats-grid`, `.video-card`, `.video-card iframe`, `.video-card img`, `.video-play-btn`, `.video-play-btn svg`, `.video-play-btn:hover`, `.video-play-btn:hover svg`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.video-play-btn`, `[data-count-prefix]`, `[data-count-suffix]`, `[data-count-to]`, `[data-yt-id]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: —.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`prestigio` es la prueba social del Home: convierte la reputación de la universidad en
cifras verificables y en un video institucional. Deriva de
`<section class="prestige section-pad" id="prestigio">` de la página aprobada
`Inicio.html` (líneas 147-180), y conserva su composición exacta: un `.split-heading` con
la intro a la izquierda (tagline + H2 + párrafo) y a la derecha una `.video-card`, y
debajo un `.stats-grid` de tarjetas con cifra grande y etiqueta.

Dos comportamientos definen el módulo y ambos son atributos, no código propio:

- **Video de YouTube diferido.** `module.html` pone `data-yt-id="{{ module.youtube_id }}"`
  en `.video-card` y renderiza sólo una miniatura más un `<button class="video-play-btn">`
  con el SVG del play. `js/main.js` engancha el clic, construye el `<iframe>` de
  `youtube.com/embed/<id>?autoplay=1&rel=0` y sustituye el contenido de la card. Es decir:
  la página no carga nada de YouTube hasta que alguien pulsa. Si el editor no sube
  `video_thumb`, el `src` de la miniatura cae a `img.youtube.com/vi/<id>/hqdefault.jpg`.
- **Contadores animados.** Cada `<strong>` sale del repeater `stats` con
  `data-count-to`, `data-count-prefix` y `data-count-suffix`, y su texto inicial es
  literalmente `prefijo0sufijo`. `js/main.js` observa esos nodos con un
  IntersectionObserver (`threshold: 0.45`), anima 1 200 ms con easing cúbico y formatea con
  `toLocaleString("es-MX")`. Sin JS la sección muestra ceros: el valor real **nunca** está
  en el HTML servido.

Los fields de color y tamaño se inyectan como custom properties inline (`--home-prestigio-*`)
y quien las lee es `main.css` (`.prestige .stat-card strong`, `.prestige .stat-card span`,
`.prestige .stat-card[style*="--home-prestigio-card-bg"]`), siempre con fallback al token.
Los colores por tarjeta se escriben además en el `style` de cada `<article>`.

## Cuándo usar

- Cuando la página necesita **exactamente** este par: bloque de video institucional
  diferido + tira de cifras animadas. Las notas del registry lo dicen sin rodeos: la
  combinación `data-yt-id` + `data-count-*` no produjo candidatos con evidencia suficiente;
  eso no demuestra unicidad y requiere búsqueda humana.
- Cuando las cifras son estáticas y editoriales. `stats.value` es `text` y se pasa por
  `Number()` en el JS: sirve para «70», «65000», «290», no para datos vivos ni HubDB.
- Con **hasta tres tarjetas**. El repeater admite `max: 6`, pero `main.css` sólo define
  `.purple-1`, `.purple-2` y `.purple-3`; ver «Cuándo no usar».
- Desde un template que cargue `css/main.css` y `js/main.js` (`templates/pagina.html` lo
  hace). Es `tier: reusable` / `meta.global: false`: cada página lleva su propio contenido.
- Si sólo se quiere el video o sólo las cifras, sigue sirviendo: `stats` tiene `min: 0` y
  todos los textos son opcionales, así que las partes se pueden vaciar sin romper el
  marcado.

## Cuándo no usar

- **Con más de tres tarjetas.** `module.html` emite `purple-{{ loop.index }}`, así que los
  items 4, 5 y 6 salen con `.purple-4`, `.purple-5` y `.purple-6`, clases que **no existen
  en `main.css`**: esas tarjetas quedarían sin fondo salvo que el editor rellene
  `stats.color_cuadro` en cada una. Es una brecha real entre el `occurrence.max` del field
  y la paleta del CSS compartido; se documenta, no se «arregla» tocando `main.css`.
- **Para métricas dinámicas o en tiempo real.** No hay HubDB, ni consulta, ni field
  numérico: `admision-fechas` es el módulo que sí consulta HubDB, y no se parece a éste.
- **Para video que deba autoreproducirse o no ser de YouTube.** El JS construye una URL de
  `youtube.com/embed` a partir de `youtube_id`; un MP4 alojado o un Vimeo no encajan.
  Para video propio dentro de un layout narrativo están `experiencia` y `admision-pasos`.
- **Dos instancias en la misma página.** `id="prestigio"` está escrito en el HTML y se
  duplicaría. Los hooks de JS sí toleran varias instancias (`querySelectorAll` sobre
  `[data-count-to]` y `[data-yt-id]`), pero el ID no.
- **Si el template destino no carga `js/main.js`.** En las plantillas versionadas,
  `html.no-js` mantiene visible la sección, pero las cifras se quedarían
  literalmente en «0», «+0» y «0 %». Es pérdida de contenido, no de animación.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `eyebrow` | `text` | no | `Prestigio Anáhuac` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Excelencia en cifras` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Datos que hablan de nuestro compromiso con la calidad educativa.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `youtube_id` | `text` | no | `x3jzZcZOewk` | `null` | no | `null` |
| `video_thumb` | `image` | no | `{"alt":"Universidad Anáhuac México — Reproducir video","src":""}` | `null` | no | `null` |
| `stats` | `group` | no | `[{"prefix":"","suffix":"%","text":"Egresados con trabajo","value":"70"},{"prefix":"+","suffix":"","text":"Egresados Anáhuac","value":"65000"},{"prefix":"+","suffix":"","text":"Convenios internacionales activos","value":"290"}]` | `{"default":3,"max":6,"min":0,"sorting_label_field":null}` | sí | `null` |
| `stats.value` | `text` | no | `0` | `null` | no | `stats` |
| `stats.prefix` | `text` | no | — | `null` | no | `stats` |
| `stats.suffix` | `text` | no | — | `null` | no | `stats` |
| `stats.text` | `text` | no | `Etiqueta` | `null` | no | `stats` |
| `stats.color_cuadro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stats` |
| `stats.color_cifra` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stats` |
| `stats.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stats` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_cifras` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_cifras` | `choice` | no | `heading-2-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_textos` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_textos` | `choice` | no | `heading-6-size` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las diez dimensiones de `evaluateCompatibility`, distinguiendo contrato duro de margen.
Severidades según `README.md` §9.

**`metadata`.** Duro: las cuatro capacidades curadas —`video-youtube-diferido`,
`estadisticas-repetibles`, `contadores-animados`, `prefijo-y-sufijo-de-cifra`— son el
resumen exacto del comportamiento; que falte cualquiera responde «no hace lo mismo» y corta
la cadena en el paso 2. `familia: null` es deliberado (TAXONOMY: no se inventa familia a
partir de un prefijo) y **no** es una brecha: cuenta como nota. `estado: Approved` es
curaduría del registry, no confirmación del portal;
`tier: reusable` y `meta.global: false` son coherentes. Flexible: `categories` y
`content_types` se amplían en `meta.json` de forma aditiva.

**`fields`.** Duro: `stats` es repeater con `occurrence` `{min: 0, default: 3, max: 6}` y
sus hijos `stats.value` / `prefix` / `suffix` alimentan directamente los tres `data-count-*`.
Cambiar el tipo de `stats.value`, convertir `stats` en no-repeater o alterar su
`occurrence` cambia la firma completa del field y es **bloqueante** contra el contenido ya
guardado. `youtube_id` es `text` y es lo único que hace funcionar el video. La firma exacta
incluye todos los defaults: cambiarlos produce una brecha bloqueante para el comparador.
Ampliar las opciones de los fields `choice` `heading_tag`/`eyebrow_tag`/`intro_tag`
(`h1..h6`, `p`) y las de
`grupo_estilos.tamano_cifras` (`size-64`, `size-70`, `heading-2-size`, `heading-1-size`) y
`tamano_textos` (`paragraph-size`, `heading-6-size`, `heading-5-size`, `size-22`) es
aditivo. Ningún
field es `required`. Un field nuevo entra opcional y con default (§10) y, si va dentro de
`stats`, hay que leerlo con `|default(x, true)`: HubSpot no rellena defaults en items ya
guardados.

**`html`.** Duro: raíz `<section class="prestige section-pad">`; el árbol
`section > div.container > (div.split-heading > (div.section-intro | div.video-card) , div.stats-grid > article.stat-card > (strong, span))`;
y las clases que `main.css` referencia: `.prestige`, `.split-heading`, `.section-intro`,
`.tagline`, `.video-card`, `.video-play-btn`, `.stats-grid`, `.stat-card`, `.purple-1..3`,
`.container`, `.section-pad`. Los `data-*` son hooks de JS y son contrato literal:
`data-yt-id`, `data-count-to`, `data-count-prefix`, `data-count-suffix`, `data-reveal`. Dos
relaciones estructurales que el JS impone y que no se ven en la tabla de jerarquías:
`.video-play-btn` **debe ser descendiente** del nodo con `data-yt-id` (el JS hace
`card.querySelector('.video-play-btn')`), y el nodo con `data-count-to` es el mismo cuyo
`textContent` se reescribe, así que no puede contener marcado hijo. Flexible:
`id="prestigio"` sólo lo usan enlaces de navegación; `.reveal` acompaña al atributo pero el
hook real es `[data-reveal]`; el SVG del play es marcado sin CSS propio salvo
`.video-play-btn svg`.

**`css`.** `module.css` está **vacío**, como en 32 de los 34 módulos. Por tanto **todos**
los selectores que el bloque AUTO lista en la dimensión `css` —`.prestige`, `.prestige::before`,
`.split-heading`, `.stats-grid`, `.stat-card`, `.stat-card strong/span`, `.stat-card:hover`,
`.video-card`, `.video-card img`, `.video-card iframe`, `.video-play-btn` y sus `:hover`, y
los tres hooks `.prestige .stat-card *`— viven en `theme/css/main.css`. Consecuencia directa
de §9: cualquier brecha `falta selector:` en este módulo es **bloqueante**, porque cerrarla
obliga a editar CSS transversal que afecta a todas las páginas. Y dar contenido al
`module.css` vacío también es bloqueante: rompería la convención del theme, cuya única
excepción documentada es `hero`. Margen real: cero, salvo lo que ya es configurable por
custom property.

**`js`/`hooks`.** `module.js` está vacío —los 34 lo están— y el comportamiento vive en
`js/main.js`: el `countObserver` sobre `[data-count-to]` y el listener de `[data-yt-id]` +
`.video-play-btn`, más `[data-reveal]`. Ese es el sentido operativo de la nota curatorial
del registry. Duro: los nombres exactos de los cinco atributos y de `.video-play-btn`. Una
brecha `falta hook:` es **bloqueante** por construcción: no hay `module.js` con contenido
donde alojar comportamiento sin romper la convención, así que cerrarla significa tocar JS
compartido. Flexible: nada. Detalle útil: el JS es tolerante a múltiples instancias
(`querySelectorAll`), a diferencia de `eventos` e `historias`; el límite de una sola
instancia por página lo pone el `id`, no el JS.

**`variantes`.** Ninguna: `registry.variantes` está vacío y el generador reporta «—». Los
colores por tarjeta y los tamaños del grupo de estilos son configuración por instancia, no
variantes según TAXONOMY. Declarar una nueva es aditivo (adaptable) y obliga a registrarla
en `registry.variantes` y aquí.

**`responsive`.** Cuatro breakpoints observados —`@media (max-width: 90em)`,
`73.75em`, `64em` y `40em`—, todos en `main.css` porque el `module.css` está vacío. Por la
regla de §9 («depende del origen»), aquí el origen es siempre compartido: toda brecha
responsive es **bloqueante**.

**`assets`.** El bloque AUTO reporta «—» y es correcto: el módulo no llama a
`get_asset_url`. Su única imagen es `video_thumb`, que el editor sube, y si está vacía el
`src` se arma contra `img.youtube.com`, un dominio externo. Eso es una dependencia de red
en tiempo de render que conviene tener presente aunque no aparezca como asset del theme.
Sustituir o subir la miniatura es adaptable (y `.webp` se descarta en silencio en el Design
Manager).

**`dependencias`.** `css/main.css` y `js/main.js`, ambas cargadas explícitamente por el
template (ningún módulo del theme usa `require_css`/`require_js`). Formalmente es **solo
nota** mientras el template destino las cargue; en la práctica `main.js` no es opcional
aquí, porque sin él las cifras se quedan en cero.

**`paginas`.** Uso observado: `Home`, desde `templates/pagina.html:60`. `paginas_portal`
vacío. Reutilizarlo en otra página produce `uso objetivo no observado:` (solo nota);
modificarlo produce `impacto existente a revisar: Home`, que obliga al análisis de impacto
de §10 y a revisar la página publicada una por una, porque el `dnd_area` no propaga cambios
a páginas ya creadas.

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
{% dnd_module path="../modules/prestigio" %}
{% end_dnd_module %}
```
