import { Youtube, Users, Sparkles, MessageSquare, Handshake, BookHeart, HeartHandshake } from "lucide-react";

const menEducationPoints = [
  {
    icon: <MessageSquare className="w-8 h-8 text-flowPurple-dark" />,
    title: "Open Conversations",
    desc: "Encourage honest discussions about menstrual and menopausal health, reducing shame and stigma together.",
    color: "from-flowPurple-light to-flowPink-dark",
    animation: "animate-float",
  },
  {
    icon: <Handshake className="w-8 h-8 text-flowPink-dark" />,
    title: "Show Empathy",
    desc: "Practice empathy—listen, ask how to help, and acknowledge the challenges women face during each phase.",
    color: "from-flowPink-light to-flowPurple-dark",
    animation: "animate-fade-in",
  },
  {
    icon: <BookHeart className="w-8 h-8 text-flowPurple-dark" />,
    title: "Educate Yourself",
    desc: "Learn the basics of cycles and menopause to offer better emotional and practical support.",
    color: "from-[#FEC6A1] to-[#E5DEFF]", // pastel orange/purple
    animation: "animate-float",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-flowPink-dark" />,
    title: "Fight Stigma",
    desc: "Be an ally by challenging myths, speaking up, and fostering respect in all environments.",
    color: "from-[#FEF7CD] to-[#FFDEE2]", // pastel yellow/pink
    animation: "animate-fade-in",
  },
];

const VideoSection = () => {
  return (
    <section className="py-16 bg-flowPink-light/50 px-4 relative overflow-hidden">
      {/* Extra Animated gradient blobs and floating sparkles for color pop */}
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
      {/* More decorative colorful floating blobs */}
      <span
        className="absolute left-12 top-32 w-14 h-14 rounded-full bg-[#FEC6A1]/80 blur-2xl opacity-80 animate-float z-10"
        style={{ animationDuration: "2.5s", animationDelay: "1s" }}
        aria-hidden="true"
      />
      <span
        className="absolute right-20 bottom-28 w-10 h-10 rounded-full bg-[#FEF7CD]/70 blur-md opacity-90 animate-float"
        style={{ animationDuration: "4.1s", animationDelay: "1.7s" }}
        aria-hidden="true"
      />
      <span
        className="absolute left-40 bottom-12 w-12 h-12 rounded-full bg-flowPurple-light/80 blur-xl opacity-80 animate-float"
        style={{ animationDuration: "3.2s", animationDelay: "1.4s" }}
        aria-hidden="true"
      />
      <span
        className="absolute right-16 top-24 w-10 h-10 rounded-full bg-flowPink-light/80 blur-lg opacity-80 animate-float"
        style={{ animationDuration: "4.5s", animationDelay: "2.1s" }}
        aria-hidden="true"
      />
      {/* Sparkles icon as floating accent */}
      <span
        className="absolute bottom-10 left-8 text-flowPurple-dark opacity-60 animate-float"
        style={{ animationDuration: "6s", animationDelay: "1.5s" }}
        aria-hidden="true"
      >
        <Sparkles className="w-16 h-16" />
      </span>
      {/* More sparkles */}
      <span className="absolute right-16 top-8 text-flowPink-dark animate-float" style={{ animationDuration: "9s" }}>
        <Sparkles className="w-10 h-10 opacity-70" />
      </span>
      <span className="absolute left-24 bottom-8 text-flowPurple-dark animate-float" style={{ animationDuration: "8s" }}>
        <Sparkles className="w-10 h-10 opacity-60" />
      </span>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in">Watch & Learn</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
          Educational resources about menstrual health, menopause, and how men can better support their loved ones.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto animate-fade-in">
          {/* Video Section with Updated YouTube Link */}
          <div className="aspect-w-16 aspect-h-9 relative">
            {/* Animated border around video */}
            <div className="absolute -inset-2 z-0 rounded-3xl bg-gradient-to-tr from-flowPink-dark/70 via-flowPurple-dark/60 to-flowPink-light/80 blur-lg opacity-55 animate-pulse" />
            <iframe
              className="w-full h-[300px] rounded-2xl shadow-lg relative z-10"
              src="https://www.youtube.com/embed/7HlHGLr1hTA?si=nxltUnjlRYQdxS7E"
              title="Understanding Menstrual and Menopausal Health"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* Decorative: Youtube icon floating above the video */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 shadow-lg rounded-full p-3 animate-float z-20 hidden md:inline-block" style={{ animationDuration: "7s" }}>
              <Youtube className="w-8 h-8 text-flowPink-dark" />
            </span>
          </div>

          {/* NEW: Men’s Educational Grid with color and motion */}
          <div className="text-left space-y-8 relative z-10">
            {/* Decorative icon + label */}
            <div className="inline-flex items-center gap-2 text-flowPink-dark font-medium animate-fade-in">
              <Youtube className="w-6 h-6" />
              <span>Educational Video</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 animate-fade-in">
              Men: How You Can Support <span className="text-flowPink-dark">Menstrual</span> & <span className="text-flowPurple-dark">Menopausal</span> Health
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menEducationPoints.map((pt, i) => (
                <div
                  key={i}
                  className={`rounded-xl shadow-lg bg-gradient-to-br ${pt.color} p-5 min-h-[160px] flex items-start gap-4 relative overflow-hidden group transition-transform duration-300 hover:scale-105 ${pt.animation}`}
                  style={{
                    animationDelay: `${(i % 2) * 0.15 + 0.1}s`,
                    animationDuration: "1.1s",
                  }}
                >
                  <span className="flex-none">{pt.icon}</span>
                  <span>
                    <div className="font-semibold text-lg mb-1 text-gray-800">{pt.title}</div>
                    <div className="text-gray-700 text-sm">{pt.desc}</div>
                  </span>
                  {/* Animated sparkle as extra "pop" on hover */}
                  <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <Sparkles className="w-7 h-7 text-white/80" />
                  </span>
                </div>
              ))}
            </div>
            {/* End Grid */}

            {/* Floating users icon as a visual accent */}
            <span className="absolute -right-10 bottom-2 text-flowPink-dark opacity-40 animate-float hidden md:block" style={{ animationDuration: "5s", animationDelay: "2s" }}>
              <Users className="w-14 h-14" />
            </span>
          </div>
        </div>
        {/* Under the grid: Additional callout for men */}
        <div className="mt-12 text-base max-w-xl mx-auto px-2 text-center text-flowPurple-dark animate-fade-in">
          <span className="inline-flex items-center gap-2 font-semibold">
            <Sparkles className="w-6 h-6" /> 
            Even simple acts—like listening, learning, and speaking up—can have a huge impact. 
            <Sparkles className="w-6 h-6" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
