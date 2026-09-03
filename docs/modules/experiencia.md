# `experiencia`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `experiencia.module` |
| Label HubSpot | Experiencia — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `experiencia` |
| Tier del equipo | `global` |
| Global técnico (meta.global) | `true` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contenido-sticky`, `cta`, `imagen-o-video`, `slides-multimedia-repetibles` |
| Variantes verificadas | — |
| Notas curatoriales | meta.global:true; usado en Home. |
| Páginas conocidas | `Home` |

### Relaciones curadas

- `candidato` → `oferta-experiencia` — Comparten clases raíz, layout sticky, repeater de slides con imagen o video y CTA; la firma de fields no es idéntica.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`oferta-experiencia`](./oferta-experiencia.md): score 0.959; evidencia: `assets`, `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `js/hooks`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:experiencia`, `contenido-sticky`, `cta`, `imagen-o-video`, `slides-multimedia-repetibles`, `category:BODY_CONTENT`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.experience`.
- Elementos: `a:1`, `article:1`, `div:5`, `dynamic:4`, `img:1`, `p:1`, `section:1`, `source:1`, `span:1`, `video:1`.
- Estructura padre→hijo: `article>div:1`, `article>img:1`, `article>video:1`, `div>a:1`, `div>article:1`, `div>div:3`, `div>dynamic:4`, `div>p:1`, `dynamic>span:1`, `section>div:1`, `video>source:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>div:1`, `section>div>div>article>div>dynamic:1`, `section>div>div>article>div>p:1`, `section>div>div>article>img:1`, `section>div>div>article>video:1`, `section>div>div>article>video>source:1`, `section>div>div>div:1`, `section>div>div>div>a:1`, `section>div>div>div>dynamic:3`, `section>div>div>div>dynamic>span:1`.
- Clases: `.btn`, `.btn-purple`, `.container`, `.experience`, `.experience-card`, `.experience-layout`, `.experience-slides`, `.experience-sticky`, `.reveal`, `.section-intro`, `.tagline`.
- IDs: `#experiencia`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.experience`, `.experience .btn`, `.experience .container`, `.experience .experience-card`, `.experience .experience-card h3`, `.experience .section-intro > p:not(.tagline)`, `.experience .section-intro h2`, `.experience-card`, `.experience-card div`, `.experience-card h3`, `.experience-card img`, `.experience-card p`, `.experience-card video`, `.experience-card:hover`, `.experience-layout`, `.experience-slides`, `.experience-sticky`, `.experience-sticky .section-intro`, `.experience-sticky .section-intro > p:not(.tagline)`, `.experience::after`, `.experience::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.experience`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0 % (fallbacks\|length)])`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

Sección narrativa de scroll con dos columnas: a la izquierda, un bloque que se queda
fijo (eyebrow, encabezado, intro y CTA); a la derecha, una pila de tarjetas repetibles
que pasan por delante. Cada tarjeta lleva título, descripción y una pieza multimedia que
es `<video autoplay muted loop playsinline>` cuando el slide trae archivo de video, o
`<img loading="lazy">` cuando no; la imagen del slide hace de póster en el primer caso.
Si el slide no trae imagen propia, el módulo cae en una lista de cuatro archivos del
theme (`exp-vida.png`, `exp-internacional.png`,
`hero-grid-fallback-imgs/jugadores-corriendo.png`, `exp-espacios.png`) recorrida en
ciclo. Reproduce la sección «Descubre por qué ser un León Anáhuac» de la maqueta
aprobada (`Inicio.html:295`).

**Forma real de invocación.** A diferencia de `encabezado` y `pie-de-pagina`, este
módulo **sí** vive dentro del `dnd_area` del Home:

```hubl
{% dnd_row %}{% dnd_module path="../modules/experiencia" %}{% end_dnd_module %}{% end_dnd_row %}
```

`templates/pagina.html:78`, en su propia `dnd_section`/`dnd_column`. Es la única
plantilla versionada que lo trae precargado, y Marketing puede reordenarlo o quitarlo
desde el editor sin tocar código.

**Impacto transversal — editarlo cambia todas las páginas que lo usan a la vez.**
Página conocida hoy: **`Home`** (`paginas_portal` está vacío, así que no hay usos de
portal declarados fuera de la plantilla). `tier: global` y `meta.global: true` no
describen cuántas páginas lo usan hoy, sino que el cambio se propaga: cualquier página
que lo arrastre al `dnd_area` comparte marcado, CSS y JS. Dos matices verificados:

