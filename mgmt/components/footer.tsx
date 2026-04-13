export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 transition-colors duration-300 border-t border-background/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand and Mission */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <span className="font-serif text-2xl tracking-wider uppercase text-background">Management Pyme</span>
              <p className="mt-4 text-background/50 text-sm leading-relaxed max-w-sm">
                Acompañamos a dueños y líderes a profesionalizar la gestión de sus empresas con pensamiento estratégico y resultados reales.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-background/30 font-bold">Email</span>
              <a href="mailto:hola@managementpyme.com" className="text-sm hover:text-accent transition-colors">hola@managementpyme.com</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-background/30 font-bold">Instagram</span>
              <a href="https://www.instagram.com/mpyme/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">@mpyme</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><a href="/inicio" className="hover:text-background transition-colors">Inicio</a></li>
              <li><a href="/academia" className="hover:text-background transition-colors">Academy</a></li>
              <li><a href="/clubdeempresarios" className="hover:text-background transition-colors">Club</a></li>
              <li><a href="/pro" className="hover:text-background transition-colors">Programas</a></li>
            </ul>
          </div>

          {/* Legal / Secondary Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Términos</a></li>
              <li><a href="/faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Location & Map */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Visitanos</h4>
            <div className="space-y-4">
              <p className="text-xs text-background/60 leading-relaxed tracking-wider font-medium">
                Av del Libertador 1717, <br />
                Vicente López, Buenos Aires
              </p>
              <div className="group relative rounded-xl overflow-hidden border border-background/10 h-40 w-full transition-all duration-500 shadow-2xl shadow-black/20">
                <div className="absolute inset-0 bg-accent/10 z-10 pointer-events-none mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
                <iframe 
                  src="https://maps.google.com/maps?q=Av%20del%20Libertador%201717,%20Vicente%20L%C3%B3pez,%20Buenos%20Aires%20C11117&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oficinas de Management Pyme"
                  className="absolute inset-0 grayscale contrast-125 opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-1000"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-background/20">
          <p>© 2026 Management Pyme. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-background/40 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/mpyme/" target="_blank" rel="noopener noreferrer" className="hover:text-background/40 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
