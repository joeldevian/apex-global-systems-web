import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Negocios de Ayacucho que ya dieron el salto a sistemas inteligentes con Apex Global Systems.",
};

export default function CasosDeExitoPage() {
  return (
    <main>
      <PageHero
        title="Casos de Éxito"
        image="/paginas/hero-caso-exito.webp"
      />
      <CaseStudies />
      <CtaBand />
    </main>
  );
}
