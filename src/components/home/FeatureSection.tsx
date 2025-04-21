
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";

const featureCardAccents = [
  {
    style: "absolute -top-8 left-2 w-16 h-16 bg-flowPurple-light blur-2xl opacity-30 animate-float",
    duration: "7s",
    delay: "0.2s",
  },
  {
    style: "absolute bottom-4 right-5 w-10 h-10 bg-flowPink-light/70 blur-xl opacity-60 animate-float",
    duration: "5s",
    delay: "2s",
  },
  {
    style: "absolute -top-10 right-6 w-12 h-12 bg-[#FEF7CD]/70 blur-xl opacity-80 animate-float",
    duration: "8s",
    delay: "1.1s",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white px-4 relative overflow-hidden">
      {/* Section headline sparkles */}
      <span className="absolute left-12 top-12 text-flowPink-dark opacity-60 pointer-events-none animate-float"
        style={{ animationDuration: "4.6s", animationDelay: "1.7s" }}>
        <Sparkles className="w-11 h-11" />
      </span>
      <span className="absolute right-20 top-24 text-flowPurple-dark opacity-60 pointer-events-none animate-float"
        style={{ animationDuration: "6.3s", animationDelay: "2.2s" }}>
        <Star className="w-8 h-8" />
      </span>
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">How FlowToGlow Helps You</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in">
          We provide comprehensive resources and tools to help you navigate your menstrual and menopausal journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto relative z-10">
        {[0, 1, 2].map((i) => (
          <div className="relative" key={i}>
            {/* Colorful floating accents unique by card */}
            {featureCardAccents.map((accent, j) => (
              <span
                key={j}
                className={accent.style}
                style={{
                  animationDuration: accent.duration,
                  animationDelay: `${parseFloat(accent.delay) + i * 0.4}s`,
                }}
                aria-hidden="true"
              />
            ))}
            {/* Sparkle overlay */}
            <span className="absolute right-2 top-2 animate-float pointer-events-none" style={{ animationDuration: "10s" }}>
              <Sparkles className="w-5 h-5 text-white/80" />
            </span>
            <FeatureCard cardIndex={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
      </svg>
    ),
    title: "Cycle Tracking",
    description: "Track your menstrual cycle, predict your next period, and understand your fertile window.",
    link: "/predictions",
    linkText: "Track Now",
    gradientClass: "bg-gradient-to-b from-flowPink-light to-white",
    buttonClass: "border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
        <path d="M17 7.83a4 4 0 1 1 0 8.34"></path>
        <path d="M7 7.83a4 4 0 1 0 0 8.34"></path>
        <rect width="6" height="12" x="9" y="6" rx="3"></rect>
      </svg>
    ),
    title: "Myth Busting",
    description: "Separate facts from myths about menstruation and menopause with evidence-based information.",
    link: "/myths-facts",
    linkText: "Learn Facts",
    gradientClass: "bg-gradient-to-b from-flowPurple-light to-white",
    buttonClass: "border-flowPurple-dark text-flowPurple-dark hover:bg-flowPurple-light",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
        <polyline points="10 2 10 12 12 10 14 12 14 2"></polyline>
      </svg>
    ),
    title: "Education",
    description: "Access comprehensive resources for all stages of menstrual and menopausal health.",
    link: "/menopause",
    linkText: "Explore Resources",
    gradientClass: "bg-gradient-to-b from-flowPink-light to-white",
    buttonClass: "border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light",
  },
];

interface FeatureCardProps {
  cardIndex: number;
}

const FeatureCard = ({ cardIndex }: FeatureCardProps) => {
  const card = cards[cardIndex];
  return (
    <div className={`${card.gradientClass} p-8 rounded-2xl shadow-sm text-center animate-fade-in relative z-10`}>
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
        {card.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{card.title}</h3>
      <p className="text-gray-600 mb-6">
        {card.description}
      </p>
      <Button asChild variant="outline" className={card.buttonClass}>
        <Link to={card.link}>{card.linkText}</Link>
      </Button>
    </div>
  );
};

export default FeatureSection;
