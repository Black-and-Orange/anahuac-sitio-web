# Página: Licenciatura en Dirección de Restaurantes — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Molde base.** Replica **1:1 la versión final publicada de Gastronomía** → [`gastronomia.html`](https://black-and-orange.github.io/anahuac-sitio-web/gastronomia.html) (misma Facultad, mismos componentes). Reutiliza sus clases (`lic-hero`, `lic-afinidad`, `lic-porque` + `lic-porque2`, `lic-plan`, `lic-plan-est`, `lic-campo` + `campo-band--doble`, `lic-campus--inst`, `stories`, `lic-colab` + carrusel de convenios + mapa de destinos, `lic-pasos`, `lic-faq`, `experience`, `lic-form`). **No se diseñan componentes nuevos.**

> **⚠️ Cuatro particularidades de esta página:**
> 1. **Solo se imparte en Campus Norte.** Afecta al chip del hero, a la FAQ 1, al formulario (campus fijo, sin selector) y al schema.
> 2. **Esta carrera NO otorga un Bachelor de Le Cordon Bleu:** otorga **hasta cuatro diplomas de reconocimiento**. Por eso la banda de M6 **no se titula «Doble acreditación»**. No escribas «doble titulación» ni «Bachelor» en ninguna parte de la página.
> 3. **Sin «minor de vinos»** bajo las tabs del plan ni en el Bloque Profesional, y **sin la nota de insumos** en la FAQ de costos: son de Gastronomía.
> 4. **Sin «única alianza en México»:** esa frase es de Gastronomía. Aquí se nombra la alianza sin exclusividad.

