import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { industryIcons } from "@/lib/home-icons";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

export function IndustriesPreview({
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.industries.items.map((item, index) => {
            const Icon = industryIcons[item.id];
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <Link
                  href={`${localePath(locale, "/industries")}#${item.id}`}
                  className="block h-full rounded-3xl border border-border bg-background p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:bg-white"
                >
                  {Icon ? <SectionIcon icon={Icon} /> : null}
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
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
