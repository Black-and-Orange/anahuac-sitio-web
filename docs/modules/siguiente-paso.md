# `siguiente-paso`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `siguiente-paso.module` |
| Label HubSpot | El siguiente paso — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `navegacion-tarjetas` |
| Tier del equipo | `global` |
| Global técnico (meta.global) | `true` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `estados-hover`, `iconos`, `navegacion-por-tarjetas`, `tarjeta-destacada`, `tarjetas-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | meta.global:true; cierre en Home. La primera tarjeta recibe un tratamiento destacado en el HTML. |
| Páginas conocidas | `Home` |

### Relaciones curadas

- `candidato` → `admision-siguiente-paso` — Ambos presentan destinos relacionados como tarjetas repetibles con icono, texto y enlace; difieren en fields, marcado y estados visuales.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-siguiente-paso`](./admision-siguiente-paso.md): score 0.608; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`comienza-tu-camino`](./comienza-tu-camino.md): score 0.514; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `paginas`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.next`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `div:4`, `dynamic:2`, `h3:1`, `img:1`, `p:1`, `section:1`.
- Estructura padre→hijo: `article>a:1`, `article>h3:1`, `article>img:1`, `article>p:1`, `div>article:1`, `div>div:3`, `div>dynamic:2`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>h3:1`, `section>div>div>article>img:1`, `section>div>div>article>p:1`, `section>div>div>div:1`, `section>div>div>dynamic:2`.
- Clases: `.container`, `.featured`, `.long-arrow`, `.next`, `.next-card`, `.next-cards`, `.next-layout`, `.reveal`, `.section-intro`, `.section-pad`.
- IDs: `#costos`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.long-arrow`, `.long-arrow::after`, `.next`, `.next .container`, `.next .next-card`, `.next .next-card a`, `.next .next-card h3`, `.next .next-card p`, `.next .next-card:hover`, `.next .next-card:hover a`, `.next .next-card:hover h3`, `.next .next-card:hover p`, `.next .next-icon`, `.next .section-intro h2`, `.next-card`, `.next-card a`, `.next-card h3`, `.next-card img`, `.next-card p`, `.next-card.featured`, `.next-card:hover`, `.next-card:hover img`, `.next-cards`, `.next-layout`, `.next.section-pad`, `.next::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0 % 4])`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

Cierre de navegación del Home: «El siguiente paso hacia tus sueños». Dos columnas —a la
izquierda el encabezado, la intro y una flecha decorativa; a la derecha una pila de
tarjetas enlazables— donde cada tarjeta reparte icono, título, descripción y un enlace
opcional en una rejilla de tres columnas. Su función es enrutar al visitante hacia los
destinos siguientes (elegir carrera, cotizar, admisión, apoyos), no vender ni contar una
historia. Reproduce la sección `<section class="next section-pad" id="costos">` de la
maqueta aprobada (`Inicio.html:425`), que es el **único** lugar del conjunto estático
donde aparece ese marcado.

**Forma real de invocación.** A diferencia de `encabezado` y `pie-de-pagina`, este
módulo **sí** vive dentro del `dnd_area` del Home:

```hubl
{% dnd_row %}{% dnd_module path="../modules/siguiente-paso" %}{% end_dnd_module %}{% end_dnd_row %}
```

`templates/pagina.html:90`, en su propia `dnd_section`/`dnd_column`. Es la única
plantilla versionada que lo trae precargado, y Marketing puede reordenarlo o quitarlo
desde el editor sin tocar código.

**Impacto transversal — editarlo cambia todas las páginas que lo usan a la vez.**
Página conocida hoy: **`Home`** (`paginas_portal` está vacío, así que no hay usos de
portal declarados fuera de la plantilla). `tier: global` y `meta.global: true` no
describen cuántas páginas lo usan hoy, sino que el cambio se propaga: cualquier página
que lo arrastre al `dnd_area` comparte marcado, CSS y JS. Al vivir en un `dnd_area`,
cada página conserva su **snapshot de contenido** —cambiar el `dnd_area` de la plantilla
no reescribe páginas ya creadas (README §10)—, pero editar `module.html` o
`theme/css/main.css` sí cambia todas de inmediato. A diferencia de `experiencia`, sus
selectores (`.next*`, `.long-arrow`) no los comparte ningún otro módulo del inventario:
el alcance del CSS coincide aquí con el alcance del módulo.

**Dos fields sin efecto, verificados.** No están reportados en el bloque AUTO porque el
generador no cruza `fields.json` con `module.html` ni resuelve especificidad CSS:

1. `cards.title_tag` existe en `fields.json` como `choice` con default `h3`, pero
   `module.html` emite `<h3>` **fijo**. El field no se lee. Los `heading_tag` e
   `intro_tag` de nivel raíz sí se usan.
2. `grupo_estilos.color_icono` inyecta `--home-next-icon`, que solo consume
   `.next .next-icon` (`main.css:5091`); `module.html` nunca emite esa clase —los iconos
   son `<img>` dentro de `.next-card`— y el recoloreado en hover se hace con un `filter`
   fijo (`main.css:1842-1844`). El field no tiene efecto visible.

Ninguna de las dos se corrige en este documento: tocar el módulo o `main.css` es un
cambio con impacto y exige el recorrido de README §10.

## Cuándo usar

- Como **cierre de navegación** de una página larga: un puñado de destinos de igual
  peso, cada uno con icono, una línea de descripción y un enlace corto.
- Con **hasta 4 tarjetas** en la práctica (`cards` trae 4 por defecto y admite hasta 8),
  y con contenido breve: `.next-card` es una rejilla `3rem 1fr auto` con
  `min-height: 10rem` (`main.css:1804-1821`), pensada para icono + texto + enlace.
- Cuando el enlace de cada tarjeta es opcional: el `<a>` solo se emite si hay
  `cta_text`, mientras que el `<img>` del icono se emite siempre (con respaldo del
  theme si la tarjeta no trae icono propio).
- Cuando las desviaciones de color caben en `grupo_estilos` —encabezado, fondo, título,
  texto y CTA de tarjeta, y fondo/texto en hover— teniendo en cuenta que `color_icono`
  hoy no hace nada (ver arriba). Es la única personalización visual disponible sin tocar
  CSS compartido.
- Cuando `#costos` es un ancla aceptable para la sección: el ID está fijo en el marcado.

