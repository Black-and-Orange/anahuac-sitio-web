# Página: Licenciatura en Nutrición — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Estado de implementación (2026-08-27).** Maqueta construida en
> `nutricion.html` + `nutricion.css`, sobre el molde de `psicologia.html`. Los
> componentes se reutilizan íntegros desde `psicologia.css`; `nutricion.css` solo
> lleva tres desviaciones de retícula que impone el contenido (10 pestañas de
> plan, 3 datos duros y tres piezas de texto auxiliar). El JS es el compartido
> (`script.js` + `psicologia.js`), sin cambios. Cero componentes nuevos.
>
> Desviaciones respecto de este documento, todas anotadas en el HTML:
> - **Video del hero:** va sin `data-yt-id` y sin botón de play hasta que llegue
>   el ID. Con el id vacío el clic abría un embed roto de YouTube.
> - **Logos de Nestlé / Danone / Herdez (M6):** se omite la tira de logos en vez
>   de dejarla vacía; el copy sí los nombra.
> - **Testimonios (M8):** citas con la plantilla literal a la vista. No se
>   inventan personas ni se reutilizan las de Psicología.
> - **Claustro y logos de aliados (M9):** nombres del claustro entre corchetes.
>   **La clienta pidió el 2026-08-28 que los aliados vayan como logotipos** y que
>   los que falten queden marcados para saber qué archivos nos debe pasar. De los
>   18 solo la Universidad Francisco de Vitoria tiene archivo (compartido con
>   Psicología) y ya va con su `<img>`; los otros 17 usan la variante
>   `.colab-logo-pendiente` — **[PLACEHOLDER], no mergeable**. Nombres de archivo
>   y especificación en `assets/nutricion/logos/README.md`.
> - **ALPHA en M12:** sin insertar. El molde compartido no enumera los 9
>   Programas de Liderazgo, así que no hay dónde ponerlo sin rediseñar un módulo
>   marcado «no rediseñar». Pendiente de decisión.
> - **Viñetas de bloque en el plan (M5):** solo se tiñen las materias cuya
>   pertenencia se deduce del propio handoff. «Responsabilidad social y
>   sustentable» queda sin marcar hasta verificarla contra el folleto.
> - **Toda la fotografía es de relleno** y sale del banco de Psicología.

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Molde base.** Replica **1:1 el molde validado en la maqueta de Psicología** → [`psicologia.html`](https://black-and-orange.github.io/anahuac-sitio-web/psicologia.html). Reutiliza sus componentes y clases (`lic-hero`, `lic-afinidad`, `lic-porque`, `lic-plan`, `lic-plan-est`, `lic-campo`, `lic-campus`, `stories`, `lic-colab`, `lic-pasos`, `lic-faq`, `experience`, `lic-form`). **No se diseñan componentes nuevos.**

> **⚠️ Tres particularidades de esta página:**
> 1. **La tarjeta de datos duros lleva TRES datos**: 8 semestres · 398 créditos · +1 año de servicio social. Ese último es decisivo y hoy el sitio vivo lo omite.
> 2. **El tercer bloque del Modelo Anáhuac se llama «Bloque Electivo»**, no «Interdisciplinario». Es la única carrera del lote con esa denominación.
> 3. **La página desmonta activamente la idea de que Nutrición es «la opción fácil frente a Medicina».** Esa respuesta aparece en M2 y M11 y no es negociable.

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/nutricion` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Ciencias de la Salud |
| **Audiencia** | Preuniversitario con vocación de salud —muchos llegan tras considerar Medicina— + padres/madres (objeciones de rentabilidad y estabilidad respondidas en M6) |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México: **Norte** (Huixquilucan, Edo. Méx.) y **Sur** (Álvaro Obregón, CDMX) — presencial |
| **KPI** | Envíos del formulario M13 · descargas del plan de estudios · interacción con las tabs (M5) y los tiles (M6) · apertura de la pregunta de servicio social en el FAQ |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** La **Clínica de Nutrición y los laboratorios** van en M3 y **no se repiten** en el módulo de campus. Los **convenios con la industria alimentaria** (Nestlé, Danone, Herdez) van **solo en la banda de M6**. El **año de servicio social** se explica **solo en M4** y se repite únicamente en el FAQ.
- **⚠️ Las prácticas empiezan en 5º semestre, no en el primero.** Es el dato real. No lo "mejores".
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles y sliders.

## 3. Metadatos SEO / AEO

- **Title (54 car.):** «Licenciatura en Nutrición | Universidad Anáhuac México»
- **Meta description (160 car.):** «Estudia la Licenciatura en Nutrición en la Universidad Anáhuac México: prácticas en la Clínica de Nutrición y laboratorios modernos. Conoce el plan de estudios.»
  - *Versión propuesta de B&O, **elegida por la clienta** por encima de la del mapeo. ⚠️ Esta es la definitiva: no la sustituyas por la del mapeo ni por otra.*
- **Keyword principal:** `licenciatura en nutricion` (2,900) · **Secundarias:** `lic en nutricion` (2,900) · `carrera de nutricion` (2,400) · `nutricion universidades` (590) · `carrera de nutriologa` (260 — **hoy en posición 1: no perderla**) · `materias de nutricion` (260) · `plan de estudios nutricion` (140)
- **⚠️ `qué materias se ven en la carrera de nutricion`** (260, hoy en posición 56) es una pregunta literal y la pregunta 2 del FAQ la reproduce casi verbatim. **No la reescribas.**
- **⚠️ `carrera de nutriologa` está en posición 1.** Para no perderla, el femenino «nutrióloga» debe seguir apareciendo en el H2 de M6 y en el alt de la preview.
- **⚠️ Keywords del «Mapeo de Sitio Web 2025» (documento del cliente):** `licenciatura en nutricion` (2,900) · `lic en nutricion` (2,900) · `carrera de nutricion` (2,400) · `nutricion universidades` (590) · `anahuac nutricion` (170) · `licenciatura en nutricion cdmx` (140) · `plan de estudios nutricion` (140) · `universidades de nutricion en cdmx` (70). **Aparece un clúster CDMX** que no estaba: menciona «Ciudad de México» de forma natural en M7.
- **Open Graph:**
  - `og:title`: «Licenciatura en Nutrición — Universidad Anáhuac México»
  - `og:description`: «Fórmate como profesional de la nutrición con práctica real en la Clínica de Nutrición Anáhuac y laboratorios de diagnóstico de vanguardia. Conoce el plan de estudios.»
  - `og:image` (alt): «Estudiante de Nutrición de la Universidad Anáhuac México evaluando el estado nutricional de un paciente en la Clínica de Nutrición Anáhuac.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Nutrición en la Universidad Anáhuac México» (M1, `#inicio`)
  - **H2** «¿Te interesa ayudar a las personas a través de la alimentación y el bienestar?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Nutrición en la Anáhuac?» (M3, `#por-que`)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Nutrición?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Nutrición?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Nutrición?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Interdisciplinario)
  - **H2** «¿Dónde puedes ejercer como nutriólogo o nutrióloga?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Estudia Nutrición en el campus que elijas» (M7, `#instalaciones`) → H3 «Campus Norte» · H3 «Campus Sur»
  - **H2** «Historias Anáhuac» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Convenios académicos internacionales» · H3 «Convenios nacionales» · H3 «Cátedras corporativas»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Nutrición» (M11, `#faq`) → H3 por pregunta (8)
  - **H2** «Descubre por qué ser un León Anáhuac» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Nutrición» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips. ⚠️ El chip dice «8 semestres» y NO menciona el servicio social:** ese matiz vive completo en M4.

