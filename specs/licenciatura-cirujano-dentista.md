# Página: Licenciatura en Médico Cirujano Dentista — Anáhuac México · **v2**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **⚠️ Cuatro particularidades de esta página:**
> 1. **Solo se imparte en Campus Norte.** No es bicampus: afecta al chip del hero, a M7, al FAQ y al formulario.
> 2. **Las prácticas con pacientes empiezan en 2º semestre** (Clínica integral odontológica I). No escribas «desde el primer semestre».
> 3. **Nunca compares esta licenciatura con ninguna otra.** La página habla solo de la odontología, sin nombrar otras carreras como punto de comparación.
> 4. **Dos objeciones propias de la carrera se responden de frente:** el costo del **instrumental** y **cómo conseguir pacientes**. Viven en la banda de M6 y en el FAQ.

> **⚠️ Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Esto incluye los módulos compartidos: **«Historias Anáhuac México»** y **«Descubre por qué ser un León en la Anáhuac México»**. Solo se exceptúan los nombres de programa «Modelo Anáhuac» y «Bloque Anáhuac».

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/cirujano-dentista` — confirmado en el «Mapeo de Sitio Web 2025» (acción: *Reemplazar*) |
| **Nombre oficial** | **«Licenciatura en Médico Cirujano Dentista»**. ⚠️ Úsalo completo siempre que se nombre la licenciatura (no «Cirujano Dentista» a secas). |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Ciencias de la Salud |
| **Audiencia** | Preuniversitario al que le atrae lo práctico y manual, con vocación de servicio y deseo de independencia profesional (a menudo con familiares odontólogos) + padres/madres (objeciones: inversión en instrumental y retorno) |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México **Campus Norte** (Huixquilucan, Edo. Méx.) — presencial |
| **KPI** | Envíos del formulario M13 · descargas del plan de estudios · interacción con las tabs (M5) y los tiles (M6) · apertura de las preguntas de instrumental y pacientes en el FAQ |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** Las **prácticas y la simulación** se argumentan en M3; en M7 solo se **muestran** los espacios. El **convenio de instrumental** vive **solo en la banda de M6** y se repite únicamente en el FAQ. Las **especialidades** que cursas se nombran en M2 (chips) y en el FAQ; no se repiten en M3.
- **⚠️ Prácticas con pacientes desde 2º semestre**, no desde el primero.
- **⚠️ Cero comparaciones entre licenciaturas.** Ni con Medicina ni con ninguna otra, ni en el copy ni en el FAQ.
- **⚠️ Intercambios:** la práctica clínica en el extranjero puede verse limitada por la normatividad de cada país. **No prometas práctica clínica internacional**; habla de «intercambios» y de «brigadas y misiones».
- **⚠️ El Hospital Virtual se comunica siempre como proyecto en construcción**, nunca como instalación disponible, **también en M7**.
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles y sliders.

## 3. Metadatos SEO / AEO

- **Title (69 car.):** «Licenciatura en Médico Cirujano Dentista | Universidad Anáhuac México»
- **Meta description (154 car.):** «Estudia Médico Cirujano Dentista en la Universidad Anáhuac México: atiende pacientes desde 2º semestre en la Clínica Dental Universitaria. Conoce el plan.»
- **Keyword principal:** `cirujano dentista` (9,900 · hoy pos. 6) · **Secundarias (mapeo + SEMrush):** `lic en odontologia` (1,300 · pos. 39 — **la más débil con volumen**) · `plan de estudios odontologia` (590 · pos. 9) · `licenciatura en cirujano dentista` (390) · `cirujano dental` (390 · pos. 25) · `medico dentista` (320) · `cirujano dentista carrera` (260) · `dental anahuac` (260 · pos. 38) · `anahuac odontologia` (170 · pos. 3) · `odontologia anahuac` (110 · pos. 3) · `medico cirujano odontologo` (140) · `carrera de cirujano dentista` (90)
- **⚠️ `lic en odontologia` está en posición 39 con 1,300 búsquedas.** La palabra «odontología» ya aparece de forma natural en la intro de M2, en los bullets de M4 y en la pregunta 2 del FAQ: **no la sustituyas por sinónimos** al ajustar el copy.
- **Open Graph:**
  - `og:title`: «Licenciatura en Médico Cirujano Dentista — Universidad Anáhuac México»
  - `og:description`: «Atiende pacientes desde 2º semestre en la Clínica Dental Universitaria y practica antes en simulación. Conoce el plan de estudios de Médico Cirujano Dentista.»
  - `og:image` (alt): «Estudiante de Médico Cirujano Dentista de la Universidad Anáhuac México atendiendo a un paciente en la Clínica Dental Universitaria.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).
- **Enlazado interno sugerido:** desde el FAQ, a los artículos del blog que ya posicionan: `/licenciaturas/blog/cuantas-especialidades-en-odontologia-hay` (`especialidades odontologicas`, 2,900) y `/licenciaturas/blog/cuanto-dura-la-carrera-de-cirujano-dentista`.

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Médico Cirujano Dentista» (M1, `#inicio`)
  - **H2** «¿Te imaginas cambiarle la vida a alguien a través de su sonrisa?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Médico Cirujano Dentista en la Anáhuac México?» (M3, `#por-que`) → H3 por tarjeta (6)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Médico Cirujano Dentista?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Médico Cirujano Dentista?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Médico Cirujano Dentista?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Electivo)
  - **H2** «¿Dónde puedes ejercer como cirujano dentista?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Instalaciones donde estudiarás tu licenciatura» (M7, `#instalaciones`) → H3 por instalación
  - **H2** «Historias Anáhuac México» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Aliados nacionales» · H3 «Aliados internacionales»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Médico Cirujano Dentista» (M11, `#faq`) → H3 por pregunta (7)
  - **H2** «Descubre por qué ser un León en la Anáhuac México» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Médico Cirujano Dentista» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips. ⚠️ El tercer chip dice «Campus Norte», no «Bicampus».**

