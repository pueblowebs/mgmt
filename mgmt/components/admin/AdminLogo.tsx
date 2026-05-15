'use client'

/**
 * Logo personalizado para el admin panel de Payload.
 * Reemplaza el logo "PAYLOAD" por la marca del proyecto.
 */
export default function AdminLogo() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '4px 0',
      }}
    >
      {/* Ícono */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg
          width="18"
          height="18"
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

      {/* Nombre */}
      <div style={{ lineHeight: 1 }}>
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--theme-text)',
          }}
        >
          Management
        </span>
        <span
          style={{
            display: 'block',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--theme-text-dimmed)',
            marginTop: 1,
          }}
        >
          Pyme CMS
        </span>
      </div>
    </div>
  )
}
