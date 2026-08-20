# CHANGELOG del design system

Registro de cambios al sistema (componentes, tokens, variantes, efectos, patrones).
Toda promoción a documento base (ver `docs/change-protocol.md`) se anota aquí. Lo más reciente arriba.

---

## 2026-08-20 — Foráneos: filtros móviles, asesoría y admisión

- El filtro de categorías del mapa cambia de píldoras a `select` por debajo de
  640px; el campus conserva dos pestañas visibles. Ambos controles comparten el
  mismo estado y el menú del `select` se eleva sobre las tarjetas animadas.
- El mapa pagina en bloques de 10 tarjetas en escritorio y de 3 en móvil; al
  cambiar campus o categoría vuelve al primer bloque.
- `¿De dónde nos contactas?` reutiliza la composición visual de
  `support-advisor`: banda naranja punteada, texto blanco de display y tarjeta
  vertical del asesor.
- Las tarjetas dobles de Comunidad foránea y «¿Quién es foráneo?» se apilan en
  una sola columna por debajo de 900px; el breakpoint iguala la especificidad de
  la retícula base para evitar que la segunda tarjeta quede recortada.
- Las cuatro tarjetas de «Mucho más que solo una Universidad» incorporan una
  variante local de *stacking cards* en móvil: cada tarjeta queda sticky y la
  siguiente se superpone durante el scroll. La lista normal se conserva con
  movimiento reducido o en viewports menores a 560px de alto; dentro del efecto
  se compactan imagen, padding y separación para mantener el contenido visible.
- La auditoría móvil completa corrige dos desbordes locales: las razones de CDMX
  pasan de ancho fijo al ancho de su contenedor cuando la composición se apila,
  y la ficha horizontal del asesor recupera el ancho intrínseco de su foto entre
  661 y 900px. Se verificó sin recortes entre 320 y 900px. El aviso del trámite
  migratorio conserva además `--space-9` antes de la lista de pasos; una regla
  compartida del acordeón anulaba por especificidad el margen previsto.
- El módulo `Proceso de admisión` elimina el calificativo «para foráneos», deja
  un solo párrafo introductorio y renombra el acordeón internacional como
  «Si vienes de otro país recuerda tu trámite migratorio».
- Alcance local: no se publicaron cambios ni se modificó el theme de HubSpot.
- Origen: revisión humana recibida el 2026-08-20.

## 2026-08-04 — HubSpot: arranca la migración de Proceso de admisión

- Spec completa en `specs/proceso-de-admision-hubspot.md`: 9 módulos, campos por
  módulo y consideraciones técnicas. Módulos **3 (fechas)** y **8 (asesoría)**
  congelados por decisión del cliente.
- Decisiones del cliente (2026-08-04): iconos por **subida libre** con el SVG del
  design system como default; vídeo por **YouTube**; la asesoría **se reutiliza**
  de `apoyos-asesoria` con un `mostrar_preparatoria`, no se duplica.
- **Trabajo previo.** 8 imágenes webp → JPEG (750 KB → 684 KB). Token `--size-60`.
- **El CSS no se anexó completo.** De sus 141 selectores, 87 ya estaban en el
  theme (los componentes compartidos llegaron con Apoyos) y en 8 la versión del
  theme era la nueva, con los hooks `--support-*`. Anexar todo los habría pisado.
  Nuevo `scripts/hs-extraer-css-nuevo.mjs` anexa solo las 54 reglas nuevas.
- **El JS no necesitó bloques nuevos**: timeline, propedéuticos y asesoría ya
  estaban, y la asesoría del theme es la versión más reciente. Solo se generalizó
  el manejador de formulario, que cubría `.apo-form` pero no `.adm-form`.
- Construidos los **7 módulos** (211 campos) y la plantilla
  `templates/proceso-de-admision.html` («Proceso de admisión — Anáhuac»):
  `admision-hero` (27), `admision-pasos` (56), `admision-cta` (26),
  `admision-propedeuticos` (36), `admision-siguiente-paso` (29),
  `admision-faq` (18) y `admision-formulario` (19).
- **Fuera por decisión del cliente:** Fechas de exámenes (espera HubDB) y
  Asesoría (reutiliza `apoyos-asesoria`, no se duplica).
- En Pasos, el número del dot y los `data-step`/`data-panel` se generan con
  `loop.index`: en la maqueta estaban escritos a mano y editar el listado habría
  desincronizado la línea de tiempo.
