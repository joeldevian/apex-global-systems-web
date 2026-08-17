"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/content/services";
import { heroSlides } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const AUTOPLAY_MS = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const service = services.find((item) => item.id === slide.serviceId)!;

  const goTo = useCallback((next: number) => {
    setIndex((current) => {
      void current;
      return (next + heroSlides.length) % heroSlides.length;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-brand-black pt-24">
      <motion.div
        key={slide.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={slide.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/50" />
        <div className="absolute inset-0 bg-brand-black/30 mix-blend-multiply" />
      </motion.div>

      <div className="container-page relative z-10 flex -translate-y-8 flex-col items-center py-16 text-center md:-translate-y-12">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex max-w-2xl flex-col items-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            {service.category}
          </p>
          <h1 className="text-3xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
            {service.shortTitle ?? service.title}
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/55 md:text-sm">
            {slide.tagline}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            {service.description}
          </p>

          <div className="mt-10">
            <MagneticButton>
              <Button href={`/contacto?servicio=${service.id}`} variant="primary">
                Cotizar este servicio
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Servicio anterior"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:scale-110 hover:border-brand-red hover:text-brand-red sm:flex md:left-8"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        type="button"
        aria-label="Siguiente servicio"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:scale-110 hover:border-brand-red hover:text-brand-red sm:flex md:right-8"
      >
        <ChevronRight size={30} />
      </button>

      <div className="absolute inset-x-0 bottom-16 z-20 flex items-center justify-center gap-2 md:bottom-20">
        {heroSlides.map((item, i) => (
          <button
            key={item.serviceId}
            type="button"
            aria-label={`Ir al servicio ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-brand-red" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center">
        <ChevronDown className="animate-bounce text-white/50" size={34} />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  );
}
