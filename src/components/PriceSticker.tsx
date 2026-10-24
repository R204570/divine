import { cn } from "@/lib/utils";

interface PriceStickerProps {
  label: string;
  price: number;
  /** Sets the size and position; the text scales with the sticker's width. */
  className?: string;
}

/** Corners of a 24-point starburst in a 100×100 box: the classic price-sticker shape. */
const STARBURST = Array.from({ length: 48 }, (_, i) => {
  const angle = (Math.PI * i) / 24;
  const radius = i % 2 === 0 ? 49 : 43;
  return `${(50 + radius * Math.sin(angle)).toFixed(2)},${(50 - radius * Math.cos(angle)).toFixed(2)}`;
}).join(" ");

/** A tilted red starburst price sticker, used on the home page hero and the poncho card. */
const PriceSticker = ({ label, price, className }: PriceStickerProps) => (
  <div className={cn("relative aspect-square -rotate-12 drop-shadow-lg [container-type:inline-size]", className)}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <polygon points={STARBURST} className="fill-red-600 stroke-white" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="36" className="fill-none stroke-white/70" strokeWidth="0.8" strokeDasharray="2.5 2" />
    </svg>
    <p className="relative flex h-full flex-col items-center justify-center text-center text-white">
      <span className="max-w-[62%] text-[9.5cqw] font-bold uppercase leading-tight tracking-wide">{label}</span>
      <span className="text-[29cqw] font-extrabold leading-none">₹{price}*</span>
    </p>
  </div>
);

export default PriceSticker;
