# `pie-de-pagina`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `pie-de-pagina.module` |
| Label HubSpot | Pie de página — Anáhuac (global) |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `global` |
| Global técnico (meta.global) | `true` |
| Categorías HubSpot | `DESIGN` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `columnas-de-enlaces-repetibles`, `identidad-visual`, `informacion-legal`, `newsletter`, `redes-sociales` |
| Variantes verificadas | — |
| Notas curatoriales | Footer global. No tiene candidatos con evidencia suficiente en el catálogo; la ausencia de candidato no demuestra unicidad. |
| Páginas conocidas | `Apoyos Económicos`, `Home`, `Proceso de admisión`, `Página interna flexible` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `footer`.
- Clases raíz: `.site-footer`.
- Elementos: `a:5`, `button:1`, `div:6`, `footer:1`, `form:1`, `h2:1`, `h3:1`, `img:2`, `input:1`, `p:2`, `path:4`, `small:1`, `svg:5`, `symbol:4`, `use:4`.
- Estructura padre→hijo: `a>svg:4`, `div>a:5`, `div>button:1`, `div>div:4`, `div>form:1`, `div>h3:1`, `div>img:2`, `div>input:1`, `div>p:1`, `footer>div:1`, `footer>svg:1`, `form>div:1`, `form>h2:1`, `form>p:1`, `form>small:1`, `svg>symbol:4`, `svg>use:4`, `symbol>path:4`.
- Jerarquías observadas: `footer:1`, `footer>div:1`, `footer>div>div:2`, `footer>div>div>div:1`, `footer>div>div>div>a:1`, `footer>div>div>div>div:1`, `footer>div>div>div>div>a:4`, `footer>div>div>div>div>a>svg:4`, `footer>div>div>div>div>a>svg>use:4`, `footer>div>div>div>h3:1`, `footer>div>div>form:1`, `footer>div>div>form>div:1`, `footer>div>div>form>div>button:1`, `footer>div>div>form>div>input:1`, `footer>div>div>form>h2:1`, `footer>div>div>form>p:1`, `footer>div>div>form>small:1`, `footer>div>div>img:2`, `footer>div>p:1`, `footer>svg:1`, `footer>svg>symbol:4`, `footer>svg>symbol>path:4`.
- Clases: `.btn`, `.btn-dark`, `.container`, `.copyright`, `.footer-inner`, `.footer-links`, `.footer-top`, `.newsletter`, `.site-footer`, `.social-links`, `.social-sprite`.
- IDs: `#icon-facebook`, `#icon-instagram`, `#icon-x`, `#icon-youtube`.
- Data attributes: —.
- Formulario operativo observado: sí.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.copyright`, `.footer-links`, `.footer-links .social-links a`, `.footer-links .social-links a:hover`, `.footer-links > div`, `.footer-links > div:nth-child(4) h3`, `.footer-links > div:nth-child(5) h3`, `.footer-links a`, `.footer-links a:hover`, `.footer-links h3`, `.footer-links p`, `.footer-top`, `.footer-top > img`, `.newsletter button`, `.newsletter div`, `.newsletter h2`, `.newsletter input`, `.newsletter p`, `.newsletter small`, `.site-footer`, `.site-footer .newsletter button`, `.social-links`, `.social-links svg`, `.social-sprite`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/logo-anahuac.svg`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

Pie de página global. Reúne cuatro bloques en un solo componente: un sprite SVG inline
con los cuatro iconos sociales, una franja superior con el logo y el bloque de
newsletter, una rejilla de columnas de enlaces repetibles (cada columna con título,
richtext opcional, enlaces repetibles y un bloque de redes opcional) y la línea de
copyright. Reproduce el `<footer class="site-footer">` de las maquetas aprobadas
—`Inicio.html:523`— que se repite idéntico en las doce páginas estáticas de la raíz del
repo. Existe para que ese cierre de sitio se edite una vez y no se duplique por página.

**Forma real de invocación.** No es un módulo de `dnd_area`: las cuatro plantillas
versionadas lo incluyen con nombre posicional, después del `<main>`.

```hubl
{% module "footer" path="../modules/pie-de-pagina", label="Pie de página (global)" %}
```

`templates/pagina.html:109`, `templates/pagina-interna.html:54`,
`templates/proceso-de-admision.html:113` y `templates/apoyos-economicos.html:113`.
El nombre posicional `"footer"` es la llave con la que HubSpot guarda el contenido de la
instancia: forma parte del contrato tanto como la ruta.

