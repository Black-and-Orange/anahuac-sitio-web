# Página: Licenciatura en Administración Turística — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Molde base.** Replica **1:1 la versión final publicada de Gastronomía** → [`gastronomia.html`](https://black-and-orange.github.io/anahuac-sitio-web/gastronomia.html) (misma Facultad, mismos componentes). Reutiliza sus clases (`lic-hero`, `lic-afinidad`, `lic-porque` + `lic-porque2`, `lic-plan`, `lic-plan-est`, `lic-campo` + `campo-band--doble`, `lic-campus--inst`, `stories`, `lic-colab` + carrusel de convenios + mapa de destinos, `lic-pasos`, `lic-faq`, `experience`, `lic-form`). **No se diseñan componentes nuevos.**

> **⚠️ Cuatro diferencias contra Gastronomía (no copies estas partes):**
> 1. **La banda de M6 no lleva chips de certificaciones de cocina.** Para esta carrera la fuente no documenta diplomas parciales de Le Cordon Bleu; a cambio, la banda suma la **doble titulación con la Università Europea di Roma**.
> 2. **Sin «minor de vinos»** bajo las tabs del plan ni en el Bloque Profesional.
> 3. **En M3 no van** la tarjeta de competencias culinarias ni la de las ocho cocinas: aquí van el **ranking QS** y la mezcla **turismo + negocio + tecnología**.
> 4. **La FAQ de costos no lleva la nota de insumos, uniformes y maletines:** ese beneficio es de Gastronomía.