> **⚠️ Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Incluye los módulos compartidos: **«Historias Anáhuac México»** y **«Descubre por qué ser un León en la Anáhuac México»**. Solo se exceptúan «Modelo Anáhuac», «Bloque Anáhuac» y «Asignatura Electiva Anáhuac».

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/direccion-de-restaurantes` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Nombre oficial** | **«Licenciatura en Dirección de Restaurantes»**. ⚠️ Úsalo completo siempre que se nombre la licenciatura. |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Turismo, Gastronomía y Hospitalidad |
| **Audiencia** | Preuniversitario que quiere unir el gusto por la buena mesa con la visión de negocio y se imagina abriendo su propio restaurante + padres/madres que dudan de la estabilidad de la industria restaurantera. El alumno quiere saber cuánta práctica real tiene la carrera (respondido en positivo en M2, M3 y M6) |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México **Campus Norte** (Huixquilucan, Edo. Méx.) — presencial |
| **KPI** | Envíos del formulario M13 · descargas de plan y folleto · interacción con las tabs (M5) y los tiles (M6) · clics en la banda de Le Cordon Bleu |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** El **detalle de los diplomas de Le Cordon Bleu** vive **solo en la banda de M6**; en M3 se nombra la alianza sin desglosarla. Los **convenios y destinos de prácticas** van **solo en M9**. Las **instalaciones** se nombran en M3 y se **muestran** en M7.
- **⚠️ Cero comparaciones** con otras licenciaturas ni con otras universidades.
- **⚠️ El ranking QS es de la Universidad en la disciplina Hospitality & Leisure Management.** Cítalo siempre con su fuente, tal como está en M3.
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles, sliders, carrusel de convenios y mapa.

## 3. Metadatos SEO / AEO

- **Title (58 car.):** «Licenciatura en Dirección de Restaurantes | Anáhuac México»
  - *⚠️ Va con «Anáhuac México» y no con «Universidad Anáhuac México» solo porque el nombre completo pasaría de 60 caracteres. No lo alargues.*
- **Meta description (154 car.):** «Estudia Dirección de Restaurantes en la Universidad Anáhuac México: diplomas de Le Cordon Bleu, simulador de negocios y un año de prácticas profesionales.»
- **Keyword principal:** `administracion de restaurantes` (260 · hoy pos. 32) · **Secundarias:** `empresas de restaurantes` (110 · pos. 48) · `restaurante anahuac` (110 · pos. 32) · `curso administracion restaurantes` (30 · pos. 8)
- **⚠️ La gente busca «administración de restaurantes», no el nombre de la licenciatura.** Por eso la frase aparece de forma natural en M2 y en la FAQ 2. **No la sustituyas por sinónimos.**
- **Open Graph:**
  - `og:title`: «Licenciatura en Dirección de Restaurantes — Universidad Anáhuac México»
  - `og:description`: «Dirige restaurantes y crea conceptos propios con diplomas de Le Cordon Bleu, laboratorios de cocina, mixología y cata, y un año de prácticas en la industria.»
  - `og:image` (alt): «Estudiantes de Dirección de Restaurantes de la Universidad Anáhuac México en una práctica de servicio en sala.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Dirección de Restaurantes» (M1, `#inicio`)
  - **H2** «¿Te imaginas dirigiendo el restaurante del que todos hablen?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Dirección de Restaurantes en la Anáhuac México?» (M3, `#por-que`) → H3 por tarjeta (6)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Dirección de Restaurantes?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Dirección de Restaurantes?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Dirección de Restaurantes?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Interdisciplinario)
  - **H2** «¿Dónde puedes trabajar como egresado de Dirección de Restaurantes?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Instalaciones donde estudiarás tu licenciatura» (M7, `#instalaciones`) → H3 por instalación (5)
  - **H2** «Historias Anáhuac México» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Convenios de prácticas» · H3 «Destinos de prácticas»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Dirección de Restaurantes» (M11, `#faq`) → H3 por pregunta (7)
  - **H2** «Descubre por qué ser un León en la Anáhuac México» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Dirección de Restaurantes» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero lic-hero--titulo-largo`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 (con `lic-hero-pre` en «Licenciatura en») + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips. ⚠️ El tercer chip dice «Campus Norte».**

- **Breadcrumb:** Inicio › Oferta Académica › Turismo, Gastronomía y Hospitalidad › Dirección de Restaurantes
- **Eyebrow (`tagline`):** «Turismo, Gastronomía y Hospitalidad»
- **H1:** «Licenciatura en Dirección de Restaurantes»
- **Claim (`lic-hero-claim`):** «Gestiona. Coordina. Crea.»
  - **⚠️ El claim del hero es siempre una secuencia de palabras sueltas** (verbos separados por punto), nunca una frase.
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Campus Norte»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video]**. Igual que en Gastronomía: mientras no exista, la tarjeta va sin `data-yt-id` y sin botón de play.
- **Alt de la portada:** «Estudiantes de Dirección de Restaurantes de la Universidad Anáhuac México dirigiendo el servicio en el laboratorio de alimentos y bebidas.»

---

## Módulo 2 — ¿Te imaginas dirigiendo el restaurante del que todos hablen? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

**⚠️ El párrafo de enfoque muestra que la carrera une práctica y negocio; se retoma en M3 (tarjeta 6) y M6. No lo recortes ni lo conviertas en una negación («no es solo…», «va más allá de…»).**

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te imaginas dirigiendo el restaurante del que todos hablen?»
- **Intro:** «Si te reconoces en lo siguiente, la Dirección de Restaurantes puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Te apasiona la buena mesa y quieres convertirla en un negocio exitoso.»
  2. «Te imaginas liderando equipos, abriendo restaurantes y creando conceptos nuevos.»
  3. «Quieres combinar la creatividad culinaria con las habilidades para dirigir una empresa.»
  4. «Sueñas con emprender tu propio restaurante o empresa banquetera.»
- **Párrafo del bloque de enfoque:** «La administración de restaurantes se aprende en la cocina y en el negocio: en la Anáhuac México combinas **cocina, servicio, mixología y vinos** con **costos, mercadotecnia y gestión de talento**, para dirigir cualquier negocio de alimentos y bebidas.»
- **Chips — grupo «Operación»:** «Cocina» · «Servicio» · «Mixología» · «Maridaje»
- **Chips — grupo «Negocio»:** «Costos» · «Control presupuestal» · «Conceptos restauranteros» · «Emprendimiento»
- **CTA:** ninguno.
- **Alt:** «Estudiantes de Dirección de Restaurantes de la Universidad Anáhuac México en una práctica de servicio y montaje de mesa.»

---

## Módulo 3 — ¿Por qué estudiar Dirección de Restaurantes en la Anáhuac México? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` con layout **`lic-porque2`** — intro + columna de medios (`campus-slider` de fotos + enlace «Ver instalaciones ›» → `#instalaciones`) + columna de 6 `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No desglosar aquí los diplomas de Le Cordon Bleu:** viven en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac México?»
- **H2:** «¿Por qué estudiar Dirección de Restaurantes en la Anáhuac México?»
- **Intro:** «No solo aprendes a administrar: vives la operación. Cocinas, sirves y diriges en laboratorios reales, tomas decisiones en un simulador de negocios y practicas un año en la industria.»
- **Slider de medios (3 fotos, 1:1):** cocina · laboratorio de mixología · práctica de servicio en sala. Enlace inferior: «Ver instalaciones ›» → `#instalaciones`. **[PENDIENTE: fotos reales.]**
- **Tarjetas (6):**
  1. **«Alianza estratégica con Le Cordon Bleu»** — «Te formas con el respaldo de la alianza de la Anáhuac México con Le Cordon Bleu, Francia, uno de los centros de enseñanza de artes culinarias y hospitalidad más reconocidos del mundo.»
  2. **«Un año de experiencia profesional»** — «Cursas dos periodos de prácticas profesionales en la industria de alimentos y bebidas, en México y en el extranjero, con el acompañamiento de la Universidad.» · Enlace: «Conoce dónde practicas ›» → `#colaboradores`
  3. **«N.º 1 de México en Hospitality & Leisure Management»** — «La Anáhuac México es la universidad número 1 del país y está entre las 50 mejores del mundo en Hospitality & Leisure Management, según el QS World University Rankings by Subject 2026.»
  4. **«Aprendes de líderes de la industria»** — «Tus profesores son profesionales y expertos activos en empresas turísticas y de alimentos y bebidas.»
  5. **«Acreditaciones que respaldan tu título»** — «Programa con acreditación nacional CIEES y certificación internacional tedQual de ONU Turismo.»
  6. **«Cocina + servicio + negocio»** — «Tu plan integra técnica culinaria, servicio, mixología y maridaje con costos, control presupuestal y un simulador de negocios para restaurantes: sales listo para dirigir, no solo para operar.»
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el líder restaurantero que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac e Interdisciplinario— para que desarrolles una visión integral y estés listo para gestionar, coordinar y crear en la industria de alimentos y bebidas.»
  - CTA (`btn btn-purple`): «Descubre la formación de un líder restaurantero Anáhuac México» → `#plan-estudios`

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Dirección de Restaurantes?»
- **Tarjeta «Perfil de egreso» (H3) — bullets (3):**
  - «Gestionas negocios de alimentos y bebidas que generan empleos, cuidando la salud y la satisfacción del comensal.»
  - «Ejecutas y conduces planes, programas y procedimientos de producción y administración de alimentos y bebidas con resultados de calidad.»
  - «Analizas y anticipas las tendencias y los conceptos restauranteros que responden al estilo de vida actual.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Dirección de Restaurantes?»
  - Dato 1: **«8»** / «Semestres (4 años)»
  - Dato 2: **«333»** / «Créditos totales»
  - **⚠️ Exactamente dos datos y sin línea de apoyo**, igual que la versión final de Gastronomía.
