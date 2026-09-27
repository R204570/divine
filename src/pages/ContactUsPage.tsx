import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            className="mb-8 text-primary-foreground"
            items={[
              { name: "Home", path: "/" },
              { name: "Contact Us", path: "/contact" },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-accent">Divine Fabtech</span>
            </h1>
            <p className="text-xl">
              Multilayer tarpaulin and poncho raincoat manufacturer in Bavla, Gujarat. Call, WhatsApp or
              send an inquiry for a factory price on your bulk order.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactUsPage;
