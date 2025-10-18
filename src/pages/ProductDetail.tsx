import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ArrowLeft, CheckCircle } from "lucide-react";
import slatOak from "@/assets/products/slat-oak.jpg";
import highGlossWhite from "@/assets/products/high-gloss-white.jpg";
import softTouchBlack from "@/assets/products/soft-touch-black.jpg";
import technoMattGray from "@/assets/products/techno-matt-gray.jpg";

const imageMap: Record<string, string> = {
  "slat-oak": slatOak,
  "high-gloss-white": highGlossWhite,
  "soft-touch-black": softTouchBlack,
  "techno-matt-gray": technoMattGray,
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="hero">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const imageSrc = imageMap[product.image] || slatOak;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/20 border border-border shadow-2xl">
                <img
                  src={imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-4">
                  <p className="text-5xl font-bold text-primary">€{product.price}</p>
                  <p className="text-lg text-muted-foreground">per panel</p>
                </div>
              </div>

              <div className="prose prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="space-y-4 p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Dimensions</p>
                    <p className="text-base font-semibold text-foreground">{product.specifications.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Thickness</p>
                    <p className="text-base font-semibold text-foreground">{product.specifications.thickness}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Finish</p>
                    <p className="text-base font-semibold text-foreground">{product.specifications.finish}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Material</p>
                    <p className="text-base font-semibold text-foreground">{product.specifications.material}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="flex-1">
                  <Button variant="hero" size="lg" className="w-full">
                    Request Quote
                  </Button>
                </Link>
                <Button variant="elegant" size="lg" className="flex-1">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
