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
| Notas curatoriales | Header global. Se incluye con {% module path="../modules/encabezado" %}, no por dnd. No tiene candidatos con evidencia suficiente en el catálogo; la ausencia de candidato no demuestra unicidad. |
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

Encabezado global del sitio. Resuelve cuatro cosas en un solo componente: identidad
visual (logo enlazado), navegación principal de escritorio con submenús desplegables,
CTA de contacto y menú móvil con submenús en acordeón. El marcado reproduce el
`<header class="site-header">` de las maquetas aprobadas —`Inicio.html:21`— que se
repite idéntico en las doce páginas estáticas de la raíz del repo
(`Inicio`, `oferta-academica`, `proceso-de-admision`, `apoyos-economicos`,
`costos-becas`, `fechas-de-examenes`, `foraneos`, `gastronomia`, `nutricion`,
`psicologia`, `comunicacion`, `area-ciencias-de-la-salud`). El módulo existe
precisamente para que ese marcado deje de estar duplicado y se edite una vez.

**Forma real de invocación.** No es un módulo de `dnd_area`: las cuatro plantillas
versionadas lo incluyen con nombre posicional, fuera del área arrastrable.

```hubl
{% module "header" path="../modules/encabezado", label="Encabezado (global)" %}
```

`templates/pagina.html:47` (Home), `templates/pagina-interna.html:47`,
`templates/proceso-de-admision.html:47` y `templates/apoyos-economicos.html:47`.
El primer argumento, `"header"`, es el nombre posicional con el que HubSpot guarda el
contenido de esa instancia: forma parte del contrato tanto como la ruta.

**Impacto transversal — editarlo cambia todas sus páginas a la vez.** Las páginas
conocidas son las cuatro plantillas del bloque AUTO: `Home`, `Proceso de admisión`,
`Apoyos Económicos` y `Página interna flexible`, más cualquier página del portal creada
a partir de ellas (`paginas_portal` está vacío, así que esa lista no está cerrada).
Al ser `meta.global: true` e incluirse por `{% module %}`, el contenido no se guarda por
página: no aplica la salvaguarda de snapshot que aísla a los módulos del `dnd_area`
(README §10). Un cambio en `nav_items` es un cambio en la navegación de todo el sitio.
Y como `module.css` y `module.js` están vacíos, cualquier ajuste visual o de
comportamiento se hace en `theme/css/main.css` o `theme/js/main.js`, que son
transversales a todo el theme, no solo a estas cuatro páginas. Ningún cambio en este
módulo es local.

## Cuándo usar

- Como encabezado de **cualquier plantilla de página nueva** del theme. Es la única
  respuesta correcta: no se copia el marcado ni se crea un header alterno.
  `host_template_types: ["PAGE"]` y `content_types: LANDING_PAGE, SITE_PAGE`.
- Invocado **una sola vez por documento**, con `{% module %}` y nombre posicional,
  antes del `<main>` y fuera del `dnd_area`.
- Cuando la navegación cabe en el contrato de fields: hasta 12 entradas de primer nivel
  (`nav_items`, `occurrence.max: 12`, `default: 5`), cada una con hasta 8 subenlaces
  (`nav_items.submenu`, `max: 8`), más un CTA único (`cta_text` + `cta_link`) y un logo.
  Una entrada sin submenú se renderiza como enlace directo; con submenú, como
  desplegable. Esa bifurcación es automática (`item.submenu|length > 0`), no un field.
- Cuando la primera sección de la página **reserva el espacio del header fijo**:
  `.site-header` es `position: fixed` (`main.css:254`) sobre `--header-top: 40px` y
  `--header-min-height: 91px` (`tokens.css:149-151`). Los heroes del theme lo compensan
  con `padding-top` de 11.875–11.9375rem (`main.css:474`, `:2633`, `:4271`, `:7251`).
- Cuando basta con navegación por enlaces: el submenú de escritorio abre por
  `:hover`/`:focus-within` en CSS puro (`main.css:341-342`); solo el menú móvil necesita
  JS.

## Cuándo no usar

- **No para navegación secundaria o local** (breadcrumbs, índice de sección, nav de
  anclas). La clase raíz `.site-header` está fijada por `main.css:254` como barra fija a
  pantalla completa con `z-index: 50`; reutilizarlo ahí tapa el contenido.
- **No dos veces en la misma página.** `js/main.js:10-13` resuelve `.menu-toggle` y
  `.mobile-menu` con `querySelector` (singular) y el estado de apertura vive en una
  clase de documento, `body.menu-open` (`main.js:17`). Una segunda instancia queda sin
  comportamiento y comparte el mismo estado.
- **No en una página cuya primera sección arranque a `top: 0`.** El header fijo la tapa;
  ningún field lo corrige.
