
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MentalHealth = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPurple-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health & Emotional Wellbeing</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the connection between hormonal health and mental wellbeing, with strategies to support emotional balance.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1507760094980-1985f80b5897?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Woman practicing mindfulness outdoors" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The Hormone-Mood Connection</h2>
              <p className="text-lg text-gray-600">
                Hormonal fluctuations during the menstrual cycle and menopause can significantly impact mood, energy levels, and emotional wellbeing. These changes are real physiological responses—not character flaws or weaknesses.
              </p>
              <p className="text-lg text-gray-600">
                Understanding this connection helps normalize these experiences and empowers you to develop effective coping strategies for challenging times.
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="menstrual" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="menstrual">Menstrual Cycle</TabsTrigger>
              <TabsTrigger value="menopause">Menopause</TabsTrigger>
              <TabsTrigger value="strategies">Support Strategies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menstrual" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Mental Health Throughout the Menstrual Cycle</CardTitle>
                  <CardDescription>
                    How hormonal changes during different phases of the menstrual cycle can affect mood and emotional wellbeing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-flowPink-light/50 to-white p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Premenstrual Phase</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Common Emotional Experiences</h4>
                            <p className="text-gray-600">
                              Irritability, mood swings, anxiety, sadness, feeling overwhelmed, and heightened emotional sensitivity.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                              <line x1="16" y1="8" x2="2" y2="22"></line>
                              <line x1="17.5" y1="15" x2="9" y2="15"></line>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">What's Happening Hormonally</h4>
                            <p className="text-gray-600">
                              Estrogen and progesterone levels drop, affecting neurotransmitters like serotonin and dopamine that regulate mood.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Self-Support Tips</h4>
                            <p className="text-gray-600">
                              Track your cycle to anticipate changes, prepare support systems, practice self-compassion, and adjust expectations during this time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-flowPurple-light/50 to-white p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Follicular & Ovulatory Phases</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Common Emotional Experiences</h4>
                            <p className="text-gray-600">
                              Generally more positive mood, increased energy, improved concentration, heightened creativity, and greater social engagement.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                              <line x1="16" y1="8" x2="2" y2="22"></line>
                              <line x1="17.5" y1="15" x2="9" y2="15"></line>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">What's Happening Hormonally</h4>
                            <p className="text-gray-600">
                              Rising estrogen levels during these phases boost serotonin and dopamine, improving mood and cognitive function.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Making the Most of It</h4>
                            <p className="text-gray-600">
                              Plan important tasks, social events, or creative projects during these phases when energy and mood are typically better.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">When It's More Than Just Hormones</h3>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Premenstrual Dysphoric Disorder (PMDD)</h4>
                      <p className="text-gray-600 mb-4">
                        PMDD is a more severe form of PMS that affects 3-8% of menstruating people. It involves intense mood symptoms that significantly disrupt daily life and relationships.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Common Symptoms:</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Severe depression or hopelessness
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Panic attacks or anxiety
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Extreme mood swings, anger, or irritability
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Difficulty concentrating
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Overwhelming fatigue
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Feeling out of control
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Treatment Options:</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> SSRIs (selective serotonin reuptake inhibitors)
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Hormonal treatments
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Cognitive behavioral therapy (CBT)
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Lifestyle modifications
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Nutritional supplements (under medical supervision)
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-flowPink-light/30 rounded-md text-gray-700">
                        <p><span className="font-semibold">Important:</span> If you suspect you have PMDD, tracking your symptoms in relation to your cycle can help with diagnosis. Speak with a healthcare provider who takes your concerns seriously.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="menopause" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Mental Health During Menopause</CardTitle>
                  <CardDescription>
                    Understanding and managing the psychological and emotional aspects of the menopausal transition.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-5">
                      <h3 className="text-xl font-semibold text-flowPink-dark mb-2">Common Mental Health Challenges</h3>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPink-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                            <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path>
                            <path d="M17 10H7"></path>
                            <path d="M13 7V3"></path>
                            <path d="M13 21v-4"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Mood Shifts</h4>
                          <p className="text-gray-600">
                            Fluctuating hormones can lead to mood swings, increased irritability, and emotional sensitivity.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPink-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                            <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path>
                            <path d="M17 10H7"></path>
                            <path d="M13 7V3"></path>
                            <path d="M13 21v-4"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Anxiety</h4>
                          <p className="text-gray-600">
                            New or worsened anxiety symptoms, including worry, racing thoughts, and physical tension.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPink-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                            <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path>
                            <path d="M17 10H7"></path>
                            <path d="M13 7V3"></path>
                            <path d="M13 21v-4"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Depression</h4>
                          <p className="text-gray-600">
                            Increased risk of depressive symptoms, especially for those with a history of depression.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPink-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                            <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path>
                            <path d="M17 10H7"></path>
                            <path d="M13 7V3"></path>
                            <path d="M13 21v-4"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Cognitive Changes</h4>
                          <p className="text-gray-600">
                            "Brain fog," memory lapses, and difficulty concentrating that can affect confidence and sense of self.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <h3 className="text-xl font-semibold text-flowPurple-dark mb-2">Contributing Factors Beyond Hormones</h3>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPurple-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Sleep Disruption</h4>
                          <p className="text-gray-600">
                            Night sweats and insomnia can severely impact sleep quality, worsening mood and cognitive function.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPurple-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Life Transitions</h4>
                          <p className="text-gray-600">
                            Menopause often coincides with other significant life changes like children leaving home, career shifts, or caring for aging parents.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPurple-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Identity and Aging</h4>
                          <p className="text-gray-600">
                            Processing changes in body image, fertility, and societal perceptions of aging can impact self-concept and mood.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-flowPurple-light rounded-full p-1 w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Relationship Changes</h4>
                          <p className="text-gray-600">
                            Shifts in intimacy, communication patterns, and family dynamics can create additional emotional challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Treatment and Support Options</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 p-5 rounded-lg">
                        <h4 className="text-lg font-medium text-flowPink-dark flex items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 8v8"></path>
                            <path d="M8 12h8"></path>
                          </svg>
                          Medical Approaches
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Hormone therapy (if appropriate)
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Antidepressants for mood symptoms
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Sleep medications (short-term)
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Anti-anxiety medications
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-5 rounded-lg">
                        <h4 className="text-lg font-medium text-flowPurple-dark flex items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
                            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                            <circle cx="17.5" cy="17.5" r="3.5"></circle>
                          </svg>
                          Psychological Support
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-flowPurple-dark mr-2">•</span> Cognitive behavioral therapy
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPurple-dark mr-2">•</span> Mindfulness-based interventions
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPurple-dark mr-2">•</span> Support groups
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPurple-dark mr-2">•</span> Individual psychotherapy
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-5 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 flex items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                          Lifestyle Approaches
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-gray-700 mr-2">•</span> Regular exercise
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-700 mr-2">•</span> Stress reduction techniques
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-700 mr-2">•</span> Sleep hygiene practices
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-700 mr-2">•</span> Anti-inflammatory diet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-flowPink-light/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Finding Meaning in Transition</h3>
                    <p className="text-gray-700 mb-4">
                      While menopause can bring challenges, many women also report positive psychological changes during this time:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark mr-2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Increased confidence and assertiveness
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark mr-2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Greater sense of freedom
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark mr-2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Renewed focus on personal goals
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark mr-2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Deeper wisdom and perspective
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Many cultures celebrate this transition as a time of increased wisdom and social status. Reframing menopause as a natural transition rather than solely a medical event can support mental wellbeing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="strategies" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Mental Wellbeing Strategies</CardTitle>
                  <CardDescription>
                    Practical approaches to support emotional balance throughout hormonal transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-flowPink-light/60 to-flowPink-light/20 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-flowPink-dark">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="22" y1="12" x2="18" y2="12"></line>
                            <line x1="6" y1="12" x2="2" y2="12"></line>
                            <line x1="12" y1="6" x2="12" y2="2"></line>
                            <line x1="12" y1="22" x2="12" y2="18"></line>
                          </svg>
                          Mindfulness & Stress Reduction
                        </h3>
                        <div className="space-y-4 text-gray-700">
                          <p className="italic">
                            "Mindfulness helps me stay grounded when my hormones are making me feel all over the place."
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Daily meditation practice (even 5-10 minutes)
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Deep breathing exercises during difficult moments
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Body scan practice for physical tension
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Mindful walking in nature
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> Yoga or tai chi for mind-body connection
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-flowPurple-light/60 to-flowPurple-light/20 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-flowPurple-dark">
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                          Tracking & Self-Awareness
                        </h3>
                        <div className="space-y-4 text-gray-700">
                          <p className="italic">
                            "Once I started tracking my cycle, I could prepare for the difficult days instead of being surprised by them."
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Use a cycle or symptom tracking app
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Keep a mood journal to identify patterns
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Note triggers that worsen symptoms
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Track sleep quality alongside hormonal changes
                            </li>
                            <li className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> Record what helps during difficult periods
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                            <path d="M9 12v6"></path>
                            <path d="M13 12v6"></path>
                            <path d="M14 7.5c-1 0-1.64.3-2.5 1.06-.86-.76-1.5-1.06-2.5-1.06-2.25 0-4 2-4 4.5 0 3.75 4 6.5 6.5 9.45 2.5-2.95 6.5-5.7 6.5-9.45 0-2.5-1.75-4.5-4-4.5Z"></path>
                          </svg>
                          Self-Compassion Practices
                        </h3>
                        <div className="space-y-4 text-gray-700">
                          <p className="italic">
                            "Learning to treat myself with kindness during hormonal shifts completely changed my experience."
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Challenge negative self-talk
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Treat yourself as you would a good friend
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Normalize your experiences through education
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Practice self-care without guilt
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Validate your feelings without judgment
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          Connection & Support
                        </h3>
                        <div className="space-y-4 text-gray-700">
                          <p className="italic">
                            "Finding a community of women going through the same thing made me feel so much less alone."
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Join in-person or online support groups
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Share experiences with trusted friends
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Communicate needs clearly with partners
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Find healthcare providers who listen
                            </li>
                            <li className="flex items-start">
                              <span className="text-gray-500 mr-2">•</span> Consider working with a therapist
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Lifestyle Foundations for Mental Wellbeing</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-medium text-flowPink-dark mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0Z"></path>
                            <circle cx="12" cy="8" r="2"></circle>
                          </svg>
                          Movement
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Regular exercise boosts mood-regulating neurotransmitters
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Aim for 30 minutes daily of enjoyable activity
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Try gentler forms during difficult days
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Dance, walk, swim, cycle, or garden
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-medium text-flowPink-dark mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                            <path d="M7 2v20"></path>
                            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                          </svg>
                          Nutrition
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Eat regular meals to stabilize blood sugar
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Include protein at each meal
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Reduce inflammatory foods
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Moderate alcohol and caffeine
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-medium text-flowPink-dark mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M6 19v-3"></path>
                            <path d="M10 19v-3"></path>
                            <path d="M14 19v-3"></path>
                            <path d="M18 19v-3"></path>
                            <path d="M8 11V9"></path>
                            <path d="M16 11V9"></path>
                            <path d="M12 11V9"></path>
                            <path d="M2 15h20"></path>
                            <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"></path>
                          </svg>
                          Sleep
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Prioritize consistent sleep schedule
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Create a calming bedtime routine
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Keep bedroom cool for hot flashes
                          </li>
                          <li className="flex items-start">
                            <span className="text-flowPink-dark mr-2">•</span> Limit screen time before bed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        When to Seek Professional Help
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 space-y-4">
                        <p>
                          While mood fluctuations are normal during hormonal transitions, some signs indicate a need for professional support:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span> Persistent feelings of hopelessness or emptiness
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span> Suicidal thoughts or preoccupation with death
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span> Inability to function in daily life or meet basic responsibilities
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span> Severe anxiety, panic attacks, or persistent worry
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span> Significant sleep disturbances lasting more than two weeks
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span> Withdrawal from loved ones and activities previously enjoyed
                          </li>
                        </ul>
                        <div className="p-4 bg-red-50 rounded-md text-gray-700 mt-4">
                          <p><span className="font-semibold">Remember:</span> Seeking help is a sign of strength, not weakness. Mental health challenges related to hormonal transitions are medical conditions that deserve proper treatment.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-flowPink-light rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-flowPink-dark text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">It's Not "All in Your Head"</h3>
                <p className="text-gray-600">
                  Hormonal changes create real physiological effects on brain chemistry and neurotransmitters that influence mood and cognition.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-flowPurple-light rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-flowPurple-dark text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Self-Awareness Is Empowering</h3>
                <p className="text-gray-600">
                  Understanding your unique patterns helps you prepare for challenges, optimize your wellbeing, and take charge of your hormonal health.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-flowPink-light rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-flowPink-dark text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Support Makes a Difference</h3>
                <p className="text-gray-600">
                  Whether from healthcare providers, loved ones, or community, appropriate support can transform your experience of hormonal transitions.
                </p>
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

export default MentalHealth;
