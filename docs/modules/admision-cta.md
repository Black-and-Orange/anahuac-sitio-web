# `admision-cta`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-cta.module` |
| Label HubSpot | Admisión · CTA solicitud — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `cta` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contenido-promocional`, `doble-cta`, `roles-primario-secundario`, `visibilidad-independiente-de-botones` |
| Variantes verificadas | — |
| Notas curatoriales | Los dos botones tienen grupos independientes porque cumplen roles primario y secundario; no son un repeater intercambiable. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `dudas-contacto` — Ambos son cierres promocionales con encabezado, texto y dos CTA; admision-cta no incluye imagen y separa los botones por rol.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`dudas-contacto`](./dudas-contacto.md): score 0.582; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:cta`, `contenido-promocional`, `doble-cta`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `0\|group\|optional\|single\|standalone`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-cta`, `.section-pad`.
- Elementos: `a:2`, `div:3`, `dynamic:4`, `section:1`, `span:2`.
- Estructura padre→hijo: `a>dynamic:2`, `a>span:2`, `div>a:2`, `div>div:2`, `div>dynamic:2`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:1`, `section>div>div>div>a:2`, `section>div>div>div>a>dynamic:2`, `section>div>div>div>a>span:2`, `section>div>div>dynamic:2`.
- Clases: `.adm-cta`, `.adm-cta-inner`, `.btn`, `.btn-orange`, `.btn-outline`, `.button-row`, `.container`, `.reveal`, `.section-pad`.
- IDs: `#solicitud`.
- Data attributes: `data-reveal`, `data-reveal{%`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta`, `.adm-cta .btn-orange`, `.adm-cta .btn-outline`, `.adm-cta .btn-outline:hover`, `.adm-cta .container`, `.adm-cta-inner`, `.adm-cta-inner .button-row`, `.adm-cta-inner h2`, `.adm-cta-inner p`, `.adm-cta::before`, `.adm-hero-info .button-row`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`.
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
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.heading` | `text` | no | `Comienza tu solicitud hoy` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto` | `text` | no | `El primer paso es el más importante. Regístrate ahora y avanza en tu camino.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_boton1` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_boton1.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_boton1` |
| `grupo_boton1.texto` | `text` | no | `Iniciar proceso` | `null` | no | `grupo_boton1` |
| `grupo_boton1.texto_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_boton1` |
| `grupo_boton1.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_boton1` |
| `grupo_boton1.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `grupo_boton1` |
| `grupo_boton2` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_boton2.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_boton2` |
| `grupo_boton2.texto` | `text` | no | `Hablar con un asesor` | `null` | no | `grupo_boton2` |
| `grupo_boton2.texto_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_boton2` |
| `grupo_boton2.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_boton2` |
| `grupo_boton2.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `grupo_boton2` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto_principal` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto_secundario` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/admision-cta" %}
{% end_dnd_module %}
```
