'use client'

import React from 'react'

/**
 * Ícono compacto personalizado auto-escalable para el admin panel de Payload.
 * Diseñado para adaptarse perfectamente tanto al sidebar colapsado (32px)
 * como a la barra de navegación del header (breadcrumb / account, 20px) sin recortarse.
 */
export default function AdminIcon() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '32px',
        maxHeight: '32px',
        minWidth: '18px',
        minHeight: '18px',
        aspectRatio: '1',
        borderRadius: '25%', // Mantiene la proporción del redondeado al escalar
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(99, 102, 241, 0.15)',
        boxSizing: 'border-box',
      }}
    >
      <svg
        width="55%" // Escala automáticamente con el contenedor
        height="55%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </div>
  )
}
