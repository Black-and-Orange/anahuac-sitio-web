# `apoyos-consideraciones`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-consideraciones.module` |
| Label HubSpot | Apoyos · Consideraciones generales — Anáhuac |
| Estado | `Development` |
| Familia funcional | `null` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `consideraciones-repetibles`, `contenido-informativo`, `iconos-predefinidos`, `visibilidad-global-de-iconos` |
| Variantes verificadas | — |
| Notas curatoriales | Grid informativo de consideraciones con iconos seleccionables; no es navegación ni proceso y no se fuerza a una familia de cards. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-consideraciones`, `.section-pad`.
- Elementos: `div:3`, `dynamic:5`, `li:1`, `section:1`, `span:2`, `ul:1`.
- Estructura padre→hijo: `div>div:1`, `div>dynamic:5`, `div>ul:1`, `dynamic>span:1`, `li>div:1`, `li>span:1`, `section>div:1`, `ul>li:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`, `section>div>ul:1`, `section>div>ul>li:1`, `section>div>ul>li>div:1`, `section>div>ul>li>div>dynamic:2`, `section>div>ul>li>span:1`.
- Clases: `.apo-consideraciones`, `.consideracion`, `.consideracion-icon`, `.consideraciones-grid`, `.container`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`, `.wide`.
- IDs: `#consideraciones`, `#consideraciones-title`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-consideraciones`, `.apo-consideraciones .container`, `.apo-consideraciones .section-intro`, `.apo-consideraciones .section-intro > p:not(.tagline)`, `.apo-consideraciones .section-intro h2`, `.apo-consideraciones .section-intro p:not(.tagline)`, `.apo-consideraciones::before`, `.consideracion`, `.consideracion h3`, `.consideracion p`, `.consideracion-icon`, `.consideracion-icon svg`, `.consideraciones-grid`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 50em)`.
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
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `Antes de solicitar` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Consideraciones generales` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Cinco puntos clave que conviene tener presentes al elegir y solicitar tu apoyo.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `items` | `group` | no | `[{"icono":"admision","texto":"Debes estar admitido para iniciar ciertos trámites de apoyo.","titulo":"Primero, tu admisión"},{"icono":"porcentaje","texto":"El monto otorgado depende de la evaluación y la disponibilidad.","titulo":"Porcentaje variable"},{"icono":"comite","texto":"El comité considera variables académicas y socioeconómicas.","titulo":"Evaluación integral"},{"icono":"ingreso","texto":"Algunos apoyos son exclusivos para quienes ingresan a licenciatura.","titulo":"Nuevo ingreso"},{"icono":"campus","texto":"Ciertos apoyos están sujetos a convocatoria, pruebas o disponibilidad por campus.","titulo":"Convocatorias y campus"}]` | `{"default":5,"max":6,"min":0,"sorting_label_field":null}` | sí | `null` |
| `items.icono` | `choice` | no | `admision` | `null` | no | `items` |
| `items.titulo` | `text` | no | `Primero, tu admisión` | `null` | no | `items` |
| `items.titulo_tag` | `choice` | no | `h3` | `null` | no | `items` |
| `items.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `items` |
| `items.texto` | `text` | no | `Debes estar admitido para iniciar ciertos trámites de apoyo.` | `null` | no | `items` |
| `items.texto_tag` | `choice` | no | `p` | `null` | no | `items` |
| `items.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `items` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_iconos` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_icono` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-consideraciones" %}
{% end_dnd_module %}
```
