# `comienza-tu-camino`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `comienza-tu-camino.module` |
| Label HubSpot | Comienza tu camino — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `navegacion-tarjetas` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-por-tarjeta`, `estado-expandido`, `imagen-hover`, `navegacion-por-tarjetas`, `tarjetas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | Navegación de caminos con una imagen principal y una imagen hover por tarjeta; sus estados dependen del marcado path-*. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`siguiente-paso`](./siguiente-paso.md): score 0.514; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `paginas`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`admision-siguiente-paso`](./admision-siguiente-paso.md): score 0.462; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `cta-por-tarjeta`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.path`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `div:6`, `dynamic:3`, `img:2`, `p:1`, `section:1`.
- Estructura padre→hijo: `article>div:2`, `div>a:1`, `div>article:1`, `div>div:3`, `div>dynamic:3`, `div>img:2`, `div>p:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>article:1`, `section>div>div>div>article>div:2`, `section>div>div>div>article>div>a:1`, `section>div>div>div>article>div>dynamic:1`, `section>div>div>div>article>div>img:1`, `section>div>div>div>article>div>p:1`, `section>div>div>dynamic:2`, `section>div>div>img:1`.
- Clases: `.container`, `.path`, `.path-bottom`, `.path-card`, `.path-cards`, `.path-icon`, `.path-layout`, `.path-photo`, `.path-title`, `.reveal`, `.section-intro`, `.section-pad`, `.wide`.
- IDs: `#admisiones`.
- Data attributes: `data-img`, `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.path`, `.path .container`, `.path .container::after`, `.path .path-card`, `.path .path-card.is-open`, `.path .path-card:hover`, `.path .section-intro`, `.path .section-intro > p:not(.tagline)`, `.path .section-intro h2`, `.path-bottom`, `.path-bottom p`, `.path-card`, `.path-card a`, `.path-card.is-open`, `.path-card.is-open .path-bottom`, `.path-card:hover`, `.path-card:hover .path-bottom`, `.path-card:not(:hover):not(.is-open)`, `.path-card:not(:hover):not(.is-open) .path-bottom`, `.path-card:not(:hover):not(.is-open) .path-icon`, `.path-card:not(:hover):not(.is-open) .path-title h3`, `.path-cards`, `.path-icon`, `.path-layout`, `.path-photo`, `.path-title`, `.path-title h3`, `.path::after`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.path-card`, `.path-photo`, `[data-img]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`, `@media (max-width: 90em)`.
- Assets: `../../images/camino.jpg`, `get_asset_url('../../images/' ~ icon_fb)`, `get_asset_url('../../images/' ~ img_fb)`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`comienza-tu-camino` es el bloque del Home que reparte al visitante hacia las cinco rutas
de decisión (admisión, costos, apoyos, foráneos, extranjeros). Deriva literalmente de
`<section class="path section-pad" id="admisiones">` de la página aprobada `Inicio.html`
(líneas 184-246): intro centrada, una fotografía grande a la izquierda y, montada sobre
ella, una columna de cinco `article.path-card` con icono, título, descripción y enlace.

Lo que distingue al módulo de cualquier otra rejilla de tarjetas es que **las tarjetas y la
foto son un solo mecanismo**. Cada `article.path-card` lleva `data-img` con la imagen de
hover; `js/main.js` (líneas 14 y 53-72) abre la primera al cargar, y en cada `mouseenter`
quita `.is-open` de todas, se la pone a la tarjeta apuntada y cambia el `src` de la única
`img.path-photo` con un fundido de 200 ms. No hay `mouseleave`: la última tarjeta apuntada
se queda abierta. El resto lo hace `main.css` (738-887): la tarjeta cerrada mide 5.3125 rem
y colapsa `.path-bottom`; abierta o en `:hover` crece a 15 rem y lo revela. Ésa es la
evidencia de las capacidades `estado-expandido` e `imagen-hover`.

Los seis colores de `grupo_estilos` se convierten en custom properties `--home-camino-*` en
el `style` de la sección y los consume `main.css` en el bloque «Módulo 3 · Comienza tu
camino» (5024-5042), con fallback al token; los tres colores por tarjeta
(`cards.color_titulo`, `color_texto`, `color_cta`) se emiten como `style` inline en el
elemento correspondiente. Con todo vacío el render es el aprobado.

Dos observaciones verificadas que conviene conocer antes de reutilizarlo:

- **El foco de teclado no abre la tarjeta.** El marcado trae `tabindex="0"` (igual que
  `Inicio.html`), pero `main.js` sólo escucha `mouseenter` y `main.css` no define ninguna
  regla `:focus` ni `:focus-within` para `.path-card`. Quien navegue con teclado enfoca la
  tarjeta y no ve la descripción ni el enlace.
- **El quinto respaldo de imagen no existe en el theme.** `img_fallbacks` termina en
  `extranjeros.webp` y ese archivo no está en `adapters/hubspot/theme/images/` (verificado);
  además el Design Manager descarta `.webp` en silencio. Mientras el editor no suba
  `cards.hover_image` en la quinta tarjeta, su cambio de foto apunta a un asset ausente.

## Cuándo usar

- Páginas `LANDING_PAGE` o `SITE_PAGE` cuyo diseño pide exactamente esto: foto grande a la
  izquierda, columna de tarjetas superpuesta a la derecha, una sola tarjeta abierta a la vez
  y foto que cambia con la tarjeta apuntada. Si el diseño no tiene la foto, no es este
  módulo: `.path-layout` es una grid de dos columnas y la foto es una de ellas.
- Sólo desde un template que cargue `css/tokens.css`, `css/main.css` y `js/main.js`, como
  hace `templates/pagina.html` (línea 66). `module.css` y `module.js` están vacíos.
- Cuando cada página necesita su propio contenido: `tier: reusable` con
  `meta.global: false`; dos páginas con este módulo no comparten nada.
- Con 1 a 8 tarjetas (`occurrence` `min: 0`, `max: 8`, `default: 5`). Aviso de contenido:
  los respaldos de icono e imagen son listas de **cinco** posiciones indexadas por
  `loop.index0` (sin módulo), así que de la sexta en adelante caen al icono de admisión y a
  `camino.jpg`. A partir de la sexta conviene llenar `cards.icon` y `cards.hover_image`.
- **Una sola instancia por página.** `main.js` toma `document.querySelector(".path-photo")`
  —la primera del documento— y `document.querySelectorAll(".path-card")` sin acotar a la
  sección: con dos instancias, las tarjetas de la segunda cambiarían la foto de la primera y
  el estado abierto sería exclusivo entre ambas.

## Cuándo no usar

- **Si lo que hace falta es un cierre de tarjetas planas con icono, compara primero con
  `siguiente-paso`**
  (candidato 0.514) —y a la inversa—. Comparten familia `navegacion-tarjetas`,
  `navegacion-por-tarjetas`, `tarjetas-repetibles` y `BODY_CONTENT`, pero el contrato no se
  toca en ningún punto que importe:
  - *Marcado*: `section.next#costos > .container.next-layout > .next-cards > article.next-card`
    con `img`, `h3`, `p` y `a` como hijos directos y `featured` en la primera; aquí es
    `section.path#admisiones > .container > .path-layout > (img.path-photo | .path-cards) >
    article.path-card > (.path-title | .path-bottom)`. Cambian raíz, clase raíz y jerarquía:
    **bloqueante** (§9).
  - *Fields*: los paths de `cards` coinciden por nombre (`cards.icon`, `cards.title`,
    `cards.title_tag`, `cards.description`, `cards.cta_text`, `cards.cta_link`), pero la
    firma de `cards` no: `occurrence.default` es 4 allá y 5 aquí, y aquí existen además
    `cards.hover_image` y los tres colores por tarjeta. Un path existente con otra firma es
    **bloqueante** porque cerrarlo cambiaría el contrato del contenido ya guardado (§9, §10).
  - *Alcance*: `siguiente-paso` es `tier: global` con `meta.global: true`. Se edita una vez
    y cambia en todas las páginas (§11); si cada página necesita contenido distinto, ese
    módulo no es el camino.
  - *Comportamiento*: `siguiente-paso` no tiene imagen de hover ni `data-img` ni foto
    asociada. Falta `imagen-hover` y `estado-expandido` → `falta capacidad:` corta la cadena
    en el paso 2.
