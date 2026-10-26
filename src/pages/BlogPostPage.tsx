import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import RichText from "@/components/RichText";
import { formatPostDate, type BlogPost } from "@/content/blog";
import { COMPANY_NAME, PHONE_DISPLAY, TEL_HREF, whatsappHrefWithText } from "@/lib/company";

/** One buying guide from content/blog.ts. */
const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const whatsappHref = whatsappHrefWithText("Hi, I'd like a price for rain ponchos (bulk order).");

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            className="mb-8 text-primary-foreground"
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.breadcrumbName, path: post.path },
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.h1}</h1>
          <p className="text-primary-foreground/80">
            By {COMPANY_NAME} · <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <img
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          width={post.heroImage.width}
          height={post.heroImage.height}
          className="w-full max-h-[420px] object-cover rounded-lg shadow-md mb-10"
        />

        {post.intro.map((paragraph) => (
          <p key={paragraph} className="text-lg text-foreground leading-relaxed mb-5">
            <RichText text={paragraph} />
          </p>
        ))}

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.heading}</h2>
            {section.bullets && (
              <ul className="space-y-3 mb-5">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-muted-foreground text-lg leading-relaxed">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span>
                      <RichText text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground text-lg leading-relaxed mb-5">
                <RichText text={paragraph} />
              </p>
            ))}
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

        <aside className="mt-14 rounded-lg border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get a factory price for your bulk order</h2>
          <p className="text-muted-foreground mb-6">
            Tell us the quantity, colours, weight and sizes you need, and whether you want the matching pant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link to="/inquiry?product=poncho">Send an Inquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
        </aside>

        <nav aria-label="Related pages" className="mt-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Related</h2>
          <ul className="flex flex-wrap gap-3">
            {post.related.map((link) => (
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
      </article>
    </div>
  );
};

export default BlogPostPage;
