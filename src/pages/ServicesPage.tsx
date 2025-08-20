import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Settings, Cog, Wrench, Hammer, Building2 } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "Custom Fabric Manufacturing",
      description: "Tailored fabric solutions designed to meet your specific industrial requirements.",
      features: ["Custom specifications", "Quality assurance", "Timely delivery", "Expert consultation"]
    },
    {
      icon: <Cog className="h-12 w-12 text-accent" />,
      title: "Technical Consulting",
      description: "Expert guidance on fabric selection and application for industrial use cases.",
      features: ["Material analysis", "Performance testing", "Application guidance", "Cost optimization"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent" />,
      title: "Installation Support",
      description: "Professional installation and maintenance services for industrial fabric applications.",
      features: ["On-site installation", "Training programs", "Maintenance support", "Emergency repairs"]
    },
    {
      icon: <Hammer className="h-12 w-12 text-accent" />,
      title: "Quality Testing",
      description: "Comprehensive testing services to ensure fabric performance and durability.",
      features: ["Strength testing", "Chemical resistance", "Temperature analysis", "Compliance verification"]
    },
    {
      icon: <Building2 className="h-12 w-12 text-accent" />,
      title: "Project Management",
      description: "End-to-end project management for large-scale industrial fabric installations.",
      features: ["Project planning", "Timeline management", "Resource allocation", "Quality control"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Comprehensive industrial fabric solutions from design to deployment
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Contact us today to discuss your industrial fabric needs and discover how we can help your business.
          </p>
          <Button size="lg" className="animate-bounce-in bg-accent hover:bg-accent/90 text-accent-foreground">
            Request Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;