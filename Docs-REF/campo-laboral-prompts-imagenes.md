# Prompts de imagen — Módulo 5 "Campo laboral" (Licenciatura en Psicología)

Prompts para generar las 7 fotos del selector de ámbitos laborales de `psicologia.html`.
Sustituyen a los placeholders SVG `assets/psicologia/campo-<slug>.svg` por fotos reales.

- **Formato de salida:** vertical **4:5** (p. ej. 1200×1500 px), exportar a **WebP**.
- **Nombre de archivo destino:** `assets/psicologia/campo-<slug>.webp` (ver cada campo).
- Tras generarlas, actualizar en `psicologia.html` el `data-img` de cada `.campo-tile`
  y el `src` inicial de `.campo-media` de `.svg` → `.webp`.

## Especificaciones comunes (aplican a las 7)

**Estilo:** fotografía documental realista, personas reales, luz natural suave, tono
cálido y humano; nada de stock genérico ni poses forzadas. Adultos jóvenes mexicanos,
diversidad real (género, tono de piel). Profesional y aspiracional pero auténtico.
Profundidad de campo ligera (sujeto nítido, fondo suavemente desenfocado).

**Composición:** encuadre **vertical 4:5**, sujeto principal ligeramente descentrado,
con aire/espacio a un lado (la imagen se recorta con `object-fit: cover`). Evitar poner
elementos clave en los bordes.

**Marca (sutil, no forzada):** paleta cálida; se permiten acentos naranja (#FF5900) o
morado (#5D428C) en ropa, mobiliario o props, sin saturar. Ambientes limpios y ordenados.

**Negativos (evitar):** texto o letreros legibles, logotipos o marcas reales, marcas de
agua, collage, ilustración/3D/render, distorsiones de manos/rostros, sobreexposición,
estética de stock cliché, elementos médicos gráficos o angustiantes.

**Sufijo técnico sugerido (Midjourney):** `--ar 4:5 --style raw` ·
(DALL·E/Firefly: pedir "vertical 4:5, photorealistic").

---

## 1. Clínicas y consultorios → `campo-clinicas.webp`

> Psicólogo(a) joven mexicano(a) en un consultorio privado cálido y acogedor, sentado en
> un sillón escuchando con atención a un paciente que aparece de espaldas o desenfocado
> (para preservar su privacidad). Luz natural lateral suave, plantas, libreta en mano,
> estantería con libros al fondo. Ambiente íntimo, empático y profesional. Vertical 4:5.

## 2. Rehabilitación y neuropsicología → `campo-rehabilitacion.webp`

> Sesión de rehabilitación neuropsicológica: profesional guiando a un paciente adulto en
> un ejercicio cognitivo con tarjetas o una tablet/pantalla de neurofeedback. Consultorio
> clínico moderno pero cálido, luz clara. Gesto de acompañamiento y concentración.
> Sin imágenes médicas gráficas. Vertical 4:5.

## 3. Hospitales e instituciones de salud → `campo-hospitales.webp`

> Psicólogo(a) integrado(a) a un equipo de salud en un entorno hospitalario o institución
> de salud: conversando con personal médico en un pasillo o sala luminosa, con gafete
> profesional y bata o vestimenta formal. Ambiente institucional limpio y ordenado,
> tono humano y colaborativo. Vertical 4:5.

## 4. Ambientes educativos → `campo-educativos.webp`

> Psicólogo(a) escolar en una sesión de orientación vocacional con un(a) estudiante
> adolescente, en una sala de orientación luminosa dentro de una escuela. Interacción de
> apoyo y confianza, materiales educativos sobre la mesa. Ambiente cálido y motivador.
> Vertical 4:5.

## 5. Empresas y organizaciones → `campo-empresas.webp`

> Psicólogo(a) organizacional facilitando un taller o capacitación con un grupo pequeño de
> colaboradores en una sala corporativa moderna. Personas participando activamente,
> pizarrón o pantalla al fondo (sin texto legible). Energía profesional y colaborativa,
> luz natural. Vertical 4:5.

## 6. Centros comunitarios y ONG → `campo-comunitarios.webp`

> Psicólogo(a) facilitando un grupo de bienestar en un centro comunitario: círculo de
> personas diversas (edades y perfiles distintos) conversando en un espacio sencillo y
> luminoso. Ambiente cálido, cercano y esperanzador, sentido de comunidad y apoyo social.
> Vertical 4:5.

## 7. Instituciones de investigación → `campo-investigacion.webp`

> Investigador(a) en psicología estudiando el comportamiento humano en un entorno
> académico/laboratorio: revisando datos y gráficas en pantallas, o tomando notas junto a
> una sala de observación con espejo. Ambiente universitario ordenado y sobrio, luz neutra,
> actitud analítica y rigurosa. Vertical 4:5.
