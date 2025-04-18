import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand: string;
  code: string;
  inStock: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  image,
  brand,
  code,
  inStock
}: ProductProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="relative pt-4 px-4">
        {oldPrice && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs py-1 px-2 rounded">
            Скидка {Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </span>
        )}
        <button 
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Добавить в избранное"
        >
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
        <div className="h-48 flex items-center justify-center overflow-hidden mb-4">
          <img
            src={image || "/placeholder.svg"} 
            alt={name}
            className="object-contain h-full w-full transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground mb-1">{brand}</div>
        <h3 className="text-base font-medium line-clamp-2 mb-2">{name}</h3>
        <div className="text-xs text-muted-foreground mb-3">Артикул: {code}</div>
        <div className="text-sm mb-2">
          {inStock ? (
            <span className="text-green-600 font-medium">В наличии</span>
          ) : (
            <span className="text-orange-500 font-medium">Под заказ</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-shrink-0 flex flex-col">
        <div className="flex justify-between items-center w-full mb-3">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {oldPrice.toLocaleString()} ₽
              </span>
            )}
            <span className="text-lg font-bold text-autoparts">
              {price.toLocaleString()} ₽
            </span>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="rounded-full p-0 w-9 h-9"
            aria-label="Добавить в корзину"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full" variant="default">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;