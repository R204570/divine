import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import { buildHeadTags, headTagsToHtml } from "./seo/head";
import { NOT_FOUND_META, PAGES, getPageMeta } from "./seo/pages";
import { buildRobotsTxt, buildSitemapXml } from "./seo/sitemap";

/**
 * Build-time entry used by scripts/prerender.mjs to turn every route into a
 * real HTML file, so crawlers and link previews see the full page without
 * running JavaScript.
 */
export const render = (url: string) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>
  );

export const headHtml = (path: string) => headTagsToHtml(buildHeadTags(getPageMeta(path)));

export const routes = PAGES.map((page) => page.path);

export const notFoundPath = NOT_FOUND_META.path;

export { buildRobotsTxt, buildSitemapXml };
