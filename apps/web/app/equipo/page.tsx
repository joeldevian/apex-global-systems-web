import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Team } from "@/components/sections/Team";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conoce al equipo de Apex Global Systems: desarrollo full-stack, inteligencia de datos y agentes de IA.",
};

export default function EquipoPage() {
  return (
    <main>
      <PageHero
        title="Conoce a Nuestro Equipo"
        image="/paginas/hero-equipo.webp"
      />
      <Team />
      <CtaBand />
    </main>
  );
}
