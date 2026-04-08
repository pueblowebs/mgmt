import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-32 bg-foreground text-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Hablemos</h3>
            <h2 className="font-serif text-4xl md:text-6xl text-background leading-tight tracking-tighter mb-12">
              Si tu empresa necesita orden, foco o una <span className="italic opacity-50">mirada estratégica</span> externa, conversemos.
            </h2>
            
            <div className="space-y-12 mb-16">
               <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                     <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Escríbenos</h4>
                    <p className="text-2xl font-serif">hola@managementpyme.com</p>
                  </div>
               </div>
               <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                     <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Llámanos</h4>
                    <p className="text-2xl font-serif">+54 9 11 0000 0000</p>
                  </div>
               </div>
            </div>

            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground gap-3 transition-all hover:scale-105 active:scale-95">
              Agendar conversación <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-col justify-end">
            <div className="p-12 border border-background/10 bg-background/5 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <h4 className="text-2xl font-serif mb-8 text-accent">Management Pyme</h4>
               <p className="text-xl text-background/60 leading-relaxed italic mb-8">
                 "Pensamiento, orden y gestión para empresas más allá de la gestión tradicional."
               </p>
               <p className="text-lg text-background font-light leading-relaxed">
                 Integra resultados con propósito, estrategia con conciencia, y desempeño con evolución personal.
               </p>
            </div>
            
            <div className="mt-12 flex gap-8 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               <div className="text-sm font-bold tracking-widest uppercase">Buenos Aires</div>
               <div className="text-sm font-bold tracking-widest uppercase">Madrid</div>
               <div className="text-sm font-bold tracking-widest uppercase">Ciudad de México</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
