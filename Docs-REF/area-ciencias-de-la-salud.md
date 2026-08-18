# Página: Área de afinidad — Ciencias de la Salud · Anáhuac México
### Documento de handoff para diseño (estructura + copy final integrados)

> **Para el agente de diseño:** este documento es autocontenido y combina, módulo por módulo, la **arquitectura** (qué componente va, en qué orden, con qué lógica) y el **copy final** (texto literal listo para publicar). Aplica el **design system del rediseño** ya conocido (paleta naranja `#FF5900`, morado `#5D428C`, tipografías display + Roboto, componentes de tarjeta/acordeón ya definidos). No introduzcas componentes nuevos fuera de los del sistema. Todo el texto entre comillas «…» es **copy literal**. Lo marcado `[VERIFICAR CON CLIENTE]` / `[PENDIENTE]` no bloquea el diseño; se llena al integrar en HubSpot.

> **Versión:** refresh 2026-08-17, 2ª ronda de feedback de la clienta. Cambios vs. ronda anterior: hero más limpio (sin chip, sin bloque "En resumen"; CTA «Explorar licenciaturas»); módulo 3 con siglas explicadas, "internacionalización" reescrita como experiencia internacional y "interdisciplinariedad" renombrada a lenguaje simple; módulo 4 con título aspiracional; FAQ reducido a 6 (las 3 preguntas específicas de carrera se movieron a las páginas de carrera); **se fusionan el clúster y el cierre en un solo módulo** «Elige el siguiente paso» de 5 tarjetas. La página queda en **11 módulos**.

> **Nota de rol — esta página es un MOLDE.** Es la primera de las 6 áreas de afinidad. Al duplicarla se conservan los módulos y su orden; solo cambia el contenido. El grid del módulo 4 debe soportar un número **variable** de tarjetas (5 en Salud; hasta 11 en otras áreas). Para áreas con muchos programas, prever tarjeta compacta + "ver más" o filtro por interés, para no forzar scroll.

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL (nueva IA)** | `/oferta-academica/ciencias-de-la-salud` — **equivalente en producción hoy: `/facultad-salud`** (la ruta nueva da 404; contémplala en redirects 301). |
| **Tipo** | `area` — hub de área de afinidad (embudo: Oferta Académica → **Área** → Carrera) |
| **Audiencia** | Aspirante preuniversitario Gen Z/Alpha con interés en salud, ciencia y ayudar a las personas (y sus padres), que aún **no decide** cuál de las 5 licenciaturas es la suya |
| **Objetivo** | (a) confirmar afinidad; (b) **enrutar a la página de la carrera correcta — el clic a una carrera es la micro-conversión principal**; (c) dar un siguiente paso de baja fricción (agendar visita / asesor / cotizar / becas / admisión) |
| **KPI de éxito** | CTR a cada página de carrera (por tarjeta); clics en el clúster «Elige el siguiente paso» (agenda visita, asesor, cotizador, becas, admisión) |
| **Carreras que agrupa (5)** | Médico Cirujano · Cirujano Dentista · Nutrición · Terapia Física y Rehabilitación · Biotecnología |
| **Distribución por campus** *(confirmada por la clienta 2026-08-17; validar por escrito)* | **Bicampus (Norte y Sur):** Médico Cirujano, Nutrición · **Solo Campus Norte:** Cirujano Dentista, Terapia Física y Rehabilitación, Biotecnología |
| **Dato de contexto** | El área **no cuenta con folleto oficial**: fuente = levantamiento con el director de la Facultad (Dr. Salvador Bueno) y coordinadores + plan de comunicación. Lo no confirmado se marca, no se inventa. |

## 2. Reglas globales (aplican a toda la página)

