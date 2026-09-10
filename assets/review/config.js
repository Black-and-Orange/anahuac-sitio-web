// Configuración específica del proyecto. Es lo ÚNICO que cambia al replicar el
// módulo en otro sitio de Black & Orange. El núcleo no debe leer nada de aquí
// que no pase por este objeto.
export const CONFIG = {
  projectId: 'anahuac-2026',
  tokens: ['bno-interno', 'cliente-anahuac'],
  namespace: 'bno-review',
  storage: 'local', // 'local' (fase 1) | 'supabase' (fase 2)
  version: '1.0.0',
};