- Los hooks de las clases compartidas con Apoyos (`.step-dot`, `.siguiente-card`,
  `.faq-item`, `.prop-tab`) van acotados con el prefijo de sección `.adm-*` para
  no afectar a la página de Apoyos.

## 2026-07-31 — HubSpot: color de texto por campo

- Cada campo de texto plano expone ahora su propio **«Color de texto de «x»»**,
  justo debajo de su selector de etiqueta HTML. 65 campos en los 9 módulos.
- Vacío = manda el CSS del design system: el HubL solo emite `style="color:…"`
  cuando el campo trae valor, así que el render por defecto no cambia.
- Cuando el texto vive dentro de un contenedor que hay que conservar (`dt`,
  `dd`, `summary`, enlaces) y no se eligió etiqueta, se envuelve en un `<span>`
  **solo si hay color**, para no meter marcado de más.
- Los colores de sección siguen existiendo para fondos, botones, iconos y
  superficies de tarjeta; el color por campo tiene prioridad sobre ellos.
- Origen: solicitud de Marketing del 2026-07-31.

## 2026-07-31 — HubSpot: el color de texto ya alcanza a todo el contenido

- Auditoría: **81 declaraciones de color eran fijas** e ignoraban el campo
  «Color de texto». El caso peor era Asesoría, con `h2` y párrafo forzados a
  blanco: su campo no hacía prácticamente nada.
- Todo texto de contenido de los 9 módulos pasa ahora por un hook
  `--support-*` / `--financing-*` con el token actual como respaldo: con el
  campo vacío el diseño no cambia.
- La regla global `.section-intro > p:not(.tagline)` pisaba el color heredado en
  los 9 módulos; se acotó a las secciones `.apo-*` con `color: inherit` para no
  tocar el resto del sitio.
- Financiamiento suma 6 campos de color (tarjeta, etiquetas, píldora, botón) y
  Asesoría 1 (tarjeta de asesor), que antes no eran configurables.
- Quedan fijos a propósito: controles de formulario (`.cselect`, selects), el
  número sobre el círculo naranja de los pasos, los indicadores «+» y los
  iconos. No son texto editorial y recolorearlos rompería el contraste.

## 2026-07-31 — HubSpot: correcciones de render en los módulos apoyos-*

- **Móvil · desbordamiento del Detalle.** `grid-template-columns: 1fr` no encoge
  por debajo del *min-content* de sus hijos: `.detalle-rango` con `white-space:
  nowrap` («Reembolso de inscripción») ensanchaba el track a 365 px dentro de un
  contenedor de 310 px. Ahora `minmax(0, 1fr)` y el rango envuelve en su fila.
- **Móvil · imágenes.** Dos causas: el CSS de las fotos de asesor usaba rutas
  relativas que HubSpot reescribe a `hub_generated/…` (404) — ahora se inyectan
  con `get_asset_url` como custom property; y el JS del acordeón traía
  hardcodeada la ruta local `assets/apoyos-economicos/` de la maqueta — ahora la
  deriva del `src` que ya resolvió HubSpot.
- Repuestas las 9 imágenes `apoyo-*.jpg`: las usa ese JS (`BASE + item.id`), no
  estaban referenciadas en el HubL y las había retirado por creerlas sin uso.

- **Etiqueta vacía.** Los `*_tag` nuevos llegan vacíos en items de repeater ya
  guardados (HubSpot solo rellena defaults a nivel de módulo). El HubL emitía
  `<>` y el navegador se comía el resto de la tarjeta. Las 76 sustituciones
  llevan ahora `|default('<etiqueta>', true)`.
- **Macro `et()` eliminado.** Un macro invocado con un atributo inexistente
  tumbaba el módulo completo — imagen incluida — porque HubSpot no imprime nada
  ante un error de ejecución. Sustituido por 27 condicionales en línea; ningún
  módulo estable del theme usa macros.
- **`choices` con valor vacío** (27 campos) → `"ninguna"`; valor no estándar.
- **`sorting_label_field`** (7 repeaters) → `null`, como en `oferta-areas`.
- **Repeaters aplanados a nivel raíz** (los 8). Anidados dentro de un grupo y
  con array de `default`, el editor guardaba el repeater vacío en la primera
  edición y se perdían todos los items. Los 18 repeaters en producción del
  theme están a nivel raíz; ahora los nuestros también, con `min: 0`.
