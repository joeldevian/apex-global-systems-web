"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function RevealOnScroll({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  amount = 0.3,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
