"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { company } from "@/content/company";

export function CtaBand({
  title = "¿Listo para dar el salto?",
  subtitle = "Empecemos con un diagnóstico inicial gratuito de tu negocio.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-black py-28 md:py-40"
    >
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/20 blur-[130px]"
      />

      <RevealOnScroll className="container-page relative z-10 flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
          {title}
        </h2>
        <p className="max-w-md text-base text-white/60 md:text-lg">{subtitle}</p>
        <MagneticButton>
          <Button href="/contacto" variant="primary">
            {company.ctaLabel}
          </Button>
        </MagneticButton>
      </RevealOnScroll>
    </section>
  );
}
