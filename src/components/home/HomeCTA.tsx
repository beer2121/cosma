import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

export function HomeCTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section className="pb-28 md:pb-36">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-dark px-8 py-16 text-white md:px-16 md:py-24">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 size-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {dict.cta.eyebrow}
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                {dict.cta.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                {dict.cta.description}
              </p>
              <div className="mt-10">
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
