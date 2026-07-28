import Link from "next/link";
import { ArrowUpRight, Brain, Cloud, RefreshCw, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { getFeaturedContent } from "@/lib/content";
import { processIcons } from "@/lib/home-icons";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { SectionIcon } from "@/components/ui/section-icon";
import { Reveal } from "@/components/motion/Reveal";

const insightCategoryIcons: Record<string, LucideIcon> = {
  AI: Brain,
  Cloud: Cloud,
  Security: Shield,
  Transformation: RefreshCw,
  คลาวด์: Cloud,
  ความปลอดภัย: Shield,
  การเปลี่ยนผ่าน: RefreshCw,
};

export function ProcessInsights({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const articles = getFeaturedContent("insights", locale, 2);

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <Reveal>
            <div className="h-full">
              <SectionHeading
                eyebrow={dict.process.eyebrow}
                title={dict.process.title}
                description={dict.process.description}
              />

              <ol className="relative mt-8 border-l border-border">
                {dict.process.items.map((item, index) => {
                  const Icon = processIcons[index];
                  return (
                    <li
                      key={item.step}
                      className="relative pb-4 pl-5 last:pb-0"
                    >
                      <span className="absolute -left-px top-1 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-primary/20 bg-background">
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
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[11px] font-semibold tracking-[0.14em] text-primary/60">
                          {item.step}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold tracking-tight">
                          {item.title}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch xl:flex-row xl:items-end xl:justify-between">
                <SectionHeading
                  eyebrow={dict.insights.eyebrow}
                  title={dict.insights.title}
                  description={dict.insights.description}
                />
                <Link
                  href={localePath(locale, "/insights")}
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary"
                >
                  {dict.common.viewAllInsights}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {articles.map((item) => {
                  const Icon = insightCategoryIcons[item.category] ?? Brain;
                  return (
                    <Link
                      key={item.slug}
                      href={localePath(locale, `/insights/${item.slug}`)}
                      className="group flex flex-1 flex-col rounded-3xl border border-border bg-background p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:bg-white"
                    >
                      <SectionIcon icon={Icon} size="sm" />
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {item.category}
                      </p>
                      <h3 className="mt-2 flex-1 text-base font-semibold tracking-tight md:text-lg">
                        {item.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-primary">
                        {dict.common.read}
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