- **Breadcrumb:** Inicio › Oferta Académica › Ciencias de la Salud › Médico Cirujano Dentista
- **Eyebrow (`tagline`):** «Ciencias de la Salud»
- **H1:** «Licenciatura en Médico Cirujano Dentista»
- **Claim (`lic-hero-claim`):** «Previene. Diagnostica. Cura.»
  - **⚠️ El claim del hero es siempre una tríada de tres palabras.** No lo sustituyas por una frase.
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Campus Norte»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video]**
- **Alt de la portada:** «Estudiante de Médico Cirujano Dentista de la Universidad Anáhuac México atendiendo a un paciente en la Clínica Dental Universitaria.»

---

## Módulo 2 — ¿Te imaginas cambiarle la vida a alguien a través de su sonrisa? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

**⚠️ Ninguna tarjeta menciona otra carrera.** La vocación se describe en positivo, con lo que sí es la odontología.

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te imaginas cambiarle la vida a alguien a través de su sonrisa?»
- **Intro:** «Detrás de cada sonrisa hay una persona que vuelve a sentirse segura. Si te reconoces en lo siguiente, la odontología puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Te mueve ver cómo alguien vuelve a sonreír sin dolor y sin miedo.»
  2. «Te gusta aprender haciendo y desarrollar una técnica que se nota en la vida de cada paciente.»
  3. «Te interesa unir ciencia, tecnología y trato humano para cuidar la salud de las personas.»
  4. «Te imaginas con tu propio consultorio, construyendo tu práctica profesional con independencia.»
- **Párrafo del bloque de enfoque:** «En la Anáhuac México te formamos como un **profesional de la salud** que previene, diagnostica y trata los padecimientos bucodentales para lograr la rehabilitación oral de tus pacientes.»
- **Chips — grupo «Especialidades que conocerás»:** «Endodoncia» · «Periodoncia» · «Ortodoncia» · «Odontopediatría» · «Implantología» · «Cirugía bucal»
- **Chips — grupo «Herramientas»:** «Simulación dental» · «Imagenología dental» · «Biomateriales» · «Terapia de mínima invasión»
- **CTA:** ninguno.
- **Alt:** «Estudiantes de Médico Cirujano Dentista de la Universidad Anáhuac México practicando en el Laboratorio de Simulación Dental.»

---

