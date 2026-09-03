# `siguiente-paso`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `siguiente-paso.module` |
| Label HubSpot | El siguiente paso — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `navegacion-tarjetas` |
| Tier del equipo | `global` |
| Global técnico (meta.global) | `true` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `estados-hover`, `iconos`, `navegacion-por-tarjetas`, `tarjeta-destacada`, `tarjetas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | meta.global:true; cierre en Home. La primera tarjeta recibe un tratamiento destacado en el HTML. |
| Páginas conocidas | `Home` |

### Relaciones curadas

- `candidato` → `admision-siguiente-paso` — Ambos presentan destinos relacionados como tarjetas repetibles con icono, texto y enlace; difieren en fields, marcado y estados visuales.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-siguiente-paso`](./admision-siguiente-paso.md): score 0.608; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`comienza-tu-camino`](./comienza-tu-camino.md): score 0.514; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `paginas`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.next`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `div:4`, `dynamic:2`, `h3:1`, `img:1`, `p:1`, `section:1`.
- Estructura padre→hijo: `article>a:1`, `article>h3:1`, `article>img:1`, `article>p:1`, `div>article:1`, `div>div:3`, `div>dynamic:2`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>h3:1`, `section>div>div>article>img:1`, `section>div>div>article>p:1`, `section>div>div>div:1`, `section>div>div>dynamic:2`.
- Clases: `.container`, `.featured`, `.long-arrow`, `.next`, `.next-card`, `.next-cards`, `.next-layout`, `.reveal`, `.section-intro`, `.section-pad`.
- IDs: `#costos`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.long-arrow`, `.long-arrow::after`, `.next`, `.next .container`, `.next .next-card`, `.next .next-card a`, `.next .next-card h3`, `.next .next-card p`, `.next .next-card:hover`, `.next .next-card:hover a`, `.next .next-card:hover h3`, `.next .next-card:hover p`, `.next .next-icon`, `.next .section-intro h2`, `.next-card`, `.next-card a`, `.next-card h3`, `.next-card img`, `.next-card p`, `.next-card.featured`, `.next-card:hover`, `.next-card:hover img`, `.next-cards`, `.next-layout`, `.next.section-pad`, `.next::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0 % 4])`.
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
| `heading` | `text` | no | `El siguiente paso hacia tus sueños` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Avanza hacia tu futuro hoy mismo.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `cards` | `group` | no | `[{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","description":"Explora nuestras ocho áreas académicas y encuentra el programa que te llama.","icon":{"alt":"","src":""},"title":"Elige tu carrera ideal"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Calcular ›","description":"Conoce el costo real y las becas disponibles para ti en minutos.","icon":{"alt":"","src":""},"title":"Calcula tu inversión"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Agendar ›","description":"Experimenta Anáhuac en persona y resuelve tus últimas dudas con nuestro equipo.","icon":{"alt":"","src":""},"title":"Visita el campus"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Solicitar ›","description":"Completa tu solicitud y comienza el camino hacia tu futuro profesional.","icon":{"alt":"","src":""},"title":"Inicia tu admisión"}]` | `{"default":4,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `cards.icon` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.title` | `text` | no | `Título de la tarjeta` | `null` | no | `cards` |
| `cards.title_tag` | `choice` | no | `h3` | `null` | no | `cards` |
| `cards.description` | `text` | no | `Descripción de la tarjeta.` | `null` | no | `cards` |
| `cards.cta_text` | `text` | no | `Explorar ›` | `null` | no | `cards` |
| `cards.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `cards` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_icono` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_titulo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_cta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_hover_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_hover_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/siguiente-paso" %}
{% end_dnd_module %}
```
