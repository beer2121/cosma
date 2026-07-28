import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { th } from "./dictionaries/th";

const dictionaries: Record<Locale, Dictionary> = {
  en: en as Dictionary,
  th,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}

export type { Dictionary };
