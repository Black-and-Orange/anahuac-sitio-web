# Spec de migración a HubSpot — Proceso de admisión

Fuente: `proceso-de-admision.html` (aprobada) + `proceso-de-admision.css` + `proceso-de-admision.js`.
Destino: theme `anahuac-mexico`, portal **3807214**.

**No es un rediseño.** El HTML/CSS actual se conserva; solo se sustituyen los
valores fijos por campos del editor. Con todos los campos vacíos el render debe
ser idéntico al de la maqueta.

## Convenciones heredadas de Apoyos Económicos

Estas ya están probadas en producción y son obligatorias aquí (ver
`adapters/hubspot/README.md`):

| Regla | Motivo |
|---|---|
| Repeaters **a nivel raíz** de `fields.json`, `occurrence.min: 0` | Anidados pierden todos sus items en la primera edición |
| Nada de `{% macro %}` | Un macro que falla deja el módulo entero en blanco |
| `<{{ x_tag\|default('h3', true) }}>` siempre con respaldo | Un tag vacío emite `<>` y rompe el marcado |
| CSS y JS en `css/main.css` y `js/main.js`; `module.css` vacío | Convención del theme |
| Imágenes en JPEG/PNG, nunca `.webp` | El Design Manager descarta los webp en silencio |
| Rutas de imagen vía `get_asset_url`, nunca relativas en CSS ni fijas en JS | HubSpot reescribe las rutas del CSS y rompe las relativas |
| Campos aditivos: no renombrar ni borrar | Evita perder contenido ya capturado |

## Patrón común a todos los módulos

Cada texto plano lleva **tres campos** juntos, como en Apoyos:

1. El texto (`text`)
2. `<campo>_tag` (`choice`: h1–h6 / Párrafo, o «Ninguna» cuando va dentro de un
   contenedor que hay que conservar) — cubre *«título semántico o solo texto visual»*
3. `<campo>_color` (`color`, vacío = color del CSS)

Y cada módulo lleva:

- `mostrar_flecha` (`boolean`, default `true`) → controla el `<span></span>` decorativo
  dentro de `.tagline`, que es la flecha superior de los títulos.
- Grupo **Estilos** (pestaña STYLE): fondo, texto y, donde aplique, botones e iconos.

---

## Módulo 1 · `admision-hero`

**Nombre:** Admisión · Hero — Anáhuac
**HTML:** `<section class="adm-hero">` (líneas 112–128)

| Campo | Tipo | Controla |
|---|---|---|
| `eyebrow` + `_tag` + `_color` | text · choice · color | `<p class="tagline">Admisiones</p>` |
| `mostrar_flecha` | boolean | `<span></span>` dentro de `.tagline` |
| `heading` + `_tag` + `_color` | text · choice · color | `<h1>Tu camino comienza aquí</h1>` |
| `texto_panel` | richtext | `<div class="hero-card"><p>…</p></div>` |
| `imagen` | image | *(el hero de admisión no lleva imagen; se omite)* |
| `mostrar_botones` | boolean | `<div class="button-row">` completo |
| `botones` (repeater, máx. 2) | group | los dos `<a class="btn">` |
| ↳ `texto` + `_tag` + `_color` | text · choice · color | texto del botón |
| ↳ `enlace` | link | `href` |
| ↳ `estilo` | choice (Oscuro/Claro/Naranja) | `btn-dark` / `btn-light` / `btn-orange` |

**Estilos (STYLE):**

| Campo | Tipo | Controla |
|---|---|---|
| `color_panel_fondo` | color | `.adm-hero .hero-card { background: var(--purple-2) }` ← **el bloque morado** |
| `color_panel_texto` | color | texto dentro de `.hero-card` |
| `color_fondo` | color | fondo de la sección |
| `color_texto` | color | texto de la sección |
| `tamano_texto_panel` | choice (tokens `--size-*`) | `font-size` de `.hero-card p` |
| `color_boton_fondo` / `color_boton_texto` | color | botones |

