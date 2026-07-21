import { AcademiaSection } from "@/components/academia-section"
import { VisualHero } from "@/components/visual-hero"

export default function AcademiaPage() {
  return (
    <>
      <VisualHero 
        bgImage="/quincho.webp"
        altText="Academy MGMT - Formación para dueños de PyMEs"
        tag="Academy"
        title={<>Formación que transforma</>}
        subtitle="Diseñada para quienes tienen el poder de cambiar el rumbo."
        tagClassName="bg-[#00A19B]/20 text-[#00A19B] border-[#00A19B]/20"
      />
      <AcademiaSection />
    </>
  )
}

