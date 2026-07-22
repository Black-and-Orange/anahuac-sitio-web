## **Página Licenciatura**

## Ficha

* Tipo: carrera · URL real/sugerida: /psicologia · Prioridad: 1  
* Objetivo principal: convertir el interés del aspirante en Psicología (y de sus padres) en un envío del formulario "Solicita información", entendido como solicitud de más material sobre la licenciatura (no como solicitud de contacto por un asesor).  
* Audiencia: aspirantes preuniversitarios Gen Z/Alpha del área de afinidad "Ciencias Sociales y Derecho" (interés en entender a las personas / ayudar) y sus padres, que buscan validar seriedad académica, campo laboral y prestigio institucional.  
* KPI de éxito: envíos del formulario "Solicita información"; clics en el clúster "Elige el siguiente paso" (cotizador, becas, admisión, asesor); descargas del plan de estudios/folleto; clics al RVOE desde el hero.

## Arquitectura general (índice de módulos)

1. Hero — "Escucha. Entiende. Ayuda." — \[AIDA: Atención\]  
2. ¿Te interesa entender a las personas y ayudarlas a crecer? — \[AIDA: Interés\]  
3. Por qué estudiar Psicología en la Anáhuac — \[AIDA: Interés\]  
4. Perfil de egreso y plan de estudios — \[AIDA: Interés\]  
5. Campo laboral: dónde puedes ejercer — \[AIDA: Deseo\]  
6. Instalaciones y campus (Norte y Sur) — \[AIDA: Deseo\]  
7. Historias Anáhuac *(módulo compartido)* — \[AIDA: Deseo\]  
8. Colaboradores y docencia — \[AIDA: Deseo, secundaria\]  
9. Elige el siguiente paso *(módulo de decisiones)* — \[AIDA: Acción\]  
10. Preguntas frecuentes sobre Psicología — \[AIDA: Acción\]  
11. Descubre por qué ser un León Anáhuac — \[AIDA: Deseo, refuerzo previo al cierre\]  
12. Solicita información *(formulario dedicado — envío de material)* — \[AIDA: Acción\]  
13. Footer *(módulo compartido, incluye suscripción a Newsletter)* — N/A

## Detalle por módulo

### 1\. Hero — "Escucha. Entiende. Ayuda." · \[AIDA: Atención\]

* Objetivo: enganchar en los primeros 8 segundos con storytelling emocional ("quién puedes llegar a ser") y exponer los CTAs principales sin necesidad de scroll.  
* Contenido:  
  * H1 con keyword principal real: "Licenciatura en Psicología".  
  * Eyebrow: Ciencias Sociales y Derecho.  
  * Subtítulo: claim oficial de la carrera "Escucha. Entiende. Ayuda."  
  * Video corto (autoplay muteado, no bloqueante) o imagen real de alumnos en práctica/facultad.  
  * Chips informativos: 8 semestres · Modalidad presencial · Bicampus (Norte y Sur) · RVOE SEP D.O.F. 26/11/1982 (chip-enlace, clickeable → documento del RVOE).  
  * Breadcrumb: Inicio \> Oferta Académica \> Ciencias Sociales y Derecho \> Psicología.  
* Notas de diseño: video en lazy-load, no debe bloquear el LCP (PageSpeed móvil actual \= 35). Texto breve, máx. 2 líneas de propuesta de valor. El chip de RVOE debe distinguirse visualmente de los demás chips (indicador de enlace, ej. ícono de documento/flecha) para comunicar que es interactivo, sin perder la consistencia visual del set de chips. Consistente con el patrón de hero aprobado (eyebrow \+ H1 \+ texto breve \+ hasta 2 CTAs).  
* CTA: primario "Solicitar información" → ancla al módulo 12 (formulario dedicado) | secundario "Explorar licenciatura" → ancla al módulo 4 (plan de estudios).

### 2\. ¿Te interesa entender a las personas y ayudarlas a crecer? · \[AIDA: Interés\]

