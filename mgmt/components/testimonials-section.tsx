import Image from "next/image"

export function TestimonialsSection() {
  const logos = [
    { name: "Empresa 1", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&q=80" },
    { name: "Empresa 2", url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&q=80" },
    { name: "Empresa 3", url: "https://images.unsplash.com/photo-1614850523597-81132ed85e6c?w=200&q=80" },
    { name: "Empresa 4", url: "https://images.unsplash.com/photo-1614850523020-c058821158f3?w=200&q=80" },
    { name: "Empresa 5", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&q=80" },
  ]

  const testimonials = [
    { text: "El cambio en la toma de decisiones fue inmediato. Ahora tenemos claridad.", author: "Dueño de Pyme Industrial" },
    { text: "Management Pyme nos ayudó a profesionalizar el equipo sin perder la agilidad que nos trajo hasta acá.", author: "Fundadora de Startup" },
    { text: "No es solo teoría, es acompañamiento real en la trinchera.", author: "Director Comercial" },
    { text: "El Club es mi espacio seguro para pensar la estrategia una vez al mes.", author: "CEO de Empresa de Servicios" }
  ]

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
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-32 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, i) => (
            <div key={i} className="relative w-32 h-12">
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Grid / Mix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Visual Mix Placeholder */}
           <div className="lg:col-span-1 aspect-square relative overflow-hidden rounded-2xl bg-secondary/10 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-accent text-5xl mb-4 font-serif">"</div>
                <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-6">
                  "Management Pyme nace de la práctica, no de la teoría. Por eso los resultados son reales."
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-accent">Testimonio Video</div>
              </div>
              <div className="absolute inset-0 bg-accent/5 -z-10 animate-pulse"></div>
           </div>

           {/* Text Testimonials */}
           <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-8 border border-foreground/5 bg-secondary/5 rounded-sm hover:border-accent/20 transition-colors">
                  <p className="text-foreground/70 mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">{t.author}</span>
                  </div>
                </div>
              ))}
           </div>
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