1. Al vivir en un `dnd_area`, cada página conserva su **snapshot de contenido**: cambiar
   el `dnd_area` de la plantilla no reescribe las páginas ya creadas (README §10). Lo
   que sí las cambia de inmediato, todas y sin excepción, es editar `module.html`,
   `theme/css/main.css` o `theme/js/main.js`.
2. `oferta-experiencia` emite **el mismo marcado raíz**: `<section class="experience"
   id="experiencia">`. Es su candidato con score 0.959. Por tanto, tocar los selectores
   `.experience*` de `main.css` cambia también **Oferta académica**, aunque el catálogo
   liste `Home` como única página de este módulo. El alcance real del CSS es mayor que la
   columna `Páginas`.

## Cuándo usar

- Para un bloque narrativo largo en el que un encabezado debe **quedarse fijo** mientras
  pasan tarjetas: `.experience-sticky` es `position: sticky; top: 0; min-height: 100vh`
  (`main.css:1278-1285`). Es el patrón, no un adorno.
- Con **3 o más slides** (`slides` trae 4 por defecto y admite hasta 12): el efecto
  sticky solo se percibe si la columna derecha es más alta que el viewport.
- Cuando el multimedia es **mixto imagen/video por tarjeta**, con video autorreproducido
  en silencio y en bucle, sin controles ni pistas de audio.
- Cuando las desviaciones de color caben en los siete campos de `grupo_estilos`
  (encabezado, intro, fondo/título/texto de tarjeta y fondo/texto del botón) más
  `slides.color_titulo` y `slides.color_texto` por tarjeta. Esa es la única
  personalización visual disponible sin tocar CSS compartido.
- Cuando la jerarquía de encabezados debe adaptarse a la página: `eyebrow_tag`,
  `heading_tag`, `intro_tag` y `slides.title_tag` son `choice` y el HubL los emite
  siempre con `|default(..., true)`.

## Cuándo no usar

- **No dos veces en la misma página.** El `id="experiencia"` está fijo en `module.html`
  (no es field), así que se duplicaría el ID; y `js/main.js:526` resuelve
  `document.querySelector(".experience")` en singular, de modo que el desvanecido del
  patrón de puntos (`--dots-opacity`) solo se aplicaría a la primera instancia.
- **No junto con `oferta-experiencia`** en la misma página, por la misma colisión de
  `.experience` y `#experiencia`.
- **No con uno o dos slides.** La columna sticky mide 100vh de alto mínimo: con poco
  contenido a la derecha, el bloque queda descuadrado y sin efecto.
- **No como carrusel o galería.** No hay flechas, puntos de paginación ni JS de slider:
  `.experience-slides` es un `flex` en columna (`main.css:1291-1296`). Para carrusel
  existe la lógica de áreas de Oferta académica, que es otro módulo.
- **No para video con audio, controles, o embeds de terceros.** El `<video>` es
  `muted`/`loop`/`playsinline` sin `controls`, con `preload="auto"`: el mp4 se descarga
  con la página. `slides.video` es un field `file`, no una URL de YouTube.
- **No confiando en los fallbacks a partir del quinto slide sin imagen propia:** la lista
  tiene cuatro archivos y se recorre con `loop.index0 % (fallbacks|length)`, así que las
  imágenes se repiten en ciclo.
- **No como primera sección de una página** que use `encabezado`: su `padding-top` es
  `var(--section-pad-y)` (`main.css:1228-1232`), no reserva el espacio del header fijo
  como sí hacen los heroes del theme.