**Aviso funcional que el bloque AUTO no puede dar.** La línea
«Formulario operativo observado: **sí**» sale de una heurística que solo busca un
elemento `<form>` o un tag `{% form %}` en `module.html` (README §9). Aquí hay
`<form class="newsletter">`, pero **no captura nada**: no tiene atributo `action`, no
existe ningún field de tipo `form` en `fields.json` y `theme/js/main.js` no registra
ningún manejador para `.newsletter`. Es el mismo patrón que README §8 describe para
`oferta-form`: interfaz visual sin envío. Si el proyecto necesita suscripción real, es
un cambio de contrato (field `form` de HubSpot o endpoint propio), no un ajuste
cosmético.

**Impacto transversal — editarlo cambia todas sus páginas a la vez.** Páginas conocidas:
`Home`, `Proceso de admisión`, `Apoyos Económicos` y `Página interna flexible`, más
cualquier página del portal creada con esas plantillas (`paginas_portal` está vacío, así
que la lista no está cerrada). Al ser `meta.global: true` e incluirse por `{% module %}`,
el contenido no se guarda por página: no aplica la salvaguarda de snapshot de los
módulos del `dnd_area` (README §10). Y como `module.css` está vacío, todo ajuste visual
se hace en `theme/css/main.css`, transversal a las doce páginas del sitio, no solo a
estas cuatro.

## Cuándo usar

- Como pie de **cualquier plantilla de página nueva** del theme, una sola vez por
  documento, con `{% module %}` y nombre posicional, después del `<main>`.
  `host_template_types: ["PAGE"]`, `content_types: LANDING_PAGE, SITE_PAGE`.
- Cuando la estructura de enlaces cabe en el contrato: hasta 8 columnas (`columns`,
  `occurrence.max: 8`, `default: 6`), cada una con hasta 12 enlaces (`columns.links`,
  `max: 12`) y, opcionalmente, un párrafo richtext (`columns.col_body`) y el bloque de
  redes (`columns.show_social`).
- **Con seis columnas**, que es el número que el CSS asume:
  `.footer-links { grid-template-columns: repeat(6, minmax(0, 1fr)) }` (`main.css:2523`).
- Cuando el bloque de newsletter se acepta como **pieza visual**, no como captación
  (ver el aviso de arriba), o cuando queda vacío: cada texto es condicional
  (`news_heading`, `news_text`, `news_disclaimer`), aunque el `<form>`, el `<input>` y
  el botón se emiten siempre.
- Cuando las cuatro redes del sitio (Facebook, X, Instagram, YouTube) son las mismas en
  toda página: son fields de nivel módulo, no por columna.

## Cuándo no usar

- **No como cierre de sección ni CTA final de página.** Para eso están `siguiente-paso`,
  `admision-siguiente-paso`, `admision-cta` o `dudas-contacto`. `.site-footer` fija fondo
  de acento, texto invertido y padding de cierre de documento (`main.css:2457-2461`).
- **No dos veces en la misma página.** El sprite declara IDs de documento
  (`#icon-facebook`, `#icon-x`, `#icon-instagram`, `#icon-youtube`) que los
  `<use href="#icon-…">` resuelven por ID: duplicarlo duplica los IDs.
- **No como formulario de suscripción o contacto operativo** (ver el aviso de arriba).
- **No con siete u ocho columnas sin revisar el CSS.** `occurrence.max` permite 8, pero
  la rejilla es de 6 fijas; la séptima y la octava caen a una segunda fila estrecha.
- **No si el acento de color de los títulos debe seguir a una columna concreta.**
  `main.css:2538-2540` colorea los `h3` de la **cuarta y quinta** columnas por posición
  (`:nth-child(4)`, `:nth-child(5)`), no por field: reordenar las columnas en el editor
  mueve el acento.
- **No si las redes deben variar por columna.** `columns.show_social` decide *si* se
  muestran; los cuatro destinos son siempre los mismos fields de nivel módulo. Lo único
  que cambia por columna es el `aria-label`, derivado de `col.title`.
- **No si se necesita un logo distinto por página**: el logo es un field único del módulo
  global.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `logo` | `image` | no | `{"alt":"Anáhuac México","src":""}` | `null` | no | `null` |
