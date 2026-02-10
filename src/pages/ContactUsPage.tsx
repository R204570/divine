import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Contact from "@/components/Contact";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl mb-8">
              Ready to discuss your industrial fabric requirements? Contact us today for expert advice 
              and competitive quotes tailored to your needs.
            </p>
            <Link to="/">
              <Button size="lg" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-semibold transition-all shadow-md hover:shadow-lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactUsPage;
