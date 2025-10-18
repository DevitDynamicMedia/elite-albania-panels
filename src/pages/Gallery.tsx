import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import slatOak from "@/assets/products/slat-oak.jpg";
import highGlossWhite from "@/assets/products/high-gloss-white.jpg";
import softTouchBlack from "@/assets/products/soft-touch-black.jpg";
import technoMattGray from "@/assets/products/techno-matt-gray.jpg";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    { src: heroImage, title: "Modern Living Room", category: "Residential" },
    { src: slatOak, title: "Oak Slat Installation", category: "Commercial" },
    { src: highGlossWhite, title: "High Gloss Kitchen", category: "Residential" },
    { src: softTouchBlack, title: "Soft Touch Office", category: "Commercial" },
    { src: technoMattGray, title: "Contemporary Bedroom", category: "Residential" },
    { src: heroImage, title: "Luxury Interior", category: "Residential" },
    { src: slatOak, title: "Restaurant Design", category: "Commercial" },
    { src: highGlossWhite, title: "Minimalist Space", category: "Residential" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Project <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our completed projects and see how Elite Interior wall panels 
            transform spaces across Albania.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                      {image.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform <span className="text-primary">Your Space?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with our premium wall panels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="px-10 py-3 bg-primary text-primary-foreground rounded-md font-semibold uppercase tracking-wider shadow-[0_0_30px_hsl(40_45%_60%/0.3)] hover:shadow-[0_0_40px_hsl(40_45%_60%/0.5)] transition-all">
                Contact Us
              </button>
            </a>
            <a href="/products">
              <button className="px-10 py-3 border-2 border-primary bg-transparent text-foreground rounded-md font-medium hover:bg-primary/10 hover:border-primary/80 backdrop-blur-sm transition-all">
                View Products
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
