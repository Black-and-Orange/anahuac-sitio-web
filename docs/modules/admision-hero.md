# `admision-hero`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-hero.module` |
| Label HubSpot | Admisión · Hero — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `hero` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `botones-repetibles`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `variantes-de-boton` |
| Variantes verificadas | — |
| Notas curatoriales | Hero interno sin media; el panel informativo y los botones son editables. No confundir con el hero Home de mosaico multimedia. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `oferta-hero` — Comparten estructura de hero interno, panel informativo y hasta dos CTA; difieren en agrupación de fields y control de botones.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`apoyos-hero`](./apoyos-hero.md): score 0.729; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `botones-repetibles`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `variantes-de-boton`.
- [`oferta-hero`](./oferta-hero.md): score 0.683; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`hero`](./hero.md): score 0.420; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-hero`, `.section-pad`.
- Elementos: `a:1`, `div:5`, `dynamic:3`, `section:1`, `span:2`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `div>a:1`, `div>div:4`, `div>dynamic:2`, `dynamic>span:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:2`, `section>div>div>div>a:1`, `section>div>div>div>a>dynamic:1`, `section>div>div>div>a>span:1`, `section>div>div>dynamic:2`, `section>div>div>dynamic>span:1`.
- Clases: `.adm-hero`, `.adm-hero-copy`, `.adm-hero-info`, `.adm-hero-inner`, `.btn`, `.button-row`, `.container`, `.hero-card`, `.reveal`, `.section-pad`, `.tagline`.
- IDs: `#inicio`.
- Data attributes: `data-reveal`, `data-reveal{%`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero`, `.adm-hero .btn-dark`, `.adm-hero .btn-light`, `.adm-hero .hero-card`, `.adm-hero .hero-card p`, `.adm-hero h1`, `.adm-hero-copy`, `.adm-hero-copy .tagline`, `.adm-hero-copy h1`, `.adm-hero-info`, `.adm-hero-info .button-row`, `.adm-hero-inner`, `.apo-hero .hero-card`, `.apo-hero .hero-card p`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.hero .hero-card`, `.hero-card`, `.hero-card p`, `.oferta-hero .hero-card`, `.oferta-hero .hero-card p`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`, `@media (min-width: 40.0625em) and (max-width: 48em)`.
- Assets: —.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`admision-hero` abre la página Proceso de admisión con el H1, un eyebrow y un panel
informativo acompañado por hasta dos CTA. Porta la sección `.adm-hero` de la maqueta
aprobada (`proceso-de-admision.html:112`) sin incorporar media: la composición son dos
columnas de texto dentro de `.adm-hero-inner`.

El repeater raíz `botones` admite de cero a dos items. Cada botón elige entre
`btn-dark`, `btn-light` y `btn-orange`; `grupo_visibilidad.mostrar_botones` oculta la fila
completa y `mostrar_flecha` controla el `<span>` decorativo del eyebrow. Los colores y el
tamaño del panel se convierten en custom properties `--admision-hero-*` consumidas por
`main.css`. No hay JS específico: `[data-reveal]` usa la mejora progresiva común del theme.

## Cuándo usar

- Como apertura de una página interna que requiera exactamente H1/eyebrow, panel richtext
  y hasta dos botones, sin imagen ni video.
- Desde un template que cargue `css/main.css`; con `js/main.js` se anima el reveal. Las
  plantillas versionadas conservan `html.no-js`, por lo que el contenido sigue visible si
  el script no carga.
- Cuando el contenido sea propio de una página. `tier: page-specific` y
  `meta.global: false` son datos de alcance, no prueba de compatibilidad.
- Una sola vez por página: contiene el H1 canónico y el `id="inicio"` fijo.

## Cuándo no usar

- No para el mosaico multimedia del Home: compara con `hero` (candidato 0.420), que tiene
  cuatro posiciones imagen/video y un contrato estructural distinto.
- No elijas `apoyos-hero` (0.729) u `oferta-hero` (0.683) solo por score o familia. Son
  candidatos para comparar; sus fields, jerarquía y controles deben revisarse completos.
- No si hacen falta más de dos CTA: `botones.occurrence.max` es 2 y cambiar occurrence
  modifica la firma del contenido guardado.
- No si se necesita media, breadcrumb o navegación repetible. Ninguna de esas capacidades
  existe en el módulo.
- No dos veces en el mismo documento: duplicaría `#inicio` y normalmente también el H1.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `Admisiones` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Tu camino comienza aquí` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h1` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto_panel` | `richtext` | no | `<p>Conoce los pasos para ingresar a Anáhuac México y encuentra toda la información que necesitas.</p>` | `null` | no | `grupo_contenido` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_flecha` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_visibilidad.mostrar_botones` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `botones` | `group` | no | `[{"enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"estilo":"btn-dark","texto":"Iniciar mi proceso","texto_tag":"ninguna"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#pasos","type":"EXTERNAL"}},"estilo":"btn-light","texto":"Ver los pasos","texto_tag":"ninguna"}]` | `{"default":2,"max":2,"min":0,"sorting_label_field":null}` | sí | `null` |
| `botones.texto` | `text` | no | `Iniciar mi proceso` | `null` | no | `botones` |
| `botones.texto_tag` | `choice` | no | `ninguna` | `null` | no | `botones` |
| `botones.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `botones` |
| `botones.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}}` | `null` | no | `botones` |
| `botones.estilo` | `choice` | no | `btn-dark` | `null` | no | `botones` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_panel_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_panel_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_panel` | `choice` | no | `lead-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

**`metadata`.** Duras son las capacidades observables: encabezado principal, eyebrow,
panel richtext, botones repetibles y variantes de botón. `familia: hero` solo amplía la
búsqueda; `tier: page-specific`, `meta.global: false`, estado y tipos de template son
nota o decisión de alcance. Categorías y content types admiten extensión aditiva.

**`fields`.** Son contrato los grupos no repetibles `grupo_contenido`,
`grupo_visibilidad` y `grupo_estilos`, y el repeater raíz `botones` con occurrence
`{min: 0, default: 2, max: 2}`. También lo son tipos, required y paths completos: el HubL
lee `botones.enlace.url.href` y emite `botones.estilo` como clase. La firma del comparador
incluye defaults y occurrence; cambiarlos produce brecha bloqueante. Ampliar opciones de
un `choice` es aditivo; un field nuevo debe ser opcional, con default y lectura defensiva.

**`html`.** Contrato duro: raíz `section.adm-hero.section-pad#inicio`,
`.container.adm-hero-inner`, las columnas `.adm-hero-copy`/`.adm-hero-info`,
`.hero-card` y `.button-row > a.btn`. Las clases son consumidas por `main.css`;
`data-reveal` es el hook de animación. Las etiquetas dinámicas deben conservar
`|default(..., true)` para no emitir etiquetas vacías.

