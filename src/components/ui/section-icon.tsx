import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { box: "size-9 rounded-xl", icon: "size-4" },
  md: { box: "size-11 rounded-2xl", icon: "size-5" },
  lg: { box: "size-14 rounded-2xl", icon: "size-6" },
} as const;

export function SectionIcon({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof sizeMap;
  className?: string;
}) {
  const s = sizeMap[size];
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center bg-primary/8 text-primary",
        s.box,
        className,
      )}
    >
      <Icon className={s.icon} strokeWidth={1.75} aria-hidden />
    </div>
  );
}
