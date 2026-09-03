# `dudas-contacto`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `dudas-contacto.module` |
| Label HubSpot | Dudas / Contacto — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `cta` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `FORMS_AND_BUTTONS` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `bloque-contacto`, `contenido-promocional`, `doble-cta`, `imagen` |
| Variantes verificadas | — |
| Notas curatoriales | meta.categories: FORMS_AND_BUTTONS. No contiene un field de formulario ni un elemento form; funcionalmente es un CTA de contacto. |
| Páginas conocidas | `Home` |

### Relaciones curadas

- `candidato` → `admision-cta` — Ambos son cierres promocionales con encabezado, texto y dos CTA; dudas-contacto añade imagen y usa un contrato de fields plano.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-cta`](./admision-cta.md): score 0.582; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:cta`, `contenido-promocional`, `doble-cta`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `0\|group\|optional\|single\|standalone`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.questions`, `.section-pad`.
- Elementos: `a:2`, `div:3`, `dynamic:2`, `img:1`, `section:1`.
- Estructura padre→hijo: `div>a:2`, `div>div:2`, `div>dynamic:2`, `div>img:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:1`, `section>div>div>div>a:2`, `section>div>div>dynamic:2`, `section>div>img:1`.
- Clases: `.btn`, `.btn-dark`, `.btn-light`, `.button-row`, `.centered`, `.container`, `.questions`, `.questions-card`, `.reveal`, `.section-pad`.
- IDs: `#contacto`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero-info .button-row`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.oferta-hero-info .button-row`, `.questions`, `.questions .btn-dark`, `.questions .btn-light`, `.questions h2`, `.questions p`, `.questions-card`, `.questions-card .button-row`, `.questions-card > div`, `.questions-card > img`, `.questions::before`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/dudas.jpg`.
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
| `image` | `image` | no | `{"alt":"Estudiante Anáhuac en aula","src":""}` | `null` | no | `null` |
| `heading` | `text` | no | `¿Tienes alguna duda de nuestra universidad?` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `description` | `text` | no | `Nuestro equipo de asesores preuniversitarios en la Universidad Anáhuac México está aquí para guiarte en cada paso hacia tu futuro brillante. ¡Contáctanos hoy y comienza a trazar el camino hacia tus sueños!` | `null` | no | `null` |
| `description_tag` | `choice` | no | `p` | `null` | no | `null` |
| `primary_text` | `text` | no | `Contactar` | `null` | no | `null` |
| `primary_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `secondary_text` | `text` | no | `Agenda tu visita` | `null` | no | `null` |
| `secondary_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_heading` | `choice` | no | `heading-2-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_texto` | `choice` | no | `paragraph-size` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/dudas-contacto" %}
{% end_dnd_module %}
```