**`css`.** `module.css` está vacío. Todos los selectores y breakpoints listados por AUTO
proceden de `theme/css/main.css`; una brecha de selector o responsive es bloqueante por
origen compartido. `.hero-card`, `.button-row` y `.btn` también los emiten otros módulos,
por lo que su impacto excede este hero. Las custom properties `--admision-hero-*` son la
superficie de configuración existente.

**`js/hooks`.** `module.js` está vacío y no hay hook específico. El único comportamiento
es el reveal genérico de `main.js`; sin él, `html.no-js` mantiene visible el contenido.
Agregar comportamiento requiere analizar el JS compartido o declarar una dependencia
nueva de forma aditiva; no debe inferirse de otros heroes.

**`variantes`.** El registry no declara variantes. `botones.estilo` es configuración por
item, no una variante registrada. Una variante estable nueva debe declararse antes de
tratarla como evidencia de compatibilidad.

**`responsive`.** La composición y sus seis consultas observadas viven en `main.css`; no
hay responsive propio del módulo. Toda brecha se clasifica como bloqueante por origen.

**`assets`.** No referencia assets del theme ni fields de imagen/video. Requerir media es
una diferencia de capacidad y estructura, no un asset faltante adaptable.

**`dependencias`.** Depende de `css/main.css`, cargado por el template. `js/main.js` solo
aporta reveal. La falta de una dependencia ya global es nota; declarar una nueva puede ser
adaptable, sujeto al análisis de impacto.

**`paginas`.** Uso observado: Proceso de admisión
(`templates/proceso-de-admision.html:64`). Un uso nuevo es nota; modificar marcado o CSS
obliga a revisar esa página. El `dnd_area` conserva snapshots de configuración en páginas
ya creadas.

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
{% dnd_module path="../modules/admision-hero" %}
{% end_dnd_module %}
```