> **⚠️ Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Incluye los módulos compartidos: **«Historias Anáhuac México»** y **«Descubre por qué ser un León en la Anáhuac México»**. Solo se exceptúan «Modelo Anáhuac», «Bloque Anáhuac» y «Asignatura Electiva Anáhuac».

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/administracion-turistica` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Nombre oficial** | **«Licenciatura en Administración Turística»**. ⚠️ Úsalo completo siempre que se nombre la licenciatura. |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Turismo, Gastronomía y Hospitalidad |
| **Audiencia** | Preuniversitario que ama viajar y conocer culturas, dinámico y emprendedor + padres/madres que dudan del empleo y quieren conocer el alcance profesional de la carrera (respondido en positivo en M2, M3 y M6) |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México: **Norte** (Huixquilucan, Edo. Méx.) y **Sur** (Álvaro Obregón, CDMX) — presencial |
| **KPI** | Envíos del formulario M13 · descargas de plan y folleto · interacción con las tabs (M5) y los tiles (M6) · clics en la banda de doble acreditación |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** El **detalle de Le Cordon Bleu y de la doble titulación con Roma** vive **solo en la banda de M6**; en M3 se nombra la alianza sin desglosarla. Los **convenios y destinos de prácticas** van **solo en M9**. Las **instalaciones** se nombran en M3 y se **muestran** en M7.
- **⚠️ Cero comparaciones** con otras licenciaturas ni con otras universidades.
- **⚠️ El ranking QS es de la Universidad en la disciplina Hospitality & Leisure Management.** Cítalo siempre con su fuente, tal como está en M3. No lo conviertas en «la mejor carrera de turismo».
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles, sliders, carrusel de convenios y mapa.

## 3. Metadatos SEO / AEO

- **Title (57 car.):** «Licenciatura en Administración Turística | Anáhuac México»
  - *⚠️ Va con «Anáhuac México» y no con «Universidad Anáhuac México» solo porque el nombre completo pasaría de 60 caracteres. No lo alargues.*
- **Meta description (151 car.):** «Estudia Administración Turística en la Universidad Anáhuac México, n.º 1 del país en Hospitality & Leisure (QS), con un año de prácticas profesionales.»
- **Keyword principal:** `administracion de empresas turisticas` (2,900 · hoy pos. 5) · **Secundarias:** `administracion turistica` (720 · pos. 5) · `que es la administración turística` (210 · pos. 15) · `administracion turistica y hotelera` (210 · pos. 4) · `que es administracion turistica` (140 · pos. 8) · `administración de empresas turísticas universidades` (110 · pos. 5) · `universidades con la carrera de administracion hotelera y turistica` (90 · pos. 7) · `en que consiste la carrera de administracion de empresas turisticas` (90 · pos. 9) · `materias de administración de empresas turísticas` (70 — **hoy en posición 1: no perderla**)
- **⚠️ La keyword de mayor volumen dice «administración de empresas turísticas», no «administración turística».** Por eso la frase aparece de forma natural en M2. **No la sustituyas por sinónimos.**
- **⚠️ Clúster «¿qué es…?»** (`que es la administración turística`, `administración turística que es`, `en que consiste la carrera…`; pos. 8–15): lo responde la pregunta 2 del FAQ.
- **Open Graph:**
  - `og:title`: «Licenciatura en Administración Turística — Universidad Anáhuac México»
  - `og:description`: «Dirige empresas turísticas, crea experiencias y posiciona destinos con un año de prácticas, el Bachelor de Le Cordon Bleu y doble titulación en Roma.»
  - `og:image` (alt): «Estudiantes de Administración Turística de la Universidad Anáhuac México en un laboratorio de hospedaje.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Administración Turística» (M1, `#inicio`)
  - **H2** «¿Te gustaría diseñar las experiencias que hacen inolvidable un destino?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Administración Turística en la Anáhuac México?» (M3, `#por-que`) → H3 por tarjeta (6)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Administración Turística?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Administración Turística?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Administración Turística?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Interdisciplinario)
  - **H2** «¿Dónde puedes trabajar como egresado de Administración Turística?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Instalaciones donde estudiarás tu licenciatura» (M7, `#instalaciones`) → H3 por instalación (6)
  - **H2** «Historias Anáhuac México» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Convenios de prácticas» · H3 «Destinos de prácticas»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Administración Turística» (M11, `#faq`) → H3 por pregunta (7)
  - **H2** «Descubre por qué ser un León en la Anáhuac México» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Administración Turística» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero lic-hero--titulo-largo`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 (con `lic-hero-pre` en «Licenciatura en») + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips.**

- **Breadcrumb:** Inicio › Oferta Académica › Turismo, Gastronomía y Hospitalidad › Administración Turística
- **Eyebrow (`tagline`):** «Turismo, Gastronomía y Hospitalidad»
- **H1:** «Licenciatura en Administración Turística»
- **Claim (`lic-hero-claim`):** «Define. Dirige. Emprende.»
  - **⚠️ El claim del hero es siempre una secuencia de palabras sueltas** (verbos separados por punto), nunca una frase.
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Norte - Sur»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video]**. Igual que en Gastronomía: mientras no exista, la tarjeta va sin `data-yt-id` y sin botón de play.
- **Alt de la portada:** «Estudiantes de Administración Turística de la Universidad Anáhuac México en una práctica de servicio en el laboratorio de hospedaje.»

---

## Módulo 2 — ¿Te gustaría diseñar las experiencias que hacen inolvidable un destino? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

**⚠️ El párrafo de enfoque muestra el alcance profesional de la carrera; se retoma en M3 (tarjeta 6) y M6. No lo recortes ni lo conviertas en una negación («no es solo…», «va más allá de…»).**

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te gustaría diseñar las experiencias que hacen inolvidable un destino?»
- **Intro:** «Si te reconoces en lo siguiente, la Administración Turística puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Te emociona viajar, conocer otras culturas y crear experiencias que la gente recuerde.»
  2. «Quieres trabajar en una industria dinámica, creativa y en constante crecimiento.»
  3. «Te ves emprendiendo o dirigiendo tu propia empresa turística.»
  4. «Sueñas con una formación y una experiencia profesional internacionales.»
- **Párrafo del bloque de enfoque:** «Con la administración de empresas turísticas te formas en la Anáhuac México para **dirigir empresas, crear productos y experiencias, y posicionar destinos** con una visión sostenible y digital.»
- **Chips — grupo «Turismo»:** «Gestión de destinos» · «Eventos» · «Experiencias turísticas» · «Sostenibilidad»
- **Chips — grupo «Negocio»:** «Revenue management» · «Mercadotecnia» · «Finanzas» · «Tecnología»
- **CTA:** ninguno.
- **Alt:** «Estudiantes de Administración Turística de la Universidad Anáhuac México trabajando en equipo en un proyecto de destino turístico.»

---

## Módulo 3 — ¿Por qué estudiar Administración Turística en la Anáhuac México? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` con layout **`lic-porque2`** — intro + columna de medios (`campus-slider` de fotos + enlace «Ver instalaciones ›» → `#instalaciones`) + columna de 6 `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No desglosar aquí el Bachelor de Le Cordon Bleu ni la doble titulación con Roma:** viven en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac México?»
- **H2:** «¿Por qué estudiar Administración Turística en la Anáhuac México?»
- **Intro:** «No solo estudias turismo: lo vives. Practicas un año completo en la industria, aprendes con simuladores de negocios y te formas con profesores activos en el sector.»
- **Slider de medios (3 fotos, 1:1):** laboratorio de hospedaje · simuladores de negocios turísticos · estudiantes en práctica de servicio. Enlace inferior: «Ver instalaciones ›» → `#instalaciones`. **[PENDIENTE: fotos reales.]**
- **Tarjetas (6):**
  1. **«Alianza estratégica con Le Cordon Bleu»** — «Te formas con el respaldo de la alianza de la Anáhuac México con Le Cordon Bleu, Francia, uno de los centros de enseñanza de artes culinarias y hospitalidad más reconocidos del mundo.»
  2. **«Un año de experiencia profesional»** — «Cursas dos semestres de prácticas profesionales de tiempo completo, con valor curricular, en destinos turísticos de México y del extranjero.» · Enlace: «Conoce dónde practicas ›» → `#colaboradores`
  3. **«N.º 1 de México en Hospitality & Leisure Management»** — «La Anáhuac México es la universidad número 1 del país y está entre las 50 mejores del mundo en Hospitality & Leisure Management, según el QS World University Rankings by Subject 2026.»
  4. **«Aprendes de quienes mueven la industria»** — «Tus profesores tienen amplia experiencia y siguen activos en el turismo y la hospitalidad, y te acercas a líderes nacionales e internacionales del sector en conferencias, seminarios y encuentros.»
  5. **«Acreditaciones que respaldan tu título»** — «Programa con acreditación nacional CIEES y certificación internacional tedQual de ONU Turismo, cuya biblioteca virtual especializada consultas durante tu carrera.»
  6. **«Turismo + negocio + tecnología»** — «Combinas gestión de destinos, revenue management y mercadotecnia turística con finanzas, sostenibilidad y transformación digital: sales listo para dirigir empresas turísticas, no solo para operarlas.»
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el líder turístico que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac e Interdisciplinario— para que desarrolles una visión integral y estés listo para dirigir, innovar y emprender en la industria turística.»
  - CTA (`btn btn-purple`): «Descubre la formación de un líder turístico Anáhuac México» → `#plan-estudios`

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Administración Turística?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Diriges y administras empresas turísticas y de la hospitalidad, y defines sus modelos de gestión con herramientas de transformación digital.»
  - «Identificas oportunidades para desarrollar productos turísticos innovadores, según las tendencias mundiales del mercado.»
  - «Diseñas estrategias de promoción, posicionamiento y comercialización de productos y experiencias turísticas.»
  - «Ves el destino turístico como una unidad con capacidades propias, capaz de impulsar a la industria y a la comunidad local.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Administración Turística?»
  - Dato 1: **«8»** / «Semestres (4 años)»
  - Dato 2: **«330»** / «Créditos totales»
  - **⚠️ Exactamente dos datos y sin línea de apoyo**, igual que la versión final de Gastronomía.
