
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import VideoSection from "@/components/home/VideoSection";
import ImagesSection from "@/components/home/ImagesSection";
import AboutSection from "@/components/home/AboutSection";
import GamesQuizSection from "@/components/home/GamesQuizSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light to-white">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <VideoSection />
        <ImagesSection />
        <AboutSection />
        <GamesQuizSection />
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default Index;
