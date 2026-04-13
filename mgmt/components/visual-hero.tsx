"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function VisualHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/visual-hero-bg.png"
          alt="Formación y consultoría para dueños de Pyme en Argentina"
          fill
          priority
          className="object-cover opacity-60 md:opacity-70 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase bg-accent/20 text-accent-foreground backdrop-blur-md rounded-full border border-accent/20 animate-fade-in-up">
            Management Pyme
          </div>
          <h1 className="font-serif font-light text-3xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tighter drop-shadow-2xl animate-fade-in-up [animation-delay:200ms]">
            Formación y <br />
            <span className="font-medium">consultoría</span> <br />
            para dueños de Pyme <br />
            en Argentina.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light tracking-tight animate-fade-in-up [animation-delay:400ms]">
            Profesionalizamos la gestión de tu empresa con un enfoque humano y orientado a la excelencia operativa.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>

      <style jsx>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s forwards cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  )
}
