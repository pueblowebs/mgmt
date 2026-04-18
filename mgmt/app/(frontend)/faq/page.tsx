import { FaqSection, Faq } from "@/components/faq-section"
import { getFAQs } from "@/lib/api"
import { Suspense } from "react"

export const metadata = {
  title: 'FAQ - Management Pyme',
  description: 'Preguntas frecuentes sobre nuestros servicios de consultoría y academia para pymes.',
}

async function PayloadFaqContent() {
  let faqs: Faq[] = []

  try {
    const faqsData = await getFAQs()
    
    faqs = faqsData?.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    })) || []
  } catch (error) {
    console.error("Error fetching FAQs from Payload:", error)
  }

  return <FaqSection faqs={faqs.length > 0 ? faqs : undefined} />
}

export default function FaqPage() {
  return (
    <main>
      <Suspense fallback={<FaqSection />}>
        <PayloadFaqContent />
      </Suspense>
    </main>
  )
}

