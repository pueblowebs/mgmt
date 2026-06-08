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

### 12. Cambios en sección CLUB — Página 20
**Cliente pide cambios en `club-section.tsx`:**

- [ ] Título del tag: cambiar `"El Club"` → `"CLUB"` (sin artículo)
- [ ] Título H2: `"Dirección que sostiene y potencia"`
- [ ] Descripción: `"Comunidad de Empresarios y CEOs egresados de Academy que co-dirigen sus planes de rentabilidad, sustentabilidad y profesionalización."`
- [ ] Reemplazar las 4 tarjetas de features actuales por las **4 Actividades del Club**:
  1. **Mentoreo al CEO:** cada CEO tiene un Mentor Empresario asignado semanal.
  2. **Directorio:** mensualmente los miembros visitan empresas del Club como Directores independientes.
  3. **Wellness:** dos meses al año, dos actividades de retiro (bienestar y comunidad).
  4. **Academy & Speakers:** acceso gratuito e ilimitado a seminarios y speakers de Management Pyme.

---

### 14. Cambios en sección PRO — Páginas 24–25
**Cliente pide cambios en `pro-section.tsx`:**

- [ ] Título H2: `"El equipo que tu empresa necesita para ser rentable."`
- [ ] Subtítulo/descripción: `"Competir, rentabilizar y sostener la empresa requiere habilidades y experiencia que la Pyme no tiene y nosotros cubrimos."`
- [ ] Reemplazar "Qué abordamos" con **"Qué cubrimos"** — 5 roles:
  1. **Fundador:** convivimos con el fundador día a día, ayudándolo a salir donde sufre y ubicarlo donde disfruta.
  2. **CEO:** co-gerenciamos la empresa, rentabilizándola, profesionalizándola y haciéndola competitiva.
  3. **Comercial:** dirigimos la estrategia de rentabilización y co-gerenciamos el equipo comercial.
  4. **Control de Gestión:** lideramos administración y finanzas, construyendo estados contables básicos y panel de monitoreo.
  5. **Personas y Cultura:** lideramos la transformación estructural y cultural para rentabilizar la empresa.
- [ ] Reemplazar "Cómo trabajamos" con los 3 items del cliente:
  1. **"All In":** equipo completo, somos una empresa.
  2. **Cross land-cross time:** estamos donde tenemos que estar cuando tenemos que estar.
  3. **Tercer tiempo:** co-creamos ambiente de aprendizaje para incrementar autonomía y responsabilidad.
- [ ] Cambiar el CTA de `"Necesito acompañamiento estratégico"` → `"Quiero completar mi equipo con PRO"`

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
