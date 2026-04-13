import { FaqSection } from "@/components/faq-section"
import { getFAQs } from "@/lib/api"
import { Suspense } from "react"

export const metadata = {
  title: 'FAQ - Management Pyme',
  description: 'Preguntas frecuentes sobre nuestros servicios de consultoría y academia para pymes.',
}

async function StrapiFaqContent() {
  let strapiFaqs = undefined

  try {
    const faqsData = await getFAQs()
    
    // Mapeamos los datos de Strapi (v5 wrapper)
    strapiFaqs = faqsData?.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    }))
  } catch (error) {
    console.error("Error fetching FAQs from Strapi, using fallback:", error)
  }

  return <FaqSection faqs={strapiFaqs} />
}

export default function FaqPage() {
  return (
    <main>
      <Suspense fallback={<FaqSection />}>
        <StrapiFaqContent />
      </Suspense>
    </main>
  )
}

