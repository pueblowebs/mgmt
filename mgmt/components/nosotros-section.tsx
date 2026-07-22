"use client"

import Image from "next/image"
import { Target, ShieldCheck, Users, Briefcase, GraduationCap, ChevronDown } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

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
      name: "Silvia Aizenberg",
      role: "Estructura y Proceso Decisorio",
      image: "/team/silvia-aizenberg.webp"
    },
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
      name: "Patricia Vargas",
      role: "Análisis Cualitativo",
      image: "/team/patricia-vargas.webp"
    },
    {
      name: "Paolo Vozzi",
      role: "Comercialización",
      image: "/team/paolo-vozzi.webp"
    },
    {
      name: "Pablo Kanterewicz",
      role: "Directorio y Organización Requerida",
      image: "/team/pablo-kanterewicz.webp"
    },
    {
      name: "Santiago Alfonso",
      role: "Excelencia en Operaciones y \n Proyectos Estratégicos",
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
    },
    {
      name: "Facundo Penna",
      role: "CEO, Management & Aprendizaje",
      image: "/team/facundo-penna.webp"
    }
  ]
  
  return (
    <section id="nosotros" className="bg-background text-foreground min-h-screen pb-24">
      {/* Visual Hero Header - Designed to safely overlap cards without collisions */}
      <div className="relative w-full overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/club-lapicera.webp"
            alt="Nosotros - PyME"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center pt-24 pb-28 md:pb-44">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase bg-accent/20 text-accent border border-accent/20 rounded-full">
              Nosotros
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-lg">
              El equipo detrás de la <span className="font-bold text-accent">transformación</span> de tu PyME
            </h1>
            <p className="max-w-2xl mx-auto text-xs md:text-base text-white/70 leading-relaxed font-light">
              Adoptamos la Organización Requerida (Jacques, Elliot) como sistema y la Teoría de la Transición del Emprendedor (Penna, Atilio) como metodología.
            </p>
          </div>
        </div>

      </div>

      {/* Cards container overlapping the bottom of the hero */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-20 mb-16">
        {/* Redesigned Propósito y Valores Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Propósito Card */}
          <ScrollReveal>
            <div className="group bg-secondary/5 backdrop-blur-md p-6 md:p-8 border border-foreground/10 hover:border-accent/40 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-500 h-full">
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
          </ScrollReveal>

          {/* Valores Card */}
          <ScrollReveal delay={100}>
            <div className="group bg-secondary/5 backdrop-blur-md p-6 md:p-8 border border-foreground/10 hover:border-accent/40 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-500 h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">Valores</h4>
                <p className="text-base md:text-lg font-serif text-foreground/85 leading-relaxed font-bold border-l-2 border-accent pl-4">
                  "Evolución, desempeño y transparencia."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator (Below Cards) */}
      <div className="flex justify-center mb-16 relative z-30">
        <button
          onClick={() => {
            const element = document.getElementById("team-start");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity p-2 rounded-full focus:outline-hidden"
          aria-label="Ir a la sección de Socios y Directores"
        >
          <ChevronDown className="w-8 h-8 text-foreground/45 hover:text-accent" />
        </button>
      </div>

      <div className="container mx-auto px-4">
        {/* Socios y Directores */}
        <div id="team-start" className="mb-20 md:mb-32 scroll-mt-26">
          <ScrollReveal className="mb-10 md:mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-3">Dirección</h3>
            <h2 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter">
              Socios y <span className="font-bold">Directores</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {directors.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group flex flex-col items-center p-6 md:p-8 bg-secondary/5 lg:border border-foreground/5 rounded-2xl hover:border-accent/30 hover:bg-secondary/10 transition-all duration-500 h-full">
                  <div className="relative w-48 md:w-56 aspect-2/3 mb-6">
                    {/* Premium offset backgrounds */}
                    <div className="absolute -inset-1.5 bg-accent/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10"></div>
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
                    <h4 className="text-lg md:text-xl font-serif font-bold text-foreground mb-1">{member.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent whitespace-pre-line">{member.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mentores @ Club */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-20 md:mb-32">
          <ScrollReveal className="lg:col-span-4 space-y-4 md:space-y-6">
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
          </ScrollReveal>
          
          <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6">
            {mentors.map((mentor, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-secondary/5 lg:border border-foreground/5 rounded-2xl hover:border-accent/30 hover:bg-secondary/10 transition-all duration-500 h-full">
                  <div className="relative w-32 sm:w-40 md:w-44 aspect-2/3 mb-5">
                    <div className="absolute -inset-1.5 bg-accent/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10"></div>
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
                    <h4 className="text-base md:text-lg font-serif font-bold text-foreground mb-0.5">{mentor.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent whitespace-pre-line">{mentor.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Profesionales @ Academy */}
        <div className="mb-8">
          <ScrollReveal className="mb-10 md:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Academy</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter">
              Profesionales <span className="font-bold">@ Academy</span>
            </h2>
            <p className="text-foreground/60 mt-3 text-sm max-w-xl">
              Especialistas y facilitadores dedicados al desarrollo de capacidades clave para la rentabilidad de las PyMEs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
            {academyProfessionals.map((prof, index) => (
              <ScrollReveal key={index} delay={(index % 4) * 80}>
                <div className="group flex flex-col items-center transition-all duration-500 h-full">
                  <div className="relative w-32 md:w-36 aspect-2/3 mb-4">
                    <div className="absolute -inset-1 bg-accent/5 rounded-xl rotate-3 group-hover:rotate-6 transition-all duration-500 -z-10"></div>
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
                    <h4 className="text-sm md:text-base font-serif font-bold text-foreground mb-0.5">{prof.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/50 whitespace-pre-line">{prof.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
