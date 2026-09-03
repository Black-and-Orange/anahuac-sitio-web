# `admision-faq`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-faq.module` |
| Label HubSpot | Admisión · Dudas frecuentes — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `faq` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `acordeon-nativo`, `enlaces-en-respuesta`, `preguntas-repetibles`, `respuestas-richtext` |
| Variantes verificadas | — |
| Notas curatoriales | FAQ con acordeón details/summary nativo; no depende de JS propio. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `apoyos-faq` — Comparten details/summary, repeater de preguntas y respuestas richtext; difieren en fields introductorios y hooks/clases.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`apoyos-faq`](./apoyos-faq.md): score 0.876; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`; coincidencias: `familia:faq`, `acordeon-nativo`, `enlaces-en-respuesta`, `preguntas-repetibles`, `respuestas-richtext`, `category:BODY_CONTENT`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-faq`, `.section-pad`.
- Elementos: `details:1`, `div:3`, `dynamic:3`, `section:1`, `span:1`, `summary:1`.
- Estructura padre→hijo: `details>summary:1`, `div>details:1`, `div>div:2`, `div>dynamic:2`, `section>div:1`, `summary>dynamic:1`, `summary>span:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>details:1`, `section>div>div>details>summary:1`, `section>div>div>details>summary>dynamic:1`, `section>div>div>details>summary>span:1`, `section>div>div>dynamic:2`.
- Clases: `.adm-faq`, `.container`, `.faq-item`, `.faq-list`, `.reveal`, `.section-intro`, `.section-pad`, `.wide`.
- IDs: `#dudas`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-faq`, `.adm-faq .faq-item p`, `.adm-faq .faq-item p a`, `.adm-faq .faq-item summary`, `.adm-faq .section-intro`, `.adm-faq .section-intro h2`, `.adm-faq .section-intro p:not(.tagline)`, `.faq-item`, `.faq-item p`, `.faq-item summary`, `.faq-item summary > :where(h1, h2, h3, h4, h5, h6, p)`, `.faq-item summary::-webkit-details-marker`, `.faq-item summary::after`, `.faq-item summary:hover`, `.faq-item[open] summary::after`, `.faq-list`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: —.
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
| `grupo_contenido.heading` | `text` | no | `Dudas frecuentes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Resuelve tus dudas sobre el proceso de admisión en Anáhuac.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `preguntas` | `group` | no | `[{"pregunta":"¿Cuándo son los exámenes?","pregunta_tag":"ninguna","respuesta":"<p>Las fechas de examen se publican en nuestro calendario anual. Puedes elegir la que mejor se ajuste a tu preparación y disponibilidad.</p>"},{"pregunta":"¿Qué documentos necesito?","pregunta_tag":"ninguna","respuesta":"<p>Requerimos tu certificado de bachillerato, identificación oficial y comprobante de domicilio. Algunos programas como medicina solicitan documentación adicional.</p>"},{"pregunta":"¿Hay opciones para internacionales?","pregunta_tag":"ninguna","respuesta":"<p>Sí, contamos con un proceso especial para estudiantes internacionales que incluye evaluaciones de idioma y documentación adicional.</p>"},{"pregunta":"¿Cuánto cuesta estudiar aquí?","pregunta_tag":"ninguna","respuesta":"<p>Las colegiaturas varían según el programa que elijas. Ofrecemos becas y apoyos financieros para estudiantes calificados.</p>"},{"pregunta":"¿Cambia el proceso si quiero solicitar una beca?","pregunta_tag":"ninguna","respuesta":"<p>Comienza explorando nuestras licenciaturas en la oferta académica. Luego regístrate en el portal y prepara tu documentación.</p>"}]` | `{"default":5,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `preguntas.pregunta` | `text` | no | `¿Cuándo son los exámenes?` | `null` | no | `preguntas` |
| `preguntas.pregunta_tag` | `choice` | no | `ninguna` | `null` | no | `preguntas` |
| `preguntas.pregunta_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `preguntas` |
| `preguntas.respuesta` | `richtext` | no | `<p>Escribe aquí la respuesta.</p>` | `null` | no | `preguntas` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_pregunta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_respuesta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/admision-faq" %}
{% end_dnd_module %}
```
