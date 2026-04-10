"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "/inicio" },
    { label: "Academia", href: "/academia" },
    { label: "Club de Empresarios", href: "/clubdeempresarios" },
    { label: "PRO", href: "/pro" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-header-bg text-header-foreground transition-colors duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/inicio" className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 grayscale brightness-200">
            <span className="text-2xl font-light tracking-tight">M</span>
            <span className="text-2xl font-thin">|</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-none tracking-wider uppercase">Management</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-70">Pyme Academia</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-semibold tracking-widest uppercase opacity-80 hover:opacity-100 transition-all hover:-translate-y-px"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-header-foreground hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-header-bg text-header-foreground border-l border-white/10 p-0">
              <div className="flex flex-col h-full">
                <div className="p-8 border-b border-white/10">
                  <span className="font-serif text-xl tracking-wider uppercase">Management Pyme</span>
                </div>
                <nav className="flex flex-col p-8 gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="py-4 text-sm font-bold tracking-widest uppercase border-b border-white/5 last:border-0 hover:pl-2 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

  )
}
