import { FOUNDING_YEAR, PHONE_DISPLAY, TARPAULIN_BRAND } from "@/lib/company";
import { TARPAULIN_IMAGES } from "../images";
import { MATERIALS, TARPAULIN, TARPAULIN_STANDARD_GSM } from "../products";
import { blogPath, post } from "./types";

/**
 * Multilayer tarpaulin buying and use-case guides. See ./types.ts for the
 * rules every guide follows. Facts about our own tarpaulins come from
 * content/products.ts; the rest is general know-how that holds for any
 * tarpaulin. Sheet weights are area × GSM, worked out in feet and metres.
 */

const GUJARAT_PAGE = "/tarpaulin-manufacturer-in-gujarat";
const INDIA_PAGE = "/tarpaulin-manufacturer-in-india";
const PRODUCT_PAGE = TARPAULIN.path;

const BEST_INDIA = blogPath("best-multilayer-tarpaulin-manufacturers-in-india");
const BEST_GUJARAT = blogPath("best-tarpaulin-manufacturers-in-ahmedabad-gujarat");
const GSM_GUIDE = blogPath("tarpaulin-gsm-guide");
const MULTILAYER = blogPath("multilayer-vs-single-layer-tarpaulin");
const FARM_POND = blogPath("farm-pond-tarpaulin-lining-guide");
const GRAIN = blogPath("tarpaulin-for-grain-and-crop-storage");
const TRUCK = blogPath("truck-tarpaulin-cover-guide");
const CONSTRUCTION = blogPath("tarpaulin-for-construction-sites");
const MONSOON_SHED = blogPath("monsoon-shed-tarpaulin");
const MACHINERY = blogPath("tarpaulin-covers-for-machinery-and-warehouses");
const MEASURE = blogPath("how-to-measure-and-order-tarpaulin");
const CARE = blogPath("how-to-make-a-tarpaulin-last-longer");

const PUBLISHED = { datePublished: "2026-10-26", dateModified: "2026-10-26" };
const TARPAULIN_POST = { topic: "tarpaulin" as const, product: TARPAULIN };

const OUR_TARPAULIN = `Our ${TARPAULIN_BRAND} multilayer tarpaulins are made from bonded layers of ${MATERIALS}: 100% waterproof, with a UV-resistant coating and reinforced edges, in ${TARPAULIN_STANDARD_GSM}, or any GSM from 70 to 200 on orders of 2 tons.`;

export const BEST_TARPAULIN_MANUFACTURERS_INDIA = post("best-multilayer-tarpaulin-manufacturers-in-india", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Best Multilayer Tarpaulin Manufacturers in India: A Guide",
  description:
    "How to choose the best multilayer tarpaulin manufacturer in India for bulk orders: material, GSM, UV resistance, custom sizes and a clear factory quote.",
  breadcrumbName: "Best tarpaulin manufacturers in India",
  h1: "Best multilayer tarpaulin manufacturers in India: how to choose one",
  excerpt:
    "What separates a good tarpaulin manufacturer from a listing: who makes the sheet, what it is made from, the GSM, UV resistance, custom sizes and the quote.",
  heroImage: TARPAULIN_IMAGES.rollsYellowBlue,
  intro: [
    "Search for the best tarpaulin manufacturers in India and you get long directory pages with hundreds of names. For a bulk buyer, the best manufacturer is the one that makes the sheet you need, in the size, GSM and quantity you need, at a price you can compare.",
    "This guide is written by a manufacturer. We make multilayer tarpaulins under our Indoline brand at our own factory in Bavla, Ahmedabad district, Gujarat, and supply bulk orders across India. Where it helps, we say how our own tarpaulins compare.",
  ],
  sections: [
    {
      heading: "Buy from the manufacturer, not a reseller",
      paragraphs: [
        "Many tarpaulin sellers are traders who buy rolls and resell them. Buying from the manufacturer means a factory price without a trader's margin, and sizes, colours and GSM made for your order rather than picked from stock.",
        "Ask where the factory is and whether the sheets are made there. Ours are made at Survey No 710-711, Village Rupal, Bavla, Gujarat 382220.",
      ],
    },
    {
      heading: "Ask what the tarpaulin is made from",
      paragraphs: [
        `Tarpaulins look alike in a photo and behave very differently outdoors. Ask for the material in writing. Ours are multilayer polyethylene, made from ${MATERIALS}. See [multilayer vs single-layer tarpaulin](${MULTILAYER}) for why the layers matter.`,
      ],
    },
    {
      heading: "Compare like with like: GSM",
      paragraphs: [
        `GSM is the weight of the sheet per square metre, and it is the fairest way to compare two tarpaulins. A cheaper quote at a lower GSM is not the same product. Our standard grades are ${TARPAULIN_STANDARD_GSM}; our [tarpaulin GSM guide](${GSM_GUIDE}) explains which one suits which job.`,
      ],
      image: TARPAULIN_IMAGES.sheetCloseUp,
    },
    {
      heading: "Check for UV resistance and reinforced edges",
      bullets: [
        "Sunlight breaks plastic down over time, so a tarpaulin that will sit outdoors needs UV resistance. Ours has a UV-resistant coating.",
        "The edges take the most strain when a tarpaulin is tied down. Ask whether they are reinforced. Ours are.",
        "Ask whether the sheet is fully waterproof. Ours is 100% waterproof.",
      ],
    },
    {
      heading: "Ask about custom sizes, colours and GSM",
      bullets: [
        "Custom sizes save cutting and joining on site. We make custom sizes for bulk orders.",
        "Blue and yellow are the most common colours; we make custom colours for bulk orders.",
        "For an unusual grade, ask the minimum order. We make any GSM from 70 to 200 on orders of 2 tons.",
      ],
    },
    {
      heading: "Get a clear, written quote",
      paragraphs: [
        "A useful quote states the material, GSM, size, colour, quantity, how the price is worked out and delivery to your location. Two quotes that do not state the same things cannot be compared.",
        `To get ours, call or WhatsApp ${PHONE_DISPLAY} or send an [inquiry](/inquiry?product=tarpaulins) with the size, GSM, colour and quantity you need.`,
      ],
    },
    {
      heading: "Where Divine Fabtech fits",
      paragraphs: [
        `Divine Fabtech Industries is a multilayer tarpaulin manufacturer founded in ${FOUNDING_YEAR}, with its own factory in Bavla, Gujarat, running 24/7 except on national holidays. ${OUR_TARPAULIN} We supply bulk orders [across India](${INDIA_PAGE}).`,
      ],
    },
  ],
  related: [
    { label: "Multilayer tarpaulin manufacturer in India", path: INDIA_PAGE },
    { label: "Best tarpaulin manufacturers in Ahmedabad, Gujarat", path: BEST_GUJARAT },
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Tarpaulin FAQs", path: "/faq" },
  ],
});

