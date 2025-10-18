import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury interior with Elite Interior wall panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/40 mb-6">
            <p className="text-primary text-sm font-medium uppercase tracking-wider">Premium Wall Panels</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Transform Your Space
            <br />
            <span className="text-primary">With Elegance</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover Albania's finest collection of premium wall panels. 
            From sophisticated slat designs to high-gloss finishes, 
            we bring luxury to your interiors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/products">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="elegant" size="lg" className="min-w-[200px]">
                Get Quote
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border/30">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground">Premium Products</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Quality Assured</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
