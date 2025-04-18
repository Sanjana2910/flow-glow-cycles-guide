
import { Youtube } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-flowPink-light/50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch & Learn</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Educational resources about menstrual health, menopause, and how men can better support their loved ones.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-[300px] rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/7HlHGLr1hTA" 
              title="Understanding Menstrual and Menopausal Health" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-flowPink-dark">
              <Youtube className="w-6 h-6" />
              <span className="font-medium">Educational Video</span>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900">
              Men's Role in Supporting Menstrual and Menopausal Health
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Understanding menstrual and menopausal health is crucial for men to provide better support to the women in their lives. By learning about these natural processes, men can:
              </p>
              
              <ul className="space-y-2 list-disc pl-5">
                <li>Foster more empathetic relationships</li>
                <li>Provide appropriate emotional and practical support</li>
                <li>Help break down stigma and misconceptions</li>
                <li>Create more inclusive environments at work and home</li>
              </ul>
              
              <p>
                Watch this informative video to better understand how men can be supportive partners, family members, and allies in menstrual and menopausal health conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