- **Alt de la foto:** «Estudiante de Dirección de Restaurantes de la Anáhuac México en el laboratorio de mixología.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`. Sin párrafo de intro (igual que Gastronomía).

**⚠️ 8 tabs, una por semestre («Semestre 1» … «Semestre 8», con `plan-tab-num`), con las materias EXACTAS de cada semestre, en este orden.** No reordenes materias entre semestres y usa las grafías de esta tabla.

**Viñetas por bloque**, según los colores del plan de referencia oficial: naranja = Bloque Profesional (default) · `plan-sem-item--anahuac` = Bloque Anáhuac · `plan-sem-item--inter` = Bloque Interdisciplinario. Marcadas abajo con **(A)** = Anáhuac e **(I)** = Interdisciplinario; el resto es Profesional.

- **⚠️ En esta carrera la «Asignatura Electiva Anáhuac» va en los semestres 6 y 8**, y el semestre 1 ya trae una «Asignatura Electiva Interdisciplinaria». Respeta la tabla aunque difiera de las otras carreras de la Facultad.
- **⚠️ «Formación universitaria A/B» y las «Electiva profesional» son Bloque Profesional.** Las materias regionales llevan el prefijo **«Regional:»**, como en Gastronomía.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Dirección de Restaurantes?»
- **Tabs (8):**

  | Tab | Materias (en este orden) |
  |---|---|
  | **Semestre 1** | Introducción a la industria de la hospitalidad · Introducción a la empresa · Manejo higiénico de los alimentos · Contabilidad financiera para la dirección · Métodos de investigación para las ciencias sociales · Regional: Mercadotecnia turística I · Ser universitario **(A)** · Asignatura Electiva Interdisciplinaria **(I)** |
  | **Semestre 2** | Técnicas y aplicaciones culinarias I · Fundamentos de cata de vinos y consumo responsable · Operación y manejo de áreas de cocina · Cultura gastronómica de México · Costos de alimentos y bebidas · Matemáticas para la dirección · Antropología fundamental **(A)** · Asignatura Electiva Interdisciplinaria **(I)** · Taller o actividad electiva **(I)** |
  | **Semestre 3** | Técnicas y aplicaciones culinarias II · Servicio de alimentos · Mixología · Taller de servicio · Estadística para la dirección · Taller de sistemas de información tecnológica para los restaurantes · Liderazgo y desarrollo personal **(A)** · Ética **(A)** · Taller o actividad electiva **(I)** |
  | **Semestre 4** | Prácticum en la industria de alimentos y bebidas I · Tendencias en la industria de la hospitalidad · Tecnologías de la información para la dirección |
  | **Semestre 5** | Gestión de talento en la industria de la hospitalidad · Operación y servicio de banquetes · Nutrición · Derecho y empresa · Control presupuestal · Electiva profesional · Análisis de estados financieros para la dirección · Humanismo clásico y contemporáneo **(A)** · Habilidades para el emprendimiento **(I)** |
  | **Semestre 6** | Administración de conceptos restauranteros · Gestión de calidad en la hospitalidad · Maridaje · Regional: Mercadotecnia turística II · Formación universitaria A · Electiva profesional · Asignatura Electiva Anáhuac **(A)** · Persona y trascendencia **(A)** · Emprendimiento e innovación **(I)** |
  | **Semestre 7** | Prácticum en la industria de alimentos y bebidas II · Responsabilidad social y sustentabilidad **(I)** · Asignatura Electiva Interdisciplinaria **(I)** |
  | **Semestre 8** | Evaluación de proyectos de inversión para la dirección · Simulador de negocios para restaurantes · Estrategias de atención centradas en el consumidor · Proyecto integrador para la industria de la hospitalidad · Formación universitaria B · Electiva profesional · Electiva profesional · Liderazgo y equipos de alto desempeño **(A)** · Asignatura Electiva Anáhuac **(A)** · Taller o actividad electiva **(I)** |

- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas la operación y la dirección de negocios de alimentos y bebidas, cursas tus dos periodos de prácticas profesionales y cierras con un proyecto integrador para la industria de la hospitalidad. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Interdisciplinario** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`):** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP D.O.F.» + icono externo + `sr-only` «(abre el documento oficial del RVOE)» **[PENDIENTE: URL del documento oficial]**

