# 📋 Plan de Trabajo y Pendientes — Management PyME

Este documento centraliza todas las tareas pendientes, mejoras técnicas, objetivos de diseño e historial de implementaciones del proyecto.

---

## ❌ Pendientes / Por Implementar

### 🎨 Identidad, Branding y Media

- [X] **Foto principal (Visual Hero de Inicio):** Buscar y seleccionar fotos propias de la carpeta del cliente (Facu/Charly), o armar un tríptico de fotos reales para reemplazar la imagen actual (`/oficina.webp`).
- [X] **Crear Logo Oficial:** Diseñar las versiones finales (principal, negativa e icono).
- [X] **Implementar Logo en Frontend:** Actualizar el componente `Navbar` / `Header` con el nuevo archivo del logo oficial.
- [X] **Personalizar CMS:** Cambiar el logo en `payload.config.ts` (Admin UI) y el favicon del panel de administración.
- [ ] **Favicons:** Implementar el set completo de favicons para el sitio público.

### ⚙️ Desarrollo CMS (Payload)

- [X] **Borrar del CMS Site Settings.**
- [ ] **Dinamizar Carrusel de Realidades:** Mover el array `REALITIES` de `reality-carousel.tsx` a una Global o Colección en Payload.
- [ ] **Sección de Enfoque (Focus):** Dinamizar las "Creencias" y los textos de la sección de equipo.
- [ ] **Gestión de Leads:** Crear colección `Inquiries` o `Leads` para capturar y almacenar datos del formulario de contacto.
- [ ] **Configuración de Caché (ISR):** Cambiar `cache: "no-store"` por Regeneración Incremental Estática (ISR) en `lib/api.ts` para producción.

### 🚀 Frontend y UI/UX

- [ ] **Página de Blog:** Implementar la visualización y listado dinámico de posts, así como la vista de detalle del post (actualmente con mocks).
- [ ] **Optimización de Imágenes:** Asegurar la correcta instalación y funcionamiento de `sharp` (requerido por Payload) para el procesamiento de imágenes en producción.

### 🔍 SEO, Performance y Analytics

- [ ] **Metadatos Dinámicos:** Vincular la configuración global del sitio (`SiteSettings` en Payload) con el objeto `metadata` de Next.js.
- [ ] **Sitemap y Robots.txt:** Generar dinámicamente según las colecciones del CMS (páginas, posts, etc.).
- [ ] **Analytics:** Configurar el ID de Vercel Analytics o Google Analytics.

### 🛠️ Despliegue, Seguridad e Infraestructura

- [ ] **Roles y Permisos:** Refinar el acceso de 'Editor' en Payload para que solo gestione contenido y no configuraciones del sistema.
- [ ] **Variables de Entorno:** Asegurar que `PAYLOAD_SECRET` y las credenciales de base de datos estén configuradas correctamente en producción.
- [ ] **Migración de Cuentas:** Migrar las cuentas de Neon (Base de datos) y Cloudinary (Almacenamiento de archivos/imágenes) desde `pueblowebs@gmail.com` a `mgmtpyme@gmail.com`.

---

## ✅ Completado / Ya Implementado

| Item / Corrección                                                                                                                                          | Dónde / Componente                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Bug de Funcionalidad (Scroll-to-top):** Al hacer clic en "Inicio" estando en `/inicio`, la página realiza un scroll suave hacia el inicio.       | `header.tsx`                                                                                             |
| **Reality Carousel:** Título y etiquetas actualizados ("La Realidad PyME" y "Profesionalizar la Dirección es el primer paso...")                    | `reality-carousel.tsx`                                                                                   |
| **Sección "Nosotros":** Creada con propósito, valores, equipo completo (Facu, Charly, Patricio, Gustavo, Federico V.) y fotos de profesionales.     | `/app/(frontend)/nosotros/`, `header.tsx`, `footer.tsx`, `nosotros-section.tsx`                    |
| **Texto visual hero:** "Rentabilizamos y profesionalizamos..."                                                                                        | `visual-hero.tsx`                                                                                        |
| **Descripciones de Academy, Club y PRO:** Actualizadas y unificadas.                                                                                  | `steps-section.tsx`                                                                                      |
| **Botones y CTAs:** Botón de Academy dice "Ver programa"; CTA principal lleva a WhatsApp con el texto correcto.                                      | `steps-section.tsx`, `hero-section.tsx`                                                                |
| **Secciones de Servicios:** Academy (estructura, cita, descarga), Club (actividades) y PRO (roles, cómo trabajamos, CTAs) completadas y estilizadas. | `academia-section.tsx`, `club-section.tsx`, `pro-section.tsx`                                        |
| **Mejoras de contraste:** Capa oscura añadida a `VisualHero` para mejorar legibilidad.                                                             | `visual-hero.tsx`                                                                                        |
| **Sección de Enfoque:** Botón "Conocé al Equipo" redirige correctamente a `/nosotros` y textos de profesionales corregidos.                      | `focus-section.tsx`                                                                                      |
| **Borrar del CMS Site Settings:** Eliminada la configuración global, su fetcher en API y reemplazado por fallbacks en el frontend.                   | `payload.config.ts`, `globals/SiteSettings.ts` (deleted), `lib/api.ts`, `layout.tsx`, `page.tsx` |
| **Ojito en login:** Añadido botón toggle para mostrar/ocultar contraseña en el formulario de login del admin panel.                                | `AdminLogo.tsx`                                                                                          |
