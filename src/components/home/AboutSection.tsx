
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <div className="md:w-2/3 mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">About FlowToGlow</h2>
          <p className="text-lg text-gray-600">
            We're a team of healthcare professionals, educators, and advocates passionate about breaking the stigma around menstrual and menopausal health through education and support.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to empower through knowledge, creating a world where everyone understands and respects the natural processes of the body.
          </p>
          <Button asChild className="bg-gradient-to-r from-flowPink-light to-flowPink-dark text-white hover:from-flowPink-dark hover:to-flowPink-light transition-colors">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
