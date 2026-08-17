export interface TeamMember {
  id: string;
  name: string;
  alias?: string;
  role: string;
  bio: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    id: "joel-ircanaupa",
    name: "Joel Ircañaupa Yaurimo",
    role: "Desarrolladora Backend & Automatización",
    bio: "Node.js, NestJS, integraciones de sistemas.",
    photo: "/equipo/joel.webp",
  },
  {
    id: "ana-quispe",
    name: "Ana Lucía Quispe Huamán",
    role: "Desarrollador Frontend & UI/UX",
    bio: "React, Next.js, diseño de interfaces.",
    photo: "/equipo/ana.webp",
  },
  {
    id: "renzo-cardenas",
    name: "Renzo Damián Cárdenas Palomino",
    role: "Especialista en Inteligencia de Datos",
    bio: "Python, análisis de datos.",
    photo: "/equipo/renzo.webp",
  },
  {
    id: "rodrigo-camacho",
    name: "Rodrigo Camacho Rojas",
    role: "Especialista en Agentes de IA",
    bio: "LLMs, agentes conversacionales aplicados a negocios.",
    photo: "/equipo/rodrigo.webp",
  },
];
