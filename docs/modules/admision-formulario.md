# `admision-formulario`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-formulario.module` |
| Label HubSpot | Admisión · Formulario — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `formulario` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contenido-introductorio`, `fallback-estatico`, `formulario-hubspot`, `imagen-mascota` |
| Variantes verificadas | — |
| Notas curatoriales | Usa un field form nativo de HubSpot y conserva marcado de respaldo cuando no hay formulario configurado. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `apoyos-formulario` — Ambos renderizan un field form de HubSpot con fallback y media lateral; cambian la agrupación de imagen y el bloque visual.
- `candidato` → `oferta-form` — Comparte intención visual y layout general, pero oferta-form no contiene un elemento form, no usa un field type=form de HubSpot y no envía datos.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`apoyos-formulario`](./apoyos-formulario.md): score 0.760; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:formulario`, `contenido-introductorio`, `fallback-estatico`, `formulario-hubspot`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.
- [`oferta-form`](./oferta-form.md): score 0.460; evidencia: `assets`, `dependencias`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:formulario`, `imagen-mascota`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `button:1`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-form`, `.section-pad`.
- Elementos: `button:1`, `div:6`, `dynamic:3`, `img:1`, `input:3`, `label:1`, `section:1`, `span:1`, `textarea:1`.
- Estructura padre→hijo: `div>button:1`, `div>div:5`, `div>dynamic:3`, `div>img:1`, `div>input:2`, `div>label:1`, `div>textarea:1`, `dynamic>span:1`, `label>input:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:2`, `section>div>div>div>div:2`, `section>div>div>div>div>button:1`, `section>div>div>div>div>dynamic:3`, `section>div>div>div>div>dynamic>span:1`, `section>div>div>div>div>input:2`, `section>div>div>div>div>label:1`, `section>div>div>div>div>label>input:1`, `section>div>div>div>div>textarea:1`, `section>div>div>div>img:1`.
- Clases: `.adm-form`, `.adm-form-card`, `.adm-form-check`, `.adm-form-content`, `.adm-form-layout`, `.adm-form-mascot`, `.btn`, `.btn-orange`, `.container`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#actua`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: sí.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-form`, `.adm-form .btn-orange`, `.adm-form .btn-orange:hover`, `.adm-form-card`, `.adm-form-card input[type="email"]`, `.adm-form-card input[type="email"]:focus`, `.adm-form-card input[type="text"]`, `.adm-form-card input[type="text"]:focus`, `.adm-form-card textarea`, `.adm-form-card textarea:focus`, `.adm-form-check`, `.adm-form-check input[type="checkbox"]`, `.adm-form-content`, `.adm-form-content .section-intro`, `.adm-form-content .section-intro h2`, `.adm-form-content .section-intro p:not(.tagline)`, `.adm-form-layout`, `.adm-form-mascot`, `.adm-form-mascot img`, `.adm-form::before`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.adm-form`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 29.6875em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/oferta-academica/formulario/leonel-formulario-1.png`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

Cierre de conversión de Proceso de admisión: combina a Leonel, contenido introductorio y
una tarjeta que incrusta un formulario nativo de HubSpot. Está precargado al final del
`dnd_area` de `templates/proceso-de-admision.html`, después de `admision-faq`, y porta
`<section class="adm-form section-pad" id="actua">`.

Cuando `grupo_formulario.formulario.form_id` existe, el tag `{% form %}` entrega los datos
al CRM y respeta `response_type`, mensaje o redirección. Sin `form_id`, el módulo emite
inputs, textarea, checkbox y botón como **respaldo exclusivamente visual**: no existe un
elemento `<form>`, por lo que el click en `type="submit"` no genera un evento `submit` y
el listener compartido de `main.js` sobre `.adm-form` no se activa. El AUTO dice
«Formulario operativo observado: sí» porque detecta el tag HubL; no garantiza que el
fallback envíe datos.

En la secuencia aprobada, la necesidad lógica `admision-asesoria` se satisface
reutilizando [`apoyos-asesoria`](./apoyos-asesoria.md), nunca creando otro módulo. El
template versionado aún pasa directamente del FAQ a este formulario: integrar la asesoría
significa invocar el módulo físico existente con configuración de Admisión, no generar
`admision-asesoria.md` ni una carpeta homónima.

## Cuándo usar

- Cuando se necesita captación real mediante un field HubSpot `form`, con contenido e
  imagen lateral específicos de Admisión.
- Con un formulario seleccionado. El fallback preserva la composición visual para edición
  y preview, pero no envía datos.
- En templates que carguen `css/main.css` y `js/main.js`: `module.css` y `module.js` están
  vacíos. El CSS compartido define layout, mascota, tarjeta, inputs de fallback y seis
  breakpoints; el JS compartido maneja reveal y contiene el listener común de fallback.
- Como una instancia por página: el ID `actua` es fijo y los selectores JS usan
  `document.querySelector(".apo-form, .adm-form")`, que solo devuelve la primera.
- Como módulo `page-specific` con configuración propia. Una reutilización fuera de
  Admisión requiere justificar promoción a `reusable` y revisar el asset/estructura.

## Cuándo no usar

- No publicar como captación sin seleccionar un formulario y probar envío, consentimiento,
  respuesta/redirección y llegada al CRM. El respaldo visual no es operativo.
- No asumir que los inputs generados por HubSpot recibirán el estilo del fallback: las
  reglas actuales apuntan a descendientes directos de `.adm-form-card`; la spec mantiene
  pendiente igualar el embed real al diseño aprobado.
