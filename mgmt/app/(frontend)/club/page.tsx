import { ClubSection } from "@/components/club-section"
import { VisualHero } from "@/components/visual-hero"

export default function ClubPage() {
  return (
    <>
      <VisualHero 
        bgImage="/quincho-2.webp"
        altText="Club de Empresarios MGMT"
        tag="Club"
        title={
          <>
          Comunidad de <span className="font-medium text-slate-300">Empresas Pymes</span>
            {/* Comunidad de <br />
            <span className="font-medium text-slate-300">dueños y socios</span> <br />
            de PyMEs */}
          </>
        }
        subtitle="Un espacio exclusivo de apertura, reflexión y bienestar para el empresario"
        tagClassName="bg-[#00A19B]/20 text-[#00A19B] border-[#00A19B]/20"
      />
      <ClubSection />
    </>
  )
}

