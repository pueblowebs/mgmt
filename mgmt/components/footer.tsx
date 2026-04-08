export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 transition-colors duration-300 border-t border-background/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-serif text-xl tracking-wider uppercase text-background">Management Pyme</span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed mb-8">
              Pensamiento, orden y gestión para empresas reales.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><a href="#about" className="hover:text-background transition-colors">Sobre Nosotros</a></li>
              <li><a href="#academia" className="hover:text-background transition-colors">Academy</a></li>
              <li><a href="#club" className="hover:text-background transition-colors">Club</a></li>
              <li><a href="#pro" className="hover:text-background transition-colors">Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Términos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Contacto</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-background/30 mb-1">Email</span>
                <a href="mailto:hola@managementpyme.com" className="hover:text-background transition-colors">hola@managementpyme.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-background/20">
          <p>© 2026 Management Pyme. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
