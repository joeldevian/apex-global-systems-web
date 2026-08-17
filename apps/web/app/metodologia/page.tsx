import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Methodology } from "@/components/sections/Methodology";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Nuestra Metodología",
  description:
    "Cómo trabajamos con Scrum en Apex Global Systems: sprints, roles, transparencia y formas de colaboración.",
};

export default function MetodologiaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cómo Trabajamos"
        title="Nuestra Metodología"
        image="/paginas/hero-metologia.webp"
      />
      <Methodology />
      <CtaBand />
    </main>
  );
}
