// Smoke test con jsdom para PinLayer: sustituye la verificación manual en
// navegador del Step 4 del brief (ver ruling del controlador). Prueba que
// renderAll() pinta un pin anclado por comentario, que un comentario cuyo
// selector/fingerprint no resuelve queda marcado como "perdido", y que elegir
// el estado "Resuelto" en la tarjeta llama a store.update y refleja el nuevo
// estado en el pin. jsdom siempre da rects en cero, así que no se asume nada
// sobre coordenadas: solo estructura y estado.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

let dom;
let PinLayer;
let CONFIG;

before(async () => {
  dom = new JSDOM(
    '<!doctype html><html><body><section id="s1"><p id="p1">Hola</p></section></body></html>',
    { url: 'http://localhost/test.html' },
  );
  global.window = dom.window;
  global.document = dom.window.document;
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);

  ({ PinLayer } = await import('../pin-layer.js'));
  ({ CONFIG } = await import('../config.js'));
});

after(() => {
  delete global.window;
  delete global.document;
  delete global.requestAnimationFrame;
  delete global.cancelAnimationFrame;
});

function fakeStore(comments) {
  const updateCalls = [];
  return {
    updateCalls,
    list: async () => comments,
    update: async (projectId, page, id, patch) => {
      updateCalls.push({ projectId, page, id, patch });
      const c = comments.find((x) => x.id === id);
      if (!c) return null;
      Object.assign(c, patch);
      return c;
    },
  };
}

function makeComments() {
  return [
    {
      id: 'c1',
      name: 'Ana',
      comment: 'Hola, revisar este párrafo',
      status: 'pendiente',
      createdAt: new Date().toISOString(),
      selector: '#p1',
      fingerprint: { sectionId: 's1', tag: 'p', textHash: '0', siblingIndex: 1 },
    },
    {
      id: 'c2',
      name: 'Beto',
      comment: 'Este elemento ya no existe',
      status: 'pendiente',
      createdAt: new Date().toISOString(),
      selector: '#no-existe-nunca',
      fingerprint: { sectionId: 'seccion-fantasma', tag: 'div', textHash: 'zzzz', siblingIndex: 99 },
    },
  ];
}

function makeRoot() {
  const host = document.createElement('div');
  document.body.appendChild(host);
  return host.attachShadow({ mode: 'open' });
}

test('renderAll() pinta un pin por comentario y marca "perdido" el que no resuelve', async () => {
  const root = makeRoot();
  const comments = makeComments();
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });

  await pinLayer.renderAll();

  const pins = root.querySelectorAll('.bnor-pin');
  assert.equal(pins.length, 2, 'debe pintar exactamente un pin por comentario');

  const goodEntry = pinLayer.pins.find((p) => p.comment.id === 'c1');
  const lostEntry = pinLayer.pins.find((p) => p.comment.id === 'c2');
  assert.ok(goodEntry, 'debe existir la entrada del comentario resoluble');
  assert.ok(lostEntry, 'debe existir la entrada del comentario no localizado');

  assert.equal(goodEntry.pinEl.dataset.status, goodEntry.comment.status);
  assert.equal(goodEntry.pinEl.dataset.lost, 'false');
  assert.equal(lostEntry.pinEl.dataset.lost, 'true');
});

test('elegir "Resuelto" en la tarjeta llama a store.update y actualiza el pin', async () => {
  const root = makeRoot();
  const comments = makeComments();
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });

  await pinLayer.renderAll();
  const goodEntry = pinLayer.pins.find((p) => p.comment.id === 'c1');

  // Equivale al clic en el pin: abre la tarjeta con el comentario resuelto.
  pinLayer.openCard(goodEntry.comment, goodEntry.pinEl);

  const card = root.querySelector('.bnor-card');
  assert.ok(card, 'debe renderizar la tarjeta');
  const stateButtons = card.querySelectorAll('.bnor-state');
  assert.equal(stateButtons.length, 3, 'debe mostrar los 3 botones de estado');

  const resueltoBtn = [...stateButtons].find((b) => b.dataset.state === 'resuelto');
  assert.ok(resueltoBtn, 'debe existir el botón de estado "resuelto"');

  resueltoBtn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  // El handler de clic de la tarjeta es async (await store.update); deja correr el microtask.
  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(store.updateCalls.length, 1, 'debe llamar a store.update una vez');
  assert.equal(store.updateCalls[0].id, 'c1');
  assert.deepEqual(store.updateCalls[0].patch, { status: 'resuelto' });

  assert.equal(goodEntry.pinEl.dataset.status, 'resuelto', 'el pin debe reflejar el nuevo estado');
  assert.equal(resueltoBtn.getAttribute('aria-pressed'), 'true');
});
