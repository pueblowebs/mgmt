import { ProSection } from "@/components/pro-section"
import { VisualHero } from "@/components/visual-hero"

export default function ProPage() {
  return (
    <>
      <VisualHero 
        bgImage="/quincho-2.webp"
        altText="Pro MGMT - Acompañamiento Estratégico"
        tag="Pro"
        title={
          <>
            Dirección y <br />
            <span className="font-medium text-slate-300">acompañamiento</span> <br />
            estratégico
          </>
        }
        subtitle="Acompañamos a dueños y líderes a estructurar su empresa para el crecimiento sostenido"
        tagClassName="bg-[#576d7d]/20 text-slate-300 border-[#576d7d]/20"
      />
      <ProSection />
    </>
  )
}

