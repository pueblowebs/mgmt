import Image from "next/image"

export function FocusSection() {
  return (
    <section id="about" className="py-24 bg-foreground text-background min-h-svh flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* La Realidad Pyme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tighter mb-8 leading-none">
              La realidad <br />
              <span className="italic opacity-50">Pyme.</span>
            </h2>
            <div className="space-y-6 text-xl text-background/70 font-light leading-relaxed">
              <p>Las Pymes no fracasan por falta de esfuerzo. Fracasan por falta de gestión.</p>
              <p>El día a día consume todo. Las decisiones se vuelven reactivas. El crecimiento empieza a generar tensión interna.</p>
              <p className="text-background font-medium">La empresa crece. El orden no siempre. Ahí intervenimos.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square group overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Reunión de equipo Pyme"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply"></div>
          </div>
        </div>

        {/* Qué Creemos */}
        <div className="mb-32">
          <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-12 text-center">En qué creemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Profesionalizar no es corporativizar", d: "Mantener la esencia mientras se mejora la estructura." },
              { t: "Ordenar no es burocratizar", d: "Buscamos agilidad con criterio, no trabas innecesarias." },
              { t: "Crecer exige pensar mejor", d: "El volumen de negocio requiere un nuevo nivel de pensamiento." },
              { t: "Los resultados se construyen", d: "No hay magia, hay método, entrenamiento y ejecución." }
            ].map((belief, i) => (
              <div key={i} className="p-8 border border-background/10 hover:bg-background/5 transition-colors">
                <span className="text-accent font-serif text-4xl mb-4 block">0{i + 1}</span>
                <h4 className="text-xl font-serif mb-4 leading-tight">{belief.t}</h4>
                <p className="text-sm text-background/50 leading-relaxed">{belief.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="pt-24 border-t border-background/10">
          <div className="max-w-3xl mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-6">Nuestro Equipo</h3>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Management Pyme nace de la práctica, no de la teoría.</h2>
            <p className="text-xl text-background/60 leading-relaxed">
              Facu y Charly combinan experiencia en gestión real, dirección y formación ejecutiva. Junto a un equipo de 15 profesores y directivos con experiencia directa en empresas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start group">
              <div className="flex -space-x-12 md:-space-x-16">
                <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-4 border-foreground z-10">
                  <Image
                    src="/images/facu.png"
                    alt="Facu - Fundador"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-4 border-foreground">
                  <Image
                    src="/images/charly.png"
                    alt="Charly - Fundador"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-3xl font-serif mb-2">Facu & Charly</h4>
                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">Fundadores</p>
                <p className="text-background/60 text-lg leading-relaxed max-w-sm">
                  Management Pyme nace de la práctica. Combinan décadas de experiencia en la trinchera de la gestión real y la visión estratégica.
                </p>
              </div>
            </div>

            <div className="relative p-10 md:p-12 bg-background/5 border border-background/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <div className="text-9xl font-serif">15</div>
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-serif text-accent mb-6 leading-none">15</div>
                <h4 className="text-2xl font-serif mb-4 leading-tight">Profesores y Directivos <br/><span className="text-background/40 italic">con experiencia directa</span></h4>
                <p className="text-background/60 leading-relaxed max-w-md">
                  Conocen la presión de la operación y la responsabilidad sobre equipos porque lo viven cada día en empresas reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
