
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-flowPink-dark">Flow<span className="text-flowPurple-dark">ToGlow</span></span>
            </Link>
            <p className="mt-4 text-gray-600">
              Empowering through education and support for menstrual and menopausal health.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/myths-facts" className="text-gray-600 hover:text-flowPink-dark transition">
                  Myths vs Facts
                </Link>
              </li>
              <li>
                <Link to="/predictions" className="text-gray-600 hover:text-flowPink-dark transition">
                  Cycle Predictions
                </Link>
              </li>
              <li>
                <Link to="/diet-chart" className="text-gray-600 hover:text-flowPink-dark transition">
                  Diet Charts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mental-health" className="text-gray-600 hover:text-flowPink-dark transition">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/menopause" className="text-gray-600 hover:text-flowPink-dark transition">
                  Menopause Info
                </Link>
              </li>
              <li>
                <Link to="/for-men" className="text-gray-600 hover:text-flowPink-dark transition">
                  For Men
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-flowPink-dark transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/eco-products" className="text-gray-600 hover:text-flowPink-dark transition">
                  Eco Products
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-flowPink-dark transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FlowToGlow. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-flowPink-dark" /> for better health education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
