import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Locale } from "@/i18n/config";

export type ContentType = "insights" | "case-studies";

export type ContentFrontmatter = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  industry?: string;
  client?: string;
};

export type ContentItem = ContentFrontmatter & {
  slug: string;
  readingMinutes: number;
  content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function contentDir(type: ContentType, locale: Locale) {
  return path.join(CONTENT_ROOT, type, locale);
}

function parseFile(filePath: string, slug: string): ContentItem {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as ContentFrontmatter;

  return {
    slug,
    title: fm.title,
    description: fm.description,
    category: fm.category,
    publishedAt: fm.publishedAt,
    featured: fm.featured,
    industry: fm.industry,
    client: fm.client,
    readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    content,
  };
}

export function getContentSlugs(type: ContentType, locale: Locale): string[] {
  const dir = contentDir(type, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .sort();
}

export function getAllContent(
  type: ContentType,
  locale: Locale,
): ContentItem[] {
  return getContentSlugs(type, locale)
    .map((slug) => getContentBySlug(type, locale, slug))
    .filter((item): item is ContentItem => item !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getContentBySlug(
  type: ContentType,
  locale: Locale,
  slug: string,
): ContentItem | null {
  const filePath = path.join(contentDir(type, locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseFile(filePath, slug);
}

export function getFeaturedContent(
  type: ContentType,
  locale: Locale,
  limit = 4,
): ContentItem[] {
  const items = getAllContent(type, locale);
  const featured = items.filter((item) => item.featured);
  return (featured.length > 0 ? featured : items).slice(0, limit);
}

export function formatContentDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
