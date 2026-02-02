import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const navigate = useNavigate();

  const ponchImages = [
    { id: 1, title: "All Colors", image: "/Images/Poncho/all.jpeg" },
    { id: 2, title: "Blue", image: "/Images/Poncho/blue.jpeg" },
    { id: 3, title: "Green", image: "/Images/Poncho/green.jpg" },
    { id: 4, title: "Purple", image: "/Images/Poncho/purple.jpeg" },
    { id: 5, title: "Transparent", image: "/Images/Poncho/transparent.jpeg" },
    { id: 6, title: "Yellow", image: "/Images/Poncho/yellow.jpg" }
  ];

  const tarpaulineImages = [
    { id: 7, title: "Multilayer", image: "/Images/Tarpauline/Multilayer Tarpauline.jpeg" },
    { id: 8, title: "Cover", image: "/Images/Tarpauline/cover.jpeg" },
    { id: 9, title: "Cover 2", image: "/Images/Tarpauline/cover1.jpeg" },
    { id: 10, title: "Rolls", image: "/Images/Tarpauline/rolls.jpeg" },
    { id: 11, title: "Water Protection", image: "/Images/Tarpauline/Tarp-water.jpeg" },
    { id: 12, title: "Water Protection 2", image: "/Images/Tarpauline/Tarp-water1.jpeg" },
    { id: 13, title: "Tarp 1", image: "/Images/Tarpauline/Tarp1.jpeg" },
    { id: 14, title: "Tarp 2", image: "/Images/Tarpauline/Tarp2.jpeg" },
    { id: 15, title: "Tarp 3", image: "/Images/Tarpauline/Tarp3.jpeg" },
    { id: 16, title: "Yellow", image: "/Images/Tarpauline/waterproof-plastic-tarpaulin-yellow.jpeg" },
    { id: 17, title: "Multilayer 2", image: "/Images/Tarpauline/Multilayer 2.jpg" }
  ];

  const GalleryImage = ({ image, title, onClick }: { image: string; title: string; onClick: () => void }) => (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group h-64 sm:h-72"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop";
        }}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          View Product
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Product Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete range of Poncho Raincoats and Multilayer Tarpaulines. Click on any image to explore the full product details.
          </p>
        </div>

        {/* Poncho Section */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Poncho Raincoats</h2>
            <p className="text-muted-foreground">Premium quality raincoats available in multiple colors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ponchImages.map((item) => (
              <GalleryImage
                key={item.id}
                image={item.image}
                title={item.title}
                onClick={() => navigate("/products/poncho")}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-border"></div>

        {/* Tarpauline Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Multilayer Tarpauline</h2>
            <p className="text-muted-foreground">Heavy-duty waterproof tarpaulins for industrial and personal use</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tarpaulineImages.map((item) => (
              <GalleryImage
                key={item.id}
                image={item.image}
                title={item.title}
                onClick={() => navigate("/products/tarpaulins")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;