- **No si se necesita marcar el enlace de la página actual.** `main.css:307` estiliza
  `.desktop-nav > a.is-active`, pero `module.html` nunca emite `is-active` y no existe
  field que lo controle. Resolverlo exige tocar el marcado: variante o módulo nuevo.
- **No si se necesita un tercer nivel de menú, megamenú, buscador, selector de idioma o
  barra de utilidades.** El árbol es de dos niveles y está fijado en `module.html`; el
  CSS de `.dropdown-panel` asume una lista plana de `<a>`.
- **No dentro de un `dnd_area`.** No es la forma de invocación de este módulo y su
  posición es estructural, no editorial.
- **No como portador de contenido promocional o de texto libre**: los únicos textos son
  etiquetas de enlace y el CTA.

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

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa el generador (README §8-§9), diciendo en cada
una qué es contrato duro de **este** módulo y qué admite cambio aditivo. Recuerda que
`module.css` y `module.js` están vacíos: **toda** la evidencia de `css`, `js/hooks` y
`responsive` proviene de `theme/css/main.css` y `theme/js/main.js`, es decir, es
compartida y por tanto bloqueante (README §9).

- **metadata** — *Duro:* las cinco capacidades curadas (`identidad-visual`, `navegacion-principal`,
  `submenus-repetibles`, `navegacion-movil`, `cta-principal`): las cuatro últimas están
  verificadas en `module.html`. `global: true`, `tier: global` y
  `host_template_types: ["PAGE"]` describen alcance y plataforma: son nota/análisis de
  impacto, no compatibilidad funcional dura. `Approved` es estado curatorial del registry,
  no confirmación del portal. `familia: null` es deliberado (TAXONOMY): la ausencia de
  candidato no justifica inventar una familia. *Flexible:*
  `label`, `notas`, y añadir un `category` o un `content_type` es aditivo (README §9).
  El `module_id` del `meta.json` es la identidad en el portal `3807214`: no se edita.
- **fields** — *Duro:* los diez paths y sus tipos (`logo` `image`, `logo_link` `link`,
  `nav_items` `group` repetible, `nav_items.text` `text`, `nav_items.link` `link`,
  `nav_items.submenu` `group` repetible, `nav_items.submenu.text`,
  `nav_items.submenu.link`, `cta_text`, `cta_link`). Renombrar, borrar o cambiar el
  `type`/`occurrence` de cualquiera rompe el contenido guardado (README §10). Los diez
  son `required: false`: volver requerido alguno es cambio de firma → bloqueante.
  **Contrato no obvio:** `nav_items` es el repeater de nivel raíz y lleva su array de
  `default`; `nav_items.submenu` es un repeater anidado **sin** `default` propio, y esa
  ausencia es intencional — un `group` con `occurrence` anidado y con array de `default`
  vacía sus items en la primera edición (`adapters/hubspot/README.md`, «Los repeaters
  van a nivel raíz»). No añadir un `default` a `submenu` ni interponer un grupo
  intermedio entre `nav_items` y `submenu`. La firma exacta incluye `default` y
  `occurrence`: cambiar el contenido de arranque o subir `occurrence.max` es bloqueante
  para el comparador. Es aditivo añadir fields **nuevos** opcionales con `default` útil,
  siempre leídos con `|default(x, true)`.
- **html** — *Duro:* son **dos raíces hermanas**, no una: `<header class="site-header">`
  y `<div class="mobile-menu">`. Envolverlas en un contenedor rompe el CSS (`.mobile-menu`
  es `position: fixed; inset: 0`) y el `dnd`/plantilla que las coloca. Son contrato todas
  las clases, porque `main.css` o `main.js` las referencian: `.site-header`, `.logo-link`,
  `.desktop-nav`, `.nav-dropdown`, `.dropdown-panel`, `.arrow-down`, `.nav-contact`,
  `.menu-toggle`, `.mobile-menu`, `.mobile-menu-panel`, `.mobile-subnav`,
  `.mobile-submenu`, más `.btn`/`.btn-dark` (patrón de botón compartido con todo el
  theme). También son contrato tres relaciones estructurales: `.nav-dropdown > button` +
  `.dropdown-panel` como **hermano siguiente** (`main.css:341-342` abre por
  `:hover`/`:focus-within`); `.mobile-subnav` + `.mobile-submenu` como hermano siguiente
  (`main.js:38` y `main.js:46` usan `nextElementSibling`); y los **tres** `<span>` dentro de
  `.menu-toggle`, que la animación de hamburguesa direcciona por `:first-child`,
  `:nth-child(2)` y `:last-child` (`main.css:392-394`). Los atributos ARIA
  (`aria-expanded` en el toggle y en cada `.mobile-subnav`, `aria-hidden` en
  `.mobile-menu`) los escribe el HTML y los reescribe el JS: quitarlos rompe el
  comportamiento, no solo la accesibilidad. *Flexible:* el módulo no declara IDs ni
  `data-*`; añadir uno que nadie referencie es aditivo (README §9).
  Asimetría vigente: el CTA desktop respeta `cta_link.open_in_new_tab` y emite
  `target="_blank" rel="noopener"`; el CTA móvil solo usa `href` y texto, por lo que esa
  preferencia no se aplica en móvil.
