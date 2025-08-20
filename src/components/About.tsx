import { Award, Users, Zap, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering products that exceed industry standards and customer expectations."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service and reliable solutions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our processes and products through technology and innovation."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Dependable delivery and consistent quality you can count on for your business needs."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">Divine Fabtech</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Divine Fabtech Industries has been a trusted leader in manufacturing premium industrial fabrics 
                  and tarpaulins for over a decade. Based in Gujarat, we have built our reputation on delivering 
                  exceptional quality products that meet the demanding requirements of various industries.
                </p>
                <p>
                  Our specialization in multilayered crosslaminated tarpaulins, raincoat ponchos, and custom 
                  industrial fabric solutions has made us the preferred choice for businesses across India. 
                  We combine traditional craftsmanship with modern technology to ensure every product meets 
                  the highest standards of durability and performance.
                </p>
                <p>
                  From small-scale requirements to large industrial orders, we are committed to providing 
                  tailored solutions that address specific customer needs while maintaining competitive 
                  pricing and timely delivery.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-muted-foreground">Products Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;