* Objetivo: texto detonante de afinidad (patrón del sitio) para que el aspirante se identifique con el perfil de la carrera antes de seguir leyendo.  
* Contenido: pregunta detonante \+ 3–4 rasgos de interés (ej. "te interesa por qué las personas piensan y actúan como lo hacen", "quieres acompañar procesos de bienestar emocional", "te llama la investigación del comportamiento humano"). Enfoque de la carrera: psicología integral, abierta a diversos enfoques (psicodinámico, humanista, cognitivo-conductual, sistémico) y áreas (clínica, neuropsicología, organizacional y educativa); formación humana, científica, ética y centrada en la persona.  
* Notas de diseño: tono cercano en segunda persona ("tú"). Bloque escaneable con íconos, no párrafos largos; consistente con el patrón "¿Te interesa…?" de Oferta Académica.  
* CTA: N/A — módulo de identificación, sin CTA propio (evita competir con el hero).

### 3\. Por qué estudiar Psicología en la Anáhuac · \[AIDA: Interés\]

* Objetivo: presentar diferenciadores concretos de la Facultad de Psicología, incluyendo la narrativa de prácticas tempranas (no como módulo separado), resolviendo "¿por qué aquí y no en otra universidad?".  
* Contenido: tarjetas de diferenciadores:  
  1. Prácticas profesionales desde el primer semestre — formación aplicada desde el arranque de la carrera, no solo teórica (mensaje breve; el detalle de convenios/instituciones vive únicamente en el módulo 8, no se repite aquí).  
  2. Especialización en clínica, neuropsicología, organizacional y educativa.  
  3. Acceso a pruebas psicológicas y talleres de evaluación (inteligencia, personalidad, infantil, adolescentes y adultos).  
  4. Acreditaciones CNEIP y FIMPES ("Lisa y Llana").  
  5. Proyectos de investigación.  
  6. Materias regionales de especialización: Psicología Positiva, Psicología Forense, Adicciones. Dato de plan: 375 créditos totales (Profesional 279 \+ Anáhuac 54 \+ Interdisciplinario 42), Modelo 2025\.  
* Notas de diseño: tarjetas interactivas con microinteracciones (no bloques de texto plano). La tarjeta de "prácticas desde el primer semestre" puede incluir un ícono/CTA textual tipo "Conoce con quién" que ancle al módulo 8, para dar continuidad sin repetir el listado de convenios.  
* CTA: N/A.

### 4\. Perfil de egreso y plan de estudios · \[AIDA: Interés\]

* Objetivo: ayudar al aspirante y a sus padres a visualizar la competencia profesional concreta que obtendrá, responder de forma directa (AEO) las preguntas de mayor volumen de búsqueda ("plan de estudios psicología", "materias de psicología", "cuántos años dura la carrera de psicología"), y ofrecer la descarga de los documentos clave de la carrera en el contexto donde tienen más sentido.  
* Contenido:  
  * Perfil de egreso oficial en lista escaneable: seleccionar y aplicar métodos, técnicas e instrumentos para evaluación, diagnóstico, intervención e investigación en los distintos ámbitos de la psicología; promover el bienestar integral de individuos y grupos respetando la dignidad de la persona.  
  * Bloque de respuesta directa (AEO): "La Licenciatura en Psicología dura 8 semestres (Modelo 2025), con 375 créditos totales."  
  * Acordeón/tabs por bloque de materias (H3 por bloque):  
    * *Fundamentos:* Introducción a la psicología, Bases biológicas del comportamiento, Desarrollo (infancia/adolescencia/adultez), Psicología social, Sensación y percepción, Aprendizaje y memoria, Cognición motivación y emoción, Neuropsicología.  
    * *Métodos/investigación:* Métodos de investigación en ciencias sociales, Estadística descriptiva e inferencial, Teoría y construcción de pruebas, Seminarios de investigación I y II.  
    * *Clínica/psicopatología:* Psicopatología I y II, Teoría y técnica psicoanalítica / existencial humanista / cognitivo conductual, Intervención en crisis, Psicoterapia de pareja y de familia, Adicciones, Psicofarmacología, Sexualidad humana.  
    * *Evaluación:* talleres de evaluación de inteligencia, personalidad, infantil, adolescentes y adultos; Taller de neurofeedback y pruebas neuropsicológicas.  
    * *Organizacional:* Introducción a la psicología organizacional, Administración de capital humano, Capacitación y desarrollo, Gestión del talento.  
    * *Educativa:* Estrategias de enseñanza y aprendizaje, Taller de intervención psicopedagógica, Taller de orientación vocacional.  
    * *Otras / especialización regional:* Psicología positiva, Psicología forense, Prácticas profesionales en psicología.  