- **Journey rector:** el estudiante llega explorando, sin decidir carrera. La conversión principal es el **clic a una página de carrera** (módulo 4). No hay formulario en esta página; el cierre es un menú de decisión de baja fricción (módulo 10).
- **No repetir datos entre módulos:** la red clínica y el Hospital Virtual (concepto) van **solo** en el módulo 3; las clínicas internas por nombre **solo** en el módulo 7; el campo laboral agregado **solo** en el módulo 5; costos/becas/admisión **solo** se enlazan desde el módulo 10.
- **Sin cifras institucionales presentadas como del área:** las cifras generales (17,440 estudiantes, +55,000 egresados en la Red, FIMPES) son de la Universidad/Red, no de Ciencias de la Salud; por eso se retiraron de esta página. Si el cliente entrega cifras propias del área (alumnos/egresados/empleabilidad), se pueden incorporar.
- **Precisión de campus:** nunca afirmar que "todas son bicampus" — solo Medicina y Nutrición lo son. Reflejarlo en módulos 4, 6 y 9.
- **Tono:** segunda persona («tú»), storytelling emocional pero escaneable. Matizar "ayudar a la gente" con esfuerzo/compromiso/disciplina (recomendación del levantamiento). Evitar tecnicismos y siglas sin explicar.
- **Copy 100% atemporal:** nunca hardcodear un año/ciclo.
- **Media 100% real:** Hospital Virtual, clínicas internas, testimonios y vida estudiantil — banco real, nunca stock. No bloquear el LCP con el video del hero (lazy-load; PageSpeed móvil actual = 35).
- **Un CTA primario por módulo.** Jerarquía oficial: Agenda tu visita ▸ Solicita información ▸ Habla con un asesor ▸ Inicia tu admisión ▸ Cotizador.

## 3. Metadatos SEO / AEO

- **Title tag (54 car.):** «Licenciaturas en Ciencias de la Salud | Anáhuac México»
- **Meta description (157 car.):** «Descubre las 5 licenciaturas de Ciencias de la Salud en la Anáhuac México: Medicina, Odontología, Nutrición, Fisioterapia y Biotecnología. Encuentra la tuya.»
- **Keyword principal:** `licenciaturas en ciencias de la salud` / `carreras de ciencias de la salud anáhuac` — **provisional, no validada por volumen** (URL de área no mapeada en SEMrush). `[VERIFICAR CON CLIENTE]`
- **Secundarias:** `facultad de ciencias de la salud anahuac`, `carreras de la salud cdmx`, `carreras de la salud universidad anahuac mexico`, `que carreras hay en ciencias de la salud anahuac`
- **Cola larga AEO:** `cuántas licenciaturas tiene ciencias de la salud en la anáhuac`, `en qué campus se estudia medicina en la anáhuac`, `diferencia entre medicina y biotecnología anáhuac`, `qué carreras de la salud tienen prácticas clínicas anáhuac`, `trabajo interdisciplinario ciencias de la salud anáhuac`
- **Open Graph:**
  - `og:title`: «Licenciaturas en Ciencias de la Salud | Universidad Anáhuac México»
  - `og:description`: «5 licenciaturas, un mismo propósito: cuidar y transformar la salud de las personas. Conoce Medicina, Odontología, Nutrición, Fisioterapia y Biotecnología.»
  - `og:image alt`: «Estudiantes de la Facultad de Ciencias de la Salud de la Universidad Anáhuac México en prácticas clínicas»
- **Enlazado interno (anclas hacia keywords validadas de las carreras hijas):** `licenciatura en medicina` → /licenciaturas/medicina · `cirujano dentista` → /licenciaturas/cirujano-dentista · `licenciatura en nutrición` → /licenciaturas/nutricion · `terapia física y rehabilitación` → /licenciaturas/terapia-fisica-y-rehabilitacion · `biotecnología carrera` → /licenciaturas/biotecnologia
- **Schema:** `BreadcrumbList` · `ItemList` (5 `Course`, módulo 4) · `FAQPage` (módulo 9, 6 preguntas) · `CollegeOrUniversity` como `provider`. Sin schema de formulario. Detalle en §Datos estructurados.

## 4. Mapa de encabezados (jerarquía semántica)

- **H1** — «Licenciaturas en Ciencias de la Salud» (módulo 1) · claim no-heading: «Conviértete en quien cuida y transforma la salud de las personas.»
  - **H2** — «¿Te interesa comprender cómo funciona el cuerpo humano?» (módulo 2)
  - **H2** — «Por qué elegir Ciencias de la Salud en la Universidad Anáhuac México» (módulo 3) → 6× H3
  - **H2** — «Encuentra la carrera que va contigo» (módulo 4) → 5× H3
  - **H2** — «Campo laboral: hacia dónde te puede llevar Ciencias de la Salud» (módulo 5) → 6× H3
  - **H2** — «Instalaciones y campus de la Facultad de Ciencias de la Salud» (módulo 6) → 2× H3
  - **H2** — «Clínicas universitarias internas» (módulo 7) → 3× H3
  - **H2** — «Historias Anáhuac» (módulo 8)
  - **H2** — «Preguntas frecuentes sobre Ciencias de la Salud» (módulo 9) → 6× H3
  - **H2** — «Elige el siguiente paso» (módulo 10) → H3 por tarjeta
  - Footer (módulo 11): sin H2

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · Encabezado: **H1**

