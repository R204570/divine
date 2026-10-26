import { Link } from "react-router-dom";
import { BLOG_TOPICS, postsByTopic } from "@/content/blog";

/** Home page strip linking every buying guide, by product, and the FAQ page. */
const BuyingGuides = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Rain poncho and tarpaulin <span className="text-primary">buying guides</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          How to choose a manufacturer in India, Gujarat and Ahmedabad, which grade to order, and how to use and look
          after what you buy.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {BLOG_TOPICS.map(({ topic, heading }) => (
          <div key={topic} className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">{heading}</h3>
            <ul className="space-y-2">
              {postsByTopic(topic).map((post) => (
                <li key={post.path}>
                  <Link to={post.path} className="text-primary hover:underline leading-snug">
                    {post.breadcrumbName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
