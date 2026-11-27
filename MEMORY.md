# MEMORY.md — Memoria del proyecto

Estado y decisiones acumuladas del sitio que se construye. Es la **continuidad entre agentes, sesiones y modelos**:
ningún agente comparte memoria de chat, así que aquí vive el contexto persistente que **cualquiera** (Claude, Codex,
Antigravity…) lee al empezar y actualiza al avanzar. Versionado en git = memoria compartida y auditable.

---

## Estado actual
> Vivo (se sobrescribe). Qué está hecho, en progreso y lo siguiente.

- **Proyecto:** Sitio web institucional Universidad Anáhuac México — rediseño 2026.
- **Plataforma:** HubSpot (CMS Hub).
- **Fuentes configuradas:** Figma UI Kit, Figma Home, Figma Relume export.
- **Ingesta de Figma:** Completada y habilitada en `project.json`.
- **Tokens:** Colores, tipografía, espaciado y radios poblados en `design/01-tokens.md`.
- **Foundations:** Contenedor, breakpoints, nav-height y escala de espaciado en `design/02-foundations.md`.
- **Interactions:** Efectos base del Home documentados en `design/interactions.md`.
- **Componentes:** Ocho contratos de la LP Apoyos Económicos documentados; componentes generales del UI Kit y Home continúan pendientes.
- **Specs:** `specs/apoyos-economicos.md` documenta la versión local aprobada y el contrato para la futura migración a HubSpot.
- **Foráneos:** La revisión del 2026-08-20 fue publicada y la cascada completa
  de preparatoria del 2026-08-21 está versionada en `origin/main`. Los ajustes
  editoriales de costos, hospedaje y mapa de servicios solicitados el 2026-08-27
  están aplicados solo en la maqueta local y pendientes de revisión; no se han
  migrado a HubSpot.

### Siguiente paso
1. Revisar en local los ajustes editoriales de costos, hospedaje y mapa de servicios de Foráneos.
2. Completar la revisión humana de la versión local de Apoyos Económicos.
3. Confirmar el contenido definitivo de las fichas que aún contienen texto temporal.
4. Tras aprobación explícita, derivar los módulos HubSpot desde los contratos documentados.
5. Confirmar el mapeo institucional completo de preparatorias para CDMX y Estado de México.
6. Mantener asesoría con fuente local hasta definir la tabla y columnas de HubDB.

## Preferencias del proyecto
> Reglas/gustos específicos de este sitio que emergen y deben respetarse siempre.

