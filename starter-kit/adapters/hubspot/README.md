# Adapter — HubSpot CMS

Guía neutra para publicar el sitio en **HubSpot CMS**. No incluye theme de ningún
cliente: cada proyecto genera el suyo a partir del design system (`tokens.css` +
`base.css`) y de sus componentes.

## Estructura de un theme
```
theme/
├── theme.json            ← metadatos del theme
├── fields.json           ← campos globales del theme (colores, fuentes)
├── css/
│   ├── tokens.css        ← copiado del design-system del cliente
│   └── main.css          ← estilos base + componentes
├── js/main.js            ← utilidades (ver utilities/ui.js)
├── templates/            ← plantillas de página (.html con HubL)
└── modules/              ← <nombre>.module/ (module.html, fields.json,
                            module.css, module.js, meta.json)
```

## Comandos útiles (CLI de HubSpot)
Reemplaza `<cuenta>` por el alias de tu portal (configúralo con `hs init` /
`hs auth`). No hardcodees IDs de portal en el repo.

```bash
# Autenticación / cuentas
hs auth
hs accounts list

# Subir el theme completo o piezas
hs upload theme <cuenta>/theme
hs cms upload theme/modules/<x>.module <cuenta>/modules/<x>.module --account=<cuenta>
hs cms upload theme/css/main.css <cuenta>/css/main.css --account=<cuenta>

# Validar HubL de un módulo antes de subir
hs cms lint theme/modules/<x>.module --account=<cuenta>

# Traer cambios hechos en el Design Manager
hs cms fetch <cuenta>/modules/<x>.module theme/modules/<x>.module
```

## Notas / gotchas conocidos
- **`.webp`**: el Design Manager puede descartar `.webp` al subir (reporta SUCCESS
  pero el archivo no llega). Convierte a JPEG/PNG y verifica con `hs cms list`.
- **Repeaters**: van a nivel raíz del módulo; anidados dentro de otro grupo pierden
  sus items en la primera edición. Usa `|default(x, true)` en labels de repeater.
- **`module.css`** se inyecta en `standard_header_includes`; un `<link>` posterior
  a igual especificidad lo pisa (el módulo parece "no responder").
- **HubDB**: un PATCH de columnas sin los `id` de las existentes las recrea y vacía
  el borrador.
- **dnd_area**: no propaga cambios a páginas ya creadas; cada página guarda su
  snapshot.
