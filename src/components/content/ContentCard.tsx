import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentItem } from "@/lib/content";
import { formatContentDate } from "@/lib/content";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import { Reveal } from "@/components/motion/Reveal";

export function ContentCard({
  item,
  locale,
  basePath,
  readLabel,
  index = 0,
}: {
  item: ContentItem;
  locale: Locale;
  basePath: "/insights" | "/case-studies";
  readLabel: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <Link
        href={localePath(locale, `${basePath}/${item.slug}`)}
        className="group flex h-full flex-col rounded-3xl border border-border bg-white/85 p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:bg-white"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {item.category}
          </p>
          <span className="text-xs text-muted">
            {formatContentDate(item.publishedAt, locale)}
          </span>
        </div>
        <h2 className="mt-4 flex-1 text-xl font-semibold tracking-tight md:text-2xl">
          {item.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-3 text-sm">
          <span className="text-muted">
            {item.readingMinutes} min
          </span>
          <span className="inline-flex items-center gap-1 text-muted transition-colors group-hover:text-primary">
            {readLabel}
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
