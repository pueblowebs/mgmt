import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  category: string
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

export function BlogCard({ category, title, excerpt, date, image, slug }: BlogCardProps) {
  return (
    <div className="group flex flex-col h-full bg-secondary/5 border border-foreground/5 rounded-sm overflow-hidden hover:border-accent/20 transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background text-accent text-[10px] font-bold tracking-widest uppercase rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 p-8">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/30 mb-4">{date}</span>
        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-none group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
          {excerpt}
        </p>
        
        <Link 
          href={`/blog/${slug}`} 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foreground group-hover:text-accent transition-all"
        >
          Leer más <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
