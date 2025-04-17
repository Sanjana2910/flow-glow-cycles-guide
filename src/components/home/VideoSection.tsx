
const VideoSection = () => {
  return (
    <section className="py-16 bg-flowPink-light/50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch & Learn</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Educational video about menstrual health and wellbeing.
        </p>
        
        <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-[480px] rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/QNZfEtZ53RY" 
            title="Understanding Mental Health & Hormonal Changes" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
