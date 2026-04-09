import { BlogCard } from "@/components/blog-card"
import { BLOG_POSTS } from "@/lib/blog-data"

export default function BlogListingPage() {
  return (
    <div className="pt-20 pb-32">
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

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
