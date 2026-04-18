import { HeroSection } from "@/components/hero-section"
import { VisualHero } from "@/components/visual-hero"
import { StepsSection } from "@/components/steps-section"
import { FocusSection } from "@/components/focus-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { getSiteSettings } from "@/lib/api"

export default async function InicioPage() {
  const settings = await getSiteSettings()

  return (
    <>
      <VisualHero />
      <StepsSection />
      <HeroSection 
        title={settings?.title} 
        subtitle={settings?.subtitle} 
        description={settings?.description} 
      />
      <FocusSection />
      <TestimonialsSection />
    </>
  )
}
