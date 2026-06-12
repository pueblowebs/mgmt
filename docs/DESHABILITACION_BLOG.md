# Deshabilitación del Blog

Este documento detalla los cambios realizados para desactivar temporalmente el acceso al Blog y ocultarlo de la interfaz pública del sitio, asegurando que los usuarios no puedan acceder ni ver enlaces a él.

## Cambios Realizados

### 1. Interfaz de Usuario (UI)
- **Header (`/mgmt/components/header.tsx`):** Se comentó la entrada `"Blog"` del array `navItems` de navegación principal.
- **Footer (`/mgmt/components/footer.tsx`):** Se comentó el enlace `"Blog"` en la sección de links secundarios.

### 2. Acceso y Rutas
- **Página de Listado de Blog (`/mgmt/app/(frontend)/blog/page.tsx`):** Se importó y llamó a la función `notFound()` de Next.js al inicio de la página para responder con un código HTTP `404` ante cualquier petición.
- **Página de Detalle de Entrada (`/mgmt/app/(frontend)/blog/[slug]/page.tsx`):** Se llamó a la función `notFound()` al inicio del componente para que ningún artículo individual sea accesible.

---

## Cómo Revertir estos Cambios

Para volver a habilitar el blog en el futuro, simplemente realice los siguientes pasos:

1. **Habilitar en el Header:**
   En [header.tsx](file:///Users/pablolospe/Documents/proyectos/pueblo-branding/mgmt-next-strapi/mgmt/components/header.tsx), descomente la línea del menú:
   ```typescript
   // { label: "Blog", href: "/blog" },
   ```
   a:
   ```typescript
   { label: "Blog", href: "/blog" },
   ```

2. **Habilitar en el Footer:**
   En [footer.tsx](file:///Users/pablolospe/Documents/proyectos/pueblo-branding/mgmt-next-strapi/mgmt/components/footer.tsx), descomente la línea del enlace:
   ```tsx
   {/* <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li> */}
   ```
   a:
   ```tsx
   <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li>
   ```

3. **Habilitar Rutas:**
   - En [app/(frontend)/blog/page.tsx](file:///Users/pablolospe/Documents/proyectos/pueblo-branding/mgmt-next-strapi/mgmt/app/(frontend)/blog/page.tsx), elimine la invocación a `notFound()` al principio de `BlogListingPage()`:
     ```typescript
     export default function BlogListingPage() {
       notFound() // <--- Eliminar esta línea
       return (
         // ...
       )
     }
     ```
   - En [app/(frontend)/blog/[slug]/page.tsx](file:///Users/pablolospe/Documents/proyectos/pueblo-branding/mgmt-next-strapi/mgmt/app/(frontend)/blog/[slug]/page.tsx), elimine la invocación a `notFound()` al principio de `BlogPostPage()`:
     ```typescript
     export default async function BlogPostPage({ params }: BlogPostPageProps) {
       notFound() // <--- Eliminar esta línea
       const { slug } = await params
       // ...
     }
     ```
