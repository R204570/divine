import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/seo/pages";

/** Visible breadcrumb trail; the matching BreadcrumbList schema comes from seo/pages.ts. */
const Breadcrumbs = ({ items, className = "" }: { items: Crumb[]; className?: string }) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="flex flex-wrap items-center gap-1 text-sm">
      {items.map((crumb, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={crumb.path} className="flex items-center gap-1">
            {isLast ? (
              <span aria-current="page" className="font-medium">
                {crumb.name}
              </span>
            ) : (
              <>
                <Link to={crumb.path} className="opacity-80 hover:opacity-100 hover:underline">
                  {crumb.name}
                </Link>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
              </>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