* Notas de diseño: redactar encabezados como pregunta-respuesta directa (clave para AEO). Acordeones operables por teclado. Los dos CTA de descarga se colocan al cierre de este módulo (no flotantes ni duplicados en otro lugar de la página). \[PENDIENTE DE VALIDAR EN DISEÑO: decisión de mantener "Perfil de egreso" y "Plan de estudios" fusionados en un solo módulo (como aquí) vs. separarlos en dos módulos independientes — queda abierta a criterio del agente de diseño según espacio/escaneabilidad; contenido y datos ya están listos para ambos escenarios.\]  
* CTA: primario "Descargar plan de estudios" → PDF | secundario "Descargar folleto" → PDF/versión digital del folleto oficial de Psicología (ambos con gate de formulario corto: nombre, correo, WhatsApp, enlace a Aviso de Privacidad).

### 5\. Campo laboral: dónde puedes ejercer · \[AIDA: Deseo\]

* Objetivo: resolver la objeción principal de los padres ("¿y con esto de qué va a trabajar?") mostrando amplitud de salidas profesionales, y ofrecer los dos siguientes pasos de conversión naturales una vez resuelta esa objeción.  
* Contenido: ámbitos: clínicas y consultorios particulares; centros de rehabilitación clínica y neuropsicológica; hospitales e instituciones de salud; ambientes educativos (asesoría, evaluación e intervención psicopedagógica, orientación vocacional, inclusión); empresas (comportamiento organizacional, capacitación y desarrollo); centros comunitarios y ONG; instituciones de investigación. Cifra institucional de contexto (Red Anáhuac): 70% de empleabilidad de recién egresados (Top 10 América Latina / 2º Nacional, QS Graduate Employability Ranking).  
* Notas de diseño: iconografía por ámbito laboral; mosaico visual, no lista larga de texto. Los dos CTAs de este módulo se presentan como cierre natural tras resolver la objeción de empleabilidad, distintos de los CTAs de descarga del módulo 4 (aquí no se descarga nada, se avanza en el embudo).  
* CTA: primario "Iniciar proceso de admisión" → /admision-general | secundario "Solicitar más información" → ancla al módulo 12 (formulario dedicado).  
* Pendiente: \[VERIFICAR CON CLIENTE: cifra de empleabilidad específica de egresados de Psicología, si existe, en vez de usar solo la cifra institucional general\].

### 6\. Instalaciones y campus (Norte y Sur) · \[AIDA: Deseo\]

* Objetivo: reforzar el atractivo tangible/físico de estudiar la carrera (bicampus) y facilitar la decisión de ubicación.  
* Contenido: Psicología se imparte en modalidad presencial, bicampus. Mini-tarjetas de cada campus con dirección y CTA a su página propia: Campus Norte (Av. Universidad Anáhuac 46, Huixquilucan, Edo. Méx.) y Campus Sur (Av. de los Tanques 865, Álvaro Obregón, CDMX). Mención de transporte intercampus gratuito y 38 hectáreas de instalaciones de la Red.  
* Notas de diseño: mapa o tour virtual embebido si existe recurso multimedia disponible.  
* CTA: secundario "Conoce el campus" → /campus-norte-anahuac-mexico o /campus-sur-anahuac-mexico.

### 7\. Historias Anáhuac *(módulo compartido)* · \[AIDA: Deseo\]

* Objetivo: prueba social obligatoria — mostrar vida estudiantil real y storytelling emocional de transformación personal, no institucional. Se reutiliza el carrusel ya aprobado en Inicio/Oferta Académica/Admisión por consistencia de marca y de patrón UX.  
* Contenido: carrusel de testimonios (foto \+ cita \+ datos del egresado), filtrado/priorizado para mostrar perfiles de Psicología cuando existan. Cifras institucionales de contexto: 17,440 estudiantes activos, \+55,000 egresados en la Red, acreditación FIMPES "Lisa y Llana".  
* Notas de diseño: mismo componente de carrusel usado en Inicio y Admisión (no crear una variante nueva). Video con subtítulos si aplica.  
* CTA: N/A.  
* Pendiente: \[PENDIENTE: recopilar/producir testimonios reales específicos de alumnos o egresados de la Facultad de Psicología — no usar testimonios genéricos de otra carrera\].

