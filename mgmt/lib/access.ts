import type { Access } from 'payload'

// ─── Helpers tipados ─────────────────────────────────────────────────────────

/** super-admin tiene acceso total */
export const isSuperAdmin: Access = ({ req }) =>
  req.user?.role === 'super-admin'

/** super-admin o admin */
export const isAdminOrAbove: Access = ({ req }) =>
  ['super-admin', 'admin'].includes(req.user?.role ?? '')

/** Cualquier usuario autenticado */
export const isLoggedIn: Access = ({ req }) => !!req.user

/** Acceso público */
export const isPublic: Access = () => true

/**
 * Lectura pública si está publicado, o privada si es admin/super-admin.
 * Útil para BlogPosts y FAQs.
 */
export const isPublishedOrAdmin: Access = ({ req }) => {
  if (req.user && ['super-admin', 'admin', 'editor'].includes(req.user.role ?? '')) {
    return true // usuarios con rol ven todo
  }
  return { _status: { equals: 'published' } }
}

/**
 * Admins y editores pueden crear/editar contenido.
 * Solo super-admin y admin pueden borrar.
 */
export const canManageContent: Access = ({ req }) =>
  ['super-admin', 'admin', 'editor'].includes(req.user?.role ?? '')

export const canDeleteContent: Access = ({ req }) =>
  ['super-admin', 'admin'].includes(req.user?.role ?? '')
