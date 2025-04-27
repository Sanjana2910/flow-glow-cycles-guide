
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Star } from "lucide-react";

interface Card {
  id: number;
  content: string;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Games = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [score, setScore] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const cardPairs = [
    { content: "Stay Hydrated", emoji: "💧" },
    { content: "Exercise Regularly", emoji: "🏃‍♀️" },
    { content: "Eat Well", emoji: "🥗" },
    { content: "Get Rest", emoji: "😴" },
    { content: "Track Cycle", emoji: "📱" },
    { content: "Stay Active", emoji: "⭐" },
  ];

  const initializeGame = () => {
    const gamePairs = [...cardPairs, ...cardPairs].map((pair, index) => ({
      id: index,
      content: index < cardPairs.length ? pair.content : pair.emoji,
      emoji: "",
      isFlipped: false,
      isMatched: false,
    })).sort(() => Math.random() - 0.5);

    setCards(gamePairs);
    setScore(0);
    setSelectedCard(null);
    setIsPlaying(true);
  };

  const handleCardClick = (id: number) => {
    if (!isPlaying || cards[id].isMatched || cards[id].isFlipped) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    if (selectedCard === null) {
      setSelectedCard(id);
    } else {
      const firstCard = cards[selectedCard];
      const secondCard = cards[id];

      if (
        (firstCard.content === secondCard.emoji) ||
        (firstCard.emoji === secondCard.content)
      ) {
        newCards[selectedCard].isMatched = true;
        newCards[id].isMatched = true;
        setScore(score + 1);
      } else {
        setTimeout(() => {
          newCards[selectedCard].isFlipped = false;
          newCards[id].isFlipped = false;
          setCards([...newCards]);
        }, 1000);
      }
      setSelectedCard(null);
    }
  };

  const isGameComplete = cards.length > 0 && cards.every(card => card.isMatched);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flowPink-light to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-flowPink-dark" />
              <h1 className="text-3xl font-bold text-gray-900">Match & Learn</h1>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-flowPurple-dark" />
              <span className="text-lg font-semibold">Matches: {score}</span>
            </div>
          </div>

          {!isPlaying && !isGameComplete && (
            <Card className="p-6 text-center mb-8">
              <h2 className="text-xl font-semibold mb-4">Ready to Play?</h2>
              <p className="text-gray-600 mb-6">Match the wellness tips with their emojis!</p>
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
              <h2 className="text-2xl font-bold mb-4">🎉 Well Done! 🎉</h2>
              <p className="text-lg mb-6">You've matched all the wellness tips!</p>
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
                className="aspect-[3/4] rounded-lg transition-all duration-300"
                disabled={!isPlaying || card.isMatched}
              >
                <div className={`w-full h-full relative bg-white rounded-lg shadow-lg p-4 flex items-center justify-center text-center transition-all duration-300 ${
                  card.isFlipped || card.isMatched ? 'bg-white' : 'bg-gradient-to-r from-flowPink-dark to-flowPurple-dark'
                }`}>
                  {(card.isFlipped || card.isMatched) ? (
                    <p className="text-xl font-medium">{card.content}</p>
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
