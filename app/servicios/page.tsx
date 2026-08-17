import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Presencia y sistemas, automatización e inteligencia, y agentes de IA — tres líneas de trabajo que se combinan según lo que tu negocio necesite.",
};

export default function ServiciosPage() {
  return (
    <main>
      <PageHero
        title="Nuestros Servicios"
        image="/paginas/hero-servicios.webp"
      />
      <Services />
      <CtaBand />
    </main>
  );
}
