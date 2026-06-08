import { CheckCircle2, Calendar, Globe, Users, Trophy, BookOpen, Video, MessageCircle, FolderOpen, ArrowDownToLine, Compass, LineChart, Layers, Quote, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AgendaModal } from "./agenda-modal"

export function AcademiaSection() {
  return (
    <section id="academia" className="py-24 bg-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          {/* Left Column (Content & Dimensions) */}
          <div className="lg:col-span-7">
            <div className="mb-8 pb-6 border-b border-foreground/5">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">Metodología</h4>
              <span className="text-2xl font-serif text-foreground font-bold block">Dimensiones Críticas Abordadas</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <div key={i} className="group flex flex-col gap-3 p-5 rounded-2xl bg-secondary/5 border border-foreground/5 hover:border-accent/25 hover:bg-secondary/10 transition-all duration-300 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground text-sm uppercase tracking-wider block mb-1 group-hover:text-accent transition-colors">{item.title}</span>
                        <span className="text-foreground/60 text-xs sm:text-sm leading-relaxed block">{item.desc}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          {/* Right Column (Structure Card) */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-secondary/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-foreground/5 shadow-xl flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-8 grow">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-foreground/5">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">Estructura</h4>
                    <span className="text-2xl font-serif text-foreground font-bold block">Programa 2026</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a 
                      href="https://wa.me/5491165442672?text=Hola,%20me%20gustaría%20descargar%20el%20programa%20de%20Academy%20MGMT." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-accent/20 text-accent text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm cursor-pointer group/btn"
                    >
                      <ArrowDownToLine className="w-3 h-3 opacity-70 group-hover/btn:opacity-100" />
                      <span>Programa</span>
                    </a>
                    <AgendaModal trigger={
                      <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-accent hover:text-white transition-all duration-300 shadow-sm cursor-pointer group/btn">
                        <Calendar className="w-3 h-3 opacity-70 group-hover/btn:opacity-100" />
                        <span>Cronograma</span>
                      </button>
                    } />
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      label: "Calendario:",
                      text: "Marzo - Noviembre",
                      icon: Calendar
                    },
                    {
                      label: "22 seminarios en línea por zoom.",
                      text: "",
                      icon: Video
                    },
                    {
                      label: "1 seminario, de 2 horas, cada 15 días.",
                      text: "",
                      icon: Clock
                    },
                    {
                      label: "1 Canal de Comunidad y Comunicación @ Whatsapp.",
                      text: "",
                      icon: MessageCircle
                    },
                    {
                      label: "Drive Compartido con:",
                      text: "Video del seminario, Ficha Técnica del Seminario, Presentación del Seminario y Auto Diagnostico Empresario del Seminario.",
                      icon: FolderOpen
                    }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-3.5 items-start group/item">
                        <Icon className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <div className="text-sm leading-relaxed text-foreground/80">
                          {item.text ? (
                            <>
                              <span className="font-bold text-foreground">{item.label}</span>{" "}
                              <span className="text-foreground/70">{item.text}</span>
                            </>
                          ) : (
                            <span className="font-medium text-foreground">{item.label}</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-8 border-t border-foreground/5 mt-auto flex flex-col gap-6">
                <div className="relative p-5 rounded-2xl bg-accent/5 border border-accent/10">
                  <Quote className="absolute top-3 right-4 w-8 h-8 text-accent/10" />
                  <p className="text-foreground/80 text-sm font-semibold leading-relaxed pr-6">
                    "Academy forma y prepara a sus alumnos para dirigir y rentabilizar sus organizaciones de manera saludable y sostenible"
                  </p>
                </div>
                
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
          </div>
        </div>

        {/* MGMT en Números */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-foreground/5">
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
