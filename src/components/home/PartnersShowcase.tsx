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

const pendingPartners = ["EnGenius", "SYSTIMAX Solutions", "ADC KRONE", "AMP NETCONNECT"];

export function PartnersShowcase({ dict }: { dict: Dictionary }) {
  return (
    <Section className="gradient-mesh py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {dict.trusted.label}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {dict.trusted.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-white/65 px-3 py-1 text-xs font-semibold text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-10 text-sm font-semibold tracking-tight text-primary">
            {dict.partners.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {dict.partners.title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            {dict.partners.description}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 items-center justify-center md:h-14"
              >
                <Image
                  src={`/assets/partners/${logo.file}`}
                  alt={`${logo.name} logo`}
                  width={170}
                  height={52}
                  className="h-auto max-h-10 w-auto max-w-[170px] opacity-95"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {dict.partners.missingLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pendingPartners.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-border bg-white/60 px-3 py-1 text-xs text-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
