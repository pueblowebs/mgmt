import { BLOG_POSTS } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

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
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-xl text-foreground leading-relaxed transition-colors" : ""}>
              {paragraph}
            </p>
          ))}
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
