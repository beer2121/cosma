import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { SITE } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const url = `${SITE.url}${localePath(locale)}`;

  return {
    title: { absolute: dict.meta.homeTitle },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: url,
      languages: {
        th: `${SITE.url}/th`,
        en: `${SITE.url}/en`,
        "x-default": `${SITE.url}/th`,
      },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url,
      siteName: SITE.name,
      locale: locale === "th" ? "th_TH" : "en_US",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  return <HomePage locale={locale} dict={dict} />;
}
