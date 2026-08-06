import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, TEL_HREF } from "@/lib/company";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const products = [
    { name: "Multilayer Tarpauline", href: "/products/tarpaulins" },
    { name: "Poncho Raincoats", href: "/products/poncho" },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/Images/logo.png" 
                alt="Divine Fabtech Industries - Tarpaulin Manufacturer" 
                className="w-12 h-12 object-contain mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">Divine Fabtech</h3>
                <p className="text-accent font-medium">Industries</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Leading manufacturer of multilayer tarpauline and poncho raincoats.
              Home of the Indoline brand, specializing in custom bulk manufacturing solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/919825148321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
                title="Chat with us on WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.16l-4.15 6.67c-.75 1.2-2.4 1.55-3.65.78-.3-.18-.56-.42-.78-.71L6.9 14.05l-.71-1.21 1.38-.8 1.04 1.8 3.84-6.18c.75-1.2 2.4-1.55 3.65-.78 1.25.77 1.6 2.42.83 3.67l-.37.61z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/divine.fabtech?igsh=N3NhcnJ4anA3OWpi&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.facebook.com/share/1GgA2yKHcW/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href={TEL_HREF} className="text-sm hover:text-primary transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-muted-foreground">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:divinefabtech@gmail.com" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  divinefabtech@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/DIVINE+FABTECH+INDUSTRIES+Survey+No+710-711+Village+Rupal+Bavla+Jivapura+Gujarat+382220" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors cursor-pointer"
                  title="Open location in Google Maps"
                >
                  DIVINE FABTECH INDUSTRIES, Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} Divine Fabtech Industries. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;