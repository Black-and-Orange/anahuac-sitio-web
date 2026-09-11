// Configuración específica del proyecto. Es lo ÚNICO que cambia al replicar el
// módulo en otro sitio de Black & Orange. El núcleo no debe leer nada de aquí
// que no pase por este objeto.
export const CONFIG = {
  projectId: 'anahuac-2026',
  tokens: ['bno-interno', 'cliente-anahuac'],
  namespace: 'bno-review',
  storage: 'supabase', // 'local' | 'supabase'
  supabase: {
    url: 'https://gvnnhkectrnwhqkcrlar.supabase.co',
    publishableKey: 'sb_publishable_Frc_cn6l4BfMbrSh7WFkIQ_6-fqqej4',
  },
  version: '2.0.0',
};
