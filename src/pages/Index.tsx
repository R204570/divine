import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BuyingGuides from "@/components/BuyingGuides";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import PriceSticker from "@/components/PriceSticker";
import { PONCHO } from "@/content/products";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Poncho price offer: pinned to the top-right corner, under the sticky header,
          so it stays on screen while the page scrolls. */}
      {PONCHO.bulkPricePerPiece !== undefined && (
        <Link
          to={PONCHO.path}
          className="fixed right-2 top-36 z-40 w-20 transition-transform hover:scale-105 sm:right-4 sm:w-24 lg:right-6 lg:w-32"
        >
          <PriceSticker label="Rain poncho price" price={PONCHO.bulkPricePerPiece} />
        </Link>
      )}
      <Hero />
      <Products />
      <BuyingGuides />
      <About />
      <WhyChooseUs />
      <Contact />
    </div>
  );
};

export default Index;
