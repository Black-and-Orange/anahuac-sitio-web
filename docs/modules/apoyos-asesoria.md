# `apoyos-asesoria`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-asesoria.module` |
| Label HubSpot | Apoyos · Asesoría por estado — Anáhuac |
| Estado | `Development` |
| Familia funcional | `asesoria` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `asignacion-estatica-de-asesor`, `cita-opcional`, `contacto-whatsapp`, `correo-opcional`, `fuente-hubdb-futura`, `seleccion-de-estado`, `seleccion-de-preparatoria`, `seleccion-de-region` |
| Variantes verificadas | — |
| Notas curatoriales | Único módulo físico de asesoría. La fuente actual es estática (data-source=static) y declara una fuente HubDB futura; la relación lógica admision-asesoria → apoyos-asesoria no autoriza duplicarlo. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

- `consumido-por` → `admision-asesoria` — La sección lógica de Admisión reutiliza este módulo físico con contenido/configuración propia; admision-asesoria no es ni debe convertirse en una clave o carpeta física.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-asesoria`, `.on-orange`, `.section-pad`.
- Elementos: `a:3`, `div:10`, `dynamic:6`, `h3:1`, `label:2`, `line:3`, `path:2`, `polyline:1`, `rect:1`, `section:1`, `select:3`, `span:7`, `svg:3`.
- Estructura padre→hijo: `a>span:3`, `a>svg:3`, `div>a:3`, `div>div:9`, `div>dynamic:3`, `div>h3:1`, `div>label:2`, `div>select:3`, `dynamic>span:1`, `section>div:1`, `span>dynamic:3`, `span>span:3`, `svg>line:3`, `svg>path:2`, `svg>polyline:1`, `svg>rect:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:2`, `section>div>div>div>div:4`, `section>div>div>div>div>div:1`, `section>div>div>div>div>div>a:3`, `section>div>div>div>div>div>a>span:3`, `section>div>div>div>div>div>a>span>dynamic:3`, `section>div>div>div>div>div>a>span>span:3`, `section>div>div>div>div>div>a>svg:3`, `section>div>div>div>div>div>a>svg>line:3`, `section>div>div>div>div>div>a>svg>path:2`, `section>div>div>div>div>div>a>svg>polyline:1`, `section>div>div>div>div>div>a>svg>rect:1`, `section>div>div>div>div>h3:1`, `section>div>div>div>div>label:1`, `section>div>div>div>div>select:3`, `section>div>div>div>label:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`.
- Clases: `.apo-asesoria`, `.apo-asesoria-layout`, `.asesor-card`, `.asesor-cita`, `.asesor-col`, `.asesor-email`, `.asesor-foto`, `.asesor-info`, `.asesor-link`, `.asesor-links`, `.asesor-nombre`, `.asesor-wa`, `.asesoria-preparatoria-wrap`, `.asesoria-select`, `.asesoria-select-row`, `.asesoria-select-wrap`, `.container`, `.on-orange`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#asesoria`, `#asesoria-estado`, `#asesoria-label`, `#asesoria-preparatoria`, `#asesoria-region`, `#asesoria-title`.
- Data attributes: `data-future-source`, `data-genero`, `data-reveal`, `data-source`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-asesoria`, `.apo-asesoria .cselect__btn`, `.apo-asesoria .section-intro > p:not(.tagline)`, `.apo-asesoria .section-intro h2`, `.apo-asesoria .section-intro p:not(.tagline)`, `.apo-asesoria .section-intro.reveal`, `.apo-asesoria .tagline`, `.apo-asesoria-layout`, `.apo-asesoria-layout .section-intro`, `.apo-asesoria::before`, `.asesor-card`, `.asesor-col`, `.asesor-foto`, `.asesor-foto[data-genero="f"]`, `.asesor-foto[data-genero="m"]`, `.asesor-info`, `.asesor-link`, `.asesor-link span > :where(h1, h2, h3, h4, h5, h6, p)`, `.asesor-link svg`, `.asesor-link:hover`, `.asesor-links`, `.asesor-nombre`, `.asesoria-preparatoria-wrap`, `.asesoria-preparatoria-wrap > .cselect`, `.asesoria-preparatoria-wrap[hidden]`, `.asesoria-select`, `.asesoria-select-row`, `.asesoria-select-row > .cselect`, `.asesoria-select-row > .cselect .cselect__label`, `.asesoria-select-wrap`, `.asesoria-select-wrap label`, `.asesoria-select:focus`.
- module.js: `empty`; hooks propios/compartidos relevantes: `#asesoria-estado`, `#asesoria-preparatoria`, `#asesoria-region`, `.asesor-foto`, `.asesor-nombre`, `.asesor-wa`, `.asesoria-preparatoria-wrap`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@container (max-width: 34.9375rem)`, `@media (max-width: 30em)`, `@media (max-width: 56.25em)`, `@media (min-width: 41.3125em) and (max-width: 56.25em)`, `@media (min-width: 56.3125em) and (max-width: 73.75em)`, `@media (min-width: 73.8125em) and (max-width: 90em)`.
- Assets: `../../images/proceso-de-admision/asesor-anahuac-hombre.jpg`, `../../images/proceso-de-admision/asesor-anahuac-mujer.jpg`.
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
| `grupo_contenido.eyebrow` | `text` | no | `Asesoría` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Te ayudamos a encontrar la mejor opción para ti` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Un asesor te orienta sobre el apoyo que mejor se ajusta a tu perfil y resuelve tus dudas en cada paso. Elige tu opción y contáctalo directamente.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_selector` | `text` | no | `¿Dónde estudias o estudiaste la preparatoria/bachillerato?` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_preparatoria` | `text` | no | `Selecciona tu preparatoria` | `null` | no | `grupo_contenido` |
| `grupo_contacto` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contacto.texto_whatsapp` | `text` | no | `WhatsApp` | `null` | no | `grupo_contacto` |
| `grupo_contacto.texto_whatsapp_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_contacto` |
| `grupo_contacto.texto_whatsapp_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contacto` |
| `grupo_contacto.mostrar_cita` | `boolean` | no | `true` | `null` | no | `grupo_contacto` |
| `grupo_contacto.texto_cita` | `text` | no | `Agenda una cita` | `null` | no | `grupo_contacto` |
| `grupo_contacto.texto_cita_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_contacto` |
| `grupo_contacto.texto_cita_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contacto` |
| `grupo_contacto.enlace_cita` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `grupo_contacto` |
| `grupo_contacto.mostrar_correo` | `boolean` | no | `true` | `null` | no | `grupo_contacto` |
| `grupo_contacto.correo` | `text` | no | `asesores@anahuac.mx` | `null` | no | `grupo_contacto` |
| `grupo_contacto.correo_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_contacto` |
| `grupo_contacto.correo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contacto` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-asesoria" %}
{% end_dnd_module %}
```
