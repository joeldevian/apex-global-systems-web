"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Hammer, LifeBuoy, Search, type LucideIcon } from "lucide-react";
import { company } from "@/content/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";

const icons: Record<string, LucideIcon> = {
  search: Search,
  "file-text": FileText,
  hammer: Hammer,
  "life-buoy": LifeBuoy,
};

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading title="Cómo Trabajamos" align="center" />

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 hidden h-1.5 rounded-full bg-brand-sand md:block" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-0 right-0 top-8 hidden h-1.5 origin-left rounded-full bg-brand-red md:block"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.15)}
            className="grid gap-10 md:grid-cols-4"
          >
            {company.process.map((step) => {
              const Icon = icons[step.icon];
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-red bg-white text-brand-red">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <span className="mt-4 font-heading text-5xl font-extrabold text-brand-black/10 md:text-6xl">
                    {step.step}
                  </span>
                  <p className="mt-2 text-base font-bold text-brand-black">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/metodologia" variant="secondary">
            Conoce nuestra metodología
          </Button>
        </div>
      </div>
    </section>
  );
}
