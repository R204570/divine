import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Rendered for unknown URLs. The prerender also writes it to dist/404.html,
 * which Vercel serves with a real 404 status (so search engines drop dead URLs
 * instead of indexing duplicates of the home page).
 */
const NotFound = () => {
  const links = [
    { label: "Multilayer Tarpaulin", to: "/products/tarpaulins" },
    { label: "Poncho Raincoats", to: "/products/poncho" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-muted/30 px-4 py-16">
      <div className="text-center max-w-xl">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you were looking for doesn't exist. These might help:
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="inline-block rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
