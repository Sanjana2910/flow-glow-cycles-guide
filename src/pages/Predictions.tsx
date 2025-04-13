
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import CycleForm from "@/components/CycleForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Predictions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cycle Predictions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track and predict your menstrual cycle to better understand your body and plan ahead.
            </p>
          </div>
          
          <Tabs defaultValue="predict" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="predict">Predict My Cycle</TabsTrigger>
              <TabsTrigger value="learn">Understanding Predictions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="predict" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Enter Your Cycle Information</CardTitle>
                  <CardDescription>
                    Fill in the form below to get personalized cycle predictions. The more information you provide, the more accurate your prediction will be.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CycleForm />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="learn" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Your Cycle Predictions</CardTitle>
                  <CardDescription>
                    Learn what your predictions mean and how to use this information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-flowPink-dark">Next Period Date</h3>
                      <p className="text-gray-600">
                        This is an estimate of when your next period will start based on your average cycle length.
                        Remember that many factors can affect your cycle timing, including stress, illness, travel, and lifestyle changes.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-flowPurple-dark">Ovulation Date</h3>
                      <p className="text-gray-600">
                        Ovulation typically occurs about 14 days before your next period starts.
                        This is when an egg is released from your ovary and is available for fertilization.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-flowPink-dark">Fertile Window</h3>
                      <p className="text-gray-600">
                        This is the time when pregnancy is possible. It includes the 5 days before ovulation and the day of ovulation itself.
                        Sperm can survive in your body for up to 5 days, but an egg only lives for about 24 hours after ovulation.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-flowPurple-dark">PMS Symptoms</h3>
                      <p className="text-gray-600">
                        Premenstrual Syndrome symptoms typically begin 7-10 days before your period.
                        Symptoms can include mood changes, breast tenderness, bloating, fatigue, and food cravings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Use This Information</h3>
                    <ul className="space-y-3 text-gray-600 list-disc list-inside">
                      <li>Plan social events, travel, or important meetings with your cycle in mind</li>
                      <li>Prepare for potential PMS symptoms with self-care practices</li>
                      <li>Track fertility if you're trying to conceive or avoid pregnancy</li>
                      <li>Notice patterns in your mood, energy, and physical symptoms throughout your cycle</li>
                      <li>Identify irregular patterns that might warrant a discussion with your healthcare provider</li>
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

export default Predictions;
