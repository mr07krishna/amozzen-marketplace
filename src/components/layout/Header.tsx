
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = 0; // Will be replaced with actual cart state

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top nav */}
      <div className="bg-amazon-green py-2 px-4 flex items-center space-x-4 md:space-x-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-white text-2xl font-bold tracking-tight">
            Amozzen
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 items-center">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-l-md rounded-r-none border-amazon-yellow focus:border-amazon-yellow focus:ring-amazon-yellow"
            />
            <Button
              className="absolute right-0 top-0 h-full rounded-l-none bg-amazon-yellow hover:bg-amazon-orange text-black"
              type="submit"
              aria-label="Search"
            >
              <Search size={18} />
            </Button>
          </div>
        </div>

        {/* Navigation icons */}
        <div className="flex items-center space-x-4">
          <Link to="/auth" className="text-white hidden md:flex flex-col items-end">
            <span className="text-xs">Hello, Sign in</span>
            <span className="font-bold text-sm">Account & Lists</span>
          </Link>
          <Link to="/orders" className="text-white hidden md:flex flex-col items-end">
            <span className="text-xs">Returns</span>
            <span className="font-bold text-sm">& Orders</span>
          </Link>
          <Link to="/cart" className="text-white flex items-end relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-amazon-orange text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-amazon-light text-white px-4 py-1 flex items-center space-x-4 text-sm overflow-x-auto">
        <div className="flex items-center cursor-pointer hover:text-amazon-yellow">
          <Menu size={20} className="mr-1" />
          <span>All</span>
        </div>
        <div className="cursor-pointer hover:text-amazon-yellow">Today's Deals</div>
        <div className="cursor-pointer hover:text-amazon-yellow">Customer Service</div>
        <div className="cursor-pointer hover:text-amazon-yellow">Registry</div>
        <div className="cursor-pointer hover:text-amazon-yellow">Gift Cards</div>
        <div className="cursor-pointer hover:text-amazon-yellow">Sell</div>
      </div>
    </header>
  );
};

export default Header;
