import Image from "next/image"
import { Users2, MessageSquare, Target, Zap, Calendar } from "lucide-react"
import { ClubModal } from "./club-modal"
import { Button } from "./ui/button"

const clubFeatures = [
  {
    title: "Conversación estructurada",
    description: "Espacios diseñados para el intercambio profundo de ideas y soluciones entre pares.",
    icon: MessageSquare
  },
  {
    title: "Casos reales",
    description: "Análisis de situaciones concretas que enfrentan dueños de Pymes en su día a día.",
    icon: Target
  },
  {
    title: "Mirada estratégica compartida",
    description: "Perspectivas diversas que enriquecen tu toma de decisiones y amplían tu visión.",
    icon: Users2
  },
  {
    title: "Acompañamiento continuo",
    description: "No estás solo ante el desafío; la comunidad y los mentores te respaldan constantemente.",
    icon: Zap
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
        <div className="max-w-4xl mb-6 md:mb-8">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-2 md:mb-4">El Club</h3>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-none tracking-tighter mb-4">
            Pensar la Pyme acompañado cambia la <br />
            <span className="font-bold">calidad de tus decisiones.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl">
            Una comunidad de dueños y líderes que comparten experiencias reales, desafíos concretos y análisis estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-5 md:p-6 bg-secondary/5 border border-foreground/5 rounded-sm hover:bg-accent/5 hover:border-accent/20 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-foreground mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-10 text-center">
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
        </div>
      </div>
    </section>
  )
}
