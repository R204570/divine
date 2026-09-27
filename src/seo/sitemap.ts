import { SITE_URL } from "@/lib/company";
import { PAGES } from "./pages";
import { absoluteUrl } from "./schema";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** sitemap.xml with an image entry for every product photo on each page. */
export const buildSitemapXml = (lastModified: string) => {
  const urls = PAGES.filter((page) => !page.noindex).map((page) => {
    const images = (page.sitemapImages ?? [])
      .map(
        (image) => `
    <image:image>
      <image:loc>${escapeXml(absoluteUrl(image.src))}</image:loc>
    </image:image>`
      )
      .join("");
    return `  <url>
    <loc>${escapeXml(absoluteUrl(page.path))}</loc>
    <lastmod>${lastModified}</lastmod>${images}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`;
};

export const buildRobotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