**Objetivo:** enganchar en los primeros 8 segundos con una promesa aspiracional y exponer los CTAs sin scroll.

**Especificación de diseño:**
- Patrón de hero aprobado (eyebrow + H1 + claim + hasta 2 CTAs). El **claim** lleva el tratamiento tipográfico grande.
- Video/imagen real (Hospital Virtual o vida estudiantil) en lazy-load; no bloquear el LCP.
- Sin chips y sin bloque "En resumen" (se retiraron para un hero más limpio).

**Copy final:**
- Breadcrumb: «Inicio > Oferta Académica > Ciencias de la Salud»
- Eyebrow: «Área académica»
- **H1:** «Licenciaturas en Ciencias de la Salud»
- Claim (dominante): «Conviértete en quien cuida y transforma la salud de las personas.»
- **CTA:** primario «Agenda tu visita» `[VERIFICAR CON CLIENTE: URL destino]` | secundario «Explorar licenciaturas» → ancla al módulo 4

**Alt text media:** «Hospital Virtual de la Facultad de Ciencias de la Salud, Universidad Anáhuac México, edificio de simulación en construcción» (o «Estudiantes de la Facultad de Ciencias de la Salud de la Universidad Anáhuac México en prácticas clínicas»).

---

## Módulo 2 — ¿Te interesa comprender cómo funciona el cuerpo humano? · AIDA: Interés · Encabezado: **H2**

**Objetivo:** ayudar al aspirante a autoconfirmar afinidad con el área y manejar expectativas sobre el esfuerzo que implica. *(Aquí vive la pregunta detonante aprobada.)*

**Especificación de diseño:** bloque escaneable con íconos, en segunda persona; sin nombrar carreras todavía.

**Copy final:**
- **H2:** «¿Te interesa comprender cómo funciona el cuerpo humano?»
- Intro: «Este es tu punto de partida si:»
- «**Te apasionan la biología, la química o las ciencias de la vida.**»
- «**Quieres ayudar a las personas** — y sabes que eso va más allá de tener buenas intenciones: exige esfuerzo, compromiso y disciplina todos los días.»
- «**Te motiva trabajar en equipo**, dentro de un hospital, una clínica o un laboratorio.»
- «**Te llama la investigación y la innovación en salud**, tanto como el contacto directo con las personas.»
- Cierre: «Si te identificas con al menos dos de estos puntos, sigue leyendo: una de las 5 licenciaturas de Ciencias de la Salud de la Anáhuac México puede ser la tuya.»
- **CTA:** N/A.

**Alt text media (si aplica):** «Estudiantes de Ciencias de la Salud de la Universidad Anáhuac México trabajando en equipo en laboratorio».

---

## Módulo 3 — Por qué elegir Ciencias de la Salud en la Anáhuac · AIDA: Interés · Encabezado: **H2** + 6× H3

**Objetivo:** presentar los diferenciadores **transversales** de la Facultad. Diferenciadores conceptuales (las clínicas físicas por nombre van en el módulo 7).

**Especificación de diseño:** 6 tarjetas de diferenciador (H3 c/u). Distinguir el punto de Programa Investiga como "dato en verificación". *(Sin barra de cifras institucionales: se retiró — ver Reglas globales.)*

**Copy final:**
- **H2:** «Por qué elegir Ciencias de la Salud en la Universidad Anáhuac México»
- **H3 — Red clínica amplia:** «Más de 350 sitios y campos clínicos, y convenios con más de 53 hospitales en 8 estados: practicas con pacientes reales desde temprano.»
- **H3 — Hospital Virtual:** «Edificio de simulación de 5 pisos (en construcción): consultorios, quirófanos, realidad virtual, robots y actores estandarizados, para todas las carreras del área.»
- **H3 — Programa Investiga:** «Te involucras en investigación real desde los primeros semestres, con protocolos, publicaciones y congresos.» `[VERIFICAR CON CLIENTE: claim "universidad que más publicó con alumnos este año"]`
- **H3 — Certificaciones internacionales:** «La Universidad Anáhuac México es centro certificado por la American Heart Association (AHA): cursos de reanimación BLS (soporte vital básico) y ACLS (soporte vital cardiovascular avanzado). En Medicina se aplica además el IFOM, examen internacional de conocimientos médicos.»
- **H3 — Experiencia internacional:** «Puedes hacer estancias, intercambios y rotaciones clínicas en el extranjero: hoy hay estudiantes de la Facultad en Venezuela, Francia, Estados Unidos, Alemania y España (sobre todo en Medicina), apoyados en los convenios de la Red Anáhuac.»
- **H3 — Aprendes en equipo con otras carreras de la salud:** «Desde el salón compartes materias —como Anatomía— con estudiantes de otras carreras de la salud, para aprender a atender a un paciente en equipo, con la mirada de varias profesiones y no solo la tuya.»
- *(Sin barra de cifras: se retiró por instrucción de la clienta — las cifras 17,440 / +55,000 / FIMPES son institucionales/de la Red, no del área, y sin dato propio de Ciencias de la Salud no se incluyen para no confundir.)*
- **CTA:** N/A.

