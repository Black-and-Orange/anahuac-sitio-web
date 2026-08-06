# Fechas de examen de admisión — propuesta de diseño

Fuente: handoff `fechas-de-examen-admision.md` (arquitectura + copy final, 2026-08-06).
Destino: maqueta `fechas-de-examenes.html` → módulos HubSpot en el theme `anahuac-mexico`.

El copy del handoff se usa **literal**. Lo que sigue son decisiones de diseño y las
inconsistencias detectadas, que se listan **antes** de tocar contenido.

---

## Componentes reutilizados (nada nuevo salvo lo indicado)

| Módulo | Componente del sistema | De dónde viene |
|---|---|---|
| 1 · Hero | `.lic-hero` + `.lic-chips`/`.lic-chip` + `.hero-card` + `.button-row` | `psicologia.html` |
| 2 · Antes de tu examen | `.consideraciones-grid` / `.consideracion` (icono + título + texto) | `apoyos-economicos.html` |
| 3 · Calendario | **ver decisión abajo** | — |
| 4 · Siguiente paso | `.siguiente-cards` / `.siguiente-card` | `proceso-de-admision.html` |
| 5 · FAQ | `.faq-list` / `.faq-item` (`<details>` nativo) | compartido |
| 6 · Asesor | `.apo-asesoria` completo (cascada + tarjeta de asesor) | `apoyos-economicos.html` |
| 7 · Footer | footer global del theme | `pie-de-pagina.module` |

El **módulo 4 ya existe con el mismo H2** («Elige el siguiente paso para tu futuro»)
en `proceso-de-admision.html` y `psicologia.html`. Se reutiliza tal cual, solo
cambian los textos y destinos de las 4 tarjetas.

El **módulo 6** es exactamente el módulo 8 de Apoyos: la cascada
región → estado → preparatoria que resuelve **un** asesor, con su tarjeta de foto,
WhatsApp, cita y correo. El microcopy del handoff («¿Dónde estudias o estudiaste la
preparatoria/bachillerato?») coincide palabra por palabra con el de ese módulo.

---

## Inconsistencias detectadas (requieren decisión antes de construir)

### 1. El calendario choca con el componente ya aprobado — **la más importante**

El handoff pide para el módulo 3 una **tabla de 7 columnas con tabs por campus**.
Pero en `proceso-de-admision.html` ya existe un componente aprobado para exactamente
este contenido: **dos columnas (Norte naranja / Sur morada), cada una con un acordeón
por fecha** que despliega los 4 hitos de esa convocatoria.

El propio handoff dice «No introduzcas componentes nuevos fuera de los del sistema»,
y una tabla de 7 columnas **sí lo es**. Además tiene un problema real: con el
contenedor de 1280 px, siete columnas de fecha dejan ~150 px por columna; «Fecha
límite de documentos» y «Se agenda directamente en la plataforma de admisión en
línea» no caben sin romper la retícula o forzar scroll horizontal.

**Tres caminos:**

| Opción | Qué implica |
|---|---|
| **A · Reutilizar el acordeón** *(recomendada)* | Cero componentes nuevos, escala a 10+ fechas por campus sin romperse, ya validado en móvil. Se pierde la comparación lado a lado de convocatorias. |
| **B · Tabla como pide el handoff** | Fiel al documento. Requiere componente nuevo, scroll horizontal en desktop y reescribir el layout móvil como `dl`. |
| **C · Híbrido** | Tabla con 5 columnas (Campus, Documentos, Académico, Psicométrico, Resultados), moviendo Entrevista al callout —su texto es fijo, no varía por fila— y Cupo a un badge sobre la fecha. Cabe en 1280 px. |

Mi recomendación es **A**, y si se quiere comparación lado a lado, **C**. No construyo
la tabla de 7 columnas sin confirmación porque contradice la regla del propio handoff.

### 2. El módulo 6 se contradice consigo mismo

El handoff dice «Considerar 1 tarjeta por campus si hay asesores distintos Norte/Sur»,
pero el patrón que señala —y su microcopy— resuelve **un solo asesor a partir del
estado de procedencia**, no del campus. Son dos lógicas distintas.

El módulo de Apoyos asigna asesor por estado de bachillerato (32 estados + países).
Si aquí debe ser por campus, es otro componente. **Asumo la cascada de Apoyos**, que
es lo que el brief pide reutilizar; dímelo si debe ser por campus.

### 3. El slug no coincide con producción

La ficha dice `/fechas-de-examenes` y que «se conserva la URL en producción», pero
las Fuentes citan `mexico.anahuac.mx/licenciaturas/fechas-de-examenes`. Son URLs
distintas; si la página vive bajo `/licenciaturas/`, cambiar el slug **rompería las
45 keywords posicionadas** que el propio documento dice preservar. Hay que confirmar
cuál es la ruta real antes de publicar.

### 4. El mapeo de HubDB no cubre las 7 columnas

Los encabezados listan «Entrevista personal», pero la tabla `fechas_examen_admision`
no tiene columna de entrevista: su celda es texto fijo. Está bien, pero la numeración
del mapeo («Columna 1…5») no corresponde con las 7 columnas visibles y confunde.
Además `hora_examen_academico` es texto libre; conviene fijar el formato para que
todas las filas se vean igual.

### 5. Copy del FAQ 7 que habla de la propia página

La respuesta 7 termina con «Ambos enlaces están disponibles directamente aquí, sin
necesidad de bajar al módulo "Elige el siguiente paso"». Eso es una nota de
maquetación dirigida al equipo, no al aspirante: menciona un módulo interno por su
nombre. **Sugerencia:** cortar la frase y dejar la respuesta en los dos enlaces.
No lo toco sin autorización, por la regla de copy literal.

### 6. El footer del handoff no es el footer actual

El módulo 7 especifica columnas y textos que difieren del footer global del theme
(que ya tiene newsletter). Cambiarlo afectaría **todas las páginas del sitio**.
**Asumo que se conserva el footer global** y que el módulo 7 es documentación de
referencia, no una petición de cambio. Confirmar.

---

## Decisiones que sí tomo por mi cuenta

- **Sin formulario de cierre**, como indica el handoff. La página termina en asesor + footer.
- **H1 único** en el hero; el resto H2, y H3 por tarjeta/pregunta.
- **Copy atemporal**: ningún año en texto fijo. Las fechas de la maqueta se marcan
  como datos de ejemplo provenientes de HubDB.
- **Badge de cupo con texto**, nunca solo color (requisito de accesibilidad del handoff).
- **`Event` schema no se implementa** — el handoff lo marca como condicionado.
- Se implementan **`FAQPage`** y **`BreadcrumbList`**, que sí están aprobados.

## Pendientes heredados del handoff

URL de «Inicia tu admisión» · datos del asesor (nombre, foto, WhatsApp, correo,
agenda) · si se publica la columna de cupo · viabilidad de `Event` · ruta
`/licenciaturas/…` · actualizar la página vieja que aún dice «examen presencial».
