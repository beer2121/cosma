import type { Dictionary } from "@/i18n/get-dictionary";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

export function TrustedBy({ dict }: { dict: Dictionary }) {
  return (
    <Section className="border-y border-border bg-white py-14 md:py-16">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {dict.trusted.label}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {dict.trusted.items.map((item) => (
              <span
                key={item}
                className="text-sm font-semibold tracking-tight text-foreground/45 md:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
