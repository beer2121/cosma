"use client";

import type { Dictionary } from "@/i18n/get-dictionary";
import { processIcons, whyIcons } from "@/lib/home-icons";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

export function WhyProcess({ dict }: { dict: Dictionary }) {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.why.eyebrow}
            title={dict.why.title}
            description={dict.why.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.why.items.slice(0, 3).map((item, index) => {
            const Icon = whyIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-border bg-background p-5">
                  {Icon ? <SectionIcon icon={Icon} size="sm" /> : null}
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
              eyebrow={dict.process.eyebrow}
              title={dict.process.title}
              description={dict.process.description}
            />
          </div>
        </Reveal>

        <div className="mt-10">
          <ol className="relative grid gap-0 md:grid-cols-7">
            <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 md:block" />
            {dict.process.items.map((item, index) => {
              const Icon = processIcons[index];
              return (
                <Reveal key={item.step} delay={index * 0.05}>
                  <li className="relative flex flex-col border-l border-border py-4 pl-5 md:border-l-0 md:px-3 md:py-0">
                    <span className="mb-4 flex size-10 items-center justify-center rounded-full border border-primary/20 bg-background md:mx-auto">
                      {Icon ? (
                        <Icon
                          className="size-4 text-primary"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      ) : (
                        <span className="text-xs font-semibold text-primary">
                          {item.step}
                        </span>
                      )}
                    </span>
                    <p className="text-xs font-semibold tracking-[0.12em] text-primary/60 md:text-center">
                      {item.step}
                    </p>
                    <p className="mt-1 text-sm font-semibold tracking-tight md:text-center">
                      {item.title}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
