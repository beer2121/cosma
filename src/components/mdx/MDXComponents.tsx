import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-12 text-2xl font-semibold tracking-tight text-foreground first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 text-xl font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("mt-5 text-base leading-relaxed text-muted", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "mt-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-muted",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("pl-1", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-8 border-l-2 border-primary/30 pl-5 text-lg italic text-foreground/80",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }) => {
    const isExternal = href?.startsWith("http");
    const classes = cn(
      "font-medium text-primary underline-offset-4 hover:underline",
      className,
    );
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return <Link href={href ?? "#"} className={classes} {...props} />;
  },
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
};