## Módulo 3 — ¿Por qué estudiar Médico Cirujano Dentista en la Anáhuac México? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` con layout **`lic-porque2`** — intro + columna de medios (`campus-slider` de fotos + enlace «Ver instalaciones ›» → `#instalaciones`) + columna de 6 `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No nombrar aquí el convenio de instrumental:** va en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac México?»
- **H2:** «¿Por qué estudiar Médico Cirujano Dentista en la Anáhuac México?»
- **Intro:** «No solo aprendes la técnica: practicas primero en simulación y desde 2º semestre atiendes pacientes reales, con el acompañamiento de especialistas.»
- **Slider de medios (5 fotos, 1:1):** Clínica Dental Universitaria · Laboratorio de Simulación Dental · Laboratorio de Biomateriales Dentales · unidad móvil de brigadas · estudiantes en clínica. Enlace inferior: «Ver instalaciones ›» → `#instalaciones`.
- **Tarjetas (6):**
  1. **«Prácticas en la Clínica Dental Universitaria»** — «Desde 2º semestre tienes tu primer encuentro con pacientes reales, y a lo largo de la carrera cursas cinco Clínicas integrales odontológicas y dos Prácticum, siempre bajo supervisión docente.» · «Ver el plan de estudios ›» → `#plan-estudios`
  2. **«Simulación antes de tu primer paciente»** — «Tus actividades preclínicas se realizan en equipos de simulación dental que cumplen con las normas y estándares de calidad de la práctica odontológica.»
  3. **«Un plan reconocido por la odontología mexicana»** — «Plan de estudios reconocido por el Consejo Nacional de Educación Odontológica (CONAEDO) y la Federación Mexicana de Facultades y Escuelas de Odontología (FMFEO).» **[VERIFICAR]**
  4. **«Formación interdisciplinaria de Ciencias de la Salud»** — «Compartes materias como Anatomía, Bioquímica y Fisiología con otras licenciaturas de la Facultad. La Clínica Dental Universitaria trabaja de forma coordinada con las otras tres clínicas internas —Nutrición, Terapia Física y Servicio Médico— para que colabores en la atención de un mismo paciente desde distintas disciplinas.» · Chips: «Nutrición» · «Terapia Física» · «Servicio Médico»
  5. **«Brigadas y misiones comunitarias»** — «Participas en brigadas y misiones de salud en México y en el extranjero, con las dos unidades móviles de la Clínica Dental Universitaria.»
  6. **«Especialistas que te acompañan»** — «Aprendes con atención personalizada de especialistas certificados por sus respectivos consejos, en cada una de las áreas de la odontología.»
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el cirujano dentista que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac y Electivo— para que desarrolles una visión integral y estés listo para ejercer, emprender y transformar tu entorno. Tendrás además acceso a espacios pensados para Odontología dentro del futuro **Hospital Virtual**, un edificio de simulación de 5 pisos hoy en construcción.»
  - CTA (`btn btn-purple`): «Descubre la formación de un cirujano dentista Anáhuac México» → `#plan-estudios`
  - **⚠️ El tercer bloque se llama «Electivo», no «Interdisciplinario»:** debe coincidir con M5.

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Médico Cirujano Dentista?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Promueves la salud y el bienestar de las personas mediante diagnósticos enfocados en planear y ejecutar tratamientos para lograr la rehabilitación oral.»
  - «Vigilas la evolución de tus pacientes para preservar su salud y bienestar.»
  - «Diseñas tratamientos orales innovadores y diriges programas y servicios odontológicos en los ámbitos clínico, académico, de investigación y empresarial.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Médico Cirujano Dentista?»
  - Dato 1: **«8»** / «Semestres (4 años)»
  - Dato 2: **«433»** / «Créditos totales»
  - **Línea de apoyo bajo los números:** «Bloque Profesional 346 + Bloque Anáhuac 42 + Bloque Electivo 45. Modalidad presencial en Campus Norte.»
  - **⚠️ Exactamente dos datos.** Esta carrera no lleva dato de servicio social.
