
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const SupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      sender: "bot",
      message: "Dear, I'm here to chat and help relieve your stress. How are you feeling today?",
    },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to conversation
    setConversation([...conversation, { sender: "user", message }]);
    
    // Clear input
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "It's completely normal to feel that way. Remember to be kind to yourself during this time.",
        "I understand this can be challenging. Taking small steps for self-care can make a big difference.",
        "You're not alone in this journey. Many others share similar experiences.",
        "That's perfectly valid. Would you like some relaxation techniques that might help?",
        "Thank you for sharing. It takes courage to express how you're feeling.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setConversation(prev => [...prev, { sender: "bot", message: randomResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 bg-flowPink-dark hover:bg-flowPink-dark/90 text-white shadow-lg"
        >
          <MessageCircle size={24} />
        </Button>
      ) : (
        <Card className="w-80 h-96 flex flex-col shadow-lg animate-fade-in">
          <div className="bg-flowPink-dark p-3 text-white flex justify-between items-center rounded-t-lg">
            <h3 className="font-medium">Support Chat</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="h-8 w-8 text-white hover:bg-flowPink-dark/90"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === "user"
                      ? "bg-flowPink-dark text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-flowPink-dark hover:bg-flowPink-dark/90">
              <Send size={18} />
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default SupportBot;
