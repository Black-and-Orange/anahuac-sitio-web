# `apoyos-panorama`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-panorama.module` |
| Label HubSpot | Apoyos · Panorama de apoyos — Anáhuac |
| Estado | `Development` |
| Familia funcional | `catalogo-apoyos` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `anclas-a-detalle`, `carrusel-responsive`, `metadatos-de-apoyo`, `resumen-de-apoyos`, `tarjetas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Vista resumida del catálogo de apoyos; sus cards y navegación responsive requieren comparar JS y breakpoints antes de adaptar. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

- `complementa` → `apoyos-detalle` — Las tarjetas de panorama enlazan por ancla a las fichas extensas del módulo de detalle; cumplen responsabilidades distintas.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-panorama`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `button:2`, `dd:2`, `div:7`, `dl:1`, `dt:2`, `dynamic:11`, `polyline:2`, `section:1`, `span:6`, `svg:2`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `article>a:1`, `article>dl:1`, `article>dynamic:3`, `button>svg:2`, `dd>dynamic:2`, `dd>span:2`, `div>article:1`, `div>button:2`, `div>dd:2`, `div>div:4`, `div>dt:2`, `div>dynamic:3`, `dl>div:2`, `dt>dynamic:2`, `dt>span:2`, `dynamic>span:1`, `section>div:1`, `svg>polyline:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>a>dynamic:1`, `section>div>div>article>a>span:1`, `section>div>div>article>dl:1`, `section>div>div>article>dl>div:2`, `section>div>div>article>dl>div>dd:2`, `section>div>div>article>dl>div>dd>dynamic:2`, `section>div>div>article>dl>div>dd>span:2`, `section>div>div>article>dl>div>dt:2`, `section>div>div>article>dl>div>dt>dynamic:2`, `section>div>div>article>dl>div>dt>span:2`, `section>div>div>article>dynamic:3`, `section>div>div>div:2`, `section>div>div>div>button:2`, `section>div>div>div>button>svg:2`, `section>div>div>div>button>svg>polyline:2`, `section>div>div>div>dynamic:3`, `section>div>div>div>dynamic>span:1`.
- Clases: `.apo-panorama`, `.arrow-buttons`, `.container`, `.panorama-card`, `.panorama-grid`, `.panorama-link`, `.panorama-meta`, `.panorama-note`, `.panorama-rango`, `.programs-head`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#panorama`, `#panorama-carousel`, `#panorama-title`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-panorama`, `.apo-panorama .container`, `.apo-panorama .programs-head`, `.apo-panorama .section-intro`, `.apo-panorama .section-intro > p:not(.tagline)`, `.apo-panorama .section-intro h2`, `.apo-panorama .section-intro p:not(.tagline)`, `.apo-panorama .tagline span`, `.apo-panorama .tagline span::after`, `.apo-panorama::before`, `.arrow-buttons`, `.arrow-buttons button`, `.arrow-buttons button:hover`, `.oferta-areas .arrow-buttons`, `.oferta-areas .programs-head`, `.oferta-areas .programs-head .arrow-buttons`, `.panorama-card`, `.panorama-card h3`, `.panorama-grid`, `.panorama-link`, `.panorama-link > :where(h1, h2, h3, h4, h5, h6, p)`, `.panorama-link:hover`, `.panorama-meta`, `.panorama-meta > div`, `.panorama-meta dd`, `.panorama-meta dd > :where(h1, h2, h3, h4, h5, h6, p)`, `.panorama-meta dt`, `.panorama-meta dt > :where(h1, h2, h3, h4, h5, h6, p)`, `.panorama-note`, `.panorama-rango`, `.programs-head`, `.programs-head .btn`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.apo-panorama`, `.arrow-buttons`, `.panorama-card`, `.panorama-grid`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: —.
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
| `grupo_contenido.eyebrow` | `text` | no | `Panorama de apoyos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Tipos de apoyo disponibles` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Compara de un vistazo las categorías principales y entra al detalle de la que mejor se ajuste a tu perfil.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `tarjetas` | `group` | no | `[{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-academico","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Nuevo ingreso a licenciatura","rango":"10% – 50%","requisito":"Promedio de preparatoria mayor o igual a 8","titulo":"Apoyo socioeconómico académico"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-excelencia","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Nuevo ingreso a licenciatura","rango":"10% – 70%","requisito":"Promedio de preparatoria mayor o igual a 9","titulo":"Apoyo socioeconómico de excelencia"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-concursos","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Alumnos de cualquier año de preparatoria","rango":"30% – 100%","requisito":"Sin promedio mínimo; se premia el talento","titulo":"Concursos académicos preuniversitarios"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-deportivo","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Talento con evaluación en una disciplina deportiva","rango":"10% – 90%","requisito":"Promedio de preparatoria mayor o igual a 8","titulo":"Apoyo deportivo"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-artistico","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Talento en teatro, danza, música o artes visuales","rango":"10% – 70%","requisito":"Promedio de preparatoria mayor o igual a 8","titulo":"Apoyo artístico"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-maguen-david","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"*Datos de referencia, por confirmar.","perfil":"Nuevo ingreso con perfil socioeconómico elegible","rango":"20% – 60%","requisito":"Promedio de preparatoria mayor o igual a 8.5","titulo":"Fondo para la Educación Maguén David"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-sedena","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Hijos de militares activos en las Fuerzas Armadas de México","rango":"Reembolso de inscripción","requisito":"Promedio mayor o igual a 8.5 y examen de admisión","titulo":"Apoyo SEDENA"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#apoyo-issfam","type":"EXTERNAL"}},"enlace_texto":"Ver detalles ›","nota":"","perfil":"Beneficiarios del ISSFAM","rango":"40%","requisito":"Promedio de bachillerato mayor o igual a 8.5","titulo":"Convenio ISSFAM"}]` | `{"default":8,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `tarjetas.titulo` | `text` | no | `Apoyo socioeconómico académico` | `null` | no | `tarjetas` |
| `tarjetas.titulo_tag` | `choice` | no | `h3` | `null` | no | `tarjetas` |
| `tarjetas.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.rango` | `text` | no | `10% – 50%` | `null` | no | `tarjetas` |
| `tarjetas.rango_tag` | `choice` | no | `p` | `null` | no | `tarjetas` |
| `tarjetas.rango_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.perfil` | `text` | no | `Nuevo ingreso a licenciatura` | `null` | no | `tarjetas` |
| `tarjetas.perfil_tag` | `choice` | no | `ninguna` | `null` | no | `tarjetas` |
| `tarjetas.perfil_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.requisito` | `text` | no | `Promedio de preparatoria mayor o igual a 8` | `null` | no | `tarjetas` |
| `tarjetas.requisito_tag` | `choice` | no | `ninguna` | `null` | no | `tarjetas` |
| `tarjetas.requisito_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.nota` | `text` | no | — | `null` | no | `tarjetas` |
| `tarjetas.nota_tag` | `choice` | no | `p` | `null` | no | `tarjetas` |
| `tarjetas.nota_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.enlace_texto` | `text` | no | `Ver detalles ›` | `null` | no | `tarjetas` |
| `tarjetas.enlace_texto_tag` | `choice` | no | `ninguna` | `null` | no | `tarjetas` |
| `tarjetas.enlace_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#apoyo-academico","type":"EXTERNAL"}}` | `null` | no | `tarjetas` |
| `grupo_etiquetas` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_etiquetas.label_perfil` | `text` | no | `Perfil` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_perfil_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_perfil_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito` | `text` | no | `Requisito` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_etiquetas` |
| `grupo_etiquetas.label_requisito_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_etiquetas` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_rango` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.tamano_rango` | `choice` | no | `heading-3-size` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_perfil` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_requisito` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_nota` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_enlace` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_porcentaje` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_etiquetas` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_enlace` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-panorama" %}
{% end_dnd_module %}
```
