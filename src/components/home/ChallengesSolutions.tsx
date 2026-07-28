import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { challengeIcons, solutionIcons } from "@/lib/home-icons";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

export function ChallengesSolutions({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.challenges.eyebrow}
            title={dict.challenges.title}
            description={dict.challenges.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {dict.challenges.items.slice(0, 3).map((item, index) => {
            const Icon = challengeIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group h-full rounded-3xl border border-border bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:bg-primary/[0.02]">
                  <div className="flex items-start justify-between gap-4">
                    {Icon ? <SectionIcon icon={Icon} size="sm" /> : null}
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <SectionHeading
              eyebrow={dict.solutions.eyebrow}
              title={dict.solutions.title}
              description={dict.solutions.description}
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.solutions.items.slice(0, 4).map((item, index) => {
            const Icon = solutionIcons[item.id];
            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <Link
                  href={`${localePath(locale, "/solutions")}#${item.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-background p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/25 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    {Icon ? <SectionIcon icon={Icon} size="sm" /> : null}
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
