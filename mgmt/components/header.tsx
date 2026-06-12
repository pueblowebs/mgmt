"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Inicio", href: "/inicio" },
    { label: "Academy", href: "/academy" },
    { label: "Club", href: "/club" },
    { label: "PRO", href: "/pro" },
    { label: "Nosotros", href: "/nosotros" },
    // { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ]

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/inicio" || pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-header-bg text-header-foreground transition-colors duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/inicio" onClick={handleLogoClick} className="flex items-center gap-3">
          <Image 
            src="/logo/logo-dark.png" 
            alt="Management PyME" 
            width={68} 
            height={68} 
            className="object-contain dark:hidden"
          />
          <Image 
            src="/logo/logo-light.png" 
            alt="Management PyME" 
            width={68} 
            height={68} 
            className="object-contain hidden dark:block"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-none tracking-wider uppercase">Management</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-70">PyME Argentina</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/inicio" && pathname?.startsWith(item.href + "/"));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative text-xs font-semibold tracking-widest uppercase transition-all pb-1.5 group",
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] bg-header-foreground transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-header-foreground hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-header-bg text-header-foreground border-l border-white/10 p-0">
              <div className="flex flex-col h-full">
                <SheetHeader className="p-6 border-b border-white/10 text-left space-y-0">
                  <SheetTitle className="font-serif text-lg tracking-wider uppercase text-header-foreground">Management PyME</SheetTitle>
                  <SheetDescription className="sr-only">Menú de navegación móvil</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col p-6 gap-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/inicio" && pathname?.startsWith(item.href + "/"));
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "py-3 text-xs font-semibold tracking-widest uppercase border-b border-white/5 last:border-0 transition-all",
                          isActive ? "text-header-foreground opacity-100" : "text-header-foreground opacity-50 hover:opacity-100"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
