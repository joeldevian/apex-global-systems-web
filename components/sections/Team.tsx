"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/content/team";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Team() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-base leading-relaxed text-brand-gray">
            Especialistas en desarrollo, datos y agentes de IA — el
            mismo equipo que diseña, construye y da soporte a tu
            proyecto de principio a fin, con el nivel de exigencia
            técnica que usan las grandes empresas.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={fadeUp} className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-brand-black/5">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-black/90 via-brand-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs leading-relaxed text-white/85">
                    {member.bio}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base font-bold text-brand-black">
                {member.name}
                {member.alias ? (
                  <span className="text-brand-gray"> &quot;{member.alias}&quot;</span>
                ) : null}
              </p>
              <p className="text-sm text-brand-red">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