- **Alt de la foto:** «Estudiante de Administración Turística de la Anáhuac México en el laboratorio de hospedaje.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`. Sin párrafo de intro (igual que Gastronomía).

**⚠️ 8 tabs, una por semestre («Semestre 1» … «Semestre 8», con `plan-tab-num`), con las materias EXACTAS de cada semestre, en este orden.** No reordenes materias entre semestres y usa las grafías de esta tabla.

**Viñetas por bloque**, según los colores del plan de referencia oficial: naranja = Bloque Profesional (default) · `plan-sem-item--anahuac` = Bloque Anáhuac · `plan-sem-item--inter` = Bloque Interdisciplinario. Marcadas abajo con **(A)** = Anáhuac e **(I)** = Interdisciplinario; el resto es Profesional.

- **⚠️ «Formación universitaria A/B» y las «Electiva profesional» son Bloque Profesional.** «Taller o actividad electiva», «Habilidades para el emprendimiento», «Emprendimiento e innovación» y «Responsabilidad social y sustentabilidad» son Interdisciplinario (I).
- **⚠️ Las materias regionales llevan el prefijo «Regional:»**, como en Gastronomía.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Administración Turística?»
- **Tabs (8):**

  | Tab | Materias (en este orden) |
  |---|---|
  | **Semestre 1** | Introducción a la industria de la hospitalidad · Operación de empresas de alojamiento · Introducción a la empresa · Contabilidad financiera para la dirección · Métodos de investigación para las ciencias sociales · Regional: Mercadotecnia turística I · Ser universitario **(A)** |
  | **Semestre 2** | Técnicas y aplicaciones culinarias I · Fundamentos de cata de vinos y consumo responsable · Taller de sistemas de información tecnológica para la hotelería · Geografía y patrimonio turístico · Contabilidad gerencial para la dirección · Matemáticas para la dirección · Antropología fundamental **(A)** · Taller o actividad electiva **(I)** |
  | **Semestre 3** | Dirección y organización de eventos · Operación de empresas de alimentos y bebidas · Transportación turística · Estadística para la dirección · Liderazgo y desarrollo personal **(A)** · Ética **(A)** · Taller o actividad electiva **(I)** · Asignatura Electiva Interdisciplinaria **(I)** |
  | **Semestre 4** | Prácticum de administración turística I · Tendencias en la industria de la hospitalidad · Tecnologías de la información para la dirección · Asignatura Electiva Anáhuac **(A)** |
  | **Semestre 5** | Gestión de talento en la industria de la hospitalidad · Taller de sistemas avanzados de tecnología para la gestión turística · Análisis de estados financieros para la dirección · Sostenibilidad y turismo · Electiva profesional · Electiva profesional · Derecho y empresa · Humanismo clásico y contemporáneo **(A)** · Habilidades para el emprendimiento **(I)** |
  | **Semestre 6** | Gestión de calidad en la hospitalidad · Gestión de destinos · Economía para la dirección · Formación universitaria A · Electiva profesional · Regional: Mercadotecnia turística II · Persona y trascendencia **(A)** · Emprendimiento e innovación **(I)** · Taller o actividad electiva **(I)** |
  | **Semestre 7** | Prácticum de administración turística II · Asignatura Electiva Anáhuac **(A)** · Responsabilidad social y sustentabilidad **(I)** · Asignatura Electiva Interdisciplinaria **(I)** |
  | **Semestre 8** | Desarrollo de productos y experiencias turísticas · Revenue management · Proyecto integrador para la industria de la hospitalidad · Estrategias de atención centradas en el consumidor · Electiva profesional · Evaluación de proyectos de inversión para la dirección · Formación universitaria B · Liderazgo y equipos de alto desempeño **(A)** · Asignatura Electiva Interdisciplinaria **(I)** |

- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas la gestión turística y la visión de negocio, cursas tus dos semestres de prácticas profesionales y cierras con un proyecto integrador para la industria de la hospitalidad. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Interdisciplinario** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`):** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP D.O.F.» + icono externo + `sr-only` «(abre el documento oficial del RVOE)» **[PENDIENTE: URL del documento oficial]**

