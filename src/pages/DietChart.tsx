
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DietChart = () => {
  const [ageGroup, setAgeGroup] = useState("18-35");
  const [dietType, setDietType] = useState("veg");

  const dietCharts = {
    "veg": {
      "13-17": {
        title: "Vegetarian Diet for Teenagers (13-17)",
        breakfast: [
          "Whole grain cereal with milk and fruits",
          "Vegetable omelette with whole grain toast",
          "Smoothie with yogurt, fruits, and nut butter"
        ],
        lunch: [
          "Bean and vegetable wrap with hummus",
          "Quinoa salad with roasted vegetables",
          "Lentil soup with whole grain bread"
        ],
        dinner: [
          "Stir-fried tofu with vegetables and brown rice",
          "Vegetable and chickpea curry with quinoa",
          "Bean and vegetable enchiladas"
        ],
        snacks: [
          "Greek yogurt with berries",
          "Apple slices with almond butter",
          "Trail mix with nuts and dried fruits"
        ],
        tips: [
          "Include iron-rich foods like spinach, lentils, and fortified cereals",
          "Ensure adequate protein from beans, tofu, nuts, and dairy",
          "Don't skip meals, especially during your period",
          "Stay hydrated with water and herbal teas"
        ],
        notes: "During menstruation, focus on iron-rich foods to replace lost iron. Include vitamin C-rich foods to enhance iron absorption."
      },
      "18-35": {
        title: "Vegetarian Diet for Young Adults (18-35)",
        breakfast: [
          "Overnight oats with chia seeds and berries",
          "Spinach and mushroom scrambled eggs with avocado toast",
          "Greek yogurt parfait with granola and fruits"
        ],
        lunch: [
          "Buddha bowl with quinoa, roasted vegetables, and tahini dressing",
          "Lentil and vegetable soup with whole grain crackers",
          "Mediterranean salad with chickpeas and feta"
        ],
        dinner: [
          "Black bean and sweet potato tacos",
          "Eggplant and lentil curry with brown rice",
          "Stuffed bell peppers with quinoa and vegetables"
        ],
        snacks: [
          "Hummus with carrot and cucumber sticks",
          "Mixed nuts and seeds",
          "Cottage cheese with fruit"
        ],
        tips: [
          "Include plenty of leafy greens for iron, calcium, and folate",
          "Combine plant proteins (beans with rice, hummus with bread) for complete protein",
          "Consider B12 supplementation if you don't consume dairy or eggs",
          "Include omega-3 rich foods like flaxseeds and walnuts"
        ],
        notes: "Focus on iron-rich foods before and during menstruation. Anti-inflammatory foods like turmeric and ginger can help with cramps and bloating."
      },
      "36-50": {
        title: "Vegetarian Diet for Adults (36-50)",
        breakfast: [
          "Vegetable frittata with side of fruit",
          "Steel-cut oats with nuts, seeds, and fresh fruit",
          "Avocado toast with sprouts and a side of yogurt"
        ],
        lunch: [
          "Grain bowl with roasted vegetables, beans, and tahini dressing",
          "Mediterranean mezze plate with hummus, falafel, and vegetables",
          "Spinach and lentil soup with whole grain roll"
        ],
        dinner: [
          "Vegetable and tofu stir-fry with brown rice",
          "Bean and vegetable chili with cornbread",
          "Stuffed portobello mushrooms with quinoa and vegetables"
        ],
        snacks: [
          "Nut butter with apple slices",
          "Edamame pods with sea salt",
          "Roasted chickpeas"
        ],
        tips: [
          "Include calcium-rich foods like fortified plant milks, tofu, and leafy greens",
          "Focus on fiber-rich foods for digestive health",
          "Include phytoestrogen-rich foods like soy and flaxseeds for hormonal balance",
          "Stay hydrated, especially during perimenopause"
        ],
        notes: "As perimenopause approaches, include more foods rich in calcium, magnesium, and B vitamins to support bone health and mood regulation."
      },
      "51+": {
        title: "Vegetarian Diet for Older Adults (51+)",
        breakfast: [
          "Calcium-fortified smoothie with fruits and chia seeds",
          "Whole grain toast with avocado and scrambled tofu",
          "Oatmeal with ground flaxseed, berries, and nuts"
        ],
        lunch: [
          "Hearty vegetable and bean soup with whole grain bread",
          "Quinoa salad with roasted vegetables and nuts",
          "Lentil and vegetable stuffed sweet potato"
        ],
        dinner: [
          "Tofu and vegetable curry with brown rice",
          "Bean and vegetable casserole",
          "Mushroom and lentil shepherd's pie"
        ],
        snacks: [
          "Homemade trail mix with nuts, seeds, and dried fruits",
          "Hummus with bell pepper strips",
          "Greek yogurt with honey and nuts"
        ],
        tips: [
          "Prioritize calcium and vitamin D for bone health",
          "Include plenty of fiber-rich foods for digestive health",
          "Consume adequate protein from varied plant sources",
          "Stay hydrated and limit caffeine and alcohol"
        ],
        notes: "Post-menopause, focus on heart health with plenty of fruits, vegetables, whole grains, and healthy fats. Consider vitamin B12, vitamin D, and calcium supplements if needed."
      }
    },
    "non-veg": {
      "13-17": {
        title: "Non-Vegetarian Diet for Teenagers (13-17)",
        breakfast: [
          "Scrambled eggs with whole grain toast and fruit",
          "Greek yogurt with granola and berries",
          "Whole grain pancakes with a side of turkey bacon"
        ],
        lunch: [
          "Grilled chicken wrap with vegetables",
          "Tuna salad sandwich on whole grain bread",
          "Turkey and vegetable soup with crackers"
        ],
        dinner: [
          "Baked salmon with sweet potato and steamed vegetables",
          "Lean beef stir-fry with vegetables and brown rice",
          "Grilled chicken with quinoa and roasted vegetables"
        ],
        snacks: [
          "Hard-boiled eggs",
          "Greek yogurt with fruit",
          "Apple slices with peanut butter"
        ],
        tips: [
          "Include iron-rich foods like lean red meat and chicken, especially during menstruation",
          "Ensure adequate protein from varied sources",
          "Include calcium-rich foods for bone development",
          "Stay hydrated and limit sugary drinks"
        ],
        notes: "During menstruation, iron-rich foods are particularly important. Include vitamin C with meals to enhance iron absorption."
      },
      "18-35": {
        title: "Non-Vegetarian Diet for Young Adults (18-35)",
        breakfast: [
          "Egg and vegetable omelette with whole grain toast",
          "Smoothie bowl with Greek yogurt, fruits, and nuts",
          "Avocado toast with poached eggs"
        ],
        lunch: [
          "Grilled chicken salad with mixed greens and vinaigrette",
          "Salmon wrap with vegetables and whole grain tortilla",
          "Turkey and avocado sandwich on whole grain bread"
        ],
        dinner: [
          "Baked cod with roasted vegetables and quinoa",
          "Lean beef stir-fry with brown rice",
          "Grilled chicken with sweet potato and steamed broccoli"
        ],
        snacks: [
          "Tuna with whole grain crackers",
          "Turkey slices with cheese",
          "Greek yogurt with berries"
        ],
        tips: [
          "Include fatty fish like salmon and mackerel for omega-3 fatty acids",
          "Choose lean proteins to avoid excessive saturated fat",
          "Include plenty of colorful vegetables with meals",
          "Stay hydrated and moderate alcohol consumption"
        ],
        notes: "During menstruation, increase iron-rich foods like lean red meat. Omega-3 fatty acids from fish can help reduce inflammation and period pain."
      },
      "36-50": {
        title: "Non-Vegetarian Diet for Adults (36-50)",
        breakfast: [
          "Protein smoothie with fruits and nut butter",
          "Eggs with sautéed vegetables and whole grain toast",
          "Greek yogurt parfait with fruits and nuts"
        ],
        lunch: [
          "Grilled chicken bowl with quinoa and roasted vegetables",
          "Tuna salad with mixed greens and olive oil dressing",
          "Turkey and vegetable soup with whole grain roll"
        ],
        dinner: [
          "Baked salmon with roasted asparagus and sweet potato",
          "Lean beef stir-fry with brown rice and vegetables",
          "Grilled chicken with Mediterranean vegetables and quinoa"
        ],
        snacks: [
          "Sardines on whole grain crackers",
          "Turkey and cheese roll-ups",
          "Hard-boiled eggs"
        ],
        tips: [
          "Include more fatty fish for omega-3s and heart health",
          "Focus on lean proteins and limit processed meats",
          "Include plenty of fiber from vegetables, fruits, and whole grains",
          "Consider bone health with calcium-rich foods"
        ],
        notes: "During perimenopause, focus on foods that support hormonal balance. Include plenty of anti-inflammatory foods and consider limiting foods that trigger hot flashes (like spicy foods, caffeine, and alcohol)."
      },
      "51+": {
        title: "Non-Vegetarian Diet for Older Adults (51+)",
        breakfast: [
          "Scrambled eggs with spinach and whole grain toast",
          "Greek yogurt with berries and ground flaxseed",
          "Smoked salmon with avocado on whole grain crackers"
        ],
        lunch: [
          "Chicken and vegetable soup with whole grain roll",
          "Tuna salad with mixed greens and olive oil dressing",
          "Turkey and avocado wrap with vegetables"
        ],
        dinner: [
          "Baked fish with roasted vegetables and quinoa",
          "Lean pork tenderloin with sweet potato and broccoli",
          "Chicken stew with vegetables and whole grain bread"
        ],
        snacks: [
          "Sardines or salmon on whole grain crackers",
          "Hard-boiled eggs",
          "Greek yogurt with nuts"
        ],
        tips: [
          "Prioritize protein to prevent muscle loss",
          "Include fatty fish regularly for omega-3s and heart health",
          "Focus on calcium and vitamin D for bone health",
          "Stay well-hydrated and limit alcohol"
        ],
        notes: "Post-menopause, focus on heart health, bone health, and maintaining muscle mass. Protein needs may increase with age, while calorie needs may decrease."
      }
    }
  };

  const currentDiet = dietCharts[dietType][ageGroup];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPurple-light/30 to-white">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Personalized Diet Charts</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover nutrition recommendations tailored to your age and dietary preferences to support your menstrual and overall health.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Customize Your Diet Plan</CardTitle>
                <CardDescription>
                  Select your age group and dietary preference to get personalized recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="age-group">Age Group</Label>
                    <Select value={ageGroup} onValueChange={setAgeGroup}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="13-17">Teenagers (13-17)</SelectItem>
                        <SelectItem value="18-35">Young Adults (18-35)</SelectItem>
                        <SelectItem value="36-50">Adults (36-50)</SelectItem>
                        <SelectItem value="51+">Older Adults (51+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Dietary Preference</Label>
                    <RadioGroup value={dietType} onValueChange={setDietType} className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="veg" id="veg" />
                        <Label htmlFor="veg">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-veg" id="non-veg" />
                        <Label htmlFor="non-veg">Non-Vegetarian</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardHeader className={`${dietType === 'veg' ? 'bg-flowPink-light/60' : 'bg-flowPurple-light/60'}`}>
                <CardTitle>{currentDiet.title}</CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  This diet plan is designed to support hormonal balance and overall health for your age group.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <span className={`mr-2 text-2xl ${dietType === 'veg' ? 'text-flowPink-dark' : 'text-flowPurple-dark'}`}>•</span>
                        Breakfast Options
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {currentDiet.breakfast.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">-</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <span className={`mr-2 text-2xl ${dietType === 'veg' ? 'text-flowPink-dark' : 'text-flowPurple-dark'}`}>•</span>
                        Lunch Options
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {currentDiet.lunch.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">-</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <span className={`mr-2 text-2xl ${dietType === 'veg' ? 'text-flowPink-dark' : 'text-flowPurple-dark'}`}>•</span>
                        Dinner Options
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {currentDiet.dinner.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">-</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <span className={`mr-2 text-2xl ${dietType === 'veg' ? 'text-flowPink-dark' : 'text-flowPurple-dark'}`}>•</span>
                        Healthy Snacks
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {currentDiet.snacks.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">-</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrition Tips</h3>
                  <ul className="space-y-2 text-gray-600">
                    {currentDiet.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`mr-2 text-lg ${dietType === 'veg' ? 'text-flowPink-dark' : 'text-flowPurple-dark'}`}>•</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Considerations</h3>
                  <p className="text-gray-600">{currentDiet.notes}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <SupportBot />
    </div>
  );
};

export default DietChart;
