import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "filter", label: "Filter Fabrics" },
    { id: "conveyor", label: "Conveyor Belts" },
    { id: "protective", label: "Protective Gear" },
    { id: "specialized", label: "Specialized Fabrics" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "High-Temperature Filter Fabric",
      category: "filter",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      description: "Advanced PTFE membrane filter fabric for extreme temperatures"
    },
    {
      id: 2,
      title: "Industrial Conveyor Belt",
      category: "conveyor",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      description: "Heavy-duty conveyor belt for mining operations"
    },
    {
      id: 3,
      title: "Chemical Resistant Fabric",
      category: "protective",
      image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&h=400&fit=crop",
      description: "Multi-layer protective fabric for chemical processing"
    },
    {
      id: 4,
      title: "Anti-Static Filter Media",
      category: "filter",
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&h=400&fit=crop",
      description: "Conductive filter fabric for explosive environments"
    },
    {
      id: 5,
      title: "Food Grade Conveyor",
      category: "conveyor",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
      description: "FDA approved conveyor belting for food processing"
    },
    {
      id: 6,
      title: "Thermal Insulation Fabric",
      category: "specialized",
      image: "https://images.unsplash.com/photo-1581092918484-8313bda9b3b9?w=600&h=400&fit=crop",
      description: "Advanced thermal barrier material for aerospace"
    },
    {
      id: 7,
      title: "Oil Resistance Fabric",
      category: "protective",
      image: "https://images.unsplash.com/photo-1572297853811-41956ce3e085?w=600&h=400&fit=crop",
      description: "Specialized fabric for oil and gas industry applications"
    },
    {
      id: 8,
      title: "Dust Collection Filter",
      category: "filter",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "High-efficiency particulate filter for dust collection"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Explore our comprehensive range of industrial fabric solutions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="capitalize">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Our team can develop custom fabric solutions tailored to your specific requirements.
          </p>
          <Button size="lg" variant="secondary" className="animate-glow">
            Discuss Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;