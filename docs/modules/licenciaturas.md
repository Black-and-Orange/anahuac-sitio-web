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

`licenciaturas` es la banda naranja del Home que invita a explorar la oferta académica
por área. Deriva literalmente de `<section class="programs section-pad" id="licenciaturas">`
de la página aprobada `Inicio.html` (líneas 248-293): eyebrow «Áreas académicas», H2,
intro, botón «Ver todas» y siete `article.program-card` —imagen, nombre del área, conteo
de programas y enlace— dentro de un scroller horizontal, con la fila de puntos y flechas
de `.slider-ui` debajo.

La migración hizo una traducción deliberada. En `Inicio.html` los puntos están escritos a
mano (`<div class="dots">` con siete `<span>`, uno con `.active`); `module.html` emite
`<div class="dots"></div>` **vacío** y es `js/main.js` (líneas 176-296) quien crea un
`<button>` por tarjeta original, clona todas las tarjetas (`.is-clone`, `aria-hidden="true"`)
para el bucle infinito y conecta las dos flechas. El paginador es, por tanto, función del
número de items del repeater `programs`, no un field. `main.css` conserva reglas para las
dos formas (`.dots span` y `.dots button`, líneas 1112-1129), así que la maqueta estática y
el módulo se ven igual.

`programs.count` es `type: text` con default «5 programas»: la capacidad curada
`conteo-por-programa` describe una **etiqueta editorial**, no un conteo calculado. No hay
HubDB ni consulta dinámica en ninguna parte del módulo.

Los fields de color no pintan nada por sí mismos: el HubL los convierte en custom
properties en el `style` de la sección y quien las consume es `main.css` —`--programs-bg`
en `.programs` (línea 958) y `--home-lic-heading`, `--home-lic-intro`, `--home-lic-cta-bg`,
`--home-lic-cta-text` en el bloque «Módulo 4 · Licenciaturas» (líneas 5045-5051)—, siempre
con fallback al token. Con los campos vacíos el render es el aprobado.

**Defecto verificado y no corregido aquí:** `module.html` (líneas 9-10) abre el `<section>`
con **dos** atributos `style` condicionales, uno para `bg_color` y otro para
`grupo_estilos`. Como `bg_color` trae default `#FF5900`, el primero se emite casi siempre y
el analizador HTML descarta el segundo, de modo que los cuatro colores de `grupo_estilos`
no llegan a aplicarse salvo que se vacíe `bg_color`. Es un defecto del módulo, no del
catálogo; se documenta porque cambia lo que un editor puede esperar del panel de estilos.

## Cuándo usar

- Páginas `LANDING_PAGE` o `SITE_PAGE` cuyo diseño pide exactamente esta composición:
  banda de color a sangre, intro a la izquierda, CTA «Ver todas» a la derecha, carrusel
  **horizontal** de tarjetas imagen + título + conteo + enlace, y controles debajo.
- Sólo desde un template que cargue `css/tokens.css`, `css/main.css` y `js/main.js`, como
  hace `templates/pagina.html` (línea 72). `module.css` y `module.js` están vacíos: no
  aportan nada por sí solos.
- Cuando cada página necesita su propio contenido: `tier: reusable` con
  `meta.global: false`, así que dos páginas con `licenciaturas` no comparten configuración.
- Con 1 a 20 áreas (`occurrence` `min: 0`, `max: 20`, `default: 7`). Los siete respaldos de
  imagen (`area-salud.jpg` … `area-educacion.jpg`) se recorren con módulo
  (`loop.index0 % (fallbacks|length)`), así que a partir de la octava se repiten; con cero
  items el carrusel simplemente no se inicializa (`if (!totalOriginal) return`).
- Se admite **más de una instancia por página**: el JS itera
  `document.querySelectorAll(".program-scroller")` y resuelve puntos y flechas con
  `scroller.closest(".programs")`, de modo que cada instancia es autónoma. Lo único que se
  duplicaría es `id="licenciaturas"`, escrito en el marcado.

## Cuándo no usar

- **Si el patrón es un revelado progresivo vertical, compara primero con `oferta-areas`**
  (candidato 0.555).
  La coincidencia es de intención —familia `exploracion-academica`, `navegacion-academica`,
  `cta-por-tarjeta`, `BODY_CONTENT`—, no de mecánica: `oferta-areas` emite
  `section.oferta-areas > .container > .area-grid > article.area-card`, marca con
  `.area-card--hidden` todo lo que pase del índice 4 y su JS (`main.js` 576-731) envuelve
  las tarjetas en un `.area-track` creado en runtime y desplaza **filas de dos columnas**
  con transición de altura. Sus fields tampoco encajan: `areas.hook` y `areas.desc` no
  existen aquí, y aquí `programs.count` no existe allá. Cambian la clase raíz, el árbol y
  los selectores compartidos: brechas de `html/raíz`, `html/jerarquía` y `css` →
  **bloqueantes** (§9). Añadido operativo: el JS de `oferta-areas` es *singleton*
  (`document.querySelector(".area-grid")`), así que no sirve para repetir el carrusel
  varias veces en una página; `licenciaturas` sí.
