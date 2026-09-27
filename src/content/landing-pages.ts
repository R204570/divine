import { PHONE_DISPLAY } from "@/lib/company";
import { PONCHO_IMAGES, TARPAULIN_IMAGES, type SiteImage } from "./images";
import { PONCHO, TARPAULIN, type Product } from "./products";

/**
 * Keyword landing pages. Each one answers a specific search ("best multilayer
 * tarpaulin manufacturer in Gujarat", "recyclable poncho raincoat", ...) with
 * its own angle, so they are genuinely different pages rather than one page
 * with the place name swapped.
 *
 * Only facts the business has stated go here — no invented prices,
 * capacities or certifications.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: SiteImage;
}

export interface LandingPageContent {
  path: string;
  title: string;
  description: string;
  breadcrumbName: string;
  product: Product;
  eyebrow: string;
  h1: string;
  intro: string[];
  heroImage: SiteImage;
  highlights: string[];
  sections: LandingSection[];
  gallery: SiteImage[];
  faq: FaqItem[];
  related: { label: string; path: string }[];
}

const TARPAULIN_PRICE_ANSWER = `Share the size, GSM, colour and quantity you need by phone or WhatsApp on ${PHONE_DISPLAY}, or through our inquiry form, and we will quote our factory price for your bulk order.`;
const PONCHO_PRICE_ANSWER = `Tell us the quantity, colours, weight, sizes and branding you need, and whether you want the matching pant, by phone or WhatsApp on ${PHONE_DISPLAY} or through our inquiry form, and we will quote our factory price.`;

const TARPAULIN_GSM_FAQ: FaqItem = {
  question: "Which GSM tarpaulins do you make?",
  answer:
    "Our standard multilayer tarpaulins come in 90, 120, 150 and 200 GSM. For orders of 2 tons we manufacture any GSM from 70 to 200.",
};

const PONCHO_WEIGHT_FAQ: FaqItem = {
  question: "How heavy are your ponchos, and can you make a custom GSM?",
  answer:
    "Standard ponchos weigh 42–140 grams per piece (poncho only, pant excluded). Custom GSM is available on orders of 20,000 pieces.",
};

const PONCHO_PANT_FAQ: FaqItem = {
  question: "Do you make raincoat pants?",
  answer: "Yes. We make a matching raincoat pant. Both the poncho raincoat and the pant come in global sizes.",
};

const PONCHO_COLOURS_FAQ: FaqItem = {
  question: "Which colours are available?",
  answer: "Five colours: purple, pink, green, blue and yellow.",
};

export const TARPAULIN_GUJARAT: LandingPageContent = {
  path: "/tarpaulin-manufacturer-in-gujarat",
  title: "Best Multilayer Tarpaulin Manufacturer in Gujarat | Divine Fabtech",
  description:
    "Multilayer tarpaulin (tadpatri) manufacturer in Bavla, Gujarat. 90, 120, 150 & 200 GSM or custom 70–200 GSM. Waterproof, UV-resistant, factory prices.",
  breadcrumbName: "Tarpaulin Manufacturer in Gujarat",
  product: TARPAULIN,
  eyebrow: "Made in Bavla, Gujarat",
  h1: "Best Multilayer Tarpaulin Manufacturer in Gujarat",
  intro: [
    "Divine Fabtech Industries manufactures multilayer tarpaulins at our own factory in Bavla, Ahmedabad district, Gujarat. Buyers across Gujarat order directly from the manufacturer, in 90, 120, 150 or 200 GSM, custom sizes and colours, at bulk prices without a trader's margin.",
    "Whether you call it a tarpaulin, tarpal or tadpatri (તાડપત્રી), our multilayer sheets are built to take Gujarat's strong summer sun and heavy monsoon rain.",
  ],
  heroImage: TARPAULIN_IMAGES.grainSacks,
  highlights: [
    "Factory in Bavla, Gujarat",
    "Factory-direct bulk pricing",
    "90 / 120 / 150 / 200 GSM",
    "100% waterproof, UV resistant",
  ],
  sections: [
    {
      heading: "Why buyers in Gujarat choose Divine Fabtech",
      bullets: [
        "We are the manufacturer, not a reseller: every tarpaulin is made at our single in-house facility in Bavla, near Ahmedabad.",
        "Factory-direct pricing on bulk orders, because there is no middleman between our factory and your site.",
        "Standard 90, 120, 150 and 200 GSM, or any GSM from 70 to 200 on orders of 2 tons.",
        "Multilayered for extra strength, 100% waterproof and UV-resistant, with reinforced edges.",
        "Our facility runs 24/7 (except national holidays), which helps keep turnaround quick on bulk orders.",
      ],
    },
    {
      heading: "Standard and custom GSM",
      paragraphs: [
        "GSM (grams per square metre) tells you how heavy, and so how tough, a tarpaulin is. We make four standard grades, 90, 120, 150 and 200 GSM, and for orders of 2 tons we will manufacture any GSM from 70 to 200 to match your use.",
        "Lighter sheets are easier to handle for shorter-term and lighter covering; heavier sheets stand up better to long outdoor exposure and heavy-duty jobs. Not sure which you need? Tell us the use and we will recommend a grade.",
      ],
      image: TARPAULIN_IMAGES.rollsYellowBlue,
    },
    {
      heading: "How our tarpaulins are used across Gujarat",
      paragraphs: [
        "Farmers use our tarpaulins to cover grain sacks, bales and harvested produce in open storage, and to line farm ponds and water-storage pits. Transporters use them as truck covers, builders use them to protect construction sites, and factories and warehouses use them to cover machinery and stock.",
      ],
      image: TARPAULIN_IMAGES.farmPond,
    },
    {
      heading: "Supplying all of Gujarat",
      paragraphs: [
        "From our base in Bavla we supply bulk tarpaulin orders to buyers across Gujarat, including Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Junagadh, Anand, Mehsana and Kutch, and to the rest of India.",
      ],
    },
    {
      heading: "How to choose the best tarpaulin manufacturer",
      bullets: [
        "Buy from a manufacturer: you get factory prices and can have sizes and colours made for you.",
        "Check the material: we use mLDPE, LDPE, LLDPE and HDPE.",
        "Prefer multilayer over single-layer sheets for strength and tear resistance.",
        "Match the GSM to the job, and check the manufacturer can make the grade you need.",
        "Look for UV resistance and reinforced edges if the tarpaulin will sit in the sun and be tied down.",
        "Ask for a clear quote based on size, GSM, colour and quantity.",
      ],
    },
  ],
  gallery: [
    TARPAULIN_IMAGES.indolineYellow,
    TARPAULIN_IMAGES.rollsYellowBlueWhite,
    TARPAULIN_IMAGES.openStorage,
    TARPAULIN_IMAGES.pondLiner,
  ],
  faq: [
    {
      question: "Where is your tarpaulin factory in Gujarat?",
      answer:
        "Our factory is at Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220, in Ahmedabad district.",
    },
    TARPAULIN_GSM_FAQ,
    {
      question: "Do you supply tarpaulins all over Gujarat?",
      answer: "Yes. We supply bulk orders to buyers across Gujarat and the rest of India.",
    },
    {
      question: "Do you manufacture multilayer tarpaulin (tadpatri)?",
      answer:
        "Yes. Multilayer tarpaulin is what we make, sold under our Indoline brand, in custom sizes and colours for bulk orders.",
    },
    {
      question: "Which colours are available?",
      answer: "Blue and yellow are the most common. Custom colours are available for bulk orders.",
    },
    {
      question: "How do I get the best price?",
      answer: TARPAULIN_PRICE_ANSWER,
    },
  ],
  related: [
    { label: "Multilayer tarpaulin manufacturer in India", path: "/tarpaulin-manufacturer-in-india" },
    { label: "Multilayer tarpaulin product details", path: TARPAULIN.path },
    { label: "Poncho raincoat manufacturer in Gujarat", path: "/poncho-raincoat-manufacturer-in-gujarat" },
  ],
};

export const TARPAULIN_INDIA: LandingPageContent = {
  path: "/tarpaulin-manufacturer-in-india",
  title: "Best Multilayer Tarpaulin Manufacturer in India | Divine Fabtech",
  description:
    "Indian multilayer tarpaulin manufacturer: 90, 120, 150 and 200 GSM, or custom 70–200 GSM on 2-ton orders. Waterproof, UV-resistant, delivered across India.",
  breadcrumbName: "Tarpaulin Manufacturer in India",
  product: TARPAULIN,
  eyebrow: "Bulk supply across India",
  h1: "Best Multilayer Tarpaulin Manufacturer in India",
  intro: [
    "Divine Fabtech Industries is an Indian manufacturer of multilayer tarpaulins, sold under our Indoline brand. We make every sheet at our own facility in Gujarat and dispatch bulk orders to buyers across India.",
    "Choose a standard 90, 120, 150 or 200 GSM tarpaulin, or order 2 tons or more and we will make any GSM from 70 to 200, in your size and colour, at a factory-direct price.",
  ],
  heroImage: TARPAULIN_IMAGES.rollsYellowBlue,
  highlights: [
    "Manufacturer, not a trader",
    "Delivery across India",
    "Custom 70–200 GSM",
    "Bulk orders only",
  ],
  sections: [
    {
      heading: "What makes a multilayer tarpaulin the better choice",
      paragraphs: [
        "A multilayer tarpaulin bonds several layers of polyethylene together instead of relying on a single sheet. The extra layers add strength and tear resistance, which is why multilayer tarpaulins last longer in demanding outdoor use.",
      ],
      bullets: [
        "100% waterproof",
        "UV-resistant coating for long exposure to sun",
        "Reinforced edges for tying down",
        "High tensile strength and weather resistance",
      ],
      image: TARPAULIN_IMAGES.sheetCloseUp,
    },
    {
      heading: "Choose your GSM",
      bullets: [
        "90 GSM: our lightest standard grade, easy to handle",
        "120 GSM: a middle grade for general covering",
        "150 GSM: heavy duty",
        "200 GSM: our heaviest standard grade, for the toughest outdoor use",
        "Custom: any GSM from 70 to 200 on orders of 2 tons",
      ],
    },
    {
      heading: "Industries we supply across India",
      bullets: [
        "Agriculture and warehousing: covering grain sacks, bales and stored produce",
        "Water storage: lining farm ponds and storage pits",
        "Transport and logistics: truck and load covers",
        "Construction: site and material protection",
        "Manufacturing: covering machinery, equipment and stock",
        "Marine applications",
      ],
    },
    {
      heading: "How bulk ordering works",
      bullets: [
        "Share your requirement (size, GSM, colour, quantity and use) by phone, WhatsApp or our inquiry form.",
        "We recommend the right specification and quote our factory price.",
        "Your order is manufactured at our facility in Bavla, Gujarat.",
        "We dispatch it to your location anywhere in India.",
      ],
    },
  ],
  gallery: [
    TARPAULIN_IMAGES.indolineBlue,
    TARPAULIN_IMAGES.transparentRolls,
    TARPAULIN_IMAGES.stackCover,
    TARPAULIN_IMAGES.machinery,
  ],
  faq: [
    {
      question: "Do you deliver tarpaulins all over India?",
      answer: "Yes. We manufacture in Gujarat and dispatch bulk orders to buyers across India.",
    },
    TARPAULIN_GSM_FAQ,
    {
      question: "What is the minimum order for a custom GSM?",
      answer:
        "2 tons. On orders of 2 tons we manufacture any GSM from 70 to 200; our standard 90, 120, 150 and 200 GSM tarpaulins are available for bulk orders.",
    },
    {
      question: "Are you a manufacturer or a trader?",
      answer:
        "We are the manufacturer. Every tarpaulin is made at our own in-house facility in Bavla, Gujarat.",
    },
    {
      question: "What material are your tarpaulins made from?",
      answer: "Multiple bonded layers of mLDPE, LDPE, LLDPE and HDPE, with a UV-resistant coating.",
    },
    {
      question: "How is the price decided?",
      answer: TARPAULIN_PRICE_ANSWER,
    },
  ],
  related: [
    { label: "Multilayer tarpaulin manufacturer in Gujarat", path: "/tarpaulin-manufacturer-in-gujarat" },
    { label: "Multilayer tarpaulin product details", path: TARPAULIN.path },
    { label: "Poncho raincoat manufacturer in India", path: "/poncho-raincoat-manufacturer-in-india" },
  ],
};

export const PONCHO_GUJARAT: LandingPageContent = {
  path: "/poncho-raincoat-manufacturer-in-gujarat",
  title: "Best Poncho Raincoat Manufacturer in Gujarat | Divine Fabtech",
  description:
    "Poncho raincoat manufacturer in Bavla, Gujarat. Hooded ponchos in 5 colours, 42–140 g per piece, matching raincoat pant, factory prices for bulk orders.",
  breadcrumbName: "Poncho Raincoat Manufacturer in Gujarat",
  product: PONCHO,
  eyebrow: "Made in Bavla, Gujarat",
  h1: "Best Poncho Raincoat Manufacturer in Gujarat",
  intro: [
    "Divine Fabtech Industries manufactures waterproof poncho raincoats at our factory in Bavla, Ahmedabad district, Gujarat. Companies, contractors, event organisers and distributors across Gujarat buy directly from us in bulk.",
    "Every poncho is 100% waterproof, has a hood with a drawstring, and comes in purple, pink, green, blue or yellow. We also make a matching raincoat pant, and both come in global sizes.",
  ],
  heroImage: PONCHO_IMAGES.fiveColoursGrid,
  highlights: ["Factory in Bavla, Gujarat", "5 colours", "Matching raincoat pant", "Custom logo packaging"],
  sections: [
    {
      heading: "Why order ponchos from a Gujarat manufacturer",
      bullets: [
        "Factory-direct prices on bulk orders.",
        "Shorter transit to anywhere in Gujarat from our Bavla factory.",
        "Custom logo packaging for company and promotional orders.",
        "Five colours in global sizes, with a matching raincoat pant.",
      ],
    },
    {
      heading: "Poncho weight and custom GSM",
      paragraphs: [
        "Our standard ponchos weigh 42 to 140 grams per piece (poncho only, pant excluded), so you can pick a lighter or a sturdier poncho for your budget and use. For orders of 20,000 pieces we manufacture a custom GSM.",
      ],
      image: PONCHO_IMAGES.pink,
    },
    {
      heading: "Get ready before the monsoon",
      paragraphs: [
        "Gujarat's monsoon arrives around June. If you are equipping a workforce, a construction site or an event, place bulk poncho orders early so they are ready before the rain starts.",
      ],
      image: PONCHO_IMAGES.yellow,
    },
    {
      heading: "Who buys our ponchos",
      bullets: [
        "Factories and industrial workforces",
        "Construction sites",
        "Emergency services",
        "Outdoor events",
        "Brands and organisations distributing ponchos in bulk",
      ],
    },
  ],
  gallery: [PONCHO_IMAGES.purple, PONCHO_IMAGES.green, PONCHO_IMAGES.blue, PONCHO_IMAGES.yellow],
  faq: [
    {
      question: "Where are your poncho raincoats made?",
      answer:
        "At our factory at Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220, in Ahmedabad district.",
    },
    PONCHO_COLOURS_FAQ,
    PONCHO_WEIGHT_FAQ,
    PONCHO_PANT_FAQ,
    {
      question: "Can you add our company logo?",
      answer: "Yes. Custom logo packaging is available for bulk orders.",
    },
    {
      question: "Do you sell single ponchos?",
      answer: "No. We manufacture poncho raincoats for bulk orders only.",
    },
    {
      question: "How do I get the best price?",
      answer: PONCHO_PRICE_ANSWER,
    },
  ],
  related: [
    { label: "Poncho raincoat manufacturer in India", path: "/poncho-raincoat-manufacturer-in-india" },
    { label: "Recyclable poncho raincoat", path: "/recyclable-poncho-raincoat" },
    { label: "Multilayer tarpaulin manufacturer in Gujarat", path: "/tarpaulin-manufacturer-in-gujarat" },
  ],
};

export const PONCHO_INDIA: LandingPageContent = {
  path: "/poncho-raincoat-manufacturer-in-india",
  title: "Best Poncho Raincoat Manufacturer in India | Divine Fabtech",
  description:
    "Indian poncho raincoat manufacturer. 5 colours, 42–140 g per piece, custom GSM on 20,000-piece orders, matching raincoat pant, delivered across India.",
  breadcrumbName: "Poncho Raincoat Manufacturer in India",
  product: PONCHO,
  eyebrow: "Bulk supply across India",
  h1: "Best Poncho Raincoat Manufacturer in India",
  intro: [
    "Divine Fabtech Industries manufactures waterproof poncho raincoats in Gujarat and supplies bulk orders across India, to companies, contractors, emergency services, event organisers and distributors.",
    "Pick from five colours and a standard weight of 42–140 grams per piece, or order 20,000 pieces for a custom GSM. Add our matching raincoat pant, in the same global sizes, and custom logo packaging, all at a factory-direct price.",
  ],
  heroImage: PONCHO_IMAGES.green,
  highlights: ["Delivery across India", "5 colours", "Custom GSM on 20,000 pcs", "Matching raincoat pant"],
  sections: [
    {
      heading: "Poncho or raincoat: which is right for bulk buyers?",
      paragraphs: [
        "A poncho is a loose, one-piece rain cover with a hood that slips on over the head. It fits over clothes, and even a small bag, so sizing is forgiving, which makes ponchos easy to buy and hand out in bulk. They are quick to put on and take off, and they pack small when dry. Add our matching raincoat pant for head-to-toe protection.",
      ],
      image: PONCHO_IMAGES.blue,
    },
    {
      heading: "Specifications",
      bullets: [
        "Material: mLDPE, LDPE, LLDPE and HDPE",
        "100% waterproof, with a hood and drawstring",
        "Colours: purple, pink, green, blue and yellow",
        "Standard weight: 42–140 grams per piece (poncho only, pant excluded)",
        "Custom GSM: on orders of 20,000 pieces",
        "Matching raincoat pant available",
        "Sizes: global sizes for both poncho and pant",
        "Branding: custom logo packaging for bulk orders",
      ],
    },
    {
      heading: "How bulk ordering works",
      bullets: [
        "Tell us the quantity, colours, weight, sizes and branding you need, and whether you want the matching pant.",
        "We quote our factory price.",
        "Your ponchos are manufactured at our facility in Bavla, Gujarat.",
        "We dispatch them to your location anywhere in India.",
      ],
    },
  ],
  gallery: [PONCHO_IMAGES.yellow, PONCHO_IMAGES.purple, PONCHO_IMAGES.pink, PONCHO_IMAGES.green],
  faq: [
    {
      question: "Do you deliver poncho raincoats across India?",
      answer: "Yes. We manufacture in Gujarat and dispatch bulk orders to buyers across India.",
    },
    PONCHO_WEIGHT_FAQ,
    PONCHO_PANT_FAQ,
    {
      question: "What is the difference between a poncho and a raincoat?",
      answer:
        "A poncho is a loose, one-piece hooded rain cover that goes on over the head and fits over clothes, so sizing is forgiving. A raincoat is a fitted coat. We make ponchos and a matching raincoat pant, in global sizes.",
    },
    {
      question: "Can you pack ponchos with our brand?",
      answer: "Yes. Custom logo packaging is available for bulk orders.",
    },
    {
      question: "Are your ponchos reusable and recyclable?",
      answer:
        "Yes. They are durable, 100% waterproof polyethylene ponchos made to be used again and again, and polyethylene is a recyclable plastic family. See our recyclable poncho raincoat page for details.",
    },
    {
      question: "Do you sell small quantities?",
      answer: "No. We manufacture for bulk orders only.",
    },
  ],
  related: [
    { label: "Poncho raincoat manufacturer in Gujarat", path: "/poncho-raincoat-manufacturer-in-gujarat" },
    { label: "Recyclable poncho raincoat", path: "/recyclable-poncho-raincoat" },
    { label: "Multilayer tarpaulin manufacturer in India", path: "/tarpaulin-manufacturer-in-india" },
  ],
};

export const RECYCLABLE_PONCHO: LandingPageContent = {
  path: "/recyclable-poncho-raincoat",
  title: "Recyclable Poncho Raincoat Manufacturer | Bulk Orders | Divine Fabtech",
  description:
    "Recyclable, reusable poncho raincoats made from polyethylene. Waterproof, 5 colours, 42–140 g per piece, custom logo packaging. Bulk orders from Gujarat.",
  breadcrumbName: "Recyclable Poncho Raincoat",
  product: PONCHO,
  eyebrow: "Reusable & recyclable",
  h1: "Recyclable Poncho Raincoats for Bulk Orders",
  intro: [
    "Our poncho raincoats are made from polyethylene (mLDPE, LDPE, LLDPE and HDPE), one of the most widely recycled plastic families. They are also durable and reusable, so one poncho lasts through many rainy days instead of being thrown away after one.",
    "We manufacture them in Bavla, Gujarat, in purple, pink, green, blue and yellow, for organisations, brands and event organisers that want waterproof rain protection in bulk, with a lighter footprint.",
  ],
  heroImage: PONCHO_IMAGES.fiveColoursGrid,
  highlights: ["Polyethylene material", "Reusable", "5 colours", "Bulk orders"],
  sections: [
    {
      heading: "What makes our ponchos recyclable",
      paragraphs: [
        "The whole poncho is polyethylene. LDPE and LLDPE carry resin code 4, and HDPE carries resin code 2. Both are standard recyclable plastics that can be recycled wherever polyethylene film collection is available.",
        "Keeping to one plastic family makes a poncho easier to recycle than rainwear made from mixed or coated materials.",
      ],
    },
    {
      heading: "Reusable first, recyclable at the end",
      paragraphs: [
        "The most sustainable poncho is one that gets used again. Ours are 100% waterproof and durable, and dry quickly for the next use. Choose a sturdier weight within our 42–140 grams per piece range for repeated use. When a poncho finally reaches the end of its life, it can go to polyethylene recycling.",
      ],
      image: PONCHO_IMAGES.purple,
    },
    {
      heading: "Popular with",
      bullets: [
        "Companies equipping workforces for the monsoon",
        "Events and venues that hand out rain protection",
        "Brands looking for practical merchandise with custom logo packaging",
        "Organisations running distribution drives",
      ],
    },
    {
      heading: "Recycling tips for your ponchos",
      bullets: [
        "Rinse off mud and let the poncho dry before recycling.",
        "Hand it over with other plastic film to your dry-waste collection or a local plastic recycler.",
      ],
    },
  ],
  gallery: [PONCHO_IMAGES.pink, PONCHO_IMAGES.blue, PONCHO_IMAGES.green, PONCHO_IMAGES.yellow],
  faq: [
    {
      question: "Is your poncho raincoat recyclable?",
      answer:
        "Yes. It is made from polyethylene (mLDPE, LDPE, LLDPE and HDPE), which can be recycled wherever polyethylene film recycling is available.",
    },
    {
      question: "Is it biodegradable?",
      answer:
        "No. Polyethylene is recyclable, not biodegradable, so we describe our ponchos as reusable and recyclable.",
    },
    {
      question: "Can the poncho be reused?",
      answer: "Yes. It is durable and 100% waterproof, made to be used again and again.",
    },
    PONCHO_COLOURS_FAQ,
    PONCHO_WEIGHT_FAQ,
    {
      question: "Can you add our logo?",
      answer: "Yes. Custom logo packaging is available for bulk orders.",
    },
  ],
  related: [
    { label: "Poncho raincoat manufacturer in India", path: "/poncho-raincoat-manufacturer-in-india" },
    { label: "Poncho raincoat manufacturer in Gujarat", path: "/poncho-raincoat-manufacturer-in-gujarat" },
    { label: "Poncho raincoat product details", path: PONCHO.path },
  ],
};

export const LANDING_PAGES: LandingPageContent[] = [
  TARPAULIN_GUJARAT,
  TARPAULIN_INDIA,
  PONCHO_GUJARAT,
  PONCHO_INDIA,
  RECYCLABLE_PONCHO,
];
