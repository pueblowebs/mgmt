import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    defaultColumns: ['filename', 'alt', 'createdAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texto alternativo (SEO)',
      required: true,
    },
  ],
}
