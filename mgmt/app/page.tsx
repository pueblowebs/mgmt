import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FocusSection } from "@/components/focus-section"
import { SolutionsOverview } from "@/components/solutions-overview"
import { AcademiaSection } from "@/components/academia-section"
import { ClubSection } from "@/components/club-section"
import { ProSection } from "@/components/pro-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FocusSection />
      <SolutionsOverview />
      <AcademiaSection />
      <ClubSection />
      <ProSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