---

## Módulo 6 — ¿Dónde puedes trabajar como egresado de Administración Turística? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (6 tiles + `campo-preview` 1:1) + banda `campo-band campo-band--doble` con logo, texto y los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes trabajar como egresado de Administración Turística?»
- **Intro:** «Como egresado de Administración Turística de la Anáhuac México puedes dirigir corporativos turísticos, agencias y operadoras de viajes, aerolíneas, hoteles y empresas de eventos; trabajar en plataformas digitales de viajes o en el sector público de turismo; o emprender tu propia empresa turística.»
- **Tiles (6):**
  1. **«Corporativos, agencias y operadoras»** — «Empresas y corporativos del sector turismo, agencias y operadoras de viajes.»
  2. **«Transportación y plataformas digitales»** — «Aerolíneas, transportación terrestre y marítima de pasajeros, y plataformas digitales de viajes y hospitalidad.»
  3. **«Hospedaje y recreación»** — «Hoteles y empresas de alojamiento, parques temáticos, spas y empresas de animación y entretenimiento.»
  4. **«Eventos, alimentos y bebidas»** — «Banquetes, bodas, congresos, convenciones y ferias; restaurantes y empresas de alimentos y bebidas.»
  5. **«Promoción y gestión pública del turismo»** — «Agencias de publicidad y relaciones públicas con clientes del sector, y dependencias de turismo municipales, estatales o federales.»
  6. **«Emprendimiento y consultoría»** — «Tu propia agencia o empresa turística, o consultoría para identificar oportunidades de negocio e inversión en destinos.»