| `news_heading` | `text` | no | `Mantente informado sobre las novedades del mes de nuestra Universidad` | `null` | no | `null` |
| `news_text` | `text` | no | `Recibe noticias sobre admisiones, eventos preuniversitarios y vida universitaria en tu correo.` | `null` | no | `null` |
| `news_placeholder` | `text` | no | `Email` | `null` | no | `null` |
| `news_button` | `text` | no | `Enviar` | `null` | no | `null` |
| `news_disclaimer` | `text` | no | `Al suscribirte aceptas nuestra política de privacidad` | `null` | no | `null` |
| `columns` | `group` | no | `[{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Por qué Anáhuac"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Vida universitaria"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Estudiantes foráneos"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Competencias académicas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Ubicaciones"}],"show_social":false,"title":"Descubre"},{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Oferta académica"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Todas las licenciaturas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Áreas académicas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Solicita información"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Visita el campus"}],"show_social":false,"title":"Programas"},{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Admisión general"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Admisión medicina"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Admisión internacional"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Fechas de examen"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Inicia tu proceso"}],"show_social":false,"title":"Admisiones"},{"col_body":"<p>Av. Universidad Anáhuac 46, Col. Lomas Anáhuac. Huixquilucan, Estado de México.</p>","links":[{"link":{"open_in_new_tab":false,"url":{"href":"tel:+525556270210","type":"EXTERNAL"}},"text":"+52 (55) 5627 0210"}],"show_social":true,"title":"Campus Norte"},{"col_body":"<p>Av. de los Tanques 865, Col. Torres de Potrero. Álvaro Obregón, CDMX.</p>","links":[{"link":{"open_in_new_tab":false,"url":{"href":"tel:+525556288800","type":"EXTERNAL"}},"text":"+52 (55) 5628 8800"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Misión y valores"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Acreditaciones"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Noticias"}],"show_social":true,"title":"Campus Sur"},{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Teléfono principal"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Correo de admisiones"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Síguenos en línea"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Ubicación"}],"show_social":true,"title":"Contacto"}]` | `{"default":6,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `columns.title` | `text` | no | `Columna` | `null` | no | `columns` |
| `columns.col_body` | `richtext` | no | — | `null` | no | `columns` |
| `columns.links` | `group` | no | `undefined` | `{"default":null,"max":12,"min":0,"sorting_label_field":null}` | sí | `columns` |
| `columns.links.text` | `text` | no | `Enlace` | `null` | no | `columns.links` |
| `columns.links.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `columns.links` |
| `columns.show_social` | `boolean` | no | `false` | `null` | no | `columns` |
| `social_facebook` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `social_x` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `social_instagram` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `social_youtube` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `copyright` | `text` | no | `© 2026 Universidad Anáhuac México. Todos los derechos reservados.` | `null` | no | `null` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa el generador (README §8-§9). `module.css` y
`module.js` están vacíos, así que **toda** la evidencia de `css` y `responsive` proviene
de `theme/css/main.css` —compartida, y por tanto bloqueante (README §9)— y la dimensión
`js/hooks` está vacía de verdad.

- **metadata** — *Duro:* las cinco capacidades curadas (`identidad-visual`, `newsletter`,
  `columnas-de-enlaces-repetibles`, `redes-sociales`, `informacion-legal`), todas
  verificadas en `module.html`; ojo con leer `newsletter` como captación de datos.
  `global: true`, `tier: global` y `host_template_types: ["PAGE"]` describen alcance y
  plataforma: son nota/análisis de impacto, no compatibilidad funcional dura. `Approved`
  es estado curatorial del registry, no confirmación del portal. `familia: null` es
  deliberado (TAXONOMY): no se inventa una familia por ausencia de candidato. *Flexible:*
  `label`, `notas`, y añadir `category` o `content_type` es
  aditivo (README §9). El `module_id` del `meta.json` es la identidad en el portal.
- **fields** — *Duro:* los 18 paths con su tipo y su carácter repetible: `logo` `image`;
  los cinco textos de newsletter (`news_heading`, `news_text`, `news_placeholder`,
  `news_button`, `news_disclaimer`); `columns` `group` repetible con
  `columns.title` `text`, `columns.col_body` `richtext`, `columns.links` `group`
  repetible (`columns.links.text`, `columns.links.link`) y `columns.show_social`
  `boolean`; los cuatro `link` de redes; y `copyright` `text`. Los 18 son
  `required: false`. Renombrar, borrar o cambiar `type`/`occurrence` rompe el contenido
  guardado (README §10). **Contrato no obvio:** `columns` es el repeater de nivel raíz
  y lleva su array de `default`; `columns.links` es un repeater anidado **sin** `default`
  propio, y esa ausencia es intencional — un `group` con `occurrence` anidado y con array
  de `default` pierde sus items en la primera edición
  (`adapters/hubspot/README.md`, «Los repeaters van a nivel raíz»). No añadir `default` a
  `columns.links` ni interponer un grupo intermedio. La firma exacta incluye `default` y
  `occurrence`: cambiarlos es bloqueante para el comparador. Es aditivo añadir fields
  nuevos opcionales con `default` útil leídos con `|default(x, true)`.
