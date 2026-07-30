import {
  HardDrive,
  Laptop,
  Monitor,
  Printer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { RentalQuoteForm } from "@/components/contact/RentalQuoteForm";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

const categoryIcons: Record<string, LucideIcon> = {
  pc: Monitor,
  "all-in-one": Monitor,
  notebook: Laptop,
  printer: Printer,
  monitor: HardDrive,
  other: HardDrive,
};

export function ItRentalSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { rentalQuote } = dict;

  return (
    <div className="mt-8 space-y-10">
      <Reveal delay={0.06}>
        <div>
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {rentalQuote.categoriesTitle}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {rentalQuote.categoriesDescription}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rentalQuote.categories.map((category) => {
              const Icon = categoryIcons[category.id] ?? Laptop;
              return (
                <article
                  key={category.id}
                  className="rounded-2xl border border-border bg-background/80 p-4"
                >
                  <SectionIcon icon={Icon} size="sm" />
                  <h4 className="mt-3 text-sm font-semibold tracking-tight">
                    {category.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-[1.75rem] border border-border bg-background/80 p-6 md:p-8">
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {rentalQuote.formTitle}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {rentalQuote.formDescription}
          </p>
          <div className="mt-6">
            <RentalQuoteForm locale={locale} dict={dict} />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
