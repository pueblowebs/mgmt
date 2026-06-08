import { AcademiaSection } from "@/components/academia-section"
import { VisualHero } from "@/components/visual-hero"

export default function AcademiaPage() {
  return (
    <>
      <VisualHero 
        bgImage="/images/academy-hero-bg.png"
        altText="Academy MGMT - Formación para dueños de Pymes"
        tag="Academy"
        title="Formación que transforma."
        subtitle="Diseñada para quienes tienen el poder de cambiar el rumbo."
        tagClassName="bg-[#3388cc]/20 text-[#3388cc] border-[#3388cc]/20"
      />
      <AcademiaSection />
    </>
  )
}

