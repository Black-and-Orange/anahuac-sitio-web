# Página: Fechas de examen de admisión — Anáhuac México
### Documento de handoff para diseño (estructura + copy final integrados)

> **Para el agente de diseño:** este documento es autocontenido y combina, módulo por módulo, la **arquitectura** (qué componente va, en qué orden, con qué lógica) y el **copy final** (texto literal listo para publicar). Aplica el **design system del rediseño** ya conocido (paleta naranja `#FF5900`, morado `#5D428C`, tipografías display + Roboto, componentes de tarjeta/tabla/acordeón/tabs ya definidos). No introduzcas componentes nuevos fuera de los del sistema. Todo el texto entre comillas «…» es **copy literal**: úsalo tal cual, no lo reescribas.

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/fechas-de-examenes` (se conserva la URL en producción; concentra 45 keywords ya posicionadas) |
| **Tipo** | Landing utilitaria de fondo de embudo (transaccional/navegacional, no descubrimiento) |
| **Audiencia** | Preuniversitario bottom-of-funnel (ya decidido o casi) + padres verificando logística |
| **Objetivo** | Convertir la consulta "¿cuándo es el examen?" en registro de admisión o contacto con asesor, sin fricción |
| **Campus** | Solo Anáhuac México: **Campus Norte** y **Campus Sur** (no otros campus de la Red) |
| **Alcance de fechas** | Se alimentan de **HubDB** (HubSpot); la página muestra **todas** las fechas vigentes por campus |

## 2. Reglas globales (aplican a toda la página)

- **Copy 100% atemporal:** nunca hardcodear un año/ciclo en texto fijo (ni H1, ni meta, ni FAQ). Las fechas concretas viven **solo** en el HubDB.
- **Tono:** claro, cercano y logístico; menos storytelling emocional que Home/Carrera, más certeza y confianza operativa.
- **Un CTA primario por módulo** (excepción: módulo 4, que es un menú de decisión con 4 CTAs de igual jerarquía).
- **Sin formulario de contacto tradicional** al cierre (decisión del cliente); la conversión vive en el módulo 4 y en el módulo de asesor (6).
- **Datos de modalidad confirmados:** examen **académico y psicométrico en línea**; **entrevista presencial** en el campus elegido.
- **Periodicidad confirmada:** el examen se aplica **cada semana durante todo el año**, para las **dos admisiones** de la universidad: ingreso en **agosto** e ingreso en **enero**.
- **Costo confirmado:** **$1,335 MXN**.

## 3. Metadatos SEO / AEO

- **Title tag (45 car.):** «Fechas de Examen de Admisión | Anáhuac México»
- **Meta description (159 car.):** «Consulta las fechas de examen de admisión en Campus Norte y Sur de Anáhuac México. Examen en línea; entrevista presencial. Elige tu fecha e inicia tu admisión.»
- **Keyword principal:** `fechas de examen de admisión Anáhuac México`
- **Secundarias:** `examen de admisión`, `cuándo son los exámenes de admisión`, `calendario Anáhuac` (sin año), `admisiones Anáhuac`, `examen de admisión Anáhuac`
- **Cola larga AEO:** `cuándo es el examen de admisión Anáhuac`, `próximas fechas de examen de admisión`, `requisitos examen de admisión Anáhuac`, `guía examen de admisión Anáhuac`, `curso para el examen de admisión Anáhuac`, `costo examen de admisión Anáhuac`, `puedo cambiar mi fecha de examen de admisión`
- **Open Graph:**
  - `og:title`: «Fechas de Examen de Admisión — Anáhuac México»
  - `og:description`: «Consulta las fechas del examen de admisión en Campus Norte y Sur, disponibles cada semana durante todo el año. Examen en línea, entrevista presencial.»
  - `og:image alt`: «Fechas de examen de admisión en Campus Norte y Campus Sur de la Universidad Anáhuac México»
- **Schema:** `FAQPage` (módulo 5) · `BreadcrumbList` (Inicio > Admisiones > Fechas de examen) · `CollegeOrUniversity` · `Event` por convocatoria *(condicionado — ver §Pendientes)*.

## 4. Mapa de encabezados (jerarquía semántica)

- **H1** — «Fechas de examen de admisión Anáhuac México» (módulo 1)
  - **H2** — «Antes de tu examen» (módulo 2)
  - **H2** — «¿Cuándo es el próximo examen de admisión?» (módulo 3)
  - **H2** — «Elige el siguiente paso para tu futuro» (módulo 4) → H3 por tarjeta
  - **H2** — «Preguntas frecuentes» (módulo 5) → H3 por pregunta (7)
  - **H2** — «¿Tienes alguna duda?» (módulo 6)
  - Footer (módulo 7): sin H2; columnas con H3/H4 según sistema

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · Encabezado: **H1**

**Objetivo:** responder de inmediato "¿cuándo es el examen?" (respuesta directa arriba del pliegue, formato featured snippet) y presentar el único CTA sin scroll.

**Especificación de diseño:**
- Hero corto (no requiere tanto aire como Home/Carrera). CTA visible sin scroll, también en móvil.
- Media real (video/imagen) de un aspirante en registro o llegando al campus.
- 3 chips en fila; un solo botón primario.

**Copy final:**
- Eyebrow: «Admisión Anáhuac México»
- **H1:** «Fechas de examen de admisión Anáhuac México»
- Claim: «Elige el día y el campus que mejor se acomoden a ti»
- Párrafo de respuesta directa (bloque AEO, autocontenido):
  «El examen de admisión de la Universidad Anáhuac México se aplica cada semana durante todo el año, en Campus Norte y Campus Sur, para las dos admisiones de la universidad: ingreso en agosto e ingreso en enero. Consulta el calendario vigente más abajo y elige la fecha que mejor se ajuste a ti.»
- Chips (solo 3): «Agenda de fechas en línea» · «Examen académico y psicométrico en línea» · «Entrevista presencial»
- **CTA (único):** «Conocer fechas» → ancla `#modulo-fechas` (módulo 3). Sin CTA secundario.

