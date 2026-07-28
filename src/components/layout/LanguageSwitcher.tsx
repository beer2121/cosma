"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  function switchHref(next: Locale) {
    const segments = pathname.split("/");
    // ["", "th", "solutions", ...]
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = next;
      return segments.join("/") || `/${next}`;
    }
    return `/${next}`;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/70 p-1 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={switchHref(item)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            item === locale
              ? "bg-primary text-white"
              : "text-muted hover:text-foreground",
          )}
          hrefLang={item}
          aria-current={item === locale ? "true" : undefined}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
