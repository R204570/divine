// Turns the built single-page app into one real HTML file per route, so search
// engines, AI crawlers and WhatsApp/Facebook link previews see each page's
// content and tags without running JavaScript. Also writes 404.html,
// sitemap.xml and robots.txt. Runs after both Vite builds (see "build" in package.json).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

const { render, headHtml, routes, notFoundPath, buildSitemapXml, buildRobotsTxt } = await import(
  pathToFileURL(serverEntry).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--seo-head-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("dist/index.html is missing the <!--seo-head--> or root placeholder");
}

// Function replacers, so a "$" in page content is never read as a replace pattern.
const pageHtml = (url, headPath = url) =>
  template
    .replace("<!--seo-head-->", () => headHtml(headPath))
    .replace('<div id="root"></div>', () => `<div id="root">${render(url)}</div>`);

// "/" -> index.html, "/about" -> about.html, "/products/poncho" -> products/poncho.html.
// vercel.json's cleanUrls serves them at the extensionless paths.
const fileFor = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

const write = (relativePath, contents) => {
  const target = path.join(dist, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
};

for (const route of routes) {
  write(fileFor(route), pageHtml(route));
}

// Any unknown URL renders the NotFound route; Vercel serves this with a 404 status.
write("404.html", pageHtml("/__not-found__", notFoundPath));

const today = new Date().toISOString().slice(0, 10);
write("sitemap.xml", buildSitemapXml(today));
write("robots.txt", buildRobotsTxt());

console.log(`prerendered ${routes.length} routes + 404.html, sitemap.xml, robots.txt`);
