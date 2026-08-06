import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta(
    "Divine Fabtech Industries - Multilayer Tarpaulin & Poncho Raincoat Manufacturer in Gujarat, India",
    "Manufacturer of multilayer tarpaulins and waterproof poncho raincoats in Gujarat, India. Custom sizes and bulk orders across India."
  );

  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <About />
      <WhyChooseUs />
      <Contact />
    </div>
  );
};

export default Index;
