import React, { useState, useRef, useEffect } from 'react';
import { askPortfolio } from '../services/geminiService';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AskAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hi! I'm Mohammed's AI assistant. Ask me anything about his experience, skills, or projects!" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userText = query;
    setQuery('');
    setLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    // Get AI response
    const aiResponse = await askPortfolio(userText);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  const suggestions = [
    "What inspired your interest in AI?",
    "Tell me about the AWS outage recovery.",
    "What tech stack did you use for V-Chat?",
    "Explain your role at Experian."
  ];

  return (
    <section className="py-24 px-4 bg-[#FDFCF5]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-[#3E2723] mb-4 tracking-tight">Ask Me Anything.</h2>
          <p className="text-lg text-[#6D4C41]">A visionary engineer blending AI innovation with cloud expertise.</p>
        </div>

        <div className="bg-[#FFFDE7] rounded-3xl shadow-2xl border border-[#C5E1A5] overflow-hidden flex flex-col md:flex-row h-[600px]">
          
          {/* Left: Chat Area */}
          <div className="flex-1 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-[#556B2F] text-[#F1F8E9] rounded-br-none' 
                      : 'bg-[#FDFCF5] border border-[#C5E1A5] shadow-sm text-[#4E342E] rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#FDFCF5] border border-[#C5E1A5] p-4 rounded-2xl rounded-bl-none flex items-center space-x-2">
                    <Loader2 className="animate-spin text-[#6B8E23]" size={20} />
                    <span className="text-[#6D4C41] text-sm">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#F1F8E9] border-t border-[#C5E1A5]">
              <form onSubmit={handleAsk} className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question about Mohammed's work..."
                  className="w-full pl-6 pr-14 py-4 rounded-full bg-[#FDFCF5] focus:bg-white border-2 border-transparent focus:border-[#6B8E23] outline-none transition-all text-[#3E2723] placeholder:text-[#A1887F]"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="absolute right-2 top-2 p-2 bg-[#556B2F] text-white rounded-full hover:bg-[#334D2B] transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Right: Sidebar / Suggestions (Desktop) */}
          <div className="hidden md:flex w-72 bg-[#334D2B] text-[#F1F8E9] p-8 flex-col justify-center">
            <div className="mb-8">
              <Sparkles className="text-[#CDDC39] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">AI Powered</h3>
              <p className="text-[#C5E1A5] text-sm">Powered by Google Gemini 2.5 Flash. Ask specifically about projects or technical skills.</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#9CCC65] font-bold">Suggestions</p>
              {suggestions.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => {
                     setQuery(s);
                  }}
                  className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition-colors text-[#F1F8E9] flex items-center justify-between group"
                >
                  <span>{s}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskAI;