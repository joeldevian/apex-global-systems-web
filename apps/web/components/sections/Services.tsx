"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  Code2,
  Globe,
  LineChart,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services, transversal } from "@/content/services";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  code: Code2,
  building: Building2,
  users: Users,
  workflow: Workflow,
  chart: LineChart,
  bot: Bot,
};

export function Services() {
  return (
    <section className="bg-brand-bg py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.15)}
          className="divide-y divide-brand-sand"
        >
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUp}
                className="grid scroll-mt-28 gap-10 py-14 first:pt-0 last:pb-0 md:grid-cols-2 md:items-center md:gap-14 md:py-20"
              >
                <div
                  className={`group relative order-2 aspect-[4/3] overflow-hidden rounded-sm border border-brand-sand ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={`/servicios/${service.id}.webp`}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-red backdrop-blur-sm">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                </div>

                <div className={`order-1 ${reversed ? "md:order-1" : "md:order-2"}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {service.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-black md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-brand-black">
                    {service.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                    {service.detail}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-brand-sand pt-5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-brand-black"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs italic leading-relaxed text-brand-gray">
                    {service.audience}
                  </p>
                  <Button
                    href={`/contacto?servicio=${service.id}`}
                    variant="secondary"
                    className="mt-6"
                  >
                    Cotizar este servicio
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <RevealOnScroll className="mt-14 flex flex-col items-center gap-6 rounded-sm bg-brand-black px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
              Con cada servicio
            </p>
            <h2 className="mt-1 text-xl font-bold text-white">
              Siempre incluido, sin costo extra
            </h2>
          </div>
          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {transversal.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-brand-red" />
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
