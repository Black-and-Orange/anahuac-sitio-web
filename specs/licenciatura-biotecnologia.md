# Página: Licenciatura en Biotecnología — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **⚠️ Cinco particularidades de esta página:**
> 1. **Son 9 semestres, no 8.** Afecta al chip del hero, a M4, a M5 (9 tabs) y al FAQ.
> 2. **Solo se imparte en Campus Norte.** Afecta al chip del hero, a M7, al FAQ y al formulario.
> 3. **No es una carrera clínica:** el eje es la **investigación y el laboratorio**, no la atención a pacientes. No escribas «atiendes pacientes».
> 4. **Sin servicio social** en la página: el plan de estudios no lo incluye como periodo.
> 5. **Nunca compares esta licenciatura con ninguna otra.** La página habla solo de la biotecnología.

> **⚠️ Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Esto incluye los módulos compartidos: **«Historias Anáhuac México»** y **«Descubre por qué ser un León en la Anáhuac México»**. Solo se exceptúan los nombres de programa «Modelo Anáhuac» y «Bloque Anáhuac».

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/biotecnologia` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Nombre oficial** | **«Licenciatura en Biotecnología»**. ⚠️ Úsalo completo siempre que se nombre la licenciatura. |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Ciencias de la Salud |
| **Audiencia** | Preuniversitario muy decidido, con vocación científica, atraído por la investigación biomédica y el impacto en poblaciones (no en pacientes individuales) + padres/madres que **no conocen el área** y dudan de su futuro laboral |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México **Campus Norte** (Huixquilucan, Edo. Méx.) — presencial |
| **KPI** | Envíos del formulario M13 · descargas del plan de estudios · interacción con las tabs (M5) y los tiles (M6) · apertura de las preguntas «¿de qué trata?» y «¿es difícil?» en el FAQ |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** Los **laboratorios** se argumentan en M3; en M7 solo se **muestran**. Las **cátedras con farmacéuticas** viven **solo en la banda de M6**. Las **ciencias ómicas** se nombran en M3 y en el FAQ.
- **⚠️ Lenguaje de laboratorio, no de clínica:** «investigas», «diseñas», «desarrollas», nunca «atiendes pacientes».
- **⚠️ Cero comparaciones** con otras licenciaturas ni con otras universidades.
- **⚠️ El Hospital Virtual se comunica siempre como proyecto en construcción**, nunca como instalación disponible, **también en M7**.
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles y sliders.

## 3. Metadatos SEO / AEO

- **Title (58 car.):** «Licenciatura en Biotecnología | Universidad Anáhuac México»
- **Meta description (157 car.):** «Estudia Biotecnología en la Universidad Anáhuac México: investiga desde los primeros semestres en laboratorios de genómica y cultivo celular. Conoce el plan.»
- **Keyword principal:** `biotecnologia carrera` (1,300 · hoy pos. 1–4) · **Secundarias:** `licenciatura en biotecnologia` (590 · pos. 6) · `lic en biotecnologia` (590 · pos. 12) · `carrera de biotecnologia` (260) · `estudiar biotecnologia` (260 · pos. 8) · `biotecnologia en mexico` (210) · `biotecnologia plan de estudios` (110) · `biotecnologia materias de la carrera` (90 · pos. 1)
- **⚠️ Clúster «genómica» con posiciones débiles:** `licenciado en biotecnología genómica` (140 · pos. 30) · `licenciatura en genómica` (110 · pos. 44) · `licenciado en genomica` (110 · pos. 49) · `donde estudiar genetica en mexico` (90 · pos. 44) · `carrera de biogenetica` (70 · pos. 10). Por eso **«genómica» y «genética» aparecen de forma natural** en M2, M3 y el FAQ. **No las sustituyas por sinónimos.**
- **⚠️ `que es biotecnologia carrera` (pos. 37):** la pregunta 2 del FAQ la responde.
- **Open Graph:**
  - `og:title`: «Licenciatura en Biotecnología — Universidad Anáhuac México»
  - `og:description`: «Investiga desde los primeros semestres, trabaja en laboratorios de genómica y cultivo celular, y crea soluciones para la salud, los alimentos y el medio ambiente.»
  - `og:image` (alt): «Estudiante de Biotecnología de la Universidad Anáhuac México trabajando en el Laboratorio de Genómica y Proteómica.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Biotecnología» (M1, `#inicio`)
  - **H2** «¿Te gustaría descubrir en un laboratorio la solución que cambie millones de vidas?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Biotecnología en la Anáhuac México?» (M3, `#por-que`) → H3 por tarjeta (6)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Biotecnología?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Biotecnología?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Biotecnología?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Electivo)
  - **H2** «¿Dónde puedes trabajar como biotecnólogo?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Instalaciones donde estudiarás tu licenciatura» (M7, `#instalaciones`) → H3 por instalación
  - **H2** «Historias Anáhuac México» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Aliados nacionales» · H3 «Aliados internacionales»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Biotecnología» (M11, `#faq`) → H3 por pregunta (7)
  - **H2** «Descubre por qué ser un León en la Anáhuac México» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Biotecnología» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips. ⚠️ El primer chip dice «9 semestres» y el tercero «Campus Norte».**

