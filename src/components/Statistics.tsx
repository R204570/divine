import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Users, 
  Clock, 
  Globe, 
  Truck, 
  Shield,
  Factory,
  Award,
  TrendingUp,
  Heart
} from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: <Trophy className="h-8 w-8 text-accent" />,
      number: "25+",
      label: "Years Experience",
      description: "Leading the industry since 1999"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      number: "500+",
      label: "Happy Clients",
      description: "Across India and globally"
    },
    {
      icon: <Factory className="h-8 w-8 text-accent" />,
      number: "10,000+",
      label: "Products Delivered",
      description: "High-quality industrial fabrics"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      number: "99.8%",
      label: "On-Time Delivery",
      description: "Reliable supply chain"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "ISO 9001:2015 Certified",
      description: "Quality management excellence"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "CE Marked Products",
      description: "European safety standards"
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Export Quality",
      description: "International market approved"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      title: "Industry Leader",
      description: "Top 3 in filter media manufacturing"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "Customer First",
      description: "Every decision is made with our customers' success in mind"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Quality Assurance",
      description: "Rigorous testing ensures superior product performance"
    },
    {
      icon: <Truck className="h-6 w-6 text-accent" />,
      title: "Reliable Delivery",
      description: "On-time delivery is our commitment to your operations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Statistics Grid */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Numbers That Speak</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record of excellence in industrial fabric manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-2xl transition-all duration-500 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Certifications & Achievements</h3>
            <p className="text-lg text-muted-foreground">
              Recognized excellence in quality and safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Divine Fabtech Industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 animate-slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-bounce-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Excellence?</h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Join hundreds of satisfied clients who trust Divine Fabtech for their industrial fabric needs.
              </p>
              <Button size="lg" variant="secondary" className="animate-glow">
                Get Your Quote Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;