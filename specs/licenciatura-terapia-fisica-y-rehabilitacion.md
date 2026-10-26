# Página: Licenciatura en Terapia Física y Rehabilitación — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **⚠️ Cuatro particularidades de esta página:**
> 1. **Solo se imparte en Campus Norte.** No es bicampus: afecta al chip del hero, a M7, al FAQ y al formulario.
> 2. **Las prácticas con pacientes reales empiezan en 4º semestre** (Prácticum I). No escribas «desde el primer semestre».
> 3. **El plan incluye un año de servicio social** (periodos 9 y 10), después de los 8 semestres. Aparece en M4, M5 y en el FAQ.
> 4. **Nunca compares esta licenciatura con ninguna otra.** La página habla solo de la terapia física.

> **⚠️ Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Esto incluye los módulos compartidos: **«Historias Anáhuac México»** y **«Descubre por qué ser un León en la Anáhuac México»**. Solo se exceptúan los nombres de programa «Modelo Anáhuac» y «Bloque Anáhuac».

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/terapia-fisica-y-rehabilitacion` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Nombre oficial** | **«Licenciatura en Terapia Física y Rehabilitación»**. ⚠️ Úsalo completo siempre que se nombre la licenciatura. «Fisioterapia» / «fisioterapeuta» se usan para la **profesión**, no como nombre de la carrera. |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Ciencias de la Salud |
| **Audiencia** | Preuniversitario que vivió de cerca una rehabilitación (propia o de un familiar), interesado en el cuerpo humano, el deporte y la posibilidad de emprender + padres/madres (objeciones: rentabilidad de la profesión y cantidad de práctica clínica) |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México **Campus Norte** (Huixquilucan, Edo. Méx.) — presencial |
| **KPI** | Envíos del formulario M13 · descargas del plan de estudios · interacción con las tabs (M5) y los tiles (M6) · apertura de las preguntas de práctica clínica y campo laboral en el FAQ |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** La **clínica y su equipo** se argumentan en M3; en M7 solo se **muestran** los espacios. Los **egresados destacados** viven **solo en la banda de M6**: no se repiten en M8. El **servicio social** se explica en M4 y se repite únicamente en el FAQ.
- **⚠️ Pacientes reales desde 4º semestre**, no antes.
- **⚠️ Cero comparaciones** con otras licenciaturas ni con otras universidades.
- **⚠️ El Hospital Virtual se comunica siempre como proyecto en construcción**, nunca como instalación disponible, **también en M7**.
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles y sliders.

## 3. Metadatos SEO / AEO

- **Title (76 car.):** «Licenciatura en Terapia Física y Rehabilitación | Universidad Anáhuac México»
- **Meta description (148 car.):** «Estudia Terapia Física y Rehabilitación en la Universidad Anáhuac México: atiende pacientes desde 4º semestre y rota por 8 clínicas de especialidad.»
- **Keyword principal:** `licenciatura en terapia fisica` / `lic en terapia fisica` (720 c/u · hoy pos. 1–5) · **Secundarias:** `terapia fisica carrera` (260) · `licenciatura en fisioterapia y rehabilitacion` (170) · `fisioterapia en mexico` (170) · `licenciatura en rehabilitación física` (140) · `terapia fisica y rehabilitacion carrera` (140) · `fisioterapia y rehabilitación carrera` (110 · pos. 1) · `que es la terapia física y rehabilitación` (110 · **pos. 1**) · `terapia fisica universidades` (90 · pos. 1) · `estudiar rehabilitacion fisica` (70)
- **⚠️ Oportunidad de alto volumen mal posicionada:** `terapia fisica y rehabilitacion` (**4,400** · pos. 88) · `fisioterapia carrera` (**3,600** · pos. 86) · `licenciatura en fisioterapia` (**3,600** · pos. 76) · `carrera de fisioterapia` (1,300 · pos. 78) · `plan de estudios fisioterapia` (260 · pos. 91) · `escuelas de fisioterapia en cdmx` (260 · pos. 62). Por eso **«fisioterapia» y «fisioterapeuta» aparecen de forma natural** en la intro de M2, el H2 de M6, las preguntas 3 y 6 del FAQ y los alt. **No los sustituyas por sinónimos.**
- **⚠️ `que es la terapia física y rehabilitación` está en posición 1.** La pregunta 2 del FAQ la responde: **no la quites**.
- **Open Graph:**
  - `og:title`: «Licenciatura en Terapia Física y Rehabilitación — Universidad Anáhuac México»
  - `og:description`: «Atiende pacientes reales desde 4º semestre, rota por 8 clínicas de rehabilitación y fórmate como fisioterapeuta en la Universidad Anáhuac México.»
  - `og:image` (alt): «Estudiante de Terapia Física y Rehabilitación de la Universidad Anáhuac México trabajando con un paciente en la Clínica de Terapia Física y Rehabilitación.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Terapia Física y Rehabilitación» (M1, `#inicio`)
  - **H2** «¿Te gustaría ayudar a alguien a volver a moverse sin dolor?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Terapia Física y Rehabilitación en la Anáhuac México?» (M3, `#por-que`) → H3 por tarjeta (6)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Terapia Física y Rehabilitación?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Terapia Física y Rehabilitación?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Terapia Física y Rehabilitación?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Electivo)
  - **H2** «¿Dónde puedes ejercer como fisioterapeuta?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Instalaciones donde estudiarás tu licenciatura» (M7, `#instalaciones`) → H3 por instalación
  - **H2** «Historias Anáhuac México» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Aliados nacionales» · H3 «Aliados internacionales»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Terapia Física y Rehabilitación» (M11, `#faq`) → H3 por pregunta (7)
  - **H2** «Descubre por qué ser un León en la Anáhuac México» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Terapia Física y Rehabilitación» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips. ⚠️ El tercer chip dice «Campus Norte», no «Bicampus».**

