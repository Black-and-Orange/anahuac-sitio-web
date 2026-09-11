import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SupabaseStore } from '../supabase-store.js';

// Cliente falso: registra la cadena de llamadas y responde con datos canónicos.
function makeFakeClient(responder) {
  const calls = [];
  function makeBuilder(table) {
    const state = { table, method: 'select', filters: {} };
    const builder = {
      select(cols) { state.select = cols ?? '*'; return builder; },
      insert(payload) { state.method = 'insert'; state.payload = payload; return builder; },
      update(payload) { state.method = 'update'; state.payload = payload; return builder; },
      eq(col, val) { state.filters[col] = val; return builder; },
      order(col, opts) { state.order = { col, opts }; return builder; },
      single() { state.single = true; return builder; },
      then(res, rej) { calls.push(state); return Promise.resolve(responder(state)).then(res, rej); },
    };
    return builder;
  }
  return { from: (t) => makeBuilder(t), calls };
}

const row = {
  id: 'r1', project_id: 'anahuac-2026', page: 'psicologia.html', selector: '#dos',
  fingerprint: { tag: 'p' }, name: 'Karen', comment: 'Cambiar', status: 'pendiente',
  replies: [], created_at: '2026-09-11T10:00:00Z', clickup_url: null,
};

test('list consulta por project_id+page, ordena por created_at y mapea a camelCase', async () => {
  const client = makeFakeClient(() => ({ data: [row], error: null }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  const res = await store.list('anahuac-2026', 'psicologia.html');
  assert.equal(res.length, 1);
  assert.equal(res[0].projectId, 'anahuac-2026');
  assert.equal(res[0].createdAt, '2026-09-11T10:00:00Z');
  const call = client.calls[0];
  assert.equal(call.table, 'comments');
  assert.equal(call.filters.project_id, 'anahuac-2026');
  assert.equal(call.filters.page, 'psicologia.html');
  assert.equal(call.order.col, 'created_at');
});

test('create envía snake_case y devuelve el comentario mapeado', async () => {
  const client = makeFakeClient((state) => ({ data: { ...row, ...(state.payload || {}) }, error: null }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  const created = await store.create({
    projectId: 'anahuac-2026', page: 'psicologia.html', selector: '#dos',
    fingerprint: { tag: 'p' }, name: 'Karen', comment: 'Cambiar',
  });
  const call = client.calls[0];
  assert.equal(call.method, 'insert');
  assert.equal(call.payload.project_id, 'anahuac-2026');
  assert.equal(call.payload.comment, 'Cambiar');
  assert.ok(call.single);
  assert.equal(created.projectId, 'anahuac-2026');
});

test('update envía el patch y filtra por id', async () => {
  const client = makeFakeClient((state) => ({ data: { ...row, ...(state.payload || {}) }, error: null }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  const updated = await store.update('anahuac-2026', 'psicologia.html', 'r1', { status: 'resuelto' });
  const call = client.calls[0];
  assert.equal(call.method, 'update');
  assert.equal(call.payload.status, 'resuelto');
  assert.equal(call.filters.id, 'r1');
  assert.equal(updated.status, 'resuelto');
});

test('propaga el error de Supabase', async () => {
  const client = makeFakeClient(() => ({ data: null, error: { message: 'boom' } }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  await assert.rejects(() => store.list('anahuac-2026', 'psicologia.html'), /boom/);
});