- **No lo sustituyas por `oferta-experiencia` (ni al revés) por parecido.** Comparten
  familia, clases y capacidades, pero la firma de fields no es idéntica: aquí existen
  `eyebrow_tag`/`heading_tag`/`intro_tag`/`slides.title_tag`, `grupo_estilos` y los
  colores por slide. La relación curada dice explícitamente «candidato», no
  «reemplaza» (TAXONOMY, README §8).

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `eyebrow` | `text` | no | `Mucho más que solo una Universidad.` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Descubre por qué ser un León Anáhuac` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Conoce por qué vivirás una experiencia universitaria única con nosotros.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `cta_text` | `text` | no | `Conoce la experiencia Anáhuac` | `null` | no | `null` |
| `cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `slides` | `group` | no | `[{"description":"Desarrolla las habilidades, conocimientos y experiencia que necesitas para construir un perfil integral. Nuestro modelo educativo integra formación profesional, intelectual, humana, social y espiritual.","image":{"alt":"Estudiantes Anáhuac en actividad","src":""},"title":"Un futuro con más posibilidades"},{"description":"Amplía tu experiencia con intercambios, convenios y opciones académicas que amplían tu perspectiva y enriquecen tu formación dentro y fuera del aula.","image":{"alt":"Estudiantes en programa de intercambio internacional","src":""},"title":"Oportunidades internacionales"},{"description":"Haz deporte, participa en actividades culturales, involúcrate en proyectos sociales y forma parte de una comunidad activa.","image":{"alt":"Vida universitaria y deporte en Anáhuac","src":""},"title":"Una vida universitaria que te haga crecer"},{"description":"Disfruta de espacios creados para tu desarrollo integral: deportes, salud, innovación y recursos únicos que encontrarás en la Universidad Anáhuac.","image":{"alt":"Campus y espacios de la Universidad Anáhuac","src":""},"title":"Espacios que impulsan tu experiencia"}]` | `{"default":4,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `slides.title` | `text` | no | `Título de la tarjeta` | `null` | no | `slides` |
| `slides.title_tag` | `choice` | no | `h3` | `null` | no | `slides` |
| `slides.description` | `text` | no | `Descripción de la experiencia.` | `null` | no | `slides` |
| `slides.video` | `file` | no | `null` | `null` | no | `slides` |
| `slides.image` | `image` | no | `{"alt":"Experiencia Anáhuac","src":""}` | `null` | no | `slides` |
| `slides.color_titulo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `slides` |
| `slides.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `slides` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_titulo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa el generador (README §8-§9). `module.css` y
`module.js` están vacíos, así que **toda** la evidencia de `css`, `js/hooks` y
`responsive` proviene de `theme/css/main.css` y `theme/js/main.js`: es compartida, y por
tanto bloqueante (README §9). Aquí, además, es compartida con `oferta-experiencia`, que
emite el mismo marcado raíz.

- **metadata** — *Duro:* las cuatro capacidades curadas (`contenido-sticky`,
  `slides-multimedia-repetibles`, `imagen-o-video`, `cta`),
  todas verificadas en `module.html` y `main.css`. La categoría `BODY_CONTENT` es
  coherente con que sea un módulo de cuerpo arrastrable, a diferencia del `DESIGN` de
  `encabezado`/`pie-de-pagina`. `familia: experiencia` (compartida con
  `oferta-experiencia`) es solo nota para ampliar la búsqueda. `global: true`, `tier: global` y
  `host_template_types: ["PAGE"]` describen alcance y plataforma: son nota/análisis de
  impacto, no compatibilidad funcional dura. `Approved` es estado curatorial del registry,
  no confirmación del portal. *Flexible:* `label`, `notas`; añadir un `category` o un
  `content_type` es aditivo (README §9). El `module_id` es la identidad en el portal.
- **fields** — *Duro:* los 24 paths con su tipo y su carácter repetible. Los ocho de
  nivel raíz (`eyebrow`, `eyebrow_tag`, `heading`, `heading_tag`, `intro`, `intro_tag`,
  `cta_text`, `cta_link`), el repeater `slides` (`min: 0`, `max: 12`, `default: 4`) con
  sus siete hijos (`title`, `title_tag`, `description`, `video` `file`, `image` `image`,
  `color_titulo`, `color_texto`) y el grupo **no repetible** `grupo_estilos` con sus
  siete `color`. Renombrar, borrar o cambiar `type`/`occurrence` rompe el contenido
  guardado (README §10); convertir `grupo_estilos` en repeater o mover `slides` dentro de
  otro grupo es bloqueante (`adapters/hubspot/README.md`, «Los repeaters van a nivel
  raíz»). Los cuatro fields `choice` de etiqueta (`*_tag`) son contrato de accesibilidad
  **y de integridad del marcado**: deben emitirse siempre con `|default(..., true)`,
  porque un valor vacío produciría `<>` y se comería el resto de la tarjeta
  (`adapters/hubspot/README.md`). El módulo ya lo hace en los cuatro sitios. La firma exacta
  incluye `default` y `occurrence`: cambiarlos es bloqueante para el comparador. Es aditivo
  añadir fields nuevos opcionales con `default` útil.
- **html** — *Duro:* raíz única `<section class="experience" id="experiencia">` y la
  jerarquía `section > .container.experience-layout > (.experience-sticky >
  .section-intro) + (.experience-slides > article.experience-card)`. Dentro de la
  tarjeta, el `<div>` envoltorio del texto **es** contrato: `main.css:1318-1321` estiliza
  `.experience-card div`. Son contrato todas las clases porque `main.css` las
  referencia: `.experience`, `.experience-layout`, `.experience-sticky`,
  `.experience-slides`, `.experience-card`, más las compartidas `.container`,
  `.section-intro`, `.tagline`, `.btn` y `.btn-purple` (esta última la comparten
  `eventos`, `admision-propedeuticos` y `oferta-experiencia`). El atributo
  `data-reveal` y la clase `.reveal` son contrato del observer compartido
  (`main.js:78-155`; 32 de los 34 módulos los usan). El `id="experiencia"` es contrato
  doble: lo direcciona el CSS decorativo vía `.experience` y es el **ancla** a la que
  apuntan por defecto los submenús de `encabezado` (`nav_items` → `#experiencia`).
  *Flexible:* añadir un `data-*` nuevo que nadie referencie (README §9).
