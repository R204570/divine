import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/landing-pages";

/**
 * Frequently asked questions as native <details> elements: the answers are in
 * the HTML for crawlers, and open/close works without JavaScript.
 */
const Faq = ({ items, heading = "Frequently Asked Questions" }: { items: FaqItem[]; heading?: string }) => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{heading}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.question} className="group bg-card border border-border rounded-lg p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
              <h3 className="text-base md:text-lg">{item.question}</h3>
              <ChevronDown
                className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
