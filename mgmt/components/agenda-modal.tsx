'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, User, BookOpen } from "lucide-react"

const seminars = [
  { title: "Estrategia Pro 7FC", month: "Marzo", speaker: "Facundo Penna" },
  { title: "Directorio", month: "Marzo", speaker: "Pablo Kanterewicz" },
  { title: "Administración", month: "Abril", speaker: "Hugo Arinovich" },
  { title: "Proceso Decisorio", month: "Abril", speaker: "Silvia Aizenberg" },
  { title: "CEO", month: "Abril", speaker: "Facundo Penna" },
  { title: "Branding", month: "Mayo", speaker: "Veronica Capurro" },
  { title: "Organización Requerida", month: "Junio", speaker: "Pablo Kanterewicz" },
  { title: "Desarrollo Personal", month: "Junio", speaker: "Cecilia Oreggioni" },
  { title: "Personas y Cultura", month: "Junio", speaker: "Melisa Intrieri" },
  { title: "Estructura", month: "Julio", speaker: "Silvia Aizenberg" },
  { title: "Control de Gestión", month: "Julio", speaker: "Hugo Arinovich" },
  { title: "Operaciones", month: "Agosto", speaker: "Santiago Alfonso" },
  { title: "Management", month: "Agosto", speaker: "Facundo Penna" },
  { title: "Aprendizaje Organizacional", month: "Septiembre", speaker: "Facundo Penna" },
  { title: "Comercialización", month: "Septiembre", speaker: "Paolo Vozzi" },
  { title: "Gestión de Riesgos", month: "Octubre", speaker: "Viviana Coustarot" },
  { title: "De CEO a Director Pyme", month: "Octubre", speaker: "Atilio Penna" },
  { title: "Proyectos Estratégicos", month: "Octubre", speaker: "Santiago Alfonso" },
  { title: "Historias Empresarias", month: "Noviembre", speaker: "Daniel Llobera" },
  { title: "Valuación Pyme", month: "Noviembre", speaker: "Hugo Arinovich" },
  { title: "Business Plan Dir Ppta", month: "Noviembre", speaker: "Facundo Penna" },
]

interface AgendaModalProps {
  trigger?: React.ReactNode
}

export function AgendaModal({ trigger }: AgendaModalProps) {
  const groupedSeminars = seminars.reduce((acc, seminar) => {
    if (!acc[seminar.month]) acc[seminar.month] = []
    acc[seminar.month].push(seminar)
    return acc
  }, {} as Record<string, typeof seminars>)

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="rounded-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-all">
            [+ info]
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-3xl max-h-[85vh] overflow-y-auto bg-[#fbfaf8] border-none shadow-2xl p-6 md:p-12 lg:p-16">
        <DialogHeader className="mb-12 border-b border-accent/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/60">Programación Anual</span>
            <div className="w-12 h-px bg-accent/20" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent">2026</span>
          </div>
          <DialogTitle className="font-serif text-4xl md:text-6xl text-foreground tracking-tighter leading-none">
            Seminarios <span className="font-bold text-accent">Academy</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-16">
          {Object.entries(groupedSeminars).map(([month, items], monthIdx) => (
            <div key={month} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs font-bold tracking-[0.5em] uppercase text-accent whitespace-nowrap">{month}</h3>
                <div className="w-full h-px bg-linear-to-r from-accent/20 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-px bg-accent/5 rounded-lg overflow-hidden border border-accent/5">
                {items.map((seminar, idx) => (
                  <div 
                    key={idx} 
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 px-6 py-5 bg-white hover:bg-accent/2 transition-colors items-center group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent transition-colors shrink-0" />
                      <div>
                        <span className="text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors uppercase tracking-tight">
                          {seminar.title}
                        </span>
                      </div>
                    </div>
                    <div className="md:text-right pl-6 md:pl-0">
                      <div className="flex items-center md:justify-end gap-2">
                        <User className="w-3 h-3 text-accent/40" />
                        <span className="text-[10px] md:text-xs text-foreground/50 font-medium tracking-wide">
                          {seminar.speaker}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-8 border-t border-accent/10 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-accent/5 border border-accent/10 mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Método MGMT — Transformando la Gestión</span>
          </div>
          <p className="text-[10px] text-foreground/30 uppercase tracking-[0.3em] font-medium">
            Formación y consultoría para dueños de Pyme
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
