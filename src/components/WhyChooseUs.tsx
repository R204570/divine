import { CheckCircle, Clock, Shield, Truck, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Quality",
      description: "Every product undergoes rigorous quality testing to ensure it meets our high standards and your expectations.",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick production and delivery times without compromising on quality. We understand your business needs.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Durable Products",
      description: "Our multilayered crosslaminated technology ensures superior durability and long-lasting performance.",
      color: "text-purple-600"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Pan-India delivery network with tracking and timely delivery commitments you can depend on.",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated customer support team with technical expertise to help you choose the right solutions.",
      color: "text-indigo-600"
    },
    {
      icon: Award,
      title: "Competitive Pricing",
      description: "Best value for money with transparent pricing and no hidden costs. Quality shouldn't break the bank.",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Divine Fabtech</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience and hundreds of satisfied customers, 
            we are your trusted partner for premium industrial fabric solutions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-lg p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className={`h-8 w-8 text-primary`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join hundreds of satisfied customers who trust Divine Fabtech for their industrial fabric needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Get Your Quote Today
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
                Call 9825148321
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;