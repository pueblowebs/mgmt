"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function StepsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: "01",
      title: "Academy",
      description: "Formación empresaria integral para quienes tienen el poder y el peso de la supervivencia de la empresa",
      cta: "Ver programa",
      href: "/academy"
    },
    {
      number: "02",
      title: "Club de Empresarios",
      description: "Directorio, Mentoreo y Comunidad entre empresarios Egresados de Academy",
      cta: "Unirme al Club",
      href: "/club"
    },
    {
      number: "03",
      title: "Pro",
      description: "Equipo de rentabilización y profesionalización empresaria",
      cta: "Solicitar Pro",
      href: "/pro"
    }
  ]

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const handleScroll = () => {
      const items = scroller.querySelectorAll<HTMLElement>(".carousel-item")
      if (!items.length) return

      const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2

      let closestIndex = 0
      let minDistance = Infinity

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(scrollerCenter - itemCenter)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    scroller.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      scroller.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSlide = (index: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const items = scroller.querySelectorAll<HTMLElement>(".carousel-item")
    const targetItem = items[index]
    if (targetItem) {
      scroller.scrollTo({
        left: targetItem.offsetLeft - (scroller.clientWidth - targetItem.clientWidth) / 2,
        behavior: "smooth"
      })
      setActiveIndex(index)
    }
  }

  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grayscale"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center md:text-left max-w-2xl px-4 md:px-0">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.15] tracking-tight mb-6">
            Tu camino hacia el
            <span className="block font-bold text-accent">potencial.</span>
          </h2>
          <p className="text-lg text-foreground/50 leading-relaxed font-sans max-w-md tracking-tight">
            Un recorrido probado desde la consciencia, hacia la efectividad y la autonomía de tu empresa.
          </p>
        </ScrollReveal>

        {/* Steps Grid / Carousel Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-foreground/10 -z-10 hidden lg:block translate-y-5" />

          <div 
            ref={scrollerRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative steps-carousel lg:overflow-visible! lg:flex-row!"
          >
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="group relative carousel-item"
                data-index={i}
              >
                {/* Step Card */}
                <ScrollReveal delay={i * 150} className="h-full flex flex-col">
                  <div className={`w-full bg-white border p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-accent/40 transition-all duration-500 z-10 relative flex flex-col h-full group/card ${
                    activeIndex === i ? 'border-accent/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]' : 'border-foreground/10'
                  }`}>
                    <div className="mb-6 flex items-center justify-between">
                      <span
                        className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full text-white"
                        style={{ background: 'linear-gradient(135deg, #00A19B, #66E6E1, #00A19B)' }}
                      >
                        Paso {step.number}
                      </span>
                      <span className="text-3xl font-serif font-bold text-foreground/5 group-hover/card:text-accent/20 transition-colors duration-500">{step.number}</span>
                    </div>

                    <h3 className="font-serif text-xl mb-3 text-foreground leading-tight tracking-tight">{step.title}</h3>
                    <p className="text-foreground/55 text-sm leading-relaxed mb-6 grow tracking-wide">
                      {step.description}
                    </p>

                    <div className="mt-auto">
                      <a
                        href={step.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 text-accent text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer w-fit group/btn"
                      >
                        {step.cta} <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Stationary Connectors (Desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block transition-all duration-500 group-hover:scale-110">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-12 h-12 bg-primary/5 rounded-full blur-xl animate-pulse-slow" />
                      <div className="absolute w-9 h-9 bg-background border border-foreground/10 rounded-full shadow-md flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dots Indicator (Mobile only) */}
          <div className="flex justify-center items-center gap-2.5 mt-8 lg:hidden" aria-label="Navegar por pasos">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i 
                    ? 'bg-accent w-6' 
                    : 'bg-foreground/20 w-2.5'
                }`}
                aria-label={`Ir al paso ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