- **Breadcrumb:** Inicio › Oferta Académica › Ciencias de la Salud › Terapia Física y Rehabilitación
- **Eyebrow (`tagline`):** «Ciencias de la Salud»
- **H1:** «Licenciatura en Terapia Física y Rehabilitación»
- **Claim (`lic-hero-claim`):** «Examina. Evalúa. Diagnostica. Rehabilita.»
  - **⚠️ El claim del hero es siempre una secuencia de palabras sueltas** (verbos separados por punto), nunca una frase.
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Campus Norte»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video]**
- **Alt de la portada:** «Estudiante de Terapia Física y Rehabilitación de la Universidad Anáhuac México trabajando con un paciente en la Clínica de Terapia Física y Rehabilitación.»

---

## Módulo 2 — ¿Te gustaría ayudar a alguien a volver a moverse sin dolor? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

**⚠️ Ninguna tarjeta menciona otra carrera.**

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te gustaría ayudar a alguien a volver a moverse sin dolor?»
- **Intro:** «Cada paciente que vuelve a caminar, a jugar o a trabajar es un logro que se comparte. Si te reconoces en lo siguiente, la fisioterapia puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Te mueve acompañar a una persona en su recuperación, desde la primera sesión hasta el día en que ya no te necesita.»
  2. «Te imaginas con tu propia clínica o acompañando a deportistas y artistas en su mejor momento.»
  3. «Te fascina cómo funciona el cuerpo humano y la ciencia detrás de cada movimiento.»
  4. «Viviste de cerca una rehabilitación —tuya o de alguien que quieres— y descubriste todo lo que puede cambiar en una vida.»
- **Párrafo del bloque de enfoque:** «En la Anáhuac México te formamos como un **profesional de la salud** que evalúa, diagnostica e interviene para desarrollar, mantener y restaurar el movimiento y la funcionalidad de las personas durante todo su ciclo de vida.»
- **Chips — grupo «Áreas de especialidad»:** «Musculoesquelética» · «Neurorrehabilitación» · «Cardiopulmonar» · «Deportiva» · «Geriátrica» · «Pediátrica»
- **Chips — grupo «Herramientas»:** «Electroterapia» · «Ultrasonido» · «Láser terapéutico» · «Hidroterapia» · «Ondas de choque»
- **CTA:** ninguno.
- **Alt:** «Estudiantes de Terapia Física y Rehabilitación de la Universidad Anáhuac México practicando técnicas de terapia manual en clase.»