- **Alt de la foto:** «Estudiante de Médico Cirujano Dentista de la Anáhuac México revisando una radiografía dental en la Clínica Dental Universitaria.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`.

**⚠️ 8 tabs, una por semestre, con las materias EXACTAS de cada semestre** según el plan de referencia oficial. **No reordenes materias entre semestres.** Los créditos de cada semestre suman exactamente los del folleto (42 · 51 · 57 · 64 · 54 · 54 · 48 · 63 = 433).

**Viñetas por bloque:** naranja = Bloque Profesional (default) · morado = Bloque Anáhuac (`plan-sem-item--anahuac`) · lila = Bloque Electivo (`plan-sem-item--inter`). Marcadas abajo con **(A)** = Anáhuac y **(E)** = Electivo; el resto es Profesional.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Médico Cirujano Dentista?»
- **Tabs (8):**

  | Tab | Materias (en este orden) |
  |---|---|
  | **Semestre 1** | Anatomía · Anatomía dental · Bioestadística · Biología celular · Bioquímica · Promoción de la salud oral · Ser universitario **(A)** |
  | **Semestre 2** | Anatomía de cabeza y cuello · Biomateriales dentales · Cariología dental · Terapia odontológica de mínima invasión · Histología bucal · Odontología preventiva · **Clínica integral odontológica I** · Persona y sentido de vida **(A)** · Taller o actividad electiva libre 1 **(E)** · Taller o actividad electiva libre 2 **(E)** |
  | **Semestre 3** | Anestesiología bucal · Diagnóstico y propedéutica estomatológica · Imagenología dental · Microbiología oral · Oclusión · Fisiología celular · **Clínica integral odontológica II** · Emprendimiento e innovación · Ética **(A)** |
  | **Semestre 4** | Bases quirúrgicas · Epidemiología y salud pública · Inmunología · Fisiología general · **Clínica integral odontológica III** · Rehabilitación bucal fija · Psicología aplicada a la odontología · Taller o actividad electiva libre 3 **(E)** · Humanismo clásico y contemporáneo **(A)** · Asignatura electiva 1 **(E)** |
  | **Semestre 5** | Patología bucal · Fisiopatología · Endodoncia I · Periodoncia · Farmacología clínica odontológica · Rehabilitación bucal mucodentosoportada · **Clínica integral odontológica IV** · Odontología basada en evidencia · Persona y trascendencia **(A)** |
  | **Semestre 6** | Cirugía bucal · Diagnóstico integral en estomatología · Odontopediatría · Ortodoncia y ortopedia · Medicina estomatológica · **Clínica integral odontológica V** · Metodología de la investigación para la salud · Electiva bloque profesional 1 **(E)** · Liderazgo **(A)** |
  | **Semestre 7** | Genómica y proteómica en odontología · Calidad y seguridad del paciente en ciencias de la salud · Endodoncia II · Odontología legal y forense · Laboratorio de diseño y comprobación para el tratamiento integral · **Prácticum I: Integración clínica orientada a la práctica profesional** · Cultura comunitaria · Electiva bloque profesional 2 **(E)** · Electiva bloque profesional 3 **(E)** |
  | **Semestre 8** | Gestión y dirección en servicios de salud · Implantología dental · Urgencias médicas en la clínica dental · Geriatría y gerontología · Responsabilidad social y sustentabilidad · **Prácticum II: Integración clínica orientada a la práctica profesional** · Atención del paciente con discapacidad intelectual · Rotación del cirujano dentista en los ámbitos · Electiva bloque profesional 4 **(E)** · Asignatura electiva 2 **(E)** |

  - **⚠️ «Responsabilidad social y sustentabilidad» y «Emprendimiento e innovación» son Bloque Profesional** (ruta de liderazgo y emprendimiento), **no** Bloque Anáhuac: no las tiñas de morado.
  - **⚠️ Semestre 7:** «Rehabilitación bucal mucodentosoportada» **no** va en este semestre (solo en el 5º), aunque el folleto impreso la muestre encimada.
  - **⚠️ Usa las grafías de esta tabla**, no las del folleto ni las del sitio vivo (traen erratas).
- **Nota al pie de las tabs** (opcional; del folleto): «Este plan de referencia muestra un orden sugerido; las materias pueden variar según el campus en el que estudies.»
- **Créditos por semestre** (si el componente los muestra): 42 · 51 · 57 · 64 · 54 · 54 · 48 · 63.
- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas las competencias de la odontología, atiendes pacientes en tus cinco Clínicas integrales y tus dos Prácticum, y sigues la ruta de liderazgo y emprendimiento. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil y te dan versatilidad para el mundo laboral.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Electivo** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`) — DOS:** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP · D.O.F. 26/11/1982» + icono externo + `sr-only` «(abre el documento oficial del RVOE)» · **[PENDIENTE: URL]**

---