- No sustituir automáticamente por `apoyos-formulario` (score 0.760). Ambos usan field
  `form`, pero las firmas divergen: Admisión tiene `grupo_visibilidad.mostrar_flecha` y
  `grupo_imagen.mascota`; Apoyos usa `grupo_imagen.image`. Cambian raíz, clases, fallback,
  asset y responsive. `oferta-form` es aún menos compatible: no usa field `form` ni envía.
- No duplicarlo en la página: repetiría `id="actua"`; el JS compartido solo selecciona la
  primera sección de formulario.
- No usarlo para cubrir la asesoría lógica pendiente. Esa relación pertenece a
  `apoyos-asesoria`, con contenido/configuración de Admisión.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `¡Estás en el primer paso!` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Inicia tu proceso aquí` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Llena el formulario de solicitud y cuando finalices te llevará al siguiente paso para continuar con el proceso.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_flecha` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `grupo_imagen` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_imagen.mascota` | `image` | no | `{"alt":"Leonel, mascota Anáhuac","src":""}` | `null` | no | `grupo_imagen` |
| `grupo_formulario` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_formulario.formulario` | `form` | no | `{"form_type":"HUBSPOT","form_type_display":"HUBSPOT","gotowebinar_webinar_key":null,"message":"Gracias por enviar el formulario.","response_type":"inline"}` | `null` | no | `grupo_formulario` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

- **`metadata`.** Duro: familia `formulario` y capacidades `contenido-introductorio`,
  `fallback-estatico`, `formulario-hubspot` e `imagen-mascota`. La ausencia de
  `formulario-hubspot` corta la cadena: no hace lo mismo. `estado: Approved`,
  `tier: page-specific`, `meta.global: false`; categories/content types son aditivos y el
  tier solo cambia mediante decisión de alcance.
- **`fields`.** Duro: 19 paths exactos, todos opcionales y no repetibles. Los cinco groups
  raíz (`grupo_contenido`, `grupo_visibilidad`, `grupo_imagen`, `grupo_formulario`,
  `grupo_estilos`) son single. `grupo_formulario.formulario` es `form` con default
  `form_type=HUBSPOT`, `response_type=inline`, mensaje y webinar null;
  `grupo_imagen.mascota` es `image`; `mostrar_flecha` es boolean. Cambiar path, tipo,
  required o repetición es bloqueante. Los defaults cuentan en la firma del generador,
  aunque un cambio puramente editorial no equivale por sí solo a incompatibilidad.
- **`html`.** Duro: `section.adm-form.section-pad#actua > .container >
  .adm-form-layout`, con `.adm-form-mascot > img` y `.adm-form-content` que contiene
  `.section-intro.reveal[data-reveal]` más `.adm-form-card.reveal[data-reveal]`. El bloque
  operativo es el tag `{% form %}` condicional; el fallback conserva exactamente dos
  inputs, textarea, label/checkbox y button, pero sin `<form>`. Raíz, jerarquía y clases
  alimentan CSS/JS compartidos y son contrato duro.
- **`css`.** `module.css` vacío: todos los selectores AUTO viven en `main.css`. Una brecha
  `falta selector:` o responsive obliga a editar CSS transversal y es bloqueante. La
  configuración permitida se limita a `--admision-form-bg` y
  `--admision-form-text`; el resto usa tokens del theme.
- **`js/hooks`.** `module.js` vacío. `js/main.js` observa `[data-reveal]` y selecciona la
  primera `.apo-form, .adm-form` para interceptar `submit`. Ese listener sirve solo si hay
  un evento submit; el fallback actual carece de `<form>`, mientras el embed seleccionado
  lo controla HubSpot. Añadir/cambiar hooks exige revisar ambos formularios y es
  bloqueante.
- **`variantes`.** Ninguna declarada. Mascota, flecha y colores son configuración, no
  variantes. Una variante futura se añade sin reescribir el contrato y se registra.
- **`responsive`.** Seis breakpoints observados en `main.css`: 90em, 73.75em, 68.75em,
  48em, 40em y 29.6875em. Ajustan columnas, orden, altura/posición/tamaño de la mascota y
  tipografía. Todos son compartidos; cualquier gap responsive es bloqueante.
- **`assets`.** Fallback físico
  `images/oferta-academica/formulario/leonel-formulario-1.png`, resuelto con
  `get_asset_url`; el field `grupo_imagen.mascota` puede sustituirlo. Perder el asset deja
  la columna visual sin respaldo; cambiarlo es adaptable si se conserva formato admitido,
  ruta válida y `alt`.
- **`dependencias`.** `css/main.css` y `js/main.js`, cargados por el template, no por
  `require_*`. CSS es obligatorio; JS aporta reveal y el intento de feedback del fallback.
  El formulario real depende además del runtime de HubSpot generado por `{% form %}`.
- **`paginas`.** Uso observado: `Proceso de admisión`. Está en `dnd_area`, por lo que el
  contenido tiene snapshot por página; cambios en `module.html`, `main.css` o `main.js`
  impactan todas las páginas que lo usan. `apoyos-formulario` comparte CSS/JS conceptual,
  así que cualquier ajuste transversal exige revisar también Apoyos. La asesoría lógica
  anterior reutiliza `apoyos-asesoria`; no crea un módulo número 35.

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
{% dnd_module path="../modules/admision-formulario" %}
{% end_dnd_module %}
```
