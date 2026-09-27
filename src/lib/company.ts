/**
 * Single source of truth for company facts that were previously duplicated
 * (and had drifted) across components, pages and index.html.
 */

/**
 * Public address of the live site. Canonical URLs, the sitemap, robots.txt,
 * social previews and structured data are all built from this, so moving to
 * a custom domain later is a one-line change here.
 */
export const SITE_URL = "https://divine-fabtech-industries.vercel.app";

export const COMPANY_NAME = "Divine Fabtech Industries";

/** Brand name printed on our tarpaulins. */
export const TARPAULIN_BRAND = "Indoline";

/** Year Divine Fabtech Industries was founded. */
export const FOUNDING_YEAR = 2020;

/** Years in business, so the site never goes stale. */
export const yearsInBusiness = () => new Date().getFullYear() - FOUNDING_YEAR;

/** Dialable number, E.164 with country code — required for tel: links to work abroad. */
export const PHONE_E164 = "+919825148321";

/** Human-readable phone number for display. */
export const PHONE_DISPLAY = "+91 98251 48321";

/** WhatsApp number, digits only, as the wa.me / api.whatsapp.com endpoints expect. */
export const WHATSAPP_NUMBER = "919825148321";

export const EMAIL = "divinefabtech@gmail.com";

export const ADDRESS =
  "DIVINE FABTECH INDUSTRIES, Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220";

/** The same address split into the fields structured data expects. */
export const POSTAL_ADDRESS = {
  streetAddress: "Survey No 710-711, Village Rupal, Jivapura",
  addressLocality: "Bavla",
  addressRegion: "Gujarat",
  postalCode: "382220",
  addressCountry: "IN",
} as const;

export const BUSINESS_HOURS = {
  label: "Mon - Sat: 9:00 AM - 6:00 PM",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "18:00",
} as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/DIVINE+FABTECH+INDUSTRIES+Survey+No+710-711+Village+Rupal+Bavla+Jivapura+Gujarat+382220";

export const INSTAGRAM_URL = "https://www.instagram.com/divine.fabtech/";
export const FACEBOOK_URL = "https://www.facebook.com/share/1GgA2yKHcW/";

export const TEL_HREF = `tel:${PHONE_E164}`;
export const MAILTO_HREF = `mailto:${EMAIL}`;
export const WHATSAPP_HREF = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&type=phone_number&app_absent=0`;

/** WhatsApp chat link with a pre-filled, correctly encoded message. */
export const whatsappHrefWithText = (text: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
