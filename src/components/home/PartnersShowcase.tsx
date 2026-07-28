"use client";

import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

const partnerLogos = [
  { name: "Aruba", file: "aruba.svg" },
  { name: "Huawei", file: "huawei.svg" },
  { name: "Cisco", file: "cisco.svg" },
  { name: "Ruckus", file: "ruckus.png" },
  { name: "Meraki", file: "meraki.svg" },
  { name: "HP", file: "hp.svg" },
  { name: "Dell", file: "dell.svg" },
  { name: "Lenovo", file: "lenovo.svg" },
  { name: "Ricoh", file: "ricoh.svg" },
  { name: "Apple", file: "apple.svg" },
  { name: "Ubiquiti", file: "ubiquiti.svg" },
  { name: "D-Link", file: "dlink.svg" },
  { name: "Panduit", file: "panduit.svg" },
  { name: "Axis Communications", file: "axiscommunications.svg" },
  { name: "CommScope", file: "commscope.svg" },
  { name: "Samsung", file: "samsung.svg" },
  { name: "Schneider Electric", file: "schneiderelectric.svg" },
  { name: "Pelco", file: "pelco.svg" },
] as const;

const marqueeLogos = [...partnerLogos, ...partnerLogos];

export function PartnersShowcase({ dict }: { dict: Dictionary }) {
  return (
    <Section className="gradient-mesh py-12 md:py-20">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {dict.trusted.label}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {dict.trusted.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-white/65 px-3 py-1 text-xs font-semibold text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold tracking-tight text-primary">
            {dict.partners.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-4xl">
            {dict.partners.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fafafc] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fafafc] to-transparent" />
            <div className="partner-marquee-track items-center gap-12 py-2">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-10 w-28 shrink-0 items-center justify-center md:h-12 md:w-32"
                >
                  <Image
                    src={`/assets/partners/${logo.file}`}
                    alt={`${logo.name} logo`}
                    width={128}
                    height={40}
                    className="h-auto max-h-9 w-auto max-w-[128px] opacity-95 md:max-h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
