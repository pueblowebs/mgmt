import { ClubSection } from "@/components/club-section"
import { VisualHero } from "@/components/visual-hero"

export default function ClubPage() {
  return (
    <>
      <VisualHero 
        bgImage="/collage.webp"
        altText="Club de Empresarios MGMT"
        tag="Club"
        title={
          <>
            Comunidad de <br />
            <span className="font-medium text-slate-300">dueños y socios</span> <br />
            de PyMEs
          </>
        }
        subtitle="Un espacio exclusivo de networking, análisis y reflexión para potenciar tus decisiones empresariales"
        tagClassName="bg-[#3388cc]/20 text-slate-300 border-[#3388cc]/20"
      />
      <ClubSection />
    </>
  )
}