- **Breadcrumb:** Inicio › Oferta Académica › Ciencias de la Salud › Nutrición
- **Eyebrow (`tagline`):** «Ciencias de la Salud»
- **H1:** «Licenciatura en Nutrición en la Universidad Anáhuac México»
- **Claim (`lic-hero-claim`):** «Mejora la calidad de vida de las personas mediante la promoción de una alimentación sana.» *(texto oficial vigente del sitio — esta carrera **no** tiene conflicto de claims)*
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Bicampus · Norte - Sur»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video institucional de Nutrición]**
- **Alt de la portada:** «Estudiante de Nutrición de la Universidad Anáhuac México realizando una evaluación del estado nutricional en la Clínica de Nutrición Anáhuac.»

---

## Módulo 2 — ¿Te interesa ayudar a las personas a través de la alimentación y el bienestar? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

**⚠️ La tarjeta 1 es la que separa a Nutrición de Medicina. No la muevas de la primera posición ni la suavices.**

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te interesa ayudar a las personas a través de la alimentación y el bienestar?»
- **Intro:** «Si te reconoces en lo siguiente, la Nutrición puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Buscas una carrera con identidad propia: tu propio perfil profesional, plan de estudios y campo laboral — no una alternativa "más sencilla" a Medicina.»
  2. «Te apasiona la ciencia detrás de la alimentación y su impacto real en la salud de las personas.»
  3. «Quieres ayudar a otros a mejorar su calidad de vida — con la constancia y la disciplina que exige acompañar procesos de cambio, no solo por vocación.»
  4. «Te imaginas con tu propio consultorio o tu propia marca de productos alimentarios.»
