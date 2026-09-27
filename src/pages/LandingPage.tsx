import { Link } from "react-router-dom";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import type { LandingPageContent } from "@/content/landing-pages";
import { PHONE_DISPLAY, TEL_HREF, whatsappHrefWithText } from "@/lib/company";

/** Shared layout for the keyword landing pages in content/landing-pages.ts. */
const LandingPage = ({ content }: { content: LandingPageContent }) => {
  const { product } = content;
  const whatsappHref = whatsappHrefWithText(`Hi, I'd like the best price for ${product.name.toLowerCase()} (bulk order).`);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            className="mb-8 text-primary-foreground"
            items={[
              { name: "Home", path: "/" },
              { name: content.breadcrumbName, path: content.path },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-3">{content.eyebrow}</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{content.h1}</h1>
              {content.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg text-primary-foreground/90 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold">
                  <Link to={`/inquiry?product=${product.id}`}>Get Best Price</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 font-semibold"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              width={content.heroImage.width}
              height={content.heroImage.height}
              className="w-full max-h-[420px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 font-medium text-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16 max-w-5xl">
        {content.sections.map((section) => (
          <section key={section.heading} className={section.image ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted-foreground text-lg">
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                width={section.image.width}
                height={section.image.height}
                loading="lazy"
                decoding="async"
                className="w-full max-h-[360px] object-cover rounded-lg shadow-md"
              />
            )}
          </section>
        ))}

        {/* Specifications */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{product.name} specifications</h2>
          <dl className="divide-y divide-border border border-border rounded-lg bg-card">
            {Object.entries(product.specifications).map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-4 px-5 py-3">
                <dt className="font-medium text-foreground">{label}</dt>
                <dd className="col-span-2 text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Photos */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.gallery.map((image) => (
              <Link key={image.src} to={product.path} className="block overflow-hidden rounded-lg group">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Faq items={content.faq} />

      {/* Call to action + related pages */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get a factory price for your bulk order</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us what you need and we will quote you directly, no middleman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to={`/inquiry?product=${product.id}`}>Send an Inquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={TEL_HREF}>
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <nav aria-label="Related pages">
            <h2 className="text-lg font-semibold text-foreground mb-3">Related</h2>
            <ul className="flex flex-wrap justify-center gap-3">
              {content.related.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-block rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
