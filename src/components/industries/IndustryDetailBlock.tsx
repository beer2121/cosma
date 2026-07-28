import type { IndustryDetail } from "@/content/page-detail";
import { Reveal } from "@/components/motion/Reveal";

export function IndustryDetailBlock({
  index,
  title,
  detail,
  labels,
}: {
  index: number;
  title: string;
  detail: IndustryDetail;
  labels: {
    challenges: string;
    approach: string;
    relatedSolutions: string;
  };
}) {
  return (
    <Reveal delay={index * 0.04}>
      <article className="scroll-mt-28 rounded-[2rem] border border-border bg-white/85 p-8 md:p-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
          {detail.overview}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
              {labels.challenges}
            </h3>
            <ul className="mt-4 space-y-3">
              {detail.challenges.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
              {labels.approach}
            </h3>
            <ul className="mt-4 space-y-3">
              {detail.approach.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">
              {labels.relatedSolutions}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {detail.solutions.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                >
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
