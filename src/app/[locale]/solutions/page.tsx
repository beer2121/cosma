import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import {
  getPageLabels,
  getSolutionDetail,
} from "@/content/page-detail";
import { Breadcrumb, PageHero } from "@/components/shared/PageHero";
import { SolutionDetailBlock } from "@/components/solutions/SolutionDetailBlock";
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
    title: dict.meta.solutionsTitle,
    description: dict.meta.solutionsDescription,
    path: "/solutions",
    locale,
  });
}

export default async function SolutionsPage({
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
              { name: dict.meta.solutionsTitle, path: "/solutions" },
            ]}
          />
          <PageHero
            eyebrow={dict.solutions.eyebrow}
            title={dict.solutions.pageTitle}
            description={dict.solutions.pageDescription}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-20 space-y-8">
            {dict.solutions.items.map((item, index) => {
              const detail = getSolutionDetail(locale, item.id);
              if (!detail) return null;
              return (
                <div key={item.id} id={item.id}>
                  <SolutionDetailBlock
                    index={index}
                    title={item.title}
                    detail={detail}
                    labels={{
                      capabilities: labels.capabilities,
                      outcomes: labels.outcomes,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-24">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {dict.solutions.deploymentTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              {locale === "th"
                ? "เลือกรูปแบบการติดตั้งที่เหมาะกับนโยบาย ความเสี่ยง และการดำเนินงานขององค์กร"
                : "Choose the deployment model that fits your policy, risk profile, and operational needs."}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {dict.deployment.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-7"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Button asChild>
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
