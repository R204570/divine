/**
 * Single source of truth for company facts that were previously duplicated
 * (and had drifted) across components, pages and index.html.
 */

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

export const MAPS_URL =
  "https://www.google.com/maps/search/DIVINE+FABTECH+INDUSTRIES+Survey+No+710-711+Village+Rupal+Bavla+Jivapura+Gujarat+382220";

export const TEL_HREF = `tel:${PHONE_E164}`;
export const MAILTO_HREF = `mailto:${EMAIL}`;
export const WHATSAPP_HREF = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&type=phone_number&app_absent=0`;
