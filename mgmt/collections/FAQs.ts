import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order', 'createdAt'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Pregunta',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Respuesta',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Número menor aparece primero.',
      },
    },
  ],
}