---

## Módulo 3 — ¿Por qué estudiar Terapia Física y Rehabilitación en la Anáhuac México? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` con layout **`lic-porque2`** — intro + columna de medios (`campus-slider` de fotos + enlace «Ver instalaciones ›» → `#instalaciones`) + columna de 6 `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No nombrar aquí a los egresados destacados:** van en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac México?»
- **H2:** «¿Por qué estudiar Terapia Física y Rehabilitación en la Anáhuac México?»
- **Intro:** «No solo aprendes la teoría del movimiento: desde 4º semestre atiendes pacientes reales en nuestra propia clínica y rotas por las principales áreas de especialidad de la fisioterapia.»
- **Slider de medios (5 fotos, 1:1):** Clínica de Terapia Física y Rehabilitación · equipo de electroterapia y ultrasonido · tina de hidroterapia · área de entrenamiento funcional · estudiantes con paciente. Enlace inferior: «Ver instalaciones ›» → `#instalaciones`.
- **Tarjetas (6):**
  1. **«Pacientes reales desde 4º semestre»** — «Con el Prácticum I empiezas a examinar y evaluar pacientes reales en la Clínica de Terapia Física y Rehabilitación de la universidad, siempre bajo supervisión docente.» · «Ver el plan de estudios ›» → `#plan-estudios`
  2. **«Ocho clínicas de especialidad»** — «Entre 6º y 8º semestre rotas por clínicas de rehabilitación musculoesquelética, neurológica en adultos, cardiopulmonar, deportiva, geriátrica, intrahospitalaria, pediátrica y tegumentaria. Así descubres desde la licenciatura qué área es la tuya.»
  3. **«Una clínica equipada para rehabilitar»** — «Practicas con equipo de electroterapia, ultrasonido, láser terapéutico, ondas de choque, diatermia, tina de remolinos y entrenamiento funcional, además de equipos de simulación para tus actividades preclínicas.»
  4. **«Aprendes de quienes lideran cada área»** — «Cada área clínica la imparten especialistas que ejercen esa rama de la fisioterapia en hospitales, centros deportivos y de rehabilitación.» **[VERIFICAR]**
  5. **«Formación interdisciplinaria de Ciencias de la Salud»** — «Compartes materias como Anatomía, Bioquímica y Fisiología con otras licenciaturas de la Facultad. La Clínica de Terapia Física y Rehabilitación trabaja de forma coordinada con las otras tres clínicas internas —Nutrición, Odontología y Servicio Médico— para que colabores en la atención de un mismo paciente desde distintas disciplinas.» · Chips: «Nutrición» · «Odontología» · «Servicio Médico»
  6. **«Experiencia internacional»** — «Suma una experiencia internacional mediante convenios con universidades extranjeras, para intercambios y estancias académicas.» · Chips: «Universidad Finis Terrae (Chile)» · «Universidad Francisco de Vitoria (España)»
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el fisioterapeuta que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac y Electivo— para que desarrolles una visión integral y estés listo para ejercer, emprender y transformar tu entorno. Tendrás además acceso a espacios pensados para Terapia Física dentro del futuro **Hospital Virtual**, un edificio de simulación de 5 pisos hoy en construcción.»
  - CTA (`btn btn-purple`): «Descubre la formación de un fisioterapeuta Anáhuac México» → `#plan-estudios`
  - **⚠️ El tercer bloque se llama «Electivo», no «Interdisciplinario»:** debe coincidir con M5.

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Terapia Física y Rehabilitación?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Comprendes el movimiento humano y promueves la salud a través de la evaluación, el diagnóstico, el pronóstico y la intervención de cada paciente.»
  - «Desarrollas, mantienes y restauras el máximo movimiento y la habilidad funcional de las personas, y previenes sus disfunciones durante todo el ciclo de vida.»
  - «Usas el razonamiento clínico para diseñar, aplicar y evaluar planes de intervención, e integras la gestión de servicios de terapia física en el sector público y privado.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Terapia Física y Rehabilitación?»
  - Dato 1: **«8»** / «Semestres académicos (4 años)»
  - Dato 2: **«397»** / «Créditos totales»
  - Dato 3: **«+1»** / «Año de servicio social (periodos 9 y 10)»
  - **Línea de apoyo bajo los números:** «Bloque Profesional 310 + Bloque Anáhuac 42 + Bloque Electivo 45. Al concluir los 8 semestres realizas un año de **servicio social**. Modalidad presencial en Campus Norte.»
  - ⚠️ El lector de pantalla debe anunciar «+1» como «más un año de servicio social».