- **css** — `module.css` `empty`, por convención del theme
  (`adapters/hubspot/README.md`). Los ~37 selectores del bloque AUTO viven todos en
  `main.css`. *Duro:* los exclusivos del header (`.site-header`, `.logo-link img`,
  `.desktop-nav*`, `.nav-dropdown*`, `.dropdown-panel*`, `.arrow-down`, `.nav-contact`,
  `.menu-toggle*`, `.mobile-*`) y los tokens de `tokens.css:149-170`
  (`--header-top`, `--header-max`, `--header-min-height`, `--header-glass-gradient`,
  `--shadow-header`). *Compartidos con el resto del theme, y por eso aún más caros de
  tocar:* `.btn`, `.btn-dark` y la clase de documento `body.menu-open` (`main.css:30`).
  A diferencia de `experiencia` y `siguiente-paso`, este módulo **no** tiene
  `grupo_estilos` ni custom properties propias: no hay ninguna vía de personalización
  visual que no pase por editar CSS compartido. Dar contenido a `module.css` es
  bloqueante (README §9).
- **js/hooks** — `module.js` `empty`; **todo** el comportamiento está en
  `js/main.js:1-51`. *Duro:* los hooks `.menu-toggle`, `.mobile-menu`, `.mobile-menu a`
  y `.mobile-subnav`, más la clase `body.menu-open` y el patrón de hermano siguiente ya
  descrito. Sin `main.js` el menú móvil no abre. *Nota, no contrato:* `main.js:5-8`
  activa `body.scrolled` al pasar 150px de scroll, pero **ningún CSS del theme consume
  `.scrolled`** (verificado sobre `css/main.css` y `css/tokens.css`): es un hook muerto,
  no un estado visual disponible.
- **variantes** — `registry.variantes: []`: no hay ninguna verificada. Ocultar el CTA
  vaciando `cta_text` es una opción de contenido soportada por el marcado
  (`{% if module.cta_text %}`, en escritorio y en móvil), no una variante registrada;
  si se adopta como decisión de diseño estable, debe declararse en `registry.variantes`
  y documentarse aquí (README §10, §13).
- **responsive** — un único breakpoint propio: `@media (max-width: 64em)`
  (`main.css:465-468`), que oculta `.desktop-nav` y `.nav-contact` y muestra
  `.menu-toggle`. Vive en CSS compartido ⇒ **bloqueante**. El resto del
  dimensionamiento es fluido por `min()`/`max()` sobre tokens, sin breakpoint. No hay
  nada responsive flexible dentro del módulo.
- **assets** — el bloque AUTO lista `—` porque el módulo no usa `get_asset_url`.
  *Dato a vigilar:* el `default` de `logo` apunta a un host externo,
  `https://www.anahuac.mx/logo-anahuac.svg`, mientras que `pie-de-pagina` cae en el SVG
  del theme (`../../images/logo-anahuac.svg`). Es asimetría real, no error de lectura.
  *Flexible:* sustituir el logo por field. Si se sube un archivo, nada de `.webp`
  (`adapters/hubspot/README.md`).
- **dependencias** — `css/main.css` y `js/main.js`. Las carga la **plantilla**
  (`pagina.html:24` y el `<script>` final), no el módulo: no hay `require_css` ni
  `require_js`. Formalmente es «solo nota» (README §9), pero funcionalmente es duro:
  sin `main.css` el header no se posiciona y sin `main.js` el menú móvil no abre.
- **paginas** — `Home`, `Proceso de admisión`, `Apoyos Económicos` y
  `Página interna flexible`. Cualquier brecha `impacto existente a revisar:` en este
  módulo obliga al análisis de impacto de README §10 sobre las cuatro **antes** de
  cerrar la decisión, aunque la decisión sea REUTILIZAR. Es la dimensión más costosa del
  módulo: no existe forma de cambiarlo para una sola página.

## Checklist de compatibilidad

- [ ] Propósito y capacidades equivalentes.
- [ ] Fields completos, defaults y repeaters compatibles.
- [ ] HTML, clases, selectores y hooks compatibles.
- [ ] CSS, JS y responsive compatibles.
- [ ] Variantes, assets y dependencias compatibles.
- [ ] Uso e impacto en páginas revisados.
- [ ] Decisión humana: REUTILIZAR / ADAPTAR / CREAR.

## Ejemplo HubL

Forma real y única de invocación en este theme (nombre posicional, fuera del
`dnd_area`), tal como aparece en las cuatro plantillas versionadas:

```html
{% module "header" path="../modules/encabezado", label="Encabezado (global)" %}
```