- **Párrafo del bloque de enfoque:** «En la Anáhuac te formamos como un **profesional de la salud** que previene, evalúa, diagnostica y trata el estado de nutrición de las personas y de la población.»
- **Chips — grupo «Ámbitos»:** «Clínica» · «Deportiva» · «Poblacional» · «Industria alimentaria»
- **Chips — grupo «Herramientas»:** «Bioimpedancia» · «Bod Pod» · «Nutrigenómica» · «Dietoterapia»
- **CTA:** ninguno.
- **Alt:** «Estudiantes de Nutrición de la Universidad Anáhuac México analizando un plan de alimentación en clase.»

---

## Módulo 3 — ¿Por qué estudiar Nutrición en la Anáhuac? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` — intro + grid de `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No nombrar aquí a Nestlé, Danone ni Herdez:** van en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac?»
- **H2:** «¿Por qué estudiar Nutrición en la Anáhuac?»
- **Intro:** «No solo aprendes teoría de la nutrición: atiendes pacientes reales, evalúas su estado nutricional y diseñas soluciones, con acompañamiento de expertos.»
- **Tarjetas (6):**
  1. **«Prácticas en la Clínica de Nutrición Anáhuac»** — «Desde el Prácticum I, en 5º semestre, atiendes pacientes reales bajo supervisión docente, dentro de nuestra propia clínica universitaria.»
  2. **«Laboratorios y equipo de diagnóstico de vanguardia»** — «Evalúa el estado nutricional con tecnología como bioimpedancia y Bod Pod, no solo con báscula y cinta métrica.»
  3. **«Acreditaciones que respaldan tu título»** — «Programa con acreditación CONCAPREN y pertenencia a la AMMFEN (Asociación Mexicana de Miembros de Facultades y Escuelas de Nutrición).»
  4. **«Formación interdisciplinaria de Ciencias de la Salud»** — «Compartes materias, como Anatomía, con otras licenciaturas de la Facultad. Tu Clínica de Nutrición trabaja de forma coordinada con las otras tres clínicas internas —Odontología, Terapia Física y Servicio Médico— para que colabores en la atención de un mismo paciente desde distintas disciplinas.» · Chips: «Odontología» · «Terapia Física» · «Servicio Médico»
  5. **«Visión de emprendimiento»** — «Cursas Emprendimiento e innovación en 7º semestre. No es solo teoría: hay egresados de Nutrición Anáhuac que hoy combinan su propio consultorio con proyectos de desarrollo de productos alimentarios.»
  6. **«Experiencia internacional»** — «Suma una experiencia internacional mediante convenios con universidades extranjeras, con posibilidad de doble titulación.» · Chips: «Universidad Finis Terrae (Chile)» · «Universidad Francisco de Vitoria (Madrid)» · «Pontificia Universidad Javeriana»
  **⚠️ NO uses aquí la cifra de «+250 convenios internacionales»:** el folleto la presenta como dato **institucional de la Red Anáhuac**, no de Nutrición.
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el nutriólogo que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac e Interdisciplinario— para que desarrolles una visión integral y estés listo para ejercer, liderar y transformar tu entorno. Tendrás además acceso a espacios pensados para Nutrición dentro del futuro **Hospital Virtual**, un edificio de simulación de 5 pisos hoy en construcción.»
  - CTA (`btn btn-purple`): «Descubre la formación de un nutriólogo Anáhuac» → `#plan-estudios`
  - **⚠️ El Hospital Virtual se comunica como proyecto en construcción, no como instalación disponible.**