- **Alt de la foto:** «Estudiante de Terapia Física y Rehabilitación de la Anáhuac México evaluando la movilidad de un paciente.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`.

**⚠️ 10 tabs: 8 semestres + «Servicio social 9» y «Servicio social 10».** Las dos últimas no listan materias: llevan solo la nota «Periodo de servicio social supervisado, con acompañamiento de un tutor.»

**⚠️ Materias EXACTAS de cada semestre, en este orden.** No reordenes materias entre semestres y usa las grafías de esta tabla (el folleto y el sitio vivo traen erratas).

**Viñetas por bloque**, según los colores del plan de referencia oficial: naranja = Bloque Profesional (default) · morado = Bloque Anáhuac (`plan-sem-item--anahuac`) · lila = Bloque Electivo (`plan-sem-item--inter`). Marcadas abajo con **(A)** = Anáhuac y **(E)** = Electivo; el resto es Profesional.

- **⚠️ En esta carrera «Emprendimiento e innovación», «Habilidades para el emprendimiento» y «Responsabilidad social y sustentabilidad» son Bloque Electivo (E),** y las cuatro «Electiva profesional» y «Formación universitaria A/B» son Bloque Profesional. Respeta la tabla aunque difiera de otras carreras.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Terapia Física y Rehabilitación?»
- **Tabs (10):**

  | Tab | Materias (en este orden) |
  |---|---|
  | **Semestre 1** | Fundamentos de terapia física y rehabilitación · Anatomía · Bases de biología · Bioquímica · Probabilidad y estadística para la salud · Bases de la investigación para la salud · Ser universitario **(A)** · Taller o actividad electiva I **(E)** |
  | **Semestre 2** | Neuroanatomía · Anatomía musculoesquelética · Embriología del sistema motor · Fisiología I · Epidemiología y salud pública · Comunicación, calidad y seguridad del paciente · Antropología fundamental **(A)** · Asignatura electiva interdisciplinaria I **(E)** |
  | **Semestre 3** | Principios de biomecánica · Fisiología del ejercicio · Desarrollo del sistema motor · Fisiología II · Rehabilitación funcional · Examinación en terapia física y rehabilitación · Farmacología y algología · Liderazgo y desarrollo personal **(A)** · Ética **(A)** |
  | **Semestre 4** | **Prácticum I: Examinación y evaluación en terapia física** · Biomecánica y análisis de la marcha · Neuropatología · Fisiopatología sistémica · Patología musculoesquelética · Diseño experimental · Ciencias del movimiento · Humanismo clásico y contemporáneo **(A)** · Habilidades para el emprendimiento **(E)** |
  | **Semestre 5** | **Prácticum II: Diagnóstico, pronóstico e intervención en terapia física** · Terapia manual · Hidroterapia · Modalidades terapéuticas · Razonamiento clínico I · Ejercicios terapéuticos · Electiva profesional I · Persona y trascendencia **(A)** · Emprendimiento e innovación **(E)** · Taller o actividad electiva II **(E)** |
  | **Semestre 6** | Atención intrahospitalaria · **Clínica de rehabilitación musculoesquelética** · Ortesis y prótesis · **Clínica de neurorrehabilitación en adultos** · Electiva profesional II · Razonamiento clínico II · Factores psicocomportamentales · Liderazgo y equipos de alto desempeño **(A)** · Asignatura electiva interdisciplinaria II **(E)** |
  | **Semestre 7** | Gestión y dirección de servicios de salud · **Clínica de rehabilitación cardiopulmonar** · **Clínica de rehabilitación deportiva** · **Clínica de rehabilitación geriátrica** · Electiva profesional III · Razonamiento clínico III · Formación universitaria A · Asignatura electiva Anáhuac I **(E)** · Asignatura electiva interdisciplinaria III **(E)** |
  | **Semestre 8** | **Clínica de rehabilitación intrahospitalaria** · **Clínica de rehabilitación pediátrica** · **Clínica de rehabilitación tegumentaria** · Razonamiento clínico IV · Electiva profesional IV · Formación universitaria B · Asignatura electiva Anáhuac II **(E)** · Responsabilidad social y sustentabilidad **(E)** · Taller o actividad electiva III **(E)** |
  | **Servicio social 9** | Periodo de servicio social supervisado, con acompañamiento de un tutor. |
  | **Servicio social 10** | Periodo de servicio social supervisado, con acompañamiento de un tutor. |

- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas las competencias de la fisioterapia, atiendes pacientes en tus dos Prácticum y en ocho clínicas de especialidad. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil y te dan versatilidad para el mundo laboral.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Electivo** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`) — DOS:** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP · D.O.F. 26/11/1982» + icono externo + `sr-only` «(abre el documento oficial del RVOE)» · **[PENDIENTE: URL]**

