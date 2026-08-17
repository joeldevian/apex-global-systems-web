import Image from "next/image";
import { fadeUp } from "@/lib/animations";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function PageHero({
  title,
  image,
  eyebrow,
}: {
  title: string;
  image: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-brand-black pt-24 md:min-h-[65vh]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20" />
      </div>

      <div className="container-page relative z-10 pb-14">
        <RevealOnScroll variants={fadeUp} amount={0}>
          {eyebrow ? (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
        </RevealOnScroll>
      </div>
    </section>
  );
}
