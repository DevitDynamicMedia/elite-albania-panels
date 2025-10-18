import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

// Import all product images
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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const imageSrc = imageMap[product.image] || slatOak;

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 bg-card hover:shadow-xl hover:shadow-primary/10 h-full">
        <div className="aspect-square overflow-hidden bg-secondary/20">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-5 space-y-3">
          <div className="space-y-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div>
              <p className="text-2xl font-bold text-primary">€{product.price}</p>
              <p className="text-xs text-muted-foreground">Per panel</p>
            </div>
            <div className="text-xs text-muted-foreground text-right">
              <p>{product.specifications.dimensions}</p>
              <p>{product.specifications.thickness}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
