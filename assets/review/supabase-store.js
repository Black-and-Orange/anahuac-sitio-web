// Adaptador Supabase. Implementa la interfaz ReviewStore, idéntica a LocalStorageStore.
// El cliente supabase-js se inyecta (para poder probar sin red).
import { nestReplies } from './thread.js';

function toRow(c) {
  const row = {};
  if (c.id !== undefined) row.id = c.id;
  if (c.projectId !== undefined) row.project_id = c.projectId;
  if (c.parentId !== undefined) row.parent_id = c.parentId;
  if (c.page !== undefined) row.page = c.page;
  if (c.selector !== undefined) row.selector = c.selector;
  if (c.fingerprint !== undefined) row.fingerprint = c.fingerprint;
  if (c.name !== undefined) row.name = c.name;
  if (c.comment !== undefined) row.comment = c.comment;
  if (c.status !== undefined) row.status = c.status;
  if (c.replies !== undefined) row.replies = c.replies;
  if (c.createdAt !== undefined) row.created_at = c.createdAt;
  return row;
}

function fromRow(r) {
  return {
    id: r.id,
    projectId: r.project_id,
    parentId: r.parent_id || null,
    page: r.page,
    selector: r.selector,
    fingerprint: r.fingerprint,
    name: r.name,
    comment: r.comment,
    status: r.status,
    replies: r.replies || [],
    createdAt: r.created_at,
    clickupUrl: r.clickup_url || null,
  };
}

export class SupabaseStore {
  constructor(client, projectId) {
    this.client = client;
    this.projectId = projectId;
  }

  async list(projectId, page) {
    const { data, error } = await this.client
      .from('comments')
      .select('*')
      .eq('project_id', projectId)
      .eq('page', page)
      .order('created_at', { ascending: true });
    if (error) throw new Error(error.message || String(error));
    // Solo comentarios de nivel superior, con sus respuestas anidadas.
    return nestReplies((data || []).map(fromRow));
  }

  async reply(parent, { name, text }) {
    return this.create({ projectId: parent.projectId, page: parent.page, parentId: parent.id, name, comment: text });
  }

  async create(comment) {
    const { data, error } = await this.client
      .from('comments')
      .insert(toRow(comment))
      .select()
      .single();
    if (error) throw new Error(error.message || String(error));
    return fromRow(data);
  }

  async update(projectId, page, id, patch) {
    const { data, error } = await this.client
      .from('comments')
      .update(toRow(patch))
      .eq('id', id)
      .select()
      .single();
    if (error) throw new Error(error.message || String(error));
    return data ? fromRow(data) : null;
  }

  async delete(projectId, page, id) {
    const { error } = await this.client
      .from('comments')
      .delete()
      .eq('id', id);
    if (error) throw new Error(error.message || String(error));
    return true;
  }
}
