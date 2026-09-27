import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyHeadTags, buildHeadTags } from "@/seo/head";
import { getPageMeta } from "@/seo/pages";

/**
 * Keeps <title>, meta description, canonical, social tags and JSON-LD in sync
 * with the current route after client-side navigation. The first page load
 * already has them baked in by the prerender.
 */
const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    applyHeadTags(buildHeadTags(getPageMeta(pathname)));
  }, [pathname]);

  return null;
};

export default RouteSeo;
