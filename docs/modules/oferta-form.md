# `oferta-form`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `oferta-form.module` |
| Label HubSpot | Oferta · Formulario — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `formulario` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `campos-fijos`, `control-consentimiento-visual`, `imagen-mascota`, `inputs-sin-envio`, `interfaz-formulario-estatica` |
| Variantes verificadas | — |
| Notas curatoriales | Template de Oferta no versionado. Es únicamente una reproducción visual: pinta inputs, textarea, checkbox y botón fuera de un elemento form; no expone un field type=form de HubSpot y no captura ni envía datos. |
| Páginas conocidas | `Oferta académica` |

### Relaciones curadas

- `candidato` → `admision-formulario` — Comparte intención visual y layout general, pero no contiene un elemento form, no usa un field type=form de HubSpot y no envía datos; esa brecha impide asumir compatibilidad.
- `candidato` → `apoyos-formulario` — Comparte intención visual y layout general, pero no contiene un elemento form, no usa un field type=form de HubSpot y no envía datos; esa brecha impide asumir compatibilidad.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-formulario`](./admision-formulario.md): score 0.460; evidencia: `assets`, `dependencias`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:formulario`, `imagen-mascota`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `button:1`.
- [`apoyos-formulario`](./apoyos-formulario.md): score 0.387; evidencia: `dependencias`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:formulario`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `button:1`, `div:6`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.oferta-form`, `.section-pad`.
- Elementos: `button:1`, `div:6`, `h2:1`, `img:1`, `input:3`, `label:1`, `p:2`, `section:1`, `span:1`, `textarea:1`.
- Estructura padre→hijo: `div>button:1`, `div>div:5`, `div>h2:1`, `div>img:1`, `div>input:2`, `div>label:1`, `div>p:2`, `div>textarea:1`, `label>input:1`, `p>span:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:2`, `section>div>div>div>div:2`, `section>div>div>div>div>button:1`, `section>div>div>div>div>h2:1`, `section>div>div>div>div>input:2`, `section>div>div>div>div>label:1`, `section>div>div>div>div>label>input:1`, `section>div>div>div>div>p:2`, `section>div>div>div>div>p>span:1`, `section>div>div>div>div>textarea:1`, `section>div>div>div>img:1`.
- Clases: `.btn`, `.btn-orange`, `.container`, `.oferta-form`, `.oferta-form-card`, `.oferta-form-check`, `.oferta-form-content`, `.oferta-form-layout`, `.oferta-form-mascot`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#actua`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.oferta-form`, `.oferta-form .btn-orange`, `.oferta-form .btn-orange:hover`, `.oferta-form-card`, `.oferta-form-card input[type="email"]`, `.oferta-form-card input[type="email"]:focus`, `.oferta-form-card input[type="text"]`, `.oferta-form-card input[type="text"]:focus`, `.oferta-form-card textarea`, `.oferta-form-card textarea:focus`, `.oferta-form-check`, `.oferta-form-check input[type="checkbox"]`, `.oferta-form-content`, `.oferta-form-content .section-intro`, `.oferta-form-content .section-intro h2`, `.oferta-form-layout`, `.oferta-form-mascot`, `.oferta-form-mascot img`, `.oferta-form::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/oferta-academica/formulario/leonel-formulario-1.png`.
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
| `mascot_image` | `image` | no | `{"alt":"Leonel, mascota Anáhuac","src":""}` | `null` | no | `null` |
| `eyebrow` | `text` | no | `Actúa` | `null` | no | `null` |
| `heading` | `text` | no | `Da el siguiente paso` | `null` | no | `null` |
| `intro` | `text` | no | `Encuentra tu camino académico y comienza tu transformación` | `null` | no | `null` |
| `name_label` | `text` | no | `Nombre` | `null` | no | `null` |
| `email_label` | `text` | no | `Correo` | `null` | no | `null` |
| `message_label` | `text` | no | `Cuéntanos sobre ti` | `null` | no | `null` |
| `terms_label` | `text` | no | `Acepto los términos legales` | `null` | no | `null` |
| `submit_text` | `text` | no | `Explorar` | `null` | no | `null` |
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
{% dnd_module path="../modules/oferta-form" %}
{% end_dnd_module %}
```
