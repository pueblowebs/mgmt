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
      name: "Vero Capurro",
      role: "Branding",
      image: "/team/vero-capurro.webp"
    },
    {
      name: "Melisa Intrieri",
      role: "Personas & Cultura",
      image: "/team/melisa-intrieri.webp"
    },
    {
      name: "Cecilia Oreggioni",
      role: "Desarrollo Personal",
      image: "/team/cecilia-oreggioni.webp"
    },
    {
      name: "Hugo Arinovich",
      role: "Administración y Control de Gestión",
      image: "/team/hugo-arinovich.webp"
    },
    {
      name: "Pablo Kanterewicz",
      role: "Directorio y Organización Requerida",
      image: "/team/pablo-kanterewicz.webp"
    },
    {
      name: "Santiago Alfonso",
      role: "Excelencia en Operaciones",
      image: "/team/santiago-alfonso.webp"
    },
    {
      name: "Atilio Penna",
      role: "Transición de CEO a Director",
      image: "/team/atilio-penna.webp"
    },
    {
      name: "Viviana Coustarot",
      role: "Riesgos Legales",
      image: "/team/viviana-coustarot.webp"
    }
  ]

  return (
    <section id="nosotros" className="bg-background text-foreground min-h-screen">
      {/* Visual Hero Header - Less tall than screen */}
      <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-black mb-12">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/club-lapicera.webp"
            alt="Nosotros - MGMT"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.4em] uppercase bg-accent/20 text-accent border border-accent/20 rounded-full">
              Nosotros
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-lg">
              El equipo detrás de la <span className="font-bold text-accent">transformación</span> de tu Pyme
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-base text-white/70 leading-relaxed font-light">
              Acompañamos a dueños, directores y mandos medios a estructurar sistemas de gestión eficientes y rentables.
            </p>
          </div>
        </div>
      </div>

      {/* Cards container overlapping the bottom of the hero */}
      <div className="container mx-auto px-4 -mt-20 md:-mt-28 relative z-20 mb-32">
        {/* Redesigned Propósito y Valores Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Propósito Card */}
          <div className="group bg-secondary/5 backdrop-blur-md p-6 md:p-8 border border-foreground/10 hover:border-accent/40 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-500">
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">Propósito</h4>
              <p className="text-base md:text-lg font-serif text-foreground/85 leading-relaxed font-bold border-l-2 border-accent pl-4">
                "Descubrir y actualizar el potencial de desempeño individual y colectivo."
              </p>
            </div>
          </div>

          {/* Valores Card */}
          <div className="group bg-secondary/5 backdrop-blur-md p-6 md:p-8 border border-foreground/10 hover:border-accent/40 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-500">
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">Valores</h4>
              <p className="text-base md:text-lg font-serif text-foreground/85 leading-relaxed font-bold border-l-2 border-accent pl-4">
                "Nuestros valores se descubren en la práctica diaria de gestión."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Socios y Directores */}
        <div id="team-start" className="mb-32">
          <div className="mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4">Dirección</h3>
            <h2 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter">
              Socios y <span className="font-bold">Directores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((member, index) => (
              <div key={index} className="group flex flex-col items-center p-8 bg-secondary/5 border border-foreground/5 rounded-2xl hover:border-accent/30 hover:bg-secondary/10 transition-all duration-500">
                <div className="relative w-52 aspect-2/3 mb-6">
                  {/* Premium offset borders and backgrounds */}
                  <div className="absolute -inset-1.5 bg-accent/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10"></div>
                  <div className="absolute inset-0 border border-foreground/10 rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-500 -z-10"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-foreground/5 bg-background shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="text-center">
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
              <div key={index} className="group flex flex-col items-center p-6 bg-secondary/5 border border-foreground/5 rounded-2xl hover:border-accent/30 hover:bg-secondary/10 transition-all duration-500">
                <div className="relative w-40 aspect-2/3 mb-5">
                  <div className="absolute -inset-1.5 bg-accent/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10"></div>
                  <div className="absolute inset-0 border border-foreground/10 rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-500 -z-10"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-foreground/5 bg-background shadow-sm">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-foreground mb-0.5">{mentor.name}</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent">{mentor.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profesionales @ Academy */}
        <div>
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {academyProfessionals.map((prof, index) => (
              <div key={index} className="group flex flex-col items-center transition-all duration-500">
                <div className="relative w-32 aspect-2/3 mb-4">
                  <div className="absolute -inset-1 bg-accent/5 rounded-xl rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10"></div>
                  <div className="absolute inset-0 border border-foreground/15 rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-500 -z-10"></div>
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-foreground/5 bg-background shadow-sm">
                    <Image
                      src={prof.image}
                      alt={prof.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-base font-serif font-bold text-foreground mb-0.5">{prof.name}</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/50">{prof.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
