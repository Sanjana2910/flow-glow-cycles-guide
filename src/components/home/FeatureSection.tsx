
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How FlowToGlow Helps You</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive resources and tools to help you navigate your menstrual and menopausal journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        <FeatureCard 
          icon={
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
          }
          title="Cycle Tracking"
          description="Track your menstrual cycle, predict your next period, and understand your fertile window."
          link="/predictions"
          linkText="Track Now"
          gradientClass="bg-gradient-to-b from-flowPink-light to-white"
          buttonClass="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light"
        />
        
        <FeatureCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
              <path d="M17 7.83a4 4 0 1 1 0 8.34"></path>
              <path d="M7 7.83a4 4 0 1 0 0 8.34"></path>
              <rect width="6" height="12" x="9" y="6" rx="3"></rect>
            </svg>
          }
          title="Myth Busting"
          description="Separate facts from myths about menstruation and menopause with evidence-based information."
          link="/myths-facts"
          linkText="Learn Facts"
          gradientClass="bg-gradient-to-b from-flowPurple-light to-white"
          buttonClass="border-flowPurple-dark text-flowPurple-dark hover:bg-flowPurple-light"
        />
        
        <FeatureCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
              <polyline points="10 2 10 12 12 10 14 12 14 2"></polyline>
            </svg>
          }
          title="Education"
          description="Access comprehensive resources for all stages of menstrual and menopausal health."
          link="/menopause"
          linkText="Explore Resources"
          gradientClass="bg-gradient-to-b from-flowPink-light to-white"
          buttonClass="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light"
        />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  gradientClass: string;
  buttonClass: string;
}

const FeatureCard = ({ icon, title, description, link, linkText, gradientClass, buttonClass }: FeatureCardProps) => {
  return (
    <div className={`${gradientClass} p-8 rounded-2xl shadow-sm text-center`}>
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <Button asChild variant="outline" className={buttonClass}>
        <Link to={link}>{linkText}</Link>
      </Button>
    </div>
  );
};

export default FeatureSection;
