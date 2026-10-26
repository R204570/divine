import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import { BLOG_POSTS } from "@/content/blog";
import { FAQ_GROUPS } from "@/content/faq";
import { PHONE_DISPLAY, TEL_HREF, WHATSAPP_HREF } from "@/lib/company";

/** Every common question in one place, grouped by topic; the FAQPage schema comes from seo/pages.ts. */
const FaqPage = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          className="mb-8 text-primary-foreground"
          items={[
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]}
        />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Rain poncho and tarpaulin FAQs</h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
            Straight answers about our rain ponchos, multilayer tarpaulins, bulk orders and delivery.
          </p>
          <nav aria-label="FAQ topics">
            <ul className="flex flex-wrap gap-3">
              {FAQ_GROUPS.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-block rounded-full border border-primary-foreground/40 px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                    {group.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>

    {FAQ_GROUPS.map((group) => (
      <Faq key={group.id} id={group.id} heading={group.heading} items={group.items} />
    ))}

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Still have a question?</h2>
        <p className="text-lg text-muted-foreground mb-8">Call or WhatsApp us, and we will answer it directly.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={TEL_HREF}>
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
        <nav aria-label="Buying guides">
          <h2 className="text-lg font-semibold text-foreground mb-3">Buying guides</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {BLOG_POSTS.map((post) => (
              <li key={post.path}>
                <Link
                  to={post.path}
                  className="inline-block rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {post.breadcrumbName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  </div>
);

export default FaqPage;