## Cuándo no usar

- **No dos veces en la misma página**: el `id="costos"` está fijo en `module.html` y no
  es un field, así que se duplicaría el ID.
- **No si otra tarjeta que la primera debe destacarse.** La clase `featured` se asigna
  con `{% if loop.first %}`, sin field que lo controle.
- **No esperando que `featured` se vea distinto hoy.** `.next-card.featured`
  (`main.css:1823-1828`) declara `background: transparent`, `color: inherit`,
  `border-color` y `box-shadow` iguales a la base; pero `.next .next-card`
  (`main.css:5077-5079`) tiene la **misma especificidad** y aparece **después** en la
  hoja, así que reimpone `background` y `color`. El resultado es que la capacidad curada
  `tarjeta-destacada` describe el marcado (`loop.first` añade la clase), no un
  tratamiento visual vigente. Discrepancia detectada, no corregida.
- **No con más de 4 tarjetas sin asignar iconos propios**: la lista de respaldo tiene
  cuatro archivos (`seccion-costos/icono-1.svg`, `icono-2.svg`, `icono-3.svg`,
  `file-done-outlined.svg`) y se recorre con `loop.index0 % 4`, así que se repiten en
  ciclo. `occurrence.max` permite 8.
- **No para tarjetas con imagen grande, precio, badge o contenido rico**: el marcado son
  cuatro hijos fijos (`img`, `h3`, `p`, `a`) colocados por rejilla, con `p` en
  `grid-column: 2/3` y `a` en `grid-column: 3; grid-row: 2` (`main.css:1853-1873`).
- **No como hero ni como cabecera de página**: no reserva el espacio del header fijo de
  `encabezado`.
