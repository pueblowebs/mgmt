import { AcademiaSection } from "@/components/academia-section"
import { VisualHero } from "@/components/visual-hero"

export default function AcademiaPage() {
  return (
    <>
      <VisualHero 
        bgImage="/images/academy-hero-bg.png"
        altText="Academy MGMT - Formación para dueños de Pymes"
        tag="Academy"
        title={
          <>
            Formación para <br />
            <span className="font-medium text-[#3388cc]">Liderar y Ordenar</span> <br />
            tu Empresa
          </>
        }
        subtitle="Mejorá tu capacidad de decisión y profesionalizá la gestión desde adentro"
        tagClassName="bg-[#3388cc]/20 text-[#3388cc] border-[#3388cc]/20"
      />
      <AcademiaSection />
    </>
  )
}

