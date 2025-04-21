
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
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
          <Home className="w-6 h-6 text-flowPurple-dark" aria-hidden="true" />
          <span className="text-2xl font-bold text-flowPink-dark">
            Flow<span className="text-flowPurple-dark">ToGlow</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="bg-gradient-to-r from-flowPink-dark to-flowPurple-dark bg-clip-text text-transparent font-semibold hover:underline underline-offset-4 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-flowPurple-dark"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-flowPink-dark font-semibold py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

