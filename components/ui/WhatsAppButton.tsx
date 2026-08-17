import Image from "next/image";
import { company } from "@/content/company";

export function WhatsAppButton() {
  return (
    <a
      href={company.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
        alt=""
        width={28}
        height={28}
        unoptimized
      />
    </a>
  );
}
