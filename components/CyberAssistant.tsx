
import React, { useState, useRef, useEffect } from 'react';

import { Shield, Send, Terminal, X, MessageSquare } from 'lucide-react';

const CyberAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Secure handshake established. I am DEVX-CORE, Devam's Portfolio Interface. How can I assist you with security audits or recruitment inquiries today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const responses = [
        "Secure handshake established. Message encrypted and logged.",
        "Input received. Analysis complete. No threats detected.",
        "Request acknowledged. Operating in secure offline mode.",
        "Data packet verifying... Integrity check passed.",
        "System is currently in stealth mode. Please contact via secure channels (Email/LinkedIn)."
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', text: randomResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "ERR: SYSTEM_OFFLINE" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-black border border-blue-900/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl animate-in slide-in-from-bottom-5 font-mono">
          <div className="bg-blue-900/20 p-4 border-b border-blue-900/50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-xs font-bold text-blue-100 uppercase tracking-tighter">DEVX-CORE INTERFACE</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 text-[11px] leading-relaxed">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-gray-900 text-green-400 border border-green-900/30 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg border border-green-900/30">
                  <span className="animate-pulse">_analyzing_packet_...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-blue-900/50 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query DEVX-CORE..."
              className="flex-grow bg-gray-900 border border-blue-900/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 group relative"
        >
          <div className="absolute -top-12 right-0 bg-black border border-blue-900 p-2 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
            SECURE_COMMS_ACTIVE
          </div>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default CyberAssistant;
