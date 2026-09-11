// Adaptador de almacenamiento en localStorage. Implementa la interfaz ReviewStore.
// En fase 2 se añade SupabaseStore con la MISMA interfaz y se elige en config.
import { nestReplies } from './thread.js';

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

  _raw(projectId, page) {
    const raw = this.storage.getItem(this._key(projectId, page));
    return raw ? JSON.parse(raw) : [];
  }

  async list(projectId, page) {
    // Solo comentarios de nivel superior, cada uno con sus respuestas anidadas.
    return nestReplies(this._raw(projectId, page));
  }

  async reply(parent, { name, text }) {
    return this.create({ projectId: parent.projectId, page: parent.page, parentId: parent.id, name, comment: text });
  }

  async create(comment) {
    const list = this._raw(comment.projectId, comment.page);
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
    const list = this._raw(projectId, page);
    const idx = list.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...patch };
    this.storage.setItem(this._key(projectId, page), JSON.stringify(list));
    return list[idx];
  }

  async delete(projectId, page, id) {
    const list = this._raw(projectId, page);
    // Borra el comentario y, si era padre, sus respuestas (cascade local).
    const next = list.filter((c) => c.id !== id && c.parentId !== id);
    this.storage.setItem(this._key(projectId, page), JSON.stringify(next));
    return next.length !== list.length;
  }
}
