# 📋 Correcciones del Cliente — Estado General
> Basado en documento "MP WEB Dev 2 290526 FP" — revisado el 06/06/2026

---

## ✅ Ya implementado

| # | Corrección del cliente | Dónde |
|---|---|---|
| 3 | Sección "Nosotros" agregada después de PRO | `/app/(frontend)/nosotros/`, `header.tsx`, `footer.tsx` |
| 3 | Nosotros: Propósito exacto del cliente | `nosotros-section.tsx` |
| 3 | Nosotros: Valores exactos del cliente | `nosotros-section.tsx` |
| 3 | Nosotros: Equipo completo — Facu, Charly, Patricio, Gustavo y Federico Vionnet | `nosotros-section.tsx` |
| 3 | Nosotros: Profesionales @ Academy con fotos | `nosotros-section.tsx` |
| 4.2 | Texto visual hero: "Rentabilizamos y profesionalizamos..." | `visual-hero.tsx` |
| 5 | Descripciones de Academy, Club y PRO actualizadas | `steps-section.tsx` |
| 5 | Botón Academy dice "Ver programa" | `steps-section.tsx` |
| 6 | Botón CTA dice "Rentabilizar mi Pyme" | `hero-section.tsx` |
| 6 | Botón CTA va al WhatsApp +11 6544 2672 | `hero-section.tsx` |
| 8 | Nuestro Equipo: botón "Conocé al Equipo" → `/nosotros` | `focus-section.tsx` |
| 8 | Texto "+15 Profesionales" con descripción correcta | `focus-section.tsx` |
| 9 | Hero visual de Academy: fondo negro, letras azules, foto premium | `app/(frontend)/academy/page.tsx` + `public/images/academy-hero-bg.png` |
| 11 | Hero visual de Club: fondo negro, letras azules, foto premium | `app/(frontend)/club/page.tsx` + `public/images/club-hero-bg.png` |
| 13 | Hero visual de PRO: fondo negro, letras azules, foto premium | `app/(frontend)/pro/page.tsx` + `public/images/pro-hero-bg.png` |
| 10 | Sección Academy: título, subtítulo, Dimensiones, Estructura, Cita y Descargar Programa | `academia-section.tsx` |
| 4.2/9/11/13 | Capa oscura añadida a `VisualHero` para mejorar contraste de texto | `visual-hero.tsx` |
| 12 | Cambios en sección CLUB: tag CLUB, H2, descripción y las 4 actividades | `club-section.tsx` |
| 14 | Cambios en sección PRO: H2, subtítulo, Qué cubrimos (5 roles), Cómo trabajamos (3 ítems) y CTA | `pro-section.tsx` |

---

## ❌ Pendiente / Falta implementar

---

### 4.1 Foto principal (Visual Hero de Inicio) — Página 6
**Cliente pide:** buscar una foto de su carpeta (fotos propias de Facu/Charly), o un tríptico de fotos propias.
- [ ] El cliente tiene que compartir sus fotos o elegir entre las de su carpeta. La imagen actual es generada/stock.

---

### 7. Cambio en Etiqueta y Título (Reality Carousel) — Página 9/10
**Cliente pide:** cambiar `"La realidad Pyme"` por → `"La realidad Pyme"` y `"Profesionalizar la Dirección es el primer paso para rentabilizar la empresa."`
(En realidad el cliente aprueba la estética y pide actualizar las etiquetas/títulos del carrusel de realidades)
- [ ] Revisar `reality-carousel.tsx` y ajustar las etiquetas y el título de la sección.

---

### A. Bug de Funcionalidad — Página 26
**Cliente reporta:** Desde `/inicio`, hacer click en "inicio" en la navbar no lleva al inicio de la página (scroll-to-top). Para las demás páginas funciona bien.
- [ ] Revisar el comportamiento del link "Inicio" en el `header.tsx` cuando ya se está en `/inicio` — agregar lógica de `scrollTo(0,0)` o `window.location.reload()` si la ruta actual es `/inicio`.

---

## 🔧 Técnico / Infra (pre-existente)

- [ ] Optimización de Caché: cambiar `cache: "no-store"` por ISR en `lib/api.ts` (para producción).
- [ ] Conectar el resto de secciones dinámicas con Payload CMS (Testimonios, etc.).
- [ ] Configurar roles y permisos finales en Payload para producción.
- [ ] Migración de cuentas Neon y Cloudinary a `mgmtpyme@gmail.com`.
- [ ] Sitemap y robots.txt dinámicos.
- [ ] Formulario de contacto: validación con Zod y estados loading/success.
