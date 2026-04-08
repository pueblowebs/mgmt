"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "1234567890" // Cambiar por el número real
  const message = "Hola, me gustaría obtener más información sobre Management Pyme."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </button>
  )
}
