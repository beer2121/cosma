import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getAllContent } from "@/lib/content";
import { getContentLabels } from "@/lib/content-labels";
import { ContentCard } from "@/components/content/ContentCard";
import { Breadcrumb, PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/ui/section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  return createMetadata({
    title: dict.meta.insightsTitle,
    description: dict.meta.insightsDescription,
    path: "/insights",
    locale,
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const labels = getContentLabels(locale);
  const articles = getAllContent("insights", locale);
  const caseStudies = getAllContent("case-studies", locale).slice(0, 2);

  return (
    <div className="gradient-mesh">
      <Section className="pt-8">
        <Container>
          <Breadcrumb
            locale={locale}
            homeLabel={dict.common.home}
            items={[{ name: dict.meta.insightsTitle, path: "/insights" }]}
          />
          <PageHero
            eyebrow={dict.insights.eyebrow}
            title={dict.insights.pageTitle}
            description={dict.insights.pageDescription}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {labels.insightsSection}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {articles.length > 0 ? (
                articles.map((item, index) => (
                  <ContentCard
                    key={item.slug}
                    item={item}
                    locale={locale}
                    basePath="/insights"
                    readLabel={dict.common.read}
                    index={index}
                  />
                ))
              ) : (
                <p className="text-muted">{labels.noArticles}</p>
              )}
            </div>
          </div>

          <div className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {labels.caseStudiesSection}
              </h2>
              <Link
                href={localePath(locale, "/case-studies")}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                {labels.viewCaseStudies}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {caseStudies.map((item, index) => (
                <ContentCard
                  key={item.slug}
                  item={item}
                  locale={locale}
                  basePath="/case-studies"
                  readLabel={dict.common.read}
                  index={index}
                />
              ))}
            </div>
          </div>

          <p className="mt-12 text-sm text-muted">
            {dict.insights.contactPrompt}{" "}
            <Link
              href={localePath(locale, "/contact")}
              className="font-semibold text-primary"
            >
              {dict.insights.contactLink}
            </Link>
            .
          </p>
        </Container>
      </Section>
    </div>
  );
}
