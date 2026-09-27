import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS } from "@/content/products";

const Products = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multilayer tarpaulins and waterproof poncho raincoats, manufactured at our own factory in
            Bavla, Gujarat and supplied in bulk across India.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.cardImage.src}
                    alt={product.cardImage.alt}
                    width={product.cardImage.width}
                    height={product.cardImage.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.summary}</p>
                <ul className="mb-6 space-y-1 text-sm">
                  {product.relatedPages.map((page) => (
                    <li key={page.path}>
                      <Link to={page.path} className="text-primary hover:underline">
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to={product.path}>
                    View {product.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Something Specific?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Send us an inquiry for custom sizes, colours, branding or bulk orders
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/inquiry">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
