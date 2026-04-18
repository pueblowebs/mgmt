import { getPayload } from 'payload'
import config from './payload.config'
import { BLOG_POSTS } from './lib/blog-data'
import { getFAQs } from './lib/api'

async function seed() {
  const payload = await getPayload({ config })
  
  console.log('Seeding blog posts...')
  for (const post of BLOG_POSTS) {
    try {
      await payload.create({
        collection: 'blog-posts',
        data: {
          title: post.title,
          slug: post.slug,
          category: post.category,
          excerpt: post.excerpt,
          // content: We map static text to Payload's Lexical format for rich text
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: post.content.split('\n\n').map(p => ({
                type: 'paragraph',
                version: 1,
                children: [{ type: 'text', text: p, version: 1 }]
              }))
            }
          },
          _status: 'published',
        },
      })
      console.log(`✅ Created post: ${post.title}`)
    } catch (err: any) {
      if (err.data && err.data[0]?.message === 'value must be unique') {
         console.log(`⏩ Skipped post (already exists): ${post.title}`)
      } else {
         console.error(`❌ Error creating post: ${err.message}`)
      }
    }
  }

  console.log('\nSeeding User...')
  try {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@managementpyme.com',
        password: 'password123',
        name: 'Admin',
      },
      overrideAccess: true,
    })
    console.log('✅ Created admin user (admin@managementpyme.com / password123)')
  } catch (err: any) {
    console.log('⏩ Admin user likely exists')
  }

  console.log('\nSeeding FAQs...')
  const mockFaqs = [
    {
      question: '¿Qué es el liderazgo consciente?',
      answer: 'Es un enfoque de gestión que prioriza el propósito, la inteligencia emocional y el impacto positivo en el equipo y la empresa, más allá de solo los resultados financieros.',
      order: 1,
    },
    {
      question: '¿Cuánto tiempo dura un proceso de consultoría?',
      answer: 'Depende de las necesidades de la Pyme, pero típicamente los procesos base duran entre 3 y 6 meses para ver resultados estructurales sólidos.',
      order: 2,
    },
  ]

  for (const faq of mockFaqs) {
    try {
      await payload.create({
        collection: 'faqs',
        data: faq,
      })
      console.log(`✅ Created FAQ: ${faq.question}`)
    } catch (err) {
      console.log(`⏩ FAQ already exists: ${faq.question}`)
    }
  }

  console.log('\nSeed completado.')
  process.exit(0)
}

seed().catch(err => {
  console.error(err)
  process.exit(1)
})
