import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Get internal Payload instance
 */
async function getCachedPayload() {
  return await getPayload({ config })
}

/**
 * Get all Blog Posts
 */
export async function getBlogPosts() {
  const payload = await getCachedPayload()
  
  const result = await payload.find({
    collection: 'blog-posts',
    where: {
      _status: { equals: 'published' },
    },
    // No need for overrideAccess: false here since this is public data,
    // but good practice unless there is auth involved.
  })
  
  return result.docs
}

/**
 * Get a single Blog Post by Slug
 */
export async function getBlogPostBySlug(slug: string) {
  const payload = await getCachedPayload()
  
  const result = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: { equals: slug },
      _status: { equals: 'published' },
    },
  })
  
  return result.docs?.[0] || null
}

/**
 * Get all FAQs
 */
export async function getFAQs() {
  const payload = await getCachedPayload()
  
  const result = await payload.find({
    collection: 'faqs',
    sort: 'order',
    limit: 100, // Reasonable default max
  })
  
  return result.docs
}
/**
 * Get Site Settings
 */
export async function getSiteSettings() {
  const payload = await getCachedPayload()
  
  const result = await payload.findGlobal({
    slug: 'site-settings',
  })
  
  return result
}
