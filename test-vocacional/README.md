# Test vocacional — demo navegable

Demo autocontenida del módulo de test vocacional. **No es parte del sitio**: vive en su
propia carpeta y trae su propia copia del theme para no tocar el CSS ni los módulos de
las páginas publicadas.

Se ve en <https://black-and-orange.github.io/anahuac-sitio-web/test-vocacional/>.

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `index.html` | La página de demo. Es el preview del módulo con las rutas ajustadas a esta carpeta. |
| `theme/css/` | `tokens.css` y `main.css` del theme, copiados. |
| `theme/js/` | El motor compartido y los datos semilla del test. |
| `theme/modules/test-vocacional.module/` | El módulo. |
| `theme/images/` | Sólo las 40 imágenes que el test usa, no el banco completo. |

## El flujo

Cinco pantallas: inicio → 8 preguntas de área → desempate (si hay empate) → transición →
28 preguntas de licenciatura → resultado.

Para ver el **desempate**, contesta las 8 primeras con la misma opción: así las ocho áreas
empatan y hay que elegir dos. Si varías las respuestas, el test resuelve solo y se la salta.

Para ver los **dos grupos** del resultado, varía las respuestas de licenciatura; si
contestas todo igual, las cinco empatan y salen todas en el grupo de arriba.

## Estado: demo con datos provisionales

Corre de punta a punta, pero faltan cosas que no dependen del código:

- Los **55 textos de resultado** (8 de área, 47 de licenciatura).
- El **mapa definitivo** de área a licenciatura: 6 decisiones abiertas.
- Las **reglas de puntaje y desempate**, por confirmar con la autora del instrumento.
- **23 de las 47 licenciaturas no tienen foto propia** y heredan la de su área, en tono de
  categoría. La lista de las que faltan está en el spec del proyecto.
- Sólo **Psicología** tiene URL, así que es la única tarjeta que lleva a algún lado.

La página lo dice en voz alta en el aviso del pie.

## De dónde sale

Se genera copiando desde el repo del design system (`adapters/hubspot/`). Si el módulo
cambia allá, hay que volver a copiar: **esta carpeta no se actualiza sola**.
