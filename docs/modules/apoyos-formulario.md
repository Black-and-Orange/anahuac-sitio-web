# `apoyos-formulario`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-formulario.module` |
| Label HubSpot | Apoyos · Formulario de contacto — Anáhuac |
| Estado | `Development` |
| Familia funcional | `formulario` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contenido-introductorio`, `fallback-estatico`, `formulario-hubspot`, `imagen-lateral` |
| Variantes verificadas | — |
| Notas curatoriales | Usa un field form nativo de HubSpot y conserva marcado de respaldo cuando no hay formulario configurado. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

- `candidato` → `admision-formulario` — Ambos renderizan un field form de HubSpot con fallback y media lateral; cambian la agrupación de imagen y el bloque visual.
- `candidato` → `oferta-form` — Comparte intención visual y layout general, pero oferta-form no contiene un elemento form, no usa un field type=form de HubSpot y no envía datos.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-formulario`](./admision-formulario.md): score 0.760; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:formulario`, `contenido-introductorio`, `fallback-estatico`, `formulario-hubspot`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`oferta-form`](./oferta-form.md): score 0.387; evidencia: `dependencias`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:formulario`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `button:1`, `div:6`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-form`, `.section-pad`.
- Elementos: `button:1`, `div:6`, `dynamic:3`, `img:1`, `input:5`, `label:1`, `option:10`, `section:1`, `select:2`, `span:1`.
- Estructura padre→hijo: `div>button:1`, `div>div:5`, `div>dynamic:3`, `div>img:1`, `div>input:4`, `div>label:1`, `div>select:2`, `dynamic>span:1`, `label>input:1`, `section>div:1`, `select>option:10`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:2`, `section>div>div>div>div:2`, `section>div>div>div>div>button:1`, `section>div>div>div>div>dynamic:3`, `section>div>div>div>div>dynamic>span:1`, `section>div>div>div>div>input:4`, `section>div>div>div>div>label:1`, `section>div>div>div>div>label>input:1`, `section>div>div>div>div>select:2`, `section>div>div>div>div>select>option:10`, `section>div>div>div>img:1`.
- Clases: `.apo-form`, `.apo-form-card`, `.apo-form-check`, `.apo-form-content`, `.apo-form-layout`, `.apo-form-media`, `.btn`, `.btn-orange`, `.container`, `.js-select`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#actua`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: sí.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-form`, `.apo-form .btn-orange`, `.apo-form .btn-orange:hover`, `.apo-form .section-intro > p:not(.tagline)`, `.apo-form-card`, `.apo-form-card input[type="email"]`, `.apo-form-card input[type="email"]:focus`, `.apo-form-card input[type="tel"]`, `.apo-form-card input[type="tel"]:focus`, `.apo-form-card input[type="text"]`, `.apo-form-card input[type="text"]:focus`, `.apo-form-card select`, `.apo-form-card select:focus`, `.apo-form-card select:has(option[value=""]:checked)`, `.apo-form-card textarea`, `.apo-form-card textarea:focus`, `.apo-form-card.reveal`, `.apo-form-check`, `.apo-form-check input[type="checkbox"]`, `.apo-form-content`, `.apo-form-content .section-intro`, `.apo-form-content .section-intro h2`, `.apo-form-content .section-intro p:not(.tagline)`, `.apo-form-layout`, `.apo-form-media`, `.apo-form-media img`, `.apo-form::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.apo-form`, `.js-select`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`, `@media (min-width: 48.0625em) and (max-width: 73.75em)`.
- Assets: `../../images/apoyos-economicos/img-formulario-apoyo.jpg`.
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
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `Siguiente paso` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Recibe orientación sobre tu apoyo` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Cuéntanos un poco sobre ti y un asesor te contactará para ayudarte a encontrar el apoyo que mejor se ajusta a tu perfil.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_imagen` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_imagen.image` | `image` | no | `{"alt":"Estudiante recibiendo asesoría de apoyo académico en el campus Anáhuac México","src":""}` | `null` | no | `grupo_imagen` |
| `grupo_formulario` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_formulario.formulario` | `form` | no | `{"form_type":"HUBSPOT","form_type_display":"HUBSPOT","gotowebinar_webinar_key":null,"message":"Gracias por enviar el formulario.","response_type":"inline"}` | `null` | no | `grupo_formulario` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/apoyos-formulario" %}
{% end_dnd_module %}
```
