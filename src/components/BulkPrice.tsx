import { cn } from "@/lib/utils";

interface BulkPriceProps {
  pricePerPiece: number;
  /** Smaller box that fits beside the links on the /products cards. */
  compact?: boolean;
  className?: string;
}

/** The bulk-order price box, shared by the products list and the product page. */
const BulkPrice = ({ pricePerPiece, compact = false, className }: BulkPriceProps) => (
  <div className={cn("rounded-lg border border-primary/20 bg-primary/5", compact ? "px-4 py-2" : "p-4", className)}>
    <p className={cn("font-semibold uppercase tracking-wide text-muted-foreground", compact ? "text-xs" : "text-sm")}>
      Bulk order price
    </p>
    <p className={cn("text-primary", compact ? "mt-0.5 flex items-baseline gap-1.5" : "mt-1")}>
      <span className={cn("font-bold", compact ? "text-3xl leading-none" : "text-4xl")}>₹{pricePerPiece}*</span>
      <span className={cn("font-medium", compact ? "text-sm" : "ml-2 text-lg")}>per piece</span>
    </p>
  </div>
);

export default BulkPrice;