### 8\. Colaboradores y docencia · \[AIDA: Deseo, secundaria\]

* Objetivo: reforzar credibilidad académica mostrando con quién se forma el estudiante — convenios de prácticas (nacionales e internacionales) y planta docente — concentrando en un único módulo toda la información de "aliados", sin competir en peso visual con las secciones prioritarias.  
* Contenido:  
  * Convenios nacionales (único lugar donde aparece este listado en toda la página): Instituto Nacional de Psiquiatría, DIF Huixquilucan, Centros de Integración Juvenil, Hospital Juárez de México, Instituto Nacional de Neurología y Neurocirugía, Centro de Autismo Teletón, Hospital Infantil de México "Federico Gómez", Monte Fénix, escuelas y empresas.  
  * Convenios internacionales (único lugar donde aparece): UC San Diego (EE.UU.), University of Sunderland (Inglaterra), UFV, Instituto Raimon Gaja, ISEP, Universidad Isabel I (España).  
  * Planta docente: mini-tarjetas con foto, grado académico y área de especialización de 3–4 profesores destacados.  
* Notas de diseño: módulo de prioridad baja; puede implementarse como bloque colapsable ("Conoce a nuestros profesores y aliados") para no alargar el scroll principal. Fotografía real, no stock. Mosaico o carrusel de logos de instituciones convenio. Este es el ÚNICO módulo de la página donde deben mostrarse los logos/listado de convenios; el módulo 3 solo menciona la narrativa de prácticas sin repetir el listado.  
* CTA: N/A.  
* Pendiente: \[PENDIENTE: nombres, fotos y bios de docentes de la Facultad de Psicología a destacar\].

### 9\. Elige el siguiente paso *(módulo de decisiones)* · \[AIDA: Acción\]

* Objetivo: ofrecer un clúster de rutas de autoservicio hacia las etapas transaccionales del embudo (costos, becas, fechas, admisión, asesor) para quien aún no está listo para el formulario del módulo 12\. Reutiliza el patrón ya aprobado en Inicio/Oferta Académica/Admisión. Al eliminarse el módulo "¿Tienes alguna duda?", este clúster asume también la única vía de contacto humano de la página.  
* Contenido: clúster de 5 tarjetas de decisión:  
  1. Cotiza tu carrera → /cotizador.  
  2. Conoce las becas y apoyos → /apoyos-educativos-universidad-anahuac-mexico.  
  3. Consulta fechas de examen → /fechas-de-examenes (dentro de /admision-general).  
  4. Inicia tu admisión (proceso 100% en línea, 6 pasos) → /admision-general.  
  5. Habla con un asesor preuniversitario → contacto directo (nombre/foto/WhatsApp/correo por campus); esta tarjeta es ahora el único punto de contacto humano de la página, al no existir un módulo "¿Tienes alguna duda?" separado.  
* Notas de diseño: mismo componente de tarjetas de decisión usado en Inicio/Admisión; máximo 1 CTA primario visualmente destacado por tarjeta. La tarjeta 5 ("Habla con un asesor") debe incluir los datos administrables del asesor (antes vivían en el módulo de duda eliminado): foto, nombre, WhatsApp y correo por campus.  
* CTA: N/A a nivel módulo — cada tarjeta lleva su propio CTA de navegación (ver contenido).  
* Pendiente: \[VERIFICAR CON CLIENTE: costo vigente de colegiatura, inscripción y examen de admisión (histórico \~$1,165 MXN) — no se muestran cifras en esta página, solo enlaces\].

### 10\. Preguntas frecuentes sobre la Licenciatura en Psicología · \[AIDA: Acción\]

