
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "@/types/product";
import MainLayout from "@/components/layout/MainLayout";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { Star, ChevronRight, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // This would be replaced with an actual API call in a real application
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        const foundProduct = MOCK_PRODUCTS.find(p => p.id === id) || null;
        setProduct(foundProduct);
        if (foundProduct) {
          setSelectedImage(foundProduct.thumbnail);
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-100 animate-pulse h-96 rounded-md" />
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 animate-pulse h-20 rounded-md"
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 animate-pulse h-8 w-3/4 rounded mb-4" />
              <div className="bg-gray-100 animate-pulse h-6 w-1/4 rounded mb-6" />
              <div className="bg-gray-100 animate-pulse h-4 w-full rounded mb-2" />
              <div className="bg-gray-100 animate-pulse h-4 w-full rounded mb-2" />
              <div className="bg-gray-100 animate-pulse h-4 w-3/4 rounded mb-6" />
              <div className="bg-gray-100 animate-pulse h-10 w-full rounded mb-4" />
              <div className="bg-gray-100 animate-pulse h-10 w-full rounded" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild>
            <a href="/products">Continue Shopping</a>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : product.price;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-amazon-orange">Home</a>
          <ChevronRight size={16} className="mx-1" />
          <a href="/products" className="hover:text-amazon-orange">Products</a>
          <ChevronRight size={16} className="mx-1" />
          <a href={`/category/${product.category}`} className="hover:text-amazon-orange">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </a>
          <ChevronRight size={16} className="mx-1" />
          <span className="text-gray-900">{product.title}</span>
        </div>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="mb-4 border rounded-md overflow-hidden h-96">
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`border rounded-md overflow-hidden cursor-pointer h-20 ${
                    selectedImage === image ? "border-amazon-orange" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating} stars</span>
            </div>
            
            <div className="mb-4">
              {product.discountPercentage ? (
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                  <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                    {product.discountPercentage.toFixed(0)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Stock info */}
            <div className="mb-4">
              {product.stock > 0 ? (
                <p className="text-green-600">
                  In Stock - {product.stock} available
                </p>
              ) : (
                <p className="text-red-600">Out of Stock</p>
              )}
            </div>
            
            {/* Quantity selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4">Quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="mx-4">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={increaseQuantity}
                  disabled={product.stock <= quantity}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black">
                Add to Cart
              </Button>
              <Button className="w-full" variant="outline">Add to Wishlist</Button>
            </div>
            
            {/* Delivery and returns info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <Truck size={20} className="mr-2 flex-shrink-0 text-gray-500" />
                <div>
                  <p className="font-medium">Free delivery</p>
                  <p className="text-sm text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield size={20} className="mr-2 flex-shrink-0 text-gray-500" />
                <div>
                  <p className="font-medium">2 Year Warranty</p>
                  <p className="text-sm text-gray-500">Full coverage for peace of mind</p>
                </div>
              </div>
              <div className="flex items-start">
                <RotateCcw size={20} className="mr-2 flex-shrink-0 text-gray-500" />
                <div>
                  <p className="font-medium">30 Day Returns</p>
                  <p className="text-sm text-gray-500">Hassle free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b mb-0">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <ul>
                  <li>High-quality materials</li>
                  <li>Durable construction</li>
                  <li>Versatile use cases</li>
                  <li>Modern design aesthetics</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-1 text-gray-500">Brand</td>
                        <td>{product.brand}</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">Category</td>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">Stock</td>
                        <td>{product.stock}</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">Rating</td>
                        <td>{product.rating} / 5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-medium mb-2">Additional Information</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-1 text-gray-500">Weight</td>
                        <td>0.5 kg</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">Dimensions</td>
                        <td>10 × 10 × 5 cm</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">Materials</td>
                        <td>Aluminum, Plastic</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">Warranty</td>
                        <td>2 Years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 5 ? "currentColor" : "none"}
                          className={i < 5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Great product!</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">By John D. - March 15, 2025</p>
                  <p className="text-gray-700">
                    This product exceeded my expectations. The quality is excellent and it was delivered quickly. Very happy with my purchase!
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 4 ? "currentColor" : "none"}
                          className={i < 4 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Good value for money</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">By Sarah M. - February 28, 2025</p>
                  <p className="text-gray-700">
                    Solid product for the price. Shipping was fast and the item was exactly as described.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;
