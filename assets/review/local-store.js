// Adaptador de almacenamiento en localStorage. Implementa la interfaz ReviewStore.
// En fase 2 se añade SupabaseStore con la MISMA interfaz y se elige en config.
function uuid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'c-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

export class LocalStorageStore {
  constructor(storage, namespace) {
    this.storage = storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    this.namespace = namespace || 'bno-review';
  }

  _key(projectId, page) {
    return `${this.namespace}:${projectId}:${page}`;
  }

  async list(projectId, page) {
    const raw = this.storage.getItem(this._key(projectId, page));
    return raw ? JSON.parse(raw) : [];
  }

  async create(comment) {
    const list = await this.list(comment.projectId, comment.page);
    const full = {
      ...comment,
      id: comment.id || uuid(),
      createdAt: comment.createdAt || new Date().toISOString(),
      status: comment.status || 'pendiente',
      replies: comment.replies || [],
    };
    list.push(full);
    this.storage.setItem(this._key(comment.projectId, comment.page), JSON.stringify(list));
    return full;
  }

  async update(projectId, page, id, patch) {
    const list = await this.list(projectId, page);
    const idx = list.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...patch };
    this.storage.setItem(this._key(projectId, page), JSON.stringify(list));
    return list[idx];
  }
}
