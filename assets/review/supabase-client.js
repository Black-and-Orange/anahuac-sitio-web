// Solo navegador: importa supabase-js desde CDN y devuelve un SupabaseStore listo.
// Aislado aquí porque el import de CDN no corre en tests de node.
import { SupabaseStore } from './supabase-store.js';

export async function makeSupabaseStore(config) {
  const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
  const client = createClient(config.supabase.url, config.supabase.publishableKey);
  return new SupabaseStore(client, config.projectId);
}