export const BEST_TARPAULIN_MANUFACTURERS_GUJARAT = post("best-tarpaulin-manufacturers-in-ahmedabad-gujarat", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Best Tarpaulin Manufacturers in Ahmedabad, Gujarat",
  description:
    "How to find the best tarpaulin (tadpatri) manufacturer in Ahmedabad and Gujarat for bulk orders: factory checks, GSM, sun and monsoon, and delivery.",
  breadcrumbName: "Best tarpaulin manufacturers in Ahmedabad, Gujarat",
  h1: "Best tarpaulin manufacturers in Ahmedabad and Gujarat: a buyer's guide",
  excerpt:
    "Buying tarpaulin (tadpatri) in bulk in Ahmedabad or elsewhere in Gujarat? How to check a manufacturer, what Gujarat's weather asks of a sheet, and who delivers where.",
  heroImage: TARPAULIN_IMAGES.indolineYellow,
  intro: [
    "Ahmedabad has plenty of tarpaulin sellers, from shops to traders to factories. Whether you call it a tarpaulin, tarpal or tadpatri (તાડપત્રી), the best choice for a bulk order is usually a manufacturer close by, making a sheet that suits Gujarat's sun and monsoon.",
    "We are one of those manufacturers: Divine Fabtech Industries makes multilayer tarpaulins under its Indoline brand at its own factory in Bavla, in Ahmedabad district. Here is how we suggest choosing.",
  ],
  sections: [
    {
      heading: "Why buy from a manufacturer near Ahmedabad",
      bullets: [
        "Shorter transit to your site anywhere in Gujarat.",
        "Factory-direct prices on bulk orders, with no trader's margin.",
        "Sizes, colours and GSM made for your order.",
        "A factory address you can check yourself before you order.",
      ],
    },
    {
      heading: "What Gujarat's weather asks of a tarpaulin",
      paragraphs: [
        "A tarpaulin in Gujarat has to take strong summer sun for months and then heavy monsoon rain. That calls for a UV-resistant sheet, a GSM matched to how long it will stay outdoors, and edges strong enough to stay tied down in monsoon wind.",
        `Ours are multilayer, 100% waterproof and UV-resistant, with reinforced edges. Our [tarpaulin GSM guide](${GSM_GUIDE}) explains which grade suits which job.`,
      ],
    },
    {
      heading: "How to check that a manufacturer is real",
      bullets: [
        "Ask for the factory address and look it up on a map.",
        "Ask whether the tarpaulins are made there or bought in and resold.",
        "Ask for the material and GSM in writing.",
        "Call the number on the website and check that someone who knows the product answers.",
      ],
      paragraphs: [
        `Our factory is at Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220. Call or WhatsApp ${PHONE_DISPLAY}, Monday to Saturday, 9:00 AM to 6:00 PM.`,
      ],
    },
    {
      heading: "What buyers in Gujarat use tarpaulins for",
      bullets: [
        `Farmers: covering [grain sacks, bales and harvested produce](${GRAIN}) and [lining farm ponds](${FARM_POND}).`,
        `Transporters: [truck and load covers](${TRUCK}).`,
        `Builders: [protecting materials and work on construction sites](${CONSTRUCTION}).`,
        `Factories and warehouses: [covering machinery and stock](${MACHINERY}).`,
        `Shops and farms: [monsoon sheds and temporary roofs](${MONSOON_SHED}).`,
      ],
      image: TARPAULIN_IMAGES.grainSacks,
    },
    {
      heading: "Where we deliver in Gujarat",
      paragraphs: [
        "From Bavla we supply bulk tarpaulin orders across Gujarat, including Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Junagadh, Anand, Mehsana and Kutch, and to the rest of India.",
      ],
    },
    {
      heading: "Divine Fabtech at a glance",
      bullets: [
        `Multilayer tarpaulin and rain poncho manufacturer, founded in ${FOUNDING_YEAR}`,
        `Tarpaulins sold under our ${TARPAULIN_BRAND} brand`,
        "Own factory in Bavla, Ahmedabad district, running 24/7 except on national holidays",
        `Standard ${TARPAULIN_STANDARD_GSM}; any GSM from 70 to 200 on orders of 2 tons`,
        "Custom sizes and colours for bulk orders",
      ],
      paragraphs: [
        `See our [tarpaulin manufacturer in Ahmedabad, Gujarat](${GUJARAT_PAGE}) page for photos and full specifications.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin manufacturer in Ahmedabad, Gujarat", path: GUJARAT_PAGE },
    { label: "Best tarpaulin manufacturers in India", path: BEST_INDIA },
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Tarpaulin FAQs", path: "/faq" },
  ],
});

export const TARPAULIN_GSM_GUIDE = post("tarpaulin-gsm-guide", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Tarpaulin GSM Guide: 90 vs 120 vs 150 vs 200 GSM",
  description:
    "What tarpaulin GSM means, how 90, 120, 150 and 200 GSM compare, how much a sheet weighs, and which grade suits farm, transport and site covering.",
  breadcrumbName: "Tarpaulin GSM guide",
  h1: "Tarpaulin GSM guide: 90, 120, 150 or 200 GSM?",
  excerpt:
    "What GSM means on a tarpaulin, how the four standard grades compare, what a sheet of each weighs, and which grade to choose for your job.",
  heroImage: TARPAULIN_IMAGES.sheetCloseUp,
  intro: [
    "GSM is the first number on any tarpaulin quote, and the easiest one to misread. This guide explains what it means, how the common grades compare, and how to pick the right one, so you neither overpay for a heavy sheet nor buy one too light for the job.",
  ],
  sections: [
    {
      heading: "What GSM means",
      paragraphs: [
        "GSM stands for grams per square metre: the weight of one square metre of the sheet. A higher GSM means more material in every square metre, which generally makes the tarpaulin tougher and better at standing up to long outdoor use. A lower GSM is lighter, easier to handle and costs less.",
      ],
    },
    {
      heading: "How the standard grades compare",
      bullets: [
        "90 GSM: our lightest standard grade, easy to handle and fold.",
        "120 GSM: a middle grade for general covering.",
        "150 GSM: heavy duty.",
        "200 GSM: our heaviest standard grade, for the toughest outdoor use.",
      ],
      paragraphs: [
        "For orders of 2 tons we make any GSM from 70 to 200, so the grade can be set exactly for your use.",
      ],
    },
    {
      heading: "Which GSM for which job",
      bullets: [
        "Short-term covering, light loads or sheets that are moved often: a lighter grade such as 90 GSM.",
        `General covering of goods and [stored produce](${GRAIN}) for a season: a middle grade such as 120 GSM.`,
        `[Truck covers](${TRUCK}), [construction sites](${CONSTRUCTION}) and long outdoor exposure: a heavy grade such as 150 GSM.`,
        `[Farm pond lining](${FARM_POND}), [monsoon sheds](${MONSOON_SHED}) and the hardest outdoor jobs: the heaviest grade, 200 GSM.`,
      ],
      paragraphs: [
        "These are starting points, not rules. Tell us how the tarpaulin will be used and for how long, and we will recommend a grade.",
      ],
    },
    {
      heading: "How much does a tarpaulin weigh?",
      paragraphs: [
        "Weight follows directly from GSM: multiply the sheet's area in square metres by the GSM and divide by 1,000 to get kilograms. One square foot is 0.0929 square metres. The table shows the sheet material for some common sizes; the finished tarpaulin weighs a little more because of its reinforced edges.",
      ],
      table: {
        caption: "Approximate weight of the sheet material, in kilograms",
        head: ["Size (feet)", "Area (m²)", "90 GSM", "120 GSM", "150 GSM", "200 GSM"],
        rows: [
          ["12 × 18", "20.07", "1.8", "2.4", "3.0", "4.0"],
          ["18 × 24", "40.13", "3.6", "4.8", "6.0", "8.0"],
          ["24 × 30", "66.89", "6.0", "8.0", "10.0", "13.4"],
          ["30 × 40", "111.48", "10.0", "13.4", "16.7", "22.3"],
        ],
      },
    },
    {
      heading: "Compare prices only at the same GSM",
      paragraphs: [
        "A 90 GSM sheet uses less than half the material of a 200 GSM sheet of the same size, so their prices are not comparable. When you compare quotes, check that the GSM, size and material match first.",
        `For the full ordering checklist, see [how to measure and order tarpaulin in bulk](${MEASURE}).`,
      ],
    },
  ],
  related: [
    { label: "Multilayer tarpaulin specifications", path: PRODUCT_PAGE },
    { label: "Multilayer vs single-layer tarpaulin", path: MULTILAYER },
    { label: "How to measure and order tarpaulin", path: MEASURE },
    { label: "Tarpaulin manufacturer in India", path: INDIA_PAGE },
  ],
});

export const MULTILAYER_VS_SINGLE_LAYER = post("multilayer-vs-single-layer-tarpaulin", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Multilayer vs Single-Layer Tarpaulin: Which Is Better?",
  description:
    "How a multilayer tarpaulin differs from a single-layer plastic sheet in strength, tear resistance and outdoor use, and when the extra layers are worth it.",
  breadcrumbName: "Multilayer vs single-layer tarpaulin",
  h1: "Multilayer vs single-layer tarpaulin: which is better?",
  excerpt:
    "Why tarpaulins are made in bonded layers, when a single-layer sheet is enough, and when a multilayer tarpaulin earns its place.",
  heroImage: TARPAULIN_IMAGES.indolineBlue,
  intro: [
    "Two plastic sheets of the same colour can look identical and last very differently. The biggest difference is often how the sheet is built: as one layer, or as several layers bonded into one.",
  ],
  sections: [
    {
      heading: "What 'multilayer' means",
      paragraphs: [
        `A multilayer tarpaulin is made from several layers of film bonded together into a single sheet. Ours bond layers of ${MATERIALS}. A single-layer sheet is just one film of plastic.`,
      ],
    },
    {
      heading: "Why the layers matter",
      bullets: [
        "Strength: the bonded layers give a multilayer tarpaulin more strength and tear resistance than a single-layer sheet.",
        "Backup: a scratch or weak spot in one layer still has the others behind it.",
        "Outdoor life: the extra strength is why multilayer tarpaulins last longer in demanding outdoor use.",
      ],
    },
    {
      heading: "When a single-layer sheet is enough",
      paragraphs: [
        "For a day or two of light covering indoors, such as a dust sheet while painting, a single-layer sheet can do the job. Once a sheet has to sit outdoors, carry a load, take wind or be tied down tightly, the extra layers start to pay for themselves.",
      ],
    },
    {
      heading: "When to choose multilayer",
      bullets: [
        `Covering [stored grain and produce](${GRAIN}) for a season.`,
        `[Truck and transport covers](${TRUCK}) that flap and rub in transit.`,
        `[Farm pond lining](${FARM_POND}) that must hold water for a long time.`,
        `[Construction sites](${CONSTRUCTION}) and [monsoon sheds](${MONSOON_SHED}).`,
      ],
      image: TARPAULIN_IMAGES.stackCover,
    },
    {
      heading: "Layers, GSM and UV work together",
      paragraphs: [
        `Being multilayer is one part of a good tarpaulin. The others are the right GSM for the job and UV resistance for life in the sun. ${OUR_TARPAULIN} Our [tarpaulin GSM guide](${GSM_GUIDE}) helps you pick the grade.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Multilayer tarpaulin specifications", path: PRODUCT_PAGE },
    { label: "Best tarpaulin manufacturers in India", path: BEST_INDIA },
  ],
});

export const FARM_POND_LINING = post("farm-pond-tarpaulin-lining-guide", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Farm Pond Lining Tarpaulin: Size, GSM and Laying Guide",
  description:
    "How to line a farm pond (khet talavadi) with tarpaulin: choosing the GSM, working out the sheet size, preparing the pit, and laying and anchoring it.",
  breadcrumbName: "Farm pond lining tarpaulin",
  h1: "Lining a farm pond with tarpaulin: size, GSM and laying",
  excerpt:
    "How to choose, size and lay a tarpaulin liner for a farm pond or water-storage pit, with a worked sizing example and tips to make it last.",
  heroImage: TARPAULIN_IMAGES.farmPond,
  intro: [
    "A farm pond (khet talavadi) stores rainwater for irrigation, but in many soils the water soaks away before it can be used. Lining the pond with a tarpaulin keeps the water in. Done well, a liner turns a pit that dries out into a store that lasts through the season.",
  ],
  sections: [
    {
      heading: "Choose a heavy, UV-resistant grade",
      paragraphs: [
        "A pond liner lies under the weight of water for months, and its top edges sit in full sun. That makes it one of the hardest jobs a tarpaulin can do, so a heavy grade such as 200 GSM, multilayer and UV-resistant, is the safer choice.",
        `See our [tarpaulin GSM guide](${GSM_GUIDE}) for how the grades compare.`,
      ],
    },
    {
      heading: "Work out the sheet size",
      paragraphs: [
        "The liner has to cover the floor, run up every side and leave extra at the top to anchor. Measure along the slope of the sides, not straight down, because sloped sides are longer than the depth.",
        "Liner length = top length + 2 × side slope length + 2 × anchoring allowance. Liner width = top width + 2 × side slope length + 2 × anchoring allowance.",
        "For example, a pond 20 m long and 15 m wide at the top, with sides 3 m long down the slope and 1 m left on each side for anchoring, needs a liner of 28 m × 23 m.",
      ],
      image: TARPAULIN_IMAGES.pondLiner,
    },
    {
      heading: "Prepare the pit",
      bullets: [
        "Remove stones, roots, sticks and anything sharp from the floor and sides.",
        "Smooth and compact the soil, so the liner rests on an even surface.",
        "On stony ground, spread a layer of sand or fine soil under the liner as a cushion.",
      ],
    },
    {
      heading: "Lay and anchor the liner",
      bullets: [
        "Lay it on a calm day, so wind cannot catch the sheet.",
        "Unroll it across the pond and let it settle into the corners without stretching it tight; a little slack lets it follow the soil as the pond fills.",
        "Dig a trench around the top edge, tuck the liner's edge into it and backfill it with soil to hold the liner in place.",
      ],
    },
    {
      heading: "Look after it",
      bullets: [
        "Keep animals, sharp tools and vehicles off the liner.",
        "Check the edges after heavy rain and re-cover any that the water has exposed.",
        `Repair small cuts early, before they grow. More tips: [how to make a tarpaulin last longer](${CARE}).`,
      ],
      image: TARPAULIN_IMAGES.waterPit,
    },
    {
      heading: "Ordering liners",
      paragraphs: [
        `For bulk orders we make tarpaulins in custom sizes, so liners can be made to the dimensions you need. ${OUR_TARPAULIN} See our [tarpaulin manufacturer in Ahmedabad, Gujarat](${GUJARAT_PAGE}) page.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Tarpaulin manufacturer in Ahmedabad, Gujarat", path: GUJARAT_PAGE },
    { label: "How to measure and order tarpaulin", path: MEASURE },
  ],
});

export const GRAIN_STORAGE = post("tarpaulin-for-grain-and-crop-storage", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Tarpaulin for Grain and Crop Storage: Covering Stacks",
  description:
    "How to cover grain sacks, bales and harvested produce in open storage with tarpaulin: choosing GSM and size, protecting the base, and tying stacks down.",
  breadcrumbName: "Tarpaulin for grain and crop storage",
  h1: "Covering grain sacks, bales and produce with tarpaulin",
  excerpt:
    "Practical steps for covering stacks of grain sacks, bales and harvested produce in open storage, from the base of the stack to tying the cover down.",
  heroImage: TARPAULIN_IMAGES.grainSacks,
  intro: [
    "Harvested grain, bales and produce often wait in the open, at the farm, the mandi or a warehouse yard, before they move on. A well-chosen, well-fitted tarpaulin keeps rain, dew, dust and sun off them until then.",
  ],
  sections: [
    {
      heading: "Start with a raised, dry base",
      paragraphs: [
        "Water comes up from the ground as well as down from the sky. Build the stack on pallets, wooden planks or a raised platform, so the bottom layer is not sitting in wet soil, and put a sheet under the stack if the ground is damp.",
      ],
    },
    {
      heading: "Shape the stack to shed water",
      paragraphs: [
        "A flat top lets rain collect, and pooled water is heavy enough to stretch a cover and find its way in. Stack so the top is slightly higher in the middle, so water runs off the sides.",
      ],
      image: TARPAULIN_IMAGES.openStorage,
    },
    {
      heading: "Choose the right size",
      paragraphs: [
        "The cover should reach down each side close to the ground. Width needed = stack width + 2 × stack height + a margin for tying; length needed = stack length + 2 × stack height + the same margin. If one sheet is not big enough, overlap two generously, with the upper sheet over the lower one so water runs across the joint, not into it.",
        `For bulk orders we make custom sizes. See [how to measure and order tarpaulin](${MEASURE}).`,
      ],
    },
    {
      heading: "Choose the GSM",
      paragraphs: [
        `A cover that stays out for a season in sun and rain needs a UV-resistant sheet and a middle or heavy grade, such as 120 or 150 GSM. Our [tarpaulin GSM guide](${GSM_GUIDE}) compares the grades.`,
      ],
    },
    {
      heading: "Tie it down",
      bullets: [
        "Tie the cover down along its reinforced edges on every side, so wind cannot get underneath and lift it.",
        "Pull it snug but not drum-tight; a cover that flaps wears out quickly.",
        "Pad sharp corners of the stack where the sheet presses against them.",
      ],
      image: TARPAULIN_IMAGES.hayBales,
    },
    {
      heading: "Check after every storm",
      paragraphs: [
        "Walk around the stack after heavy rain or wind. Re-tie anything loose, clear pooled water and look under the edges for leaks or damp, so a small problem does not spoil the whole stack.",
      ],
    },
    {
      heading: "Our tarpaulins for farm storage",
      paragraphs: [
        `${OUR_TARPAULIN} Farmers use them to cover grain sacks, bales and harvested produce in open storage. See our [tarpaulin manufacturer in Ahmedabad, Gujarat](${GUJARAT_PAGE}) page.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Farm pond lining tarpaulin", path: FARM_POND },
    { label: "Tarpaulin manufacturer in Ahmedabad, Gujarat", path: GUJARAT_PAGE },
  ],
});

export const TRUCK_COVER = post("truck-tarpaulin-cover-guide", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Truck Tarpaulin Covers: Choosing Size and GSM",
  description:
    "How to choose a truck tarpaulin: measuring the load for the right size, picking a GSM for regular transport, colours, and tying the cover down securely.",
  breadcrumbName: "Truck tarpaulin covers",
  h1: "Truck tarpaulin covers: choosing the size and GSM",
  excerpt:
    "How to size a tarpaulin for a truck or trailer load, which GSM stands up to regular transport, and how to tie it so it stays on.",
  heroImage: TARPAULIN_IMAGES.rollsYellowBlueWhite,
  intro: [
    "A truck cover has a harder life than most tarpaulins. It is pulled tight over a load, beaten by wind at highway speed and rubbed against sharp corners, then taken off and put back on again and again. Choosing the right size and grade makes the difference between a cover that lasts and one that tears on its first long trip.",
  ],
  sections: [
    {
      heading: "Measure the load, not just the truck",
      paragraphs: [
        "The cover has to go over the load and down both sides, with enough left to tie. Width needed = body width + 2 × load height + a tying margin on each side; length needed = body length + 2 × load height + the same margin.",
        "For example, a body 6.5 m long and 2.5 m wide, loaded 1.5 m high, with 0.5 m left on each side to tie, needs a cover of about 10.5 m × 6.5 m.",
      ],
    },
    {
      heading: "Choose a heavy grade",
      paragraphs: [
        `Wind and friction wear a transport cover quickly, so a heavy grade such as 150 or 200 GSM, multilayer and UV-resistant, is the safer choice. See our [tarpaulin GSM guide](${GSM_GUIDE}).`,
      ],
    },
    {
      heading: "Tie it down so it cannot flap",
      bullets: [
        "Tie the cover tight along its reinforced edges, working around the truck so the tension is even.",
        "Flapping is what wears covers out fastest. A cover that drums in the wind needs another tie.",
        "Pad sharp corners of the load and the body where the sheet presses on them.",
      ],
    },
    {
      heading: "Fleets and transporters",
      paragraphs: [
        `For bulk orders we make tarpaulins in custom sizes, so every truck in a fleet can get a cover cut to its body, and in custom colours if you want covers to be easy to tell apart. Blue and yellow are the most common. More on sizing in [how to measure and order tarpaulin](${MEASURE}).`,
      ],
    },
    {
      heading: "Our tarpaulins for transport",
      paragraphs: [
        `${OUR_TARPAULIN} Transporters use them as truck and load covers. See our [tarpaulin manufacturer in India](${INDIA_PAGE}) page.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "How to make a tarpaulin last longer", path: CARE },
    { label: "Tarpaulin manufacturer in India", path: INDIA_PAGE },
  ],
});

export const CONSTRUCTION_SITES = post("tarpaulin-for-construction-sites", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Tarpaulin for Construction Sites: Practical Uses",
  description:
    "Practical ways builders use tarpaulin on construction sites: covering cement, sand and steel, protecting finished work, ground sheets and monsoon cover.",
  breadcrumbName: "Tarpaulin for construction sites",
  h1: "Tarpaulin on construction sites: practical uses for builders",
  excerpt:
    "How builders and contractors use tarpaulins to keep materials dry, protect finished work, keep sites working through the monsoon, and which grade to pick.",
  heroImage: TARPAULIN_IMAGES.stackCover,
  intro: [
    "On a construction site, rain and sun cost money: wet cement, washed-away sand, rusting steel and spoiled finishes. A stock of good tarpaulins is one of the cheapest ways to protect materials and keep work moving, especially through the monsoon.",
  ],
  sections: [
    {
      heading: "Keep cement dry",
      paragraphs: [
        "Cement starts to harden when it absorbs moisture, so bags left open to rain or damp air can be wasted. Stack bags on a raised base, off the ground, and cover the stack completely.",
      ],
    },
    {
      heading: "Cover sand and aggregate",
      paragraphs: [
        "Uncovered heaps of sand and aggregate get washed into drains in heavy rain and blown around in dry wind. A tied-down cover keeps the heap where you left it and the material ready to use.",
      ],
    },
    {
      heading: "Protect steel and fittings",
      paragraphs: [
        "Reinforcement steel and stored fittings left in the rain start to rust. Raise them off the ground and cover them, so they stay dry between deliveries and use.",
      ],
    },
    {
      heading: "Shield finished work and openings",
      paragraphs: [
        "During the monsoon, tarpaulins can close off window and door openings and cover unfinished roofs, so rain does not reach finished floors, plaster or stored materials inside.",
      ],
    },
    {
      heading: "Ground sheets and shelters",
      bullets: [
        "Lay a sheet under materials to keep them out of the mud.",
        `Rig a [temporary shelter](${MONSOON_SHED}) for workers, tools and equipment.`,
        "Cover machinery that stays on site overnight.",
      ],
      image: TARPAULIN_IMAGES.outdoorStorage,
    },
    {
      heading: "Which tarpaulin for site work",
      paragraphs: [
        `Site tarpaulins get dragged, tied, untied and reused, often for months. A heavy, multilayer, UV-resistant grade such as 150 GSM holds up best; our [tarpaulin GSM guide](${GSM_GUIDE}) compares the options. ${OUR_TARPAULIN}`,
        `Builders use our tarpaulins for construction site protection. See our [tarpaulin manufacturer in Ahmedabad, Gujarat](${GUJARAT_PAGE}) page.`,
      ],
    },
  ],
  related: [
    { label: "Monsoon shed tarpaulin", path: MONSOON_SHED },
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Tarpaulin manufacturer in Ahmedabad, Gujarat", path: GUJARAT_PAGE },
  ],
});

export const MONSOON_SHED_POST = post("monsoon-shed-tarpaulin", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Monsoon Shed Tarpaulin: Temporary Roofs That Stay Dry",
  description:
    "Using tarpaulin for monsoon sheds and temporary roofs: frame and slope, choosing GSM, sizing the sheet with overhang, and fixing it so wind can't lift it.",
  breadcrumbName: "Monsoon shed tarpaulin",
  h1: "Monsoon sheds and temporary roofs with tarpaulin",
  excerpt:
    "How to put up a monsoon shed or temporary roof that stays dry: the frame and slope, sheet size and overhang, GSM, and fixing it against wind.",
  heroImage: TARPAULIN_IMAGES.longStack,
  intro: [
    "Every monsoon, tarpaulins go up over shop fronts, farm sheds, parking spaces, storage areas and work yards as temporary roofs. A good monsoon shed stays dry and stays up through the season; a poor one sags, pools water and tears in the first storm.",
  ],
  sections: [
    {
      heading: "Build a frame with a slope",
      paragraphs: [
        "The sheet needs a frame, of bamboo, timber or steel, and the frame needs a slope so rain runs off. A flat roof lets water collect in pockets; the weight stretches the sheet, the pocket deepens, and eventually it tears or collapses.",
      ],
    },
    {
      heading: "Size the sheet with overhang",
      paragraphs: [
        "Measure the roof along the slope, not across the floor, and add an overhang on every side so rain drips clear of the shed and the edges can be fixed to the frame. Length needed = roof length + 2 × overhang; width needed = slope length + 2 × overhang.",
        `For bulk orders we make tarpaulins in custom sizes. See [how to measure and order tarpaulin](${MEASURE}).`,
      ],
    },
    {
      heading: "Choose a heavy, UV-resistant grade",
      paragraphs: [
        `A roof takes everything the season throws at it: sun before the rain, heavy showers and strong wind. A heavy grade such as 200 GSM, multilayer and UV-resistant, is the safer choice. See our [tarpaulin GSM guide](${GSM_GUIDE}).`,
      ],
    },
    {
      heading: "Fix it so wind cannot lift it",
      bullets: [
        "Tie the sheet to the frame along its reinforced edges, all the way round.",
        "Hold it down with battens or ropes across the top rather than nailing through the sheet; every hole is a leak and a place for a tear to start.",
        "Pull it snug so it cannot flap, and check the ties after every storm.",
      ],
    },
    {
      heading: "After the monsoon",
      paragraphs: [
        `Take the sheet down, wash off the dirt, let it dry completely and store it folded out of the sun, and it is ready for next year. More in [how to make a tarpaulin last longer](${CARE}).`,
      ],
    },
    {
      heading: "Our tarpaulins for monsoon cover",
      paragraphs: [
        `${OUR_TARPAULIN} See our [multilayer tarpaulin specifications](${PRODUCT_PAGE}).`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin for construction sites", path: CONSTRUCTION },
    { label: "How to make a tarpaulin last longer", path: CARE },
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
  ],
});

export const MACHINERY_AND_WAREHOUSE = post("tarpaulin-covers-for-machinery-and-warehouses", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "Tarpaulin Covers for Machinery and Warehouse Stock",
  description:
    "How factories and warehouses use tarpaulin to cover idle machinery and stock in open yards: sizing the cover, choosing GSM, and avoiding trapped damp.",
  breadcrumbName: "Tarpaulin for machinery and warehouses",
  h1: "Tarpaulin covers for machinery and warehouse stock",
  excerpt:
    "Covering idle machines and stock in open yards or under leaky roofs: how to size the cover, which grade to use, and how to avoid trapping damp underneath.",
  heroImage: TARPAULIN_IMAGES.machinery,
  intro: [
    "Factories and warehouses use tarpaulins wherever equipment or stock has to sit unprotected: machines waiting for installation, spares in an open yard, goods staged for loading, or stock under a roof that leaks in the monsoon.",
  ],
  sections: [
    {
      heading: "Covering idle machinery",
      paragraphs: [
        "A machine left uncovered collects dust, rain and sun on its controls, motors and exposed metal. Cover it completely, down to the ground on every side, and tie the cover so it cannot blow off.",
        "Make sure the machine is dry before you cover it. A cover traps moisture as well as keeping it out, so covering a wet machine can do more harm than good.",
      ],
    },
    {
      heading: "Stock in open yards",
      paragraphs: [
        `Goods waiting outdoors need the same treatment as any stack: a raised base, a top that sheds water and a cover tied down along its edges. See [covering stacks of grain and produce](${GRAIN}) for the method.`,
      ],
      image: TARPAULIN_IMAGES.outdoorStorage,
    },
    {
      heading: "Inside the warehouse",
      paragraphs: [
        "Indoors, a tarpaulin keeps dust off stored goods and protects them from roof leaks during the monsoon. Here a lighter grade is often enough, because the sheet is out of the sun and wind.",
      ],
    },
    {
      heading: "Sizing and grade",
      bullets: [
        "Width needed = object width + 2 × height + a tying margin; length needed = object length + 2 × height + the same margin.",
        "Pad sharp corners and edges where the sheet presses on them.",
        `Outdoors, choose a heavy, UV-resistant grade such as 150 GSM; indoors, a lighter grade such as 90 or 120 GSM. See our [tarpaulin GSM guide](${GSM_GUIDE}).`,
        "Custom colours can mark covers by department, line or customer.",
      ],
    },
    {
      heading: "Our tarpaulins for industry",
      paragraphs: [
        `${OUR_TARPAULIN} Factories and warehouses use them to cover machinery, equipment and stock. See our [tarpaulin manufacturer in India](${INDIA_PAGE}) page.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "How to measure and order tarpaulin", path: MEASURE },
    { label: "Tarpaulin manufacturer in India", path: INDIA_PAGE },
  ],
});

export const MEASURE_AND_ORDER = post("how-to-measure-and-order-tarpaulin", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "How to Measure and Order Tarpaulin in Bulk",
  description:
    "A step-by-step way to measure for a tarpaulin, convert feet to square metres, estimate sheet weight from GSM, and put together a bulk tarpaulin order.",
  breadcrumbName: "How to measure and order tarpaulin",
  h1: "How to measure and order tarpaulin in bulk",
  excerpt:
    "Measure what you are covering, add drop and tying margin, convert the units, estimate the weight from GSM, and send a complete order.",
  heroImage: TARPAULIN_IMAGES.transparentRolls,
  intro: [
    "Most tarpaulin problems start with a sheet that is the wrong size: too short to reach the ground, too narrow to tie, or so big it flaps. Measuring properly takes a few minutes and saves a reorder.",
  ],
  sections: [
    {
      heading: "1. Measure what you are covering",
      paragraphs: [
        "Measure the length, width and height of the stack, load, machine or roof. For a roof or a pond, measure along the slope, because a slope is longer than the height it climbs.",
      ],
    },
    {
      heading: "2. Add the drop and the tying margin",
      paragraphs: [
        "A cover has to come down the sides and leave something to tie. Width needed = width + 2 × height + 2 × tying margin; length needed = length + 2 × height + 2 × tying margin.",
        `Uses with their own rules have their own guides: [farm pond liners](${FARM_POND}), [truck covers](${TRUCK}) and [monsoon sheds](${MONSOON_SHED}).`,
      ],
    },
    {
      heading: "3. Convert the units",
      bullets: [
        "1 foot = 0.3048 metres.",
        "1 square foot = 0.0929 square metres.",
        "For example, a 24 × 30 ft sheet is 720 square feet, or about 66.89 square metres.",
      ],
    },
    {
      heading: "4. Choose the GSM and estimate the weight",
      paragraphs: [
        `Pick the grade for the job using our [tarpaulin GSM guide](${GSM_GUIDE}). The sheet's weight in kilograms is its area in square metres × GSM ÷ 1,000; a 24 × 30 ft sheet at 120 GSM is about 8 kg of sheet material.`,
      ],
    },
    {
      heading: "5. Decide the colour and quantity",
      paragraphs: [
        "Blue and yellow are the most common colours, and we make custom colours for bulk orders. Count the covers you need now, plus spares for replacements.",
      ],
    },
    {
      heading: "6. Send a complete order",
      bullets: [
        "Size of each sheet, in feet or metres",
        "GSM",
        "Colour",
        "Quantity of each size",
        "What it will be used for, so we can check the grade",
        "Delivery location",
      ],
      paragraphs: [
        `Send it by phone or WhatsApp on ${PHONE_DISPLAY}, or through our [inquiry form](/inquiry?product=tarpaulins). We make custom sizes for bulk orders, and any GSM from 70 to 200 on orders of 2 tons.`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Multilayer tarpaulin specifications", path: PRODUCT_PAGE },
    { label: "Best tarpaulin manufacturers in India", path: BEST_INDIA },
  ],
});

export const CARE_TIPS = post("how-to-make-a-tarpaulin-last-longer", {
  ...TARPAULIN_POST,
  ...PUBLISHED,
  title: "How to Make a Tarpaulin Last Longer: Care Tips",
  description:
    "Simple ways to get more use from a tarpaulin: tie it tight, keep water from pooling, avoid sharp edges, clean and dry it, and store it out of the sun.",
  breadcrumbName: "How to make a tarpaulin last longer",
  h1: "How to make a tarpaulin last longer",
  excerpt:
    "Most tarpaulins wear out from flapping, pooled water and sharp corners, not age. Simple habits that get more seasons from every sheet.",
  heroImage: TARPAULIN_IMAGES.longStack,
  intro: [
    "A good tarpaulin can serve for many seasons, or fail in a few weeks, depending mostly on how it is used. These habits cost nothing and make every sheet last longer.",
  ],
  sections: [
    {
      heading: "Tie it down tight",
      paragraphs: [
        "Flapping is the fastest way to wear out a tarpaulin. Tie it snug along its edges, evenly all the way round, and add ties wherever it still moves in the wind.",
      ],
    },
    {
      heading: "Don't let water pool",
      paragraphs: [
        "Pooled water is heavy. It stretches the sheet, the pocket deepens, and the sheet eventually tears. Give every cover and roof a slope, and clear standing water after rain.",
      ],
    },
    {
      heading: "Pad sharp edges and corners",
      paragraphs: [
        "Corners of stacks, machines, truck bodies and frames rub through a sheet over time. Pad them with old sacks, cardboard or a scrap of tarpaulin where the sheet presses on them.",
      ],
    },
    {
      heading: "Lift it, don't drag it",
      paragraphs: [
        "Dragging a sheet over rough ground or concrete scratches it. Carry it, or fold it before you move it.",
      ],
    },
    {
      heading: "Clean it gently",
      paragraphs: [
        "Wash off mud and dirt with water and, if needed, a mild soap. Avoid harsh solvents and hard scrubbing brushes, which damage the surface.",
      ],
    },
    {
      heading: "Dry it before you fold it",
      paragraphs: [
        "Folding a wet tarpaulin traps moisture and leaves it musty and stained. Let it dry completely first.",
      ],
    },
    {
      heading: "Store it out of the sun",
      paragraphs: [
        "When it is not in use, keep it folded in a cool, dry place out of direct sunlight, away from sharp objects and rodents.",
      ],
    },
    {
      heading: "Repair small holes early",
      paragraphs: [
        "A small cut grows quickly in the wind. Patch it with tarpaulin repair tape or a glued patch as soon as you see it.",
      ],
    },
    {
      heading: "Start with the right tarpaulin",
      paragraphs: [
        `Care goes further on a sheet that suits the job. A multilayer, UV-resistant tarpaulin at the right GSM starts with a head start; see our [tarpaulin GSM guide](${GSM_GUIDE}) and [multilayer vs single-layer tarpaulin](${MULTILAYER}). ${OUR_TARPAULIN}`,
      ],
    },
  ],
  related: [
    { label: "Tarpaulin GSM guide", path: GSM_GUIDE },
    { label: "Multilayer vs single-layer tarpaulin", path: MULTILAYER },
    { label: "Multilayer tarpaulin specifications", path: PRODUCT_PAGE },
  ],
});

export const TARPAULIN_POSTS = [
  BEST_TARPAULIN_MANUFACTURERS_INDIA,
  BEST_TARPAULIN_MANUFACTURERS_GUJARAT,
  TARPAULIN_GSM_GUIDE,
  MULTILAYER_VS_SINGLE_LAYER,
  FARM_POND_LINING,
  GRAIN_STORAGE,
  TRUCK_COVER,
  CONSTRUCTION_SITES,
  MONSOON_SHED_POST,
  MACHINERY_AND_WAREHOUSE,
  MEASURE_AND_ORDER,
  CARE_TIPS,
];
