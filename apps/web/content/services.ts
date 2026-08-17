export const SERVICE_IDS = [
  "desarrollo-web",
  "software-a-medida",
  "erp",
  "crm",
  "automatizacion-procesos",
  "inteligencia-datos",
  "agentes-ia",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export interface Service {
  id: ServiceId;
  category: string;
  title: string;
  /** Versión corta del título para el Hero y el teaser de la home, cuando el título completo es muy largo. */
  shortTitle?: string;
  description: string;
  detail: string;
  deliverables: string[];
  audience: string;
  icon: "globe" | "code" | "workflow" | "chart" | "bot" | "building" | "users";
  /** Se muestra en el teaser de servicios de la home (3 servicios). */
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "desarrollo-web",
    category: "Presencia y Sistemas",
    title: "Desarrollo Web",
    description:
      "Sitios institucionales y comerciales que muestran tu negocio como lo que es: serio, confiable y listo para crecer.",
    detail:
      "Diseñamos y construimos tu sitio a la medida de tu negocio real — no una plantilla genérica. Rápido, ordenado, y pensado para que tus clientes encuentren lo que buscan sin fricción.",
    deliverables: [
      "Sitio institucional o comercial a medida",
      "Diseño responsive, optimizado para SEO",
      "Formulario de contacto conectado a tu correo o CRM",
    ],
    audience: "Para negocios que aún no tienen presencia web o quieren renovar la que tienen.",
    icon: "globe",
    featured: true,
  },
  {
    id: "software-a-medida",
    category: "Presencia y Sistemas",
    title: "Desarrollo de Software a Medida",
    shortTitle: "Desarrollo de Software",
    description:
      "Sistemas de gestión hechos para cómo trabajas tú, no al revés — sin licencias genéricas que no calzan con tu operación.",
    detail:
      "Empezamos por entender cómo funciona tu negocio hoy — en papel, en Excel o en la cabeza del dueño — y lo pasamos a un sistema que cualquiera en tu equipo puede usar sin capacitación técnica.",
    deliverables: [
      "Sistema de gestión a medida de tu operación",
      "Roles y permisos por tipo de usuario",
      "Migración de tu información actual",
    ],
    audience: "Para negocios que gestionan todo manualmente y necesitan un sistema propio.",
    icon: "code",
    featured: true,
  },
  {
    id: "erp",
    category: "Presencia y Sistemas",
    title: "ERP Sistema de Gestión Empresarial",
    description:
      "Un solo sistema que conecta inventario, ventas, compras y finanzas — para dejar de operar tu negocio a punta de Excels sueltos.",
    detail:
      "Implementamos un ERP a la medida de tu operación: todas las áreas de tu negocio hablando entre sí, con la información centralizada y actualizada en tiempo real.",
    deliverables: [
      "Módulos de inventario, ventas, compras y finanzas conectados",
      "Reportes financieros y operativos centralizados",
      "Acceso por roles para cada área de tu negocio",
    ],
    audience: "Para negocios con varias áreas (ventas, almacén, finanzas) que hoy no se comunican entre sí.",
    icon: "building",
    featured: true,
  },
  {
    id: "crm",
    category: "Presencia y Sistemas",
    title: "CRM Sistema de Gestión de Relaciones con Clientes",
    description:
      "Organiza a tus clientes, tu equipo de ventas y tu proceso comercial en un solo lugar — sin oportunidades perdidas en el chat o el cuaderno.",
    detail:
      "Centralizamos el historial de cada cliente, el seguimiento de oportunidades de venta y los recordatorios de contacto, para que tu equipo comercial venda más sin depender de la memoria de una persona.",
    deliverables: [
      "Historial y seguimiento de cada cliente",
      "Pipeline de oportunidades de venta",
      "Recordatorios y alertas de seguimiento automáticos",
    ],
    audience: "Para negocios con un equipo de ventas que hoy gestiona clientes en hojas de cálculo o WhatsApp.",
    icon: "users",
    featured: false,
  },
  {
    id: "automatizacion-procesos",
    category: "Automatización e Inteligencia",
    title: "Automatización de Procesos",
    description:
      "Las tareas repetitivas que le quitan tiempo a tu equipo — cotizar, actualizar inventario, cruzar reportes — corriendo solas.",
    detail:
      "Identificamos los procesos manuales que más tiempo consumen y los conectamos entre sí para que la información fluya sin que nadie la esté copiando y pegando.",
    deliverables: [
      "Conexión entre tus sistemas y herramientas actuales",
      "Flujos automáticos para tareas repetitivas",
      "Alertas y notificaciones automáticas",
    ],
    audience: "Para negocios que ya tienen sistemas pero pierden tiempo pasando información entre ellos a mano.",
    icon: "workflow",
    featured: false,
  },
  {
    id: "inteligencia-datos",
    category: "Automatización e Inteligencia",
    title: "Inteligencia de Datos y Reportes",
    description:
      "Paneles claros que muestran qué está pasando en tu negocio en tiempo real, para decidir con datos y no a ciegas.",
    detail:
      "Cruzamos la información que ya generas — ventas, inventario, operación — en paneles simples de leer, sin que tengas que abrir cinco Excels distintos para saber cómo va tu negocio.",
    deliverables: [
      "Panel de control con tus métricas clave",
      "Reportes automáticos periódicos",
      "Datos en tiempo real desde tus sistemas actuales",
    ],
    audience: "Para negocios que necesitan ver ventas, inventario u operación en un solo lugar.",
    icon: "chart",
    featured: false,
  },
  {
    id: "agentes-ia",
    category: "Agentes de IA",
    title: "Agentes de IA para Atención y Ventas",
    description:
      "Asistentes que responden, agendan y venden por ti, todos los días, sin que nadie de tu equipo esté detrás del teclado.",
    detail:
      "Un agente de IA conversa con tus clientes por WhatsApp o tu web, entiende lo que necesitan y actúa — agenda una cita, toma un pedido, responde una duda — las 24 horas.",
    deliverables: [
      "Agente conectado a WhatsApp y/o tu web",
      "Agenda citas y responde preguntas frecuentes",
      "Aprende de tu catálogo, precios y políticas",
    ],
    audience: "Para negocios con atención al cliente constante que no pueden cubrir las 24 horas con personal.",
    icon: "bot",
    featured: false,
  },
];

export const transversal = [
  "Diagnóstico inicial gratuito",
  "Mantenimiento y soporte continuo",
];

export const SERVICE_INTEREST_VALUES = [...SERVICE_IDS, "no-seguro"] as const;

export type ServiceInterestValue = (typeof SERVICE_INTEREST_VALUES)[number];

export const serviceInterestOptions: { value: ServiceInterestValue; label: string }[] = [
  ...services.map((service) => ({ value: service.id, label: service.title })),
  { value: "no-seguro", label: "Aún no estoy seguro" },
];