**Consideraciones técnicas**

- El «bloque morado» es `.adm-hero .hero-card`, medido en navegador: `rgb(93,66,140)` = `--purple-2`.
  No es el fondo de la sección, que es blanco.
- El tamaño de texto se expone como **lista cerrada de tokens**, no valor libre, para
  no romper la escala tipográfica (igual que el porcentaje en Apoyos).
- El H1 de la página vive aquí: el `help_text` debe advertirlo.

---

## Módulo 2 · `admision-pasos`

**Nombre:** Admisión · Pasos del proceso — Anáhuac
**HTML:** `<section class="adm-steps">` (líneas 131–267)

Es el módulo más complejo: una línea de tiempo (`.steps-timeline`) sincronizada con
paneles (`.step-panels`) mediante `data-step` / `data-panel`.

**Repeater `pasos` (raíz, min 0, máx ~12), un item = un paso completo:**

| Campo | Tipo | Controla |
|---|---|---|
| `etiqueta_dot` + `_color` | text · color | `<span class="step-label">Inicia tu solicitud</span>` |
| `indicador` + `_tag` + `_color` | text · choice · color | `<span class="step-tag">Paso 1</span>` |
| `titulo` + `_tag` + `_color` | text · choice · color | `<h3>` del panel |
| `descripcion` | richtext | `.step-desc`, `<ol>`, `<ul class="step-doclist">`, `<ol class="step-numlist">` |
| `nota` + `_tag` + `_color` | text · choice · color | `<p class="step-note">*Dependiendo de la carrera…</p>` |
| `mostrar_tiempo` | boolean | `<p class="step-time">` completo |
| `etiqueta_tiempo` + `_color` | text · color | «Tiempo estimado:» |
| `tiempo` + `_color` | text · color | `<strong>5 min.</strong>` |
| `mostrar_enlace` | boolean | `<a class="step-link">` |
| `enlace_texto` + `_color` / `enlace` | text · color · link | «Consultar próximas fechas ›» |
| `mostrar_cta` | boolean | `<div class="button-row">` del panel |
| `cta_texto` + `_tag` + `_color` / `cta_enlace` | text · choice · color · link | `<a class="btn btn-dark">` |
| **`tipo_media`** | choice (Imagen / Video) | qué se pinta a la derecha |
| ↳ `imagen` | image | `<img src="…pasos-de-admision-img-N.webp">` |
| ↳ `video_id` | text | id de YouTube → `data-yt-id` |
| ↳ `video_poster` | image | miniatura previa al play |

**Contenido del módulo:** `eyebrow`, `mostrar_flecha`, `heading`, `intro` (los tres con
`_tag` y `_color`) sobre `.section-intro`.

**Estilos:** `color_fondo` (hoy `var(--gray)`), `color_texto`, colores del dot activo
e inactivo (`.step-dot`, `.step-num`, `.step-label`), color del botón.

**Consideraciones técnicas**

- **La numeración se genera sola.** Hoy el `1..6` está escrito a mano en
  `<span class="step-num">`. En el módulo debe salir de `{{ loop.index }}`, si no
  agregar o borrar un paso desordena la línea de tiempo.
- `data-step` y `data-panel` también salen de `loop.index0`. `proceso-de-admision.js`
  los empareja por índice: si no coinciden, los tabs dejan de funcionar.
- Las clases `.step-dot`, `.step-panel`, `.active` las consume ese JS: **no renombrar**.
- El JS de la maqueta hay que portarlo a `js/main.js` del theme, igual que se hizo
  con el bloque de Apoyos.
- **El campo multimedia flexible es la parte nueva.** El theme ya trae el patrón de
  YouTube diferido (`[data-yt-id]` + `.video-play-btn`, `js/main.js:506`), así que
  el vídeo se resuelve con un `text` para el id y el poster como `image` — sin
  iframes que carguen de entrada. Se recomienda **no** usar `videoplayer` (vídeo
  alojado en HubSpot) salvo que el cliente lo pida: el sitio ya usa YouTube.
