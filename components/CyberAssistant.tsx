
import React, { useState, useRef, useEffect } from 'react';
import { Shield, Send, Terminal, X, MessageSquare } from 'lucide-react';
import { PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS } from '../constants';

const CyberAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    {
      role: 'assistant',
      text: "Secure handshake established. I am DEVX-CORE. I can provide data on Devam's Projects, Experience, Skills, Education, or Contact info. \n\nTry asking: 'Show me your projects', 'What are your skills?', or 'How can I hire you?'"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getSystemResponse = (userInput: string): string => {
    const text = userInput.toLowerCase();

    if (text.includes('project') || text.includes('build') || text.includes('portfolio') || text.includes('repo')) {
      return `REPOS_FOUND: ${PROJECTS.length} active deployments. Featured: ${PROJECTS[0].title}. You can view the source code for all projects on my GitHub (Devamstark).`;
    }

    if (text.includes('experience') || text.includes('work') || text.includes('job') || text.includes('history')) {
      const topExp = EXPERIENCES[0];
      return `HISTORY_LOG: Active. Most recent: ${topExp.role} at ${topExp.company} (${topExp.period}). Specialized in CDR/IPDR analysis and security monitoring.`;
    }

    if (text.includes('skill') || text.includes('stack') || text.includes('tech') || text.includes('know') || text.includes('proficien')) {
      return `COMPETENCY_MATRIX: \n• Cyber: ${SKILLS.cybersecurity.slice(0, 3).join(', ')}\n• Languages: ${SKILLS.languages.join(', ')}\n• Tools: ${SKILLS.tools.slice(0, 3).join(', ')}`;
    }

    if (text.includes('education') || text.includes('college') || text.includes('degree') || text.includes('school') || text.includes('study')) {
      return `ACADEMIC_RECORDS: Currently pursuing B.S. in Computer Science (Cyber Security) at ${EDUCATION[0].institution}. Graduation: ${EDUCATION[0].expected}.`;
    }

    if (text.includes('contact') || text.includes('hire') || text.includes('email') || text.includes('phone') || text.includes('call')) {
      return `COMM_CHANNELS: \n• Email: Devam9131@gmail.com\n• Phone: +1 (551) 344-9705\n• LinkedIn: linkedin.com/in/devamstark`;
    }

    if (text.includes('cert') || text.includes('award') || text.includes('credential')) {
      return `CREDENTIALS_FOUND: ${CERTIFICATIONS.length} industry certs. Top: ${CERTIFICATIONS[0].name}, ${CERTIFICATIONS[1].name}. High security clearance protocols followed.`;
    }

    if (text.includes('hi') || text.includes('hello') || text.includes('help') || text.includes('who')) {
      return `INTERFACE_READY. Query authorized. I can extract data on: PROJECTS, EXPERIENCE, SKILLS, EDUCATION, and CONTACT. What would you like to view?`;
    }

    return "QUERY_UNRECOGNIZED. Integrity check failed. Please use authorized keywords: [Projects, Experience, Skills, Education, Contact].";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      // Simulate processing delay for "hacker" feel
      await new Promise(resolve => setTimeout(resolve, 800));

      const response = getSystemResponse(userText);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "ERR: INTERNAL_CORE_FAILURE" }]);
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
                <div className={`max-w-[85%] p-3 rounded-lg whitespace-pre-wrap ${m.role === 'user'
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
                  <span className="animate-pulse">_extracting_data_packet_...</span>
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
              placeholder="Query DEVX-CORE... (e.g. 'Skills')"
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

