# BnO Review — capa de revisión visual (drop-in)

Comentarios visuales anclados a elementos del DOM, activados con
`?review=true&token=XXX`. Sin backend en fase 1 (persiste en `localStorage`).

## Cómo replicar en otro sitio estático de Black & Orange

1. Copia la carpeta `assets/review/` completa al otro proyecto.
2. Edita `assets/review/config.js`:
   - `projectId`: identificador único del proyecto.
   - `tokens`: uno o más tokens de revisión (rotables).
3. Añade antes de `</body>` en cada página:
   `<script type="module" src="assets/review/review.js"></script>`
   (ajusta la ruta si `assets/` no está en la raíz).
4. Abre `pagina.html?review=true&token=<uno de tus tokens>`.

## Fase 2a — Supabase

Migración completada de `localStorage` a Supabase para persistencia compartida.

### Pasos de setup

1. **Crear la tabla en Supabase:**
   - Conecta al proyecto Supabase en `https://supabase.com`.
   - Copia la SQL de `supabase/schema.sql` y ejecuta en el editor SQL.

2. **Configurar credenciales en `config.js`:**
   ```javascript
   storage: 'supabase',
   supabase: {
     url: 'https://xxxx.supabase.co',
     publishableKey: 'sb_publishable_...' // clave pública (segura en RLS)
   }
   ```
   (Las credenciales están en el panel de Supabase → Project settings → API).

3. **Crear usuario admin:**
   - En Supabase → Authentication → Users, añade un usuario de administrador.
   - Este usuario accede al panel `/admin` con su email y contraseña.

4. **Activar revisión:**
   - Abre `pagina.html?review=true&token=<uno de tus tokens>`.
   - Los comentarios se guardan en Supabase y son visibles desde `/admin`.

### Notas de seguridad

- La `publishableKey` es pública: se envía al navegador y eso es correcto.
- La seguridad real reside en **RLS** (Row Level Security):
  - Usuario anónimo: INSERT y SELECT únicamente.
  - Usuario autenticado: todas las operaciones (editar estado, responder).
- El panel `/admin` requiere autenticación y restringe cambios de estado a usuarios
  autenticados.

### Replicación a otro proyecto

Para usar el módulo en otro sitio estático de Black & Orange:

1. Copia `assets/review/` completo.
2. Crea un nuevo proyecto Supabase.
3. Ejecuta `supabase/schema.sql` en el nuevo proyecto.
4. Edita `config.js`:
   - `projectId`: identificador único (diferente del actual).
   - `tokens`: rotables según necesidad.
   - `supabase.url` y `supabase.publishableKey`: credenciales del nuevo proyecto.
5. Crea usuario admin en el nuevo Supabase.
6. Asegúrate de incluir el `<script>` en cada página.
7. El panel `/admin` lee sus credenciales de Supabase desde `assets/review/config.js`
   (no requiere edición aparte); replicar el proyecto implica copiar también la
   carpeta `admin/`.

## Pruebas

`npm test` corre la lógica pura (gate, anchor, selector, store) con `node --test`.
