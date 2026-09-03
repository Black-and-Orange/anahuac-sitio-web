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
| Notas curatoriales | Combina video diferido y contadores mediante data-yt-id y data-count-*; es un contrato único en el inventario. |
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

> TODO: documentar la intención editorial y funcional con evidencia de la página aprobada.

## Cuándo usar

> TODO: documentar condiciones de reutilización.

## Cuándo no usar

> TODO: documentar límites y casos incompatibles.

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
