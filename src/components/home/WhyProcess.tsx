import type { Dictionary } from "@/i18n/get-dictionary";
import { whyIcons } from "@/lib/home-icons";
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

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </Section>
  );
}
