import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_TOPICS, formatPostDate, postsByTopic } from "@/content/blog";

/** The blog index: every buying guide, grouped by product. */
const BlogPage = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          className="mb-8 text-primary-foreground"
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]}
        />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Rain poncho and tarpaulin buying guides</h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
            Practical guides for bulk buyers, from the team that makes our ponchos and tarpaulins at our factory in
            Bavla, Ahmedabad.
          </p>
          <nav aria-label="Guide topics">
            <ul className="flex flex-wrap gap-3">
              {BLOG_TOPICS.map(({ topic, heading }) => (
                <li key={topic}>
                  <a
                    href={`#${topic}`}
                    className="inline-block rounded-full border border-primary-foreground/40 px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>

    {BLOG_TOPICS.map(({ topic, heading }) => (
      <section key={topic} id={topic} className="py-16 scroll-mt-32 even:bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">{heading}</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsByTopic(topic).map((post) => (
              <li key={post.path}>
                <article className="group h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={post.path} className="block aspect-[4/3] overflow-hidden" tabIndex={-1} aria-hidden="true">
                    <img
                      src={post.heroImage.src}
                      alt=""
                      width={post.heroImage.width}
                      height={post.heroImage.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground mb-2">
                      <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                      <Link to={post.path} className="hover:text-primary transition-colors">
                        {post.h1}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                    <Link
                      to={post.path}
                      className="mt-auto inline-flex items-center font-medium text-primary hover:underline"
                    >
                      Read the guide
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ))}

    <p className="pb-16 text-center text-muted-foreground">
      Looking for a quick answer instead?{" "}
      <Link to="/faq" className="text-primary underline underline-offset-2 hover:no-underline">
        Read our FAQs
      </Link>
      .
    </p>
  </div>
);

export default BlogPage;
