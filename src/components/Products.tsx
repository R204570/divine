import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: "tarpaulins",
      title: "Multilayered Cross Laminated Tarpaulins",
      description: "Premium quality multilayered cross laminated tarpaulins with superior strength and durability.",
      image: "/Images/Tarpauline/cover.jpeg"
    },
    {
      id: "poncho",
      title: "Poncho Raincoats",
      description: "High-quality waterproof poncho raincoats available in various colors. Bulk orders available.",
      image: "/Images/Poncho/all.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of premium industrial fabrics and tarpaulins, 
            engineered for durability and performance in demanding applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
                <a href={`/products/${product.id}`}>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    View Product
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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
              Send us an inquiry for custom requirements or bulk orders
            </p>
            <a href="/inquiry">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Send Inquiry
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
