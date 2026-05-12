"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface CopyEmailProps {
  email: string
  className?: string
  children?: React.ReactNode
}

export function CopyEmail({ email, className, children }: CopyEmailProps) {
  const [showCopied, setShowCopied] = useState(false)

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(email)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err)
    }
  }

  return (
    <div className="relative inline-flex items-center group/copy w-fit">
      <button
        onClick={copyToClipboard}
        className={cn(
          "cursor-pointer hover:text-accent transition-all duration-300 text-left relative",
          className
        )}
        title="Click para copiar email"
      >
        {children || email}
      </button>

      {/* Premium Notification near the email */}
      <div 
        className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full",
          "bg-accent text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap",
          "shadow-xl shadow-accent/20 border border-white/10",
          "transition-all duration-500 ease-out flex items-center gap-2",
          showCopied 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-2 scale-90 pointer-events-none"
        )}
      >
        <Check className="w-3 h-3" />
        ¡Copiado con éxito!
      </div>

      {/* Subtle hover indicator */}
      <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover/copy:w-full transition-all duration-500" />
    </div>
  )
}
