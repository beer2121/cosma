import Link from "next/link";
import { ArrowUpRight, Brain, Cloud, RefreshCw, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { getFeaturedContent } from "@/lib/content";
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

export function InsightsPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const articles = getFeaturedContent("insights", locale, 4);

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={dict.insights.eyebrow}
              title={dict.insights.title}
              description={dict.insights.description}
            />
            <Link
              href={localePath(locale, "/insights")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              {dict.common.viewAllInsights}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((item, index) => {
            const Icon = insightCategoryIcons[item.category] ?? Brain;
            return (
              <Reveal key={item.slug} delay={index * 0.06}>
                <Link
                  href={localePath(locale, `/insights/${item.slug}`)}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20"
                >
                  <SectionIcon icon={Icon} size="sm" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.category}
                  </p>
                  <h3 className="mt-3 flex-1 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-primary">
                    {dict.common.read}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