- **Breadcrumb:** Inicio › Oferta Académica › Ciencias de la Salud › Biotecnología
- **Eyebrow (`tagline`):** «Ciencias de la Salud»
- **H1:** «Licenciatura en Biotecnología»
- **Claim (`lic-hero-claim`):** «Desarrolla. Modifica. Innova.»
  - **⚠️ El claim del hero es siempre una secuencia de palabras sueltas** (verbos separados por punto), nunca una frase.
- **Chips (3, `lic-chip`):** «9 semestres» · «Modalidad presencial» · «Campus Norte»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video]**
- **Alt de la portada:** «Estudiante de Biotecnología de la Universidad Anáhuac México trabajando con muestras en el Laboratorio de Cultivo Celular.»

---

## Módulo 2 — ¿Te gustaría descubrir en un laboratorio la solución que cambie millones de vidas? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

**⚠️ Ninguna tarjeta menciona otra carrera.**

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te gustaría descubrir en un laboratorio la solución que cambie millones de vidas?»
- **Intro:** «Detrás de cada vacuna, cada prueba de diagnóstico y cada alimento más nutritivo hay biotecnólogos que hicieron las preguntas correctas. Si te reconoces en lo siguiente, la biotecnología puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Quieres que tu trabajo llegue a miles de personas: un nuevo medicamento, un alimento más seguro, un planeta más limpio.»
  2. «Te fascina entender cómo funciona la vida a nivel molecular, de la célula a la genética.»
  3. «Te apasiona hacerte preguntas y diseñar el experimento que las responda.»
  4. «Te imaginas patentando una idea o creando tu propia empresa de biotecnología.»
- **Párrafo del bloque de enfoque:** «En la Anáhuac México te formamos para **desarrollar, estudiar y modificar sistemas vivos** y crear alternativas sostenibles para la salud, la alimentación, la industria y el medio ambiente.»
- **Chips — grupo «Campos de la biotecnología»:** «Médica» · «Agroalimentaria» · «Ambiental» · «Vegetal» · «Animal» · «Industrial»
- **Chips — grupo «Herramientas»:** «Ingeniería genética» · «Genómica y proteómica» · «Bioinformática» · «Cultivo celular» · «Biorreactores»
- **CTA:** ninguno.
- **Alt:** «Estudiantes de Biotecnología de la Universidad Anáhuac México analizando resultados de un experimento en el laboratorio.»

---

