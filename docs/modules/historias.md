# `historias`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `historias.module` |
| Label HubSpot | Historias — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `carrusel`, `doble-imagen`, `orden-imagen-cita`, `testimonios-repetibles`, `variantes-de-color` |
| Variantes verificadas | `stories.layout=img-first`, `stories.layout=quote-first`, `stories.variant=orange`, `stories.variant=purple` |
| Notas curatoriales | Carrusel de testimonios con dos imágenes opcionales por historia y variantes explícitas de color y orden. No hay otro contrato equivalente en el inventario. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.section-pad`, `.stories`.
- Elementos: `blockquote:2`, `button:2`, `cite:2`, `div:7`, `dynamic:2`, `img:4`, `p:2`, `section:1`, `span:2`.
- Estructura padre→hijo: `blockquote>cite:2`, `blockquote>p:2`, `cite>span:2`, `div>blockquote:2`, `div>button:2`, `div>div:6`, `div>dynamic:2`, `div>img:4`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:3`, `section>div>div>div>button:2`, `section>div>div>div>div:1`, `section>div>div>div>div>blockquote:2`, `section>div>div>div>div>blockquote>cite:2`, `section>div>div>div>div>blockquote>cite>span:2`, `section>div>div>div>div>blockquote>p:2`, `section>div>div>div>div>img:4`, `section>div>div>div>dynamic:2`.
- Clases: `.container`, `.quote`, `.reveal`, `.section-intro`, `.section-pad`, `.stories`, `.stories-head`, `.stories-row`, `.stories-track`, `.stories-viewport`, `.story-arrows`, `.wide`.
- IDs: —.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.quote`, `.quote cite`, `.quote cite span`, `.quote p`, `.quote.orange`, `.quote.purple`, `.section-intro.wide`, `.stories`, `.stories .container`, `.stories .quote`, `.stories .quote cite`, `.stories .quote p`, `.stories .section-intro h2`, `.stories > .container`, `.stories-head`, `.stories-head .section-intro`, `.stories-head .story-arrows`, `.stories-row`, `.stories-row .quote`, `.stories-row > *`, `.stories-row img`, `.stories-row:nth-child(even)`, `.stories-row:nth-child(even) .quote`, `.stories-row:nth-child(even) img:nth-child(2)`, `.stories-row:nth-child(even) img:nth-child(3)`, `.stories-row:nth-child(odd)`, `.stories-row:nth-child(odd) .quote`, `.stories-row:nth-child(odd) img:nth-child(1)`, `.stories-row:nth-child(odd) img:nth-child(2)`, `.stories-track`, `.stories-viewport`, `.stories::after`, `.story-arrows`, `.story-arrows button`, `.story-arrows button:active`, `.story-arrows button:hover`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.stories-row`, `.stories-track`, `.stories-viewport`, `.story-arrows`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (hover: none)`, `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ fb_a)`, `get_asset_url('../../images/' ~ fb_b)`.
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
| `heading` | `text` | no | `Historias Anáhuac` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Leones Anáhuac que han transformado sus vidas con nosotros` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `stories` | `group` | no | `[{"author":"María Gómez","image_a":{"alt":"María Gómez, egresada Anáhuac","src":""},"image_b":{"alt":"Estudiante en laboratorio","src":""},"layout":"img-first","quote":"Anáhuac me dio más que una carrera, me dio una red de amigos y mentores que cambió mi trayectoria profesional","role":"Egresada, Ingeniería","variant":"orange"},{"author":"Carlos Mendoza","image_a":{"alt":"Egresado trabajando con equipo de cómputo","src":""},"image_b":{"alt":"Carlos Mendoza, egresado Anáhuac","src":""},"layout":"quote-first","quote":"Los convenios internacionales me permitieron estudiar un semestre en Europa y eso fue decisivo para conseguir mi primer trabajo","role":"Egresado, Ingeniería en Sistemas","variant":"purple"},{"author":"Daniel Torres","image_a":{"alt":"Estudiantes en campus","src":""},"image_b":{"alt":"Egresada exitosa","src":""},"layout":"img-first","quote":"Gracias a las prácticas profesionales, conseguí trabajo antes de terminar la carrera","role":"Egresado, Administración","variant":"orange"},{"author":"Ana Rodríguez","image_a":{"alt":"Proyecto estudiantil","src":""},"image_b":{"alt":"Laboratorio de innovación","src":""},"layout":"quote-first","quote":"La formación integral que recibí en Anáhuac me preparó para enfrentar cualquier reto profesional con confianza","role":"Egresada, Comunicación","variant":"purple"},{"author":"Sofía Martínez","image_a":{"alt":"Ceremonia de graduación","src":""},"image_b":{"alt":"Vida en campus","src":""},"layout":"img-first","quote":"El programa de movilidad me cambió la vida. Estudié en España y volví con una visión completamente nueva","role":"Egresada, Derecho","variant":"orange"},{"author":"Roberto Silva","image_a":{"alt":"Espacios de estudio","src":""},"image_b":{"alt":"Comunidad Anáhuac","src":""},"layout":"quote-first","quote":"Anáhuac no solo me dio conocimientos, me dio una comunidad para toda la vida","role":"Egresado, Ingeniería Industrial","variant":"purple"}]` | `{"default":6,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `stories.quote` | `text` | no | `Cita del egresado` | `null` | no | `stories` |
| `stories.author` | `text` | no | `Nombre Apellido` | `null` | no | `stories` |
| `stories.role` | `text` | no | `Egresado` | `null` | no | `stories` |
| `stories.image_a` | `image` | no | `{"alt":"Egresado Anáhuac","src":""}` | `null` | no | `stories` |
| `stories.image_b` | `image` | no | `{"alt":"Comunidad Anáhuac","src":""}` | `null` | no | `stories` |
| `stories.variant` | `choice` | no | `orange` | `null` | no | `stories` |
| `stories.layout` | `choice` | no | `img-first` | `null` | no | `stories` |
| `stories.color_caja` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stories` |
| `stories.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stories` |
| `stories.color_autor` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stories` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_heading` | `choice` | no | `heading-2-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_testimonio` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_testimonio` | `choice` | no | `size-30` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_autor` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/historias" %}
{% end_dnd_module %}
```
