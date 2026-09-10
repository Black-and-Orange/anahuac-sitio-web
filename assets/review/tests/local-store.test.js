import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { LocalStorageStore } from '../local-store.js';

function memStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, v),
    removeItem: (k) => m.delete(k),
  };
}

let store;
beforeEach(() => { store = new LocalStorageStore(memStorage(), 'bno-review'); });

const base = { projectId: 'anahuac-2026', page: 'psicologia.html', selector: '#dos', fingerprint: {}, name: 'Karen', comment: 'Cambiar este texto' };

test('create asigna id, createdAt, status pendiente y replies vacío', async () => {
  const c = await store.create({ ...base });
  assert.ok(c.id);
  assert.ok(c.createdAt);
  assert.equal(c.status, 'pendiente');
  assert.deepEqual(c.replies, []);
});

test('list devuelve los comentarios de esa página', async () => {
  await store.create({ ...base });
  await store.create({ ...base, comment: 'Otro' });
  const list = await store.list('anahuac-2026', 'psicologia.html');
  assert.equal(list.length, 2);
});

test('list de otra página está vacío', async () => {
  await store.create({ ...base });
  assert.deepEqual(await store.list('anahuac-2026', 'medicina.html'), []);
});

test('update cambia el estado', async () => {
  const c = await store.create({ ...base });
  const updated = await store.update('anahuac-2026', 'psicologia.html', c.id, { status: 'resuelto' });
  assert.equal(updated.status, 'resuelto');
  const list = await store.list('anahuac-2026', 'psicologia.html');
  assert.equal(list[0].status, 'resuelto');
});

test('update devuelve null si el id no existe', async () => {
  assert.equal(await store.update('anahuac-2026', 'psicologia.html', 'nope', { status: 'resuelto' }), null);
});
