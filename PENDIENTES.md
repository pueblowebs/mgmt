# Pendientes del Proyecto

## Frontend (Next.js)
- [ ] **Optimización de Caché**: Cambiar `cache: "no-store"` por una estrategia de revalidación (ISR) en `mgmt/lib/api.ts` una vez que la web esté en producción para mejorar la performance.
- [ ] Conectar el resto de las secciones dinámicas (Testimonios, Servicios, etc.) con Strapi.

## Backend (Strapi)
- [ ] Configurar roles y permisos finales para producción.
- [ ] Asegurar que todas las imágenes tengan texto alternativo (alt text) para SEO.

## Dudas / Decisiones pendientes
- [ ] **¿API Routes o Server Components directos?** Actualmente `lib/api.ts` se llama desde Server Components (correcto para datos estáticos). Evaluar si se necesitan rutas `/app/api/route.ts` cuando aparezcan Client Components que requieran fetch dinámico (ej: buscador, formularios, filtros en tiempo real).
