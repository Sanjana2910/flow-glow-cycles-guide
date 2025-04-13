
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About FlowToGlow</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to empower people through comprehensive education about menstrual and menopausal health, breaking taboos and fostering wellness.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Women supporting each other" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                FlowToGlow began with a simple observation: despite affecting half of the world's population, menstrual and menopausal health remains shrouded in silence, misinformation, and stigma.
              </p>
              <p className="text-lg text-gray-600">
                Founded by a team of healthcare professionals, educators, and advocates, we created this platform to provide reliable, accessible information and support for people of all ages and genders who want to understand these natural biological processes better.
              </p>
              <p className="text-lg text-gray-600">
                We believe that knowledge is power, and that by breaking down barriers to education about menstrual and menopausal health, we can improve overall wellbeing and quality of life.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-flowPink-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Evidence-Based</h3>
                <p className="text-gray-600">
                  We base all our information on the latest scientific research and medical understanding, while acknowledging that research in women's health has historically been underrepresented.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-flowPink-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Inclusive</h3>
                <p className="text-gray-600">
                  We recognize that menstrual and menopausal experiences vary widely and are shaped by individual biology, culture, gender identity, and socioeconomic factors. Our content aims to be inclusive of all identities and experiences.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-flowPink-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10"></path>
                    <path d="M8 15a3.5 3.5 0 0 0 6.5 1.5"></path>
                    <path d="m9 12 2 1 4-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Stigma-Breaking</h3>
                <p className="text-gray-600">
                  We're committed to normalizing conversations about menstrual and menopausal health, challenging harmful taboos, and empowering people to speak openly about these natural processes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dr. Maya Johnson" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Dr. Maya Johnson</h3>
                  <p className="text-flowPink-dark mb-4">OB/GYN & Founder</p>
                  <p className="text-gray-600">
                    With 15 years of clinical experience, Dr. Johnson is passionate about improving education around women's health. She leads our medical content development and accuracy reviews.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Sophia Chen" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Sophia Chen</h3>
                  <p className="text-flowPink-dark mb-4">Health Educator</p>
                  <p className="text-gray-600">
                    Sophia specializes in developing accessible educational resources about menstrual and menopausal health for diverse audiences. She has a background in public health and education.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Aisha Martinez" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Aisha Martinez</h3>
                  <p className="text-flowPink-dark mb-4">Nutritionist & Wellness Coach</p>
                  <p className="text-gray-600">
                    Aisha develops our nutritional guidance and lifestyle recommendations for hormonal health. She specializes in integrative approaches to managing menstrual and menopausal symptoms.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dr. James Williams" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Dr. James Williams</h3>
                  <p className="text-flowPink-dark mb-4">Mental Health Specialist</p>
                  <p className="text-gray-600">
                    Dr. Williams focuses on the psychological aspects of hormonal health. He develops resources for emotional wellbeing during menstrual cycles and menopausal transition.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Priya Patel" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Priya Patel</h3>
                  <p className="text-flowPink-dark mb-4">Data Scientist</p>
                  <p className="text-gray-600">
                    Priya develops our predictive algorithms and ensures our cycle tracking tools are accurate and reliable. She has a background in biostatistics and women's health research.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Michael Okoye" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Michael Okoye</h3>
                  <p className="text-flowPink-dark mb-4">Community Outreach</p>
                  <p className="text-gray-600">
                    Michael leads our initiatives to engage men in understanding menstrual and menopausal health. He develops educational programs for schools, workplaces, and community organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-flowPink-light to-flowPurple-light rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              We're always looking for passionate individuals to contribute to our mission of improving menstrual and menopausal health education. Whether you're a healthcare professional, educator, writer, or advocate, we'd love to hear from you.
            </p>
            <Button className="bg-flowPink-dark hover:bg-flowPink-dark/90 text-white">
              Contact Us
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h2>
            <p className="text-lg text-gray-600 mb-10">
              We collaborate with various organizations to further our mission of comprehensive menstrual and menopausal health education.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <span className="text-lg font-semibold text-gray-400">Women's Health</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <span className="text-lg font-semibold text-gray-400">MedEd Institute</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <span className="text-lg font-semibold text-gray-400">Global Health</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <span className="text-lg font-semibold text-gray-400">EcoHealth</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default About;