---

## Módulo 6 — ¿Dónde puedes ejercer como fisioterapeuta? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (tiles + `campo-preview`) + banda `campo-band` con los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes ejercer como fisioterapeuta?»
- **Intro:** «Tu formación te abre oportunidades en hospitales, centros de rehabilitación, el deporte, la investigación y tu propia práctica.»
- **Tiles (6):**
  1. **«Hospitales e instituciones de salud»** — «Rehabilitación de pacientes en instituciones públicas y privadas, incluida la atención intrahospitalaria.»
  2. **«Centros de rehabilitación»** — «Intervención especializada en rehabilitación musculoesquelética, neurológica, cardiopulmonar y pediátrica.»
  3. **«Deporte y alto rendimiento»** — «Prevención y rehabilitación de lesiones en centros deportivos, equipos y selecciones.»
  4. **«Centros geriátricos»** — «Acompañamiento de adultos mayores para conservar su movilidad y su independencia.»
  5. **«Clínica o consultorio propio»** — «Práctica clínica privada con tus propios pacientes.»
  6. **«Investigación, docencia y políticas de salud»** — «Proyectos de investigación, instituciones educativas y gestión de políticas públicas de salud.»
- **Preview:** formato 4:5, alt descriptivo por ámbito (p. ej. «Fisioterapeuta egresada de la Anáhuac México trabajando con una deportista en rehabilitación»).
- **Banda destacada (`campo-band`):**
  - **H3:** «Egresadas que ya están en el alto rendimiento»
  - Texto: «**Daniela Cueva** fue fisioterapeuta de la selección mexicana de gimnasia artística en el Campeonato Mundial de Stuttgart 2019. **María Artes** fue nombrada, a los 23 años, jefa del departamento de Fisioterapia de la Escuela Nacional de Danza Clásica y Contemporánea.» **[VERIFICAR]**
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`

---

## Módulo 7 — Instalaciones donde estudiarás tu licenciatura · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus lic-campus--inst` — intro + `campus-slider` de `lic-inst-card` (foto + H3) + línea de cierre `lic-inst-cta`.

**⚠️ Aquí se MUESTRAN los espacios (foto + nombre); no se repite la argumentación de M3.** ⚠️ Sin tarjetas de campus ni direcciones.

- **Eyebrow:** «Instalaciones»
- **H2:** «Instalaciones donde estudiarás tu licenciatura»
- **Intro:** «Conoce los espacios de Campus Norte donde se forman los fisioterapeutas: la Clínica de Terapia Física y Rehabilitación, sus laboratorios y el futuro Hospital Virtual.»
- **Tarjetas del slider (4):**
  1. **«Clínica de Terapia Física y Rehabilitación»**
  2. **«Laboratorio de Terapia Física y Rehabilitación»**
  3. **«Laboratorio de Fisiología»** **[VERIFICAR]**
  4. **«Hospital Virtual (en construcción)»**, ⚠️ con «(en construcción)» visible en el H3.