**Alt text media:** «Aspirante de la Universidad Anáhuac México completando su registro de admisión en línea antes de presentar su examen»

---

## Módulo 2 — Antes de tu examen · AIDA: Interés · Encabezado: **H2**

**Objetivo:** puente breve entre "sé cuándo quiero presentar" y "sé qué necesito listo", sin duplicar el proceso completo de admisión.

**Especificación de diseño:**
- Grid de 4 tarjetas compactas con ícono numerado (menos texto que el módulo equivalente de Admisión general).
- Un solo enlace secundario tipo texto (no botón) al final.

**Copy final:**
- **H2:** «Antes de tu examen»
- Subtítulo: «Cuatro pasos rápidos antes de elegir tu fecha de examen.»
- Tarjeta 1 — **Regístrate en línea:** «Crea tu cuenta en la plataforma de admisión y elige el campus de tu preferencia: Norte o Sur.»
- Tarjeta 2 — **Sube tus documentos:** «Acta de nacimiento, CURP y tu certificado, constancia o historial académico, escaneados.»
- Tarjeta 3 — **Elige tu fecha:** «Selecciona tu día de examen según la disponibilidad de cupo vigente por campus — consulta el calendario aquí abajo.»
- Tarjeta 4 — **Recibe tu credencial digital:** «Con tu número de expediente y acceso a la plataforma para presentar tus exámenes.»
- Enlace secundario (texto): «Conoce el proceso de admisión completo →» → `/licenciaturas/admision-general`

**Notas:** el enlace usa anchor descriptivo (no "clic aquí"); refuerza el enlazado cruzado con Admisión.

---

## Módulo 3 — Encuentra tu fecha de examen (HubDB) · AIDA: Deseo · Encabezado: **H2**

**Objetivo:** módulo central de la página. Mostrar de forma tangible que hay fechas reales y próximas (prueba de disponibilidad). `id="modulo-fechas"`.

**Especificación de diseño:**
- **Desktop:** tabla de datos. **Móvil:** tarjetas apiladas (una por fecha) con relación campo-valor (`dl`/`dt`/`dd`).
- Tabs de filtro por campus. Se muestran **todas** las fechas vigentes de cada campus, **sin paginación, sin botón "ver todas", sin "última actualización", sin CTA por fila** (tabla informativa).
- Ordenar cronológicamente por examen académico ascendente; ocultar fechas pasadas.
- Estado vacío amable si un campus no tiene fechas.
- Badge de cupo nunca solo por color (siempre con texto).

**Copy final:**
- **H2 (pregunta, AEO):** «¿Cuándo es el próximo examen de admisión?»
- Bloque de respuesta directa (autocontenido):
  «El examen de admisión en la Anáhuac México se aplica de forma semanal durante todo el año, en Campus Norte y Campus Sur. Las convocatorias están sujetas a disponibilidad de cupo: filtra por campus para ver la fecha límite de documentos, los exámenes y la entrega de resultados vigentes.»
