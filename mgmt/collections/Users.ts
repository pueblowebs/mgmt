import type { CollectionConfig } from 'payload'

// ─── Tipos ───────────────────────────────────────────────────────────────────

export type UserRole = 'super-admin' | 'admin' | 'editor'

// ─── Colección Users ─────────────────────────────────────────────────────────

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role', 'createdAt'],
    // Solo super-admin ve esta colección en el sidebar del panel
    hidden: ({ user }) => (user as any)?.role !== 'super-admin',
  },

  // ── Access control ──────────────────────────────────────────────────────────
  access: {
    // Solo super-admin puede crear usuarios nuevos
    create: ({ req }) => req.user?.role === 'super-admin',

    // Los usuarios pueden leer su propio perfil (necesario para /me y sesiones).
    // Solo super-admin puede ver el listado completo.
    read: ({ req }) => {
      if (!req.user) return false
      if ((req.user as any).role === 'super-admin') return true
      // Cualquier usuario autenticado puede leer su propio documento
      return { id: { equals: req.user.id } }
    },

    // Solo super-admin puede modificar otros usuarios
    update: ({ req }) => {
      if (!req.user) return false
      if ((req.user as any).role === 'super-admin') return true
      // Usuarios pueden actualizar su propio perfil (ej: cambiar contraseña)
      return { id: { equals: req.user.id } }
    },

    delete: ({ req }) => (req.user as any)?.role === 'super-admin',

    // Cualquier rol registrado puede entrar al panel.
    // Lo que NO pueden ver/hacer se controla en cada colección y con 'hidden'.
    admin: ({ req }) =>
      ['super-admin', 'admin', 'editor'].includes((req.user as any)?.role ?? ''),
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre completo',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Rol',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: '⚡ Super Admin', value: 'super-admin' },
        { label: '🛡️ Admin',      value: 'admin' },
        { label: '✏️ Editor',     value: 'editor' },
      ],
      // Solo super-admin puede cambiar el rol de un usuario
      access: {
        read: () => true,
        update: ({ req }) => (req.user as any)?.role === 'super-admin',
      },
    },
  ],
}
