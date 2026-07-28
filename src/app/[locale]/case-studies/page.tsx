import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getAllContent } from "@/lib/content";
import { getContentLabels } from "@/lib/content-labels";
import { ContentCard } from "@/components/content/ContentCard";
import { Breadcrumb, PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

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
    title: dict.meta.caseStudiesTitle,
    description: dict.meta.caseStudiesDescription,
    path: "/case-studies",
    locale,
  });
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const labels = getContentLabels(locale);
  const items = getAllContent("case-studies", locale);

  return (
    <div className="gradient-mesh">
      <Section className="pt-8">
        <Container>
          <Breadcrumb
            locale={locale}
            homeLabel={dict.common.home}
            items={[
              { name: dict.meta.caseStudiesTitle, path: "/case-studies" },
            ]}
          />
          <PageHero
            eyebrow={dict.caseStudies.eyebrow}
            title={dict.caseStudies.pageTitle}
            description={dict.caseStudies.pageDescription}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {items.length > 0 ? (
              items.map((item, index) => (
                <ContentCard
                  key={item.slug}
                  item={item}
                  locale={locale}
                  basePath="/case-studies"
                  readLabel={dict.common.read}
                  index={index}
                />
              ))
            ) : (
              <p className="text-muted">{labels.noCaseStudies}</p>
            )}
          </div>

          <div className="mt-16">
            <Button asChild variant="secondary">
              <Link href={localePath(locale, "/contact")}>
                {dict.common.talkExpert}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
