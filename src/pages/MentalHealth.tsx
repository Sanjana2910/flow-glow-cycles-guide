import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MentalHealth = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health & Emotional Wellbeing</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the emotional aspects of menstrual and menopausal health is just as important as the physical. Here we explore the connection between hormonal fluctuations and mental wellbeing.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Mental wellbeing representation" 
              className="w-full h-80 object-cover rounded-2xl shadow-lg mx-auto"
            />
          </div>
          
          <Tabs defaultValue="menstrual" className="max-w-4xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="menstrual">Menstrual Mental Health</TabsTrigger>
              <TabsTrigger value="menopausal">Menopausal Mental Health</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menstrual" className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Emotional Changes</h2>
                    <p className="text-gray-600 mb-4">
                      Fluctuations in estrogen and progesterone throughout your menstrual cycle can significantly impact your mood, energy levels, and emotional state. These changes are normal and understanding them can help you navigate your emotions better.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Research has shown that up to 80% of people who menstruate experience some form of physical or emotional symptoms before their period, with about 20-40% experiencing symptoms severe enough to affect their daily lives.
                    </p>
                    <p className="text-gray-600">
                      By tracking your cycle and noting emotional changes, you can begin to identify patterns and develop strategies to support your wellbeing throughout each phase.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Woman reflecting" 
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Common Emotional Experiences Section */}
              <section className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Emotional Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Premenstrual Syndrome (PMS)</h3>
                    <p className="text-gray-600 mb-4">
                      PMS is characterized by a range of physical and emotional symptoms that occur in the days leading up to your period. These can include mood swings, irritability, anxiety, bloating, and fatigue.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Mood swings and irritability</li>
                      <li>Anxiety and depression</li>
                      <li>Fatigue and difficulty concentrating</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Premenstrual Dysphoric Disorder (PMDD)</h3>
                    <p className="text-gray-600 mb-4">
                      PMDD is a more severe form of PMS that affects a smaller percentage of people. It includes significant mood disturbances, such as intense sadness, hopelessness, or anxiety, that can disrupt daily life.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Severe depression or anxiety</li>
                      <li>Difficulty concentrating</li>
                      <li>Feelings of being overwhelmed</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Support Strategies Section */}
              <section className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Strategies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Lifestyle Adjustments</h3>
                    <p className="text-gray-600 mb-4">
                      Making simple changes to your daily routine can have a big impact on your emotional wellbeing during your menstrual cycle.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Regular exercise to boost mood</li>
                      <li>Balanced diet rich in fruits and vegetables</li>
                      <li>Sufficient sleep to reduce fatigue</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Mindfulness & Relaxation</h3>
                    <p className="text-gray-600 mb-4">
                      Practicing mindfulness and relaxation techniques can help you manage stress and improve your emotional state.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Meditation and deep breathing exercises</li>
                      <li>Yoga and stretching</li>
                      <li>Spending time in nature</li>
                    </ul>
                  </div>
                </div>
              </section>
            </TabsContent>
            
            <TabsContent value="menopausal" className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Navigating the Emotional Transition</h2>
                    <p className="text-gray-600 mb-4">
                      The hormonal changes during perimenopause and menopause can bring significant emotional shifts. Many women report experiencing mood swings, anxiety, irritability, and even depression during this life transition.
                    </p>
                    <p className="text-gray-600 mb-4">
                      These emotional responses are not just "in your head" — they're legitimate responses to real biological changes. Understanding this connection can be the first step toward better mental health management.
                    </p>
                    <p className="text-gray-600">
                      Research indicates that women with a history of depression or anxiety may be more vulnerable to mood disorders during menopause, but even those without such history can experience new emotional challenges.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Peaceful living space" 
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Common Emotional Experiences Section */}
              <section className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Emotional Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-flowPurple-dark mb-3">Mood Swings & Irritability</h3>
                    <p className="text-gray-600 mb-4">
                      Fluctuating hormone levels can lead to unpredictable mood swings and increased irritability. These changes can be challenging for both you and those around you.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Sudden shifts in mood</li>
                      <li>Increased sensitivity to stress</li>
                      <li>Difficulty controlling emotions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-flowPurple-dark mb-3">Anxiety & Depression</h3>
                    <p className="text-gray-600 mb-4">
                      The hormonal changes of menopause can increase the risk of anxiety and depression. It's important to recognize these symptoms and seek support when needed.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Persistent feelings of sadness or hopelessness</li>
                      <li>Excessive worry or fear</li>
                      <li>Loss of interest in activities</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Support Strategies Section */}
              <section className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Strategies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-flowPurple-dark mb-3">Hormone Therapy (HT)</h3>
                    <p className="text-gray-600 mb-4">
                      Hormone therapy can help stabilize hormone levels and reduce emotional symptoms. Discuss the risks and benefits with your healthcare provider.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Effective for managing mood swings</li>
                      <li>May reduce anxiety and depression</li>
                      <li>Requires careful consideration of risks</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-flowPurple-dark mb-3">Counseling & Therapy</h3>
                    <p className="text-gray-600 mb-4">
                      Therapy can provide a safe space to explore your emotions and develop coping strategies. Cognitive-behavioral therapy (CBT) and mindfulness-based therapy are often helpful.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Learn coping skills</li>
                      <li>Process emotions</li>
                      <li>Improve overall wellbeing</li>
                    </ul>
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
          
          {/* Resources Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Mental Health America</h3>
                <p className="text-gray-600 mb-4">
                  Mental Health America (MHA) is a leading community-based nonprofit dedicated to addressing the needs of those living with mental illness and promoting overall mental health.
                </p>
                <Button asChild variant="outline" className="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light">
                  <Link to="https://www.mhanational.org/">Visit Website</Link>
                </Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-flowPink-dark mb-3">National Alliance on Mental Illness</h3>
                <p className="text-gray-600 mb-4">
                  NAMI, the National Alliance on Mental Illness, is the nation's largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.
                </p>
                <Button asChild variant="outline" className="border-flowPink-dark text-flowPink-dark hover:bg-flowPink-light">
                  <Link to="https://www.nami.org/">Visit Website</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Self-Care Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Self-Care Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Create a Routine</h3>
                <p className="text-gray-600 mb-4">
                  Establishing a daily routine can provide a sense of stability and control, which can be especially helpful during times of emotional change.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Set regular sleep and wake times</li>
                  <li>Plan meals and exercise</li>
                  <li>Schedule time for relaxation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Connect with Others</h3>
                <p className="text-gray-600 mb-4">
                  Social support is essential for mental wellbeing. Make an effort to connect with friends, family, or support groups.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Talk to a trusted friend or family member</li>
                  <li>Join a support group</li>
                  <li>Participate in social activities</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Add YouTube Video Section */}
          <div className="max-w-4xl mx-auto my-16 bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Expert Insights: Mental Health & Hormones</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-[480px] rounded-xl shadow-md"
                src="https://www.youtube.com/embed/QNZfEtZ53RY" 
                title="Understanding Mental Health & Hormonal Changes" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          
          {/* Disclaimer Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimer</h2>
            <p className="text-gray-600">
              The information provided on this page is intended for general knowledge and informational purposes only, and does not constitute medical advice. It is essential to consult with a qualified healthcare professional for any health concerns or before making any decisions related to your health or treatment.
            </p>
            <p className="text-gray-600">
              The views and opinions expressed in any external resources or websites linked on this page do not necessarily reflect the views or opinions of FlowToGlow.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default MentalHealth;
