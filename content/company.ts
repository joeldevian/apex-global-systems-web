export const company = {
  name: "Apex Global Systems",
  tagline: "Convertimos negocios tradicionales en negocios inteligentes.",
  description:
    "Diseñamos, construimos y automatizamos los sistemas que tu negocio necesita para operar y crecer sin depender de más personal — desde tu presencia web hasta agentes de IA conectados en tiempo real a tu operación.",
  eyebrow: "Desarrollo de Software · Automatización · Inteligencia Artificial",

  mission:
    "Dar a los negocios locales acceso a la misma tecnología que hoy solo usan las grandes empresas, sin que necesiten un equipo técnico propio.",
  vision:
    "Ser la referencia en sistemas inteligentes para negocios en Latinoamérica hacia el año 2030.",
  about:
    "Apex Global Systems nace en Ayacucho, Perú, con una idea simple: los negocios locales merecen la misma tecnología que hoy solo usan las grandes empresas — automatización, datos e inteligencia artificial — sin necesitar un equipo técnico propio. Diseñamos sistemas a medida, los conectamos entre sí y los dejamos funcionando para que tu negocio crezca sin fricción.",
  aboutTeaser:
    "Apex Global Systems es una empresa peruana de desarrollo de software que ofrece soluciones con IA, inteligentes y escalables para negocios que quieren operar y crecer sin depender de más personal.",

  pillars: [
    {
      icon: "cpu",
      title: "Tecnología de punta, sin complicaciones",
      description:
        "Las mismas herramientas que usan las grandes empresas, implementadas para que tu equipo las use sin capacitación técnica.",
    },
    {
      icon: "handshake",
      title: "Acompañamiento cercano",
      description:
        "Trabajamos directo contigo, no con un ticket de soporte — entendemos tu negocio antes de escribir una línea de código.",
    },
    {
      icon: "trending-up",
      title: "Resultados medibles",
      description:
        "Cada proyecto parte de un diagnóstico y termina con soporte continuo, no solo con una entrega.",
    },
  ] as { icon: "cpu" | "handshake" | "trending-up"; title: string; description: string }[],

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Casos de Éxito", href: "/casos-de-exito" },
    { label: "Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
  ],
  ctaLabel: "Cotiza tu Proyecto",

  process: [
    {
      step: "1",
      icon: "search",
      title: "Diagnóstico inicial",
      description: "Entendemos cómo opera tu negocio hoy y qué te está frenando.",
    },
    {
      step: "2",
      icon: "file-text",
      title: "Propuesta y cotización",
      description: "Te enviamos un plan claro, con alcance y costo definidos.",
    },
    {
      step: "3",
      icon: "hammer",
      title: "Desarrollo",
      description: "Construimos tu sistema con avances que puedes revisar en el camino.",
    },
    {
      step: "4",
      icon: "life-buoy",
      title: "Entrega y soporte continuo",
      description: "Tu sistema queda funcionando, con soporte después de la entrega.",
    },
  ] as { step: string; icon: "search" | "file-text" | "hammer" | "life-buoy"; title: string; description: string }[],

  contact: {
    email: "contacto@apexglobalsystems.pe",
    phone: "+51 933 585 138",
    phoneDisplay: "+51 933 585 138",
    whatsappLink: "https://wa.me/51933585138",
    address: "Jr. Asamblea 220, Ayacucho, Perú",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      whatsapp: "https://wa.me/51933585138",
    },
  },

  legal: `© ${new Date().getFullYear()} Apex Global Systems. Todos los derechos reservados.`,
};
