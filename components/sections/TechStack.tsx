"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { techStack } from "@/content/techStack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/animations";

// simple-icons no publica una marca oficial de "OpenAI" (retirada del catálogo);
// ese item se resuelve con un ícono de lucide-react en vez de un logo.
const SLUGS: Record<string, string> = {
  "NestJS": "nestjs",
  "Node.js": "nodedotjs",
  "Next.js": "nextdotjs",
  "React": "react",
  "Tailwind CSS": "tailwindcss",
  "TypeScript": "typescript",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Docker": "docker",
  "Redis": "redis",
  "Supabase": "supabase",
  "n8n": "n8n",
  "Python": "python",
};

export function TechStack() {
  return (
    <section className="bg-brand-bg py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          title="Nuestro Tech Stack"
          subtitle="Herramientas probadas en producción, no experimentos."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gray">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-2.5 rounded-sm border border-brand-sand bg-white px-4 py-2.5 transition-colors duration-300 hover:border-brand-red/40"
                  >
                    {SLUGS[item] ? (
                      <Image
                        src={`https://cdn.simpleicons.org/${SLUGS[item]}/57534E`}
                        alt=""
                        width={18}
                        height={18}
                        className="opacity-60 transition-all duration-300 group-hover:opacity-100"
                        unoptimized
                      />
                    ) : (
                      <Sparkles
                        size={18}
                        strokeWidth={1.75}
                        className="text-brand-gray opacity-60 transition-all duration-300 group-hover:text-brand-red group-hover:opacity-100"
                      />
                    )}
                    <span className="text-sm font-medium text-brand-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
