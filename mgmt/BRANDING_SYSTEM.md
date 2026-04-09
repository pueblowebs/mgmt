# Sistema de Branding y Paletas de Color - Management Pyme

Este documento resume las especificaciones de marca e implementación de las tres paletas de colores principales desarrolladas para la plataforma.

## 1. Paleta Institucional (Premium/Sobria)
**Objetivo:** Marca actual, accesible, formativa y moderna. Ideal para contenidos, academia y enfoque mobile-first.
**Configuración por defecto.**

*   **Negro noche (#1a1c20):** Tipografía elegante, headers y footers.
*   **Golden (#7a6200):** Color institucional, resúmenes y énfasis.
*   **Crudo (#fbfaf8):** Fondo principal (arena/gris piedra).
*   **Azul jean (#576d7d):** CTAs sutiles y acentos modernos.
*   **Gris acero (#dfdddf):** Bordes y elementos secundarios.

---

## 2. Paleta Crecimiento & Negocio
**Objetivo:** Negocio activo, enfoque en resultados, ventas y crecimiento. Ideal para programas PRO y programas pagos.

*   **Azul noche (#24334c):** Header y tipografía de títulos.
*   **Verde oliva (#687667):** Botones principal (CTAs), bordes de cards e interacciones.
*   **Gris medio (#c2c1c2):** Elementos secundarios.
*   **Gris claro (#dfdddf):** Elementos muted y bordes suaves.
*   **Blanco puro (#FFFFFF):** Fondo del Hero y fondo general.

---

## 3. Paleta Contemporánea & Digital (Innovación)
**Objetivo:** Empresa sólida, confiable, estructurada. Ideal para Academia, Club de Empresarios y Marca Madre.

*   **Azul petróleo (#24334c):** Header, CTAs sólidos y títulos de cards.
*   **Azul navy (#5f7582):** Acentos secundarios y elementos muted.
*   **Negro suave (#1a1c20):** Footer y textos de cuerpo para máxima lectura.
*   **Blanco cálido (#f7f3f6):** Fondo de página y Hero (percepción beige/digital).

---

## Implementación Técnica
*   **Selector de Temas:** Implementado en la parte inferior de la interfaz con 3 estados:
    1.  `Shield` -> Institucional (Default)
    2.  `Zap` -> Crecimiento
    3.  `Layout` -> Digital
*   **Variables CSS:** Controladas mediante clases de utilidad en `globals.css` (`.theme-institutional`, `.theme-growth`, `.theme-digital`).
*   **Modo Oscuro:** Compatible y estructurado en el sistema base de Tailwind v4.

---
*Documentación generada el 09 de abril de 2026.*
