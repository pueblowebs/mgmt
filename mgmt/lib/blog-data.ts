export interface BlogPost {
  category: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  slug: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "Estrategia",
    title: "Cómo delegar sin perder el control: El reto de la Pyme en crecimiento.",
    excerpt: "Delegar no es desentenderse. Es construir sistemas de confianza y reporte que permitan al dueño enfocarse en lo estratégico.",
    content: "La delegación es una de las habilidades más difíciles de masterizar para el dueño de una Pyme. A menudo, el miedo a que las cosas no se hagan 'a mi manera' o el temor a perder la visión de lo que sucede en el día a día, frena el crecimiento de la organización.\n\nPara delegar con éxito, es necesario establecer marcos de trabajo claros. Esto implica definir no solo qué se debe hacer, sino cuáles son los indicadores de éxito y bajo qué parámetros se debe escalar una decisión. Una estructura de reportes eficiente permite que el líder mantenga el pulso del negocio sin necesidad de estar presente en cada micro-decisión.",
    date: "08 Abril, 2026",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    slug: "como-delegar-sin-perder-el-control"
  },
  {
    category: "Gestión",
    title: "Los 5 indicadores clave que ignoras en tu gestión diaria.",
    excerpt: "Más allá del saldo en el banco, existen métricas operativas que anticipan el futuro de tu negocio. Aprende cuáles son.",
    content: "Muchos dueños de empresas gestionan basándose exclusivamente en la caja. Si hay dinero, todo va bien; si falta, hay que correr. Sin embargo, la caja es un indicador 'tardío': te dice qué pasó, no qué va a pasar.\n\nPara una gestión proactiva, debemos mirar indicadores adelantados. El costo de adquisición de cliente, el ciclo de conversión de efectivo, y la productividad por hora hombre son solo algunos de los KPI que te permitirán anticipar problemas antes de que se reflejen en tu cuenta bancaria. Entender estos números es la diferencia entre reaccionar al mercado y liderarlo.",
    date: "05 Abril, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: "5-indicadores-clave-gestion"
  },
  {
    category: "Liderazgo",
    title: "Liderazgo Consciente: Por qué tu equipo refleja tu nivel de gestión.",
    excerpt: "La cultura de una empresa empieza por la mente de su líder. Cómo evolucionar tu pensamiento para transformar tu organización.",
    content: "Tu empresa es una extensión de tu sistema de creencias y de tu capacidad de gestión. Si sientes que tu equipo no está comprometido o que los procesos siempre fallan, es momento de mirar hacia adentro. El liderazgo consciente propone que la transformación organizacional comienza con la transformación personal del líder.\n\nUn líder que no sabe gestionar su propio tiempo difícilmente podrá exigir productividad. Un líder que no comunica con claridad tendrá equipos confundidos. Evolucionar tu propio pensamiento sistémico es el primer paso para desbloquear el siguiente nivel de crecimiento de tu Pyme.",
    date: "28 Marzo, 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    slug: "liderazgo-consciente-pyme"
  }
]