- **Preview:** formato 1:1 (seis tiles, igual que Gastronomía), alt descriptivo por ámbito; si las fotos no muestran el entorno profesional, el alt describe lo que de verdad se ve. **[PENDIENTE: fotos.]**
- **Banda destacada (`campo-band--doble`)** — mismo componente que la banda de Le Cordon Bleu en Gastronomía. **⚠️ Es el módulo de mayor peso persuasivo de la página.**
  - **Logo:** Le Cordon Bleu (mismo archivo que Gastronomía).
  - **H3 (`campo-doble-title`):** «Doble acreditación · Bachelor Degree of Business Tourism Management»
  - Texto 1: «Obtén un título oficial por parte de la **Universidad Anáhuac México** y puedes obtener un *Bachelor* por **Le Cordon Bleu, Francia**.»
  - Texto 2: «Además, tienes la posibilidad de obtener una **doble titulación con la Università Europea di Roma**.»
  - **⚠️ Sin chips de certificaciones** (Bases de Cuisine, Pâtisserie, etc.): esos son de Gastronomía.
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`

---

## Módulo 7 — Instalaciones donde estudiarás tu licenciatura · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus lic-campus--inst` — intro + `campus-slider lic-inst-slider` de `lic-inst-card` (foto + H3) + línea de cierre `lic-inst-cta`.

**⚠️ Aquí se MUESTRAN los espacios (foto + nombre); no se repite la argumentación de M3.** ⚠️ Sin tarjetas de campus ni direcciones.

- **Eyebrow:** «Instalaciones»
- **H2:** «Instalaciones donde estudiarás tu licenciatura»
- **Intro:** «Vive el turismo en acción: conoce los laboratorios, simuladores y espacios donde aprendes a operar y dirigir empresas turísticas y de hospitalidad.»
- **Tarjetas del slider (6, en este orden):**
  1. **«Simuladores de vanguardia para negocios turísticos, hoteleros y restauranteros»**
  2. **«Laboratorios de hospedaje y de servicio de alimentos y bebidas»**
  3. **«Programas de georreferenciación y bases de datos académicas especializadas»**
  4. **«Laboratorios de cata y de mixología»**
  5. **«Ocho cocinas con espacios y equipos especializados»**
  6. **«Un viñedo en el estado de Querétaro»** **[VERIFICAR: nombre y ubicación del viñedo]**
- **Alt:** «[Nombre del espacio] — Universidad Anáhuac México» **[PENDIENTE: fotos reales de cada espacio.]**
- **Línea de cierre:** «Agenda un tour presencial o una cita virtual [aquí].» **[PENDIENTE: URL del agendador]**

---

## Módulo 8 — Historias Anáhuac México · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual (6 filas), con el H2 ajustado.

