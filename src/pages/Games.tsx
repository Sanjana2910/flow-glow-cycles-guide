
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Puzzle } from "lucide-react";

const MemoryGame = () => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isShowingSequence, setIsShowingSequence] = useState(false);

  const colors = [
    "bg-flowPink-light",
    "bg-flowPink-dark",
    "bg-flowPurple-light",
    "bg-flowPurple-dark"
  ];

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    addToSequence();
  };

  const addToSequence = () => {
    const newNumber = Math.floor(Math.random() * 4);
    const newSequence = [...sequence, newNumber];
    setSequence(newSequence);
    showSequence(newSequence);
  };

  const showSequence = async (newSequence: number[]) => {
    setIsShowingSequence(true);
    setPlayerSequence([]);
    
    for (let i = 0; i < newSequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const button = document.getElementById(`button-${newSequence[i]}`);
      button?.classList.add('opacity-50');
      await new Promise(resolve => setTimeout(resolve, 500));
      button?.classList.remove('opacity-50');
    }
    
    setIsShowingSequence(false);
  };

  const handleButtonClick = (index: number) => {
    if (isShowingSequence) return;

    const newPlayerSequence = [...playerSequence, index];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setIsPlaying(false);
      setSequence([]);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1);
      setTimeout(() => {
        addToSequence();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Puzzle className="w-6 h-6 text-flowPink-dark" />
            <h1 className="text-3xl font-bold text-gray-900">Memory Game</h1>
          </div>

          <Card className="p-6">
            <div className="text-center mb-6">
              <p className="text-lg font-semibold mb-2">Score: {score}</p>
              {!isPlaying && (
                <Button
                  onClick={startGame}
                  className="bg-gradient-to-r from-flowPink-dark to-flowPurple-dark hover:from-flowPink-light hover:to-flowPurple-light"
                >
                  Start Game
                </Button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {colors.map((color, index) => (
                <button
                  key={index}
                  id={`button-${index}`}
                  onClick={() => handleButtonClick(index)}
                  disabled={!isPlaying || isShowingSequence}
                  className={`${color} w-full aspect-square rounded-lg transition-all hover:opacity-80 disabled:cursor-not-allowed`}
                />
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemoryGame;
