import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContentDetailPage,
  generateContentDetailMetadata,
  generateContentStaticParams,
} from "@/components/content/ContentDetailPage";
import { getDictionary } from "@/i18n/get-dictionary";
import { getContentLabels } from "@/lib/content-labels";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateStaticParams() {
  return generateContentStaticParams("case-studies");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  return generateContentDetailMetadata("case-studies", raw, slug, "/case-studies");
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const labels = getContentLabels(locale);

  return (
    <ContentDetailPage
      type="case-studies"
      locale={locale}
      slug={slug}
      sectionPath="/case-studies"
      labels={{
        home: dict.common.home,
        section: dict.meta.caseStudiesTitle,
        back: labels.backToCaseStudies,
        industry: labels.industry,
        client: labels.client,
        minRead: labels.minRead,
      }}
    />
  );
}
