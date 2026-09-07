# `admision-faq`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-faq.module` |
| Label HubSpot | Admisión · Dudas frecuentes — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `faq` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `acordeon-nativo`, `enlaces-en-respuesta`, `preguntas-repetibles`, `respuestas-richtext` |
| Variantes verificadas | — |
| Notas curatoriales | FAQ con acordeón details/summary nativo; no depende de JS propio. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `apoyos-faq` — Comparten details/summary, repeater de preguntas y respuestas richtext; difieren en fields introductorios y hooks/clases.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`apoyos-faq`](./apoyos-faq.md): score 0.876; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`; coincidencias: `familia:faq`, `acordeon-nativo`, `enlaces-en-respuesta`, `preguntas-repetibles`, `respuestas-richtext`, `category:BODY_CONTENT`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-faq`, `.section-pad`.
- Elementos: `details:1`, `div:3`, `dynamic:3`, `section:1`, `span:1`, `summary:1`.
- Estructura padre→hijo: `details>summary:1`, `div>details:1`, `div>div:2`, `div>dynamic:2`, `section>div:1`, `summary>dynamic:1`, `summary>span:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>details:1`, `section>div>div>details>summary:1`, `section>div>div>details>summary>dynamic:1`, `section>div>div>details>summary>span:1`, `section>div>div>dynamic:2`.
- Clases: `.adm-faq`, `.container`, `.faq-item`, `.faq-list`, `.reveal`, `.section-intro`, `.section-pad`, `.wide`.
- IDs: `#dudas`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-faq`, `.adm-faq .faq-item p`, `.adm-faq .faq-item p a`, `.adm-faq .faq-item summary`, `.adm-faq .section-intro`, `.adm-faq .section-intro h2`, `.adm-faq .section-intro p:not(.tagline)`, `.faq-item`, `.faq-item p`, `.faq-item summary`, `.faq-item summary > :where(h1, h2, h3, h4, h5, h6, p)`, `.faq-item summary::-webkit-details-marker`, `.faq-item summary::after`, `.faq-item summary:hover`, `.faq-item[open] summary::after`, `.faq-list`, `.section-intro.wide`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: —.
- Assets: —.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

FAQ de cierre del proceso de admisión. Presenta una introducción y hasta veinte preguntas
en un acordeón nativo; cada respuesta es `richtext`, por lo que puede contener formato y
enlaces sin añadir fields. Corresponde a `<section class="adm-faq" id="dudas">` de la
maqueta aprobada y está precargado en `templates/proceso-de-admision.html`, dentro del
`dnd_area`, inmediatamente antes de `admision-formulario`.

La exclusión entre respuestas abiertas no depende de JavaScript: todos los `<details>`
comparten `name="faq-dudas"`. El navegador mantiene una sola respuesta abierta. Las
animaciones de entrada de la sección sí dependen del mecanismo compartido
`[data-reveal]` de `js/main.js`; no hay lógica FAQ en ese archivo.

La arquitectura aprobada también contempla una sección lógica de asesoría entre FAQ y
formulario. Esa necesidad **no corresponde a un módulo físico `admision-asesoria`**:
`specs/proceso-de-admision-hubspot.md` ordena reutilizar
[`apoyos-asesoria`](./apoyos-asesoria.md), con contenido de Admisión y el selector de
preparatoria oculto. El template versionado hoy salta directamente de este FAQ al
formulario; esa ausencia es un hueco de integración, no autorización para crear un stub.

## Cuándo usar

- En Proceso de admisión o una página con preguntas breves que requiera una sola respuesta
  abierta, sin comportamiento JS específico.
- Con `preguntas` como repeater **de nivel raíz**, `occurrence` exacto
  `{min: 0, max: 20, default: 5}`. Cada item conserva `pregunta`, `pregunta_tag`,
  `pregunta_color` y `respuesta`; la respuesta admite enlaces mediante richtext.
- Cuando el template carga `css/main.css`. `module.css` está vacío y toda la presentación
  vive en la hoja compartida.
- Como instancia configurable por página: `tier: page-specific`, `meta.global: false`.
  Reutilizarlo fuera de Admisión exige revisar si debe promoverse a `reusable`; no se
  vuelve global por repetirse.

## Cuándo no usar

- No para varios paneles abiertos simultáneamente: el `name="faq-dudas"` común impone
  exclusión. Quitar o variar ese atributo cambia una capacidad contractual.
- No para respuestas de texto plano: `preguntas.respuesta` es `richtext`; cambiar su tipo
  rompe la firma y el contenido guardado.
- No como sustituto automático de `apoyos-faq`. El score 0.876 prueba similitud, no
  compatibilidad. Apoyos añade `eyebrow`, `.faq-answer`, `aria-labelledby="faq-title"` e
  `id="faq-title"`; también tiene defaults y firma distintos. La raíz `.apo-faq` y la
  jerarquía de respuesta no coinciden con `.adm-faq`.
- No para insertar la asesoría pendiente: esa sección reutiliza físicamente
  `apoyos-asesoria`; nunca se crea `admision-asesoria.md` ni
  `admision-asesoria.module`.
- No dos veces sin revisar IDs: `id="dudas"` es fijo. Dos instancias duplicarían el ancla;
  además compartirían el mismo grupo nativo `name="faq-dudas"` en todo el documento.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.heading` | `text` | no | `Dudas frecuentes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Resuelve tus dudas sobre el proceso de admisión en Anáhuac.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `preguntas` | `group` | no | `[{"pregunta":"¿Cuándo son los exámenes?","pregunta_tag":"ninguna","respuesta":"<p>Las fechas de examen se publican en nuestro calendario anual. Puedes elegir la que mejor se ajuste a tu preparación y disponibilidad.</p>"},{"pregunta":"¿Qué documentos necesito?","pregunta_tag":"ninguna","respuesta":"<p>Requerimos tu certificado de bachillerato, identificación oficial y comprobante de domicilio. Algunos programas como medicina solicitan documentación adicional.</p>"},{"pregunta":"¿Hay opciones para internacionales?","pregunta_tag":"ninguna","respuesta":"<p>Sí, contamos con un proceso especial para estudiantes internacionales que incluye evaluaciones de idioma y documentación adicional.</p>"},{"pregunta":"¿Cuánto cuesta estudiar aquí?","pregunta_tag":"ninguna","respuesta":"<p>Las colegiaturas varían según el programa que elijas. Ofrecemos becas y apoyos financieros para estudiantes calificados.</p>"},{"pregunta":"¿Cambia el proceso si quiero solicitar una beca?","pregunta_tag":"ninguna","respuesta":"<p>Comienza explorando nuestras licenciaturas en la oferta académica. Luego regístrate en el portal y prepara tu documentación.</p>"}]` | `{"default":5,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `preguntas.pregunta` | `text` | no | `¿Cuándo son los exámenes?` | `null` | no | `preguntas` |
| `preguntas.pregunta_tag` | `choice` | no | `ninguna` | `null` | no | `preguntas` |
| `preguntas.pregunta_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `preguntas` |
| `preguntas.respuesta` | `richtext` | no | `<p>Escribe aquí la respuesta.</p>` | `null` | no | `preguntas` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_pregunta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_respuesta` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_enlace` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

- **`metadata`.** Duro: familia `faq` y capacidades `acordeon-nativo`,
  `preguntas-repetibles`, `respuestas-richtext` y `enlaces-en-respuesta`. Si falta una
  capacidad requerida, no hace lo mismo. `estado: Approved`, `tier: page-specific` y
  `meta.global: false` son coherentes. Categorías/content types son extensibles de forma
  aditiva; promover el tier requiere decisión explícita.
- **`fields`.** Duro: los 19 paths y su firma. `preguntas` es el único repeater, a nivel
  raíz, con `occurrence` `{min:0,max:20,default:5}`; sus cuatro hijos son no-repeater.
  `preguntas.respuesta` debe seguir siendo `richtext`; `pregunta_tag` acepta
  `ninguna|h1..h6|p`. `grupo_contenido` y `grupo_estilos` son groups no repetibles. Ningún
  field es required. Renombrar, borrar, cambiar tipo/repetición/occurrence es bloqueante;
  fields nuevos solo opcionales y con default. Cambios de default son editoriales, aunque
  el generador los incluye en la firma comparada.
- **`html`.** Duro: raíz `section.adm-faq.section-pad#dudas`, seguida por `.container`,
  `.section-intro.wide.reveal[data-reveal]` y `.faq-list.reveal[data-reveal]`; dentro del
  repeater, `details.faq-item[name="faq-dudas"] > summary + respuesta richtext`. El
  `name` uniforme sostiene la exclusión nativa. `.adm-faq`, `.faq-item`, `.faq-list` y
  `.section-intro.wide` tienen consumidores CSS. El ID es ancla fija y limita a una
  instancia. Cambiar raíz o jerarquía es bloqueante.
- **`css`.** `module.css` está vacío. Todos los selectores del AUTO, incluidas las reglas
  de `summary`, `[open]`, respuestas y enlaces, vienen de `theme/css/main.css`; cualquier
  `falta selector:` es bloqueante por origen compartido. Las cinco custom properties
  `--admision-faq-*` son la superficie de configuración prevista.
- **`js/hooks`.** No hay hooks FAQ ni dependencia JS declarada. `[data-reveal]` sí es un
  hook genérico de `js/main.js`, aunque el perfil no lo atribuye como dependencia propia;
  renombrarlo elimina la animación. El acordeón sigue funcionando sin JS.
- **`variantes`.** No hay variantes verificadas. Añadir una debe ser aditivo, declararse
  en el registry y conservar el contrato base; no se infiere una variante por cambiar
  colores o etiquetas.
- **`responsive`.** El generador no observa media queries específicas del módulo. El
  comportamiento estrecho depende de reglas base compartidas y del flujo nativo de
  `details`; una nueva regla en `main.css` tendría impacto transversal y es bloqueante.
- **`assets`.** No hay assets de theme ni fields de imagen. Exigir iconos o multimedia
  sería una ampliación estructural, no compatibilidad automática.
- **`dependencias`.** `css/main.css` es obligatoria para el render aprobado. No hay
  `require_css`, `require_js` ni JS propio; la carga depende del template. `js/main.js`
  aporta únicamente reveal.
- **`paginas`.** Uso observado: `Proceso de admisión`, en el `dnd_area` del template.
  Cada página conserva su snapshot de contenido; editar el módulo o `main.css` afecta a
  todas las páginas que lo usen. La relación lógica de asesoría se resuelve por
  `apoyos-asesoria` y no amplía el inventario físico.

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
{% dnd_module path="../modules/admision-faq" %}
{% end_dnd_module %}
```
