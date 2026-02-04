import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      {/* Top contact bar */}
      <div className="bg-primary/90 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:9825148321" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              9825148321
            </a>
            <a href="mailto:divinefabtech@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="h-3 w-3" />
              divinefabtech@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-accent font-medium">Leading Manufacturer of Industrial Fabrics</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Images/logo.png" 
              alt="Divine Fabtech Industries - Tarpaulin Manufacturer" 
              className="w-16 h-16 object-contain"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-accent">Divine Fabtech</h1>
              <p className="text-xs text-primary-foreground/80">Industries</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/inquiry">
              <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/20 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4">
                <Link to="/inquiry" className="block">
                  <Button variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;