## Módulo 6 — ¿Dónde puedes ejercer como cirujano dentista? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (tiles + `campo-preview`) + banda `campo-band` con los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes ejercer como cirujano dentista?»
- **Intro:** «Tu formación te abre oportunidades en la práctica clínica, el sector público, la investigación y la docencia.»
- **Tiles (6):**
  1. **«Consultorio o clínica propia»** — «Práctica privada, preventiva o restaurativa, con tus propios pacientes.»
  2. **«Hospitales y equipos de salud»** — «Colaboración en grupos interdisciplinarios de salud en hospitales públicos y privados.»
  3. **«Sector público y salud comunitaria»** — «Diseño y dirección de programas que reducen el rezago en atención dental de la población.»
  4. **«Investigación en materiales y equipos»** — «Desarrollo de nuevos conocimientos, materiales dentales y equipos odontológicos.»
  5. **«Gestión de servicios odontológicos»** — «Dirección de programas y servicios en los ámbitos clínico, académico y empresarial.»
  6. **«Docencia y divulgación»** — «Enseñanza universitaria y divulgación científica de la salud bucal.»
- **Preview:** formato 4:5, alt descriptivo por ámbito (p. ej. «Cirujana dentista egresada de la Anáhuac México atendiendo a un paciente en su consultorio»).
- **Banda destacada (`campo-band`):**
  - **H3:** «Tu instrumental, una inversión para tu consultorio»
  - Texto: «El instrumental que compras durante la carrera es el mismo con el que equiparás tu futuro consultorio. Por convenio, como estudiante de la Anáhuac México obtienes **un 28% de descuento** en instrumental y material dental en el depósito dental más grande del país.»
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`
  - **[VERIFICAR]** el texto del convenio antes de publicar.

---

## Módulo 7 — Instalaciones donde estudiarás tu licenciatura · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus lic-campus--inst` — intro + `campus-slider` de `lic-inst-card` (foto + H3) + línea de cierre `lic-inst-cta`.

**⚠️ Aquí se MUESTRAN los espacios (foto + nombre); no se repite la argumentación de M3.** ⚠️ Sin tarjetas de campus ni direcciones: la carrera es solo de Campus Norte y eso se dice en la intro.

- **Eyebrow:** «Instalaciones»
- **H2:** «Instalaciones donde estudiarás tu licenciatura»
- **Intro:** «Conoce los espacios de Campus Norte donde se forman los cirujanos dentistas: la Clínica Dental Universitaria, los laboratorios de simulación y biomateriales, y las unidades móviles de brigadas.»
- **Tarjetas del slider (5):**
  1. **«Clínica Dental Universitaria»**
  2. **«Laboratorio de Simulación Dental»**
  3. **«Laboratorio de Biomateriales Dentales»**
  4. **«Unidades móviles para brigadas»**
  5. **«Hospital Virtual (en construcción)»**, ⚠️ con «(en construcción)» visible en el H3.
- **Alt:** «[Nombre del espacio] — Universidad Anáhuac México, Campus Norte»
- **Línea de cierre:** «Agenda un tour presencial o una cita virtual [aquí].» → `/visita-campus` **[VERIFICAR URL]**

---

## Módulo 8 — Historias Anáhuac México · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual, con el H2 ajustado.

