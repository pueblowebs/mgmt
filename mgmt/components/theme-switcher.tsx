"use client"

import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Zap, Layout, Shield } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 flex gap-2 bg-background p-2 rounded-full shadow-2xl border border-border/50 backdrop-blur-sm">
      <Button
        variant={theme === "institutional" ? "default" : "ghost"}
        size="sm"
        className="rounded-full gap-2 px-4"
        onClick={() => setTheme("institutional")}
      >
        <Shield className="h-4 w-4" />
        <span className="hidden sm:inline">Institucional</span>
      </Button>
      <Button
        variant={theme === "growth" ? "default" : "ghost"}
        size="sm"
        className="rounded-full gap-2 px-4"
        onClick={() => setTheme("growth")}
      >
        <Zap className="h-4 w-4" />
        <span className="hidden sm:inline">Crecimiento</span>
      </Button>
      <Button
        variant={theme === "digital" ? "default" : "ghost"}
        size="sm"
        className="rounded-full gap-2 px-4"
        onClick={() => setTheme("digital")}
      >
        <Layout className="h-4 w-4" />
        <span className="hidden sm:inline">Digital</span>
      </Button>
    </div>
  )
}
