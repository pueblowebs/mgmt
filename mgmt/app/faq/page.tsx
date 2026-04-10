import { FaqSection } from "@/components/faq-section"

export const metadata = {
  title: 'FAQ - Management Pyme',
  description: 'Preguntas frecuentes sobre nuestros servicios de consultoría y academia para pymes.',
}

export default function FaqPage() {
  return (
    <main>
      <FaqSection />
    </main>
  )
}