- **Si el patrón son dos o tres tarjetas de color que llevan a herramientas, compara
  primero con `descubre`**
  (candidato 0.461). Ahí la tarjeta entera es el enlace (`<a class="descubre-card {{ card.variant }}">`),
  el color lo decide la variante declarada en el registry (`cards.variant=descubre-card--orange`,
  `…--purple`), hay una imagen de sección y **no hay carrusel ni JS**. `licenciaturas` no
  tiene field `variant` ni variantes verificadas: reproducir ese comportamiento exige un
  field nuevo *y* reglas nuevas en `main.css` → bloqueante por `css`.
- **Si se evalúa una sección para Oferta académica, compara primero con `oferta-areas` y
  `descubre`.** Son
  `tier: page-specific` con `paginas_portal: ["Oferta académica"]` y su template no está
  versionado; meter `licenciaturas` ahí duplicaría responsabilidad y clases (`.programs-head`,
  `.arrow-buttons`) que esa página ya usa.
- **En la misma página que `oferta-search`, sin revisar antes.** `oferta-search` también
  emite `.program-card`, y el bloque de búsqueda de `main.js` (781-1005) hace
  `document.querySelectorAll(".program-card")` y ejecuta `renderPage()` al cargar, añadiendo
  `.hidden` a toda tarjeta fuera de la página actual —incluidas las de `licenciaturas`—.
  Hoy es visualmente inocuo porque la única regla que oculta está acotada
  (`.oferta-search .program-card.hidden`, línea 3388), pero el acoplamiento es real y
  cualquier cambio a esa regla lo convierte en bug.
- **Si se necesita una descripción por tarjeta, filtros, badges o paginación.** El contrato
  de `programs` sólo tiene imagen, nombre, conteo, texto y enlace; lo demás es
  `oferta-search`.
- **Si el template destino no marca `<html class="no-js">` y además no carga `js/main.js`.**
  Sin la clase de rescate (`main.css` línea 189) los `[data-reveal]` nunca reciben
  `.is-visible` y la sección se queda en `opacity: 0`; con ella, la sección se ve pero
  quedan un `.dots` vacío y dos flechas inertes.

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

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa `evaluateCompatibility` (`metadata`, `fields`,
`html`, `css`, `js/hooks`, `variantes`, `responsive`, `assets`, `dependencias`, `paginas`),
separando contrato duro de margen real. Las severidades siguen la tabla de `README.md` §9.

**`metadata`.** Duro: las capacidades observables. `carrusel-horizontal` y
`conteo-por-programa` son las dos que ningún otro miembro de la familia tiene, y una brecha
`falta capacidad:` sobre ellas responde «no hace lo mismo» y corta la cadena en el paso 2.
`estado: Approved` es curaduría del registry, no confirmación del portal. `tier: reusable`
con `meta.global: false` es coherente (0
discrepancias en el catálogo). Solo nota: `familia: exploracion-academica`, que amplía la
búsqueda pero no decide compatibilidad (TAXONOMY). Flexible/adaptable: `categories`
(`BODY_CONTENT`) y `content_types` (`LANDING_PAGE`, `SITE_PAGE`) son aditivos en
`meta.json` y no tocan marcado ni contenido guardado.

**`fields`.** Duro: `programs` es el único repeater y va **a nivel raíz**, no anidado en un
grupo —anidarlo pierde todos los items en la primera edición (aviso de
`adapters/hubspot/README.md`)—; su `occurrence` (`min: 0`, `max: 20`, `default: 7`) y su
condición de repeater forman parte de la firma del contenido guardado. `view_all_link` y
`programs.cta_link` son `type: link` y el HubL lee `…url.href`: convertirlos en `text`
rompe. Ningún field es `required`, así que el módulo tolera contenido vacío en todos ellos.
Cambiar tipo, `required`, `single/repeater` u `occurrence` de un path existente es
**bloqueante** (§9) y lo prohíbe §10. La firma incluye todos los defaults —textos, `alt`,
colores y el `#FF5900` de `bg_color`—: cambiarlos produce una brecha bloqueante aunque la
diferencia sea editorial. Ampliar las listas de `eyebrow_tag`, `heading_tag`, `intro_tag`
y `programs.program_name_tag` es un cambio aditivo fuera de la firma actual.