* Objetivo: responder objeciones finales antes de la conversión y capturar tráfico AEO (búsqueda conversacional).  
* Contenido: acordeón (H3 por pregunta, marcado con schema FAQPage):  
  * "¿Cuántos años dura la carrera de Psicología?" → 8 semestres.  
  * "¿En qué campus se imparte Psicología?" → Norte y Sur.  
  * "¿Psicología tiene prácticas profesionales?" → sí, desde primer semestre (enlaza al módulo 3/8 si aplica).  
  * "¿Qué especialidades puedo elegir dentro de la carrera?" → clínica, neuropsicología, organizacional, educativa; regionales: positiva, forense, adicciones.  
  * "¿En qué puedo trabajar al egresar?" → ver módulo 5\.  
  * "¿Cuánto cuesta estudiar Psicología en la Anáhuac?" → enlaza al módulo 9 (cotizador).  
* Notas de diseño: respuestas de 1–2 frases directas (AEO); usar variantes exactas de keyword secundaria del extracto SEO. Acordeón operable por teclado con aria-expanded.  
* CTA: N/A (las respuestas ya enlazan a otros módulos cuando aplica, sin duplicar CTA).

### 11\. Descubre por qué ser un León Anáhuac · \[AIDA: Deseo, refuerzo previo al cierre\]

* Objetivo: reutilizar el bloque aprobado de experiencia/ventajas de estudiar en la Anáhuac (no específico de Psicología) como último impulso emocional/aspiracional antes de pedir el dato de contacto en el formulario, respondiendo a "¿cómo es la vida como estudiante aquí, más allá de la carrera?".  
* Contenido: bloque de 4 ejes (patrón aprobado, ver 01-estrategia-ux.md §5.2 "experiencia estudiantil" y diferenciadores oficiales):  
  1. Formación integral — humanismo cristiano, Líderes de Acción Positiva, los 9 Programas de Liderazgo (ACCIÓN, ALPHA, CIMA, CREA, CULMEN, GENERA, IMPULSA, SINERGIA, VÉRTICE).  
  2. Oportunidades internacionales — \+150 universidades aliadas en 30 países, intercambios, doble titulación, programa Minor.  
  3. Vida universitaria — deportes, arte y cultura, sociedad de alumnos, pastoral; comunidad de 17,440 estudiantes activos.  
  4. Espacios de desarrollo — bicampus de 38 hectáreas, transporte intercampus gratuito, bolsa de trabajo con \+7,000 empresas.  
* Notas de diseño: mismo bloque/componente aprobado de "experiencia/ventajas" reutilizado en otras páginas (Estudia con Nosotros); no crear una variante distinta solo para Psicología. Tarjetas o mosaico con foto/video real de vida estudiantil, íconos por eje, microinteracción al hacer hover/tap.  
* CTA: N/A — módulo de storytelling institucional, sin CTA propio (el cierre de conversión ocurre en el módulo 12 inmediatamente después).

### 12\. Solicita información *(formulario dedicado — envío de material)* · \[AIDA: Acción\]

* Objetivo: ofrecer el punto de conversión primario propio de la página de carrera — un formulario de captura de lead calificado. Cambio de enfoque respecto a versiones anteriores: el prospecto no recibe la promesa de ser contactado por un asesor (esa ruta humana ya vive en el módulo 9); en su lugar, el formulario comunica con claridad que el prospecto recibirá más información/material sobre la licenciatura directamente (envío de contenido), según lo que indique que le interesa.  
* Contenido:  
  * Encabezado: "Solicita información sobre la Licenciatura en Psicología".  
  * Copy aclaratorio (obligatorio, visible antes del formulario): mensaje breve del tipo *"Cuéntanos qué te interesa y te enviaremos material informativo directamente. No recibirás una llamada de un asesor — si prefieres hablar con alguien, contáctanos desde la sección 'Elige el siguiente paso'."* (texto de referencia; ajustar tono final en copy).  
  * Formulario de captura:  
    * Nombre completo.  
    * Correo electrónico.  
    * WhatsApp / teléfono.  
    * Preparatoria de origen.  
    * Licenciatura de interés — prellenado con "Psicología" (campo oculto o de solo lectura, editable si el usuario llegó por error).  
    * Periodo de ingreso de interés (selector, ej. próximo semestre / año).  
    * Campus de preferencia (Norte / Sur / sin preferencia).  
    * Nuevo campo — "¿Qué te gustaría recibir?" (selección única o múltiple): Plan de estudios · Costos y becas · Proceso de admisión.  
  * Enlace a Aviso de Privacidad (obligatorio, LFPDPPP).  
  * Mensaje de confirmación post-envío ajustado al nuevo enfoque (ej. "Te enviaremos por correo/WhatsApp el material que elegiste sobre la Licenciatura en Psicología").  
