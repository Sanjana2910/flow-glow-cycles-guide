import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Myths vs Facts", path: "/myths-facts" },
    { name: "Cycle Predictions", path: "/predictions" },
    { name: "Diet Chart", path: "/diet-chart" },
    { name: "Menopause Info", path: "/menopause" },
    { name: "For Men", path: "/for-men" },
    { name: "Eco Products", path: "/eco-products" },
    { name: "Mental Health", path: "/mental-health" },
    { name: "About Us", path: "/about" }
  ];

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-md relative z-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-flowPink-dark">Flow<span className="text-flowPurple-dark">ToGlow</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-flowPink-dark transition-colors duration-200 text-sm font-medium px-2 py-1 rounded-md hover:bg-flowPink-light/20"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden p-2 hover:bg-flowPink-light/20" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} className="text-flowPink-dark" /> : <Menu size={24} className="text-flowPink-dark" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-lg animate-fade-in">
            <nav className="container mx-auto py-4 px-4">
              <ul className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-flowPink-dark hover:bg-flowPink-light/20 py-2 px-4 rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
