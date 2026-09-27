/**
 * Every product photo on the site, with the alt text search engines index and
 * the intrinsic size (so the browser reserves space and the layout doesn't jump).
 */
export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const img = (src: string, alt: string, width: number, height: number): SiteImage => ({
  src,
  alt,
  width,
  height,
});

export const TARPAULIN_IMAGES = {
  indolineYellow: img(
    "/images/tarpaulin/indoline-yellow-multilayer-tarpaulin.webp",
    "Folded yellow Indoline multilayer tarpaulin with product label",
    1152,
    648
  ),
  indolineBlue: img(
    "/images/tarpaulin/indoline-blue-multilayer-tarpaulin.webp",
    "Folded blue Indoline multilayer tarpaulin with product label",
    1000,
    648
  ),
  rollsYellowBlue: img(
    "/images/tarpaulin/multilayer-tarpaulin-rolls-yellow-blue.webp",
    "Stacked yellow and blue multilayer tarpaulin rolls",
    1024,
    682
  ),
  rollsYellowBlueWhite: img(
    "/images/tarpaulin/multilayer-tarpaulin-rolls-yellow-blue-white.webp",
    "Yellow, blue and white multilayer tarpaulin rolls",
    700,
    600
  ),
  transparentRolls: img(
    "/images/tarpaulin/multilayer-tarpaulin-transparent-rolls.webp",
    "Rolls of transparent multilayer tarpaulin sheet",
    700,
    600
  ),
  sheetCloseUp: img(
    "/images/tarpaulin/blue-multilayer-tarpaulin-sheet.webp",
    "Close-up of a blue multilayer tarpaulin sheet",
    410,
    500
  ),
  grainSacks: img(
    "/images/tarpaulin/blue-tarpaulin-covering-grain-sacks.webp",
    "Blue multilayer tarpaulins covering stacks of grain sacks in open storage",
    700,
    600
  ),
  openStorage: img(
    "/images/tarpaulin/blue-tarpaulin-open-storage-covers.webp",
    "Row of blue tarpaulin covers protecting stacked goods outdoors",
    700,
    600
  ),
  stackCover: img(
    "/images/tarpaulin/blue-multilayer-tarpaulin-stack-cover.webp",
    "Blue multilayer tarpaulin covering a large outdoor stack",
    700,
    600
  ),
  outdoorStorage: img(
    "/images/tarpaulin/blue-tarpaulin-outdoor-storage-cover.webp",
    "Blue tarpaulins covering produce stored outdoors",
    500,
    500
  ),
  longStack: img(
    "/images/tarpaulin/blue-tarpaulin-long-stack-cover.webp",
    "Long stack covered with blue waterproof tarpaulin",
    500,
    500
  ),
  hayBales: img(
    "/images/tarpaulin/blue-tarpaulin-hay-bale-cover.webp",
    "Blue tarpaulin covering a stack of hay bales",
    300,
    245
  ),
  machinery: img(
    "/images/tarpaulin/tarpaulin-machinery-cover.webp",
    "Industrial machinery covered with a blue tarpaulin",
    250,
    188
  ),
  pondLiner: img(
    "/images/tarpaulin/tarpaulin-pond-liner-water-storage.webp",
    "Tarpaulin used as a pond liner for water storage",
    700,
    600
  ),
  farmPond: img(
    "/images/tarpaulin/tarpaulin-lined-farm-pond.webp",
    "Farm pond lined with blue multilayer tarpaulin",
    500,
    500
  ),
  waterPit: img(
    "/images/tarpaulin/blue-tarpaulin-water-tank-lining.webp",
    "Blue tarpaulin lining a water storage pit",
    400,
    500
  ),
} as const;

export const PONCHO_IMAGES = {
  fiveColoursGrid: img(
    "/images/poncho/poncho-raincoats-five-colours-grid.webp",
    "Hooded poncho raincoats in purple, pink, green, blue and yellow",
    1000,
    750
  ),
  fiveColours: img(
    "/images/poncho/poncho-raincoats-five-colours.webp",
    "Poncho raincoats in purple, pink, green, blue and yellow",
    1580,
    504
  ),
  pink: img(
    "/images/poncho/pink-poncho-raincoat.webp",
    "Pink waterproof poncho raincoat with hood",
    288,
    464
  ),
  blue: img(
    "/images/poncho/blue-poncho-raincoat.webp",
    "Blue waterproof poncho raincoat with hood, front and side view",
    500,
    500
  ),
  green: img(
    "/images/poncho/green-poncho-raincoat.webp",
    "Green waterproof poncho raincoat with hood, front and side view",
    1280,
    1280
  ),
  purple: img(
    "/images/poncho/purple-poncho-raincoat.webp",
    "Purple waterproof poncho raincoat with hood, front and side view",
    1000,
    1000
  ),
  yellow: img(
    "/images/poncho/yellow-poncho-raincoat.webp",
    "Yellow waterproof poncho raincoat with hood, front and side view",
    1280,
    1280
  ),
} as const;

/**
 * 1200x630 JPEGs for link previews. WhatsApp, Facebook and LinkedIn need a
 * plain JPEG/PNG here, not WebP or AVIF.
 */
export const SHARE_IMAGES = {
  home: img(
    "/images/og/divine-fabtech-industries.jpg",
    "Blue multilayer tarpaulins covering grain sacks, and poncho raincoats in five colours",
    1200,
    630
  ),
  tarpaulin: img(
    "/images/og/multilayer-tarpaulin.jpg",
    "Blue multilayer tarpaulins covering stacks of grain sacks",
    1200,
    630
  ),
  poncho: img(
    "/images/og/poncho-raincoat.jpg",
    "Poncho raincoats in purple, pink, green, blue and yellow",
    1200,
    630
  ),
} as const;

export const LOGO = img("/images/logo.png", "Divine Fabtech Industries logo", 620, 431);

export const TARPAULIN_GALLERY: SiteImage[] = [
  TARPAULIN_IMAGES.indolineYellow,
  TARPAULIN_IMAGES.indolineBlue,
  TARPAULIN_IMAGES.rollsYellowBlue,
  TARPAULIN_IMAGES.rollsYellowBlueWhite,
  TARPAULIN_IMAGES.transparentRolls,
  TARPAULIN_IMAGES.sheetCloseUp,
  TARPAULIN_IMAGES.grainSacks,
  TARPAULIN_IMAGES.openStorage,
  TARPAULIN_IMAGES.stackCover,
  TARPAULIN_IMAGES.outdoorStorage,
  TARPAULIN_IMAGES.longStack,
  TARPAULIN_IMAGES.hayBales,
  TARPAULIN_IMAGES.machinery,
  TARPAULIN_IMAGES.pondLiner,
  TARPAULIN_IMAGES.farmPond,
  TARPAULIN_IMAGES.waterPit,
];

export const PONCHO_GALLERY: SiteImage[] = [
  PONCHO_IMAGES.fiveColours,
  PONCHO_IMAGES.purple,
  PONCHO_IMAGES.pink,
  PONCHO_IMAGES.green,
  PONCHO_IMAGES.blue,
  PONCHO_IMAGES.yellow,
];