- **Alt:** «[Nombre del espacio] — Universidad Anáhuac México, Campus Norte»
- **Línea de cierre:** «Agenda un tour presencial o una cita virtual [aquí].» → `/visita-campus` **[VERIFICAR URL]**

---

## Módulo 8 — Historias Anáhuac México · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual, con el H2 ajustado.

- **H2:** «Historias Anáhuac México» · **Bajada:** «Leones Anáhuac México que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales.]** ⚠️ No inventes personas ni citas. ⚠️ No uses aquí a Daniela Cueva ni a María Artes (ya están en M6). Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Terapia Física y Rehabilitación, generación [año], Campus Norte.»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados` con **dos grupos**: «Aliados nacionales» y «Aliados internacionales».

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de especialistas con experiencia clínica y deportiva, y rotas en hospitales, institutos y centros de rehabilitación gracias a la red de convenios de la Facultad de Ciencias de la Salud.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → foto + nombre + **cargo o logro profesional**. **[PENDIENTE]**
- **«Aliados nacionales» (H3):** Hospital Ángeles · Hospital General · DIF · CONADE · Clínica de Rehabilitación Humana · Clínica Seré · Clínica + FISIO
- **«Aliados internacionales» (H3):** Universidad Finis Terrae (Chile) · Universidad Francisco de Vitoria (España)
- **Dato de respaldo de Facultad (siempre atribuido a la Facultad):** «La Facultad de Ciencias de la Salud cuenta con más de 350 campos clínicos y convenios con más de 53 hospitales en 8 estados de la República.»

---

## Módulo 10 — Elige el siguiente paso para tu futuro · AIDA: Acción · **H2** · `#siguiente-paso`

**Componente:** `lic-pasos` — encabezado + **5 `paso-card`**.

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

**Componente:** `lic-faq` — acordeón `details.faq-item` con `name` compartido, fondo naranja, + `FAQPage` en JSON-LD.

**⚠️ Las preguntas 5 y 6 responden objeciones reales (cantidad de práctica clínica y futuro laboral). No las quites ni las suavices. ⚠️ La 2 sostiene una keyword en posición 1.**

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Terapia Física y Rehabilitación»
- **Acordeón (7 preguntas):**
  1. **«¿Cuántos años dura la carrera de Terapia Física y Rehabilitación?»** → «El plan académico dura 8 semestres, es decir, 4 años, en modalidad presencial en Campus Norte. Al terminarlo, realizas un año de servicio social con acompañamiento de un tutor.»
  2. **«¿Qué es la terapia física y rehabilitación?»** → «Es la disciplina de la salud que evalúa, diagnostica e interviene en los problemas derivados de la disfunción del movimiento, para desarrollar, mantener y restaurar la movilidad y la funcionalidad de las personas durante todo su ciclo de vida.»
  3. **«¿Qué materias se ven en la carrera de fisioterapia?»** → «Cursarás materias como Anatomía musculoesquelética, Neuroanatomía, Biomecánica y análisis de la marcha, Terapia manual, Hidroterapia, Ortesis y prótesis y Razonamiento clínico, además de dos Prácticum y ocho clínicas de rehabilitación por especialidad.»
  4. **«¿Desde qué semestre se atienden pacientes?»** → «Desde 4º semestre, con el Prácticum I, examinas y evalúas pacientes reales en la Clínica de Terapia Física y Rehabilitación de la universidad, bajo supervisión docente.»
  5. **«¿Tendré suficiente práctica clínica?»** → «Sí. Después de tus dos Prácticum, entre 6º y 8º semestre rotas por ocho clínicas de rehabilitación —musculoesquelética, neurológica en adultos, cardiopulmonar, deportiva, geriátrica, intrahospitalaria, pediátrica y tegumentaria— y cierras tu formación con un año de servicio social supervisado.»
  6. **«¿En qué puedo trabajar al terminar la carrera de fisioterapia?»** → «Puedes ejercer en hospitales e instituciones de salud públicas y privadas, centros de rehabilitación, centros deportivos, centros geriátricos e instituciones educativas, en investigación y en la gestión de políticas públicas de salud, o abrir tu propia clínica.»
  7. **«¿Cuánto cuesta estudiar Terapia Física y Rehabilitación en la Anáhuac México?»** → «Puedes calcular tu colegiatura y conocer opciones de apoyos en nuestro cotizador.» *(enlace a `/cotizador`)*
