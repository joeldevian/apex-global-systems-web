"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  Code2,
  Globe,
  LineChart,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";

const featuredServices = services.filter((service) => service.featured);

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  code: Code2,
  building: Building2,
  users: Users,
  workflow: Workflow,
  chart: LineChart,
  bot: Bot,
};

export function ServicesTeaser() {
  return (
    <section className="bg-brand-black py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          title="Nuestros Servicios"
          subtitle="Tres frentes de trabajo que se pueden combinar según lo que tu negocio necesite hoy."
          light
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="mt-14 border-t border-white/10"
        >
          {featuredServices.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative flex items-center gap-6 overflow-hidden border-b border-white/10 py-9 transition-colors duration-300 hover:bg-white/[0.03] md:gap-10 md:py-11"
              >
                <span className="relative z-10 font-heading text-4xl font-extrabold text-white/10 transition-colors duration-300 group-hover:text-brand-red/25 md:text-6xl">
                  0{i + 1}
                </span>
                <div className="relative z-10 max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {service.category}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">
                    {service.shortTitle ?? service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55 md:text-base">
                    {service.description}
                  </p>
                </div>
                <Icon
                  aria-hidden
                  strokeWidth={1.25}
                  className="pointer-events-none absolute right-6 top-1/2 hidden h-20 w-20 -translate-y-1/2 text-white/10 transition-colors duration-300 group-hover:text-brand-red/20 md:right-12 md:block md:h-28 md:w-28"
                />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button href="/servicios" variant="ghost-on-dark">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