---

## Módulo 6 — ¿Dónde puedes trabajar como egresado de Dirección de Restaurantes? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (6 tiles + `campo-preview` 1:1) + banda `campo-band campo-band--doble` con logo, texto y los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes trabajar como egresado de Dirección de Restaurantes?»
- **Intro:** «Como egresado de Dirección de Restaurantes de la Anáhuac México puedes dirigir áreas de grupos restauranteros y hoteleros, trabajar en empresas de bebidas y en la organización de eventos, colaborar en medios especializados o emprender tu propio restaurante o empresa banquetera.»
- **Tiles (6):**
  1. **«Grupos restauranteros»** — «Operaciones, control de calidad, compras y apertura de establecimientos en grupos restauranteros nacionales e internacionales.»
  2. **«Hoteles y corporativos de hospitalidad»** — «Áreas de alimentos y bebidas de grupos hoteleros y corporativos de empresas de hospitalidad.»
  3. **«Marketing, ventas y talento»** — «Mercadotecnia, ventas, relaciones públicas y gestión de talento humano en la industria de alimentos y bebidas.»
  4. **«Bebidas fermentadas y destiladas»** — «Empresas del área de bebidas fermentadas y destiladas, nacionales e internacionales.»
  5. **«Eventos y banquetes»** — «Organización de eventos y operación de servicios de banquetes.»
  6. **«Medios y emprendimiento»** — «Revistas y medios digitales especializados, o tu propio restaurante o empresa banquetera.»
