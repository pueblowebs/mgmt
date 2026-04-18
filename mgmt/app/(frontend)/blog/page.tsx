import { BlogCard } from "@/components/blog-card"
import { getBlogPosts } from "@/lib/api"
import { BLOG_POSTS as STATIC_POSTS } from "@/lib/blog-data"
import { Suspense } from "react"

function BlogHeader() {
  return (
    <section className="bg-secondary/5 border-b border-foreground/5 py-24 mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">El Blog</h3>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground tracking-tighter leading-none mb-8">
            Pensamiento y <br />
            <span className="font-bold opacity-50">Gestión.</span>
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl font-bold">
            Artículos decantados de la práctica real. Ideas para líderes que buscan orden, profesionalización y un nuevo nivel de conciencia en sus empresas.
          </p>
        </div>
      </div>
    </section>
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
          : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        slug: post.slug,
      }))
    } else {
      // Si no hay posts en Payload, podemos mostrar los estáticos o vacío
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
    <div className="pt-20 pb-32">
      <BlogHeader />
      <Suspense fallback={<BlogGrid posts={STATIC_POSTS} />}>
        <PayloadBlogContent />
      </Suspense>
    </div>
  )
}

