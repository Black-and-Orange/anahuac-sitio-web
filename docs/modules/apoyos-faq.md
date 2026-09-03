# `apoyos-faq`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-faq.module` |
| Label HubSpot | Apoyos · Dudas frecuentes — Anáhuac |
| Estado | `Development` |
| Familia funcional | `faq` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `acordeon-nativo`, `enlaces-en-respuesta`, `preguntas-repetibles`, `respuestas-richtext` |
| Variantes verificadas | — |
| Notas curatoriales | FAQ con acordeón details/summary nativo y anclaje/aria-labelledby propios; no depende de JS propio. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

- `candidato` → `admision-faq` — Comparten details/summary, repeater de preguntas y respuestas richtext; difieren en fields introductorios y hooks/clases.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-faq`](./admision-faq.md): score 0.876; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`; coincidencias: `familia:faq`, `acordeon-nativo`, `enlaces-en-respuesta`, `preguntas-repetibles`, `respuestas-richtext`, `category:BODY_CONTENT`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-faq`, `.section-pad`.
- Elementos: `details:1`, `div:4`, `dynamic:4`, `section:1`, `span:2`, `summary:1`.
- Estructura padre→hijo: `details>div:1`, `details>summary:1`, `div>details:1`, `div>div:2`, `div>dynamic:3`, `dynamic>span:1`, `section>div:1`, `summary>dynamic:1`, `summary>span:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>details:1`, `section>div>div>details>div:1`, `section>div>div>details>summary:1`, `section>div>div>details>summary>dynamic:1`, `section>div>div>details>summary>span:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`.
- Clases: `.apo-faq`, `.container`, `.faq-answer`, `.faq-item`, `.faq-list`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`, `.wide`.
- IDs: `#dudas`, `#faq-title`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-faq .faq-item p`, `.adm-faq .faq-item p a`, `.adm-faq .faq-item summary`, `.apo-faq`, `.apo-faq .section-intro`, `.apo-faq .section-intro > p:not(.tagline)`, `.apo-faq .section-intro h2`, `.apo-faq .section-intro p:not(.tagline)`, `.faq-answer`, `.faq-answer a`, `.faq-answer p`, `.faq-item`, `.faq-item p`, `.faq-item summary`, `.faq-item summary > :where(h1, h2, h3, h4, h5, h6, p)`, `.faq-item summary::-webkit-details-marker`, `.faq-item summary::after`, `.faq-item summary:hover`, `.faq-item[open] summary::after`, `.faq-list`, `.section-intro.wide`.
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
| `grupo_contenido.eyebrow` | `text` | no | — | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Dudas frecuentes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Resuelve las preguntas más comunes sobre apoyos económicos y financiamiento en Anáhuac.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `preguntas` | `group` | no | `[{"pregunta":"¿Necesito estar admitido para solicitar un apoyo?","respuesta":"<p>Los apoyos económicos se gestionan dentro del proceso de admisión. Puedes explorar tus opciones desde antes, pero para iniciar ciertos trámites de apoyo necesitas estar admitido: primero te registras como aspirante y, una vez dentro del proceso, presentas tu solicitud.</p>"},{"pregunta":"¿Qué diferencia hay entre un apoyo y el financiamiento?","respuesta":"<p>Un apoyo es un porcentaje de descuento sobre tu colegiatura que no tienes que devolver y que se otorga según tu desempeño, talento o perfil socioeconómico. El financiamiento es un crédito que cubres a lo largo del tiempo, con sus propias condiciones e intereses. En resumen: el apoyo reduce el costo y el financiamiento distribuye el pago.</p>"},{"pregunta":"¿Puedo combinar un apoyo socioeconómico con un crédito educativo?","respuesta":"<p>Sí. El financiamiento está pensado para complementar tu apoyo, no para sustituirlo. Las opciones disponibles —Crédito Educativo Prepárate, Laudex y el crédito complementario institucional— son combinables con un apoyo socioeconómico para cubrir la parte restante de tu colegiatura.</p>"},{"pregunta":"¿Todos los apoyos aplican para ambos campus?","respuesta":"<p>No necesariamente. Algunos apoyos están sujetos a disponibilidad por campus y sus rangos pueden variar de una sede a otra; el apoyo artístico, por ejemplo, maneja rangos distintos en Campus Norte y Campus Sur. Confirma con tu asesor la disponibilidad y el porcentaje del campus donde quieres estudiar.</p>"},{"pregunta":"¿Los porcentajes de apoyo son fijos?","respuesta":"<p>No. Cada apoyo se maneja dentro de un rango (por ejemplo, 10%–50%) y el porcentaje que se otorga depende de la evaluación de tu caso y de la disponibilidad. El comité considera variables académicas y socioeconómicas para definir el monto dentro de ese rango.</p>"},{"pregunta":"¿Qué pasa si no cumplo con el promedio mínimo?","respuesta":"<p>El promedio mínimo cambia según el apoyo, y no todos lo exigen. Si no alcanzas el de un apoyo académico, podrías calificar por otra vía: talento deportivo o artístico, concursos preuniversitarios —que premian el talento sin promedio mínimo— o financiamiento complementario. Un asesor puede ayudarte a encontrar la opción que mejor se ajuste a tu perfil.</p>"},{"pregunta":"¿Dónde veo las convocatorias de deporte, arte o concursos?","respuesta":"<p>Estos apoyos dependen de convocatorias, pruebas o audiciones que se publican por periodo y campus. Para conocer las fechas y los requisitos vigentes contacta a un asesor, que te compartirá la convocatoria correspondiente a tu disciplina y campus.</p>"}]` | `{"default":7,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `preguntas.pregunta` | `text` | no | `¿Necesito estar admitido para solicitar un apoyo?` | `null` | no | `preguntas` |
| `preguntas.pregunta_tag` | `choice` | no | `ninguna` | `null` | no | `preguntas` |
| `preguntas.pregunta_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `preguntas` |
| `preguntas.respuesta` | `richtext` | no | `<p>Escribe aquí la respuesta.</p>` | `null` | no | `preguntas` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-faq" %}
{% end_dnd_module %}
```
