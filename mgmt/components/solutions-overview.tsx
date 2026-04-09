import { ArrowRight } from "lucide-react"

export function SolutionsOverview() {
  return (
    <section id="soluciones" className="py-32 bg-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Nuestras Soluciones</h3>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-none tracking-tighter">
              Acompañamos momentos de <br />
              <span className="font-bold">madurez del negocio.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-foreground/60 leading-relaxed font-bold">
              "No imponemos modelos. Entendemos el contexto antes de proponer soluciones."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-b border-foreground/10 pb-24">
          <div className="space-y-8">
            <p className="text-2xl font-serif text-foreground leading-snug">
              Clarificamos estructura, roles y procesos. Profesionalizamos sin convertir la Pyme en algo que no es.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Ayudamos a tomar decisiones estratégicas con criterio. Tres formas de trabajar la gestión. Tres niveles de profundidad. Un mismo enfoque: impacto real.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Academy", d: "Formación que transforma." },
              { n: "02", t: "Club", d: "Comunidad de intercambio." },
              { n: "03", t: "Pro", d: "Acompañamiento estratégico." }
            ].map((sol, i) => (
              <div key={i} className="group cursor-pointer">
                <span className="text-xs font-bold text-accent mb-4 block group-hover:translate-x-2 transition-transform">{sol.n}</span>
                <h4 className="text-xl font-serif mb-2">{sol.t}</h4>
                <p className="text-xs text-foreground/40 uppercase tracking-widest leading-relaxed">{sol.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
