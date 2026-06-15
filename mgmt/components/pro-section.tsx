import Image from "next/image"
import { Users, Clock, Smile } from "lucide-react"
import { Button } from "./ui/button"

export function ProSection() {
  return (
    <section id="pro" className="py-24 bg-background text-foreground min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="max-w-2xl">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Pro</h3>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-none tracking-tighter">
              El equipo que tu empresa necesita para ser rentable.
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed font-bold border-l-2 border-accent pl-8">
              "Competir, rentabilizar y sostener la empresa requiere habilidades y experiencia que la PyME no tiene y nosotros cubrimos."
            </p>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[500px] mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-accent/5 rounded-4xl rotate-3 -z-10"></div>
            <div className="absolute inset-0 border border-foreground/10 rounded-4xl -z-10 translate-x-4 translate-y-4"></div>
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
              alt="Estrategia y Liderazgo"
              fill
              className="object-cover rounded-4xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="bg-secondary/5 p-8 md:p-12 border border-foreground/10 rounded-sm self-start h-full">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-10">Qué cubrimos</h4>
            <div className="space-y-12">
              {[
                { t: "Fundador", d: "Convivimos con el fundador día a día, ayudándolo a salir de donde sufre y ubicarlo donde disfruta." },
                { t: "CEO", d: "Co-gerenciamos la empresa, rentabilizándola, profesionalizándola y haciéndola competitiva." },
                { t: "Comercial", d: "Dirigimos la estrategia de rentabilización y co-gerenciamos el equipo comercial." },
                { t: "Control de Gestión", d: "Lideramos administración y finanzas, construyendo estados contables básicos y panel de monitoreo." },
                { t: "Personas y Cultura", d: "Lideramos la transformación estructural y cultural para rentabilizar la empresa." }
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
                { icon: Users, t: '"All In"', d: "Equipo completo, somos una empresa." },
                { icon: Clock, t: "Cross land-cross time", d: "Estamos donde tenemos que estar cuando tenemos que estar." },
                { icon: Smile, t: "Tercer tiempo", d: "Co-creamos ambiente de aprendizaje para incrementar autonomía y responsabilidad." }
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
            
            <div className="mt-12 pt-12 border-t border-foreground/10 flex flex-col items-center">
               <a 
                 href="https://wa.me/5491144782200?text=Hola%20Charly,%20necesito%20acompañamiento%20estratégico%20Pro." 
                 target="_blank" 
                 rel="noopener noreferrer"
               >
                 <Button variant="shiny" size="xl" className="text-base">
                   Quiero completar mi equipo con PRO
                 </Button>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
