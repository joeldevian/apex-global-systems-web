import type { ServiceId } from "./services";

export interface HeroSlide {
  serviceId: ServiceId;
  tagline: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    serviceId: "desarrollo-web",
    tagline: "Para que tu negocio se vea como lo que es",
    image: "/principal-hero/fondo-desarrollo-web.webp",
  },
  {
    serviceId: "software-a-medida",
    tagline: "Hecho a la medida de cómo trabajas tú",
    image: "/principal-hero/fondo-desarrollo-de-software.webp",
  },
  {
    serviceId: "erp",
    tagline: "Toda tu operación conectada en un solo lugar",
    image: "/principal-hero/fondo-erp.webp",
  },
];