- La descripción va en `richtext` porque los pasos mezclan párrafos, listas
  numeradas, listas con viñetas y sub-listas anidadas. Intentar modelar eso con
  repeaters daría un editor peor sin ganar nada.

---

## Módulo 3 · `admision-fechas` — **NO DESARROLLAR**

**HTML:** `<section class="adm-fechas">` (líneas 270–424)

Queda pendiente de la HubDB. Para esta migración:

- **No** se crean campos, ni tabla, ni lógica dinámica, ni estructura temporal.
- Se conserva el marcado tal cual, con el contenido estático actual, para no romper
  la página completa.

Cuando exista la HubDB deberá permitir: elegir en qué páginas aparece, administrar
fechas (alta/edición/baja), definir cuántas mostrar, editar cada tarjeta y
mostrar/ocultar y editar la acotación «15 hrs. horario CDMX».

---

## Módulo 4 · `admision-cta`

**Nombre:** Admisión · CTA solicitud — Anáhuac
**HTML:** `<section class="adm-cta">` (líneas 426–437)

| Campo | Tipo | Controla |
|---|---|---|
| `heading` + `_tag` + `_color` | text · choice · color | `<h2>Comienza tu solicitud hoy</h2>` |
| `texto` + `_tag` + `_color` | text · choice · color | `<p>El primer paso…</p>` |
| `mostrar_boton_1` / `mostrar_boton_2` | boolean | cada `<a class="btn">` por separado |
| `boton_1_texto` + `_tag` + `_color` / `boton_1_enlace` | text · choice · color · link | `.btn-orange` |
| `boton_2_texto` + `_tag` + `_color` / `boton_2_enlace` | text · choice · color · link | `.btn-outline` |

**Estilos:** `color_fondo` (hoy `var(--purple-1)`, medido `rgb(67,47,100)`),
`color_texto_principal` (el `h2`), `color_texto_secundario` (el `p`),
`color_boton_1_fondo`/`_texto`, `color_boton_2_fondo`/`_texto`.

**Consideraciones técnicas**

- El cliente pidió los dos botones **por separado**, no un repeater: aquí son dos
  roles distintos (primario naranja, secundario outline) y el orden importa.
- «Texto principal» y «secundario» del brief se mapean a `h2` y `p`.

---

## Módulo 5 · `admision-propedeuticos`

**Nombre:** Admisión · Cursos propedéuticos — Anáhuac
**HTML:** `<section class="adm-prop">` (líneas 440–504)

Dos pestañas (Medicina naranja / Música morada) con un panel cada una.

**Repeater `cursos` (raíz, min 1, máx 4):**

| Campo | Tipo | Controla |
|---|---|---|
| `tab_texto` + `_color` | text · color | `<button class="prop-tab">Medicina</button>` |
| `acento` | choice (Naranja / Morado) | `prop-tab--orange` / `--purple` y `prop-panel--orange` / `--purple` |
| `indicador` + `_tag` + `_color` | text · choice · color | `<span class="step-tag">Curso propedéutico…</span>` |
| `titulo` + `_tag` + `_color` | text · choice · color | `<h3>Curso pre ingreso a Medicina</h3>` |
| `descripcion` | richtext | `.step-desc` + `<ol class="step-numlist">` |
| `video_id` / `video_poster` | text · image | `.video-card` (imagen + botón play) |
| `mostrar_cta` | boolean | `<div class="button-row">` |
| `cta_texto` + `_tag` + `_color` / `cta_enlace` | text · choice · color · link | `<a class="btn">` |

**Visibilidad:** `mostrar_tabs` (`boolean`) — con una sola opción visible, oculta la
barra de pestañas y muestra el panel directamente. Cubre *«mostrar solamente una
opción / mostrar ambas»* sin borrar contenido.

**Estilos:** `color_fondo` (hoy `var(--gray)`), `tamano_titulo` y
`tamano_descripcion` (listas de tokens), colores de texto y descripción por tarjeta.

