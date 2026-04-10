import { FaqSection } from "@/components/faq-section"

export const metadata = {
  title: 'FAQ - Management Pyme',
  description: 'Preguntas frecuentes sobre nuestros servicios de consultoría y academia para pymes.',
}

import { getFAQs } from "@/lib/api"

export default async function FaqPage() {
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

  return (
    <main>
      <FaqSection faqs={strapiFaqs} />
    </main>
  )
}
