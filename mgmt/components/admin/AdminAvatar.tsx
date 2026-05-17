'use client'

import React from 'react'
import { useAuth } from '@payloadcms/ui'

/**
 * Avatar premium personalizado basado en iniciales para el admin panel de Payload.
 * Elimina subrayados heredados de enlaces, aumenta el tamaño a 46px y aplica
 * un diseño tridimensional con sombras de profundidad y destello interno.
 */
export default function AdminAvatar() {
  const { user } = useAuth()
  
  const email = user?.email || ''
  const name = (user as any)?.name || ''
  
  let initials = 'U'
  if (name) {
    const parts = name.split(' ')
    initials = parts.map((p: string) => p[0]).join('').substring(0, 2).toUpperCase()
  } else if (email) {
    initials = email.substring(0, 2).toUpperCase()
  }

  return (
    <>
      {/* Inyección de estilo local para neutralizar el subrayado heredado del tag <a> de Payload */}
      <style>{`
        a.nav__account,
        a[class*="account"],
        a[class*="avatar"],
        .nav__account,
        .nav__account * {
          text-decoration: none !important;
        }
      `}</style>
      
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          // Gradiente refinado y profundo
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '800',
          fontSize: '15px',
          letterSpacing: '0.03em',
          // Borde ultra-refinado, fino y translúcido
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
          // Efecto de doble anillo premium (un espaciador limpio y sombra flotante de alta gama)
          boxShadow: '0 0 0 3px var(--theme-elevation-100), 0 4px 12px rgba(79, 70, 229, 0.15)',
          userSelect: 'none',
          flexShrink: 0,
          textDecoration: 'none',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            textDecoration: 'none',
            display: 'inline-block',
            lineHeight: '1',
            color: '#ffffff',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          {initials}
        </span>
      </div>
    </>
  )
}