**`html`.** Duro: raíz `<section class="programs section-pad">`. `.programs` es lo que usan
`main.css` (958-1010 y 5045-5051) y el JS (`scroller.closest(".programs")`) para encontrar
puntos y flechas. También son contrato `.container`, `.programs-head`,
`.section-intro.on-orange`, `.tagline` con su `<span>` vacío, `.btn.btn-white-arrow`,
`.program-scroller`, `article.program-card` con el orden `img` → `div` → (`h3`, `p`, `a`),
`.slider-ui`, `.dots` vacío y `.arrow-buttons` con **exactamente dos** `<button>` (el JS
desestructura `[prevButton, nextButton]`). `.reveal` y `[data-reveal]` son un par: la clase
pone `opacity: 0` (178-186) y el atributo es el hook del observador; falta cualquiera y la
sección no aparece. Flexible: `id="licenciaturas"`, que no aparece ni en `main.css` ni en
`main.js` y sólo sirve de ancla de navegación. `formulario-operativo: false` es correcto y
no hay intención de que cambie.

**`css`.** `module.css` está **vacío**, como 32 de los 34 módulos del theme: *todos* los
selectores que lista el bloque AUTO viven en `theme/css/main.css`, así que cualquier brecha
`falta selector:` es **bloqueante** —cerrarla implica editar CSS transversal— y dar
contenido al `module.css` también lo es, por convención del theme (§9). Alcance real a
tener en cuenta: `.program-card` **no es exclusivo** (las reglas base 1029-1098 las
comparte con `oferta-search`, que las especializa en 3341-3491), y `.programs-head` y
`.arrow-buttons` los emiten además `oferta-areas` y `apoyos-panorama`. Editar cualquiera de
esos selectores toca varias páginas a la vez.

**`js`/`hooks`.** `module.js` está vacío, como los 34 del theme; todo el comportamiento es
de `js/main.js`: el carrusel infinito (176-296) y `[data-reveal]` (78-150, con el
MutationObserver que rescata al editor de HubSpot). Duro: `.program-scroller`,
`.program-card`, `.programs`, `.dots`, `.arrow-buttons button` y `[data-reveal]`. Una
brecha `falta hook:` es **bloqueante** por construcción: no hay `module.js` donde alojar el
comportamiento sin romper la convención. Riesgo cruzado ya descrito en «Cuándo no usar»: el
filtro de `oferta-search` selecciona `.program-card` en todo el documento.

**`variantes`.** `registry.variantes` está vacío y el bloque AUTO reporta «Variantes
verificadas: —». Los colores y los `*_tag` son configuración por instancia, no variantes en
el sentido de TAXONOMY. Añadir una es aditivo (**adaptable**) y obliga a declararla en
`registry.variantes` y aquí.

**`responsive`.** Ninguna regla es propia. Las que gobiernan esta sección son
`@media (max-width: 90em)` (1163-1177: ancho del intro, botón y `--program-card-size`),
`@media (max-width: 73.75em)` (1179-1197: `.programs-head` en columna) y
`@media (max-width: 40em)` (1199-1224 más la auditoría tipográfica de 4133). Las otras tres
que aparecen en la evidencia —`68.75em`, `48em`, `29.6875em`— entran por clases compartidas
(`.oferta-search .program-card` en 3566/3636/3666, `.oferta-areas .programs-head` en
3036/2956, `.apo-panorama .programs-head` en 4690): confirman que el responsive es
transversal. Toda brecha `falta regla responsive:` es, por origen, **bloqueante**.

**`assets`.** Una sola referencia:
`get_asset_url('../../images/' ~ fallbacks[loop.index0 % (fallbacks|length)])` sobre siete
nombres literales de `module.html`. Los siete existen en `theme/images/` (verificado:
`area-salud`, `area-ingenierias`, `area-negocios`, `area-derecho`, `area-comunicacion`,
`area-artes`, `area-educacion`, todos `.jpg`). Duro: mientras el editor no suba imagen,
esos archivos deben estar. Sustituirlos o añadir otros es **adaptable**, recordando que el
Design Manager descarta `.webp` en silencio.

**`dependencias`.** Declaradas: `css/main.css` y `js/main.js`. Ningún módulo del theme usa
`require_css`/`require_js`; la carga es explícita en el `<head>`/`<body>` del template.
Según §9 eso es **solo nota** mientras el template destino cargue ambos, y pasa a
**adaptable** si hubiera que declarar un `require_*`. En la práctica `main.js` no es una
nota para este módulo: sin él no hay puntos ni flechas.

**`paginas`.** Uso observado: `Home`, derivado de `templates/pagina.html:72`;
`paginas_portal` vacío. Reutilizarlo en otra página produce `uso objetivo no observado:`
(solo nota). Cualquier cambio produce `impacto existente a revisar: Home` y obliga al
análisis de impacto de §10, con el recordatorio de que el `dnd_area` no se propaga a
páginas ya creadas: cada página guarda su snapshot y hay que verificarla una por una.

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
