import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
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
    title: dict.meta.companyTitle,
    description: dict.meta.companyDescription,
    path: "/company",
    locale,
  });
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="gradient-mesh">
      <Section className="pt-8">
        <Container>
          <Breadcrumb
            locale={locale}
            homeLabel={dict.common.home}
            items={[{ name: dict.meta.companyTitle, path: "/company" }]}
          />
          <PageHero
            eyebrow={dict.company.eyebrow}
            title={dict.company.title}
            description={dict.company.description}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-12 max-w-3xl rounded-3xl border border-border bg-white/80 p-8">
            <p className="text-lg font-semibold tracking-tight">
              {dict.common.tagline}
            </p>
            <p className="mt-2 font-thai text-muted">{dict.common.taglineAlt}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {dict.company.aboutBody}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.why.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border bg-white p-7"
              >
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-white p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              {dict.company.legalTitle}
            </h2>
            <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <dt className="text-muted">{dict.company.companyLabel}</dt>
                <dd className="mt-1 font-medium">{SITE.legalName}</dd>
                <dd className="font-thai text-muted">{SITE.legalNameTh}</dd>
              </div>
              <div>
                <dt className="text-muted">{dict.company.taxLabel}</dt>
                <dd className="mt-1 font-medium">{SITE.taxId}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-muted">{dict.company.officeLabel}</dt>
                <dd className="mt-1 font-medium">
                  {locale === "th" ? SITE.address.th : SITE.address.en}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16">
            <Button asChild>
              <Link href={localePath(locale, "/contact")}>
                {dict.company.workCta}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
