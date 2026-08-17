export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Proyectos Entregados" },
  { value: 98, suffix: "%", label: "Satisfacción de Clientes" },
  { value: 3, suffix: "", label: "Líneas de Servicio" },
  { value: 24, suffix: "/7", label: "Soporte y Monitoreo" },
  { value: 4, suffix: "", label: "Especialistas en el Equipo" },
];
