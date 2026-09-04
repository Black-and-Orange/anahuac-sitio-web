/* =============================================
   GASTRONOMÍA — interacciones propias de la página
   Todo lo de este archivo es opcional: la página funciona completa sin JS.
   ============================================= */

/* ---- Claustro docente: sin carrusel cuando caben todas ----
   El carrusel de docentes vive en psicologia.js y lo comparten cuatro páginas.
   La vista muestra cuatro tarjetas; con cuatro o menos no hay nada que recorrer
   y montarlo hace daño: clona el set para el bucle sin costura y el primer clon
   asoma en el hueco libre, repitiendo a una persona en la misma fila.

   En vez de tocar el archivo compartido —lo que cambiaría el comportamiento de
   Psicología, Nutrición y Comunicación— se desactiva SOLO aquí: se cambian las
   dos clases que psicologia.js busca por equivalentes propias y se retiran las
   flechas. Al no encontrar sus anclas, el carrusel compartido no se monta y no
   engancha ni el swipe ni el listener de resize.

   Por eso este archivo se carga ANTES que psicologia.js. Si algún día hay más
   de cuatro docentes, no se toca nada: las clases se quedan y el carrusel
   compartido vuelve a montarse solo. */
(function () {
  "use strict";

  const VISIBLES = 4;
  const vista = document.querySelector(".colab-docentes-carousel");
  const fila = document.querySelector(".colab-docentes-track");
  if (!vista || !fila) return;
  if (fila.children.length > VISIBLES) return;

  vista.classList.replace("colab-docentes-carousel", "gas-docentes-vista");
  fila.classList.replace("colab-docentes-track", "gas-docentes-fila");

  const flechas = document.querySelector(".colab-docentes-head .colab-arrows");
  if (flechas) flechas.remove();
})();

(function () {
  "use strict";

  /* ---- Carrusel vertical de convenios de prácticas ----
     El viewport muestra una fila. Cada clic mueve exactamente una fila y el
     recorrido da la vuelta, así que las flechas nunca quedan en un extremo
     muerto y no hace falta deshabilitarlas.

     El suavizado es una `transition` de CSS sobre el transform, no un tween en
     JS: no depende de requestAnimationFrame, que el navegador estrangula en
     pestañas de fondo. Aquí solo se fija la posición final. */
  const viewport = document.querySelector(".gas-convenios-viewport");
  const track = document.querySelector(".gas-convenios-track");
  const arriba = document.querySelector(".gas-convenios-prev");
  const abajo = document.querySelector(".gas-convenios-next");
  if (!viewport || !track || !arriba || !abajo) return;

  const tarjetas = Array.from(track.children);
  if (!tarjetas.length) return;

  const controles = document.querySelector(".gas-convenios-head .colab-arrows");
  let fila = 0;

  /* Las columnas cambian por breakpoint (4 / 2 / 1). En vez de repetir esos
     valores aquí —dos fuentes de verdad que se desincronizan— se leen de la
     retícula ya resuelta. */
  function columnas() {
    const cols = getComputedStyle(track).gridTemplateColumns;
    if (!cols || cols === "none") return 1;
    return cols.split(" ").filter(Boolean).length;
  }

  function filas() {
    return Math.ceil(tarjetas.length / columnas());
  }

  /* Alto de una tarjeta más el hueco entre filas. Se mide en vez de calcularse
     para que siga siendo correcto si el CSS cambia. */
  function paso() {
    const hueco = parseFloat(getComputedStyle(track).rowGap) || 0;
    return tarjetas[0].getBoundingClientRect().height + hueco;
  }

  function pintar() {
    track.style.transform = "translateY(" + -fila * paso() + "px)";
  }

  function mover(direccion) {
    const total = filas();
    if (total <= 1) return;
    fila = (fila + direccion + total) % total;
    pintar();
  }

  abajo.addEventListener("click", () => mover(1));
  arriba.addEventListener("click", () => mover(-1));

  /* Con una sola fila no hay nada que recorrer: sobran los controles. */
  function revisarControles() {
    if (!controles) return;
    controles.hidden = filas() <= 1;
  }

  /* Al cambiar de breakpoint cambian las columnas y, con ellas, cuántas filas
     hay y cuánto mide el paso. Si la fila actual ya no existe, se acota. */
  let repintado;
  window.addEventListener("resize", () => {
    window.clearTimeout(repintado);
    repintado = window.setTimeout(() => {
      const total = filas();
      if (fila >= total) fila = total - 1;
      if (fila < 0) fila = 0;
      revisarControles();
      pintar();
    }, 150);
  });

  revisarControles();
})();
