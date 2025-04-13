
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MythsFacts = () => {
  const menstrualMyths = [
    {
      myth: "Women shouldn't exercise during their period.",
      fact: "Exercise can actually help reduce period symptoms like cramps and mood swings by releasing endorphins. Moderate exercise is perfectly safe and often beneficial during menstruation.",
    },
    {
      myth: "PMS is all in your head.",
      fact: "Premenstrual Syndrome (PMS) is a real medical condition caused by hormonal changes. It can cause physical symptoms like bloating and headaches, as well as emotional symptoms like irritability and mood swings.",
    },
    {
      myth: "You can't get pregnant during your period.",
      fact: "While it's less likely, pregnancy can still occur during menstruation, especially if you have a shorter cycle or longer periods. Sperm can survive in the body for up to 5 days.",
    },
    {
      myth: "It's unhealthy to suppress your period with birth control.",
      fact: "Skipping periods using hormonal birth control is generally safe for most women and does not cause fertility issues or health problems.",
    },
    {
      myth: "Periods sync up when women live together.",
      fact: "Scientific studies have not found evidence to support the idea that menstrual cycles synchronize when women live together. Any apparent syncing is likely coincidental.",
    },
  ];

  const menopauseMyths = [
    {
      myth: "Menopause only affects old women.",
      fact: "While the average age for menopause is 51, it can occur naturally between ages 45-55. Some women experience premature menopause in their 30s or even younger due to medical conditions or treatments.",
    },
    {
      myth: "Menopause only causes hot flashes.",
      fact: "Menopause can cause a wide range of symptoms beyond hot flashes, including sleep disturbances, mood changes, vaginal dryness, changes in libido, and cognitive effects like brain fog.",
    },
    {
      myth: "Hormone therapy is always dangerous.",
      fact: "For many women, hormone therapy is a safe and effective treatment for menopausal symptoms when used appropriately under medical supervision. Risks vary based on individual health factors, type of therapy, and timing.",
    },
    {
      myth: "Menopause means the end of your sex life.",
      fact: "While hormonal changes can affect libido and cause vaginal dryness, many women maintain active, satisfying sex lives through and after menopause. Various treatments and lubricants can help with physical symptoms.",
    },
    {
      myth: "Weight gain during menopause is inevitable and can't be managed.",
      fact: "While hormonal changes can contribute to weight redistribution and slightly slower metabolism, major weight gain is not inevitable. Regular exercise and healthy eating can help maintain a healthy weight during menopause.",
    },
  ];

  const generalMyths = [
    {
      myth: "Women are overly emotional because of their hormones.",
      fact: "All humans experience emotions regardless of gender. Hormones can affect mood in people of all genders, and individual emotional responses vary widely regardless of hormonal fluctuations.",
    },
    {
      myth: "Menstrual blood is dirty or impure.",
      fact: "Menstrual blood is a natural combination of blood, tissue from the uterine lining, and other normal secretions. It is not dirty, harmful, or contaminated.",
    },
    {
      myth: "If you use tampons, you'll lose your virginity.",
      fact: "Using tampons does not affect virginity. Virginity is not determined by physical characteristics, and the hymen (a thin membrane near the vaginal opening) can stretch or tear from many activities besides sex.",
    },
    {
      myth: "Hormonal birth control causes infertility.",
      fact: "Hormonal birth control methods are temporary and reversible. After stopping most hormonal contraceptives, fertility returns quickly, often within 1-3 months.",
    },
    {
      myth: "Women's pain tolerance is higher because of menstruation.",
      fact: "Pain perception is highly individual and not determined by gender. Some studies suggest differences in how men and women process pain signals, but these vary widely between individuals.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light/50 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Myths vs Facts</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Let's debunk common misconceptions about menstrual and menopausal health with evidence-based information.
            </p>
          </div>
          
          <Tabs defaultValue="menstrual" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="menstrual">Menstrual Myths</TabsTrigger>
              <TabsTrigger value="menopause">Menopause Myths</TabsTrigger>
              <TabsTrigger value="general">General Myths</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menstrual" className="space-y-6 animate-fade-in">
              {menstrualMyths.map((item, index) => (
                <Card key={index} className="overflow-hidden border-flowPink-light shadow-sm">
                  <CardHeader className="bg-flowPink-light py-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Myth: {item.myth}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="bg-green-100 rounded-full p-2 h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Fact:</h3>
                        <p className="text-gray-600">{item.fact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="menopause" className="space-y-6 animate-fade-in">
              {menopauseMyths.map((item, index) => (
                <Card key={index} className="overflow-hidden border-flowPurple-light shadow-sm">
                  <CardHeader className="bg-flowPurple-light py-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Myth: {item.myth}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="bg-green-100 rounded-full p-2 h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Fact:</h3>
                        <p className="text-gray-600">{item.fact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="general" className="space-y-6 animate-fade-in">
              {generalMyths.map((item, index) => (
                <Card key={index} className="overflow-hidden border-gray-200 shadow-sm">
                  <CardHeader className="bg-gray-100 py-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Myth: {item.myth}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="bg-green-100 rounded-full p-2 h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Fact:</h3>
                        <p className="text-gray-600">{item.fact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default MythsFacts;
