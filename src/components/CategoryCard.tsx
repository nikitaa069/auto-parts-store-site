import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard = ({ id, name, image, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/catalog/${id}`}>
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300 group">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="mb-4 overflow-hidden rounded-md">
            <img 
              src={image || "/placeholder.svg"} 
              alt={name}
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-medium text-lg mb-1 group-hover:text-autoparts transition-colors">{name}</h3>
            <p className="text-sm text-muted-foreground">{productCount} товаров</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;