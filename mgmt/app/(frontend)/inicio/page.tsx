import { HeroSection } from "@/components/hero-section"
import { VisualHero } from "@/components/visual-hero"
import { StepsSection } from "@/components/steps-section"
import { FocusSection } from "@/components/focus-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default async function InicioPage() {
  return (
    <>
      <VisualHero />
      <StepsSection />
      <HeroSection />
      <FocusSection />
      <TestimonialsSection />
    </>
  )
}
