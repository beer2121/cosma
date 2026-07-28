import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import {
  formatContentDate,
  getAllContent,
  getContentBySlug,
  type ContentType,
} from "@/lib/content";
import { MDXContent } from "@/components/mdx/MDXContent";
import { localePath, type Locale } from "@/i18n/config";
import { createMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

type DetailLabels = {
  home: string;
  section: string;
  back: string;
  industry: string;
  client: string;
  minRead: string;
};

export async function generateContentDetailMetadata(
  type: ContentType,
  locale: Locale,
  slug: string,
  sectionPath: "/insights" | "/case-studies",
) {
  const item = getContentBySlug(type, locale, slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.description,
    path: `${sectionPath}/${slug}`,
    locale,
  });
}

export async function generateContentStaticParams(type: ContentType) {
  const { locales } = await import("@/i18n/config");
  return locales.flatMap((locale) =>
    getAllContent(type, locale).map((item) => ({
      locale,
      slug: item.slug,
    })),
  );
}

export function ContentDetailPage({
  type,
  locale,
  slug,
  sectionPath,
  labels,
}: {
  type: ContentType;
  locale: Locale;
  slug: string;
  sectionPath: "/insights" | "/case-studies";
  labels: DetailLabels;
}) {
  const item = getContentBySlug(type, locale, slug);
  if (!item) notFound();

  return (
    <div className="gradient-mesh">
      <Section className="pt-8 pb-24">
        <Container>
          <Breadcrumb
            locale={locale}
            homeLabel={labels.home}
            items={[
              { name: labels.section, path: sectionPath },
              { name: item.title, path: `${sectionPath}/${slug}` },
            ]}
          />

          <article className="max-w-3xl pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {item.category}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
              <span>{formatContentDate(item.publishedAt, locale)}</span>
              <span>
                {item.readingMinutes} {labels.minRead}
              </span>
              {item.industry ? (
                <span>
                  {labels.industry}: {item.industry}
                </span>
              ) : null}
              {item.client ? (
                <span>
                  {labels.client}: {item.client}
                </span>
              ) : null}
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <MDXContent source={item.content} />
            </div>
          </article>

          <div className="mt-16">
            <Button asChild variant="secondary">
              <Link href={localePath(locale, sectionPath)}>
                <ArrowLeft className="size-4" />
                {labels.back}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
