import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const VirtualCodingCoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your Virtual Coding Coach. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isUser: true }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm a placeholder response. The AI functionality will be implemented later!", isUser: false }]);
      }, 1000);
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="ml-64 mt-16 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-hidden flex flex-col">
      <div className="bg-blue-600 p-4 text-white flex items-center">
        <Bot className="mr-2 h-6 w-6" />
        <h1 className="text-2xl font-bold">Virtual Coding Coach</h1>
      </div>
      
      <div className="flex-grow overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 p-3 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your coding question..."
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualCodingCoach;
