import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  locale: Locale;
};

export function createMetadata({
  title,
  description,
  path = "",
  locale,
}: PageSeo): Metadata {
  const localizedPath = localePath(locale, path);
  const url = `${SITE.url}${localizedPath}`;
  const fullTitle = title.includes(SITE.name)
    ? title
    : `${title} | ${SITE.name}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: {
        th: `${SITE.url}${localePath("th", path)}`,
        en: `${SITE.url}${localePath("en", path)}`,
        "x-default": `${SITE.url}${localePath("th", path)}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: locale === "th" ? "th_TH" : "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.legalNameTh,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Moo 1, Khiri Wong",
      addressLocality: "Plai Phraya",
      addressRegion: "Krabi",
      postalCode: "81160",
      addressCountry: "TH",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${localePath(locale, item.path === "/" ? "" : item.path)}`,
    })),
  };
}
