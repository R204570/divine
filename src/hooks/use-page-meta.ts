import { useEffect } from "react";

const SITE_NAME = "Divine Fabtech Industries";

/**
 * Sets the document title and meta description for a route.
 *
 * The app is a single-page app, so index.html only ever ships one <title>.
 * Without this every route showed the same tab title and the same description
 * to crawlers. Each page calls this hook with its own copy.
 */
export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title;

    if (!description) return;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
};

export { SITE_NAME };
