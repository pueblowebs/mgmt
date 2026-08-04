# Ficha Técnica y Arquitectura de Payload CMS

## 📋 Ficha Técnica Básica

| Componente | Tecnología / Configuración |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) + React 19 |
| **CMS** | Payload CMS 3.83 |
| **Base de Datos** | **PostgreSQL** (producción/remoto) / **SQLite** (fallback local `payload.db`) |
| **Almacenamiento Media** | Cloudinary (`payload-storage-cloudinary`) con límite de 5MB |
| **Editor RichText** | Lexical (`@payloadcms/richtext-lexical`) |
| **Estilos & UI** | Tailwind CSS v4, Radix UI, Lucide Icons |

---

## 🔌 Conexiones Básicas de Payload

### 1. Base de Datos
- **Motor principal**: PostgreSQL (configurado dinámicamente según la variable de entorno `DATABASE_URI`).
- **Fallback local**: SQLite (`payload.db`) en caso de no detectarse una cadena de conexión a Postgres.

### 2. APIs y GraphQL
- **REST API**: `http://localhost:3000/api`
- **GraphQL Endpoint**: `http://localhost:3000/api/graphql` (o `/graphql`)
- **GraphQL Playground**: Habilitado en la ruta `(payload)/graphql-playground`

---

## 📁 Estructura de Archivos del Proyecto

```text
mgmt/
├── app/
│   ├── (frontend)/       # Vistas y páginas de la aplicación Next.js principal
│   └── (payload)/        # Panel Admin de Payload CMS, GraphQL y APIs expuestas
│       ├── admin/        # Interfaz gráfica de administración Payload (/admin)
│       ├── api/          # Endpoints REST automáticos de Payload (/api/...)
│       └── graphql/      # Endpoint y Playground de GraphQL
├── collections/          # Definición de colecciones y esquemas (Users, Media, BlogPosts, FAQs)
├── components/           # Componentes UI reutilizables (Next.js + componentes Admin custom)
├── payload.config.ts     # Configuración principal de Payload (BD, plugins, Cloudinary, etc.)
└── payload-types.ts      # Tipos TypeScript generados automáticamente desde las colecciones
```
