# 📋 Plan de Trabajo - Management Pyme

Este documento centraliza las tareas pendientes, mejoras técnicas y objetivos de diseño para el proyecto.

## 🎨 Identidad y Branding
- [ ] **Crear Logo Oficial:** Diseñar las versiones (principal, negativa e icono).
- [ ] **Implementar Logo en Frontend:** Actualizar el componente `Navbar` con el nuevo archivo.
- [ ] **Personalizar CMS:** Cambiar el logo en `payload.config.ts` (Admin UI) y el favicon del panel.
- [ ] **Favicon:** Generar e implementar el set de favicons para el sitio público.

## ⚙️ Desarrollo CMS (Payload)
- [ ] **Dinamizar Carrusel de Realidades:** Mover el array `REALITIES` de `reality-carousel.tsx` a una Global o Colección en Payload.
- [ ] **Sección de Enfoque (Focus):** Dinamizar las "Creencias" y los textos de la sección de equipo.
- [ ] **Gestión de Leads:** Crear colección `Inquiries` o `Leads` para capturar datos del formulario de contacto.
- [ ] **Configuración de Email:** Instalar y configurar un adapter de email (ej. Resend o SMTP) para notificaciones.

## 🚀 Frontend y UI/UX
- [ ] **Formulario de Contacto:** Implementar validación con Zod y manejo de estados (loading/success) en la página `/contacto`.
- [ ] **Optimización de Imágenes:** Instalar `sharp` (requerido por Payload) para el procesamiento de imágenes en el servidor.
- [ ] **Página de Blog:** Implementar el listado dinámico de posts y la vista de detalle (actualmente hay mocks).
- [ ] **Newsletter:** Crear un componente de suscripción en el footer.

## 🔍 SEO y Performance
- [ ] **Metadatos Dinámicos:** Vincular `SiteSettings` con el objeto `metadata` de Next.js.
- [ ] **Sitemap y Robots.txt:** Generar dinámicamente según las colecciones del CMS.
- [ ] **Analytics:** Configurar el ID de Vercel Analytics o Google Analytics.

## 🛠️ Despliegue y Seguridad
- [ ] **Roles y Permisos:** Refinar el acceso de 'Editor' para que solo gestione contenido y no configuraciones del sistema.
- [ ] **Variables de Entorno:** Asegurar que `PAYLOAD_SECRET` y las credenciales de DB estén configuradas en el entorno de producción.

## 🌐 Infraestructura y Cuentas
- [ ] **Migración de Cuentas:** Migrar Neon y Cloudinary de `pueblowebs@gmail.com` a `mgmtpyme@gmail.com`.
