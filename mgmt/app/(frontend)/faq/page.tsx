import { FaqSection, Faq } from "@/components/faq-section"
import { getFAQs } from "@/lib/api"
import { Suspense } from "react"
import Image from "next/image"

export const metadata = {
  title: 'FAQ - Management Pyme',
  description: 'Preguntas frecuentes sobre nuestros servicios de consultoría y academia para pymes.',
}

function FaqHeader() {
  return (
    <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-black mb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80"
          alt="FAQ - MGMT"
          fill
          priority
          className="object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.4em] uppercase bg-accent/20 text-accent border border-accent/20 rounded-full">
            FAQ
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-lg">
            Resolvemos tus <span className="font-bold text-accent">dudas.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs md:text-base text-white/70 leading-relaxed font-light">
            Respuestas claras y directas para que puedas tomar decisiones con mayor seguridad.
          </p>
        </div>
      </div>
    </div>
  )
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
    <div className="pb-32">
      <FaqHeader />
      <Suspense fallback={<FaqSection />}>
        <PayloadFaqContent />
      </Suspense>
    </div>
  )
}
