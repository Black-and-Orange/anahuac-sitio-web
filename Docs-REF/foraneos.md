# Página: Foráneos — Anáhuac México · **v4**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Para el agente de diseño:** documento autocontenido que combina, módulo por módulo, la **arquitectura** (qué componente va, en qué orden, con qué lógica) y el **copy final** (texto literal listo para publicar). Aplica el **design system del rediseño** (naranja `#FF5900`, morado `#5D428C`, tipografías display + Roboto; tarjetas/acordeón/carrusel/video ya definidos). Todo entre comillas «…» es **copy literal**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: no los inventes ni los borres. Anclajes internos con ids estables (`#hospedaje`, `#admision`…). **Esta v4 corresponde 1:1 con la maqueta `maquetas/foraneos.html` ya validada.**

> **Cambios v3 → v4 (última ronda de la clienta):** M6 hospedaje = **un solo CTA** al listado general de ambos campus. M7 se retitula **"Experiencia de nuestros foráneos en la CDMX"** y pasa a **2 videos** (sin checklist). M9 pierde el CTA "Agenda con Bienestar". M10 pierde el "calendario de eventos foráneos". M12 pierde el **mapa interactivo** y las banderas: queda solo el **componente de asesoría de `apoyos-economicos.html`**. M13 gana un CTA secundario **"Conocer pasos del proceso"**. El FAQ (M14) baja a **7 preguntas** (se renombra una y se eliminan 4). En toda la página, **"becas" → "apoyos socioeconómicos"**.

> **Fusiona dos páginas:** `/licenciaturas/foraneos` (actual) **+** `/licenciaturas/admision-extranjeros` (se elimina, 301 → `#admision`). Eje: **foráneo = nacional (fuera de CDMX/Edo. Méx.) o internacional (otro país)**, y **el proceso de admisión es EL MISMO para todos**; el trámite migratorio del extranjero es externo a la universidad.

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/foraneos` (absorbe `/licenciaturas/admision-extranjeros` vía 301 → `#admision`) |
| **Tipo** | Página de soporte/comunidad + herramienta de decisión (no es página de carrera) |
| **Audiencia** | Preuniversitario foráneo (Gen Z), nacional o internacional. Preocupaciones de los padres **integradas** en los módulos al estudiante — sin módulo "Padres de familia" (justificación en §Qué se quita) |
| **Objetivo** | Identificación/pertenencia + resolver dudas prácticas del día a día lejos de casa + dejar claro que el proceso de admisión es el mismo + convertir en una acción |
| **Campus** | Anáhuac México: **Norte** (Huixquilucan, Edo. Méx.) y **Sur** (Álvaro Obregón, CDMX) — ambos visibles a lo largo de la página |
| **KPI** | Interacción con la calculadora de costo de vida; reproducción de los videos de experiencia foránea; clics en "Ver listado de hospedaje", filtros del mapa de servicios, WhatsApp/"Agenda una cita"; scroll-depth al módulo de admisión; conservación del tráfico orgánico de `/admision-extranjeros` |

## 2. Reglas globales

