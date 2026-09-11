// Fábrica de stores: traduce config.storage al adaptador concreto. El core
// (review.js) sólo depende de esta función, nunca de un store en concreto,
// para que cambiar de adaptador sea cuestión de tocar config.js.
import { LocalStorageStore } from './local-store.js';

export function createStore(config) {
  const storage = config && config.storage;
  if (storage === 'local') {
    return new LocalStorageStore(window.localStorage, config.namespace);
  }
  // Fase 2: 'supabase' → return new SupabaseStore(config) con la MISMA
  // interfaz (list/create/update) que LocalStorageStore.
  throw new Error(`Adaptador de storage no soportado: "${storage}"`);
}
