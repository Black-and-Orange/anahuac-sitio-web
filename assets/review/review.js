import { CONFIG } from './config.js';
import { shouldActivate } from './gate.js';
import { createStore } from './store-factory.js';
import { ReviewUI } from './ui.js';

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path || 'index.html';
}

function boot() {
  const { active, token } = shouldActivate(window.location.search, CONFIG);
  if (!active) return; // footprint cero

  const store = createStore(CONFIG);
  const ui = new ReviewUI({ store, config: CONFIG, token, page: currentPage() });
  ui.mount();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
