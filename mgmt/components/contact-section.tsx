import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { CopyText } from "./copy-text"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contacto" className="bg-foreground text-background min-h-svh pb-24">
      {/* Header - Styled exactly like FAQ and Blog but using the Contact info/image */}
      <div className="relative w-full h-[35vh] md:h-[35vh] flex items-center justify-center overflow-hidden bg-black">
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
              Si querés llevar tu empresa <br/> al <span className="font-bold text-accent">siguiente nivel</span>, conversemos.
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            
            <div className="space-y-8 mb-12">
               {/* 
               <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                     <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Escribinos</h4>
                    <CopyText text="hola@managementpyme.com" className="text-lg md:text-2xl font-serif" />
                  </div>
               </div>
               */}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Academy",
                  name: "Facundo",
                  href: "https://wa.me/5491165442672?text=Hola%20Facundo,%20vengo%20desde%20la%20web%20y%20me%20gustaría%20consultar%20por%20Academy."
                },
                {
                  label: "Club",
                  name: "Federico",
                  href: "https://wa.me/5493535695541?text=Hola%20Federico,%20vengo%20desde%20la%20web%20y%20me%20gustaría%20consultar%20por%20el%20Club."
                },
                {
                  label: "Pro",
                  name: "Charly",
                  href: "https://wa.me/5491144782200?text=Hola%20Charly,%20vengo%20desde%20la%20web%20y%20me%20gustaría%20consultar%20por%20el%20servicio%20PRO."
                }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4.5 rounded-2xl border border-background/10 bg-background/5 hover:bg-background/10 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent/80 group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <h4 className="text-lg font-serif text-white relative w-fit group-hover:text-accent transition-colors duration-300">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300" />
                    </h4>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300 text-background/80 group-hover:text-background">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                </a>
              ))}
            </div>

            {/* 
            <div className="flex justify-center ">
              <Button variant="shiny" size="xl" className="text-base gap-3 transition-all">
                Agendar conversación <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
            */}
          </div>

          <div className="flex flex-col justify-end">
            <div className="p-12 border border-background/10 bg-background/5 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <h4 className="text-2xl font-serif mb-8 text-accent">Management PyME</h4>
               <p className="text-xl text-background font-light leading-relaxed">
                 "Acompañamiento en transformación y dirección de empresas y proyectos."
               </p>
            </div>
            
            <div className="mt-12 flex md:justify-evenly justify-between items-center gap-4">
               {["CABA", "CALERA", "CALIFORNIA", "ITALIA"].map((city) => (
                 <div
                   key={city}
                   className="text-xs font-bold text-accent tracking-widest uppercase transition-all duration-300 cursor-default select-none relative group/city py-1"
                 >
                   {city}
                   {/* <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent group-hover/city:w-full transition-all duration-300" /> */}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
