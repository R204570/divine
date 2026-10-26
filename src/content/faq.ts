import { FOUNDING_YEAR, PHONE_DISPLAY, TARPAULIN_BRAND } from "@/lib/company";
import {
  PONCHO_COLOURS_FAQ,
  PONCHO_PANT_FAQ,
  PONCHO_PRICE_ANSWER,
  PONCHO_WEIGHT_FAQ,
  TARPAULIN_GSM_FAQ,
  type FaqItem,
} from "./landing-pages";
import { MATERIALS, PONCHO } from "./products";

/**
 * The /faq page, grouped by topic. Answers reuse the landing pages' wording
 * where the question is the same, so the two never disagree.
 */
export interface FaqGroup {
  /** Anchor for links such as /faq#ponchos. */
  id: string;
  heading: string;
  items: FaqItem[];
}

const ponchoPrice: FaqItem[] =
  PONCHO.bulkPricePerPiece === undefined
    ? []
    : [
        {
          question: "What is the bulk price of your rain ponchos?",
          answer: `Our bulk order price is ₹${PONCHO.bulkPricePerPiece}* per piece. ${PONCHO_PRICE_ANSWER}`,
        },
      ];

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "ponchos",
    heading: "Rain ponchos",
    items: [
      ...ponchoPrice,
      PONCHO_COLOURS_FAQ,
      PONCHO_WEIGHT_FAQ,
      PONCHO_PANT_FAQ,
      {
        question: "What are your rain ponchos made from?",
        answer: `Polyethylene: ${MATERIALS}. Every poncho is 100% waterproof and has a hood with a drawstring.`,
      },
      {
        question: "Are your ponchos reusable and recyclable?",
        answer:
          "Yes. They are durable enough to use again and again, and polyethylene can be recycled wherever plastic film recycling is available.",
      },
      {
        question: "Are your ponchos biodegradable?",
        answer: "No. Polyethylene is recyclable, not biodegradable, so we describe our ponchos as reusable and recyclable.",
      },
      {
        question: "What is the difference between a poncho and a raincoat?",
        answer:
          "A poncho is a loose, one-piece hooded rain cover that goes on over the head and fits over clothes, so sizing is forgiving. A raincoat is a fitted coat. We make ponchos and a matching raincoat pant, in global sizes.",
      },
      {
        question: "Do you print custom logos on ponchos?",
        answer: "No. We don't offer custom logo printing on ponchos.",
      },
    ],
  },
  {
    id: "tarpaulins",
    heading: "Multilayer tarpaulins",
    items: [
      TARPAULIN_GSM_FAQ,
      {
        question: "What are your tarpaulins made from?",
        answer: `Multiple bonded layers of ${MATERIALS}, with a UV-resistant coating.`,
      },
      {
        question: "Are your tarpaulins waterproof and UV resistant?",
        answer:
          "Yes. They are 100% waterproof, with a UV-resistant coating for strong sun and reinforced edges for tying down.",
      },
      {
        question: "Which tarpaulin colours are available?",
        answer: "Blue and yellow are the most common. Custom colours are available for bulk orders.",
      },
      {
        question: "Do you make tarpaulins in custom sizes?",
        answer: "Yes. We make tarpaulins in custom sizes for bulk orders.",
      },
      {
        question: "What is the minimum order for a custom GSM tarpaulin?",
        answer: "2 tons. On orders of 2 tons we manufacture any GSM from 70 to 200.",
      },
      {
        question: "What brand are your tarpaulins sold under?",
        answer: `Our tarpaulins are sold under our own ${TARPAULIN_BRAND} brand.`,
      },
    ],
  },
  {
    id: "orders",
    heading: "Orders and delivery",
    items: [
      {
        question: "Do you sell small quantities?",
        answer: "No. We manufacture ponchos and tarpaulins for bulk orders only.",
      },
      {
        question: "Do you deliver across India?",
        answer: "Yes. We manufacture in Gujarat and dispatch bulk orders to buyers across Gujarat and the rest of India.",
      },
      {
        question: "How do I get a price?",
        answer: `Call or WhatsApp ${PHONE_DISPLAY}, or send an inquiry through our website, with the product, quantity and specification you need, and we will quote our factory price.`,
      },
      {
        question: "Are you a manufacturer or a trader?",
        answer: "We are the manufacturer. Our ponchos and tarpaulins are made at our own in-house facility in Bavla, Gujarat.",
      },
    ],
  },
  {
    id: "company",
    heading: "About Divine Fabtech",
    items: [
      {
        question: "Where is your factory?",
        answer:
          "At Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220, in Ahmedabad district.",
      },
      {
        question: "When was Divine Fabtech Industries founded?",
        answer: `In ${FOUNDING_YEAR}.`,
      },
      {
        question: "When can I reach you?",
        answer: `Call or WhatsApp ${PHONE_DISPLAY}, Monday to Saturday, 9:00 AM to 6:00 PM. The factory itself runs 24/7 except on national holidays.`,
      },
    ],
  },
];

export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((group) => group.items);
