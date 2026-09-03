# `eventos`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `eventos.module` |
| Label HubSpot | Eventos — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `evento-destacado-opcional`, `eventos-repetibles`, `filtros-por-etiqueta`, `metadatos-de-evento`, `paginacion` |
| Variantes verificadas | — |
| Notas curatoriales | Listado filtrable con evento destacado opcional y hooks data-filter/data-tags. No se agrupa con catálogos sin comparar su interacción y modelo de fecha. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.events`, `.section-pad`.
- Elementos: `a:2`, `article:1`, `button:4`, `div:12`, `dynamic:2`, `h3:2`, `img:1`, `p:5`, `section:1`, `span:7`, `strong:2`.
- Estructura padre→hijo: `article>a:1`, `article>div:2`, `div>a:1`, `div>article:1`, `div>button:4`, `div>div:9`, `div>dynamic:2`, `div>h3:2`, `div>img:1`, `div>p:5`, `div>span:3`, `div>strong:2`, `h3>span:1`, `p>span:3`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:5`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>div:2`, `section>div>div>article>div>h3:1`, `section>div>div>article>div>h3>span:1`, `section>div>div>article>div>p:2`, `section>div>div>article>div>p>span:1`, `section>div>div>article>div>span:1`, `section>div>div>article>div>strong:1`, `section>div>div>button:2`, `section>div>div>div:4`, `section>div>div>div>a:1`, `section>div>div>div>button:2`, `section>div>div>div>h3:1`, `section>div>div>div>p:2`, `section>div>div>div>p>span:1`, `section>div>div>div>span:2`, `section>div>div>div>strong:1`, `section>div>div>dynamic:2`, `section>div>div>img:1`, `section>div>div>p:1`, `section>div>div>p>span:1`.
- Clases: `.active`, `.btn`, `.btn-orange`, `.btn-purple`, `.container`, `.dark`, `.event-arrows`, `.event-date`, `.event-dots`, `.event-info`, `.event-list`, `.event-next`, `.event-pagination`, `.event-prev`, `.event-tags`, `.event-title`, `.events`, `.featured-event`, `.large`, `.meta`, `.pill`, `.reveal`, `.section-intro`, `.section-pad`, `.small`, `.tagline`.
- IDs: `#eventos`.
- Data attributes: `data-filter`, `data-reveal`, `data-tags`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.btn.small`, `.event-arrows`, `.event-arrows button`, `.event-arrows button:disabled`, `.event-arrows button:hover`, `.event-date`, `.event-date span`, `.event-date strong`, `.event-date.large`, `.event-date.large span`, `.event-date.large strong`, `.event-dots`, `.event-dots button`, `.event-dots button.is-active`, `.event-info`, `.event-info > p:not(.meta)`, `.event-info h3`, `.event-info p`, `.event-list article`, `.event-list article .btn`, `.event-list article > div:not(.event-date)`, `.event-list article p`, `.event-list article:hover`, `.event-list article[hidden]`, `.event-list h3`, `.event-list h3 .pill.dark`, `.event-list p:not(.meta)`, `.event-pagination`, `.event-tags`, `.event-tags button`, `.event-tags button.active`, `.event-tags button:hover`, `.event-title`, `.events`, `.events .btn`, `.events .container`, `.events .section-intro > p:not(.tagline)`, `.events .section-intro h2`, `.events.section-pad`, `.events::after`, `.events::before`, `.featured-event`, `.featured-event > img`, `.meta`, `.meta span`, `.pill`, `.pill.dark`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.event-dots`, `.event-list`, `.event-next`, `.event-prev`, `.event-tags`, `[data-filter]`, `[data-tags]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/evento.jpg`.
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
| `eyebrow` | `text` | no | `Próximos eventos` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Sé parte de nuestras experiencias preuniversitarias` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Participa en experiencias diseñadas para conocer tu futuro en Anáhuac.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `mostrar_evento_destacado` | `boolean` | no | `false` | `null` | no | `null` |
| `featured` | `group` | no | `{"campus":"Campus Norte","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Regístrate aquí ›","day":"15","description":"Vive el mejor evento para preuniversitarios con talleres, conferencias, juegos, concursos, premios y mucho más.","image":{"alt":"Estudiantes caminando en campus","src":""},"modality":"Presencial","month":"Mayo 2026","pill_text":"Evento Masivo","title":"Vive Anáhuac"}` | `null` | no | `null` |
| `featured.image` | `image` | no | `{"alt":"Estudiantes caminando en campus","src":""}` | `null` | no | `featured` |
| `featured.day` | `text` | no | `15` | `null` | no | `featured` |
| `featured.month` | `text` | no | `Mayo 2026` | `null` | no | `featured` |
| `featured.pill_text` | `text` | no | `Evento Masivo` | `null` | no | `featured` |
| `featured.title` | `text` | no | `Vive Anáhuac` | `null` | no | `featured` |
| `featured.modality` | `text` | no | `Presencial` | `null` | no | `featured` |
| `featured.campus` | `text` | no | `Campus Norte` | `null` | no | `featured` |
| `featured.description` | `text` | no | `Vive el mejor evento para preuniversitarios con talleres, conferencias, juegos, concursos, premios y mucho más.` | `null` | no | `featured` |
| `featured.cta_text` | `text` | no | `Regístrate aquí ›` | `null` | no | `featured` |
| `featured.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `featured` |
| `filters` | `group` | no | `[{"slug":"all","text":"Ver todos"},{"slug":"sesiones-informativas","text":"Sesiones informativas"},{"slug":"visitas-campus","text":"Visitas en Campus"},{"slug":"brunch-informativo","text":"Brunch informativo"},{"slug":"eventos-masivos","text":"Eventos masivos"}]` | `{"default":5,"max":12,"min":1,"sorting_label_field":null}` | sí | `null` |
| `filters.text` | `text` | no | `Filtro` | `null` | no | `filters` |
| `filters.slug` | `text` | no | `all` | `null` | no | `filters` |
| `events` | `group` | no | `[{"campus":"Campus Norte","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Conocer más","day":"18","description":"Explora nuestros convenios globales y estudia un semestre en universidades aliadas del mundo.","modality":"Virtual","month":"Mayo 2026","pill_text":"Sesión Informativa","tags":"sesiones-informativas","title":"Movilidad Internacional"},{"campus":"Campus Sur","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Agendar visita","day":"22","description":"Vive un día como León Anáhuac con talleres, conferencias y competencias en vivo.","modality":"Virtual","month":"Mayo 2026","pill_text":"","tags":"visitas-campus","title":"Día de puertas abiertas"},{"campus":"Bi-Campus","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Inscribirse","day":"25","description":"Escucha historias reales de quiénes estudiaron aquí y hoy generan impacto profesional.","modality":"Presencial","month":"Mayo 2026","pill_text":"","tags":"eventos-masivos","title":"Encuentro con egresados"},{"campus":"Campus Norte","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Apartar lugar","day":"29","description":"Descubre tus intereses profesionales con actividades guiadas por orientadores universitarios.","modality":"Presencial","month":"Mayo 2026","pill_text":"","tags":"visitas-campus","title":"Taller vocacional Anáhuac"},{"campus":"Campus Sur","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Reservar","day":"04","description":"Conoce instalaciones, resuelve dudas de admisión y conversa con asesores académicos.","modality":"Presencial","month":"Junio 2026","pill_text":"","tags":"brunch-informativo","title":"Brunch para familias"},{"campus":"Bi-Campus","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Ver horarios","day":"11","description":"Vive una sesión académica breve para acercarte a la experiencia real de tu licenciatura.","modality":"Virtual","month":"Junio 2026","pill_text":"","tags":"sesiones-informativas","title":"Clase muestra por área"}]` | `{"default":6,"max":24,"min":0,"sorting_label_field":null}` | sí | `null` |
| `events.day` | `text` | no | `18` | `null` | no | `events` |
| `events.month` | `text` | no | `Mayo 2026` | `null` | no | `events` |
| `events.title` | `text` | no | `Evento` | `null` | no | `events` |
| `events.pill_text` | `text` | no | — | `null` | no | `events` |
| `events.modality` | `text` | no | `Virtual` | `null` | no | `events` |
| `events.campus` | `text` | no | `Campus Norte` | `null` | no | `events` |
| `events.description` | `text` | no | — | `null` | no | `events` |
| `events.cta_text` | `text` | no | `Conocer más` | `null` | no | `events` |
| `events.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `events` |
| `events.tags` | `text` | no | — | `null` | no | `events` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/eventos" %}
{% end_dnd_module %}
```
