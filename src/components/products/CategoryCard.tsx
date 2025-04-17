
import { Category } from "@/types/product";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.id}`}>
      <div className="bg-white border rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200 p-4">
        <div className="h-32 overflow-hidden mb-3">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-center text-md font-medium">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
