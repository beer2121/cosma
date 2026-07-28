import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { localePath, type Locale } from "@/i18n/config";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Breadcrumb({
  locale,
  homeLabel,
  items,
}: {
  locale: Locale;
  homeLabel: string;
  items: { name: string; path: string }[];
}) {
  const all = [{ name: homeLabel, path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all, locale)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {all.map((item, index) => (
            <li key={`${item.path}-${item.name}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {index === all.length - 1 ? (
                <span className="text-foreground">{item.name}</span>
              ) : (
                <Link
                  href={localePath(locale, item.path === "/" ? "" : item.path)}
                  className="hover:text-foreground"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  taglineAlt,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  taglineAlt?: string;
}) {
  return (
    <div className="max-w-3xl pt-28 md:pt-36">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">{description}</p>
      {taglineAlt ? (
        <p className="mt-3 font-thai text-sm text-muted">{taglineAlt}</p>
      ) : null}
    </div>
  );
}