- **Un solo proceso de admisión.** El módulo de Admisión (M13) es breve y **no duplica** los 6 pasos (viven en `/admision-general`); aloja además la acotación del **trámite migratorio internacional** (externo a la universidad).
- **El trámite migratorio es externo** y su detalle vive **solo** en M13. Nunca se presenta como "segundo proceso de admisión".
- **Voz al estudiante, no a los padres.** Integración: seguridad/zonas → M6 y M8; salud → M9; hospedaje/acompañamiento → M6; comunidad → M10; costos/apoyos → M15.
- **Tono aspiracional de marca en el copy**; lo utilitario lo entregan las herramientas (calculadora, mapa) y los videos.
- **Un mensaje por módulo.** El dato 20%/3% solo en M2; ninguna cifra en M3. Zonas por campus solo en M6; la calculadora (M5) las referencia por ancla. Trámite migratorio solo en M13. Clínicas cercanas solo en M8; M9 solo enlaza. El FAQ (M14) **remite por ancla**, no repite.
- **Un solo componente de "asesoría humana"** — el **mismo de [`apoyos-economicos.html`](https://black-and-orange.github.io/anahuac-sitio-web/apoyos-economicos.html)** (foto + nombre + rol + botón **WhatsApp** + **"Agenda una cita"** + correo) — reutilizado en M6 (hospedaje) y M12 (asesor). No es componente nuevo.
- **Nomenclatura:** siempre **"apoyos socioeconómicos"**, nunca "becas".
- **Ambos campus siempre visibles** (no hay selector). Los módulos con dos columnas (hospedaje, mapa de servicios) muestran Norte y Sur en paralelo. **Todo módulo con JS necesita fallback estático.** Mobile-first.
- **AIDA:** Atención (M1) → Interés (M2–M4) → Deseo (M5–M12) → Acción (M13–M15) → cierre (M16).
- **Sin CTA sticky y sin chips en el hero.**

## 3. Metadatos SEO / AEO

- **Title (52 car.):** «Foráneos en la Anáhuac México | Comunidad y admisión»
- **Meta description (150 car.):** «Seas foráneo nacional o internacional, en la Anáhuac México encuentras comunidad, hospedaje, costo de vida claro y el mismo camino hacia tu admisión.»
- **Keyword principal:** `foráneos universidad anáhuac méxico` *(volumen [VERIFICAR])*
- **Secundarias:** `costo de vida estudiante cdmx` · `hospedaje para estudiantes universitarios cdmx` · `comunidad de estudiantes foráneos` · `trámite migratorio estudiante extranjero méxico` · `servicios para estudiantes foráneos cdmx`
- **Schema:** `CollegeOrUniversity` · `FAQPage` (M14, 7 preguntas) · `BreadcrumbList`. No aplica `Course`.
- **301 obligatorio:** `/licenciaturas/admision-extranjeros` → `/licenciaturas/foraneos#admision`; actualizar enlaces internos, menú de Admisiones y `sitemap.xml`.

## 4. Mapa de encabezados

- **H1** — «Foráneos en la Anáhuac: tu segunda casa sin importar de dónde vengas» (M1, `#hero`)
  - **H2** «¿Quién es foráneo en la Anáhuac?» (M2, `#quien-es-foraneo`) · «¿Por qué estudiar y vivir en la CDMX?» (M3, `#por-que-cdmx`) · «Mucho más que solo una Universidad» (M4, `#leon-anahuac`) · «Calculadora de costo de vida» (M5, `#costo-de-vida`) · «Hospedaje: tu segunda casa» (M6, `#hospedaje`) · «Experiencia de nuestros foráneos en la CDMX» (M7, `#primer-mes`) · «Mapa de servicios por campus» (M8, `#mapa-servicios`) · «Salud y bienestar, nunca solo/a» (M9, `#salud`) · «Comunidad foránea: ADEFA + CAF» (M10, `#comunidad`) · «Historias Anáhuac» (M11, `#historias`) · «¿De dónde nos contactas?» (M12, `#contacto-asesores`)
  - **H2** «Proceso de admisión para foráneos» (M13, `#admision`) → H3 «Si vienes de otro país: tu trámite migratorio»
  - **H2** «Preguntas frecuentes sobre foráneos en la Anáhuac» (M14, `#faq`) → H3 por pregunta (7)
  - **H2** «Elige el siguiente paso» (M15, `#siguiente-paso`) · Footer (M16, `#footer`, sin H2)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#hero`

**Objetivo:** enganchar en 8 s con "aquí también es tu lugar", con voz de estudiantes reales (no chips).

**Diseño:** video de fondo con mini-testimonios de experiencia foránea ("Soy de [ciudad/país] y esto nadie me lo dijo…"), sin autoplay con audio, control de pausa, subtítulos. Sin chips. CTA visible sin scroll.

**Copy final:**
- Eyebrow: «Comunidad Foránea Anáhuac»
- **H1:** «Foráneos en la Anáhuac: tu segunda casa sin importar de dónde vengas»
- Subtítulo: «Seas de otro estado de México o de otro país, aquí encuentras una segunda casa: comunidad, acompañamiento y el mismo camino hacia tu admisión.»
- Guion del video: mini-testimonios "Soy de [ciudad/país] y esto nadie me lo dijo antes de venir a la Anáhuac…" `[PENDIENTE: producción con ADEFA]`
- **CTA primario:** «Descubrir experiencia foránea» → ancla `#primer-mes` *(tratamiento visual de "ver más", no CTA de conversión)*. **CTA secundario:** «Habla con un asesor» → ancla `#contacto-asesores`.

**Alt text:** «Estudiantes foráneos de la Universidad Anáhuac México compartiendo su experiencia de vivir lejos de casa, Campus Norte y Campus Sur.»

---

## Módulo 2 — ¿Quién es foráneo en la Anáhuac? · AIDA: Interés · **H2** · `#quien-es-foraneo`

**Objetivo:** identificación en 3 s. **Aquí, y solo aquí, viven "20% nacional / 3% internacional".**

**Diseño:** 2 columnas simétricas; el dato 20%/3% como línea de apoyo discreta.

**Copy final:**
- **H2:** «¿Quién es foráneo en la Anáhuac?»
- Respuesta directa (AEO): «En la Universidad Anáhuac México eres foráneo si vives en un estado de México distinto a la Ciudad de México o el Estado de México (foráneo nacional), o si vienes de otro país (foráneo internacional).»
- **Tarjeta 1 — Foráneo nacional:** «Vives en México, fuera de la Ciudad de México y el Estado de México. Llegas de tu estado a construir tu nueva vida universitaria en la capital.»
- **Tarjeta 2 — Foráneo internacional:** «Vienes de otro país a estudiar tu licenciatura en la Anáhuac México, en una de las ciudades más importantes de Latinoamérica.»
- Línea de dato: «20% de nuestra comunidad es foránea nacional y 3% es internacional» `[VERIFICAR: vigencia y fuente]`
- Frase puente: «Sin importar cuál seas, el camino hacia la Anáhuac es el mismo.»
- **CTA:** enlace terciario «Ver el proceso de admisión» → ancla `#admision`.

---

## Módulo 3 — ¿Por qué estudiar y vivir en la CDMX? · AIDA: Interés · **H2** · `#por-que-cdmx`

**Objetivo:** vender la ciudad — **100% aspiracional, sin cifras**.

**Diseño:** mosaico de bullets sobre imágenes/video reales. Ninguna cifra.

**Copy final:**
- **H2:** «¿Por qué estudiar y vivir en la CDMX?»
- Respuesta directa (AEO): «Vivir en la Ciudad de México como estudiante foráneo te pone en la capital del país, en la zona con **mayor densidad de oportunidades profesionales y prácticas** de México, con alta oferta cultural, gran conectividad y presencia de los eventos y foros más importantes del país.»
- **Bullets (orden v3+):** «1) Eres parte de la capital del país. → **2) Estás en la zona con mayor densidad de oportunidades profesionales y prácticas.** → 3) Tienes la mayor oferta cultural y de entretenimiento de México a la mano. → 4) Vives cerca de los eventos y foros más importantes del país. → 5) Te mueves con la mayor conectividad: aeropuerto internacional y red de transporte. → 6) Vives en una de las ciudades más importantes de Latinoamérica.»
- **CTA:** sin primario.

