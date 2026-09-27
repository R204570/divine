import { LOGO, SHARE_IMAGES } from "@/content/images";
import {
  BUSINESS_HOURS,
  COMPANY_NAME,
  EMAIL,
  FACEBOOK_URL,
  FOUNDING_YEAR,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_E164,
  POSTAL_ADDRESS,
  SITE_URL,
} from "@/lib/company";
import type { PageMeta } from "./pages";

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const business = {
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: COMPANY_NAME,
  description:
    "Manufacturer of multilayer tarpaulins and waterproof poncho raincoats in Bavla, Gujarat, India, supplying bulk orders across India.",
  url: absoluteUrl("/"),
  logo: absoluteUrl(LOGO.src),
  image: absoluteUrl(SHARE_IMAGES.home.src),
  telephone: PHONE_E164,
  email: EMAIL,
  foundingDate: String(FOUNDING_YEAR),
  address: { "@type": "PostalAddress", ...POSTAL_ADDRESS },
  hasMap: MAPS_URL,
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS_HOURS.days,
      opens: BUSINESS_HOURS.opens,
      closes: BUSINESS_HOURS.closes,
    },
  ],
  knowsAbout: ["Multilayer tarpaulin", "Rain poncho", "Poncho raincoat", "Raincoat pant", "Recyclable rain poncho"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: PHONE_E164,
    email: EMAIL,
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: absoluteUrl("/"),
  name: COMPANY_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": BUSINESS_ID },
};

/** One JSON-LD @graph per page: the business, the site, this page, and its breadcrumbs / FAQ. */
export const buildJsonLd = (meta: PageMeta) => {
  const url = absoluteUrl(meta.path);
  const graph: Record<string, unknown>[] = [
    business,
    website,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": BUSINESS_ID },
      primaryImageOfPage: absoluteUrl(meta.shareImage.src),
    },
  ];

  if (meta.breadcrumbs) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: meta.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  if (meta.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: meta.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};
