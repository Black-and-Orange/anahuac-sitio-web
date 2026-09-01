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

### 2026-09-01 — Nutrición: CTA lateral en la banda de vinculación
- La revisión humana retira el texto institucional del 70% de empleabilidad.
- Los dos CTA ocupan el lateral derecho en escritorio y vuelven debajo en tablet
  y móvil. Es una variante local: no se inventa un icono ni se usan logotipos de
  Nestlé, Danone o Herdez sin autorización, y no cambia la banda compartida.

### 2026-09-01 — Gastronomía: cuarta carrera sobre el molde
- Maqueta en `gastronomia.html` + `gastronomia.css`. Nace con `pagina-carrera`,
  así que hereda las diez correcciones del molde. Cero componentes nuevos.
- El H1 fija dos líneas —«Licenciatura» / «en Gastronomía»—. La segunda conserva
  juntas sus palabras y baja a `0.88em`: evita tanto el tercer renglón como el
  desbordamiento detrás de la imagen, sin tocar el molde compartido.
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
