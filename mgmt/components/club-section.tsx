import Image from "next/image"
import { Users2, MessageSquare, Sparkles, GraduationCap, Calendar } from "lucide-react"
import { ClubModal } from "./club-modal"
import { Button } from "./ui/button"
import { ScrollReveal } from "./scroll-reveal"

const clubFeatures = [
  {
    title: "Mentoreo al CEO",
    description: "Cada CEO tiene un Mentor Empresario asignado semanal.",
    icon: MessageSquare
  },
  {
    title: "Directorio",
    description: "Mensualmente los miembros visitan empresas del Club como Directores independientes.",
    icon: Users2
  },
  {
    title: "Wellness",
    description: "Dos meses al año, dos actividades de retiro (bienestar y comunidad).",
    icon: Sparkles
  },
  {
    title: "Academy & Speakers",
    description: "Acceso gratuito e ilimitado a seminarios y speakers de Management Pyme.",
    icon: GraduationCap
  }
]

export function ClubSection() {
  return (
    <section id="club" className="relative py-12 md:py-16 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80"
          alt="Comunidad de empresarios"
          fill
          className="object-cover grayscale opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal className="max-w-4xl mb-6 md:mb-8">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-2 md:mb-4">CLUB</h3>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-none tracking-tighter mb-4">
            Dirección que sostiene y potencia
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl">
            Comunidad de Empresarios y CEOs egresados de Academy que co-dirigen sus planes de rentabilidad, sustentabilidad y profesionalización.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubFeatures.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full flex flex-col">
              <div
                className="group bg-secondary/5 backdrop-blur-md p-6 border border-foreground/10 hover:border-accent/40 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-500 h-full"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="border-l-2 border-accent/20 group-hover:border-accent pl-4 transition-colors duration-500">
                    <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-foreground/60 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="mt-8 md:mt-10 text-center" delay={200}>
          <p className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-4 md:mb-6">
            Para quienes toman decisiones y saben que hacerlo solos limita la perspectiva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5493535695541?text=Hola%20Federico,%20me%20gustaría%20ser%20parte%20del%20Club%20MGMT." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="shiny" size="xl" className="text-base">
                Ser parte del club
              </Button>
            </a>
            <ClubModal trigger={
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/30 text-accent text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer group/btn">
                <Calendar className="w-4 h-4 opacity-60 group-hover/btn:opacity-100" />
                <span>[+ info] Club 2026</span>
              </button>
            } />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
