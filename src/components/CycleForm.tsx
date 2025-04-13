
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const CycleForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    lastCycleDate: "",
    flowIntensity: "",
    cycleLength: "",
    firstCycleAge: "",
    symptoms: [],
    regularCycle: "yes",
  });

  const [showResult, setShowResult] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculatePrediction = () => {
    // Simple prediction logic - in a real app this would be more sophisticated
    const lastCycleDate = new Date(formData.lastCycleDate);
    const cycleLength = parseInt(formData.cycleLength) || 28;
    
    const nextCycleDate = new Date(lastCycleDate);
    nextCycleDate.setDate(lastCycleDate.getDate() + cycleLength);
    
    const fertileStartDate = new Date(nextCycleDate);
    fertileStartDate.setDate(nextCycleDate.getDate() - 18);
    
    const fertileEndDate = new Date(nextCycleDate);
    fertileEndDate.setDate(nextCycleDate.getDate() - 11);
    
    const ovulationDate = new Date(nextCycleDate);
    ovulationDate.setDate(nextCycleDate.getDate() - 14);
    
    const pmsSymptomsDate = new Date(nextCycleDate);
    pmsSymptomsDate.setDate(nextCycleDate.getDate() - 7);
    
    return {
      nextCycleDate: nextCycleDate.toLocaleDateString(),
      fertileWindow: `${fertileStartDate.toLocaleDateString()} to ${fertileEndDate.toLocaleDateString()}`,
      ovulationDate: ovulationDate.toLocaleDateString(),
      pmsSymptomsStartDate: pmsSymptomsDate.toLocaleDateString(),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculatePrediction();
    setPrediction(result);
    setShowResult(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!showResult ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Enter your age"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="firstCycleAge">Age at First Cycle</Label>
              <Input
                id="firstCycleAge"
                name="firstCycleAge"
                type="number"
                value={formData.firstCycleAge}
                onChange={handleChange}
                required
                placeholder="Age when you had your first period"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="lastCycleDate">Last Cycle Start Date</Label>
              <div className="relative">
                <Input
                  id="lastCycleDate"
                  name="lastCycleDate"
                  type="date"
                  value={formData.lastCycleDate}
                  onChange={handleChange}
                  required
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="cycleLength">Average Cycle Length (days)</Label>
              <Input
                id="cycleLength"
                name="cycleLength"
                type="number"
                value={formData.cycleLength}
                onChange={handleChange}
                placeholder="e.g., 28"
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Flow Intensity</Label>
              <Select 
                value={formData.flowIntensity} 
                onValueChange={(value) => handleSelectChange("flowIntensity", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select flow intensity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="heavy">Heavy</SelectItem>
                  <SelectItem value="variable">Variable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Do you have a regular cycle?</Label>
              <RadioGroup 
                value={formData.regularCycle}
                onValueChange={(value) => handleRadioChange("regularCycle", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="regular-yes" />
                  <Label htmlFor="regular-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="regular-no" />
                  <Label htmlFor="regular-no">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sometimes" id="regular-sometimes" />
                  <Label htmlFor="regular-sometimes">Sometimes</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button type="submit" className="w-full bg-flowPink-dark hover:bg-flowPink-dark/90">
            Calculate Prediction
          </Button>
        </form>
      ) : (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-flowPink-dark">Your Cycle Prediction</CardTitle>
            <CardDescription>
              Based on the information you provided, here's what we predict for your next cycle.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-flowPink-light p-4 rounded-lg">
                <h3 className="font-medium text-gray-800">Next Period</h3>
                <p className="text-lg font-bold">{prediction.nextCycleDate}</p>
              </div>
              
              <div className="bg-flowPurple-light p-4 rounded-lg">
                <h3 className="font-medium text-gray-800">Ovulation Date</h3>
                <p className="text-lg font-bold">{prediction.ovulationDate}</p>
              </div>
              
              <div className="bg-flowPink-light p-4 rounded-lg">
                <h3 className="font-medium text-gray-800">Fertile Window</h3>
                <p className="text-lg font-bold">{prediction.fertileWindow}</p>
              </div>
              
              <div className="bg-flowPurple-light p-4 rounded-lg">
                <h3 className="font-medium text-gray-800">PMS Symptoms May Start</h3>
                <p className="text-lg font-bold">{prediction.pmsSymptomsStartDate}</p>
              </div>
            </div>
            
            <div className="pt-4 text-gray-600">
              <p className="text-sm">
                Note: These predictions are estimates based on averages. Your actual cycle may vary.
                For the most accurate predictions, continue logging your cycles regularly.
              </p>
            </div>
            
            <Button onClick={() => setShowResult(false)} className="w-full mt-4 bg-flowPink-dark hover:bg-flowPink-dark/90">
              Calculate Again
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CycleForm;
