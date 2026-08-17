"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/content/caseStudies";
import { Modal } from "@/components/ui/Modal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function CaseStudies() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section className="bg-brand-black py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-base leading-relaxed text-white/70">
            Negocios reales de la región que ya dieron el salto — resultados
            inventados a modo de ejemplo para esta fase de desarrollo.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group block h-full w-full text-left"
              >
                <CaseStudyCard item={item} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledBy="case-study-title"
      >
        {active ? (
          <div>
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-sm">
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
              {active.industry} · {active.serviceLine}
            </p>
            <h3
              id="case-study-title"
              className="mt-2 text-2xl font-bold text-brand-black"
            >
              {active.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray">
              {active.description}
            </p>
            <div className="mt-5 flex items-start gap-2 border-t border-brand-sand pt-5">
              <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-brand-red" />
              <p className="text-sm font-semibold text-brand-black">{active.result}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
