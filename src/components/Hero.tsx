import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EMAIL, MAILTO_HREF, MAPS_URL, PHONE_DISPLAY, TEL_HREF } from "@/lib/company";
import { PONCHO_IMAGES, TARPAULIN_IMAGES } from "@/content/images";

const heroSlides = [
  {
    title: "Multilayer Tarpaulin",
    subtitle: "90, 120, 150 & 200 GSM, or custom 70–200 GSM, in custom sizes for bulk orders",
    image: TARPAULIN_IMAGES.rollsYellowBlue,
  },
  {
    title: "Poncho Raincoats",
    subtitle: "Waterproof ponchos in five colours, with a matching raincoat pant, for bulk orders",
    image: PONCHO_IMAGES.fiveColoursGrid,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image.src}
              alt={slide.image.alt}
              width={slide.image.width}
              height={slide.image.height}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* The page's one <h1> stays fixed; only the product line below rotates. */}
          <h1 className="text-sm md:text-base font-semibold uppercase tracking-widest text-accent mb-6">
            Multilayer Tarpaulin &amp; Poncho Raincoat Manufacturer in Gujarat, India
          </h1>
          <p className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </p>
          <p className="text-lg md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/inquiry">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Link to="/products">View Products</Link>
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
            <a
              href={TEL_HREF}
              className="flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors cursor-pointer"
            >
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-medium hover:underline">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={MAILTO_HREF}
              className="flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors cursor-pointer"
            >
              <Mail className="h-5 w-5 text-accent" />
              <span className="font-medium hover:underline">{EMAIL}</span>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors cursor-pointer"
            >
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium hover:underline">Bavla, Gujarat, India</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Show ${slide.title}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent scale-125' : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
            }`}
          />
        ))}
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
