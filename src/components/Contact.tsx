import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  ADDRESS,
  BUSINESS_HOURS,
  EMAIL,
  MAILTO_HREF,
  MAPS_URL,
  PHONE_DISPLAY,
  TEL_HREF,
  WHATSAPP_HREF,
  whatsappHrefWithText,
} from "@/lib/company";
import { trackEvent } from "@/lib/analytics";

interface ContactInfo {
  title: string;
  details: string;
  icon: any;
  action: string | null;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: PHONE_DISPLAY,
      action: TEL_HREF
    },
    {
      icon: Mail,
      title: "Email",
      details: EMAIL,
      action: MAILTO_HREF
    },
    {
      icon: MapPin,
      title: "Location",
      details: ADDRESS,
      action: MAPS_URL
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: BUSINESS_HOURS.label,
      action: null
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = [
        "*Inquiry from Website*",
        "",
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Company: ${formData.company}`,
        `Subject: ${formData.subject}`,
        "",
        "Message:",
        formData.message,
      ].join("\n");

      // Encoded, so "&", "#" or "+" in what the customer typed can't cut the message short.
      window.open(whatsappHrefWithText(message), '_blank', 'noopener,noreferrer');
      trackEvent("generate_lead", { method: "whatsapp_form", page_path: window.location.pathname });

      // Show success message
      toast({
        title: "Message Ready",
        description: "Opening WhatsApp to send your message",
        duration: 3000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your industrial fabric requirements? Contact us today for expert advice
            and competitive quotes tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1 sm:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.action || "#"}
                  target={info.icon === MapPin ? "_blank" : undefined}
                  rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!info.action) {
                      e.preventDefault();
                    }
                  }}
                  className={`block ${info.action ? "cursor-pointer" : ""}`}
                >
                  <Card className="hover:shadow-md transition-all duration-300 group h-full">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="bg-primary/10 p-2 sm:p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{info.title}</h4>
                          <p className="text-muted-foreground text-sm sm:text-base break-words">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <h4 className="font-semibold text-foreground">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white p-3 rounded-lg hover:bg-[#20BD5C] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.16l-4.15 6.67c-.75 1.2-2.4 1.55-3.65.78-.3-.18-.56-.42-.78-.71L6.9 14.05l-.71-1.21 1.38-.8 1.04 1.8 3.84-6.18c.75-1.2 2.4-1.55 3.65-.78 1.25.77 1.6 2.42.83 3.67l-.37.61z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href={TEL_HREF}
                  className="flex items-center gap-3 bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 sm:col-span-2 col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Send Us an Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="h-9 sm:h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="h-9 sm:h-10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 9825148321"
                        className="h-9 sm:h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-foreground">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="h-9 sm:h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What can we help you with?"
                      className="h-9 sm:h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="min-h-[100px] resize-y"
                      placeholder="Please describe your requirements in detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5C] text-white transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      <>
                        <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.16l-4.15 6.67c-.75 1.2-2.4 1.55-3.65.78-.3-.18-.56-.42-.78-.71L6.9 14.05l-.71-1.21 1.38-.8 1.04 1.8 3.84-6.18c.75-1.2 2.4-1.55 3.65-.78 1.25.77 1.6 2.42.83 3.67l-.37.61z" />
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-8 sm:mt-12 lg:mt-16">
            <Card>
              <CardHeader className="space-y-1 sm:space-y-2">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">DIVINE FABTECH INDUSTRIES</h3>
                        <p className="text-sm text-muted-foreground mt-1">Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220</p>
                      </div>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
                      >
                        Get Directions
                      </a>
                    </div>
                    <div className="aspect-[16/9] sm:aspect-[16/7] w-full overflow-hidden rounded-md bg-muted">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=DIVINE+FABTECH+INDUSTRIES+Survey+No+710-711+Village+Rupal+Bavla+Jivapura+Gujarat+382220`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Divine Fabtech Industries Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
