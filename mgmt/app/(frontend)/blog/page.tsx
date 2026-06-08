import { BlogCard } from "@/components/blog-card"
import { getBlogPosts } from "@/lib/api"
import { BLOG_POSTS as STATIC_POSTS } from "@/lib/blog-data"
import { Suspense } from "react"
import Image from "next/image"

function BlogHeader() {
  return (
    <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-black mb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80"
          alt="Blog - MGMT"
          fill
          priority
          className="object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.4em] uppercase bg-accent/20 text-accent border border-accent/20 rounded-full">
            El Blog
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-lg">
            Pensamiento y <span className="font-bold text-accent">Gestión.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs md:text-base text-white/70 leading-relaxed font-light">
            Artículos decantados de la práctica real. Ideas para líderes que buscan orden, profesionalización y un nuevo nivel de conciencia en sus empresas.
          </p>
        </div>
      </div>
    </div>
  )
}

function BlogGrid({ posts }: { posts: any[] }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {posts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </div>
    </div>
  )
}

async function PayloadBlogContent() {
  let posts: any[] = []
  
  try {
    const payloadPosts = await getBlogPosts()
    if (payloadPosts && payloadPosts.length > 0) {
      posts = payloadPosts.map((post: any) => ({
        category: post.category || "General",
        title: post.title,
        excerpt: post.excerpt,
        date: post.date 
          ? new Date(post.date).toLocaleDateString()
          : new Date().toLocaleDateString(),
        image: post.image?.url 
          ? post.image.url
          : "/images/blog-placeholder.svg",
        slug: post.slug,
      }))
    } else {
      posts = STATIC_POSTS
    }
  } catch (error) {
    console.error("Error fetching blog posts from Payload:", error)
    posts = STATIC_POSTS
  }

  return <BlogGrid posts={posts} />
}

export default function BlogListingPage() {
  return (
    <div className="pb-32">
      <BlogHeader />
      <Suspense fallback={<BlogGrid posts={STATIC_POSTS} />}>
        <PayloadBlogContent />
      </Suspense>
    </div>
  )
}
