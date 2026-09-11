// Rastrea (en localStorage) los comentarios creados desde ESTE navegador, para
// ofrecer "Eliminar" solo sobre los propios. Es un alcance de INTERFAZ, no de
// servidor: la política RLS permite el DELETE anónimo, así que un actor decidido
// podría borrar otros comentarios. Suficiente para una herramienta interna de
// revisión; para blindarlo, mover el borrado a una función server-side.
const KEY = 'bno-review:mine';

function ls() {
  if (typeof localStorage !== 'undefined') return localStorage;
  if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
  return null;
}
function read() {
  const s = ls();
  if (!s) return [];
  try { return JSON.parse(s.getItem(KEY) || '[]'); } catch (_) { return []; }
}
function write(ids) {
  const s = ls();
  if (s) s.setItem(KEY, JSON.stringify(ids));
}

export function rememberMine(id) {
  const s = read();
  if (!s.includes(id)) { s.push(id); write(s); }
}
export function forgetMine(id) {
  write(read().filter((x) => x !== id));
}
export function isMine(id) {
  return read().includes(id);
}
