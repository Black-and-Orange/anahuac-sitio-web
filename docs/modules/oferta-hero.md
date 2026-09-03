# `oferta-hero`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `oferta-hero.module` |
| Label HubSpot | Oferta · Hero — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `hero` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `doble-cta`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `visibilidad-independiente-de-botones` |
| Variantes verificadas | — |
| Notas curatoriales | Página Oferta académica viva en el portal; su template NO está versionado en el repo (hueco del espejo). Reconciliar con hs cms fetch. Si llega a ser necesario, hacerlo únicamente hacia staging y comparar; nunca sobre la ruta canónica. |
| Páginas conocidas | `Oferta académica` |

### Relaciones curadas

- `candidato` → `admision-hero` — Comparten estructura de hero interno, panel informativo y hasta dos CTA; difieren en agrupación de fields y control de botones.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-hero`](./admision-hero.md): score 0.683; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`hero`](./hero.md): score 0.543; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `doble-cta`, `encabezado-principal`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`apoyos-hero`](./apoyos-hero.md): score 0.521; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `responsive`; coincidencias: `familia:hero`, `encabezado-principal`, `eyebrow`, `panel-richtext`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.oferta-hero`, `.section-pad`.
- Elementos: `a:2`, `div:5`, `dynamic:2`, `section:1`, `span:1`.
- Estructura padre→hijo: `div>a:2`, `div>div:4`, `div>dynamic:2`, `dynamic>span:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:2`, `section>div>div>div>a:2`, `section>div>div>dynamic:2`, `section>div>div>dynamic>span:1`.
- Clases: `.btn`, `.btn-dark`, `.btn-light`, `.button-row`, `.container`, `.hero-card`, `.oferta-hero`, `.oferta-hero-copy`, `.oferta-hero-info`, `.oferta-hero-inner`, `.reveal`, `.section-pad`, `.tagline`.
- IDs: `#inicio`.
- Data attributes: `data-reveal`, `data-reveal{%`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero .hero-card`, `.adm-hero .hero-card p`, `.adm-hero-info .button-row`, `.apo-hero .hero-card`, `.apo-hero .hero-card p`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.hero .hero-card`, `.hero-card`, `.hero-card p`, `.oferta-hero`, `.oferta-hero .btn-dark`, `.oferta-hero .btn-light`, `.oferta-hero .hero-card`, `.oferta-hero .hero-card p`, `.oferta-hero h1`, `.oferta-hero-copy`, `.oferta-hero-copy .tagline`, `.oferta-hero-copy h1`, `.oferta-hero-info`, `.oferta-hero-info .button-row`, `.oferta-hero-inner`, `.questions-card .button-row`, `.step-panel .button-row`.
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

> TODO: documentar la intención editorial y funcional con evidencia de la página aprobada.

## Cuándo usar

> TODO: documentar condiciones de reutilización.

## Cuándo no usar

> TODO: documentar límites y casos incompatibles.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `eyebrow` | `text` | no | `Oferta Académica de la Universidad Anáhuac México` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Encuentra lo que te apasiona` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h1` | `null` | no | `null` |
| `card_text` | `richtext` | no | `<p>Descubre las ocho áreas académicas y todos nuestros programas de licenciatura disponibles</p>` | `null` | no | `null` |
| `btn1_text` | `text` | no | `Explorar áreas académicas` | `null` | no | `null` |
| `btn1_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#areas","type":"EXTERNAL"}}` | `null` | no | `null` |
| `mostrar_boton1` | `boolean` | no | `true` | `null` | no | `null` |
| `btn2_text` | `text` | no | `Buscar por licenciatura` | `null` | no | `null` |
| `btn2_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#buscar","type":"EXTERNAL"}}` | `null` | no | `null` |
| `mostrar_boton2` | `boolean` | no | `true` | `null` | no | `null` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_eyebrow` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_panel_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_panel_texto` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_panel` | `choice` | no | `lead-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_texto` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/oferta-hero" %}
{% end_dnd_module %}
```
