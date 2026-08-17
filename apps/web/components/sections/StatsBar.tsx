"use client";

import { motion } from "framer-motion";
import { stats } from "@/content/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function StatsBar() {
  return (
    <section className="border-t border-white/10 bg-brand-black py-10 md:py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer(0.08)}
        className="container-page grid grid-cols-2 divide-y divide-white/10 md:flex md:divide-x md:divide-y-0"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="flex flex-col gap-1 py-5 md:flex-1 md:items-center md:px-6 md:py-0"
          >
            <p className="font-heading text-2xl font-bold text-white md:text-3xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-[11px] uppercase tracking-wide text-white/45 md:text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
