import Link from "next/link";
import { SITE } from "@/lib/constants";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Logo } from "./Logo";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo locale={locale} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {dict.common.tagline}
              <br />
              <span className={locale === "th" ? "font-thai" : undefined}>
                {dict.common.taglineAlt}
              </span>
            </p>
            <p className="mt-4 text-sm text-muted">{dict.hero.description}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
              {dict.common.navigate}
            </p>
            <ul className="mt-4 space-y-2.5">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(locale, item.href)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
              {dict.common.contact}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="font-thai leading-relaxed">{SITE.address.th}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. {dict.common.rights}
          </p>
          <p className="font-thai">
            {SITE.legalNameTh} · {dict.common.taxId} {SITE.taxId}
          </p>
        </div>
      </div>
    </footer>
  );
}
