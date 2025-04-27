
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad, Trophy } from "lucide-react";

const GamesQuizSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-flowPink-light flex items-center justify-center">
                <Trophy className="w-6 h-6 text-flowPink-dark" />
              </div>
              <h3 className="text-2xl font-bold">Test Your Knowledge</h3>
              <p className="text-gray-600">
                Challenge yourself with our menstrual health quiz and see how much you know!
              </p>
              <Button asChild className="bg-flowPink-dark hover:bg-flowPink-dark/90">
                <Link to="/quiz">Take the Quiz</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-flowPurple-light flex items-center justify-center">
                <Gamepad className="w-6 h-6 text-flowPurple-dark" />
              </div>
              <h3 className="text-2xl font-bold">Fun & Games</h3>
              <p className="text-gray-600">
                Enjoy our interactive memory game while learning about menstrual health.
              </p>
              <Button asChild className="bg-flowPurple-dark hover:bg-flowPurple-dark/90">
                <Link to="/games">Play Games</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GamesQuizSection;
