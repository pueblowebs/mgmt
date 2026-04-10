import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué tipo de empresas se benefician de Management Pyme?",
    answer: "Trabajamos principalmente con pymes en etapa de crecimiento o consolidación que buscan profesionalizar sus procesos, tener mayor claridad estratégica y lograr que el área directiva no sea un cuello de botella."
  },
  {
    question: "¿En qué consiste la primera consulta o diagnóstico?",
    answer: "Realizamos una inmersión inicial para entender el estado actual del negocio, los objetivos a corto y mediano plazo, y las fricciones principales del equipo. A partir de ello trazamos un roadmap realista."
  },
  {
    question: "¿Ofrecen programas in-house o solo consultoría externa?",
    answer: "Ambos. Tenemos formatos de acompañamiento externo donde funcionamos como asesores o directores part-time, pero también ofrecemos programas de capacitación y profesionalización in-house a través de nuestra Academia."
  },
  {
    question: "¿Cuánto tiempo toma ver resultados tangibles?",
    answer: "Si bien los cambios culturales y de estructura llevan tiempo, durante las primeras semanas de implementación de nuestro programa estratégico empezamos a notar orden, métricas claras y reducción de urgencias diarias."
  },
  {
    question: "¿Trabajan con empresas fuera de Argentina?",
    answer: "Sí. Nuestra estructura y formato de trabajo nos permite operar y brindar acompañamiento estratégico 100% integral a empresas en toda la región hispanohablante y España."
  }
]

export function FaqSection() {
  return (
    <section className="py-32 bg-background text-foreground min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-20">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-6">Preguntas Frecuentes</h3>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[0.95] tracking-tighter mb-6">
            Resolvemos tus <span className="font-bold opacity-50">dudas</span>
          </h2>
          <p className="text-lg text-foreground/60 font-medium">
            Respuestas claras y directas para que puedas tomar decisiones con mayor seguridad.
          </p>
        </div>

        <div className="mx-auto w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-foreground/10 pb-2"
              >
                <AccordionTrigger className="text-xl md:text-2xl font-serif text-left hover:no-underline hover:text-accent transition-colors data-[state=open]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/70 leading-relaxed pt-2 pb-6 max-w-3xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
