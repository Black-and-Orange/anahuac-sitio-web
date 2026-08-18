# Validación: Apoyos económicos

- Fecha: 2026-07-30
- Alcance: versión local de `apoyos-economicos.html`.
- Referencia: capturas aprobadas por módulo e instrucciones del 2026-07-30.
- Resultado: sin hallazgos bloqueantes para revisión local.
- HubSpot: no evaluado ni modificado en esta etapa.

## Verificaciones

| Área | Resultado |
|---|---|
| Readiness y tokens | `npm run validate` aprobado |
| JavaScript | Sintaxis válida y sin errores de ejecución |
| Accesibilidad | Axe WCAG 2 A/AA y 2.1 A/AA: 0 violaciones |
| Jerarquía | Una H1; H2 por módulo; H3 por tarjeta cuando corresponde |
| Carrusel de apoyos | Controles accesibles y desplazamiento funcional |
| Pasos móvil | Navegación generada desde 5 tarjetas; una tarjeta visible |
| Asesoría | Cascada funcional: 2 procedencias, 32 estados, 22 países y preparatoria condicional para CDMX/Edomex, oculta en la carga inicial |
| Responsive móvil | Viewport y documento de 390 px; sin overflow horizontal |
| Menú móvil | `inert` cerrado y enfocable al abrir |
| Recursos | Único 404: `/favicon.ico`, preexistente y no bloqueante |

## Hallazgos no bloqueantes

### Advertencia: contenido temporal en fichas
- Ubicación: `apoyos-economicos.html`, módulo Detalle por apoyo.
- Regla: las páginas publicables no deben conservar placeholders o texto temporal.
- Estado: ya estaba presente en la referencia aprobada; no se modificó porque la solicitud indicó no alterar contenido adicional.
- Corrección sugerida: reemplazar los textos Lorem ipsum y confirmar los datos de Maguén David antes de migrar o publicar.

### Nota: favicon ausente
- Ubicación: carga de `/favicon.ico`.
- Consecuencia: genera un 404 sin impacto en layout o funcionalidad.
- Corrección sugerida: definir el favicon institucional cuando se entreguen los assets finales de metadata.

### Advertencia: mapeo parcial de preparatorias
- Ubicación: módulo Asesoría.
- Fuente revisada: formulario público de Atención Preuniversitaria.
- Estado: el catálogo público es plano y no expone la relación completa `estado → preparatoria`.
- Mitigación local: se muestran solo planteles con ubicación explícita y `Otra preparatoria`.
- Corrección requerida: aprobar el mapeo institucional completo antes de migrar o publicar.

### Nota: foto de asesor con placeholder genérico
- Ubicación: módulo Asesoría, tarjeta de asesor.
- Estado: la imagen cambia con cada selección, pero solo existen dos placeholders genéricos en `assets/proceso-de-admision/`, así que los 12 asesores se reparten dos fotos según su género.
- Decisión: se aprueba el placeholder genérico como solución temporal (2026-07-30); no bloquea la entrega.
- Corrección sugerida: sustituir por la foto individual de cada asesor cuando la entregue el área de contenido.

## Revisión humana pendiente
- Aprobar visualmente el disclaimer de concursos académicos.
- Entregar las fotos individuales de los asesores (opcional; el placeholder genérico ya quedó aprobado).
- Confirmar el contenido definitivo de las fichas.
- Confirmar el mapeo completo de preparatorias para CDMX y Estado de México.
- Autorizar el inicio de la etapa HubSpot por separado.
