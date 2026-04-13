import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full bg-background transition-colors duration-300 flex flex-col">
      <div className="container mx-auto px-4 pt-12 md:pt-16 lg:pt-20 pb-12 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Impulsando Líderes Conscientes
            </div>
            <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-tighter text-foreground mb-6">
              Tu Pyme no necesita <br />
              <span className="font-bold block mt-2">parecer una corporación.</span>
              <span className="block mt-2">Necesita funcionar mejor.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 max-w-lg mb-4 leading-relaxed">
              Gestionar no es hacer más. Es decidir mejor. Ayudamos a dueños y líderes a ordenar, profesionalizar y hacer crecer sus empresas sin perder su esencia.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-[10px] font-bold tracking-widest uppercase text-accent">
              <span>Más claridad</span>
              <span className="text-foreground/20">•</span>
              <span>Más criterio</span>
              <span className="text-foreground/20">•</span>
              <span>Más impacto real</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="shiny">
                Ordenar mi Pyme <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[500px] mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-accent/5 rounded-4xl rotate-3 -z-10"></div>
            <div className="absolute inset-0 border border-foreground/10 rounded-4xl -z-10 translate-x-4 translate-y-4"></div>
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
              alt="Empresario profesional"
              fill
              className="object-cover rounded-4xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>
        </div>

        {/* Propuesta de Valor & Diferencial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-foreground/10 pt-16">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6">Propuesta de valor</h3>
            <p className="text-xl md:text-2xl font-serif text-foreground leading-[1.1] mb-6">
              Trabajamos con empresas reales, con recursos reales y problemas reales.
            </p>
            <div className="space-y-4 text-foreground/60">
              <p>• No aplicamos recetas corporativas.</p>
              <p>• No vendemos inspiración vacía.</p>
              <p>• No burocratizamos lo que necesita agilidad.</p>
              <p className="text-foreground pt-4">Acompañamos decisiones estratégicas, ordenamos estructuras y profesionalizamos la gestión con foco en resultados concretos.</p>
            </div>
            <br />
            <br />
          </div>
          {/* <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6">Nuestro Diferencial</h3>
            <div className="grid grid-cols-1 gap-8">
              {[
                { t: "Profesionalizamos sin rigidizar", d: "Adaptamos la estructura al ritmo de tu negocio." },
                { t: "Ordenamos sin frenar el negocio", d: "La gestión debe ser el motor, no el freno." },
                { t: "Simplificamos lo complejo", d: "Menos ruido, más claridad en la ejecución." },
                { t: "Impacto, no discurso", d: "Resultados tangibles que se sienten en la operación." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-xl font-serif text-foreground mb-1 group-hover:text-accent transition-colors">{item.t}</h4>
                  <p className="text-sm text-foreground/50">{item.d}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

