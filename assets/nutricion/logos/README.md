# Logotipos de aliados — Licenciatura en Nutrición

El módulo 9 («¿Con quién te formas?») se lee **como muro de logotipos**. Solo la
Universidad Francisco de Vitoria tiene archivo; los otros 17 tiles usan la
variante `.colab-logo-pendiente`, que los pinta como huecos por llenar —borde
punteado y la etiqueta «Logotipo pendiente»— para que se vea de un vistazo qué
archivos faltan.

> **[PLACEHOLDER] Ningún tile con esa clase puede llegar a producción.** O llega
> el logotipo y se sustituye por su `<img>`, o el aliado sale de la lista.

## Qué hace falta

**17 archivos.** De los 18 aliados de Nutrición, solo uno tenía ya su logotipo en
el repositorio: la Universidad Francisco de Vitoria, que comparte con Psicología
(`assets/psicologia/logos/ufv.webp`). **Ese ya está conectado** desde el
2026-08-28; los 17 de la tabla siguen pendientes.

| Grupo | Aliado | Nombre de archivo |
|---|---|---|
| Internacionales | Universidad Finis Terrae (Chile) | `finis-terrae.webp` |
| Internacionales | Pontificia Universidad Javeriana (Colombia) | `javeriana.webp` |
| Nacionales | ISEM | `isem.webp` |
| Nacionales | Hospital General | `hospital-general.webp` |
| Nacionales | Instituto Nacional de Perinatología | `inper.webp` |
| Nacionales | Asociación Mexicana de Diabetes | `amd.webp` |
| Nacionales | AMANC | `amanc.webp` |
| Nacionales | Herdez | `herdez.webp` |
| Cátedras | 3M | `3m.webp` |
| Cátedras | Toks | `toks.webp` |
| Cátedras | Seguros Atlas | `seguros-atlas.webp` |
| Cátedras | PwC | `pwc.webp` |
| Cátedras | Phillips | `phillips.webp` |
| Cátedras | Oracle | `oracle.webp` |
| Cátedras | Manpower | `manpower.webp` |
| Cátedras | Hospital Ángeles | `hospital-angeles.webp` |
| Cátedras | GE | `ge.webp` |

**⚠️ No confundir:** `assets/psicologia/logos/inp.webp` es el **Instituto Nacional
de Psiquiatría**, no el de Perinatología. Las siglas se parecen; las
instituciones no. No reutilizar ese archivo aquí.

**⚠️ Autorización de uso.** Varias son marcas comerciales (3M, Oracle, PwC, GE,
Herdez, Toks, Phillips, Manpower, Seguros Atlas). Hace falta el archivo oficial y
permiso para publicarlo, igual que con Nestlé y Danone en el módulo 6.

## Especificación del archivo

- **Formato:** WebP con fondo transparente.
- **Alto:** ~120px (se muestran a un máximo de 48px; el doble cubre pantallas
  retina).
- **Color:** el componente los pinta en escala de grises al 72% de opacidad y los
  colorea al pasar el cursor. Un logotipo que solo se distinga por su color se
  verá plano en reposo: preferir versiones monocromas o de alto contraste.

## Qué hay que cambiar cuando lleguen

1. En `nutricion.html`, módulo 9: sustituir el `<li class="colab-logo colab-logo-pendiente">`
   completo por
   `<li class="colab-logo"><img src="assets/nutricion/logos/ARCHIVO.webp" alt="NOMBRE" loading="lazy" /></li>`.
   Los tiles internacionales conservan además su `<span>` de país. El de la UFV
   ya está así y sirve de molde.
2. Cuando no quede ningún tile pendiente, revisar el bloque **«5. ALIADOS»** de
   `nutricion.css`: las 3 columnas se eligieron porque 3, 6 y 9 dividen exacto y
   así no queda ningún hueco punteado suelto. Con los 18 logotipos puestos, un
   tile solo en su fila pesa mucho menos, así que se puede volver a las 4
   columnas del molde. La bajada a una columna en ≤640px sí se revierte: existe
   solo porque «LOGOTIPO PENDIENTE» no cabe en una celda de 155px.
3. La variante `.colab-logo-pendiente` de `psicologia.css` puede quedarse: es
   reutilizable para el mismo problema en otras páginas. Lo que no puede quedarse
   es un tile que la use.