- **H2:** «Historias Anáhuac México» · **Bajada:** «Leones Anáhuac México que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales.]** ⚠️ No inventes personas ni citas. Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Administración Turística, generación [año], Campus [Norte/Sur].»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados` con **dos grupos**: carrusel vertical de logos de convenios + mapa de destinos con pines (los mismos componentes de Gastronomía).

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de profesores activos en el turismo y la hospitalidad, y practicas en empresas y destinos turísticos líderes del mundo.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → avatar de iniciales (o foto) + nombre. **[PENDIENTE: profesores de la licenciatura.]** ⚠️ No uses a la coordinación administrativa como claustro.
- **«Convenios de prácticas» (H3):** carrusel vertical de logos, el mismo de Gastronomía: Despegar · Fiesta Inn · Xcaret · Universidad Europea de Roma · Le Cordon Bleu México · Viñedo Cuna de Tierra. **[VERIFICAR: que apliquen a esta licenciatura]**
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

**Componente:** `lic-faq` — acordeón `details.faq-item` con `name="faq-administracion-turistica"`, fondo naranja, + `FAQPage` en JSON-LD.

**⚠️ La pregunta 2 («¿Qué es…?») atiende búsquedas que hoy posicionan (pos. 8–15). No la quites.**

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Administración Turística»
- **Acordeón (7 preguntas):**
  1. **«¿Cuántos años dura la carrera de Administración Turística?»** → «La Licenciatura en Administración Turística dura 8 semestres, es decir, 4 años, en modalidad presencial.»
  2. **«¿Qué es la Administración Turística?»** → «Es la carrera que te forma para dirigir y gestionar empresas y destinos turísticos, como agencias de viajes, hoteles, aerolíneas, parques temáticos y empresas de eventos. Combina administración, finanzas, mercadotecnia, sostenibilidad y tecnología para crear productos y experiencias turísticas competitivas.»
  3. **«¿Qué materias se ven en la carrera de Administración Turística?»** → «Cursarás materias como Gestión de destinos, Revenue management, Dirección y organización de eventos, Geografía y patrimonio turístico, Transportación turística, Sostenibilidad y turismo y Desarrollo de productos y experiencias turísticas, entre otras.»
  4. **«¿La Licenciatura en Administración Turística tiene prácticas profesionales?»** → «Sí. Cursas dos semestres de prácticas profesionales de tiempo completo, con valor curricular, en destinos turísticos de México y del extranjero.»
  5. **«¿Qué obtengo al estudiar Administración Turística en la Anáhuac México además de mi título?»** → «Puedes obtener el Bachelor Degree of Business Tourism Management de Le Cordon Bleu, Francia, y tienes la posibilidad de una doble titulación con la Università Europea di Roma.»
  6. **«¿En qué puedo trabajar al terminar la carrera de Administración Turística?»** → «Puedes trabajar en corporativos turísticos, agencias y operadoras de viajes, aerolíneas, hoteles, parques temáticos, empresas de eventos, plataformas digitales de viajes y en el sector público de turismo, o emprender tu propia empresa turística.»
  7. **«¿Cuánto cuesta estudiar Administración Turística en la Anáhuac México?»** → «Puedes calcular tu colegiatura y conocer opciones de beca en nuestro cotizador.» *(enlace «nuestro cotizador» → `/cotizador`)*
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

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Administración Turística»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Administración Turística»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
  | «Campus de preferencia» | select | «Campus Norte» · «Campus Sur» · «Sin preferencia» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Administración Turística.»
- **Error (ejemplo):** «Revisa tu correo: parece que falta el @.»
- **Alt de la foto:** «Estudiante de la Anáhuac México consultando información de la Licenciatura en Administración Turística.»
- **[PENDIENTE: conexión a HubSpot y foto real.]**

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Turismo, Gastronomía y Hospitalidad › Administración Turística.
- **`Course`**: `name`="Licenciatura en Administración Turística" · `description`="Formación de profesionales que dirigen y administran empresas turísticas y de la hospitalidad, desarrollan productos y experiencias turísticas innovadoras y posicionan destinos con visión sostenible y digital." · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=330.
- **`FAQPage`** (junto a M11): las 7 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre «Universidad Anáhuac México», url, direcciones de Campus Norte (Av. Universidad Anáhuac 46, Lomas Anáhuac, Huixquilucan, Estado de México) y Campus Sur (Av. de los Tanques 865, Torres de Potrero, Álvaro Obregón, Ciudad de México), `sameAs` a redes oficiales.

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
1  Hero (breadcrumb · H1 · «Define. Dirige. Emprende.» · 3 chips: 8 sem · presencial · Norte - Sur | video + 2 CTAs)
2  ¿Es para ti? (H2: diseñar las experiencias que hacen inolvidable un destino · 4 tarjetas + chips Turismo / Negocio)
3  ¿Por qué la Anáhuac México? (slider + «Ver instalaciones» | 6 tarjetas, incl. QS n.º 1 · banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + AEO: 8 sem · 330 créditos | foto)
5  Plan de estudios (8 tabs por semestre, con colores por bloque · 3 bloques · 2 descargas · RVOE)
6  Campo laboral (6 tiles + preview | banda DOBLE ACREDITACIÓN: Le Cordon Bleu + Roma + 2 CTAs)
7  Instalaciones (slider: simuladores · hospedaje y A&B · georreferenciación y bases de datos · cata y mixología · cocinas · viñedo)
8  Historias Anáhuac México (compartido)
9  ¿Con quién te formas? (claustro + carrusel de convenios + mapa de destinos)
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (7, acordeón naranja + FAQPage; incluye «¿qué es?»)
12 León en la Anáhuac México (compartido)
13 Solicita información (formulario de material)
14 Footer + Newsletter
```
