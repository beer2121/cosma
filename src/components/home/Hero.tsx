"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import {
  ecosystemIcons,
  heroOrbitKeys,
  heroOrbitPositions,
} from "@/lib/home-icons";

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });
      tl.from("[data-hero='eyebrow']", { y: 24, opacity: 0, duration: 0.8 })
        .from("[data-hero='title']", { y: 40, opacity: 0 }, "-=0.7")
        .from("[data-hero='sub']", { y: 28, opacity: 0, duration: 1 }, "-=0.8")
        .from("[data-hero='cta']", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
        .from(
          "[data-hero='visual']",
          { scale: 0.96, opacity: 0, duration: 1.6 },
          "-=1.2",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[78svh] overflow-hidden gradient-mesh md:min-h-[100svh]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-16 bottom-10 size-[24rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container className="relative flex min-h-[78svh] flex-col justify-center pb-16 pt-24 md:min-h-[100svh] md:pb-28 md:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p
              data-hero="eyebrow"
              className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-primary"
            >
              {dict.hero.eyebrow}
            </p>
            <h1
              data-hero="title"
              className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {dict.hero.titleLine1}
              <span className="block text-primary">{dict.hero.titleLine2}</span>
            </h1>
            <p
              data-hero="sub"
              className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              {dict.hero.description}
            </p>
            <p className="mt-3 font-thai text-sm text-muted">
              {dict.common.taglineAlt}
            </p>
            <div data-hero="cta" className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={localePath(locale, "/contact")}>
                  {dict.common.talkExpert}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={localePath(locale, "/solutions")}>
                  {dict.common.exploreSolutions}
                </Link>
              </Button>
            </div>
          </div>

          <div data-hero="visual" className="lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-[12%] rounded-full border border-primary/15" />
              <div className="absolute inset-[22%] rounded-full border border-primary-secondary/20" />
              <div className="absolute inset-[34%] rounded-full bg-gradient-to-br from-primary/20 via-primary-secondary/10 to-accent/20 blur-sm" />
              <div className="glass absolute inset-[38%] flex items-center justify-center rounded-full shadow-[0_30px_80px_-40px_rgba(91,61,245,0.55)]">
                <div className="text-center">
                  <p className="text-2xl font-bold tracking-tight">
                    <span className="text-primary">CO</span>
                    <span className="text-[#F5A623]">S</span>
                    <span className="text-primary">MA</span>
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {dict.hero.partnerLabel}
                  </p>
                </div>
              </div>
              {heroOrbitKeys.map((key) => {
                const Icon = ecosystemIcons[key];
                const pos = heroOrbitPositions[key];
                const label =
                  dict.ecosystem.nodes[
                    key as keyof typeof dict.ecosystem.nodes
                  ];
                return (
                  <div
                    key={key}
                    className="glass absolute flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-foreground/80"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    {Icon ? (
                      <Icon
                        className="size-3.5 text-primary"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    ) : null}
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