- Tabs: «Todas» · «Campus Norte» · «Campus Sur»
- Encabezados de columna: «Campus» · «Fecha límite de documentos» · «Examen académico» · «Examen psicométrico» · «Entrevista personal» · «Entrega de resultados» · «Disponibilidad de cupo» *(esta última columna condicionada — ver Pendientes)*
- Texto fijo en celda de Entrevista: «Se agenda directamente en la plataforma de admisión en línea.»
- Estado vacío: «Nuevas fechas próximamente para este campus.»
- Callout permanente bajo la tabla: «Las fechas de examen están sujetas a disponibilidad de cupo y se actualizan cada mes.»
- **CTA:** ninguno (informativo).

**`aria-label` por tarjeta móvil (ejemplo):** «Fecha de examen — Campus Norte, examen académico [fecha de HubDB]».

### Mapeo a HubDB — tabla `fechas_examen_admision`

| Columna | Tipo | Uso |
|---|---|---|
| `campus` | Selección (Norte / Sur) | Agrupa/filtra por tabs |
| `ciclo` | Texto (ej. "Convocatoria [mes]") | Archiva convocatorias sin escribir el año en el copy fijo |
| `fecha_limite_documentos` | Fecha | Columna 1 |
| `fecha_examen_academico` | Fecha | Columna 2 + criterio de orden |
| `hora_examen_academico` | Texto (ej. "15:00 hrs CDMX") | Detalle en la celda |
| `fecha_examen_psicometrico` | Fecha | Columna 3 |
| `fecha_entrega_resultados` | Fecha | Columna 5 |
| `cupo_disponible` | Selección (Disponible / Últimos lugares / Cerrada) | Badge de estado *(condicionado)* |
| `activo` | Booleano | Oculta filas pasadas sin borrarlas |
| `orden` | Número | Desempate manual si dos fechas caen el mismo día |

**Lógica de render:** query `activo = true`, `ORDER BY fecha_examen_academico ASC`, agrupado por `campus`. Mostrar **todas** las filas vigentes (sin colapsar); escalar de 1 a 10+ filas por campus sin romper el layout. Filtro de tabs client-side sobre el mismo dataset. Sin columna `liga_registro` (no hay CTA por fila).

---

## Módulo 4 — Elige el siguiente paso para tu futuro · AIDA: Acción · Encabezado: **H2**

**Objetivo:** dar salida de acción a quien ya vio las fechas; menú de decisión según nivel de intención. Sustituye al formulario de cierre.

**Especificación de diseño:**
- Grid de 4 columnas en desktop (apiladas en móvil). Patrón de tarjeta con ícono + texto breve + CTA tipo link con flecha «›».
- 4 CTAs de igual jerarquía (ninguno es "el" primario).

**Copy final:**
- **H2:** «Elige el siguiente paso para tu futuro»
- Subtítulo: «En la Anáhuac México te estamos esperando, sea cual sea el paso en el que estés.»
- **Tarjeta 1 (H3) — Iniciar proceso de admisión:** «Comienza tu registro en línea y aparta tu lugar para presentar el examen.» → CTA «Inicia tu admisión» → *[PENDIENTE: URL de la plataforma de registro]*
- **Tarjeta 2 (H3) — Conocer pasos del proceso de admisión:** «Revisa paso a paso cómo es el proceso de admisión, desde el registro hasta tu inscripción.» → CTA «Conocer el proceso» → `/licenciaturas/admision-general`
- **Tarjeta 3 (H3) — Guía para el examen de admisión:** «Descarga la guía oficial para prepararte antes de presentar tu examen.» → CTA «Descargar guía» → `https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/Guia%20%20de%20estudio%20KP_RUA_V2-1.pdf?hsCtaTracking=6e4c228f-7dc0-4048-9079-a2a6727c5935%7C8c519207-1bde-4dda-9b8a-b272e8e2ab7a` *(abre en pestaña nueva)*
- **Tarjeta 4 (H3) — Curso para el examen de admisión:** «Regístrate al curso de preparación para el examen de admisión.» → CTA «Conocer el curso» → `https://mexico.anahuac.mx/curso-preparaci%C3%B3n-acad%C3%A9mica-universidad-an%C3%A1huac-m%C3%A9xico` *(abre en pestaña nueva)*