- **Preview:** formato 1:1 (seis tiles, igual que Gastronomía), alt descriptivo por ámbito; si las fotos no muestran el entorno profesional, el alt describe lo que de verdad se ve. **[PENDIENTE: fotos.]**
- **Banda destacada (`campo-band--doble`)** — mismo componente que la banda de Le Cordon Bleu en Gastronomía. **⚠️ Es el módulo de mayor peso persuasivo de la página.**
  - **Logo:** Le Cordon Bleu (mismo archivo que Gastronomía).
  - **H3 (`campo-doble-title`):** «Diplomas internacionales · Le Cordon Bleu»
  - Texto: «Además de tu título oficial por parte de la **Universidad Anáhuac México**, puedes obtener **hasta cuatro diplomas de reconocimiento de Le Cordon Bleu, Francia**, a lo largo de tu carrera.»
  - **⚠️ Sin «Doble acreditación», sin «Bachelor» y sin chips con nombres de diplomas** (la fuente no los nombra). No copies los de Gastronomía.
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`

---

## Módulo 7 — Instalaciones donde estudiarás tu licenciatura · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus lic-campus--inst` — intro + `campus-slider lic-inst-slider` de `lic-inst-card` (foto + H3) + línea de cierre `lic-inst-cta`.

**⚠️ Aquí se MUESTRAN los espacios (foto + nombre); no se repite la argumentación de M3.** ⚠️ Sin tarjetas de campus ni direcciones.

- **Eyebrow:** «Instalaciones»
- **H2:** «Instalaciones donde estudiarás tu licenciatura»
- **Intro:** «Vive la operación de un restaurante: conoce las cocinas, laboratorios y espacios donde aprendes a dirigir un negocio de alimentos y bebidas.»
- **Tarjetas del slider (5, en este orden):**
  1. **«Ocho cocinas con espacios y equipos especializados»**
  2. **«Laboratorio de servicio de alimentos y bebidas»**
  3. **«Laboratorios de cata y de mixología»**
  4. **«Simuladores de vanguardia para negocios turísticos, hoteleros y restauranteros»**
  5. **«Un viñedo en el estado de Querétaro»** **[VERIFICAR: nombre y ubicación del viñedo]**
- **Alt:** «[Nombre del espacio] — Universidad Anáhuac México» **[PENDIENTE: fotos reales de cada espacio.]**
- **Línea de cierre:** «Agenda un tour presencial o una cita virtual [aquí].» **[PENDIENTE: URL del agendador]**

---

## Módulo 8 — Historias Anáhuac México · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual (6 filas), con el H2 ajustado.

- **H2:** «Historias Anáhuac México» · **Bajada:** «Leones Anáhuac México que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales.]** ⚠️ No inventes personas ni citas. Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Dirección de Restaurantes, generación [año], Campus Norte.»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados` con **dos grupos**: carrusel vertical de logos de convenios + mapa de destinos con pines (los mismos componentes de Gastronomía).

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de profesores líderes en la industria de alimentos y bebidas, y practicas en restaurantes, hoteles y destinos líderes del mundo.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → avatar de iniciales (o foto) + nombre. **[PENDIENTE: profesores de la licenciatura.]** ⚠️ No uses a la coordinación administrativa como claustro.
- **«Convenios de prácticas» (H3):** carrusel vertical de logos, el mismo de Gastronomía: Le Cordon Bleu México · Fiesta Inn · Xcaret · Viñedo Cuna de Tierra · Despegar · Universidad Europea de Roma. **[VERIFICAR: que apliquen a esta licenciatura]**
- **«Destinos de prácticas» (H3):** el mismo mapa de Gastronomía, con los mismos 33 pines y la lista de chips como respaldo por debajo de 900px.
  - **Internacionales:** Montreal · Miami · Aspen · Dallas · Chicago · Orlando · Nueva York · Punta Cana · Buenos Aires · Hong Kong · Ibiza · Barcelona · Madrid · San Sebastián · París · Londres · Roma · Melbourne · Phuket · Seúl · Dubái · Vietnam · Tailandia · Shanghái
  - **Nacionales:** Ciudad de México · Cancún · Ensenada · Los Cabos · Mérida · Oaxaca · Riviera Maya · San Miguel de Allende · Punta Mita
  - Pista móvil: «Desliza el mapa para ver todos los destinos.»
  - Nota al pie: «Destinos donde han realizado prácticas alumnos de la Facultad de Turismo y Gastronomía.»

---

## Módulo 10 — Elige el siguiente paso para tu futuro · AIDA: Acción · **H2** · `#siguiente-paso`

