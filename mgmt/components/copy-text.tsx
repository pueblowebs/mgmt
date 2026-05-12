"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface CopyTextProps {
  text: string
  displayValue?: string
  className?: string
  children?: React.ReactNode
  successMessage?: string
}

export function CopyText({ 
  text, 
  displayValue, 
  className, 
  children,
  successMessage = "¡Copiado!"
}: CopyTextProps) {
  const [showCopied, setShowCopied] = useState(false)

  const copyToClipboard = async (e: React.MouseEvent) => {
    // We don't necessarily want to preventDefault if it's a link, 
    // but the user wants the copy animation.
    // If it's a phone/wa link, maybe we want to copy AND let the link work?
    // Usually copy is better as a separate action, but here they want the same behavior as email.
    
    // For email we prevented default because it's usually just a mailto.
    // Let's keep it consistent for now.
    
    try {
      await navigator.clipboard.writeText(text)
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
        title={`Click para copiar ${text}`}
      >
        {children || displayValue || text}
      </button>

      {/* Premium Notification */}
      <div 
        className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full",
          "bg-accent text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap",
          "shadow-xl shadow-accent/20 border border-white/10",
          "transition-all duration-500 ease-out flex items-center gap-2 z-50",
          showCopied 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-2 scale-90 pointer-events-none"
        )}
      >
        <Check className="w-3 h-3" />
        {successMessage}
      </div>

      {/* Subtle hover indicator */}
      <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover/copy:w-full transition-all duration-500" />
    </div>
  )
}