- **Alt:** «Estudiante de Nutrición de la Universidad Anáhuac México usando equipo de bioimpedancia para evaluar el estado nutricional de un paciente.»

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

**⚠️ La tarjeta de datos duros de esta carrera lleva TRES datos, no dos.** Además de semestres y créditos, muestra el **año de servicio social**, que es lo que realmente distingue la duración de esta licenciatura y que hoy el sitio vivo omite.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Nutrición?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Evalúas y diagnosticas el estado de nutrición de las personas y, de ser necesario, ofreces tratamiento y rehabilitación a través de planes adecuados de alimentación.»
  - «Eres un profesional de la salud con sólida formación humana que previene, evalúa, diagnostica y trata el estado de nutrición de los individuos y la población.»
  - «Interactúas con otros campos relacionados con la nutrición, respondiendo a las necesidades de un entorno cambiante y globalizado.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Nutrición?»
  - Dato 1: **«8»** / «Semestres académicos (4 años)»
  - Dato 2: **«398»** / «Créditos totales»
  - Dato 3: **«+1»** / «Año de servicio social (periodos 09 y 10)»
  - **Línea de apoyo obligatoria bajo los números:** «Bloque Profesional 311 + Bloque Anáhuac 42 + Bloque Electivo 45. Al concluir los 8 semestres cumples un año de **servicio social** con acompañamiento de un tutor, en un hospital, clínica o institución afín. **Cuenta como experiencia laboral formal** que puedes incluir en tu CV y, si lo decides, puedes cursarlo en paralelo con el primer año de un posgrado dentro de la misma universidad.»
  - **✅ Resuelto con el folleto oficial:** el plan de referencia rotula los periodos **09 y 10 como «Servicio social»**, después de los 8 semestres académicos. La denominación oficial es simplemente **«Servicio social»**. Los créditos totales (398) **no lo incluyen**.
- **Alt de la foto:** «Estudiante de Nutrición de la Anáhuac atendiendo a un paciente en la Clínica de Nutrición.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — intro + `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`.

**⚠️ 10 tabs: 8 semestres + «Servicio social 09» y «Servicio social 10»**, tal como los rotula el plan de referencia oficial. Las dos últimas no listan materias: llevan solo la nota de cierre.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Nutrición?»
- **Intro:** «Tu plan avanza semestre a semestre, de las bases científicas a la práctica clínica con pacientes reales.»
- **Tabs (8):**
  | Tab | Materias |
  |---|---|
  | **Semestre 1** | Bioestadística · Nutriología · Crecimiento y desarrollo · Anatomía · Química orgánica · Biología Celular · Ser Universitario |
  | **Semestre 2** | Epidemiología y salud pública · Cálculo dietético · Anatomía y fisiología del aparato digestivo · Bioquímica · Bromatología · Microbiología de alimentos · Comunicación nutriólogo-paciente · Persona y sentido de vida |
  | **Semestre 3** | Fisiología general · Nutrición en el individuo sano · Evaluación del estado de nutrición I · Bioquímica de la nutrición · Análisis de alimentos · Preparación de alimentos · Ética |
  | **Semestre 4** | Sistemas de información en salud basados en evidencias · Evaluación del estado de nutrición II · Psicología de la nutrición · Fisiopatología · Selección y conservación de alimentos · Dietoterapia · Toxicología · Persona y trascendencia |
  | **Semestre 5** | Metodología de la investigación para la salud · Nutrición del niño en condiciones especiales · Farmacología en nutrición · Responsabilidad social y sustentable · **Prácticum I — Nutrición integrada en el individuo sano** · Planeación y diseño de menús · Taller o actividad I · Humanismo clásico y contemporáneo |
  | **Semestre 6** | Nutrición del adulto en condiciones especiales · Nutrigenómica y metabolómica · Alimentos funcionales · Nutrición artificial · Educación nutricional · Electiva profesional I · Electiva libre I · Liderazgo |
  | **Semestre 7** | Nutrición poblacional · Emprendimiento e innovación · Legislación alimentaria · Gestión y dirección de servicios de salud · **Prácticum II — Nutrición integrada en el individuo con patologías** · Electiva profesional II · Electiva libre II · Taller o actividad II |
  | **Semestre 8** | Políticas públicas en alimentación · Calidad y seguridad del paciente en Ciencias de la Salud · Economía alimentaria · Gestión en servicios de alimentos · **Prácticum III — Nutrición integrada especializada** · Electiva profesional III · Electiva profesional IV · Taller o actividad III |
  | **Servicio social 09** | Periodo de servicio social supervisado, con acompañamiento de un tutor |
  | **Servicio social 10** | Periodo de servicio social supervisado, con acompañamiento de un tutor |
