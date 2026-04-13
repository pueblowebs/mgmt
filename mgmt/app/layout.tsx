import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
// import { WhatsAppButton } from "@/components/whatsapp-button"
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Management Pyme - Pensamiento, orden y gestión para empresas reales.',
  description: 'El liderazgo consciente es el verdadero motor de transformación de una empresa. Impulsa una visión estratégica con impacto real y sostenible en tu Pyme.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Footer />
          {/* <WhatsAppButton /> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