## Módulo 3 — ¿Por qué estudiar Biotecnología en la Anáhuac México? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` con layout **`lic-porque2`** — intro + columna de medios (`campus-slider` de fotos + enlace «Ver instalaciones ›» → `#instalaciones`) + columna de 6 `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No nombrar aquí a las farmacéuticas de las cátedras:** van en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac México?»
- **H2:** «¿Por qué estudiar Biotecnología en la Anáhuac México?»
- **Intro:** «No solo aprendes ciencia: la haces. Desde los primeros semestres te integras a proyectos de investigación en laboratorios de vanguardia, con acompañamiento de investigadores.»
- **Slider de medios (5 fotos, 1:1):** Laboratorio de Genómica y Proteómica · Laboratorio de Cultivo Celular · Laboratorio de Biomoléculas · Laboratorio de Microbiología · estudiantes en experimento. Enlace inferior: «Ver instalaciones ›» → `#instalaciones`.
- **Tarjetas (6):**
  1. **«Investigación desde los primeros semestres»** — «Te integras a proyectos de investigación ligados a tu titulación, con la posibilidad de publicar en revistas nacionales e internacionales y de generar patentes.» · «Ver el plan de estudios ›» → `#plan-estudios`
  2. **«Laboratorios de primer nivel»** — «Trabajas en laboratorios de genómica y proteómica, cultivo celular, biomoléculas y microbiología, con equipo actualizado y estandarizado.»
  3. **«Las ciencias ómicas, en tu plan de estudios»** — «Cursas Genómica y proteómica, Nutrigenómica, Farmacogenómica y Metabolómica, además de Bioinformática y Bases de ingeniería genética.»
  4. **«Una biotecnología, seis campos»** — «Tu plan recorre la biotecnología médica, agroalimentaria, ambiental, vegetal, animal e industrial, para que descubras dónde quieres dejar huella.»
  5. **«Formación multidisciplinaria en Ciencias de la Salud»** — «Te preparas en las áreas básicas de las ciencias de la salud junto con otras licenciaturas de la Facultad, y sumas conocimientos de disciplinas complementarias.»
  6. **«Experiencia internacional»** — «Suma una experiencia internacional mediante convenios con universidades extranjeras, para intercambios y estancias de investigación.» · Chips: «Universidad Francisco de Vitoria (España)» · «Pontificia Universidad Javeriana (Colombia)»
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el biotecnólogo que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac y Electivo— para que desarrolles una visión integral y estés listo para investigar, emprender y transformar tu entorno. Tendrás además acceso a espacios de realidad virtual para Biotecnología dentro del futuro **Hospital Virtual**, un edificio de simulación de 5 pisos hoy en construcción.»
  - CTA (`btn btn-purple`): «Descubre la formación de un biotecnólogo Anáhuac México» → `#plan-estudios`
  - **⚠️ El tercer bloque se llama «Electivo», no «Interdisciplinario»:** debe coincidir con M5.

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Biotecnología?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Desarrollas, estudias y modificas sistemas vivos para descubrir alternativas que satisfagan de manera sostenible las necesidades del ser humano.»
  - «Diseñas y validas procesos que generan nuevos productos y servicios para la salud, la alimentación, la industria y el medio ambiente.»
  - «Propones soluciones innovadoras a problemas ambientales y contribuyes al fortalecimiento de la tecnología aplicada a los organismos, en México y en el mundo.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Biotecnología?»
  - Dato 1: **«9»** / «Semestres (4 años y medio)»
  - Dato 2: **«415»** / «Créditos totales»
  - **Línea de apoyo bajo los números:** «Bloque Profesional 319 + Bloque Anáhuac 42 + Bloque Electivo 54. Modalidad presencial en Campus Norte.»
  - **⚠️ Exactamente dos datos.** Esta carrera no lleva dato de servicio social.