- **Nota al pie de las tabs (del folleto, consérvala):** «Este plan de referencia muestra un orden sugerido; las materias pueden variar según el campus en el que estudies.»
- **Créditos por semestre** (del folleto, útiles si el componente los muestra): 45 · 50 · 56 · 49 · 54 · 51 · 48 · 45.
- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas las competencias de la profesión, atiendes pacientes en tus tres Prácticum y sigues la ruta de liderazgo y emprendimiento. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Electivo** *(⚠️ en Nutrición se llama así, no «Interdisciplinario»)* — «Cursas electivas profesionales y libres, además de talleres y actividades, para ampliar tu perfil más allá del núcleo de la carrera.»
- **CTAs (`plan-cta`) — DOS:** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`. **✅ El folleto oficial de Nutrición existe** (Facultad de Ciencias de la Salud).
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP · D.O.F. 26/11/1982» + icono externo + `sr-only` — **fecha confirmada en el folleto oficial**. **[PENDIENTE: URL del documento público.]**

---

## Módulo 6 — ¿Dónde puedes ejercer como nutriólogo? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (tiles + `campo-preview`) + banda `campo-band` con los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes ejercer como nutriólogo o nutrióloga?»
- **Intro:** «Como egresado de Nutrición de la Anáhuac puedes ejercer en hospitales, clínicas y consultorio propio, empresas de la industria alimentaria, instituciones deportivas, escuelas, organismos públicos de salud, proyectos de investigación y desarrollo de nuevos productos, en México o en el extranjero.»
- **Tiles (6):**
  1. **«Clínica y hospital»** — «Diagnóstico y tratamiento nutricional en hospitales y clínicas públicas y privadas.»
  2. **«Consultorio propio»** — «Práctica independiente y acompañamiento nutricional de tus propios pacientes.»
  3. **«Industria alimentaria»** — «Desarrollo de producto, calidad y comunicación nutricional en empresas de alimentos.»
  4. **«Deporte y bienestar»** — «Instituciones deportivas y programas de nutrición para el rendimiento físico.»
  5. **«Educación y salud pública»** — «Escuelas, organismos públicos y diseño de políticas de alimentación.»
  6. **«Investigación y desarrollo»** — «Proyectos de investigación en nutrición humana y desarrollo de nuevos productos.»
- **Preview:** formato 4:5, alt descriptivo por ámbito (p. ej. «Nutrióloga egresada de la Anáhuac atendiendo a un paciente en consultorio»).
- **Dato de empleabilidad:** «En la Red Anáhuac, el 70% de nuestros egresados se emplea al poco tiempo de graduarse (Top 10 de América Latina en el QS Graduate Employability Ranking).» **[VERIFICAR: cifra propia de Nutrición.]**
- **Banda destacada (`campo-band`)** — mismo componente que la banda de doble titulación de Psicología:
  - **H3:** «Vinculación con la industria alimentaria»
  - Texto: «Cuentas con convenios de vinculación empresarial con **Nestlé, Danone y Herdez** para prácticas profesionales y proyectos de investigación y desarrollo de producto. Es la puerta a un campo laboral que va mucho más allá del consultorio.»
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`
  - Logos: Nestlé · Danone · Herdez **[PENDIENTE: archivos de logotipo con autorización de uso]**

---

