import { ProSection } from "@/components/pro-section"
import { VisualHero } from "@/components/visual-hero"

export default function ProPage() {
  return (
    <>
      <VisualHero 
        bgImage="/images/pro-hero.webp"
        altText="Pro MGMT - Acompañamiento Estratégico"
        tag="Pro"
        title={
          <>
            Dirección & <br />
            <span className="font-medium text-slate-300">management</span> <br />
            profesional
          </>
        }
        subtitle="Llevamos la empresa al siguiente nivel de autonomía junto con vos"
        tagClassName="bg-[#576d7d]/20 text-slate-300 border-[#576d7d]/20"
      />
      <ProSection />
    </>
  )
}

