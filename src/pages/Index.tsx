
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light to-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
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
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1603748400967-2eb5f9ffcab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Women holding hands in unity" 
                className="rounded-2xl shadow-xl animate-float"
              />
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white px-4">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How FlowToGlow Helps You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive resources and tools to help you navigate your menstrual and menopausal journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
            <div className="bg-gradient-to-b from-flowPink-light to-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
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
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cycle Tracking</h3>
              <p className="text-gray-600 mb-6">
                Track your menstrual cycle, predict your next period, and understand your fertile window.
              </p>
              <Button asChild variant="outline" className="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light">
                <Link to="/predictions">Track Now</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-b from-flowPurple-light to-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                  <path d="M17 7.83a4 4 0 1 1 0 8.34"></path>
                  <path d="M7 7.83a4 4 0 1 0 0 8.34"></path>
                  <rect width="6" height="12" x="9" y="6" rx="3"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Myth Busting</h3>
              <p className="text-gray-600 mb-6">
                Separate facts from myths about menstruation and menopause with evidence-based information.
              </p>
              <Button asChild variant="outline" className="border-flowPurple-dark text-flowPurple-dark hover:bg-flowPurple-light">
                <Link to="/myths-facts">Learn Facts</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-b from-flowPink-light to-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                  <polyline points="10 2 10 12 12 10 14 12 14 2"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Education</h3>
              <p className="text-gray-600 mb-6">
                Access comprehensive resources for all stages of menstrual and menopausal health.
              </p>
              <Button asChild variant="outline" className="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light">
                <Link to="/menopause">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-16 bg-flowPink-light/50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch & Learn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Educational video about menstrual health and wellbeing.
            </p>
            
            <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-[480px] rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/3tk9fZ2FmjQ" 
                title="Understanding Your Menstrual Cycle" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>

        {/* About Us Preview */}
        <section className="py-16 bg-white px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573496528661-ad2b5ec9f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our team" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">About FlowToGlow</h2>
                <p className="text-lg text-gray-600">
                  We're a team of healthcare professionals, educators, and advocates passionate about breaking the stigma around menstrual and menopausal health through education and support.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is to empower through knowledge, creating a world where everyone understands and respects the natural processes of the body.
                </p>
                <Button asChild className="bg-flowPink-dark hover:bg-flowPink-dark/90">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default Index;
