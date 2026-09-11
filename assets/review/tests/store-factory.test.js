import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createStore } from '../store-factory.js';

function memLocalStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, v),
    removeItem: (k) => m.delete(k),
  };
}

test('createStore({storage:"local"}) devuelve un LocalStorageStore utilizable', () => {
  global.window = { localStorage: memLocalStorage() };
  try {
    const store = createStore({ storage: 'local', namespace: 'x' });
    assert.equal(typeof store.list, 'function');
    assert.equal(typeof store.create, 'function');
    assert.equal(typeof store.update, 'function');
  } finally {
    delete global.window;
  }
});

test('createStore con un storage desconocido lanza un error que lo nombra', () => {
  global.window = { localStorage: memLocalStorage() };
  try {
    assert.throws(() => createStore({ storage: 'nope' }), /nope/);
  } finally {
    delete global.window;
  }
});
