import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";

/** Home page strip linking the buying guides and the FAQ page. */
const BuyingGuides = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Rain poncho <span className="text-primary">buying guides</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          How to choose a rain poncho manufacturer in India, Gujarat and Ahmedabad, and what to put in a bulk order.
        </p>
      </div>
      <ul className="grid md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <li key={post.path} className="bg-card border border-border rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
              <Link to={post.path} className="hover:text-primary transition-colors">
                {post.h1}
              </Link>
            </h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">{post.excerpt}</p>
            <Link to={post.path} className="mt-auto inline-flex items-center font-medium text-primary hover:underline">
              Read the guide
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center text-muted-foreground">
        <Link to="/blog" className="text-primary underline underline-offset-2 hover:no-underline">
          All buying guides
        </Link>
        {" · "}
        <Link to="/faq" className="text-primary underline underline-offset-2 hover:no-underline">
          Rain poncho and tarpaulin FAQs
        </Link>
      </p>
    </div>
  </section>
);

export default BuyingGuides;
