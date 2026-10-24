import { cn } from "@/lib/utils";

interface BulkPriceProps {
  pricePerPiece: number;
  className?: string;
}

/** The bulk-order price box, shared by the products list and the product page. */
const BulkPrice = ({ pricePerPiece, className }: BulkPriceProps) => (
  <div className={cn("rounded-lg border border-primary/20 bg-primary/5 p-4", className)}>
    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
      Bulk order price
    </p>
    <p className="mt-1 text-primary">
      <span className="text-4xl font-bold">₹{pricePerPiece}*</span>
      <span className="ml-2 text-lg font-medium">per piece</span>
    </p>
  </div>
);

export default BulkPrice;
