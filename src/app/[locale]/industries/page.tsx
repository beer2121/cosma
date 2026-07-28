import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import {
  getIndustryDetail,
  getPageLabels,
} from "@/content/page-detail";
import { Breadcrumb, PageHero } from "@/components/shared/PageHero";
import { IndustryDetailBlock } from "@/components/industries/IndustryDetailBlock";
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
    title: dict.meta.industriesTitle,
    description: dict.meta.industriesDescription,
    path: "/industries",
    locale,
  });
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const labels = getPageLabels(locale);

  return (
    <div className="gradient-mesh">
      <Section className="pt-8">
        <Container>
          <Breadcrumb
            locale={locale}
            homeLabel={dict.common.home}
            items={[
              { name: dict.meta.industriesTitle, path: "/industries" },
            ]}
          />
          <PageHero
            eyebrow={dict.industries.eyebrow}
            title={dict.industries.pageTitle}
            description={dict.industries.pageDescription}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-20 space-y-8">
            {dict.industries.items.map((item, index) => {
              const detail = getIndustryDetail(locale, item.id);
              if (!detail) return null;
              return (
                <div key={item.id} id={item.id}>
                  <IndustryDetailBlock
                    index={index}
                    title={item.title}
                    detail={detail}
                    labels={{
                      challenges: labels.challenges,
                      approach: labels.approach,
                      relatedSolutions: labels.relatedSolutions,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <Button asChild>
              <Link href={localePath(locale, "/contact")}>
                {dict.industries.cta}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