* Notas de diseño: formulario visualmente diferenciado como bloque propio de conversión (no como parte del clúster de tarjetas del módulo 9). Mobile-first, campos con label visibles, validación en tiempo real. El campo "¿Qué te gustaría recibir?" debe presentarse como chips/checkboxes seleccionables (consistente con el patrón de .checks del kit), no como texto libre. Puede ubicarse como bloque de ancho completo o en dos columnas (formulario \+ imagen/testimonio breve de apoyo).  
* CTA: primario "Solicitar información" → envío del formulario (submission a HubSpot).

### 13\. Footer *(módulo compartido, incluye Newsletter)* · N/A

* Objetivo: navegación de salida, datos legales e institucionales, y captura de correo de bajo compromiso para quien no convirtió en ningún módulo anterior.  
* Contenido: ver "Elementos globales". Incluye, como parte del footer (no como módulo aparte), un bloque de suscripción a Newsletter: campo de correo electrónico \+ texto breve de valor (ej. "Recibe contenido sobre vida universitaria, fechas clave y becas") \+ enlace a Aviso de Privacidad.  
* Notas de diseño: el bloque de newsletter debe integrarse visualmente dentro de la retícula del footer (ej. una columna dedicada), no como una sección de ancho completo previa al footer. Mismo componente de suscripción usado en el resto del sitio.  
* CTA: primario del footer "Suscríbete" (envío del campo de correo dentro del bloque de newsletter) — N/A para el resto del footer (solo navegación).

## Reglas de contenido para diseño

* Un solo H1 (módulo 1), con la keyword principal real licenciatura en psicologia.  
* Jerarquía H2 por módulo, H3 para subbloques (materias por área, ejes de "León Anáhuac", preguntas de FAQ).  
* Máximo 1 CTA primario visualmente dominante por módulo; el resto subordinados.  
* No repetir cifras, convenios ni CTAs de descarga en más de un módulo: los convenios (nacionales e internacionales) SOLO aparecen en el módulo 8; las descargas de plan de estudios/folleto SOLO en el módulo 4; costos/becas/admisión SOLO se enlazan (no se detallan) desde el módulo 9; el RVOE SOLO se presenta —como enlace— en el chip del módulo 1\.  
* El módulo 9 ("Elige el siguiente paso") y el módulo 12 ("Solicita información") deben verse y sentirse como bloques distintos, en ese orden relativo (con el módulo 11 como puente emocional entre ambos) — diferente propósito, diferente nivel de compromiso pedido al usuario — nunca fusionarlos en un mismo contenedor visual. Al no existir ya un módulo de asesor independiente, la tarjeta "Habla con un asesor" dentro del módulo 9 es el único canal de contacto humano de la página.  
* El formulario del módulo 12 debe distinguirse claramente (copy \+ diseño) de un formulario de contacto con asesor: es un formulario de envío de material, no de agendar/recibir llamada.  
* El Newsletter no es un módulo independiente: vive únicamente dentro del footer (módulo 13); no debe aparecer un bloque de captura de correo adicional fuera del footer.  
* Todo formulario (módulos 4 —descargas—, 12, y el bloque de newsletter dentro de 13\) enlaza a Aviso de Privacidad (LFPDPPP).  
* Datos institucionales solo de la base de conocimiento y extractos; lo no confirmado se marca como pendiente, nunca se inventa (RVOE, costos, cifras de empleabilidad específicas).  
* Tono en segunda persona ("tú"), storytelling emocional, sin lenguaje institucional frío.  
* Contenido escaneable: listas, tarjetas y acordeones; evitar párrafos largos de lectura corrida en cualquier módulo.

## Elementos dinámicos / administrables (HubSpot)

