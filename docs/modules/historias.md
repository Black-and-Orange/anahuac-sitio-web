# `historias`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `historias.module` |
| Label HubSpot | Historias — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `carrusel`, `doble-imagen`, `orden-imagen-cita`, `testimonios-repetibles`, `variantes-de-color` |
| Variantes verificadas | `stories.layout=img-first`, `stories.layout=quote-first`, `stories.variant=orange`, `stories.variant=purple` |
| Notas curatoriales | Carrusel de testimonios con dos imágenes opcionales por historia y variantes explícitas de color y orden. No tiene candidatos con evidencia suficiente; la búsqueda humana sigue siendo obligatoria. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.section-pad`, `.stories`.
- Elementos: `blockquote:2`, `button:2`, `cite:2`, `div:7`, `dynamic:2`, `img:4`, `p:2`, `section:1`, `span:2`.
- Estructura padre→hijo: `blockquote>cite:2`, `blockquote>p:2`, `cite>span:2`, `div>blockquote:2`, `div>button:2`, `div>div:6`, `div>dynamic:2`, `div>img:4`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:3`, `section>div>div>div>button:2`, `section>div>div>div>div:1`, `section>div>div>div>div>blockquote:2`, `section>div>div>div>div>blockquote>cite:2`, `section>div>div>div>div>blockquote>cite>span:2`, `section>div>div>div>div>blockquote>p:2`, `section>div>div>div>div>img:4`, `section>div>div>div>dynamic:2`.
- Clases: `.container`, `.quote`, `.reveal`, `.section-intro`, `.section-pad`, `.stories`, `.stories-head`, `.stories-row`, `.stories-track`, `.stories-viewport`, `.story-arrows`, `.wide`.
- IDs: —.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.quote`, `.quote cite`, `.quote cite span`, `.quote p`, `.quote.orange`, `.quote.purple`, `.section-intro.wide`, `.stories`, `.stories .container`, `.stories .quote`, `.stories .quote cite`, `.stories .quote p`, `.stories .section-intro h2`, `.stories > .container`, `.stories-head`, `.stories-head .section-intro`, `.stories-head .story-arrows`, `.stories-row`, `.stories-row .quote`, `.stories-row > *`, `.stories-row img`, `.stories-row:nth-child(even)`, `.stories-row:nth-child(even) .quote`, `.stories-row:nth-child(even) img:nth-child(2)`, `.stories-row:nth-child(even) img:nth-child(3)`, `.stories-row:nth-child(odd)`, `.stories-row:nth-child(odd) .quote`, `.stories-row:nth-child(odd) img:nth-child(1)`, `.stories-row:nth-child(odd) img:nth-child(2)`, `.stories-track`, `.stories-viewport`, `.stories::after`, `.story-arrows`, `.story-arrows button`, `.story-arrows button:active`, `.story-arrows button:hover`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.stories-row`, `.stories-track`, `.stories-viewport`, `.story-arrows`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (hover: none)`, `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ fb_a)`, `get_asset_url('../../images/' ~ fb_b)`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`historias` es el testimonial del Home: pone a egresados a hablar en primera persona, en
un carrusel vertical de filas donde cada fila combina una cita y dos fotografías. Deriva de
`<section class="stories section-pad">` de la página aprobada `Inicio.html` (líneas
355-440), incluidos sus dos estilos de fila alternados —«imagen, imagen, cita» y «cita,
imagen, imagen»— y el par de flechas ↑/↓ que las recorre.

El módulo administra ese diseño con un solo repeater, `stories` (default 6, máximo 12).
Cada item aporta cita, autor, cargo, dos imágenes y dos `choice` que el registry sí
reconoce como variantes verificadas: `stories.layout` (`img-first` / `quote-first`) decide
el orden del DOM dentro de la fila, y `stories.variant` (`orange` / `purple`) elige el
fondo de la cita vía `.quote.orange` / `.quote.purple`. Los tres `color` por item
sobrescriben ese fondo y los textos con `style` inline; si están vacíos, manda el token.
Cuando `stories.image_a` o `image_b` no tienen `src`, el HubL cae a una lista de seis
fallbacks (`historia-1.jpg`…`historia-4.jpg`) indexada por `loop.index0 % 6`.

Es una sección **dependiente de JS por diseño**, no por decoración. `main.css` fija
`.stories-viewport { overflow: hidden; height: 51.25rem }` («2 filas × 25rem + 1 gap de
1.25rem», dice el comentario del theme), de modo que sin `js/main.js` sólo se ven dos
filas y no hay forma de avanzar. El slider de `main.js` clona filas al inicio y al final
para el bucle infinito, mide alturas reales, y escribe `transform` y `height` inline.

## Cuándo usar

- Cuando la página necesita testimonios con **este** contrato visual: filas de tres piezas
  (cita + dos imágenes), alternancia de orden y carrusel vertical con dos flechas. El
  generador no le encontró candidatos con evidencia suficiente; eso no demuestra unicidad
  y la búsqueda humana sigue siendo obligatoria.
- Cuando hay **al menos tres o cuatro historias** con material fotográfico doble. El
  carrusel muestra dos filas a la vez en escritorio y una en móvil, y clona filas para el
  bucle: con una o dos historias el efecto de bucle se vuelve evidente y pobre.
- Cuando el número de filas permite respetar la alternancia par/impar del CSS compartido
  (ver «Cuándo no usar»): lo esperado es intercalar `img-first` y `quote-first` como hacen
  los defaults.
- Desde un template que cargue `css/main.css` y `js/main.js`, como `templates/pagina.html`.
  Es `tier: reusable` con `meta.global: false`: cada instancia lleva su propio contenido.

## Cuándo no usar

- **Si el template destino no carga `js/main.js`.** No es degradación cosmética: el
  viewport tiene altura fija y `overflow: hidden`, así que las historias a partir de la
  tercera quedan inaccesibles. En las plantillas versionadas, `html.no-js` mantiene visible
  la sección aunque `[data-reveal]` no reciba `.is-visible`.
- **Si se quiere un solo testimonio o una cita suelta.** El repeater admite `min: 0`, pero
  el módulo trae siempre las flechas y el viewport de dos filas: un testimonio único
  resulta en un carrusel que no lleva a ninguna parte. No hay variante «estática».
- **Si el orden de las piezas debe ser libre por fila.** `stories.layout` cambia el orden
  del DOM, pero el ancho de las tres columnas lo asigna `main.css` por **paridad de fila**
  (`.stories-row:nth-child(odd)` → `25rem 18.4375rem 31.5625rem`, pensado para
  imagen-imagen-cita; `:nth-child(even)` → `31.5625rem 18.4375rem 25rem`, pensado para
  cita-imagen-imagen). Poner `quote-first` en una fila impar mete la cita en la columna
  angosta. El field es administrable; la coherencia con la paridad no lo es.
- **Dos instancias en la misma página.** El slider de `main.js` arranca con
  `document.querySelector('.stories-track')` y `.stories-viewport`: sólo se inicializa la
  primera. La segunda instancia se queda con altura fija y sin flechas funcionales.
- **Para un carrusel horizontal de tarjetas.** Compara primero con `licenciaturas`
  (`.program-scroller`)
  y `apoyos-panorama`; comparten la palabra «carrusel» y nada del contrato.
- **Para logos, notas o cualquier contenido que no sea cita + dos fotos.** Las dos `<img>`
  no son opcionales en el marcado: siempre se emiten, con fallback si el editor no sube
  nada.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `heading` | `text` | no | `Historias Anáhuac` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Leones Anáhuac que han transformado sus vidas con nosotros` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `stories` | `group` | no | `[{"author":"María Gómez","image_a":{"alt":"María Gómez, egresada Anáhuac","src":""},"image_b":{"alt":"Estudiante en laboratorio","src":""},"layout":"img-first","quote":"Anáhuac me dio más que una carrera, me dio una red de amigos y mentores que cambió mi trayectoria profesional","role":"Egresada, Ingeniería","variant":"orange"},{"author":"Carlos Mendoza","image_a":{"alt":"Egresado trabajando con equipo de cómputo","src":""},"image_b":{"alt":"Carlos Mendoza, egresado Anáhuac","src":""},"layout":"quote-first","quote":"Los convenios internacionales me permitieron estudiar un semestre en Europa y eso fue decisivo para conseguir mi primer trabajo","role":"Egresado, Ingeniería en Sistemas","variant":"purple"},{"author":"Daniel Torres","image_a":{"alt":"Estudiantes en campus","src":""},"image_b":{"alt":"Egresada exitosa","src":""},"layout":"img-first","quote":"Gracias a las prácticas profesionales, conseguí trabajo antes de terminar la carrera","role":"Egresado, Administración","variant":"orange"},{"author":"Ana Rodríguez","image_a":{"alt":"Proyecto estudiantil","src":""},"image_b":{"alt":"Laboratorio de innovación","src":""},"layout":"quote-first","quote":"La formación integral que recibí en Anáhuac me preparó para enfrentar cualquier reto profesional con confianza","role":"Egresada, Comunicación","variant":"purple"},{"author":"Sofía Martínez","image_a":{"alt":"Ceremonia de graduación","src":""},"image_b":{"alt":"Vida en campus","src":""},"layout":"img-first","quote":"El programa de movilidad me cambió la vida. Estudié en España y volví con una visión completamente nueva","role":"Egresada, Derecho","variant":"orange"},{"author":"Roberto Silva","image_a":{"alt":"Espacios de estudio","src":""},"image_b":{"alt":"Comunidad Anáhuac","src":""},"layout":"quote-first","quote":"Anáhuac no solo me dio conocimientos, me dio una comunidad para toda la vida","role":"Egresado, Ingeniería Industrial","variant":"purple"}]` | `{"default":6,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `stories.quote` | `text` | no | `Cita del egresado` | `null` | no | `stories` |
| `stories.author` | `text` | no | `Nombre Apellido` | `null` | no | `stories` |
| `stories.role` | `text` | no | `Egresado` | `null` | no | `stories` |
| `stories.image_a` | `image` | no | `{"alt":"Egresado Anáhuac","src":""}` | `null` | no | `stories` |
| `stories.image_b` | `image` | no | `{"alt":"Comunidad Anáhuac","src":""}` | `null` | no | `stories` |
| `stories.variant` | `choice` | no | `orange` | `null` | no | `stories` |
| `stories.layout` | `choice` | no | `img-first` | `null` | no | `stories` |
| `stories.color_caja` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stories` |
| `stories.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stories` |
| `stories.color_autor` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `stories` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_heading` | `choice` | no | `heading-2-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_testimonio` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_testimonio` | `choice` | no | `size-30` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_autor` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las diez dimensiones de `evaluateCompatibility`, separando contrato duro de margen.
Severidades según `README.md` §9.

**`metadata`.** Duro: las cinco capacidades —`testimonios-repetibles`, `carrusel`,
`doble-imagen`, `variantes-de-color`, `orden-imagen-cita`— resumen el comportamiento
observable; si el objetivo no necesita `doble-imagen` u `orden-imagen-cita`, este módulo
está sobredimensionado, y si necesita algo que no está en la lista, la cadena se corta en el
paso 2. `familia: null` es deliberado (TAXONOMY: no se crea familia por un prefijo ni para
evitar un nulo) y cuenta como nota, no como brecha. `estado: Approved` es curaduría del
registry, no confirmación del portal; `tier: reusable` /
`meta.global: false` son coherentes. Flexible: `categories` y `content_types` se amplían de
forma aditiva en `meta.json`.

**`fields`.** Duro: `stories` es repeater con `occurrence`
`{min: 0, default: 6, max: 12}`; sus hijos `layout` y `variant` son `choice` cuyos valores
literales (`img-first`/`quote-first`, `orange`/`purple`) están cableados al HubL y al CSS
—`variant` se imprime tal cual como clase de `<blockquote class="quote {{ story.variant }}">`,
así que añadir un valor nuevo **sin** su regla `.quote.<valor>` en `main.css` produce una
cita sin fondo—. Cambiar el tipo de `layout`/`variant`, convertir `stories` en no-repeater o
tocar su `occurrence` altera la firma de fields ya guardados: **bloqueante**. `image_a` e
`image_b` son `image` y el HubL lee `.src` y `.alt`. La firma exacta incluye todos los
defaults: cambiarlos produce una brecha bloqueante para el comparador. Ampliar las opciones
de los fields `choice`
de `heading_tag`/`intro_tag` (`h1..h6`, `p`) y las de
`grupo_estilos.tamano_heading` (`size-64`, `size-70`, `heading-2-size`, `heading-1-size`) y
`tamano_testimonio` (`size-22`, `size-26`, `size-30`, `size-36`, `heading-3-size`) es
aditivo. Ningún
field es `required`. Un field nuevo entra opcional y con default (§10) y, dentro de
`stories`, hay que leerlo con `|default(x, true)`: HubSpot no rellena defaults en items ya
guardados, y un field vacío usado como etiqueta emite `<>` y borra el contenido en pantalla.

**`html`.** Duro: raíz `<section class="stories section-pad">`; el árbol
`section > div.container > (div.stories-head > (div.section-intro.wide | div.story-arrows > button×2), div.stories-viewport > div.stories-track > div.stories-row > (img, img, blockquote.quote))`;
y las clases que `main.css` y `main.js` referencian: `.stories`, `.stories-head`,
`.stories-viewport`, `.stories-track`, `.stories-row`, `.story-arrows`, `.quote`,
`.section-intro`, `.wide`, `.container`, `.section-pad`. Restricciones que impone el JS y
que no se ven en la tabla de jerarquías: `.story-arrows` debe contener **exactamente dos
`<button>`** y en ese orden (`arrows[0]` retrocede, `arrows[1]` avanza); `.stories-row` son
hijos directos de `.stories-track`; y las tres piezas de cada fila deben ser hijos directos
de `.stories-row`, porque el CSS las posiciona con `img:nth-child(1|2|3)`. El único `data-*`
del módulo es `data-reveal`; `data-clone` lo añade el JS en runtime, no el HubL. Flexible:
el módulo no emite ningún `id`, así que —a diferencia de `hero`, `prestigio` y `eventos`— no
hay colisión de IDs; `.reveal` acompaña al atributo pero el hook es `[data-reveal]`.

**`css`.** `module.css` está **vacío**. Por tanto **todos** los selectores que el bloque
AUTO lista en la dimensión `css` viven en `theme/css/main.css`: desde `.stories-viewport` y
`.stories-track` hasta las reglas de paridad `.stories-row:nth-child(odd|even)` y sus
`img:nth-child(N)`, más los tres hooks administrables `.stories .quote`,
`.stories .quote p`, `.stories .quote cite` y `.stories .section-intro h2`. Consecuencia de
§9: **toda** brecha `falta selector:` de este módulo es **bloqueante**, porque cerrarla
implica editar CSS transversal. Dar contenido al `module.css` vacío también es bloqueante:
la única excepción documentada a la convención de `module.css` vacío es `hero`. Margen real:
sólo lo que ya es configurable por custom property o por `style` inline por item.

**`js`/`hooks`.** `module.js` está vacío —los 34 lo están— y el carrusel completo vive en
`js/main.js`. Consume `.stories-track`, `.stories-viewport`, `.stories-row` y
`.story-arrows button`, y además hay un acoplamiento numérico que conviene tener escrito:
el JS declara `const gap = 20` para calcular desplazamientos, y ese 20 es el valor de
`--space-7` (20 px) con el que `main.css` separa las filas. Si alguien cambia el token, el
carrusel se desalinea sin que ningún selector «falte». El JS también decide filas visibles
por ancho (`window.innerWidth <= 640 ? 1 : 2`), umbral que coincide con el
`@media (max-width: 40em)` del CSS mientras la raíz esté en 16 px. Duro: los cuatro
selectores y el par de botones. Una brecha `falta hook:` es **bloqueante** por construcción:
no hay `module.js` con contenido donde alojar comportamiento sin romper la convención.
Flexible: nada.

**`variantes`.** Es el único de los cuatro módulos de Home con variantes verificadas:
`stories.layout=img-first`, `stories.layout=quote-first`, `stories.variant=orange`,
`stories.variant=purple`, con la ruta del field conservada como pide TAXONOMY. Añadir una
quinta es **adaptable** —aditivo— pero exige tres cosas juntas: el valor en el `choice`, la
regla CSS correspondiente en `main.css` (que es cambio transversal) y el registro en
`registry.variantes` más este doc.

**`responsive`.** Cuatro reglas observadas: `@media (max-width: 90em)`, `73.75em`, `40em` y
`@media (hover: none)`, todas en `main.css` porque el `module.css` está vacío; por la regla
de §9 («depende del origen»), aquí el origen es siempre compartido y toda brecha responsive
es **bloqueante**. Dato operativo: en el bloque de `40em` casi todo se vuelve
paridad-agnóstico, salvo `.stories-row:nth-child(even) .quote { order: 3 }`.

**`assets`.** Seis JPG de respaldo referenciados con
`get_asset_url('../../images/' ~ fb_a|fb_b)` sobre las listas literales de `module.html`
(`historia-1.jpg`…`historia-4.jpg`, repartidas en dos series). Duro: esos archivos deben
existir en `theme/images/` o las filas sin imagen subida quedan con `src` roto. Flexible:
sustituirlos o subir imágenes propias es adaptable; el Design Manager descarta `.webp` en
silencio.

**`dependencias`.** `css/main.css` y `js/main.js`, cargadas explícitamente por el template
(ningún módulo del theme usa `require_css`/`require_js`). Formalmente **solo nota** si el
template destino ya las carga; en la práctica ninguna de las dos es opcional para este
módulo.

**`paginas`.** Uso observado: `Home`, desde `templates/pagina.html:84`. `paginas_portal`
vacío. Reutilizarlo produce `uso objetivo no observado:` (solo nota); modificarlo produce
`impacto existente a revisar: Home`, que obliga al análisis de impacto de §10 y a revisar la
página publicada, porque el `dnd_area` no propaga cambios a páginas ya creadas.

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
{% dnd_module path="../modules/historias" %}
{% end_dnd_module %}
```
