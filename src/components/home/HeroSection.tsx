
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Heart, Star, Sparkles, CirclePlay } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Colorful Animated Blobs */}
      <span
        className="hidden md:block absolute -top-8 left-6 w-52 h-52 rounded-full bg-flowPurple-light blur-3xl opacity-40 animate-float"
        style={{ animationDuration: "5s", animationDelay: "1.2s" }}
        aria-hidden="true"
      />
      <span
        className="hidden md:block absolute top-24 right-8 w-60 h-60 rounded-full bg-flowPink-light blur-2xl opacity-40 animate-float"
        style={{ animationDuration: "7s" }}
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#FEC6A1]/60 rounded-full blur-2xl opacity-50 animate-float z-0"
        style={{ animationDuration: "6s", animationDelay: "2.5s" }}
        aria-hidden="true"
      />
      {/* Animated Sparkles */}
      <span
        className="absolute left-10 top-20 text-flowPurple-dark opacity-60 animate-float"
        style={{ animationDuration: "8s", animationDelay: "1.1s" }}
        aria-hidden="true"
      >
        <Sparkles className="w-14 h-14" />
      </span>
      <span
        className="absolute right-16 bottom-4 text-flowPink-dark opacity-50 animate-float"
        style={{ animationDuration: "9s", animationDelay: "3s" }}
        aria-hidden="true"
      >
        <Star className="w-10 h-10" />
      </span>
      {/* Floating animated play circle */}
      <span
        className="absolute top-1/2 left-8 -translate-y-1/2 animate-float"
        style={{ animationDuration: "6s", animationDelay: "2.2s" }}
        aria-hidden="true"
      >
        <CirclePlay className="w-11 h-11 text-flowPink-dark/70" />
      </span>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-1/2 space-y-7 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Empowering Through <span className="text-flowPink-dark animate-fade-in" style={{ animationDelay: "0.4s" }}>Menstrual</span> & <span className="text-flowPurple-dark animate-fade-in" style={{ animationDelay: "0.6s" }}>Menopausal</span> Education
          </h1>
          <p className="text-lg text-gray-600 md:pr-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            FlowToGlow helps you understand your body better through cycle tracking, education, and community support.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.85s" }}>
            <Button asChild className="bg-flowPink-dark hover:bg-flowPink-dark/90">
              <Link to="/predictions">Track Your Cycle</Link>
            </Button>
            <Button asChild variant="outline" className="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light">
              <Link to="/myths-facts">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Glowing animated gradient border */}
            <div className="absolute -inset-4 z-0 rounded-3xl bg-gradient-to-tr from-flowPink-dark/70 via-flowPurple-dark/60 to-flowPink-light/80 blur-[3px] opacity-45 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Women supporting each other" 
              className="rounded-2xl shadow-xl animate-float max-w-full h-auto relative z-10"
            />
            <div className="absolute top-4 right-4 bg-white/80 rounded-full p-4 shadow-md animate-float" style={{ animationDuration: "7s" }}>
              <Book className="text-flowPink-dark w-12 h-12" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/80 rounded-full p-4 shadow-md animate-float" style={{ animationDuration: "8s" }}>
              <Heart className="text-flowPurple-dark w-12 h-12" />
            </div>
            {/* Extra sparkle */}
            <div className="absolute top-8 left-10 animate-float" style={{ animationDuration: "10s" }}>
              <Sparkles className="w-8 h-8 text-flowPurple-light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
