# `descubre`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `descubre.module` |
| Label HubSpot | Oferta · Descubre tu licenciatura — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `exploracion-academica` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-por-tarjeta`, `imagen`, `navegacion-academica`, `tarjetas-repetibles`, `variantes-de-color` |
| Variantes verificadas | `cards.variant=descubre-card--orange`, `cards.variant=descubre-card--purple` |
| Notas curatoriales | Descubre tu licenciatura (Oferta). Template de Oferta no versionado. Las variantes naranja y morada pertenecen a cada tarjeta del repeater. |
| Páginas conocidas | `Oferta académica` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`oferta-areas`](./oferta-areas.md): score 0.517; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `paginas`, `responsive`; coincidencias: `familia:exploracion-academica`, `cta-por-tarjeta`, `navegacion-academica`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`licenciaturas`](./licenciaturas.md): score 0.461; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:exploracion-academica`, `cta-por-tarjeta`, `navegacion-academica`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.descubre`, `.section-pad`.
- Elementos: `a:1`, `div:5`, `dynamic:4`, `img:2`, `p:1`, `path:1`, `section:1`, `span:2`, `svg:1`.
- Estructura padre→hijo: `a>dynamic:1`, `a>img:1`, `a>p:1`, `a>span:1`, `div>a:1`, `div>div:4`, `div>dynamic:3`, `div>img:1`, `dynamic>span:1`, `section>div:1`, `span>svg:1`, `svg>path:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:2`, `section>div>div>div>a:1`, `section>div>div>div>a>dynamic:1`, `section>div>div>div>a>img:1`, `section>div>div>div>a>p:1`, `section>div>div>div>a>span:1`, `section>div>div>div>a>span>svg:1`, `section>div>div>div>a>span>svg>path:1`, `section>div>div>div>img:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`.
- Clases: `.container`, `.descubre`, `.descubre-card`, `.descubre-card-icon`, `.descubre-cards`, `.descubre-cta`, `.descubre-grid`, `.descubre-img`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`, `.wide`.
- IDs: `#descubre`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.descubre`, `.descubre .section-intro`, `.descubre .section-intro h2`, `.descubre .section-intro p`, `.descubre-card`, `.descubre-card h3`, `.descubre-card p`, `.descubre-card--orange .descubre-cta`, `.descubre-card--purple .descubre-cta`, `.descubre-card-icon`, `.descubre-card:hover`, `.descubre-cards`, `.descubre-cta`, `.descubre-cta svg`, `.descubre-grid`, `.descubre-img`, `.descubre-img img`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`, `@media (min-width: 29.75em) and (max-width: 48em)`.
- Assets: `../../images/oferta-academica/descrubre-tu-licenciatura-ideal/descubre-tu-licenciatura-ideal-imagen.png`, `get_asset_url('../../images/oferta-academica/' ~ icon_fallbacks[loop.index0 % (icon_fallbacks\|length)])`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

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
| `eyebrow` | `text` | no | `Descubre tu licenciatura ideal` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `¿Aún no decides qué carrera estudiar?` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Si todavía estás explorando, te apoyamos en tu decisión para que encuentres una opción alineada con tus intereses y metas.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `image` | `image` | no | `{"alt":"Estudiante Anáhuac pensando en su carrera","src":""}` | `null` | no | `null` |
| `cards` | `group` | no | `[{"cta_text":"Realizar test","icon":{"alt":"Ícono test vocacional","src":""},"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Descubre en qué área y carreras te puedes desempeñar con mayor éxito.","title":"Hacer test vocacional","variant":"descubre-card--orange"},{"cta_text":"Hablar con asesor","icon":{"alt":"Ícono hablar con asesor","src":""},"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Nuestro equipo te guía hacia el programa que mejor se ajusta a ti.","title":"Habla con un asesor","variant":"descubre-card--purple"}]` | `{"default":2,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `cards.icon` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.variant` | `choice` | no | `descubre-card--orange` | `null` | no | `cards` |
| `cards.color_cuadro` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `cards` |
| `cards.title` | `text` | no | `Hacer test vocacional` | `null` | no | `cards` |
| `cards.title_tag` | `choice` | no | `h3` | `null` | no | `cards` |
| `cards.color_titulo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `cards` |
| `cards.text` | `text` | no | `Descubre en qué área y carreras te puedes desempeñar con mayor éxito.` | `null` | no | `cards` |
| `cards.color_texto` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `cards` |
| `cards.cta_text` | `text` | no | `Realizar test` | `null` | no | `cards` |
| `cards.color_cta` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `cards` |
| `cards.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `cards` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_eyebrow` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_intro` | `choice` | no | `paragraph-size` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/descubre" %}
{% end_dnd_module %}
```
