import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { Hero } from "@/components/home/Hero";
import { ChallengesSolutions } from "@/components/home/ChallengesSolutions";
import { Ecosystem } from "@/components/home/Ecosystem";
import { PartnersShowcase } from "@/components/home/PartnersShowcase";
import { IndustriesCTA } from "@/components/home/IndustriesCTA";
import { WhyProcess } from "@/components/home/WhyProcess";
import { ProcessInsights } from "@/components/home/ProcessInsights";

export function HomePage({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ChallengesSolutions locale={locale} dict={dict} />
      <Ecosystem locale={locale} dict={dict} />
      <PartnersShowcase dict={dict} />
      <IndustriesCTA locale={locale} dict={dict} />
      <WhyProcess dict={dict} />
      <ProcessInsights locale={locale} dict={dict} />
    </>
  );
}
