import { useState } from "react";
import { ChevronLeft, MessageCircle, Share2 } from "lucide-react";
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
  type CarouselApi,
} from "@/components/ui/carousel";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "./NotFound";
import { getProduct } from "@/content/products";
import { whatsappHrefWithText } from "@/lib/company";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const product = getProduct(productId);

  if (!product) {
    return <NotFound />;
  }

  const handleShareProduct = () => {
    const productUrl = `${window.location.origin}${product.path}`;
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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6 flex flex-col gap-3">
          <Breadcrumbs
            className="text-muted-foreground"
            items={[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.name, path: product.path },
            ]}
          />
          <Button asChild variant="ghost" className="pl-0 self-start">
            <Link to="/products">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Product Images */}
          <div>
            <Carousel className="w-full max-w-xl mx-auto" setApi={setCarouselApi}>
              <CarouselContent>
                {product.gallery.map((image, index) => (
                  <CarouselItem key={image.src}>
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2 mt-4 max-w-xl mx-auto">
              {product.gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(index)}
                  aria-label={`Show photo ${index + 1}: ${image.alt}`}
                  className="aspect-square rounded-md overflow-hidden border-2 hover:border-primary"
                >
                  <img
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <Badge variant="secondary" className="text-lg">
                {product.tagline}
              </Badge>
            </div>

            <div className="space-y-4">
              {product.overview.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted-foreground">{paragraph}</p>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Key Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <dl className="grid gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                    <dt className="font-medium">{key}</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild className="flex-1" size="lg">
                <Link to={`/inquiry?product=${product.id}`}>Make Inquiry</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1" size="lg">
                <a
                  href={whatsappHrefWithText(`Hi, I'd like the best price for ${product.name.toLowerCase()} (bulk order).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get Best Price on WhatsApp
                </a>
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-between border-t">
              <span className="text-sm text-muted-foreground">Share this product</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShareProduct}
                title="Copy product link to clipboard"
                aria-label="Copy product link to clipboard"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Uses + manufacturer pages */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <section>
            <h2 className="text-2xl font-bold mb-4">Uses</h2>
            <ul className="space-y-2 text-muted-foreground">
              {product.applications.map((application) => (
                <li key={application} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Buying in bulk?</h2>
            <ul className="space-y-2">
              {product.relatedPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-primary hover:underline">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
