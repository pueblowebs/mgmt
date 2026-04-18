import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Configuración del Sitio',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título principal',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
  ],
}
