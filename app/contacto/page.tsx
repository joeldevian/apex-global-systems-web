import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";
import { SERVICE_INTEREST_VALUES, type ServiceInterestValue } from "@/content/services";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cotiza tu proyecto con Apex Global Systems — diagnóstico inicial gratuito.",
};

function resolveServiceInterest(value: string | string[] | undefined): ServiceInterestValue | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return (SERVICE_INTEREST_VALUES as readonly string[]).includes(candidate ?? "")
    ? (candidate as ServiceInterestValue)
    : undefined;
}

export default function ContactoPage({
  searchParams,
}: {
  searchParams: { servicio?: string | string[] };
}) {
  return (
    <main>
      <PageHero
        title="Cotiza tu Proyecto"
        image="/paginas/hero-contactame.webp"
      />
      <Contact defaultService={resolveServiceInterest(searchParams.servicio)} />
    </main>
  );
}
