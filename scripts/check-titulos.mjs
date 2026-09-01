#!/usr/bin/env node
/* check:titulos — el H1 del hero no puede dejar una palabra huérfana
   ---------------------------------------------------------------------------
   Por qué existe: el H1 de las páginas de carrera («Licenciatura en X») se
   partía en tres renglones —«Licenciatura» / «en» / «X»— con la preposición
   sola en medio. Pasó en Comunicación, en Gastronomía y, por debajo de 380px,
   también en Psicología y Nutrición. Cada vez se detectó a ojo y tarde.

   El defecto depende del ancho de la columna, no del viewport, así que solo
   aparece en tramos concretos: hay que barrer, no mirar dos anchuras.

   ⚠️ Espera a que la webfont cargue. Sin Zilla Slab las métricas cambian y el
   defecto NO aparece: así se coló la primera vez.

   Uso:  node scripts/check-titulos.mjs [--url http://127.0.0.1:8765]
   Requiere el servidor local levantado.
--------------------------------------------------------------------------- */
import puppeteer from "puppeteer";

const BASE = (process.argv.find((a) => a.startsWith("--url=")) || "--url=http://127.0.0.1:8765").split("=")[1];
const PAGINAS = ["psicologia", "nutricion", "comunicacion", "gastronomia"];

/* Anchuras: los cortes del molde y sus vecinos, más un barrido fino del tramo
   estrecho, que es donde más veces se rompió. */
const ANCHOS = [
  320, 330, 340, 350, 360, 370, 380, 390, 414, 430, 480, 540, 600, 640, 700,
  768, 820, 900, 1024, 1100, 1180, 1181, 1200, 1280, 1300, 1366, 1440, 1441,
  1500, 1600, 1920, 2560,
];

const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const navegador = await puppeteer.launch({ headless: "new", executablePath: CHROME });
const pagina = await navegador.newPage();
let fallos = 0;

for (const nombre of PAGINAS) {
  const malos = [];
  for (const ancho of ANCHOS) {
    await pagina.setViewport({ width: ancho, height: 800 });
    await pagina.goto(`${BASE}/${nombre}.html`, { waitUntil: "networkidle0" });
    await pagina.evaluate(() => document.fonts.ready);
    const roto = await pagina.evaluate(() => {
      const h1 = document.querySelector(".lic-hero h1");
      if (!h1) return null;
      const rango = document.createRange();
      const caracteres = [];
      const walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
      let nodo;

      /* El H1 puede contener spans para controlar su composición. Medir todos
         los nodos de texto evita que el chequeo vea solo el primero. */
      while ((nodo = walker.nextNode())) {
        const texto = nodo.textContent;
        for (let i = 0; i < texto.length; i++) {
          if (/\s/.test(texto[i])) continue;
          rango.setStart(nodo, i);
          rango.setEnd(nodo, i + 1);
          caracteres.push({ letra: texto[i], top: Math.round(rango.getBoundingClientRect().top) });
        }
      }

      const inicios = [];
      let anterior = null;
      caracteres.forEach((caracter, i) => {
        if (anterior === null || caracter.top !== anterior) {
          inicios.push(i);
          anterior = caracter.top;
        }
      });
      const lineas = inicios.map((ini, k) =>
        caracteres.slice(ini, inicios[k + 1] ?? caracteres.length).map((c) => c.letra).join("")
      );
      if (lineas.length > 2) {
        return lineas.join(" / ");
      }
      /* Huérfana: un renglón de tres caracteres o menos («en», «de», «y»). */
      return lineas.some((l) => l.length <= 3) ? lineas.join(" / ") : null;
    });
    if (roto) malos.push(`${ancho}px → ${roto}`);
  }
  if (malos.length) {
    fallos += malos.length;
    console.error(`✖ ${nombre}`);
    malos.forEach((m) => console.error(`    ${m}`));
  } else {
    console.log(`✓ ${nombre} — sin huérfanas en ${ANCHOS.length} anchuras`);
  }
}

await navegador.close();

if (fallos) {
  console.error(`\n✖ check:titulos — ${fallos} anchuras con una palabra huérfana en el H1.`);
  console.error("  Si la página necesita un cuerpo menor, pide la variante `lic-hero--titulo-largo`");
  console.error("  en su <section class=\"lic-hero\">. Ver psicologia.css.");
  process.exit(1);
}
console.log("\n✓ check:titulos — ningún H1 deja una palabra huérfana.");