**Componente:** `lic-pasos` — encabezado + **5 `paso-card`**. Fondo blanco. Idéntico a Gastronomía.

- **Eyebrow:** «Siguiente paso» · **H2:** «Elige el siguiente paso para tu futuro»
- **Bajada:** «Avanza a tu ritmo: explora costos y apoyos, revisa fechas, inicia tu admisión o habla con un asesor.»
- **Tarjetas:**
  1. **«Cotiza tu carrera»** — «Calcula la inversión de tu licenciatura y conoce las opciones de pago.» · «Cotizar ›» → `/cotizador`
  2. **«Inicia tu admisión»** — «Comienza tu proceso 100% en línea en solo 6 pasos.» · «Empezar ›» → `/admision-general`
  3. **«Fechas de examen»** — «Consulta el calendario de exámenes de admisión a lo largo del año.» · «Consultar ›» → `/fechas-de-examenes`
  4. **«Apoyos socioeconómicos»** — «Descubre las becas y apoyos económicos disponibles para estudiar aquí.» · «Ver apoyos ›» → `/apoyos-educativos-universidad-anahuac-mexico`
  5. **«Habla con un asesor»** — «Resuelve tus dudas con un asesor preuniversitario, por campus.» · «Contactar ›» → `proceso-de-admision.html#asesoria`
- **⚠️ Esta tarjeta NO muestra datos de asesor** (ni nombre, ni foto, ni WhatsApp, ni correo). Es solo un CTA.

---

## Módulo 11 — Preguntas frecuentes · AIDA: Acción · **H2** · `#faq`

**Componente:** `lic-faq` — acordeón `details.faq-item` con `name="faq-direccion-de-restaurantes"`, fondo naranja, + `FAQPage` en JSON-LD.

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Dirección de Restaurantes»
- **Acordeón (7 preguntas):**
  1. **«¿Cuántos años dura la carrera de Dirección de Restaurantes?»** → «La Licenciatura en Dirección de Restaurantes dura 8 semestres, es decir, 4 años, en modalidad presencial en Campus Norte.»
  2. **«¿De qué trata la carrera de Dirección de Restaurantes?»** → «Es una licenciatura en administración de restaurantes y negocios de alimentos y bebidas: te forma para dirigir su operación y su gestión, desde la cocina, el servicio y las bebidas hasta los costos, el control presupuestal, la mercadotecnia y la creación de conceptos restauranteros.»
  3. **«¿Qué materias se ven en la carrera de Dirección de Restaurantes?»** → «Cursarás materias como Operación y manejo de áreas de cocina, Técnicas y aplicaciones culinarias, Mixología, Maridaje, Costos de alimentos y bebidas, Operación y servicio de banquetes, Administración de conceptos restauranteros y Simulador de negocios para restaurantes, entre otras.»
  4. **«¿La Licenciatura en Dirección de Restaurantes tiene prácticas profesionales?»** → «Sí. Cursas dos periodos de prácticas profesionales con valor curricular en la industria de alimentos y bebidas, en México o en el extranjero.»
  5. **«¿Qué obtengo al estudiar Dirección de Restaurantes en la Anáhuac México además de mi título?»** → «Puedes obtener hasta cuatro diplomas de reconocimiento de Le Cordon Bleu, Francia, a lo largo de la carrera.»
  6. **«¿En qué puedo trabajar al terminar la carrera de Dirección de Restaurantes?»** → «Puedes trabajar en grupos restauranteros y hoteleros, en áreas como operaciones, calidad, mercadotecnia, ventas, compras y apertura de establecimientos; en empresas de bebidas, en la organización de eventos y en medios especializados, o emprender tu propio restaurante o empresa banquetera.»
  7. **«¿Cuánto cuesta estudiar Dirección de Restaurantes en la Anáhuac México?»** → «Puedes calcular tu colegiatura y conocer opciones de beca en nuestro cotizador.» *(enlace «nuestro cotizador» → `/cotizador`)*
  - **⚠️ Sin la nota de insumos, uniformes y maletines** que lleva esta pregunta en Gastronomía.