- **css** — `module.css` `empty`, por convención del theme. Los ~21 selectores del
  bloque AUTO viven en `main.css`: el bloque de layout `main.css:1226-1450` y el bloque
  de personalización `main.css:5054-5063`. *Duro y compartido con `oferta-experiencia`:*
  todo `.experience*`. *Duro y compartido con el theme entero:* `.container`,
  `.section-intro`, `.tagline`, `.btn`, `.btn-purple`. *La única superficie flexible:*
  las siete custom properties `--home-exp-*`, que el HubL inyecta como `style` inline en
  la raíz a partir de `grupo_estilos`, más los dos colores por slide, inyectados como
  `style` en el `h3` y el `<p>`. Ese es el mecanismo aprobado para variar color sin tocar
  CSS transversal. `.experience::before` y `.experience::after` son texturas decorativas
  y no dependen del contenido. Dar contenido a `module.css` es bloqueante (README §9).
- **js/hooks** — `module.js` `empty`; dos hooks, ambos en `js/main.js` y por tanto
  bloqueantes: `[data-reveal]` (animación de entrada, `main.js:78-155`, con
  `MutationObserver` para que el editor no deje la sección en blanco) y `.experience`
  (opacidad del patrón de puntos según el avance del scroll, `main.js:524-563`, activo
  solo por encima de 1180px de ancho). *Degradación verificada:* si `main.js` no carga,
  `html.no-js` se mantiene y `main.css:189` deja los `.reveal` visibles; se pierde la
  animación y el fundido de los puntos, no el contenido.
- **variantes** — `registry.variantes: []`: ninguna verificada. La bifurcación
  imagen/video por slide es una condición de contenido (`{% if slide.video %}`), no una
  variante declarada; si se adopta como decisión de diseño estable, se declara en
  `registry.variantes` conservando la ruta del field (`slides.video`), como exige
  TAXONOMY.
- **responsive** — tres breakpoints, todos en `main.css` (`@media (max-width: 90em)`,
  `73.75em` y `40em`, bloques `main.css:1345-1450`) y por tanto **bloqueantes**: cambian
  `.experience-layout` a una sola columna, sueltan el sticky y reducen la altura de
  imagen/video. Nada responsive es flexible dentro del módulo. El JS añade un umbral
  propio no expresado en CSS: 1180px para el fundido de los puntos.
- **assets** — el contenido normal llega por `slides.image` y `slides.video`
  (fields). *Duro:* los cuatro archivos de respaldo deben existir en
  `adapters/hubspot/theme/images/`: `exp-vida.png`, `exp-internacional.png`,
  `hero-grid-fallback-imgs/jugadores-corriendo.png` y `exp-espacios.png`. Se resuelven
  con `get_asset_url`, que es la forma correcta en este theme (nunca rutas relativas en
  CSS ni rutas de la maqueta en JS, `adapters/hubspot/README.md`). *Flexible:* cambiar la
  lista, siempre que los archivos existan y no sean `.webp` (el Design Manager los
  descarta en silencio).
- **dependencias** — `css/main.css` y `js/main.js`, cargados por la **plantilla**, no por
  el módulo (no hay `require_css`/`require_js`). Formalmente «solo nota» (README §9);
  funcionalmente, sin `main.css` no hay layout sticky ni tarjetas.
- **paginas** — `Home` hoy; `paginas_portal: []`. Al ser `tier: global`, cualquier
  brecha `impacto existente a revisar:` obliga al análisis de impacto de README §10 antes
  de cerrar la decisión, aunque sea REUTILIZAR. Y el análisis debe incluir **Oferta
  académica**, que no aparece en esta columna pero comparte los selectores
  `.experience*`.

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
{% dnd_module path="../modules/experiencia" %}
{% end_dnd_module %}
```
