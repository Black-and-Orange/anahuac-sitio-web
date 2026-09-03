# `oferta-experiencia`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `oferta-experiencia.module` |
| Label HubSpot | Oferta · Experiencia — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `experiencia` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contenido-sticky`, `cta`, `imagen-o-video`, `slides-multimedia-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Template de Oferta no versionado. Es candidato fuerte para reutilizar experiencia, sujeto a comparar fields, defaults, estilos y uso en portal. |
| Páginas conocidas | `Oferta académica` |

### Relaciones curadas

- `candidato` → `experiencia` — Comparten clases raíz, layout sticky, repeater de slides con imagen o video y CTA; oferta-experiencia omite fields semánticos y de estilo presentes en experiencia.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`experiencia`](./experiencia.md): score 0.959; evidencia: `assets`, `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `js/hooks`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:experiencia`, `contenido-sticky`, `cta`, `imagen-o-video`, `slides-multimedia-repetibles`, `category:BODY_CONTENT`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.experience`.
- Elementos: `a:1`, `article:1`, `div:5`, `h2:1`, `h3:1`, `img:1`, `p:3`, `section:1`, `source:1`, `span:1`, `video:1`.
- Estructura padre→hijo: `article>div:1`, `article>img:1`, `article>video:1`, `div>a:1`, `div>article:1`, `div>div:3`, `div>h2:1`, `div>h3:1`, `div>p:3`, `p>span:1`, `section>div:1`, `video>source:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>div:1`, `section>div>div>article>div>h3:1`, `section>div>div>article>div>p:1`, `section>div>div>article>img:1`, `section>div>div>article>video:1`, `section>div>div>article>video>source:1`, `section>div>div>div:1`, `section>div>div>div>a:1`, `section>div>div>div>h2:1`, `section>div>div>div>p:2`, `section>div>div>div>p>span:1`.
- Clases: `.btn`, `.btn-purple`, `.container`, `.experience`, `.experience-card`, `.experience-layout`, `.experience-slides`, `.experience-sticky`, `.reveal`, `.section-intro`, `.tagline`.
- IDs: `#experiencia`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.experience`, `.experience .btn`, `.experience .container`, `.experience .experience-card`, `.experience .experience-card h3`, `.experience .section-intro > p:not(.tagline)`, `.experience .section-intro h2`, `.experience-card`, `.experience-card div`, `.experience-card h3`, `.experience-card img`, `.experience-card p`, `.experience-card video`, `.experience-card:hover`, `.experience-layout`, `.experience-slides`, `.experience-sticky`, `.experience-sticky .section-intro`, `.experience-sticky .section-intro > p:not(.tagline)`, `.experience::after`, `.experience::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.experience`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0 % (fallbacks\|length)])`.
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
| `eyebrow` | `text` | no | `Mucho más que solo una Universidad.` | `null` | no | `null` |
| `heading` | `text` | no | `Descubre por qué ser un León Anáhuac` | `null` | no | `null` |
| `intro` | `text` | no | `Conoce por qué vivirás una experiencia universitaria única con nosotros.` | `null` | no | `null` |
| `cta_text` | `text` | no | `Conoce la experiencia Anáhuac` | `null` | no | `null` |
| `cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `slides` | `group` | no | `[{"description":"Desarrolla las habilidades, conocimientos y experiencia que necesitas para construir un perfil integral. Nuestro modelo educativo integra formación profesional, intelectual, humana, social y espiritual.","image":{"alt":"Estudiantes Anáhuac en actividad","src":""},"title":"Un futuro con más posibilidades","video":"https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiantes-humo.mp4"},{"description":"Amplía tu experiencia con intercambios, convenios y opciones académicas que amplían tu perspectiva y enriquecen tu formación dentro y fuera del aula.","image":{"alt":"Estudiantes en programa de intercambio internacional","src":""},"title":"Oportunidades internacionales","video":""},{"description":"Haz deporte, participa en actividades culturales, involúcrate en proyectos sociales y forma parte de una comunidad activa.","image":{"alt":"Vida universitaria y deporte en Anáhuac","src":""},"title":"Una vida universitaria que te haga crecer","video":"https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/jugadores-corriendo.mp4"},{"description":"Disfruta de espacios creados para tu desarrollo integral: deportes, salud, innovación y recursos únicos que encontrarás en la Universidad Anáhuac.","image":{"alt":"Campus y espacios de la Universidad Anáhuac","src":""},"title":"Espacios que impulsan tu experiencia","video":""}]` | `{"default":4,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `slides.title` | `text` | no | `Título de la tarjeta` | `null` | no | `slides` |
| `slides.description` | `text` | no | `Descripción de la experiencia.` | `null` | no | `slides` |
| `slides.video` | `file` | no | — | `null` | no | `slides` |
| `slides.image` | `image` | no | `{"alt":"Experiencia Anáhuac","src":""}` | `null` | no | `slides` |
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
{% dnd_module path="../modules/oferta-experiencia" %}
{% end_dnd_module %}
```
