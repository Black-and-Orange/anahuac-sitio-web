# `hero`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `hero.module` |
| Label HubSpot | Hero — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `hero` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `doble-cta`, `encabezado-principal`, `imagen-o-video`, `mosaico-multimedia`, `panel-richtext` |
| Variantes verificadas | — |
| Notas curatoriales | Único módulo con module.css propio (excepción a la convención de module.css vacío). El mosaico de cuatro posiciones admite imagen o video por posición, por lo que no es estructuralmente equivalente a los heroes internos. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`oferta-hero`](./oferta-hero.md): score 0.543; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `doble-cta`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`apoyos-hero`](./apoyos-hero.md): score 0.431; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`admision-hero`](./admision-hero.md): score 0.420; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.hero`, `.section-pad`.
- Elementos: `a:2`, `div:6`, `dynamic:1`, `figure:1`, `img:1`, `section:1`, `source:1`, `video:1`.
- Estructura padre→hijo: `div>a:2`, `div>div:5`, `div>dynamic:1`, `div>figure:1`, `figure>img:1`, `figure>video:1`, `section>div:1`, `video>source:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>div:2`, `section>div>div>div>div>a:2`, `section>div>div>dynamic:1`, `section>div>div>figure:1`, `section>div>div>figure>img:1`, `section>div>div>figure>video:1`, `section>div>div>figure>video>source:1`.
- Clases: `.btn`, `.btn-dark`, `.btn-light`, `.button-row`, `.container`, `.hero`, `.hero-actions`, `.hero-card`, `.hero-copy`, `.hero-grid`, `.hero-inner`, `.hero-media`, `.hero-video`, `.pos-`, `.reveal`, `.section-pad`.
- IDs: `#inicio`.
- Data attributes: `data-offset`, `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `content`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero .hero-card`, `.adm-hero .hero-card p`, `.adm-hero-info .button-row`, `.apo-hero .hero-card`, `.apo-hero .hero-card p`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.hero`, `.hero .btn-dark`, `.hero .btn-light`, `.hero .hero-card`, `.hero h1`, `.hero-actions`, `.hero-card`, `.hero-card p`, `.hero-copy`, `.hero-copy h1`, `.hero-grid`, `.hero-inner`, `.hero-media`, `.hero-media img`, `.hero-media video`, `.hero-media.pos-0`, `.hero-media.pos-1`, `.hero-media.pos-2`, `.hero-media.pos-3`, `.oferta-hero .hero-card`, `.oferta-hero .hero-card p`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: `[data-offset]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0])`.
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
| `heading` | `text` | no | `Forma tu futuro en Anáhuac México` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h1` | `null` | no | `null` |
| `heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `null` |
| `offer_text` | `richtext` | no | `<p>Descubre una educación que te prepara para generar un impacto real. Explora nuestras licenciaturas y encuentra tu camino.</p>` | `null` | no | `null` |
| `primary_btn_text` | `text` | no | `Ver licenciaturas` | `null` | no | `null` |
| `primary_btn_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#licenciaturas","type":"EXTERNAL"}}` | `null` | no | `null` |
| `secondary_btn_text` | `text` | no | `Proceso de admisión` | `null` | no | `null` |
| `secondary_btn_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#admisiones","type":"EXTERNAL"}}` | `null` | no | `null` |
| `mostrar_botones` | `boolean` | no | `true` | `null` | no | `null` |
| `image_1` | `image` | no | `{"alt":"Estudiante Anáhuac con tablet","src":""}` | `null` | no | `null` |
| `image_2` | `image` | no | `{"alt":"Estudiantes Anáhuac","src":""}` | `null` | no | `null` |
| `image_3` | `image` | no | `{"alt":"Estudiante de medicina Anáhuac","src":""}` | `null` | no | `null` |
| `image_4` | `image` | no | `{"alt":"Jugadores Anáhuac","src":""}` | `null` | no | `null` |
| `video_1` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiante-tablet.mp4` | `null` | no | `null` |
| `video_2` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiantes-saltando.mp4` | `null` | no | `null` |
| `video_3` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/estudiante-medicina.mp4` | `null` | no | `null` |
| `video_4` | `file` | no | `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/sitioweb26/videos/jugadores-corriendo.mp4` | `null` | no | `null` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_panel_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_panel_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_panel` | `choice` | no | `lead-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/hero" %}
{% end_dnd_module %}
```
