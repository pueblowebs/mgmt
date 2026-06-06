import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { RealityCarousel } from "./reality-carousel"

export function FocusSection() {
  return (
    <section id="about" className="py-24 bg-foreground text-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* La Realidad Pyme */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          ... (commented out by user) ...
        </div> */}

        <div className="mb-32">
          <RealityCarousel />
        </div>

        {/* Qué Creemos */}
        {/* <div className="mb-32">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-12 text-center">En qué creemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Trascender implica liderar distinto", d: "La empresa aparece mientras cambia el liderazgo del fundador." },
              { t: "Profesionalizar no es contratar universitarios", d: "Es cambiar el concepto de trabajo, fortaleciendo la esencia." },
              { t: "La diferencia está en la disciplina", d: "No hay magia, es Dirección Profesional Empresaria sostenida en el tiempo." }
            ].map((belief, i) => (
              <div key={i} className="p-8 border border-background/10 hover:bg-background/5 transition-colors">
                <span className="text-accent font-serif text-4xl mb-4 block">0{i + 1}</span>
                <h4 className="text-xl font-serif mb-4 leading-tight">{belief.t}</h4>
                <p className="text-sm text-background/50 leading-relaxed">{belief.d}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Equipo */}
        <div className="pt-24 border-t border-background/10">
          <div className="max-w-3xl mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-6">Nuestro Equipo</h3>
            <h2 className="font-serif text-2xl md:text-4xl mb-8 leading-tight">Porque para la Pyme, no hay nada más práctico que una buena teoría, nace MP.</h2>
            <p className="text-xl text-background/60 leading-relaxed">
              Charly y Facu combinan experiencia empresaria, consultoril y formativa en Pymes de los tres sectores dirigiendo equipos multidisciplinarios diseñados a medida de los desafíos y características de cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start justify-center group">
              <div className="flex -space-x-12 md:-space-x-16">
                <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-4 border-foreground z-10">
                  <Image
                    src="/images/facu.png"
                    alt="Facu - Fundador"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-4 border-foreground">
                  <Image
                    src="/images/charly.png"
                    alt="Charly - Fundador"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* <div className="text-center md:text-left">
                <h4 className="text-3xl font-serif mb-2">Facu & Charly</h4>
                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">Fundadores</p>
                <p className="text-background/60 text-lg leading-relaxed max-w-sm">
                  Management Pyme nace de la práctica. Combinan décadas de experiencia en la trinchera de la gestión real and la visión estratégica.
                </p>
              </div> */}
            </div>

            <div className="relative p-10 md:p-12 bg-background/5 border border-background/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <div className="text-9xl font-serif">+15</div>
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-5xl font-serif text-accent mb-6 leading-[0.95]">+15</div>
                  <h4 className="text-xl font-serif mb-4 leading-tight">Profesionales</h4>
                  <p className="text-background/60 leading-relaxed max-w-md">
                    Personas con experiencia y actualidad en dinámica y realidad Pyme en Argentina y en el exterior.
                  </p>
                </div>
                <Link 
                  href="/nosotros" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 mt-8 rounded-full border border-accent/30 text-accent text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer w-fit group/btn"
                >
                  Conocé al Equipo <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
