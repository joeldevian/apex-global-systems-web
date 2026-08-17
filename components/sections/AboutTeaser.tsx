import Image from "next/image";
import { Cpu, Handshake, TrendingUp, type LucideIcon } from "lucide-react";
import { company } from "@/content/company";
import { stats } from "@/content/stats";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { slideInLeft, slideInRight } from "@/lib/animations";

const icons: Record<string, LucideIcon> = {
  cpu: Cpu,
  handshake: Handshake,
  "trending-up": TrendingUp,
};

const headlineStat = stats[0];

export function AboutTeaser() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading title="Quiénes Somos" subtitle={company.aboutTeaser} align="left" />

          <RevealOnScroll
            variants={slideInLeft}
            className="mt-10 space-y-6 border-t border-brand-sand pt-8"
          >
            {company.pillars.map((pillar) => {
              const Icon = icons[pillar.icon];
              return (
                <div key={pillar.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-black">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </RevealOnScroll>

          <RevealOnScroll variants={slideInLeft} className="mt-10">
            <Button href="/quienes-somos" variant="secondary">
              Conócenos
            </Button>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variants={slideInRight} className="group relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/secciones/seccion-quienes-somos.png"
              alt="Equipo de Apex Global Systems trabajando"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover transition-all duration-700"
            />
          </div>

          <div className="absolute -bottom-6 left-6 rounded-sm border border-brand-sand bg-white px-6 py-5 shadow-xl md:-left-8">
            <p className="text-3xl font-bold text-brand-red">
              {headlineStat.value}
              {headlineStat.suffix}
            </p>
            <p className="text-xs uppercase tracking-wide text-brand-gray">
              {headlineStat.label}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