- **html** — *Duro:* raíz única `<footer class="site-footer">`, con el `<svg
  class="social-sprite">` como **primer hijo** dentro de esa raíz: si el sprite sale del
  módulo, los `<use href="#icon-…">` dejan de resolver. Es contrato la jerarquía
  `footer > .container.footer-inner > (.footer-top | .footer-links | .copyright)` y,
  dentro de cada columna, el orden `h3` → richtext → enlaces → `.social-links`. Son
  contrato todas las clases porque `main.css` las referencia: `.site-footer`,
  `.social-sprite`, `.footer-inner`, `.footer-top`, `.newsletter`, `.footer-links`,
  `.social-links`, `.copyright`, más `.container`, `.btn` y `.btn-dark`, compartidas con
  todo el theme. Los cuatro IDs del sprite son contrato interno; **no** hay `data-*`.
  Contrato posicional adicional: `.footer-links > div:nth-child(4)` y `:nth-child(5)`
  (`main.css:2538-2540`) y `.footer-top > img` como primer hijo (`main.css:2475`).
  *Flexible:* añadir un `data-*` que nadie referencie.
- **css** — `module.css` `empty`, por convención del theme
  (`adapters/hubspot/README.md`). Los 24 selectores del bloque AUTO viven todos en
  `main.css:2455-2623`. *Duro y exclusivo del footer:* `.site-footer`, `.social-sprite`,
  `.footer-top*`, `.newsletter*`, `.footer-links*`, `.social-links*`, `.copyright`.
  *Duro y compartido con el resto del theme:* `.container`, `.btn`, `.btn-dark`.
  Este módulo **no** tiene `grupo_estilos` ni custom properties propias: a diferencia de
  `experiencia` y `siguiente-paso`, no hay ninguna vía de personalización visual que no
  pase por editar CSS compartido. Dar contenido a `module.css` es bloqueante (README §9).
  *Riesgo detectado y no corregido:* `main.css:6602-6605` declara
  `.site-footer .newsletter button { color: var(--color-text) }` con el comentario
  «Contraste AA local para el CTA del footer **en esta página**», pero el selector no
  está acotado a ninguna página y vive en la hoja compartida: aplica al footer de todas.
  Cualquier trabajo sobre el color del botón del newsletter debe partir de ahí.
- **js/hooks** — `module.js` `empty` y `js/main.js` **no toca el footer**: la dimensión
  `js/hooks` del bloque AUTO está vacía y `Dependencias JS` es `—`. Es el único de los
  cuatro módulos globales sin comportamiento. Consecuencia directa: el `<form
  class="newsletter">` no tiene manejador de `submit`, así que el navegador haría una
  navegación GET a la misma URL. Añadir JS propio contradice la convención del theme
  (README §9: dar contenido a un `module.js` vacío es bloqueante); si hace falta
  comportamiento, va a `js/main.js` con análisis de impacto, o el newsletter pasa a ser
  un field `form` de HubSpot.
- **variantes** — `registry.variantes: []`: ninguna verificada. `columns.show_social` no
  es una variante sino un interruptor por item del repeater. Si se estabiliza una
  configuración (por ejemplo, footer sin newsletter vaciando sus textos), se declara en
  `registry.variantes` y se documenta aquí (README §10, §13).
- **responsive** — tres breakpoints, todos en `main.css:2595-2622` y por tanto
  **bloqueantes**: `@media (max-width: 90em)` (footer-top a 1fr 1fr),
  `@media (max-width: 73.75em)` (footer-top en columna, enlaces a 2 columnas) y
  `@media (max-width: 40em)` (una columna, todo centrado, input a ancho completo). No hay
  nada responsive flexible dentro del módulo.
- **assets** — un asset del theme: `../../images/logo-anahuac.svg`, servido con
  `get_asset_url` como **respaldo** cuando `logo.src` está vacío, que es el estado por
  defecto (`{"alt":"Anáhuac México","src":""}`). Nota de contraste: `encabezado` no
  usa el SVG del theme sino una URL externa. *Flexible:* sustituir el logo por field;
  nada de `.webp` al subir (`adapters/hubspot/README.md`). Los iconos sociales no son
  assets externos: son `<path>` inline en el sprite y forman parte del marcado.
- **dependencias** — solo `css/main.css`, cargado por la **plantilla**, no por el módulo
  (no hay `require_css`). Formalmente «solo nota» (README §9); funcionalmente duro: sin
  `main.css` el sprite deja de ocultarse (`.social-sprite { display: none }`) y la
  rejilla desaparece.
- **paginas** — `Home`, `Proceso de admisión`, `Apoyos Económicos` y
  `Página interna flexible`. Una brecha `impacto existente a revisar:` aquí obliga al
  análisis de impacto de README §10 sobre las cuatro antes de cerrar la decisión, aunque
  sea REUTILIZAR. No hay forma de cambiar este módulo para una sola página.

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
{% module "footer" path="../modules/pie-de-pagina", label="Pie de página (global)" %}
```
