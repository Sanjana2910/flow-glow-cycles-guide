
const ImagesSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Menstrual & Menopausal Journey</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore visual resources to better understand your body's natural transitions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
        <ImageCard 
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imageAlt="Woman using resources on laptop"
          title="Digital Learning Resources"
          description="Access our comprehensive online resources at your own pace."
        />
        
        <ImageCard 
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imageAlt="Serene nature scene"
          title="Natural Healing & Wellness"
          description="Discover natural approaches to support your body through transitions."
        />
      </div>
    </section>
  );
};

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ImageCard = ({ imageUrl, imageAlt, title, description }: ImageCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg">
      <img 
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="bg-white p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ImagesSection;
