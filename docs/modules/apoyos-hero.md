# `apoyos-hero`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-hero.module` |
| Label HubSpot | Apoyos · Hero — Anáhuac |
| Estado | `Development` |
| Familia funcional | `hero` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `botones-repetibles`, `encabezado-principal`, `eyebrow`, `imagen-destacada`, `panel-richtext`, `variantes-de-boton` |
| Variantes verificadas | — |
| Notas curatoriales | Página Apoyos económicos aún no migrada al portal. Hero interno con una imagen destacada; no equivale al mosaico multimedia de hero ni al hero sin media de Admisión. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-hero`](./admision-hero.md): score 0.729; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `botones-repetibles`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `variantes-de-boton`.
- [`oferta-hero`](./oferta-hero.md): score 0.521; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`hero`](./hero.md): score 0.431; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-hero`, `.section-pad`.
- Elementos: `a:1`, `div:6`, `dynamic:3`, `img:1`, `section:1`, `span:2`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `div>a:1`, `div>div:5`, `div>dynamic:2`, `div>img:1`, `dynamic>span:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>div:2`, `section>div>div>div>div>a:1`, `section>div>div>div>div>a>dynamic:1`, `section>div>div>div>div>a>span:1`, `section>div>div>dynamic:2`, `section>div>div>dynamic>span:1`, `section>div>div>img:1`.
- Clases: `.apo-hero`, `.apo-hero-copy`, `.apo-hero-img`, `.apo-hero-info`, `.apo-hero-info-copy`, `.apo-hero-inner`, `.btn`, `.button-row`, `.container`, `.hero-card`, `.reveal`, `.section-pad`, `.tagline`.
- IDs: `#apoyos-page-title`, `#inicio`.
- Data attributes: `data-reveal`, `data-reveal{%`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero .hero-card`, `.adm-hero .hero-card p`, `.adm-hero-info .button-row`, `.apo-hero`, `.apo-hero .btn > :where(h1, h2, h3, h4, h5, h6, p)`, `.apo-hero .btn-dark`, `.apo-hero .btn-light`, `.apo-hero .hero-card`, `.apo-hero .hero-card p`, `.apo-hero .section-intro > p:not(.tagline)`, `.apo-hero h1`, `.apo-hero-copy`, `.apo-hero-copy .tagline`, `.apo-hero-copy h1`, `.apo-hero-img`, `.apo-hero-info`, `.apo-hero-info .button-row`, `.apo-hero-info-copy`, `.apo-hero-inner`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.hero .hero-card`, `.hero-card`, `.hero-card p`, `.oferta-hero .hero-card`, `.oferta-hero .hero-card p`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 73.75em)`, `@media (min-width: 40.0625em) and (max-width: 48em)`, `@media (min-width: 48.0625em) and (max-width: 73.75em)`.
- Assets: `../../images/apoyos-economicos/hero-apoyos.jpg`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

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
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `Apoyos Económicos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Impulsa tu carrera con apoyos hechos para tu talento y perfil` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h1` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `richtext` | no | `<p>La Universidad Anáhuac México cuenta con distintas opciones de apoyo y financiamiento para que el factor económico no sea un obstáculo en tu camino universitario.</p>` | `null` | no | `grupo_contenido` |
| `grupo_imagen` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_imagen.image` | `image` | no | `{"alt":"Estudiante Anáhuac en contexto académico","src":""}` | `null` | no | `grupo_imagen` |
| `grupo_botones` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_botones.mostrar_botones` | `boolean` | no | `true` | `null` | no | `grupo_botones` |
| `botones` | `group` | no | `[{"enlace":{"open_in_new_tab":false,"url":{"href":"#panorama","type":"EXTERNAL"}},"estilo":"btn-dark","texto":"Quiero conocer mis opciones"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#actua","type":"EXTERNAL"}},"estilo":"btn-light","texto":"Inicia tu solicitud de apoyo"}]` | `{"default":2,"max":2,"min":0}` | sí | `null` |
| `botones.texto` | `text` | no | `Quiero conocer mis opciones` | `null` | no | `botones` |
| `botones.texto_tag` | `choice` | no | `ninguna` | `null` | no | `botones` |
| `botones.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `botones` |
| `botones.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#panorama","type":"EXTERNAL"}}` | `null` | no | `botones` |
| `botones.estilo` | `choice` | no | `btn-dark` | `null` | no | `botones` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-hero" %}
{% end_dnd_module %}
```
