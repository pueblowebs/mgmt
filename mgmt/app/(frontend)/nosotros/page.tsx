import { NosotrosSection } from "@/components/nosotros-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros - Management Pyme",
  description: "Descubre nuestro propósito, nuestros valores y el equipo de directores, mentores y profesionales que impulsan tu Pyme.",
}

export default function NosotrosPage() {
  return <NosotrosSection />
}
