# `licenciaturas`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `licenciaturas.module` |
| Label HubSpot | Licenciaturas — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `exploracion-academica` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `carrusel-horizontal`, `conteo-por-programa`, `cta-por-tarjeta`, `navegacion-academica`, `programas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Explora programas mediante tarjetas en scroller; comparte intención con otros módulos académicos, no necesariamente compatibilidad estructural. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`oferta-areas`](./oferta-areas.md): score 0.555; evidencia: `assets`, `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `js/hooks`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:exploracion-academica`, `cta-por-tarjeta`, `navegacion-academica`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`descubre`](./descubre.md): score 0.461; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:exploracion-academica`, `cta-por-tarjeta`, `navegacion-academica`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.programs`, `.section-pad`.
- Elementos: `a:2`, `article:1`, `button:2`, `div:8`, `dynamic:2`, `h3:1`, `img:1`, `p:2`, `section:1`, `span:2`.
- Estructura padre→hijo: `a>span:1`, `article>div:1`, `article>img:1`, `div>a:2`, `div>article:1`, `div>button:2`, `div>div:6`, `div>dynamic:2`, `div>h3:1`, `div>p:2`, `p>span:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:3`, `section>div>div>a:1`, `section>div>div>a>span:1`, `section>div>div>article:1`, `section>div>div>article>div:1`, `section>div>div>article>div>a:1`, `section>div>div>article>div>h3:1`, `section>div>div>article>div>p:1`, `section>div>div>article>img:1`, `section>div>div>div:3`, `section>div>div>div>button:2`, `section>div>div>div>dynamic:2`, `section>div>div>div>p:1`, `section>div>div>div>p>span:1`.
- Clases: `.arrow-buttons`, `.btn`, `.btn-white-arrow`, `.container`, `.dots`, `.on-orange`, `.program-card`, `.program-scroller`, `.programs`, `.programs-head`, `.reveal`, `.section-intro`, `.section-pad`, `.slider-ui`, `.tagline`.
- IDs: `#licenciaturas`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-panorama .programs-head`, `.arrow-buttons`, `.arrow-buttons button`, `.arrow-buttons button:hover`, `.dots`, `.dots button`, `.dots button.active`, `.dots span`, `.dots span.active`, `.oferta-areas .arrow-buttons`, `.oferta-areas .programs-head`, `.oferta-areas .programs-head .arrow-buttons`, `.oferta-search .program-card`, `.oferta-search .program-card .btn-program`, `.oferta-search .program-card .btn-program:hover`, `.oferta-search .program-card .program-mode`, `.oferta-search .program-card div`, `.oferta-search .program-card img`, `.oferta-search .program-card p`, `.oferta-search .program-card.hidden`, `.oferta-search .program-card::after`, `.oferta-search .program-card:hover`, `.oferta-search .program-card:hover img`, `.program-card`, `.program-card a`, `.program-card div`, `.program-card h3`, `.program-card img`, `.program-card p`, `.program-card::after`, `.program-card:hover img`, `.program-scroller`, `.program-scroller::-webkit-scrollbar`, `.programs`, `.programs .btn`, `.programs .container`, `.programs .section-intro`, `.programs .section-intro > p:not(.tagline)`, `.programs .section-intro h2`, `.programs-head`, `.programs-head .btn`, `.programs::before`, `.slider-ui`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.arrow-buttons`, `.dots`, `.program-card`, `.program-scroller`, `.programs`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
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
| `bg_color` | `color` | no | `{"color":"#FF5900","opacity":100}` | `null` | no | `null` |
| `eyebrow` | `text` | no | `Áreas académicas` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Explora nuestras licenciaturas` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Encuentra la carrera que conecta con tus intereses, habilidades y metas.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `view_all_text` | `text` | no | `Ver todas` | `null` | no | `null` |
| `view_all_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `programs` | `group` | no | `[{"count":"5 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Ciencias de la Salud","src":""},"program_name":"Ciencias de la Salud"},{"count":"11 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Ingenierías y Ciencias","src":""},"program_name":"Ingenierías y Ciencias"},{"count":"11 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Negocios y Economía","src":""},"program_name":"Negocios y Economía"},{"count":"8 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Ciencias Sociales y Derecho","src":""},"program_name":"Ciencias Sociales y Derecho"},{"count":"7 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Comunicación, Arquitectura y Diseño","src":""},"program_name":"Comunicación, Arquitectura y Diseño"},{"count":"5 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Artes y Diseño","src":""},"program_name":"Artes y Diseño"},{"count":"4 programas","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","image":{"alt":"Educación y Formación","src":""},"program_name":"Educación y Formación"}]` | `{"default":7,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `programs.image` | `image` | no | `{"alt":"Área académica Anáhuac","src":""}` | `null` | no | `programs` |
| `programs.program_name` | `text` | no | `Área académica` | `null` | no | `programs` |
| `programs.program_name_tag` | `choice` | no | `h3` | `null` | no | `programs` |
| `programs.count` | `text` | no | `5 programas` | `null` | no | `programs` |
| `programs.cta_text` | `text` | no | `Explorar ›` | `null` | no | `programs` |
| `programs.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `programs` |
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
{% dnd_module path="../modules/licenciaturas" %}
{% end_dnd_module %}
```
