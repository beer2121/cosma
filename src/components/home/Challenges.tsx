import type { Dictionary } from "@/i18n/get-dictionary";
import { challengeIcons } from "@/lib/home-icons";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

export function Challenges({ dict }: { dict: Dictionary }) {
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

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.challenges.items.map((item, index) => {
            const Icon = challengeIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group h-full rounded-3xl border border-border bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:bg-primary/[0.02]">
                  <div className="flex items-start justify-between gap-4">
                    {Icon ? <SectionIcon icon={Icon} /> : null}
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