* Módulo 1 (Hero): chip de RVOE con URL administrable al documento oficial (PDF del Decreto/registro SEP); chips de semestres/modalidad/campus editables por carrera al duplicar la plantilla.  
* Módulo 4 (Perfil de egreso y plan de estudios): archivos administrables del plan de estudios (PDF) y del folleto (PDF/digital) sin tocar código.  
* Módulo 7 (Historias Anáhuac): colección de testimonios administrable por HubSpot CMS (foto, cita, nombre, generación, campus) — filtrable por carrera/facultad.  
* Módulo 8 (Colaboradores y docencia): lista administrable de logos de convenios (nacionales/internacionales) y tarjetas de docentes (campo: nombre, foto, grado, especialidad) — módulo colapsable/activable por el cliente.  
* Módulo 9 (Elige el siguiente paso): clúster reutilizable como módulo global; las 5 tarjetas deben poder reordenarse/activarse-desactivarse desde HubSpot sin depender de desarrollo; los datos del asesor (tarjeta 5\) administrables por campus.  
* Módulo 10 (FAQ): lista de preguntas/respuestas administrable, con soporte para agregar o quitar preguntas por carrera manteniendo el schema FAQPage.  
* Módulo 11 (León Anáhuac): bloque global reutilizable en otras páginas del sitio; contenido de los 4 ejes administrable centralmente (no se edita por carrera).  
* Módulo 12 (Solicita información): formulario nativo de HubSpot con mapeo directo a CRM; campo "Licenciatura de interés" prellenable por parámetro de URL/plantilla al duplicarse por carrera; opciones del campo "¿Qué te gustaría recibir?", lista de periodos y campus editables desde HubSpot; flujo de envío de material (email/WhatsApp automatizado) configurable por selección.  
* Módulo 13 (Footer \+ Newsletter): enlaces del footer y texto/CTA del bloque de newsletter administrables globalmente desde HubSpot (aplica a todo el sitio, no solo a esta página).

## Qué NO debería hacer

* No repetir el listado de convenios nacionales/internacionales en el módulo 3; ahí solo va la narrativa breve de "prácticas desde el primer semestre", el listado completo vive únicamente en el módulo 8\.  
* No crear un módulo "Recursos descargables" independiente: las descargas de plan de estudios y folleto viven dentro del módulo 4; no dupliques estos CTAs en otro punto de la página.  
* No reintroducir un módulo "¿Tienes alguna duda?" ni un bloque de asesor separado: el contacto humano vive únicamente como una tarjeta dentro del módulo 9\.  
* No prometer en el módulo 12 que "un asesor te contactará"; el mensaje correcto es que el prospecto recibirá material/información directamente.  
* No fusionar los módulos 9 ("Elige el siguiente paso") y 12 ("Solicita información") en un solo bloque visual, ni cambiar su orden relativo definido (decisiones → FAQ → León Anáhuac → formulario).  
* No crear un módulo de Newsletter independiente ni un bloque de captura de correo adicional fuera del footer; la suscripción vive exclusivamente dentro del módulo 13\.  
* No mostrar cifras de costos/colegiatura directamente en la página de carrera; solo enlazar al cotizador (módulo 9).  
* No usar párrafos largos de lectura corrida en ningún módulo; todo debe ser escaneable (listas, tarjetas, acordeones).  
* No usar fotografía o video stock/genérico en testimonios, prácticas profesionales o el módulo "León Anáhuac"; solo banco real de la Facultad de Psicología o de vida universitaria general de la Red.  
* No bloquear el LCP con el video del hero (autoplay muteado, lazy-load).  
* No inventar cifras de empleabilidad, RVOE (más allá de la fecha D.O.F. confirmada) o costos que no estén confirmados en los extractos.

## Instrucción breve para el agente de diseño

