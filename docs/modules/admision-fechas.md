# `admision-fechas`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-fechas.module` |
| Label HubSpot | Admisión · Calendario de fechas (HubDB) — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `acordeon`, `dos-campus`, `estado-vacio`, `hubdb`, `limite-de-registros`, `tabla-de-fechas` |
| Variantes verificadas | — |
| Notas curatoriales | Consume HubDB (calendario de fechas). Es el único módulo con field hubdbtable y no tiene module.css/module.js propios. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-fechas`, `.section-pad`.
- Elementos: `br:1`, `details:1`, `div:6`, `dynamic:3`, `p:1`, `section:1`, `small:1`, `span:1`, `summary:1`, `table:1`, `tbody:1`, `td:2`, `tr:1`.
- Estructura padre→hijo: `details>div:1`, `details>summary:1`, `div>details:1`, `div>div:4`, `div>dynamic:3`, `div>p:1`, `div>table:1`, `dynamic>span:1`, `section>div:1`, `table>tbody:1`, `tbody>tr:1`, `td>br:1`, `td>small:1`, `tr>td:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>div:1`, `section>div>div>div>div>details:1`, `section>div>div>div>div>details>div:1`, `section>div>div>div>div>details>div>table:1`, `section>div>div>div>div>details>div>table>tbody:1`, `section>div>div>div>div>details>div>table>tbody>tr:1`, `section>div>div>div>div>details>div>table>tbody>tr>td:2`, `section>div>div>div>div>details>div>table>tbody>tr>td>br:1`, `section>div>div>div>div>details>div>table>tbody>tr>td>small:1`, `section>div>div>div>div>details>summary:1`, `section>div>div>div>div>p:1`, `section>div>div>div>dynamic:1`, `section>div>div>dynamic:2`, `section>div>div>dynamic>span:1`.
- Clases: `.adm-fechas`, `.container`, `.fecha-item`, `.fecha-panel`, `.fecha-table`, `.fechas-accordion`, `.fechas-col`, `.fechas-grid`, `.fechas-vacio`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`, `.wide`.
- IDs: `#fechas`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `absent`; selectores propios/compartidos relevantes: `.adm-fechas`, `.adm-fechas .section-intro`, `.adm-fechas .section-intro h2`, `.adm-fechas .section-intro p:not(.tagline)`, `.adm-fechas > .container`, `.adm-fechas::after`, `.adm-fechas::before`, `.fecha-item`, `.fecha-item summary`, `.fecha-item summary::-webkit-details-marker`, `.fecha-item summary::after`, `.fecha-item summary:hover`, `.fecha-item[open]`, `.fecha-item[open] summary::after`, `.fecha-panel`, `.fecha-table`, `.fecha-table small`, `.fecha-table td`, `.fecha-table td:first-child`, `.fecha-table td:last-child`, `.fechas-accordion`, `.fechas-col h3`, `.fechas-col--purple .fecha-item summary::after`, `.fechas-col--purple .fecha-item summary:hover`, `.fechas-col--purple .fecha-item[open]`, `.fechas-grid`, `.fechas-vacio`, `.section-intro.wide`.
- module.js: `absent`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 90em)`.
- Assets: —.
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
| `grupo_tabla` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_tabla.tabla` | `hubdbtable` | sí | `385703603` | `null` | no | `grupo_tabla` |
| `grupo_tabla.maximo` | `number` | no | `5` | `null` | no | `grupo_tabla` |
| `grupo_tabla.opcion_norte` | `choice` | no | `NORTE` | `null` | no | `grupo_tabla` |
| `grupo_tabla.opcion_sur` | `choice` | no | `SUR` | `null` | no | `grupo_tabla` |
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.tagline` | `text` | no | `Calendario de fechas de exámenes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.tagline_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Próximas fechas de exámenes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.titulo_norte` | `text` | no | `Campus Norte` | `null` | no | `grupo_contenido` |
| `grupo_contenido.titulo_sur` | `text` | no | `Campus Sur` | `null` | no | `grupo_contenido` |
| `grupo_contenido.titulo_tag` | `choice` | no | `h3` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_documentos` | `text` | no | `Fecha límite para entrega de documentos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_academico` | `text` | no | `Aplicación de examen de conocimientos académicos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_psicometrico` | `text` | no | `Aplicación de examen psicométrico` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_resultados` | `text` | no | `Entrega de resultados` | `null` | no | `grupo_contenido` |
| `grupo_contenido.mensaje_vacio` | `text` | no | `Por el momento no hay fechas publicadas para este campus.` | `null` | no | `grupo_contenido` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_titulo_norte` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_titulo_sur` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_fecha` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_etiqueta` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_valor` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/admision-fechas" %}
{% end_dnd_module %}
```