- **Tipografía alternativa:** Sharp Slab es la tipografía oficial del brand (comercial); Zilla Slab es la alternativa de código abierto para uso digital. Usar siempre Zilla Slab en la implementación.
- **Font headings:** Zilla Slab (SemiBold 600 / Medium 500). Font body: Roboto (Regular 400).
- **Paleta principal:** Naranja Anáhuac (#FF5900) como brand primary; moradas como secundarias; negro/blanco como neutros.
- **Radio estándar:** 20px para tarjetas y elementos medianos; 10px para botones; 40px para secciones grandes.

## Decisiones

### 2026-09-25 — Ciencias de la Salud actualiza copy y nombre de carrera
- La revisión humana ajusta el claim del hero, la afinidad de ciencias, el
  momento de inicio de las prácticas clínicas, la acreditación de Medicina y
  el dato descriptivo de Médico Cirujano.
- «Cirujano Dentista» adopta el nombre «Médico Cirujano Dentista» en toda la
  página, incluidos datos estructurados y accesibilidad.
- Terapia Física y Biotecnología reciben nuevos ganchos y descripciones; la
  banda de experiencia clínica se enfoca en habilidades para la práctica
  profesional.
- El texto se aplica solo a la maqueta local y queda pendiente de revisión antes
  de cualquier publicación o migración a HubSpot.
- Origen: revisión humana del 2026-09-25.

### 2026-09-24 — Hospedaje abre con zonas y conserva ritmo simétrico
- «Zonas cercanas a tu campus» es el H2 de la sección de Hospedaje.
- Como el bloque de zonas ahora abre la sección, ya no conserva el margen que
  usaba al aparecer después del contenido; el padding vertical queda fijado en
  ambos extremos con `--space-11` para un ritmo más compacto.
- Origen: revisión humana del 2026-09-24.

### 2026-09-11 — BnO Review fase 2a: persistencia en Supabase, panel `/admin` y pin solo-lectura
- Fase 2a completada: migración de `localStorage` a Supabase para persistencia compartida.
- Base de datos: proyecto Supabase `gvnnhkectrnwhqkcrlar`, tabla `comments` con RLS habilitado
  (anon: INSERT/SELECT únicamente; authenticated: todas las operaciones).
- Configuración en `config.js`: `url` y `publishableKey` de Supabase + `storage:'supabase'`.
- Panel `/admin` accesible con Supabase Auth (usuario admin creado en el tablero de Supabase).
- Tarjeta de pin en la página es solo-lectura (sin edición desde el cliente).
- Deep-link `#comment=<id>` para scroll y highlight de comentarios específicos.
- **Seguridad:** la publishable key es pública por diseño; la seguridad real reside en RLS y
  autenticación del admin en Supabase, que controla cambios de estado y respuestas.
- Pendiente fase 2b: integración con ClickUp vía Edge Function + webhook (sincronización automática).

### 2026-09-10 — BnO Review: módulo drop-in para revisión visual con clientes
- Se creó el módulo `assets/review/` (BnO Review) para permitir comentarios
  visuales anclados a elementos del DOM durante la revisión con clientes.
- Fase 1 persiste en `localStorage` sin backend; el módulo está diseñado como
  drop-in replicable en otros proyectos de Black & Orange.
- Configuración centralizada en `config.js` (projectId, tokens, storage):
  todo lo específico del proyecto se edita en ese archivo único.
- **Anclaje estable:** selector CSS + fingerprint del elemento (nunca coordenadas);
  la UI se reposiciona automáticamente en resize y scroll.
- **Aislamiento:** toda la interfaz vive en Shadow DOM con prefijo de clases
  `bnor-` para evitar colisiones con el CSS del sitio.
- **Activación:** `?review=true&token=<uno de los tokens en config>` en la URL;
  sin ese parámetro, el módulo no carga (footprint cero).
- **Estados de comentario:** `pendiente | en-proceso | resuelto`.
- Fase 2 prevista: migrar a persistencia compartida (Supabase) con panel `/admin`
  global; interfaz `ReviewStore` (`list`, `create`, `update`) preparada para ese cambio.
- Pruebas: `npm test` corre la lógica pura (gate, anchor, selector, store) con
  `node --test + jsdom`; la UI se verifica en navegador.

### 2026-09-07 — Área Ciencias de la Salud: Hospital Virtual y Tips
- La fotografía de la tarjeta protagonista Hospital Virtual es ahora un
  carrusel de una imagen por vista que reutiliza el comportamiento compartido
  de campus (flechas, puntos y swipe) sin alterar las demás tarjetas.
- Las tres fotos actuales siguen siendo material de ejemplo. Cuando lleguen las
  imágenes reales del Hospital Virtual deben sustituirse juntas y conservar sus
  textos alternativos fieles al contenido visible.
- El cierre dice `Tips ANÁHUAC`, sin `#`; “Tips” comparte Kaushan Script con
  Foráneos mediante `--font-script`.

### 2026-09-04 — Gastronomía: se simplifica campo laboral y los convenios responden al hover
- La revisión humana retira el párrafo «Gastronomía es mucho más que cocinar»
  situado entre los ámbitos laborales y la banda de doble acreditación.
- En M9, las tarjetas de convenios usan un gris que contrasta con el fondo y
  blanco en `hover`; los dos logos de formato vertical/compacto compensan su
  escala localmente. El ajuste no altera el molde compartido.

### 2026-09-01 — Nutrición: CTA lateral en la banda de vinculación
- La revisión humana retira el texto institucional del 70% de empleabilidad.
- Los dos CTA ocupan el lateral derecho en escritorio y vuelven debajo en tablet
  y móvil. Es una variante local: no se inventa un icono ni se usan logotipos de
  Nestlé, Danone o Herdez sin autorización, y no cambia la banda compartida.

### 2026-09-01 — Gastronomía: cuarta carrera sobre el molde
- Maqueta en `gastronomia.html` + `gastronomia.css`. Nace con `pagina-carrera`,
  así que hereda las diez correcciones del molde. Cero componentes nuevos.
- **El handoff adjunto es la fuente literal del contenido.** `specs/gastronomia.md`
  es idéntico al archivo recibido; no se acorta, reescribe ni añade copy visible.
- El H1 completo es «Licenciatura en Gastronomía en la Universidad Anáhuac
  México». Usa escala local y hasta cuatro líneas balanceadas para respetar el
  texto sin invadir la imagen ni dejar preposiciones huérfanas.
- **7 pestañas por área temática.** Siete es primo: a 4 columnas quedan 4+3, un
  solo hueco, que es el mínimo posible. A 3 quedarían 3+3+1.
- **Los tres grupos de M9 y ninguno es rejilla de logotipos**, que es lo que el
  molde da por hecho: coordinación (carrusel), categorías de convenio (texto, no
  marcas) y 33 chips de ciudad. **La fuente no nombra empresas y no se inventan.**
- **Los tres nombres de la coordinación son reales** y salen del folleto, así que
  van tal cual. Van sin foto —el handoff marca `[VERIFICAR]` la autorización— y
  usan el avatar de iniciales, que es el recurso propio del molde.
- **Bug del molde encontrado:** `psicologia.js` clona el set del carrusel para el
  bucle, y el molde deja cuatro tarjetas visibles. Con seis docentes los clones
  quedan fuera de cuadro; con TRES, el primer clon entraba en el cuarto hueco y
  se veía la misma persona dos veces. La tarjeta pasa a un tercio en esta página.
  Se revierte sola cuando lleguen los chefs pendientes y sean cuatro o más.

### 2026-08-31 — Comunicación: tercera carrera sobre el molde, y la primera fuera de Ciencias de la Salud
- Maqueta en `comunicacion.html` + `comunicacion.css`, sobre el molde de
  `psicologia.css`. Nace con `pagina-carrera`, así que hereda de entrada las diez
  correcciones promovidas ese mismo día: **no hubo que repetir la revisión de
  diseño**. Es la prueba de que la promoción valió la pena.
- Cinco desviaciones propias, todas en `comunicacion.css`: las 9 pestañas del
  plan van por área temática y no por semestre (rejilla 3×3, porque 9 divide
  exacto entre 3), la lista de instalaciones de la Facultad antes de las tarjetas
  de campus, los cuatro grupos heterogéneos de M9, el subtítulo del hero y los
  huecos de fotografía.
- **Toda la fotografía va como hueco marcado, no con relleno de otra carrera.**
  Es la primera página del lote fuera de Ciencias de la Salud: el banco de
  Psicología no sirve porque son escenas clínicas, y `AGENTS.md` prohíbe el stock
  ajeno al dominio. Variante `.media-pendiente`, marcada `[PLACEHOLDER]`.
- El breadcrumb **no enlaza el área**: `Comunicación, Arquitectura y Diseño` no
  tiene página en el repositorio todavía. En cuanto exista, se enlaza.

### 2026-08-31 — La revisión de diseño de Nutrición sube al molde; nace `.pagina-carrera`
- Cierra la pregunta abierta del 2026-08-28. **Diez de los trece bloques** de
  aquella revisión suben de `nutricion.css` a `psicologia.css` y Psicología
  queda corregida. Detalle bloque por bloque en `design/CHANGELOG.md`.
- **Tres no suben** porque dependen del contenido de Nutrición y en Psicología
  serían un error: el tamaño del H1 (calibrado para 54 caracteres), la rejilla de
  aliados a 3 columnas (3, 6 y 9 dividen exacto; los 8 y 6 de Psicología dividen
  mejor entre 4) y la proporción de la foto de campo laboral (6 ámbitos contra
  7). Siguen en `nutricion.css` con su numeración original.
- **Alcance nuevo `.pagina-carrera`**, en el `<body>` de Psicología y Nutrición.
  No van sin prefijo porque `psicologia.css` lo cargan TRES páginas y la tercera
  —Área de Ciencias de la Salud— no es una carrera: tiene su piloto
  `escala-2026`, que ya resuelve medida de línea y escala de titulares, y está en
  revisión en otra rama. Cuando ese piloto cierre se puede retirar el prefijo.
- Verificado: Nutrición y el Área quedan **idénticas al píxel**; la promoción
  solo cambia Psicología.
- **Aún no subido a `main`**: por instrucción, este cambio se queda en local.

### 2026-08-28 — Instalaciones absorbe a clínicas; el campus sale de la página de área
- Resuelto el pendiente del 2026-08-27: se eliminan las dos tarjetas de Campus
  Norte / Sur y el módulo 6 muestra las instalaciones en un deslizador. El
  módulo 7 (clínicas internas) desaparece; sus tarjetas son las diapositivas.
- El módulo 6 deja de ser GLOBAL replicable a las 8 áreas: lo que muestra son
  instalaciones propias del área. En HubSpot ya no se edita una vez para ocho.
- La numeración de módulos no se recorre: son los números del handoff de la
  clienta y renumerarlos desincroniza el código de su documento.
- Aprendizaje del componente: `campus-slider` tenía «3 por vista» fijo en el JS,
  y eso lo hacía inservible para cualquier retícula distinta —en móvil las
  tarjetas se salían de pantalla sin navegación—. Ahora el número se mide del
  layout y los breakpoints viven en el CSS. Regla general para este repo: un
  componente compartido no debe llevar en JS una cifra que es de maquetación.
- Origen: revisión humana del 2026-08-28.

### 2026-08-28 — El molde de licenciatura tiene deuda de diseño acumulada
- La revisión de diseño de Nutrición encontró diez defectos y **ninguno es de esa
  página**: todos vienen de `psicologia.css` y Psicología los tiene igual. Los
  tres de fondo: el molde no acota el texto corrido en ningún sitio (155
  caracteres por línea en el FAQ), su escala de titulares está calibrada para
  títulos de ~29 caracteres y los de página de carrera pasan de 54, y el CTA del
  hero es más pequeño que cualquier CTA secundario de más abajo.
- Se corrigieron acotados con `.pagina-nutricion` para no mover Psicología sin
  revisarla. Están listados en `design/CHANGELOG.md` como candidatos a promoción.
- Preferencia de trabajo que confirma esto: cuando un arreglo toca un componente
  compartido, se acota a la página y se propone la promoción; no se cambia la
  base en silencio.
- Origen: revisión de diseño solicitada el 2026-08-28.

### 2026-08-27 — El molde de licenciatura aguantó su segunda página
- `nutricion.html` se construye 1:1 sobre `psicologia.html` sin estrenar ni un
  componente. Es la prueba de que el molde de carrera es reutilizable: las 8
  áreas pueden replicarlo.
- Lo único que una carrera nueva necesita es una hoja propia con sus desviaciones
  de retícula. En Nutrición son dos: 10 pestañas de plan (5 columnas en vez de 8)
  y 3 datos duros (3 columnas en vez de 2).
- Regla que sale de aquí: si una desviación se repitiera en una tercera carrera,
  deja de ser hoja de página y su sitio pasa a ser el componente en
  `psicologia.css`.
- El JS compartido (`script.js` + `psicologia.js`) no necesitó cambios: engancha
  todo por clase y no por página.
- Origen: handoff «Licenciatura en Nutrición v1», 2026-08-27.

### 2026-08-27 — El router de carreras destaca la primera, no la última
- La tarjeta a doble ancho del módulo 4 se mueve al inicio de la retícula: el
  tamaño lo merece la carrera ancla del área (Médico Cirujano), no la que quede
  al final de la lista.
- «Bicampus» se retira del vocabulario de cara al aspirante: las carreras de
  Norte y Sur llevan dos chips de campus, uno por sede.
- Los datos distintivos de las 5 carreras se sustituyen por descripciones de la
  carrera. Se pierden datos concretos que sí traía el handoff —28% de descuento
  en instrumental dental, servicio social del último año de Nutrición, cátedras
  con Opella/Roche/Novo Nordisk, práctica desde 2º y 4º semestre—; siguen en
  `Docs-REF/area-ciencias-de-la-salud.md` por si se quieren recuperar en las
  páginas de carrera.
- Origen: revisión humana recibida el 2026-08-27.

### 2026-08-27 — El Hospital Virtual es el protagonista del módulo 3 de Salud
- La revisión humana pide que deje de ser una de seis tarjetas iguales: pasa a
  una tarjeta 2×2 con fotografía y las otras cinco quedan como diferenciadores
  secundarios alrededor y debajo.
- Se resuelve como variante local (`.salud-porque-grid`) sin tocar
  `.porque-card`, que comparten Psicología y el módulo 7 de esta misma página.
- «Hospital Virtual» es un **nombre provisional**: se sustituye en el `<h3>`, en
  el `alt` de la foto y en `specs/area-ciencias-de-la-salud.md` cuando la
  clienta comparta el nombre definitivo del espacio.
- La fotografía de la tarjeta es de relleno; el handoff exige media real del
  edificio y ahora ocupa el bloque más grande del módulo.
- Origen: revisión humana recibida el 2026-08-27.

### 2026-08-27 — El mapa agrupa servicios por área y propone una modal de ubicación
- El filtro mantiene la decisión de campus y reemplaza los tipos específicos
  por Salud, Entretenimiento, Servicios, Religión y Cultura; los tipos siguen
  visibles dentro de cada tarjeta.
- `Ver ubicación` abre una modal accesible con Google Maps centrado en la zona
  existente y un enlace para continuar en Google Maps. La dirección exacta del
  proveedor no se inventa mientras el directorio institucional siga pendiente.
- Cine, mercado y plaza de convivencia pueden aparecer también en Cultura sin
  perder su clasificación primaria.
- Origen: revisión humana recibida el 2026-08-27.

### 2026-08-27 — Salud prioriza servicios y la guía pasa a #TIPSANÁHUAC
- El módulo de Salud muestra primero cuatro tarjetas en una retícula 2×2 y baja
  el párrafo introductorio debajo de ellas.
- Se incorporan el catálogo ampliado de «Servicios de salud», el uso del seguro
  desde el primer día y «Gimnasio Anáhuac» con una imagen institucional
  deportiva ya disponible en el repositorio.
- «¿Qué hacer si te enfermas?» se convierte en «¿Te enfermaste?» dentro de
  `#TIPSANÁHUAC`, con cuatro opciones generales actualizadas.
- Proceso de admisión y la primera respuesta del FAQ explicitan que el proceso
  es completamente en línea; el FAQ resalta la frase aprobada en naranja y
  mantiene sincronizados HTML y datos estructurados.
- Origen: revisión humana recibida el 2026-08-27.

### 2026-08-27 — La calculadora explicita el carácter orientativo de sus costos
- El módulo de costo de vida termina con el disclaimer institucional entregado
  en revisión, después del enlace a apoyos socioeconómicos.
- El aviso aclara que los montos son aproximados, no constituyen una cotización
  oficial y deben verificarse con cada proveedor.
- Es un cambio de contenido local: reutiliza el patrón `for-disclaimer` sin
  modificar su variante migratoria ni otro componente compartido.
- La misma revisión agrega «Estimado de inversión», elimina Salud del desglose
  y recalcula los totales; también actualiza el puesto de Inés Vásquez a
  «Coordinadora de Alumnos Foráneos» e incorpora `#TIPSANÁHUAC` en el bloque de
  roomies.
- Origen: revisión humana recibida el 2026-08-27.

### 2026-08-21 — Foráneos reutiliza la cascada completa de asesoría
- La indicación humana de agregar las opciones de dónde se estudió la
  preparatoria resuelve la ambigüedad del handoff a favor del componente
  `support-advisor` completo, no solo su tarjeta final.
- Foráneos consume los mismos catálogos y asignaciones estáticas de Apoyos
  Económicos: `Interior de la república`, `Estado de México y CDMX` y
  `Extranjeros`, con preparatoria únicamente para las dos entidades de la zona
  metropolitana.
- La lógica compartida debe consultar y actualizar nodos dentro de su propia
  sección, porque Foráneos contiene otras tarjetas de contacto con clases
  visuales coincidentes.
- Origen: revisión humana recibida el 2026-08-21.

### 2026-08-20 — Foráneos se valida primero en local
- Los ajustes de mapa, asesoría y admisión se revisan en `foraneos.html` antes de cualquier publicación o migración a HubSpot.
- En móvil, la categoría del mapa usa `select` y el paginador avanza tres tarjetas; el selector de campus conserva las dos opciones visibles.
- Asesoría reutiliza el patrón visual de Apoyos Económicos y Proceso de admisión conserva un único mensaje general para toda la audiencia.
- La auditoría responsive mantiene los módulos dentro del viewport entre 320 y 900px; las razones de CDMX son fluidas al apilarse y la tarjeta horizontal del asesor conserva foto y datos dentro de sus límites.
- El aviso de responsabilidades del trámite migratorio deja `--space-9` antes de «Tramita tu visa» para que ambos bloques no se perciban pegados.
- Origen: revisión humana recibida el 2026-08-20.

### 2026-06-08 — Plataforma HubSpot (onboarding)
- Elegida por el usuario durante el onboarding interactivo.
- Impacto: adapter activo → `adapters/hubspot/`. Se usará `hs CLI` para deploy.

### 2026-06-08 — Zilla Slab como heading font (ingesta Figma)
- El UI Kit define Sharp Slab como tipografía original (comercial) y Zilla Slab como alternativa de código abierto.
- Decisión: usar Zilla Slab en toda la implementación digital para evitar costos de licencia.
- Referencia: `design/01-tokens.md → --font-heading`.

### 2026-07-30 — Apoyos Económicos se valida primero en local
- La LP se actualiza y revisa completamente en `apoyos-economicos.html` antes de crear o publicar módulos en HubSpot.
- Se documentaron ocho contratos autoadministrables como fuente neutral para los futuros `fields.json`.
- La sección de asesoría debe aceptar una fuente HubDB futura sin cambiar el contrato de render.
- Origen: instrucciones y capturas de revisión humana recibidas el 2026-07-30.

### 2026-07-30 — Asesoría usa una cascada de procedencia de tres niveles
- Primer nivel vigente: `Interior de la república`, `Estado de México y CDMX` o
  `Extranjeros`; segundo nivel: país o entidad federativa.
- El tercer selector aparece solo para Ciudad de México y Estado de México.
- El formulario público de Atención Preuniversitaria expone un catálogo plano de preparatorias, pero no la relación completa por estado; la versión local usa únicamente planteles con ubicación explícita y `Otra preparatoria`.
- La asignación del asesor continúa dependiendo del segundo nivel hasta definir una relación institucional por plantel.
- Origen: revisión humana del módulo de Asesoría recibida el 2026-07-30.

### 2026-06-08 — Framework de design system instanciado (onboarding)
- Se clonó el template `averasteguibno/BnO-website-design-system` en el workspace del proyecto.
- Se configuró `project.json` con los 3 links de Figma y plataforma HubSpot.

## Aprendizajes / gotchas

### 2026-09-01 — Medir tipografía sin esperar a la webfont da un falso negativo
`document.fonts.ready` antes de medir, siempre. El H1 huérfano de las páginas de
carrera —«Licenciatura» / «en» / «X»— no aparece si Zilla Slab todavía no cargó:
las métricas de la fuente de respaldo son otras. Así se coló el defecto en cuatro
páginas seguidas, y así lo dejó pasar mi primer barrido.

Corolario: **este defecto depende del ancho de la COLUMNA, no del viewport.** Solo
aparece en tramos concretos —uno de ellos, en Psicología, de diez píxeles— así que
mirar dos anchuras no basta. Para eso está `npm run check:titulos`, que barre 32.
> Qué se intentó, qué falló, qué evitar.

- **Zilla Slab solo tiene cifras de estilo antiguo.** El 3, 4, 5, 7 y 9 bajan de
  la línea base, el 1 y el 2 se quedan a altura de x y el 6 sube. Su build de
  Google Fonts **no trae juego de caja alta**: `lining-nums` y
  `font-feature-settings: 'lnum' 1` no hacen nada, comprobado. Cualquier cifra
  grande —stat cards, datos duros— tiene que ir en `--font-body`; en texto
  corrido, en cambio, el estilo antiguo es lo correcto y se deja.
- El repositorio del design system es privado en GitHub; `read_url_content` no puede leer raw URLs. Usar `git clone` o el GitHub MCP para acceder al contenido.

## Preguntas abiertas
> Decisiones pendientes que bloquean o condicionan trabajo futuro.

- **¿Sube al molde la proporción 1:1 del preview de campo laboral?** Es el
  **tercer** módulo de SEIS ámbitos que la necesita —Nutrición, Comunicación y
  Gastronomía—: el 4/5 de `.campo-media` solo acierta con los siete de Psicología.
  Hoy va repetida en las tres hojas de página. Requiere comprobar Psicología antes
  de promoverla.
- **Gastronomía · sin una sola fotografía. 🚫 BLOQUEA LA PUBLICACIÓN.** 18 huecos
  marcados. Los 12 de cocinas e instalaciones son prioridad 1: son el argumento de
  la carrera, y **cada campus tiene instalaciones distintas** (mixología en el
  Norte, cocina de vanguardia en el Sur), así que las fotos no son
  intercambiables. Falta además el **logotipo de Le Cordon Bleu**, que es la marca
  de la pieza de mayor peso persuasivo de la página. Detalle en
  `assets/gastronomia/README.md`.
- **¿Se corrige en el molde la bajada de Historias Anáhuac?** La corrección 1
  promovida el 2026-08-31 acota esa bajada a 62ch y le deja `margin-inline: auto`
  para conservar un centrado que no existe: el H2 va a la izquierda y la bajada
  queda desplazada 334px. Verificado en Psicología, Nutrición y Comunicación.
  Corregido solo en Comunicación, acotado con `.pagina-comunicacion`. Requiere una
  pasada propia sobre el molde.
- **Comunicación · 14 fotos cubriendo 35 posiciones. 🚫 BLOQUEA LA PUBLICACIÓN.**
  Ya no hay huecos en pantalla —la clienta autorizó repetir el 2026-08-31— pero
  **tres repeticiones afirman algo que no consta**: la tira del Campus Norte lleva
  fotos del Sur, los seis ámbitos de campo laboral se ilustran con instalaciones
  de la Facultad, y el claustro sigue con los retratos de relleno de Psicología.
  Donde se pudo, el daño se acota en el `alt`: ninguno afirma lo que no consta.
  Detalle y prioridades en `assets/comunicacion/README.md`.
- **Comunicación · los 7 logotipos de vinculación son todos marcas comerciales**
  (Televisa, TV Azteca, Google, Microsoft, PepsiCo, Coca-Cola, OCESA): los siete
  necesitan archivo oficial y permiso de publicación. Van con
  `.colab-logo-pendiente`.
- **¿Se menciona el programa de liderazgo del área en el módulo compartido de
  experiencia?** Es el mismo pendiente en las tres carreras —ALPHA en Nutrición y
  Medicina, CREA en Comunicación— y el módulo está marcado «no rediseñar».
  Conviene resolverlo una sola vez, para las tres.
- **🔴 Nutrición · ¿cómo se protege `carrera de nutriologa`?** Esa keyword está
  hoy en **posición 1** y el 2026-08-31 la clienta pidió quitar «o nutrióloga»
  del H2 de campo laboral, que era su sitio más fuerte. El femenino ya no aparece
  en ningún encabezado: solo queda en los `data-alt` de cuatro tiles de M6. O se
  asume la pérdida, o se devuelve «nutrióloga» a texto indexable en otro sitio
  —intro de M6, un tile, el FAQ o el alt de `og:image`—. Ver
  `specs/nutricion.md` § 3.
- ¿Hay páginas internas ya diseñadas en Figma además del Home? (el usuario indicó que sí, pendiente links concretos).
- ¿Se tiene cuenta sandbox de HubSpot para deploy?
- ¿Cuál es el mapeo institucional completo de preparatorias para Ciudad de México y Estado de México?
- **Nutrición · faltan 8 logotipos de aliados. 🚫 BLOQUEA EL MERGE DEL M9.** La
  clienta pidió el 2026-08-28 que el módulo 9 se lea como muro de logotipos y que
  los que falten queden marcados en la página para saber qué nos debe pasar. El
  único con archivo es el de la Universidad Francisco de Vitoria (compartido con
  Psicología) y ya está puesto; los otros 8 llevan `.colab-logo-pendiente`, que
  es **[PLACEHOLDER] y no puede llegar a producción**. Eran 17 hasta el
  2026-08-31, cuando la clienta retiró el grupo de cátedras corporativas: con eso
  se fueron ocho de las nueve marcas comerciales y **solo Herdez** necesita ya
  autorización de uso. Lista y especificación en
  `assets/nutricion/logos/README.md`. OJO: `psicologia/logos/inp.webp` es el
  Instituto Nacional de **Psiquiatría**, no el de Perinatología — no reutilizar.
- **Nutrición · ALPHA en el módulo 12.** El handoff admite mencionar ALPHA
  «dentro de los 9 Programas de Liderazgo», pero el módulo compartido de
  experiencia no enumera esos programas: no hay dónde insertarlo sin rediseñar un
  módulo marcado «no rediseñar». ¿Se adapta el módulo compartido o se deja fuera?
- ¿Cuál es el nombre definitivo del espacio que hoy figura como «Hospital Virtual»? (bloquea el copy de la tarjeta protagonista del módulo 3 del Área de Ciencias de la Salud).

### 2026-10-22 — Claustro docente de Biotecnología

- Origen: instrucción del usuario en Codex. Se incorporan los cuatro docentes y sus descripciones en la página local, conservando el carrusel, las clases y los avatares existentes. Fotografías pendientes. Sin publicación ni cambios en HubSpot.

### 2026-10-22 — Cuatro campos de Biotecnología

- Origen: instrucción del usuario en Codex. Se actualiza el título y la descripción de la tarjeta a cuatro campos: médica, farmacéutica, alimentaria y ambiental. Cambio de contenido local, sin modificar formato.

### 2026-10-22 — Cátedras e instalaciones de Biotecnología

- Origen: instrucción del usuario en Codex. Cátedras: se amplía el texto a los sectores farmacéutico, médico y alimentario. Se añaden Bioterio y Laboratorio de Fisiología al carrusel con imagen existente de referencia autorizada; fotografías reales pendientes. Cambios solo locales y formato conservado.

### 2026-10-22 — Validación y aprobación de ajustes de Biotecnología

- Revisión técnica: cuatro docentes con sus descripciones; siete instalaciones con rutas de imagen existentes; contenido de campos y cátedras sincronizado con el spec. Sin cambios en CSS, JavaScript, tokens ni componentes compartidos.
- Validación: 42 pruebas aprobadas; readiness, tokens y Stylelint aprobados; diff sin errores de espacios. Sin hallazgos bloqueantes en el alcance del cambio. Imágenes de referencia autorizadas por el usuario; fotografías finales pendientes.
- Revisión humana: el usuario aprueba los ajustes y solicita commit, merge y push.

### 2026-10-26 — Afinidad de Medicina

- Origen: solicitud del usuario en Codex. Se actualizan los cuatro textos del módulo de vocación y sus tres grupos de áreas clínicas; se mantienen el formato y los iconos. Cambio local documentado en `specs/medicina.md`.

### 2026-10-26 — Motivos para estudiar Medicina

- Origen: instrucción del usuario. Se separan Medicina Interna y Urgencias y Cirugía para mostrar cuatro áreas clínicas. Se actualizan la introducción, las seis tarjetas y la banda de Modelo Anáhuac del módulo de motivos; se eliminan los tres chips de la tarjeta renombrada Educación Médica Continua. Formato, iconos, CSS y JavaScript conservados; cambios locales.

### 2026-10-26 — Plan, instalaciones y claustro de Medicina

- Origen: solicitud del usuario. Se actualizan textos del plan y bloque profesional; destinos agrupados en tres regiones; carrusel de diez instalaciones sin Hospital Virtual y con siete opciones adicionales; cuatro nombres de docentes confirmados; se retira el módulo de convenios internacionales. Formato compartido conservado. Solo local, pendiente de revisión humana y autorización separada para publicar.

### 2026-10-27 — Revisión e integración de Medicina

- Revisión humana: el usuario solicita commit, merge y push de los ajustes revisados en local.
- Revisión técnica: cuatro áreas clínicas, seis tarjetas de motivos, diez instalaciones, cuatro docentes y retiro exclusivo de convenios internacionales; imágenes de referencia existentes y formato compartido conservado. Sin hallazgos bloqueantes dentro del alcance solicitado.

### 2026-11-04 — Legibilidad de Encuentra tu área

- Solicitud del usuario: extender el degradado hasta los títulos de las tarjetas en Estudia con nosotros. Se aplica solo en .ecn-areas, ligado a la altura del contenido, conservando fotos, textos y formato. Solo local, pendiente de revisión.

### 2026-11-04 — Prueba compacta de tarjetas de áreas

- Solicitud del usuario: reducir saturación y mostrar más fotografía. Variante local: títulos 28 px (24 px móvil), descripción 20 px con interlineado 1.3, CTA 16 px y separación reducida. Se conserva el degradado ligado al contenido, fotografías y tamaño de tarjeta. Pendiente de revisión; sin publicar.

### 2026-11-04 — Aprobación de tarjetas compactas

- El usuario acepta la variante y solicita commit, merge y push. Revisión técnica: estilos limitados a .ecn-areas, tokens existentes, sin modificaciones en componentes globales. Vista previa de escritorio revisada; tamaños computados 28/20/16 px y sin desbordamiento horizontal a 390 px. Sin hallazgos bloqueantes en el alcance.

### 2026-11-04 — Sello Tips de Estudia con nosotros

- Solicitud del usuario con captura de referencia. Se iguala el sello al patrón de Campus Norte y Sur: Kaushan Script con degradado naranja a lila, marca en Zilla Slab semibold lila. Se añade la carga de la fuente existente en el sistema. Solo local, sin publicación.

### 2026-11-04 — Texto de servicios en Tips

- Solicitud del usuario: se reemplaza el párrafo de servicios por el texto proporcionado, dividido en dos párrafos para separar transporte. Título, sello y CTA conservados. Solo local.

### 2026-11-04 — Integración de Tips

- El usuario aprueba y solicita commit, merge y push del sello y texto. Validación técnica sin hallazgos bloqueantes: Kaushan Script cargada y color lila verificados en navegador, títulos y CTA conservados, readiness/tokens/Stylelint aprobados y diff sin errores de espacios.

### 2026-11-04 — Revisión posterior de Estudia con nosotros

- El usuario solicita retirar la tipografía manuscrita únicamente en `estudia-con-nosotros`; las demás páginas conservan su tratamiento actual. Los rótulos locales usan `--font-heading`.
- «Así se vive» coloca «Quiero recibir más información» al final de sus cinco opciones no deportivas; Deporte queda sin ese CTA.
- El bloque Tips elimina «Conoce Campus Norte/Sur» y conserva el CTA de visita. «Encuentra tu área» recupera el carrusel compartido de tres tarjetas visible en la referencia aprobada.

### 2026-11-04 — Botones de Estudia con nosotros

- Solicitud del usuario: corregir botones más pequeños que su texto. Se añade padding, altura flexible y ajuste de línea a los CTA del contenido principal únicamente en .ecn-page; se conservan colores, textos y destinos. Sin cambios en la propuesta 2 ni publicación.

### 2026-11-04 — Tips manuscrito según referencia

- El usuario solicita nuevamente el sello manuscrito de la captura. Se restituye Kaushan Script regular solo en .ecn-tips-script, conservando el degradado y la marca. Se añade carga de fuente; cambios solo locales.

### 2026-11-04 — Rótulos de Así se vive

- Solicitud del usuario con captura Deporte 01/06: los seis rótulos y contadores pasan a naranja institucional mediante --color-brand-primary, únicamente en .ecn-show de Estudia con nosotros. Se corrige la prioridad frente al color gris de párrafos. Solo local.

### 2026-11-04 — Contenido de hero y Así se vive

- Solicitud del usuario: frase inicial integrada al texto del hero; Baseball añadido a Deporte; retirada invitación a abrir taller de Arte. Compromiso social y Pastoral reciben textos y cinco etiquetas proporcionados; Fe y servicio se renombra Pastoral en navegación y rótulo. Diseño y cambios locales anteriores conservados; sin publicación.

### 2026-11-04 — Ruta de formación

- Solicitud del usuario: se actualiza Arma tu propio horario con el texto proporcionado; el punto 5 se renombra Empieza tu vida profesional antes de graduarte; se retira completo el punto 6 Emprende con acompañamiento, incluida su fotografía. Quedan cinco puntos. Solo local.

### 2026-11-04 — Acompañamiento y hospedaje

- Solicitud del usuario: se precisa que las opciones de hospedaje son de externos. Se añade Acompañamiento como séptima experiencia, con título Caminamos a tu lado, texto y cuatro etiquetas proporcionados, imagen existente de referencia y CTA del mismo formato. Contadores actualizados a /07. Solo local, propuesta 2 intacta.

### 2026-11-04 — Prueba de fondo de Así se vive

- Solicitud del usuario con captura: fondo lila suave y puntos discretos alternados, arriba izquierda y abajo derecha, únicamente en .ecn-show de Estudia con nosotros. Reutiliza tokens de superficie y patrón existentes; sin cambios al contenido. Solo local para revisión.

### 2026-11-04 — Ritmo y categorías de Así se vive

- Prueba solicitada por el usuario: menos espacio entre intro, pestañas y contenido; puntos limitados a franjas laterales fuera del título; nombres de pestañas en morado oscuro con activo en negrita y subrayado naranja. Rótulos y contadores mantienen naranja. Solo local.

### 2026-11-04 — Fondo de Elige el siguiente paso

- Solicitud del usuario: fondo lila muy sutil solo en .ecn-pasos, con mezcla de tokens existentes al 12%. Sin puntos, sin cambios de contenido o formato; solo local.

### 2026-11-04 — Aprobación e integración de revisión local

- El usuario solicita commit, merge y push y comprobar base remota. Se confirma HEAD sincronizado con origin/main en 382b6fe antes de integrar.
- Revisión técnica: navegación de siete experiencias y vuelta de 07/07 a 01/07 comprobadas en navegador; títulos y texto negro/gris verificados, botones sin desbordamiento a 1440/768/390/320 px y fondos sin desbordamiento móvil. Cambios limitados a la página original; sin hallazgos bloqueantes en el alcance. Propuesta 2 excluida.

### 2026-11-09 — Primer módulo de nueve carreras de Ingeniería y Ciencias

- Solicitud del usuario, aclarada explícitamente: eliminar el párrafo debajo de los verbos del hero y retirar Campus/Bicampus de su etiqueta de ubicación, conservando Norte/Sur/Norte - Sur. Aplicado a Actuaría, Ciencia de Datos y siete ingenierías nuevas. Solo local, sin sincronización; capturas para revisión.

### 2026-11-09 — Validación y aprobación de nueve encabezados

- El usuario revisa las capturas y solicita commit, merge y push. Base confirmada al día con origin/main en 63faf79. Verificación en navegador de los nueve hero: sin párrafo introductorio ni Campus/Bicampus en los chips; sin cambios de diseño o contenido fuera del alcance. Sin hallazgos bloqueantes.

### 2026-11-09 — Cuatro opciones por columna en afinidad

- Solicitud del usuario: exactamente cuatro etiquetas por columna en el módulo de áreas/ejes/habilidades de las nueve carreras de Ingeniería y Ciencias. Se retiran Entorno económico (Ambiental), Geotecnia (Civil) y Minería de datos (Industrial), conservando opciones más directas para aspirantes de preparatoria. Las otras seis páginas ya cumplen. Contenido fuera del módulo y formato sin cambios; solo local.

### 2026-11-09 — Nota de Modelo 2025 en duración

- Solicitud del usuario: retirar completo el párrafo gris de desglose del Modelo 2025 en la tarjeta de duración de las nueve carreras de Ingeniería y Ciencias. Se conservan títulos, semestres y créditos. Cambios anteriores preservados; solo local.

### 2026-11-09 — Plan de estudios sin créditos desglosados

- Solicitud del usuario: en las nueve carreras de Ingeniería y Ciencias se retiran totales de créditos por semestre, sufijos de créditos de materias y créditos de los títulos de bloques. Se conservan todas las materias, orden, pestañas y créditos totales de la carrera. Minors usa enlace naranja en negrita y el video modal ya establecido en otras carreras. Solo local, cambios anteriores preservados.

### 2026-11-09 — Aprobación de afinidad, duración y plan

- El usuario autoriza commit, merge y push de todos los ajustes pendientes de las nueve páginas. Base remota confirmada sincronizada en 191605a. Auditoría: 4+4 etiquetas por página, materias y orden intactos frente a HEAD, notas y créditos desglosados retirados, enlaces Minors correctos. Readiness, tokens y Stylelint aprobados; sin hallazgos bloqueantes en el alcance.

### 2026-11-09 — Retiro de notas de materias regionales

- Solicitud del usuario: se eliminan las notas de Materias regionales entre las pestañas del plan y los bloques en las ocho páginas que las contenían; Biomédica ya carecía de esa nota. Sin alterar materias ni bloques. Solo local, pendiente de revisión.

### 2026-11-09 — Aprobación del retiro de materias regionales

- El usuario autoriza commit, merge y push. Base confirmada sincronizada con origin/main en 6452b0c. Revisión técnica: ocho párrafos retirados, Biomédica sin cambios, materias y bloques conservados; captura local comprobada. Sin hallazgos bloqueantes en el alcance.

### 2026-11-09 — Empleabilidad de Actuaría

- Solicitud del usuario: se retira el bloque Dónde trabajan nuestros egresados y su párrafo estadístico. Se sustituye el título y ambos párrafos de la banda por el copy proporcionado, manteniendo la atribución del 70% a la Red Anáhuac, énfasis y CTA. Solo local.

### 2026-11-09 — Aprobación de contenido de Actuaría

- El usuario solicita commit, merge y push. Base sincronizada con origin/main antes de integrar. Revisión técnica: retiro exclusivo del bloque solicitado, banda y énfasis coinciden con el copy aprobado, CTA conservados. Readiness, tokens y Stylelint aprobados; sin hallazgos bloqueantes en el alcance.

### 2026-11-09 — Recuperación de publicación de Actuaría

- El usuario solicita resolver el despliegue. Diagnóstico del run 42727204224: carga correcta, Pages permanece syncing_files y la acción cancela al límite predeterminado de 10 minutos. Se amplía timeout de deploy-pages a 20 minutos y límite del job a 25, sin modificar el contenido ni permisos del sitio.

### 2026-11-09 — Instalaciones de Actuaría

- Solicitud del usuario: módulo renombrado Instalaciones, con nuevo título y descripción. Se conservan dos tarjetas e imágenes existentes como referencia; se sustituyen campus, direcciones y enlaces por los nombres de laboratorios y aulas indicados. Se retiran nota y bullets de transporte/hectáreas, reemplazados por CTA de tour con la URL proporcionada. Solo local.

### 2026-11-09 — Subtítulo del claustro de Actuaría

- Solicitud del usuario: se retira únicamente el párrafo Profesionistas de los medios actuariales, financieros y de investigación que llevan la práctica real al aula, bajo Claustro docente. Cambios anteriores conservados; solo local.

### 2026-11-09 — Claustro docente de Actuaría

- Solicitud del usuario: se incorporan los cuatro nombres y cargos destacados de Conoce parte de nuestro claustro docente, consultados en https://www.anahuac.mx/mexico/EscuelasyFacultades/actuaria/. Salvador Nieto Pineda, Pedro Pacheco Villagrán, Ernesto Monroy Yurrieta y Carlos Arocha Romero. Se conserva el formato y los avatares existentes; no se incorporan fotografías. Solo local.

### 2026-11-09 — Claustro de Ciencia de Datos

- Solicitud del usuario: se incorporan los mismos cuatro docentes y cargos ya documentados en Actuaría desde la fuente oficial de la Facultad. Se conserva el formato y los avatares existentes. Solo local.

### 2026-11-09 — Aprobación de instalaciones y docentes

- El usuario solicita commit, merge y push. Base sincronizada con origin/main en 0d9b069. Revisión técnica: cuatro docentes idénticos en ambas páginas; Actuaría conserva dos tarjetas de instalaciones, CTA proporcionado y sin textos de campus ni subtítulo retirado. Readiness, tokens y Stylelint aprobados; sin hallazgos bloqueantes en el alcance.

### 2026-11-09 — Internacionalización en Actuaría

- Solicitud del usuario con captura: se añade una séptima tarjeta en Por qué la Anáhuac, resumiendo intercambios, viajes culturales, materias en otros idiomas y estancias de investigación. Se mencionan los nueve países de la captura: España, Francia, Australia, Alemania, Canadá, Italia, Argentina, Suiza y Estados Unidos. Sin trasladar porcentajes ni prometer disponibilidad. Formato existente conservado; solo local.

### 2026-11-09 — Retiro de información adicional de movilidad

- Solicitud del usuario con captura: se retira el bloque iact-colab-extra que contiene Internacionalización y Movilidad Anáhuac. Se conserva la nueva tarjeta Una formación con visión internacional en Por qué la Anáhuac. Solo local.

### 2026-11-09 — Países como etiquetas en Actuaría

- Solicitud del usuario: los nueve países de la tarjeta de internacionalización se presentan como lic-chip, reutilizando el estilo existente de otras carreras. Se mantiene el texto introductorio, sin cambios de CSS compartido. Solo local.

### 2026-11-09 — Aprobación de internacionalización de Actuaría

- El usuario solicita commit, merge y push. Base remota sincronizada. Revisión técnica: nueva tarjeta con nueve etiquetas de países, bloques anteriores retirados y clases compartidas conservadas. Readiness, tokens y Stylelint aprobados; sin hallazgos bloqueantes en el alcance.

### 2026-11-10 — Aliados de Biotecnología con logo

- Solicitud del usuario y Excel adjunto: se sustituyen los grupos por seis aliados nacionales y seis internacionales con logo. INDRE nacional y Elsevier internacional usan los archivos separados proporcionados. Se retiran aliados anteriores ajenos a la selección; clasificación tomada del Excel, sin inferir país por domicilio. Solo local.

### 2026-11-10 — Fondo de logo INMeGen

- Solicitud del usuario: se integra el fondo blanco del JPEG de INMeGen con la superficie de su tarjeta mediante mix-blend-mode multiply, con alcance exclusivo de ese logo. Archivo original y comportamiento de color en hover conservados. Solo local.

### 2026-11-10 — Corrección de integración del fondo de INMeGen

- La primera regla de mezcla no bastaba por las capas del carrusel. Se aplica fondo gris explícito e aislamiento solo a la tarjeta de INMeGen, blanco en hover, y versión de CSS para refrescar caché. Captura de Chrome verificada sin rectángulo blanco; solo local.

### 2026-11-10 — Aprobación de aliados de Biotecnología

- El usuario solicita commit, merge y push. Base remota sincronizada en 5741813. Revisión: doce rutas de logos existentes, seis aliados por grupo, carruseles comprobados y captura de INMeGen sin rectángulo blanco. Readiness, tokens y Stylelint aprobados; sin hallazgos bloqueantes en el alcance.

- 2026-11-10: Medicina, solo local: cuatro biografías proporcionadas por la usuaria y 19 logos de convenios clínicos; tarjetas/carrusel compartidos conservados. CSS exclusivo para integrar fondos blancos; originales en assets/medicina/convenios.

- Corrección local: conservar únicamente Hospiten Cancún (18 convenios) y neutralizar el fondo gris del logo Hospital Ángeles León mediante CSS, conservando su color en hover.

- Publicación de Medicina autorizada: main sincronizado con origin/main; cuatro biografías, 18 convenios, un solo Hospiten y fondo de Ángeles León corregido. Verificación visual y carrusel local aprobados.

### 2026-11-10 — Instalaciones de Medicina (solo local)

Texto: Conoce los espacios donde la medicina se aprende haciendo: laboratorios especializados, anatomía virtual y Centro de Simulación.

Carrusel limitado a: Quirófano; Laboratorio de fisiología; Proteómica y genómica; Microbiología; Laboratorio de investigación; Laboratorio de alimentos; Centro de Simulación. Se retiran Anfiteatro, Laboratorios especializados y Anatomía virtual como tarjetas, conservando las imágenes y formato existentes de las siete restantes.

- Medicina, local: nombres de espacios uniformados como Laboratorios Especializados, Anatomía Virtual y Centro de Simulación en la introducción de Instalaciones.

### 2026-11-11 — Índice de páginas

- Local actualizado desde GitHub a fb874d2. Se agrega Ingeniería de Negocios (Engineering Management) a paginas.html dentro de Ingeniería y Ciencias, con el mismo formato y estado Por revisar MP. Se actualizan conteos y fecha; publicación autorizada por el usuario.

### 2026-11-11 — Ciencia de Datos: identidad académica

- Solicitud del usuario: no presentar la licenciatura como unión de Ciencias Actuariales e Ingeniería. Corregidos afinidad, beneficios, campo laboral, docentes y descripción estructurada.
- Retirada cifra de empleabilidad de egresados de Ingeniería y referencias a su edificio/Anáhuac Labs como instalaciones propias de esta carrera. Se conserva el contenido curricular y la comparación entre carreras; sin atribuciones nuevas a facultades.
- Cambios únicamente locales, pendientes de revisión del usuario.

### 2026-11-11 — Frase de formación integral

- Diez páginas de Ingeniería y Ciencias: frase adaptada a cada profesión «Prepárate para ser el … que quieres ser y la persona que quieres llegar a ser». Se conserva el énfasis del primer segmento y el resto del texto. Solo local; incluye Ingeniería de Negocios, Actuaría y Ciencia de Datos.

- Instrucción posterior del usuario: restaurar únicamente las dos tarjetas de beneficios de la captura con su contenido original: «Un plan multidisciplinario de dos facultades» (Ciencias Actuariales e Ingeniería) y «Anáhuac Labs, el primer clúster de innovación tecnológica en México», incluida descripción y enlace «Conoce Anáhuac Labs». Los demás ajustes locales se conservan.

- 2026-11-11: preguntas frecuentes comparativas de Actuaría y Ciencia de Datos sustituidas por las respuestas literales del usuario, en orden correspondiente a cada carrera; texto visible y FAQPage sincronizados. Solo local.

- Usuario autoriza publicación del conjunto de ajustes de diez páginas; base local y remota sincronizada en ba10a63 antes de guardar.

- 2026-11-11: Ingeniería en Sistemas y Tecnologías de la Información, solo local: se retira por solicitud del usuario el párrafo introductorio del plan que comienza «Este es un plan de referencia», manteniendo título y materias.

- 2026-11-11, Sistemas (solo local): bloque laboral sustituido por «Transforma tu pasión por la tecnología en oportunidades profesionales», con el texto literal solicitado y 90% de empleabilidad destacado una sola vez. Se elimina el bloque de egresados y el dato duplicado. Intro laboral resumida previamente a una frase.

### 2026-11-11 — Instalaciones de las ocho ingenierías (local)

- Solicitud: formato común de título, introducción, carrusel con imagen y nombre de cada espacio, flechas/puntos y CTA de tour. Se reutiliza el carrusel de instalaciones existente, sin modificar CSS ni JS compartidos.
- Laboratorios y espacios extraídos del contenido previo de cada carrera, con fotografías de referencia existentes. Ingeniería de Negocios conserva sus seis tarjetas en el mismo patrón. Se retiran notas de campus del módulo.
- Actuaría y Ciencia de Datos verificadas sin modificaciones mediante huellas de archivo. Pendiente de revisión y publicación.

- 2026-11-11: Sistemas, solo local: se retira el bloque completo de Internacionalización y Movilidad Anáhuac mostrado por el usuario. Resto de carreras sin cambios por esta solicitud.

- Publicación autorizada del conjunto de ocho ingenierías y textos de Sistemas. Base remota sincronizada en 62a57d1; validaciones de módulos, imágenes, JSON y exclusión de Actuaría/Ciencia de Datos correctas.

- Sistemas, solo local: se retira el subtítulo del claustro docente «Profesores ponentes en congresos internacionales y en publicaciones reconocidas, con experiencia laboral en la industria tecnológica», por solicitud del usuario.

- 2026-11-11, solo local: se retira el párrafo de referencia debajo del título Plan de estudios en las siete ingenierías restantes, incluida Ingeniería de Negocios. Sistemas ya no lo tenía. Títulos, materias y bloques conservados; Actuaría y Ciencia de Datos sin cambios.

- 2026-11-11: ocho ingenierías, solo local: introducciones bajo «¿Por qué estudiar…?» reformuladas en positivo, comenzando con verbos de acción y manteniendo los beneficios existentes.

- 2026-11-12, Ambiental, solo local: bloque profesional reemplazado por «Lidera las soluciones ambientales del futuro», con texto literal del usuario y énfasis en sostenibilidad, energías renovables y protección ambiental. Se retiran bloque de egresados, cifra del 90% y línea de 5 ejes/Prácticum/convenios.

- Ambiental, solo local: párrafo de afinidad abreviado con el texto exacto del usuario, conservando el énfasis «visión integral en cinco ejes».

- Ambiental, solo local: se retira el texto descriptivo del claustro sobre congresos, publicaciones y experiencia laboral, por solicitud del usuario.

- 2026-11-12: ocho ingenierías, solo local: se añade séptima tarjeta «Internacionalización y movilidad» a ¿Por qué estudiar…? con texto literal del usuario. Se retiran los bloques separados bajo colaboradores en siete páginas; Sistemas ya no lo tenía. Formato de tarjeta existente, sin cambios compartidos. Actuaría y Ciencia de Datos intactas.

- 2026-11-12, Biomédica, solo local: bloque profesional sustituido por «Donde la ingeniería y la medicina crean nuevas posibilidades», con texto literal y énfasis solicitado. Se retiran bloque de egresados, cifra del 90%, título anterior y línea separada ABET/3 Prácticum/convenios.

- 2026-11-12, Biomédica, solo local: se retira el subtítulo del claustro docente sobre profesores de Ingeniería y Ciencias de la Salud, congresos y experiencia clínica e industrial.

- 2026-11-12, Ingeniería Civil, solo local: se elimina el bloque completo «Dónde trabajan nuestros egresados» y el párrafo del 90% de empleabilidad por solicitud del usuario; resto del módulo conservado.

- Ingeniería Civil, solo local: bloque profesional sustituido por «De grandes ideas a proyectos que transforman ciudades», texto literal del usuario y énfasis en diseñar, construir y liderar proyectos de infraestructura. Se retira la línea separada ABET/3 Prácticum/convenios.

- Ingeniería Civil, solo local: se retira el subtítulo del claustro sobre experiencia en obra, dirección de proyectos, consultoría y congresos, por solicitud del usuario.

- Civil, propuesta local: icono de Internacionalización y movilidad sustituido por un globo con meridianos y paralelos; conserva color, tamaño y grosor del icono compartido. Solo esta carrera hasta revisión del usuario.

- 2026-11-12: icono de mundo aprobado en Civil aplicado a Internacionalización y movilidad de las ocho ingenierías, solo local; siete tarjetas por página conservadas y Actuaría/Ciencia de Datos sin cambios.

- 2026-11-12, Ingeniería Industrial para la Dirección, solo local: se retira el bloque completo «Dónde trabajan nuestros egresados» y el párrafo del 90% de empleabilidad, por solicitud del usuario. Resto del módulo conservado.

- Industrial para la Dirección, solo local: bloque profesional sustituido por «Más que ingeniería: prepárate para tomar decisiones que impulsan empresas», con texto literal y énfasis solicitado. Se retira la línea separada ABET/2 Prácticum/convenios al integrar esos datos en el párrafo.

- Industrial para la Dirección, solo local: retirado el texto descriptivo bajo Claustro docente sobre experiencia directiva e industrial, congresos y publicaciones. Tarjetas conservadas.

- 2026-11-12, Ingeniería Mecatrónica, solo local: se elimina el bloque completo «Dónde trabajan nuestros egresados» y el párrafo del 90% de empleabilidad por solicitud del usuario. Resto del módulo conservado.

- Mecatrónica, solo local: bloque profesional sustituido por «De la robótica a la industria automotriz: lleva tus ideas a la realidad», con texto literal y énfasis solicitado. Se retira la línea separada ABET/2 Prácticum/convenios.

- Mecatrónica, solo local: se retira el texto descriptivo bajo Claustro docente sobre congresos, publicaciones y experiencia industrial. Tarjetas conservadas.

- Mecatrónica, solo local: se resalta con el énfasis naranja existente la frase «diseñas, programas e implementas sistemas mecatrónicos» en el párrafo de afinidad, por solicitud del usuario.

- 2026-11-12, Ingeniería Química, solo local: se retira el bloque completo «Dónde trabajan nuestros egresados» y el párrafo del 90% de empleabilidad por solicitud del usuario. Resto del módulo conservado.

- Ingeniería Química, solo local: bloque profesional sustituido por «Tu conocimiento puede impulsar grandes avances industriales», con texto literal y énfasis solicitado. Se retira la línea separada ABET/2 Prácticum/convenios.

- Ingeniería Química, solo local: retirado el texto descriptivo bajo Claustro docente sobre congresos, publicaciones y experiencia laboral. Tarjetas conservadas.

- 2026-11-12, Engineering Management, solo local: se retira párrafo hero; chip Campus Sur pasa a Sur; dato de duración 3 Summer Schools pasa a 3.5 Años. Se retira nota Modelo Anáhuac con créditos, números de créditos de materias y de los tres bloques. Fecha RVOE retirada del CTA y pie, conservando RVOE SEP · D.O.F. Summer Schools del contenido curricular conservadas.

- Engineering Management, solo local: se elimina bloque de egresados y cifra del 90%; bloque profesional sustituido por «Ingeniería y negocios: una combinación para llegar más lejos», con texto literal y énfasis solicitado. Se retira línea separada de áreas/Summer Schools/estancias.

- Engineering Management, solo local: retirado el texto descriptivo bajo Claustro docente sobre congresos, publicaciones y experiencia industrial. Tarjetas conservadas.

- Engineering Management, solo local: FAQ comparativa con Industrial sustituida por pregunta y respuesta literales del usuario, con énfasis en habilidades de cada carrera. FAQPage sincronizado con el texto visible.

- Engineering Management, solo local: inicio del Bloque Profesional cambiado a «El corazón de tu carrera.», conservando el resto del párrafo.

- Engineering Management, instrucción posterior: se revierte únicamente el dato de 3.5 años a 3 Summer Schools, conservando el resto de ajustes locales.

- Engineering Management, solo local: marca gris del H1 reducida de .62em a .48em, interlineado 1.2 y margen superior space-8 para evitar superposición con el título; CSS versionado.

- 2026-11-13, Engineering Management, solo local: por nueva instrucción del usuario el dato destacado 3 Summer Schools cambia a 4.5 Años. Las menciones curriculares de Summer Schools se conservan.

- 2026-11-13, Engineering Management, corrección local: faltaba cargar assets/review/review.js al final del HTML; se agrega la misma integración usada en las otras ingenierías para habilitar review=true con token válido.

- 2026-11-19: propuesta local para pestañas de Así se vive en Estudia con nosotros: botones con fondo lila, tipografía mayor, selección morada y texto blanco, distribución adaptable. Sin cambios de contenido; pendiente de revisión y publicación.

- Estudia con nosotros: se descarta propuesta de botones con fondos por demasiado protagonismo. Nueva propuesta local conserva tipografía y tamaño originales, sin fondos ni cajas; jerarquía por opacidad y subrayado naranja fino, con separador tenue. Usuario solicita revisión directa en local, sin capturas.

- Estudia con nosotros, revisión local: usuario prefiere base original con marco fino y sombreado lila suave por pestaña; tamaño y tipografía originales, selección en negritas y línea naranja conservadas. Sin capturas ni publicación.

- Estudia con nosotros, solo local: pestañas con esquinas rectas por solicitud del usuario, apariencia tipo archivero. Se conserva borde fino, lila tenue y selección con naranja y negritas.

- Estudia con nosotros, solo local: pestaña activa sin línea naranja inferior, integrada a la línea continua del módulo mediante borde inferior transparente y fondo del módulo; apariencia de archivero, esquinas rectas y negritas conservadas.

- Estudia con nosotros, solo local: pestañas contiguas sin separación y con un único borde divisor compartido; seleccionada abierta por abajo.

- Estudia con nosotros, solo local: redondeado únicamente en las dos esquinas superiores de cada pestaña; base recta, divisores compartidos y activa abierta conservados.

- Estudia con nosotros, propuesta local: pestañas inactivas en morado oscuro y texto blanco; activa mantiene fondo claro, negritas y base abierta. Esquinas superiores redondeadas y borde divisor único conservados.

- Estudia con nosotros, local: indicador naranja solo en el borde superior de la pestaña activa; se oculta inmediatamente al cerrar, eliminando la animación residual inferior. Base abierta conservada.

- Corrección local del indicador: naranja debajo del texto de la pestaña activa, no arriba; mantiene base abierta e inactivas sin indicador.

- Estudia con nosotros, solo local: más espacio interior en pestañas (space-6/space-7), mayor separación superior y hacia el contenido (space-10), morado inactivo suavizado conservando letras blancas y desplazamiento horizontal si no caben. Estilo de archivero y selección naranja conservados. Usuario pide revisión directa sin capturas.

- 2026-11-19: por instrucción final del usuario se descartan las propuestas locales de pestañas y se restaura el diseño original publicado de Estudia con nosotros (CSS y referencia de hoja de estilos). Sin publicación ni cambios al contenido.

- Estudia con nosotros, nueva propuesta local aprobada para prueba: base original con 18px escritorio/16px móvil, mayor área de pulsación, fondo lila solo activa, naranja y negritas. Navegación horizontal contenida y activa visible al cambiar; teclado con flechas/Home/End. Sin capturas para el usuario ni publicación.

- 2026-11-19, Estudia con nosotros, propuesta local basada en referencia de navegación con iconos: siete SVG de línea propios por categoría, tarjetas blancas con divisores finos y activa morada con texto/icono blanco y acento naranja. Tipografía actual conservada y desplazamiento móvil existente. Sin publicación.

- Estudia con nosotros, propuesta local de categorías con iconos: usuario aprueba y pide radio redondeado del sitio. Aplicado radius-button a las pestañas y separación mínima para respetar las esquinas, conservando iconos y colores.

- Estudia con nosotros, solo local: a ≤640px pestañas compactas con icono sobre etiqueta, dos filas de texto como objetivo, fila deslizable que muestra parte de siguiente categoría y flechas debajo junto al contenido. Activa conserva morado y seguimiento visible. Escritorio sin cambio por estas reglas. Sin capturas.

- Estudia con nosotros, móvil local: flechas junto a la tira de categorías, en columna compacta a su derecha para mantener superficie táctil y espacio de etiquetas; escritorio sin cambios.

- Estudia con nosotros, móvil local: una categoría completa por vista, sin asomar la siguiente, con una flecha a cada lado en la misma línea. Reemplaza distribución anterior de flechas en columna. Escritorio intacto.

- Estudia con nosotros, local: retiradas las siete etiquetas naranjas de categoría y contador (ej. DEPORTE 01 / 07) sobre los títulos del showcase. Se conservan navegación, títulos y contenidos.

- Estudia con nosotros, solo local: retirada la etiqueta Montañismo de Deportes por solicitud del usuario.

- 2026-11-19, Estudia con nosotros, solo local: CTA «Agenda tu visita» de ecn-ruta-cta pasa de botón blanco a naranja del sistema, con texto 22px en negritas y mayor espacio interior. Enlace #visita conservado; otros CTA intactos.

- Estudia con nosotros, solo local: CTA Agenda tu visita cambia de naranja a morado con texto blanco para distinguirse de la siguiente sección naranja; conserva tamaño mayor y añade space-10 debajo.

- Estudia con nosotros, solo local: primera imagen de galería alineada al texto mediante margen medido; avance automático cada 6s solo visible, pausa al interactuar/hover/foco, control Pausar/Reproducir y respeto a movimiento reducido.

- Estudia con nosotros, solo local: texto del CTA Agenda tu visita y recórrelos aumentado a 22px en negritas con espaciado adecuado y ajuste de línea para móvil. Fondo negro y enlace conservados.

- Estudia con nosotros, solo local: interlineado 1.18 en el título Dos campus, una sola universidad, sin alterar tamaño ni otros títulos.

- Estudia con nosotros, propuesta local de eventos: fila de tres tarjetas (apiladas en móvil), título y descripción, sede con icono de ubicación y soft CTA Más información. Sedes pendientes marcadas Sede por confirmar; CTA provisional a contacto.html hasta recibir enlaces específicos. No se inventan fechas ni campus.

- Eventos de Estudia con nosotros, local: sedes asignadas por el usuario en orden: Vive Anáhuac—Campus Sur; Clase muestra por área—Campus Norte; Taller vocacional—Bi-Campus. Enlaces específicos pendientes; CTA provisional a Contacto conservado.

- Estudia con nosotros, eventos local: sede con icono movida inmediatamente debajo del nombre de cada evento; Más información conservado al pie.

- Estudia con nosotros, propuesta local: Tour y Cita con mismo ancho y estructura; tour foto arriba sin texto superpuesto; cita cabecera lila con icono de conversación. Cuerpos blancos, botones morados al pie y alineados, contenido y enlaces conservados. Apilado móvil. Sin capturas ni publicación.

- Estudia con nosotros, revisión local de visita: tarjeta de Cita completa en lila suave, cabecera transparente para superficie continua, icono naranja y título/botón morados. Tour blanco con foto conservado.

- Estudia con nosotros, solo local: CTA Tour mantiene morado sólido; CTA Cita pasa a borde/texto morados y fondo transparente, sin cambiar dimensiones ni alineación.

- Estudia con nosotros, local: icono de Cita pasa de 80px a 160px en escritorio y 104px en móvil ≤640px; trazo 1.2 para conservar ligereza y naranja existente. Sin capturas.

- Estudia con nosotros, icono Cita local: sustituye caja de conversación por persona con diadema y micrófono, inspirado en referencia del usuario; naranja, trazo fino y tamaños aprobados conservados.

- Estudia con nosotros, icono de asesor local: cabeza ampliada de radio 7 a 9, hombros de 11 a 15 y auriculares más compactos para equilibrar persona y diadema. Tamaño general y estilo conservados.

- Estudia con nosotros, asesor local: diadema reducida a radio 10.5 y auriculares a 3.5×7; persona conservada. Micrófono más compacto.

- Estudia con nosotros, propuesta local posterior: tarjeta de cita cambia de lila a degradado naranja suave (18% a 5% sobre surface), icono de persona/diadema morado oscuro y descripción más oscura para lectura. Conserva tamaño, estructura y CTA de contorno. Sin publicación.

- Estudia con nosotros, solo local: título de Cita cambia a color-text (negro); icono y botón morados y fondo naranja suave conservados.

- Estudia con nosotros, propuesta local: tour más ancho (1.15fr) y cita compacta (.85fr), fondo naranja al 3% casi blanco cálido; icono 80px sobre título sin cabecera de altura fija. Botones conservados con jerarquía sólido/contorno y alineación inferior. Sin capturas.

- Estudia con nosotros, revisión final local solicitada: descarta durazno y asimetría; recupera columnas iguales, cita lila suave e icono naranja centrado en cabecera equivalente a la foto. Título negro y botón de contorno morado conservados, botones alineados.

- Publicación de Estudia 275ce8c: varios despliegues fallaron al listar artefactos con deploy-pages v5 pese a existir en REST. Se fija deploy-pages v4.0.0 por SHA verificado, que lista por REST, y permiso mínimo actions:read para esa consulta. Se conserva timeout y diseño.

- 2026-11-20, Comunicación, solo local: once descripciones del claustro actualizadas con textos de la usuaria y cinco ajustes editoriales aprobados; cargos de Director y Coordinador conservados, sin inventar cargos para los demás. Formato e imágenes sin cambios.

- 2026-11-20, Área Ciencias de la Salud, solo local: dos textos de Nutrición simplificados para prospectos según versión aprobada: afinidad sobre salud/alimentación/prevención e innovación; descripción sobre planes personalizados y proyectos de bienestar. Descripción estructurada sincronizada con afinidad.

- 2026-11-20, Ciencias de la Salud, solo local: cuarta fila de Historias Anáhuac en morado con texto Pendiente testimonio y dos imágenes de referencia, sin nombre ni cita inventados, para mantener alternancia naranja/morado al repetirse el carrusel.

- 2026-11-20, Estudia con nosotros, solo local: por nueva solicitud tour 60% y cita 40% en escritorio, conservando lila/icono naranja. Cabeceras de igual altura para alinear títulos y botones al pie; móvil mantiene tarjetas apiladas sin cambio de proporción.

- 2026-11-20, Estudia con nosotros, local: fecha lateral 22 Mayo 2026 en los tres eventos por instrucción explícita de la usuaria; reemplaza Próximamente. Día grande morado, sede bajo título y CTA inferior; actualización manual.

- 2026-11-20, revisión local de eventos: usuaria prefiere fecha al lado derecho; sustituye posición izquierda, mantiene formato y fechas.

- 2026-11-20, eventos local: fecha derecha pasa a etiqueta morada con radio del sistema, día blanco recto y Mayo 2026 en lila debajo, como referencia de usuaria.

- 2026-11-20, eventos local: jerarquía aprobada: título/sede junto a fecha en cabecera, descripción debajo a todo el ancho y Más información con separador inferior completo.

- 2026-11-20, índice paginas.html local: agrega Contacto, Costos y Becas y Test vocacional con En revisión; conserva estados previos y actualiza conteos y fecha. Verificados enlaces contra archivos versionados.

- 2026-11-20, índice: por instrucción explícita de la usuaria, excluir costos-becas.html del índice; página conservada. Quedan Contacto y Test vocacional como nuevas entradas En revisión.

- 2026-11-20, índice local: las 10 carreras con Por revisar MP pasan a En revisión por instrucción de la usuaria. Total 27 En revisión; sin cambios en otros estados.

- 2026-11-20, índice local: usuaria autoriza Biotecnología, Psicología, Proceso de admisión, Fechas de examen, Apoyos económicos, Estudiantes foráneos, Campus Norte y Campus Sur. Etiqueta AUTORIZADA y conteos sincronizados.

- 2026-11-20, índice local: área Ciencias de la Salud y Medicina etiquetadas Pendiente egresados; Gastronomía y Comunicación Pendiente convenios/egresados, según columna 5 de captura de usuaria. Los cuatro se agrupan en Pendientes de cliente en la cabecera.

- 2026-11-20, índice local: etiquetas is-pending en naranja con fondo naranja suave; resumen de totales sin cambio, según solicitud.

- 2026-11-20, índice local: trece páginas indicadas por usuaria cambian a En revisión coordinador: área Turismo, nueve carreras de Ingeniería/Ciencias (excluye Engineering Management) y tres carreras de Turismo/Hospitalidad. Conservan clase is-review y conteo agrupado.

- 2026-11-20, índice local: Cirujano Dentista y Nutrición muestran SIN RESPUESTA DE REVISIÓN + 1 MES con variante roja is-overdue usando accent-red; conservan is-review para conteo general.

- 2026-11-20, índice local: Terapia Física y Rehabilitación cambia a EN AJUSTES; conserva estilo de revisión y conteo agrupado.

- 2026-11-20, índice local: EN AJUSTES de Terapia Física usa azul (accent-blue) y fondo azul suave, sin alterar el conteo.

- 2026-11-23, Engineering Management, local: hero compacto con H1 de escala heading-3 (40px) y estructura del molde Industrial. Denominación inglesa sale del H1 a texto independiente gris heading-4 para que el autoajuste no reduzca el título por contar tipografías de distintas alturas. Foto, botones, claim y chips conservados.

- 2026-11-23, Engineering Management local: botones del hero en dos columnas iguales sin salto de fila; texto adaptable, tamaño móvil y padding por tokens para conservar ambos en paralelo sin desbordamiento.

- 2026-11-24, Curso para examen local: tres tags del hero suben antes del CTA; Regístrate debajo, ampliado con escala heading-4 y padding por tokens, ancho completo en móvil. Solo ajuste solicitado, sin aplicar propuesta general.

- 2026-11-24, Curso para examen, ajustes generales autorizados solo local: ritmo más compacto, Cómo funciona con más ancho útil móvil, calendario2026 con sesiones anteriores en details y próximas visibles según fecha Cancún, aclaración de selección en formulario; formulario HubSpot estilizado (campos48px, botón60px) sin cambiar campos/opciones/captura. Barra móvil registro dominante y WhatsApp contorno, safe-area y oculta en foco; corrige privacidad al enlace usado por propio HubSpot y proceso a proceso-de-admision.html.

- 2026-11-26, Educación local: usa estructura del molde Industrial/psicologia.css, nueve cuatrimestres y dos bloques, 40 materias del PDF y tres Estadías. Información exclusiva de Educación contrastada entre cuatro adjuntos; no arrastra asincronía religiosa, Minor, ABET, estadísticas ni testimonios. CTA Iniciar proceso desactivado sin destino por instrucción de la usuaria; cliente definirá contacto después. Recursos virtuales usan tarjetas existentes, sin módulos nuevos.

- 2026-11-26, revisión de Educación local: usuaria pide módulos completos canónicos: lic-porque2 con media/carrusel y tarjetas, campo-layout con selector/preview, lic-inst-slider adaptado a recursos virtuales, Historias Anáhuac y lic-colab completo, y Siguiente paso en lugar de Admisión. Historias/claustro/convenios sin datos adjuntos se marcan pendientes, sin citas/personas/alianzas inventadas. CTA de inicio continúa desactivado sin destino.

- 2026-11-26, Educación local: Siguiente paso queda con tres tarjetas exactas de Industrial: Cotiza tu carrera, Apoyos socioeconómicos y Habla con un asesor; conserva sus textos, iconos y destinos base. Elimina restantes tarjetas y banda adicional de inversión. Hero Iniciar proceso sigue sin destino y desactivado.

- 2026-11-26, Educación local: FAQ reducidas de diez a seis según propuesta aprobada; integra trabajo/modalidad/acompañamiento, perfil/diferencia con Pedagogía, duración/plan, admisión, titulación/servicio social y becas. Schema FAQPage sincronizado.

- 2026-11-26, Educación local: agrega los dos módulos finales del molde: experience y lic-form. Experiencia adapta cuatro mensajes al enfoque ejecutivo y recursos confirmados; medios institucionales del molde. Solicita información conserva estructura, datos de interés y opciones de material; modalidad aula virtual, sin fechas/campus inventados. Formulario íntegramente desactivado y sin envío hasta definir contacto/integración con cliente, conforme al CTA sin destino acordado.

- 2026-11-26, Educación local: corrige atributos value del formulario a Educación y Presencial en aula virtual; retira párrafo bajo título del plan y texto bajo verbos del hero; simplifica RVOE y pie a RVOE SEP · D.O.F. Añade tag +23 años por solicitud explícita. Campus pendiente de confirmación; no asumir bicampus a partir de folleto institucional. Los demás hallazgos de auditoría quedan pendientes de cliente.

- 2026-11-26, Educación local: título de banda morada de Campo laboral cambia a Profesionaliza tu experiencia en educación sin dejar de trabajar, por texto aprobado de la usuaria.

- 2026-11-26, Educación local: RVOE usa plan-rvoe-link del molde, con borde redondeado, subrayado e icono externo; texto RVOE SEP D.O.F. Enlace al apartado del folleto suministrado (p9), sin inventar URL de documento oficial.

- 2026-11-26, Educación local: Siguiente paso con lead a todo el ancho y tres tarjetas juntas en tres columnas; móvil hasta600px se apila. Cambio acotado a pagina-educacion.

- 2026-11-27, Educación local: incorpora tres fotos adjuntas en ubicaciones puntuales por instrucción de no cambiar todas: comunidad en primer slide de Por qué; coordinación en primer ámbito/preview de Campo laboral; aula junto al formulario. Conserva demás imágenes. WebP optimizadas y encuadres locales; ninguna persona se atribuye a claustro o testimonio.

- 2026-11-27, Educación local: por revisión de usuaria, foto del salón pasa al segundo slide de Por qué la Anáhuac; formulario recupera imagen previa del folleto.

- 2026-11-27, Educación local: formulario usa Sur-135.jpg optimizada como solicita-informacion.webp; encuadre78% para conservar a la estudiante. No cambia otras imágenes.

- 2026-11-27, Educación local: imagen de Perfil de egreso sustituida por la foto Gemini_Generated_Image_e36xqye36xqye36x.jpeg suministrada; versión WebP con encuadre62%. Sin otros cambios de imágenes.

- 2026-11-27, Educación local: segunda foto de Por qué la Anáhuac sustituida por nueva versión del salón proporcionada por la usuaria; demás fotos conservadas.

27nov2026: Recursos para tu formación incorpora las tres fotografías proporcionadas: biblioteca, herramientas y webinars, en ese orden. Encuadres individuales en tarjetas 3:2; ajuste exclusivamente local.

2026-11-27: Usuaria autoriza commit, merge y push de Educación como página en revisión. Se conservan pendientes explícitos de testimonios, claustro, convenios, campus e integración del formulario; no se presentan como información confirmada. Se incorpora al índice con En revisión.
## 2026-11-27 · Ciencias Religiosas, revisión local autorizada

- Sincronizada con origin/main177f3a8 antes de cambios. Usuaria solicita aplicar ajustes de Educación y otras carreras solo en local, sin capturas; datos e imágenes por confirmar quedan para cliente.
- Tres tarjetas en Siguiente paso, botones del hero en paralelo también en móvil y título compacto validado en32 anchos. Ocho FAQ tras integrar modalidad/trabajo, conservando las preguntas nuevas y FAQPage sincronizado.
- RVOE sin fecha y desactivado hasta recibir enlace; formulario de referencia desactivado, sin promesa de envío ni periodo confirmado. Textos de experiencia adaptados a formación a distancia; imágenes intactas. Historias con Pendiente testimonio.
- Enlaces locales disponibles conectados; privacidad enlaza al directorio institucional consultado desde la página oficial. No se incorporan precios, contactos ni datos nuevos de la referencia. Especificación: specs/licenciatura-ciencias-religiosas.md.

- 2026-11-27: usuaria autoriza publicar los ajustes revisados de Ciencias Religiosas. Integrar origin/main con área-ejecutivas y conservar su enlace; datos e imágenes pendientes permanecen para cliente.
