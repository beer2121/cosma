import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { industryIcons } from "@/lib/home-icons";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

export function IndustriesCTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.industries.eyebrow}
            title={dict.industries.title}
            description={dict.industries.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.industries.items.slice(0, 6).map((item, index) => {
            const Icon = industryIcons[item.id];
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <Link
                  href={`${localePath(locale, "/industries")}#${item.id}`}
                  className="block h-full rounded-3xl border border-border bg-background p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:bg-white"
                >
                  {Icon ? <SectionIcon icon={Icon} size="sm" /> : null}
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-dark px-8 py-12 text-white md:px-12 md:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 size-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {dict.cta.eyebrow}
              </p>
              <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight md:text-4xl">
                {dict.cta.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                {dict.cta.description}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-dark hover:bg-white/90"
                >
                  <Link href={localePath(locale, "/contact")}>
                    {dict.common.bookConsultation}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
