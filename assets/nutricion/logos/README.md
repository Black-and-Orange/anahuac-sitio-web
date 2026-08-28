# Logotipos de aliados — Licenciatura en Nutrición

Los tiles del módulo 9 («¿Con quién te formas?») van hoy **como texto**. El
componente `.colab-logo` acepta las dos cosas —imagen o nombre— y en cuanto
existan los archivos de esta carpeta se cambian por logotipos, igual que en
`psicologia.html`.

## Qué hace falta

**17 archivos.** De los 18 aliados de Nutrición, solo uno tiene ya su logotipo en
el repositorio: la Universidad Francisco de Vitoria, que comparte con Psicología
(`assets/psicologia/logos/ufv.webp`).

| Grupo | Aliado | Nombre de archivo |
|---|---|---|
| Internacionales | Universidad Finis Terrae (Chile) | `finis-terrae.webp` |
| Internacionales | Universidad Francisco de Vitoria (España) | ya existe → `../../psicologia/logos/ufv.webp` |
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

1. En `nutricion.html`, módulo 9: sustituir el texto de cada `<li class="colab-logo">`
   por `<img src="assets/nutricion/logos/ARCHIVO.webp" alt="NOMBRE" loading="lazy" />`.
   Los tiles internacionales conservan además su `<span>` de país.
2. En `nutricion.css`, retirar el bloque **«5. ALIADOS»**: ese tratamiento de
   chips en flujo horizontal se hizo *porque* los tiles eran texto de longitudes
   muy distintas («3M» junto a «Instituto Nacional de Perinatología»). Con
   logotipos de ancho parejo, la rejilla del molde vuelve a ser lo correcto.