**Alt text media:** «Interior del Hospital Virtual en construcción, Facultad de Ciencias de la Salud, Universidad Anáhuac México» / «Estudiantes de Medicina en un curso de certificación de la American Heart Association en la Universidad Anáhuac México».

---

## Módulo 4 — Encuentra la carrera que va contigo · AIDA: Deseo · Encabezado: **H2** + 5× H3 · *núcleo de enrutamiento (micro-conversión principal)*

**Objetivo:** función central — ayudar al aspirante a identificarse con una carrera y enrutarlo a su página. **Cada clic es la micro-conversión principal.**

**Especificación de diseño:**
- Grid responsivo (soporta número variable de tarjetas para el molde; para áreas con 9-11 programas, prever "ver más"/filtro). Imagen/video real por carrera.
- Cada tarjeta: nombre (H3) + gancho + **chip de dato distintivo** + **indicador de campus** + CTA. **NO** campo laboral.
- `aria-label` único por tarjeta.

**Copy final:**
- **H2:** «Encuentra la carrera que va contigo»
- Línea de apoyo: «Explora las 5 licenciaturas de Ciencias de la Salud de la Anáhuac México y descubre cuál es la tuya.»

1. **H3 — Médico Cirujano** — Gancho: «Si tu vocación es transformar vidas y tu pasión es la ciencia.» · Chip: «Alto interés por la especialización — muchos egresados la cursan en el extranjero.» · **Campus: Bicampus (Norte y Sur)** · CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Médico Cirujano») → `/licenciaturas/medicina`
2. **H3 — Cirujano Dentista** — Gancho: «Te gusta lo práctico y manual, y buscas independencia profesional desde temprano.» · Chip: «Primer contacto con pacientes desde 2º semestre · 28% de descuento en instrumental y material dental (convenio con el depósito dental más grande de México).» · **Campus: Campus Norte** · CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Cirujano Dentista») → `/licenciaturas/cirujano-dentista`
3. **H3 — Nutrición** — Gancho: «Quieres ayudar a las personas a través de la alimentación y el bienestar, con visión de emprendimiento.» · Chip: «Tu último año es de servicio social con acompañamiento — cuenta como experiencia laboral real, y puedes cursar en paralelo el 1er año de posgrado.» · **Campus: Bicampus (Norte y Sur)** · CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Nutrición») → `/licenciaturas/nutricion`
4. **H3 — Terapia Física y Rehabilitación** — Gancho: «Te motiva acompañar la recuperación física de las personas.» · Chip: «Verás pacientes reales desde 4º semestre, con exposición a oncología y fisioterapia deportiva.» · **Campus: Campus Norte** · CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Terapia Física y Rehabilitación») → `/licenciaturas/terapia-fisica-y-rehabilitacion`
5. **H3 — Biotecnología** — Gancho: «Te apasiona la ciencia y la investigación biomédica, más allá del consultorio clínico.» · Chip: «Cátedras con farmacéuticas (Opella, Roche, Novo Nordisk) y proyectos de investigación ligados a tu titulación.» `[VERIFICAR: ortografía]` · **Campus: Campus Norte** · CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Biotecnología») → `/licenciaturas/biotecnologia`

**Alt text media (por tarjeta):**
- «Estudiante de Médico Cirujano de la Universidad Anáhuac México en rotación clínica»
- «Estudiante de Cirujano Dentista atendiendo a un paciente en la clínica dental universitaria, Anáhuac México»
- «Estudiante de Nutrición de la Universidad Anáhuac México en consulta en la Clínica de Nutrición Anáhuac»
- «Estudiante de Terapia Física y Rehabilitación trabajando con un paciente en la clínica universitaria, Anáhuac México»
- «Estudiante de Biotecnología de la Universidad Anáhuac México en laboratorio de investigación»

**Nota:** distribución de campus confirmada por la clienta (validar por escrito). Las 5 rutas `/licenciaturas/{carrera}` están confirmadas en vivo; pendiente confirmar redirects 301.

---

