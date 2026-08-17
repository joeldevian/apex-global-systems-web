"use client";

import { motion } from "framer-motion";
import { history } from "@/content/history";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Timeline() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.15)}
      className="relative mx-auto max-w-2xl"
    >
      <div className="absolute bottom-0 left-[5px] top-2 w-px bg-brand-sand" />

      {history.map((milestone) => (
        <motion.div key={milestone.year} variants={fadeUp} className="relative pb-12 pl-10 last:pb-0">
          <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-brand-red" />
          <p className="font-heading text-lg font-bold text-brand-red">
            {milestone.year}
          </p>
          <p className="mt-2 text-base leading-relaxed text-brand-gray">
            {milestone.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
