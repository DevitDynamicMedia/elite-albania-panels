import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import slatOak from "@/assets/products/slat-oak.jpg";
import highGlossWhite from "@/assets/products/high-gloss-white.jpg";
import softTouchBlack from "@/assets/products/soft-touch-black.jpg";
import technoMattGray from "@/assets/products/techno-matt-gray.jpg";

const Index = () => {
  const categoryImages = [slatOak, highGlossWhite, softTouchBlack, technoMattGray];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Shop by <span className="text-primary">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections of premium wall panels, each designed to transform your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                description={category.description}
                productCount={category.productCount}
                image={categoryImages[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully selected materials ensuring durability and elegance for your interiors
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored designs to match your unique vision and space requirements
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery across Albania with professional installation support
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
