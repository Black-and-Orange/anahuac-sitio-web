# `apoyos-financiamiento`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-financiamiento.module` |
| Label HubSpot | Apoyos · Financiamiento — Anáhuac |
| Estado | `Development` |
| Familia funcional | `null` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `columnas-repetibles`, `cta-por-opcion`, `documentos-desplegables`, `logos`, `metadatos-financieros`, `opciones-financieras-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Combina cards de opciones financieras y un bloque details/summary de documentos; no hay otro contrato equivalente en el inventario. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-financiamiento`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `dd:2`, `details:1`, `div:7`, `dl:1`, `dt:2`, `dynamic:12`, `img:1`, `path:1`, `section:1`, `span:8`, `summary:1`, `svg:1`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `a>svg:1`, `article>a:1`, `article>dl:1`, `article>dynamic:2`, `article>img:1`, `dd>dynamic:2`, `dd>span:2`, `details>div:1`, `details>summary:1`, `div>article:1`, `div>dd:2`, `div>details:1`, `div>div:3`, `div>dt:2`, `div>dynamic:4`, `dl>div:2`, `dt>dynamic:2`, `dt>span:2`, `dynamic>span:1`, `section>div:1`, `span>dynamic:1`, `span>span:1`, `summary>span:1`, `svg>path:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>details:1`, `section>div>details>div:1`, `section>div>details>div>div:1`, `section>div>details>div>div>dynamic:1`, `section>div>details>summary:1`, `section>div>details>summary>span:1`, `section>div>details>summary>span>dynamic:1`, `section>div>details>summary>span>span:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>a>dynamic:1`, `section>div>div>article>a>span:1`, `section>div>div>article>a>svg:1`, `section>div>div>article>a>svg>path:1`, `section>div>div>article>dl:1`, `section>div>div>article>dl>div:2`, `section>div>div>article>dl>div>dd:2`, `section>div>div>article>dl>div>dd>dynamic:2`, `section>div>div>article>dl>div>dd>span:2`, `section>div>div>article>dl>div>dt:2`, `section>div>div>article>dl>div>dt>dynamic:2`, `section>div>div>article>dl>div>dt>span:2`, `section>div>div>article>dynamic:2`, `section>div>div>article>img:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`.
- Clases: `.apo-financiamiento`, `.btn-program`, `.container`, `.financiamiento-card`, `.financiamiento-combinable`, `.financiamiento-docs`, `.financiamiento-docs-cols`, `.financiamiento-docs-summary`, `.financiamiento-docs-title`, `.financiamiento-grid`, `.financiamiento-logo`, `.financiamiento-meta`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#financiamiento`, `#financiamiento-title`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-financiamiento`, `.apo-financiamiento .btn-program`, `.apo-financiamiento .section-intro`, `.apo-financiamiento .section-intro > p:not(.tagline)`, `.apo-financiamiento .section-intro h2`, `.apo-financiamiento .section-intro p:not(.tagline)`, `.financiamiento-card`, `.financiamiento-card h3`, `.financiamiento-combinable`, `.financiamiento-combinable::before`, `.financiamiento-docs`, `.financiamiento-docs h4`, `.financiamiento-docs li`, `.financiamiento-docs ul`, `.financiamiento-docs-cols`, `.financiamiento-docs-summary`, `.financiamiento-docs-summary::-webkit-details-marker`, `.financiamiento-docs-summary::after`, `.financiamiento-docs-title`, `.financiamiento-docs-title > :where(h1, h2, h3, h4, h5, h6, p)`, `.financiamiento-docs[open] .financiamiento-docs-summary::after`, `.financiamiento-grid`, `.financiamiento-logo`, `.financiamiento-meta`, `.financiamiento-meta > div`, `.financiamiento-meta dd`, `.financiamiento-meta dd > :where(h1, h2, h3, h4, h5, h6, p)`, `.financiamiento-meta dt`, `.financiamiento-meta dt > :where(h1, h2, h3, h4, h5, h6, p)`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 56.25em)`.
- Assets: `get_asset_url('../../images/' ~ logos_fallback[loop.index0 % (logos_fallback\|length)])`.
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
| `grupo_contenido.eyebrow` | `text` | no | `Financiamiento` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Complementa tu apoyo con financiamiento` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Si necesitas complementar tu apoyo, también existen opciones de financiamiento. A diferencia de una beca, el financiamiento es un crédito que cubres a lo largo del tiempo y que puede combinarse con tu apoyo socioeconómico cuando más te conviene.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `opciones` | `group` | no | `[{"combinable":"Combinable con apoyo","como_funciona":"Financiamiento complementario en el que pagas intereses semestrales durante la carrera, con opción de 6 meses de gracia después de egresar.","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Más información","logo":{"alt":"Universidad Anáhuac México","src":""},"requisito":"Promedio mínimo de preparatoria de 7.5, obligado solidario (aval) y reporte actualizado de buró de crédito.","titulo":"Crédito educativo complementario institucional"},{"combinable":"Combinable con apoyo","como_funciona":"Pagas mensualidades fijas menores a la colegiatura mientras estudias y, al egresar, liquidas el resto a largo plazo con una tasa de interés baja. Financia hasta $1,100,000.","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Más información","logo":{"alt":"Prepárate","src":""},"requisito":"Promedio mínimo de 8.0, obligado solidario con ingresos comprobables y buen historial en buró de crédito.","titulo":"Crédito Educativo Prepárate"},{"combinable":"Combinable con apoyo","como_funciona":"Reduce el monto de tus colegiaturas y lo pagas en un plazo posterior a tus estudios. Tasa de 0% anual mientras seas alumno regular (9.9% si dejas de serlo), con liquidación anticipada sin penalización.","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Más información","logo":{"alt":"Laudex","src":""},"requisito":"Sujeto a evaluación y aprobación crediticia de Laudex; consulta montos y condiciones.","titulo":"Laudex"}]` | `{"default":3,"max":9,"min":0,"sorting_label_field":null}` | sí | `null` |
| `opciones.logo` | `image` | no | `{"alt":"Proveedor de financiamiento","src":""}` | `null` | no | `opciones` |
| `opciones.titulo` | `text` | no | `Crédito educativo` | `null` | no | `opciones` |
| `opciones.titulo_tag` | `choice` | no | `h3` | `null` | no | `opciones` |
| `opciones.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `opciones` |
| `opciones.como_funciona` | `text` | no | — | `null` | no | `opciones` |
| `opciones.como_funciona_tag` | `choice` | no | `ninguna` | `null` | no | `opciones` |
| `opciones.como_funciona_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `opciones` |
| `opciones.requisito` | `text` | no | — | `null` | no | `opciones` |
| `opciones.requisito_tag` | `choice` | no | `ninguna` | `null` | no | `opciones` |
| `opciones.requisito_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `opciones` |
| `opciones.combinable` | `text` | no | `Combinable con apoyo` | `null` | no | `opciones` |
| `opciones.combinable_tag` | `choice` | no | `p` | `null` | no | `opciones` |
| `opciones.combinable_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `opciones` |
| `opciones.cta_texto` | `text` | no | `Más información` | `null` | no | `opciones` |
| `opciones.cta_texto_tag` | `choice` | no | `ninguna` | `null` | no | `opciones` |
| `opciones.cta_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `opciones` |
| `opciones.cta_enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}}` | `null` | no | `opciones` |
| `grupo_documentos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_documentos.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_documentos` |
| `grupo_documentos.titulo` | `text` | no | `Documentos y requisitos generales` | `null` | no | `grupo_documentos` |
| `grupo_documentos.titulo_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_documentos` |
| `grupo_documentos.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_documentos` |
| `columnas` | `group` | no | `[{"lista":"<ul><li>Promedio mínimo de preparatoria de 7.5</li><li>Solicitud completa y firmada</li><li>Última declaración de impuestos y último recibo de sueldo</li><li>Constancia de calificaciones o certificado de preparatoria (primer semestre)</li><li>Copia de identificación y recibo de teléfono del alumno</li><li>Reporte actualizado de buró de crédito del padre o tutor</li><li>Carta Anáhuac de preautorización</li></ul>","titulo":"Del alumno y su familia"},{"lista":"<ul><li>Declaración de impuestos del año y recibo de sueldo del mes</li><li>Copia del título de propiedad que avala el crédito</li><li>Copia del predial pagado de esa propiedad</li><li>Comprobante de domicilio (con fotografía y firma)</li><li>Recibo de teléfono con domicilio del aval</li><li>Reporte actualizado de buró de crédito del aval</li><li>Carta Anáhuac de preautorización</li></ul>","titulo":"Del aval (obligado solidario)"}]` | `{"default":2,"max":3,"min":0,"sorting_label_field":null}` | sí | `null` |
| `columnas.titulo` | `text` | no | `Del alumno y su familia` | `null` | no | `columnas` |
| `columnas.titulo_tag` | `choice` | no | `h4` | `null` | no | `columnas` |
| `columnas.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `columnas` |
| `columnas.lista` | `richtext` | no | `<ul><li>Requisito</li></ul>` | `null` | no | `columnas` |
| `grupo_etiquetas` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_etiquetas.label_como_funciona` | `text` | no | `Cómo funciona` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_como_funciona_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_como_funciona_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito` | `text` | no | `Requisito base` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_combinable` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_cta` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_etiquetas` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_combinable` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-financiamiento" %}
{% end_dnd_module %}
```