- **Alt de la foto:** «Estudiante de Biotecnología de la Anáhuac México preparando una muestra en el Laboratorio de Biomoléculas.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`.

**⚠️ 9 tabs, una por semestre, con las materias EXACTAS de cada semestre, en este orden.** No reordenes materias entre semestres y usa las grafías de esta tabla.

**Viñetas por bloque**, según los colores del plan de referencia oficial: naranja = Bloque Profesional (default) · morado = Bloque Anáhuac (`plan-sem-item--anahuac`) · lila = Bloque Electivo (`plan-sem-item--inter`). Marcadas abajo con **(A)** = Anáhuac y **(E)** = Electivo; el resto es Profesional.

- **⚠️ En esta carrera las dos «Asignatura electiva Anáhuac», «Habilidades para el emprendimiento», «Emprendimiento e innovación» y «Responsabilidad social y sustentabilidad» son Bloque Electivo (E).** Las «Electiva profesional», «Formación universitaria A/B», las tres «Regional» e «Innovación tecnológica» son Bloque Profesional. Respeta la tabla aunque difiera de otras carreras.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Biotecnología?»
- **Tabs (9):**

  | Tab | Materias (en este orden) |
  |---|---|
  | **Semestre 1** | Biología general · Biofísica aplicada · Matemáticas para ciencias de la salud · Morfofisiología humana · Química · Asignatura electiva Anáhuac I **(E)** · Ser universitario **(A)** |
  | **Semestre 2** | Morfofisiología animal · Morfofisiología vegetal · Cálculo para ciencias de la salud · Química orgánica para sistemas biológicos · Química analítica para sistemas biológicos · Asignatura electiva interdisciplinaria I **(E)** · Taller o actividad I **(E)** · Taller o actividad II **(E)** · Antropología fundamental **(A)** |
  | **Semestre 3** | Microbiología general · Fisicoquímica aplicada · Bioestadística aplicada · Bioquímica general · Métodos analíticos · Procesos celulares · Electiva profesional I · Liderazgo y desarrollo personal **(A)** · Ética **(A)** |
  | **Semestre 4** | Bioseguridad · Tecnología vegetal · Bioquímica microbiana · Bases de ingeniería genética · Microbiología industrial · Fisiopatología molecular · Electiva profesional II · Habilidades para el emprendimiento **(E)** · Humanismo clásico y contemporáneo **(A)** |
  | **Semestre 5** | Microbiología médica · Metodología de la investigación en Biotecnología · Diagnóstico molecular · Ciencias ómicas: Genómica y proteómica · Biocatálisis y biorreactores · Inmunología básica · Electiva profesional III · Emprendimiento e innovación **(E)** · Taller o actividad III **(E)** · Persona y trascendencia **(A)** |
  | **Semestre 6** | Biotecnología médica · Modelos experimentales · Microbiología sanitaria · Bioinformática · Biorremediación · Regional I · Formación universitaria A · Electiva profesional IV · Liderazgo y equipos de alto desempeño **(A)** |
  | **Semestre 7** | Aplicaciones biotecnológicas en alimentos · Fitopatología · Diseño experimental · Ciencias ómicas: Nutrigenómica · Redacción científica · Regional II · Formación universitaria B · Innovación tecnológica · Asignatura electiva interdisciplinaria II **(E)** |
  | **Semestre 8** | Ciencias ómicas: Metabolómica · Biotecnología agroalimentaria · **Laboratorio de investigación y desarrollo** · Ciencias ómicas: Farmacogenómica · Regional III · Responsabilidad social y sustentabilidad **(E)** · Asignatura electiva interdisciplinaria III **(E)** |
  | **Semestre 9** | Biotecnología de especies animales · Aplicaciones biotecnológicas en investigación · **Proyecto de investigación y desarrollo** · Control de calidad en bioingeniería · Virología aplicada a la Biotecnología · Asignatura electiva Anáhuac II **(E)** |

  - «Regional I/II/III» **[VERIFICAR]**
- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas las competencias de la biotecnología, trabajas en laboratorio desde el inicio y cierras con tu propio proyecto de investigación y desarrollo. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil y te dan versatilidad para el mundo laboral.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Electivo** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`) — DOS:** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP · D.O.F. 26/11/1982» + icono externo + `sr-only` «(abre el documento oficial del RVOE)» · **[PENDIENTE: URL]**

---

## Módulo 6 — ¿Dónde puedes trabajar como biotecnólogo? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (tiles + `campo-preview`) + banda `campo-band` con los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes trabajar como biotecnólogo?»
- **Intro:** «Tu formación te abre oportunidades en la industria, la investigación, el sector público y el emprendimiento, en México y en el extranjero.»
- **Tiles (6):**
  1. **«Industria farmacéutica»** — «Investigación, desarrollo y control de calidad de medicamentos y productos biológicos.»
  2. **«Diagnóstico médico y genético»** — «Pruebas de diagnóstico molecular e industria médica y genética.»
  3. **«Alimentos y agroindustria»** — «Desarrollo de alimentos y suplementos innovadores, y mejora de cultivos y especies.»
  4. **«Medio ambiente y energía»** — «Biorremediación y nuevas alternativas a los hidrocarburos como fuente de energía.»
  5. **«Investigación y academia»** — «Centros de investigación, universidades y difusión científica.»
  6. **«Emprendimiento y regulación»** — «Tu propia empresa de biotecnología, o instituciones públicas y consejos de regulación de procesos.»