- **⚠️ El texto del `FAQPage` debe ser idéntico al del acordeón, sin markup dentro.**

---

## Módulo 12 — Descubre por qué ser un León en la Anáhuac México · AIDA: Deseo (refuerzo) · **H2** · `#experiencia` *(módulo compartido — no rediseñar)*

**Componente:** `experience` de Inicio, tal cual, con el H2 ajustado.

- **Eyebrow:** «Mucho más que solo una Universidad.» · **H2:** «Descubre por qué ser un León en la Anáhuac México» · **Bajada:** «Conoce por qué vivirás una experiencia universitaria única con nosotros.» · CTA: «Conoce la experiencia Anáhuac México»
- **Copy de las 4 tarjetas:** el compartido del molde, sin adaptación para esta carrera.

---

## Módulo 13 — Solicita información · AIDA: Acción · **H2** · `#solicita`

**Componente:** `lic-form` — foto + `lic-form-card`.

**⚠️ Formulario de envío de material, no de contacto con asesor. La bajada que lo declara es obligatoria y visible.**
**⚠️ Sin selector de campus:** la carrera es solo de Campus Norte. El campo se sustituye por un dato fijo `readonly`, como en Biotecnología y Dirección Internacional de Hoteles.

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Dirección de Restaurantes»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Dirección de Restaurantes»** |
  | «Campus» | text `readonly` | prellenado: **«Campus Norte»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Dirección de Restaurantes.»
- **Error (ejemplo):** «Revisa tu correo: parece que falta el @.»
- **Alt de la foto:** «Estudiante de la Anáhuac México consultando información de la Licenciatura en Dirección de Restaurantes.»
- **[PENDIENTE: conexión a HubSpot y foto real.]**

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Turismo, Gastronomía y Hospitalidad › Dirección de Restaurantes.
- **`Course`**: `name`="Licenciatura en Dirección de Restaurantes" · `description`="Formación de profesionales que gestionan negocios de alimentos y bebidas con calidad, cuidando la salud y la satisfacción del comensal, y que anticipan las tendencias y los conceptos restauranteros." · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=333 · `courseMode`="onsite" · `location`= Campus Norte.
- **`FAQPage`** (junto a M11): las 7 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre «Universidad Anáhuac México», url, dirección de **Campus Norte** (Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C.P. 52786), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px con `<label class="sr-only">`.
- El color de viñeta por bloque (M5) **no es el único indicador**: incluye una leyenda visible de los tres bloques o un `sr-only` por materia.
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M3 y M7 con botones etiquetados («Imagen anterior / siguiente», «Instalación anterior / siguiente») y dots navegables por teclado.
- Carrusel de convenios (M9) con flechas etiquetadas y sin desplazamiento automático; los pines del mapa con `tabindex="0"` y nombre visible.
- Acordeón de M11 con `<details>` nativo.
- Video del hero con subtítulos; carga al clic, con `aria-label` descriptivo.
- Contraste AA en la banda naranja del FAQ y en la banda de M6.

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · «Gestiona. Coordina. Crea.» · 3 chips: 8 sem · presencial · Campus Norte | video + 2 CTAs)
2  ¿Es para ti? (H2: dirigir el restaurante del que todos hablen · 4 tarjetas + chips Operación / Negocio)
3  ¿Por qué la Anáhuac México? (slider + «Ver instalaciones» | 6 tarjetas, incl. QS n.º 1 · banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (3 bullets + AEO: 8 sem · 333 créditos | foto)
5  Plan de estudios (8 tabs por semestre, con colores por bloque · 3 bloques · 2 descargas · RVOE)
6  Campo laboral (6 tiles + preview | banda DIPLOMAS LE CORDON BLEU (hasta 4) + 2 CTAs)
7  Instalaciones (slider: cocinas · servicio de A&B · cata y mixología · simuladores · viñedo)
8  Historias Anáhuac México (compartido)
9  ¿Con quién te formas? (claustro + carrusel de convenios + mapa de destinos)
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (7, acordeón naranja + FAQPage; incluye «¿de qué trata?»)
12 León en la Anáhuac México (compartido)
13 Solicita información (formulario de material, campus fijo Norte)
14 Footer + Newsletter
```
