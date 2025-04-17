
import { Product } from "@/types/product";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    thumbnail,
    stock,
  } = product;

  const discountedPrice = discountPercentage
    ? price - (price * discountPercentage) / 100
    : price;

  return (
    <div className="bg-white border rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link to={`/product/${id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-amazon-orange transition-colors">{title}</h3>
        </Link>
        
        <div className="mt-2 flex items-center">
          <div className="flex items-center text-yellow-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({rating})</span>
        </div>

        <div className="mt-2">
          {discountPercentage ? (
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold">${discountedPrice.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                {discountPercentage.toFixed(0)}% off
              </Badge>
            </div>
          ) : (
            <span className="text-xl font-semibold">${price.toFixed(2)}</span>
          )}
        </div>

        {stock <= 5 && stock > 0 && (
          <p className="text-sm text-red-600 mt-1">Only {stock} left in stock!</p>
        )}

        <Button 
          className="mt-3 w-full bg-amazon-yellow hover:bg-amazon-orange text-black"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
