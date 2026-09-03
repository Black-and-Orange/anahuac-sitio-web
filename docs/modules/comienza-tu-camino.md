# `comienza-tu-camino`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `comienza-tu-camino.module` |
| Label HubSpot | Comienza tu camino — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `navegacion-tarjetas` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-por-tarjeta`, `estado-expandido`, `imagen-hover`, `navegacion-por-tarjetas`, `tarjetas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Navegación de caminos con una imagen principal y una imagen hover por tarjeta; sus estados dependen del marcado path-*. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`siguiente-paso`](./siguiente-paso.md): score 0.514; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `paginas`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`admision-siguiente-paso`](./admision-siguiente-paso.md): score 0.462; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `cta-por-tarjeta`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.path`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `div:6`, `dynamic:3`, `img:2`, `p:1`, `section:1`.
- Estructura padre→hijo: `article>div:2`, `div>a:1`, `div>article:1`, `div>div:3`, `div>dynamic:3`, `div>img:2`, `div>p:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>article:1`, `section>div>div>div>article>div:2`, `section>div>div>div>article>div>a:1`, `section>div>div>div>article>div>dynamic:1`, `section>div>div>div>article>div>img:1`, `section>div>div>div>article>div>p:1`, `section>div>div>dynamic:2`, `section>div>div>img:1`.
- Clases: `.container`, `.path`, `.path-bottom`, `.path-card`, `.path-cards`, `.path-icon`, `.path-layout`, `.path-photo`, `.path-title`, `.reveal`, `.section-intro`, `.section-pad`, `.wide`.
- IDs: `#admisiones`.
- Data attributes: `data-img`, `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.path`, `.path .container`, `.path .container::after`, `.path .path-card`, `.path .path-card.is-open`, `.path .path-card:hover`, `.path .section-intro`, `.path .section-intro > p:not(.tagline)`, `.path .section-intro h2`, `.path-bottom`, `.path-bottom p`, `.path-card`, `.path-card a`, `.path-card.is-open`, `.path-card.is-open .path-bottom`, `.path-card:hover`, `.path-card:hover .path-bottom`, `.path-card:not(:hover):not(.is-open)`, `.path-card:not(:hover):not(.is-open) .path-bottom`, `.path-card:not(:hover):not(.is-open) .path-icon`, `.path-card:not(:hover):not(.is-open) .path-title h3`, `.path-cards`, `.path-icon`, `.path-layout`, `.path-photo`, `.path-title`, `.path-title h3`, `.path::after`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.path-card`, `.path-photo`, `[data-img]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`, `@media (max-width: 90em)`.
- Assets: `../../images/camino.jpg`, `get_asset_url('../../images/' ~ icon_fb)`, `get_asset_url('../../images/' ~ img_fb)`.
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
| `heading` | `text` | no | `Comienza tu camino` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Accede rápidamente a la información que necesitas para decidir. Elige tu ruta y avanza.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `main_photo` | `image` | no | `{"alt":"Estudiantes consultando información en laptop","src":""}` | `null` | no | `null` |
| `cards` | `group` | no | `[{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","description":"Conoce cada paso del proceso de admisión.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Tu admisión"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Cotizar ›","description":"Calcula el costo total de tus estudios.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Cotiza tu licenciatura"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","description":"Conoce las opciones de apoyos financieros disponibles para ti.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Apoyos educativos"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Conocer ›","description":"Conoce todo lo que la Universidad Anáhuac te ofrece para que te sientas en casa.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Soy foráneo"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Conocer ›","description":"Conoce todo lo que la Universidad Anáhuac te ofrece para que te sientas en casa.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Soy extranjero"}]` | `{"default":5,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `cards.icon` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.title` | `text` | no | `Título` | `null` | no | `cards` |
| `cards.title_tag` | `choice` | no | `h3` | `null` | no | `cards` |
| `cards.description` | `text` | no | — | `null` | no | `cards` |
| `cards.cta_text` | `text` | no | `Explorar ›` | `null` | no | `cards` |
| `cards.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `cards` |
| `cards.hover_image` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.color_titulo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cards` |
| `cards.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cards` |
| `cards.color_cta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cards` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_abierta_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_abierta_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/comienza-tu-camino" %}
{% end_dnd_module %}
```
