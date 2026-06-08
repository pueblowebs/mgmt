"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"
  duration?: number // in ms
  delay?: number // in ms
  threshold?: number // between 0 and 1
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  duration = 750,
  delay = 0,
  threshold = 0.05,
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (ref.current) {
            observer.unobserve(ref.current) // only animate once
          }
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "-translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "zoom-out": "scale-105 opacity-0",
  }

  const activeClasses = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-down": "translate-y-0 opacity-100",
    "fade-left": "translate-x-0 opacity-100",
    "fade-right": "translate-x-0 opacity-100",
    "zoom-in": "scale-100 opacity-100",
    "zoom-out": "scale-100 opacity-100",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isIntersecting ? activeClasses[animation] : animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
