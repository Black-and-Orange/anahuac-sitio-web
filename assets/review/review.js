import { CONFIG } from './config.js';
import { shouldActivate } from './gate.js';
import { createStore } from './store-factory.js';
import { ReviewUI } from './ui.js';
import { makeSupabaseStore } from './supabase-client.js';

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path || 'index.html';
}

async function boot() {
  const { active, token } = shouldActivate(window.location.search, CONFIG);
  if (!active) return; // footprint cero

  let store;
  try {
    store = CONFIG.storage === 'supabase'
      ? await makeSupabaseStore(CONFIG)
      : createStore(CONFIG);
  } catch (e) {
    console.warn('[BnO Review] no se pudo iniciar el almacenamiento:', e);
    return;
  }

  const ui = new ReviewUI({ store, config: CONFIG, token, page: currentPage() });
  ui.mount();

  const m = window.location.hash.match(/comment=([\w-]+)/);
  if (m) {
    try { await ui.ready; ui.pinLayer.focusComment(m[1]); } catch (_) {}
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