## Módulo 7 — Estudia Nutrición en el campus que elijas · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus` — intro + 2 `campus-card` (Norte naranja, Sur morada), cada una con icono de pin, H3, dirección, **slider de fotos 1:1** y CTA de texto; abajo, `campus-note`.

**⚠️ No repetir aquí la Clínica de Nutrición ni los laboratorios:** viven en M3. Aquí solo van en las fotos.

- **Eyebrow:** «Instalaciones y campus» · **H2:** «Estudia Nutrición en el campus que elijas»
- **Intro:** «La licenciatura es presencial y se imparte en nuestros dos campus. Elige el que mejor te quede: los dos comparten la misma comunidad y experiencia Anáhuac.»
- **Campus Norte (H3):** «Av. Universidad Anáhuac 46, Lomas Anáhuac, Huixquilucan, Estado de México.» · CTA: «Conoce el campus ›» → `/campus-norte-anahuac-mexico`
- **Campus Sur (H3):** «Av. de los Tanques 865, Torres de Potrero, Álvaro Obregón, Ciudad de México.» · CTA: «Conoce el campus ›» → `/campus-sur-anahuac-mexico`
- **Slider:** 6 fotos por campus, 1:1. **[PENDIENTE: fotos reales de la Clínica de Nutrición, los laboratorios de análisis de alimentos y el equipo de bioimpedancia y Bod Pod.]**
- **`campus-note`:** «Transporte intercampus **gratuito**» · «**38 hectáreas** de instalaciones en la Red»

---

## Módulo 8 — Historias Anáhuac · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual (6 filas alternando `img, img, blockquote` / `blockquote, img, img`).

- **H2:** «Historias Anáhuac» · **Bajada:** «Leones Anáhuac que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales con nombre y consentimiento. Los perfiles a buscar están documentados —egresados con clínica propia, proyectos de innovación alimentaria, empleo en multinacionales, posgrado en el extranjero— pero **sin nombres propios**. ⚠️ No convertir esos patrones en citas ni inventar personas.]** Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Nutrición, generación [año], Campus [Norte/Sur].»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados`.

**⚠️ TRES grupos en `colab-aliados`** (internacionales · nacionales · cátedras corporativas). Los convenios de **Nestlé, Danone y Herdez** viven en la banda de M6: **no los repitas aquí** *(Herdez sí aparece en el grupo nacional, que es una lista distinta del folleto)*.

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de profesores con experiencia clínica y académica, y practicas en un entorno respaldado por una amplia red de convenios de la Facultad de Ciencias de la Salud.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → foto + nombre + **cargo o logro profesional** (⚠️ no el grado ni la materia). **[PENDIENTE: nombres, fotos y cargos reales de docentes de Nutrición.]**
- **«Convenios académicos internacionales» (H3):** logos con etiqueta de país — **Universidad Finis Terrae** (Chile) · **Universidad Francisco de Vitoria** (Madrid, España) · **Pontificia Universidad Javeriana** (Colombia). *(Confirmados en el folleto oficial.)*
- **«Convenios nacionales» (H3):** ISEM · Hospital General · Instituto Nacional de Perinatología · Asociación Mexicana de Diabetes · AMANC · Herdez
- **«Cátedras corporativas» (H3):** 3M · Toks · Seguros Atlas · PwC · Phillips · Oracle · Manpower · Hospital Ángeles · GE
- **Dato de respaldo de Facultad (usar solo si el diseño necesita una cifra, y siempre atribuido a la Facultad, no a la carrera):** «La Facultad de Ciencias de la Salud cuenta con más de 350 campos clínicos y convenios con más de 53 hospitales en 8 estados de la República.»

---

## Módulo 10 — Elige el siguiente paso para tu futuro · AIDA: Acción · **H2** · `#siguiente-paso`

**Componente:** `lic-pasos` — encabezado + **5 `paso-card`**. Fondo blanco.

