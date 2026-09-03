# `oferta-search`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `oferta-search.module` |
| Label HubSpot | Oferta · Buscador de licenciaturas — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `exploracion-academica` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `busqueda-de-programas`, `conteo-de-resultados`, `filtros-por-area`, `filtros-por-campus`, `paginacion`, `programas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Buscador de licenciaturas. Template de Oferta no versionado. Los hooks de búsqueda, dropdowns, filtros data-area/data-campus/data-mode y paginación forman parte del contrato. |
| Páginas conocidas | `Oferta académica` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.oferta-search`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `button:8`, `circle:1`, `div:13`, `h2:1`, `h3:1`, `img:1`, `input:5`, `label:4`, `line:1`, `nav:1`, `p:4`, `path:1`, `polyline:2`, `section:1`, `span:3`, `svg:4`.
- Estructura padre→hijo: `a>svg:1`, `article>div:2`, `button>svg:2`, `div>a:1`, `div>article:1`, `div>button:4`, `div>div:10`, `div>h2:1`, `div>h3:1`, `div>img:1`, `div>input:1`, `div>label:4`, `div>nav:1`, `div>p:4`, `div>span:2`, `div>svg:1`, `label>input:4`, `nav>button:4`, `p>span:1`, `section>div:1`, `svg>circle:1`, `svg>line:1`, `svg>path:1`, `svg>polyline:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:3`, `section>div>div>article:1`, `section>div>div>article>div:2`, `section>div>div>article>div>a:1`, `section>div>div>article>div>a>svg:1`, `section>div>div>article>div>a>svg>path:1`, `section>div>div>article>div>h3:1`, `section>div>div>article>div>img:1`, `section>div>div>article>div>p:2`, `section>div>div>article>div>span:1`, `section>div>div>div:2`, `section>div>div>div>button:1`, `section>div>div>div>div:3`, `section>div>div>div>div>button:3`, `section>div>div>div>div>button>svg:2`, `section>div>div>div>div>button>svg>polyline:2`, `section>div>div>div>div>div:2`, `section>div>div>div>div>div>label:4`, `section>div>div>div>div>div>label>input:4`, `section>div>div>div>div>input:1`, `section>div>div>div>div>svg:1`, `section>div>div>div>div>svg>circle:1`, `section>div>div>div>div>svg>line:1`, `section>div>div>div>span:1`, `section>div>div>h2:1`, `section>div>div>p:1`, `section>div>nav:1`, `section>div>nav>button:4`, `section>div>p:1`, `section>div>p>span:1`.
- Clases: `.active`, `.btn`, `.btn-orange`, `.btn-program`, `.container`, `.custom-dropdown`, `.dropdown-menu`, `.dropdown-toggle`, `.filter-label`, `.oferta-search`, `.page-btn`, `.page-next`, `.pagination`, `.program-body`, `.program-card`, `.program-desc`, `.program-grid`, `.program-img`, `.program-mode`, `.program-tag`, `.reveal`, `.search-bar`, `.search-btn`, `.search-clear`, `.search-count`, `.search-filters`, `.search-icon`, `.search-input-group`, `.search-input-wrap`, `.section-intro`, `.section-pad`, `.wide`.
- IDs: `#buscar`, `#result-count`, `#search-licenciatura`.
- Data attributes: `data-area`, `data-campus`, `data-dropdown`, `data-mode`, `data-page`, `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.custom-dropdown`, `.dropdown-menu`, `.dropdown-menu input[type="radio"]`, `.dropdown-menu input[type="radio"]:checked`, `.dropdown-menu input[type="radio"]:checked::after`, `.dropdown-menu label`, `.dropdown-menu label:hover`, `.dropdown-menu.open`, `.dropdown-toggle`, `.dropdown-toggle svg`, `.dropdown-toggle:hover`, `.dropdown-toggle[aria-expanded="true"]`, `.dropdown-toggle[aria-expanded="true"] svg`, `.filter-label`, `.oferta-search`, `.oferta-search .program-body h3`, `.oferta-search .program-card`, `.oferta-search .program-card .btn-program`, `.oferta-search .program-card .btn-program:hover`, `.oferta-search .program-card .program-mode`, `.oferta-search .program-card div`, `.oferta-search .program-card img`, `.oferta-search .program-card p`, `.oferta-search .program-card.hidden`, `.oferta-search .program-card::after`, `.oferta-search .program-card:hover`, `.oferta-search .program-card:hover img`, `.oferta-search .section-intro`, `.oferta-search .section-intro h2`, `.oferta-search .section-intro p`, `.oferta-search > .container`, `.oferta-search::after`, `.oferta-search::before`, `.page-btn`, `.page-btn.active`, `.page-btn:hover`, `.page-next`, `.pagination`, `.program-body`, `.program-card`, `.program-card a`, `.program-card div`, `.program-card h3`, `.program-card img`, `.program-card p`, `.program-card::after`, `.program-card:hover img`, `.program-desc`, `.program-grid`, `.program-img`, `.program-img img`, `.program-mode span`, `.program-mode span:hover`, `.program-tag`, `.program-tag:hover`, `.search-bar`, `.search-btn`, `.search-clear`, `.search-count`, `.search-filters`, `.search-icon`, `.search-input-group`, `.search-input-wrap`, `.search-input-wrap input`, `.search-input-wrap input:focus`, `.search-input-wrap input:not(:placeholder-shown) ~ .search-clear`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: `#buscar`, `#result-count`, `#search-licenciatura`, `.custom-dropdown`, `.dropdown-menu`, `.dropdown-toggle`, `.pagination`, `.program-card`, `.program-mode`, `.program-tag`, `.search-btn`, `.search-clear`, `[data-area]`, `[data-campus]`, `[data-dropdown]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 90em)`, `@media (min-width: 48.0625em) and (max-width: 58.75em)`.
- Assets: `get_asset_url('../../images/oferta-academica/elige-tu-camino/' ~ fallbacks[loop.index0 % (fallbacks\|length)])`.
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
| `heading` | `text` | no | `Elige tu camino en Anáhuac` | `null` | no | `null` |
| `intro` | `text` | no | `Explora cincuenta licenciaturas distribuidas en ocho áreas académicas. Encuentra el programa que se alinea con tus aspiraciones y comienza a construir tu futuro.` | `null` | no | `null` |
| `search_placeholder` | `text` | no | `Buscar` | `null` | no | `null` |
| `search_button_text` | `text` | no | `Buscar` | `null` | no | `null` |
| `filter_label` | `text` | no | `Filtrar por:` | `null` | no | `null` |
| `area_toggle_label` | `text` | no | `Área académica` | `null` | no | `null` |
| `area_all_label` | `text` | no | `Todas` | `null` | no | `null` |
| `area_options` | `group` | no | `[{"label_text":"Ciencias de la Salud","value":"salud"},{"label_text":"Ingenierías","value":"ingenierias"},{"label_text":"Economía y Negocios","value":"negocios"},{"label_text":"Comunicación, Arq. y Diseño","value":"comunicacion"},{"label_text":"Ciencias Sociales y Derecho","value":"derecho"},{"label_text":"Turismo y Gastronomía","value":"turismo"}]` | `{"default":6,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `area_options.value` | `text` | no | `salud` | `null` | no | `area_options` |
| `area_options.label_text` | `text` | no | `Ciencias de la Salud` | `null` | no | `area_options` |
| `campus_toggle_label` | `text` | no | `Campus` | `null` | no | `null` |
| `campus_all_label` | `text` | no | `Todos` | `null` | no | `null` |
| `campus_options` | `group` | no | `[{"label_text":"Bicampus","value":"bicampus"},{"label_text":"Campus Norte","value":"norte"},{"label_text":"Campus Sur","value":"sur"}]` | `{"default":3,"max":10,"min":0,"sorting_label_field":null}` | sí | `null` |
| `campus_options.value` | `text` | no | `bicampus` | `null` | no | `campus_options` |
| `campus_options.label_text` | `text` | no | `Bicampus` | `null` | no | `campus_options` |
| `count_suffix` | `text` | no | `programas encontrados` | `null` | no | `null` |
| `programs` | `group` | no | `[{"area":"salud","campus":"bicampus","cta_text":"Conocer más","description":"Forma profesionales de la medicina con una visión integral, ética y humanista preparados para transformar el sistema de salud.","image":{"alt":"Médico Cirujano","src":""},"item_name":"Médico Cirujano","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Ciencias de la Salud"},{"area":"comunicacion","campus":"bicampus","cta_text":"Conocer más","description":"Diseña y construye espacios innovadores que transformen comunidades con criterio estético, técnico y sustentable.","image":{"alt":"Arquitectura","src":""},"item_name":"Arquitectura","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"ingenierias","campus":"bicampus","cta_text":"Conocer más","description":"Desarrolla soluciones tecnológicas de vanguardia usando inteligencia artificial, redes y ciencia de datos para resolver problemas reales.","image":{"alt":"Ingeniería en Sistemas y Tecnología de Información","src":""},"item_name":"Ingeniería en Sistemas y Tecnología de Información","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Ingenierías"},{"area":"comunicacion","campus":"bicampus","cta_text":"Conocer más","description":"Crea productos y experiencias que integran funcionalidad, estética y sustentabilidad para mejorar la vida de las personas.","image":{"alt":"Diseño Industrial","src":""},"item_name":"Diseño Industrial","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"negocios","campus":"bicampus","cta_text":"Conocer más","description":"Lidera organizaciones con visión estratégica, innovación y sentido de responsabilidad social en el mundo financiero.","image":{"alt":"Dirección Financiera","src":""},"item_name":"Dirección Financiera","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Economía y Negocios"},{"area":"turismo","campus":"bicampus","cta_text":"Conocer más","description":"Domina el arte culinario con técnicas de vanguardia y una formación empresarial que te permitirá liderar proyectos gastronómicos.","image":{"alt":"Gastronomía","src":""},"item_name":"Gastronomía","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Turismo y Gastronomía"},{"area":"salud","campus":"bicampus","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Médico Cirujano Dentista","src":""},"item_name":"Médico Cirujano Dentista","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Ciencias de la Salud"},{"area":"salud","campus":"norte","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Nutrición","src":""},"item_name":"Nutrición","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS NORTE","tag_text":"Ciencias de la Salud"},{"area":"salud","campus":"sur","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Terapia Física y Rehabilitación","src":""},"item_name":"Terapia Física y Rehabilitación","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS SUR","tag_text":"Ciencias de la Salud"},{"area":"comunicacion","campus":"norte","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Arquitectura de Interiores","src":""},"item_name":"Arquitectura de Interiores","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS NORTE","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"comunicacion","campus":"bicampus","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Comunicación","src":""},"item_name":"Comunicación","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"comunicacion","campus":"sur","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Dirección de Empresas de Entretenimiento","src":""},"item_name":"Dirección de Empresas de Entretenimiento","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS SUR","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"comunicacion","campus":"norte","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Diseño Gráfico","src":""},"item_name":"Diseño Gráfico","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS NORTE","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"comunicacion","campus":"sur","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Diseño de Moda e Innovación","src":""},"item_name":"Diseño de Moda e Innovación","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS SUR","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"comunicacion","campus":"bicampus","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Diseño Multimedia","src":""},"item_name":"Diseño Multimedia","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Comunicación, Arquitectura y Diseño"},{"area":"ingenierias","campus":"norte","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Ingeniería Ambiental","src":""},"item_name":"Ingeniería Ambiental","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS NORTE","tag_text":"Ingenierías"},{"area":"ingenierias","campus":"sur","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Ingeniería Biomédica","src":""},"item_name":"Ingeniería Biomédica","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS SUR","tag_text":"Ingenierías"},{"area":"ingenierias","campus":"bicampus","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Ingeniería Civil","src":""},"item_name":"Ingeniería Civil","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Ingenierías"},{"area":"negocios","campus":"norte","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Economía","src":""},"item_name":"Economía","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS NORTE","tag_text":"Economía y Negocios"},{"area":"negocios","campus":"sur","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Finanzas y Contaduría Pública","src":""},"item_name":"Finanzas y Contaduría Pública","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS SUR","tag_text":"Economía y Negocios"},{"area":"negocios","campus":"bicampus","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Negocios Internacionales","src":""},"item_name":"Negocios Internacionales","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Economía y Negocios"},{"area":"derecho","campus":"bicampus","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Derecho","src":""},"item_name":"Derecho","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| BICAMPUS","tag_text":"Ciencias Sociales y Derecho"},{"area":"turismo","campus":"norte","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Dirección de Restaurantes","src":""},"item_name":"Dirección de Restaurantes","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS NORTE","tag_text":"Turismo y Gastronomía"},{"area":"turismo","campus":"sur","cta_text":"Conocer más","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.","image":{"alt":"Administración Turística","src":""},"item_name":"Administración Turística","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"mode":"presencial","mode_text":"PRESENCIAL \| CAMPUS SUR","tag_text":"Turismo y Gastronomía"}]` | `{"default":24,"max":80,"min":0,"sorting_label_field":null}` | sí | `null` |
| `programs.image` | `image` | no | `{"alt":"Licenciatura Anáhuac","src":""}` | `null` | no | `programs` |
| `programs.tag_text` | `text` | no | `Ciencias de la Salud` | `null` | no | `programs` |
| `programs.item_name` | `text` | no | `Licenciatura` | `null` | no | `programs` |
| `programs.mode_text` | `text` | no | `PRESENCIAL \| BICAMPUS` | `null` | no | `programs` |
| `programs.description` | `text` | no | `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` | `null` | no | `programs` |
| `programs.cta_text` | `text` | no | `Conocer más` | `null` | no | `programs` |
| `programs.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `programs` |
| `programs.area` | `text` | no | `salud` | `null` | no | `programs` |
| `programs.campus` | `text` | no | `bicampus` | `null` | no | `programs` |
| `programs.mode` | `text` | no | `presencial` | `null` | no | `programs` |
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
{% dnd_module path="../modules/oferta-search" %}
{% end_dnd_module %}
```
