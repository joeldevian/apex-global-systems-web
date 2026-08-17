import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Process } from "@/components/sections/Process";
import { CaseStudiesTeaser } from "@/components/sections/CaseStudiesTeaser";
import { TechStack } from "@/components/sections/TechStack";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <AboutTeaser />
      <ServicesTeaser />
      <Process />
      <CaseStudiesTeaser />
      <TechStack />
      <CtaBand
        title="Convertimos negocios tradicionales en negocios inteligentes."
        subtitle="Cuéntanos qué necesita tu negocio y te respondemos con un diagnóstico inicial gratuito."
      />
    </main>
  );
}