- **Eyebrow:** «Siguiente paso» · **H2:** «Elige el siguiente paso para tu futuro»
- **Bajada:** «Avanza a tu ritmo: explora costos y apoyos, revisa fechas, inicia tu admisión o habla con un asesor.»
- **Tarjetas:**
  1. **«Cotiza tu carrera»** — «Calcula la inversión de tu licenciatura y conoce las opciones de pago.» · «Cotizar ›» → `/cotizador`
  2. **«Inicia tu admisión»** — «Comienza tu proceso 100% en línea en solo 6 pasos.» · «Empezar ›» → `/admision-general`
  3. **«Fechas de examen»** — «Consulta el calendario de exámenes de admisión a lo largo del año.» · «Consultar ›» → `/fechas-de-examenes`
  4. **«Apoyos socioeconómicos»** — «Descubre las becas y apoyos económicos disponibles para estudiar aquí.» · «Ver apoyos ›» → `/apoyos-educativos-universidad-anahuac-mexico`
  5. **«Habla con un asesor»** — «Resuelve tus dudas con un asesor preuniversitario, por campus.» · «Contactar ›» → `proceso-de-admision.html#asesoria`
- **⚠️ Esta tarjeta NO muestra datos de asesor.** Igual que en la maqueta de Psicología, es **solo un CTA** que lleva al bloque de asesoría de la página de Proceso de Admisión. No pongas aquí nombre, foto, WhatsApp ni correo de nadie.

---

## Módulo 11 — Preguntas frecuentes · AIDA: Acción · **H2** · `#faq`

**Componente:** `lic-faq` — acordeón `details.faq-item` con `name` compartido, fondo naranja, + `FAQPage` en JSON-LD.

**⚠️ Las preguntas 4 y 5 responden objeciones reales documentadas por la Facultad. No las quites ni las suavices.**

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Nutrición»
- **Acordeón (8 preguntas):**
  1. **«¿Cuántos años dura la carrera de Nutrición?»** → «El plan académico de la Licenciatura en Nutrición dura 8 semestres, es decir, 4 años, en modalidad presencial. Al terminarlo, realizas un año de servicio social con acompañamiento de un tutor, requisito para obtener tu título.»
  2. **«¿Qué materias se ven en la carrera de Nutrición?»** → «Cursarás materias como Nutriología, Bioquímica de la nutrición, Dietoterapia, Nutrigenómica y metabolómica, Nutrición poblacional y Políticas públicas en alimentación, entre otras, organizadas semestre por semestre.»
  3. **«¿La Licenciatura en Nutrición tiene prácticas profesionales?»** → «Sí. Desde el 5º semestre atiendes pacientes reales, supervisado por docentes, en la Clínica de Nutrición Anáhuac, a través de los Prácticum I, II y III.»
  4. **«¿Es cierto que el último año de Nutrición es servicio social?»** → «Sí. Después de tus 8 semestres académicos realizas un año de servicio social con acompañamiento de un tutor, en un hospital, clínica o institución afín. Ese año cuenta como experiencia laboral formal para tu CV y, si lo decides, puedes cursarlo en paralelo con el primer año de un posgrado dentro de la misma universidad.»
  5. **«¿Es lo mismo estudiar Nutrición que Medicina en la Anáhuac?»** → «No. Aunque ambas forman parte de la Facultad de Ciencias de la Salud, la Nutrición tiene un perfil, un plan de estudios y un campo laboral propios —enfocados en la evaluación, prevención y tratamiento nutricional— y no es una alternativa "más sencilla" a la Medicina.»
  6. **«¿En qué puedo trabajar al terminar la carrera de Nutrición?»** → «Puedes ejercer en hospitales, clínicas y consultorio propio, empresas de alimentos, instituciones deportivas, escuelas, organismos públicos de salud y proyectos de investigación y desarrollo de productos.»
  7. **«¿En qué campus se imparte Nutrición en la Anáhuac?»** → «En Campus Norte (Huixquilucan, Edo. de México) y Campus Sur (Álvaro Obregón, CDMX), ambos en modalidad presencial.»
  8. **«¿Cuánto cuesta estudiar Nutrición en la Anáhuac?»** → «Puedes calcular tu colegiatura y conocer opciones de beca en nuestro cotizador.» *(enlace a `/cotizador`)*
- **⚠️ El texto del `FAQPage` debe ser idéntico al del acordeón, sin markup dentro.**

---

## Módulo 12 — Descubre por qué ser un León Anáhuac · AIDA: Deseo (refuerzo) · **H2** · `#experiencia` *(módulo compartido — no rediseñar)*

