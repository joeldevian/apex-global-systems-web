"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/content/caseStudies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function CaseStudiesTeaser() {
  const featured = caseStudies.filter((item) => item.featured);

  return (
    <section className="bg-brand-black py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          title="Casos de Éxito"
          subtitle="Negocios reales de la región que ya dieron el salto."
          light
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <Link href="/casos-de-exito" className="group block h-full">
                <CaseStudyCard item={item} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button href="/casos-de-exito" variant="ghost-on-dark">
            Ver todos los casos
          </Button>
        </div>
      </div>
    </section>
  );
}
