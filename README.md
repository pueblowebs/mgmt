# Management Pyme - Next.js & Strapi

Proyecto integral para Management Pyme, compuesto por un frontend en Next.js y un backend en Strapi v5.

## 🏗️ Arquitectura de Infraestructura

El proyecto utiliza:
- **Frontend**: Next.js alojado (Vercel).
- **Backend**: Strapi Cloud (Free Tier).

### ⚠️ Limitación de Strapi Cloud (Free Tier)
El plan gratuito de Strapi Cloud utiliza una estrategia de **"Scale to Zero"**. Esto significa que después de un periodo de inactividad, el servidor se "duerme".
- **Consecuencia**: El primer usuario que entra después de un tiempo de inactividad experimenta una carga de **30-60 segundos** mientras el servidor despierta (Cold Start).
- **Problema con ISR**: Debido a que los timeouts de las funciones de Vercel son menores al tiempo de despertar de Strapi, se optó por una estrategia de fetch dinámico (`no-store`) con un timeout extendido en el cliente de API.

---

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
