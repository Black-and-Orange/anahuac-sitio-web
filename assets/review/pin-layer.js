import { resolveElement } from './selector-engine.js';

const STATES = [
  { key: 'pendiente', label: 'Pendiente' },
  { key: 'en-proceso', label: 'En proceso' },
  { key: 'resuelto', label: 'Resuelto' },
];

export class PinLayer {
  constructor({ root, store, config, page }) {
    this.root = root;
    this.store = store;
    this.config = config;
    this.page = page;
    this.pins = []; // { comment, el (target), pinEl }
    this._raf = null;
    this._reposition = this._reposition.bind(this);
    window.addEventListener('resize', this._scheduleReposition.bind(this), { passive: true });
    window.addEventListener('scroll', this._scheduleReposition.bind(this), { passive: true, capture: true });
  }

  async renderAll() {
    const list = await this.store.list(this.config.projectId, this.page);
    list.forEach((c, i) => this.addPin(c, i + 1));
  }

  addPin(comment, number) {
    const target = resolveElement(comment, document);
    const pinEl = document.createElement('button');
    pinEl.className = 'bnor-pin';
    pinEl.dataset.status = comment.status;
    pinEl.dataset.lost = String(!target);
    pinEl.textContent = number != null ? String(number) : '•';
    pinEl.addEventListener('click', (e) => { e.stopPropagation(); this.openCard(comment, pinEl); });
    this.root.appendChild(pinEl);
    // Si no resolvió, ancla a la sección para no perderlo.
    const anchorEl = target || (comment.fingerprint && comment.fingerprint.sectionId
      ? document.getElementById(comment.fingerprint.sectionId) : null);
    const entry = { comment, el: anchorEl, pinEl, lost: !target };
    this.pins.push(entry);
    this._place(entry);
  }

  _place(entry) {
    if (!entry.el) { entry.pinEl.style.display = 'none'; return; }
    const r = entry.el.getBoundingClientRect();
    entry.pinEl.style.left = (r.left + Math.min(r.width, 14)) + 'px';
    entry.pinEl.style.top = (r.top + 12) + 'px';
  }

  _scheduleReposition() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(this._reposition);
  }

  _reposition() {
    this._raf = null;
    this.pins.forEach((entry) => this._place(entry));
  }

  openCard(comment, pinEl) {
    if (this._closeCardHandler) {
      document.removeEventListener('click', this._closeCardHandler, true);
      this._closeCardHandler = null;
    }
    const existing = this.root.querySelector('.bnor-card');
    if (existing) existing.remove();
    const card = document.createElement('div');
    card.className = 'bnor-card';
    const date = new Date(comment.createdAt).toLocaleString('es-MX');
    const entry = this.pins.find((p) => p.comment === comment || p.comment.id === comment.id);
    const lost = entry ? entry.lost : false;
    card.innerHTML = `
      <div class="bnor-author">${escapeHtml(comment.name)}</div>
      <div class="bnor-date">${date}</div>
      ${lost ? '<div class="bnor-lost">Elemento no localizado — anclado a la sección</div>' : ''}
      <div class="bnor-body">${escapeHtml(comment.comment)}</div>
      <div class="bnor-states">
        ${STATES.map((s) => `<button class="bnor-state" data-state="${s.key}" aria-pressed="${s.key === comment.status}">${s.label}</button>`).join('')}
      </div>`;
    const r = pinEl.getBoundingClientRect();
    card.style.left = Math.max(12, Math.min(r.left, window.innerWidth - 312)) + 'px';
    card.style.top = Math.max(12, Math.min(r.bottom + 8, window.innerHeight - 160)) + 'px';
    this.root.appendChild(card);

    card.addEventListener('click', async (ev) => {
      const st = ev.target.dataset.state;
      if (!st) return;
      const updated = await this.store.update(this.config.projectId, this.page, comment.id, { status: st });
      if (updated) {
        comment.status = st;
        pinEl.dataset.status = st;
        card.querySelectorAll('.bnor-state').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.state === st)));
      }
    });

    const closeOnOutside = (ev) => {
      if (!ev.target.closest || !ev.target.closest('#bno-review-root')) {
        card.remove();
        document.removeEventListener('click', closeOnOutside, true);
        this._closeCardHandler = null;
      }
    };
    this._closeCardHandler = closeOnOutside;
    setTimeout(() => document.addEventListener('click', closeOnOutside, true), 0);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
