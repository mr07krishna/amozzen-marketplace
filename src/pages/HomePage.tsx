
import MainLayout from "@/components/layout/MainLayout";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { useEffect, useState } from "react";
import CategoryCard from "@/components/products/CategoryCard";
import { Category } from "@/types/product";
import { MOCK_CATEGORIES } from "@/data/mockData";

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with an actual API call in a real application
    const loadCategories = async () => {
      try {
        setIsLoading(true);
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setCategories(MOCK_CATEGORIES);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <MainLayout>
      <HeroCarousel />
      
      {/* Categories Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 animate-pulse h-32 rounded-md"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Products Section */}
      <FeaturedProducts />
      
      {/* Promotions Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600 mb-4">On orders over $50</p>
              <button className="text-amazon hover:underline font-medium">Learn More &rarr;</button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Prime Deals</h3>
              <p className="text-gray-600 mb-4">Exclusive discounts for Prime members</p>
              <button className="text-amazon hover:underline font-medium">Join Prime &rarr;</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-amazon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Sign up for our newsletter</h2>
          <p className="mb-6">Get the latest deals and product recommendations straight to your inbox</p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 py-2 px-4 rounded-l focus:outline-none text-black"
            />
            <button className="bg-amazon-yellow hover:bg-amazon-orange text-black font-bold py-2 px-6 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