- **Imágenes**: el Design Manager descarta `.webp`; convertidas a JPEG/PNG y
  redimensionadas (1.8 MB → 765 KB).
- **Indicador «+» del acordeón de Detalle** siempre alineado a la derecha: el
  espacio libre lo absorbe ahora `.detalle-nombre` (`flex: 1 1 auto`) en vez
  del `margin-left:auto` del rango, que desaparecía al ocultar el porcentaje.
  En móvil ya era correcto (el «+» es una columna del grid).
- Verificado descargando el HTML servido del preview: 0 etiquetas rotas,
  0 errores de HubL, 0 imágenes rotas, las 8 fichas y las 8 tarjetas completas.

## 2026-07-31 — HubSpot: control editorial de etiquetas, colores y visibilidad

- **65 de los 68** campos de texto plano exponen un selector de **etiqueta HTML**
  (`h1`–`h6` o `p`) que no altera el estilo visual. Cuando el texto vive dentro
  de un contenedor que debe conservarse (`dt`, `dd`, `summary`, enlaces), el
  selector lo *envuelve* y trae «Ninguna» por defecto; una regla de herencia en
  `main.css` evita que el elemento elegido cambie el diseño.
- Quedan fuera 3 campos a propósito: el `ancla` de cada ficha (es un `id`, no
  texto) y las dos etiquetas `<label for>` de los selectores de Asesoría
  (convertirlas en encabezado rompería la asociación con el `<select>`).
- Los 9 módulos exponen color de fondo y color de texto de sección.
- Nuevo grupo **Estilos** (pestaña STYLE del editor) por módulo: color de fondo,
  de texto y, donde aplica, de botones e iconos. Vacío = token del design system.
- Nuevo grupo **Visibilidad** en Panorama, Detalle, Financiamiento y
  Consideraciones: oculta datos sin borrar su contenido.
- El porcentaje de Panorama y Detalle se puede ocultar y cambiar de tamaño desde
  una lista cerrada de tokens (`--size-22` … `--size-48`).
- El CSS expone `--support-*` por sección con *fallback* al token, así el render
  por defecto no cambia y los campos solo sobreescriben lo que se llene.
- Los cambios son **aditivos**: no se renombró ni eliminó ningún campo, para no
  perder contenido ya capturado en páginas.
- Origen: revisión humana de Marketing recibida el 2026-07-31.

## 2026-07-30 — HubSpot: módulos de Apoyos Económicos y tokens nuevos

- Se materializan en el theme `anahuac-mexico` (portal 3807214) los 8 contratos
  de la LP más el formulario: `apoyos-hero`, `apoyos-panorama`, `apoyos-detalle`,
  `apoyos-financiamiento`, `apoyos-consideraciones`, `apoyos-pasos`, `apoyos-faq`,
  `apoyos-asesoria` y `apoyos-formulario`.
- Header y footer **reutilizan** los módulos globales existentes (`encabezado`,
  `pie-de-pagina`): no se creó ninguno nuevo.
- Plantilla `templates/apoyos-economicos.html` (`templateType: page`), con los 9
  módulos precargados en un `dnd_area` reordenable desde el editor.
- El CSS y el JS de la LP se integran a `css/main.css` y `js/main.js` del theme,
  no a `module.css` por módulo (convención vigente del theme).
- Tokens de tamaño añadidos: `--size-15`, `--size-19`, `--size-36`, `--size-48`,
  `--size-52`, `--size-56`, `--size-58`, `--size-70`.
- Tokens de color añadidos: `--orange-hover`, `--text-invert-85`,
  `--text-invert-70`, `--purple-tint`, `--surface-tint-soft`.
- `adapters/hubspot/theme/` queda como espejo versionado del theme del portal.
- Origen: solicitud de migración a HubSpot recibida el 2026-07-30.

## 2026-07-30 — support-advisor: cascada de procedencia y preparatoria

- El primer selector se limita a `Extranjero` y `México`.
- El segundo selector carga países o las 32 entidades federativas según la procedencia.
- Se documenta un tercer selector condicional de preparatoria para Ciudad de México y Estado de México.
- El tercer selector permanece oculto en la carga inicial y solo se revela tras una selección explícita de estado.
- La carga inicial no precarga `Ciudad de México`: el segundo selector arranca en el primer estado del catálogo.
- El contrato separa `origins`, `countries`, `states` y `schoolsByState` para permitir su sustitución futura por HubDB.
- La relación institucional completa de preparatorias permanece pendiente de aprobación.
- Origen: revisión humana del módulo de Asesoría recibida el 2026-07-30.