Diseñar esta página siguiendo el orden vertical de los 13 módulos listados en "Arquitectura general". Reutilizar los componentes ya aprobados para Historias Anáhuac (módulo 7), el clúster de decisiones (módulo 9), el bloque de experiencia/ventajas "León Anáhuac" (módulo 11\) y el Footer con Newsletter integrado (módulo 13\) tal como existen en Inicio/Oferta Académica/Admisión/Estudia con Nosotros — no crear variantes nuevas de estos componentes. Cambios clave de esta versión a respetar: (1) el RVOE ahora vive únicamente como chip-enlace clickeable en el Hero, ya no hay módulo de "Recursos descargables"; sus dos descargas relevantes (plan de estudios, folleto) se integran como CTAs al cierre del módulo 4; (2) se eliminó el módulo "¿Tienes alguna duda?" — el contacto humano vive solo como una tarjeta dentro del módulo 9; (3) el orden de cierre es Elige el siguiente paso → FAQ → León Anáhuac → Solicita información, terminando en Footer; (4) el formulario del módulo 12 cambia su promesa de valor: ya no ofrece contacto de un asesor, sino envío de material informativo, con un nuevo campo seleccionable "¿Qué te gustaría recibir?" (plan de estudios / costos y becas / proceso de admisión) y copy que lo aclare explícitamente para evitar expectativas equivocadas. Para el módulo 4, dejar flexibilidad de diseño para separar perfil de egreso y plan de estudios en dos bloques si el layout final lo requiere (pendiente de validación, ver nota en el módulo). Mantener consistencia con el sistema de marca (naranja \#FF5900, tipografía Zilla Slab/Roboto, colores al 100% sin gradientes) sin que este documento defina colores, tipografías, breakpoints ni medidas en px — esas decisiones son de diseño.

## Anexo A — SEO / AEO

* Title (\<60): Licenciatura en Psicología en la Anáhuac México | Estudia Aquí · Meta (150–160): Estudia la Licenciatura en Psicología en la Universidad Anáhuac México. Formación clínica, organizacional y educativa desde el 1er semestre. Conoce el plan de estudios y solicita información. · Keyword principal (real): licenciatura en psicologia (vol. 6,600) · Secundarias: lic en psicologia, plan de estudios psicologia, cuántos años dura la carrera de psicologia, carrera de psicologia, materias de psicologia.  
* Datos estructurados: Course (Licenciatura en Psicología, provider \= CollegeOrUniversity Universidad Anáhuac México), BreadcrumbList (Inicio \> Oferta Académica \> Ciencias Sociales y Derecho \> Psicología), FAQPage (módulo 10).

## Anexo B — Accesibilidad (WCAG 2.1 AA)

* Alt text descriptivo en todas las imágenes/fotos de estudiantes y campus (describir contexto, ej. "Estudiante de Psicología realizando taller de evaluación psicológica en Campus Sur").  
* Videos del hero, de Historias Anáhuac y del módulo "León Anáhuac" con subtítulos embebidos (no opcionales) y transcripción disponible bajo el reproductor.  
* Contraste AA verificado en tarjetas de diferenciadores y acordeones (evitar texto naranja sobre blanco puro para cuerpo de texto extenso).  
* CTAs con texto descriptivo por sí mismo (evitar "clic aquí"); foco visible al navegar por teclado en botones, acordeones (plan de estudios y FAQ), tarjetas del módulo de decisiones, campos del formulario de información y campo de newsletter en el footer.  
* El chip-enlace de RVOE en el hero debe ser identificable como enlace también sin depender solo del color (subrayado o ícono) y tener foco visible.  
* Formularios (módulo 4 —descargas—, 12, y newsletter en 13\) con label explícito en cada campo, mensajes de error accesibles por lector de pantalla, orden de tabulación lógico. El campo "¿Qué te gustaría recibir?" del módulo 12 debe implementarse con checkboxes/fieldset\+legend accesibles, no solo con color para indicar selección.  
* Acordeones operables por teclado y con aria-expanded correcto.  
* No depender solo del color para diferenciar bloques de materias, tarjetas de decisión, ejes de "León Anáhuac" ni opciones del formulario.

## Elementos globales

* Navegación / breadcrumbs: header con breadcrumb visible (Inicio \> Oferta Académica \> Ciencias Sociales y Derecho \> Psicología); menú global con accesos directos a Admisión, Costos, Becas, Contacto.  
* Footer: datos de Campus Norte y Sur con teléfonos, RVOE SEP D.O.F. 26/11/1982, enlace a Aviso de Privacidad, redes sociales (Vida Anáhuac / Preuniversitario / @vidanahuac), correo preuniversitarios@anahuac.mx, mapa del sitio, enlaces a las demás carreras del área de afinidad, y el bloque de suscripción a Newsletter (correo \+ aviso de privacidad) integrado como parte de la retícula del footer.

