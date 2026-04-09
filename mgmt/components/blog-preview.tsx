"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "./blog-card"

import { BLOG_POSTS } from "@/lib/blog-data"

export function BlogPreview() {
  return (
    <section className="py-32 bg-background border-t border-foreground/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Pensamiento y Gestión</h3>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tighter leading-none mb-0">
              Ideas para liderar <br />
              <span className="font-bold">empresas conscientes.</span>
            </h2>
          </div>
          <Link 
            href="/blog" 
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-accent transition-all"
          >
            Ver todos los artículos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
