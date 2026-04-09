import { HeroSection } from "@/components/hero-section"
import { FocusSection } from "@/components/focus-section"
import { SolutionsOverview } from "@/components/solutions-overview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogPreview } from "@/components/blog-preview"

export default function InicioPage() {
  return (
    <>
      <HeroSection />
      <FocusSection />
      <SolutionsOverview />
      <TestimonialsSection />
      <BlogPreview />
    </>
  )
}
