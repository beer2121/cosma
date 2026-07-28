import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { locales, localePath, type Locale } from "@/i18n/config";
import { getAllContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/technology",
    "/insights",
    "/case-studies",
    "/company",
    "/contact",
  ];

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${SITE.url}${localePath(locale, route)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE.url}${localePath(l, route)}`]),
        ),
      },
    })),
  );

  const contentTypes = [
    { type: "insights" as const, path: "/insights" },
    { type: "case-studies" as const, path: "/case-studies" },
  ];

  const contentEntries = contentTypes.flatMap(({ type, path }) =>
    locales.flatMap((locale) =>
      getAllContent(type, locale as Locale).map((item) => ({
        url: `${SITE.url}${localePath(locale as Locale, `${path}/${item.slug}`)}`,
        lastModified: new Date(item.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${SITE.url}${localePath(l as Locale, `${path}/${item.slug}`)}`,
            ]),
          ),
        },
      })),
    ),
  );

  return [...staticEntries, ...contentEntries];
}
