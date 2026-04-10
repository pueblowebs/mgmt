import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/api"
import { StrapiBlocks } from "@/components/strapi-blocks"
import { BLOG_POSTS as STATIC_POSTS } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    if (posts && posts.length > 0) {
      return posts.map((post: any) => ({
        slug: post.slug,
      }))
    }
  } catch (error) {
    console.error("Error generating static params:", error)
  }
  
  return STATIC_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  let post: any = null

  try {
    post = await getBlogPostBySlug(slug)
    
    // Mapping for consistent structure
    if (post) {
      post = {
        title: post.title,
        excerpt: post.excerpt,
        category: post.category || "General",
        date: post.date || new Date(post.publishedAt || Date.now()).toLocaleDateString(),
        image: post.image?.url 
          ? (post.image.url.startsWith("http") ? post.image.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`)
          : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        content: post.content,
        slug: post.slug
      }
    } else {
      // Fallback to static data if not found in Strapi
      post = STATIC_POSTS.find((p) => p.slug === slug)
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    post = STATIC_POSTS.find((p) => p.slug === slug)
  }

  if (!post) {
    notFound()
  }

  const isStrapiContent = Array.isArray(post.content);

  return (
    <article className="min-h-screen pt-20 pb-32">
      {/* Header Section */}
      <header className="py-24 bg-secondary/5 border-b border-foreground/5 mb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">
            <span className="inline-flex items-center gap-2 text-accent">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-3 h-3" /> {post.date}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-foreground tracking-tighter leading-none mb-8">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 font-bold leading-tight max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose prose-lg max-w-none text-foreground/80 font-sans leading-relaxed space-y-8">
          {isStrapiContent ? (
            <StrapiBlocks content={post.content} />
          ) : (
            post.content.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className={i === 0 ? "text-xl text-foreground leading-relaxed transition-colors" : ""}>
                {paragraph}
              </p>
            ))
          )}
        </div>

        {/* Footer / CTA Section */}
        <div className="mt-24 pt-16 border-t border-foreground/10 text-center">
          <h3 className="font-serif text-2xl mb-8 leading-none">¿Tu Pyme necesita una mirada estratégica?</h3>
          <Link 
            href="/contacto" 
            className="inline-flex h-14 items-center px-10 bg-foreground text-background font-bold rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Hablemos hoy
          </Link>
        </div>
      </div>
    </article>
  )
}
