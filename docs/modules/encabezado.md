# `encabezado`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `encabezado.module` |
| Label HubSpot | Encabezado — Anáhuac (global) |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `global` |
| Global técnico (meta.global) | `true` |
| Categorías HubSpot | `DESIGN` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-principal`, `identidad-visual`, `navegacion-movil`, `navegacion-principal`, `submenus-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Header global. Se incluye con {% module path="../modules/encabezado" %}, no por dnd. Su combinación de navegación desktop/móvil y submenús anidados es única en el inventario. |
| Páginas conocidas | `Apoyos Económicos`, `Home`, `Proceso de admisión`, `Página interna flexible` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `div`, `header`.
- Clases raíz: `.mobile-menu`, `.site-header`.
- Elementos: `a:7`, `button:3`, `div:5`, `header:1`, `img:1`, `nav:1`, `span:5`.
- Estructura padre→hijo: `a>img:1`, `button>span:5`, `div>a:4`, `div>button:2`, `div>div:3`, `header>a:2`, `header>button:1`, `header>nav:1`, `nav>a:1`, `nav>div:1`.
- Jerarquías observadas: `div:1`, `div>div:1`, `div>div>a:2`, `div>div>button:1`, `div>div>button>span:1`, `div>div>div:1`, `div>div>div>a:1`, `header:1`, `header>a:2`, `header>a>img:1`, `header>button:1`, `header>button>span:3`, `header>nav:1`, `header>nav>a:1`, `header>nav>div:1`, `header>nav>div>button:1`, `header>nav>div>button>span:1`, `header>nav>div>div:1`, `header>nav>div>div>a:1`.
- Clases: `.arrow-down`, `.btn`, `.btn-dark`, `.desktop-nav`, `.dropdown-panel`, `.logo-link`, `.menu-toggle`, `.mobile-contact`, `.mobile-menu`, `.mobile-menu-panel`, `.mobile-submenu`, `.mobile-subnav`, `.nav-contact`, `.nav-dropdown`, `.site-header`.
- IDs: —.
- Data attributes: —.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.arrow-down`, `.desktop-nav`, `.desktop-nav > a`, `.desktop-nav > a.is-active`, `.desktop-nav > a:hover`, `.dropdown-panel`, `.dropdown-panel a`, `.dropdown-panel a:focus-visible`, `.dropdown-panel a:hover`, `.logo-link img`, `.menu-open .menu-toggle span:first-child`, `.menu-open .menu-toggle span:last-child`, `.menu-open .menu-toggle span:nth-child(2)`, `.menu-open .mobile-menu`, `.menu-open .mobile-menu-panel`, `.menu-toggle`, `.menu-toggle span`, `.menu-toggle span:last-child`, `.mobile-contact`, `.mobile-menu`, `.mobile-menu-panel`, `.mobile-menu-panel a`, `.mobile-menu-panel a:not(.mobile-contact):hover`, `.mobile-submenu`, `.mobile-submenu a`, `.mobile-subnav`, `.mobile-subnav:hover`, `.mobile-subnav[aria-expanded="false"] + .mobile-submenu`, `.mobile-subnav[aria-expanded="true"]`, `.nav-contact`, `.nav-dropdown`, `.nav-dropdown > button`, `.nav-dropdown:focus-within .dropdown-panel`, `.nav-dropdown:hover .dropdown-panel`, `.nav-dropdown:hover > button`, `.site-header`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.menu-toggle`, `.mobile-menu`, `.mobile-subnav`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 64em)`.
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
| `logo` | `image` | no | `{"alt":"Anáhuac México","height":47,"src":"https://www.anahuac.mx/logo-anahuac.svg","width":122}` | `null` | no | `null` |
| `logo_link` | `link` | no | `{"no_follow":false,"open_in_new_tab":false,"url":{"href":"/","type":"EXTERNAL"}}` | `null` | no | `null` |
| `nav_items` | `group` | no | `[{"link":{"open_in_new_tab":false,"url":{"href":"/oferta-academica","type":"EXTERNAL"}},"submenu":[],"text":"Licenciaturas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"submenu":[{"link":{"open_in_new_tab":false,"url":{"href":"/proceso-de-admision","type":"EXTERNAL"}},"text":"Proceso de admisión"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Fechas de examen"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Revalidación y equivalencia"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Curso para examen de admisión"}],"text":"Admisiones"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"submenu":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Costos"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Cotiza tu licenciatura"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Apoyos educativos"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Financiamiento"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Concursos"}],"text":"Costos y apoyos"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"submenu":[{"link":{"open_in_new_tab":false,"url":{"href":"#experiencia","type":"EXTERNAL"}},"text":"Experiencia"},{"link":{"open_in_new_tab":false,"url":{"href":"#eventos","type":"EXTERNAL"}},"text":"Eventos"}],"text":"Vida universitaria"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"submenu":[],"text":"Foráneos"}]` | `{"default":5,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `nav_items.text` | `text` | no | `Enlace` | `null` | no | `nav_items` |
| `nav_items.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `nav_items` |
| `nav_items.submenu` | `group` | no | `undefined` | `{"default":null,"max":8,"min":0,"sorting_label_field":null}` | sí | `nav_items` |
| `nav_items.submenu.text` | `text` | no | `Subenlace` | `null` | no | `nav_items.submenu` |
| `nav_items.submenu.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `nav_items.submenu` |
| `cta_text` | `text` | no | `Contacto` | `null` | no | `null` |
| `cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#contacto","type":"EXTERNAL"}}` | `null` | no | `null` |
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
{% dnd_module path="../modules/encabezado" %}
{% end_dnd_module %}
```