- **⚠️ El texto del `FAQPage` debe ser idéntico al del acordeón, sin markup dentro.**

---

## Módulo 12 — Descubre por qué ser un León en la Anáhuac México · AIDA: Deseo (refuerzo) · **H2** · `#experiencia` *(módulo compartido — no rediseñar)*

**Componente:** `experience` de Inicio, tal cual, con el H2 ajustado.

- **Eyebrow:** «Mucho más que solo una Universidad.» · **H2:** «Descubre por qué ser un León en la Anáhuac México» · **Bajada:** «Conoce por qué vivirás una experiencia universitaria única con nosotros.» · CTA: «Conoce la experiencia Anáhuac México»
- **Única adaptación admitida:** mencionar **ALPHA**, el Programa de Liderazgo en Ciencias de la Salud.

---

## Módulo 13 — Solicita información · AIDA: Acción · **H2** · `#solicita`

**Componente:** `lic-form` — foto vertical 4:5 + `lic-form-card`.

**⚠️ Formulario de envío de material, no de contacto con asesor. La bajada que lo declara es obligatoria y visible.**
**⚠️ Sin selector de campus:** la carrera es solo de Campus Norte. El campo se sustituye por un dato fijo `readonly`.

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Terapia Física y Rehabilitación»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Terapia Física y Rehabilitación»** |
  | «Campus» | text `readonly` | prellenado: **«Campus Norte»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Terapia Física y Rehabilitación.»
- **Alt de la foto:** «Estudiante de Terapia Física y Rehabilitación de la Anáhuac México consultando información de la licenciatura.»

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Ciencias de la Salud › Terapia Física y Rehabilitación.
- **`Course`**: `name`="Licenciatura en Terapia Física y Rehabilitación" · `description`= primer bullet de M4 · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=397 · `courseMode`="onsite" · `location`= Campus Norte.
- **`FAQPage`** (junto a M11): las 7 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre «Universidad Anáhuac México», url, dirección de **Campus Norte** (Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C.P. 52786), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px con `<label class="sr-only">`.
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M3 y M7 con botones etiquetados («Imagen anterior / siguiente», «Instalación anterior / siguiente») y dots navegables por teclado.
- Acordeón de M11 con `<details>` nativo.
- Video del hero con subtítulos; carga al clic, con `aria-label` descriptivo.
- Contraste AA en la banda naranja del FAQ y en la banda de M6.
- El «+1» de M4 se anuncia como «más un año de servicio social».

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · «Examina. Evalúa. Diagnostica. Rehabilita.» · 3 chips: 8 sem · presencial · Campus Norte | video + 2 CTAs)
2  ¿Es para ti? (H2 emocional: volver a moverse sin dolor · 4 tarjetas + chips: especialidades / herramientas)
3  ¿Por qué la Anáhuac México? (slider de fotos + «Ver instalaciones» | 6 tarjetas + banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + AEO: 8 sem · 397 créditos · +1 año de servicio social | foto)
5  Plan de estudios (8 semestres + 2 tabs de Servicio social · 3 bloques · 2 descargas · RVOE)
6  Campo laboral (6 tiles + preview | banda EGRESADAS EN ALTO RENDIMIENTO + 2 CTAs)
7  Instalaciones (slider: Clínica · Lab. de TF y R · Lab. de Fisiología · Hospital Virtual en construcción)
8  Historias Anáhuac México (compartido)
9  ¿Con quién te formas? (claustro + aliados nacionales + internacionales)
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (7, acordeón naranja + FAQPage; incluye «¿qué es?», práctica clínica y campo laboral)
12 León en la Anáhuac México (compartido, con ALPHA)
13 Solicita información (formulario de material, campus fijo Norte)
14 Footer + Newsletter
```
