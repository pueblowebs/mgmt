"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function TestimonialsSection() {
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null)
  
  const logos = [
    { name: "Empresa 1", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&q=80" },
    { name: "Empresa 2", url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&q=80" },
    { name: "Empresa 3", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&q=80" },
    { name: "Empresa 4", url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&q=80" },
    { name: "Empresa 5", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&q=80" },
  ]

  const videoTestimonials = [
    { name: "Manuel Bersi", src: "/videos/testimonio-2-manuel-bersi.mp4" },
    { name: "Viviana Coustarot", src: "/videos/testimonio-3-viviana-coustarot.mp4" },
    { name: "Marcelo Dandolo", src: "/videos/testimonio-5-marcelo-dandolo.mp4" },
  ]

  const testimonials = [
    { text: "El cambio en la toma de decisiones fue inmediato. Ahora tenemos claridad.", author: "Dueño de Pyme Industrial" },
    { text: "Management Pyme nos ayudó a profesionalizar el equipo sin perder la agilidad que nos trajo hasta acá.", author: "Fundadora de Startup" },
    { text: "No es solo teoría, es acompañamiento real en la trinchera.", author: "Director Comercial" },
    { text: "El Club es mi espacio seguro para pensar la estrategia una vez al mes.", author: "CEO de Empresa de Servicios" }
  ]

  const handleVideoClick = (index: number, videoElement: HTMLVideoElement) => {
    if (unmutedIndex === index) {
      setUnmutedIndex(null)
      videoElement.muted = true
    } else {
      setUnmutedIndex(index)
      videoElement.muted = false
      videoElement.currentTime = 0
      videoElement.play()
    }
  }

  return (
    <section id="testimonios" className="py-24 bg-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-6">A quienes acompañamos</h3>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tighter leading-[0.95]">
            Ayer y <span className="font-bold">Hoy.</span>
          </h2>
        </div>

        {/* Logos Group */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-32 ">
          {logos.map((logo, i) => (
            <div key={i} className="relative w-32 h-12">
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </div>

        {/* Video Testimonials Reels - Compact Row */}
        <div className="flex justify-center gap-4 md:gap-8 mb-24 overflow-x-auto pb-8 scrollbar-hide">
          {videoTestimonials.map((v, i) => (
            <div 
              key={i} 
              onClick={(e) => {
                const video = e.currentTarget.querySelector('video')
                if (video) handleVideoClick(i, video)
              }}
              className="group relative w-[140px] md:w-[200px] aspect-9/16 rounded-xl overflow-hidden bg-secondary/10 shrink-0 border border-foreground/5 hover:border-accent/40 transition-all shadow-lg cursor-pointer"
            >
               <video 
                 src={v.src} 
                 className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                 muted={unmutedIndex !== i}
                 loop
                 playsInline
                 onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                 onMouseLeave={(e) => {
                   const video = (e.target as HTMLVideoElement)
                   if (unmutedIndex !== i) {
                     video.pause()
                     video.currentTime = 0
                   }
                 }}
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               
               {/* Audio Indicator */}
               <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                 {unmutedIndex === i ? <Volume2 className="w-4 h-4 text-accent" /> : <VolumeX className="w-4 h-4 opacity-50" />}
               </div>

               <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                 <p className="text-[10px] font-bold tracking-widest uppercase text-white drop-shadow-md">{v.name}</p>
                 <div className="w-6 h-px bg-accent mt-1" />
               </div>
            </div>
          ))}
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {testimonials.map((t, i) => (
             <div key={i} className="p-8 border border-foreground/5 bg-secondary/5 rounded-sm hover:border-accent/20 transition-colors">
               <div className="text-accent text-3xl mb-4 font-serif leading-none">"</div>
               <p className="text-foreground/70 mb-6 text-sm leading-relaxed">"{t.text}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-accent/20"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{t.author}</span>
               </div>
             </div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <p className="text-foreground/40 text-sm max-w-2xl mx-auto font-bold text-center">
             Cientos de dueños y líderes ya transformaron su capacidad de gestión con nuestro método.
           </p>
        </div>
      </div>
    </section>
  )
}
