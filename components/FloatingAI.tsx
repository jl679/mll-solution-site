
import React, { useState } from 'react';
import { MessageSquare, X, Bot, ChevronDown } from 'lucide-react';
import AIConsultant from './AIConsultant';

const FloatingAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[450px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold text-sm">MLL AI Advisor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <AIConsultant isWidget={true} />
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-blue-600 text-white hover:scale-110'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default FloatingAI;
