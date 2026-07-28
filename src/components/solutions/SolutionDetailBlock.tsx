import type { SolutionDetail } from "@/content/page-detail";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function SolutionDetailBlock({
  index,
  title,
  detail,
  labels,
}: {
  index: number;
  title: string;
  detail: SolutionDetail;
  labels: { capabilities: string; outcomes: string };
}) {
  return (
    <Reveal delay={index * 0.04}>
      <article
        className={cn(
          "scroll-mt-28 rounded-[2rem] border border-border bg-white/85 p-8 md:p-10",
          index % 2 === 1 && "md:ml-8",
        )}
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-primary">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
          {detail.overview}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
              {labels.capabilities}
            </h3>
            <ul className="mt-4 space-y-3">
              {detail.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
              {labels.outcomes}
            </h3>
            <ul className="mt-4 space-y-3">
              {detail.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
