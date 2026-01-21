
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, RefreshCcw } from 'lucide-react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

interface AIConsultantProps {
  isWidget?: boolean;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ isWidget = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'Hello! I am the MLL Solution AI Advisor. How can I assist you with your business needs today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(messages, input);

    const aiMessage: Message = {
      role: 'model',
      text: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const resetChat = () => {
    setMessages([
      {
        role: 'model',
        text: 'Chat reset. How can I help you explore MLL Solution services?',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className={`flex flex-col h-full ${isWidget ? '' : 'max-w-4xl mx-auto pt-12 pb-12 px-4'}`}>
      {!isWidget && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Smart Business Advisor</h2>
          <p className="text-slate-500">Instant answers about our logistics and consulting services.</p>
        </div>
      )}

      <div className={`flex-1 flex flex-col bg-white overflow-hidden ${isWidget ? '' : 'glass-card rounded-3xl shadow-2xl border border-blue-100 min-h-[500px] max-h-[70vh]'}`}>
        {!isWidget && (
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-sm font-bold">MLL AI Assistant</p>
              </div>
            </div>
            <button onClick={resetChat} className="text-white/80 hover:text-white transition-colors">
              <RefreshCcw size={18} />
            </button>
          </div>
        )}

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  m.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-600 text-white'
                }`}>
                  {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Bot size={14} />
                </div>
                <div className="p-3 bg-white text-slate-400 rounded-2xl rounded-tl-none border border-slate-200">
                  <Loader2 className="animate-spin" size={16} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-3 bg-white border-t border-slate-100">
          <div className="relative flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 pl-4 pr-10 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
