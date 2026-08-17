import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({
  item,
  ctaLabel = "Ver caso completo",
}: {
  item: CaseStudy;
  ctaLabel?: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-sm border border-brand-sand bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-red">
          {item.industry}
        </p>
        <h3 className="mt-1 text-lg font-bold text-brand-black">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.summary}</p>

        <div className="mt-4 flex flex-1 items-start gap-2 border-t border-brand-sand pt-4">
          <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-brand-red" />
          <p className="text-sm font-medium text-brand-black">{item.result}</p>
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
          {ctaLabel}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </div>
  );
}
