import { HeroSection } from "@/components/hero-section"
import { VisualHero } from "@/components/visual-hero"
import { StepsSection } from "@/components/steps-section"
import { FocusSection } from "@/components/focus-section"
import { TestimonialsSection } from "@/components/testimonials-section"
// import { SolutionsOverview } from "@/components/solutions-overview"
// import { BlogPreview } from "@/components/blog-preview"

export default function InicioPage() {
  return (
    <>
      <VisualHero />
      <StepsSection />
      <HeroSection />
      <FocusSection />
      {/* <SolutionsOverview /> */}
      <TestimonialsSection />
      {/* <BlogPreview /> */}
    </>
  )
}
