import type { SiteImage } from "../images";
import type { Product } from "../products";

/**
 * Buying guides for the blog. Each one answers a search the landing pages
 * can't ("best rain poncho manufacturers in India", "which GSM tarpaulin")
 * and links to the page that sells. Text may carry [anchor](/path) links,
 * which components/RichText.tsx turns into router links.
 *
 * Same rule as the landing pages: only facts the business has stated, plus
 * general know-how that holds for any tarpaulin or poncho.
 */
export interface BlogTable {
  caption: string;
  head: string[];
  rows: string[][];
}

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: BlogTable;
  image?: SiteImage;
}

export type BlogTopic = "poncho" | "tarpaulin";

export interface BlogPost {
  slug: string;
  path: string;
  topic: BlogTopic;
  /** The product the guide leads to, for its call to action. */
  product: Product;
  title: string;
  description: string;
  /** Short name for the breadcrumb trail and link lists. */
  breadcrumbName: string;
  h1: string;
  /** Teaser on the blog index. */
  excerpt: string;
  /** ISO dates, for the byline and the BlogPosting schema. */
  datePublished: string;
  dateModified: string;
  heroImage: SiteImage;
  intro: string[];
  sections: BlogSection[];
  related: { label: string; path: string }[];
}

export const blogPath = (slug: string) => `/blog/${slug}`;

export const post = (slug: string, content: Omit<BlogPost, "slug" | "path">): BlogPost => ({
  slug,
  path: blogPath(slug),
  ...content,
});

/** "2026-10-26" -> "26 Oct 2026", fixed to en-GB so the prerender and the browser agree. */
export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
