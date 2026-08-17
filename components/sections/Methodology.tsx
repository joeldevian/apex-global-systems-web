"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Presentation, RefreshCw, Users, type LucideIcon } from "lucide-react";
import { scrumCycle, scrumRoles, collaborationModels } from "@/content/methodology";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";

const icons: Record<string, LucideIcon> = {
  calendar: Calendar,
  users: Users,
  presentation: Presentation,
  "refresh-cw": RefreshCw,
};

export function Methodology() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="container-page">
          <RevealOnScroll className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-brand-sand bg-brand-bg">
            <Image
              src="/metodologia/como-trabajamos.webp"
              alt="Diagrama del ciclo de trabajo Scrum en Apex Global Systems"
              fill
              priority
              sizes="(min-width: 1024px) 1100px, 90vw"
              className="object-contain p-6 md:p-10"
            />
          </RevealOnScroll>

          <RevealOnScroll className="mx-auto mt-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Nuestra Metodología
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-black md:text-4xl">
              Trabajamos con Scrum
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Con la experiencia de gestionar proyectos para negocios de distintos rubros,
              adoptamos Scrum como nuestro marco de trabajo — un método ágil que avanza en
              ciclos cortos, con entregas reales y visibles en cada etapa, en vez de una
              única entrega al final que nadie pudo revisar en el camino.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-brand-bg py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="El ciclo de trabajo"
            title="Cómo funciona un sprint"
            subtitle="Cada sprint dura entre 1 y 3 semanas y se repite en el mismo orden hasta completar el proyecto."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.1)}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {scrumCycle.map((step, i) => {
              const Icon = icons[step.icon];
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="flex flex-col rounded-sm border border-brand-sand bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-brand-black/15">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="El equipo"
            title="Quién participa en cada sprint"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.12)}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {scrumRoles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                className="rounded-sm border border-brand-sand bg-white p-6"
              >
                <h3 className="text-base font-bold text-brand-black">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <RevealOnScroll className="mt-10 rounded-sm bg-brand-black px-8 py-10 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
              Transparencia y visibilidad
            </p>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/80">
              Sigues el avance de tu proyecto sprint a sprint, no solo al final — con
              acceso directo a lo que se está construyendo en cada etapa, para que nunca
              tengas que preguntar “¿cómo va mi proyecto?”.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-brand-bg py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Formas de colaboración"
            title="Un modelo de trabajo para cada tipo de proyecto"
            subtitle="Elegimos el modelo según la definición, el tamaño y el presupuesto de tu proyecto."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.12)}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {collaborationModels.map((model) => (
              <motion.div
                key={model.title}
                variants={fadeUp}
                className="flex flex-col rounded-sm border border-brand-sand bg-white p-8"
              >
                <h3 className="text-lg font-bold text-brand-black">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {model.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-brand-sand pt-5">
                  {model.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-black"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/contacto" variant="secondary" className="mt-6">
                  Cotiza tu Proyecto
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
