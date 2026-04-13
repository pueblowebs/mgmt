import { ArrowRight, ChevronRight } from "lucide-react"

export function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Academy",
      description: "Formación técnica y mentalidad para el dueño de Pyme.",
      cta: "Ver cursos",
      href: "/academy"
    },
    {
      number: "02",
      title: "Club de Empresarios",
      description: "Networking, mentoría entre pares y comunidad de gestión.",
      cta: "Unirme al Club",
      href: "/club"
    },
    {
      number: "03",
      title: "Pro",
      description: "Consultoría personalizada para escalar tu empresa al siguiente nivel.",
      cta: "Solicitar Pro",
      href: "/pro"
    }
  ]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-none tracking-tighter mb-6">
            Sección de 
            <span className="font-bold"> pasos.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed ml-10">
            recomendada, no excluyente
          </p>
          {/* <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-primary mb-4">Sección de pasos</h2>
          <p className="font-serif text-2xl md:text-3xl text-foreground/60 tracking-tight italic">
            (recomendada no excluyente)
          </p> */}
        </div>

        {/* Steps Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative">
            {steps.map((step, i) => (
              <div key={i} className="group relative flex flex-col lg:flex-row items-center">
                {/* Step Card */}
                <div className="w-full bg-white border border-foreground/5 p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 z-10">
                  <span 
                    className="inline-block text-sm font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded-full text-white"
                    style={{ background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728)' }}
                  >
                    Paso {step.number}
                  </span>
                  
                  <h3 className="font-serif text-2xl mb-4 text-foreground">{step.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-8 min-h-18">
                    {step.description}
                  </p>
                  
                  <a 
                    href={step.href} 
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-primary hover:text-accent transition-colors"
                  >
                    {step.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Arrow Connector (Desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-full max-w-16 z-0 -mx-2">
                    <ChevronRight className="w-8 h-8 opacity-20 text-primary" strokeWidth={1} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/5 -z-10 hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
