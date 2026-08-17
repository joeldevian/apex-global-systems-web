import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AboutUs } from "@/components/sections/AboutUs";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Apex Global Systems nace en Ayacucho, Perú, para dar a los negocios locales acceso a la misma tecnología que hoy solo usan las grandes empresas.",
};

export default function QuienesSomosPage() {
  return (
    <main>
      <PageHero
        title="¿Quiénes Somos?"
        image="/paginas/hero-quienes-somos.webp"
      />
      <AboutUs />
      <CtaBand />
    </main>
  );
}
