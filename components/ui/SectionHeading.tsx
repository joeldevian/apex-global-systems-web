import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <RevealOnScroll
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/60" : "text-brand-gray"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-brand-gray"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
