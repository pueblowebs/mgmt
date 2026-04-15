import { CheckCircle2, Calendar, Globe, Users, Trophy, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AgendaModal } from "./agenda-modal"

export function AcademiaSection() {
  return (
    <section id="academia" className="py-24 bg-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Academy</h3>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-none tracking-tighter mb-8">
              Formación que <br />
              <span className="font-bold">transforma la gestión.</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12">
              Pensada para dueños y líderes que quieren mejorar su capacidad de decisión y ordenar su empresa desde adentro.
            </p>
            
            <div className="space-y-6 mb-12">
               <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Qué trabajamos</h4>
               {[
                 "Toma de decisiones estratégicas",
                 "Visión integral del negocio",
                 "Organización y estructura",
                 "Liderazgo y equipos comprometidos",
                 "Procesos y planificación"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <CheckCircle2 className="w-5 h-5 text-accent" />
                   <span className="text-lg text-foreground/80">{item}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-secondary/5 rounded-2xl p-8 md:p-12 border border-foreground/5 shadow-inner flex flex-col h-full">
            <div className="mb-12 grow">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent text-center sm:text-left">Estructura del Programa</h4>
                <AgendaModal trigger={
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 text-accent text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer group/btn">
                    <Calendar className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                    <span>Cronograma 2026</span>
                  </button>
                } />
              </div>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6 items-start group/item transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 group-hover/item:text-accent transition-colors">5 Módulos Online</h5>
                    <p className="text-foreground/60 text-sm leading-relaxed">Aula virtual en directo para clases teóricas y feedback inmediato de expertos.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group/item transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 group-hover/item:text-accent transition-colors">3 Módulos Presenciales</h5>
                    <p className="text-foreground/60 text-sm leading-relaxed">Inicio, Ecuador y Cierre en Buenos Aires. Inmersión total para networking real.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-foreground/10 mt-auto">
              <p className="text-foreground/80 font-bold leading-relaxed mb-10 italic border-l-2 border-accent/20 pl-6">
                "Academy no forma solo directivos más eficientes; forma líderes capaces de construir empresas conscientes."
              </p>
              <Button variant="shiny" size="xl" className="w-full rounded-full text-base h-14">
                Postularme ahora
              </Button>
            </div>
          </div>
        </div>

        {/* MGMT en Números */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-foreground/5">
          {[
            { label: "Años de experiencia", value: "+20", icon: Trophy },
            { label: "Profesores nivel directivo", value: "15", icon: Users },
            { label: "Alumnos transformados", value: "+500", icon: BookOpen },
            { label: "Método orientado a la acción", value: "10", sub: "Años" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-5xl font-serif text-accent mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 leading-relaxed max-w-[120px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

