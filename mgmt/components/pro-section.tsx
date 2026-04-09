import { Search, BarChart, Settings, CheckCircle } from "lucide-react"

export function ProSection() {
  return (
    <section id="pro" className="py-24 bg-background text-foreground min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-24">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Pro</h3>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-none tracking-tighter">
            Acompañamiento estratégico para <br />
            <span className="font-bold opacity-50">Pymes en crecimiento.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed font-bold border-l-2 border-accent pl-8">
            "Cuando la empresa crece, el modelo inicial deja de alcanzar. Para transformar el sistema de una empresa, primero deben transformarse quienes toman las decisiones."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-10">Qué abordamos</h4>
            <div className="space-y-12">
              {[
                { t: "Diagnóstico estratégico", d: "Entendemos dónde estás y hacia dónde realmente puede ir tu negocio." },
                { t: "Organización interna", d: "Estructuramos la empresa para que soporte el crecimiento sin colapsar." },
                { t: "Procesos y roles", d: "Clarificamos quién hace qué y cómo para eliminar cuellos de botella." },
                { t: "Decisiones estructurales", d: "Te acompañamos en los movimientos que definen el futuro de la Pyme." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h5 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">{item.t}</h5>
                  <p className="text-foreground/50 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/5 p-8 md:p-12 border border-foreground/10 rounded-sm self-start">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-10">Cómo trabajamos</h4>
            <div className="space-y-10">
              {[
                { icon: Search, t: "Escuchamos y entendemos", d: "No venimos con soluciones enlatadas." },
                { icon: BarChart, t: "Analizamos la situación real", d: "Datos y hechos por sobre las suposiciones." },
                { icon: Settings, t: "Proponemos acciones concretas", d: "Ejecutables desde el primer día." },
                { icon: CheckCircle, t: "Acompañamos la implementación", d: "Estamos ahí hasta que el cambio se materializa." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">{step.t}</h5>
                    <p className="text-sm text-foreground/50">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-foreground/10">
               <p className="text-foreground/80 font-bold mb-6">No entregamos informes. Trabajamos hasta que el cambio se materializa.</p>
               <button className="w-full py-4 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-colors cursor-pointer">
                 Necesito acompañamiento estratégico
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
