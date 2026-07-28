import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { Breadcrumb, PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/ContactForm";

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
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    path: "/contact",
    locale,
  });
}

export default async function ContactPage({
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
            items={[{ name: dict.meta.contactTitle, path: "/contact" }]}
          />
          <PageHero
            eyebrow={dict.contact.eyebrow}
            title={dict.contact.title}
            description={dict.contact.description}
            taglineAlt={dict.common.taglineAlt}
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="rounded-3xl border border-border bg-white p-8 lg:col-span-7">
              <h2 className="text-xl font-semibold tracking-tight">
                {dict.contact.formTitle}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {dict.contact.formDescription}
              </p>
              <div className="mt-8">
                <ContactForm dict={dict} />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-border bg-white/80 p-7">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {dict.contact.directTitle}
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <p className="text-muted">{dict.contact.phone}</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="mt-1 block font-medium hover:text-primary"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <p className="text-muted">{dict.contact.email}</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block font-medium hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <p className="text-muted">{dict.contact.website}</p>
                    <p className="mt-1 font-medium">cosma.co.th</p>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-white/80 p-7">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {dict.contact.officeTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed">
                  {locale === "th" ? SITE.address.th : SITE.address.en}
                </p>
                <p className="mt-4 text-xs text-muted">
                  {dict.common.taxId} {SITE.taxId}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}
