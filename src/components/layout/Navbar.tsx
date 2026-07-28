"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (path: string) => {
    const [pathname, hash] = path.split("#");
    const base = localePath(locale, pathname || "/");
    return hash ? `${base}#${hash}` : base;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open
          ? "border-b border-border bg-white/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo locale={locale} compact />

        <nav className="hidden items-center gap-1 lg:flex">
          {dict.nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                setMega("children" in item ? item.label : null)
              }
              onMouseLeave={() => setMega(null)}
            >
              <Link
                href={href(item.href)}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
                {"children" in item ? (
                  <ChevronDown className="size-3.5 opacity-60" />
                ) : null}
              </Link>

              {"children" in item && mega === item.label ? (
                <div className="absolute left-0 top-full pt-3">
                  <div className="glass min-w-[280px] rounded-2xl p-3 shadow-[0_24px_60px_-30px_rgba(27,18,56,0.35)]">
                    <div className="grid gap-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={href(child.href)}
                          className="rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-primary/5 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button asChild size="sm">
            <Link href={localePath(locale, "/contact")}>
              {dict.common.talkExpert}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white/70"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container-page flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4">
            {dict.nav.map((item) => (
              <div key={item.href} className="border-b border-border/60 py-2">
                <Link
                  href={href(item.href)}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-semibold"
                >
                  {item.label}
                </Link>
                {"children" in item ? (
                  <div className="mb-2 grid gap-1 pl-2">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={href(child.href)}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm text-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link
                href={localePath(locale, "/contact")}
                onClick={() => setOpen(false)}
              >
                {dict.common.talkExpert}
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