**Consideraciones técnicas**

- `data-prop` y `data-prop-panel` se generan con `loop.index0`, igual que en el módulo 2.
- El color de acento es un `choice` cerrado, **no** un color libre: naranja y morado
  son variantes aprobadas del design system y hay CSS específico para cada una
  (`.prop-tab--orange`, `.prop-panel--purple`, etc.).
- Si `mostrar_tabs` es falso y hay más de un curso, se pinta solo el primero.

---

## Módulo 6 · `admision-siguiente-paso`

**Nombre:** Admisión · Siguiente paso — Anáhuac
**HTML:** `<section class="adm-siguiente">` (líneas 507–540)

**Repeater `tarjetas` (raíz, min 0, máx 8):** sí permite agregar nuevas.

| Campo | Tipo | Controla |
|---|---|---|
| `icono` | **image** | `<svg class="siguiente-icon">` (vacío = SVG del design system) |
| `titulo` + `_tag` + `_color` | text · choice · color | `<h3>Fechas de examen</h3>` |
| `texto` + `_tag` + `_color` | text · choice · color | `<p>` de la tarjeta |
| `enlace_texto` + `_color` / `enlace` | text · color · link | `<a>Consultar ›</a>` |
| `mostrar` | boolean | oculta la tarjeta sin borrarla |

**Estilos:** `color_fondo` (hoy `var(--orange)`), `color_texto`,
`color_tarjeta_fondo`, `color_tarjeta_texto`, `color_icono`.

**Consideraciones técnicas**

- **Iconos por subida libre** (decisión del cliente, 2026-08-04). El campo es
  `image`; si queda vacío se pinta el SVG original del design system, así el
  diseño aprobado sigue siendo el default y nadie tiene que subir nada.
- **Contrapartida a tener presente:** los SVG actuales usan `fill="currentColor"`,
  así que el campo «Color del icono» los recolorea. Una imagen subida **no** se
  recolorea: manda el archivo. Conviene subir SVG (no PNG) para que escalen bien.

---

## Módulo 7 · `admision-faq`

**Nombre:** Admisión · Dudas frecuentes — Anáhuac
**HTML:** `<section class="adm-faq">` (líneas 543–572)

**Repeater `preguntas` (raíz, min 0, máx 20):**

| Campo | Tipo | Controla |
|---|---|---|
| `pregunta` + `_tag` + `_color` | text · choice · color | `<summary>` |
| `respuesta` | **richtext** | `<p>` dentro del `<details>` |

**Contenido:** `heading`, `intro` con sus `_tag` y `_color`.
**Estilos:** `color_fondo` (hoy `rgba(0,0,0,0.02)` = `--surface-tint-soft`),
`color_texto`, `color_respuesta`, `color_enlace_respuesta`.

**Consideraciones técnicas**

- La respuesta es `richtext`: cubre el requisito de **links dentro de la respuesta**
  sin campos extra.
- El acordeón usa `<details name="faq-dudas">` nativo: solo una abierta a la vez,
  sin JS. Al generarlo por repeater hay que **mantener el mismo `name`** en todos
  los items, si no dejan de excluirse.
- El color de los enlaces del richtext necesita su propio hook CSS
  (`.adm-faq .faq-item p a`), porque el richtext no hereda del campo de texto.

---

## Módulo 8 · `admision-asesoria` — **NO DESARROLLAR**

**HTML:** `<section class="adm-asesoria">` (líneas 575–614)

Pendiente de definición con el cliente. Se conserva el marcado actual.

**Decisión (2026-08-04): se reutiliza `apoyos-asesoria.module`, no se duplica.**

Comparadas ambas secciones, lo que difiere son solo campos **que el módulo ya
expone como editables**:

| Campo | Apoyos | Admisión |
|---|---|---|
| Tagline · etiqueta del selector · canales | idénticos | idénticos |
| H2 | «Te ayudamos a encontrar…» | «Te guiamos en tu proceso» |
| Párrafo | sobre apoyos | sobre admisión |
| Selectores | 3 (con preparatoria) | 2 (sin preparatoria) |

