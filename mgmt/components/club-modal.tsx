'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Info, CheckCircle2, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ClubModalProps {
  trigger?: React.ReactNode
}

const memberships = [
  { id: 1, category: "EMPRENDEDOR", price: "3.000 USD", financing: "12 CUOTAS" },
  { id: 2, category: "MiPYME <11 empleados", price: "4.200 USD", financing: "12 CUOTAS" },
  { id: 3, category: "PYME <20 empleados", price: "5.000 USD", financing: "12 CUOTAS" },
  { id: 4, category: "PYME <50 empleados", price: "6.500 USD", financing: "10 CUOTAS" },
  { id: 5, category: "PYME <100 empleados", price: "7.500 USD", financing: "10 CUOTAS" },
  { id: 6, category: "PYME <130 empleados", price: "9.000 USD", financing: "10 CUOTAS" },
]

export function ClubModal({ trigger }: ClubModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 text-accent text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer group/btn">
            <Info className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
            <span>[+ info]</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-[#fbfaf8] border-none shadow-2xl p-6 md:p-12 lg:p-16">
        <DialogHeader className="mb-12 border-b border-accent/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/60">Propuesta 2026</span>
            <div className="w-12 h-px bg-accent/20" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent">Club de Empresarios</span>
          </div>
          <DialogTitle className="font-serif text-4xl md:text-6xl text-foreground tracking-tighter leading-none">
            Estructura y <span className="font-bold text-accent">Membresías</span>
          </DialogTitle>
        </DialogHeader>
        
        {/* Roadmap / Timeline Section */}
        <div className="mb-20">
          <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 mb-12">
            {/* Labels Row */}
            <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-1">Inicio</div>
            <div></div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-1 text-right">Fin</div>

            {/* Months and Line Row */}
            <div className="text-2xl md:text-4xl font-serif leading-none">Marzo</div>
            <div className="flex items-center min-w-[40px]">
              <div className="w-full h-[2px] bg-foreground/80 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-foreground/80 rotate-45" />
              </div>
            </div>
            <div className="text-2xl md:text-4xl font-serif leading-none text-right">Noviembre</div>

            {/* Subtitles Row */}
            <div className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest mt-1">4 y 5 @ Esperanza</div>
            <div></div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              { label: "MENTOREO CEO: semanal y mensual virtual / presencial", color: "bg-[#7c3aed]" },
              { label: "SESIONES DIRECTORIO: mensual presencial", color: "bg-[#0278D5]" },
              { label: "EXPERIENCIAS & RETIROS: mitad y fin de año presencial", color: "bg-[#10b981]" },
              { label: "ACADEMY: marzo a noviembre virtual", color: "bg-black" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "w-full py-4 px-6 rounded-xl text-white text-center font-bold tracking-tight text-sm md:text-base shadow-lg transition-transform hover:scale-[1.02] cursor-default",
                  item.color
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-bold tracking-[0.5em] uppercase text-accent whitespace-nowrap">Membresías Anuales</h3>
            <div className="w-full h-px bg-linear-to-r from-accent/20 to-transparent" />
          </div>

          <div className="overflow-hidden rounded-2xl border border-accent/10 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-foreground text-background">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest border-r border-background/10">#</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest border-r border-background/10">Categoría</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest border-r border-background/10">Membresía Anual</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Financiación</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {memberships.map((m, idx) => (
                  <tr key={m.id} className={cn(
                    "border-b border-accent/5 hover:bg-accent/5 transition-colors",
                    idx % 2 === 0 ? "bg-white" : "bg-accent/2"
                  )}>
                    <td className="px-6 py-4 text-xs font-bold text-foreground/40 border-r border-accent/5">{m.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground border-r border-accent/5">{m.category}</td>
                    <td className="px-6 py-4 text-sm font-bold text-accent border-r border-accent/5">{m.price}</td>
                    <td className="px-6 py-4 text-sm text-foreground/60">{m.financing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex items-center gap-2 text-[10px] text-foreground/40 uppercase font-bold tracking-widest">
              <CheckCircle2 className="w-3 h-3 text-accent/40" />
              <span>1- Los valores están expresados sin IVA.</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-foreground/40 uppercase font-bold tracking-widest">
              <TrendingUp className="w-3 h-3 text-accent/40" />
              <span>2- El tipo de cambio referencia es promedio USD oficial.</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-accent/10 text-center">
          <p className="text-[10px] text-foreground/30 uppercase tracking-[0.3em] font-medium max-w-lg mx-auto leading-relaxed">
            Formación y consultoría estratégica para dueños de Pyme que buscan profesionalizar su gestión y resultados.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
