
import { Youtube, Users, Sparkles } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-flowPink-light/50 px-4 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <span
        className="hidden md:block absolute top-6 left-4 w-64 h-64 rounded-full bg-flowPurple-light blur-3xl opacity-40 animate-float"
        style={{ animationDuration: "4s" }}
        aria-hidden="true"
      />
      <span
        className="hidden md:block absolute -top-20 right-12 w-72 h-72 rounded-full bg-flowPink-dark blur-3xl opacity-30 animate-float"
        style={{ animationDuration: "5s", animationDelay: "0.8s" }}
        aria-hidden="true"
      />
      {/* Sparkles icon as floating accent */}
      <span
        className="absolute bottom-10 left-8 text-flowPurple-dark opacity-50 animate-float"
        style={{ animationDuration: "6s", animationDelay: "1.5s" }}
        aria-hidden="true"
      >
        <Sparkles className="w-16 h-16" />
      </span>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in">Watch & Learn</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
          Educational resources about menstrual health, menopause, and how men can better support their loved ones.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto animate-fade-in">
          <div className="aspect-w-16 aspect-h-9 relative">
            {/* Animated border around video */}
            <div className="absolute -inset-2 z-0 rounded-3xl bg-gradient-to-tr from-flowPink-dark/70 via-flowPurple-dark/60 to-flowPink-light/80 blur-lg opacity-55 animate-pulse" />
            <iframe
              className="w-full h-[300px] rounded-2xl shadow-lg relative z-10"
              src="https://www.youtube.com/embed/7HlHGLr1hTA"
              title="Understanding Menstrual and Menopausal Health"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* Decorative: Youtube icon floating above the video */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 shadow-lg rounded-full p-3 animate-float z-20 hidden md:inline-block" style={{ animationDuration: "7s" }}>
              <Youtube className="w-8 h-8 text-flowPink-dark" />
            </span>
          </div>

          <div className="text-left space-y-6 relative z-10">
            {/* Decorative icon + label */}
            <div className="inline-flex items-center gap-2 text-flowPink-dark font-medium animate-fade-in">
              <Youtube className="w-6 h-6" />
              <span>Educational Video</span>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 animate-fade-in">
              Men's Role in Supporting Menstrual and Menopausal Health
            </h3>

            <div className="space-y-4 text-gray-600 animate-fade-in">
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
            {/* Floating users icon as a visual accent */}
            <span className="absolute -right-10 bottom-2 text-flowPink-dark opacity-40 animate-float hidden md:block" style={{ animationDuration: "5s", animationDelay: "2s" }}>
              <Users className="w-14 h-14" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