---

## Módulo 4 — ¿Por qué ser un León Anáhuac? · AIDA: Interés · **H2** · `#leon-anahuac` *(módulo compartido del home, no rediseñar)*

**Objetivo:** "por qué la universidad" (pareja con "por qué la ciudad" del M3). Inserción directa del componente ya vigente en el home ([`Inicio.html`](https://black-and-orange.github.io/anahuac-sitio-web/Inicio.html)); reutilizar asset visual del home.

**Copy final (literal del home, no modificar):**
- **H2:** «Mucho más que solo una Universidad» · **H3:** «Descubre por qué ser un León Anáhuac»
- **Bloque 1 — «Un futuro con más posibilidades»:** «Desarrolla las habilidades, conocimientos y experiencia que necesitas para construir un perfil integral. Nuestro modelo educativo integra formación profesional, intelectual, humana, social y espiritual.»
- **Bloque 2 — «Oportunidades internacionales»:** «Amplía tu experiencia con intercambios, convenios y opciones académicas que amplían tu perspectiva y enriquecen tu formación dentro y fuera del aula.»
- **Bloque 3 — «Una vida universitaria que te haga crecer»:** «Haz deporte, participa en actividades culturales, involúcrate en proyectos sociales y forma parte de una comunidad activa.»
- **Bloque 4 — «Espacios que impulsan tu experiencia»:** «Disfruta de espacios creados para tu desarrollo integral: deportes, salud, innovación y recursos únicos que encontrarás en la Universidad Anáhuac.»
- **CTA:** sin primario. `[VERIFICAR CON HUBSPOT: si es componente global reutilizable home↔foráneos o requiere sincronización manual]`

**Alt text:** «Estudiantes de la Universidad Anáhuac México viviendo su formación integral: académica, deportiva, cultural, social e internacional.»

---

## Módulo 5 — Calculadora de costo de vida · AIDA: Deseo · **H2** · `#costo-de-vida`

**Objetivo:** resolver "¿cuánto necesito?" con datos. Abre el bloque práctico.

**Diseño:** slider/inputs como mejora progresiva; **fallback sin JS** = tabla estática (Rubro · Campus Norte · Campus Sur; filas: Renta, Alimentos, Transporte, Salud, Imprevistos). **Sin comparativo de alimentación.** Ambas columnas siempre visibles.

**Copy final:**
- **H2:** «Calculadora de costo de vida»
- Respuesta directa (AEO): «Sí puedes calcular cuánto necesitas para vivir como estudiante foráneo en la Ciudad de México: la Anáhuac México te da un desglose por renta, alimentos, transporte, salud e imprevistos, según tu zona, siempre comparando Campus Norte y Campus Sur en paralelo.»
- Intro: «Arma tu presupuesto mensual como estudiante foráneo. Ajusta los controles y revisa el desglose de Campus Norte y Campus Sur, uno junto al otro.»
- Rubros: «Renta» · «Alimentos» · «Transporte» · «Salud» · «Imprevistos»
- Referencia de zonas: «¿Quieres saber qué zonas son las recomendadas por campus? Consulta el detalle completo en [Hospedaje: tu segunda casa](#hospedaje).»
- Botón: «Calcular mi presupuesto»
- Estado vacío / fallback: «Estamos afinando los rangos reales de costo de vida por zona y campus con el Centro de Atención a Foráneos (CAF). Mientras tanto, agenda una sesión con tu asesor de hospedaje para resolver tus dudas de presupuesto.» → «Agenda una cita» (ancla `#hospedaje`). `[VERIFICAR: rangos reales por zona y campus]`
- Enlace terciario: «¿Buscas apoyos para cubrir más? Ver apoyos socioeconómicos» → ancla `#siguiente-paso`.

**Alt text:** «Calculadora interactiva de costo de vida para estudiantes foráneos de la Universidad Anáhuac México, por campus y zona.»

---

## Módulo 6 — Hospedaje: tu segunda casa · AIDA: Deseo · **H2** · `#hospedaje`

**Objetivo:** atender con calidez el tema más sensible; integra la preocupación por seguridad/acompañamiento. **NO se construye buscador propio**: un solo botón al listado general.

**Diseño:** 2 columnas por campus (siempre visibles), cada una con tarjeta de **asesoría humana (mismo componente de `apoyos-economicos.html`)** + zonas. Debajo, **un único CTA** al listado de hospedaje (general para ambos campus). Foto real de Inés y Carlos.

**Copy final:**
- **H2:** «Hospedaje: tu segunda casa»
- Respuesta directa (AEO): «Sí. En la Universidad Anáhuac México te acompañamos a encontrar dónde vivir, con una persona de contacto real en cada campus dedicada a orientarte en tu hospedaje.»
- **Campus Norte — Inés Vásquez** — rol «Encargada de hospedaje, Campus Norte» — botones «WhatsApp» `[VERIFICAR: número]` · «Agenda una cita» `[VERIFICAR: URL]` · correo `ines.vasquez@anahuac.mx` · Zonas: «Interlomas · Bosques · Lomas Anáhuac · Huixquilucan centro · Santa Fe»
- **Campus Sur — Carlos Vázquez** — rol «Encargado de hospedaje, Campus Sur» — botones «WhatsApp» `[VERIFICAR: número]` · «Agenda una cita» `[VERIFICAR: URL]` · correo `c.vazquez@anahuac.mx` · Zonas: «Coapa · Tlalpan · Xochimilco · Contadero/Cuajimalpa»
- Cierre cálido: «No tienes que resolver esto solo, ni tu familia tampoco: agenda una sesión y te ayudamos a encontrar una opción de hospedaje segura y cercana a tu campus.»
- **Checklist de roomies** (sin disclaimer): «Pide y lee el contrato completo antes de firmar.» · «Confirma la identidad de quien renta o de tus posibles roomies.» · «Pide referencias de inquilinos anteriores.» · «Deja por escrito las reglas de convivencia (visitas, ruido, gastos compartidos).» · «Pregunta quién más vive ahí, y desde cuándo.» · «¿Buscas roomies? Usa el canal de ADEFA para conectar con otros estudiantes foráneos.» `[PENDIENTE: canal operativo de ADEFA]`
- **CTA único (general, ambos campus):** «Ver listado de hospedaje» → `https://mexico.anahuac.mx/resultados-de-hospedaje` *(abre en pestaña nueva)*

**Alt text:** «Inés Vásquez (Campus Norte) y Carlos Vázquez (Campus Sur), encargados de hospedaje de la Universidad Anáhuac México.» *(foto real pendiente)*

---

## Módulo 7 — Experiencia de nuestros foráneos en la CDMX · AIDA: Deseo · **H2** · `#primer-mes` *(2 videos)*

**Objetivo:** mostrar la experiencia real de ser foráneo en la CDMX, en primera persona. Es el destino del CTA primario del hero ("Descubrir experiencia foránea").

**Diseño:** módulo de **dos videos** (testimonios de experiencia foránea), lado a lado en desktop, apilados en móvil, con copy breve que los enmarca. Sin timeline ni checklist. El trámite migratorio vive en M13.

**Copy final:**
- **H2:** «Experiencia de nuestros foráneos en la CDMX»
- Respuesta directa / lead: «De bajar del avión a sentirte en casa: así viven la CDMX los foráneos de la Anáhuac, en su propia voz.»
- **Video 1** y **Video 2** — testimonios de experiencia foránea `[PENDIENTE: material audiovisual real, producción con ADEFA]`
- **CTA:** play de los videos (no hay CTA de conversión).

**Alt text:** «Estudiantes foráneos de la Universidad Anáhuac México contando su experiencia de vivir en la Ciudad de México.»

---

## Módulo 8 — Mapa de servicios por campus · AIDA: Deseo · **H2** · `#mapa-servicios`

**Objetivo:** mostrar el entorno real de cada campus. Reemplaza el genérico "Servicios para foráneos" de la v1.

**Diseño:** mapa/lista filtrable por categoría, dos columnas (Norte/Sur, siempre visibles). Filtros = mejora progresiva; listado agrupado siempre presente sin JS.

**Copy final:**
- **H2:** «Mapa de servicios por campus»
- Respuesta directa (AEO): «Cerca de cada campus de la Universidad Anáhuac México encuentras clínicas y hospitales, farmacias, supermercados, plazas comerciales, lavanderías, gimnasios y templos, organizados por categoría para que resuelvas tu día a día sin complicarte.»
- Intro: «Filtra por categoría o revisa el listado completo de tu campus. Vive tu día a día sin sorpresas.»
- Categorías: «Clínicas y hospitales» · «Farmacias» · «Supermercados» · «Plazas comerciales» · «Lavanderías» · «Gimnasios» · «Templos»
- Estado vacío: «Estamos completando el directorio de servicios cercanos a tu campus. Si necesitas algo mientras tanto, pregunta en informes de tu campus o escríbenos por WhatsApp.» `[VERIFICAR: listado real por categoría y campus]`
- **CTA:** sin primario.

**Alt text:** «Mapa de servicios cercanos a Campus Norte y Campus Sur de la Universidad Anáhuac México: clínicas, farmacias, supermercados y más.»

---

## Módulo 9 — Salud y bienestar, nunca solo/a · AIDA: Deseo · **H2** · `#salud`

**Objetivo:** responder "¿qué pasa si me enfermo y no tengo familia en la ciudad?" apoyado **solo en servicios reales**. Tono cálido, no clínico.

> **Nota:** la "línea de emergencia 24/7" de la v2 era un supuesto del benchmark, no un servicio real de la Anáhuac; se retiró por completo. En v4 se retira también el CTA "Agenda con Bienestar" (no había destino real confirmado); si más adelante existe una liga real de agenda con Bienestar, se puede reincorporar. Los tres servicios de abajo son reales en su existencia; su dato de contacto va `[VERIFICAR]`.

**Copy final:**
- **H2:** «Salud y bienestar, nunca solo/a»
- Respuesta directa (AEO): «Si te enfermas o necesitas apoyo emocional en la Ciudad de México, en la Universidad Anáhuac México tienes el servicio médico de tu campus, el área de Bienestar y tu seguro de gastos médicos para acompañarte, aunque tu familia no esté en la ciudad.»
- **Servicio médico / enfermería del campus:** «En cada campus hay un servicio médico y de enfermería al que puedes acudir directamente.» `[VERIFICAR: contacto por campus]`
- **Bienestar / apoyo psicopedagógico:** «¿Necesitas hablar con alguien? El área de Bienestar te acompaña con apoyo psicopedagógico.» `[VERIFICAR: contacto]`
- **Activa tu seguro de gastos médicos:** «Actívalo apenas llegues a la ciudad, así ya cuentas con cobertura si la necesitas.» `[VERIFICAR: proceso de activación]`
- **Guía en 4 pasos** («¿Qué hacer si te enfermas y no tienes familia en la ciudad?»): «1) Ve a la enfermería o el consultorio de tu campus. → 2) Si necesitas algo más, busca la clínica más cercana en el [Mapa de servicios por campus](#mapa-servicios). → 3) Activa tu seguro de gastos médicos. → 4) Avisa al CAF para que te acompañen (ver [Comunidad foránea](#comunidad)).»
- **CTA:** ninguno (módulo informativo; sin botones).

**Alt text:** «Estudiante foráneo recibiendo acompañamiento de bienestar y salud en la Universidad Anáhuac México.»

---

## Módulo 10 — Comunidad foránea: ADEFA + CAF · AIDA: Deseo · **H2** · `#comunidad`

**Objetivo:** pertenencia con **cara, ubicación y horario** — leapfrog vs. Querétaro.

**Diseño:** fotos reales de equipo/eventos (no stock); carrusel; iconografía de redes con enlaces reales.

**Copy final:**
- **H2:** «Comunidad foránea: ADEFA + CAF»
- Respuesta directa (AEO): «Sí. En la Universidad Anáhuac México existe una comunidad organizada de estudiantes foráneos: ADEFA, con equipo y redes propias en cada campus, y CAF, el área institucional dedicada a tu bienestar.»
- **ADEFA — Asociación de Estudiantes Foráneos Anáhuac:** «Una red de estudiantes foráneos que se apoyan entre pares: integración, eventos y comunidad desde el primer día.» · Redes: Instagram [@adefanorte](https://www.instagram.com/adefanorte/) (Norte) · [@adefa_sur](https://www.instagram.com/adefa_sur/) (Sur). `[PENDIENTE: foto del comité]`
- **CAF — Centro de Atención a Foráneos:** «El área de la universidad dedicada al bienestar de estudiantes foráneos, tanto nacionales como internacionales.» · Ubicación (edificio/piso), extensión y horario `[VERIFICAR]` · Nota: «El CAF no cuenta con redes sociales propias; contáctalo directo por correo, WhatsApp o en su ubicación dentro del campus.»
- Carrusel de fotos reales de eventos/actividades ADEFA-CAF `[PENDIENTE: banco de fotografía real]`
- **CTA secundario:** «Conoce a la comunidad» → Instagram de ADEFA (mostrar ambos, Norte y Sur).

**Alt text:** «Estudiantes foráneos de la Universidad Anáhuac México en un evento de integración de ADEFA y CAF.» *(foto real pendiente)*

---

## Módulo 11 — Historias Anáhuac · AIDA: Deseo · **H2** · `#historias` *(módulo compartido)*

**Objetivo:** prueba social aspiracional (el techo al que se puede llegar). Distinto de los videos de experiencia del M7 y de los mini-testimonios del hero.

**Diseño:** mismo componente compartido de "Leones Anáhuac que han transformado sus vidas con nosotros" (Inicio). No rediseñar.

**Copy final:**
- **H2:** «Historias Anáhuac» · Intro: «Así de lejos puedes llegar, sin importar de qué estado o país hayas salido para estudiar aquí.»
- **Tarjeta 1:** «El Dr. Emmanuel Urquieta Ordónez, egresado de Médico Cirujano generación 2012, formó parte de la misión HERA 11 del Johnson Space Center de la NASA.»
- **Tarjeta 2:** «Daniela Cueva es fisioterapeuta de la selección mexicana de gimnasia artística.» `[VERIFICAR: carrera/generación/campus]`
- **Tarjeta 3:** «María Artes llegó a ser jefa del departamento de fisioterapia de la Escuela Nacional de Danza en 2019.» `[VERIFICAR: carrera/generación; reconciliar "a los 23 años"]`
- **CTA:** enlace opcional «Ver más historias».

**Alt text:** «Egresados foráneos de la Universidad Anáhuac México: Dr. Emmanuel Urquieta (misión HERA 11 de la NASA), Daniela Cueva (selección mexicana de gimnasia) y María Artes (Escuela Nacional de Danza).»

---

## Módulo 12 — ¿De dónde nos contactas? · AIDA: Deseo · **H2** · `#contacto-asesores`

**Objetivo:** humanizar la atención con una persona real. **Sin mapa interactivo** (retirado en v4).

**Diseño:** **una sola tarjeta = exactamente el mismo componente de [`apoyos-economicos.html`](https://black-and-orange.github.io/anahuac-sitio-web/apoyos-economicos.html)** (foto + nombre + rol + WhatsApp + "Agenda una cita" + correo), alimentado por HubDB. Sin mapa SVG, sin selector de estado, sin banderas.

**Copy final:**
- **H2:** «¿De dónde nos contactas?»
- Intro: «Conoce a la persona que te va a acompañar en tu proceso, sin importar tu estado o país.»
- **Asesor confirmado:** **Angel René Islas López** — rol «Asesor preuniversitario · Zacatecas · Aguascalientes · San Luis Potosí» — botones «WhatsApp» `[VERIFICAR: dos números reportados]` · «Agenda una cita» · correo `r.islas@anahuac.mx`
- Fallback: «¿Tu estado o país aún no tiene asesor asignado? Escríbenos a `preuniversitarios@anahuac.mx` y te conectamos con la persona correcta.» `[PENDIENTE: roster completo de asesores por estado/país]`

---

## Módulo 13 — Proceso de admisión para foráneos · AIDA: Acción · **H2** · `#admision` *(aloja el trámite migratorio)*

**Objetivo:** dejar claro que el proceso es el mismo, **sin duplicar los 6 pasos** (viven en `/admision-general`), y **alojar la acotación de internacionales** (trámite migratorio externo).

**Diseño:** módulo breve para la parte de admisión (dos CTAs) + acordeón/apartado H3 para el trámite migratorio.

**Copy final:**
- **H2:** «Proceso de admisión para foráneos»
- Respuesta directa (AEO): «El proceso de admisión de la Universidad Anáhuac México es el mismo para todos: seas foráneo nacional o internacional, sigues exactamente los mismos pasos. Lo único distinto, si vienes de otro país, es el trámite migratorio que gestionas tú directamente ante las autoridades correspondientes.»
- Copy: «No hay un camino de admisión distinto por venir de otro estado o de otro país. Conoce el proceso completo de admisión en un solo lugar.»
- **H3 «Si vienes de otro país: tu trámite migratorio»:**
  - Disclaimer: «Estos trámites los realizas tú directamente ante las autoridades correspondientes — INM, SRE, consulados, SEP —; son externos a la universidad. La Anáhuac te orienta, pero no los tramita por ti.»
  - Pasos: «1) Tramita tu visa de estudiante en el consulado o la embajada de México en tu país de origen. → 2) Realiza tu trámite ante el Instituto Nacional de Migración (INM) al llegar a México. → 3) Tramita tu tarjeta de residente dentro de los primeros 30 días naturales desde tu ingreso al país. → 4) Si cursaste tu bachillerato en el extranjero, revalida tus estudios ante la SEP: [Solicitud de revalidación de estudios de bachillerato (SEP-25-004)](https://www.gob.mx/sep/acciones-y-programas/solicitud-de-revalidacion-de-estudios-para-el-nivel-medio-superior-de-bachillerato-sep-25-004). → 5) Apostilla tus documentos de origen.»
  - Contacto: «¿Tienes dudas sobre este trámite? Escribe a tu asesor de admisión internacional — conócelo en [¿De dónde nos contactas?](#contacto-asesores).»
- **CTA primario:** «Inicia tu admisión» → `/admision-general`. **CTA secundario:** «Conocer pasos del proceso» → página de Proceso de Admisión del sitio.

> **⚠️ Corrección de contenido en otra página (bloquea publicación):** en la página de Proceso de Admisión apareció el texto placeholder *"proceso especial para estudiantes internacionales con evaluación de idioma"* — **es falso** (el proceso es el mismo). Debe corregirse/eliminarse antes de publicar. `[VERIFICAR: en qué URL viva vive hoy]`

**Alt text:** «Estudiante foráneo iniciando su proceso de admisión en línea en la Universidad Anáhuac México.»

---

## Módulo 14 — Preguntas frecuentes sobre foráneos en la Anáhuac · AIDA: Acción · **H2** · `#faq`

**Objetivo:** resolver objeciones con honestidad, tono aspiracional. Cada respuesta remite por ancla.

**Diseño:** acordeón; marcar `FAQPage`.

**Copy final (7 preguntas):**
1. **«¿El proceso de admisión es distinto si soy de otro estado o de otro país?»** → «No. Es exactamente el mismo proceso para todos; solo cambia la documentación de origen. Ver el detalle en [Proceso de admisión para foráneos](#admision).»
2. **«¿Qué necesito si vengo de otro país para poder inscribirme?»** → «Necesitas los documentos equivalentes de tu país y, si cursaste bachillerato en el extranjero, revalidarlo ante la SEP; además, gestionas tu trámite migratorio en paralelo a tu admisión. Ver [Proceso de admisión para foráneos](#admision).»
3. **«¿La universidad me ayuda a encontrar dónde vivir?»** → «Sí, tienes una persona de contacto en cada campus dedicada a acompañarte en tu hospedaje. Ver [Hospedaje: tu segunda casa](#hospedaje).»
4. **«¿Hay una comunidad de estudiantes foráneos?»** → «Sí: ADEFA y CAF. Ver [Comunidad foránea: ADEFA + CAF](#comunidad).»
5. **«¿A quién contacto si tengo alguna duda?»** → «Conoce a tu asesor y contáctalo directo por WhatsApp o correo. Ver [¿De dónde nos contactas?](#contacto-asesores).»
6. **«¿Es segura la zona donde voy a vivir?»** → «Las zonas que recomendamos por campus están cerca de tu vida universitaria diaria. Consulta las [zonas recomendadas por campus](#hospedaje) y el [mapa de servicios cercanos](#mapa-servicios).»
7. **«¿Qué hago los fines de semana que no puedo ir a casa?»** → «La comunidad foránea organiza eventos todo el ciclo escolar. Ver [Comunidad foránea: ADEFA + CAF](#comunidad).»
- **CTA:** ninguno.

---

## Módulo 15 — Elige el siguiente paso · AIDA: Acción · **H2** · `#siguiente-paso` *(clúster compartido, al cierre)*

**Objetivo:** salida final de conversión. **Aquí, y solo aquí, viven costos y apoyos socioeconómicos.**

**Diseño:** mismo componente aprobado; reutilizar sin cambios.

**Copy final:**
- **H2:** «Elige el siguiente paso» · Intro: «¿Aún no quieres llenar un formulario? Elige por dónde seguir a tu ritmo.»
- Tarjetas: **«Cotiza tu carrera»** → `/cotizador` · **«Apoyos socioeconómicos»** → `/apoyos-educativos-universidad-anahuac-mexico` · **«Fechas de examen»** → `/fechas-de-examenes` · **«Inicia tu admisión»** → `/admision-general` · **«Habla con un asesor»** → ancla `#contacto-asesores`.
- **CTA:** un CTA secundario por tarjeta.

---

## Módulo 16 — Footer con Newsletter integrado · `#footer` · sin H2

**Copy final:**
- **Newsletter:** Título «Mantente al día con la comunidad foránea Anáhuac» · Texto «Recibe contenido sobre vida universitaria, apoyos socioeconómicos y fechas clave.» · Label «Tu correo electrónico» · CTA «Suscribirme» · Legal «Consulta el [Aviso de Privacidad].»
- Componente estándar (datos de ambos campus, secciones Descubre/Programas/Admisiones —incluye «Apoyos socioeconómicos»—, redes institucionales).
- **Nota:** la URL de Transporte (`mexico.anahuac.mx/transporte-anahuac-mexico`) ya **no** vive en `/foraneos`; enlázala desde el footer o la página de campus.

---

# Datos estructurados (JSON-LD)

- **`CollegeOrUniversity`** (name, url, dos `location` Norte/Sur, `sameAs`) · **`FAQPage`** (las 7 preguntas del M14, texto autocontenido) · **`BreadcrumbList`** (Inicio › Oferta Académica › Foráneos). No aplica `Course`.

---

# Accesibilidad (WCAG 2.1 AA)

- **Ambos campus (M6, M8):** columnas Norte/Sur siempre visibles con `aria-label` por columna (no hay selector que las oculte).
- **Mapa de servicios (M8):** filtros = mejora progresiva; listado agrupado siempre presente sin JS.
- **Calculadora (M5):** tabla estática equivalente si el slider requiere JS.
- **Asesoría humana (M6, M12):** `aria-label` en WhatsApp y "Agenda una cita".
- **Videos (M7) y hero (M1):** subtítulos, sin autoplay con audio, control de pausa, `prefers-reduced-motion`.
- **Acordeón (M13, M14) y carruseles (M10, M11):** roles ARIA, foco visible.

---

# Reconciliación del brief de benchmark (R1–R12)

| # | Requisito | Dónde vive (v4) | Estado |
|---|---|---|---|
| R1 | Selector de campus Norte/Sur | *(eliminado)* | Retirado — ambos campus se muestran siempre |
| R2 | Hospedaje: contacto + listado externo + zonas + checklist roomies | M6 (un solo CTA general) | Ya estaba + enriquecido |
| R3 | Calculadora de costo de vida | M5 | Nuevo (sin comparativo de alimentación) |
| R4 | "Tu primer mes" | M7 (**2 videos de experiencia**) + trámite migratorio en M13 | Reformateado a experiencia foránea en video |
| R5 | Testimonios de experiencia foránea | M1 (hero) + **M7 (2 videos)** | Reforzado en v4 |
| R6 | CAF/ADEFA con cara, ubicación, horario | M10 | Enriquecido (sin calendario de eventos) |
| R7 | Mapa de servicios filtrable por campus | M8 | Nuevo — reemplaza "Servicios para foráneos" |
| R8 | Sección para padres | *(integrado, sin sección)* | No adoptado — ver justificación |
| R9 | Calendario de puentes `.ics` | *(eliminado)* | Retirado |
| R10 | Salud mental + emergencia 24/7 | M9 (**sin línea 24/7**) | La línea 24/7 se retiró por no ser servicio real |
| R11 | FAQ con preguntas incómodas | M14 (7 preguntas) | Ajustado en v4 (se retiran las de trabajo/carrera/coche/"me alcanza") |
| R12 | Roomies (checklist + canal) | M6 | Fase lite |

---

# Qué se quita y por qué (algo entra, algo sale)

**Eliminados a lo largo de las versiones:** selector de campus · "Anáhuac en números" (Top 3) · calendario de puentes `.ics` · "¿Tienes alguna duda?" · comparativo de alimentación · disclaimer de roomies · línea de emergencia 24/7 · chips y CTA sticky del hero · módulo genérico "Servicios para foráneos".

**Eliminados en v4:** checklist descargable del primer mes · segundo botón de hospedaje (queda un solo CTA general) · CTA "Agenda con Bienestar" (M9) · calendario de eventos foráneos (M10) · mapa interactivo de estados y banderas (M12) · 4 preguntas del FAQ (me alcanza / trabajar / cambio de carrera / coche).

**Reformateado en v4:** M7 pasa de "Tu primer mes" (video único) a **"Experiencia de nuestros foráneos en la CDMX"** (2 videos). En toda la página, **"becas" → "apoyos socioeconómicos"**.

**Agregado en v4:** CTA secundario «Conocer pasos del proceso» (M13).

**Apartamiento explícito del brief — R8 (sección para padres):** la clienta decidió **no crear una sección "Padres de familia"** — el sitio habla en primera persona al preuniversitario; sus preocupaciones se integran (seguridad/zonas → M6 y M8; salud → M9; hospedaje → M6; contacto humano → M6, M10, M12; costos/apoyos → M15).

---

# Wireframe en texto (orden de scroll)

> **Arriba del fold en móvil:** header sticky + eyebrow + primeras líneas del H1 + inicio del lead. El video del hero y sus 2 CTAs se revelan justo debajo del primer scroll.

1. Hero (video + 2 CTAs) → 2. ¿Quién es foráneo? → 3. ¿Por qué CDMX? → 4. ¿Por qué ser un León Anáhuac? → 5. Calculadora de costo de vida → 6. Hospedaje (2 columnas + 1 CTA general) → 7. Experiencia de nuestros foráneos (2 videos) → 8. Mapa de servicios (2 columnas) → 9. Salud y bienestar → 10. Comunidad ADEFA + CAF → 11. Historias Anáhuac → 12. ¿De dónde nos contactas? (tarjeta de asesor) → 13. Proceso de admisión (+ trámite migratorio) → 14. FAQ → 15. Elige el siguiente paso → 16. Footer + Newsletter.

---

# Matriz de propiedad de contenido (CAF / ADEFA / Marketing)

| Módulo | Owner | Frecuencia |
|---|---|---|
| 1 Hero · 2 ¿Quién es foráneo? · 3 ¿Por qué CDMX? · 4 León Anáhuac | Marketing | Baja |
| 5 Calculadora de costo de vida | **CAF** (datos) + Marketing (herramienta) | Semestral/anual |
| 6 Hospedaje | **CAF** (contactos, zonas, roomies) | Trimestral / continua |
| 7 Experiencia foránea (2 videos) | Marketing + **ADEFA** (producción) | Anual / por campaña |
| 8 Mapa de servicios | **CAF** (altas/bajas HubDB) | Trimestral |
| 9 Salud y bienestar | **CAF** + Bienestar/Psicopedagógico | Semestral |
| 10 Comunidad ADEFA + CAF | **ADEFA** (fotos, redes) + **CAF** (ubicación/horario) | Mensual |
| 11 Historias · 15 Siguiente paso · 16 Footer | Marketing (compartidos) | Baja |
| 12 Asesor de contacto | **CAF**/Admisiones (roster HubDB) | Continua |
| 13 Proceso de admisión (+ migratorio) | Marketing/Admisiones | Baja |
| 14 FAQ | **CAF** + Marketing | Trimestral |

> **Gobernanza:** los listados dinámicos (asesores, servicios, costo) van en **HubDB** con **CAF/ADEFA** como dueños de datos, no solo Marketing (así no muere el contenido como el catálogo actual).

---

# Pendientes / supuestos antes de implementar

**🔴 Bloqueantes:**
- WhatsApp correcto de René Islas (dos números en el sitio vivo) e Inés/Carlos.
- **301** de `/admision-extranjeros` → `/foraneos#admision` + enlaces internos, menú, sitemap.
- Rangos reales de costo de vida por zona/campus (M5).
- **2 videos reales de experiencia foránea** (M7) + mini-testimonios del hero.
- Ubicación, horario, extensión y foto del equipo CAF (M10).

**🟡 Importantes:**
- Keyword principal real de `/foraneos`; vigencia/fuente de "20%/3%" (M2).
- Roster completo de asesores por estado/país (M12).
- Listado real del mapa de servicios por categoría y campus (M8).
- Contactos reales de servicio médico/enfermería y Bienestar/psicopedagógico + proceso de activación del seguro (M9).
- Canal operativo de roomies de ADEFA (M6).
- Política institucional (para el FAQ, si se decide reincorporar alguna pregunta a futuro).
- Datos exactos de testimonios (M11); reconciliar "a los 23 años" vs "Escuela Nacional de Danza 2019".
- Corrección del placeholder "proceso especial internacional" (¿en qué URL vive hoy?) (M13).
- ¿"León Anáhuac" es componente global reutilizable home↔foráneos o requiere sincronización manual? (M4)
- ¿Existe liga real de agenda con Bienestar? (si sí, se reincorpora el CTA en M9)

**🟢 Mejora / activo faltante:**
- ✅ URL del listado de hospedaje resuelta: `mexico.anahuac.mx/resultados-de-hospedaje` (general, ambos campus).
- ✅ Redes de ADEFA resueltas (`@adefanorte`, `@adefa_sur`); falta foto del comité.
- Banco de fotografía/video real (hero, 2 videos del M7, hospedaje, comunidad, mapa) — nada de stock; producción con ADEFA.

---

# Fuentes
- `maquetas/foraneos.html` (v4, validada por la clienta — este documento corresponde 1:1 con ella)
- `estructuras/foraneos.md` y `textos/foraneos.md` (insumos base; este handoff consolida y actualiza sus últimos ajustes)
- Brief de benchmark de la clienta (R1–R12) vs. `queretaro.anahuac.mx/licenciaturas/foraneos`
- Componentes compartidos: [`apoyos-economicos.html`](https://black-and-orange.github.io/anahuac-sitio-web/apoyos-economicos.html) (asesoría) · `proceso-de-admision.html` (6 pasos) · [`Inicio.html`](https://black-and-orange.github.io/anahuac-sitio-web/Inicio.html) (Historias + "León Anáhuac")
- `docs/base-conocimiento-anahuac.md` · `docs/insumos-extraidos/02-marca-y-seo.md` · `PENDIENTES-TEXTOS.md`
- Sitio oficial vivo `/licenciaturas/foraneos`, `/licenciaturas/admision-extranjeros`, `mexico.anahuac.mx/resultados-de-hospedaje` · trámite SEP-25-004 (gob.mx)
- Instagram confirmados por la clienta: ADEFA Norte `@adefanorte` · ADEFA Sur `@adefa_sur`
