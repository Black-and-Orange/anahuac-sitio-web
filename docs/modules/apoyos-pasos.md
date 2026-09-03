# `apoyos-pasos`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `apoyos-pasos.module` |
| Label HubSpot | Apoyos · Pasos para solicitar — Anáhuac |
| Estado | `Development` |
| Familia funcional | `pasos` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `aviso-opcional`, `cta-final`, `imagenes-por-paso`, `navegacion-movil`, `pasos-repetibles`, `tarjetas-de-paso` |
| Variantes verificadas | — |
| Notas curatoriales | Proceso por tarjetas con navegación móvil y CTA final; no comparte los hooks data-step/data-panel de Admisión. |
| Páginas conocidas | `Apoyos Económicos` |

### Relaciones curadas

- `candidato` → `admision-pasos` — Ambos modelan procesos repetibles; apoyos-pasos usa tarjetas y navegación móvil, mientras admision-pasos requiere timeline, paneles sincronizados y media flexible.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-pasos`](./admision-pasos.md): score 0.497; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:pasos`, `pasos-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `0\|group\|optional\|repeater\|standalone`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.apo-steps`, `.section-pad`.
- Elementos: `a:1`, `aside:1`, `div:5`, `dynamic:7`, `img:1`, `li:1`, `ol:1`, `section:1`, `span:4`.
- Estructura padre→hijo: `a>dynamic:1`, `a>span:1`, `aside>dynamic:1`, `aside>span:1`, `div>a:1`, `div>aside:1`, `div>div:3`, `div>dynamic:5`, `div>ol:1`, `div>span:1`, `dynamic>span:1`, `li>div:1`, `li>img:1`, `ol>li:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>aside:1`, `section>div>aside>dynamic:1`, `section>div>aside>span:1`, `section>div>div:3`, `section>div>div>a:1`, `section>div>div>a>dynamic:1`, `section>div>div>a>span:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`, `section>div>ol:1`, `section>div>ol>li:1`, `section>div>ol>li>div:1`, `section>div>ol>li>div>dynamic:2`, `section>div>ol>li>div>span:1`, `section>div>ol>li>img:1`.
- Clases: `.apo-steps`, `.btn`, `.btn-orange`, `.container`, `.is-active`, `.reveal`, `.section-intro`, `.section-pad`, `.step-card`, `.step-card-body`, `.step-card-num`, `.steps-cards`, `.steps-cta`, `.steps-disclaimer`, `.steps-disclaimer-icon`, `.steps-nav`, `.tagline`, `.wide`.
- IDs: `#pasos-title`, `#pasos-v1`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-steps`, `.apo-steps .btn > :where(h1, h2, h3, h4, h5, h6, p)`, `.apo-steps .btn-orange`, `.apo-steps .container`, `.apo-steps .section-intro`, `.apo-steps .section-intro > p:not(.tagline)`, `.apo-steps .section-intro h2`, `.apo-steps .section-intro p:not(.tagline)`, `.apo-steps::before`, `.section-intro.wide`, `.step-card`, `.step-card h3`, `.step-card img`, `.step-card p`, `.step-card-body`, `.step-card-num`, `.step-card.is-active`, `.step-card:hover`, `.step-card:hover .step-card-num`, `.steps-cards`, `.steps-cta`, `.steps-disclaimer`, `.steps-disclaimer p`, `.steps-disclaimer-icon`, `.steps-nav`.
- module.js: `empty`; hooks propios/compartidos relevantes: `#pasos-v1`, `.step-card`, `.steps-nav`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`.
- Assets: `get_asset_url('../../images/' ~ pasos_fallback[loop.index0 % (pasos_fallback\|length)])`.
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
| `grupo_contenido.eyebrow` | `text` | no | `Cómo aplicar` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Pasos para solicitar tu apoyo` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `La solicitud de apoyo vive dentro de tu proceso de admisión. Estos son los pasos, de principio a fin.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_aviso` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_aviso.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_aviso` |
| `grupo_aviso.texto` | `text` | no | `Para el apoyo que se otorga en los Concursos académicos preuniversitarios no es necesario iniciar tu proceso, puedes participar en el concurso y posteriormente iniciar tu proceso de admisión.` | `null` | no | `grupo_aviso` |
| `grupo_aviso.texto_tag` | `choice` | no | `p` | `null` | no | `grupo_aviso` |
| `grupo_aviso.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_aviso` |
| `pasos` | `group` | no | `[{"imagen":{"alt":"Estudiante llenando su registro en una laptop","src":""},"texto":"Los apoyos se gestionan dentro del proceso de admisión: regístrate como aspirante para poder solicitarlos.","titulo":"Inicia tu proceso de admisión"},{"imagen":{"alt":"Estudiante revisando información en una laptop","src":""},"texto":"Explora el panorama y el detalle de cada apoyo para identificar el que mejor se ajusta a tu perfil o talento.","titulo":"Revisa qué apoyo aplica para ti"},{"imagen":{"alt":"Manos organizando documentos","src":""},"texto":"Reúne los documentos y requisitos generales; para apoyos deportivos o artísticos, alista tu material de evaluación.","titulo":"Prepara tu documentación"},{"imagen":{"alt":"Estudiante tomando notas","src":""},"texto":"Completa tu solicitud y, según el caso, participa en la convocatoria, prueba o audición correspondiente.","titulo":"Envía tu solicitud o evaluación"},{"imagen":{"alt":"Persona revisando su teléfono con documentos","src":""},"texto":"Un asesor acompaña tu caso mientras el comité evalúa tu solicitud con criterios académicos y socioeconómicos.","titulo":"Recibe seguimiento"}]` | `{"default":5,"max":10,"min":0,"sorting_label_field":null}` | sí | `null` |
| `pasos.imagen` | `image` | no | `{"alt":"Paso del proceso de solicitud de apoyo","src":""}` | `null` | no | `pasos` |
| `pasos.titulo` | `text` | no | `Inicia tu proceso de admisión` | `null` | no | `pasos` |
| `pasos.titulo_tag` | `choice` | no | `h3` | `null` | no | `pasos` |
| `pasos.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.texto` | `text` | no | `Los apoyos se gestionan dentro del proceso de admisión: regístrate como aspirante para poder solicitarlos.` | `null` | no | `pasos` |
| `pasos.texto_tag` | `choice` | no | `p` | `null` | no | `pasos` |
| `pasos.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `grupo_boton` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_boton.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_boton` |
| `grupo_boton.texto` | `text` | no | `Ir al proceso de admisión` | `null` | no | `grupo_boton` |
| `grupo_boton.texto_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_boton` |
| `grupo_boton.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_boton` |
| `grupo_boton.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"/proceso-de-admision","type":"EXTERNAL"}}` | `null` | no | `grupo_boton` |
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
{% dnd_module path="../modules/apoyos-pasos" %}
{% end_dnd_module %}
```