**Íconos de referencia (maqueta):** 🎓 🧭 📘 🧑‍🏫 (sustituibles por ilustración del sistema).

---

## Módulo 5 — Preguntas frecuentes · AIDA: Acción · Encabezado: **H2**

**Objetivo:** resolver objeciones en formato AEO/featured snippet; aportar `FAQPage` schema y SEO long-tail.

**Especificación de diseño:**
- Acordeón nativo `<details>`/`<summary>`; la 1ª pregunta abierta por default. Marcar el bloque con `schema.org/FAQPage`.

**Copy final (7 preguntas, respuesta directa primero):**

1. **¿Cuándo son los exámenes de admisión de la Anáhuac México?** *(abierta por default)*
   «Los exámenes de admisión se aplican durante todo el año, cada semana, para las dos admisiones de la Universidad Anáhuac México: ingreso en **agosto** e ingreso en **enero** de cada ciclo vigente. Consulta el calendario de arriba para ver las fechas disponibles por campus.»

2. **¿Cada cuánto hay convocatorias de examen?**
   «Hay fechas de examen **cada semana** a lo largo del año, ya que la Anáhuac México cuenta con dos periodos de ingreso: agosto y enero. Elige la fecha que mejor se acomode a ti dentro del calendario vigente.»

3. **¿Qué necesito tener listo antes de mi examen?**
   «Acta de nacimiento, CURP y tus documentos académicos (certificado, constancia o historial con el mínimo de materias aprobadas). Revisa el detalle completo en el proceso de admisión.»

4. **¿Cuánto cuesta presentar el examen de admisión?**
   «El costo del examen de admisión es de **$1,335 MXN**. Este pago forma parte de tu proceso de admisión y te da acceso a presentar el examen académico y psicométrico, y a agendar tu entrevista.»

5. **¿Puedo cambiar mi fecha de examen si no puedo asistir?**
   «Sí. Si no puedes asistir en la fecha que elegiste, es posible reprogramar tu examen: contacta a tu asesor de admisión y te apoyará con el cambio de fecha.»

6. **¿El examen es presencial o en línea?**
   «La aplicación del examen (académico y psicométrico) es **en línea**. La **entrevista** es **presencial**, en el campus que elijas (Norte o Sur).»

