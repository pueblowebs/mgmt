"use client"

import * as React from "react"
import Image from "next/image"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const REALITIES = [
  {
    title: "El día a día consume todo",
    description: "Las Pymes no fracasan por falta de esfuerzo. Fracasan por falta de gestión estratégica.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
    highlight: "Esfuerzo ≠ Gestión"
  },
  {
    title: "Decisiones reactivas",
    description: "Cuando la urgencia reemplaza a la importancia, el crecimiento se vuelve una fuente de tensión interna.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    highlight: "Reactividad"
  },
  {
    title: "Crecimiento sin orden",
    description: "La empresa crece. El orden no siempre. Estructurar el salto es la clave para la sostenibilidad.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    highlight: "Sostenibilidad"
  }
]

export function RealityCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play effect
  React.useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-background/10 bg-foreground/5 shadow-2xl">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {REALITIES.map((reality, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative aspect-video md:aspect-21/9 w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <Image
                  src={reality.image}
                  alt={reality.title}
                  fill
                  className="object-cover grayscale transition-transform duration-10000 ease-linear scale-100 hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-r from-foreground via-foreground/80 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-3xl">
                  <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4 animate-in fade-in slide-in-from-left-4 duration-700">
                    {reality.highlight}
                  </span>
                  <h3 className="font-serif text-3xl md:text-6xl text-background leading-none tracking-tighter mb-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                    {reality.title}
                  </h3>
                  <p className="text-lg md:text-xl text-background/70 font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
                    {reality.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        {REALITIES.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1 transition-all duration-500 rounded-full",
              current === index ? "w-12 bg-accent" : "w-4 bg-background/20 hover:bg-background/40"
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Glassmorphism Badge */}
      <div className="absolute top-8 left-8 z-20 hidden md:block">
        <div className="px-5 py-2 rounded-full border border-background/10 bg-background/5 backdrop-blur-md flex items-center justify-center">
          <span className="text-[10px] font-bold tracking-widest uppercase text-background/50 text-center">La Realidad Pyme</span>
        </div>
      </div>
    </div>
  )
}
