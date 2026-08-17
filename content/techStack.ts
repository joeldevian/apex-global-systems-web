export interface TechCategory {
  category: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  { category: "Backend", items: ["NestJS", "Node.js"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { category: "Lenguajes", items: ["TypeScript"] },
  { category: "Datos", items: ["PostgreSQL", "Oracle", "MongoDB"] },
  { category: "Infraestructura", items: ["Docker", "Redis", "Supabase"] },
  { category: "Automatización & IA", items: ["n8n", "OpenAI / LLMs", "Python"] },
];
