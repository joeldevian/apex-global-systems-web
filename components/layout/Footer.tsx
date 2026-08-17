import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { company } from "@/content/company";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/logo/logo-footer.webp"
            alt={company.name}
            width={1536}
            height={1024}
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {company.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Navegación
          </h3>
          <ul className="space-y-3">
            {company.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-brand-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Servicios
          </h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/servicios#${service.id}`}
                  className="text-sm text-white/80 transition-colors hover:text-brand-red"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>{company.contact.address}</li>
            <li>
              <a
                href={`mailto:${company.contact.email}`}
                className="transition-colors hover:text-brand-red"
              >
                {company.contact.email}
              </a>
            </li>
            <li>
              <a
                href={company.contact.whatsappLink}
                className="transition-colors hover:text-brand-red"
              >
                {company.contact.phoneDisplay}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={company.contact.social.linkedin}
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={company.contact.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
            >
              <Facebook size={16} />
            </a>
            <a
              href={company.contact.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
            >
              <Instagram size={16} />
            </a>
            <a
              href={company.contact.social.whatsapp}
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 md:flex-row">
          <p>{company.legal}</p>
          <p>Ayacucho, Perú</p>
        </div>
      </div>
    </footer>
  );
}
