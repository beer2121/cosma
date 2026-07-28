import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ECOSYSTEM_NODES } from "@/lib/constants";
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
    title: dict.meta.technologyTitle,
    description: dict.meta.technologyDescription,
    path: "/technology",
    locale,
  });
}

export default async function TechnologyPage({
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
            items={[
              { name: dict.meta.technologyTitle, path: "/technology" },
            ]}
          />
          <PageHero
            eyebrow={dict.technology.eyebrow}
            title={dict.technology.title}
            description={dict.technology.description}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM_NODES.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-border bg-white/80 p-7"
              >
                <h2 className="text-xl font-semibold tracking-tight">
                  {
                    dict.ecosystem.nodes[
                      item.id as keyof typeof dict.ecosystem.nodes
                    ]
                  }
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {dict.technology.nodeDescription}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {dict.technology.deploymentTitle}
            </h2>
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
              <Link href={localePath(locale, "/solutions")}>
                {dict.technology.exploreCta}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
