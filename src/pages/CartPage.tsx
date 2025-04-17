
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Product } from "@/types/product";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItem {
  product: Product;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with actual cart data from state management or local storage
    const loadCart = async () => {
      try {
        setIsLoading(true);
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        // For demo purpose, let's add a few random products to the cart
        const sampleCart: CartItem[] = [
          { product: MOCK_PRODUCTS[0], quantity: 1 },
          { product: MOCK_PRODUCTS[3], quantity: 2 },
        ];
        setCartItems(sampleCart);
      } catch (error) {
        console.error("Error loading cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === id 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.discountPercentage 
        ? item.product.price * (1 - item.product.discountPercentage / 100)
        : item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + shipping + tax;

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="bg-gray-100 animate-pulse h-32 rounded-md mb-4" />
              ))}
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-100 animate-pulse h-64 rounded-md" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="bg-amazon-yellow hover:bg-amazon-orange text-black">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border">
                <div className="p-4 border-b">
                  <h2 className="font-medium">Cart Items ({cartItems.length})</h2>
                </div>
                
                <div>
                  {cartItems.map((item) => {
                    const { product, quantity } = item;
                    const itemPrice = product.discountPercentage 
                      ? product.price * (1 - product.discountPercentage / 100)
                      : product.price;
                    
                    return (
                      <div 
                        key={product.id} 
                        className="p-4 border-b last:border-b-0 flex flex-col sm:flex-row gap-4"
                      >
                        {/* Product Image */}
                        <div className="w-full sm:w-24 h-24">
                          <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1">
                          <Link to={`/product/${product.id}`} className="font-medium hover:text-amazon-orange">
                            {product.title}
                          </Link>
                          
                          {product.stock <= 5 && (
                            <p className="text-xs text-red-600 mt-1">Only {product.stock} left in stock!</p>
                          )}
                          
                          <div className="mt-2 flex flex-wrap gap-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                disabled={quantity <= 1}
                              >
                                <Minus size={14} />
                              </Button>
                              <span className="mx-3 w-6 text-center">{quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                disabled={quantity >= product.stock}
                              >
                                <Plus size={14} />
                              </Button>
                            </div>
                            
                            {/* Remove Button */}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-600 hover:text-red-800 hover:bg-red-50 h-8 px-2"
                              onClick={() => removeItem(product.id)}
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="w-full sm:w-auto text-right">
                          <div className="font-medium">${(itemPrice * quantity).toFixed(2)}</div>
                          {product.discountPercentage && (
                            <div className="text-sm text-gray-500 line-through">
                              ${(product.price * quantity).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border p-4">
                <h2 className="font-medium text-lg mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <span>${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t pt-2 mb-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-green-600 mt-1">✓ Your order qualifies for FREE Shipping</p>
                  )}
                </div>
                
                <Button className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black mb-2">
                  Proceed to Checkout
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  By placing your order, you agree to Amozzen's privacy policy and terms of use.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