- **H2:** «Historias Anáhuac México» · **Bajada:** «Leones Anáhuac México que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales.]** ⚠️ No inventes personas ni citas. Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Médico Cirujano Dentista, generación [año], Campus Norte.»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados` con **dos grupos**: «Aliados nacionales» y «Aliados internacionales».

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de especialistas con experiencia clínica y académica, y rotas en clínicas dentales públicas y privadas, hospitales y organizaciones civiles gracias a la red de convenios de la Facultad de Ciencias de la Salud.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → foto + nombre + **cargo o logro profesional**. **[PENDIENTE]**
- **«Aliados nacionales» (H3):** Hospital Fernando Quiróz · Instituto Nacional de Perinatología · **[VERIFICAR: más aliados]**
- **«Aliados internacionales» (H3):** **[VERIFICAR]** ⚠️ Si no llegan aliados confirmados, **este grupo no se maqueta**. No lo rellenes con los de otra carrera.
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

**⚠️ Las preguntas 4 y 5 responden objeciones reales (instrumental y pacientes). No las quites ni las suavices.**

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Médico Cirujano Dentista»
- **Acordeón (7 preguntas):**
  1. **«¿Cuántos años dura la carrera de Médico Cirujano Dentista?»** → «La Licenciatura en Médico Cirujano Dentista dura 8 semestres, es decir, 4 años, en modalidad presencial en Campus Norte.» *(enlace sugerido al artículo del blog sobre duración)*
  2. **«¿Qué materias se ven en la carrera de Odontología?»** → «Cursarás materias como Anatomía dental, Cariología dental, Endodoncia, Periodoncia, Ortodoncia y ortopedia, Odontopediatría, Cirugía bucal e Implantología dental, además de cinco Clínicas integrales odontológicas y dos Prácticum.»
  3. **«¿Desde qué semestre se atienden pacientes?»** → «Desde 2º semestre, en la Clínica integral odontológica I, tienes tu primer encuentro con pacientes reales en la Clínica Dental Universitaria, bajo supervisión docente. Antes y durante la carrera practicas en el Laboratorio de Simulación Dental.»
  4. **«¿Tengo que comprar mi propio instrumental?»** → «Sí. Como en toda formación odontológica, cada estudiante adquiere su instrumental y material, y es una inversión a largo plazo: es el mismo que usarás cuando abras tu consultorio. Por convenio, en el depósito dental más grande del país obtienes un 28% de descuento.» **[VERIFICAR]**
  5. **«¿Cómo consigo pacientes para mis prácticas?»** → «La Clínica Dental Universitaria atiende a pacientes de la comunidad universitaria y del público general, y parte de tu formación es aprender a construir tu propia cartera de pacientes, como lo harás en tu vida profesional. Tus docentes te acompañan en ese proceso desde el inicio.»
  6. **«¿En qué puedo trabajar al terminar la carrera?»** → «Puedes ejercer en tu propio consultorio o clínica, en hospitales y equipos interdisciplinarios de salud, en el sector público, en investigación y desarrollo de materiales dentales, en la gestión de servicios odontológicos y en la docencia.»
  7. **«¿Cuánto cuesta estudiar Médico Cirujano Dentista en la Anáhuac México?»** → «Puedes calcular tu colegiatura y conocer opciones de apoyos en nuestro cotizador.» *(enlace a `/cotizador`)*
- **⚠️ El texto del `FAQPage` debe ser idéntico al del acordeón, sin markup dentro.**
- *No hay pregunta de campus:* la respuesta («solo Campus Norte») ya está en la 1.

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

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Médico Cirujano Dentista»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Médico Cirujano Dentista»** |
  | «Campus» | text `readonly` | prellenado: **«Campus Norte»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Médico Cirujano Dentista.»
- **Alt de la foto:** «Estudiante de Médico Cirujano Dentista de la Anáhuac México consultando información de la licenciatura.»

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Ciencias de la Salud › Médico Cirujano Dentista.
- **`Course`**: `name`="Licenciatura en Médico Cirujano Dentista" · `description`= primer bullet de M4 · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=433 · `courseMode`="onsite" · `location`= Campus Norte.
- **`FAQPage`** (junto a M11): las 7 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre «Universidad Anáhuac México», url, dirección de **Campus Norte** (Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C.P. 52786), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px con `<label class="sr-only">`.
- El color de viñeta por bloque (M5) **no es el único indicador**: incluye una leyenda visible de los tres bloques o un `sr-only` por materia.
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M3 y M7 con botones etiquetados («Imagen anterior / siguiente», «Instalación anterior / siguiente») y dots navegables por teclado.
- Acordeón de M11 con `<details>` nativo.
- Video del hero con subtítulos; carga al clic, con `aria-label` descriptivo.
- Contraste AA en la banda naranja del FAQ y en la banda de M6.

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · «Previene. Diagnostica. Cura.» · 3 chips: 8 sem · presencial · Campus Norte | video + 2 CTAs)
2  ¿Es para ti? (H2 emocional sobre la sonrisa · 4 tarjetas + chips: especialidades / herramientas)
3  ¿Por qué la Anáhuac México? (slider de fotos + «Ver instalaciones» | 6 tarjetas + banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + AEO: 8 sem · 433 créditos | foto)
5  Plan de estudios (8 tabs por semestre, materias exactas + 3 bloques + 2 descargas + RVOE)
6  Campo laboral (6 tiles + preview | banda INSTRUMENTAL 28% + 2 CTAs)
7  Instalaciones (slider: Clínica Dental · Simulación · Biomateriales · Unidades móviles · Hospital Virtual en construcción)
8  Historias Anáhuac México (compartido)
9  ¿Con quién te formas? (claustro + aliados nacionales [+ internacionales si se confirman])
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (7, acordeón naranja + FAQPage; incluye instrumental y pacientes)
12 León en la Anáhuac México (compartido, con ALPHA)
13 Solicita información (formulario de material, campus fijo Norte)
14 Footer + Newsletter
```
