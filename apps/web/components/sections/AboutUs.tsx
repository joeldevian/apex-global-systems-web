import { company } from "@/content/company";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Timeline } from "@/components/sections/Timeline";

export function AboutUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black md:text-4xl">
            Nuestra Historia
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-gray">
            {company.about}
          </p>
        </RevealOnScroll>

        <div className="mt-16">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
