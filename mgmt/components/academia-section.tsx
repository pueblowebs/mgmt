import { CheckCircle2, Calendar, Globe, Users, Trophy, BookOpen, Video, MessageCircle, FolderOpen, ArrowDownToLine, Compass, LineChart, Layers, Quote, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AgendaModal } from "./agenda-modal"

export function AcademiaSection() {
  return (
    <section id="academia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section 1: Metodología (Dimensiones) */}
        <div className="mb-28">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-3">Metodología</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground font-bold tracking-tight">
              Dimensiones Críticas Abordadas
            </h2>
            <p className="mt-4 text-foreground/60 leading-relaxed font-sans max-w-2xl text-base md:text-lg">
              Analizamos y profesionalizamos tu Pyme a través de cuatro ejes fundamentales diseñados para garantizar su sostenibilidad y crecimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Potencial Humano",
                desc: "Desarrollo Personal, Personas y Cultura, Estructura, Aprendizaje Organizacional y Análisis Cualitativo.",
                icon: Users
              },
              {
                title: "Gobierno",
                desc: "Directorio, Estrategia, CEO, Plan de Negocio y Proyectos Estratégicos.",
                icon: Compass
              },
              {
                title: "Profesionalización Básica",
                desc: "Dirección Comercial, Branding, Administración, Control de Gestión y Excelencia Operacional.",
                icon: LineChart
              },
              {
                title: "Organización Requerida",
                desc: "Capacidad, Diseño, Alineación, Management y Remuneraciones.",
                icon: Layers
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group bg-secondary/5 backdrop-blur-md p-6 border border-foreground/10 hover:border-accent/40 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-500">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="border-l-2 border-accent/20 group-hover:border-accent pl-4 transition-colors duration-500">
                      <h3 className="font-bold text-foreground text-xs uppercase tracking-wider block mb-2 group-hover:text-accent transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-foreground/60 text-xs leading-relaxed block font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section 2: Estructura del Programa (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-20 border-t border-foreground/5">
          {/* Left Column: Info & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-3">Estructura</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground font-bold tracking-tight">
                Programa 2026
              </h2>
              <p className="mt-4 text-foreground/60 leading-relaxed text-sm md:text-base">
                Un formato diseñado para integrarse con la agenda del dueño de empresa, facilitando la asimilación del conocimiento y su aplicación inmediata.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-accent/5 border border-accent/10">
              <Quote className="absolute top-3 right-4 w-8 h-8 text-accent/10" />
              <p className="text-foreground/80 text-sm font-semibold leading-relaxed pr-6 italic">
                "Academy forma y prepara a sus alumnos para dirigir y rentabilizar sus organizaciones de manera saludable y sostenible"
              </p>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/5491165442672?text=Hola%20Facundo,%20me%20gustaría%20postularme%20a%20Academy%20MGMT." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="shiny" size="xl" className="w-full rounded-full text-sm font-bold tracking-wider h-14 transition-transform">
                  Postularme ahora
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Key Details Card */}
          <div className="lg:col-span-7">
            <div className="bg-secondary/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-foreground/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-foreground/5">
                <span className="text-lg font-serif text-foreground font-bold">Detalles de la Cursada</span>
                <div className="flex flex-wrap gap-2.5">
                  <a 
                    href="https://wa.me/5491165442672?text=Hola,%20me%20gustaría%20descargar%20el%20programa%20de%20Academy%20MGMT." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 text-accent text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm cursor-pointer group/btn"
                  >
                    <ArrowDownToLine className="w-3 h-3 opacity-70 group-hover/btn:opacity-100" />
                    <span>Programa</span>
                  </a>
                  <AgendaModal trigger={
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-accent hover:text-white transition-all duration-300 shadow-sm cursor-pointer group/btn">
                      <Calendar className="w-3 h-3 opacity-70 group-hover/btn:opacity-100" />
                      <span>Cronograma</span>
                    </button>
                  } />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    label: "Calendario",
                    text: "Marzo - Noviembre",
                    icon: Calendar
                  },
                  {
                    label: "Modalidad",
                    text: "22 seminarios en línea por Zoom",
                    icon: Video
                  },
                  {
                    label: "Frecuencia",
                    text: "1 seminario de 2 horas cada 15 días",
                    icon: Clock
                  },
                  {
                    label: "Comunidad",
                    text: "Canal exclusivo en Whatsapp",
                    icon: MessageCircle
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-3.5 items-start p-4 rounded-xl bg-background/40 border border-foreground/[0.02] hover:border-accent/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">{item.label}</h4>
                        <span className="text-sm font-semibold text-foreground leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-background/60 border border-foreground/[0.02] flex gap-3.5 items-start">
                <FolderOpen className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1.5">Drive Compartido Acceso 24/7</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Grabación del seminario, Ficha técnica, Presentación PDF y Auto Diagnóstico Empresario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: MGMT en Números */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-foreground/5 mt-12">
          {[
            { label: "Años de experiencia", value: "+20", icon: Trophy },
            { label: "Profesores nivel directivo", value: "15", icon: Users },
            { label: "Alumnos transformados", value: "+500", icon: BookOpen },
            { label: "Método orientado a la acción", value: "10", sub: "Años" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-5xl font-serif text-accent mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 leading-relaxed max-w-[120px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
