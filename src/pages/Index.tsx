import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

const Index = () => {
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
