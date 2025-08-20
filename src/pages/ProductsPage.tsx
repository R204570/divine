import { ArrowLeft, ShoppingCart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
    {
      id: "tarpaulins",
      title: "Multilayered Cross Laminated Tarpaulins",
      category: "CUSTOM SIZES FOR BULK ORDERS",
      image: "/Images/Tarpauline/cover.jpeg",
      description: "Our premium quality multilayered cross laminated tarpaulins offer superior strength and durability. We specialize in bulk manufacturing with custom sizes.",
      features: [
        "100% Waterproof",
        "UV Resistant coating",
        "Cross Laminated for extra strength",
        "Reinforced edges",
        "Custom sizes available",
        "Bulk orders only"
      ],
      applications: [
        "Industrial equipment covering",
        "Construction site protection",
        "Agricultural storage",
        "Truck covers",
        "Warehouse protection",
        "Marine applications"
      ],
      specifications: {
        "Material": "Cross Laminated HDPE/LDPE",
        "Type": "Multilayered",
        "Colors": "Blue, Green, Yellow",
        "Sizes": "Custom sizes for bulk orders",
        "Order Type": "Bulk manufacturing only"
      },
      galleryImages: [
        "/Images/Tarpauline/cover.jpeg",
        "/Images/Tarpauline/cover1.jpeg",
        "/Images/Tarpauline/cross-laminated-multilayer-ldpe-ll-tarpaulins.jpeg",
        "/Images/Tarpauline/cross-laminated-tarpaulin.jpg",
        "/Images/Tarpauline/Tarp-water.jpeg",
        "/Images/Tarpauline/Tarp-water1.jpeg",
        "/Images/Tarpauline/Tarp1.jpeg",
        "/Images/Tarpauline/Tarp2.jpeg",
        "/Images/Tarpauline/Tarp3.jpeg"
      ]
    },
    {
      id: "poncho",
      title: "Poncho Raincoats",
      category: "BULK ORDERS AVAILABLE",
      image: "/Images/Poncho/all.jpeg",
      description: "High-quality waterproof poncho raincoats manufactured for bulk orders. Available in various colors with custom branding options.",
      features: [
        "100% Waterproof material",
        "Multiple color options",
        "Custom branding available",
        "Bulk manufacturing",
        "Quality packaging",
        "Adjustable hood",
        "Multiple pocket options",
        "Various colors available"
      ],
      applications: [
        "Industrial use",
        "Construction sites",
        "Emergency services",
        "Outdoor events",
        "Bulk distribution"
      ],
      specifications: {
        "Material": "High-quality waterproof material",
        "Type": "Poncho style raincoat",
        "Colors": "Blue, Green, Yellow, Purple, Transparent",
        "Packaging": "Custom packaging available",
        "Order Type": "Bulk orders only"
      },
      galleryImages: [
        "/Images/Poncho/all.jpeg",
        "/Images/Poncho/blue.jpeg",
        "/Images/Poncho/green.jpg",
        "/Images/Poncho/purple.jpeg",
        "/Images/Poncho/transparent.jpeg",
        "/Images/Poncho/yellow.jpg"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-accent">Products</span>
              </h1>
              <p className="text-xl mb-8">
                Premium multilayered cross laminated tarpaulins and poncho raincoats. 
                Custom sizes available for bulk orders.
              </p>
              <Link to="/">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {product.title}
                      </CardTitle>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          Bulk Orders Only
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 4).map((app, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {product.applications.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.applications.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Link to={`/products/${product.id}`} className="flex-1">
                        <Button className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Quick Quote
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
                Our team of experts can help you design and manufacture custom fabric solutions 
                tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 9825148321
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;