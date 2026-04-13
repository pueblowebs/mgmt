import Image from "next/image"
import { Users2, MessageSquare, Target, Zap } from "lucide-react"
import { AgendaModal } from "./agenda-modal"

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
    <section id="club" className="relative py-24 overflow-hidden min-h-svh flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80"
          alt="Comunidad de empresarios"
          fill
          className="object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">El Club</h3>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-none tracking-tighter mb-8">
            Pensar la Pyme acompañado cambia la <br />
            <span className="font-bold">calidad de tus decisiones.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Una comunidad de dueños y líderes que comparten experiencias reales, desafíos concretos y análisis estratégico. No es networking superficial; es intercambio genuino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {clubFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary/5 border border-foreground/5 rounded-sm hover:bg-accent/5 hover:border-accent/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-foreground/40 mb-8">
            Para quienes toman decisiones y saben que hacerlo solos limita la perspectiva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
              Ser parte del club
            </button>
            <AgendaModal />
          </div>
        </div>
      </div>
    </section>
  )
}
