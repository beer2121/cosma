import Link from "next/link";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import { CosmaLogoMark } from "./CosmaLogoMark";

export function Logo({
  locale,
  className,
  compact = false,
}: {
  locale: Locale;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={localePath(locale)}
      className={cn("group inline-flex shrink-0", className)}
      aria-label="COSMA Solution home"
    >
      <CosmaLogoMark compact={compact} />
    </Link>
  );
}