- **Preview:** formato 4:5, alt descriptivo por ámbito (p. ej. «Biotecnóloga egresada de la Anáhuac México trabajando en un laboratorio de la industria farmacéutica»).
- **Banda destacada (`campo-band`):**
  - **H3:** «Cátedras con la industria farmacéutica»
  - Texto: «Participas en cátedras con empresas farmacéuticas como **Opella, Roche y Novo Nordisk**, y te conectas desde la carrera con la industria en la que quieres trabajar.»
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`

---

## Módulo 7 — Instalaciones donde estudiarás tu licenciatura · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus lic-campus--inst` — intro + `campus-slider` de `lic-inst-card` (foto + H3) + línea de cierre `lic-inst-cta`.

**⚠️ Aquí se MUESTRAN los espacios (foto + nombre); no se repite la argumentación de M3.** ⚠️ Sin tarjetas de campus ni direcciones.

- **Eyebrow:** «Instalaciones»
- **H2:** «Instalaciones donde estudiarás tu licenciatura»
- **Intro:** «Conoce los laboratorios de Campus Norte donde se forman los biotecnólogos, y el futuro Hospital Virtual.»
- **Tarjetas del slider (5):**
  1. **«Laboratorio de Genómica y Proteómica»**
  2. **«Laboratorio de Cultivo Celular»**
  3. **«Laboratorio de Biomoléculas»**
  4. **«Laboratorio de Microbiología»**
  5. **«Hospital Virtual (en construcción)»**, ⚠️ con «(en construcción)» visible en el H3.
- **Alt:** «[Nombre del espacio] — Universidad Anáhuac México, Campus Norte»
- **Línea de cierre:** «Agenda un tour presencial o una cita virtual [aquí].» → `/visita-campus` **[VERIFICAR URL]**

---

## Módulo 8 — Historias Anáhuac México · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual, con el H2 ajustado.

