import { COMPANY_NAME } from "@/lib/company";
import type { PageMeta } from "./pages";
import { absoluteUrl, buildJsonLd } from "./schema";

/**
 * Per-page <head> tags as plain data, so the build-time prerender (HTML string)
 * and the browser (DOM, after client-side navigation) emit exactly the same tags.
 */
type HeadTag =
  | { tag: "title"; text: string }
  | { tag: "meta" | "link"; attrs: Record<string, string> }
  | { tag: "script"; attrs: Record<string, string>; text: string };

/** Marks the tags we own, so navigation can swap them without touching the rest of <head>. */
const MANAGED_ATTR = "data-seo";

export const buildHeadTags = (meta: PageMeta): HeadTag[] => {
  const url = absoluteUrl(meta.path);
  const image = meta.shareImage;
  const imageUrl = absoluteUrl(image.src);
  const property = (name: string, content: string) => ({ tag: "meta" as const, attrs: { property: name, content } });
  const named = (name: string, content: string) => ({ tag: "meta" as const, attrs: { name, content } });

  const tags: HeadTag[] = [
    { tag: "title", text: meta.title },
    named("description", meta.description),
    named("robots", meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"),
    property("og:site_name", COMPANY_NAME),
    property("og:type", "website"),
    property("og:locale", "en_IN"),
    property("og:title", meta.title),
    property("og:description", meta.description),
    property("og:image", imageUrl),
    property("og:image:width", String(image.width)),
    property("og:image:height", String(image.height)),
    property("og:image:alt", image.alt),
    named("twitter:card", "summary_large_image"),
    named("twitter:title", meta.title),
    named("twitter:description", meta.description),
    named("twitter:image", imageUrl),
  ];

  if (!meta.noindex) {
    tags.push({ tag: "link", attrs: { rel: "canonical", href: url } }, property("og:url", url));
    tags.push({
      tag: "script",
      attrs: { type: "application/ld+json" },
      // "<" is escaped so page text can never close the script tag early.
      text: JSON.stringify(buildJsonLd(meta)).replace(/</g, "\\u003c"),
    });
  }

  return tags;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const attrsToHtml = (attrs: Record<string, string>) =>
  Object.entries(attrs)
    .map(([key, value]) => ` ${key}="${escapeHtml(value)}"`)
    .join("");

export const headTagsToHtml = (tags: HeadTag[]) =>
  tags
    .map((tag) => {
      if (tag.tag === "title") return `<title ${MANAGED_ATTR}>${escapeHtml(tag.text)}</title>`;
      if (tag.tag === "script") return `<script ${MANAGED_ATTR}${attrsToHtml(tag.attrs)}>${tag.text}</script>`;
      return `<${tag.tag} ${MANAGED_ATTR}${attrsToHtml(tag.attrs)} />`;
    })
    .join("\n    ");

export const applyHeadTags = (tags: HeadTag[]) => {
  document.head.querySelectorAll(`[${MANAGED_ATTR}]`).forEach((element) => element.remove());

  for (const tag of tags) {
    const element = document.createElement(tag.tag);
    element.setAttribute(MANAGED_ATTR, "");
    if (tag.tag === "title") {
      element.textContent = tag.text;
    } else {
      for (const [key, value] of Object.entries(tag.attrs)) element.setAttribute(key, value);
      if (tag.tag === "script") element.textContent = tag.text;
    }
    document.head.appendChild(element);
  }
};
