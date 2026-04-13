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
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="rounded-full border-accent/30 text-accent hover:bg-accent hover:text-white transition-all">
            [+ info]
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-5xl max-h-[85vh] overflow-y-auto bg-[#fbfaf8] border-none shadow-2xl p-6 md:p-10">
        <DialogHeader className="mb-10 border-b border-accent/10 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent">2026</span>
          </div>
          <DialogTitle className="font-serif text-4xl md:text-5xl text-foreground tracking-tighter">
            Seminarios <span className="font-bold text-accent">Academy</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
          {/* Column Headers for Desktop - Hidden on mobile or handled differently */}
          <div className="hidden md:grid grid-cols-[1fr_80px_120px] gap-4 px-4 py-3 bg-accent/5 rounded-t-lg text-[10px] font-bold uppercase tracking-widest text-accent/70 items-center">
            <div>Seminario</div>
            <div className="text-center">Mes</div>
            <div className="text-right">Speaker</div>
          </div>
          <div className="hidden md:grid grid-cols-[1fr_80px_120px] gap-4 px-4 py-3 bg-accent/5 rounded-t-lg text-[10px] font-bold uppercase tracking-widest text-accent/70 items-center">
            <div>Seminario</div>
            <div className="text-center">Mes</div>
            <div className="text-right">Speaker</div>
          </div>

          {/* List items split into two logical grids or just one wrapping grid */}
          <div className="md:contents">
            {seminars.map((seminar, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-[1fr_80px_100px] md:grid-cols-[1fr_80px_120px] gap-2 md:gap-4 px-2 md:px-4 py-3 md:py-4 border-b border-accent/5 hover:bg-accent/2 transition-colors items-center group"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors shrink-0" />
                  <span className="text-[11px] md:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors uppercase tracking-tight line-clamp-1">
                    {seminar.title}
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-secondary/50 text-[9px] md:text-[10px] font-bold text-accent/60 uppercase tracking-tighter">
                    {seminar.month}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] md:text-xs text-foreground/50 font-serif italic line-clamp-1">
                    {seminar.speaker}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-accent/10 text-center">
          <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-medium">
            MGMT — Formación y consultoría para dueños de Pyme
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
