import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Industrial Filter Fabrics: Innovations in PTFE Technology",
    excerpt: "Explore the latest advancements in PTFE membrane technology and how it's revolutionizing industrial filtration across various sectors.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
    author: "Dr. Rajesh Kumar",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Technology"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Sustainable Manufacturing Practices in Textile Industry",
      excerpt: "How Divine Fabtech is leading the way in eco-friendly industrial fabric production.",
      image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&h=400&fit=crop",
      author: "Priya Sharma",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Chemical Resistance in Industrial Fabrics: A Complete Guide",
      excerpt: "Understanding chemical resistance properties and selecting the right fabric for harsh environments.",
      image: "https://images.unsplash.com/photo-1572297853811-41956ce3e085?w=600&h=400&fit=crop",
      author: "Amit Patel",
      date: "January 5, 2024",
      readTime: "10 min read",
      category: "Technical"
    },
    {
      id: 4,
      title: "Quality Control Standards in Filter Media Manufacturing",
      excerpt: "The rigorous testing procedures that ensure our filter media meets international standards.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      author: "Sneha Desai",
      date: "December 28, 2023",
      readTime: "7 min read",
      category: "Quality"
    },
    {
      id: 5,
      title: "Conveyor Belt Maintenance: Best Practices for Longevity",
      excerpt: "Essential maintenance tips to extend the life of your industrial conveyor systems.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      author: "Vikram Singh",
      date: "December 20, 2023",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 6,
      title: "Market Trends in Industrial Filtration: 2024 Outlook",
      excerpt: "Key trends shaping the industrial filtration market and what to expect in the coming year.",
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&h=400&fit=crop",
      author: "Anita Roy",
      date: "December 15, 2023",
      readTime: "9 min read",
      category: "Market Analysis"
    },
    {
      id: 7,
      title: "Safety Standards in Industrial Fabric Applications",
      excerpt: "Comprehensive overview of safety regulations and compliance requirements for industrial fabrics.",
      image: "https://images.unsplash.com/photo-1581092918484-8313bda9b3b9?w=600&h=400&fit=crop",
      author: "Ravi Gupta",
      date: "December 10, 2023",
      readTime: "8 min read",
      category: "Safety"
    }
  ];

  const categories = ["All", "Technology", "Sustainability", "Technical", "Quality", "Maintenance", "Market Analysis", "Safety"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry Insights & News
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Stay updated with the latest trends, technologies, and innovations in industrial fabrics
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge variant="secondary" className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="group/btn">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 animate-fade-in">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                      Read More 
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Subscribe to our newsletter for the latest industry insights and company updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4 animate-bounce-in">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-foreground"
            />
            <Button variant="secondary" className="animate-glow">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;