7. **¿Cómo me preparo para el examen de admisión?**
   «Puedes prepararte con dos recursos oficiales: la [guía de estudio para el examen de admisión](https://3807214.fs1.hubspotusercontent-na1.net/hubfs/3807214/Guia%20%20de%20estudio%20KP_RUA_V2-1.pdf?hsCtaTracking=6e4c228f-7dc0-4048-9079-a2a6727c5935%7C8c519207-1bde-4dda-9b8a-b272e8e2ab7a) y el [curso de preparación académica](https://mexico.anahuac.mx/curso-preparaci%C3%B3n-acad%C3%A9mica-universidad-an%C3%A1huac-m%C3%A9xico). Ambos enlaces están disponibles directamente aquí, sin necesidad de bajar al módulo "Elige el siguiente paso".»

---

## Módulo 6 — ¿Tienes alguna duda? (asesor humano) · AIDA: Acción · Encabezado: **H2**

**Objetivo:** salida humana de alto contacto; destino de quien no resolvió en el FAQ ni está listo para registrarse solo. Es también el punto de apoyo para reprogramar fecha (ver FAQ 5).

**Especificación de diseño:**
- Patrón de asesoría humana ya aprobado: foto real (no genérica) + tarjeta con datos y CTAs. Considerar 1 tarjeta por campus si hay asesores distintos Norte/Sur.

**Copy final:**
- **H2:** «¿Tienes alguna duda?»
- Subtítulo: «Nuestro equipo de asesores preuniversitarios responde tus preguntas sobre fechas y proceso de admisión.»
- Nombre del asesor: *[PENDIENTE: nombre y foto vigentes]*
- Campo contextual (microcopy): «¿Dónde estudias o estudiaste la preparatoria/bachillerato?»
- **CTA:** «Habla con un asesor» (WhatsApp) *[PENDIENTE: número]* + secundario «Agenda una cita» *[PENDIENTE: enlace]*
- Microcopy: «WhatsApp [pendiente] · Correo [pendiente]»

**Alt text:** «[Nombre del asesor], asesor(a) preuniversitario de la Universidad Anáhuac México»

---

## Módulo 7 — Footer con Newsletter integrado · Encabezado: sin H2

**Copy final:**
- Columna «Descubre»: «Proceso de admisión» (→ `/licenciaturas/admision-general`) · «Costos y becas» · «Vida universitaria» · «Campus Norte y Sur»
- Columna «Programas»: «Oferta académica» · «Todas las licenciaturas» · «Áreas académicas» · «Solicita información»
- Columna «Admisiones»: «Admisión general» (→ `/licenciaturas/admision-general`) · «Fechas de examen» (página actual, sin autolink) · «Cotizador» · «Apoyos educativos»
- Newsletter: título «Mantente informado»; texto «Recibe noticias sobre admisiones, fechas de examen y vida universitaria.»; placeholder «Tu correo electrónico»; botón «Suscribirme»; legal «Al suscribirte aceptas nuestro aviso de privacidad.» (enlazar Aviso de Privacidad)
- Confirmación sugerida: «¡Listo! Ya estás suscrito.» · Error sugerido: «Revisa tu correo electrónico e inténtalo de nuevo.»
- Datos de campus:
  - «Campus Norte · Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Edo. Méx. · +52 (55) 5627 0210»
  - «Campus Sur · Av. de los Tanques 865, Col. Torres de Potrero, Álvaro Obregón, CDMX · +52 (55) 5628 8800»
  - «© Universidad Anáhuac México. Todos los derechos reservados.»

---

# Datos estructurados (guía JSON-LD)

- **`FAQPage`** (módulo 5): un `Question`/`acceptedAnswer` por cada una de las 7 preguntas, mismo orden y texto (incluye los links de la pregunta 7 dentro del `text`). La pregunta 4 (costo $1,335 MXN) ya se incluye normalmente.
- **`BreadcrumbList`:** Inicio (`/`) > Admisiones (`/licenciaturas/admision-general` o categoría) > Fechas de examen de admisión (URL actual).
- **`CollegeOrUniversity`:** `name` "Universidad Anáhuac México"; dos `location` (Campus Norte, Campus Sur) con direcciones/teléfonos de arriba; `url` canónica.
- **`Event`** *(condicionado, no implementar sin luz verde)*: por fila activa de HubDB → `name` "Examen de admisión — Campus [Norte/Sur]", `startDate` = `fecha_examen_academico` + `hora`, `location` = dirección del campus, `eventAttendanceMode` = `MixedEventAttendanceMode` (examen en línea + entrevista presencial), `organizer` = Universidad Anáhuac México.

---

# Accesibilidad (WCAG 2.1 AA)

- Tabla de fechas: `<table>` semántica con `<th scope="col">` en desktop; en tarjeta móvil replicar campo-valor con `dl`/`aria-label` (no solo estilos).
- Tabs de campus: roles `tablist`/`tab`/`tabpanel`, navegables por teclado, estado activo anunciado.
- Acordeón FAQ: `<details>` nativo; contraste del ícono +/–.
- Badges de cupo: nunca solo color; acompañar con texto ("Últimos lugares").
- Foco visible en todos los CTAs y tabs; contraste AA en chips y badges.

---

# Pendientes (no bloquean el diseño; se llenan al integrar en HubSpot)

- **URL de "Inicia tu admisión"** (módulo 4, tarjeta 1) — para no solaparse con "Conocer el proceso".
- **Datos del asesor** (módulo 6) — nombre, foto, WhatsApp, correo, liga de agenda.
- **¿Se expone el cupo por fecha?** — define si la columna "Disponibilidad de cupo" (módulo 3) se publica o se retira.
- **Viabilidad de `Event` schema** por convocatoria (depende de si HubDB expone fechas como entidades públicas indexables).
- **Ruta `/licenciaturas/…`** — validar con desarrollo si HubSpot conserva el segmento en los enlaces internos.
- **Consistencia con el sitio actual** — la página vieja describe examen presencial; confirmar que se actualizará a "en línea + entrevista presencial" antes del lanzamiento.

---

# Fuentes
- `estructuras/fechas-de-examen-admision.md` (arquitectura aprobada + decisiones del cliente 2026-08-06)
- `textos/fechas-de-examen-admision.md` (copy final SEO/AEO)
- `maquetas/fechas-de-examen-admision.html` (referencia visual navegable)
- `docs/base-conocimiento-anahuac.md` · `docs/insumos-extraidos/02-marca-y-seo.md`
- Sitio oficial: `mexico.anahuac.mx/licenciaturas/fechas-de-examenes` y `/licenciaturas/admision-general`