- **No lo sustituyas por `admision-siguiente-paso` ni por `comienza-tu-camino` por
  parecido.** Los tres son familia `navegacion-tarjetas` y son candidatos (scores 0.608 y
  0.514), pero difieren en fields, marcado y estados visuales: `comienza-tu-camino` tiene
  estado expandido e imagen en hover; `admision-siguiente-paso` tiene visibilidad e icono
  configurables por tarjeta. La relación curada dice «candidato», no «reemplaza»
  (TAXONOMY, README §8).

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `heading` | `text` | no | `El siguiente paso hacia tus sueños` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Avanza hacia tu futuro hoy mismo.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `cards` | `group` | no | `[{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Explorar ›","description":"Explora nuestras ocho áreas académicas y encuentra el programa que te llama.","icon":{"alt":"","src":""},"title":"Elige tu carrera ideal"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Calcular ›","description":"Conoce el costo real y las becas disponibles para ti en minutos.","icon":{"alt":"","src":""},"title":"Calcula tu inversión"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Agendar ›","description":"Experimenta Anáhuac en persona y resuelve tus últimas dudas con nuestro equipo.","icon":{"alt":"","src":""},"title":"Visita el campus"},{"cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Solicitar ›","description":"Completa tu solicitud y comienza el camino hacia tu futuro profesional.","icon":{"alt":"","src":""},"title":"Inicia tu admisión"}]` | `{"default":4,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `cards.icon` | `image` | no | `{"alt":"","src":""}` | `null` | no | `cards` |
| `cards.title` | `text` | no | `Título de la tarjeta` | `null` | no | `cards` |
| `cards.title_tag` | `choice` | no | `h3` | `null` | no | `cards` |
| `cards.description` | `text` | no | `Descripción de la tarjeta.` | `null` | no | `cards` |
| `cards.cta_text` | `text` | no | `Explorar ›` | `null` | no | `cards` |
| `cards.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `cards` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_icono` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_titulo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_cta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_hover_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_hover_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa el generador (README §8-§9). `module.css` y
`module.js` están vacíos, así que **toda** la evidencia de `css` y `responsive` proviene
de `theme/css/main.css` —compartida, y por tanto bloqueante (README §9)— y la dimensión
`js/hooks` del bloque AUTO está vacía: el único enganche de JS es el `[data-reveal]`
genérico del theme.

- **metadata** — *Duro:* las capacidades `navegacion-por-tarjetas`,
  `tarjetas-repetibles`, `iconos` y `estados-hover`, verificadas en `module.html` y
  `main.css`. `tarjeta-destacada` está verificada **solo a nivel de marcado**: la clase
  se emite, pero su CSS queda sobrescrito (ver «Cuándo no usar»). Categoría
  `BODY_CONTENT`, coherente con ser módulo de cuerpo arrastrable. `familia:
  navegacion-tarjetas` (compartida con `admision-siguiente-paso` y
  `comienza-tu-camino`) es solo nota para ampliar la búsqueda. `global: true`,
  `tier: global` y `host_template_types: ["PAGE"]` describen alcance y plataforma: son
  nota/análisis de impacto, no compatibilidad funcional dura. `Approved` es estado
  curatorial del registry, no confirmación del portal. *Flexible:* `label`,
  `notas`; añadir `category` o `content_type` es aditivo (README §9). El `module_id` es
  la identidad en el portal.
- **fields** — *Duro:* los 19 paths con su tipo y su carácter repetible: los cuatro de
  nivel raíz (`heading`, `heading_tag`, `intro`, `intro_tag`), el repeater `cards`
  (`min: 0`, `max: 8`, `default: 4`) con sus seis hijos (`icon` `image`, `title`,
  `title_tag`, `description`, `cta_text`, `cta_link`) y el grupo **no repetible**
  `grupo_estilos` con sus ocho `color`. Renombrar, borrar o cambiar `type`/`occurrence`
  rompe el contenido guardado (README §10); convertir `grupo_estilos` en repeater o meter
  `cards` dentro de otro grupo es bloqueante (`adapters/hubspot/README.md`, «Los
  repeaters van a nivel raíz»). `heading_tag` e `intro_tag` deben seguir emitiéndose con
  `|default(..., true)`: un valor vacío produciría `<>` y se comería el resto de la
  sección. *Zona muerta, no contrato:* `cards.title_tag` y `grupo_estilos.color_icono`
  están guardados en el contenido pero no se leen; **no** deben borrarse (borrar un field
  es destructivo, README §10), y activarlos exige tocar `module.html` o `main.css`, es
  decir, análisis de impacto. La firma exacta incluye `default` y `occurrence`: cambiarlos
  es bloqueante para el comparador. Es aditivo añadir fields nuevos opcionales con
  `default` útil.
- **html** — *Duro:* raíz única `<section class="next section-pad" id="costos">` con
  **dos** clases raíz, no una: `main.css:1891` estiliza `.next.section-pad` en un
  breakpoint. Jerarquía contractual: `section > .container.next-layout >
  (.section-intro > heading/intro/.long-arrow) + (.next-cards > article.next-card)`.
  Dentro de la tarjeta, el orden `img` → `h3` → `p` → `a` es contrato de la rejilla
  (`main.css:1853-1873` coloca `p` y `a` por `grid-column`/`grid-row` explícitos):
  reordenarlos descoloca la tarjeta aunque se conserven las clases. Son contrato todas
  las clases porque `main.css` las referencia: `.next`, `.next-layout`, `.next-cards`,
  `.next-card`, `.featured`, `.long-arrow`, más las compartidas `.container`,
  `.section-pad`, `.section-intro`, `.reveal`. `.long-arrow` es exclusiva de este módulo
  en todo el inventario (`main.css:96-110`, hermanada por convención con `.tagline`). El
  atributo `data-reveal` es contrato del observer compartido (`main.js:78-155`). El
  `id="costos"` es ancla de página. *Flexible:* añadir un `data-*` nuevo que nadie
  referencie (README §9).
- **css** — `module.css` `empty`, por convención del theme. Los ~26 selectores del bloque
  AUTO viven en `main.css`: el bloque de layout `main.css:1767-1940` y el de
  personalización `main.css:5076-5091`. *Duro y exclusivo del módulo:* `.next*`,
  `.next-card*`, `.long-arrow*`, `.next::before` (patrón de puntos decorativo).
  *Duro y compartido con el theme entero:* `.container`, `.section-pad`,
  `.section-intro`, `.reveal`. *La única superficie flexible:* las custom properties
  `--home-next-*`, que el HubL inyecta como `style` inline en la raíz desde
  `grupo_estilos` —con la salvedad de `--home-next-icon`, sin consumidor real—. Dos
  conflictos de especificidad a tener presentes antes de tocar nada: `.next .next-card`
  (5077) vence a `.next-card.featured` (1823) por orden, y el recoloreado del icono en
  hover está codificado como `filter` fijo (1842), no como token ni variable. Dar
  contenido a `module.css` es bloqueante (README §9).
- **js/hooks** — `module.js` `empty` y el bloque AUTO no lista hooks: `js/main.js` no
  tiene código específico de esta sección. El único enganche es el genérico
  `[data-reveal]` (`main.js:78-155`), compartido por 32 de los 34 módulos. El hover de
  las tarjetas es CSS puro (`main.css:1830-1844`), sin JS. *Degradación verificada:* si
  `main.js` no carga, `html.no-js` se mantiene y `main.css:189` deja los `.reveal`
  visibles. Añadir contenido a `module.js` es bloqueante (README §9).
- **variantes** — `registry.variantes: []`: ninguna verificada. `featured` no es una
  variante declarada sino una consecuencia de `loop.first`, y hoy sin efecto visual. Si
  se decide un tratamiento destacado real, se implementa como variante aditiva declarada
  en `registry.variantes` con su ruta, no reescribiendo `.next-card`.
- **responsive** — tres breakpoints, todos en `main.css:1875-1940` y por tanto
  **bloqueantes**: `@media (max-width: 90em)`, `73.75em` y `40em`. Cambian
  `.next-layout` a una sola columna, ajustan el `padding-top` de `.next.section-pad`,
  reposicionan `.next::before` y recomponen la rejilla interna de `.next-card`. Nada
  responsive es flexible dentro del módulo.
- **assets** — el contenido normal llega por `cards.icon` (field `image`). *Duro:* los
  cuatro SVG de respaldo deben existir en `adapters/hubspot/theme/images/seccion-costos/`
  (`icono-1.svg`, `icono-2.svg`, `icono-3.svg`, `file-done-outlined.svg`), resueltos con
  `get_asset_url`, que es la forma correcta en este theme. *Flexible:* cambiar la lista,
  siempre que los archivos existan y no sean `.webp` (el Design Manager los descarta en
  silencio, `adapters/hubspot/README.md`).
- **dependencias** — solo `css/main.css`; `Dependencias JS` es `—`. La carga la
  **plantilla**, no el módulo (no hay `require_css`). Formalmente «solo nota»
  (README §9); funcionalmente, sin `main.css` no hay rejilla ni tarjetas.
- **paginas** — `Home` hoy; `paginas_portal: []`. Al ser `tier: global`, cualquier brecha
  `impacto existente a revisar:` obliga al análisis de impacto de README §10 antes de
  cerrar la decisión, aunque sea REUTILIZAR. Ventaja frente a `experiencia`: aquí el
  alcance del CSS no excede al del módulo, porque ningún otro módulo emite `.next*` ni
  `.long-arrow`.

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
{% dnd_module path="../modules/siguiente-paso" %}
{% end_dnd_module %}
```