## 2026-07-30 — componentes: contratos de Apoyos Económicos

- Documentados ocho contratos neutrales para la LP: hero, panorama, detalle, financiamiento, consideraciones, pasos, FAQ y asesoría.
- Definidos los campos editables, controles de visibilidad, repeaters y límites solicitados para la futura migración a HubSpot.
- `support-steps` incorpora un disclaimer opcional para concursos académicos y navegación generada desde el número real de pasos.
- `support-advisor` conserva una interfaz de datos reemplazable para una futura fuente HubDB.
- La semántica aprobada mantiene una sola H1, H2 por módulo, H3 por tarjeta y controles `details/summary` sin headings inválidos dentro de `summary`.
- Origen: revisión humana e instrucciones de contenido recibidas el 2026-07-30.

## 2026-06-08 — token: ingesta inicial de Figma UI Kit

- **Tokens poblados** desde el Figma UI Kit (`Xn92P26S9mq9xYsHyoPUjz`):
  - Colores primarios: Naranja Anáhuac (#FF5900), Café Anáhuac (#6B3F23), Negro, Blanco.
  - Colores secundarios: escala morada monocromática (5 tonos: Jacarta → Biloba Flower).
  - Colores de acento: Cinnabar, School bus Yellow, Denim, Grape, Korma, Tuatara.
  - Colores de sistema: Black Web (#0C1115), Texto (#788592).
  - Tipografía heading: Zilla Slab (alternativa open-source de Sharp Slab).
  - Tipografía body: Roboto.
  - Escala tipográfica: H1 (75px) → H6 (18px) + Párrafo (16px) + Frase (37px italic) + Botones.
  - Radios: 10px (botones), 20px (estándar), 40px (secciones).
  - Escala de espaciado: 14 niveles (4px → 120px).
- **Foundations** pobladas: container 1280px, nav-height 80px, breakpoints desktop/tablet/mobile.
- **Interactions** documentadas: scroll reveal, counter animado, hover effects, motion tokens.
- Documentos actualizados: `design/01-tokens.md`, `design/02-foundations.md`, `design/interactions.md`, `design/assets.md`.
- Origen: ingesta Figma (onboarding).

## 0.3.0 — memoria del proyecto
- `MEMORY.md`: continuidad entre agentes/sesiones/modelos (decisiones, estado, preferencias, aprendizajes, preguntas abiertas).
- Da a modelos no-Claude la memoria persistente que Claude tiene nativa, pero compartida en git.
- Alcance delimitado para no duplicar CHANGELOG/inventory/specs; con disciplina de curación y tope de tamaño.
- Integrado en AGENTS.md (lectura + regla), workflow, onboarding (Paso 5) y human-review.

## 0.2.1 — adaptador Antigravity
- `GEMINI.md` (adaptador delgado → `AGENTS.md`) para Google Antigravity, que prioriza `GEMINI.md` sobre `AGENTS.md`.
- Verificado: Antigravity lee `AGENTS.md` nativo (v1.20.3+, límite 12k chars; el nuestro = 5.9k) y soporta Figma vía MCP → el gate por capacidad aplica sin cambios.

## 0.2.0 — gate Figma-MCP-first + reglas de calidad
- Gate de readiness (`docs/readiness.md` + `scripts/check-readiness.mjs`): no se construye sin Figma ingestado (`status.figmaIngested`), sin `TODO` en tokens ni `[PLACEHOLDER]`.
- Figma obligatorio: el agente que corre el sistema hace la ingesta; sin acceso, se detiene.
- Gate **por capacidad, no por tool**: vale cualquier integración de Figma (Dev Mode MCP `get_*`, o `use_figma`/`figma-use`, etc.). Descubierto al validar en Codex, que usa un MCP de Figma distinto al Dev Mode.
- Tipografía: tokens `--font-heading`/`--font-body` + escala obligatoria; lint contra font literal.
- Imágenes: política de pertinencia + placeholders que rompen CI.
- Ritmo vertical + `--nav-height` (safe-area del hero) para evitar recortes.

## 0.1.0 — framework template
- Estructura inicial del framework (núcleo neutral + adapters + roles + onboarding + enforcement).
- Sin tokens ni componentes de proyecto: estado de clean install. Se pueblan en el onboarding (ver `START-HERE.md`).
