"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface VisualHeroProps {
  bgImage?: string
  altText?: string
  tag?: string
  title?: React.ReactNode
  subtitle?: string
  tagClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  overlayOpacity?: string
}

export function VisualHero({
  bgImage = "/oficina.webp",
  altText = "Formación y consultoría para dueños de PyME en Argentina",
  tag = "",
  title = (
    <>
    EVOLUCIÓN EMPRESARIA
      {/* Formación, dirección y <br />
      <span className="font-medium">management</span> <br />
      para dueños PyME */}
    </>
  ),
  subtitle = "DIRECCIÓN, MANAGEMENT Y ACADEMIA PARA PYMES",
  tagClassName = "bg-accent/20 text-accent-foreground border-accent/20",
  titleClassName = "text-white",
  subtitleClassName = "text-white/80",
  overlayOpacity = "opacity-60 md:opacity-70"
}: VisualHeroProps) {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={altText}
          fill
          priority
          className={`object-cover scale-105 animate-subtle-zoom ${overlayOpacity}`}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-2">
          {tag &&
            <div className={`inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase backdrop-blur-md rounded-full border animate-fade-in-up ${tagClassName}`}>
              {tag}
            </div>
          }
          <h1 className={`font-serif font-light text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tighter drop-shadow-2xl animate-fade-in-up [animation-delay:200ms] ${titleClassName}`}>
            {title}
          </h1>
          <p className={`sm:max-w-3xl mx-auto text-lg md:text-2xl font-light tracking-tight animate-fade-in-up [animation-delay:400ms] ${subtitleClassName}`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}

