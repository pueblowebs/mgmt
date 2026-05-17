'use client'

import React from 'react'
import { useAuth } from '@payloadcms/ui'

/**
 * Botón de cerrar sesión personalizado para el admin panel de Payload.
 * Hace que el botón de logout destaque de forma elegante y se lea "Cerrar sesión".
 */
export default function CustomLogoutButton() {
  const { logOut } = useAuth()

  return (
    <button
      onClick={logOut}
      style={{
        minWidth: '100%',
        alignSelf: 'stretch',
        padding: '10px 30px',
        borderRadius: '8px',
        background: 'rgba(239, 68, 68, 0.08)',
        color: '#ef4444',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        marginTop: '12px',
        boxSizing: 'border-box',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.14)'
        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.35)'
        e.currentTarget.style.transform = 'translateY(-1px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)'
        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      <span>Cerrar sesión</span>
    </button>
  )
}
