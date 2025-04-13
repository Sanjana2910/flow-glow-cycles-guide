
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ForMen = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPurple-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">For Men: Understanding Menstrual and Menopausal Health</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Educational resources to help men better understand, support, and communicate about menstrual and menopausal health.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Man providing support" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Understanding Matters</h2>
              <p className="text-lg text-gray-600">
                Menstrual and menopausal health affects the lives of women, which in turn affects their relationships, work, and daily activities. Understanding these natural processes helps men:
              </p>
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="text-flowPurple-dark mr-2">•</span> Be better partners, friends, colleagues, and family members
                </li>
                <li className="flex items-start">
                  <span className="text-flowPurple-dark mr-2">•</span> Provide appropriate support and empathy
                </li>
                <li className="flex items-start">
                  <span className="text-flowPurple-dark mr-2">•</span> Communicate effectively about health concerns
                </li>
                <li className="flex items-start">
                  <span className="text-flowPurple-dark mr-2">•</span> Help break down stigma and misconceptions
                </li>
              </ul>
            </div>
          </div>
          
          <Tabs defaultValue="basics" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="basics">The Basics</TabsTrigger>
              <TabsTrigger value="support">How to Support</TabsTrigger>
              <TabsTrigger value="communication">Communication Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding the Basics</CardTitle>
                  <CardDescription>
                    Essential information about menstruation and menopause that every man should know.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-flowPurple-dark mb-4">Menstrual Cycle Basics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">What is the menstrual cycle?</h4>
                        <p className="text-gray-600">
                          The menstrual cycle is a natural monthly process where the body prepares for potential pregnancy. If pregnancy doesn't occur, the uterine lining is shed through menstruation (a period).
                        </p>
                        
                        <h4 className="font-medium text-gray-900">How long is a typical cycle?</h4>
                        <p className="text-gray-600">
                          The average cycle is about 28 days, but anywhere from 21-35 days is normal. Cycles can vary from person to person and can be affected by stress, lifestyle, and health conditions.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">What physical symptoms are common?</h4>
                        <p className="text-gray-600">
                          Common physical symptoms include cramps, breast tenderness, bloating, headaches, fatigue, and back pain. Severity varies widely between individuals.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">What emotional changes can occur?</h4>
                        <p className="text-gray-600">
                          Hormonal fluctuations can cause mood changes, irritability, anxiety, or sadness before or during menstruation. These are real physiological responses, not character flaws.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">How much blood is actually lost?</h4>
                        <p className="text-gray-600">
                          The average blood loss during a period is only about 2-3 tablespoons, though it can sometimes seem like more. Heavy bleeding can lead to anemia and may require medical attention.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">Is pain normal?</h4>
                        <p className="text-gray-600">
                          Some discomfort is common, but severe pain that interferes with daily life isn't normal and could indicate conditions like endometriosis or fibroids that require medical care.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-flowPink-dark mb-4">Menopause Basics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">What is menopause?</h4>
                        <p className="text-gray-600">
                          Menopause is the natural end of menstrual cycles, defined as 12 consecutive months without a period. It typically occurs between ages 45-55, with the average age being 51.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">What is perimenopause?</h4>
                        <p className="text-gray-600">
                          Perimenopause is the transitional phase leading up to menopause, often starting in the 40s. It can last 4-8 years and involves fluctuating hormone levels and changing periods.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">What physical symptoms are common?</h4>
                        <p className="text-gray-600">
                          Common physical symptoms include hot flashes, night sweats, sleep disturbances, vaginal dryness, and changes in sexual function. Some women also experience joint pain and headaches.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">What emotional and cognitive changes can occur?</h4>
                        <p className="text-gray-600">
                          Women may experience mood fluctuations, irritability, anxiety, difficulty concentrating, and memory lapses. These are related to hormonal shifts and sleep disruption.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">How long do symptoms last?</h4>
                        <p className="text-gray-600">
                          Symptoms vary widely in duration. Some women experience them for just a few months, while others may have symptoms for 10+ years. Hot flashes typically improve within a few years after menopause.
                        </p>
                        
                        <h4 className="font-medium text-gray-900">Is menopause a medical condition that needs treatment?</h4>
                        <p className="text-gray-600">
                          Menopause is a natural life transition, not a disease. However, if symptoms significantly impact quality of life, various treatments are available to manage them.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Misconceptions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-900">Misconception:</span> Women should be able to "control" their emotions during their period.
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-900">Misconception:</span> Menstrual blood is dirty or contaminated.
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-900">Misconception:</span> Women can't or shouldn't be physically active during menstruation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-900">Misconception:</span> Menopause means the end of sexuality or femininity.
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-900">Misconception:</span> Hot flashes and mood changes are "all in your head" or exaggerated.
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-900">Misconception:</span> Women become emotionally unstable or incompetent during menopause.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>How to Be Supportive</CardTitle>
                  <CardDescription>
                    Practical ways to support the women in your life during menstruation and menopause.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-flowPurple-dark mb-1">Supporting During Menstruation</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-flowPurple-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Understand Individual Needs</h4>
                            <p className="text-gray-600">
                              Every woman's experience is different. Ask your partner, friend, or family member what helps them specifically during their period.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-flowPurple-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Practical Support</h4>
                            <p className="text-gray-600">
                              Offer a heating pad for cramps, pick up menstrual products if needed, help with household tasks, or prepare comfort foods. Small gestures can make a big difference.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-flowPurple-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Emotional Support</h4>
                            <p className="text-gray-600">
                              Listen without judgment, validate feelings, and avoid dismissing emotions as "just PMS." Be patient with mood changes and offer reassurance.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-flowPurple-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Normalize the Topic</h4>
                            <p className="text-gray-600">
                              Don't treat menstruation as taboo or embarrassing. Being matter-of-fact about periods helps reduce stigma and makes women more comfortable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-flowPink-dark mb-1">Supporting During Menopause</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Educate Yourself</h4>
                            <p className="text-gray-600">
                              Learn about the physical and emotional changes of menopause. Understanding what's happening biologically helps provide better support.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Be Patient With Symptoms</h4>
                            <p className="text-gray-600">
                              Hot flashes can be disruptive and uncomfortable. Be understanding about keeping the room cooler, having fans available, or pausing activities when needed.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Maintain Intimacy</h4>
                            <p className="text-gray-600">
                              Changes in libido and vaginal dryness can affect intimacy. Be open to adaptation, consider lubricants, and focus on other forms of connection and closeness.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Support Health Choices</h4>
                            <p className="text-gray-600">
                              Be supportive of decisions about treatment options, whether that's hormone therapy, alternative approaches, or lifestyle changes. Accompany her to medical appointments if invited.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">General Support Guidelines</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Avoid making jokes about hormones or dismissing concerns</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Don't assume all mood changes are hormone-related</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Be willing to adjust plans when symptoms are severe</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Ask how you can help rather than assuming</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Validate experiences without trying to "fix" everything</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Encourage healthy lifestyle habits that support well-being</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="communication" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Tips</CardTitle>
                  <CardDescription>
                    How to talk about menstrual and menopausal health in a respectful, supportive way.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Starting Conversations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-flowPink-light/30 p-5 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">With a Partner</h4>
                        <div className="space-y-3 text-gray-600">
                          <p><span className="font-medium">Do:</span> "I'd like to understand more about your cycle/menopause experience so I can be supportive. Would you be comfortable talking about that?"</p>
                          
                          <p><span className="font-medium">Don't:</span> "Are you on your period?" when someone expresses emotion or frustration.</p>
                          
                          <p><span className="font-medium">Do:</span> "I've been reading about menopause and would like to know what you're experiencing and how I can support you through this change."</p>
                          
                          <p><span className="font-medium">Don't:</span> Make jokes about hot flashes or mood swings.</p>
                        </div>
                      </div>
                      
                      <div className="bg-flowPurple-light/30 p-5 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">In the Workplace or Social Settings</h4>
                        <div className="space-y-3 text-gray-600">
                          <p><span className="font-medium">Do:</span> Normalize access to period products by keeping some available in restrooms or shared spaces.</p>
                          
                          <p><span className="font-medium">Don't:</span> Draw attention to someone who may be experiencing period discomfort or a hot flash in public.</p>
                          
                          <p><span className="font-medium">Do:</span> If someone mentions having cramps or menopausal symptoms, respond with empathy: "I'm sorry you're dealing with that. Can I help in any way?"</p>
                          
                          <p><span className="font-medium">Don't:</span> Use terms like "that time of the month" or make assumptions about someone's behavior based on hormones.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Language and Phrasing</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Instead of...
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Try...
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "Are you PMSing?"
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "You seem upset. Would you like to talk about what's bothering you?"
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "It's just a period, it can't be that bad."
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "I know periods can be uncomfortable. What helps when you're feeling this way?"
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "Feminine hygiene products"
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "Menstrual products" (periods aren't unhygienic)
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "Dealing with the change"
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "Going through menopause" or "experiencing menopause"
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              "She's crazy with her hormones"
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                              Understanding that hormonal fluctuations are real biological processes that can affect mood and well-being
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-flowPurple-dark mb-2">Listening Well</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Practice active listening without interrupting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Validate experiences: "That sounds really challenging"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Don't minimize concerns or compare experiences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPurple-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPurple-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Ask thoughtful follow-up questions to understand better</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-flowPink-dark mb-2">Encouraging Medical Support</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="bg-flowPink-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Validate that severe symptoms warrant medical attention</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Offer to accompany them to appointments if appropriate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Help research healthcare providers if needed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-flowPink-light rounded-full p-1 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>Support their treatment decisions without judgment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Being an Ally</h3>
                    <p className="text-gray-600 mb-4">
                      Beyond your personal relationships, you can help create a more supportive society by:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPurple-dark">•</span> Speaking up when you hear period or menopause jokes or stereotypes
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPurple-dark">•</span> Supporting workplace policies that accommodate menstrual and menopausal needs
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPurple-dark">•</span> Advocating for accessible and affordable menstrual products
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPurple-dark">•</span> Normalizing conversations about these topics with other men
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-flowPurple-dark">•</span> Educating the next generation of boys to be understanding and supportive
                      </li>
                    </ul>
                  </div>
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

export default ForMen;
