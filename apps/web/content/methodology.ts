export interface ScrumCycleStep {
  icon: "calendar" | "users" | "presentation" | "refresh-cw";
  title: string;
  description: string;
}

export const scrumCycle: ScrumCycleStep[] = [
  {
    icon: "calendar",
    title: "Sprint Planning",
    description:
      "Al inicio de cada sprint definimos juntos qué se va a construir y con qué prioridad.",
  },
  {
    icon: "users",
    title: "Daily Standup",
    description:
      "Una reunión corta y diaria del equipo para sincronizar avances y destrabar cualquier bloqueo.",
  },
  {
    icon: "presentation",
    title: "Sprint Review",
    description:
      "Al cierre del sprint te mostramos lo construido y funcionando — no una maqueta, un avance real.",
  },
  {
    icon: "refresh-cw",
    title: "Retrospectiva",
    description:
      "El equipo revisa qué funcionó y qué ajustar antes de empezar el siguiente sprint.",
  },
];

export interface ScrumRole {
  title: string;
  description: string;
}

export const scrumRoles: ScrumRole[] = [
  {
    title: "Product Owner",
    description:
      "Define y prioriza qué se construye primero, según el valor que le aporta a tu negocio.",
  },
  {
    title: "Scrum Master",
    description:
      "Facilita el proceso, elimina bloqueos y mantiene al equipo enfocado en el sprint.",
  },
  {
    title: "Equipo de Desarrollo",
    description:
      "Construye, prueba y entrega un incremento funcional del producto al final de cada sprint.",
  },
];

export interface CollaborationModel {
  title: string;
  description: string;
  items: string[];
}

export const collaborationModels: CollaborationModel[] = [
  {
    title: "Por Horas",
    description:
      "Para proyectos donde aún no hay un alcance totalmente definido — solo una idea o visión general.",
    items: [
      "Presupuesto basado en las horas reales que toma cada actividad",
      "Ideal para explorar y definir antes de comprometer un alcance fijo",
    ],
  },
  {
    title: "Precio Fijo",
    description:
      "Para proyectos con requerimientos, referencias y alcance bien definidos desde el inicio.",
    items: [
      "Presupuesto cerrado de acuerdo a lo acordado",
      "Cambios fuera del alcance inicial se cotizan por separado",
    ],
  },
  {
    title: "Equipo Dedicado",
    description:
      "Para proyectos de mayor envergadura que necesitan mantenimiento y evolución constante.",
    items: [
      "Equipo asignado exclusivamente a tu proyecto",
      "Contratación mensual, con continuidad y estabilidad",
    ],
  },
];
