"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import {
  ECOSYSTEM_NODES,
  ECOSYSTEM_SOLUTION_IDS,
} from "@/lib/constants";
import { ecosystemIcons } from "@/lib/home-icons";
import { CosmaLogoMark } from "@/components/layout/CosmaLogoMark";
import { Button } from "@/components/ui/button";
import { SectionIcon } from "@/components/ui/section-icon";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

type NodeId = (typeof ECOSYSTEM_NODES)[number]["id"];

const ORBIT_RADIUS = 38;

function polarPercent(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: 50 + Math.cos(rad) * radius,
    y: 50 + Math.sin(rad) * radius,
  };
}

function ConnectionLines({ focused }: { focused: NodeId }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 size-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="ecosystem-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(91, 61, 245, 0.08)" />
          <stop offset="100%" stopColor="rgba(91, 61, 245, 0.35)" />
        </linearGradient>
        <linearGradient id="ecosystem-line-active" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(91, 61, 245, 0.35)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.75)" />
        </linearGradient>
      </defs>

      {ECOSYSTEM_NODES.map((node) => {
        const pos = polarPercent(node.angle, ORBIT_RADIUS);
        const isActive = focused === node.id;
        return (
          <g key={node.id}>
            <line
              x1="50"
              y1="50"
              x2={pos.x}
              y2={pos.y}
              stroke={isActive ? "url(#ecosystem-line-active)" : "url(#ecosystem-line)"}
              strokeWidth={isActive ? 0.55 : 0.35}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            {isActive ? (
              <motion.circle
                r="0.9"
                fill="rgba(91, 61, 245, 0.9)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [50, pos.x],
                  cy: [50, pos.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.75, 0.9, 1],
                }}
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

function DetailPanel({
  nodeId,
  dict,
  locale,
}: {
  nodeId: NodeId;
  dict: Dictionary;
  locale: Locale;
}) {
  const detail = dict.ecosystem.details[nodeId];
  const label = dict.ecosystem.nodes[nodeId];
  const Icon = ecosystemIcons[nodeId];
  const solutionId = ECOSYSTEM_SOLUTION_IDS[nodeId];
  const solutionItem = dict.solutions.items.find((item) => item.id === solutionId);

  return (
    <motion.div
      key={nodeId}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col"
    >
      <div className="flex items-start gap-4">
        {Icon ? <SectionIcon icon={Icon} size="md" /> : null}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {dict.ecosystem.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {label}
          </h3>
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-muted">
        {detail.summary}
      </p>

      <ul className="mt-6 space-y-3">
        {detail.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/85">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="size-3" strokeWidth={2.5} aria-hidden />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href={`${localePath(locale, "/solutions")}#${solutionId}`}>
            {dict.ecosystem.viewSolution}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        {solutionItem ? (
          <p className="text-sm text-muted">{solutionItem.title}</p>
        ) : null}
      </div>
    </motion.div>
  );
}

function OrbitHub({
  dict,
  active,
  focused,
  onSelect,
  onHover,
}: {
  dict: Dictionary;
  active: NodeId;
  focused: NodeId;
  onSelect: (id: NodeId) => void;
  onHover: (id: NodeId | null) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="absolute inset-[6%] rounded-full border border-dashed border-primary/15" />
      <div className="absolute inset-[18%] rounded-full border border-primary/10" />
      <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-primary/10 via-primary-secondary/5 to-accent/10 blur-sm" />

      <ConnectionLines focused={focused} />

      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/80 p-4 shadow-[0_24px_70px_-32px_rgba(91,61,245,0.55)] backdrop-blur-md md:p-5">
        <CosmaLogoMark className="h-9 md:h-10" />
      </div>

      {ECOSYSTEM_NODES.map((node, index) => {
        const pos = polarPercent(node.angle, ORBIT_RADIUS);
        const isFocused = focused === node.id;
        const isActive = active === node.id;
        const label = dict.ecosystem.nodes[node.id];
        const Icon = ecosystemIcons[node.id];

        return (
          <motion.button
            key={node.id}
            type="button"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.08 * index,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => onSelect(node.id)}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(node.id)}
            onBlur={() => onHover(null)}
            aria-pressed={isActive}
            className={cn(
              "absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-500 md:px-4 md:text-sm",
              isFocused
                ? "border-primary/30 bg-white text-foreground shadow-[0_12px_40px_-20px_rgba(91,61,245,0.65)]"
                : "border-border/80 bg-white/85 text-foreground/80 backdrop-blur-sm",
            )}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            {Icon ? (
              <Icon
                className={cn(
                  "size-3.5",
                  isFocused ? "text-primary" : "text-primary/70",
                )}
                strokeWidth={1.75}
                aria-hidden
              />
            ) : null}
            <span className="whitespace-nowrap">{label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

function MobileSelector({
  dict,
  active,
  onSelect,
}: {
  dict: Dictionary;
  active: NodeId;
  onSelect: (id: NodeId) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {ECOSYSTEM_NODES.map((node) => {
        const label = dict.ecosystem.nodes[node.id];
        const Icon = ecosystemIcons[node.id];
        const isActive = active === node.id;
        return (
          <button
            key={node.id}
            type="button"
            onClick={() => onSelect(node.id)}
            aria-pressed={isActive}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-500",
              isActive
                ? "border-primary/30 bg-white text-foreground shadow-[0_10px_30px_-18px_rgba(91,61,245,0.55)]"
                : "border-border bg-white/80 text-foreground/75",
            )}
          >
            {Icon ? (
              <Icon className="size-4 text-primary" strokeWidth={1.75} aria-hidden />
            ) : null}
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function Ecosystem({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [active, setActive] = useState<NodeId>("hardware");
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const focused = hovered ?? active;

  return (
    <Section className="gradient-mesh overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={dict.ecosystem.eyebrow}
            title={dict.ecosystem.title}
            description={dict.ecosystem.description}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 lg:hidden">
            <MobileSelector
              dict={dict}
              active={active}
              onSelect={(id) => {
                setActive(id);
                setHovered(null);
              }}
            />
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={0.12} className="hidden lg:block">
            <OrbitHub
              dict={dict}
              active={active}
              focused={focused}
              onSelect={(id) => {
                setActive(id);
                setHovered(null);
              }}
              onHover={setHovered}
            />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="glass min-h-[22rem] rounded-3xl p-6 md:p-8 lg:min-h-[26rem]">
              <AnimatePresence mode="wait">
                <DetailPanel
                  key={active}
                  nodeId={active}
                  dict={dict}
                  locale={locale}
                />
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {dict.ecosystem.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/80 bg-white/70 px-5 py-4 text-center backdrop-blur-sm"
              >
                <p className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
