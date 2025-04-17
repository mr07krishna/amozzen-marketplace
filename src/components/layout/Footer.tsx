
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amazon text-white mt-auto">
      <div className="container mx-auto pt-10 pb-6">
        {/* Back to top button */}
        <div className="bg-amazon-light py-3 text-center cursor-pointer hover:bg-gray-700 mb-6">
          <a href="#top" className="text-white text-sm">
            Back to top
          </a>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 mb-8">
          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-amazon-yellow">Careers</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Blog</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">About Amozzen</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Investor Relations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-amazon-yellow">Sell products on Amozzen</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Sell apps on Amozzen</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Become an Affiliate</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Advertise Your Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Payment Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-amazon-yellow">Amozzen Business Card</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Shop with Points</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Reload Your Balance</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Currency Converter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-amazon-yellow">Your Account</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Your Orders</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Shipping Rates & Policies</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Returns & Replacements</Link></li>
              <li><Link to="#" className="hover:text-amazon-yellow">Help</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Amozzen Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
