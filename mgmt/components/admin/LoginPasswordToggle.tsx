'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Eye, EyeOff } from 'lucide-react'

/**
 * Se registra como admin.components.beforeLogin en payload.config.ts.
 * Inserta el botón de visualización de contraseña mediante un React Portal
 * directamente dentro del contenedor del input del password de Payload.
 */
export default function LoginPasswordToggle() {
  const [visible, setVisible] = useState(false)
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>('input[name="password"]')
    if (input) {
      inputRef.current = input
      const parent = input.parentElement
      if (parent) {
        parent.style.position = 'relative'
        setPortalTarget(parent)
      }
    }

    // Ocultar temporalmente el enlace de "¿Olvidaste tu contraseña?"
    const style = document.createElement('style')
    style.id = 'hide-forgot-password-link'
    style.innerHTML = 'a[href*="forgot"] { display: none !important; }'
    document.head.appendChild(style)

    return () => {
      const el = document.getElementById('hide-forgot-password-link')
      if (el) el.remove()
    }
  }, [])

  const toggle = () => {
    if (!inputRef.current) return
    inputRef.current.type = visible ? 'password' : 'text'
    setVisible(v => !v)
  }

  if (!portalTarget) return null

  return createPortal(
    <button
      type="button"
      onClick={toggle}
      aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      style={{
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        color: 'var(--theme-text-dimmed)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 50,
      }}
    >
      {visible ? <EyeOff size={16} /> : <Eye size={16} />}
    </button>,
    portalTarget
  )
}

