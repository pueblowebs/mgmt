import Image from "next/image"
import { Target, ShieldCheck, Users, Briefcase, GraduationCap } from "lucide-react"

export function NosotrosSection() {
  const directors = [
    {
      name: "Facundo Penna",
      role: "Director Académico y CEO",
      image: "/team/facundo-penna.webp",
    },
    {
      name: "Charly Bertani",
      role: "Director Comercial",
      image: "/team/charly-bertani.webp",
    },
    {
      name: "Patricio Baccaro",
      role: "Director Financiero",
      image: "/team/patricio-baccaro.webp",
    }
  ]

  const mentors = [
    {
      name: "Ing. Gustavo Vionnet",
      role: "Mentor Empresario @ Club",
      image: "/team/gustavo-vionnet.webp",
    },
    {
      name: "Mag. Ing. Federico Vionnet",
      role: "Mentor Empresario @ Club",
      image: "/team/federico-vionnet.webp",
    }
  ]

  const academyProfessionals = [
    {
      name: "xxxxxxx xxxxxxxxxx",
      role: "Especialista en Procesos",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      name: "xxxxxxx xxxxxxxxxx",
      role: "Estrategia de Ventas B2B",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      name: "xxxxxxx xxxxxxxxxx",
      role: "Desarrollo Organizacional",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    },
    {
      name: "xxxxxxx xxxxxxxxxx",
      role: "Control de Gestión",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    }
  ]

  return (
    <section id="nosotros" className="py-24 bg-background text-foreground min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="max-w-3xl mb-20">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-8">Nosotros</h3>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-8 leading-none tracking-tighter">
            El equipo detrás de la <br />
            <span className="font-bold opacity-50">transformación de tu Pyme.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl">
            Acompañamos a dueños, directores y mandos medios a estructurar sistemas de gestión eficientes y rentables.
          </p>
        </div>

        {/* Propósito y Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Propósito */}
          <div className="bg-secondary/5 p-8 md:p-12 border border-foreground/10 rounded-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Propósito</h4>
              <p className="text-2xl font-serif text-foreground/85 leading-relaxed font-bold border-l-2 border-accent pl-6 md:pl-8">
                "Descubrir y actualizar el potencial de desempeño individual y colectivo de nuestra comunidad."
              </p>
            </div>
            <p className="mt-8 text-sm text-foreground/50">
              Creemos que las empresas crecen cuando crecen las personas que toman las decisiones día a día.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-secondary/5 p-8 md:p-12 border border-foreground/10 rounded-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Valores</h4>
              <p className="text-2xl font-serif text-foreground/85 leading-relaxed font-bold border-l-2 border-accent pl-6 md:pl-8">
                "Nuestros valores los descubrís en la práctica."
              </p>
            </div>
            <p className="mt-8 text-sm text-foreground/50 leading-relaxed">
              No listamos palabras genéricas en una pared. Demostramos el compromiso, la honestidad intelectual y la orientación a resultados en cada sesión de consultoría y mentoría.
            </p>
          </div>
        </div>

        {/* Socios y Directores */}
        <div className="mb-32">
          <div className="mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4">Dirección</h3>
            <h2 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter">
              Socios y <span className="font-bold">Directores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((member, index) => (
              <div key={index} className="group border border-foreground/5 rounded-sm overflow-hidden bg-secondary/5 hover:border-accent/30 transition-all duration-500">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-serif font-bold text-foreground mb-1">{member.name}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentores @ Club */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Club de Empresarios</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter">
              Mentores <br className="hidden lg:block" />
              <span className="font-bold">Empresarios</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed text-sm">
              Empresarios con trayectoria que guían a los miembros del Club de Empresarios compartiendo experiencias de trinchera y decisiones de negocio reales.
            </p>
            <div className="inline-block px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-accent">
              Acompañamiento Estratégico
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="group border border-foreground/5 rounded-sm overflow-hidden bg-secondary/5 hover:border-accent/30 transition-all duration-500">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-serif font-bold text-foreground mb-0.5">{mentor.name}</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent">{mentor.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profesionales @ Academy */}
        {/* <div>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Academy</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter">
              Profesionales <span className="font-bold">@ Academy</span>
            </h2>
            <p className="text-foreground/60 mt-4 text-sm max-w-xl">
              Especialistas y facilitadores dedicados al desarrollo de capacidades clave para la rentabilidad de las Pymes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {academyProfessionals.map((prof, index) => (
              <div key={index} className="group border border-foreground/5 rounded-sm overflow-hidden bg-secondary/5 hover:border-accent/20 transition-all duration-500">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={prof.image}
                    alt={prof.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-serif font-bold text-foreground mb-0.5">{prof.name}</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/50">{prof.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  )
}
