
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gamepad } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the average length of a menstrual cycle?",
    options: ["21 days", "28 days", "35 days", "40 days"],
    correctAnswer: "28 days"
  },
  {
    id: 2,
    question: "Which hormone triggers ovulation?",
    options: ["Estrogen", "Progesterone", "Luteinizing hormone", "Testosterone"],
    correctAnswer: "Luteinizing hormone"
  },
  {
    id: 3,
    question: "What is the typical length of the luteal phase?",
    options: ["10 days", "14 days", "18 days", "21 days"],
    correctAnswer: "14 days"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setShowScore(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Gamepad className="w-6 h-6 text-flowPink-dark" />
            <h1 className="text-3xl font-bold text-gray-900">Menstrual Health Quiz</h1>
          </div>

          <Card className="p-6">
            {showScore ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz Complete! 🎉</h2>
                <p className="text-lg mb-4">
                  You scored {score} out of {questions.length}
                </p>
                <Button 
                  onClick={handleRetry}
                  className="bg-gradient-to-r from-flowPink-dark to-flowPurple-dark hover:from-flowPink-light hover:to-flowPurple-light"
                >
                  Try Again
                </Button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                  <h2 className="text-xl font-semibold">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                <div className="space-y-3 mb-6">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedAnswer(option)}
                      className={`w-full p-3 text-left rounded-lg transition-colors ${
                        selectedAnswer === option
                          ? "bg-flowPink-light border-2 border-flowPink-dark"
                          : "bg-white border-2 border-gray-200 hover:border-flowPink-light"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={handleAnswerSubmit}
                  disabled={!selectedAnswer}
                  className="w-full bg-gradient-to-r from-flowPink-dark to-flowPurple-dark hover:from-flowPink-light hover:to-flowPurple-light"
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
