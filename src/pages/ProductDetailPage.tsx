import { ChevronLeft, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  title: string;
  category: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

interface ProductData {
  tarpaulins: Product;
  poncho: Product;
}

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();

  const handleDownloadQuote = () => {
    // TODO: Implement PDF download logic
    toast({
      title: "Quote PDF",
      description: "Downloading product quote PDF...",
      duration: 3000,
    });
  };

  const handleShareProduct = () => {
    const productUrl = `${window.location.origin}/products/${productId}`;
    navigator.clipboard.writeText(productUrl).then(() => {
      toast({
        title: "Link Copied!",
        description: "Product link copied to clipboard",
        duration: 2000,
      });
    }).catch(() => {
      toast({
        title: "Error",
        description: "Failed to copy link",
        duration: 2000,
      });
    });
  };

  const productData: ProductData = {
    tarpaulins: {
      title: "Multilayer Tarpauline",
      category: "CUSTOM SIZES FOR BULK ORDERS",
      images: [
        "/Images/Tarpauline/Multilayer Tarpauline.jpeg",
        "/Images/Tarpauline/Multilayer 2.jpg",
        "/Images/Tarpauline/cover.jpeg",
        "/Images/Tarpauline/cover1.jpeg",
        "/Images/Tarpauline/rolls.jpeg",
        "/Images/Tarpauline/Tarp-water.jpeg",
        "/Images/Tarpauline/Tarp-water1.jpeg",
        "/Images/Tarpauline/Tarp1.jpeg",
        "/Images/Tarpauline/Tarp2.jpeg",
        "/Images/Tarpauline/Tarp3.jpeg",
        "/Images/Tarpauline/waterproof-plastic-tarpaulin-yellow.jpeg",
        "/Images/Tarpauline/1.jpg",
        "/Images/Tarpauline/14.jpg",
        "/Images/Tarpauline/15.jpg",
        "/Images/Tarpauline/16.jpg",
        "/Images/Tarpauline/18.jpg",
        "/Images/Tarpauline/24.jpg"
      ],
      description: "Our premium multilayer tarpauline are engineered for maximum durability and weather resistance. Specialized in bulk manufacturing with custom sizes.",
      features: [
        "100% Waterproof",
        "UV Resistant coating",
        "Multilayered for extra strength",
        "Reinforced edges",
        "High tensile strength",
        "Weather resistant"
      ],
      specifications: {
        "Material": "mLDPE, LDPE, LLDPE and HDPE",
        "Type": "Multilayered Tarpauline",
        "Colors": "Commonly Blue and Yellow, Custom colors available for bulk orders",
        "Size": "Custom sizes available for bulk orders"
      }
    },
    poncho: {
      title: "Poncho Raincoats",
      category: "BULK ORDERS WITH CUSTOM BRANDING",
      images: [
        "/Images/Poncho/all.jpeg",
        "/Images/Poncho/blue.jpeg",
        "/Images/Poncho/green.jpg",
        "/Images/Poncho/purple.jpeg",
        "/Images/Poncho/transparent.jpeg",
        "/Images/Poncho/yellow.jpg"
      ],
      description: "High-quality waterproof poncho raincoats designed for durability and comfort. Available in various colors with custom branding options for bulk orders.",
      features: [
        "100% Waterproof",
        "Multiple Colors",
        "Custom Branding",
        "High durability"
      ],
      specifications: {
        "Material": "mLDPE, LDPE, LLDPE and HDPE",
        "Colors": "Blue, Green, Yellow, Purple, Pink, Transparent",
        "Branding": "Custom logo packaging available for bulk orders",
        "Size": "Standard and custom sizes available"
      }
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Product Images */}
          <div>
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${product.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Thumbnail Preview */}
            <div className="grid grid-cols-5 gap-2 mt-4 max-w-xl mx-auto">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-md overflow-hidden border-2 hover:border-primary cursor-pointer">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <Badge variant="secondary" className="text-lg">
                {product.category}
              </Badge>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Specifications</h3>
              <div className="grid gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                    <div className="font-medium">{key}</div>
                    <div className="text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button 
                onClick={() => window.location.href = `/inquiry?product=${productId}`}
                className="flex-1"
                size="lg"
              >
                Make Inquiry
              </Button>
              <Button 
                onClick={handleDownloadQuote} 
                variant="outline" 
                className="flex-1"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Quote
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-between border-t">
              <span className="text-sm text-muted-foreground">Share this product</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleShareProduct}
                title="Copy product link to clipboard"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
