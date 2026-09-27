import { LANDING_PAGES, type FaqItem } from "@/content/landing-pages";
import { PONCHO_GALLERY, SHARE_IMAGES, TARPAULIN_GALLERY, type SiteImage } from "@/content/images";
import { PRODUCTS } from "@/content/products";

export interface Crumb {
  name: string;
  path: string;
}

/** Everything search engines and link previews need to know about one URL. */
export interface PageMeta {
  path: string;
  title: string;
  description: string;
  shareImage: SiteImage;
  /** Trail from Home to this page, used for the BreadcrumbList schema. */
  breadcrumbs?: Crumb[];
  faq?: FaqItem[];
  /** Photos listed for this URL in the image sitemap. */
  sitemapImages?: SiteImage[];
  noindex?: boolean;
}

const HOME: Crumb = { name: "Home", path: "/" };
const PRODUCTS_CRUMB: Crumb = { name: "Products", path: "/products" };

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Multilayer Tarpaulin & Poncho Raincoat Manufacturer in Gujarat, India | Divine Fabtech",
    description:
      "Manufacturer of multilayer tarpaulins and waterproof poncho raincoats in Bavla, Gujarat. Custom sizes, factory-direct bulk prices and delivery across India.",
    shareImage: SHARE_IMAGES.home,
    sitemapImages: [PRODUCTS[0].cardImage, PRODUCTS[1].cardImage],
  },
  {
    path: "/products",
    title: "Multilayer Tarpaulins & Poncho Raincoats – Our Products | Divine Fabtech",
    description:
      "Multilayer tarpaulins in 90–200 GSM and hooded poncho raincoats with matching pants. 100% waterproof, bulk manufacturing at factory prices.",
    shareImage: SHARE_IMAGES.home,
    breadcrumbs: [HOME, PRODUCTS_CRUMB],
    sitemapImages: [PRODUCTS[0].cardImage, PRODUCTS[1].cardImage],
  },
  ...PRODUCTS.map<PageMeta>((product) => ({
    path: product.path,
    title:
      product.id === "tarpaulins"
        ? "Multilayer Tarpaulin Manufacturer – Waterproof, UV Resistant | Divine Fabtech"
        : "Poncho Raincoat Manufacturer – 5 Colours, Matching Pant | Divine Fabtech",
    description:
      product.id === "tarpaulins"
        ? "Multilayer tarpaulin in 90, 120, 150 and 200 GSM, or custom 70–200 GSM on 2-ton orders. 100% waterproof, UV-resistant, reinforced edges, custom sizes."
        : "Hooded poncho raincoats in purple, pink, green, blue and yellow, 42–140 g per piece, with a matching raincoat pant in global sizes. Bulk orders only.",
    shareImage: product.shareImage,
    breadcrumbs: [HOME, PRODUCTS_CRUMB, { name: product.name, path: product.path }],
    sitemapImages: product.gallery,
  })),
  ...LANDING_PAGES.map<PageMeta>((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    shareImage: page.product.shareImage,
    breadcrumbs: [HOME, { name: page.breadcrumbName, path: page.path }],
    faq: page.faq,
    sitemapImages: [page.heroImage, ...page.gallery],
  })),
  {
    path: "/gallery",
    title: "Tarpaulin & Poncho Raincoat Photos – Gallery | Divine Fabtech",
    description:
      "Photos of our multilayer tarpaulins covering produce, lining farm ponds and protecting machinery, and our poncho raincoats in five colours.",
    shareImage: SHARE_IMAGES.home,
    breadcrumbs: [HOME, { name: "Gallery", path: "/gallery" }],
    sitemapImages: [...TARPAULIN_GALLERY, ...PONCHO_GALLERY],
  },
  {
    path: "/about",
    title: "About Divine Fabtech Industries – Tarpaulin & Poncho Manufacturer, Bavla",
    description:
      "Divine Fabtech Industries has manufactured multilayer tarpaulins and poncho raincoats at its in-house facility in Bavla, Gujarat since 2020.",
    shareImage: SHARE_IMAGES.home,
    breadcrumbs: [HOME, { name: "About", path: "/about" }],
  },
  {
    path: "/contact",
    title: "Contact Divine Fabtech – Tarpaulin & Poncho Manufacturer, Bavla, Gujarat",
    description:
      "Call or WhatsApp +91 98251 48321 for bulk multilayer tarpaulin and poncho raincoat orders. Factory at Survey No 710-711, Village Rupal, Bavla, Gujarat 382220.",
    shareImage: SHARE_IMAGES.home,
    breadcrumbs: [HOME, { name: "Contact Us", path: "/contact" }],
  },
  {
    path: "/inquiry",
    title: "Get a Bulk Price Quote – Tarpaulin & Poncho Raincoats | Divine Fabtech",
    description:
      "Request a factory price for multilayer tarpaulins or poncho raincoats. Tell us the size, GSM, colours and quantity you need.",
    shareImage: SHARE_IMAGES.home,
    breadcrumbs: [HOME, { name: "Inquiry", path: "/inquiry" }],
  },
];

export const NOT_FOUND_META: PageMeta = {
  path: "/404",
  title: "Page Not Found (404) | Divine Fabtech Industries",
  description: "The page you were looking for doesn't exist. Browse our multilayer tarpaulins and poncho raincoats.",
  shareImage: SHARE_IMAGES.home,
  noindex: true,
};

const normalise = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export const findPageMeta = (path: string) => PAGES.find((page) => page.path === normalise(path));

export const getPageMeta = (path: string) => findPageMeta(path) ?? NOT_FOUND_META;
