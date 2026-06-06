# 🚀 Acceso a Management Pyme CMS

Ahora que hemos migrado de Strapi a **Payload CMS**, el acceso al panel de administración está integrado directamente en tu aplicación de Next.js.

## 🔗 Enlace de Acceso
El panel está disponible en la siguiente URL (cuando el servidor está corriendo):

- **Local**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Producción**: `https://tu-dominio.com/admin`

---

## 🔑 Credenciales de Administrador
Durante la migración, creamos un usuario inicial con acceso total:

| Campo | Valor |
| :--- | :--- |
| **Email** | `admin@managementpyme.com` |
| **Contraseña** | `password123` |

> [!IMPORTANT]
> **Seguridad**: Te recomendamos cambiar la contraseña una vez que ingreses por primera vez desde la sección de "Users" (Usuarios) dentro del panel.

---

## 🛠️ Gestión de Contenidos
Dentro del panel encontrarás las siguientes secciones:

- **Blog Posts**: Gestiona las noticias y artículos. Los cambios se reflejan instantáneamente en la web gracias a la Local API.
- **FAQs**: Administra las preguntas frecuentes.
- **Site Settings**: Centraliza el Título, Subtítulo y Descripción global del sitio.
- **Media**: Biblioteca de imágenes y archivos.

---

## 💻 Comandos Útiles
Si el servidor no está corriendo, podés iniciarlo con:

```bash
cd mgmt
bun run dev
```

> [!TIP]
> **Sin Cold Starts**: A diferencia de Strapi Cloud, Payload arranca junto con Next.js. Si el sitio está online, el CMS también lo está.
