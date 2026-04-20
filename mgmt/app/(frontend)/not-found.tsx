import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 py-32 text-center">
      <div className="container relative flex flex-col items-center justify-center">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent animate-in fade-in slide-in-from-bottom-4 duration-700">Error 404</h3>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground font-light tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 [animation-delay:200ms]">
              Perderse <br />
              <span className="font-bold opacity-50">es humano.</span>
            </h1>
          </div>
          
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 [animation-delay:400ms]">
            <p className="mx-auto max-w-lg text-lg md:text-xl text-foreground/60 leading-relaxed">
              Parece que la página que buscabas no está disponible o ha cambiado de lugar. 
              Retomemos el camino hacia la gestión consciente de tu Pyme.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 pt-4">
              <Link href="/">
                <Button variant="shiny" size="xl" className="group">
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
