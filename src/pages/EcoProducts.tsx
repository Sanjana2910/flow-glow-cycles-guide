import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const EcoProducts = () => {
  const menstrualProducts = [
    {
      name: "Menstrual Cups",
      image: "https://images.unsplash.com/photo-1620030669380-b5ab35bfe636?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Reusable silicone cups that collect menstrual flow. They can be worn for up to 12 hours and last for several years with proper care.",
      benefits: [
        "Significantly reduces waste compared to disposable products",
        "Cost-effective in the long run",
        "No risk of Toxic Shock Syndrome (TSS) when used properly",
        "Can be worn during exercise and swimming",
        "Available in different sizes and firmness levels"
      ],
      considerations: [
        "Initial learning curve for insertion and removal",
        "Higher upfront cost ($20-$40)",
        "Requires access to clean water for rinsing",
        "Not suitable for those uncomfortable with insertion"
      ],
      eco_impact: "High positive impact: One cup replaces thousands of disposable products over its lifetime."
    },
    {
      name: "Period Underwear",
      image: "https://images.unsplash.com/photo-1602810319250-a663f0af2f75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Absorbent, leak-proof underwear designed to be worn during menstruation without additional products. They can hold multiple tampons' worth of flow depending on the style.",
      benefits: [
        "Comfortable and feels like regular underwear",
        "No insertion required",
        "Good for overnight protection",
        "Available in various styles and absorbency levels",
        "Can be used as backup with other products"
      ],
      considerations: [
        "Requires multiple pairs for a full cycle",
        "Higher upfront investment ($20-$45 per pair)",
        "Needs rinsing soon after use",
        "May feel damp with heavy flow"
      ],
      eco_impact: "High positive impact: Lasts for 2+ years with proper care, replacing hundreds of disposable products."
    },
    {
      name: "Reusable Cloth Pads",
      image: "https://images.unsplash.com/photo-1624291672669-5cd8cdf77636?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Washable cloth pads made from absorbent fabrics like cotton, hemp, or bamboo. They attach to underwear with snaps or other fasteners.",
      benefits: [
        "Soft and comfortable against skin",
        "No insertion required",
        "Available in various sizes and absorbency levels",
        "Often made with organic materials",
        "Many cute designs and patterns available"
      ],
      considerations: [
        "Requires carrying used pads when changing away from home",
        "Needs washing after use",
        "May be bulkier than disposables",
        "Initial investment for multiple pads"
      ],
      eco_impact: "High positive impact: Can last 5+ years, replacing hundreds of disposable pads."
    },
    {
      name: "Biodegradable Tampons & Pads",
      image: "https://images.unsplash.com/photo-1565954787439-b0a0a5724a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Disposable products made from organic cotton and other biodegradable materials, without synthetic additives, plastic, or chemicals.",
      benefits: [
        "Familiar format with eco-friendly materials",
        "No washing required",
        "Free from chlorine, fragrance, and other irritants",
        "Reduces exposure to potentially harmful chemicals",
        "Widely available in stores and online"
      ],
      considerations: [
        "Still creates waste, though less harmful",
        "More expensive than conventional disposables",
        "Packaging may still contain plastic",
        "Biodegradability depends on disposal conditions"
      ],
      eco_impact: "Moderate positive impact: Better than conventional products but still creates waste."
    },
    {
      name: "Menstrual Discs",
      image: "https://images.unsplash.com/photo-1612273481523-9e70fd4bd842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Flexible discs that sit in the vaginal fornix (rather than the canal) and collect menstrual flow. Available in both reusable and disposable versions.",
      benefits: [
        "Can be worn for up to 12 hours",
        "Can be worn during intercourse",
        "Less likely to cause pressure on the bladder",
        "No suction like menstrual cups",
        "Some users report fewer cramps"
      ],
      considerations: [
        "Learning curve for insertion and removal",
        "May be messier to remove than cups",
        "Reusable versions have higher upfront cost",
        "Not as widely available as other options"
      ],
      eco_impact: "High positive impact for reusable versions; moderate for disposable versions."
    }
  ];

  const menopausalProducts = [
    {
      name: "Cooling Bedding & Sleepwear",
      image: "https://images.unsplash.com/photo-1592789705501-f9ae4287c449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Bedding and pajamas made from temperature-regulating fabrics like bamboo, eucalyptus lyocell, or specially designed cooling textiles to help manage night sweats.",
      benefits: [
        "Helps regulate body temperature during sleep",
        "Wicks moisture away from the body",
        "Improves sleep quality",
        "More sustainable materials than synthetic cooling fabrics",
        "Often biodegradable at end of life"
      ],
      considerations: [
        "Higher cost than conventional bedding",
        "May require special washing care",
        "Effectiveness varies by brand and material"
      ],
      eco_impact: "Moderate to high positive impact: Natural fibers like bamboo and eucalyptus are more sustainable than synthetics and last for years."
    },
    {
      name: "Plant-Based Supplements",
      image: "https://images.unsplash.com/photo-1595446459017-fc436d3caedd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Supplements derived from plants like black cohosh, red clover, or phytoestrogen-rich foods that may help manage menopausal symptoms through natural compounds.",
      benefits: [
        "Natural alternative to hormone therapy for some women",
        "May help with hot flashes and other symptoms",
        "Often available in plastic-free packaging",
        "Can be integrated with food-based approaches",
        "Many are certified organic"
      ],
      considerations: [
        "Scientific evidence varies by product",
        "May interact with medications",
        "Not regulated as strictly as pharmaceuticals",
        "Effects may take time to notice"
      ],
      eco_impact: "Moderate positive impact: Plant-based options with minimal processing and eco-friendly packaging have the lowest environmental footprint."
    },
    {
      name: "Natural Lubricants",
      image: "https://images.unsplash.com/photo-1614295371245-4c52e6ece5d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Vaginal moisturizers and lubricants made from plant-based ingredients without synthetic fragrances, parabens, or petrochemicals to address vaginal dryness.",
      benefits: [
        "Addresses common menopausal symptoms",
        "Free from potential irritants",
        "Available in plastic-free packaging options",
        "Water-based options are safer for vaginal health",
        "Many are pH balanced"
      ],
      considerations: [
        "May need more frequent application than synthetic options",
        "Higher cost than conventional products",
        "Check compatibility with condoms if relevant",
        "Some natural oils can disrupt vaginal pH"
      ],
      eco_impact: "Moderate positive impact: Look for organic ingredients and minimal, recyclable packaging."
    },
    {
      name: "Reusable Cooling Products",
      image: "https://images.unsplash.com/photo-1559702439-8bdaa97a2a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Reusable neck wraps, cooling scarves, and fans made from sustainable materials to help manage hot flashes without disposable products.",
      benefits: [
        "Immediate relief for hot flashes",
        "Reusable for years",
        "No waste from disposable cooling products",
        "Many are made from natural fibers",
        "Can be discreet and portable"
      ],
      considerations: [
        "May require refrigeration or soaking in water",
        "Initial cost higher than disposable options",
        "Some options more discreet than others",
        "Effectiveness varies by product"
      ],
      eco_impact: "High positive impact: Reusable products eliminate waste from disposable cooling options."
    },
    {
      name: "Plastic-Free Personal Care",
      image: "https://images.unsplash.com/photo-1602824343720-f7a5e6590d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Soaps, deodorants, and skincare products in plastic-free packaging designed for sensitive skin and changing skin needs during menopause.",
      benefits: [
        "Reduces plastic waste",
        "Often contains fewer synthetic ingredients",
        "Many options for dry or sensitive skin",
        "Support for small, ethical businesses",
        "Refillable options available"
      ],
      considerations: [
        "May be more expensive than conventional products",
        "Limited availability in some areas",
        "May have shorter shelf life without preservatives",
        "Effectiveness varies by product"
      ],
      eco_impact: "High positive impact: Eliminates plastic packaging waste and often contains more environmentally friendly ingredients."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Eco-Friendly Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover sustainable and body-safe products for menstrual and menopausal health that are better for you and the planet.
            </p>
          </div>
          
          {/* Hero Image for Products Page */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Sustainable products concept" 
              className="w-full h-80 object-cover rounded-2xl shadow-lg mx-auto"
            />
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Eco-Friendly Options?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-flowPink-dark flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                      <path d="M8 12h8"></path>
                      <path d="M12 16V8"></path>
                    </svg>
                    Environmental Impact
                  </h3>
                  <p className="text-gray-600">
                    The average person uses 11,000+ disposable menstrual products in their lifetime, generating significant plastic waste that takes hundreds of years to decompose.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-flowPink-dark flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Health Benefits
                  </h3>
                  <p className="text-gray-600">
                    Many conventional products contain chemicals, fragrances, and synthetic materials that can cause irritation or expose you to potentially harmful substances.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-flowPink-dark flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                    Comfort & Convenience
                  </h3>
                  <p className="text-gray-600">
                    Many eco-friendly options are designed with comfort in mind and can be more convenient—with longer wear times and less frequent changes needed.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-flowPink-dark flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M12 2v6.5l3 1.5"></path>
                      <path d="M9 8.5V7"></path>
                      <path d="M15 8.5V7"></path>
                      <path d="M12 10a4 4 0 0 0-4 4v8h8v-8a4 4 0 0 0-4-4z"></path>
                    </svg>
                    Cost Savings
                  </h3>
                  <p className="text-gray-600">
                    While reusable products have a higher upfront cost, they save money in the long run. The average person can save hundreds of dollars by switching to reusables.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-flowPurple-light/30 rounded-lg text-gray-700">
                <p><span className="font-semibold">Note:</span> When choosing products, consider your individual needs, lifestyle, and preferences. What works best varies from person to person.</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="menstrual" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="menstrual">Menstrual Products</TabsTrigger>
              <TabsTrigger value="menopausal">Menopausal Products</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menstrual" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menstrualProducts.map((product, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{product.name}</CardTitle>
                        <Badge className="bg-flowPink-dark hover:bg-flowPink-dark/90">Eco-Friendly</Badge>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Considerations</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {product.considerations.map((consideration, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> {consideration}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-flowPink-light/20 border-t border-flowPink-light/30">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Environmental Impact</h4>
                        <p className="text-sm text-gray-600">{product.eco_impact}</p>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="menopausal" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menopausalProducts.map((product, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{product.name}</CardTitle>
                        <Badge className="bg-flowPurple-dark hover:bg-flowPurple-dark/90">Eco-Friendly</Badge>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-flowPink-dark mr-2">•</span> {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Considerations</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {product.considerations.map((consideration, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-flowPurple-dark mr-2">•</span> {consideration}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-flowPurple-light/20 border-t border-flowPurple-light/30">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Environmental Impact</h4>
                        <p className="text-sm text-gray-600">{product.eco_impact}</p>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Making the Switch: Tips</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Start gradually</h3>
                  <p className="text-gray-600">
                    Try one eco-friendly product at a time rather than replacing everything at once. This gives you time to adjust and find what works best for you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Be patient with learning curves</h3>
                  <p className="text-gray-600">
                    Products like menstrual cups and discs may take a few cycles to get used to. Give yourself time to learn and don't give up after the first try.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Consider your lifestyle</h3>
                  <p className="text-gray-600">
                    Choose products that align with your daily activities. For example, period underwear might be great for home, while a cup might be better for travel or sports.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-flowPink-light rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flowPink-dark">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Follow care instructions</h3>
                  <p className="text-gray-600">
                    Proper maintenance extends the life of reusable products and ensures they remain safe to use. Always follow the manufacturer's cleaning and care instructions.
                  </p>
                </div>
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

export default EcoProducts;