**Componente:** `experience` de Inicio, tal cual.

- **Eyebrow:** «Mucho más que solo una Universidad.» · **H2:** «Descubre por qué ser un León Anáhuac» · **Bajada:** «Conoce por qué vivirás una experiencia universitaria única con nosotros.» · CTA: «Conoce la experiencia Anáhuac»
- **Copy de las 4 tarjetas:** el compartido del molde. **Única adaptación admitida:** mencionar **ALPHA**, el programa de liderazgo específico de Ciencias de la Salud, dentro de los 9 Programas de Liderazgo.

---

## Módulo 13 — Solicita información · AIDA: Acción · **H2** · `#solicita`

**Componente:** `lic-form` — foto vertical 4:5 + `lic-form-card`.

**⚠️ Formulario de envío de material, no de contacto con asesor. La bajada que lo declara es obligatoria y visible.**
**⚠️ El checkbox «Plan de estudios» es el único material confirmado.** Si no hay folleto, el flujo de HubSpot no debe prometerlo.

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Nutrición»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Nutrición»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
  | «Campus de preferencia» | select | «Campus Norte» · «Campus Sur» · «Sin preferencia» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Nutrición.»
- **Error (ejemplo):** «Revisa tu correo: parece que falta el @.»
- **Alt de la foto:** «Estudiante de Nutrición de la Anáhuac consultando información de la licenciatura.»
- **[PENDIENTE: conexión a HubSpot y foto real.]**

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Ciencias de la Salud › Nutrición.
- **`Course`**: `name`="Licenciatura en Nutrición" · `description`= intro de M4 · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=398.
- **`FAQPage`** (junto a M11): las 8 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre, url, direcciones de Campus Norte y Sur (M7), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px con `<label class="sr-only">`.
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M7 con botones etiquetados y dots navegables por teclado.
- Acordeón de M11 con `<details>` nativo.
- Videos con subtítulos; el del hero carga al clic, con `aria-label` descriptivo.
- Contraste AA en la banda naranja del FAQ y en las tarjetas de campus.
- La tarjeta de datos duros de M4 usa «+1»: verificar que el lector de pantalla lo anuncie como «más un año de servicio social» y no como un número suelto.

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · claim · 3 chips | video + 2 CTAs)
2  ¿Es para ti? (4 tarjetas — la 1ª separa Nutrición de Medicina + chips)
3  ¿Por qué la Anáhuac? (6 tarjetas + banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + AEO: 8 sem · 398 créditos · +1 año SS | foto)
5  Plan de estudios (8 semestres + 2 tabs de Servicio social + 3 bloques + 2 descargas)
6  Campo laboral (6 tiles + preview | banda NESTLÉ/DANONE/HERDEZ + 2 CTAs)
7  Campus Norte / Sur (2 tarjetas con slider)
8  Historias Anáhuac (compartido)
9  ¿Con quién te formas? (claustro + un solo grupo: internacional)
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (8, acordeón naranja + FAQPage; incluye servicio social y "¿es como Medicina?")
12 León Anáhuac (compartido, con ALPHA)
13 Solicita información (formulario de material)
14 Footer + Newsletter
```

# Pendientes antes de implementar

| # | Pendiente | Módulo | Prioridad | Quién lo cierra |
|---|---|---|---|---|
| 8 | Cifra de empleabilidad propia de Nutrición | M6 | 🟡 | Cliente |
| 9 | Testimonios reales con nombre y consentimiento | M8 | 🟡 | Cliente |
| 10 | Claustro docente: nombres, fotos y cargos | M9 | 🟡 | Facultad |
| 11 | Logotipos de Nestlé, Danone y Herdez con autorización de uso | M6 | 🟡 | Cliente |
| 11b | Los 17 logotipos de aliados que faltan (la UFV ya está puesta) | M9 | 🟡 | Cliente / Facultad |
| 12 | Fotos reales de la Clínica de Nutrición, laboratorios y equipo de diagnóstico | M1, M4, M7, M13 | 🟡 | Producción fotográfica |
| 13 | ID del video institucional | M1 | 🟡 | Cliente |
| 14 | Conexión del formulario a HubSpot | M13 | 🟡 | HubSpot |
