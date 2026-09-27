import {
  PONCHO_GALLERY,
  PONCHO_IMAGES,
  SHARE_IMAGES,
  TARPAULIN_GALLERY,
  TARPAULIN_IMAGES,
  type SiteImage,
} from "./images";

/**
 * The two product lines, in one place. The products list, the product detail
 * pages, the landing pages and the structured data all read from here, so the
 * specifications can't drift apart again.
 */
export interface Product {
  id: "tarpaulins" | "poncho";
  path: string;
  name: string;
  /** Short badge shown on cards. */
  tagline: string;
  summary: string;
  overview: string[];
  cardImage: SiteImage;
  shareImage: SiteImage;
  gallery: SiteImage[];
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  /** Keyword landing pages for this product. */
  relatedPages: { label: string; path: string }[];
}

export const MATERIALS = "mLDPE, LDPE, LLDPE and HDPE";

/** Tarpaulin GSM range as stated by the business. */
export const TARPAULIN_STANDARD_GSM = "90, 120, 150 and 200 GSM";

/** Poncho weights, colours and sizes as stated by the business. */
export const PONCHO_STANDARD_WEIGHT = "42–140 grams per piece (poncho only, pant excluded)";
export const PONCHO_CUSTOM_GSM_ORDER = "20,000 pieces";
export const PONCHO_COLOURS = "purple, pink, green, blue and yellow";

export const TARPAULIN: Product = {
  id: "tarpaulins",
  path: "/products/tarpaulins",
  name: "Multilayer Tarpaulin",
  tagline: "90 – 200 GSM • BULK ORDERS",
  summary:
    "Premium multilayer tarpaulins in standard 90, 120, 150 and 200 GSM, or any GSM from 70 to 200 on orders of 2 tons. Custom sizes and colours for bulk buyers.",
  overview: [
    "Our multilayer tarpaulins are made from several bonded layers of polyethylene (mLDPE, LDPE, LLDPE and HDPE) for extra strength and tear resistance compared with a single-layer sheet. Every sheet is 100% waterproof, has a UV-resistant coating to handle strong sun, and reinforced edges for tying down.",
    `Our standard tarpaulins come in ${TARPAULIN_STANDARD_GSM}. For orders of 2 tons we manufacture any GSM from 70 to 200, in the size and colour you need. Everything is made at our own facility in Bavla, Gujarat, sold factory-direct to bulk buyers across India under our Indoline brand.`,
  ],
  cardImage: TARPAULIN_IMAGES.indolineYellow,
  shareImage: SHARE_IMAGES.tarpaulin,
  gallery: TARPAULIN_GALLERY,
  features: [
    "100% Waterproof",
    "UV-resistant coating",
    "Multilayered for extra strength",
    "Reinforced edges",
    "Standard 90, 120, 150 & 200 GSM",
    "Custom 70–200 GSM (2-ton orders)",
  ],
  applications: [
    "Agricultural storage — grain sacks, bales and harvested produce",
    "Farm pond and water-storage lining",
    "Truck and transport covers",
    "Construction site protection",
    "Industrial machinery and equipment covering",
    "Warehouse protection",
    "Marine applications",
  ],
  specifications: {
    Material: MATERIALS,
    Type: "Multilayered tarpaulin",
    "Standard GSM": TARPAULIN_STANDARD_GSM,
    "Custom GSM": "Any GSM from 70 to 200, on orders of 2 tons",
    Colours: "Commonly blue and yellow; custom colours available for bulk orders",
    Size: "Custom sizes for bulk orders",
    "Order type": "Bulk manufacturing only",
  },
  relatedPages: [
    { label: "Multilayer tarpaulin manufacturer in Gujarat", path: "/tarpaulin-manufacturer-in-gujarat" },
    { label: "Multilayer tarpaulin manufacturer in India", path: "/tarpaulin-manufacturer-in-india" },
  ],
};

export const PONCHO: Product = {
  id: "poncho",
  path: "/products/poncho",
  name: "Poncho Raincoats",
  tagline: "5 COLOURS • MATCHING PANT AVAILABLE",
  summary:
    "Waterproof hooded poncho raincoats in purple, pink, green, blue and yellow, 42–140 grams per piece, with a matching raincoat pant. Bulk orders with custom logo packaging.",
  overview: [
    "Our poncho raincoats are made from polyethylene (mLDPE, LDPE, LLDPE and HDPE): 100% waterproof, durable enough to use again and again, and made from a recyclable plastic family. Each poncho has a hood with a drawstring and slips on over clothes in seconds.",
    `Standard ponchos weigh ${PONCHO_STANDARD_WEIGHT}, and for orders of ${PONCHO_CUSTOM_GSM_ORDER} we make custom GSM. They come in five colours (${PONCHO_COLOURS}) and in global sizes, and we also make a matching raincoat pant in the same global sizes. Custom logo packaging is available for bulk orders.`,
  ],
  cardImage: PONCHO_IMAGES.fiveColoursGrid,
  shareImage: SHARE_IMAGES.poncho,
  gallery: PONCHO_GALLERY,
  features: [
    "100% Waterproof",
    "Hood with drawstring",
    "Five colours",
    "42–140 g per piece",
    "Matching raincoat pant",
    "Global sizes",
    "Custom logo packaging",
    "Recyclable polyethylene",
  ],
  applications: [
    "Industrial workforces",
    "Construction sites",
    "Emergency services",
    "Outdoor events",
    "Promotional and bulk distribution",
  ],
  specifications: {
    Material: MATERIALS,
    Type: "Poncho-style raincoat with hood",
    Colours: "Purple, Pink, Green, Blue, Yellow",
    "Standard weight": "42–140 grams per piece (GSM), poncho only, pant excluded",
    "Custom GSM": "On orders of 20,000 pieces",
    "Raincoat pant": "Available, in global sizes",
    Sizes: "Global sizes for both poncho raincoat and pant",
    Branding: "Custom logo packaging available for bulk orders",
    "Order type": "Bulk orders only",
  },
  relatedPages: [
    { label: "Poncho raincoat manufacturer in Gujarat", path: "/poncho-raincoat-manufacturer-in-gujarat" },
    { label: "Poncho raincoat manufacturer in India", path: "/poncho-raincoat-manufacturer-in-india" },
    { label: "Recyclable poncho raincoat", path: "/recyclable-poncho-raincoat" },
  ],
};

export const PRODUCTS: Product[] = [TARPAULIN, PONCHO];

export const getProduct = (id: string | undefined) => PRODUCTS.find((product) => product.id === id);
