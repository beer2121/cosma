import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd } from "@/components/shared/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { organizationJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <div lang={locale} className="flex min-h-full flex-col">
      <SetHtmlLang locale={locale} />
      <JsonLd data={organizationJsonLd()} />
      <SmoothScroll>
        <Navbar locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
      </SmoothScroll>
    </div>
  );
}
