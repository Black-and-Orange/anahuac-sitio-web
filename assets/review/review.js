import { CONFIG } from './config.js';
import { shouldActivate } from './gate.js';
import { LocalStorageStore } from './local-store.js';
import { ReviewUI } from './ui.js';

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path || 'index.html';
}

function boot() {
  const { active, token } = shouldActivate(window.location.search, CONFIG);
  if (!active) return; // footprint cero

  const store = new LocalStorageStore(window.localStorage, CONFIG.namespace);
  const ui = new ReviewUI({ store, config: CONFIG, token, page: currentPage() });
  ui.mount();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
