# Sistema de Branding y Paletas de Color - Management Pyme

Este documento resume las especificaciones de marca e implementación de la paleta institucional de la plataforma.

## 1. Paleta Institucional (Consolidada)
**Objetivo:** Marca actual, accesible, formativa y moderna. Ideal para contenidos, academia y enfoque mobile-first.
**Configuración por defecto.**

*   **Negro noche (#1a1c20):** Tipografía elegante, headers y footers.
*   **Azul jean (#576d7d):** Color institucional primario y acentos modernos.
*   **Color de Acción:** (Pendiente de reemplazo)
*   **Crudo (#fbfaf8):** Fondo principal (arena/gris piedra).
*   **Gris acero (#dfdddf):** Bordes y elementos secundarios.

---
*(Nota: Las configuraciones anteriores Crecimiento y Digital han sido descartadas).*

---

---

## 4. Lineamientos de Tipografía y Estilo
Se ha definido un estilo tipográfico más maduro, compacto y con una jerarquía clara.

*   **Negritas SI, Cursivas NO:** Se ha eliminado el uso de clases `italic` en toda la interfaz. Cualquier énfasis o cita se resuelve mediante el uso de `font-bold`.
*   **Jerarquía de Títulos:** Se ha reducido la escala de los titulares para evitar que saturen el espacio visual:
    *   Escala Principal: `text-3xl md:text-5xl` (antes 6xl).
    *   Escala Secundaria: `text-2xl md:text-3xl`.
*   **Interlineado Compacto (Leading):** Los títulos deben usar siempre un interlineado reducido para dar sensación de bloque sólido y premium (`leading-none`, `leading-[0.95]` o `leading-[1.0]`).
*   **Fuentes de la Marca:**
    *   **Titulares (Serif):** `Outfit` (Variable `--font-serif`).
    *   **Cuerpo (Sans):** `Inter` (Variable `--font-sans`).

---

## 5. Arquitectura y Navegación
La aplicación ha transicionado de una landing de scroll único a una estructura multi-página profesional.

*   **Rutas Independientes:** `/inicio`, `/academia`, `/clubdeempresarios`, `/pro`, `/blog` y `/contacto`.
*   **Persistencia:** El `Header`, `Footer` y el `WhatsAppButton` están definidos en el `layout.tsx` raíz.
*   **Redirección Ética:** La ruta raíz `/` redirige automáticamente a `/inicio`.

---

## 6. Patrones de UI y Experiencia (UX)
*   **Minimalismo Editorial:** Mucho espacio en blanco, bordes muy sutiles (`border-foreground/5`) y sombras casi imperceptibles.
*   **Tratamiento de Imágenes:** Las imágenes en tarjetas (Blog/Secciones) inician en `grayscale` y recuperan el color mediante una transición suave al pasar el cursor (`hover`).
*   **Visual Hero:** Uso de imágenes a pantalla completa con animaciones de "subtle-zoom" y gradientes dinámicos para impacto inicial.
*   **Botones:** Bordes redondeados (`rounded-full`) y animaciones de `scale` en interacción para una sensación táctil moderna.

---

---

## 7. Implementación Técnica
*   **Selector de Temas:** Implementado en la parte inferior de la interfaz con 3 estados:
    1.  `Shield` -> Institucional (Default)
    2.  `Zap` -> Crecimiento
    3.  `Layout` -> Digital
*   **Variables CSS:** Controladas mediante clases de utilidad en `globals.css` (`.theme-institutional`, `.theme-growth`, `.theme-digital`).
*   **Modo Oscuro:** Compatible y estructurado en el sistema base de Tailwind v4.

---
*Última actualización: 09 de abril de 2026.*