- **Si se evalúa una sección para Proceso de admisión, compara primero con
  `admision-siguiente-paso`**
  (candidato 0.462). Ahí el contrato de fields está en español y **no comparte ni un path**
  con éste: `grupo_contenido.heading/intro` en vez de `heading`/`intro`, y `tarjetas.*`
  (`mostrar`, `icono`, `icono_imagen`, `titulo`, `texto`, `enlace_texto`, `enlace`) en vez de
  `cards.*`, con `occurrence` `max: 12`, `default: 4`. Además resuelve el icono con un macro
  de SVG inline (`svg.siguiente-icon`) y permite ocultar tarjetas una a una. Migrar contenido
  entre ambos no es un renombre —§10 lo prohíbe—: es recapturar. Las brechas duras siguen
  siendo `html` (raíz `.adm-siguiente`, jerarquía distinta), `css` y `js/hooks`.
- **Si hace falta más de una instancia en la misma página.** Es la limitación más dura del
  módulo y viene del JS compartido, no del marcado.
- **Si el diseño exige apertura por clic o por teclado.** Hoy sólo abre `mouseenter`; en
  táctil no hay hover y la primera tarjeta queda abierta por default. Añadirlo obligaría a
  tocar `js/main.js` → **bloqueante**.
- **Si el template destino no marca `<html class="no-js">` y además no carga `js/main.js`.**
  Sin la clase de rescate (`main.css` 189) la sección se queda en `opacity: 0`; con ella se
  ve, pero ninguna tarjeta abre y la foto nunca cambia.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `heading` | `text` | no | `Comienza tu camino` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Accede rápidamente a la información que necesitas para decidir. Elige tu ruta y avanza.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `main_photo` | `image` | no | `{"alt":"Estudiantes consultando información en laptop","src":""}` | `null` | no | `null` |
