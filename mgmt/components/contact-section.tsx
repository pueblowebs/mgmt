import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { CopyText } from "./copy-text"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contacto" className="bg-foreground text-background min-h-svh pb-24">
      {/* Header - Styled exactly like FAQ and Blog but using the Contact info/image */}
      <div className="relative w-full h-[35vh] md:h-[35vh] flex items-center justify-center overflow-hidden bg-black mb-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/oficina.webp"
            alt="Contacto - MGMT"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-foreground" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase bg-accent/20 text-accent border border-accent/20 rounded-full">
              Hablemos
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight drop-shadow-lg">
              Si tu empresa necesita orden, foco o una <span className="font-bold text-accent">mirada estratégica</span> externa, conversemos.
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            
            <div className="space-y-8 mb-12">
               <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                     <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Escribinos</h4>
                    <CopyText text="hola@managementpyme.com" className="text-lg md:text-2xl font-serif" />
                  </div>
               </div>
                <div className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors text-background">
                       <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Academy</h4>
                        <a 
                          href="https://wa.me/5491165442672?text=Hola%20Facundo,%20vengo%20desde%20la%20web%20y%20me%20gustaría%20consultar%20por%20Academy." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-serif hover:text-accent transition-colors block relative w-fit after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                        >
                          Facundo
                        </a>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Club</h4>
                        <a 
                          href="https://wa.me/5493535695541?text=Hola%20Federico,%20vengo%20desde%20la%20web%20y%20me%20gustaría%20consultar%20por%20el%20Club." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-serif hover:text-accent transition-colors block relative w-fit after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                        >
                          Federico
                        </a>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Pro</h4>
                        <a 
                          href="https://wa.me/5491144782200?text=Hola%20Charly,%20vengo%20desde%20la%20web%20y%20me%20gustaría%20consultar%20por%20el%20servicio%20PRO." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-serif hover:text-accent transition-colors block relative w-fit after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                        >
                          Charly
                        </a>
                      </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
              <Button variant="shiny" size="xl" className="text-base gap-3 transition-all">
                Agendar conversación <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="p-12 border border-background/10 bg-background/5 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <h4 className="text-2xl font-serif mb-8 text-accent">Management PyME</h4>
               <p className="text-xl text-background/60 leading-relaxed font-bold mb-8">
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