## Módulo 5 — Campo laboral: hacia dónde te puede llevar Ciencias de la Salud · AIDA: Deseo · Encabezado: **H2** + 6× H3

**Objetivo:** resolver la objeción de los padres ("¿de qué van a trabajar?") mostrando la amplitud de salidas del área **en conjunto**, sin repetir el detalle por carrera.

**Especificación de diseño:** mosaico por ámbito con iconografía; nota breve que enlaza al módulo 4.

**Copy final:**
- **H2:** «Campo laboral: hacia dónde te puede llevar Ciencias de la Salud»
- Intro: «Estudiar una licenciatura de Ciencias de la Salud en la Anáhuac México te abre múltiples caminos profesionales — no solo el consultorio o el hospital.»
- **H3 — Hospitales, clínicas e instituciones de salud**
- **H3 — Consultorio propio / clínica particular** — «aplica en Medicina, Odontología, Nutrición y Terapia Física y Rehabilitación (no en Biotecnología, orientada a investigación e industria).»
- **H3 — Industria farmacéutica, alimentaria, dental y biotecnológica**
- **H3 — Investigación y academia**
- **H3 — Salud pública y gobierno**
- **H3 — Instituciones deportivas y de rehabilitación**
- Nota: «Conoce el detalle de campo laboral de cada licenciatura en su página» → enlaza al módulo 4.
- *(Se retiró la cifra "70% de empleabilidad" por instrucción de la clienta.)*
- **CTA:** primario «Inicia tu admisión» → `/admision-general` | secundario «Explorar licenciaturas» → ancla al módulo 4

**Alt text media:** «Egresada de Ciencias de la Salud de la Universidad Anáhuac México trabajando en un hospital».

---

## Módulo 6 — Instalaciones y campus (Norte y Sur) · AIDA: Deseo · Encabezado: **H2** + 2× H3

**Objetivo:** reforzar el atractivo tangible del campus físico y aclarar en qué campus se imparte cada carrera.

**Especificación de diseño:** distribución de campus como mini-tarjetas o tabla comparativa; fotografía real de cada campus.

**Copy final:**
- **H2:** «Instalaciones y campus de la Facultad de Ciencias de la Salud»
- **H3 — Campus Norte:** «Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Edo. Méx. Aquí se imparten las 5 licenciaturas del área: Médico Cirujano, Cirujano Dentista, Nutrición, Terapia Física y Rehabilitación, y Biotecnología.»
- **H3 — Campus Sur:** «Av. de los Tanques 865, Col. Torres de Potrero, Álvaro Obregón, CDMX. Aquí se imparten Médico Cirujano y Nutrición.»
- Línea de apoyo: «Transporte intercampus gratuito · 38 hectáreas de instalaciones de la Red Anáhuac.»
- Cierre: «Laboratorios actualizados, con equipo estandarizado y bien cuidado — un diferenciador que los propios estudiantes valoran al comparar con otras instituciones.»
- **CTA:** secundario «Conoce el campus» → `/campus-norte-anahuac-mexico` o `/campus-sur-anahuac-mexico`

**Alt text media:** «Fachada del Campus Norte de la Universidad Anáhuac México, Huixquilucan» / «Fachada del Campus Sur de la Universidad Anáhuac México, Álvaro Obregón».

`[VERIFICAR CON CLIENTE: distribución de campus confirmada verbalmente 2026-08-17 — validar por escrito]`

---

## Módulo 7 — Clínicas universitarias internas · AIDA: Deseo · Encabezado: **H2** + 3× H3

**Objetivo:** destacar un diferenciador tangible y único del área — las clínicas propias donde los estudiantes atienden pacientes reales de forma interdisciplinaria.

**Especificación de diseño:** módulo con peso visual propio; **fotografía real de cada clínica** (no stock). Grid de 3 tarjetas con foto + el bloque de trabajo en equipo destacado.

**Copy final:**
- **H2:** «Clínicas universitarias internas»
- Intro: «Aquí no solo aprendes cómo se atiende a un paciente: lo haces tú, dentro de las clínicas propias de la Facultad.»
- **H3 — Clínica de Nutrición Anáhuac:** «los propios estudiantes de Nutrición atienden pacientes reales, con acompañamiento de tutores.»
- **H3 — Clínica universitaria de Fisioterapia:** «electroterapia, ultrasonido, láser y entrenamiento funcional, dentro del campus.»
- **H3 — Clínica dental universitaria:** «consultorios de Odontología donde los estudiantes atienden a su primer paciente desde etapas tempranas de la carrera, además del servicio médico de la Facultad.»
- Bloque destacado: «Gracias a estas clínicas internas, un mismo paciente puede ser atendido por varios de estos servicios a la vez — la Facultad está desarrollando un sistema de historias clínicas compartidas entre las áreas, para que los equipos trabajen de forma coordinada. Es el mismo trabajo en equipo entre carreras que se aprende desde el salón, llevado a la práctica clínica real.»
- **CTA:** N/A.

