export interface CaseStudy {
  id: string;
  name: string;
  industry: string;
  serviceLine: string;
  summary: string;
  result: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "botica-san-miguel",
    name: "Botica San Miguel",
    industry: "Farmacia",
    serviceLine: "Presencia y Sistemas",
    summary: "Sitio web institucional + sistema de gestión de inventario.",
    result: "Ahora controla su inventario sin cuadernos ni Excel sueltos.",
    description:
      "Botica San Miguel necesitaba dejar de llevar su inventario en cuadernos y hojas de cálculo sueltas. Diseñamos un sitio web institucional para darle presencia digital y un sistema de gestión de inventario a medida que controla stock, vencimientos y reposición desde un solo lugar.",
    image: "/casos-de-exito/botica-san-miguel.webp",
    featured: true,
  },
  {
    id: "transportes-wari",
    name: "Transportes Wari S.A.C.",
    industry: "Transporte interprovincial",
    serviceLine: "Presencia y Sistemas",
    summary: "Sistema de gestión de flota y rutas.",
    result: "Visibilidad total de su flota y rutas en tiempo real.",
    description:
      "Una empresa de transporte interprovincial con una flota creciente necesitaba visibilidad sobre sus unidades y rutas. Construimos un sistema de gestión de flota que centraliza asignación de rutas, mantenimiento de vehículos y disponibilidad en tiempo real.",
    image: "/casos-de-exito/transportes-wari.webp",
    featured: true,
  },
  {
    id: "restaurante-puka-wasi",
    name: "Restaurante Puka Wasi",
    industry: "Restaurante",
    serviceLine: "Agentes",
    summary: "Sitio web + agente de IA que toma reservas y pedidos por WhatsApp.",
    result: "Ya no pierde reservas fuera de horario de atención.",
    description:
      "El restaurante perdía reservas fuera de horario de atención. Le entregamos un sitio web con su carta y un agente de IA conectado a WhatsApp que toma reservas y pedidos automáticamente, incluso de madrugada, sin que nadie del equipo tenga que estar pendiente del celular.",
    image: "/casos-de-exito/restaurante-puka-wasi.webp",
  },
  {
    id: "constructora-andina",
    name: "Constructora Andina EIRL",
    industry: "Construcción",
    serviceLine: "Automatización e Inteligencia",
    summary: "Automatización de cotizaciones y seguimiento de avance de obras.",
    result: "Cotizaciones listas en minutos, no en horas.",
    description:
      "Cada cotización le tomaba horas de trabajo manual. Automatizamos el armado de cotizaciones a partir de plantillas y datos de obra, y agregamos seguimiento del avance de cada proyecto visible para todo el equipo.",
    image: "/casos-de-exito/constructora-andina.webp",
    featured: true,
  },
  {
    id: "textiles-huamanga",
    name: "Textiles Huamanga",
    industry: "Manufactura textil",
    serviceLine: "Automatización e Inteligencia",
    summary: "Panel de inteligencia de datos en tiempo real para ventas y stock.",
    result: "Sabe qué se vende y qué se está agotando, al instante.",
    description:
      "El dueño no tenía forma rápida de saber qué se vendía y qué se estaba quedando en bodega. Construimos un panel de inteligencia de datos que cruza ventas y stock en tiempo real, con alertas cuando un producto está por agotarse.",
    image: "/casos-de-exito/textiles-huamanga.webp",
  },
  {
    id: "clinica-san-cristobal",
    name: "Clínica San Cristóbal",
    industry: "Salud",
    serviceLine: "Agentes",
    summary: "Agente de IA para agendamiento de citas médicas.",
    result: "La recepción liberó tiempo para atención presencial.",
    description:
      "La recepción se saturaba de llamadas para agendar citas. Implementamos un agente de IA que conversa con los pacientes, revisa disponibilidad y agenda citas médicas solo, liberando al personal para atención presencial.",
    image: "/casos-de-exito/clinica-san-cristobal.webp",
  },
];
