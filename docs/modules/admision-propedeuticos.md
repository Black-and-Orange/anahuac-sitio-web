# `admision-propedeuticos`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-propedeuticos.module` |
| Label HubSpot | Admisión · Cursos propedéuticos — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-por-curso`, `cursos-repetibles`, `paneles-sincronizados`, `tabs`, `variantes-de-acento`, `video-youtube-diferido` |
| Variantes verificadas | `cursos.acento=morado`, `cursos.acento=naranja` |
| Notas curatoriales | Cursos en tabs con paneles enlazados por data-prop/data-prop-panel; el acento naranja o morado es una variante real del repeater. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-prop`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `button:2`, `div:8`, `dynamic:7`, `img:1`, `path:2`, `section:1`, `span:3`, `svg:1`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `article>div:2`, `button>dynamic:1`, `button>svg:1`, `div>a:1`, `div>article:1`, `div>button:2`, `div>div:5`, `div>dynamic:4`, `div>img:1`, `div>span:1`, `dynamic>span:1`, `section>div:1`, `span>dynamic:1`, `svg>path:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:2`, `section>div>div>div>article:1`, `section>div>div>div>article>div:2`, `section>div>div>div>article>div>button:1`, `section>div>div>div>article>div>button>svg:1`, `section>div>div>div>article>div>button>svg>path:2`, `section>div>div>div>article>div>div:1`, `section>div>div>div>article>div>div>a:1`, `section>div>div>div>article>div>div>a>dynamic:1`, `section>div>div>div>article>div>div>a>span:1`, `section>div>div>div>article>div>dynamic:1`, `section>div>div>div>article>div>img:1`, `section>div>div>div>article>div>span:1`, `section>div>div>div>article>div>span>dynamic:1`, `section>div>div>div>button:1`, `section>div>div>div>button>dynamic:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`.
- Clases: `.active`, `.adm-prop`, `.adm-prop-layout`, `.adm-prop-tabs-wrap`, `.btn`, `.btn-orange`, `.btn-purple`, `.button-row`, `.container`, `.orange`, `.prop-panel`, `.prop-panel--`, `.prop-panels`, `.prop-tab`, `.prop-tab--`, `.prop-tabs`, `.purple`, `.reveal`, `.section-intro`, `.section-pad`, `.step-panel-body`, `.step-tag`, `.tagline`, `.video-card`, `.video-play-btn`.
- IDs: `#propedeuticos`.
- Data attributes: `data-prop`, `data-prop-panel`, `data-reveal`, `data-yt-id`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero-info .button-row`, `.adm-prop`, `.adm-prop .container`, `.adm-prop .prop-tab`, `.adm-prop-layout`, `.adm-prop-layout .section-intro`, `.adm-prop-layout .section-intro h2`, `.adm-prop-layout .section-intro p:not(.tagline)`, `.adm-prop::before`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.oferta-hero-info .button-row`, `.prop-panel`, `.prop-panel h3`, `.prop-panel--purple .step-tag`, `.prop-panel.active`, `.prop-tab`, `.prop-tab:hover`, `.prop-tabs`, `.questions-card .button-row`, `.quote.orange`, `.quote.purple`, `.step-panel .button-row`, `.step-panel-body`, `.step-tag`, `.video-card`, `.video-card iframe`, `.video-card img`, `.video-play-btn`, `.video-play-btn svg`, `.video-play-btn:hover`, `.video-play-btn:hover svg`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.prop-panel`, `.prop-tab`, `.video-play-btn`, `[data-prop-panel]`, `[data-prop]`, `[data-yt-id]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 37.5em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ poster_fallback[loop.index0 % (poster_fallback\|length)])`.
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
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `Requisitos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Cursos propedéuticos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Si vas a ingresar a la licenciatura en Médico Cirujano o Música Contemporánea es importante que revises tu entrada al curso propedéutico correspondiente.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_flecha` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_tabs` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `cursos` | `group` | no | `[{"acento":"naranja","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Más información","cta_texto_tag":"ninguna","descripcion":"<p>Una vez completado tu proceso de admisión general hasta pasar tus pruebas y entrevista, es necesario realizar un curso propedéutico.</p>","indicador":"Curso propedéutico Medicina Anáhuac","indicador_tag":"ninguna","mostrar_cta":true,"tab_texto":"Medicina","titulo":"Curso pre ingreso a Medicina","titulo_tag":"h3","video_id":"","video_poster":{"alt":"Curso propedéutico de Medicina","src":""}},{"acento":"morado","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Más información","cta_texto_tag":"ninguna","descripcion":"<p>Una vez completado tu proceso de admisión general hasta pasar tus pruebas y entrevista, es necesario realizar un curso propedéutico.</p>","indicador":"Curso propedéutico Música Anáhuac","indicador_tag":"ninguna","mostrar_cta":true,"tab_texto":"Música","titulo":"Curso pre ingreso a Música","titulo_tag":"h3","video_id":"","video_poster":{"alt":"Curso propedéutico de Música","src":""}}]` | `{"default":2,"max":6,"min":0,"sorting_label_field":null}` | sí | `null` |
| `cursos.tab_texto` | `text` | no | `Medicina` | `null` | no | `cursos` |
| `cursos.tab_texto_tag` | `choice` | no | `ninguna` | `null` | no | `cursos` |
| `cursos.tab_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cursos` |
| `cursos.acento` | `choice` | no | `naranja` | `null` | no | `cursos` |
| `cursos.indicador` | `text` | no | `Curso propedéutico Medicina Anáhuac` | `null` | no | `cursos` |
| `cursos.indicador_tag` | `choice` | no | `ninguna` | `null` | no | `cursos` |
| `cursos.indicador_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cursos` |
| `cursos.titulo` | `text` | no | `Curso pre ingreso a Medicina` | `null` | no | `cursos` |
| `cursos.titulo_tag` | `choice` | no | `h3` | `null` | no | `cursos` |
| `cursos.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cursos` |
| `cursos.descripcion` | `richtext` | no | `<p>Describe el curso.</p>` | `null` | no | `cursos` |
| `cursos.video_id` | `text` | no | — | `null` | no | `cursos` |
| `cursos.video_poster` | `image` | no | `{"alt":"Curso propedéutico","src":""}` | `null` | no | `cursos` |
| `cursos.mostrar_cta` | `boolean` | no | `true` | `null` | no | `cursos` |
| `cursos.cta_texto` | `text` | no | `Más información` | `null` | no | `cursos` |
| `cursos.cta_texto_tag` | `choice` | no | `ninguna` | `null` | no | `cursos` |
| `cursos.cta_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cursos` |
| `cursos.cta_enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `cursos` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tab_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/admision-propedeuticos" %}
{% end_dnd_module %}
```
