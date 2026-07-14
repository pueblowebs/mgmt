import { CopyText } from "./copy-text"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 transition-colors duration-300 border-t border-background/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand and Mission */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <span className="font-serif text-2xl tracking-wider uppercase text-background">Management PyME</span>
              <p className="mt-4 text-background/50 text-sm leading-relaxed max-w-sm">
                Formamos empresari@s y dirigimos proyectos de evolución y profesionalización.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-background/30 font-bold">Email</span>
              <CopyText text="hola@managementpyme.com" className="text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-background/30 font-bold">Instagram</span>
              <div className="relative inline-flex items-center group/copy w-fit">
                <a 
                  href="https://www.instagram.com/mpyme/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm cursor-pointer hover:text-accent transition-all duration-300 text-left relative"
                >
                  @mpyme
                </a>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover/copy:w-full transition-all duration-500" />
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><a href="/inicio" className="hover:text-background transition-colors">Inicio</a></li>
              <li><a href="/academy" className="hover:text-background transition-colors">Academy</a></li>
              <li><a href="/club" className="hover:text-background transition-colors">Club</a></li>
              <li><a href="/pro" className="hover:text-background transition-colors">PRO</a></li>
              <li><a href="/nosotros" className="hover:text-background transition-colors">Nosotros</a></li>
            </ul>
          </div>

          {/* Legal / Secondary Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Contenido</h4>
            <ul className="space-y-4 text-sm text-background/60">
              {/* <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li> */}
              <li><a href="/faq" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="/contacto" className="hover:text-background transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Location & Map */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Visitanos</h4>
            <div className="space-y-4">
              <ul className="space-y-4 text-xs text-background/60 leading-relaxed tracking-wider font-medium">
                {/* CABA Office */}
                <li className="flex flex-col gap-1">
                  <div>
                    <span className="text-background font-semibold">CABA:</span>{" "}
                    <span className="text-background/95">Facundo Penna</span>
                  </div>
                  <div className="relative inline-flex items-center group/caba w-fit">
                    <a 
                      href="https://maps.google.com/?q=MANAGEMENT+PYME+SRL"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] text-background/40 hover:text-accent transition-all duration-300 text-left relative"
                    >
                      Paysandú 12, B1406, CABA, Argentina
                    </a>
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover/caba:w-full transition-all duration-500" />
                  </div>
                </li>

                {/* Calera Office */}
                <li className="flex flex-col gap-1">
                  <div>
                    <span className="text-background font-semibold">BETHANIA - CALERA:</span>{" "}
                    <span className="text-background/95">Charly Bertani</span>
                  </div>
                  <div className="relative inline-flex items-center group/calera w-fit">
                    <a 
                      href="https://maps.app.goo.gl/pu7UXxJz5nCKQ22c9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] text-background/40 hover:text-accent transition-all duration-300 text-left relative"
                    >
                      La Calera, Córdoba, Argentina
                    </a>
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover/calera:w-full transition-all duration-500" />
                  </div>
                </li>
              </ul>

              {/* Static Map (CABA) */}
              <div className="group relative rounded-xl overflow-hidden border border-background/10 h-40 w-full transition-all duration-500 shadow-2xl shadow-black/20">
                <div className="hidden lg:block absolute inset-0 bg-accent/10 z-10 pointer-events-none mix-blend-overlay lg:group-hover:bg-transparent transition-colors duration-700" />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10207.632669259923!2d-58.45492171745677!3d-34.618279232565044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1f1c0065713%3A0x13aab7082fa35421!2sMANAGEMENT%20PYME%20SRL!5e0!3m2!1ses-419!2sus!4v1778595353192!5m2!1ses-419!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oficinas de Management PyME"
                  className="absolute inset-0 transition-all duration-1000 lg:grayscale lg:contrast-125 lg:opacity-40 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:contrast-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-background/20">
          <p>© 2026 Management PyME. All Rights Reserved.</p>
          {/* <div className="flex gap-8">
            <a href="#" className="hover:text-background/40 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/mpyme/" target="_blank" rel="noopener noreferrer" className="hover:text-background/40 transition-colors">Instagram</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
