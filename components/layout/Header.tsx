"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { company } from "@/content/company";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div
          className={`container-page flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="relative z-10 flex items-center gap-2.5">
            <Image
              src={solid ? "/logo/logo-rojo.webp" : "/logo/logo-blanco.webp"}
              alt=""
              width={1024}
              height={1536}
              priority
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-12" : "h-14"
              }`}
            />
            <div className="leading-none">
              <p
                className={`font-heading text-lg font-extrabold tracking-tight transition-colors duration-300 ${
                  solid ? "text-brand-black" : "text-white"
                }`}
              >
                APEX
              </p>
              <p
                className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  solid ? "text-brand-gray" : "text-white/70"
                }`}
              >
                Global Systems
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {company.nav.map((item) => {
              const active = item.href !== "/" && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-brand-red ${
                    active
                      ? "text-brand-red"
                      : solid
                        ? "text-brand-black"
                        : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contacto" variant="primary" className="text-xs">
              {company.ctaLabel}
            </Button>
          </div>

          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`relative z-10 flex h-10 w-10 items-center justify-center lg:hidden ${
              solid ? "text-brand-black" : "text-white"
            }`}
          >
            <Menu size={26} className={menuOpen ? "hidden" : "block"} />
            <X size={26} className={menuOpen ? "block" : "hidden"} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-brand-black lg:hidden"
          >
            {company.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-bold transition-colors hover:text-brand-red ${
                    item.href !== "/" && pathname === item.href
                      ? "text-brand-red"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * company.nav.length, duration: 0.35 }}
            >
              <Button
                href="/contacto"
                variant="ghost-on-dark"
                onClick={() => setMenuOpen(false)}
              >
                {company.ctaLabel}
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