- **H2:** «Historias Anáhuac México» · **Bajada:** «Leones Anáhuac México que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales.]** ⚠️ No inventes personas ni citas. Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Biotecnología, generación [año], Campus Norte.»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados` con **dos grupos**: «Aliados nacionales» y «Aliados internacionales».

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de investigadores y especialistas de los sectores público y privado, y desarrollas proyectos con universidades, centros de investigación y empresas líderes.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → foto + nombre + **cargo o logro profesional**. **[PENDIENTE]**
- **«Aliados nacionales» (H3):** UNAM · Instituto Politécnico Nacional · 3M · Herdez · GE · Philips · Oracle · Hospital Ángeles
- **«Aliados internacionales» (H3):** Universidad Francisco de Vitoria (España) · Pontificia Universidad Javeriana (Colombia)
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

**⚠️ Las preguntas 2, 4 y 7 responden objeciones reales (padres que no conocen el área, dificultad de la carrera y costo). No las quites ni las suavices.**

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Biotecnología»
- **Acordeón (7 preguntas):**
  1. **«¿Cuántos años dura la carrera de Biotecnología?»** → «La Licenciatura en Biotecnología dura 9 semestres, es decir, 4 años y medio, en modalidad presencial en Campus Norte.»
  2. **«¿De qué trata la carrera de Biotecnología?»** → «La biotecnología estudia y modifica sistemas vivos —células, microorganismos, plantas y animales— para crear productos y procesos que mejoran la salud, la alimentación, la industria y el medio ambiente: desde un medicamento o una prueba de diagnóstico hasta un cultivo más resistente o la limpieza de un suelo contaminado.»
  3. **«¿Qué materias se ven en la carrera de Biotecnología?»** → «Cursarás materias como Bases de ingeniería genética, Microbiología industrial, Biocatálisis y biorreactores, Bioinformática, Biotecnología médica y las ciencias ómicas —Genómica y proteómica, Nutrigenómica, Farmacogenómica y Metabolómica—, y cierras con un proyecto de investigación y desarrollo.»
  4. **«¿Es una carrera difícil?»** → «Exige dedicación, porque es una carrera de ciencia con alto nivel académico. Por eso cuentas con acompañamiento personalizado de tus profesores y con los programas de apoyo académico de la universidad durante toda la carrera.»
  5. **«¿Desde cuándo puedo hacer investigación?»** → «Desde los primeros semestres puedes integrarte a proyectos de investigación. En 8º semestre cursas Laboratorio de investigación y desarrollo, y en 9º desarrollas tu propio Proyecto de investigación y desarrollo, ligado a tu titulación.»
  6. **«¿En qué puedo trabajar al terminar la carrera de Biotecnología?»** → «Puedes trabajar en las industrias farmacéutica, de alimentos, química, ambiental, médica y de diagnóstico, genética, agropecuaria y energética; en centros de investigación y universidades; en instituciones públicas y consejos de regulación, o emprender tu propia empresa.»
  7. **«¿Cuánto cuesta estudiar Biotecnología en la Anáhuac México?»** → «Puedes calcular tu colegiatura y conocer opciones de apoyos en nuestro cotizador. Además, puedes participar en el Concurso Rosalind Franklin de Propuesta de Innovación en Biotecnología, que otorga becas para estudiar la licenciatura. Consulta la convocatoria vigente en Concursos.» *(enlaces: «cotizador» → `/cotizador` · «Concursos» → `/licenciaturas/concursos`)*
  - **⚠️ No agregues porcentajes de beca ni fechas del concurso:** cambian en cada convocatoria.
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

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Biotecnología»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Biotecnología»** |
  | «Campus» | text `readonly` | prellenado: **«Campus Norte»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Biotecnología.»
- **Alt de la foto:** «Estudiante de Biotecnología de la Anáhuac México consultando información de la licenciatura.»

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Ciencias de la Salud › Biotecnología.
- **`Course`**: `name`="Licenciatura en Biotecnología" · `description`= primer bullet de M4 · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y6M" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=415 · `courseMode`="onsite" · `location`= Campus Norte.
- **`FAQPage`** (junto a M11): las 7 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre «Universidad Anáhuac México», url, dirección de **Campus Norte** (Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C.P. 52786), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px con `<label class="sr-only">`. Con 9 tabs, verifica que el tablist no desborde en tablet.
- El color de viñeta por bloque (M5) **no es el único indicador**: incluye una leyenda visible de los tres bloques o un `sr-only` por materia.
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M3 y M7 con botones etiquetados («Imagen anterior / siguiente», «Instalación anterior / siguiente») y dots navegables por teclado.
- Acordeón de M11 con `<details>` nativo.
- Video del hero con subtítulos; carga al clic, con `aria-label` descriptivo.
- Contraste AA en la banda naranja del FAQ y en la banda de M6.

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · «Desarrolla. Modifica. Innova.» · 3 chips: 9 sem · presencial · Campus Norte | video + 2 CTAs)
2  ¿Es para ti? (H2 emocional: la solución que cambie millones de vidas · 4 tarjetas + chips: campos / herramientas)
3  ¿Por qué la Anáhuac México? (slider de laboratorios + «Ver instalaciones» | 6 tarjetas + banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + AEO: 9 sem · 415 créditos | foto)
5  Plan de estudios (9 tabs por semestre, con colores por bloque · 3 bloques · 2 descargas · RVOE)
6  Campo laboral (6 tiles + preview | banda CÁTEDRAS CON FARMACÉUTICAS + 2 CTAs)
7  Instalaciones (slider: Genómica y Proteómica · Cultivo Celular · Biomoléculas · Microbiología · Hospital Virtual en construcción)
8  Historias Anáhuac México (compartido)
9  ¿Con quién te formas? (claustro + aliados nacionales + internacionales)
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (7, acordeón naranja + FAQPage; incluye «¿de qué trata?», «¿es difícil?» e investigación)
12 León en la Anáhuac México (compartido, con ALPHA)
13 Solicita información (formulario de material, campus fijo Norte)
14 Footer + Newsletter
```