| `cards` | `group` | no | `[{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","description":"Conoce cada paso del proceso de admisión.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Tu admisión"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Cotizar ›","description":"Calcula el costo total de tus estudios.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Cotiza tu licenciatura"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","description":"Conoce las opciones de apoyos financieros disponibles para ti.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Apoyos educativos"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Conocer ›","description":"Conoce todo lo que la Universidad Anáhuac te ofrece para que te sientas en casa.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Soy foráneo"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Conocer ›","description":"Conoce todo lo que la Universidad Anáhuac te ofrece para que te sientas en casa.","hover_image":{"alt":"","src":""},"icon":{"alt":"","src":""},"title":"Soy extranjero"}]` | `{"default":5,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `cards.icon` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.title` | `text` | no | `Título` | `null` | no | `cards` |
| `cards.title_tag` | `choice` | no | `h3` | `null` | no | `cards` |
| `cards.description` | `text` | no | — | `null` | no | `cards` |
| `cards.cta_text` | `text` | no | `Explorar ›` | `null` | no | `cards` |
| `cards.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `cards` |
| `cards.hover_image` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.color_titulo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cards` |
| `cards.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cards` |
| `cards.color_cta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `cards` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_abierta_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_abierta_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa `evaluateCompatibility` (`metadata`, `fields`,
`html`, `css`, `js/hooks`, `variantes`, `responsive`, `assets`, `dependencias`, `paginas`),
separando contrato duro de margen real. Las severidades siguen la tabla de `README.md` §9.

**`metadata`.** Duro: `imagen-hover` y `estado-expandido` son las capacidades que ningún
otro miembro de `navegacion-tarjetas` tiene (`siguiente-paso` cura `iconos`,
`tarjeta-destacada`, `estados-hover`; `admision-siguiente-paso`, `icono-configurable` y
`visibilidad-por-tarjeta`); una brecha `falta capacidad:` sobre ellas responde «no hace lo
mismo» y corta la cadena en el paso 2. `estado: Approved` es curaduría del registry, no
confirmación del portal. `tier: reusable` con
`meta.global: false` son coherentes (0 discrepancias). Solo nota: `familia`. Solo nota **con
decisión de alcance**: una brecha `tier requerido=global` frente a este módulo no es técnica,
es una promoción de alcance que exige análisis de impacto y aprobación (§11). Flexible:
`categories` y `content_types`, aditivos en `meta.json`.

**`fields`.** Duro: `cards` es el único repeater y va **a nivel raíz** —anidarlo en un grupo
pierde los items en la primera edición (`adapters/hubspot/README.md`)—; su `occurrence`
(`min: 0`, `max: 8`, `default: 5`) y su condición de repeater son parte de la firma del
contenido guardado. `cards.hover_image` es el field que sostiene `data-img`: sin él
desaparece la capacidad diferencial del módulo. `cards.cta_link` es `type: link` y el HubL
lee `…url.href`. `main_photo` es `image` y su vacío cae a `camino.jpg`, así que la columna
izquierda nunca queda hueca. Ningún field es `required`. Cambiar tipo, `required`,
`single/repeater` u `occurrence` de un path existente es **bloqueante** (§9, §10).
La firma del generador incluye todos los defaults —incluidas las cinco tarjetas de
ejemplo—, así que cambiarlos produce una brecha bloqueante incluso si la diferencia es
editorial. Ampliar las listas de `heading_tag`, `intro_tag` y `cards.title_tag` es un
cambio aditivo fuera de la firma actual.

**`html`.** Duro: raíz `<section class="path section-pad">`; `.container`;
`.section-intro.wide`; `.path-layout` como grid de dos columnas con `img.path-photo` primero
y `.path-cards` después —`.path-cards` lleva `margin-left: -5.3125rem` (796-804), así que el
solape depende del orden—; `article.path-card` con `data-img` y el par
`.path-title` (`img.path-icon` + título) / `.path-bottom` (`p` + `a`); `.is-open`, que la
pone el JS y la leen ocho reglas de `main.css`; y el par `.reveal` + `[data-reveal]`, que es
lo que hace visible la sección. `tabindex="0"` se conserva por fidelidad al diseño aprobado
aunque hoy no tenga estilo de foco asociado. Flexible: `id="admisiones"`, que no aparece ni
en `main.css` ni en `main.js` y sólo sirve de ancla; `.section-intro.wide` es compartida con
otros nueve módulos, así que no identifica a éste.

**`css`.** `module.css` está **vacío**: *todos* los selectores del bloque AUTO viven en
`theme/css/main.css` (738-887 para la base, 5024-5042 para las custom properties, más las
media queries). Por tanto cualquier brecha `falta selector:` es **bloqueante** —obliga a
editar CSS transversal— y dar contenido al `module.css` también lo es, por convención del
theme (§9). Matiz de alcance a favor: ningún otro `module.html` del theme emite clases
`.path-*` (verificado), así que las reglas son de facto exclusivas de este módulo; lo que no
cambia la severidad, porque el archivo que hay que tocar es compartido.

**`js`/`hooks`.** `module.js` vacío; todo viene de `js/main.js`: el mecanismo
tarjeta↔foto (14, 53-72) y `[data-reveal]` (78-150). Duro: `.path-card`, `.path-photo`,
`[data-img]` y `[data-reveal]`; renombrar cualquiera desactiva el módulo. Una brecha
`falta hook:` es **bloqueante** por construcción. Límite estructural heredado del JS: los
selectores son de documento (`querySelector` para la foto, `querySelectorAll` global para las
tarjetas), no están acotados a `.path`, y por eso el módulo es de una instancia por página.

**`variantes`.** `registry.variantes` vacío y «Variantes verificadas: —». Los nueve colores
configurables y los `*_tag` son configuración por instancia, no variantes en el sentido de
TAXONOMY. Añadir una es **adaptable** y obliga a declararla en `registry.variantes` y aquí.

**`responsive`.** Ninguna regla es propia. Los tres breakpoints del bloque AUTO se resuelven
todos en `main.css`: `@media (max-width: 90em)` (896-908: la grid pasa a `3fr 1fr`, la foto a
`aspect-ratio`, la tarjeta abierta a 12.5 rem), `@media (max-width: 64em)` (910-936: el
layout se vuelve columna y las tarjetas suben sobre la foto con `margin-top: -4.375rem`) y
`@media (max-width: 40em)` (938-955, más la auditoría tipográfica de 4136: la tarjeta
cerrada oculta `.path-bottom` con `display: none`). Toda brecha `falta regla responsive:`
es, por origen, **bloqueante**.

**`assets`.** Tres referencias en `module.html`: el respaldo fijo `../../images/camino.jpg`
de `main_photo` y las dos listas `get_asset_url('../../images/' ~ icon_fb)` y
`… ~ img_fb`. Verificado en `theme/images/`: existen `camino.jpg`, `hero-student.jpg`,
`hero-medicine.jpg`, `hero-friends.jpg` y los cuatro SVG de `icons/`; **no existe
`extranjeros.webp`**, el quinto respaldo de hover. Sustituir o subir assets es
**adaptable**, con el recordatorio de que el Design Manager descarta `.webp` en silencio —lo
que probablemente explica la ausencia—.

**`dependencias`.** Declaradas: `css/main.css` y `js/main.js`. Ningún módulo del theme usa
`require_css`/`require_js`; la carga es explícita en el template. Según §9 es **solo nota**
mientras el template destino cargue ambos, y **adaptable** si hubiera que declarar un
`require_*`. Para este módulo `main.js` no es una nota: sin él no hay estado abierto ni
cambio de foto.

**`paginas`.** Uso observado: `Home`, derivado de `templates/pagina.html:66`;
`paginas_portal` vacío. Reutilizarlo en otra página produce `uso objetivo no observado:`
(solo nota); tocarlo produce `impacto existente a revisar: Home` y obliga al análisis de
impacto de §10, recordando que el `dnd_area` no se propaga a páginas ya creadas: cada página
guarda su snapshot.

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
{% dnd_module path="../modules/comienza-tu-camino" %}
{% end_dnd_module %}
```
