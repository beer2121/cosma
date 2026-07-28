import type { Dictionary } from "@/i18n/get-dictionary";
import { whyIcons } from "@/lib/home-icons";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

export function WhyCosma({ dict }: { dict: Dictionary }) {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.why.eyebrow}
            title={dict.why.title}
            description={dict.why.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {dict.why.items.map((item, index) => {
            const Icon = whyIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full border-t border-primary/20 pt-6">
                  {Icon ? <SectionIcon icon={Icon} size="sm" /> : null}
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">
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