**Alt text media:** «Clínica de Nutrición Anáhuac, Facultad de Ciencias de la Salud, Universidad Anáhuac México» / «Clínica universitaria de Fisioterapia, Universidad Anáhuac México, estudiante en sesión de electroterapia» / «Clínica dental universitaria, Facultad de Ciencias de la Salud, Universidad Anáhuac México, estudiante atendiendo a un paciente».

`[PENDIENTE: banco de fotografía/video real de las 3 clínicas internas — Fase 1 de fotografía]`

---

## Módulo 8 — Historias Anáhuac *(módulo compartido, solo testimonios)* · AIDA: Deseo · Encabezado: **H2**

**Objetivo:** prueba social — vida estudiantil real y storytelling de transformación. Se reutiliza el carrusel aprobado en Inicio/Oferta Académica/Admisión (no crear variante).

**Especificación de diseño:** carrusel de testimonios (foto + cita + datos del egresado), priorizando perfiles del área. *(Sin cifras institucionales: se retiraron de la página por no ser específicas del área.)*

**Copy final:**
- **H2:** «Historias Anáhuac»
- **Candidatos reales de testimonio** (a producir con cita + foto + video):
  - **Dr. Emmanuel Urquieta Ordóñez** — egresado de Médico Cirujano (gen. '12), miembro de la tripulación de la misión HERA en el NASA Johnson Space Center.
  - **Daniela Cueva** — egresada de Terapia Física y Rehabilitación, fisioterapeuta de la selección mexicana de gimnasia artística (Campeonato Mundial de Stuttgart 2019).
  - **María Artes** — egresada de Terapia Física y Rehabilitación, jefa del departamento de Fisioterapia de la Escuela Nacional de Danza Clásica y Contemporánea a los 23 años.
- **CTA:** N/A.

**Alt text media:** «Dr. Emmanuel Urquieta Ordóñez, egresado de Médico Cirujano de la Universidad Anáhuac México, miembro de la misión HERA de la NASA» (y equivalente por testimonio).

`[PENDIENTE: producir cita + foto + video de los 3 perfiles + sumar un perfil de Odontología, Nutrición o Biotecnología]`

---

## Módulo 9 — Preguntas frecuentes sobre Ciencias de la Salud · AIDA: Acción · Encabezado: **H2** + 6× H3

**Objetivo:** resolver objeciones de enrutamiento a nivel de área y capturar tráfico AEO. *(Las 3 preguntas específicas de una sola carrera —inversión en instrumental dental, servicio social de Nutrición, especialización en el extranjero de Medicina— se movieron a las páginas de carrera correspondientes.)*

**Especificación de diseño:** acordeón nativo `<details>`/`<summary>`; 1ª pregunta abierta. Marcar con `schema.org/FAQPage`. Respuestas autocontenidas.

**Copy final (6 preguntas — respuesta directa primero):**

1. **¿Cuántas licenciaturas tiene el área de Ciencias de la Salud en la Anáhuac?** *(abierta por default)*
   «La Facultad de Ciencias de la Salud de la Universidad Anáhuac México ofrece 5 licenciaturas: Médico Cirujano, Cirujano Dentista, Nutrición, Terapia Física y Rehabilitación, y Biotecnología.»
2. **¿En qué campus se imparten las licenciaturas de Ciencias de la Salud?**
   «Médico Cirujano y Nutrición se cursan en modalidad bicampus, en Campus Norte y Campus Sur; Cirujano Dentista, Terapia Física y Rehabilitación, y Biotecnología se cursan únicamente en Campus Norte.» `[VERIFICAR CON CLIENTE: validar por escrito]`
3. **¿Cuál es la diferencia entre Medicina y Biotecnología en la Anáhuac?**
   «La Licenciatura en Médico Cirujano de la Universidad Anáhuac México es una carrera clínica: forma médicos que diagnostican y tratan pacientes. La Licenciatura en Biotecnología es una carrera científica y de investigación biomédica, sin práctica clínica directa con pacientes.»
4. **¿Todas las carreras de Ciencias de la Salud tienen prácticas clínicas?**
   «La mayoría sí: en Cirujano Dentista los estudiantes atienden a su primer paciente desde 2º semestre, y en Terapia Física y Rehabilitación desde 4º semestre; Medicina y Nutrición también incluyen práctica clínica supervisada. Biotecnología no tiene práctica clínica: su servicio social está orientado a investigación.»
5. **¿Cuánto cuesta estudiar una licenciatura de Ciencias de la Salud en la Anáhuac?**
   «El costo varía por licenciatura y periodo; usa el cotizador de la Universidad Anáhuac México para obtener el desglose exacto de tu carrera de interés.» → enlaza a `/cotizador`
6. **No sé cuál de estas 5 carreras elegir, ¿qué hago?**
   «Puedes hablar directamente con un asesor preuniversitario de la Universidad Anáhuac México, quien te ayuda a comparar las 5 licenciaturas de Ciencias de la Salud según tu perfil e intereses.» → enlaza al módulo 10 («Habla con un asesor»).

---

## Módulo 10 — Elige el siguiente paso *(clúster único de 5 tarjetas)* · AIDA: Acción · Encabezado: **H2** + H3 por tarjeta

**Objetivo:** único bloque de cierre — un menú de decisión que cubre tanto al que explora (agenda visita, asesor) como al que ya va más avanzado (cotiza, becas, admisión). Sustituye al antiguo clúster de 4 tarjetas **y** al módulo de cierre de asesor (se fusionaron por decisión de la clienta; no hay formulario en esta página).

**Especificación de diseño:**
- Componente de tarjetas de decisión ya aprobado. Grid de 5 tarjetas (3+2 en desktop, apiladas en móvil), ícono + texto breve + CTA. **Encabezado cálido** y **orden por nivel de intención**: primero las suaves (visita, asesor), luego las transaccionales.
- La 1ª tarjeta (Agenda una visita) puede llevar el CTA primario destacado; el resto, secundarios.
- `aria-label` diferenciado en cada CTA (varios comparten verbo "Agenda"/"Conoce").

**Copy final:**
- **H2:** «Elige el siguiente paso»
- Subtítulo: «Estés donde estés en tu decisión, aquí tienes por dónde seguir.»
- **Tarjeta 1 (H3) — Agenda una visita:** «Conoce el campus, las instalaciones y a la comunidad en persona.» → `[VERIFICAR CON CLIENTE: URL destino]`
- **Tarjeta 2 (H3) — Habla con un asesor:** «Resuelve tus dudas y compara las 5 licenciaturas con un asesor preuniversitario.» → `[VERIFICAR CON CLIENTE: enrutamiento del asesor — ¿del área o genérico del Home?]`
- **Tarjeta 3 (H3) — Cotiza tu carrera:** «Calcula el costo de tu licenciatura y conoce tus opciones de pago.» → `/cotizador`
- **Tarjeta 4 (H3) — Conoce las becas y apoyos:** «Descubre los apoyos económicos disponibles para tu ingreso.» → `/apoyos-educativos-universidad-anahuac-mexico`
- **Tarjeta 5 (H3) — Inicia tu admisión:** «Comienza tu proceso 100% en línea, en 6 pasos.» → `/admision-general`

**Íconos de referencia (maqueta):** 📅 💬 🧮 🎓 🚀 (sustituibles por ilustración del sistema).

---

## Módulo 11 — Footer con Newsletter integrado · Encabezado: sin H2

**Copy final:**
- Enlaces a las 5 licenciaturas del área (anchor = nombre completo): `/licenciaturas/medicina` · `/licenciaturas/cirujano-dentista` · `/licenciaturas/nutricion` · `/licenciaturas/terapia-fisica-y-rehabilitacion` · `/licenciaturas/biotecnologia`; más navegación cruzada a las demás áreas de afinidad.
- Datos legales/institucionales:
  - «Campus Norte · Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Edo. Méx. · +52 (55) 5627 0210»
  - «Campus Sur · Av. de los Tanques 865, Col. Torres de Potrero, Álvaro Obregón, CDMX · +52 (55) 5628 8800»
  - RVOE SEP D.O.F. 26/11/1982 · Aviso de Privacidad · redes (Vida Anáhuac / Preuniversitario / @vidanahuac) · `preuniversitarios@anahuac.mx` · mapa del sitio
  - «© Universidad Anáhuac México. Todos los derechos reservados.»
- **Newsletter:** título «Recibe noticias de la Universidad Anáhuac México»; campo de correo (placeholder «tucorreo@ejemplo.com»); botón «Suscríbete»; legal «Al suscribirte aceptas nuestro Aviso de Privacidad.»
  - Éxito: «¡Gracias por suscribirte! Ya formas parte de nuestra comunidad.» · Error: «No pudimos procesar tu suscripción. Intenta de nuevo.»

`[VERIFICAR CON CLIENTE: texto de valor y frecuencia de envío del Newsletter]`

---

# Datos estructurados (guía JSON-LD)

- **`BreadcrumbList`:** Inicio (`/`) > Oferta Académica (`/oferta-academica` o equivalente vivo) > Ciencias de la Salud (URL de esta página).
- **`ItemList`** (módulo 4): 5 `ListItem`, cada uno con un `item` de tipo `Course` → `name`, `url` (`/licenciaturas/{carrera}`), `description` (gancho), `provider` (referencia al `CollegeOrUniversity`). Extensión sugerida para campus (Norte/Sur/Bicampus).
- **`FAQPage`** (módulo 9): un `Question`/`acceptedAnswer` por cada una de las **6** preguntas.
- **`CollegeOrUniversity`** como `provider`: `name` "Universidad Anáhuac México"; `address` con Campus Norte y Sur; `sameAs` con los perfiles sociales oficiales.
- **Sin** schema de formulario/lead (el formulario se eliminó; el cierre es un clúster de navegación).

---

# Accesibilidad (WCAG 2.1 AA)

- Alt text descriptivo en todas las fotos/videos. Videos (hero, Historias, Hospital Virtual) con subtítulos y transcripción.
- Contraste AA en tarjetas, chips y acordeones; evitar texto naranja sobre blanco puro para cuerpo extenso.
- Las 5 tarjetas del módulo 4 usan el mismo CTA visible («Conoce la carrera») con `aria-label` que incluye el nombre de la carrera. No depender solo del color para diferenciar tarjetas, chips ni indicador de campus.
- En el módulo 10, `aria-label` diferenciado por tarjeta aunque compartan verbo.
- Foco visible por teclado en tarjetas, acordeón de FAQ y CTAs. Acordeón (módulo 9) con `aria-expanded` correcto.
- Newsletter (footer) con `label` explícito y mensajes de error accesibles.

---

# Pendientes (no bloquean el diseño)

- **Distribución de campus por carrera** — confirmada verbalmente por la clienta (2026-08-17); validar por escrito. Afecta módulos 4, 6 y 9.
- **URL final del hub de área** — `/oferta-academica/ciencias-de-la-salud` vs. `/facultad-salud`; definir redirect 301.
- **Redirects 301** desde rutas planas antiguas (`/medicina`, etc.) → `/licenciaturas/{carrera}`.
- **URL destino de "Agenda tu visita" / "Agenda una visita"** (hero y módulo 10) — confirmar destino.
- **Enrutamiento de "Habla con un asesor"** (módulo 10) — ¿asesor del área o genérico del Home?
- **Keyword principal real** del área (no mapeada en SEMrush).
- **6 u 8 áreas de afinidad** finales (afecta navegación cruzada del footer).
- **RVOE y duración por carrera** (para páginas de carrera; el sitio vivo sugiere 12 semestres para Medicina).
- **Claim** "universidad que más publicó con alumnos este año" (Programa Investiga).
- **Ortografía** de convenios farmacéuticos (Opella / Roche / Novo Nordisk).
- **Testimonios reales** (producir cita + foto + video de los 3 perfiles + sumar Odontología/Nutrición/Biotecnología).
- **Banco fotográfico/video real** del Hospital Virtual, las 3 clínicas internas y vida estudiantil por carrera.
- **Newsletter:** texto de valor y frecuencia de envío.

---

# Fuentes
- `estructuras/area-ciencias-de-la-salud.md` (arquitectura, refresh 2ª ronda 2026-08-17)
- `textos/area-ciencias-de-la-salud.md` (copy final SEO/AEO + auditoría)
- `maquetas/area-ciencias-de-la-salud.html` (referencia visual navegable)
- `docs/base-conocimiento-anahuac.md` · `docs/insumos-extraidos/02-marca-y-seo.md`
- `docs/insumos-extraidos/primarias/salud-levantamiento.md` (entrevista Dr. Salvador Bueno y coordinadores, dic. 2025)
- `docs/insumos-extraidos/primarias/salud-plancom.md` (plan de comunicación del área, mar. 2026)
- Feedback directo de la clienta (Daniela), sesiones de revisión 2026-08-17
- Verificación en vivo (17-ago-2026): `mexico.anahuac.mx/facultad-salud` y las 5 páginas `/licenciaturas/{carrera}`