La única diferencia estructural es el tercer selector. Se resuelve con un campo
nuevo **`mostrar_preparatoria`** (`boolean`, default `true` = comportamiento
actual): Admisión lo apaga y usa el mismo módulo.

Pendiente menor: la etiqueta del módulo en el editor dice «Apoyos · Asesoría por
estado». Al reutilizarse conviene renombrarla a «Asesoría por estado — Anáhuac».
Cambiar el *label* es seguro; la ruta `apoyos-asesoria.module` se queda como está
para no romper la página de Apoyos.

---

## Módulo 9 · `admision-formulario`

**Nombre:** Admisión · Formulario — Anáhuac
**HTML:** `<section class="adm-form">` (líneas 616–641)

| Campo | Tipo | Controla |
|---|---|---|
| `eyebrow` + `_tag` + `_color` | text · choice · color | `<p class="tagline">¡Estás en el primer paso!</p>` |
| `mostrar_flecha` | boolean | `<span></span>` de `.tagline` |
| `heading` + `_tag` + `_color` | text · choice · color | `<h2>Inicia tu proceso aquí</h2>` |
| `intro` + `_tag` + `_color` | text · choice · color | `<p>Llena el formulario…</p>` |
| `mascota` | image | `<img src="…leonel-formulario-1.png">` |
| `formulario` | **form** | sustituye la maqueta `.adm-form-card` |

**Estilos:** `color_fondo`, `color_texto`.

**Consideraciones técnicas**

- La maqueta actual **no envía datos** (no hay `<form>`). Se sustituye por el campo
  nativo `form` para que los envíos lleguen al CRM, con la maqueta como respaldo
  visual si no hay formulario elegido — mismo criterio que en `apoyos-formulario`.
- Sigue pendiente el CSS que iguale los inputs de HubSpot al diseño aprobado; es el
  mismo tema abierto que en Apoyos y conviene resolverlo una vez para los dos.

---

## Resumen de entregables

| # | Módulo | Estado | Repeater |
|---|---|---|---|
| 1 | `admision-hero` | por construir | botones (máx 2) |
| 2 | `admision-pasos` | por construir | pasos |
| 3 | `admision-fechas` | **congelado** — espera HubDB | — |
| 4 | `admision-cta` | por construir | — |
| 5 | `admision-propedeuticos` | por construir | cursos |
| 6 | `admision-siguiente-paso` | por construir | tarjetas |
| 7 | `admision-faq` | por construir | preguntas |
| 8 | `admision-asesoria` | **congelado** — espera definición | — |
| 9 | `admision-formulario` | por construir | — |

Plantilla: `templates/proceso-de-admision.html`, con los 9 módulos precargados en un
`dnd_area` y header/footer globales (`encabezado`, `pie-de-pagina`) fuera de él.

## Trabajo previo obligatorio

1. **Convertir las imágenes** de `assets/proceso-de-admision/` (hoy `.webp`) a JPEG y
   redimensionarlas; el Design Manager rechaza webp en silencio. Son 6 imágenes de
   pasos + 2 de propedéuticos.
2. **Portar `proceso-de-admision.css`** con `scripts/port-css-a-theme.mjs`
   (px→rem, breakpoints→em, `font-size`→tokens) y anexarlo a `css/main.css`.
   Añadir los tokens de tamaño que falten.
3. **Portar `proceso-de-admision.js`** a `js/main.js`, revisando que no queden rutas
   locales `assets/…` hardcodeadas.

## Preguntas abiertas

- **Iconos del módulo 6:** ¿catálogo cerrado (recomendado) o subida libre de imagen?
- **Vídeo del módulo 2:** ¿YouTube (como ya usa el sitio) o vídeo alojado en HubSpot?
- **Módulo 8:** ¿reutilizar `apoyos-asesoria` o crear uno propio de admisión?
