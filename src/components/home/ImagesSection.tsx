
import { Sparkles, Star } from "lucide-react";

const ImagesSection = () => {
  return (
    <section className="py-16 bg-white px-4 relative overflow-hidden">
      {/* Animated blobs and sparkles */}
      <span className="absolute left-10 bottom-16 w-24 h-24 bg-flowPurple-light blur-3xl opacity-40 animate-float" style={{ animationDuration: "7s", animationDelay: "2.4s" }} aria-hidden="true" />
      <span className="absolute top-20 right-12 w-28 h-28 bg-flowPink-light blur-2xl opacity-50 animate-float" style={{ animationDuration: "5.5s", animationDelay: "3.2s" }} aria-hidden="true" />
      <span className="absolute left-1/4 top-8 w-14 h-14 bg-[#FDE1D3]/60 blur-xl opacity-50 animate-float" style={{ animationDuration: "6.5s", animationDelay: "1.1s" }} aria-hidden="true" />
      {/* Large floating sparkle */}
      <span className="absolute right-24 bottom-24 text-flowPink-dark animate-float" style={{ animationDuration: "7.5s", animationDelay: "1.7s" }}>
        <Star className="w-10 h-10 opacity-70" />
      </span>

      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in">Menstrual & Menopausal Journey</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in">
          Explore visual resources to better understand your body's natural transitions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto relative z-10">
        <ImageCard 
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imageAlt="Woman using resources on laptop"
          title="Digital Learning Resources"
          description="Access our comprehensive online resources at your own pace."
        />
        
        <ImageCard 
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imageAlt="Serene nature scene"
          title="Natural Healing & Wellness"
          description="Discover natural approaches to support your body through transitions."
        />
      </div>
      {/* Extra sparkles at section bottom */}
      <span className="absolute left-10 bottom-12 animate-float" style={{ animationDuration: "10s" }}>
        <Sparkles className="w-12 h-12 text-flowPurple-dark/50" />
      </span>
      <span className="absolute right-20 bottom-5 animate-float" style={{ animationDuration: "9s" }}>
        <Sparkles className="w-12 h-12 text-flowPink-dark/60" />
      </span>
    </section>
  );
};

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ImageCard = ({ imageUrl, imageAlt, title, description }: ImageCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg relative animate-fade-in">
      {/* Floating sparkle for each image card */}
      <span className="absolute top-4 right-4 animate-float pointer-events-none" style={{ animationDuration: "11s" }}>
        <Sparkles className="w-7 h-7 text-white/80" />
      </span>
      <img 
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="bg-white p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ImagesSection;
