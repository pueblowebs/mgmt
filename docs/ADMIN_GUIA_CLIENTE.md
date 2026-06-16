# Guía de Administración — Management PyME

Documento para el equipo de Management PyME. Explica cómo funciona el panel de administración del sitio web y sobre qué infraestructura corre.

---

## Panel de Administración (`/admin`)

El sitio web incluye un panel de administración accesible desde:

```
https://managementpyme.com/admin
```

### ¿Para qué sirve?

Desde el panel `/admin` podés gestionar el contenido del sitio sin necesidad de tocar código:

| Sección | ¿Qué se puede hacer? |
|---|---|
| **Posts / Blog** | Crear, editar y publicar artículos del blog |
| **Media / Imágenes** | Subir y gestionar imágenes del sitio |
| **Usuarios** | Administrar quién tiene acceso al panel |

### Acceso

- **URL:** `https://managementpyme.com/admin`
- **Usuario:** el email con el que fue registrado el administrador
- **Contraseña:** la definida al crear la cuenta

> Si necesitás recuperar o cambiar la contraseña, contactá al equipo técnico.

---

## Infraestructura (¿Dónde está alojado el sitio?)

El sitio funciona sobre tres servicios externos, todos en su **plan gratuito**:

### 1. Vercel — Hosting del sitio web
- **Qué hace:** aloja el sitio web (Next.js) y el panel `/admin`. Es el servidor desde donde se sirven todas las páginas.
- **Plan actual:** Hobby (gratuito)
- **Límite clave:** 100 GB de transferencia/mes y hasta 6.000 horas de build/mes.
- 🔗 [vercel.com/pricing](https://vercel.com/pricing)

### 2. Neon — Base de datos
- **Qué hace:** almacena todo el contenido del sitio (posts, usuarios, configuración).
- **Plan actual:** Free (gratuito)
- **Límite clave:** 0,5 GB de almacenamiento y 191 horas de compute/mes.
- 🔗 [neon.tech/pricing](https://neon.tech/pricing)

### 3. Cloudinary — Imágenes
- **Qué hace:** almacena y sirve las imágenes que se suben desde el panel `/admin`.
- **Plan actual:** Free (gratuito)
- **Límite clave:** 25 GB de almacenamiento y 25 GB de transferencia/mes.
- 🔗 [cloudinary.com/pricing](https://cloudinary.com/pricing)

---

## ⚠️ Aviso importante sobre el plan gratuito

> El sitio funciona **sin costo mensual** mientras los tres servicios mantengan sus condiciones actuales de plan gratuito.
>
> Estos servicios pueden modificar o discontinuar sus planes gratuitos en cualquier momento. Si eso ocurre, se evaluará migrar a un plan pago o a una alternativa equivalente.
>
> El costo estimado de migrar a planes pagos básicos en los tres servicios es de aproximadamente **USD 20–40/mes** en total.

---

## Contacto técnico

Para cualquier duda sobre el funcionamiento del sitio o del panel:

**Pueblo Branding** — equipo de desarrollo  
📧 hola@pueblobranding.com
