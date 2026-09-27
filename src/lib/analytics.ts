declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a Google Analytics 4 event, if the gtag snippet in index.html has loaded. */
export const trackEvent = (name: string, params: Record<string, string> = {}) => {
  window.gtag?.("event", name, params);
};

const contactMethod = (href: string) => {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (/wa\.me|whatsapp\.com/.test(href)) return "whatsapp";
  return null;
};

/**
 * Records every call, email and WhatsApp link click as a `contact_click`
 * event, so Analytics shows which pages and searches actually bring enquiries.
 */
export const trackContactClicks = () => {
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.("a[href]");
    const href = link?.getAttribute("href") ?? "";
    const method = contactMethod(href);
    if (method) trackEvent("contact_click", { method, page_path: window.location.pathname });
  });
};
