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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grayscale" 
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-20 text-center md:text-left max-w-2xl px-4 md:px-0">
          <h2 className="font-serif text-3xl md:text-6xl text-foreground leading-[1.1] tracking-tighter mb-8">
            Tu camino hacia la 
            <span className="block font-bold">excelencia.</span>
          </h2>
          <p className="text-xl text-foreground/50 leading-relaxed font-sans max-w-md tracking-tight">
            Un recorrido diseñado para escalar tu gestión, no es excluyente pero sí recomendado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-foreground/10 -z-10 hidden lg:block translate-y-[20px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 relative">
            {steps.map((step, i) => (
              <div key={i} className="group relative">
                {/* Step Card */}
                <div className="w-full bg-white border border-foreground/5 p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-primary/20 transition-all duration-700 z-10 relative flex flex-col h-full group/card">
                  <div className="mb-6 flex items-center justify-between">
                    <span 
                      className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #1a5e95, #3388cc, #1a5e95)' }}
                    >
                      Paso {step.number}
                    </span>
                    <span className="text-3xl font-serif font-bold text-foreground/5 group-hover/card:text-primary/10 transition-colors duration-700">{step.number}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl mb-3 text-foreground leading-tight tracking-tight">{step.title}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed mb-8 flex-grow tracking-wide">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={step.href} 
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#1a5e95]/30 text-[#1a5e95] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#1a5e95] hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      {step.cta}
                    </a>
                  </div>
                </div>

                {/* Stationary Connectors (Decoupled from hover) */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop Arrow Connector */}
                    <div className="absolute top-1/2 -right-10 translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block transition-all duration-700 group-hover:scale-110">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-16 h-16 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" />
                        <div className="absolute w-10 h-10 bg-background border border-foreground/5 rounded-full shadow-lg flex items-center justify-center">
                          <ChevronRight className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Arrow Connector */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 block lg:hidden">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-12 h-12 bg-primary/5 rounded-full blur-xl animate-pulse-slow" />
                        <div className="absolute w-8 h-8 bg-background border border-foreground/5 rounded-full shadow-lg flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-primary/40 rotate-90" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
