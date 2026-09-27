import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PONCHO, TARPAULIN } from "@/content/products";
import type { SiteImage } from "@/content/images";

const GalleryImage = ({ image, to }: { image: SiteImage; to: string }) => (
  <Link
    to={to}
    className="relative block overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group h-64 sm:h-72"
  >
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <span className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
        View Product
      </span>
    </div>
  </Link>
);

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            className="mb-8 text-primary-foreground"
            items={[
              { name: "Home", path: "/" },
              { name: "Gallery", path: "/gallery" },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tarpaulin &amp; Poncho Raincoat <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-xl">
              Our multilayer tarpaulins at work and our poncho raincoats in every colour. Click any photo for the full product details.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Poncho Section */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Poncho Raincoats</h2>
              <p className="text-muted-foreground">Waterproof hooded ponchos in purple, pink, green, blue and yellow</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PONCHO.gallery.map((image) => (
                <GalleryImage key={image.src} image={image} to={PONCHO.path} />
              ))}
            </div>
          </section>

          <div className="my-16 border-t border-border" />

          {/* Tarpaulin Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Multilayer Tarpaulin</h2>
              <p className="text-muted-foreground">
                Covering grain sacks and bales, lining farm ponds, and protecting machinery and stock
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TARPAULIN.gallery.map((image) => (
                <GalleryImage key={image.src} image={image} to={TARPAULIN.path} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
