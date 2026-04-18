# Management Pyme - Next.js & Strapi

Proyecto integral para Management Pyme, compuesto por un frontend en Next.js y un backend en Strapi v5.

## 🏗️ Arquitectura de Infraestructura

El proyecto utiliza:
- **Frontend + Backend**: Next.js alojado (Vercel) con Payload CMS incrustado.
- **Base de Datos**: SQLite (como archivo local, recomendado PostgreSQL para prod escalar).

### 🚀 Ventajas del Nuevo Setup (Payload)
- **Zero Cold Starts**: Payload corre dentro del mismo entorno de Next.js, por lo que el admin y las consultas a la DB son instantáneas, resolviendo el problema crónico que teníamos con Strapi Cloud Free.
- **Un Solo Deploy**: No hace falta mantener un repo separado para el backend. Todo vive en la carpeta `/mgmt`.
- **Panel Admin Integrado**: El gestor de contenidos está disponible directamente en `/admin`.

## 🛠️ Solución: "Stay Alive" Ping (UptimeRobot)

Para evitar el Cold Start y mantener la web rápida para todos los usuarios, se configuró un monitor externo que mantiene el servidor despierto.

### Configuración de UptimeRobot
- **Servicio**: [UptimeRobot](https://uptimerobot.com)
- **Usuario**: `pablolospennato@gmail.com`
- **Estrategia (Opción A)**: Ping a la raíz del proyecto para evitar errores de permisos (403).
- **URL de Monitor**: `https://ambitious-strength-06b607a994.strapiapp.com/`
- **Intervalo**: **20 minutos**.
    - *Nota*: Se usa 20 minutos para no exceder el límite de 2.500 requests mensuales del plan gratuito de Strapi Cloud (~2.160 pings/mes).

---

## 💻 Desarrollo Local

### Cliente de API (`mgmt/lib/api.ts`)
El cliente de API está configurado con un `AbortController` de **45 segundos** para dar margen al servidor de despertar en caso de que el ping falle o la instancia esté muy fría.

```typescript
// Timeout de 45s para soportar cold starts
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 45_000);
```
