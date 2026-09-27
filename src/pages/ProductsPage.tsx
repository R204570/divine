import { ShoppingCart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MAILTO_HREF, PHONE_DISPLAY, TEL_HREF } from "@/lib/company";
import { PRODUCTS } from "@/content/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            className="mb-8 text-primary-foreground"
            items={[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Multilayer Tarpaulins &amp; <span className="text-accent">Poncho Raincoats</span>
            </h1>
            <p className="text-xl">
              Multilayer tarpaulins in 90 to 200 GSM and poncho raincoats with matching pants,
              manufactured in Bavla, Gujarat for bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={product.cardImage.src}
                    alt={product.cardImage.alt}
                    width={product.cardImage.width}
                    height={product.cardImage.height}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {product.tagline}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-2xl font-bold leading-none tracking-tight text-foreground">
                      {product.name}
                    </h2>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground whitespace-nowrap">
                      Bulk Orders Only
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{product.summary}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Applications:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 4).map((application) => (
                        <Badge key={application} variant="outline" className="text-xs">
                          {application}
                        </Badge>
                      ))}
                      {product.applications.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.applications.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Manufacturer pages */}
                  <ul className="space-y-1 text-sm">
                    {product.relatedPages.map((page) => (
                      <li key={page.path}>
                        <Link to={page.path} className="text-primary hover:underline">
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to={product.path}>View Details</Link>
                    </Button>
                    <Button asChild className="flex-1 bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200">
                      <Link to={`/inquiry?product=${product.id}`}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Quick Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us the size, colour, GSM and quantity you need and we will manufacture it for your bulk order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={TEL_HREF}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button asChild size="lg" className="bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200">
                <a href={MAILTO_HREF}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
