import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  productCount: number;
  image: string;
}

const CategoryCard = ({ name, description, productCount, image }: CategoryCardProps) => {
  return (
    <Link to="/products" state={{ category: name }}>
      <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 bg-card hover:shadow-xl hover:shadow-primary/10">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              {productCount} Products
            </span>
            <ArrowRight className="w-5 h-5 text-primary transform translate-x-0 group-hover:translate-x-2 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
