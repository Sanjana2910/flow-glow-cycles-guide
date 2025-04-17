
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Empowering Through <span className="text-flowPink-dark">Menstrual</span> & <span className="text-flowPurple-dark">Menopausal</span> Education
          </h1>
          <p className="text-lg text-gray-600 md:pr-12">
            FlowToGlow helps you understand your body better through cycle tracking, education, and community support.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild className="bg-flowPink-dark hover:bg-flowPink-dark/90">
              <Link to="/predictions">Track Your Cycle</Link>
            </Button>
            <Button asChild variant="outline" className="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light">
              <Link to="/myths-facts">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Women supporting each other" 
              className="rounded-2xl shadow-xl animate-float max-w-full h-auto"
            />
            <div className="absolute top-4 right-4 bg-white/80 rounded-full p-4 shadow-md">
              <Book className="text-flowPink-dark w-12 h-12" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/80 rounded-full p-4 shadow-md">
              <Heart className="text-flowPurple-dark w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
