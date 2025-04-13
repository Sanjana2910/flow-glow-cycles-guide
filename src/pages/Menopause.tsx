
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Menopause = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Menopause</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive information about menopause, its stages, symptoms, and management strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="bg-flowPink-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-flowPink-dark text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Perimenopause</h3>
              <p className="text-gray-600">
                The transitional phase before menopause, usually starting in the 40s, with changing hormone levels and periods.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="bg-flowPink-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Menopause</h3>
              <p className="text-gray-600">
                Officially diagnosed after 12 months without a period, typically occurring around age 51.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="bg-flowPurple-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-flowPurple-dark text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Postmenopause</h3>
              <p className="text-gray-600">
                The years following menopause, when symptoms may ease but health considerations change.
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="symptoms" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="health">Health Impacts</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="symptoms" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Common Menopause Symptoms</CardTitle>
                  <CardDescription>
                    Menopause affects each woman differently. You may experience some, all, or none of these symptoms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-flowPink-dark mb-4">Physical Symptoms</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Hot Flashes</h4>
                            <p className="text-gray-600">Sudden feelings of warmth spreading through the body, often accompanied by sweating and flushing.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Night Sweats</h4>
                            <p className="text-gray-600">Hot flashes that occur during sleep, often disrupting sleep patterns.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Vaginal Dryness</h4>
                            <p className="text-gray-600">Reduced moisture and elasticity of vaginal tissues that can cause discomfort and affect sexual function.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Sleep Disturbances</h4>
                            <p className="text-gray-600">Difficulty falling asleep or staying asleep, often related to night sweats or other symptoms.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-flowPurple-dark mb-4">Emotional & Cognitive Symptoms</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Mood Changes</h4>
                            <p className="text-gray-600">Increased irritability, anxiety, or mood swings due to hormonal fluctuations.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Memory Changes</h4>
                            <p className="text-gray-600">Difficulty with memory or concentration, sometimes called "brain fog".</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Fatigue</h4>
                            <p className="text-gray-600">Feeling tired or lacking energy, often related to sleep disturbances or hormonal changes.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Changes in Libido</h4>
                            <p className="text-gray-600">Decreased interest in sex, often due to hormonal changes, vaginal dryness, or other symptoms.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h3>
                    <p className="text-gray-600">
                      The severity and duration of menopause symptoms vary widely among women. Some experience minimal disruption, while others have symptoms that significantly impact quality of life. If your symptoms are severe or concerning, consult a healthcare provider.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="management" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Managing Menopause</CardTitle>
                  <CardDescription>
                    Approaches to managing menopause symptoms and supporting health during this transition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-flowPink-dark mb-4">Lifestyle Approaches</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Regular Exercise</h4>
                            <p className="text-gray-600">Weight-bearing and aerobic exercise helps maintain bone density, manage weight, improve mood, and reduce hot flashes.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Balanced Diet</h4>
                            <p className="text-gray-600">Focus on whole foods rich in calcium, vitamin D, and phytoestrogens. Limit alcohol, caffeine, and spicy foods that can trigger hot flashes.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Stress Management</h4>
                            <p className="text-gray-600">Practices like yoga, meditation, and deep breathing can reduce stress and help manage symptoms.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Good Sleep Hygiene</h4>
                            <p className="text-gray-600">Maintain a cool bedroom, regular sleep schedule, and avoid screen time before bed to improve sleep quality.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-flowPurple-dark mb-4">Medical Approaches</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Hormone Therapy (HT)</h4>
                            <p className="text-gray-600">Can effectively treat many menopause symptoms when appropriate. Discuss risks and benefits with your healthcare provider.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Non-Hormonal Medications</h4>
                            <p className="text-gray-600">Various prescription medications can help manage specific symptoms like hot flashes, sleep disturbances, or mood changes.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Vaginal Treatments</h4>
                            <p className="text-gray-600">Low-dose vaginal estrogen, moisturizers, and lubricants can help with vaginal dryness and discomfort.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light p-2 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">Complementary Therapies</h4>
                            <p className="text-gray-600">Some women find relief with acupuncture, herbal supplements, or mind-body practices. Discuss with your healthcare provider first.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-flowPink-light/30 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Finding What Works For You</h3>
                    <p className="text-gray-700 mb-4">
                      There is no one-size-fits-all approach to managing menopause. What works best depends on:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPink-dark">•</span> Your specific symptoms and their severity
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPink-dark">•</span> Your personal health history and risk factors
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPink-dark">•</span> Your preferences and lifestyle
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPink-dark">•</span> Your response to different treatments
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Work with healthcare providers who listen to your concerns and help you find the approaches that best support your health and quality of life during this transition.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="health" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Health Considerations</CardTitle>
                  <CardDescription>
                    Long-term health impacts of menopause and preventive strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Bone Health</h3>
                        <p className="text-gray-600 mb-4">
                          Estrogen helps maintain bone density. After menopause, the rate of bone loss accelerates, increasing risk for osteoporosis and fractures.
                        </p>
                        <h4 className="font-medium text-gray-900 mb-2">Preventive Strategies:</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Regular weight-bearing exercise
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Adequate calcium and vitamin D intake
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Bone density screening as recommended
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Medications when appropriate
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-flowPink-dark mb-3">Heart Health</h3>
                        <p className="text-gray-600 mb-4">
                          Risk of cardiovascular disease increases after menopause due to changes in estrogen levels, cholesterol, and blood pressure.
                        </p>
                        <h4 className="font-medium text-gray-900 mb-2">Preventive Strategies:</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Regular cardiovascular exercise
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Heart-healthy diet (Mediterranean, DASH)
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Maintain healthy weight and blood pressure
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPink-dark">•</span> Avoid smoking and limit alcohol
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-flowPurple-dark mb-3">Urogenital Health</h3>
                        <p className="text-gray-600 mb-4">
                          Reduced estrogen can lead to changes in the urinary tract and vaginal tissues, causing dryness, urinary issues, and increased risk of infections.
                        </p>
                        <h4 className="font-medium text-gray-900 mb-2">Preventive Strategies:</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Pelvic floor exercises
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Vaginal moisturizers and lubricants
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Low-dose vaginal estrogen when appropriate
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Stay hydrated and maintain sexual activity
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-semibold text-flowPurple-dark mb-3">Metabolic Health</h3>
                        <p className="text-gray-600 mb-4">
                          Changes in body composition, fat distribution, and metabolism can increase risk for weight gain, insulin resistance, and metabolic syndrome.
                        </p>
                        <h4 className="font-medium text-gray-900 mb-2">Preventive Strategies:</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Regular physical activity, including strength training
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Balanced diet with adequate protein
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Maintain healthy sleep patterns
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-flowPurple-dark">•</span> Regular screening for diabetes and metabolic disorders
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-flowPurple-light/30 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Importance of Regular Check-ups</h3>
                    <p className="text-gray-700 mb-4">
                      After menopause, it's especially important to maintain regular health screenings and medical check-ups, including:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Bone density scans
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Mammograms
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Pap tests and pelvic exams
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Cholesterol and blood pressure checks
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Colorectal cancer screening
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Thyroid function tests
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about menopause and their answers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        How do I know if I'm in perimenopause?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p>Common signs of perimenopause include irregular periods, hot flashes, sleep disturbances, mood changes, and vaginal dryness. Perimenopause typically begins in your 40s but can start earlier. If you're experiencing these symptoms, tracking them and discussing with your healthcare provider can help determine if you're in perimenopause.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        How long do menopause symptoms last?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p>The duration of menopause symptoms varies widely. On average, women experience symptoms for 4-8 years, but some may have symptoms for just a few months while others may experience them for more than 10 years. Hot flashes typically improve within a few years after menopause, but vaginal symptoms may continue or worsen over time if not treated.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        Is hormone therapy safe?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p>Hormone therapy (HT) can be safe for many women, especially when used for a limited time and started within 10 years of menopause. The safety profile depends on your age, personal and family health history, and the specific type of hormone therapy. For women under 60 without contraindications, the benefits often outweigh the risks when used for moderate to severe symptoms. Always discuss your specific situation with your healthcare provider.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        Can I still get pregnant during perimenopause?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p>Yes, pregnancy is still possible during perimenopause as long as you're still having periods, even if they're irregular. Continue using contraception until you've gone 12 consecutive months without a period if you want to avoid pregnancy. Women over 40 have a lower chance of conceiving but a higher risk of pregnancy complications if they do become pregnant.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        Are there natural remedies for menopause symptoms?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p>Some women find relief with natural approaches like phytoestrogen-rich foods (soy, flaxseeds), herbal supplements (black cohosh, red clover), acupuncture, or mind-body practices (yoga, meditation). However, scientific evidence for many of these remedies is limited or mixed, and some may have safety concerns or interact with medications. Always discuss any supplements or alternative therapies with your healthcare provider before trying them.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-lg font-medium text-gray-900">
                        Will I gain weight during menopause?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p>Many women do experience weight gain around menopause, but it's not inevitable. Several factors contribute to midlife weight changes, including hormonal shifts that affect fat distribution, decreased muscle mass, reduced activity levels, and age-related metabolic changes. While you may need to adjust your diet and increase exercise to maintain your weight, healthy lifestyle habits can help prevent or minimize weight gain during this transition.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default Menopause;
