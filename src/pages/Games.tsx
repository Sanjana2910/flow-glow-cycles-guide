
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Star } from "lucide-react";

interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Games = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const cardContents = [
    "Did you know? The average menstrual cycle is 28 days long 🗓️",
    "Exercise can help reduce menstrual cramps 🏃‍♀️",
    "Menstruation typically lasts 3-7 days 📅",
    "Stay hydrated during your period 💧",
    "Iron-rich foods help during menstruation 🥬",
    "Track your cycle for better health awareness 📱",
    "PMS can affect mood and energy levels 🌙",
    "Regular exercise helps regulate cycles ⭐",
  ];

  const initializeGame = () => {
    const initialCards: Card[] = [...cardContents, ...cardContents].map((content, index) => ({
      id: index,
      content,
      isFlipped: false,
      isMatched: false,
    })).sort(() => Math.random() - 0.5);

    setCards(initialCards);
    setScore(0);
    setSelectedCards([]);
    setIsPlaying(true);
  };

  const handleCardClick = (id: number) => {
    if (!isPlaying || selectedCards.length >= 2 || cards[id].isMatched || cards[id].isFlipped) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    if (selectedCards.length === 0) {
      setSelectedCards([id]);
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      
      if (cards[firstCard].content === cards[secondCard].content) {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstCard].isMatched = true;
          newCards[secondCard].isMatched = true;
          setCards(newCards);
          setSelectedCards([]);
          setScore(score + 1);
        }, 500);
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstCard].isFlipped = false;
          newCards[secondCard].isFlipped = false;
          setCards(newCards);
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  const isGameComplete = cards.length > 0 && cards.every(card => card.isMatched);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-flowPink-dark" />
              <h1 className="text-3xl font-bold text-gray-900">Memory Match: Learn About Menstrual Health</h1>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-flowPurple-dark" />
              <span className="text-lg font-semibold">Matches: {score}</span>
            </div>
          </div>

          {!isPlaying && !isGameComplete && (
            <Card className="p-6 text-center mb-8">
              <h2 className="text-xl font-semibold mb-4">Ready to Learn While Having Fun?</h2>
              <p className="text-gray-600 mb-6">Match pairs of cards to learn interesting facts about menstrual health!</p>
              <Button
                onClick={initializeGame}
                className="bg-gradient-to-r from-flowPink-dark to-flowPurple-dark hover:opacity-90"
              >
                Start Game
              </Button>
            </Card>
          )}

          {isGameComplete && (
            <Card className="p-6 text-center mb-8 bg-gradient-to-r from-flowPink-light to-flowPurple-light">
              <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
              <p className="text-lg mb-6">You've matched all the cards and learned some valuable facts!</p>
              <Button
                onClick={initializeGame}
                className="bg-gradient-to-r from-flowPink-dark to-flowPurple-dark hover:opacity-90"
              >
                Play Again
              </Button>
            </Card>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-[3/4] rounded-lg transition-all duration-300 transform ${
                  card.isFlipped || card.isMatched
                    ? 'rotate-0'
                    : 'rotate-y-180'
                }`}
                disabled={!isPlaying || card.isMatched}
              >
                <div className={`w-full h-full relative ${
                  card.isFlipped || card.isMatched
                    ? 'bg-white'
                    : 'bg-gradient-to-r from-flowPink-dark to-flowPurple-dark'
                } rounded-lg shadow-lg p-4 flex items-center justify-center text-center transition-all duration-300`}>
                  {(card.isFlipped || card.isMatched) ? (
                    <p className="text-sm font-medium">{card.content}</p>
                  ) : (
                    <span className="text-3xl text-white">?</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
