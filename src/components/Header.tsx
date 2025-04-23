
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
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-flowPink-dark">Flow<span className="text-flowPurple-dark">ToGlow</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 hover:text-flowPink-dark transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="ml-4 border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden p-2" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-flowPink-dark py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="w-full bg-gradient-to-r from-flowPink-dark to-flowPurple-dark hover:from-flowPink-light hover:to-flowPurple-light"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
