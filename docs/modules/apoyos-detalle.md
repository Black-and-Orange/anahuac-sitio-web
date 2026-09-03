# `apoyos-detalle`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-detalle.module` |
| Label HubSpot | Apoyos · Detalle por apoyo — Anáhuac |
| Estado | `Development` |
| Familia funcional | `catalogo-apoyos` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `anclas-por-ficha`, `cta-por-ficha`, `detalle-de-apoyos`, `fichas-repetibles`, `imagen-lateral`, `metadatos-configurables` |
| Variantes verificadas | — |
| Notas curatoriales | Detalle extenso con visibilidad configurable de rango, descripción, perfil, requisito, evaluación, notas y CTA. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

- `complementa` → `apoyos-panorama` — Recibe las anclas del panorama y desarrolla las fichas; comparte el dominio pero no el contrato de render.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-detalle`, `.section-pad`.
- Elementos: `a:1`, `dd:4`, `details:1`, `div:11`, `dl:1`, `dt:4`, `dynamic:14`, `img:1`, `section:1`, `span:12`, `summary:1`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `dd>dynamic:4`, `dd>span:4`, `details>div:1`, `details>summary:1`, `div>a:1`, `div>dd:4`, `div>details:1`, `div>div:5`, `div>dl:1`, `div>dt:4`, `div>dynamic:3`, `div>img:1`, `dl>div:4`, `dt>dynamic:4`, `dt>span:4`, `dynamic>span:1`, `section>div:1`, `span>dynamic:1`, `span>span:1`, `summary>dynamic:1`, `summary>span:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>details:1`, `section>div>div>details>div:1`, `section>div>div>details>div>div:2`, `section>div>div>details>div>div>a:1`, `section>div>div>details>div>div>a>dynamic:1`, `section>div>div>details>div>div>a>span:1`, `section>div>div>details>div>dl:1`, `section>div>div>details>div>dl>div:4`, `section>div>div>details>div>dl>div>dd:4`, `section>div>div>details>div>dl>div>dd>dynamic:4`, `section>div>div>details>div>dl>div>dd>span:4`, `section>div>div>details>div>dl>div>dt:4`, `section>div>div>details>div>dl>div>dt>dynamic:4`, `section>div>div>details>div>dl>div>dt>span:4`, `section>div>div>details>summary:1`, `section>div>div>details>summary>dynamic:1`, `section>div>div>details>summary>span:1`, `section>div>div>details>summary>span>dynamic:1`, `section>div>div>details>summary>span>span:1`, `section>div>div>div:1`, `section>div>div>div>dynamic:3`, `section>div>div>div>dynamic>span:1`, `section>div>div>img:1`.
- Clases: `.apo-detalle`, `.apo-detalle-aside`, `.apo-detalle-layout`, `.btn`, `.btn-orange`, `.button-row`, `.container`, `.detalle-desc`, `.detalle-ficha`, `.detalle-item`, `.detalle-list`, `.detalle-media`, `.detalle-nombre`, `.detalle-panel`, `.detalle-rango`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#detalle-apoyos`, `#detalle-title`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero-info .button-row`, `.apo-detalle`, `.apo-detalle .btn > :where(h1, h2, h3, h4, h5, h6, p)`, `.apo-detalle .btn-orange`, `.apo-detalle .section-intro`, `.apo-detalle .section-intro > p:not(.tagline)`, `.apo-detalle .section-intro h2`, `.apo-detalle .section-intro p:not(.tagline)`, `.apo-detalle-aside`, `.apo-detalle-aside .detalle-media`, `.apo-detalle-layout`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.detalle-desc`, `.detalle-ficha`, `.detalle-ficha > div`, `.detalle-ficha dd`, `.detalle-ficha dd > :where(h1, h2, h3, h4, h5, h6, p)`, `.detalle-ficha dt`, `.detalle-ficha dt > :where(h1, h2, h3, h4, h5, h6, p)`, `.detalle-item`, `.detalle-item summary`, `.detalle-item summary::-webkit-details-marker`, `.detalle-item summary::after`, `.detalle-item[open]`, `.detalle-item[open] summary::after`, `.detalle-list`, `.detalle-media`, `.detalle-nombre`, `.detalle-panel`, `.detalle-rango`, `.detalle-rango > :where(h1, h2, h3, h4, h5, h6, p)`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.apo-detalle`, `.detalle-item`, `.detalle-list`, `.detalle-media`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 37.5em)`, `@media (max-width: 40em)`, `@media (max-width: 64em)`, `@media (min-width: 40.0625em) and (max-width: 64em)`.
- Assets: `../../images/apoyos-economicos/default-detalle-apoyos.jpg`.
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
| `grupo_contenido.eyebrow` | `text` | no | `Detalle por apoyo` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Conoce a fondo cada apoyo` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Despliega el apoyo que te interese para ver en qué consiste, a quién va dirigido y cómo se evalúa.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_imagen` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_imagen.image` | `image` | no | `{"alt":"Apoyos económicos Universidad Anáhuac México","src":""}` | `null` | no | `grupo_imagen` |
| `fichas` | `group` | no | `[{"ancla":"apoyo-academico","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Apoyo dirigido a candidatos de nuevo ingreso a licenciatura, evaluado con criterios académicos y socioeconómicos.</p>","evaluacion":"","notas":"","perfil":"Candidatos de nuevo ingreso a licenciatura","rango":"10% – 50%","requisito":"Promedio de preparatoria mayor o igual a 8","titulo":"Apoyo socioeconómico académico"},{"ancla":"apoyo-excelencia","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Apoyo para perfiles de alto desempeño académico de nuevo ingreso a licenciatura.</p>","evaluacion":"","notas":"","perfil":"Candidatos de nuevo ingreso a licenciatura","rango":"10% – 70%","requisito":"Promedio de preparatoria mayor o igual a 9","titulo":"Apoyo socioeconómico de excelencia"},{"ancla":"apoyo-concursos","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Apoyo que se otorga a través de los concursos académicos preuniversitarios, sin promedio mínimo.</p>","evaluacion":"","notas":"","perfil":"Alumnos cursando cualquier año de preparatoria","rango":"30% – 100%","requisito":"Sin promedio mínimo; se premia el talento","titulo":"Concursos académicos preuniversitarios"},{"ancla":"apoyo-deportivo","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Apoyo para talento deportivo, sujeto a evaluación en la disciplina correspondiente.</p>","evaluacion":"","notas":"","perfil":"Talento con evaluación en una disciplina deportiva","rango":"10% – 90%","requisito":"Promedio de preparatoria mayor o igual a 8","titulo":"Apoyo deportivo"},{"ancla":"apoyo-artistico","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Apoyo para talento artístico en teatro, danza, música o artes visuales.</p>","evaluacion":"","notas":"El rango varía por campus (Norte 10%–50%, Sur 10%–70%).","perfil":"Talento en teatro, danza, música o artes visuales","rango":"10% – 70%","requisito":"Promedio de preparatoria mayor o igual a 8","titulo":"Apoyo artístico"},{"ancla":"apoyo-maguen-david","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Fondo dirigido a candidatos de nuevo ingreso con perfil socioeconómico elegible.</p>","evaluacion":"","notas":"*Datos de referencia, por confirmar.","perfil":"Nuevo ingreso con perfil socioeconómico elegible","rango":"20% – 60%","requisito":"Promedio de preparatoria mayor o igual a 8.5","titulo":"Fondo para la Educación Maguén David"},{"ancla":"apoyo-sedena","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Dirigido a hijos de militares activos en las Fuerzas Armadas de México: pagas la inscripción con tus propios recursos y la SEDENA la reembolsa tras verificar tu inscripción académica al inicio del semestre.</p>","evaluacion":"Cargas materias y, en la tercera semana, solicitas la constancia académica; la SEDENA verifica y reembolsa la inscripción.","notas":"El pago de la inscripción corre por cuenta del candidato. Requiere Credencial de Identidad Militar del tutor y Cédula de Credencial SEDENA del candidato.","perfil":"Hijos de militares activos en las Fuerzas Armadas de México","rango":"Reembolso de inscripción","requisito":"Promedio mayor o igual a 8.5 y aprobar el examen de admisión","titulo":"Apoyo SEDENA"},{"ancla":"apoyo-issfam","cta_enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"cta_texto":"Solicitar información","descripcion":"<p>Convenio entre la Universidad Anáhuac México y el ISSFAM (Instituto de Seguridad Social para las Fuerzas Armadas Mexicanas) que otorga un 40% de descuento sobre la colegiatura semestral a sus beneficiarios.</p>","evaluacion":"Solicitud formal al departamento de becas de la Anáhuac con la documentación completa.","notas":"Documentos: constancia de estudios (promedio de al menos dos años), comprobante de domicilio (≤ 3 meses), comprobantes de ingresos y credencial militar del tutor.","perfil":"Beneficiarios del ISSFAM","rango":"40%","requisito":"Promedio de bachillerato mayor o igual a 8.5","titulo":"Convenio ISSFAM"}]` | `{"default":8,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `fichas.titulo` | `text` | no | `Apoyo socioeconómico académico` | `null` | no | `fichas` |
| `fichas.titulo_tag` | `choice` | no | `span` | `null` | no | `fichas` |
| `fichas.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.ancla` | `text` | no | `apoyo-academico` | `null` | no | `fichas` |
| `fichas.rango` | `text` | no | `10% – 50%` | `null` | no | `fichas` |
| `fichas.rango_tag` | `choice` | no | `ninguna` | `null` | no | `fichas` |
| `fichas.rango_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.descripcion` | `richtext` | no | `<p>Describe en qué consiste este apoyo.</p>` | `null` | no | `fichas` |
| `fichas.perfil` | `text` | no | `Candidatos de nuevo ingreso a licenciatura` | `null` | no | `fichas` |
| `fichas.perfil_tag` | `choice` | no | `ninguna` | `null` | no | `fichas` |
| `fichas.perfil_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.requisito` | `text` | no | `Promedio de preparatoria mayor o igual a 8` | `null` | no | `fichas` |
| `fichas.requisito_tag` | `choice` | no | `ninguna` | `null` | no | `fichas` |
| `fichas.requisito_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.evaluacion` | `text` | no | — | `null` | no | `fichas` |
| `fichas.evaluacion_tag` | `choice` | no | `ninguna` | `null` | no | `fichas` |
| `fichas.evaluacion_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.notas` | `text` | no | — | `null` | no | `fichas` |
| `fichas.notas_tag` | `choice` | no | `ninguna` | `null` | no | `fichas` |
| `fichas.notas_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.cta_texto` | `text` | no | `Solicitar información` | `null` | no | `fichas` |
| `fichas.cta_texto_tag` | `choice` | no | `ninguna` | `null` | no | `fichas` |
| `fichas.cta_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `fichas` |
| `fichas.cta_enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}}` | `null` | no | `fichas` |
| `grupo_etiquetas` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_etiquetas.label_perfil` | `text` | no | `Perfil ideal` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_perfil_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_perfil_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito` | `text` | no | `Requisito` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_evaluacion` | `text` | no | `Cómo se evalúa` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_evaluacion_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_evaluacion_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_notas` | `text` | no | `Notas importantes` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_notas_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_notas_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_rango` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.tamano_rango` | `choice` | no | `size-26` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_descripcion` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_perfil` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_requisito` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_evaluacion` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_notas` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_cta` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_nombre` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_rango` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_descripcion` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_etiquetas` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_valores` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-detalle" %}
{% end_dnd_module %}
```
