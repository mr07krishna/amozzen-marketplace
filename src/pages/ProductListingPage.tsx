
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/products/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { ChevronDown, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const ProductListingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // This would be replaced with an actual API call in a real application
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setProducts(MOCK_PRODUCTS);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sortedProducts = [...products];

    switch (value) {
      case "price_asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting logic or no sorting
        break;
    }

    setProducts(sortedProducts);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Filters - Mobile Toggle */}
          <div className="w-full md:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex justify-between items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className="flex items-center">
                <Sliders className="mr-2 h-4 w-4" />
                Filters
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Filters Sidebar */}
          <div 
            className={`w-full md:w-64 md:block ${showFilters ? 'block' : 'hidden'}`}
          >
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="category">
                  <AccordionTrigger className="text-sm font-medium py-2">Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="electronics" />
                        <label htmlFor="electronics" className="text-sm">Electronics</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fashion" />
                        <label htmlFor="fashion" className="text-sm">Fashion</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="home" />
                        <label htmlFor="home" className="text-sm">Home & Kitchen</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="books" />
                        <label htmlFor="books" className="text-sm">Books</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="price">
                  <AccordionTrigger className="text-sm font-medium py-2">Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 2500]}
                        max={3000}
                        step={50}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="brand">
                  <AccordionTrigger className="text-sm font-medium py-2">Brand</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="apple" />
                        <label htmlFor="apple" className="text-sm">Apple</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="samsung" />
                        <label htmlFor="samsung" className="text-sm">Samsung</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sony" />
                        <label htmlFor="sony" className="text-sm">Sony</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="nike" />
                        <label htmlFor="nike" className="text-sm">Nike</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rating">
                  <AccordionTrigger className="text-sm font-medium py-2">Customer Rating</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="4stars" />
                        <label htmlFor="4stars" className="text-sm">4★ & above</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="3stars" />
                        <label htmlFor="3stars" className="text-sm">3★ & above</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="2stars" />
                        <label htmlFor="2stars" className="text-sm">2★ & above</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-4">
                <Button variant="outline" className="w-full">Clear Filters</Button>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and results count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-600">{products.length} results</p>
              </div>
              <div className="w-full sm:w-auto">
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price_asc">Price: Low to High</SelectItem>
                    <SelectItem value="price_desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Avg. Customer Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Products grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 animate-pulse h-80 rounded-md"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductListingPage;
